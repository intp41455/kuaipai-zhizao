import React, { useState } from 'react';
import {
  Sparkles,
  AlertCircle,
  RefreshCw,
  Film,
  Play,
  CheckCircle2,
} from 'lucide-react';

interface SwarmResult {
  ok: boolean;
  store_name?: string;
  error?: string;
  message?: string;
  web_intel_summary?: {
    dianping: string[];
    douyin: string[];
    xiaohongshu: string[];
  };
  delivery?: {
    store_profile: Record<string, string>;
    viral_topics: Array<{ title: string; hook: string; track: string }>;
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
    campaign_plan?: Record<string, unknown>;
  };
}

interface AutonomousStoreSwarmStudioProps {
  onApplyStoryboardToEditor: (storyboard: any, storeProfile: any) => void;
  onOpenMixPlayer: () => void;
  onShowNotice?: (type: 'success' | 'error', text: string) => void;
  gatewayConfig?: unknown;
}
/**
 * 极简单输入框多智能体中枢（对标筷子科技/火兔的设计语言）：
 * - 一句大标题 + 一个输入框 + 一个按钮，过程全部后台执行，前台零过程噪音；
 * - 成功：紧凑结果卡片；失败：一行明确报错（无模型/无网络绝不伪造结果）。
 */
export const AutonomousStoreSwarmStudio: React.FC<AutonomousStoreSwarmStudioProps> = ({
  onApplyStoryboardToEditor,
  onOpenMixPlayer,
  onShowNotice,
  gatewayConfig,
}) => {
  const [storeNameInput, setStoreNameInput] = useState('');
  const [optionalNotes, setOptionalNotes] = useState('');
  const [showOptional, setShowOptional] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [result, setResult] = useState<SwarmResult | null>(null);
  const [errorMsg, setErrorMsg] = useState('');
  // 能力自检（环境先行门禁）：仅一行真实状态，模型未配置时预先告知将报错
  const [llmReady, setLlmReady] = useState<boolean | null>(null);

  React.useEffect(() => {
    fetch('/api/v1/intel/capabilities')
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => setLlmReady(d ? Boolean(d.llm_configured) : null))
      .catch(() => setLlmReady(null));
  }, []);

  const handleRun = async () => {
    const name = storeNameInput.trim();
    if (!name) {
      onShowNotice?.('error', '请输入门店或品牌名称');
      return;
    }
    setIsRunning(true);
    setResult(null);
    setErrorMsg('');
    try {
      const res = await fetch('/api/v1/agent/autonomous-research', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          store_name: name,
          city: '本地同城',
          optional_notes: optionalNotes.trim(),
          gateway_config: gatewayConfig ?? undefined,
        }),
      });
      const data: SwarmResult = await res.json();
      if (res.ok && data.ok) {
        setResult(data);
        onShowNotice?.('success', `「${data.store_name}」全案已生成`);
        // 元能力：本次全流程自动计入工作流沉淀统计（后台静默执行，无前台噪音）
        fetch('/api/v1/meta/track-workflow', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            workflow_signature: `store_swarm_${data.store_name}`.slice(0, 40),
            workflow_name: `全自动${data.store_name}操盘交付工作流`,
            steps_data: [
              { name: '多源真实搜索', description: 'Tavily/百度/必应爬取公开情报' },
              { name: '事实提取', description: '菜名/人均/地标/评价词结构化' },
              { name: 'LLM证据生成', description: '全量技能SOP装配下的证据驱动交付' },
            ],
          }),
        }).catch(() => {});
      } else {
        setErrorMsg(data.message || data.error || '请求失败');
      }
    } catch {
      setErrorMsg('网络异常：无法连接分析服务，请检查网络后重试。');
    } finally {
      setIsRunning(false);
    }
  };

  const d = result?.delivery;
  const sp = d?.store_profile;
  const srcCount =
    (result?.web_intel_summary?.dianping?.length || 0) +
    (result?.web_intel_summary?.douyin?.length || 0) +
    (result?.web_intel_summary?.xiaohongshu?.length || 0);

  return (
    <section className="mx-auto max-w-3xl space-y-6 py-6">
      {/* 一句大标题 + 输入框 + 按钮（筷子式克制布局） */}
      <div className="space-y-4 text-center">
        <h1 className="text-2xl font-black tracking-tight text-slate-900">
          输入店名，AI 操盘手完成一切
        </h1>
        <p className="text-xs text-slate-400">
          自动全网调研 · 生成选题 · 影视级分镜 · 团购精算
        </p>

        <div className="gemini-gradient-box text-left">
          <div className="gemini-gradient-inner flex items-center gap-2 p-2">
            <input
              type="text"
              value={storeNameInput}
              onChange={(e) => setStoreNameInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleRun()}
              className="h-10 min-w-0 flex-1 rounded-full bg-transparent px-4 text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none"
              placeholder="输入门店或品牌名称"
            />
            <button
              type="button"
              onClick={handleRun}
              disabled={isRunning}
              className="flex h-10 shrink-0 items-center gap-1.5 rounded-full bg-slate-900 px-5 text-xs font-bold text-white transition-colors hover:bg-slate-700 disabled:opacity-50 cursor-pointer"
            >
              {isRunning ? (
                <>
                  <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                  <span>分析中</span>
                </>
              ) : (
                <>
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>开始</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 text-[11px] text-slate-400">
          <span
            className={
              llmReady === true
                ? 'text-emerald-600'
                : llmReady === false
                ? 'text-amber-600'
                : 'text-slate-400'
            }
          >
            {llmReady === true
              ? '● 模型已连接，可生成真实分析'
              : llmReady === false
              ? '● 模型未配置——提交后将明确报错，不会生成模板内容（在「工具与网关」配置密钥后可用）'
              : '数据来自公开网络，AI 未连接时将明确报错，不生成占位内容'}
          </span>
          <button
            type="button"
            onClick={() => setShowOptional(!showOptional)}
            className="font-semibold text-indigo-500 hover:text-indigo-700 cursor-pointer"
          >
            补充资料（可选）
          </button>
        </div>

        {showOptional && (
          <textarea
            value={optionalNotes}
            onChange={(e) => setOptionalNotes(e.target.value)}
            rows={2}
            placeholder="选填：拍摄限制、内部价格等补充信息"
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-800 focus:border-indigo-400 focus:outline-none"
          />
        )}
      </div>

      {/* 执行中：仅一行状态 */}
      {isRunning && (
        <p className="text-center text-xs text-slate-400">
          正在后台全网调研并生成全案，约需十几秒…
        </p>
      )}

      {/* 失败：一行明确报错 */}
      {!isRunning && errorMsg && (
        <div className="flex items-start gap-2 rounded-xl border border-rose-200 bg-rose-50/60 px-4 py-3">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-500" />
          <div className="text-xs text-rose-700">
            <p className="font-semibold">{errorMsg}</p>
            <p className="mt-1 text-rose-400">
              配置模型：右上角「工具与网关 → AI 模型网关」
            </p>
          </div>
        </div>
      )}

      {/* 成功：紧凑结果卡 */}
      {!isRunning && d && sp && (
        <div className="space-y-4 text-left">
          {/* 数据源一行摘要 */}
          <p className="text-center text-[11px] text-slate-400">
            已引用 {srcCount} 条公开网络真实情报 · 由 AI 按全量技能 SOP 生成
          </p>

          {/* 画像一行 */}
          <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
            <p className="text-sm font-bold text-slate-900">
              {sp.store_name || result?.store_name}
              <span className="ml-2 text-xs font-normal text-slate-400">{sp.category}</span>
            </p>
            <p className="mt-1 text-xs text-slate-500">
              招牌：{sp.signature_products}｜客群：{sp.target_audience}
            </p>
          </div>

          {/* 选题 3 条 */}
          <div className="space-y-2">
            {d.viral_topics.map((t, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-white px-4 py-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-indigo-500">{t.track}</span>
                </div>
                <p className="mt-0.5 text-xs font-semibold text-slate-800">{t.title}</p>
                <p className="mt-0.5 text-[11px] text-slate-500">{t.hook}</p>
              </div>
            ))}
          </div>

          {/* 分镜紧凑表 */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="border-b border-slate-100 px-4 py-2 text-xs font-bold text-slate-700">
              视听分镜（{d.storyboard.pacing_tip}）
            </div>
            <table className="w-full text-left text-[11px]">
              <tbody className="divide-y divide-slate-100">
                {d.storyboard.camera_angles.map((a, i) => (
                  <tr key={i}>
                    <td className="w-44 px-4 py-2 font-semibold text-indigo-600">{a}</td>
                    <td className="px-2 py-2 text-slate-500">{d.storyboard.visual_cues[i]}</td>
                    <td className="px-4 py-2 text-slate-800">{d.storyboard.scene_lines[i]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 团购 */}
          <div className="grid gap-2 sm:grid-cols-2">
            {d.groupbuy_matrix.map((g, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-white px-4 py-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800">{g.name}</span>
                  <span
                    className={`text-[10px] font-bold ${g.margin_pct <= 20 ? 'text-amber-600' : 'text-emerald-600'}`}
                  >
                    毛利 {g.margin_pct}%
                  </span>
                </div>
                <p className="mt-0.5 font-mono text-sm font-black text-rose-600">
                  ¥{g.deal_price}
                  <span className="ml-1.5 text-[10px] font-normal text-slate-400 line-through">
                    ¥{g.original_price}
                  </span>
                </p>
              </div>
            ))}
          </div>

          {/* 两个动作 */}
          <div className="flex justify-center gap-2 pt-1">
            <button
              type="button"
              onClick={() => onApplyStoryboardToEditor(d.storyboard, sp)}
              className="flex items-center gap-1.5 rounded-full bg-indigo-600 px-5 py-2 text-xs font-bold text-white hover:bg-indigo-700 cursor-pointer"
            >
              <Film className="h-3.5 w-3.5" />
              载入分镜台
            </button>
            <button
              type="button"
              onClick={onOpenMixPlayer}
              className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-5 py-2 text-xs font-bold text-slate-700 hover:border-indigo-400 hover:text-indigo-600 cursor-pointer"
            >
              <Play className="h-3.5 w-3.5" />
              混剪成片
            </button>
          </div>

          <p className="flex items-center justify-center gap-1 text-center text-[10px] text-slate-300">
            <CheckCircle2 className="h-3 w-3" />
            本次全流程已自动计入技能沉淀统计
          </p>
        </div>
      )}
    </section>
  );
};
