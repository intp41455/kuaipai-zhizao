/**
 * 合规体检引擎
 * 对标猫尼科技「违禁词健康分」：本地词库 + 分级 + 替换建议 + 可回写改写稿。
 * 纯函数实现，不依赖网络，可离线运行。
 */

export type ComplianceLevel = 'ban' | 'high' | 'warn';
export type CompliancePlatform = '通用' | '抖音' | '快手' | '小红书' | '视频号';

export interface LexiconEntry {
  term: string;
  level: ComplianceLevel;
  category: string;
  suggestion: string;
  /** 仅在指定平台视为违规，缺省为全平台 */
  platforms?: CompliancePlatform[];
}

export interface ComplianceHit {
  term: string;
  index: number;
  level: ComplianceLevel;
  category: string;
  suggestion: string;
}

export interface ComplianceReport {
  score: number;
  hits: ComplianceHit[];
  categories: string[];
  rewrite: string;
  /** 每千字命中密度，用于判断是否为“堆词型”风险 */
  density: number;
}

/** 词库按《广告法》绝对化用语、医疗功效、金融承诺、导流、虚假承诺五类整理 */
export const COMPLIANCE_LEXICON: LexiconEntry[] = [
  // 绝对化用语
  { term: '最好', level: 'ban', category: '绝对化用语', suggestion: '较优 / 表现突出' },
  { term: '最强', level: 'ban', category: '绝对化用语', suggestion: '较强 / 竞争力突出' },
  { term: '第一', level: 'ban', category: '绝对化用语', suggestion: '领先 / 头部' },
  { term: '唯一', level: 'ban', category: '绝对化用语', suggestion: '少数 / 少见' },
  { term: '顶级', level: 'ban', category: '绝对化用语', suggestion: '高端' },
  { term: '国家级', level: 'ban', category: '绝对化用语', suggestion: '行业级' },
  { term: '世界级', level: 'ban', category: '绝对化用语', suggestion: '国际水准' },
  { term: '极致', level: 'high', category: '绝对化用语', suggestion: '出色' },
  { term: '完美', level: 'high', category: '绝对化用语', suggestion: '完善' },
  { term: '100%', level: 'ban', category: '绝对化用语', suggestion: '大幅 / 多数情况下' },
  { term: '百分百', level: 'ban', category: '绝对化用语', suggestion: '大概率' },
  { term: '永久', level: 'high', category: '绝对化用语', suggestion: '长期' },
  { term: '万能', level: 'ban', category: '绝对化用语', suggestion: '通用性强' },
  { term: '史无前例', level: 'ban', category: '绝对化用语', suggestion: '较为少见' },
  // 医疗功效
  { term: '治疗', level: 'ban', category: '医疗功效', suggestion: '改善 / 辅助护理' },
  { term: '根治', level: 'ban', category: '医疗功效', suggestion: '缓解' },
  { term: '抗癌', level: 'ban', category: '医疗功效', suggestion: '健康管理' },
  { term: '降血压', level: 'ban', category: '医疗功效', suggestion: '日常养护' },
  { term: '壮阳', level: 'ban', category: '医疗功效', suggestion: '精力管理' },
  { term: '减肥', level: 'high', category: '医疗功效', suggestion: '体态管理' },
  { term: '消炎', level: 'ban', category: '医疗功效', suggestion: '舒缓' },
  { term: '无副作用', level: 'ban', category: '医疗功效', suggestion: '温和配方' },
  // 金融承诺
  { term: '稳赚不赔', level: 'ban', category: '金融承诺', suggestion: '有机会获得收益' },
  { term: '稳赚', level: 'ban', category: '金融承诺', suggestion: '有机会获得收益' },
  { term: '保本', level: 'ban', category: '金融承诺', suggestion: '风险可控' },
  { term: '零风险', level: 'ban', category: '金融承诺', suggestion: '风险较低' },
  { term: '躺赚', level: 'ban', category: '金融承诺', suggestion: '提升效率' },
  { term: '月入过万', level: 'high', category: '金融承诺', suggestion: '收入有提升空间' },
  { term: '暴利', level: 'ban', category: '金融承诺', suggestion: '收益空间' },
  // 导流与站外引流
  { term: '加微信', level: 'high', category: '站外导流', suggestion: '私信咨询' },
  { term: '加V', level: 'high', category: '站外导流', suggestion: '关注账号获取' },
  { term: '私信我', level: 'warn', category: '站外导流', suggestion: '评论区留言' },
  { term: '扫码', level: 'warn', category: '站外导流', suggestion: '主页查看' },
  { term: '点击链接', level: 'warn', category: '站外导流', suggestion: '主页入口' },
  { term: '淘宝', level: 'high', category: '站外导流', suggestion: '站内小店' },
  { term: '拼多多', level: 'high', category: '站外导流', suggestion: '站内小店' },
  // 虚假承诺
  { term: '三天见效', level: 'ban', category: '虚假承诺', suggestion: '持续使用' },
  { term: '七天涨粉十万', level: 'ban', category: '虚假承诺', suggestion: '稳定涨粉' },
  { term: '保证涨粉', level: 'ban', category: '虚假承诺', suggestion: '提升曝光' },
  { term: '包过', level: 'ban', category: '虚假承诺', suggestion: '提供辅导' },
  { term: '无效退款', level: 'high', category: '虚假承诺', suggestion: '按服务条款' },
  // 低俗擦边
  { term: '擦边', level: 'high', category: '低俗内容', suggestion: '避免暗示性表达' },
  { term: '诱惑', level: 'warn', category: '低俗内容', suggestion: '避免暗示性表达' },
  { term: '身材', level: 'warn', category: '低俗内容', suggestion: '避免聚焦身体特征' },
];

const LEVEL_WEIGHT: Record<ComplianceLevel, number> = { ban: 26, high: 11, warn: 4 };

const PLATFORM_EXTRA: LexiconEntry[] = [
  { term: '点赞关注', level: 'warn', category: '平台规则', suggestion: '引导互动更自然', platforms: ['抖音'] },
  { term: '关注我', level: 'warn', category: '平台规则', suggestion: '自然引导', platforms: ['小红书'] },
  { term: '引流', level: 'high', category: '平台规则', suggestion: '站内转化', platforms: ['抖音', '快手'] },
];

function lexiconFor(platform: CompliancePlatform): LexiconEntry[] {
  return COMPLIANCE_LEXICON.concat(PLATFORM_EXTRA.filter((entry) => entry.platforms?.includes(platform)));
}

/** 扫描一段文案，返回全部命中项（同一词只记首次位置，被长词覆盖的短词不重复计分） */
export function scanCompliance(text: string, platform: CompliancePlatform = '通用'): ComplianceReport {
  const source = text || '';
  const entries = lexiconFor(platform);
  const candidates: ComplianceHit[] = [];
  const seen = new Set<string>();

  for (const entry of entries) {
    const index = source.indexOf(entry.term);
    if (index < 0 || seen.has(entry.term)) continue;
    seen.add(entry.term);
    candidates.push({
      term: entry.term,
      index,
      level: entry.level,
      category: entry.category,
      suggestion: entry.suggestion,
    });
  }

  // 同一起点优先保留更长的词，例如「稳赚不赔」命中后不再计「稳赚」
  candidates.sort((a, b) => a.index - b.index || b.term.length - a.term.length);
  const hits: ComplianceHit[] = [];
  let cursor = 0;
  for (const hit of candidates) {
    if (hit.index < cursor) continue;
    hits.push(hit);
    cursor = hit.index + hit.term.length;
  }

  return {
    score: scoreHits(hits, source.length),
    hits,
    categories: Array.from(new Set(hits.map((hit) => hit.category))),
    rewrite: rewriteCompliance(source, platform),
    density: source.length > 0 ? Number(((hits.length / source.length) * 1000).toFixed(2)) : 0,
  };
}

/**
 * 健康分：100 分制。
 * 单条 ban 扣 26、high 扣 11、warn 扣 4；同类重复命中折半；
 * 密度超过 3 次/千字时额外扣分，避免“每句都踩”的堆词稿。
 */
export function scoreHits(hits: ComplianceHit[], textLength: number): number {
  const categoryCount: Record<string, number> = {};
  let deduction = 0;
  for (const hit of hits) {
    const times = categoryCount[hit.category] || 0;
    categoryCount[hit.category] = times + 1;
    deduction += LEVEL_WEIGHT[hit.level] * (times === 0 ? 1 : 0.5);
  }
  const density = textLength > 0 ? (hits.length / textLength) * 1000 : 0;
  if (density > 3) deduction += Math.min(20, (density - 3) * 6);
  return Math.max(0, Math.min(100, Math.round(100 - deduction)));
}

/**
 * 按建议词回写，生成可发布的改写稿。
 * 长词优先，避免「稳赚不赔」被「稳赚」截断成「…不赔」；
 * 多选项建议（如「领先 / 头部」）只取第一个，避免把斜杠写进正文。
 */
export function rewriteCompliance(text: string, platform: CompliancePlatform = '通用'): string {
  let output = text || '';
  const entries = lexiconFor(platform)
    .slice()
    .sort((a, b) => b.term.length - a.term.length);
  for (const entry of entries) {
    const primary = entry.suggestion.split('/')[0].trim();
    output = output.split(entry.term).join(primary);
  }
  return output;
}

/** 只做一次替换但保留原句结构，适合预览对比 */
export function highlightSegments(text: string, platform: CompliancePlatform = '通用') {
  const hits = scanCompliance(text, platform).hits;
  if (hits.length === 0) return [{ text, hit: null as ComplianceHit | null }];
  const segments: Array<{ text: string; hit: ComplianceHit | null }> = [];
  let cursor = 0;
  for (const hit of hits) {
    if (hit.index < cursor) continue;
    if (hit.index > cursor) segments.push({ text: text.slice(cursor, hit.index), hit: null });
    segments.push({ text: text.slice(hit.index, hit.index + hit.term.length), hit });
    cursor = hit.index + hit.term.length;
  }
  if (cursor < text.length) segments.push({ text: text.slice(cursor), hit: null });
  return segments;
}

export function levelLabel(level: ComplianceLevel): string {
  if (level === 'ban') return '禁用';
  if (level === 'high') return '高风险';
  return '提示';
}

export function levelTone(level: ComplianceLevel): string {
  if (level === 'ban') return 'bg-rose-50 text-rose-700 border-rose-200';
  if (level === 'high') return 'bg-amber-50 text-amber-700 border-amber-200';
  return 'bg-sky-50 text-sky-700 border-sky-200';
}
