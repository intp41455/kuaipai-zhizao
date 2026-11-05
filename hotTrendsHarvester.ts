/**
 * 全网热点大数据采集（仅真实数据，零种子假数据）。
 *
 * 公测产品红线：只展示真实抓取到的公开热搜；抓取失败时返回空列表 + source_status="unavailable"，
 * 绝不使用预置假热点冒充实时数据。
 */

export interface HotTrendItem {
  id: string;
  title: string;
  rank: number;
  heat_score: number;
  heat_index_str: string;
  category: string;
  tag?: string;
  city?: string;
  source: string;
  published_time_text: string;
  hook_angle: string;
}

let cachedData: Record<string, unknown> | null = null;
let lastFetchTime = 0;
const CACHE_TTL_MS = 30 * 60 * 1000;

async function fetchBaiduRealtimeHot(): Promise<Array<{ title: string; heat: string; tag?: string }>> {
  try {
    const res = await fetch('https://top.baidu.com/board?tab=realtime', {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'zh-CN,zh;q=0.9',
      },
      signal: AbortSignal.timeout(4000),
    });
    if (!res.ok) return [];
    const html = await res.text();

    const items: Array<{ title: string; heat: string; tag?: string }> = [];
    const titleRegex = /<div class="c-single-text-ellipsis">([\s\S]*?)<\/div>/g;
    const heatRegex = /<div class="hot-index_1GM0I">([\s\S]*?)<\/div>/g;

    const titles: string[] = [];
    let match: RegExpExecArray | null;
    while ((match = titleRegex.exec(html)) !== null) {
      const clean = match[1].replace(/<[^>]+>/g, '').trim();
      if (clean && clean.length >= 3 && !titles.includes(clean)) titles.push(clean);
    }

    const heats: string[] = [];
    while ((match = heatRegex.exec(html)) !== null) {
      const clean = match[1].replace(/<[^>]+>/g, '').trim();
      if (clean) heats.push(clean);
    }

    for (let i = 0; i < Math.min(titles.length, 25); i++) {
      items.push({
        title: titles[i],
        heat: heats[i] || '',
        tag: i < 3 ? '爆' : i < 8 ? '热' : '新',
      });
    }
    return items;
  } catch {
    return [];
  }
}

export async function getAggregatedHotTrends(targetCity = '全国') {
  const now = Date.now();
  const cacheKey = `trends_${targetCity}`;
  if (cachedData && cachedData[cacheKey] && now - lastFetchTime < CACHE_TTL_MS) {
    return (cachedData as Record<string, any>)[cacheKey];
  }

  const realItems = await fetchBaiduRealtimeHot();
  let result: Record<string, unknown>;

  if (realItems.length === 0) {
    result = {
      updated_at: new Date().toLocaleString('zh-CN'),
      city: targetCity,
      source_status: 'unavailable',
      source_message: '实时热搜数据源暂不可达（网络受限或平台反爬），已拒绝展示占位数据。',
      total_count: 0,
      items: [],
      city_hot_topics: [],
      viral_hooks_summary: [],
    };
  } else {
    const items: HotTrendItem[] = realItems.map((r, idx) => ({
      id: `real_trend_${idx + 1}`,
      title: r.title,
      rank: idx + 1,
      heat_score: Math.max(70, Math.round(99 - idx * 2.5)),
      heat_index_str: r.heat,
      category: '全网热搜',
      tag: r.tag,
      city: '全国',
      source: '百度实时热搜榜（真实抓取）',
      published_time_text: '实时',
      hook_angle: '',
    }));
    result = {
      updated_at: new Date().toLocaleString('zh-CN'),
      city: targetCity,
      source_status: 'ok',
      total_count: items.length,
      items,
      city_hot_topics: [],
      viral_hooks_summary: [],
    };
  }

  cachedData = { [cacheKey]: result };
  lastFetchTime = now;
  return result;
}
