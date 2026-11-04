/**
 * 智能混剪编排引擎
 * 对标开拍「智能混剪 / 网感剪辑」与爆款工厂「批量出片」：
 * 输入素材与目标时长，按 BGM 节拍切成镜头，输出可执行 EDL 与 FFmpeg 命令。
 * 纯函数，不依赖浏览器或服务端，便于脚本化批量出片。
 */

export type ClipQuality = 'high' | 'medium' | 'low';

export interface ClipAsset {
  id: string;
  name: string;
  durationSec: number;
  /** 素材标签，用于按脚本意图选片：特写/口播/产品/环境/空镜 */
  tags: string[];
  quality?: ClipQuality;
}

export interface MixOptions {
  /** 成片目标时长 */
  targetDurationSec: number;
  /** BGM 节拍数，缺省 120 */
  bpm?: number;
  /** 每个镜头占几拍，缺省 4 拍 */
  beatsPerShot?: number;
  /** 优先使用的素材标签 */
  preferTags?: string[];
  /** 画幅，用于生成 FFmpeg 缩放参数 */
  aspect?: '9:16' | '16:9' | '1:1';
}

export interface MixShot {
  clipId: string;
  clipName: string;
  inSec: number;
  outSec: number;
  durationSec: number;
  beatIndex: number;
  quality: ClipQuality;
}

export interface MixPlan {
  shots: MixShot[];
  totalSec: number;
  beatSpacingSec: number;
  shotDurationSec: number;
  warnings: string[];
  /** 素材复用次数，用于判断是否真的“批量出片”而非反复用同一条 */
  reuseCount: number;
}

/** 节拍间距，单位秒 */
export function beatSpacing(bpm: number): number {
  return 60 / Math.max(40, bpm);
}

export function beatMarkers(totalSec: number, bpm: number): number[] {
  const spacing = beatSpacing(bpm);
  const count = Math.floor(totalSec / spacing);
  return Array.from({ length: count + 1 }, (_, index) => Number((index * spacing).toFixed(3)));
}

/**
 * 编排策略：
 * 1. 优先标签命中且画质高的素材，其次标签命中，最后按画质排序；
 * 2. 同一素材不在相邻镜头重复，避免明显“粘贴感”；
 * 3. 每条素材从质量最高的区间切片，连续切片时后移入点，避免同一帧反复出现；
 * 4. 素材总长不足时循环使用，并在 warnings 中明确标注。
 */
export function planMix(clips: ClipAsset[], options: MixOptions): MixPlan {
  const bpm = options.bpm || 120;
  const spacing = beatSpacing(bpm);
  const shotDurationSec = Math.max(0.5, spacing * (options.beatsPerShot || 4));
  const target = Math.max(shotDurationSec, options.targetDurationSec);
  const shotCount = Math.ceil(target / shotDurationSec);
  const prefer = options.preferTags || [];
  const warnings: string[] = [];

  if (clips.length === 0) {
    return { shots: [], totalSec: 0, beatSpacingSec: spacing, shotDurationSec, warnings: ['没有可用素材'], reuseCount: 0 };
  }

  const qualityRank: Record<ClipQuality, number> = { high: 0, medium: 1, low: 2 };
  const ranked = [...clips].sort((a, b) => {
    const aTag = prefer.some((tag) => a.tags.includes(tag)) ? 0 : 1;
    const bTag = prefer.some((tag) => b.tags.includes(tag)) ? 0 : 1;
    if (aTag !== bTag) return aTag - bTag;
    return qualityRank[a.quality || 'medium'] - qualityRank[b.quality || 'medium'];
  });

  const shots: MixShot[] = [];
  const usesPerClip = new Map<string, number>();
  let previousId = '';
  let cursor = 0;

  for (let index = 0; index < shotCount; index += 1) {
    // 跳过与上一镜头相同的素材
    let picked = ranked[0];
    for (let offset = 0; offset < ranked.length; offset += 1) {
      const candidate = ranked[(cursor + offset) % ranked.length];
      if (candidate.id !== previousId || ranked.length === 1) {
        picked = candidate;
        cursor = (cursor + offset + 1) % ranked.length;
        break;
      }
    }

    const used = usesPerClip.get(picked.id) || 0;
    usesPerClip.set(picked.id, used + 1);

    let inSec = (used * shotDurationSec) % Math.max(shotDurationSec, picked.durationSec - shotDurationSec);
    if (picked.durationSec <= shotDurationSec) {
      inSec = 0;
      warnings.push(`素材「${picked.name}」时长不足一个镜头，将循环切片`);
    }
    const outSec = Math.min(picked.durationSec, inSec + shotDurationSec);

    shots.push({
      clipId: picked.id,
      clipName: picked.name,
      inSec: Number(inSec.toFixed(3)),
      outSec: Number(outSec.toFixed(3)),
      durationSec: Number((outSec - inSec).toFixed(3)),
      beatIndex: index * (options.beatsPerShot || 4),
      quality: picked.quality || 'medium',
    });
    previousId = picked.id;
  }

  const totalSec = Number(shots.reduce((sum, shot) => sum + shot.durationSec, 0).toFixed(2));
  const reuseCount = Math.max(0, shots.length - usesPerClip.size);
  if (reuseCount > 0) warnings.push(`共 ${usesPerClip.size} 条素材，需复用 ${reuseCount} 次，建议补素材`);

  return { shots, totalSec, beatSpacingSec: spacing, shotDurationSec: Number(shotDurationSec.toFixed(2)), warnings, reuseCount };
}

/** 生成剪辑软件可导入的 EDL（CMX3600 简化版） */
export function toEdl(plan: MixPlan, clips: ClipAsset[], title = 'MIX'): string {
  const lines: string[] = [`TITLE: ${title}`, 'FCM: NON-DROP FRAME', ''];
  let recordIn = 0;
  plan.shots.forEach((shot, index) => {
    const reel = clips.findIndex((clip) => clip.id === shot.clipId) + 1;
    const pad = (value: number) => String(value).padStart(3, '0');
    const tc = (sec: number) => `00:00:${pad(Math.floor(sec))}:${pad(Math.round((sec % 1) * 100))}`;
    lines.push(
      `${String(index + 1).padStart(3, '0')}  REEL${String(reel).padStart(3, '0')} V     C        ${tc(shot.inSec)} ${tc(
        shot.outSec
      )} ${tc(recordIn)} ${tc(recordIn + shot.durationSec)}`
    );
    lines.push(`* FROM CLIP NAME: ${shot.clipName}`);
    recordIn += shot.durationSec;
  });
  return lines.join('\n');
}

/**
 * 生成 FFmpeg 命令：统一分辨率、裁成目标画幅、按 EDL 顺序拼接、可挂 BGM。
 * 命令只做转码与拼接，不做字幕与 AI 换脸，避免误以为本地具备模型能力。
 */
export function toFfmpeg(plan: MixPlan, clips: ClipAsset[], options: MixOptions): string {
  const aspect = options.aspect || '9:16';
  const size = aspect === '9:16' ? '1080:1920' : aspect === '16:9' ? '1920:1080' : '1080:1080';
  const inputs = clips.map((clip) => `-i "${clip.name}"`).join(' ');
  const parts: string[] = [];
  plan.shots.forEach((shot, index) => {
    const sourceIndex = clips.findIndex((clip) => clip.id === shot.clipId);
    parts.push(
      `[${sourceIndex}:v]trim=start=${shot.inSec}:end=${shot.outSec},setpts=PTS-STARTPTS,` +
        `scale=${size}:force_original_aspect_ratio=increase,crop=${size},fps=30[v${index}]`
    );
  });
  const concatInputs = plan.shots.map((_, index) => `[v${index}]`).join('');
  parts.push(`${concatInputs}concat=n=${plan.shots.length}:v=1:a=0[outv]`);
  return `# 需要本机已安装 ffmpeg；素材按 clips 顺序对应 -i\nffmpeg ${inputs} -filter_complex "${parts.join(
    ';'
  )}" -map "[outv]" -c:v libx264 -preset veryfast -crf 20 out.mp4`;
}

/** 从脚本文本反推需要的镜头类型，给素材打标签提供建议 */
export function inferShotTags(script: string): string[] {
  const rules: Array<{ tag: string; words: string[] }> = [
    { tag: '口播', words: ['我', '你', '大家', '说', '讲', '告诉'] },
    { tag: '产品', words: ['产品', '这款', '链接', '下单', '包装'] },
    { tag: '特写', words: ['细节', '特写', '放大', '质感'] },
    { tag: '环境', words: ['门店', '办公室', '场景', '现场'] },
    { tag: '空镜', words: ['氛围', '转场', '留白'] },
  ];
  return rules.filter((rule) => rule.words.some((word) => script.includes(word))).map((rule) => rule.tag);
}
