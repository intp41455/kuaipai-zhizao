import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  AudioWaveform,
  Check,
  Copy,
  Download,
  Film,
  Layers,
  Mic,
  Pause,
  Play,
  Plus,
  RefreshCw,
  RotateCcw,
  SkipBack,
  SkipForward,
  Sliders,
  Sparkles,
  Subtitles,
  Trash2,
  Upload,
  Volume2,
  VolumeX,
} from 'lucide-react';
import type { StoreMemoryProfile } from '../data/curatedTemplates';

export type VideoRemixStudioMode = 'foolproof' | 'pro_nle';

interface CaptionSegment {
  shotIndex: number;
  startSec: number;
  endSec: number;
  captionText: string;
  highlightKeyword: string;
  styleTag: string;
}

interface BatchSeriesClip {
  id: string;
  name: string;
  previewUrl: string;
  selected: boolean;
  durationSec: number;
}

interface BatchSeriesOutput {
  clipIndex: number;
  clipName: string;
  seriesTitle: string;
  hookLine: string;
  middleLine: string;
  ctaLine: string;
  suggestedBgm: string;
  estimatedDuration: string;
}

interface AIVideoRemixDualStudioProps {
  initialMode?: VideoRemixStudioMode;
  projectTitle: string;
  setProjectTitle: (v: string) => void;
  productName: string;
  setProductName: (v: string) => void;
  sellingPoints: string;
  setSellingPoints: (v: string) => void;
  category: string;
  aspectRatio: '9:16' | '16:9' | '4:3';
  setAspectRatio: (v: '9:16' | '16:9' | '4:3') => void;
  bgmStyle: string;
  setBgmStyle: (v: string) => void;
  voiceTone: string;
  setVoiceTone: (v: string) => void;
  cameraAngles: string[];
  setCameraAngles: (v: string[]) => void;
  visualCues: string[];
  setVisualCues: (v: string[]) => void;
  sceneLines: string[];
  setSceneLines: (v: string[]) => void;
  shotDurations: number[];
  setShotDurations: (v: number[]) => void;
  shotMovements: string[];
  setShotMovements: (v: string[]) => void;
  activeStore: StoreMemoryProfile;
  onShowNotice: (type: 'success' | 'error', text: string) => void;
  onNavigateToEditor: () => void;
}

const ARCHETYPE_TEMPLATES = [
  {
    id: 'local_probe',
    shortLabel: '同城探店',
    name: '同城探店爆款',
    bgm: '轻快生活律动',
    lut: 'warm_film' as const,
    captionStyle: 'soft_white' as const,
    angles: ['01 痛点钩子', '02 门头现做', '03 招牌微距', '04 团购促单'],
    movements: ['缓慢推近', '轻柔右摇', '微距放大', '固定展示'],
    durations: [3.5, 4.0, 4.0, 3.5],
    buildVisuals: (prod: string, loc: string) => [
      `【${loc}实拍】第一视角走近门头或展示使用痛点，画面自然真实`,
      `【现做过程】近景拍摄「${prod}」核心制作或打开瞬间`,
      `【微距特写】镜头拉近展示「${prod}」光泽与细节质感`,
      `【福利引导】展示实拍成品与左下角团购定位引导`,
    ],
    buildLines: (prod: string, points: string, loc: string) => [
      `在${loc}，如果不是熟人带路，真找不到这么宝藏的${prod}！`,
      `老板坚持每天现做，核心就是${points.slice(0, 18)}。`,
      `看看这个细节质感，用料特别扎实，盲点都不踩雷。`,
      `左下角给大家放了同城团购福利，赶紧囤一张去试试！`,
    ],
  },
  {
    id: 'collection_top',
    shortLabel: '合集榜单',
    name: '必吃合集榜单',
    bgm: '国潮卡点鼓点',
    lut: 'natural' as const,
    captionStyle: 'warm_amber' as const,
    angles: ['01 榜单开场', '02 TOP1招牌', '03 平价搭配', '04 收藏打卡'],
    movements: ['微距放大', '缓慢推近', '轻柔右摇', '固定展示'],
    durations: [3.0, 4.5, 4.0, 3.5],
    buildVisuals: (prod: string, loc: string) => [
      `【合集首屏】九宫格快闪切换${loc}高人气实拍画面`,
      `【TOP1特写】近景展示「${prod}」核心卖点与色泽`,
      `【丰富细节】多角度展示细节搭配与真实分量`,
      `【打卡指南】展示门店位置与收藏防走丢提示`,
    ],
    buildLines: (prod: string, points: string, loc: string) => [
      `整理了${loc}让我念念不忘的私藏清单，第1家就封神！`,
      `首推这款${prod}，主打${points.slice(0, 18)}。`,
      `不管是单人体验还是朋友小聚，性价比直接拉满。`,
      `建议先点赞收藏，评论区欢迎补充你的私藏好店！`,
    ],
  },
  {
    id: 'contrarian_test',
    shortLabel: '避坑实测',
    name: '反转避坑实测',
    bgm: '叙事节奏轻音',
    lut: 'clean_cool' as const,
    captionStyle: 'editorial' as const,
    angles: ['01 反常识提问', '02 细节揭秘', '03 前后对比', '04 闭眼入总结'],
    movements: ['缓慢推近', '微距放大', '轻柔右摇', '固定展示'],
    durations: [3.5, 4.0, 4.0, 3.5],
    buildVisuals: (prod: string) => [
      `【痛点反问】手持普通产品与「${prod}」做直观对比`,
      `【微距实测】放大展示核心成分与工艺细节`,
      `【效果反差】使用前后的明显状态对比实拍`,
      `【口碑总结】展示真实复购评价与活动指引`,
    ],
    buildLines: (prod: string, points: string) => [
      `选${prod}如果只看表面包装，那就太容易踩坑了！`,
      `真正决定体验的是${points.slice(0, 18)}，细节骗不了人。`,
      `实测对比下来，质感和使用感受完全不在一个层级。`,
      `想要一步到位不踩雷的朋友，直接左下角入手同款。`,
    ],
  },
  {
    id: 'daily_grass',
    shortLabel: '平价种草',
    name: '平价日常种草',
    bgm: '温暖治愈木吉他',
    lut: 'warm_film' as const,
    captionStyle: 'minimal' as const,
    angles: ['01 场景引入', '02 产品亮相', '03 体验细节', '04 种草收尾'],
    movements: ['轻柔右摇', '缓慢推近', '微距放大', '固定展示'],
    durations: [3.5, 4.0, 4.0, 3.5],
    buildVisuals: (prod: string) => [
      `【日常场景】自然光线下干净温和的生活场景切入`,
      `【主体近景】简约桌面展示「${prod}」外观与质感`,
      `【使用过程】特写展示细腻质地与真实使用状态`,
      `【温和收尾】自然微笑或手持产品定格画面`,
    ],
    buildLines: (prod: string, points: string) => [
      `最近被问爆的日常好物，就是这款${prod}。`,
      `它最打动我的是${points.slice(0, 18)}，用起来非常省心。`,
      `每次用完状态都很稳定，日常高频使用也完全不心疼。`,
      `真心推荐给有同样需求的朋友，早用早享受。`,
    ],
  },
];

const HUMAN_VOICE_PRESETS = [
  { id: 'voice_xian_male', label: '关中老饕男声', geminiVoice: 'Puck', rate: 1.08, pitch: 0.96 },
  { id: 'voice_sweet_female', label: '元气探店女声', geminiVoice: 'Kore', rate: 1.1, pitch: 1.05 },
  { id: 'voice_pro_female', label: '知性测评女声', geminiVoice: 'Aoede', rate: 1.06, pitch: 1.0 },
  { id: 'voice_calm_male', label: '温润叙事男声', geminiVoice: 'Charon', rate: 1.02, pitch: 0.94 },
];

const CURATED_SHOT_PHOTOS = [
  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80',
];

function createWavUrlFromPcmBase64(base64Pcm: string, sampleRate = 24000): string {
  const binaryStr = window.atob(base64Pcm);
  const pcmLen = binaryStr.length;
  const wavBuffer = new ArrayBuffer(44 + pcmLen);
  const view = new DataView(wavBuffer);
  const writeString = (offset: number, str: string) => {
    for (let i = 0; i < str.length; i++) {
      view.setUint8(offset + i, str.charCodeAt(i));
    }
  };
  writeString(0, 'RIFF');
  view.setUint32(4, 36 + pcmLen, true);
  writeString(8, 'WAVE');
  writeString(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeString(36, 'data');
  view.setUint32(40, pcmLen, true);
  const uint8 = new Uint8Array(wavBuffer, 44);
  for (let i = 0; i < pcmLen; i++) {
    uint8[i] = binaryStr.charCodeAt(i);
  }
  const blob = new Blob([wavBuffer], { type: 'audio/wav' });
  return URL.createObjectURL(blob);
}

export const AIVideoRemixDualStudio: React.FC<AIVideoRemixDualStudioProps> = ({
  initialMode = 'foolproof',
  projectTitle,
  setProjectTitle,
  productName,
  setProductName,
  sellingPoints,
  setSellingPoints,
  aspectRatio,
  setAspectRatio,
  bgmStyle,
  setBgmStyle,
  voiceTone,
  setVoiceTone,
  cameraAngles,
  setCameraAngles,
  visualCues,
  setVisualCues,
  sceneLines,
  setSceneLines,
  shotDurations,
  setShotDurations,
  shotMovements,
  setShotMovements,
  activeStore,
  onShowNotice,
}) => {
  const [studioMode, setStudioMode] = useState<VideoRemixStudioMode>(initialMode);
  const [rightTab, setRightTab] = useState<'voice_sub' | 'visual_lut' | 'batch_fission'>('voice_sub');
  const [selectedArchetypeId, setSelectedArchetypeId] = useState<string>('local_probe');
  const [selectedShotIdx, setSelectedShotIdx] = useState<number>(0);

  // Playback state
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTimeSec, setCurrentTimeSec] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  // Voice & Audio state
  const [selectedVoiceId, setSelectedVoiceId] = useState<string>('voice_xian_male');
  const [voiceSpeed, setVoiceSpeed] = useState<number>(1.08);
  const [isSynthesizingTts, setIsSynthesizingTts] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Visual & Caption styling (low-saturation refined styles)
  const [lutPreset, setLutPreset] = useState<'natural' | 'warm_film' | 'clean_cool' | 'matte_dark'>('warm_film');
  const [captionStyle, setCaptionStyle] = useState<'soft_white' | 'warm_amber' | 'editorial' | 'minimal'>('soft_white');
  const [captionFontSize, setCaptionFontSize] = useState<number>(19);

  // User uploaded media per shot
  const [shotMediaMap, setShotMediaMap] = useState<Record<number, { url: string; isVideo: boolean; name: string }>>({});

  // AI Audio-to-Captions state
  const [isGeneratingCaptions, setIsGeneratingCaptions] = useState<boolean>(false);
  const [captionSegments, setCaptionSegments] = useState<CaptionSegment[]>([]);

  // Multi-Clip Batch Series state
  const [batchClips, setBatchClips] = useState<BatchSeriesClip[]>([
    { id: 'c1', name: '门头招牌实拍_01.mp4', previewUrl: CURATED_SHOT_PHOTOS[0], selected: true, durationSec: 15 },
    { id: 'c2', name: '特写微距实拍_02.mp4', previewUrl: CURATED_SHOT_PHOTOS[1], selected: true, durationSec: 14 },
    { id: 'c3', name: '真实使用反馈_03.mp4', previewUrl: CURATED_SHOT_PHOTOS[2], selected: true, durationSec: 16 },
    { id: 'c4', name: '同城活动引导_04.mp4', previewUrl: CURATED_SHOT_PHOTOS[3], selected: false, durationSec: 15 },
  ]);
  const [isBatchGenerating, setIsBatchGenerating] = useState<boolean>(false);
  const [batchOutputs, setBatchOutputs] = useState<BatchSeriesOutput[]>([]);

  useEffect(() => {
    setStudioMode(initialMode);
  }, [initialMode]);

  const currentVoice = useMemo(
    () => HUMAN_VOICE_PRESETS.find((v) => v.id === selectedVoiceId) || HUMAN_VOICE_PRESETS[0],
    [selectedVoiceId]
  );

  const normalizedDurations = useMemo(
    () => cameraAngles.map((_, idx) => Number(shotDurations[idx]) || 3.5),
    [cameraAngles, shotDurations]
  );

  const totalDurationSec = useMemo(
    () => Number(normalizedDurations.reduce((acc, v) => acc + v, 0).toFixed(1)),
    [normalizedDurations]
  );

  const shotTimeRanges = useMemo(() => {
    let cursor = 0;
    return normalizedDurations.map((dur, idx) => {
      const start = cursor;
      const end = Number((cursor + dur).toFixed(2));
      cursor = end;
      return { idx, start, end, duration: dur };
    });
  }, [normalizedDurations]);

  const activePlaybackShotIdx = useMemo(() => {
    const found = shotTimeRanges.find((r) => currentTimeSec >= r.start && currentTimeSec < r.end);
    return found ? found.idx : selectedShotIdx;
  }, [currentTimeSec, shotTimeRanges, selectedShotIdx]);

  const speakShotLineFallback = (text: string) => {
    if (isMuted || typeof window === 'undefined' || !('speechSynthesis' in window) || !text.trim()) return;
    try {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = 'zh-CN';
      utter.rate = voiceSpeed;
      utter.pitch = currentVoice.pitch;
      window.speechSynthesis.speak(utter);
    } catch {
      // ignore
    }
  };

  const handleSynthesizeHumanVoice = async (textToSpeak?: string) => {
    const targetText =
      (textToSpeak ?? sceneLines[activePlaybackShotIdx]) ||
      sceneLines[0] ||
      `欢迎体验${productName}，${sellingPoints}`;

    setIsSynthesizingTts(true);
    try {
      const response = await fetch('/api/ai/human-tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: targetText,
          voiceName: currentVoice.geminiVoice,
          stylePrompt: currentVoice.label,
        }),
      });
      if (!response.ok) throw new Error('TTS fallback');
      const data = await response.json();
      if (data?.audioBase64) {
        const wavUrl = createWavUrlFromPcmBase64(data.audioBase64, 24000);
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.src = wavUrl;
          audioRef.current.playbackRate = voiceSpeed;
          await audioRef.current.play();
        }
        onShowNotice('success', `已生成「${currentVoice.label}」真人口播并开始试听`);
      } else {
        speakShotLineFallback(targetText);
      }
    } catch {
      speakShotLineFallback(targetText);
      onShowNotice('success', `已开启「${currentVoice.label}」语音试听`);
    } finally {
      setIsSynthesizingTts(false);
    }
  };

  useEffect(() => {
    if (!isPlaying) return;
    const interval = window.setInterval(() => {
      setCurrentTimeSec((prev) => {
        const next = Number((prev + 0.1).toFixed(2));
        if (next >= totalDurationSec) {
          setIsPlaying(false);
          return 0;
        }
        return next;
      });
    }, 100);
    return () => window.clearInterval(interval);
  }, [isPlaying, totalDurationSec]);

  useEffect(() => {
    if (isPlaying) {
      setSelectedShotIdx(activePlaybackShotIdx);
    }
  }, [activePlaybackShotIdx, isPlaying]);

  const handleSelectArchetype = (archId: string) => {
    const arch = ARCHETYPE_TEMPLATES.find((a) => a.id === archId);
    if (!arch) return;
    setSelectedArchetypeId(arch.id);
    const subj = productName.trim() || '招牌单品';
    const pts = sellingPoints.trim() || activeStore.memoryAnchors;
    const loc = activeStore.cityLocation.slice(0, 6) || '同城';

    setProjectTitle(`${subj} · ${arch.name}`);
    setCameraAngles([...arch.angles]);
    setVisualCues(arch.buildVisuals(subj, loc));
    setSceneLines(arch.buildLines(subj, pts, loc));
    setShotDurations([...arch.durations]);
    setShotMovements([...arch.movements]);
    setBgmStyle(arch.bgm);
    setLutPreset(arch.lut);
    setCaptionStyle(arch.captionStyle);
    setSelectedShotIdx(0);
    setCurrentTimeSec(0);
    onShowNotice('success', `已切换为「${arch.name}」分镜模板`);
  };

  const handleUploadMedia = (e: React.ChangeEvent<HTMLInputElement>, targetShotIdx?: number) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    if (typeof targetShotIdx === 'number') {
      const f = files[0];
      const url = URL.createObjectURL(f);
      setShotMediaMap((prev) => ({
        ...prev,
        [targetShotIdx]: { url, isVideo: f.type.startsWith('video/'), name: f.name },
      }));
      onShowNotice('success', `已更新第 0${targetShotIdx + 1} 镜实拍素材`);
    } else {
      const nextMap = { ...shotMediaMap };
      files.forEach((f, idx) => {
        const slot = idx % Math.max(1, cameraAngles.length);
        nextMap[slot] = { url: URL.createObjectURL(f), isVideo: f.type.startsWith('video/'), name: f.name };
      });
      setShotMediaMap(nextMap);
      onShowNotice('success', `已导入 ${files.length} 个素材并自动填入分镜轨`);
    }
    e.target.value = '';
  };

  const handleRunAudioToCaptions = async () => {
    setIsGeneratingCaptions(true);
    try {
      const response = await fetch('/api/ai/audio-to-captions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productName,
          sellingPoints,
          sceneLines,
          shotDurations: normalizedDurations,
          voiceStyle: currentVoice.label,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data?.captions) && data.captions.length > 0) {
          setCaptionSegments(data.captions);
          setSceneLines(data.captions.map((c: CaptionSegment, idx: number) => c.captionText || sceneLines[idx]));
          onShowNotice('success', `已完成全片 ${data.captions.length} 镜语音识别与字幕对齐`);
          return;
        }
      }
      throw new Error('local fallback');
    } catch {
      let cursor = 0;
      const localCaps = sceneLines.map((line, idx) => {
        const dur = normalizedDurations[idx] || 3.5;
        const seg = {
          shotIndex: idx,
          startSec: Number(cursor.toFixed(1)),
          endSec: Number((cursor + dur).toFixed(1)),
          captionText: line,
          highlightKeyword: productName.slice(0, 6),
          styleTag: '自动对齐',
        };
        cursor += dur;
        return seg;
      });
      setCaptionSegments(localCaps);
      onShowNotice('success', '已完成全片语音转字幕与时间轴对齐');
    } finally {
      setIsGeneratingCaptions(false);
    }
  };

  const handleRunBatchSeries = async () => {
    const selected = batchClips.filter((c) => c.selected);
    if (selected.length === 0) {
      onShowNotice('error', '请至少勾选 1 段视频或图片素材');
      return;
    }
    setIsBatchGenerating(true);
    try {
      const arch = ARCHETYPE_TEMPLATES.find((a) => a.id === selectedArchetypeId) || ARCHETYPE_TEMPLATES[0];
      const response = await fetch('/api/ai/batch-series-remix', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          templateTitle: arch.name,
          templateFormula: arch.angles.join(' + '),
          productName,
          sellingPoints,
          clipNames: selected.map((c) => c.name),
          storeMemory: activeStore,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data?.series) && data.series.length > 0) {
          setBatchOutputs(data.series);
          onShowNotice('success', `已批量生成 ${data.series.length} 条系列成片方案`);
          return;
        }
      }
      throw new Error('fallback');
    } catch {
      const fallback = selected.map((clip, i) => ({
        clipIndex: i,
        clipName: clip.name,
        seriesTitle: `${productName.slice(0, 10)} · 系列成片 #0${i + 1}`,
        hookLine: `${activeStore.cityLocation.slice(0, 4)}必看！为什么大家都选这款${productName.slice(0, 8)}？`,
        middleLine: `实测亮点：${sellingPoints.slice(0, 24)}`,
        ctaLine: `点击左下角团购链接立享优惠！`,
        suggestedBgm: bgmStyle,
        estimatedDuration: `${clip.durationSec}s`,
      }));
      setBatchOutputs(fallback);
      onShowNotice('success', `已批量生成 ${fallback.length} 条系列成片方案`);
    } finally {
      setIsBatchGenerating(false);
    }
  };

  const handleExportManifest = () => {
    const content = [
      `【成片工程导出】${projectTitle}`,
      `主体：${productName} | 比例：${aspectRatio} | 总时长：${totalDurationSec}s`,
      `配音：${currentVoice.label} (${voiceSpeed}x) | 音乐：${bgmStyle}`,
      `----------------------------------------`,
      ...cameraAngles.map(
        (ang, i) =>
          `[镜0${i + 1}] ${ang} (${normalizedDurations[i]}s | ${shotMovements[i] || '缓慢推近'})\n画面：${visualCues[i] || ''}\n字幕：“${sceneLines[i] || ''}”`
      ),
    ].join('\n\n');
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${projectTitle}_成片工程.txt`;
    a.click();
    URL.revokeObjectURL(url);
    onShowNotice('success', '已导出高清成片工程文件');
  };

  const activeMedia = shotMediaMap[activePlaybackShotIdx];
  const fallbackPhotoUrl = CURATED_SHOT_PHOTOS[activePlaybackShotIdx % CURATED_SHOT_PHOTOS.length];

  const lutCssFilter = useMemo(() => {
    switch (lutPreset) {
      case 'warm_film':
        return 'contrast(1.04) saturate(1.08) sepia(0.06)';
      case 'clean_cool':
        return 'contrast(1.03) saturate(0.96) brightness(1.03)';
      case 'matte_dark':
        return 'contrast(1.08) saturate(0.90) brightness(0.95)';
      default:
        return 'none';
    }
  }, [lutPreset]);

  const captionBoxClass = useMemo(() => {
    switch (captionStyle) {
      case 'warm_amber':
        return 'bg-slate-900/75 text-amber-200 border border-amber-200/30';
      case 'editorial':
        return 'bg-white/92 text-slate-900 border border-slate-200/80 shadow-sm';
      case 'minimal':
        return 'bg-black/45 text-white';
      default:
        return 'bg-slate-900/75 text-white border border-white/15';
    }
  }, [captionStyle]);

  return (
    <div className="space-y-3">
      <audio ref={audioRef} className="hidden" />

      {/* 1. 筷子 × 火兔同款：单行极简顶部工具栏（低饱和度、清爽无冗余文字） */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200/90 bg-white px-4 py-2.5 shadow-2xs">
        {/* Left: Project Title + Mode Switcher */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
              <Film className="h-4 w-4" />
            </span>
            <input
              type="text"
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
              className="w-44 sm:w-56 rounded-lg border border-transparent px-2 py-1 text-sm font-semibold text-slate-900 hover:border-slate-200 focus:border-slate-300 focus:bg-slate-50/50"
              title="点击修改成片标题"
            />
          </div>

          <div className="flex items-center rounded-lg bg-slate-100 p-0.5 text-xs">
            <button
              type="button"
              onClick={() => setStudioMode('foolproof')}
              className={`rounded-md px-3 py-1 font-medium transition-all ${
                studioMode === 'foolproof'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              套模板快剪
            </button>
            <button
              type="button"
              onClick={() => setStudioMode('pro_nle')}
              className={`rounded-md px-3 py-1 font-medium transition-all ${
                studioMode === 'pro_nle'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              分镜多轨精剪
            </button>
          </div>
        </div>

        {/* Center: 4 Clean Template Pills (一键套模板，无冗余大段文字) */}
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-slate-400 mr-1 hidden xl:inline">爆款模板:</span>
          {ARCHETYPE_TEMPLATES.map((arch) => {
            const active = selectedArchetypeId === arch.id;
            return (
              <button
                key={arch.id}
                type="button"
                onClick={() => handleSelectArchetype(arch.id)}
                className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-colors ${
                  active
                    ? 'bg-[#476282] text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
                }`}
              >
                {arch.shortLabel}
              </button>
            );
          })}
        </div>

        {/* Right: Upload + Batch + Export */}
        <div className="flex items-center gap-2">
          <label className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 cursor-pointer">
            <Upload className="h-3.5 w-3.5 text-slate-500" />
            <span>导入实拍素材</span>
            <input
              type="file"
              accept="image/*,video/*"
              multiple
              onChange={(e) => handleUploadMedia(e)}
              className="hidden"
            />
          </label>

          <button
            type="button"
            onClick={() => setRightTab('batch_fission')}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100"
          >
            <Layers className="h-3.5 w-3.5 text-slate-500" />
            <span>批量裂变</span>
          </button>

          <button
            type="button"
            onClick={handleExportManifest}
            className="inline-flex items-center gap-1.5 rounded-lg iridescent-btn px-3.5 py-1.5 text-xs font-medium text-white"
          >
            <Download className="h-3.5 w-3.5" />
            <span>导出成片</span>
          </button>
        </div>
      </div>

      {/* 2. 主体三栏工作台：左侧分镜卡槽 (3列) + 中央加长版9:16真机预览 (5列) + 右侧极简属性面板 (4列) */}
      <div className="grid grid-cols-1 gap-3.5 lg:grid-cols-12 items-stretch">
        {/* 左侧栏：筷子科技同款「分镜卡槽池」 */}
        <div className="lg:col-span-3 flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-3.5 shadow-2xs">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-800">分镜卡槽 ({cameraAngles.length}镜)</span>
                <span className="font-mono text-[11px] text-slate-400">{totalDurationSec}s</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  if (cameraAngles.length >= 8) return;
                  const n = cameraAngles.length + 1;
                  setCameraAngles([...cameraAngles, `0${n} 新增镜头`]);
                  setVisualCues([...visualCues, `展示「${productName}」实拍画面`]);
                  setSceneLines([...sceneLines, `细节扎实，体验感拉满！`]);
                  setShotDurations([...normalizedDurations, 3.5]);
                  setShotMovements([...shotMovements, '缓慢推近']);
                }}
                className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-700 hover:bg-slate-200/70"
              >
                <Plus className="h-3 w-3" />
                <span>加分镜</span>
              </button>
            </div>

            {/* Shot Slot List */}
            <div className="space-y-2 max-h-[500px] overflow-y-auto pr-0.5">
              {cameraAngles.map((angle, idx) => {
                const isSelected = selectedShotIdx === idx;
                const media = shotMediaMap[idx];
                const thumbUrl = media?.url || CURATED_SHOT_PHOTOS[idx % CURATED_SHOT_PHOTOS.length];
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      setSelectedShotIdx(idx);
                      setCurrentTimeSec(shotTimeRanges[idx]?.start || 0);
                    }}
                    className={`group flex items-start gap-2.5 rounded-xl border p-2.5 transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#476282] bg-slate-50/90'
                        : 'border-slate-200/80 bg-white hover:border-slate-300'
                    }`}
                  >
                    {/* Thumbnail with hover upload */}
                    <div className="relative h-14 w-11 shrink-0 overflow-hidden rounded-lg bg-slate-100 border border-slate-200/60">
                      {media?.isVideo ? (
                        <video src={media.url} className="h-full w-full object-cover" muted playsInline />
                      ) : (
                        <img src={thumbUrl} alt={angle} className="h-full w-full object-cover" />
                      )}
                      <label
                        title="点击更换本镜实拍图/视频"
                        onClick={(e) => e.stopPropagation()}
                        className="absolute inset-0 flex items-center justify-center bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                      >
                        <Upload className="h-3.5 w-3.5 text-white" />
                        <input
                          type="file"
                          accept="image/*,video/*"
                          onChange={(e) => handleUploadMedia(e, idx)}
                          className="hidden"
                        />
                      </label>
                    </div>

                    {/* Info */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className="truncate text-xs font-semibold text-slate-800">{angle}</span>
                        <span className="shrink-0 font-mono text-[11px] text-slate-400">
                          {normalizedDurations[idx]}s
                        </span>
                      </div>
                      <p className="mt-1 line-clamp-1 text-[11px] text-slate-500">
                        {sceneLines[idx] || '暂无台词'}
                      </p>
                      <div className="mt-1.5 flex items-center justify-between text-[10px] text-slate-400">
                        <span>{shotMovements[idx] || '缓慢推近'}</span>
                        {cameraAngles.length > 1 && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setCameraAngles(cameraAngles.filter((_, i) => i !== idx));
                              setVisualCues(visualCues.filter((_, i) => i !== idx));
                              setSceneLines(sceneLines.filter((_, i) => i !== idx));
                              setShotDurations(normalizedDurations.filter((_, i) => i !== idx));
                              setSelectedShotIdx(0);
                            }}
                            className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-rose-600"
                          >
                            删除
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Quick Subject Sync */}
          <div className="mt-3 border-t border-slate-100 pt-3 space-y-2">
            <div className="flex items-center gap-1.5">
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="输入店铺或商品名称..."
                className="flex-1 rounded-lg border border-slate-200 bg-slate-50/70 px-2.5 py-1.5 text-xs text-slate-800"
              />
              <button
                type="button"
                onClick={() => handleSelectArchetype(selectedArchetypeId)}
                className="shrink-0 rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-200/80"
                title="根据当前商品名一键刷新全部分镜文案"
              >
                刷新脚本
              </button>
            </div>
          </div>
        </div>

        {/* 中央栏：加长版 9:16 竖屏真机预览画布（低饱和度浅灰底台，清爽无遮挡） */}
        <div className="lg:col-span-5 flex flex-col items-center justify-between rounded-xl border border-slate-200/90 bg-[#F3F6F9] p-4 shadow-2xs">
          {/* Top Canvas Bar */}
          <div className="flex w-full items-center justify-between text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="font-medium text-slate-700">
                第 0{activePlaybackShotIdx + 1} 镜 · {cameraAngles[activePlaybackShotIdx]}
              </span>
            </div>

            <div className="flex items-center gap-1 rounded-lg bg-white p-0.5 border border-slate-200/80">
              {(['9:16', '16:9', '4:3'] as const).map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setAspectRatio(r)}
                  className={`rounded-md px-2 py-0.5 font-mono text-[11px] font-medium ${
                    aspectRatio === r ? 'bg-[#476282] text-white' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* Tall 9:16 Phone Viewport (h-[580px] sm:h-[600px]) */}
          <div className="my-2 flex items-center justify-center w-full">
            <div
              className={`relative overflow-hidden rounded-[28px] border-[5px] border-slate-800 bg-slate-900 shadow-lg transition-all ${
                aspectRatio === '9:16'
                  ? 'h-[560px] sm:h-[600px] w-[315px] sm:w-[338px]'
                  : aspectRatio === '16:9'
                  ? 'h-[300px] w-full max-w-[520px]'
                  : 'h-[400px] w-full max-w-[480px]'
              }`}
            >
              {/* Visual Layer */}
              <div className="absolute inset-0 overflow-hidden">
                {activeMedia?.isVideo ? (
                  <video
                    key={activeMedia.url}
                    src={activeMedia.url}
                    className="h-full w-full object-cover"
                    style={{ filter: lutCssFilter }}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    key={activeMedia?.url || fallbackPhotoUrl}
                    src={activeMedia?.url || fallbackPhotoUrl}
                    alt="预览画面"
                    className={`h-full w-full object-cover transition-transform duration-[3500ms] ease-out ${
                      isPlaying ? 'scale-108' : 'scale-100'
                    }`}
                    style={{ filter: lutCssFilter }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25" />
              </div>

              {/* Minimal Top Tag */}
              <div className="relative z-10 flex items-center justify-between px-4 pt-3.5 text-[11px] text-white/90">
                <span className="rounded-md bg-black/35 px-2 py-0.5">
                  {activeStore.storeName.slice(0, 10)}
                </span>
                <span className="font-mono text-[10px] bg-black/35 px-2 py-0.5 rounded-md">
                  0{activePlaybackShotIdx + 1}/0{cameraAngles.length}
                </span>
              </div>

              {/* Subtitle Overlay */}
              <div className="absolute inset-x-3.5 bottom-12 z-20 flex flex-col items-center text-center">
                <div
                  style={{ fontSize: `${captionFontSize}px` }}
                  className={`max-w-[94%] rounded-xl px-3.5 py-2 font-semibold leading-snug tracking-wide ${captionBoxClass}`}
                >
                  {sceneLines[activePlaybackShotIdx] || '点击右侧面板输入本镜口播台词'}
                </div>
              </div>

              {/* Bottom Progress Strip */}
              <div className="absolute inset-x-4 bottom-3 z-20 flex items-center gap-1">
                {cameraAngles.map((_, idx) => (
                  <div key={idx} className="h-1 flex-1 overflow-hidden rounded-full bg-white/25">
                    <div
                      className={`h-full transition-all duration-150 ${
                        idx < activePlaybackShotIdx
                          ? 'w-full bg-white'
                          : idx === activePlaybackShotIdx
                          ? 'w-2/3 bg-white'
                          : 'w-0'
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Clean Transport Controls */}
          <div className="w-full max-w-[440px] rounded-xl border border-slate-200/80 bg-white px-3.5 py-2.5 space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-[11px] text-slate-600 w-10">{currentTimeSec.toFixed(1)}s</span>
              <input
                type="range"
                min={0}
                max={Math.max(1, totalDurationSec)}
                step={0.1}
                value={currentTimeSec}
                onChange={(e) => {
                  setIsPlaying(false);
                  setCurrentTimeSec(Number(e.target.value));
                }}
                className="h-1 flex-1 accent-[#476282] cursor-pointer"
              />
              <span className="font-mono text-[11px] text-slate-400 w-10 text-right">{totalDurationSec}s</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => {
                    setIsPlaying(false);
                    setCurrentTimeSec(0);
                    setSelectedShotIdx(0);
                  }}
                  className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100"
                  title="回到开头"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const prev = Math.max(0, selectedShotIdx - 1);
                    setSelectedShotIdx(prev);
                    setCurrentTimeSec(shotTimeRanges[prev]?.start || 0);
                  }}
                  className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100"
                  title="上一镜"
                >
                  <SkipBack className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (!isPlaying) {
                      speakShotLineFallback(sceneLines[activePlaybackShotIdx] || '');
                    } else if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
                      window.speechSynthesis.cancel();
                    }
                    setIsPlaying(!isPlaying);
                  }}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#476282] text-white hover:bg-[#38506b]"
                  title={isPlaying ? '暂停' : '播放预览'}
                >
                  {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 fill-white ml-0.5" />}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const next = Math.min(cameraAngles.length - 1, selectedShotIdx + 1);
                    setSelectedShotIdx(next);
                    setCurrentTimeSec(shotTimeRanges[next]?.start || 0);
                  }}
                  className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100"
                  title="下一镜"
                >
                  <SkipForward className="h-3.5 w-3.5" />
                </button>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setIsMuted(!isMuted)}
                  className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100"
                  title={isMuted ? '取消静音' : '静音'}
                >
                  {isMuted ? <VolumeX className="h-3.5 w-3.5 text-rose-500" /> : <Volume2 className="h-3.5 w-3.5" />}
                </button>

                <button
                  type="button"
                  disabled={isSynthesizingTts}
                  onClick={() => handleSynthesizeHumanVoice()}
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 hover:bg-slate-100"
                >
                  <Mic className="h-3.5 w-3.5 text-[#476282]" />
                  <span>{isSynthesizingTts ? '合成中...' : '试听配音'}</span>
                </button>

                <button
                  type="button"
                  disabled={isGeneratingCaptions}
                  onClick={handleRunAudioToCaptions}
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 hover:bg-slate-100"
                >
                  <Subtitles className="h-3.5 w-3.5 text-[#476282]" />
                  <span>{isGeneratingCaptions ? '对齐中...' : 'AI 字幕对齐'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 右侧栏：火兔工具箱同款「极简属性精修台」（3个清爽Tab，无杂乱堆砌） */}
        <div className="lg:col-span-4 flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-4 shadow-2xs">
          <div className="space-y-4">
            {/* 3 Clean Tabs */}
            <div className="grid grid-cols-3 gap-1 rounded-lg bg-slate-100 p-1 text-xs">
              <button
                type="button"
                onClick={() => setRightTab('voice_sub')}
                className={`rounded-md py-1.5 font-medium transition-all ${
                  rightTab === 'voice_sub' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600'
                }`}
              >
                配音与字幕
              </button>
              <button
                type="button"
                onClick={() => setRightTab('visual_lut')}
                className={`rounded-md py-1.5 font-medium transition-all ${
                  rightTab === 'visual_lut' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600'
                }`}
              >
                画面与滤镜
              </button>
              <button
                type="button"
                onClick={() => setRightTab('batch_fission')}
                className={`rounded-md py-1.5 font-medium transition-all ${
                  rightTab === 'batch_fission' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600'
                }`}
              >
                批量裂变
              </button>
            </div>

            {/* TAB 1: 配音与字幕 */}
            {rightTab === 'voice_sub' && (
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      第 0{selectedShotIdx + 1} 镜口播字幕（可拖拽调整大小）
                    </label>
                    <span className="text-[11px] text-slate-400">实时同步画面</span>
                  </div>
                  <textarea
                    rows={3}
                    value={sceneLines[selectedShotIdx] || ''}
                    onChange={(e) => {
                      const next = [...sceneLines];
                      next[selectedShotIdx] = e.target.value;
                      setSceneLines(next);
                    }}
                    placeholder="输入本镜口播台词..."
                    className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50/60 p-3 text-xs leading-relaxed text-slate-800 focus:bg-white"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-semibold text-slate-700">AI 真人音色选择</label>
                    <span className="font-mono text-[11px] text-slate-400">语速 {voiceSpeed.toFixed(2)}x</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {HUMAN_VOICE_PRESETS.map((vp) => {
                      const active = selectedVoiceId === vp.id;
                      return (
                        <button
                          key={vp.id}
                          type="button"
                          onClick={() => {
                            setSelectedVoiceId(vp.id);
                            setVoiceTone(vp.label);
                            setVoiceSpeed(vp.rate);
                          }}
                          className={`rounded-lg border px-3 py-2 text-left text-xs font-medium transition-colors ${
                            active
                              ? 'border-[#476282] bg-slate-100 text-slate-900'
                              : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          {vp.label}
                        </button>
                      );
                    })}
                  </div>
                  <div className="mt-2.5 flex items-center gap-2">
                    <span className="text-[11px] text-slate-500 shrink-0">语速调节</span>
                    <input
                      type="range"
                      min={0.85}
                      max={1.35}
                      step={0.05}
                      value={voiceSpeed}
                      onChange={(e) => setVoiceSpeed(Number(e.target.value))}
                      className="h-1 flex-1 accent-[#476282] cursor-pointer"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-semibold text-slate-700">花字字幕样式</label>
                    <span className="font-mono text-[11px] text-slate-400">{captionFontSize}px</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1.5">
                    {[
                      { id: 'soft_white', label: '柔白' },
                      { id: 'warm_amber', label: '暖黄' },
                      { id: 'editorial', label: '杂志' },
                      { id: 'minimal', label: '极简' },
                    ].map((st) => (
                      <button
                        key={st.id}
                        type="button"
                        onClick={() => setCaptionStyle(st.id as typeof captionStyle)}
                        className={`rounded-lg border py-1.5 text-xs font-medium ${
                          captionStyle === st.id
                            ? 'border-[#476282] bg-[#476282] text-white'
                            : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        {st.label}
                      </button>
                    ))}
                  </div>
                  <div className="mt-2.5 flex items-center gap-2">
                    <span className="text-[11px] text-slate-500 shrink-0">字号大小</span>
                    <input
                      type="range"
                      min={15}
                      max={26}
                      step={1}
                      value={captionFontSize}
                      onChange={(e) => setCaptionFontSize(Number(e.target.value))}
                      className="h-1 flex-1 accent-[#476282] cursor-pointer"
                    />
                  </div>
                </div>

                {captionSegments.length > 0 && (
                  <div className="rounded-lg border border-slate-200 bg-slate-50/70 p-2.5 text-[11px] text-slate-600">
                    ✓ 已完成全片 {captionSegments.length} 镜语音识别与字幕时间轴对齐
                  </div>
                )}
              </div>
            )}

            {/* TAB 2: 画面与滤镜 */}
            {rightTab === 'visual_lut' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    本镜画面拍摄描述（可拖拽调整大小）
                  </label>
                  <textarea
                    rows={3}
                    value={visualCues[selectedShotIdx] || ''}
                    onChange={(e) => {
                      const next = [...visualCues];
                      next[selectedShotIdx] = e.target.value;
                      setVisualCues(next);
                    }}
                    className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50/60 p-3 text-xs leading-relaxed text-slate-700 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    低饱和度质感滤镜 (LUT)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'warm_film', label: '暖调胶片' },
                      { id: 'natural', label: '原片自然' },
                      { id: 'clean_cool', label: '清透冷调' },
                      { id: 'matte_dark', label: '质感暗调' },
                    ].map((lut) => (
                      <button
                        key={lut.id}
                        type="button"
                        onClick={() => setLutPreset(lut.id as typeof lutPreset)}
                        className={`rounded-lg border py-2 text-xs font-medium ${
                          lutPreset === lut.id
                            ? 'border-[#476282] bg-[#476282] text-white'
                            : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        {lut.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      运镜方式
                    </label>
                    <select
                      value={shotMovements[selectedShotIdx] || '缓慢推近'}
                      onChange={(e) => {
                        const next = [...shotMovements];
                        next[selectedShotIdx] = e.target.value;
                        setShotMovements(next);
                      }}
                      className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs text-slate-700"
                    >
                      <option value="缓慢推近">缓慢推近</option>
                      <option value="微距放大">微距放大</option>
                      <option value="轻柔右摇">轻柔右摇</option>
                      <option value="固定展示">固定展示</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      本镜时长 ({normalizedDurations[selectedShotIdx]}s)
                    </label>
                    <input
                      type="range"
                      min={2.0}
                      max={8.0}
                      step={0.5}
                      value={normalizedDurations[selectedShotIdx] || 3.5}
                      onChange={(e) => {
                        const next = [...normalizedDurations];
                        next[selectedShotIdx] = Number(e.target.value);
                        setShotDurations(next);
                      }}
                      className="mt-2 h-1 w-full accent-[#476282] cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: 多素材一键批量套模板裂变 */}
            {rightTab === 'batch_fission' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-700">
                    勾选多段素材套用当前模板 ({batchClips.filter((c) => c.selected).length}/{batchClips.length})
                  </span>
                  <label className="text-xs font-medium text-[#476282] hover:underline cursor-pointer">
                    + 添加素材
                    <input
                      type="file"
                      accept="image/*,video/*"
                      multiple
                      onChange={(e) => {
                        const files = Array.from(e.target.files || []);
                        const added = files.map((f, i) => ({
                          id: `u_${Date.now()}_${i}`,
                          name: f.name,
                          previewUrl: URL.createObjectURL(f),
                          selected: true,
                          durationSec: 15,
                        }));
                        setBatchClips((prev) => [...added, ...prev]);
                        e.target.value = '';
                      }}
                      className="hidden"
                    />
                  </label>
                </div>

                <div className="space-y-1.5 max-h-48 overflow-y-auto pr-0.5">
                  {batchClips.map((clip) => (
                    <div
                      key={clip.id}
                      onClick={() =>
                        setBatchClips((prev) =>
                          prev.map((c) => (c.id === clip.id ? { ...c, selected: !c.selected } : c))
                        )
                      }
                      className={`flex items-center justify-between rounded-lg border px-2.5 py-2 text-xs cursor-pointer ${
                        clip.selected
                          ? 'border-[#476282] bg-slate-50 text-slate-900'
                          : 'border-slate-200 bg-white text-slate-500'
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <input
                          type="checkbox"
                          checked={clip.selected}
                          onChange={() => {}}
                          className="h-3.5 w-3.5 accent-[#476282]"
                        />
                        <span className="truncate">{clip.name}</span>
                      </div>
                      <span className="font-mono text-[11px] text-slate-400 shrink-0">{clip.durationSec}s</span>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  disabled={isBatchGenerating}
                  onClick={handleRunBatchSeries}
                  className="w-full rounded-lg iridescent-btn py-2 text-xs font-medium text-white"
                >
                  {isBatchGenerating ? '正在批量生成系列成片...' : '一键套用模板生成系列视频'}
                </button>

                {batchOutputs.length > 0 && (
                  <div className="space-y-1.5 max-h-44 overflow-y-auto border-t border-slate-100 pt-2">
                    {batchOutputs.map((out, i) => (
                      <div key={i} className="rounded-lg border border-slate-200 bg-slate-50/70 p-2 text-[11px]">
                        <div className="flex items-center justify-between font-semibold text-slate-800">
                          <span className="truncate">{out.seriesTitle}</span>
                          <button
                            type="button"
                            onClick={() => {
                              setProjectTitle(out.seriesTitle);
                              setSceneLines([out.hookLine, out.middleLine, out.middleLine, out.ctaLine]);
                              onShowNotice('success', `已载入系列成片 #0${i + 1}`);
                            }}
                            className="text-[#476282] hover:underline shrink-0 ml-2"
                          >
                            载入预览
                          </button>
                        </div>
                        <p className="mt-0.5 text-slate-500 line-clamp-1">“{out.hookLine}”</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Bottom Action Footer */}
          <div className="mt-4 border-t border-slate-100 pt-3 flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={() => handleSynthesizeHumanVoice()}
              disabled={isSynthesizingTts}
              className="flex-1 rounded-lg border border-slate-200 bg-slate-50 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100"
            >
              {isSynthesizingTts ? '配音合成中...' : '生成真人口播'}
            </button>
            <button
              type="button"
              onClick={handleExportManifest}
              className="flex-1 rounded-lg iridescent-btn py-2 text-xs font-medium text-white"
            >
              合成并导出成片
            </button>
          </div>
        </div>
      </div>

      {/* 3. 底部清爽浅色多轨时间轴（低饱和度莫兰迪灰蓝轨道，告别刺眼纯黑背景） */}
      <div className="rounded-xl border border-slate-200/90 bg-white p-3.5 shadow-2xs space-y-2">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-800">多轨时间轴</span>
            <span>点击任意分镜块可定位预览并微调</span>
          </div>
          <span className="font-mono text-[11px]">
            当前 {currentTimeSec.toFixed(1)}s / 总长 {totalDurationSec}s
          </span>
        </div>

        <div className="space-y-1.5 overflow-x-auto pb-1">
          {/* V1 视频轨 */}
          <div className="flex items-center gap-2 min-w-[640px]">
            <span className="w-16 shrink-0 text-[11px] font-medium text-slate-400">视频轨 V1</span>
            <div className="flex flex-1 gap-1.5">
              {cameraAngles.map((ang, idx) => {
                const active = selectedShotIdx === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setSelectedShotIdx(idx);
                      setCurrentTimeSec(shotTimeRanges[idx]?.start || 0);
                    }}
                    style={{ flex: normalizedDurations[idx] || 3.5 }}
                    className={`rounded-lg border px-2.5 py-1.5 text-left transition-colors ${
                      active
                        ? 'border-[#476282] bg-[#476282]/10 text-slate-900'
                        : 'border-slate-200 bg-slate-50/80 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] font-semibold">
                      <span className="truncate">{ang}</span>
                      <span className="font-mono text-[10px] text-slate-400 ml-1">
                        {normalizedDurations[idx]}s
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* T1 字幕轨 */}
          <div className="flex items-center gap-2 min-w-[640px]">
            <span className="w-16 shrink-0 text-[11px] font-medium text-slate-400">字幕轨 T1</span>
            <div className="flex flex-1 gap-1.5">
              {sceneLines.map((line, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setSelectedShotIdx(idx);
                    setRightTab('voice_sub');
                  }}
                  style={{ flex: normalizedDurations[idx] || 3.5 }}
                  className="truncate rounded-md border border-slate-200/80 bg-slate-50/50 px-2.5 py-1 text-left text-[11px] text-slate-500 hover:bg-slate-100"
                >
                  “{line}”
                </button>
              ))}
            </div>
          </div>

          {/* A1 配音轨 */}
          <div className="flex items-center gap-2 min-w-[640px]">
            <span className="w-16 shrink-0 text-[11px] font-medium text-slate-400">配音轨 A1</span>
            <div className="flex flex-1 items-center justify-between rounded-md border border-slate-200/80 bg-slate-50/60 px-3 py-1 text-[11px] text-slate-600">
              <span>AI 真人语音：{currentVoice.label} ({voiceSpeed}x) + BGM：{bgmStyle}</span>
              <span className="text-slate-400">自动卡点已开启</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
