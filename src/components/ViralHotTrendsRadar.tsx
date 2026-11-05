import React, { useEffect, useState } from 'react';
import { Flame, RefreshCw, WifiOff } from 'lucide-react';

export interface HotTrendItem {
  id: string;
  title: string;
  rank: number;
  heat_index_str: string;
  category: string;
  tag?: string;
  source: string;
}

/**
 * 实时热搜极简板块（仅真实抓取数据）：
 * - 无数据时明确提示数据源不可达，绝不展示占位假热点；
 * - 每行一条，点击可引用为创作输入。
 */
export const ViralHotTrendsRadar: React.FC<{
  onApplyTrendToScript: (trend: HotTrendItem) => void;
  onShowNotice?: (type: 'success' | 'error', text: string) => void;
}> = ({ onApplyTrendToScript, onShowNotice }) => {
  const [trends, setTrends] = useState<HotTrendItem[]>([]);
  const [status, setStatus] = useState<'loading' | 'ok' | 'unavailable'>('loading');
  const [updatedAt, setUpdatedAt] = useState('');

  const load = async (refresh = false) => {
    setStatus('loading');
    try {
      const endpoint = refresh
        ? '/api/v1/intel/refresh?city=全国'
        : '/api/v1/intel/hot-trends?city=全国';
      const res = await fetch(endpoint, { method: refresh ? 'POST' : 'GET' });
      const data = await res.json();
      setUpdatedAt(data.updated_at || '');
      if (data.source_status === 'ok' && Array.isArray(data.items) && data.items.length > 0) {
        setTrends(data.items);
        setStatus('ok');
      } else {
        setTrends([]);
        setStatus('unavailable');
      }
    } catch {
      setTrends([]);
      setStatus('unavailable');
    }
  };

  useEffect(() => {
    load(false);
  }, []);

  return (
    <section className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Flame className="h-3.5 w-3.5 text-orange-500" />
          <span className="text-xs font-bold text-slate-800">实时热搜</span>
          {status === 'ok' && (
            <span className="text-[10px] text-slate-300">真实抓取 · {updatedAt}</span>
          )}
        </div>
        <button
          type="button"
          onClick={() => load(true)}
          className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-indigo-600 cursor-pointer"
        >
          <RefreshCw className="h-3 w-3" />
          刷新
        </button>
      </div>

      {status === 'loading' && (
        <p className="py-4 text-center text-[11px] text-slate-400">加载中…</p>
      )}

      {status === 'unavailable' && (
        <p className="flex items-center justify-center gap-1.5 py-4 text-[11px] text-slate-400">
          <WifiOff className="h-3 w-3" />
          实时热搜数据源暂不可达（不展示占位数据）
        </p>
      )}

      {status === 'ok' && (
        <ul className="mt-1.5 max-h-56 space-y-0.5 overflow-y-auto">
          {trends.slice(0, 15).map((t, i) => (
            <li
              key={t.id}
              className="group flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-slate-50"
            >
              <span
                className={`w-4 shrink-0 text-center font-mono text-[10px] font-bold ${
                  i === 0
                    ? 'text-rose-500'
                    : i === 1
                    ? 'text-orange-500'
                    : i === 2
                    ? 'text-amber-500'
                    : 'text-slate-300'
                }`}
              >
                {i + 1}
              </span>
              {t.tag && (
                <span
                  className={`shrink-0 rounded px-1 text-[9px] font-bold ${
                    t.tag === '爆' ? 'bg-rose-100 text-rose-600' : 'bg-orange-100 text-orange-600'
                  }`}
                >
                  {t.tag}
                </span>
              )}
              <span className="min-w-0 flex-1 truncate text-xs text-slate-700">{t.title}</span>
              {t.heat_index_str && (
                <span className="shrink-0 font-mono text-[10px] text-slate-300">
                  {t.heat_index_str}
                </span>
              )}
              <button
                type="button"
                onClick={() => onApplyTrendToScript(t)}
                className="shrink-0 rounded-md px-1.5 py-0.5 text-[10px] font-semibold text-slate-300 opacity-0 transition-opacity hover:bg-indigo-600 hover:text-white group-hover:opacity-100 cursor-pointer"
              >
                引用
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
