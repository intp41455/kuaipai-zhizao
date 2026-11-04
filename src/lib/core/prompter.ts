/**
 * 口播提词器跟随引擎
 * 对标开拍「AI 提词器 · 智能语速跟随」：
 * 把语音识别结果与稿件做字符级对齐，算出目标位置，再按位置差动态调整滚动速度。
 * 纯函数，UI 层只负责取麦克风数据和滚动容器。
 */

export interface NormalizedScript {
  /** 去掉标点与空白的比对串 */
  text: string;
  /** text 中每个字符对应的原稿下标 */
  map: number[];
}

const PUNCT = /[\s\u3000，。！？、；：""''（）《》【】,.!?;:'"()<>[\]\-—…~·]/;

/** 归一化稿件并保留原稿下标映射，语音比对时不要求用户读到标点 */
export function normalizeScript(script: string): NormalizedScript {
  const text: string[] = [];
  const map: number[] = [];
  for (let i = 0; i < script.length; i += 1) {
    const ch = script[i];
    if (PUNCT.test(ch)) continue;
    text.push(ch.toLowerCase());
    map.push(i);
  }
  return { text: text.join(''), map };
}

/** 把识别结果也做同样归一化 */
export function normalizeSpeech(spoken: string): string {
  return Array.from(spoken)
    .filter((ch) => !PUNCT.test(ch))
    .map((ch) => ch.toLowerCase())
    .join('');
}

/**
 * 用识别结果的尾部去和稿件对齐。
 * 取最近一句话的末尾片段做锚点，避免识别中间插词导致的漂移；
 * 找不到时逐步缩短锚点，最后返回 -1 由 UI 保持原速。
 */
export function alignSpoken(
  script: NormalizedScript,
  spoken: string,
  searchFrom = 0,
  anchorSize = 12
): { index: number; anchor: string } {
  const spokenNorm = normalizeSpeech(spoken);
  if (!spokenNorm) return { index: -1, anchor: '' };
  const from = Math.max(0, Math.min(searchFrom, script.text.length));
  for (let size = Math.min(anchorSize, spokenNorm.length); size >= 3; size -= 1) {
    const anchor = spokenNorm.slice(-size);
    const found = script.text.indexOf(anchor, from);
    if (found >= 0) {
      return { index: script.map[found + anchor.length - 1] + 1, anchor };
    }
  }
  // 允许在整篇里回找一次，处理识别跳字
  for (let size = Math.min(anchorSize, spokenNorm.length); size >= 4; size -= 1) {
    const anchor = spokenNorm.slice(-size);
    const found = script.text.indexOf(anchor);
    if (found >= 0) return { index: script.map[found + anchor.length - 1] + 1, anchor };
  }
  return { index: -1, anchor: '' };
}

export interface FollowSpeedInput {
  /** 识别出的目标字符位置 */
  targetIndex: number;
  /** 当前正在朗读的字符位置（由滚动位置换算） */
  currentIndex: number;
  /** 基础速度，单位 px/s */
  baseSpeed: number;
}

/**
 * 跟随速度策略：
 * 领先 0-20 字慢速（等用户读完）；20-60 字按基础速度；超过 60 字加速追赶，最多 3 倍；
 * 落后时不倒退，直接停住，避免画面抖动。
 */
export function followSpeed({ targetIndex, currentIndex, baseSpeed }: FollowSpeedInput): number {
  if (targetIndex < 0) return baseSpeed;
  const lead = targetIndex - currentIndex;
  if (lead < -8) return 0;
  if (lead <= 20) return baseSpeed * 0.55;
  if (lead <= 60) return baseSpeed;
  return baseSpeed * Math.min(3, 1 + lead / 60);
}

/** 用滚动比例估算当前朗读位置，语音未启用或断句停顿时兜底 */
export function indexFromScroll(
  scrollTop: number,
  scrollHeight: number,
  clientHeight: number,
  scriptLength: number
): number {
  const max = Math.max(1, scrollHeight - clientHeight);
  const ratio = Math.max(0, Math.min(1, scrollTop / max));
  return Math.round(ratio * scriptLength);
}

/** 滚动位置换算，供 UI 把目标字符位置定位到可视区中上部 */
export function scrollTopForIndex(
  index: number,
  scriptLength: number,
  scrollHeight: number,
  clientHeight: number,
  anchorRatio = 0.32
): number {
  const max = Math.max(0, scrollHeight - clientHeight);
  const ratio = Math.max(0, Math.min(1, index / Math.max(1, scriptLength)));
  return Math.min(max, Math.max(0, ratio * scrollHeight - clientHeight * anchorRatio));
}

/** 按句切分，便于逐句 TTS，读到哪句播哪句 */
export function splitSentences(script: string): Array<{ text: string; start: number; end: number }> {
  const sentences: Array<{ text: string; start: number; end: number }> = [];
  const regex = /[^。！？!?\n]+[。！？!?]?/g;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(script))) {
    const text = match[0].trim();
    if (!text) continue;
    sentences.push({ text, start: match.index, end: match.index + match[0].length });
  }
  return sentences;
}

/** 浏览器语音识别能力探测 */
export function speechRecognitionAvailable(): boolean {
  if (typeof window === 'undefined') return false;
  const w = window as unknown as Record<string, unknown>;
  return Boolean(w.SpeechRecognition || w.webkitSpeechRecognition);
}

/** 创建语音识别实例，统一返回结构，避免 UI 层写两套类型 */
export function createSpeechRecognizer(lang = 'zh-CN') {
  if (typeof window === 'undefined') return null;
  const w = window as unknown as Record<string, any>;
  const Ctor = w.SpeechRecognition || w.webkitSpeechRecognition;
  if (!Ctor) return null;
  const recognizer = new Ctor();
  recognizer.lang = lang;
  recognizer.continuous = true;
  recognizer.interimResults = true;
  return recognizer as {
    lang: string;
    continuous: boolean;
    interimResults: boolean;
    start: () => void;
    stop: () => void;
    abort: () => void;
    onresult: ((event: any) => void) | null;
    onerror: ((event: any) => void) | null;
    onend: (() => void) | null;
  };
}
