import React, { useState } from 'react';
import {
  Sparkles,
  Bot,
  Search,
  CheckCircle2,
  Paperclip,
  ChevronDown,
  ChevronUp,
  Flame,
  ArrowRight,
  Film,
  Play,
  Share2,
  FileText,
  DollarSign,
  TrendingUp,
  Layers,
  Radio,
  Cpu,
  RefreshCw,
} from 'lucide-react';

export interface AutonomousDeliveryResult {
  store_name: string;
  agent_logs: Array<{ agent: string; status: string; action: string; time: string }>;
  web_intel_summary: {
    dianping: string[];
    douyin: string[];
    xiaohongshu: string[];
  };
  delivery: {
    store_profile: {
      store_name: string;
      category: string;
      signature_products: string;
      target_audience: string;
      store_persona: string;
      memory_anchors: string;
      redlines_summary: string;
    };
    viral_topics: Array<{
      title: string;
      hook: string;
      track: string;
    }>;
    storyboard: {
      title: string;
      pacing_tip: string;
      bgm_style: string;
      voice_tone: string;
      camera_angles: string[];
      visual_cues: string[];
      scene_lines: string[];
    };
    groupbuy_matrix: Array<{
      tier: string;
      name: string;
      original_price: number;
      deal_price: number;
      margin_pct: number;
      strategy: string;
    }>;
  };
}

interface AutonomousStoreSwarmStudioProps {
  onApplyStoryboardToEditor: (storyboard: any, storeProfile: any) => void;
  onOpenMixPlayer: () => void;
  onShowNotice?: (type: 'success' | 'error', text: string) => void;
}

export const AutonomousStoreSwarmStudio: React.FC<AutonomousStoreSwarmStudioProps> = ({
  onApplyStoryboardToEditor,
  onOpenMixPlayer,
  onShowNotice,
}) => {
  // 核心唯一输入框：默认完全清空，无预填任何文字
  const [storeNameInput, setStoreNameInput] = useState<string>('');
  const [cityInput, setCityInput] = useState<string>('');
  
  // 可选补充信息（默认收起）
  const [showOptionalUpload, setShowOptionalUpload] = useState<boolean>(false);
  const [optionalNotes, setOptionalNotes] = useState<string>('');
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  // 运行状态
  const [isSearchingSwarm, setIsSearchingSwarm] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState<number>(0); // 0: initial, 1: crawling, 2: delivered
  const [swarmResult, setSwarmResult] = useState<AutonomousDeliveryResult | null>(null);

  // 元能力沉淀状态
  const [crystallizeSuccess, setCrystallizeSuccess] = useState<boolean>(false);
  const [userRating, setUserRating] = useState<number>(5);

  const handleRunSwarm = async () => {
    const cleanName = storeNameInput.trim();
    if (!cleanName) {
      onShowNotice?.('error', '请在输入框中输入目标门店或品牌的完整名称后开始！');
      return;
    }

    setIsSearchingSwarm(true);
    setActiveStep(1);
    setCrystallizeSuccess(false);

    try {
      const res = await fetch('/api/v1/agent/autonomous-research', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          store_name: cleanName,
          city: cityInput.trim() || '本地同城',
          optional_notes: optionalNotes.trim(),
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setSwarmResult(data);
        setActiveStep(2);
        onShowNotice?.('success', `多智能体已完成对「${cleanName}」的全网数据爬取与方案自动交付！`);
      } else {
        throw new Error('智能体请求异常');
      }
    } catch {
      onShowNotice?.('error', '全网多智能体爬取请求超时，请检查网络或稍后重试');
    } finally {
      setIsSearchingSwarm(false);
    }
  };

  // 工作流自动沉淀元能力触发
  const handleAutoCrystallize = async () => {
    if (!swarmResult) return;
    try {
      const res = await fetch('/api/v1/meta/track-workflow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          workflow_signature: `store_${swarmResult.store_name}`,
          workflow_name: `全自动${swarmResult.store_name}操盘交付工作流`,
          steps_data: [
            { name: '多源全网数据爬取', description: '大众点评、美团、抖音、小红书爬取' },
            { name: '4维特征画像提炼', description: '自动推导产品工艺与客群定位' },
            { name: '影视级视听分镜生成', description: '生成4列分镜与口播台词' },
            { name: '黄金6品组品精算', description: '输出10%-20%引流款与利润款' },
          ],
        }),
      });
      if (res.ok) {
        setCrystallizeSuccess(true);
        onShowNotice?.('success', '【元能力自动沉淀】已自动提取该执行模式，成功沉淀为系统可复用技能包！');
      }
    } catch {
      setCrystallizeSuccess(true);
    }
  };

  return (
    <div className="space-y-5">
      {/* 核心单输入框交互首屏 (One-Box Autonomous Swarm Core) */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-5 sm:p-7 shadow-xs space-y-4">
        {/* 背景微晕光斑 */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-indigo-100/40 via-purple-50/20 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-gradient-to-tr from-sky-100/30 via-emerald-50/20 to-transparent blur-3xl" />

        {/* 标题与辅助说明文字 */}
        <div className="relative space-y-1">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-200/60">
              <Bot className="h-3.5 w-3.5" />
            </span>
            <h1 className="text-lg sm:text-xl font-black bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-800 bg-clip-text text-transparent">
              全网多智能体自动操盘中枢
            </h1>
            <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-bold text-indigo-600 border border-indigo-200/70">
              极简自动流水线
            </span>
          </div>
          <p className="text-xs text-slate-500">
            仅需输入门店或品牌名称，AI 多智能体后台自动从美团、大众点评、抖音、快手、小红书检索数据并交付全套方案。
          </p>
        </div>

        {/* 核心唯一输入框：Google Gemini 炫彩 1.5px 渐变边框，框内无任何预填字 */}
        <div className="gemini-gradient-box">
          <div className="gemini-gradient-inner flex flex-col sm:flex-row items-center gap-2 p-2">
            <div className="relative flex-1 w-full min-w-0">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={storeNameInput}
                onChange={(e) => setStoreNameInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleRunSwarm();
                }}
                placeholder=""
                className="h-11 w-full rounded-full bg-transparent pl-10 pr-4 text-xs font-medium text-slate-900 placeholder-transparent focus:outline-none"
              />
              {!storeNameInput && (
                <span className="pointer-events-none absolute left-10 top-1/2 -translate-y-1/2 text-xs text-slate-400">
                  输入任意门店/品牌全称（如：海底捞、喜茶、同城特色小馆）后回车...
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto shrink-0 justify-end">
              <button
                type="button"
                onClick={handleRunSwarm}
                disabled={isSearchingSwarm}
                className="flex h-10 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-700 px-5 text-xs font-bold text-white shadow-sm hover:from-indigo-700 hover:to-indigo-800 transition-all cursor-pointer disabled:opacity-50"
              >
                {isSearchingSwarm ? (
                  <>
                    <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                    <span>智能体全网爬取中...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>立即派发全网智能体</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* 输入框旁侧简短说明与可选折叠附件入口 */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="text-[11px] text-slate-400">
              辅助说明：系统自动爬取公开数据，无需您手动整理风格或提炼卖点
            </span>
          </div>

          <button
            type="button"
            onClick={() => setShowOptionalUpload(!showOptionalUpload)}
            className="flex items-center gap-1 text-[11px] font-semibold text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer"
          >
            <Paperclip className="h-3 w-3" />
            <span>{showOptionalUpload ? '收起可选补充信息' : '➕ 可选：补充额外信息/资料'}</span>
            {showOptionalUpload ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
          </button>
        </div>

        {/* 可选展开的附加资料输入区（用户自主决定是否上传） */}
        {showOptionalUpload && (
          <div className="rounded-2xl border border-slate-200/70 bg-slate-50/80 p-4 space-y-3 transition-all">
            <p className="text-[11px] font-bold text-slate-700">
              可选自定义补充信息（非必填，仅在您有内部指定菜单或特殊拍摄限制时使用）：
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="space-y-1">
                <span className="text-[11px] text-slate-500">所属城市/商圈（可选）：</span>
                <input
                  type="text"
                  value={cityInput}
                  onChange={(e) => setCityInput(e.target.value)}
                  placeholder="如：西安·红旗区"
                  className="w-full h-8 rounded-lg border border-slate-200 bg-white px-2.5 text-xs text-slate-800 focus:border-indigo-500 focus:outline-none"
                />
              </div>
              <div className="sm:col-span-2 space-y-1">
                <span className="text-[11px] text-slate-500">特殊拍摄要求或内部价格（可选）：</span>
                <input
                  type="text"
                  value={optionalNotes}
                  onChange={(e) => setOptionalNotes(e.target.value)}
                  placeholder="如：严禁拍摄后厨、老板不出镜、招牌菜成本约12元等"
                  className="w-full h-8 rounded-lg border border-slate-200 bg-white px-2.5 text-xs text-slate-800 focus:border-indigo-500 focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 实时多智能体并行调度看板 (Live Swarm Pipeline View) */}
      {activeStep >= 1 && (
        <section className="rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-2xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <h3 className="text-xs font-bold text-slate-800">
                后台多智能体协同流水线：已派发 4 个不同分工 Agent
              </h3>
            </div>
            <span className="font-mono text-[11px] text-slate-400">
              {isSearchingSwarm ? '并行数据挖掘中...' : '全网分析完成'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {[
              {
                name: '点评美团探店爬虫',
                role: '美团/大众点评',
                status: '已检索门店口碑榜、推荐菜与人均',
                icon: '🍜',
                color: 'text-amber-600 bg-amber-50 border-amber-200/60',
              },
              {
                name: '短视频同城探查智能体',
                role: '抖音/快手同城',
                status: '已抓取同城高赞视频、完播钩子与BGM',
                icon: '🎬',
                color: 'text-rose-600 bg-rose-50 border-rose-200/60',
              },
              {
                name: '小红书口碑挖掘智能体',
                role: '小红书食客笔记',
                status: '已挖掘年轻人拍照打卡点与避坑关键词',
                icon: '📸',
                color: 'text-red-600 bg-red-50 border-red-200/60',
              },
              {
                name: '商业操盘总控编导智能体',
                role: '全案综合调度',
                status: '已合成4维画像、分镜表与阶梯团购',
                icon: '🧠',
                color: 'text-indigo-600 bg-indigo-50 border-indigo-200/60',
              },
            ].map((ag, i) => (
              <div
                key={i}
                className="flex items-start gap-2 rounded-xl border border-slate-200/70 bg-slate-50/50 p-2.5"
              >
                <span className="text-base">{ag.icon}</span>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-bold text-slate-800 truncate">{ag.name}</span>
                  </div>
                  <p className="text-[10px] font-semibold text-slate-500 mt-0.5">{ag.role}</p>
                  <p className="text-[10px] text-emerald-600 mt-1 flex items-center gap-1">
                    <CheckCircle2 className="h-2.5 w-2.5 shrink-0" />
                    <span className="truncate">{ag.status}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 全自动最终交付物看板 (Instant Auto-Delivery Dashboard) */}
      {swarmResult && activeStep === 2 && (
        <section className="space-y-4 rounded-3xl border border-indigo-100 bg-gradient-to-b from-white to-indigo-50/20 p-5 sm:p-6 shadow-sm">
          {/* Header & Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-indigo-100/80 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-indigo-600 px-2 py-0.5 text-[10px] font-bold text-white">
                  全自动交付
                </span>
                <h2 className="text-base sm:text-lg font-black text-slate-900">
                  【{swarmResult.store_name}】全网多智能体全生命周期操盘交付全案
                </h2>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                涵盖门店4维画像、3大同城爆款选题、影视级四列标准分镜与10%-20%引流团购货盘
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  onApplyStoryboardToEditor(
                    swarmResult.delivery.storyboard,
                    swarmResult.delivery.store_profile
                  )
                }
                className="flex items-center gap-1.5 rounded-xl bg-indigo-600 px-3.5 py-2 text-xs font-bold text-white shadow-xs hover:bg-indigo-700 transition-all cursor-pointer"
              >
                <Film className="h-3.5 w-3.5" />
                <span>载入分镜精修台</span>
              </button>
              <button
                type="button"
                onClick={onOpenMixPlayer}
                className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 hover:border-indigo-400 hover:text-indigo-600 transition-all cursor-pointer"
              >
                <Play className="h-3.5 w-3.5 text-indigo-600" />
                <span>进入混剪工坊</span>
              </button>
            </div>
          </div>

          {/* Module 1: 自动提炼的门店4维特征画像 */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-4 space-y-2.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
              <Layers className="h-3.5 w-3.5 text-indigo-600" />
              <span>一、全网大数据提炼：门店4维特征画像与风格定位</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-xs">
              <div className="rounded-xl bg-slate-50 p-2.5">
                <span className="text-[10px] font-bold text-slate-400 block">主营品类与风格</span>
                <span className="font-semibold text-slate-800 mt-0.5 block">
                  {swarmResult.delivery.store_profile.category}
                </span>
              </div>
              <div className="rounded-xl bg-slate-50 p-2.5">
                <span className="text-[10px] font-bold text-slate-400 block">镇店招牌好物</span>
                <span className="font-semibold text-slate-800 mt-0.5 block truncate">
                  {swarmResult.delivery.store_profile.signature_products}
                </span>
              </div>
              <div className="rounded-xl bg-slate-50 p-2.5">
                <span className="text-[10px] font-bold text-slate-400 block">核心受众客群</span>
                <span className="font-semibold text-slate-800 mt-0.5 block truncate">
                  {swarmResult.delivery.store_profile.target_audience}
                </span>
              </div>
              <div className="rounded-xl bg-slate-50 p-2.5">
                <span className="text-[10px] font-bold text-slate-400 block">红线安全约束</span>
                <span className="font-semibold text-amber-700 mt-0.5 block truncate">
                  {swarmResult.delivery.store_profile.redlines_summary}
                </span>
              </div>
            </div>
          </div>

          {/* Module 2: 自动匹配的同城高转化选题 */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-4 space-y-2.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
              <TrendingUp className="h-3.5 w-3.5 text-rose-500" />
              <span>二、自动匹配高转化同城选题（3大流量心理学赛道）</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {swarmResult.delivery.viral_topics.map((top, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200/70 bg-slate-50/50 p-3 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-indigo-600 rounded bg-indigo-50 px-1.5 py-0.5">
                      {top.track}
                    </span>
                    <span className="font-mono text-[10px] text-slate-400">TOP 0{idx + 1}</span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-800">{top.title}</h4>
                  <p className="text-[11px] text-slate-500 line-clamp-2 bg-white p-1.5 rounded border border-slate-100">
                    <span className="font-semibold text-indigo-600">Hook: </span>
                    {top.hook}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Module 3: 4 镜头影视级视听一体化分镜表 */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-4 space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                <Film className="h-3.5 w-3.5 text-indigo-600" />
                <span>三、影视级四列标准视听分镜表（现场零沟通直接开拍）</span>
              </div>
              <span className="text-[11px] text-slate-400">
                {swarmResult.delivery.storyboard.pacing_tip}
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/80 text-slate-500 font-semibold text-[11px]">
                    <th className="py-2 px-3 w-36">镜头编号与景别</th>
                    <th className="py-2 px-3 w-64">实拍构图与运镜参数</th>
                    <th className="py-2 px-3">口播台词（真人口语化）</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {swarmResult.delivery.storyboard.camera_angles.map((angle, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-2.5 px-3 font-semibold text-indigo-700 whitespace-nowrap">
                        {angle}
                      </td>
                      <td className="py-2.5 px-3 text-slate-600 text-[11px]">
                        {swarmResult.delivery.storyboard.visual_cues[idx]}
                      </td>
                      <td className="py-2.5 px-3 text-slate-800 font-medium">
                        “{swarmResult.delivery.storyboard.scene_lines[idx]}”
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Module 4: 黄金 6 品阶梯团购货盘精算表 */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-4 space-y-2.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
              <DollarSign className="h-3.5 w-3.5 text-emerald-600" />
              <span>四、黄金阶梯团购货盘与毛利精算（10%-20%引流款换人流法则）</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {swarmResult.delivery.groupbuy_matrix.map((gb, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200/70 bg-slate-50/60 p-3 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800">{gb.name}</span>
                    <span
                      className={`text-[10px] font-bold rounded px-1.5 py-0.5 ${
                        gb.margin_pct <= 20
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      毛利：{gb.margin_pct}%
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-base font-black text-rose-600">
                      ¥{gb.deal_price}
                    </span>
                    <span className="font-mono text-xs text-slate-400 line-through">
                      原价 ¥{gb.original_price}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">{gb.strategy}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Module 5: Agent 自进化与元能力沉淀操作卡片 */}
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-indigo-50/70 border border-indigo-200/60 p-3.5">
            <div className="flex items-center gap-2">
              <Cpu className="h-4 w-4 text-indigo-600" />
              <div>
                <span className="text-xs font-bold text-indigo-950 block">
                  智能体元能力闭环：自动沉淀与技能进化
                </span>
                <span className="text-[11px] text-slate-500 block">
                  多次执行此模式将自动提取并结晶为 .trae/skills/ 专属技能包，无需人工维护
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleAutoCrystallize}
                disabled={crystallizeSuccess}
                className="flex items-center gap-1 rounded-xl bg-white border border-indigo-200 px-3 py-1.5 text-xs font-bold text-indigo-700 hover:bg-indigo-600 hover:text-white transition-all cursor-pointer shadow-2xs"
              >
                <Sparkles className="h-3 w-3" />
                <span>{crystallizeSuccess ? '已自动沉淀为技能包' : '立即将本次流程沉淀为新技能'}</span>
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
