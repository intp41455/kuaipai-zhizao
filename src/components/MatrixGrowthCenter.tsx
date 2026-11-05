"use client";
import { useEffect, useRef, useState, type ReactNode } from 'react';
import {
  Users,
  Zap,
  FileText,
  Clock,
  LayoutGrid,
  MessageSquareText,
  Play,
  Pause,
  Plus,
  Trash2,
  Copy,
  RefreshCw,
  Share2,
  Sparkles,
  Globe,
  Mic,
  AlertCircle,
  Layers,
  ShieldCheck,
  ImagePlus,
  Download,
  Scissors,
} from 'lucide-react';

import {
  scanCompliance,
  levelLabel,
  levelTone,
  type ComplianceReport,
} from '../lib/core/compliance';
import { matchReply, fallbackReply, detectIntent } from '../lib/core/reply';
import {
  normalizeScript,
  alignSpoken,
  followSpeed,
  indexFromScroll,
  speechRecognitionAvailable,
  createSpeechRecognizer,
} from '../lib/core/prompter';
import { buildCardSet, downloadCards, renderCard, CARD_SIZES, type CardSpec } from '../lib/core/cards';
import { planMix, toEdl, toFfmpeg, inferShotTags, type ClipAsset, type MixPlan } from '../lib/core/mix';
import { SuperToolsSuite } from './SuperToolsSuite';

type Platform = '抖音' | '快手' | '小红书' | '视频号';
type HubTab = 'accounts' | 'split' | 'copy' | 'schedule' | 'sop' | 'leads' | 'prompter' | 'cards' | 'mix' | 'tools';

const PLATFORMS: Platform[] = ['抖音', '快手', '小红书', '视频号'];
const SOP_STAGES = ['策划', '拍摄', '剪辑', '主理人验收', '已发布'];

interface MatrixAccount {
  id: string;
  name: string;
  platform: Platform;
  group: string;
  followers: number;
  status: 'online' | 'paused';
}

interface CopyItem {
  id: string;
  platform: Platform;
  title: string;
  hook: string;
  caption: string;
  hashtags: string[];
  riskScore: number;
}

interface ScheduleItem {
  id: string;
  accountId: string;
  accountName: string;
  title: string;
  publishAt: string;
  status: 'pending' | 'published';
}

interface SopCard {
  id: string;
  title: string;
  owner: string;
  stage: number;
  due: string;
  verdict: 'pending' | 'pass' | 'reject';
  note: string;
}

interface Lead {
  id: string;
  nickname: string;
  platform: Platform;
  message: string;
  intent: 'high' | 'medium' | 'low';
  status: 'new' | 'replied' | 'converted';
  reply: string;
}

interface Variant {
  angle: string;
  hook: string;
  script: string;
  caption: string;
  platform: Platform;
  riskScore: number;
}

interface ReplyRule {
  keyword: string;
  reply: string;
}

const uid = () => Math.random().toString(36).slice(2, 10);

function readStore<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeStore(key: string, value: unknown) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // 本地存储不可用时保持内存态
  }
}

function riskTone(score: number) {
  if (score >= 80) return 'bg-emerald-50 text-emerald-700 border-emerald-200';
  if (score >= 60) return 'bg-amber-50 text-amber-700 border-amber-200';
  return 'bg-rose-50 text-rose-700 border-rose-200';
}

function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-sky-100 bg-white p-4 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

function SectionTitle({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
        {icon}
      </div>
      <div>
        <h2 className="text-base font-bold text-slate-900">{title}</h2>
        <p className="mt-0.5 text-xs text-slate-500">{desc}</p>
      </div>
    </div>
  );
}

function CardPreview({ spec }: { spec: CardSpec }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    renderCard(ctx, spec, CARD_SIZES.note);
  }, [spec]);
  return (
    <div className="overflow-hidden rounded-xl border border-sky-200 bg-white">
      <canvas ref={canvasRef} width={CARD_SIZES.note.width} height={CARD_SIZES.note.height} className="h-auto w-full" />
      <div className="flex items-center justify-between border-t border-sky-100 px-2 py-1 text-[10px] text-slate-500">
        <span className="font-semibold text-slate-700">{spec.tag || spec.template}</span>
        <span>1080×1440</span>
      </div>
    </div>
  );
}

export function MatrixGrowthCenter({
  onShowNotice,
}: {
  onShowNotice?: (type: 'success' | 'error', message: string) => void;
}) {
  const [tab, setTab] = useState<HubTab>('accounts');
  const [accounts, setAccounts] = useState<MatrixAccount[]>(() =>
    readStore<MatrixAccount[]>('kps-matrix-accounts', [])
  );
  const [copies, setCopies] = useState<CopyItem[]>(() =>
    readStore<CopyItem[]>('kps-matrix-copies', [])
  );
  const [schedule, setSchedule] = useState<ScheduleItem[]>(() =>
    readStore<ScheduleItem[]>('kps-matrix-schedule', [])
  );
  const [sopCards, setSopCards] = useState<SopCard[]>(() =>
    readStore<SopCard[]>('kps-matrix-sop', [])
  );
  const [leads, setLeads] = useState<Lead[]>(() =>
    readStore<Lead[]>('kps-matrix-leads', [])
  );
  const [rules, setRules] = useState<ReplyRule[]>(() =>
    readStore<ReplyRule[]>('kps-matrix-rules', [
      { keyword: '价格', reply: '您好，价格根据套餐和账号数量浮动，我先把最新报价单发您，方便留个微信吗？' },
      { keyword: '试用', reply: '可以安排 3 天试用，您把账号平台和行业发我，我马上给您开通体验名额。' },
      { keyword: '合作', reply: '感谢关注，我们支持代运营与分销合作，方便发一下您的账号主页链接吗？' },
    ])
  );

  const [accountDraft, setAccountDraft] = useState({
    name: '',
    platform: '抖音' as Platform,
    group: '默认分组',
  });

  const [loading, setLoading] = useState<'split' | 'copy' | null>(null);
  const [splitScript, setSplitScript] = useState('');
  const [splitCount, setSplitCount] = useState(10);
  const [splitProduct, setSplitProduct] = useState('');
  const [splitPlatforms, setSplitPlatforms] = useState<Platform[]>(['抖音', '小红书']);
  const [variants, setVariants] = useState<Variant[]>([]);
  const [compliance, setCompliance] = useState<{ score: number; issues: string[]; strategy: string } | null>(null);

  const [copyTopic, setCopyTopic] = useState('');
  const [copyTone, setCopyTone] = useState('高转化口播风');
  const [copyCount, setCopyCount] = useState(8);
  const [seoKeywords, setSeoKeywords] = useState<string[]>([]);
  const [cadence, setCadence] = useState('');

  const [scheduleDraft, setScheduleDraft] = useState({
    accountId: '',
    title: '',
    publishAt: '',
  });

  const [sopDraft, setSopDraft] = useState({ title: '', owner: '', due: '' });
  const [leadDraft, setLeadDraft] = useState({ nickname: '', platform: '抖音' as Platform, message: '' });
  const [replyRuleDraft, setReplyRuleDraft] = useState({ keyword: '', reply: '' });

  const [prompterText, setPrompterText] = useState(
    '大家好，今天给你看一个真正能落地的矩阵增长方案。\n\n第一步，先用爆款拆解找到可复用的结构。\n第二步，让 AI 一次裂变出十条不同角度的脚本。\n第三步，按账号分组排期，主理人验收后再发布。\n\n如果你也在做短视频矩阵，评论区回「矩阵」，我把这套 SOP 发你。'
  );
  const [prompterRunning, setPrompterRunning] = useState(false);
  const [prompterSpeed, setPrompterSpeed] = useState(4);
  const [prompterFont, setPrompterFont] = useState(34);
  const [prompterMirror, setPrompterMirror] = useState(false);
  const [ttsOn, setTtsOn] = useState(false);
  const [voiceFollow, setVoiceFollow] = useState(false);
  const [voiceHint, setVoiceHint] = useState('');
  const prompterRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const scriptNormRef = useRef(normalizeScript(prompterText));
  const voiceTargetRef = useRef(-1);
  const recognizerRef = useRef<ReturnType<typeof createSpeechRecognizer>>(null);

  const [audit, setAudit] = useState<{ title: string; report: ComplianceReport } | null>(null);
  const [cardTopic, setCardTopic] = useState('');
  const [cardPoints, setCardPoints] = useState('');
  const [cardSpecs, setCardSpecs] = useState<CardSpec[]>([]);

  const [mixAssetsText, setMixAssetsText] = useState('');
  const [mixDuration, setMixDuration] = useState(60);
  const [mixBpm, setMixBpm] = useState(120);
  const [mixScript, setMixScript] = useState('');
  const [mixPlan, setMixPlan] = useState<MixPlan | null>(null);
  const [mixClips, setMixClips] = useState<ClipAsset[]>([]);

  useEffect(() => {
    fetch('/api/v1/matrix/accounts')
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setAccounts(
            data.map((r: any) => ({
              id: String(r.id),
              name: r.name,
              platform: (r.platform === 'douyin' ? '抖音' : r.platform === 'kuaishou' ? '快手' : r.platform === 'xhs' ? '小红书' : '视频号') as Platform,
              group: r.groupName || '默认分组',
              followers: r.followers || 0,
              status: (r.status === 'offline' ? 'paused' : 'online') as 'online' | 'paused',
            }))
          );
        }
      })
      .catch(() => {});

    fetch('/api/v1/matrix/schedules')
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setSchedule(
            data.map((r: any) => ({
              id: String(r.id),
              accountId: String(r.accountId || ''),
              accountName: r.accountName || '矩阵号',
              platform: (r.platform === 'douyin' ? '抖音' : r.platform === 'kuaishou' ? '快手' : '视频号') as Platform,
              title: r.title,
              publishAt: r.publishAt || '',
              status: (r.status === 'published' ? 'published' : 'pending') as 'pending' | 'published',
            }))
          );
        }
      })
      .catch(() => {});

    fetch('/api/v1/matrix/sop/tasks')
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setSopCards(
            data.map((r: any) => ({
              id: String(r.id),
              title: r.title,
              stage: r.stage || 0,
              owner: r.ownerName || '运营组',
              due: r.dueDate || '本周内',
              verdict: (r.verdict as 'pending' | 'pass' | 'reject') || 'pending',
              note: r.storeName || '',
            }))
          );
        }
      })
      .catch(() => {});

    fetch('/api/v1/group-buy/leads')
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setLeads(
            data.map((r: any) => ({
              id: String(r.id),
              nickname: r.customer_name || '同城顾客',
              platform: '抖音' as Platform,
              message: `领券预约：${r.reserved_benefit} (${r.customer_phone})`,
              intent: 'high' as const,
              status: (r.status === 'verified' ? 'converted' : 'new') as 'new' | 'replied' | 'converted',
              reply: r.status === 'verified' ? '✓ 门店已核销' : '待到店核销',
            }))
          );
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => writeStore('kps-matrix-accounts', accounts), [accounts]);
  useEffect(() => writeStore('kps-matrix-copies', copies), [copies]);
  useEffect(() => writeStore('kps-matrix-schedule', schedule), [schedule]);
  useEffect(() => writeStore('kps-matrix-sop', sopCards), [sopCards]);
  useEffect(() => writeStore('kps-matrix-leads', leads), [leads]);
  useEffect(() => writeStore('kps-matrix-rules', rules), [rules]);

  useEffect(() => {
    if (!prompterRunning) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      return;
    }
    let last = performance.now();
    const step = (now: number) => {
      const el = prompterRef.current;
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (el) {
        const baseSpeed = prompterSpeed * 21;
        const targetIndex = voiceFollow ? voiceTargetRef.current : -1;
        const currentIndex = indexFromScroll(el.scrollTop, el.scrollHeight, el.clientHeight, prompterText.length);
        const speed = voiceFollow ? followSpeed({ targetIndex, currentIndex, baseSpeed }) : baseSpeed;
        el.scrollTop += speed * dt;
      }
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [prompterRunning, prompterSpeed, voiceFollow, prompterText.length]);

  useEffect(() => {
    scriptNormRef.current = normalizeScript(prompterText);
    voiceTargetRef.current = -1;
  }, [prompterText]);

  useEffect(() => {
    let active = true;
    if (!voiceFollow) {
      recognizerRef.current?.stop?.();
      recognizerRef.current = null;
      setVoiceHint('');
      return;
    }
    const recognizer = createSpeechRecognizer('zh-CN');
    if (!recognizer) {
      setVoiceHint('当前浏览器不支持语音识别，已回退为匀速滚动');
      setVoiceFollow(false);
      return;
    }
    let lastSearch = 0;
    recognizer.onresult = (event: { resultIndex: number; results: ArrayLike<ArrayLike<{ transcript: string }>> }) => {
      let transcript = '';
      for (let i = event.resultIndex; i < event.results.length; i += 1) {
        transcript += event.results[i][0].transcript;
      }
      const aligned = alignSpoken(scriptNormRef.current, transcript, lastSearch);
      if (aligned.index >= 0) {
        lastSearch = aligned.index;
        voiceTargetRef.current = aligned.index;
        setVoiceHint(`已跟随到第 ${aligned.index} 字`);
      }
    };
    recognizer.onerror = () => {
      if (active) setVoiceHint('语音识别中断，可关闭后重新开启');
    };
    recognizer.onend = () => {
      if (!active) return;
      try {
        recognizer.start();
      } catch {
        // 浏览器已在重启，忽略重复 start
      }
    };
    try {
      recognizer.start();
    } catch {
      // 权限未授予时交由 onerror 提示
    }
    recognizerRef.current = recognizer;
    return () => {
      active = false;
      try {
        recognizer.stop();
      } catch {
        // 已停止
      }
    };
  }, [voiceFollow]);

  useEffect(() => {
    if (!('speechSynthesis' in window)) return;
    if (ttsOn) {
      const utter = new SpeechSynthesisUtterance(prompterText);
      utter.lang = 'zh-CN';
      utter.rate = Math.min(1.6, 0.7 + prompterSpeed * 0.06);
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utter);
    } else {
      window.speechSynthesis.cancel();
    }
    return () => window.speechSynthesis.cancel();
  }, [ttsOn, prompterText, prompterSpeed]);

  const togglePlatform = (list: Platform[], value: Platform, setter: (next: Platform[]) => void) => {
    setter(list.includes(value) ? list.filter((item) => item !== value) : [...list, value]);
  };

  const addAccount = () => {
    if (!accountDraft.name.trim()) {
      onShowNotice?.('error', '请先填写账号名称');
      return;
    }
    fetch('/api/v1/matrix/accounts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: accountDraft.name.trim(),
        platform: accountDraft.platform,
        group_name: accountDraft.group.trim() || '默认分组',
        status: 'online',
      }),
    })
      .then((r) => r.json())
      .then((res) => {
        setAccounts((prev) => [
          {
            id: res.id ? String(res.id) : uid(),
            name: accountDraft.name.trim(),
            platform: accountDraft.platform,
            group: accountDraft.group.trim() || '默认分组',
            followers: 0,
            status: 'online',
          },
          ...prev,
        ]);
        setAccountDraft({ name: '', platform: accountDraft.platform, group: accountDraft.group });
        onShowNotice?.('success', '已加入矩阵账号池并落库至数据库！');
      })
      .catch(() => {});
  };

  const runSplit = async () => {
    if (!splitScript.trim()) {
      onShowNotice?.('error', '请先粘贴一条原始脚本或爆款文案');
      return;
    }
    setLoading('split');
    try {
      const resp = await fetch('/api/ai/matrix-split', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          script: splitScript,
          product: splitProduct,
          count: splitCount,
          platforms: splitPlatforms,
        }),
      });
      const data = await resp.json();
      if (!resp.ok) throw new Error(data?.error || 'AI 裂变失败');
      setVariants(Array.isArray(data.variants) ? data.variants : []);
      setCompliance(data.compliance ?? null);
      onShowNotice?.('success', `已生成 ${data.variants?.length ?? 0} 条矩阵裂变稿`);
    } catch (error) {
      onShowNotice?.('error', error instanceof Error ? error.message : 'AI 裂变失败');
    } finally {
      setLoading(null);
    }
  };

  const runCopy = async () => {
    if (!copyTopic.trim()) {
      onShowNotice?.('error', '请先填写选题或商品主题');
      return;
    }
    if (splitPlatforms.length === 0) {
      onShowNotice?.('error', '至少选择一个发布平台');
      return;
    }
    setLoading('copy');
    try {
      const resp = await fetch('/api/ai/matrix-copy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: copyTopic,
          tone: copyTone,
          count: copyCount,
          platforms: splitPlatforms,
        }),
      });
      const data = await resp.json();
      if (!resp.ok) throw new Error(data?.error || 'AI 文案生成失败');
      const items: CopyItem[] = (Array.isArray(data.items) ? data.items : []).map((item: CopyItem) => ({
        id: uid(),
        platform: item.platform || '抖音',
        title: String(item.title || '').slice(0, 80),
        hook: String(item.hook || '').slice(0, 120),
        caption: String(item.caption || '').slice(0, 600),
        hashtags: Array.isArray(item.hashtags) ? item.hashtags.slice(0, 8) : [],
        riskScore: Number(item.riskScore) || 80,
      }));
      setCopies(items);
      setSeoKeywords(Array.isArray(data.seoKeywords) ? data.seoKeywords : []);
      setCadence(String(data.cadenceSuggestion || ''));
      onShowNotice?.('success', `已生成 ${items.length} 条平台化文案`);
    } catch (error) {
      onShowNotice?.('error', error instanceof Error ? error.message : 'AI 文案生成失败');
    } finally {
      setLoading(null);
    }
  };

  const addToSchedule = (item: CopyItem) => {
    const account = accounts.find((acc) => acc.platform === item.platform) || accounts[0];
    if (!account) {
      onShowNotice?.('error', '请先在「矩阵账号」里添加至少一个账号');
      return;
    }
    const publishAt = new Date(Date.now() + 3600 * 1000).toISOString().slice(0, 16);
    setSchedule((prev) => [
      {
        id: uid(),
        accountId: account.id,
        accountName: `${account.platform} · ${account.name}`,
        title: item.title,
        publishAt,
        status: 'pending',
      },
      ...prev,
    ]);
    onShowNotice?.('success', '已加入发布排期，可继续调整时间');
  };

  const createSchedule = () => {
    const account = accounts.find((item) => item.id === scheduleDraft.accountId);
    if (!account || !scheduleDraft.title.trim()) {
      onShowNotice?.('error', '请选择账号并填写标题');
      return;
    }
    const pubAt = scheduleDraft.publishAt || new Date(Date.now() + 3600 * 1000).toISOString().slice(0, 16);
    fetch('/api/v1/matrix/schedules', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        account_name: account.name,
        platform: account.platform,
        title: scheduleDraft.title.trim(),
        publish_at: pubAt,
      }),
    })
      .then((r) => r.json())
      .then((res) => {
        setSchedule((prev) => [
          {
            id: res.id ? String(res.id) : uid(),
            accountId: account.id,
            accountName: `${account.platform} · ${account.name}`,
            title: scheduleDraft.title.trim(),
            publishAt: pubAt,
            status: 'pending',
          },
          ...prev,
        ]);
        setScheduleDraft({ ...scheduleDraft, title: '' });
        onShowNotice?.('success', '排期已创建并成功写入数据库！');
      })
      .catch(() => {});
  };

  const applyIntervalPlan = () => {
    const pending = schedule.filter((item) => item.status === 'pending');
    if (pending.length === 0) {
      onShowNotice?.('error', '暂无可排期的待发布任务');
      return;
    }
    setSchedule((prev) =>
      prev.map((item) => {
        const index = pending.findIndex((entry) => entry.id === item.id);
        if (index < 0) return item;
        const date = new Date();
        date.setDate(date.getDate() + index);
        date.setHours(19, 0, 0, 0);
        return { ...item, publishAt: date.toISOString().slice(0, 16) };
      })
    );
    onShowNotice?.('success', '已按「每天 19:00 一条」错峰排期');
  };

  const markPublished = (id: string) => {
    const numId = Number(id);
    if (!isNaN(numId)) {
      fetch(`/api/v1/matrix/schedules/${numId}/status?status=published`, { method: 'PUT' }).catch(() => {});
    }
    setSchedule((prev) => prev.map((item) => (item.id === id ? { ...item, status: 'published' } : item)));
    onShowNotice?.('success', '已标记为已发布并同步数据库');
  };

  const addSopCard = () => {
    if (!sopDraft.title.trim()) {
      onShowNotice?.('error', '请填写任务标题');
      return;
    }
    fetch('/api/v1/matrix/sop/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: sopDraft.title.trim(),
        owner_name: sopDraft.owner.trim() || '待指派',
        due_date: sopDraft.due || '本周内交付',
      }),
    })
      .then((r) => r.json())
      .then((res) => {
        setSopCards((prev) => [
          {
            id: res.id ? String(res.id) : uid(),
            title: sopDraft.title.trim(),
            owner: sopDraft.owner.trim() || '待指派',
            stage: 0,
            due: sopDraft.due || '本周内',
            verdict: 'pending',
            note: '',
          },
          ...prev,
        ]);
        setSopDraft({ title: '', owner: '', due: '' });
        onShowNotice?.('success', 'SOP任务已创建并落库至数据库');
      })
      .catch(() => {});
  };

  const moveSop = (id: string, delta: number) => {
    setSopCards((prev) =>
      prev.map((card) => {
        if (card.id !== id) return card;
        const next = Math.max(0, Math.min(SOP_STAGES.length - 1, card.stage + delta));
        const numId = Number(id);
        if (!isNaN(numId)) {
          fetch(`/api/v1/matrix/sop/tasks/${numId}/stage?stage=${next}`, {
            method: 'PUT',
          }).catch(() => {});
        }
        return {
          ...card,
          stage: next,
          verdict: next === 3 ? card.verdict : next === 4 ? 'pass' : card.verdict,
        };
      })
    );
  };

  const addLead = () => {
    if (!leadDraft.nickname.trim() || !leadDraft.message.trim()) {
      onShowNotice?.('error', '请填写昵称与私信内容');
      return;
    }
    setLeads((prev) => [
      {
        id: uid(),
        nickname: leadDraft.nickname.trim(),
        platform: leadDraft.platform,
        message: leadDraft.message.trim(),
        intent: /价格|报价|购买|下单/.test(leadDraft.message) ? 'high' : 'medium',
        status: 'new',
        reply: '',
      },
      ...prev,
    ]);
    setLeadDraft({ nickname: '', platform: leadDraft.platform, message: '' });
  };

  const generateReply = (lead: Lead) => {
    const specs = rules.map((rule, index) => ({
      id: `kw-${index}-${rule.keyword}`,
      name: rule.keyword,
      kind: 'keyword' as const,
      pattern: rule.keyword,
      reply: rule.reply,
      priority: rules.length - index,
      enabled: true,
      cooldownSec: 0,
    }));
    const matched = matchReply(lead.message, specs, {
      nickname: lead.nickname,
      platform: lead.platform,
      product: '矩阵增长方案',
    });
    const intent = detectIntent(lead.message);
    const reply = matched
      ? `${matched.reply}（命中规则：${matched.rule.pattern}）`
      : `${fallbackReply(lead.message, { nickname: lead.nickname, platform: lead.platform, product: '矩阵增长方案' })}（意向：${
          intent === 'high' ? '高' : intent === 'medium' ? '中' : '低'
        }）`;
    setLeads((prev) => prev.map((item) => (item.id === lead.id ? { ...item, reply, status: 'replied' } : item)));
  };

  const runAudit = (item: CopyItem) => {
    const report = scanCompliance(`${item.title}\n${item.hook}\n${item.caption}\n${item.hashtags.join(' ')}`, item.platform as Platform);
    setAudit({ title: item.title, report });
    onShowNotice?.(report.score >= 80 ? 'success' : 'error', `本地体检完成：健康分 ${report.score}`);
  };

  const buildCards = () => {
    const points = cardPoints
      .split(/\n|；|;|、/)
      .map((line) => line.trim())
      .filter(Boolean);
    if (!cardTopic.trim() && points.length === 0) {
      onShowNotice?.('error', '请先填写选题或要点');
      return;
    }
    setCardSpecs(buildCardSet(cardTopic, points));
    onShowNotice?.('success', '已生成 4 张图文卡片，可直接导出 PNG');
  };

  const runMixPlan = () => {
    const clips: ClipAsset[] = mixAssetsText
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line, index) => {
        const [name, duration, tags] = line.split('|').map((part) => (part || '').trim());
        return {
          id: `clip-${index + 1}`,
          name: name || `素材${index + 1}`,
          durationSec: Math.max(1, Number(duration) || 10),
          tags: tags ? tags.split(/[,，、]/).map((tag) => tag.trim()).filter(Boolean) : [],
          quality: 'medium' as const,
        };
      });
    if (clips.length === 0) {
      onShowNotice?.('error', '请先按「文件名|时长秒|标签」逐行填写素材');
      return;
    }
    const plan = planMix(clips, {
      targetDurationSec: mixDuration,
      bpm: mixBpm,
      preferTags: inferShotTags(mixScript),
    });
    setMixClips(clips);
    setMixPlan(plan);
    onShowNotice?.('success', `已排 ${plan.shots.length} 个镜头，成片约 ${plan.totalSec}s`);
  };

  const copyText = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      onShowNotice?.('success', `${label}已复制`);
    } catch {
      onShowNotice?.('error', '剪贴板不可用，请手动全选复制');
    }
  };

  const addRule = () => {
    if (!replyRuleDraft.keyword.trim() || !replyRuleDraft.reply.trim()) {
      onShowNotice?.('error', '关键词和回复话术不能为空');
      return;
    }
    setRules((prev) => [{ ...replyRuleDraft }, ...prev]);
    setReplyRuleDraft({ keyword: '', reply: '' });
  };

  const loadDemo = () => {
    setAccounts([
      { id: uid(), name: '品牌主号', platform: '抖音', group: '品牌号', followers: 128000, status: 'online' },
      { id: uid(), name: '门店矩阵-01', platform: '快手', group: '门店矩阵', followers: 32000, status: 'online' },
      { id: uid(), name: '种草小号', platform: '小红书', group: '种草号', followers: 56000, status: 'paused' },
    ]);
    setSopCards([
      { id: uid(), title: '春季新品口播第一条', owner: '阿青', stage: 2, due: '今天 18:00', verdict: 'pending', note: '' },
      { id: uid(), title: '门店引流混剪 A 版', owner: '小周', stage: 1, due: '明天 12:00', verdict: 'pending', note: '' },
    ]);
    setLeads([
      { id: uid(), nickname: '做服装的老王', platform: '抖音', message: '你们这个矩阵怎么收费？想先试试', intent: 'high', status: 'new', reply: '' },
      { id: uid(), nickname: '小红书运营喵', platform: '小红书', message: '能批量生成图文吗？', intent: 'medium', status: 'new', reply: '' },
    ]);
    onShowNotice?.('success', '已载入可清除的演示样例');
  };

  const stats = [
    { label: '矩阵账号', value: accounts.length, hint: `${accounts.filter((item) => item.status === 'online').length} 个在线` },
    { label: '待发布', value: schedule.filter((item) => item.status === 'pending').length, hint: '排期任务' },
    { label: '待验收', value: sopCards.filter((item) => item.stage >= 2 && item.stage <= 3).length, hint: '主理人闸门' },
    { label: '待跟进线索', value: leads.filter((item) => item.status !== 'converted').length, hint: '私信商机' },
  ];

  const tabs: { id: HubTab; label: string; icon: ReactNode }[] = [
    { id: 'accounts', label: '矩阵账号', icon: <Users className="h-4 w-4" /> },
    { id: 'split', label: 'AI 爆款裂变', icon: <Zap className="h-4 w-4" /> },
    { id: 'copy', label: '批量文案 / SEO', icon: <FileText className="h-4 w-4" /> },
    { id: 'schedule', label: '发布排期', icon: <Clock className="h-4 w-4" /> },
    { id: 'sop', label: 'SOP 验收', icon: <LayoutGrid className="h-4 w-4" /> },
    { id: 'leads', label: '私信线索', icon: <MessageSquareText className="h-4 w-4" /> },
    { id: 'prompter', label: '口播提词器', icon: <Mic className="h-4 w-4" /> },
    { id: 'cards', label: '图文批量出图', icon: <ImagePlus className="h-4 w-4" /> },
    { id: 'mix', label: '智能混剪编排', icon: <Scissors className="h-4 w-4" /> },
    { id: 'tools', label: '百宝工具箱', icon: <Sparkles className="h-4 w-4" /> },
  ];

  return (
    <div className="space-y-4">
      <Card className="bg-white">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-indigo-600">
              <Layers className="h-3.5 w-3.5" /> Matrix Growth OS
            </div>
            <h1 className="mt-1 text-xl font-black text-slate-900">全域矩阵增长中心</h1>
            <p className="mt-1 max-w-3xl text-xs leading-5 text-slate-600">
              对标星链引擎、猫尼科技、火兔工具箱与开拍：把账号矩阵、AI 裂变、批量文案、错峰排期、SOP 验收、私信线索和口播提词收进同一工作流。
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={loadDemo}
              className="rounded-xl border border-sky-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-sky-50"
            >
              载入演示样例
            </button>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="rounded-xl border border-white bg-white px-3 py-2.5">
              <div className="text-[11px] text-slate-500">{item.label}</div>
              <div className="mt-0.5 text-lg font-black text-slate-900">{item.value}</div>
              <div className="text-[10px] text-slate-400">{item.hint}</div>
            </div>
          ))}
        </div>
      </Card>

      <div className="flex flex-wrap gap-2">
        {tabs.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setTab(item.id)}
            className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold transition-colors ${
              tab === item.id
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'border border-sky-100 bg-white text-slate-600 hover:bg-sky-50'
            }`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>

      {tab === 'accounts' && (
        <Card>
          <SectionTitle icon={<Users className="h-4 w-4" />} title="矩阵账号池" desc="按平台与业务分组管理账号，为后续排期与线索分配提供统一底座。" />
          <div className="mt-4 grid gap-2 sm:grid-cols-4">
            <input
              value={accountDraft.name}
              onChange={(event) => setAccountDraft({ ...accountDraft, name: event.target.value })}
              placeholder="账号名称，例如 品牌主号"
              className="rounded-xl border border-sky-200 px-3 py-2 text-xs outline-none focus:border-indigo-400"
            />
            <select
              value={accountDraft.platform}
              onChange={(event) => setAccountDraft({ ...accountDraft, platform: event.target.value as Platform })}
              className="rounded-xl border border-sky-200 px-3 py-2 text-xs outline-none focus:border-indigo-400"
            >
              {PLATFORMS.map((platform) => (
                <option key={platform} value={platform}>
                  {platform}
                </option>
              ))}
            </select>
            <input
              value={accountDraft.group}
              onChange={(event) => setAccountDraft({ ...accountDraft, group: event.target.value })}
              placeholder="分组，例如 门店矩阵"
              className="rounded-xl border border-sky-200 px-3 py-2 text-xs outline-none focus:border-indigo-400"
            />
            <button
              type="button"
              onClick={addAccount}
              className="flex items-center justify-center gap-1.5 rounded-xl bg-indigo-600 px-3 py-2 text-xs font-semibold text-white hover:bg-indigo-700"
            >
              <Plus className="h-3.5 w-3.5" /> 添加账号
            </button>
          </div>

          {accounts.length === 0 ? (
            <div className="mt-6 rounded-xl border border-dashed border-sky-200 bg-sky-50/40 px-4 py-8 text-center text-xs text-slate-500">
              还没有账号。先添加账号，或点击「载入演示样例」查看完整看板。
            </div>
          ) : (
            <div className="mt-4 grid gap-2 md:grid-cols-2 xl:grid-cols-3">
              {accounts.map((account) => (
                <div key={account.id} className="rounded-xl border border-sky-100 bg-slate-50/60 p-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="text-xs font-bold text-slate-900">{account.name}</div>
                      <div className="mt-1 flex flex-wrap items-center gap-1 text-[10px] text-slate-500">
                        <span className="rounded-full bg-white px-1.5 py-0.5 text-indigo-600">{account.platform}</span>
                        <span className="rounded-full bg-white px-1.5 py-0.5">{account.group}</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setAccounts((prev) => prev.filter((item) => item.id !== account.id))}
                      className="rounded-lg p-1 text-slate-400 hover:bg-rose-50 hover:text-rose-600"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
                    <span>粉丝 {account.followers.toLocaleString()}</span>
                    <button
                      type="button"
                      onClick={() =>
                        setAccounts((prev) =>
                          prev.map((item) =>
                            item.id === account.id
                              ? { ...item, status: item.status === 'online' ? 'paused' : 'online' }
                              : item
                          )
                        )
                      }
                      className={`rounded-full px-2 py-0.5 font-semibold ${
                        account.status === 'online' ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {account.status === 'online' ? '在线' : '暂停'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      )}

      {tab === 'split' && (
        <Card>
          <SectionTitle icon={<Zap className="h-4 w-4" />} title="AI 爆款裂变" desc="对标猫尼「AI 爆款拆解与裂变」：一条母稿裂变多角度矩阵稿，并给出违禁词健康分。" />
          <div className="mt-4 grid gap-3 lg:grid-cols-2">
            <div>
              <label className="text-[11px] font-semibold text-slate-600">母稿 / 爆款文案</label>
              <textarea
                value={splitScript}
                onChange={(event) => setSplitScript(event.target.value)}
                rows={8}
                placeholder="粘贴一条已经跑出数据的脚本或文案"
                className="mt-1 w-full rounded-xl border border-sky-200 px-3 py-2 text-xs leading-5 outline-none focus:border-indigo-400"
              />
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-[11px] font-semibold text-slate-600">商品 / 主题</label>
                <input
                  value={splitProduct}
                  onChange={(event) => setSplitProduct(event.target.value)}
                  placeholder="例如 小家电 / 门店引流 / 知识付费"
                  className="mt-1 w-full rounded-xl border border-sky-200 px-3 py-2 text-xs outline-none focus:border-indigo-400"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[11px] font-semibold text-slate-600">裂变数量</label>
                  <select
                    value={splitCount}
                    onChange={(event) => setSplitCount(Number(event.target.value))}
                    className="mt-1 w-full rounded-xl border border-sky-200 px-3 py-2 text-xs outline-none focus:border-indigo-400"
                  >
                    {[5, 10, 20].map((count) => (
                      <option key={count} value={count}>
                        {count} 条
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-slate-600">目标平台</label>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {PLATFORMS.map((platform) => (
                      <button
                        key={platform}
                        type="button"
                        onClick={() => togglePlatform(splitPlatforms, platform, setSplitPlatforms)}
                        className={`rounded-full px-2 py-1 text-[10px] font-semibold ${
                          splitPlatforms.includes(platform)
                            ? 'bg-indigo-600 text-white'
                            : 'bg-sky-50 text-slate-600'
                        }`}
                      >
                        {platform}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={runSplit}
                disabled={loading === 'split'}
                className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-indigo-600 px-3 py-2.5 text-xs font-bold text-white hover:bg-indigo-700 disabled:opacity-60"
              >
                {loading === 'split' ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Sparkles className="h-3.5 w-3.5" />}
                {loading === 'split' ? '正在裂变…' : '生成矩阵裂变稿'}
              </button>
              {compliance && (
                <div className={`rounded-xl border px-3 py-2 text-[11px] ${riskTone(compliance.score)}`}>
                  <div className="flex items-center justify-between font-semibold">
                    <span>合规健康分</span>
                    <span>{compliance.score}/100</span>
                  </div>
                  {compliance.issues.length > 0 && (
                    <ul className="mt-1 list-disc space-y-0.5 pl-4">
                      {compliance.issues.map((issue) => (
                        <li key={issue}>{issue}</li>
                      ))}
                    </ul>
                  )}
                  {compliance.strategy && <div className="mt-1 text-slate-600">{compliance.strategy}</div>}
                </div>
              )}
            </div>
          </div>

          {variants.length > 0 && (
            <div className="mt-4 grid gap-2 md:grid-cols-2">
              {variants.map((variant) => (
                <div key={`${variant.angle}-${variant.hook}`} className="rounded-xl border border-sky-100 bg-slate-50/60 p-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold text-indigo-600">{variant.angle}</span>
                    <div className="flex items-center gap-1.5">
                      <span className="rounded-full bg-white px-2 py-0.5 text-[10px] text-slate-500">{variant.platform}</span>
                      <span className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold ${riskTone(variant.riskScore)}`}>
                        {variant.riskScore}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 text-xs font-bold text-slate-900">{variant.hook}</div>
                  <p className="mt-1 whitespace-pre-wrap text-[11px] leading-5 text-slate-600">{variant.script}</p>
                  <div className="mt-2 text-[10px] text-slate-500">{variant.caption}</div>
                  <button
                    type="button"
                    onClick={() => {
                      setCopies((prev) => [
                        {
                          id: uid(),
                          platform: variant.platform,
                          title: variant.hook,
                          hook: variant.hook,
                          caption: variant.caption,
                          hashtags: [],
                          riskScore: variant.riskScore,
                        },
                        ...prev,
                      ]);
                      onShowNotice?.('success', '已加入文案池');
                    }}
                    className="mt-2 flex items-center gap-1 text-[10px] font-semibold text-indigo-600 hover:underline"
                  >
                    <Plus className="h-3 w-3" /> 加入文案池
                  </button>
                </div>
              ))}
            </div>
          )}
        </Card>
      )}

      {tab === 'copy' && (
        <Card>
          <SectionTitle icon={<FileText className="h-4 w-4" />} title="批量文案 / 平台 SEO" desc="对标星链「AI 文案批量生成」与开拍「网感文案」：按平台生成标题、钩子、正文与话题标签。" />
          <div className="mt-4 grid gap-2 sm:grid-cols-4">
            <input
              value={copyTopic}
              onChange={(event) => setCopyTopic(event.target.value)}
              placeholder="选题 / 商品 / 门店卖点"
              className="rounded-xl border border-sky-200 px-3 py-2 text-xs outline-none focus:border-indigo-400 sm:col-span-2"
            />
            <select
              value={copyTone}
              onChange={(event) => setCopyTone(event.target.value)}
              className="rounded-xl border border-sky-200 px-3 py-2 text-xs outline-none focus:border-indigo-400"
            >
              {['高转化口播风', '小红书种草风', '门店老板真人风', '专业测评风', '悬念反转风'].map((tone) => (
                <option key={tone} value={tone}>
                  {tone}
                </option>
              ))}
            </select>
            <select
              value={copyCount}
              onChange={(event) => setCopyCount(Number(event.target.value))}
              className="rounded-xl border border-sky-200 px-3 py-2 text-xs outline-none focus:border-indigo-400"
            >
              {[4, 8, 12, 20].map((count) => (
                <option key={count} value={count}>
                  {count} 条
                </option>
              ))}
            </select>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {PLATFORMS.map((platform) => (
              <button
                key={platform}
                type="button"
                onClick={() => togglePlatform(splitPlatforms, platform, setSplitPlatforms)}
                className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                  splitPlatforms.includes(platform) ? 'bg-indigo-600 text-white' : 'bg-sky-50 text-slate-600'
                }`}
              >
                {platform}
              </button>
            ))}
            <button
              type="button"
              onClick={runCopy}
              disabled={loading === 'copy'}
              className="ml-auto flex items-center gap-1.5 rounded-xl bg-indigo-600 px-3 py-2 text-xs font-bold text-white hover:bg-indigo-700 disabled:opacity-60"
            >
              {loading === 'copy' ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Globe className="h-3.5 w-3.5" />}
              {loading === 'copy' ? '生成中…' : '批量生成平台文案'}
            </button>
          </div>

          {(seoKeywords.length > 0 || cadence) && (
            <div className="mt-3 flex flex-wrap items-center gap-2 rounded-xl border border-sky-100 bg-sky-50/50 px-3 py-2 text-[10px] text-slate-600">
              {seoKeywords.length > 0 && (
                <span className="flex flex-wrap items-center gap-1">
                  <span className="font-semibold text-slate-700">SEO 词：</span>
                  {seoKeywords.map((keyword) => (
                    <span key={keyword} className="rounded-full bg-white px-2 py-0.5 text-indigo-600">
                      {keyword}
                    </span>
                  ))}
                </span>
              )}
              {cadence && <span className="font-semibold text-slate-700">节奏建议：{cadence}</span>}
            </div>
          )}

          {copies.length === 0 ? (
            <div className="mt-6 rounded-xl border border-dashed border-sky-200 bg-sky-50/40 px-4 py-8 text-center text-xs text-slate-500">
              输入主题后点击生成。生成的文案会自动带上平台、钩子和健康分。
            </div>
          ) : (
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[720px] text-left text-[11px]">
                <thead className="text-slate-500">
                  <tr>
                    <th className="px-2 py-2">平台</th>
                    <th className="px-2 py-2">标题</th>
                    <th className="px-2 py-2">钩子</th>
                    <th className="px-2 py-2">话题</th>
                    <th className="px-2 py-2">健康分</th>
                    <th className="px-2 py-2">操作</th>
                  </tr>
                </thead>
                <tbody>
                  {copies.map((item) => (
                    <tr key={item.id} className="border-t border-sky-100 align-top">
                      <td className="px-2 py-2"><span className="rounded-full bg-sky-50 px-2 py-0.5 text-indigo-600">{item.platform}</span></td>
                      <td className="max-w-[180px] px-2 py-2 font-semibold text-slate-800">{item.title}</td>
                      <td className="max-w-[220px] px-2 py-2 text-slate-600">{item.hook}</td>
                      <td className="max-w-[160px] px-2 py-2 text-slate-500">{item.hashtags.join(' ')}</td>
                      <td className="px-2 py-2">
                        <span className={`rounded-full border px-2 py-0.5 font-semibold ${riskTone(item.riskScore)}`}>{item.riskScore}</span>
                      </td>
                      <td className="px-2 py-2">
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              navigator.clipboard?.writeText(`${item.title}\n${item.caption}\n${item.hashtags.join(' ')}`);
                              onShowNotice?.('success', '文案已复制');
                            }}
                            className="text-slate-500 hover:text-indigo-600"
                          >
                            <Copy className="h-3.5 w-3.5" />
                          </button>
                          <button type="button" onClick={() => runAudit(item)} className="flex items-center gap-1 text-[10px] font-semibold text-amber-600 hover:underline">
                            <ShieldCheck className="h-3.5 w-3.5" /> 体检
                          </button>
                          <button type="button" onClick={() => addToSchedule(item)} className="text-[10px] font-semibold text-indigo-600 hover:underline">
                            加入排期
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {audit && (
            <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50/60 p-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-[11px] font-bold text-amber-800">
                  <ShieldCheck className="h-3.5 w-3.5" /> 本地合规体检 · {audit.title}
                </div>
                <span className={`rounded-full border px-2 py-0.5 text-[10px] font-bold ${levelTone(audit.report.hits[0]?.level || 'warn')}`}>
                  健康分 {audit.report.score}
                </span>
              </div>
              {audit.report.hits.length === 0 ? (
                <div className="mt-2 text-[11px] text-emerald-700">未命中违禁词，可直接发布。</div>
              ) : (
                <>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {audit.report.hits.map((hit) => (
                      <span key={`${hit.term}-${hit.index}`} className={`rounded-full border px-2 py-0.5 text-[10px] ${levelTone(hit.level)}`}>
                        {hit.term} · {levelLabel(hit.level)} · {hit.category} → {hit.suggestion}
                      </span>
                    ))}
                  </div>
                  <div className="mt-2 rounded-lg bg-white/70 p-2 text-[11px] leading-5 text-slate-700">
                    <b className="text-slate-900">改写稿：</b>
                    {audit.report.rewrite}
                  </div>
                </>
              )}
            </div>
          )}
        </Card>
      )}

      {tab === 'schedule' && (
        <Card>
          <SectionTitle icon={<Clock className="h-4 w-4" />} title="错峰发布排期" desc="对标星链「视频批量上传 + 定时发布」：账号分组、时间错峰、状态回传。" />
          <div className="mt-4 grid gap-2 sm:grid-cols-4">
            <select
              value={scheduleDraft.accountId}
              onChange={(event) => setScheduleDraft({ ...scheduleDraft, accountId: event.target.value })}
              className="rounded-xl border border-sky-200 px-3 py-2 text-xs outline-none focus:border-indigo-400"
            >
              <option value="">选择账号</option>
              {accounts.map((account) => (
                <option key={account.id} value={account.id}>
                  {account.platform} · {account.name}
                </option>
              ))}
            </select>
            <input
              value={scheduleDraft.title}
              onChange={(event) => setScheduleDraft({ ...scheduleDraft, title: event.target.value })}
              placeholder="发布标题"
              className="rounded-xl border border-sky-200 px-3 py-2 text-xs outline-none focus:border-indigo-400"
            />
            <input
              type="datetime-local"
              value={scheduleDraft.publishAt}
              onChange={(event) => setScheduleDraft({ ...scheduleDraft, publishAt: event.target.value })}
              className="rounded-xl border border-sky-200 px-3 py-2 text-xs outline-none focus:border-indigo-400"
            />
            <button
              type="button"
              onClick={createSchedule}
              className="flex items-center justify-center gap-1.5 rounded-xl bg-indigo-600 px-3 py-2 text-xs font-semibold text-white hover:bg-indigo-700"
            >
              <Plus className="h-3.5 w-3.5" /> 新建排期
            </button>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={applyIntervalPlan}
              className="rounded-xl border border-sky-200 bg-white px-3 py-1.5 text-[10px] font-semibold text-slate-600 hover:bg-sky-50"
            >
              一键错峰：每天 19:00 一条
            </button>
            <span className="text-[10px] text-slate-400">
              未接入平台开放接口时，发布动作只更新本地状态，不会伪造真实播放数据。
            </span>
          </div>

          {schedule.length === 0 ? (
            <div className="mt-6 rounded-xl border border-dashed border-sky-200 bg-sky-50/40 px-4 py-8 text-center text-xs text-slate-500">
              暂无排期。可从「批量文案」加入，或在这里直接新建。
            </div>
          ) : (
            <div className="mt-4 space-y-2">
              {schedule.map((item) => (
                <div key={item.id} className="flex flex-wrap items-center gap-2 rounded-xl border border-sky-100 bg-slate-50/60 px-3 py-2 text-[11px]">
                  <span className="font-semibold text-slate-800">{item.title}</span>
                  <span className="rounded-full bg-white px-2 py-0.5 text-slate-500">{item.accountName}</span>
                  <span className="text-slate-500">{item.publishAt.replace('T', ' ')}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 font-semibold ${
                      item.status === 'published' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                    }`}
                  >
                    {item.status === 'published' ? '已发布' : '待发布'}
                  </span>
                  <div className="ml-auto flex items-center gap-2">
                    {item.status === 'pending' && (
                      <button type="button" onClick={() => markPublished(item.id)} className="text-indigo-600 hover:underline">
                        标记发布
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => setSchedule((prev) => prev.filter((entry) => entry.id !== item.id))}
                      className="text-slate-400 hover:text-rose-600"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      )}

      {tab === 'sop' && (
        <Card>
          <SectionTitle icon={<LayoutGrid className="h-4 w-4" />} title="SOP 看板与主理人验收" desc="对标猫尼「策划/摄影/剪辑同屏协同 + 主理人验收」：每个任务必须过验收闸门才能进入已发布。" />
          <div className="mt-4 grid gap-2 sm:grid-cols-4">
            <input
              value={sopDraft.title}
              onChange={(event) => setSopDraft({ ...sopDraft, title: event.target.value })}
              placeholder="任务标题"
              className="rounded-xl border border-sky-200 px-3 py-2 text-xs outline-none focus:border-indigo-400"
            />
            <input
              value={sopDraft.owner}
              onChange={(event) => setSopDraft({ ...sopDraft, owner: event.target.value })}
              placeholder="负责人"
              className="rounded-xl border border-sky-200 px-3 py-2 text-xs outline-none focus:border-indigo-400"
            />
            <input
              value={sopDraft.due}
              onChange={(event) => setSopDraft({ ...sopDraft, due: event.target.value })}
              placeholder="截止时间，例如 今天 18:00"
              className="rounded-xl border border-sky-200 px-3 py-2 text-xs outline-none focus:border-indigo-400"
            />
            <button
              type="button"
              onClick={addSopCard}
              className="flex items-center justify-center gap-1.5 rounded-xl bg-indigo-600 px-3 py-2 text-xs font-semibold text-white hover:bg-indigo-700"
            >
              <Plus className="h-3.5 w-3.5" /> 新建任务
            </button>
          </div>

          <div className="mt-4 grid gap-2 md:grid-cols-5">
            {SOP_STAGES.map((stage, index) => (
              <div key={stage} className="rounded-xl border border-sky-100 bg-slate-50/50 p-2">
                <div className="flex items-center justify-between px-1 text-[10px] font-bold text-slate-500">
                  <span>{stage}</span>
                  <span>{sopCards.filter((card) => card.stage === index).length}</span>
                </div>
                <div className="mt-2 space-y-2">
                  {sopCards
                    .filter((card) => card.stage === index)
                    .map((card) => (
                      <div key={card.id} className="rounded-lg border border-sky-100 bg-white p-2 text-[10px]">
                        <div className="font-semibold text-slate-800">{card.title}</div>
                        <div className="mt-1 text-slate-500">{card.owner} · {card.due}</div>
                        {index === 3 && (
                          <div className="mt-1 flex gap-1">
                            <button
                              type="button"
                              onClick={() => setSopCards((prev) => prev.map((item) => item.id === card.id ? { ...item, verdict: 'pass' } : item))}
                              className={`rounded px-1.5 py-0.5 ${card.verdict === 'pass' ? 'bg-emerald-600 text-white' : 'bg-emerald-50 text-emerald-700'}`}
                            >
                              通过
                            </button>
                            <button
                              type="button"
                              onClick={() => setSopCards((prev) => prev.map((item) => item.id === card.id ? { ...item, verdict: 'reject' } : item))}
                              className={`rounded px-1.5 py-0.5 ${card.verdict === 'reject' ? 'bg-rose-600 text-white' : 'bg-rose-50 text-rose-700'}`}
                            >
                              打回
                            </button>
                          </div>
                        )}
                        <div className="mt-1 flex items-center justify-between">
                          <button type="button" onClick={() => moveSop(card.id, -1)} disabled={index === 0} className="text-slate-400 disabled:opacity-30">←</button>
                          <button type="button" onClick={() => moveSop(card.id, 1)} disabled={index === SOP_STAGES.length - 1 || (index === 3 && card.verdict !== 'pass')} className="text-indigo-600 disabled:opacity-30">→</button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {tab === 'leads' && (
        <Card>
          <SectionTitle icon={<MessageSquareText className="h-4 w-4" />} title="私信线索与自动回复" desc="对标星链「私信管理」：关键词规则生成首响，再把线索推进到已回复 / 已成交。" />
          <div className="mt-4 grid gap-2 sm:grid-cols-4">
            <input
              value={leadDraft.nickname}
              onChange={(event) => setLeadDraft({ ...leadDraft, nickname: event.target.value })}
              placeholder="客户昵称"
              className="rounded-xl border border-sky-200 px-3 py-2 text-xs outline-none focus:border-indigo-400"
            />
            <select
              value={leadDraft.platform}
              onChange={(event) => setLeadDraft({ ...leadDraft, platform: event.target.value as Platform })}
              className="rounded-xl border border-sky-200 px-3 py-2 text-xs outline-none focus:border-indigo-400"
            >
              {PLATFORMS.map((platform) => (
                <option key={platform} value={platform}>{platform}</option>
              ))}
            </select>
            <input
              value={leadDraft.message}
              onChange={(event) => setLeadDraft({ ...leadDraft, message: event.target.value })}
              placeholder="私信内容"
              className="rounded-xl border border-sky-200 px-3 py-2 text-xs outline-none focus:border-indigo-400"
            />
            <button
              type="button"
              onClick={addLead}
              className="flex items-center justify-center gap-1.5 rounded-xl bg-indigo-600 px-3 py-2 text-xs font-semibold text-white hover:bg-indigo-700"
            >
              <Plus className="h-3.5 w-3.5" /> 录入线索
            </button>
          </div>

          <div className="mt-4 grid gap-3 lg:grid-cols-3">
            <div className="space-y-2 lg:col-span-2">
              {leads.length === 0 ? (
                <div className="rounded-xl border border-dashed border-sky-200 bg-sky-50/40 px-4 py-8 text-center text-xs text-slate-500">
                  暂无线索。录入一条私信，或载入演示样例查看自动回复。
                </div>
              ) : (
                leads.map((lead) => (
                  <div key={lead.id} className="rounded-xl border border-sky-100 bg-slate-50/60 p-3 text-[11px]">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-bold text-slate-900">{lead.nickname}</span>
                      <span className="rounded-full bg-white px-2 py-0.5 text-indigo-600">{lead.platform}</span>
                      <span className={`rounded-full px-2 py-0.5 font-semibold ${lead.intent === 'high' ? 'bg-rose-50 text-rose-600' : 'bg-amber-50 text-amber-700'}`}>
                        {lead.intent === 'high' ? '高意向' : '中意向'}
                      </span>
                      <span className="ml-auto text-slate-400">{lead.status === 'converted' ? '已成交' : lead.status === 'replied' ? '已回复' : '待回复'}</span>
                    </div>
                    <p className="mt-1 text-slate-600">{lead.message}</p>
                    {lead.reply && <div className="mt-2 rounded-lg bg-white px-2 py-1.5 text-slate-700">回复：{lead.reply}</div>}
                    <div className="mt-2 flex flex-wrap gap-2">
                      <button type="button" onClick={() => generateReply(lead)} className="flex items-center gap-1 rounded-lg bg-indigo-600 px-2 py-1 text-[10px] font-semibold text-white">
                        <Sparkles className="h-3 w-3" /> 生成首响
                      </button>
                      {lead.reply && (
                        <button
                          type="button"
                          onClick={() => navigator.clipboard?.writeText(lead.reply)}
                          className="flex items-center gap-1 rounded-lg border border-sky-200 bg-white px-2 py-1 text-[10px] text-slate-600"
                        >
                          <Copy className="h-3 w-3" /> 复制
                        </button>
                      )}
                      {lead.status === 'replied' && (
                        <button
                          type="button"
                          onClick={() => setLeads((prev) => prev.map((item) => item.id === lead.id ? { ...item, status: 'converted' } : item))}
                          className="rounded-lg border border-emerald-200 bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-700"
                        >
                          标记成交
                        </button>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="rounded-xl border border-sky-100 bg-slate-50/50 p-3">
              <div className="text-[11px] font-bold text-slate-700">关键词自动回复规则</div>
              <div className="mt-2 space-y-1">
                {rules.map((rule, index) => (
                  <div key={`${rule.keyword}-${index}`} className="flex items-start justify-between gap-2 rounded-lg bg-white px-2 py-1.5 text-[10px]">
                    <div>
                      <span className="rounded bg-sky-50 px-1 text-indigo-600">{rule.keyword}</span>
                      <p className="mt-1 text-slate-600">{rule.reply}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setRules((prev) => prev.filter((_, idx) => idx !== index))}
                      className="text-slate-400 hover:text-rose-600"
                    >
                      <Trash2 className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
              <input
                value={replyRuleDraft.keyword}
                onChange={(event) => setReplyRuleDraft({ ...replyRuleDraft, keyword: event.target.value })}
                placeholder="关键词"
                className="mt-2 w-full rounded-lg border border-sky-200 px-2 py-1.5 text-[10px] outline-none focus:border-indigo-400"
              />
              <textarea
                value={replyRuleDraft.reply}
                onChange={(event) => setReplyRuleDraft({ ...replyRuleDraft, reply: event.target.value })}
                rows={2}
                placeholder="回复话术"
                className="mt-1 w-full rounded-lg border border-sky-200 px-2 py-1.5 text-[10px] outline-none focus:border-indigo-400"
              />
              <button type="button" onClick={addRule} className="mt-1 flex w-full items-center justify-center gap-1 rounded-lg border border-sky-200 bg-white px-2 py-1.5 text-[10px] font-semibold text-slate-600 hover:bg-sky-50">
                <Plus className="h-3 w-3" /> 添加规则
              </button>
            </div>
          </div>
        </Card>
      )}

      {tab === 'prompter' && (
        <Card>
          <SectionTitle icon={<Mic className="h-4 w-4" />} title="AI 口播提词器" desc="对标开拍「AI 提词器 · 智能语速跟随」：支持镜像、字号、速度、语音朗读与全屏提词。" />
          <div className="mt-4 grid gap-3 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <label className="text-[11px] font-semibold text-slate-600">口播稿</label>
              <textarea
                value={prompterText}
                onChange={(event) => setPrompterText(event.target.value)}
                rows={9}
                className="mt-1 w-full rounded-xl border border-sky-200 px-3 py-2 text-xs leading-5 outline-none focus:border-indigo-400"
              />
              <div className="mt-2 flex flex-wrap items-center gap-2 text-[10px] text-slate-600">
                <label className="flex items-center gap-1">
                  速度
                  <input type="range" min={1} max={10} value={prompterSpeed} onChange={(event) => setPrompterSpeed(Number(event.target.value))} />
                  <span className="w-6 text-right">{prompterSpeed}</span>
                </label>
                <label className="flex items-center gap-1">
                  字号
                  <input type="range" min={20} max={64} value={prompterFont} onChange={(event) => setPrompterFont(Number(event.target.value))} />
                  <span className="w-7 text-right">{prompterFont}px</span>
                </label>
                <button
                  type="button"
                  onClick={() => setPrompterMirror((prev) => !prev)}
                  className={`rounded-lg px-2 py-1 font-semibold ${prompterMirror ? 'bg-indigo-600 text-white' : 'bg-sky-50'}`}
                >
                  镜像
                </button>
                <button
                  type="button"
                  onClick={() => setTtsOn((prev) => !prev)}
                  className={`rounded-lg px-2 py-1 font-semibold ${ttsOn ? 'bg-emerald-600 text-white' : 'bg-sky-50'}`}
                >
                  {ttsOn ? '关闭朗读' : '语音朗读'}
                </button>
                <button
                  type="button"
                  onClick={() => setVoiceFollow((prev) => !prev)}
                  disabled={!speechRecognitionAvailable()}
                  title={speechRecognitionAvailable() ? '开启后按你的实际口播速度跟随滚动' : '当前浏览器不支持语音识别'}
                  className={`flex items-center gap-1 rounded-lg px-2 py-1 font-semibold disabled:opacity-40 ${voiceFollow ? 'bg-indigo-600 text-white' : 'bg-sky-50'}`}
                >
                  <Mic className="h-3 w-3" />
                  {voiceFollow ? '语音跟随中' : '语音跟随'}
                </button>
                <button
                  type="button"
                  onClick={() => setPrompterRunning((prev) => !prev)}
                  className="flex items-center gap-1 rounded-lg bg-indigo-600 px-2.5 py-1 font-semibold text-white"
                >
                  {prompterRunning ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
                  {prompterRunning ? '暂停' : '开始提词'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setPrompterRunning(false);
                    if (prompterRef.current) prompterRef.current.scrollTop = 0;
                  }}
                  className="rounded-lg bg-sky-50 px-2 py-1 font-semibold"
                >
                  重置
                </button>
                <button
                  type="button"
                  onClick={() => prompterRef.current?.requestFullscreen?.()}
                  className="rounded-lg bg-sky-50 px-2 py-1 font-semibold"
                >
                  全屏
                </button>
              </div>
            </div>
            <div
              ref={prompterRef}
              className="h-[360px] overflow-y-auto rounded-2xl border border-slate-700 bg-slate-950 px-5 py-8 text-white"
              style={{ transform: prompterMirror ? 'scaleX(-1)' : undefined }}
            >
              <div className="whitespace-pre-wrap text-center font-semibold leading-relaxed" style={{ fontSize: `${prompterFont}px` }}>
                {prompterText}
              </div>
            </div>
            {voiceHint && (
              <div className="mt-2 rounded-lg bg-indigo-50 px-3 py-1.5 text-[10px] font-semibold text-indigo-700">{voiceHint}</div>
            )}
          </div>
          <div className="mt-3 flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-[10px] text-amber-800">
            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
            <span>提词滚动、语音朗读、语音跟随均为本地真实能力（Web Speech API 对齐稿件字符位置）；录制画面需要摄像头权限，本模块不伪造录音文件。</span>
          </div>
        </Card>
      )}

      {tab === 'cards' && (
        <Card>
          <SectionTitle
            icon={<ImagePlus className="h-4 w-4" />}
            title="图文批量出图"
            desc="对标火兔工具箱「AI 批量爆款图文」：一条选题生成封面 / 清单 / 对比 / 金句四张竖版卡片，Canvas 本地渲染，可直接批量导出 PNG。"
          />
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <input
              value={cardTopic}
              onChange={(event) => setCardTopic(event.target.value)}
              placeholder="选题 / 标题，例如：新手做短视频矩阵最容易踩的 3 个坑"
              className="rounded-xl border border-sky-200 px-3 py-2 text-xs outline-none focus:border-indigo-400"
            />
            <textarea
              value={cardPoints}
              onChange={(event) => setCardPoints(event.target.value)}
              placeholder="要点，每行一条（清单卡取前 6 条，对比卡分左右两栏）"
              rows={3}
              className="rounded-xl border border-sky-200 px-3 py-2 text-xs outline-none focus:border-indigo-400"
            />
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={buildCards}
              className="flex items-center gap-1.5 rounded-xl bg-indigo-600 px-3 py-2 text-xs font-bold text-white hover:bg-indigo-700"
            >
              <Sparkles className="h-3.5 w-3.5" /> 生成四张卡片
            </button>
            <button
              type="button"
              onClick={async () => {
                if (cardSpecs.length === 0) {
                  onShowNotice?.('error', '请先生成卡片');
                  return;
                }
                await downloadCards(cardSpecs, CARD_SIZES.note);
                onShowNotice?.('success', '已开始逐张下载 PNG');
              }}
              className="flex items-center gap-1.5 rounded-xl bg-slate-900 px-3 py-2 text-xs font-bold text-white hover:bg-slate-800"
            >
              <Download className="h-3.5 w-3.5" /> 批量导出 PNG
            </button>
            <span className="text-[10px] text-slate-500">画布 1080×1440（3:4），与小红书 / 抖音图文规格一致</span>
          </div>

          {cardSpecs.length === 0 ? (
            <div className="mt-5 rounded-xl border border-dashed border-sky-200 bg-sky-50/40 px-4 py-8 text-center text-xs text-slate-500">
              填写选题与要点后生成。预览使用真实 Canvas 绘制，导出的 PNG 与原图一致。
            </div>
          ) : (
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {cardSpecs.map((spec, index) => (
                <CardPreview key={`${spec.template}-${index}`} spec={spec} />
              ))}
            </div>
          )}

          <div className="mt-3 flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-[10px] text-amber-800">
            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
            <span>出图完全在本地完成，不上传素材；如需 AI 生成背景图或手写字效，需要接第三方生图接口。</span>
          </div>
        </Card>
      )}

      {tab === 'mix' && (
        <Card>
          <SectionTitle
            icon={<Scissors className="h-4 w-4" />}
            title="智能混剪编排"
            desc="对标开拍「智能混剪」与爆款工厂「批量出片」：按 BGM 节拍切镜头，输出可导入剪辑软件的 EDL 和可执行的 FFmpeg 命令。"
          />
          <div className="mt-4 grid gap-2 lg:grid-cols-3">
            <textarea
              value={mixAssetsText}
              onChange={(event) => setMixAssetsText(event.target.value)}
              rows={6}
              placeholder={'每行一条：文件名|时长秒|标签\n门店01.mp4|12|环境,门店\n口播02.mp4|15|口播,产品\n空镜03.mp4|8|空镜'}
              className="rounded-xl border border-sky-200 px-3 py-2 text-xs outline-none focus:border-indigo-400 lg:col-span-2"
            />
            <div className="space-y-2">
              <label className="block text-[11px] font-semibold text-slate-600">
                目标时长（秒）
                <input
                  type="number"
                  value={mixDuration}
                  min={5}
                  step={5}
                  onChange={(event) => setMixDuration(Number(event.target.value) || 60)}
                  className="mt-1 w-full rounded-xl border border-sky-200 px-3 py-2 text-xs outline-none focus:border-indigo-400"
                />
              </label>
              <label className="block text-[11px] font-semibold text-slate-600">
                BGM BPM
                <input
                  type="number"
                  value={mixBpm}
                  min={60}
                  step={10}
                  onChange={(event) => setMixBpm(Number(event.target.value) || 120)}
                  className="mt-1 w-full rounded-xl border border-sky-200 px-3 py-2 text-xs outline-none focus:border-indigo-400"
                />
              </label>
              <textarea
                value={mixScript}
                onChange={(event) => setMixScript(event.target.value)}
                rows={2}
                placeholder="粘贴口播稿，自动推断需要的镜头类型"
                className="w-full rounded-xl border border-sky-200 px-3 py-2 text-xs outline-none focus:border-indigo-400"
              />
            </div>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={runMixPlan}
              className="flex items-center gap-1.5 rounded-xl bg-indigo-600 px-3 py-2 text-xs font-bold text-white hover:bg-indigo-700"
            >
              <Scissors className="h-3.5 w-3.5" /> 生成混剪方案
            </button>
            <span className="text-[10px] text-slate-500">
              每镜头 {mixPlan ? mixPlan.shotDurationSec : (60 / mixBpm) * 4}s（4 拍）
            </span>
          </div>

          {!mixPlan ? (
            <div className="mt-5 rounded-xl border border-dashed border-sky-200 bg-sky-50/40 px-4 py-8 text-center text-xs text-slate-500">
              填入素材后生成方案。这里只做镜头编排与命令生成，不替代剪辑师的节奏判断。
            </div>
          ) : (
            <div className="mt-4 space-y-3">
              {mixPlan.warnings.length > 0 && (
                <div className="rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-[10px] text-amber-800">
                  {mixPlan.warnings.map((warning) => (
                    <div key={warning}>· {warning}</div>
                  ))}
                </div>
              )}
              <div className="overflow-x-auto">
                <table className="w-full min-w-[620px] text-left text-[11px]">
                  <thead className="text-slate-500">
                    <tr>
                      <th className="px-2 py-2">镜号</th>
                      <th className="px-2 py-2">素材</th>
                      <th className="px-2 py-2">入点</th>
                      <th className="px-2 py-2">出点</th>
                      <th className="px-2 py-2">时长</th>
                      <th className="px-2 py-2">节拍</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mixPlan.shots.map((shot, index) => (
                      <tr key={`${shot.clipId}-${index}`} className="border-t border-sky-100">
                        <td className="px-2 py-1.5 text-slate-500">#{index + 1}</td>
                        <td className="px-2 py-1.5 font-semibold text-slate-800">{shot.clipName}</td>
                        <td className="px-2 py-1.5 text-slate-600">{shot.inSec}s</td>
                        <td className="px-2 py-1.5 text-slate-600">{shot.outSec}s</td>
                        <td className="px-2 py-1.5 text-slate-600">{shot.durationSec}s</td>
                        <td className="px-2 py-1.5 text-indigo-600">第 {shot.beatIndex} 拍</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => copyText(toEdl(mixPlan, mixClips), 'EDL')}
                  className="flex items-center gap-1 rounded-lg bg-slate-900 px-2.5 py-1.5 text-[10px] font-bold text-white"
                >
                  <Copy className="h-3 w-3" /> 复制 EDL
                </button>
                <button
                  type="button"
                  onClick={() => copyText(toFfmpeg(mixPlan, mixClips, { targetDurationSec: mixDuration, bpm: mixBpm }), 'FFmpeg 命令')}
                  className="flex items-center gap-1 rounded-lg bg-slate-900 px-2.5 py-1.5 text-[10px] font-bold text-white"
                >
                  <Copy className="h-3 w-3" /> 复制 FFmpeg 命令
                </button>
              </div>
              <pre className="max-h-56 overflow-auto rounded-xl bg-slate-950 p-3 text-[10px] leading-5 text-emerald-200">
                {toFfmpeg(mixPlan, mixClips, { targetDurationSec: mixDuration, bpm: mixBpm })}
              </pre>
            </div>
          )}

          <div className="mt-3 flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-[10px] text-amber-800">
            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
            <span>EDL 与 FFmpeg 命令按素材真实时长切点生成，可本机执行；AI 换脸、去字幕等模型能力不在本地实现。</span>
          </div>
        </Card>
      )}

      {tab === 'tools' && (
        <Card className="bg-white">
          <SectionTitle
            icon={<Sparkles className="h-4 w-4" />}
            title="运营创作百宝箱 · 合规自查与网感诊断"
            desc="对标火兔「运营百宝箱」：新广告法违禁词快速扫描自查与一键安全词替换、短视频网感留存诊断打分、五大人设口吻调节器。"
          />
          <div className="mt-4">
            <SuperToolsSuite onShowNotice={onShowNotice} />
          </div>
        </Card>
      )}

      <Card className="bg-slate-50/60">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[11px] font-bold text-slate-600">
            <Share2 className="h-3.5 w-3.5" /> 逆向来源映射
          </div>
          <span className="text-[10px] text-slate-400">基于 2026-11-03 公开页面取证</span>
        </div>
        <div className="mt-2 grid gap-1.5 text-[10px] text-slate-600 sm:grid-cols-2 lg:grid-cols-4">
          <div><b>星链引擎</b>：账号管理 / 素材管理 / 定时发布 / AI 文案 / 私信线索</div>
          <div><b>猫尼科技</b>：爆款裂变 / SOP 看板 / 主理人验收 / 口播对口型</div>
          <div><b>火兔工具箱</b>：批量图文 / 多账号同步发布 / 内容自检</div>
          <div><b>开拍</b>：AI 提词器 / 网感字幕 / 爆款复刻 / 智能混剪</div>
          <div><b>筷子科技</b>：编拍剪投管 / KOC 分发 / Agent 接入</div>
          <div><b>优秘智能</b>：数字分身 / 一键追爆 / 矩阵发布 / 企业 AI 化</div>
          <div><b>爆款工厂</b>：视频换人 / 口播带货 / 去字幕 / 批量出片</div>
          <div className="text-indigo-600">已并入本页：矩阵账号、裂变、文案、排期、SOP、线索、提词器、图文出图</div>
        </div>
      </Card>
    </div>
  );
}
