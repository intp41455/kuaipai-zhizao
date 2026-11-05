import React, { useEffect, useMemo, useState } from 'react';
import { Wrench, X, Zap, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';

interface ToolParam {
  key: string;
  label: string;
  type: 'text' | 'textarea' | 'number' | 'select';
  required: boolean;
  default?: string | number | null;
  options?: string[];
}

interface ToolMeta {
  id: string;
  domain: string;
  name: string;
  cost: number;
  params: ToolParam[];
  note: string;
}

interface CallResult {
  state: 'succeeded' | 'failed' | 'needs_input';
  tool_id?: string;
  cost?: number;
  data?: Record<string, unknown>;
  error?: string;
  message?: string;
  issues?: Array<{ field: string; message: string }>;
}

/**
 * 工具工作台（schema 驱动 · 真实算法，无模型依赖）：
 * 6 能力域宫格 → 工具卡（成本徽标）→ schema 动态表单抽屉 → 结果卡。
 * 全部为毫秒级确定性算法：结构拆解 / 标题打分 / 合规检查 / 分镜 EDL / 比例几何。
 */
export const ToolWorkbench: React.FC<{ onShowNotice?: (type: 'success' | 'error', text: string) => void }> = ({
  onShowNotice,
}) => {
  const [catalog, setCatalog] = useState<{ domains: string[]; tools_by_domain: Record<string, ToolMeta[]> } | null>(null);
  const [activeDomain, setActiveDomain] = useState<string>('');
  const [selected, setSelected] = useState<ToolMeta | null>(null);
  const [form, setForm] = useState<Record<string, string>>({});
  const [running, setRunning] = useState(false);
  const [result, setResult] = useState<CallResult | null>(null);

  useEffect(() => {
    fetch('/api/v1/tools/catalog')
      .then((r) => r.json())
      .then((d) => {
        setCatalog(d);
        setActiveDomain(d.domains[0] || '');
      })
      .catch(() => onShowNotice?.('error', '工具目录加载失败'));
  }, [onShowNotice]);

  const openTool = (t: ToolMeta) => {
    setSelected(t);
    setResult(null);
    const init: Record<string, string> = {};
    t.params.forEach((p) => {
      init[p.key] = p.default != null ? String(p.default) : p.type === 'select' ? p.options?.[0] || '' : '';
    });
    setForm(init);
  };

  const run = async () => {
    if (!selected) return;
    setRunning(true);
    setResult(null);
    try {
      const res = await fetch('/api/v1/tools/call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tool_id: selected.id, args: form }),
      });
      const data: CallResult = await res.json();
      setResult(data);
      if (data.state === 'succeeded') {
        onShowNotice?.('success', `「${selected.name}」执行成功（${data.cost ?? 0} 点）`);
      }
    } catch {
      setResult({ state: 'failed', error: 'NETWORK', message: '请求失败，请检查网络' });
    } finally {
      setRunning(false);
    }
  };

  const tools = useMemo(() => catalog?.tools_by_domain?.[activeDomain] || [], [catalog, activeDomain]);

  return (
    <div className="mx-auto max-w-4xl space-y-4">
      {/* 能力域切换 */}
      <div className="flex flex-wrap gap-1.5">
        {(catalog?.domains || []).map((d) => (
          <button
            key={d}
            type="button"
            onClick={() => setActiveDomain(d)}
            className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
              activeDomain === d ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      {/* 工具宫格 */}
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
        {tools.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => openTool(t)}
            className={`group rounded-xl border p-3 text-left transition-all cursor-pointer ${
              selected?.id === t.id
                ? 'border-indigo-400 bg-indigo-50/50'
                : 'border-slate-200 bg-white hover:border-indigo-300 hover:shadow-xs'
            }`}
          >
            <div className="flex items-start justify-between gap-1">
              <span className="text-xs font-bold text-slate-800">{t.name}</span>
              <span
                className={`shrink-0 rounded px-1 py-0.5 font-mono text-[9px] font-bold ${
                  t.cost === 0 ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                }`}
              >
                {t.cost === 0 ? '免费' : `${t.cost}点`}
              </span>
            </div>
            <p className="mt-1 line-clamp-2 text-[10px] text-slate-400">{t.note}</p>
          </button>
        ))}
      </div>

      {/* Schema 驱动参数抽屉 */}
      {selected && (
        <div className="rounded-2xl border border-slate-200 bg-white p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Wrench className="h-4 w-4 text-indigo-600" />
              <span className="text-sm font-bold text-slate-900">{selected.name}</span>
              <span className="text-[10px] text-slate-400">{selected.note}</span>
            </div>
            <button type="button" onClick={() => setSelected(null)} className="text-slate-300 hover:text-slate-600 cursor-pointer">
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {selected.params.map((p) => (
              <div key={p.key} className={p.type === 'textarea' ? 'sm:col-span-2' : ''}>
                <label className="mb-1 block text-[11px] font-semibold text-slate-600">
                  {p.label}
                  {p.required && <span className="ml-0.5 text-rose-400">*</span>}
                </label>
                {p.type === 'textarea' ? (
                  <textarea
                    rows={3}
                    value={form[p.key] || ''}
                    onChange={(e) => setForm({ ...form, [p.key]: e.target.value })}
                    className="w-full rounded-lg border border-slate-200 px-2.5 py-2 text-xs focus:border-indigo-400 focus:outline-none"
                  />
                ) : p.type === 'select' ? (
                  <select
                    value={form[p.key] || ''}
                    onChange={(e) => setForm({ ...form, [p.key]: e.target.value })}
                    className="w-full rounded-lg border border-slate-200 px-2.5 py-2 text-xs focus:border-indigo-400 focus:outline-none"
                  >
                    {(p.options || []).map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={p.type === 'number' ? 'number' : 'text'}
                    value={form[p.key] || ''}
                    onChange={(e) => setForm({ ...form, [p.key]: e.target.value })}
                    className="w-full rounded-lg border border-slate-200 px-2.5 py-2 text-xs focus:border-indigo-400 focus:outline-none"
                  />
                )}
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={run}
            disabled={running}
            className="flex items-center gap-1.5 rounded-full bg-indigo-600 px-5 py-2 text-xs font-bold text-white hover:bg-indigo-700 disabled:opacity-50 cursor-pointer"
          >
            {running ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Zap className="h-3.5 w-3.5" />}
            {running ? '执行中' : `执行（${selected.cost === 0 ? '免费' : `${selected.cost} 点`}）`}
          </button>
        </div>
      )}

      {/* 结果卡 */}
      {result && (
        <div
          className={`rounded-2xl border p-4 ${
            result.state === 'succeeded'
              ? 'border-emerald-200 bg-emerald-50/40'
              : result.state === 'needs_input'
              ? 'border-amber-200 bg-amber-50/40'
              : 'border-rose-200 bg-rose-50/40'
          }`}
        >
          <div className="mb-2 flex items-center gap-1.5">
            {result.state === 'succeeded' ? (
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            ) : (
              <AlertCircle className={`h-4 w-4 ${result.state === 'needs_input' ? 'text-amber-600' : 'text-rose-600'}`} />
            )}
            <span className="text-xs font-bold text-slate-800">
              {result.state === 'succeeded'
                ? '执行成功'
                : result.state === 'needs_input'
                ? '需补充参数'
                : '执行失败'}
            </span>
          </div>

          {result.state === 'needs_input' && (
            <ul className="space-y-0.5 text-[11px] text-amber-700">
              {(result.issues || []).map((i, idx) => (
                <li key={idx}>· {i.message}</li>
              ))}
            </ul>
          )}

          {result.state === 'failed' && (
            <p className="text-[11px] text-rose-700">{result.message || result.error}</p>
          )}

          {result.state === 'succeeded' && (
            <pre className="max-h-80 overflow-auto whitespace-pre-wrap break-all rounded-lg bg-white p-3 font-mono text-[10.5px] leading-relaxed text-slate-700">
              {JSON.stringify(result.data, null, 2)}
            </pre>
          )}
        </div>
      )}
    </div>
  );
};
