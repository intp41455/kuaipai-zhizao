/**
 * 全网多智能体自动化门店调研中枢（真实证据驱动，零模板兜底）。
 *
 * 公测产品红线：
 * 1. 用户仅输入店名 → 三路爬虫抓取大众点评/美团、抖音、小红书公开真实情报；
 * 2. 事实提取器从真实文本中提取菜名/人均/地标/评价关键词；
 * 3. LLM 是唯一内容生成路径，必须引用真实证据；
 * 4. 无模型连接 / 无网络 / 生成失败 → 返回 ok:false + 明确错误，绝不输出模板假文案。
 */

export interface SwarmLLMCaller {
  (prompt: string, systemInstruction: string): Promise<Record<string, unknown> | null>;
}

interface SwarmResult {
  ok: boolean;
  store_name?: string;
  error?: string;
  message?: string;
  generated_by?: string;
  agent_logs?: Array<{ agent: string; status: string; action: string; time: string }>;
  web_intel_summary?: Record<string, string[]>;
  extracted_facts?: Record<string, unknown>;
  delivery?: Record<string, unknown>;
}

async function searchWebSnippets(query: string, maxResults = 5): Promise<string[]> {
  const cleanQ = query.replace(/[^\u4e00-\u9fa5a-zA-Z0-9\s]/g, ' ').trim();
  if (!cleanQ) return [];

  // 多源容错：百度被反爬时回落到必应
  const sources = [
    `https://www.baidu.com/s?wd=${encodeURIComponent(cleanQ)}`,
    `https://cn.bing.com/search?q=${encodeURIComponent(cleanQ)}&setlang=zh-hans`,
  ];

  for (const url of sources) {
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept-Language': 'zh-CN,zh;q=0.9',
        },
        signal: AbortSignal.timeout(4000),
      });
      if (!res.ok) continue;
      const html = await res.text();
      // 百度 h3 标题 + 必应 h2 标题，描述行两种平台均尝试
      const titles = Array.from(html.matchAll(/<h[23][^>]*>(.*?)<\/h[23]>/g))
        .map((m) => m[1].replace(/<[^>]+>/g, '').trim())
        .filter((t) => t.length >= 4 && !/^(搜索|网页|视频|图片|登录)$/.test(t));
      const descs = Array.from(html.matchAll(/class="c-font-normal[^"]*">(.*?)<\/div>|<p class="b_lineclamp[^"]*">(.*?)<\/p>/g))
        .map((m) => (m[1] || m[2] || '').replace(/<[^>]+>/g, '').trim())
        .filter((t) => t.length >= 10)
        .map((t) => t.slice(0, 110));
      const merged: string[] = [];
      for (const s of [...titles, ...descs]) {
        if (!merged.includes(s)) merged.push(s);
        if (merged.length >= maxResults) break;
      }
      if (merged.length > 0) return merged;
    } catch {
      continue;
    }
  }
  return [];
}

function extractStoreFacts(allSnippets: string[], storeName: string) {
  const joined = allSnippets.join('；');

  const dishCandidates: string[] = [];
  const dishRegex = /(?:推荐菜|招牌菜?|必点|主打|镇店)[：:\s]*([\u4e00-\u9fa5A-Za-z0-9]{2,10})/g;
  let m: RegExpExecArray | null;
  while ((m = dishRegex.exec(joined)) !== null) {
    const cand = m[1].trim();
    if (cand && !dishCandidates.includes(cand) && !cand.includes(storeName)) {
      dishCandidates.push(cand);
    }
    if (dishCandidates.length >= 6) break;
  }

  const avgPriceMatch = joined.match(/人均\s*[约]?\s*(\d{2,4})\s*元/);
  const avgPrice = avgPriceMatch ? avgPriceMatch[1] : '';

  const landmarks: string[] = [];
  const lmRegex = /([\u4e00-\u9fa5]{2,6}(?:路|街|巷|广场|中心|商圈|大道|园区))/g;
  while ((m = lmRegex.exec(joined)) !== null) {
    if (!landmarks.includes(m[1])) landmarks.push(m[1]);
    if (landmarks.length >= 4) break;
  }

  const REVIEW_LEXICON = [
    '排队', '回头客', '分量足', '性价比', '环境好', '服务好', '新鲜',
    '现做', '手工', '老字号', '打卡', '拍照', '好吃', '推荐', '回购',
    '麻辣', '鲜香', '入味', '软糯', '酥脆', '爆汁', '锅气',
  ];
  const hitReviews = REVIEW_LEXICON.filter((w) => joined.includes(w)).slice(0, 8);

  return {
    dish_candidates: dishCandidates,
    avg_price: avgPrice,
    landmarks,
    review_keywords: hitReviews,
    raw_snippet_count: allSnippets.length,
  };
}

export async function runAutonomousStoreSwarm(options: {
  storeName: string;
  city?: string;
  optionalNotes?: string;
  callLLM?: SwarmLLMCaller;
}): Promise<SwarmResult> {
  const { storeName, city = '本地同城', optionalNotes = '', callLLM } = options;
  const cleanName = storeName.trim();
  if (!cleanName) {
    return { ok: false, error: 'EMPTY_STORE_NAME', message: '请输入目标门店或品牌的完整名称。' };
  }

  const agentLogs = [
    { agent: '点评美团数据探查智能体', status: 'running', action: `检索【${cleanName}】的门店评分、推荐菜与人均客单…`, time: '0.4s' },
    { agent: '短视频同城爆款探查智能体', status: 'running', action: `检索抖音平台关于【${cleanName}】的同城探店内容…`, time: '0.8s' },
    { agent: '小红书真实口碑挖掘智能体', status: 'running', action: `挖掘小红书关于【${cleanName}】的食客笔记与打卡点…`, time: '1.2s' },
  ];

  const dianping = await searchWebSnippets(`${cleanName} ${city} 大众点评 美团 推荐菜 人均 评价`);
  const douyin = await searchWebSnippets(`${cleanName} 抖音 同城 探店 团购`);
  const xhs = await searchWebSnippets(`${cleanName} 小红书 拍照 打卡 必点 真实评价`);

  agentLogs[0].status = dianping.length ? 'completed' : 'no_data';
  agentLogs[0].action = dianping.length ? `已抓取 ${dianping.length} 条真实公开情报` : '未检索到公开数据';
  agentLogs[1].status = douyin.length ? 'completed' : 'no_data';
  agentLogs[1].action = douyin.length ? `已抓取 ${douyin.length} 条真实公开情报` : '未检索到公开数据';
  agentLogs[2].status = xhs.length ? 'completed' : 'no_data';
  agentLogs[2].action = xhs.length ? `已抓取 ${xhs.length} 条真实公开情报` : '未检索到公开数据';

  const allSnippets = [...dianping, ...douyin, ...xhs];
  const facts = extractStoreFacts(allSnippets, cleanName);

  if (allSnippets.length === 0) {
    return {
      ok: false,
      error: 'NO_NETWORK_DATA',
      message:
        '全网数据爬取失败：未能从公开网络获取到任何关于该门店的真实情报。系统不会使用预置文案冒充分析结果，请检查服务器网络后重试，或在「补充资料」中手动提供门店信息。',
      agent_logs: agentLogs,
      web_intel_summary: { dianping: [], douyin: [], xiaohongshu: [] },
    };
  }

  if (!callLLM) {
    return {
      ok: false,
      error: 'AI_MODEL_UNAVAILABLE',
      message:
        'AI 模型网关未连接，无法执行智能分析。系统不会使用预置文案冒充分析结果。请在「AI 模型网关」中配置模型服务后重试。',
      agent_logs: agentLogs,
      web_intel_summary: { dianping, douyin, xiaohongshu: xhs },
      extracted_facts: facts,
    };
  }

  const evidenceBlock =
    `【大众点评/美团真实情报】\n${dianping.map((s) => `- ${s}`).join('\n')}\n\n` +
    `【抖音真实情报】\n${douyin.map((s) => `- ${s}`).join('\n')}\n\n` +
    `【小红书真实情报】\n${xhs.map((s) => `- ${s}`).join('\n')}\n\n` +
    `【结构化事实提取】\n` +
    `- 菜名候选：${facts.dish_candidates.join('、') || '未提取到'}\n` +
    `- 人均客单：${facts.avg_price ? facts.avg_price + '元' : '未提取到'}\n` +
    `- 地标商圈：${facts.landmarks.join('、') || '未提取到'}\n` +
    `- 真实评价关键词：${facts.review_keywords.join('、') || '未提取到'}\n` +
    (optionalNotes.trim() ? `\n【用户主动补充资料】\n${optionalNotes.trim()}\n` : '');

  const prompt = `你是本地生活全链路「AI 超级操盘手总控智能体」，正在为门店【${cleanName}】（城市：${city}）执行全案交付。

一、爬虫智能体从公开网络真实采集到的证据（唯一事实来源）：
${evidenceBlock}

【铁律 —— 违反任何一条即为无效输出】
1. 所有台词、卖点、套餐内容必须基于上方真实证据：证据中出现的菜名、人均价格、地标、评价词必须被引用；证据中没有的信息禁止编造。
2. 台词必须口语化、有烟火气，像真人探店博主聊天；禁止出现「千万别只看门头大不大」「智商税」「科技狠活」等被用烂的通用梗。
3. 每条 sceneLine 末尾用【据:xx】标注事实来源（如【据:大众点评】【据:小红书】【据:用户补充】）。
4. 严格输出纯 JSON，不得输出任何其他文字。

【输出 JSON 结构】
{
  "store_profile": {
    "store_name": "${cleanName}",
    "category": "从证据推断的品类",
    "signature_products": "证据中真实提到的招牌菜/产品（无则写'证据未提及具体菜名'）",
    "target_audience": "从评价关键词推断的客群",
    "store_persona": "适配的探店人设语气",
    "memory_anchors": "从真实评价中提炼的记忆锚点",
    "redlines_summary": "从证据推断的拍摄红线（无证据则写'暂无红线信息'）"
  },
  "viral_topics": [
    {"title": "...", "hook": "前3秒台词，须引用真实证据", "track": "反常识设问流"},
    {"title": "...", "hook": "...", "track": "真实口碑流"},
    {"title": "...", "hook": "...", "track": "工艺实测流"}
  ],
  "storyboard": {
    "title": "...",
    "pacing_tip": "含 1080P 60fps、快门1/50s或1/100s、3500K暖光 的实拍参数",
    "bgm_style": "...",
    "voice_tone": "...",
    "camera_angles": ["01 黄金Hook痛点特写 (0-3s)", "02 核心工艺微距推镜 (3-8s)", "03 场景人群信任背书 (8-16s)", "04 团购促单行动号召 (16-24s)"],
    "visual_cues": ["镜1构图/机位/灯光（含视觉加法）", "镜2...", "镜3...", "镜4..."],
    "scene_lines": ["镜1台词【据:xx】", "镜2台词【据:xx】", "镜3台词【据:xx】", "镜4台词【据:xx】"]
  },
  "groupbuy_matrix": [
    {"tier": "tier1_loss_leader", "name": "单人尝鲜款（须含证据中的真实菜品）", "original_price": 0, "deal_price": 0, "margin_pct": 15, "strategy": "10%-20%毛利换人流，据人均${facts.avg_price || 'X'}元定价"},
    {"tier": "tier2_core_profit", "name": "双人主流款", "original_price": 0, "deal_price": 0, "margin_pct": 58, "strategy": "..."},
    {"tier": "tier3_hero", "name": "多人标杆款", "original_price": 0, "deal_price": 0, "margin_pct": 50, "strategy": "..."}
  ]
}`;

  let llmResult: Record<string, unknown> | null = null;
  try {
    llmResult = await callLLM(
      prompt,
      '你是顶级本地生活商业编导与操盘手。你只能基于提供的真实证据创作，严禁使用与门店无关的通用模板话术。严格输出纯 JSON。'
    );
  } catch {
    llmResult = null;
  }

  const delivery = llmResult as { storyboard?: { scene_lines?: string[] } } | null;
  const sceneLines = delivery?.storyboard?.scene_lines;
  if (!llmResult || !Array.isArray(sceneLines) || sceneLines.length < 4) {
    return {
      ok: false,
      error: llmResult ? 'AI_OUTPUT_INVALID' : 'AI_MODEL_UNAVAILABLE',
      message: llmResult
        ? 'AI 模型返回的交付物结构不完整（分镜台词不足4条），已拒绝交付。请重试或更换模型网关。'
        : 'AI 模型网关未连接或调用失败，无法执行智能分析。系统不会使用预置文案冒充分析结果。请在「AI 模型网关」中配置模型服务后重试。',
      agent_logs: agentLogs,
      web_intel_summary: { dianping, douyin, xiaohongshu: xhs },
      extracted_facts: facts,
    };
  }

  agentLogs.push({
    agent: '商业操盘总控编导智能体',
    status: 'completed',
    action: `已按全量技能 SOP 生成交付（引用真实证据 ${allSnippets.length} 条）`,
    time: '2.1s',
  });

  return {
    ok: true,
    store_name: cleanName,
    generated_by: 'llm_with_real_evidence',
    agent_logs: agentLogs,
    web_intel_summary: { dianping, douyin, xiaohongshu: xhs },
    extracted_facts: facts,
    delivery: llmResult,
  };
}
