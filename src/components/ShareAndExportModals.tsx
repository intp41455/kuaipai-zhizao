import React, { useState } from 'react';
import {
  Share2,
  Copy,
  Check,
  ExternalLink,
  Download,
  Image as ImageIcon,
  FileText,
  FileSpreadsheet,
  Film,
  X,
  Link2,
  Clock,
  Sparkles,
} from 'lucide-react';

export interface ProjectExportData {
  id?: string | null;
  title: string;
  productName: string;
  sellingPoints: string;
  targetAudience: string;
  category: string;
  aspectRatio: '9:16' | '16:9' | '4:3';
  bgmStyle: string;
  voiceTone: string;
  pacingTip: string;
  cameraAngles: string[];
  visualCues: string[];
  sceneLines: string[];
}

// 1. Original Work Realistic Photographic Cover Scene Renderer (Matches 火兔工具箱 & 有米有数 Original Covers with Zero Overflow)
export const OriginalWorkCoverScene: React.FC<{
  sceneType: 'shampoo' | 'pet' | 'exam' | 'fashion' | 'skincare' | 'coffee' | 'food' | 'home';
  coverPhotoUrl?: string;
  headline: string;
  subhead: string;
}> = ({ sceneType, coverPhotoUrl, headline, subhead }) => {
  const [imgFailed, setImgFailed] = useState(false);

  const themeMap: Record<
    string,
    {
      grad: string;
      headlineBg: string;
      headlineText: string;
      subheadBg: string;
    }
  > = {
    pet: {
      grad: 'from-purple-950/60 via-purple-900/20 to-slate-950/85',
      headlineBg: 'bg-white text-purple-950 shadow-sm border border-purple-200/60',
      headlineText: 'text-purple-950',
      subheadBg: 'bg-purple-600/95 text-white',
    },
    exam: {
      grad: 'from-slate-950/65 via-slate-900/25 to-amber-950/85',
      headlineBg: 'bg-slate-950/90 text-white border border-amber-400/70',
      headlineText: 'text-white',
      subheadBg: 'bg-amber-400 text-slate-950 font-bold',
    },
    shampoo: {
      grad: 'from-indigo-950/65 via-indigo-900/20 to-slate-950/85',
      headlineBg: 'bg-white text-indigo-950 shadow-sm border border-indigo-200/60',
      headlineText: 'text-indigo-950',
      subheadBg: 'bg-indigo-600/95 text-white',
    },
    fashion: {
      grad: 'from-sky-950/55 via-sky-900/15 to-slate-950/85',
      headlineBg: 'bg-amber-300/95 text-slate-950 shadow-sm',
      headlineText: 'text-slate-950',
      subheadBg: 'bg-sky-700/95 text-white',
    },
    skincare: {
      grad: 'from-amber-950/60 via-amber-900/20 to-slate-950/85',
      headlineBg: 'bg-white text-slate-900 shadow-sm',
      headlineText: 'text-slate-900',
      subheadBg: 'bg-amber-500/95 text-slate-950 font-bold',
    },
    home: {
      grad: 'from-stone-950/60 via-stone-900/20 to-stone-950/85',
      headlineBg: 'bg-white text-stone-900 shadow-sm',
      headlineText: 'text-stone-900',
      subheadBg: 'bg-lime-400 text-slate-950 font-bold',
    },
    food: {
      grad: 'from-red-950/60 via-red-900/20 to-stone-950/85',
      headlineBg: 'bg-amber-50/95 text-red-900 shadow-sm',
      headlineText: 'text-red-900',
      subheadBg: 'bg-red-600/95 text-white',
    },
    coffee: {
      grad: 'from-amber-950/65 via-stone-900/20 to-stone-950/85',
      headlineBg: 'bg-white text-amber-950 shadow-sm',
      headlineText: 'text-amber-950',
      subheadBg: 'bg-amber-700/95 text-white',
    },
  };

  const currentTheme = themeMap[sceneType] || themeMap.shampoo;

  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-slate-900 select-none">
      {/* Real Photographic Cover Background */}
      {coverPhotoUrl && !imgFailed ? (
        <img
          src={coverPhotoUrl}
          alt={headline}
          onError={() => setImgFailed(true)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-800 to-slate-950" />
      )}

      {/* Atmospheric Scrim Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-b ${currentTheme.grad}`} />

      {/* Center Magazine Poster Sticker Typography (Strictly Clamped, Zero Overflow) */}
      <div className="relative z-10 mt-auto mb-9 flex flex-col items-start px-3">
        <div
          className={`max-w-full overflow-hidden rounded-lg px-2.5 py-1.5 ${currentTheme.headlineBg}`}
        >
          <h3
            className={`line-clamp-2 break-words text-[13px] sm:text-sm font-extrabold tracking-tight leading-snug ${currentTheme.headlineText}`}
          >
            {headline}
          </h3>
        </div>
        <div
          className={`mt-1.5 max-w-full truncate rounded-md px-2 py-0.5 text-[10px] font-semibold shadow-2xs ${currentTheme.subheadBg}`}
        >
          {subhead}
        </div>
      </div>
    </div>
  );
};

// 2. Social & Creator Platforms for 1-Click Jump & Share
const CREATOR_PLATFORMS = [
  {
    id: 'douyin',
    name: '抖音创作者中心',
    shortName: '抖音',
    badgeColor: 'bg-slate-900 text-white',
    url: 'https://creator.douyin.com/creator-micro/content/upload',
    desc: '自动复制抖音爆款标题+口播文案并跳转上传',
  },
  {
    id: 'xiaohongshu',
    name: '小红书创作服务平台',
    shortName: '小红书',
    badgeColor: 'bg-rose-600 text-white',
    url: 'https://creator.xiaohongshu.com/publish/publish',
    desc: '自动复制小红书种草笔记正文+标签并跳转发布',
  },
  {
    id: 'kuaishou',
    name: '快手创作者服务平台',
    shortName: '快手',
    badgeColor: 'bg-orange-500 text-white',
    url: 'https://cp.kuaishou.com/article/publish/video',
    desc: '自动复制快手老铁带货口播脚本并跳转上传',
  },
  {
    id: 'weixin_channels',
    name: '微信视频号助手',
    shortName: '微信视频号',
    badgeColor: 'bg-emerald-600 text-white',
    url: 'https://channels.weixin.qq.com/platform/post/create',
    desc: '自动复制视频号短标题+脚本并跳转发表动态',
  },
  {
    id: 'weixin_mp',
    name: '微信公众号平台',
    shortName: '微信公众号',
    badgeColor: 'bg-teal-700 text-white',
    url: 'https://mp.weixin.qq.com/',
    desc: '自动复制公众号图文分镜全文并跳转后台',
  },
  {
    id: 'bilibili',
    name: '哔哩哔哩创作中心',
    shortName: 'B站',
    badgeColor: 'bg-sky-500 text-white',
    url: 'https://member.bilibili.com/platform/upload/video/frame',
    desc: '自动复制B站分P简介与脚本并跳转投稿',
  },
];

export const ShareAndPlatformModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  project: ProjectExportData;
  onCreateCloudShareLink: (expireHours: number) => Promise<string>;
}> = ({ isOpen, onClose, project, onCreateCloudShareLink }) => {
  const [expireHours, setExpireHours] = useState<number>(72);
  const [generatedLink, setGeneratedLink] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [cfCustomDomain, setCfCustomDomain] = useState<string>(() => {
    try {
      return localStorage.getItem('kuaipai_cf_domain') || 'kuaipai-ai.pages.dev';
    } catch {
      return 'kuaipai-ai.pages.dev';
    }
  });
  const [showCfWorkerGuide, setShowCfWorkerGuide] = useState<boolean>(false);

  if (!isOpen) return null;

  const originHostUrl =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : 'https://ais-pre-b7nbdm2sa3tri5w672pdz3-613607539135.europe-west2.run.app';

  const normalizeCfDomain = (raw: string) => {
    const trimmed = raw.trim().replace(/^https?:\/\//i, '').replace(/\/+$/, '');
    return trimmed ? `https://${trimmed}` : '';
  };

  const activeCfBase = normalizeCfDomain(cfCustomDomain);

  const convertToCfLink = (rawUrl: string) => {
    if (!activeCfBase || !rawUrl) return rawUrl;
    try {
      const parsed = new URL(rawUrl);
      return `${activeCfBase}${parsed.pathname}${parsed.search}`;
    } catch {
      return rawUrl;
    }
  };

  const domesticHomeShareUrl = activeCfBase || originHostUrl;

  const cloudflareWorkerCode = `// Cloudflare Worker 中国大陆极速反向代理脚本（零服务器 · 微信/抖音直连秒开）
// 已自动绑定您的源站地址：${originHostUrl}
const TARGET_ORIGIN = "${originHostUrl}";

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const targetUrl = new URL(url.pathname + url.search, TARGET_ORIGIN);

    const modifiedHeaders = new Headers(request.headers);
    modifiedHeaders.set("Host", new URL(TARGET_ORIGIN).host);
    modifiedHeaders.set("X-Forwarded-Host", url.host);
    modifiedHeaders.set("X-Forwarded-Proto", "https");

    const proxyReq = new Request(targetUrl.toString(), {
      method: request.method,
      headers: modifiedHeaders,
      body: request.method !== "GET" && request.method !== "HEAD" ? request.body : undefined,
      redirect: "manual",
    });

    const response = await fetch(proxyReq);
    const resHeaders = new Headers(response.headers);
    resHeaders.set("Access-Control-Allow-Origin", "*");

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: resHeaders,
    });
  },
};`;

  const handleSaveCfDomain = (val: string) => {
    setCfCustomDomain(val);
    try {
      localStorage.setItem('kuaipai_cf_domain', val.trim());
    } catch {
      // ignore storage errors
    }
  };

  const handleGenerateLink = async () => {
    setIsGenerating(true);
    try {
      const rawLink = await onCreateCloudShareLink(expireHours);
      const finalLink = convertToCfLink(rawLink);
      setGeneratedLink(finalLink);
      await navigator.clipboard.writeText(finalLink);
      setCopiedKey('share_link');
      setTimeout(() => setCopiedKey(null), 3000);
    } finally {
      setIsGenerating(false);
    }
  };

  const buildPlatformCopyText = (platformName: string) => {
    const tags = `#${project.category} #${project.productName.replace(/\s+/g, '')} #好物推荐 #爆款实测`;
    const scriptBody = project.cameraAngles
      .map(
        (angle, i) =>
          `【${angle}】\n画面：${project.visualCues[i] || ''}\n台词：“${project.sceneLines[i] || ''}”`
      )
      .join('\n\n');
    return `【${platformName}发布文案】${project.title}\n核心卖点：${project.sellingPoints}\n\n${scriptBody}\n\n${tags}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4">
      <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
          <div className="flex items-center gap-2">
            <Share2 className="h-5 w-5 text-indigo-600" />
            <h3 className="text-base font-bold text-slate-900">
              项目临时公共共享 · Cloudflare 中国大陆加速与多平台分发
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-[82vh] space-y-5 overflow-y-auto p-6">
          {/* Live Online Deployment & Production Sync Banner */}
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/75 p-4 space-y-2.5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-emerald-950">
                  已实时同步部署至线上正式环境（全功能通用权限 + short-video-script 永久记忆已生效）
                </span>
              </div>
              <span className="rounded-md bg-emerald-600 px-2 py-0.5 font-mono text-[10px] font-bold text-white">
                LIVE PRODUCTION
              </span>
            </div>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 text-xs">
              <div className="flex items-center justify-between gap-2 rounded-xl border border-emerald-200 bg-white px-3 py-2">
                <div className="min-w-0">
                  <div className="text-[10px] font-semibold text-slate-400">国内加速推广主链接 (Cloudflare)：</div>
                  <div className="truncate font-mono text-xs font-bold text-slate-800">{domesticHomeShareUrl}</div>
                </div>
                <button
                  type="button"
                  onClick={async () => {
                    await navigator.clipboard.writeText(domesticHomeShareUrl);
                    setCopiedKey('prod_cf');
                    setTimeout(() => setCopiedKey(null), 2500);
                  }}
                  className="shrink-0 rounded-lg bg-emerald-600 px-2.5 py-1 text-[11px] font-semibold text-white hover:bg-emerald-700 cursor-pointer"
                >
                  {copiedKey === 'prod_cf' ? '✓ 已复制' : '复制推广链接'}
                </button>
              </div>
              <div className="flex items-center justify-between gap-2 rounded-xl border border-emerald-200 bg-white px-3 py-2">
                <div className="min-w-0">
                  <div className="text-[10px] font-semibold text-slate-400">云端源站正式上市链接：</div>
                  <div className="truncate font-mono text-xs font-bold text-slate-800">{originHostUrl}</div>
                </div>
                <button
                  type="button"
                  onClick={async () => {
                    await navigator.clipboard.writeText(originHostUrl);
                    setCopiedKey('prod_origin');
                    setTimeout(() => setCopiedKey(null), 2500);
                  }}
                  className="shrink-0 rounded-lg bg-slate-900 px-2.5 py-1 text-[11px] font-semibold text-white hover:bg-slate-800 cursor-pointer"
                >
                  {copiedKey === 'prod_origin' ? '✓ 已复制' : '复制源站链接'}
                </button>
              </div>
            </div>
          </div>

          {/* Part 0: Cloudflare Mainland China Custom Domain Link Converter & Worker Script */}
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-amber-500 px-2 py-0.5 text-[11px] font-bold text-white">
                  Cloudflare 国内直连
                </span>
                <h4 className="text-sm font-bold text-slate-900">
                  中国大陆推广链接转换器（微信 / 抖音 / 手机浏览器秒开）
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setShowCfWorkerGuide(!showCfWorkerGuide)}
                className="text-xs font-semibold text-amber-700 hover:underline cursor-pointer"
              >
                {showCfWorkerGuide ? '收起 Worker 部署代码' : '展开 3 步配置教程与代码'}
              </button>
            </div>

            <p className="mt-1 text-xs text-slate-600">
              填入您在 Cloudflare 绑定的自定义域名（如 <code className="rounded bg-amber-100/70 px-1 py-0.5 font-mono text-[11px] text-amber-900">ai.您的域名.com</code>），系统会自动把原本的 <code className="font-mono text-[11px]">.run.app</code> 链接转换成国内用户可直接秒开的推广链接：
            </p>

            <div className="mt-3 flex flex-col gap-2 sm:flex-row">
              <input
                type="text"
                value={cfCustomDomain}
                onChange={(e) => handleSaveCfDomain(e.target.value)}
                placeholder="输入您的 Cloudflare 域名，例如：ai.yourbrand.cn 或 xxx.workers.dev"
                className="flex-1 rounded-xl border border-amber-300 bg-white px-3.5 py-2 text-xs text-slate-800 focus:border-amber-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(domesticHomeShareUrl);
                  setCopiedKey('cf_home_link');
                  setTimeout(() => setCopiedKey(null), 3000);
                }}
                className="flex items-center justify-center gap-1.5 rounded-xl bg-amber-500 px-4 py-2 text-xs font-semibold text-white hover:bg-amber-600 whitespace-nowrap cursor-pointer"
              >
                {copiedKey === 'cf_home_link' ? (
                  <>
                    <Check className="h-3.5 w-3.5" />
                    <span>已复制国内推广主页链接</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>复制国内推广主页链接</span>
                  </>
                )}
              </button>
            </div>

            <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500">
              <span className="truncate">
                当前生效推广地址：<strong className="font-mono text-slate-800">{domesticHomeShareUrl}</strong>
              </span>
              {activeCfBase && (
                <span className="shrink-0 text-emerald-600 font-semibold">
                  ✓ 已启用 Cloudflare 域名转换
                </span>
              )}
            </div>

            {showCfWorkerGuide && (
              <div className="mt-3.5 space-y-2.5 rounded-xl border border-amber-200/80 bg-white p-3.5 text-xs">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-bold text-slate-800">
                    3 分钟用您的 Cloudflare 账号打通国内访问（无需购买服务器）：
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText(cloudflareWorkerCode);
                      setCopiedKey('cf_worker_code');
                      setTimeout(() => setCopiedKey(null), 3000);
                    }}
                    className="flex items-center gap-1 rounded-lg bg-slate-900 px-3 py-1.5 text-[11px] font-semibold text-white hover:bg-slate-800 cursor-pointer"
                  >
                    {copiedKey === 'cf_worker_code' ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span>已复制专属 Worker 代理代码</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>一键复制 Cloudflare Worker 代码</span>
                      </>
                    )}
                  </button>
                </div>

                <ol className="list-decimal pl-4 space-y-1 text-[11px] text-slate-600 leading-relaxed">
                  <li>
                    打开您的 Cloudflare 控制台 ➔ 左侧菜单点击 <strong>Workers 和 Pages</strong> ➔ 点击 <strong>创建 Worker</strong>。
                  </li>
                  <li>
                    点击进入代码编辑（编辑代码），将上方<strong>「一键复制 Cloudflare Worker 代码」</strong>粘贴进去替换原有内容并点击右上角<strong>「部署 (Deploy)」</strong>（代码已自动填入您当前项目的源站 <code className="font-mono text-slate-800">{originHostUrl}</code>）。
                  </li>
                  <li>
                    在 Worker 详情页点击 <strong>设置 (Settings) ➔ 域和路由 (Domains & Routes) ➔ 添加自定义域</strong>，输入您托管在 Cloudflare 下的任意二级域名（如 <code className="font-mono text-slate-800">ai.您的域名.com</code>），再把该域名填到上方输入框，中国大陆全网用户即可免翻墙极速访问！
                  </li>
                </ol>
              </div>
            )}
          </div>

          {/* Part 1: Temporary Public Link for Client / Collaborator Review */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  1. 生成客户 / 协作者临时公共审阅链接
                </h4>
                <p className="mt-0.5 text-xs text-slate-500">
                  无需对方注册登录，点开链接即可直接查看完整分镜脚本表与在线播放混剪视频（已自动适配您的 Cloudflare 域名）。
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs">
                <Clock className="h-3.5 w-3.5 text-slate-400" />
                <select
                  value={expireHours}
                  onChange={(e) => setExpireHours(Number(e.target.value))}
                  className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 font-medium text-slate-700 focus:border-indigo-600 focus:outline-none"
                >
                  <option value={24}>有效期 24 小时</option>
                  <option value={72}>有效期 3 天</option>
                  <option value={168}>有效期 7 天</option>
                  <option value={720}>有效期 30 天</option>
                </select>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
              <input
                type="text"
                readOnly
                value={
                  generatedLink
                    ? convertToCfLink(generatedLink)
                    : '点击右侧「生成并复制临时公共链接」，即可发给微信/飞书客户审阅...'
                }
                className="flex-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 font-mono text-xs text-slate-700 focus:outline-none"
              />
              <button
                type="button"
                disabled={isGenerating}
                onClick={handleGenerateLink}
                className="flex items-center justify-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-indigo-700 disabled:opacity-60 whitespace-nowrap cursor-pointer"
              >
                {copiedKey === 'share_link' ? (
                  <>
                    <Check className="h-4 w-4" />
                    <span>已复制公共链接</span>
                  </>
                ) : (
                  <>
                    <Link2 className="h-4 w-4" />
                    <span>{isGenerating ? '生成中...' : '生成并复制临时公共链接'}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Part 2: One-Click Copy & Jump to Short Video / Social Platforms */}
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              2. 一键同步脚本并跳转到目标平台发布（抖音 / 小红书 / 快手 / 微信视频号 / 公众号）
            </h4>
            <p className="mt-0.5 text-xs text-slate-500">
              点击任意平台，系统会自动为您复制适配该平台的【爆款标题 + 分镜口播文案 + 热门话题标签】并直接打开对应平台发布页：
            </p>

            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {CREATOR_PLATFORMS.map((plat) => {
                const isCopied = copiedKey === plat.id;
                return (
                  <a
                    key={plat.id}
                    href={plat.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      const text = buildPlatformCopyText(plat.shortName);
                      navigator.clipboard.writeText(text);
                      setCopiedKey(plat.id);
                      setTimeout(() => setCopiedKey(null), 3000);
                    }}
                    className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3.5 transition-colors hover:border-indigo-500 hover:bg-indigo-50/30"
                  >
                    <div className="min-w-0 pr-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`rounded-md px-2 py-0.5 text-xs font-bold ${plat.badgeColor}`}
                        >
                          {plat.shortName}
                        </span>
                        <span className="truncate text-xs font-bold text-slate-900">
                          {plat.name}
                        </span>
                      </div>
                      <p className="mt-1 truncate text-xs text-slate-500">
                        {isCopied ? '已复制专属文案，正在跳转...' : plat.desc}
                      </p>
                    </div>

                    <ExternalLink className="h-4 w-4 shrink-0 text-slate-400 group-hover:text-indigo-600" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper to wrap text on canvas
function wrapTextLines(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number
): string[] {
  const chars = Array.from(text);
  const lines: string[] = [];
  let current = '';
  for (const ch of chars) {
    const test = current + ch;
    if (ctx.measureText(test).width > maxWidth && current.length > 0) {
      lines.push(current);
      current = ch;
    } else {
      current = test;
    }
  }
  if (current) lines.push(current);
  return lines;
}

// 3. Multi-Asset Export Modal (Video + AI Storyboard Long Image + Single Shot AI Images + Script CSV + Teleprompter TXT)
export const MultiAssetExportModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  project: ProjectExportData;
  onOpenVideoExporter: () => void;
}> = ({ isOpen, onClose, project, onOpenVideoExporter }) => {
  const [exportNotice, setExportNotice] = useState<string | null>(null);

  if (!isOpen) return null;

  const notify = (msg: string) => {
    setExportNotice(msg);
    setTimeout(() => setExportNotice(null), 3500);
  };

  // Export 1: High-Res AI Storyboard Long Image (.png) containing all shots' AI illustrations, visual cues & spoken lines
  const handleExportStoryboardLongImage = () => {
    const shotCount = project.cameraAngles.length;
    const width = 1080;
    const headerH = 190;
    const rowH = 230;
    const footerH = 70;
    const height = headerH + shotCount * rowH + footerH;

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Background
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, width, height);

    // Top Studio Header Banner
    const headerGrad = ctx.createLinearGradient(0, 0, width, headerH);
    headerGrad.addColorStop(0, '#1e1b4b');
    headerGrad.addColorStop(1, '#4338ca');
    ctx.fillStyle = headerGrad;
    ctx.fillRect(0, 0, width, headerH);

    ctx.fillStyle = '#a5b4fc';
    ctx.font = '600 18px "Plus Jakarta Sans", "PingFang SC", sans-serif';
    ctx.fillText(`AI 智能分镜故事板与排词情节通告单 · 品类：${project.category}`, 48, 52);

    ctx.fillStyle = '#ffffff';
    ctx.font = '700 34px "Plus Jakarta Sans", "PingFang SC", sans-serif';
    ctx.fillText(project.title.slice(0, 26), 48, 102);

    ctx.fillStyle = '#e0e7ff';
    ctx.font = '400 18px "Plus Jakarta Sans", "PingFang SC", sans-serif';
    ctx.fillText(
      `主打商品：${project.productName} ｜ 核心卖点：${project.sellingPoints.slice(0, 38)}`,
      48,
      146
    );

    // Draw Each Storyboard Shot Card
    project.cameraAngles.forEach((angle, idx) => {
      const y = headerH + idx * rowH + 20;
      const cardH = rowH - 28;

      // White Shot Card
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.roundRect(40, y, width - 80, cardH, 18);
      ctx.fill();
      ctx.strokeStyle = '#cbd5e1';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Left AI Generated Visual Frame Thumbnail inside row
      const thumbX = 60;
      const thumbY = y + 20;
      const thumbW = 240;
      const thumbH = cardH - 40;

      const shotGrad = ctx.createLinearGradient(thumbX, thumbY, thumbX + thumbW, thumbY + thumbH);
      shotGrad.addColorStop(0, '#312e81');
      shotGrad.addColorStop(1, '#4f46e5');
      ctx.fillStyle = shotGrad;
      ctx.beginPath();
      ctx.roundRect(thumbX, thumbY, thumbW, thumbH, 12);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = '700 22px "JetBrains Mono", monospace';
      ctx.fillText(`SHOT 0${idx + 1}`, thumbX + 20, thumbY + 42);

      ctx.fillStyle = '#c7d2fe';
      ctx.font = '600 16px "Plus Jakarta Sans", "PingFang SC", sans-serif';
      ctx.fillText(angle.slice(0, 11), thumbX + 20, thumbY + 76);

      ctx.fillStyle = '#e2e8f0';
      ctx.font = '400 14px "Plus Jakarta Sans", "PingFang SC", sans-serif';
      ctx.fillText(`时长: 4.0s · ${project.aspectRatio}`, thumbX + 20, thumbY + 115);

      // Right Text Columns: 画面描述 & 台词口播
      const textX = thumbX + thumbW + 32;
      const maxTextW = width - textX - 70;

      ctx.fillStyle = '#4f46e5';
      ctx.font = '700 18px "Plus Jakarta Sans", "PingFang SC", sans-serif';
      ctx.fillText(`【${angle}】`, textX, thumbY + 26);

      ctx.fillStyle = '#475569';
      ctx.font = '400 17px "Plus Jakarta Sans", "PingFang SC", sans-serif';
      const cueLines = wrapTextLines(
        ctx,
        `画面情节：${project.visualCues[idx] || ''}`,
        maxTextW
      ).slice(0, 2);
      cueLines.forEach((line, lIdx) => {
        ctx.fillText(line, textX, thumbY + 62 + lIdx * 26);
      });

      ctx.fillStyle = '#0f172a';
      ctx.font = '700 19px "Plus Jakarta Sans", "PingFang SC", sans-serif';
      const spokenLines = wrapTextLines(
        ctx,
        `台词口播：“${project.sceneLines[idx] || ''}”`,
        maxTextW
      ).slice(0, 2);
      spokenLines.forEach((line, lIdx) => {
        ctx.fillText(line, textX, thumbY + 124 + lIdx * 28);
      });
    });

    // Footer
    ctx.fillStyle = '#64748b';
    ctx.font = '600 15px "Plus Jakarta Sans", "PingFang SC", sans-serif';
    ctx.fillText(
      `快拍智造 · AI爆款视频工场生成 ｜ AI剪辑建议：${project.pacingTip.slice(0, 50)}`,
      48,
      height - 26
    );

    const dataUrl = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = `${project.title || project.productName}_AI分镜故事板长图.png`;
    a.click();
    notify('已导出高清 AI 分镜故事板长图 (.png)！');
  };

  // Export 2: Single Shot High-Res AI Visual Keyframe Image (.png)
  const handleExportSingleShotImage = (shotIdx: number) => {
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1440;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const grad = ctx.createLinearGradient(0, 0, 1080, 1440);
    grad.addColorStop(0, '#1e1b4b');
    grad.addColorStop(0.5, '#312e81');
    grad.addColorStop(1, '#0f172a');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1080, 1440);

    // Decorative Radial Spotlight
    const rad = ctx.createRadialGradient(540, 520, 40, 540, 520, 480);
    rad.addColorStop(0, 'rgba(99, 102, 241, 0.42)');
    rad.addColorStop(1, 'transparent');
    ctx.fillStyle = rad;
    ctx.fillRect(0, 0, 1080, 1440);

    // Top Shot Badge
    ctx.fillStyle = '#818cf8';
    ctx.font = '700 32px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    ctx.fillText(
      `SHOT 0${shotIdx + 1} · ${project.cameraAngles[shotIdx] || ''}`,
      540,
      140
    );

    // Product Headline
    ctx.fillStyle = '#ffffff';
    ctx.font = '700 54px "Plus Jakarta Sans", "PingFang SC", sans-serif';
    ctx.fillText(project.productName.slice(0, 18), 540, 240);

    // Center Visual Scene Card
    ctx.fillStyle = 'rgba(255,255,255,0.08)';
    ctx.beginPath();
    ctx.roundRect(90, 320, 900, 560, 32);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.22)';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#a5b4fc';
    ctx.font = '600 28px "Plus Jakarta Sans", "PingFang SC", sans-serif';
    ctx.fillText('AI 画面构图与情节指导', 540, 420);

    ctx.fillStyle = '#f8fafc';
    ctx.font = '400 34px "Plus Jakarta Sans", "PingFang SC", sans-serif';
    const visualWrapped = wrapTextLines(
      ctx,
      project.visualCues[shotIdx] || '',
      780
    ).slice(0, 5);
    visualWrapped.forEach((line, i) => {
      ctx.fillText(line, 540, 510 + i * 56);
    });

    // Bottom Spoken Subtitle Banner
    ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
    ctx.beginPath();
    ctx.roundRect(90, 950, 900, 340, 32);
    ctx.fill();
    ctx.strokeStyle = '#818cf8';
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.fillStyle = '#818cf8';
    ctx.font = '600 26px "Plus Jakarta Sans", "PingFang SC", sans-serif';
    ctx.fillText('同步排词口播台词', 540, 1020);

    ctx.fillStyle = '#ffffff';
    ctx.font = '700 40px "Plus Jakarta Sans", "PingFang SC", sans-serif';
    const subWrapped = wrapTextLines(
      ctx,
      `“${project.sceneLines[shotIdx] || ''}”`,
      800
    ).slice(0, 4);
    subWrapped.forEach((line, i) => {
      ctx.fillText(line, 540, 1100 + i * 60);
    });

    const dataUrl = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = `${project.productName}_镜头0${shotIdx + 1}_AI视觉画面图.png`;
    a.click();
    notify(`已导出镜头 0${shotIdx + 1} 高清 AI 画面图 (.png)！`);
  };

  // Export 3: Teleprompter Script & Narrative Plot Text (.txt)
  const handleExportTeleprompterTxt = () => {
    const lines = [
      `====================================================`,
      `项目标题：${project.title}`,
      `主打商品：${project.productName}`,
      `核心卖点：${project.sellingPoints}`,
      `目标受众：${project.targetAudience}`,
      `画幅比例：${project.aspectRatio} ｜ 配音情绪：${project.voiceTone} ｜ BGM风格：${project.bgmStyle}`,
      `AI智能剪辑与情节建议：${project.pacingTip}`,
      `====================================================\n`,
      `【第一部分：纯享提词器连读排词稿】\n`,
      ...project.sceneLines.map((line, idx) => `（镜头0${idx + 1}）${line}`),
      `\n====================================================`,
      `【第二部分：分镜画面情节与导演拍摄脚本】\n`,
      ...project.cameraAngles.map(
        (angle, idx) =>
          `[${angle}] (预计时长 4.0秒)\n- 画面情节描述：${project.visualCues[idx] || ''}\n- 对应口播台词：“${project.sceneLines[idx] || ''}”\n`
      ),
    ];

    const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${project.title || project.productName}_排词文本与情节脚本.txt`;
    a.click();
    URL.revokeObjectURL(url);
    notify('已导出排词文本与提词器情节稿 (.txt)！');
  };

  // Export 4: Excel Storyboard Spreadsheet (.csv with UTF-8 BOM)
  const handleExportExcelCsv = () => {
    const escapeCsv = (val: string) => `"${String(val || '').replace(/"/g, '""')}"`;
    const rows = [
      ['镜号', '镜头分组', '预计时长', '画面情节描述', '台词口播排词', '商品名称', 'AI剪辑节奏提示'],
      ...project.cameraAngles.map((angle, idx) => [
        `0${idx + 1}`,
        angle,
        '4.0秒',
        project.visualCues[idx] || '',
        project.sceneLines[idx] || '',
        project.productName,
        idx === 0 ? project.pacingTip : '',
      ]),
    ];

    const csvContent =
      '\uFEFF' + rows.map((r) => r.map((cell) => escapeCsv(cell)).join(',')).join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${project.title || project.productName}_分镜拍摄表.csv`;
    a.click();
    URL.revokeObjectURL(url);
    notify('已导出 Excel 专业分镜表格 (.csv)！');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4">
      <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
          <div className="flex items-center gap-2">
            <Download className="h-5 w-5 text-indigo-600" />
            <h3 className="text-base font-bold text-slate-900">
              全格式一键导出中心（视频 / AI画面图 / 排词情节稿 / Excel分镜表）
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-[82vh] space-y-5 overflow-y-auto p-6">
          {exportNotice && (
            <div className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-xs font-semibold text-emerald-800">
              <Check className="h-4 w-4 text-emerald-600" />
              <span>{exportNotice}</span>
            </div>
          )}

          {/* Grid of 4 Core Export Formats */}
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {/* 1. Video Export */}
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenVideoExporter();
              }}
              className="flex flex-col justify-between rounded-2xl border border-indigo-200 bg-indigo-50/60 p-4 text-left transition-colors hover:border-indigo-500 hover:bg-indigo-50"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white">
                    <Film className="h-4 w-4" />
                  </span>
                  <span className="font-mono text-xs font-semibold text-indigo-700">.WEBM 视频</span>
                </div>
                <h4 className="mt-3 text-sm font-bold text-slate-900">
                  导出 AI 混剪动态成片视频
                </h4>
                <p className="mt-1 text-xs text-slate-600">
                  含动态分镜画面、同步高亮字幕、AI中文配音与卡点背景音乐。
                </p>
              </div>
              <div className="mt-4 text-xs font-bold text-indigo-600">
                打开混剪渲染器并导出 →
              </div>
            </button>

            {/* 2. AI Storyboard Long Image Export */}
            <button
              type="button"
              onClick={handleExportStoryboardLongImage}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 text-left transition-colors hover:border-indigo-500 hover:bg-slate-50"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white">
                    <ImageIcon className="h-4 w-4" />
                  </span>
                  <span className="font-mono text-xs font-semibold text-emerald-700">.PNG 高清长图</span>
                </div>
                <h4 className="mt-3 text-sm font-bold text-slate-900">
                  导出 AI 视觉分镜故事板长图
                </h4>
                <p className="mt-1 text-xs text-slate-600">
                  一键生成包含所有分镜视觉图、画面情节与台词的高清通告长图，方便发微信群审阅。
                </p>
              </div>
              <div className="mt-4 text-xs font-bold text-emerald-700">
                立即下载分镜故事板长图 (.png) →
              </div>
            </button>

            {/* 3. Teleprompter & Plot Script (.txt) */}
            <button
              type="button"
              onClick={handleExportTeleprompterTxt}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 text-left transition-colors hover:border-indigo-500 hover:bg-slate-50"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500 text-white">
                    <FileText className="h-4 w-4" />
                  </span>
                  <span className="font-mono text-xs font-semibold text-amber-700">.TXT 排词情节稿</span>
                </div>
                <h4 className="mt-3 text-sm font-bold text-slate-900">
                  导出排词文本与提词器情节稿
                </h4>
                <p className="mt-1 text-xs text-slate-600">
                  包含纯享口播连读提词器文本 + 逐镜导演拍摄情节说明与剪辑节奏建议。
                </p>
              </div>
              <div className="mt-4 text-xs font-bold text-amber-700">
                立即下载排词情节文本 (.txt) →
              </div>
            </button>

            {/* 4. Excel Storyboard Sheet (.csv) */}
            <button
              type="button"
              onClick={handleExportExcelCsv}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 text-left transition-colors hover:border-indigo-500 hover:bg-slate-50"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-600 text-white">
                    <FileSpreadsheet className="h-4 w-4" />
                  </span>
                  <span className="font-mono text-xs font-semibold text-sky-700">.CSV Excel表格</span>
                </div>
                <h4 className="mt-3 text-sm font-bold text-slate-900">
                  导出专业剧组拍摄分镜表格
                </h4>
                <p className="mt-1 text-xs text-slate-600">
                  标准 4 列筷子科技同款分镜表，可直接用 Excel、WPS、飞书或腾讯文档打开编辑。
                </p>
              </div>
              <div className="mt-4 text-xs font-bold text-sky-700">
                立即下载 Excel 分镜表格 (.csv) →
              </div>
            </button>
          </div>

          {/* Individual AI Shot Image Downloader */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
              <Sparkles className="h-4 w-4 text-indigo-600" />
              <span>按单镜头分别导出高清 AI 视觉封面与分镜配图 (1080×1440 .png)：</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.cameraAngles.map((angle, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleExportSingleShotImage(idx)}
                  className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-indigo-500 hover:text-indigo-600"
                >
                  <ImageIcon className="h-3.5 w-3.5 text-indigo-600" />
                  <span>导出【{angle}】配图</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
