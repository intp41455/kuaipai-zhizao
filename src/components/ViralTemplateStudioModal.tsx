import React, { useState, useEffect, useMemo } from 'react';
import {
  X,
  Sparkles,
  Play,
  Wand2,
  Scissors,
  ExternalLink,
  Check,
  RefreshCw,
  Layers,
  Film,
  BarChart3,
  Zap,
  ArrowRight,
  GitBranch,
  BookmarkPlus,
  Compass,
  Camera,
  Link2,
  FileText,
  Type as TypeIcon,
  PackagePlus,
} from 'lucide-react';
import {
  CuratedTemplate,
  StoreMemoryProfile,
  DissectSkillPackage,
} from '../data/curatedTemplates';
import { OriginalWorkCoverScene } from './ShareAndExportModals';

interface ViralTemplateStudioModalProps {
  template: CuratedTemplate | null;
  onClose: () => void;
  storeMemoryEnabled: boolean;
  activeStore: StoreMemoryProfile;
  isGenerating: boolean;
  onApplySlotsToEditor: (payload: {
    title: string;
    productName: string;
    sellingPoints: string;
    audience: string;
    category: string;
    bgmStyle: string;
    pacingTip: string;
    cameraAngles: string[];
    visualCues: string[];
    sceneLines: string[];
    openMixImmediately: boolean;
  }) => void;
  onAIFissionGenerate: (payload: {
    productName: string;
    sellingPoints: string;
    audience: string;
    category: string;
    templateHook: string;
    templateStructure: string;
  }) => Promise<void>;
  onJumpToDissect: (tpl: CuratedTemplate) => void;
  onJumpToGraphicSuite: (tpl: CuratedTemplate) => void;
  onNotice: (type: 'success' | 'error', msg: string) => void;
}

const SLOT_MATERIAL_TAGS = [
  '原片高光参考镜头',
  '门店/产品实拍特写',
  'AI 商业微距镜头',
  '前后反差对比分屏',
  '已上传自有实拍素材',
];

const RAG_COVER_PHOTOS = [
  'https://images.pexels.com/photos/3738339/pexels-photo-3738339.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
];

export const ViralTemplateStudioModal: React.FC<ViralTemplateStudioModalProps> = ({
  template,
  onClose,
  storeMemoryEnabled,
  activeStore,
  isGenerating,
  onApplySlotsToEditor,
  onAIFissionGenerate,
  onJumpToDissect,
  onJumpToGraphicSuite,
  onNotice,
}) => {
  const [activeTab, setActiveTab] = useState<'slots' | 'fission' | 'dna'>('slots');
  const [customProduct, setCustomProduct] = useState('');
  const [customPoints, setCustomPoints] = useState('');
  const [customAudience, setCustomAudience] = useState('');
  const [fissionStyle, setFissionStyle] = useState<string>('抖音强痛点带货流');

  // Editable / RAG-Replaceable Cover & Title State
  const [customHeadline, setCustomHeadline] = useState('');
  const [customSubhead, setCustomSubhead] = useState('');
  const [customCoverUrl, setCustomCoverUrl] = useState('');
  const [ragReplaceVariantIdx, setRagReplaceVariantIdx] = useState(0);

  const [slotAngles, setSlotAngles] = useState<string[]>([]);
  const [slotVisuals, setSlotVisuals] = useState<string[]>([]);
  const [slotLines, setSlotLines] = useState<string[]>([]);
  const [slotMaterialTypes, setSlotMaterialTypes] = useState<string[]>([]);

  useEffect(() => {
    if (!template) return;
    if (storeMemoryEnabled) {
      setCustomProduct(activeStore.signatureProducts.split('；')[0] || template.defaultProductName);
      setCustomPoints(activeStore.memoryAnchors);
      setCustomAudience(activeStore.targetAudience);
    } else {
      setCustomProduct(template.defaultProductName);
      setCustomPoints(template.defaultSellingPoints);
      setCustomAudience(template.defaultAudience);
    }
    setCustomHeadline(template.posterHeadline);
    setCustomSubhead(template.posterSubhead);
    setCustomCoverUrl(template.coverPhotoUrl);
    setSlotAngles([...template.cameraAngles]);
    setSlotVisuals([...template.visualCues]);
    setSlotLines([...template.sceneLines]);
    setSlotMaterialTypes(template.cameraAngles.map((_, i) => SLOT_MATERIAL_TAGS[i % 4]));
  }, [template, storeMemoryEnabled, activeStore]);

  if (!template) return null;

  const aiSuitableDirections =
    template.suitableDirections ||
    `适合【${template.category}】同城团购引流、抖音短视频带货、小红书高收藏种草笔记（目标人群：${
      customAudience || template.defaultAudience
    }）`;

  const aiSuitableMaterials =
    template.suitableMaterials ||
    `建议准备：① 前3秒痛点状态特写 1段；② 产品/门店近景微距实拍 2段；③ 使用前后反差对比画面 1段`;

  // RAG Per-Part Replacement 1: Replace Title & Poster Headline only
  const handleRagReplaceTitleOnly = () => {
    const prod = customProduct.trim() || template.defaultProductName;
    const city = storeMemoryEnabled ? activeStore.cityLocation.slice(0, 6) : '全网热销';
    const nextIdx = (ragReplaceVariantIdx + 1) % 4;
    setRagReplaceVariantIdx(nextIdx);

    const ragTitles = [
      {
        headline: `${prod.slice(0, 8)}实测封神`,
        subhead: `${city}回头客王 · 3秒看懂核心差距`,
      },
      {
        headline: `后悔没早试这款${template.category}`,
        subhead: `内行人都在抢 · 闭眼入不踩雷`,
      },
      {
        headline: `别再交智商税了！`,
        subhead: `深度测评 ${prod.slice(0, 10)} 真实效果`,
      },
      {
        headline: `${city}店长私藏爆款`,
        subhead: `左下角限时福利 · 随时可退`,
      },
    ];
    const picked = ragTitles[nextIdx];
    setCustomHeadline(picked.headline);
    setCustomSubhead(picked.subhead);
    onNotice(
      'success',
      `已依据 RAG 知识库为您一键更换标题方案：「${picked.headline}｜${picked.subhead}」`
    );
  };

  // RAG Per-Part Replacement 2: Replace Cover Image & Visual Style only
  const handleRagReplaceCoverOnly = () => {
    const nextIdx = (ragReplaceVariantIdx + 1) % RAG_COVER_PHOTOS.length;
    setRagReplaceVariantIdx(nextIdx);
    setCustomCoverUrl(RAG_COVER_PHOTOS[nextIdx]);
    onNotice('success', '已依据 RAG 视觉资产库为您更换高点击率封面主图！');
  };

  // RAG Per-Part Replacement 3: Replace Single Shot by Index
  const handleRagReplaceSingleShot = (shotIdx: number) => {
    const prod = customProduct.trim() || template.defaultProductName;
    const pts = customPoints.trim() || template.defaultSellingPoints;
    const storeName = storeMemoryEnabled ? activeStore.storeName : '官方旗舰店';
    const nextVisuals = [...slotVisuals];
    const nextLines = [...slotLines];

    const shotOptions = [
      {
        visual: `【RAG 痛点反差微距】高清特写展示「${prod}」解决痛点的第一现场，左上角弹出醒目痛点字卡。`,
        line: `还在为这个问题烦恼？今天用【${storeName}】的真实实测教你3秒彻底搞定！`,
      },
      {
        visual: `【RAG 镇店爆品特写】4K微距推镜展示「${prod}」核心质地与包装细节，光线高级通透。`,
        line: `看看我们店里复购率最高的这款「${prod}」，核心主打${pts.slice(0, 22)}，细节经得起放大！`,
      },
      {
        visual: `【RAG 分屏实测对比】左屏展示普通产品痛点，右屏展示使用「${prod}」后的惊艳反差效果。`,
        line: `不用听夸大宣传，直接看使用前后的真实对比，用过一次就知道为什么全是回头客！`,
      },
      {
        visual: `【RAG 团购核销促单】主理人手持「${prod}」微笑出镜，手势指向左下角限时福利组件。`,
        line: `趁现在【${storeName}】左下角有专属补贴福利，不好用随时退，需要的朋友赶紧抢！`,
      },
    ];

    const chosen = shotOptions[(shotIdx + ragReplaceVariantIdx) % shotOptions.length];
    setRagReplaceVariantIdx((prev) => prev + 1);
    nextVisuals[shotIdx] = chosen.visual;
    nextLines[shotIdx] = chosen.line;
    setSlotVisuals(nextVisuals);
    setSlotLines(nextLines);
    onNotice('success', `已依据您的 RAG 知识库一键更换第 0${shotIdx + 1} 镜画面与台词！`);
  };

  // Instant Local Smart Adaptation of All Slots to User's Product/Store
  const handleQuickAdaptSlotsToMyProduct = () => {
    const prod = customProduct.trim() || template.defaultProductName;
    const pts = customPoints.trim() || template.defaultSellingPoints;
    const nextIdx = (ragReplaceVariantIdx + 1) % 3;
    setRagReplaceVariantIdx(nextIdx);

    const nextVisuals = slotVisuals.map((v, idx) =>
      idx === 0
        ? `针对【${customAudience || template.defaultAudience}】高频痛点特写切入，画面反差感拉满。`
        : idx === 1
        ? `近景特写展示【${prod}】高颜值外观与核心质地，光线通透，突出品质感。`
        : idx === 2
        ? `分屏实测对比：使用【${prod}】前后的直观反差效果（${pts.slice(0, 20)}）。`
        : v
    );
    const nextLines = slotLines.map((_, idx) =>
      idx === 0
        ? nextIdx === 0
          ? `为什么别人选${template.category}从来不踩雷？这3秒实测看懂核心秘密！`
          : `千万别再盲目跟风乱买了！选【${prod.slice(0, 12)}】一定要认准这个核心细节！`
        : idx === 1
        ? `直到我换了这款【${prod}】，它主打的就是${pts.slice(0, 28)}，用一次就彻底圈粉！`
        : idx === 2
        ? `你看这实测前后的肉眼可见对比，真的把质感与效果拉到了同价位天花板！`
        : storeMemoryEnabled
        ? `同城和线上的朋友注意！【${activeStore.storeName}】现在专属福利：${pts.slice(0, 32)}，赶紧点击左下角抢购！`
        : `趁现在官方活动立减超划算，点击左下角链接，赶紧把【${prod}】带回家体验吧！`
    );
    setSlotVisuals(nextVisuals);
    setSlotLines(nextLines);
    onNotice('success', `已依据 RAG 知识库将全套分镜话术更换为「${prod.slice(0, 14)}」定制方案！`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4 overflow-y-auto">
      <div className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
        {/* Top Clean Header */}
        <div className="flex items-center justify-between border-b border-slate-100 bg-white px-6 py-4">
          <div className="flex items-center gap-3 min-w-0">
            <span className="rounded-lg bg-indigo-600 px-2.5 py-1 text-xs font-bold text-white shrink-0">
              模板套用
            </span>
            <h2 className="truncate text-base font-bold text-slate-900">
              {template.title}
            </h2>
            <span className="hidden sm:inline-flex items-center text-xs text-slate-400 shrink-0">
              · 评分 {template.qualityScore}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Main 12-Column Body */}
        <div className="grid flex-1 grid-cols-1 overflow-y-auto lg:grid-cols-12">
          {/* Left 4 Columns: Clean Cover Preview + Concise 3-Tag Metadata */}
          <div className="flex flex-col justify-between border-b border-slate-100 bg-slate-50/50 p-5 lg:col-span-4 lg:border-b-0 lg:border-r">
            <div className="space-y-4">
              {/* Real Cover Preview Box */}
              <div className="relative mx-auto aspect-3/4 w-full max-w-[200px] overflow-hidden rounded-2xl border border-slate-200 shadow-sm group">
                <OriginalWorkCoverScene
                  sceneType={template.coverSceneType}
                  coverPhotoUrl={customCoverUrl || template.coverPhotoUrl}
                  headline={customHeadline || template.posterHeadline}
                  subhead={customSubhead || template.posterSubhead}
                />
                <div className="absolute inset-x-0 top-0 flex items-center justify-between bg-gradient-to-b from-black/70 to-transparent p-2.5 text-white">
                  <span className="rounded bg-black/50 px-2 py-0.5 text-[10px] font-semibold">
                    {template.sourcePlatform}
                  </span>
                  <button
                    type="button"
                    onClick={handleRagReplaceCoverOnly}
                    className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-0.5 text-[10px] font-bold text-slate-900 hover:bg-white cursor-pointer"
                  >
                    <Camera className="h-2.5 w-2.5 text-indigo-600" />
                    <span>换封面</span>
                  </button>
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent px-3 py-2 text-white text-[11px]">
                  <span className="truncate">{template.sourceAuthor}</span>
                  <span className="font-mono text-amber-300">♥ {template.likesCountText}</span>
                </div>
              </div>

              {/* Ultra-Clean 3-Row Suitability Summary (No long paragraph walls!) */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-3.5 space-y-2 text-xs">
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                  <span className="font-bold text-slate-800">AI 模板适用简报</span>
                  <a
                    href={template.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-600 hover:underline"
                  >
                    <span>看原片</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <span className="text-slate-400 shrink-0">适用方向</span>
                  <span className="truncate font-medium text-slate-800">
                    {template.category}带货 / 同城引流 / 种草
                  </span>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <span className="text-slate-400 shrink-0">所需素材</span>
                  <span className="truncate font-medium text-slate-800">
                    1段痛点 + 2段产品 + 1段对比
                  </span>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <span className="text-slate-400 shrink-0">黄金钩子</span>
                  <span className="truncate font-medium text-indigo-600">
                    {template.hookFormula}
                  </span>
                </div>
              </div>
            </div>

            {/* Left Bottom Quick Export to Graphic Suite or Dissection */}
            <div className="mt-4 grid grid-cols-2 gap-2 pt-2">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onJumpToDissect(template);
                }}
                className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white py-2 text-xs font-semibold text-slate-700 hover:border-indigo-300 hover:text-indigo-600 whitespace-nowrap cursor-pointer"
              >
                <Scissors className="h-3.5 w-3.5 text-indigo-600" />
                <span>拉片拆解</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onJumpToGraphicSuite(template);
                }}
                className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white py-2 text-xs font-semibold text-slate-700 hover:border-indigo-300 hover:text-indigo-600 whitespace-nowrap cursor-pointer"
              >
                <Layers className="h-3.5 w-3.5 text-purple-600" />
                <span>同款套图</span>
              </button>
            </div>
          </div>

          {/* Right 8 Columns: Clean One-Screen Slot Editor & RAG Single-Click Replacement */}
          <div className="flex flex-col justify-between p-6 lg:col-span-8">
            <div className="space-y-4">
              {/* Row 1: Segmented Tabs + Single-Line RAG Replacement Bar (Never wraps awkwardly) */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div className="inline-flex items-center rounded-xl bg-slate-100 p-1 text-xs">
                  <button
                    type="button"
                    onClick={() => setActiveTab('slots')}
                    className={`rounded-lg px-3 py-1.5 font-semibold transition-all whitespace-nowrap cursor-pointer ${
                      activeTab === 'slots'
                        ? 'bg-white text-slate-900 shadow-2xs'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    分镜套用
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('fission')}
                    className={`rounded-lg px-3 py-1.5 font-semibold transition-all whitespace-nowrap cursor-pointer ${
                      activeTab === 'fission'
                        ? 'bg-white text-slate-900 shadow-2xs'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    AI 深度裂变
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('dna')}
                    className={`rounded-lg px-3 py-1.5 font-semibold transition-all whitespace-nowrap cursor-pointer ${
                      activeTab === 'dna'
                        ? 'bg-white text-slate-900 shadow-2xs'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    数据基因
                  </button>
                </div>

                {/* Single-Row Non-Wrapping RAG Quick Replace Bar */}
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handleRagReplaceTitleOnly}
                    className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:border-indigo-300 hover:text-indigo-600 whitespace-nowrap cursor-pointer"
                  >
                    <RefreshCw className="h-3 w-3 text-indigo-500" />
                    <span>换标题</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleRagReplaceCoverOnly}
                    className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:border-indigo-300 hover:text-indigo-600 whitespace-nowrap cursor-pointer"
                  >
                    <Camera className="h-3 w-3 text-indigo-500" />
                    <span>换封面</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleQuickAdaptSlotsToMyProduct}
                    className="inline-flex items-center gap-1 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-indigo-700 whitespace-nowrap cursor-pointer"
                  >
                    <Wand2 className="h-3 w-3" />
                    <span>AI 换全套脚本</span>
                  </button>
                </div>
              </div>

              {/* Row 2: Clean 2-Input Bar for Product & Selling Points */}
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-12">
                <div className="sm:col-span-5">
                  <input
                    type="text"
                    value={customProduct}
                    onChange={(e) => setCustomProduct(e.target.value)}
                    placeholder="您的商品或套餐名称..."
                    className="h-9 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3 text-xs font-medium text-slate-900 focus:border-indigo-500 focus:bg-white focus:outline-none"
                  />
                </div>
                <div className="sm:col-span-7">
                  <input
                    type="text"
                    value={customPoints}
                    onChange={(e) => setCustomPoints(e.target.value)}
                    placeholder="核心卖点或价格福利（AI 换脚本时自动融入）..."
                    className="h-9 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3 text-xs text-slate-700 focus:border-indigo-500 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              {/* TAB 1: Compact 4-Row Table (All 4 shots fit cleanly without nested card clutter) */}
              {activeTab === 'slots' && (
                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <table className="w-full border-collapse text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-bold text-slate-600">
                        <th className="py-2.5 px-3 w-32">分镜阶段</th>
                        <th className="py-2.5 px-3">画面描述（可直接修改）</th>
                        <th className="py-2.5 px-3">口播台词（可直接修改）</th>
                        <th className="py-2.5 px-3 w-20 text-right">单镜替换</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white">
                      {slotAngles.map((ang, idx) => (
                        <tr
                          key={idx}
                          className="group/row py-4 even:bg-slate-50 hover:bg-indigo-50/20 transition-colors"
                        >
                          <td className="align-top py-4 px-3">
                            <div className="flex items-center gap-1.5">
                              <span className="font-mono font-bold text-indigo-600">
                                0{idx + 1}
                              </span>
                              <input
                                type="text"
                                value={ang.replace(/^0?\d+\s*/, '')}
                                onChange={(e) => {
                                  const next = [...slotAngles];
                                  next[idx] = `0${idx + 1} ${e.target.value}`;
                                  setSlotAngles(next);
                                }}
                                className="w-full min-w-0 bg-transparent font-semibold text-slate-800 focus:outline-none"
                              />
                            </div>
                            {/* Hover-activated quick action menu: Quick Duplicate & Move to Top/Bottom */}
                            <div className="mt-2 inline-flex items-center divide-x divide-slate-100 rounded-md border border-slate-200 bg-white text-[10px] opacity-0 group-hover/row:opacity-100 focus-within:opacity-100 transition-opacity shadow-2xs">
                              <button
                                type="button"
                                onClick={() => {
                                  const nextA = [...slotAngles];
                                  const nextV = [...slotVisuals];
                                  const nextL = [...slotLines];
                                  nextA.splice(idx + 1, 0, `${ang} (副本)`);
                                  nextV.splice(idx + 1, 0, slotVisuals[idx] || '');
                                  nextL.splice(idx + 1, 0, slotLines[idx] || '');
                                  setSlotAngles(
                                    nextA.map((a, i) => `0${i + 1} ${a.replace(/^0?\d+\s*/, '')}`)
                                  );
                                  setSlotVisuals(nextV);
                                  setSlotLines(nextL);
                                }}
                                title="快速复制 (Quick Duplicate)"
                                className="px-1.5 py-0.5 font-semibold text-indigo-600 hover:bg-indigo-50 cursor-pointer"
                              >
                                复制
                              </button>
                              <button
                                type="button"
                                disabled={idx === 0}
                                onClick={() => {
                                  const moveTop = <T,>(arr: T[]) => {
                                    const copy = [...arr];
                                    const [item] = copy.splice(idx, 1);
                                    copy.unshift(item);
                                    return copy;
                                  };
                                  setSlotAngles(
                                    moveTop(slotAngles).map(
                                      (a, i) => `0${i + 1} ${a.replace(/^0?\d+\s*/, '')}`
                                    )
                                  );
                                  setSlotVisuals(moveTop(slotVisuals));
                                  setSlotLines(moveTop(slotLines));
                                }}
                                title="置顶 (Move to Top)"
                                className="px-1.5 py-0.5 text-slate-600 hover:bg-slate-50 disabled:opacity-35 cursor-pointer"
                              >
                                置顶
                              </button>
                              <button
                                type="button"
                                disabled={idx === slotAngles.length - 1}
                                onClick={() => {
                                  const moveBottom = <T,>(arr: T[]) => {
                                    const copy = [...arr];
                                    const [item] = copy.splice(idx, 1);
                                    copy.push(item);
                                    return copy;
                                  };
                                  setSlotAngles(
                                    moveBottom(slotAngles).map(
                                      (a, i) => `0${i + 1} ${a.replace(/^0?\d+\s*/, '')}`
                                    )
                                  );
                                  setSlotVisuals(moveBottom(slotVisuals));
                                  setSlotLines(moveBottom(slotLines));
                                }}
                                title="置底 (Move to Bottom)"
                                className="px-1.5 py-0.5 text-slate-600 hover:bg-slate-50 disabled:opacity-35 cursor-pointer"
                              >
                                置底
                              </button>
                            </div>
                          </td>
                          <td className="align-top py-4 px-3">
                            <textarea
                              rows={2}
                              value={slotVisuals[idx] || ''}
                              onChange={(e) => {
                                const next = [...slotVisuals];
                                next[idx] = e.target.value;
                                setSlotVisuals(next);
                              }}
                              className="w-full resize-y rounded-lg border border-transparent bg-transparent p-1 text-xs leading-relaxed text-slate-600 hover:border-slate-200 focus:border-indigo-400 focus:bg-white focus:outline-none"
                            />
                          </td>
                          <td className="align-top py-4 px-3">
                            <textarea
                              rows={2}
                              value={slotLines[idx] || ''}
                              onChange={(e) => {
                                const next = [...slotLines];
                                next[idx] = e.target.value;
                                setSlotLines(next);
                              }}
                              className="w-full resize-y rounded-lg border border-transparent bg-transparent p-1 text-xs leading-relaxed font-medium text-slate-900 hover:border-slate-200 focus:border-indigo-400 focus:bg-white focus:outline-none"
                            />
                          </td>
                          <td className="align-top py-4 px-3 text-right">
                            <button
                              type="button"
                              onClick={() => handleRagReplaceSingleShot(idx)}
                              className="inline-flex items-center gap-1 rounded-lg border border-indigo-200 bg-indigo-50/70 px-2 py-1 text-[11px] font-semibold text-indigo-700 hover:bg-indigo-100 whitespace-nowrap cursor-pointer"
                            >
                              <RefreshCw className="h-3 w-3" />
                              <span>换此镜</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* TAB 2: AI Viral Fission Engine */}
              {activeTab === 'fission' && (
                <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50/50 p-4">
                  <div>
                    <h3 className="text-xs font-bold text-slate-900">
                      选择复刻风格
                    </h3>
                    <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {[
                        '抖音强痛点带货流',
                        '小红书高赞种草流',
                        '同城团购核销流',
                        '真人口播实测流',
                      ].map((style) => (
                        <button
                          key={style}
                          type="button"
                          onClick={() => setFissionStyle(style)}
                          className={`rounded-xl border px-3 py-2 text-xs font-semibold transition-all cursor-pointer ${
                            fissionStyle === style
                              ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                              : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          {style}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      目标人群画像
                    </label>
                    <input
                      type="text"
                      value={customAudience}
                      onChange={(e) => setCustomAudience(e.target.value)}
                      placeholder="例如：熬夜上班族、新手宝妈、同城美食爱好者..."
                      className="h-9 w-full rounded-xl border border-slate-200 bg-white px-3 text-xs text-slate-900 focus:border-indigo-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="button"
                    disabled={isGenerating}
                    onClick={async () => {
                      await onAIFissionGenerate({
                        productName: customProduct || template.defaultProductName,
                        sellingPoints: customPoints || template.defaultSellingPoints,
                        audience: customAudience || template.defaultAudience,
                        category: template.category,
                        templateHook: `${template.hookFormula}（风格：${fissionStyle}）`,
                        templateStructure: template.structureSummary,
                      });
                      onClose();
                    }}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 text-xs font-bold text-white hover:bg-indigo-700 disabled:opacity-50 cursor-pointer"
                  >
                    <Sparkles className="h-4 w-4" />
                    <span>
                      {isGenerating ? 'AI 正在生成...' : '立即 AI 深度裂变新脚本'}
                    </span>
                  </button>
                </div>
              )}

              {/* TAB 3: Original Viral DNA & Metrics */}
              {activeTab === 'dna' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3">
                      <span className="text-[11px] text-slate-400">前3秒留存率</span>
                      <p className="mt-1 font-mono text-base font-bold text-indigo-600">
                        82.4%
                      </p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3">
                      <span className="text-[11px] text-slate-400">全片完播率</span>
                      <p className="mt-1 font-mono text-base font-bold text-slate-900">
                        46.8%
                      </p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3">
                      <span className="text-[11px] text-slate-400">互动赞评比</span>
                      <p className="mt-1 font-mono text-base font-bold text-slate-900">
                        7.9%
                      </p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3">
                      <span className="text-[11px] text-slate-400">转化点击率</span>
                      <p className="mt-1 font-mono text-base font-bold text-rose-600">
                        5.6%
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-2 text-xs text-slate-600">
                    <p>
                      <span className="font-semibold text-slate-800">剪辑节奏：</span>
                      {template.pacingStyle}
                    </p>
                    <p>
                      <span className="font-semibold text-slate-800">推荐配乐：</span>
                      {template.bgmStyle}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Action Footer */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer"
              >
                取消
              </button>

              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    onApplySlotsToEditor({
                      title: `${customHeadline || customProduct.slice(0, 14) || template.posterHeadline} · 同款成片`,
                      productName: customProduct || template.defaultProductName,
                      sellingPoints: customPoints || template.defaultSellingPoints,
                      audience: customAudience || template.defaultAudience,
                      category: template.category,
                      bgmStyle: template.bgmStyle,
                      pacingTip: `【${template.pacingStyle}】${template.hookFormula}`,
                      cameraAngles: slotAngles,
                      visualCues: slotVisuals,
                      sceneLines: slotLines,
                      openMixImmediately: true,
                    });
                    onClose();
                  }}
                  className="flex items-center gap-1.5 rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-semibold text-indigo-700 hover:bg-indigo-100 whitespace-nowrap cursor-pointer"
                >
                  <Play className="h-3.5 w-3.5 fill-indigo-600" />
                  <span>直接混剪预览</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    onApplySlotsToEditor({
                      title: `${customHeadline || customProduct.slice(0, 14) || template.posterHeadline} · 同款脚本`,
                      productName: customProduct || template.defaultProductName,
                      sellingPoints: customPoints || template.defaultSellingPoints,
                      audience: customAudience || template.defaultAudience,
                      category: template.category,
                      bgmStyle: template.bgmStyle,
                      pacingTip: `【${template.pacingStyle}】${template.hookFormula}`,
                      cameraAngles: slotAngles,
                      visualCues: slotVisuals,
                      sceneLines: slotLines,
                      openMixImmediately: false,
                    });
                    onClose();
                  }}
                  className="flex items-center gap-1.5 rounded-xl bg-[#4F46E5] px-5 py-2 text-xs font-semibold text-white hover:bg-[#4338CA] whitespace-nowrap cursor-pointer"
                >
                  <Wand2 className="h-3.5 w-3.5" />
                  <span>套用模板进入分镜台</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 2. Foolproof Omni-Input Viral Dissection & Template Encapsulation Workspace
// ============================================================================
interface ViralDissectionWorkspaceProps {
  skills: DissectSkillPackage[];
  selectedSkillIds: string[];
  onToggleSkillId: (id: string) => void;
  samples: { id: string; title: string; category: string; content: string }[];
  dissectTitle: string;
  setDissectTitle: (v: string) => void;
  dissectCategory: string;
  setDissectCategory: (v: string) => void;
  dissectContent: string;
  setDissectContent: (v: string) => void;
  isDissecting: boolean;
  onRunDissection: () => void;
  dissectResult: {
    sourceTitle: string;
    sourceContent: string;
    hookAnalysis: string;
    retentionSecret: string;
    conversionTrigger: string;
    extractedFormula: string;
    skillWorkflowOutput?: string;
    sceneBreakdown: string[];
    cameraAngles: string[];
    visualCues: string[];
    sceneLines: string[];
  };
  storeMemoryEnabled: boolean;
  activeStore: StoreMemoryProfile;
  productName: string;
  setProductName: (v: string) => void;
  sellingPoints: string;
  setSellingPoints: (v: string) => void;
  isGeneratingScript: boolean;
  onSaveDissectionToCloud: () => void;
  onEncapsulateAsTemplate?: (tpl: CuratedTemplate) => void;
  onApplyDissectedStructureToEditor: () => void;
  onGenerateNewScriptFromDissection: () => void;
  onNotice: (type: 'success' | 'error', msg: string) => void;
}

export const ViralDissectionWorkspace: React.FC<ViralDissectionWorkspaceProps> = ({
  skills,
  selectedSkillIds,
  onToggleSkillId,
  samples,
  dissectTitle,
  setDissectTitle,
  dissectCategory,
  setDissectCategory,
  dissectContent,
  setDissectContent,
  isDissecting,
  onRunDissection,
  dissectResult,
  storeMemoryEnabled,
  activeStore,
  productName,
  setProductName,
  sellingPoints,
  setSellingPoints,
  isGeneratingScript,
  onSaveDissectionToCloud,
  onEncapsulateAsTemplate,
  onApplyDissectedStructureToEditor,
  onGenerateNewScriptFromDissection,
  onNotice,
}) => {
  const [omniRawInput, setOmniRawInput] = useState<string>(dissectContent);
  const [dissectColWidths, setDissectColWidths] = useState<[number, number, number]>([
    160, 360, 380,
  ]);
  const [dissectRowHeights, setDissectRowHeights] = useState<Record<number, number>>({});

  useEffect(() => {
    setOmniRawInput(dissectContent);
  }, [dissectContent]);

  // Automatic Input Type Detection & Skill Routing
  const detectedMeta = useMemo(() => {
    const text = omniRawInput.trim();
    if (/douyin\.com|iesdouyin\.com|kuaishou\.com|v\.douyin/i.test(text)) {
      return {
        typeLabel: '🎬 视频链接',
        badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
        autoSkillNames: ['前3秒钩子提取', '分镜矩阵复刻'],
        suitableDirection: `${dissectCategory || '个护/百货'}短视频带货 · 同城团购引流`,
        suitableMaterial: '1段痛点特写(3s) + 2段产品微距(8s) + 1段前后对比(4s)',
      };
    }
    if (/xiaohongshu\.com|xhslink\.com|小红书/i.test(text)) {
      return {
        typeLabel: '📕 图文链接',
        badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
        autoSkillNames: ['小红书图文爆文', '前3秒钩子提取'],
        suitableDirection: `${dissectCategory || '美妆/穿搭'}小红书种草图文 · 封面大字报`,
        suitableMaterial: '1张高颜首图封面 + 3张痛点/卖点对比图',
      };
    }
    if (text.length > 0 && text.length <= 45 && !text.includes('\n')) {
      return {
        typeLabel: '💡 爆款标题',
        badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
        autoSkillNames: ['前3秒钩子提取', '同城团购逼单'],
        suitableDirection: '单句标题自动扩写为 4 镜头带货脚本',
        suitableMaterial: '主理人出镜口播或产品桌面实拍特写 3-4 段',
      };
    }
    return {
      typeLabel: '📝 脚本/文案',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      autoSkillNames: ['前3秒钩子提取', '分镜矩阵复刻'],
      suitableDirection: `${dissectCategory || '全品类'}口播种草 · 实测对比 · 门店团购`,
      suitableMaterial: '痛点镜头(3s) + 卖点微距(4s) + 效果实测(4s) + 福利促单(3s)',
    };
  }, [omniRawInput, dissectCategory]);

  const handleOmniInputChange = (val: string) => {
    setOmniRawInput(val);
    setDissectContent(val);
    const firstLine = val.split('\n')[0]?.replace(/^镜头\d+[：:]\s*/, '').slice(0, 28);
    if (firstLine && firstLine.length >= 4) {
      setDissectTitle(firstLine);
    }
  };

  const startResizeDissectCol = (colIndex: 0 | 1 | 2, e: React.MouseEvent) => {
    e.preventDefault();
    const startX = e.clientX;
    const startW = dissectColWidths[colIndex];
    const onMove = (moveEvent: MouseEvent) => {
      const delta = moveEvent.clientX - startX;
      setDissectColWidths((prev) => {
        const next: [number, number, number] = [...prev] as [number, number, number];
        next[colIndex] = Math.max(120, Math.min(720, startW + delta));
        return next;
      });
    };
    const onUp = () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };

  const startResizeDissectRow = (rowIndex: number, e: React.MouseEvent) => {
    e.preventDefault();
    const startY = e.clientY;
    const startH = dissectRowHeights[rowIndex] ?? 76;
    const onMove = (moveEvent: MouseEvent) => {
      const delta = moveEvent.clientY - startY;
      setDissectRowHeights((prev) => ({
        ...prev,
        [rowIndex]: Math.max(56, Math.min(260, startH + delta)),
      }));
    };
    const onUp = () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };

  // Encapsulate Dissected Result directly into CuratedTemplate Library
  const handleEncapsulateIntoLibrary = () => {
    const newTpl: CuratedTemplate = {
      id: `encap_tpl_${Date.now()}`,
      title: `${dissectResult.sourceTitle.slice(0, 20)}（拆解模板）`,
      category: dissectCategory || activeStore.industry || '个护',
      templateTab: '带货口播模板',
      contentType: '痛点对比',
      durationText: '00:18',
      qualityScore: 98,
      likesCountText: '3.6k',
      posterHeadline: dissectResult.sourceTitle.slice(0, 10) || 'AI拆解爆款',
      posterSubhead: dissectResult.extractedFormula.slice(0, 18) || '高完播黄金结构公式',
      posterTag: dissectCategory || 'AI封装模板',
      accentFrom: '#4338ca',
      accentTo: '#7c3aed',
      coverSceneType: 'shampoo',
      coverPhotoUrl:
        'https://images.pexels.com/photos/3738339/pexels-photo-3738339.jpeg?auto=compress&cs=tinysrgb&w=800',
      sourcePlatform: '抖音原片',
      sourceAuthor: '@AI智能拉片工坊',
      sourceUrl: 'https://www.douyin.com',
      hookFormula: dissectResult.hookAnalysis,
      structureSummary: dissectResult.extractedFormula,
      pacingStyle: 'AI拉片卡点节奏（单镜3.5秒）',
      bgmStyle: '高赞卡点种草律动',
      defaultProductName:
        productName || activeStore.signatureProducts.split('；')[0] || '主推爆款单品',
      defaultSellingPoints: sellingPoints || activeStore.memoryAnchors,
      defaultAudience: activeStore.targetAudience,
      cameraAngles: [...dissectResult.cameraAngles],
      visualCues: [...dissectResult.visualCues],
      sceneLines: [...dissectResult.sceneLines],
      suitableDirections: detectedMeta.suitableDirection,
      suitableMaterials: detectedMeta.suitableMaterial,
    };

    onSaveDissectionToCloud();
    if (onEncapsulateAsTemplate) {
      onEncapsulateAsTemplate(newTpl);
    } else {
      onNotice(
        'success',
        `已将「${newTpl.title}」一键封装为爆款模板并加入海量爆款库！`
      );
    }
  };

  return (
    <div className="space-y-4">
      {/* Step 1: Minimalist Omni-Input Card (Link / Copy / Title -> Auto-Detect -> Auto-Skill) */}
      <section className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs space-y-3.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-base font-bold text-slate-900">
              一键智能拉片拆解
            </h1>
            <span
              className={`rounded-md border px-2 py-0.5 text-xs font-semibold ${detectedMeta.badgeColor}`}
            >
              自动识别：{detectedMeta.typeLabel}
            </span>
          </div>

          {/* Compact Skill Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs text-slate-400 mr-1">已挂载 Skill：</span>
            {skills.map((skill) => {
              const active = selectedSkillIds.includes(skill.id);
              return (
                <button
                  key={skill.id}
                  type="button"
                  onClick={() => onToggleSkillId(skill.id)}
                  className={`inline-flex items-center gap-1 rounded-lg border px-2.5 py-1 text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                    active
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-700 font-semibold'
                      : 'border-slate-200 bg-white text-slate-500 hover:border-slate-300'
                  }`}
                >
                  {active && <Check className="h-3 w-3 text-indigo-600" />}
                  <span>{skill.category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Clean Omni-Input Box */}
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 focus-within:border-indigo-500 focus-within:bg-white transition-all">
          <textarea
            rows={3}
            value={omniRawInput}
            onChange={(e) => handleOmniInputChange(e.target.value)}
            placeholder="在此粘贴：视频/图文链接、一段文案或一个标题，AI 自动识别并调用对应 Skill 拆解..."
            className="w-full resize-y bg-transparent text-xs leading-relaxed text-slate-900 focus:outline-none min-h-[72px]"
          />

          <div className="mt-2 flex flex-wrap items-center justify-between gap-2 border-t border-slate-200/70 pt-2.5">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs text-slate-400">示例：</span>
              {samples.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setDissectTitle(item.title);
                    setDissectCategory(item.category);
                    setDissectContent(item.content);
                    setOmniRawInput(item.content);
                  }}
                  className={`rounded-lg border px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    dissectTitle === item.title
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-700 font-semibold'
                      : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {item.category}样片
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              {omniRawInput && (
                <button
                  type="button"
                  onClick={() => {
                    setOmniRawInput('');
                    setDissectContent('');
                  }}
                  className="text-xs text-slate-400 hover:text-slate-600 cursor-pointer px-2"
                >
                  清空
                </button>
              )}
              <button
                type="button"
                disabled={isDissecting}
                onClick={onRunDissection}
                className="flex items-center gap-1.5 rounded-xl bg-[#4F46E5] px-4 py-2 text-xs font-bold text-white hover:bg-[#4338CA] disabled:opacity-50 cursor-pointer whitespace-nowrap shadow-xs"
              >
                {isDissecting ? (
                  <>
                    <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                    <span>AI 拆解中...</span>
                  </>
                ) : (
                  <>
                    <Scissors className="h-3.5 w-3.5" />
                    <span>AI 智能拆解</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2: Clean, Low-Text Dissection Output + 1-Click Encapsulate as Template */}
      <section className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs space-y-4">
        {/* Top Bar: Title + Encapsulate as Template + Apply */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3.5">
          <div className="min-w-0">
            <h2 className="truncate text-sm font-bold text-slate-900">
              {dissectResult.sourceTitle}
            </h2>
            <p className="mt-0.5 text-xs text-indigo-600 font-medium truncate">
              结构公式：{dissectResult.extractedFormula}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleEncapsulateIntoLibrary}
              className="flex items-center gap-1.5 rounded-xl bg-[#4F46E5] px-4 py-2 text-xs font-bold text-white hover:bg-[#4338CA] shadow-xs cursor-pointer whitespace-nowrap"
            >
              <PackagePlus className="h-3.5 w-3.5" />
              <span>✨ 封装成模板（加入爆款库）</span>
            </button>
            <button
              type="button"
              onClick={onApplyDissectedStructureToEditor}
              className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:border-indigo-300 hover:text-indigo-600 cursor-pointer whitespace-nowrap"
            >
              <Film className="h-3.5 w-3.5" />
              <span>载入分镜台</span>
            </button>
          </div>
        </div>

        {/* Concise 3-Pill Suitability Strip (No Long Paragraphs) */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 px-3.5 py-2.5 text-xs">
            <span className="font-bold text-slate-900">🎯 黄金3秒钩子：</span>
            <p className="mt-0.5 text-slate-600 line-clamp-1" title={dissectResult.hookAnalysis}>
              {dissectResult.hookAnalysis}
            </p>
          </div>
          <div className="rounded-xl border border-indigo-100 bg-indigo-50/40 px-3.5 py-2.5 text-xs">
            <span className="font-bold text-indigo-950">🧭 AI 适用方向：</span>
            <p className="mt-0.5 text-slate-700 line-clamp-1" title={detectedMeta.suitableDirection}>
              {detectedMeta.suitableDirection}
            </p>
          </div>
          <div className="rounded-xl border border-indigo-100 bg-indigo-50/40 px-3.5 py-2.5 text-xs">
            <span className="font-bold text-indigo-950">🎥 AI 适用素材：</span>
            <p className="mt-0.5 text-slate-700 line-clamp-1" title={detectedMeta.suitableMaterial}>
              {detectedMeta.suitableMaterial}
            </p>
          </div>
        </div>

        {/* Resizable Dissected Storyboard Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="min-w-[760px] w-full table-fixed border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 bg-[#EEF4FF] font-bold text-slate-700">
                <th
                  style={{ width: dissectColWidths[0] }}
                  className="relative py-2.5 px-3.5 select-none"
                >
                  <span>镜头结构</span>
                  <div
                    onMouseDown={(e) => startResizeDissectCol(0, e)}
                    title="左右拖拽调整列宽"
                    className="absolute top-0 right-0 h-full w-2 cursor-col-resize hover:bg-indigo-400/60"
                  />
                </th>
                <th
                  style={{ width: dissectColWidths[1] }}
                  className="relative py-2.5 px-3.5 border-l border-slate-200/70 select-none"
                >
                  <span>画面拆解 (可拖拽列宽/行高)</span>
                  <div
                    onMouseDown={(e) => startResizeDissectCol(1, e)}
                    title="左右拖拽调整列宽"
                    className="absolute top-0 right-0 h-full w-2 cursor-col-resize hover:bg-indigo-400/60"
                  />
                </th>
                <th
                  style={{ width: dissectColWidths[2] }}
                  className="relative py-2.5 px-3.5 border-l border-slate-200/70 select-none"
                >
                  <span>口播台词</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/80 bg-white">
              {dissectResult.cameraAngles.map((ang, i) => (
                <tr
                  key={i}
                  style={{ height: dissectRowHeights[i] ?? undefined }}
                  className="relative py-3.5 even:bg-slate-50 hover:bg-slate-100/60"
                >
                  <td className="py-3.5 px-3.5 font-semibold text-slate-900 align-top">
                    {ang}
                  </td>
                  <td className="py-3.5 px-3.5 text-slate-600 break-words align-top border-l border-dashed border-slate-200/70">
                    {dissectResult.visualCues[i]}
                  </td>
                  <td className="relative py-3.5 px-3.5 font-medium text-slate-900 break-words align-top border-l border-dashed border-slate-200/70">
                    “{dissectResult.sceneLines[i]}”
                    <div
                      onMouseDown={(e) => startResizeDissectRow(i, e)}
                      title="上下拖拽调整此行高度"
                      className="absolute inset-x-0 bottom-0 h-1.5 cursor-row-resize hover:bg-indigo-400/50"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Compact One-Line Product Adaptation Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 rounded-xl border border-indigo-100 bg-indigo-50/50 p-3">
          <span className="text-xs font-bold text-indigo-950 shrink-0">
            套用此结构生成新脚本：
          </span>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="输入您的商品名称..."
            className="h-9 flex-1 rounded-lg border border-slate-200 bg-white px-3 text-xs text-slate-900 focus:border-indigo-500 focus:outline-none min-w-[160px]"
          />
          <input
            type="text"
            value={sellingPoints}
            onChange={(e) => setSellingPoints(e.target.value)}
            placeholder="输入核心卖点..."
            className="h-9 flex-1 rounded-lg border border-slate-200 bg-white px-3 text-xs text-slate-900 focus:border-indigo-500 focus:outline-none min-w-[160px]"
          />
          <button
            type="button"
            disabled={isGeneratingScript}
            onClick={onGenerateNewScriptFromDissection}
            className="flex h-9 items-center justify-center gap-1.5 rounded-lg bg-slate-900 px-4 text-xs font-bold text-white hover:bg-slate-800 disabled:opacity-50 cursor-pointer shrink-0 whitespace-nowrap"
          >
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span>{isGeneratingScript ? '生成中...' : 'AI 裂变同款新脚本'}</span>
          </button>
        </div>
      </section>
    </div>
  );
};

