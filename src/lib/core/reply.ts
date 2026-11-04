/**
 * 私信自动回复引擎
 * 对标星链引擎「私信管理」：关键词/正则匹配、优先级、冷却、变量模板、意向分级。
 * 全部为纯函数，便于在服务端复用同一套规则。
 */

export type RuleKind = 'keyword' | 'regex';
export type IntentLevel = 'high' | 'medium' | 'low';

export interface ReplyRuleSpec {
  id: string;
  name?: string;
  kind: RuleKind;
  pattern: string;
  reply: string;
  priority: number;
  enabled: boolean;
  /** 命中后同一会话的冷却时间，单位秒 */
  cooldownSec: number;
}

export interface ReplyMatch {
  rule: ReplyRuleSpec;
  reply: string;
  matchedAt: number;
  score: number;
}

export interface ReplyContext {
  nickname?: string;
  product?: string;
  platform?: string;
  now?: Date;
}

const HIGH_INTENT = ['价格', '多少钱', '报价', '购买', '下单', '怎么买', '链接', '加盟', '代理', '合作', '微信', '电话', '联系', '开票', '批量'];
const MEDIUM_INTENT = ['试用', '体验', '了解', '怎么用', '教程', '案例', '功能', '对比', '效果'];
const LOW_INTENT = ['你好', '在吗', 'hi', 'hello', '谢谢'];

const COOLDOWN_MS = new Map<string, number>();

/** 意向分级：高意向优先，其次中等，其余归为低意向 */
export function detectIntent(message: string): IntentLevel {
  const text = (message || '').toLowerCase();
  if (HIGH_INTENT.some((word) => text.includes(word.toLowerCase()))) return 'high';
  if (MEDIUM_INTENT.some((word) => text.includes(word.toLowerCase()))) return 'medium';
  if (LOW_INTENT.some((word) => text.includes(word.toLowerCase()))) return 'low';
  return 'low';
}

/** 变量模板：{昵称} {产品} {平台} {时间} */
export function renderTemplate(template: string, ctx: ReplyContext = {}): string {
  const now = ctx.now || new Date();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  return (template || '')
    .replace(/\{昵称\}/g, ctx.nickname || '您好')
    .replace(/\{产品\}/g, ctx.product || '我们的方案')
    .replace(/\{平台\}/g, ctx.platform || '当前平台')
    .replace(/\{时间\}/g, `${hh}:${mm}`);
}

function ruleHit(rule: ReplyRuleSpec, message: string): boolean {
  if (!rule.enabled) return false;
  try {
    if (rule.kind === 'regex') {
      return new RegExp(rule.pattern, 'i').test(message);
    }
    return message.toLowerCase().includes(rule.pattern.toLowerCase());
  } catch {
    // 用户输入非法正则时按不命中处理，避免整条链路抛错
    return false;
  }
}

/**
 * 按优先级匹配规则。
 * 同优先级下关键词规则优先于正则（更可控），再按规则名字典序保证结果稳定。
 * 冷却用于避免同一客户短时间内被反复同话术触达。
 */
export function matchReply(
  message: string,
  rules: ReplyRuleSpec[],
  ctx: ReplyContext = {}
): ReplyMatch | null {
  const now = Date.now();
  const candidates = rules
    .filter((rule) => ruleHit(rule, message))
    .sort((a, b) => {
      if (b.priority !== a.priority) return b.priority - a.priority;
      if (a.kind !== b.kind) return a.kind === 'keyword' ? -1 : 1;
      return (a.name || a.pattern).localeCompare(b.name || b.pattern);
    });

  for (const rule of candidates) {
    const last = COOLDOWN_MS.get(rule.id) || 0;
    if (now - last < rule.cooldownSec * 1000) continue;
    COOLDOWN_MS.set(rule.id, now);
    return {
      rule,
      reply: renderTemplate(rule.reply, ctx),
      matchedAt: now,
      score: rule.priority,
    };
  }
  return null;
}

/** 无规则命中时的兜底首响，仍保留意向分级用于线索推进 */
export function fallbackReply(message: string, ctx: ReplyContext = {}): string {
  const intent = detectIntent(message);
  if (intent === 'high') {
    return renderTemplate('收到，{昵称}。我把{产品}的详细资料和报价整理好发您，方便留个联系方式吗？', ctx);
  }
  if (intent === 'medium') {
    return renderTemplate('{昵称}您好，{产品}支持先体验再决定，您想先看案例还是先试用？', ctx);
  }
  return renderTemplate('{昵称}您好，已收到您的消息，我们会尽快回复。也可以先看看主页的案例合集。', ctx);
}

/** 规则命中统计，用于评估话术覆盖度 */
export function ruleCoverage(rules: ReplyRuleSpec[], samples: string[]) {
  const stats = rules.map((rule) => ({
    id: rule.id,
    name: rule.name || rule.pattern,
    hits: samples.filter((sample) => ruleHit(rule, sample)).length,
  }));
  const uncovered = samples.filter((sample) => !rules.some((rule) => ruleHit(rule, sample)));
  return {
    stats: stats.sort((a, b) => b.hits - a.hits),
    uncovered,
    coverage: samples.length === 0 ? 0 : Math.round(((samples.length - uncovered.length) / samples.length) * 100),
  };
}

export function resetCooldowns() {
  COOLDOWN_MS.clear();
}
