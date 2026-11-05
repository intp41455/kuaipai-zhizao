import React, { useEffect, useState } from 'react';
import {
  Flame,
  TrendingUp,
  MapPin,
  Video,
  FileText,
  RefreshCw,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Radio,
} from 'lucide-react';

export interface HotTrendItem {
  id: string;
  title: string;
  rank: number;
  heat_score: number;
  heat_index_str: string;
  category: '同城热点' | '短视频爆款' | '图文爆款' | '全网热搜' | '行业突发';
  tag?: string;
  city?: string;
  source: string;
  published_time_text: string;
  hook_angle: string;
  narrative_structure?: string;
}

interface ViralHotTrendsRadarProps {
  onApplyTrendToScript: (trend: HotTrendItem) => void;
  onShowNotice?: (type: 'success' | 'error', text: string) => void;
}

const CITIES = ['全国', '北京', '上海', '广州', '深圳', '成都', '杭州', '西安', '武汉'];
const CATEGORIES = ['全部', '全网热搜', '同城热点', '短视频爆款', '图文爆款'];

export const ViralHotTrendsRadar: React.FC<ViralHotTrendsRadarProps> = ({
  onApplyTrendToScript,
  onShowNotice,
}) => {
  const [selectedCity, setSelectedCity] = useState('全国');
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [trends, setTrends] = useState<HotTrendItem[]>([]);
  const [updatedAt, setUpdatedAt] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchTrends = async (forceRefresh = false) => {
    setIsLoading(true);
    try {
      const endpoint = forceRefresh
        ? `/api/v1/intel/refresh?city=${encodeURIComponent(selectedCity)}`
        : `/api/v1/intel/hot-trends?city=${encodeURIComponent(selectedCity)}&category=${encodeURIComponent(selectedCategory)}`;
      const res = await fetch(endpoint, { method: forceRefresh ? 'POST' : 'GET' });
      if (res.ok) {
        const data = await res.json();
        setTrends(data.items || []);
        setUpdatedAt(data.updated_at || new Date().toLocaleTimeString('zh-CN'));
        if (forceRefresh) {
          onShowNotice?.('success', '全网热点与同城爆款雷达已完成即时数据刷新！');
        }
      }
    } catch {
      // ignore
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTrends(false);
  }, [selectedCity, selectedCategory]);

  return (
    <section className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-2xs space-y-4">
      {/* Top Banner & Control Bar */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-50 border border-orange-200/80 text-orange-600">
            <Flame className="h-4 w-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-bold text-slate-900">全网热点与爆款大数据雷达</h2>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 border border-emerald-200/60">
                <Radio className="h-2.5 w-2.5 animate-pulse text-emerald-500" />
                7x24h 自动化监测中
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mt-0.5">
              实时聚合全网热搜、短视频飙升榜、高赞图文与同城话题，为内容创作提供高热度数据源支撑
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[11px] text-slate-400">
            更新于：{updatedAt || '刚刚'}
          </span>
          <button
            type="button"
            onClick={() => fetchTrends(true)}
            disabled={isLoading}
            className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 hover:border-indigo-400 hover:text-indigo-600 transition-all cursor-pointer"
          >
            <RefreshCw className={`h-3 w-3 ${isLoading ? 'animate-spin text-indigo-600' : ''}`} />
            <span>{isLoading ? '抓取中...' : '即时抓取'}</span>
          </button>
        </div>
      </div>

      {/* Filter Row: City selection + Category Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex flex-wrap items-center gap-1.5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-2xs'
                  : 'bg-slate-100/80 text-slate-600 hover:bg-slate-200/80'
              }`}
            >
              {cat === '全部' && '🔥 全部高热'}
              {cat === '全网热搜' && '📈 全网实时热搜'}
              {cat === '同城热点' && '🏙️ 同城热搜榜'}
              {cat === '短视频爆款' && '🎬 短视频飙升榜'}
              {cat === '图文爆款' && '📸 72h高赞图文'}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1.5 text-xs text-slate-600">
          <MapPin className="h-3.5 w-3.5 text-indigo-600" />
          <span className="text-[11px] font-semibold text-slate-400">同城定位：</span>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-medium text-slate-800 focus:border-indigo-500 focus:outline-none cursor-pointer"
          >
            {CITIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid of Trend Cards */}
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {trends.slice(0, 9).map((item, idx) => (
          <div
            key={item.id}
            className="group relative flex flex-col justify-between rounded-xl border border-slate-200/80 bg-slate-50/50 p-3 hover:border-indigo-400 hover:bg-white hover:shadow-2xs transition-all"
          >
            <div>
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-1.5 min-w-0">
                  <span
                    className={`flex h-4 w-4 shrink-0 items-center justify-center rounded text-[10px] font-mono font-bold ${
                      idx === 0
                        ? 'bg-rose-500 text-white'
                        : idx === 1
                        ? 'bg-orange-500 text-white'
                        : idx === 2
                        ? 'bg-amber-500 text-white'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <span className="text-[10px] font-semibold text-indigo-600 rounded bg-indigo-50 px-1 py-0.5 whitespace-nowrap">
                    {item.category}
                  </span>
                  {item.tag && (
                    <span className="text-[9px] font-bold text-rose-600 rounded bg-rose-50 px-1 py-0.5 border border-rose-200/60">
                      {item.tag}
                    </span>
                  )}
                </div>
                <span className="font-mono text-[10px] font-semibold text-orange-600 shrink-0">
                  {item.heat_index_str}
                </span>
              </div>

              <h4 className="mt-2 line-clamp-2 text-xs font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                {item.title}
              </h4>

              <p className="mt-1.5 text-[11px] text-slate-500 line-clamp-2 bg-white/70 p-1.5 rounded-lg border border-slate-200/50">
                <span className="font-semibold text-indigo-600">💡 借势切入：</span>
                {item.hook_angle}
              </p>
            </div>

            <div className="mt-3 flex items-center justify-between border-t border-slate-200/60 pt-2 text-[10px] text-slate-400">
              <span>{item.source}</span>
              <button
                type="button"
                onClick={() => onApplyTrendToScript(item)}
                className="flex items-center gap-1 rounded-md bg-indigo-50 px-2 py-1 font-semibold text-indigo-700 hover:bg-indigo-600 hover:text-white transition-all cursor-pointer"
              >
                <Sparkles className="h-2.5 w-2.5" />
                <span>引用生成分镜</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
