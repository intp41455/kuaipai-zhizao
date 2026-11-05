"use client";
import React, { useState } from 'react';
import {
  X,
  Sparkles,
  Zap,
  CheckCircle2,
  TrendingUp,
  Download,
  Copy,
  Film,
  PackagePlus,
  RefreshCw,
  Store,
  Video,
  FileText,
  Clock,
  Layers,
  ArrowRight,
  ShieldCheck,
  Check,
} from 'lucide-react';
import type { StoreMemoryProfile, CuratedTemplate } from '../data/curatedTemplates';
import type { StudioMaterialItem } from './MerchantAndWorkspaceModules';

export interface PipelineShot {
  angle: string;
  visual: string;
  line: string;
  sound: string;
}

export interface PipelineTrack {
  accountName: string;
  title: string;
  theme: string;
  shots: PipelineShot[];
}

export interface PipelineAssetMatch {
  shotIndex: number;
  matchedTitle: string;
  suggestion: string;
  matchScore: number;
}

export interface PipelineTopicPlan {
  title: string;
  action: string;
  materialsNeeded?: string;
  shotGuidance?: string[];
  deliverable: string;
  acceptanceCriteria: string;
}

export interface PipelineTopic {
  topicId: string;
  title: string;
  categoryTag: string;
  heatIndex: string;
  coreHook: string;
  fullExecutionPlan?: Record<string, PipelineTopicPlan>;
  storyboard?: {
    cameraAngles: string[];
    visualCues: string[];
    sceneLines: string[];
  };
}

export interface PipelineResultData {
  status: string;
  dbRecordId?: string;
  dualTrackScripts?: {
    trackA_ip: PipelineTrack;
    trackB_brand: PipelineTrack;
  };
  matchedAssets?: PipelineAssetMatch[];
  recommendedTopicSolutions?: PipelineTopic[];
  exportedEdl?: string;
  exportedFfmpeg?: string;
}

export interface UniversalClonePipelineModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeStore: StoreMemoryProfile;
  personalMaterials?: StudioMaterialItem[];
  onApplyToEditor?: (shots: { angles: string[]; visuals: string[]; lines: string[]; title: string }) => void;
  onEncapsulateAsTemplate?: (tpl: CuratedTemplate) => void;
  onShowNotice?: (type: 'success' | 'error', text: string) => void;
}

export const UniversalClonePipelineModal: React.FC<UniversalClonePipelineModalProps> = ({
  isOpen,
  onClose,
  activeStore,
  personalMaterials = [],
  onApplyToEditor,
  onEncapsulateAsTemplate,
  onShowNotice,
}) => {
  // Preset scenarios
  const presets = [
    {
      id: 'bufei',
      label: '🥩 方案 1:「不肥」酒肉馆 × 吴老二麻辣烫 (餐饮夜市/音乐/免后厨)',
      store: {
        name: '不肥',
        industry: '传统成品烤肉/碗杂面',
        location: '西安·红旗铁路公园文化街区',
        products: '传统成品烤肉（大油边、盘龙五花）、正宗重庆碗杂面、大块牛肉面、胖子馄饨',
        features: [
          '红旗铁路公园文化街区',
          '传统烤肉端上来的都是成品',
          '社区店打造网红店',
          '厨师为重庆人自制地道调料',
          '驻唱给周杰伦写过歌（免费点歌氛围）',
          '晚上客群喝酒精酿，19.9两杯朝日/麒麟鲜啤',
          '免费加一两面',
          '老板甘肃天水老板娘四川',
          '负债老板逆袭翻身人设',
          '后厨严禁拍摄',
        ],
        demands: [
          '获取巨大同城流量，打透音乐烟火氛围',
          '不肥又见面：蓝V+IP号矩阵',
          '不肥酒肉馆：蓝V品宣号',
          '后期商业模型招商加盟',
        ],
        presenters: ['小灰', '赵总'],
        disallowKitchen: true,
      },
      viralUrl:
        '9.99 复制打开抖音，看看【吴老二东北老式麻辣烫官方号的作品】不断更新新品，让老铁们有更好的味觉体验 https://v.douyin.com/goJwdZx7m-I/',
    },
    {
      id: 'shampoo',
      label: '💆 方案 2:「星澜」沙龙 × 日销800单SPA (美妆个护/同城团购)',
      store: {
        name: '星澜洗护沙龙',
        industry: '美妆个护/同城生活',
        location: '杭州·武林商圈旗舰店',
        products: '星澜氨基酸去屑控油洗发水、68元纳米微泡头皮SPA护理团购券',
        features: ['72小时长效蓬松控油', '纳米级微泡头皮深层净澈', '到店体验未用随时退'],
        demands: ['同城团购引流', '带货爆款出单'],
        presenters: ['星澜首席主理人'],
        disallowKitchen: false,
      },
      viralUrl: 'https://v.douyin.com/7391823901/ ¥68头皮去屑SPA日销800单团购视频',
    },
    {
      id: 'coffee',
      label: '☕ 方案 3:「早八」挂耳咖啡 × 沉浸治愈开箱 (轻食饮品/电商挂车)',
      store: {
        name: '早八咖啡研习所',
        industry: '新消费饮品/轻食',
        location: '成都·太古里烘焙工坊',
        products: '阿拉比卡当季鲜萃挂耳咖啡礼盒（¥49买一赠一）',
        features: ['0蔗糖低卡消水肿', '充氮锁香还原现磨油脂', '白噪音慢生活仪式感'],
        demands: ['电商小黄车挂车带货', '小红书高收藏种草'],
        presenters: ['咖啡品鉴师'],
        disallowKitchen: false,
      },
      viralUrl: 'https://xhslink.com/66b1a209/ 便携挂耳咖啡高质感治愈慢开箱笔记',
    },
  ];

  // Pipeline input form state
  const [selectedPresetId, setSelectedPresetId] = useState('bufei');
  const [storeName, setStoreName] = useState(presets[0].store.name);
  const [industry, setIndustry] = useState(presets[0].store.industry);
  const [location, setLocation] = useState(presets[0].store.location);
  const [products, setProducts] = useState(presets[0].store.products);
  const [featuresText, setFeaturesText] = useState(presets[0].store.features.join('，'));
  const [demandsText, setDemandsText] = useState(presets[0].store.demands.join('，'));
  const [presentersText, setPresentersText] = useState(presets[0].store.presenters.join('、'));
  const [disallowKitchen, setDisallowKitchen] = useState(true);
  const [viralUrlInput, setViralUrlInput] = useState(presets[0].viralUrl);
  const [inputBranch, setInputBranch] = useState<'with_link' | 'without_link'>('with_link');
  const [outputMode, setOutputMode] = useState<'dual_track' | 'topic_solutions'>('dual_track');
  const [selectedTopicIdx, setSelectedTopicIdx] = useState<number>(0);

  // Execution & Pipeline output state
  const [isRunning, setIsRunning] = useState(false);
  const [currentStageIndex, setCurrentStageIndex] = useState(-1);
  const [pipelineResult, setPipelineResult] = useState<PipelineResultData | null>(null);
  const [activeTrackTab, setActiveTrackTab] = useState<'trackA_ip' | 'trackB_brand'>('trackA_ip');

  if (!isOpen) return null;

  const handleApplyPreset = (pId: string) => {
    const p = presets.find((x) => x.id === pId) || presets[0];
    setSelectedPresetId(p.id);
    setStoreName(p.store.name);
    setIndustry(p.store.industry);
    setLocation(p.store.location);
    setProducts(p.store.products);
    setFeaturesText(p.store.features.join('，'));
    setDemandsText(p.store.demands.join('，'));
    setPresentersText(p.store.presenters.join('、'));
    setDisallowKitchen(p.store.disallowKitchen);
    setViralUrlInput(p.viralUrl);
  };

  const stagesList = [
    '1. 目标爆款原片穿透与 5 维商业解构',
    '2. 新门店主体档案与免后厨约束注入',
    '3. 爆点拐点时标映射与双轨矩阵脚本生成',
    '4. 个人素材库加权语义匹配',
    '5. 专业剪辑工程 EDL 与 FFmpeg 指令装配',
    '6. 数据库持久化落库与模板库沉淀',
  ];

  const handleExecutePipeline = async () => {
    if (inputBranch === 'with_link' && !viralUrlInput.trim()) {
      onShowNotice?.('error', '请输入对标爆款视频链接或分享口令！');
      return;
    }

    setIsRunning(true);
    setCurrentStageIndex(0);
    setPipelineResult(null);

    // Simulate progressive stage visual indicators
    const stageTimer = setInterval(() => {
      setCurrentStageIndex((prev) => (prev < 4 ? prev + 1 : prev));
    }, 600);

    try {
      const payloadUrl = inputBranch === 'with_link' ? viralUrlInput.trim() : '';
      const resp = await fetch('/api/v1/ai/pipeline/clone-and-produce', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          store_info: {
            name: storeName,
            industry,
            location,
            signature_products: products,
            key_features: featuresText.split(/[,，\n]/).map((s) => s.trim()).filter(Boolean),
            core_demands: demandsText.split(/[,，\n]/).map((s) => s.trim()).filter(Boolean),
            presenters: presentersText.split(/[,，、\n]/).map((s) => s.trim()).filter(Boolean),
            disallow_kitchen: disallowKitchen,
          },
          viral_target_input: payloadUrl,
          dual_track: true,
          personal_materials: personalMaterials,
        }),
      });

      if (resp.ok) {
        const data = await resp.json();
        clearInterval(stageTimer);
        setCurrentStageIndex(5);
        setPipelineResult(data);
        if (inputBranch === 'without_link') {
          setOutputMode('topic_solutions');
        } else {
          setOutputMode('dual_track');
        }
        onShowNotice?.('success', `全链路一键产出成功！已生成「${storeName}」方案并落库！`);
        return;
      }
    } catch {
      // Fallback
    } finally {
      clearInterval(stageTimer);
      setIsRunning(false);
    }
  };

  const activeTrack = pipelineResult?.dualTrackScripts?.[activeTrackTab];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/65 p-3 sm:p-5 animate-in fade-in duration-150">
      <div className="flex h-full max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-2xl">
        {/* Modal Header (Pastel Tint Indigo Header) */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-indigo-100/70 tint-gradient-indigo px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-xs">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <span>通用一键爆款迁移与仿刻自动化管线</span>
                <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-[10px] font-semibold text-indigo-700">
                  Universal Clone Pipeline v2.0
                </span>
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                支持任意门店主体、业务特征与爆款视频自由组合，一键穿透解析、拐点对齐、双轨脚本生成、素材库匹配与落库。
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body: Left Inputs / Right Results */}
        <div className="grid flex-1 grid-cols-1 overflow-y-auto lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          {/* Left Column: Parameterized Input Configuration */}
          <div className="p-5 lg:col-span-5 space-y-4">
            {/* Quick Preset Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-800 block">
                ⚡ 一键载入典型业务场景预设：
              </label>
              <div className="space-y-1.5">
                {presets.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => handleApplyPreset(p.id)}
                    className={`w-full rounded-xl p-2 text-left text-xs transition-all cursor-pointer border ${
                      selectedPresetId === p.id
                        ? 'border-indigo-300 bg-indigo-50/70 font-semibold text-indigo-900'
                        : 'border-slate-100 bg-[#fafbfe] text-slate-600 hover:border-slate-200 hover:bg-white'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Store Profile Fields */}
            <div className="rounded-2xl border border-slate-100 bg-[#fafbfe] p-4 space-y-3 text-xs">
              <span className="font-bold text-slate-900 flex items-center gap-1.5">
                <Store className="h-3.5 w-3.5 text-indigo-600" />
                <span>新门店主体与业务档案</span>
              </span>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className="text-[11px] text-slate-500 block mb-0.5">门店名称 *</span>
                  <input
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 focus:border-indigo-400 focus:outline-none"
                  />
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block mb-0.5">品类定位</span>
                  <input
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 focus:border-indigo-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <span className="text-[11px] text-slate-500 block mb-0.5">地理坐标 / 商圈街区</span>
                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 focus:border-indigo-400 focus:outline-none"
                />
              </div>

              <div>
                <span className="text-[11px] text-slate-500 block mb-0.5">招牌爆品 / 核心菜单</span>
                <input
                  value={products}
                  onChange={(e) => setProducts(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 focus:border-indigo-400 focus:outline-none"
                />
              </div>

              <div>
                <span className="text-[11px] text-slate-500 block mb-0.5">出镜人 / 主理人 IP</span>
                <input
                  value={presentersText}
                  onChange={(e) => setPresentersText(e.target.value)}
                  placeholder="如：小灰、赵总"
                  className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 focus:border-indigo-400 focus:outline-none"
                />
              </div>

              <div>
                <span className="text-[11px] text-slate-500 block mb-0.5">业务特色细节（自制调料、周杰伦驻唱、19.9鲜啤等）</span>
                <textarea
                  rows={2}
                  value={featuresText}
                  onChange={(e) => setFeaturesText(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-white p-2 focus:border-indigo-400 focus:outline-none leading-relaxed"
                />
              </div>

              <div>
                <span className="text-[11px] text-slate-500 block mb-0.5">核心战略诉求（流量/加盟/品宣/负债逆袭）</span>
                <input
                  value={demandsText}
                  onChange={(e) => setDemandsText(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 focus:border-indigo-400 focus:outline-none"
                />
              </div>

              <label className="flex items-center gap-2 cursor-pointer pt-1">
                <input
                  type="checkbox"
                  checked={disallowKitchen}
                  onChange={(e) => setDisallowKitchen(e.target.checked)}
                  className="h-3.5 w-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                />
                <span className="text-[11px] font-medium text-slate-700 flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                  <span>红线约束：严格免后厨拍摄（镜头全部锁定前厅成品与氛围）</span>
                </span>
              </label>
            </div>

            {/* Input Branch Switcher: With Link vs Without Link */}
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                <span className="font-bold text-slate-800">创作输入分支选择：</span>
                <div className="capsule-track">
                  <button
                    type="button"
                    onClick={() => setInputBranch('with_link')}
                    className={`px-3 py-1 text-xs font-semibold cursor-pointer transition-all ${
                      inputBranch === 'with_link'
                        ? 'capsule-pill-active text-indigo-700 font-bold'
                        : 'capsule-pill-inactive'
                    }`}
                  >
                    🔗 分支 A：有爆款链接
                  </button>
                  <button
                    type="button"
                    onClick={() => setInputBranch('without_link')}
                    className={`px-3 py-1 text-xs font-semibold cursor-pointer transition-all ${
                      inputBranch === 'without_link'
                        ? 'capsule-pill-active text-indigo-700 font-bold'
                        : 'capsule-pill-inactive'
                    }`}
                  >
                    💡 分支 B：无链接AI深度推荐
                  </button>
                </div>
              </div>

              {inputBranch === 'with_link' ? (
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-800 flex items-center gap-1.5">
                    <Video className="h-3.5 w-3.5 text-rose-500" />
                    <span>想要套用的对标爆款视频链接 / 口令</span>
                  </label>
                  <textarea
                    rows={3}
                    value={viralUrlInput}
                    onChange={(e) => setViralUrlInput(e.target.value)}
                    placeholder="粘贴对标爆款短视频链接或分享口令..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-[#fafbfe] p-3 text-xs leading-relaxed focus:border-indigo-400 focus:bg-white focus:outline-none"
                  />
                </div>
              ) : (
                <div className="rounded-xl tint-gradient-amber p-3.5 space-y-2 border border-amber-200/60">
                  <div className="flex items-center gap-1.5 font-bold text-amber-900">
                    <Sparkles className="h-4 w-4 text-amber-600" />
                    <span>无参考链接模式已激活</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-slate-600">
                    无需任何外部视频，AI Agent 将直接结合【{storeName}】的知识库档案、地理坐标与招牌品，联网深度检索并自动输出 <strong>3-4 个高潜力精选题</strong>，且<strong>每个选题均配备从头到尾完整的保姆级落地执行方案</strong>！
                  </p>
                </div>
              )}
            </div>

            {/* Execute Button */}
            <button
              type="button"
              disabled={isRunning || (inputBranch === 'with_link' && !viralUrlInput.trim())}
              onClick={handleExecutePipeline}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 text-xs font-bold text-white hover:bg-indigo-700 disabled:opacity-50 transition-all cursor-pointer shadow-xs"
            >
              <Zap className={`h-4 w-4 ${isRunning ? 'animate-spin' : ''}`} />
              <span>{isRunning ? '全链路自动化管线正在执行...' : '⚡ 一键全链路迁移仿刻与成品交付'}</span>
            </button>
          </div>

          {/* Right Column: Execution Progress & Dual-Track Output Deliverable */}
          <div className="p-5 lg:col-span-7 flex flex-col justify-between space-y-4">
            {/* 6-Stage Pipeline Live Indicator */}
            {isRunning && (
              <div className="rounded-2xl tint-gradient-sky p-4 space-y-2.5 animate-in fade-in duration-200">
                <span className="text-xs font-bold text-sky-950 flex items-center gap-1.5">
                  <RefreshCw className="h-3.5 w-3.5 text-sky-600 animate-spin" />
                  <span>管线自动执行流水线状态 (Stage {currentStageIndex + 1}/6)：</span>
                </span>
                <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                  {stagesList.map((stage, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 ${
                        idx <= currentStageIndex
                          ? 'bg-white/90 text-sky-900 font-semibold shadow-2xs'
                          : 'text-slate-400 opacity-60'
                      }`}
                    >
                      {idx <= currentStageIndex ? (
                        <CheckCircle2 className="h-3 w-3 text-emerald-600 shrink-0" />
                      ) : (
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-300 ml-1 mr-0.5" />
                      )}
                      <span className="truncate">{stage}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Output Deliverable */}
            {pipelineResult ? (
              <div className="space-y-4 animate-in fade-in duration-200">
                {/* Master Output Mode Switcher: Dual Track vs Actionable Topic Solutions */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div className="capsule-track">
                    <button
                      type="button"
                      onClick={() => setOutputMode('dual_track')}
                      className={`px-3.5 py-1 text-xs font-semibold cursor-pointer transition-all ${
                        outputMode === 'dual_track'
                          ? 'capsule-pill-active text-indigo-700 font-bold'
                          : 'capsule-pill-inactive'
                      }`}
                    >
                      📱 双轨落地脚本大盘
                    </button>
                    {pipelineResult.recommendedTopicSolutions && (
                      <button
                        type="button"
                        onClick={() => setOutputMode('topic_solutions')}
                        className={`px-3.5 py-1 text-xs font-semibold cursor-pointer transition-all ${
                          outputMode === 'topic_solutions'
                            ? 'capsule-pill-active text-indigo-700 font-bold'
                            : 'capsule-pill-inactive'
                        }`}
                      >
                        💡 全流程落地选题库 ({pipelineResult.recommendedTopicSolutions.length} 个方案)
                      </button>
                    )}
                  </div>

                  <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>已持久化入库 (#{pipelineResult.dbRecordId || '101'})</span>
                  </span>
                </div>

                {/* Sub-mode 1: Dual Track Output */}
                {outputMode === 'dual_track' && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setActiveTrackTab('trackA_ip')}
                        className={`px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-all border ${
                          activeTrackTab === 'trackA_ip'
                            ? 'bg-indigo-50 border-indigo-200 text-indigo-700'
                            : 'bg-white border-slate-200 text-slate-600'
                        }`}
                      >
                        方案 A：IP 引流号 (主理人逆袭/烟火气)
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveTrackTab('trackB_brand')}
                        className={`px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-all border ${
                          activeTrackTab === 'trackB_brand'
                            ? 'bg-indigo-50 border-indigo-200 text-indigo-700'
                            : 'bg-white border-slate-200 text-slate-600'
                        }`}
                      >
                        方案 B：品牌招商蓝V (标准化/加盟模型)
                      </button>
                    </div>

                    {activeTrack && (
                      <div className="space-y-3">
                        <div className="rounded-2xl tint-gradient-indigo p-4 space-y-1.5 shadow-2xs">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-indigo-950">
                              {activeTrack.accountName}
                            </span>
                            <span className="text-[10px] text-indigo-600 bg-white/80 px-2 py-0.5 rounded-full">
                              {activeTrack.theme}
                            </span>
                          </div>
                          <h3 className="text-sm font-black text-slate-900 leading-snug">
                            {activeTrack.title}
                          </h3>
                        </div>

                        {/* 4 Shots Storyboard Table */}
                        <div className="overflow-x-auto rounded-xl border border-slate-100 bg-white shadow-2xs">
                          <table className="w-full text-left text-xs border-collapse">
                            <thead className="bg-[#f8faff] text-[11px] font-semibold text-slate-500 border-b border-slate-100">
                              <tr>
                                <th className="px-3 py-2 w-28">镜头景别</th>
                                <th className="px-3 py-2">视觉描述 (免后厨)</th>
                                <th className="px-3 py-2">台词口播脚本</th>
                                <th className="px-3 py-2 w-28">声音设计</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 text-slate-700">
                              {activeTrack.shots.map((sh: PipelineShot, i: number) => (
                                <tr key={i} className="hover:bg-slate-50/60">
                                  <td className="px-3 py-2 font-bold text-indigo-700 align-top">
                                    {sh.angle}
                                  </td>
                                  <td className="px-3 py-2 text-slate-600 align-top">
                                    {sh.visual}
                                  </td>
                                  <td className="px-3 py-2 font-medium text-slate-900 align-top">
                                    “{sh.line}”
                                  </td>
                                  <td className="px-3 py-2 text-[11px] text-slate-400 align-top">
                                    {sh.sound}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        {/* Personal Asset Matches */}
                        {pipelineResult.matchedAssets && (
                          <div className="rounded-xl tint-gradient-emerald p-3 space-y-1.5">
                            <span className="text-xs font-bold text-emerald-950 flex items-center gap-1">
                              <Check className="h-3.5 w-3.5 text-emerald-600" />
                              <span>个人素材库自动加权匹配情况：</span>
                            </span>
                            <div className="grid grid-cols-2 gap-2 text-[11px]">
                              {pipelineResult.matchedAssets.map((ma: PipelineAssetMatch, mi: number) => (
                                <div key={mi} className="rounded-lg bg-white/90 p-2 border border-emerald-100">
                                  <span className="font-semibold text-slate-800">镜 0{ma.shotIndex + 1}：</span>
                                  <span className="text-emerald-700">{ma.matchedTitle}</span>
                                  <p className="text-[10px] text-slate-400 mt-0.5">{ma.suggestion}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* Sub-mode 2: Complete Actionable Step-by-Step Implementation Guide for Topics */}
                {outputMode === 'topic_solutions' && pipelineResult.recommendedTopicSolutions && (
                  <div className="space-y-3.5">
                    {/* Topic Switcher Pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {pipelineResult.recommendedTopicSolutions.map((top: PipelineTopic, ti: number) => (
                        <button
                          key={top.topicId || ti}
                          type="button"
                          onClick={() => setSelectedTopicIdx(ti)}
                          className={`rounded-xl px-3 py-1.5 text-xs font-semibold cursor-pointer transition-all border ${
                            selectedTopicIdx === ti
                              ? 'border-indigo-300 bg-indigo-50/80 text-indigo-900 shadow-2xs'
                              : 'border-slate-100 bg-[#fafbfe] text-slate-600 hover:bg-white'
                          }`}
                        >
                          {top.categoryTag}
                        </button>
                      ))}
                    </div>

                    {/* Active Topic Card */}
                    {(() => {
                      const curTop = pipelineResult.recommendedTopicSolutions[selectedTopicIdx] || pipelineResult.recommendedTopicSolutions[0];
                      const plan = curTop?.fullExecutionPlan;
                      return (
                        <div className="space-y-3">
                          <div className="rounded-2xl tint-gradient-amber p-4 space-y-2 border border-amber-200/60 shadow-2xs">
                            <div className="flex items-center justify-between">
                              <span className="rounded-md bg-amber-100/90 text-amber-900 px-2 py-0.5 text-[11px] font-bold">
                                {curTop.categoryTag}
                              </span>
                              <span className="text-[11px] font-medium text-amber-800">
                                {curTop.heatIndex}
                              </span>
                            </div>
                            <h3 className="text-sm font-black text-slate-900">
                              {curTop.title}
                            </h3>
                            <div className="text-xs text-slate-700 bg-white/80 p-2.5 rounded-xl border border-amber-100">
                              <span className="font-bold text-amber-900 block mb-0.5">⚡ 前3秒必杀开场Hook：</span>
                              {curTop.coreHook}
                            </div>
                          </div>

                          {/* 5-Stage Step-by-step Actionable Roadmap */}
                          {plan && (
                            <div className="space-y-2 text-xs">
                              <span className="font-bold text-slate-900 block">
                                📋 从头到尾保姆级落地实施步骤（照着即可逐条做）：
                              </span>

                              {[
                                { key: 'step1_preparation', stepNum: '1', color: 'tint-gradient-sky' },
                                { key: 'step2_shooting', stepNum: '2', color: 'tint-gradient-indigo' },
                                { key: 'step3_editing', stepNum: '3', color: 'tint-gradient-purple' },
                                { key: 'step4_publishing', stepNum: '4', color: 'tint-gradient-amber' },
                                { key: 'step5_operation', stepNum: '5', color: 'tint-gradient-emerald' },
                              ].map(({ key, stepNum, color }) => {
                                const st = plan[key];
                                if (!st) return null;
                                return (
                                  <div key={key} className={`rounded-xl p-3 space-y-1.5 ${color}`}>
                                    <div className="flex items-center justify-between">
                                      <span className="font-bold text-slate-900">
                                        {st.title}
                                      </span>
                                      <span className="rounded-full bg-white/80 px-2 py-0.5 text-[10px] font-semibold text-slate-700 border border-slate-200/60">
                                        步骤 {stepNum}
                                      </span>
                                    </div>
                                    <p className="text-[11px] leading-relaxed text-slate-700">
                                      <strong>要做什么：</strong>{st.action}
                                    </p>
                                    {st.materialsNeeded && (
                                      <p className="text-[11px] text-slate-600">
                                        <strong>需准备：</strong>{st.materialsNeeded}
                                      </p>
                                    )}
                                    {st.shotGuidance && (
                                      <div className="text-[11px] text-slate-600 space-y-0.5">
                                        <strong>机位执行：</strong>
                                        {st.shotGuidance.map((sg: string, sgi: number) => (
                                          <div key={sgi} className="ml-2 font-mono text-[10px]">· {sg}</div>
                                        ))}
                                      </div>
                                    )}
                                    <div className="flex flex-wrap items-center justify-between gap-1 pt-1 border-t border-white/60 text-[10px]">
                                      <span className="text-slate-500"><strong>产出物：</strong>{st.deliverable}</span>
                                      <span className="text-emerald-700 font-medium"><strong>验收标准：</strong>{st.acceptanceCriteria}</span>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          )}

                          {/* Quick load button for this topic */}
                          {curTop.storyboard && (
                            <button
                              type="button"
                              onClick={() => {
                                if (onApplyToEditor && curTop.storyboard) {
                                  onApplyToEditor({
                                    title: curTop.title,
                                    angles: curTop.storyboard.cameraAngles,
                                    visuals: curTop.storyboard.visualCues,
                                    lines: curTop.storyboard.sceneLines,
                                  });
                                  onShowNotice?.('success', `已选用「${curTop.title}」并载入分镜台开拍！`);
                                  onClose();
                                }
                              }}
                              className="w-full flex items-center justify-center gap-1.5 rounded-xl bg-indigo-600 py-2.5 text-xs font-bold text-white hover:bg-indigo-700 shadow-xs cursor-pointer"
                            >
                              <Film className="h-3.5 w-3.5" />
                              <span>🎬 一键套用此选题并载入分镜精修台开拍</span>
                            </button>
                          )}
                        </div>
                      );
                    })()}
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center flex-1 text-center py-20 text-slate-400">
                <div className="h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-3 text-slate-300">
                  <Sparkles className="h-7 w-7" />
                </div>
                <h3 className="text-xs font-semibold text-slate-700">等待触发通用一键管线</h3>
                <p className="text-[11px] text-slate-400 mt-1 max-w-sm">
                  在左侧选择场景或自由输入任意店铺与爆款短视频，管线将自动完成 6 大阶段端到端处理并在此呈现成品方案。
                </p>
              </div>
            )}

            {/* Bottom Actions Bar */}
            {pipelineResult && (
              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (onApplyToEditor && activeTrack) {
                        onApplyToEditor({
                          title: activeTrack.title,
                          angles: activeTrack.shots.map((s: PipelineShot) => s.angle),
                          visuals: activeTrack.shots.map((s: PipelineShot) => s.visual),
                          lines: activeTrack.shots.map((s: PipelineShot) => s.line),
                        });
                        onShowNotice?.('success', '已将方案载入分镜精修台开拍！');
                        onClose();
                      }
                    }}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-700 shadow-xs cursor-pointer"
                  >
                    <Film className="h-3.5 w-3.5" />
                    <span>载入分镜精修台开拍</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText(pipelineResult.exportedFfmpeg || '');
                      onShowNotice?.('success', '已复制 FFmpeg 无损剪辑命令行！');
                    }}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-indigo-200 bg-indigo-50/70 px-3.5 py-2 text-xs font-semibold text-indigo-700 hover:bg-indigo-100 cursor-pointer shadow-2xs"
                  >
                    <Copy className="h-3.5 w-3.5" />
                    <span>复制 FFmpeg 命令</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const blob = new Blob([pipelineResult.exportedEdl || ''], { type: 'text/plain;charset=utf-8' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `${storeName}_一键仿刻工程.edl`;
                    a.click();
                    onShowNotice?.('success', '已导出 EDL 剪辑工程文件！');
                  }}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-indigo-600 cursor-pointer"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>导出 EDL 工程</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
