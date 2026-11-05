"use client";
import React, { useState, useMemo } from 'react';
import {
  X,
  Search,
  Sparkles,
  Download,
  Trash2,
  ExternalLink,
  Star,
  Check,
  Github,
  Zap,
  Layers,
  FileCode,
  Sliders,
  Filter,
  Bookmark,
  Plus,
  ArrowUpRight,
  ShieldCheck,
  Terminal,
  Cpu,
  BookOpen,
  Boxes,
  HelpCircle,
} from 'lucide-react';
import { StoreMemoryProfile } from '../data/curatedTemplates';

export interface MarketSkill {
  id: string;
  name: string;
  tagline: string;
  category: 'hook' | 'script' | 'ecommerce' | 'tts_avatar' | 'ad_roi' | 'rag_store';
  categoryLabel: string;
  author: string;
  githubRepo: string;
  stars: number;
  installCount: number;
  rating: number;
  version: string;
  lastUpdated: string;
  toolName: string;
  directive: string;
  description: string;
  usageSteps: string[];
  inputSchema: string;
  outputSchema: string;
  examplePrompt: string;
  isCustom?: boolean;
  avatarUrl?: string;
  isMemoryMounted?: boolean;
}

export const BUILT_IN_MARKET_SKILLS: MarketSkill[] = [
  {
    id: 'local-super-operator',
    name: '🌟 本地生活超级操盘手总控中枢',
    tagline: '端到端串联调研、洗稿、分镜、组品与投流反哺，全生命周期SOP推进',
    category: 'script',
    categoryLabel: '操盘总控',
    author: 'local-life-core',
    githubRepo: 'local-life.ai/skills/local-super-operator',
    stars: 38800,
    installCount: 125000,
    rating: 5.0,
    version: 'v1.0.0',
    lastUpdated: '官方内置系统级核心',
    toolName: 'dispatch_super_operator',
    directive:
      '启用【local-super-operator 本地生活超级操盘手总控中枢】官方系统技能：统一调度5大子技能，推进冷启动期、爬坡期与稳态期全周期SOP，执行标准化交付物验收。',
    description:
      '本地生活全生命周期AI超级操盘手总控中枢。端到端编排并串联门店四维调研、对标拆解二创、影视级视觉分镜、黄金6品组品精算与投流复盘反哺5大子技能，推进冷启动、爬坡与稳态全周期SOP。',
    usageSteps: [
      '在超级操盘手向导中一键开启端到端操盘流水线。',
      '系统按阶段自动编排调用 5 大专业子技能输出成果。',
      '全生命周期交付物一键打包导出并归档至工程表。',
    ],
    inputSchema: '{"storeId": "string", "phase": "cold_launch|ramping|steady_state"}',
    outputSchema: '{"status": "success", "integratedArtifacts": "object"}',
    examplePrompt: '帮我为新签约的同城门店做一份全流程落地操盘规划',
    isMemoryMounted: true,
  },
  {
    id: 'local-store-research',
    name: '🌟 门店四维调研与测款专家',
    tagline: '物理环境、目标客群、产品工艺、IP人设四维画像建档与红线探测',
    category: 'rag_store',
    categoryLabel: '四维建档',
    author: 'local-life-core',
    githubRepo: 'local-life.ai/skills/local-store-research',
    stars: 29500,
    installCount: 88200,
    rating: 4.9,
    version: 'v1.0.0',
    lastUpdated: '官方内置系统级核心',
    toolName: 'execute_store_4d_research',
    directive:
      '启用【local-store-research 门店四维调研与测款】官方系统技能：全面摸排门店物理环境、目标客群、产品工艺与主理人人设，严格遵循拍摄红线约束（如后厨禁拍、老板不出镜），输出 A/B/C 差异化测款方案。',
    description:
      '针对实体门店开展环境、客群、产品、IP人设四维深度摸排，识别负向拍摄红线，设计冷启动首条打标签方案与A/B/C三路爆款测款脚本。',
    usageSteps: [
      '录入或通过AI抓取门店基础信息与特色。',
      'Agent 自动检测后厨禁拍或老板不出镜等负向红线。',
      '一键生成 A/B/C 三路差异化测款脚本与打标签方案。',
    ],
    inputSchema: '{"storeName": "string", "category": "string", "redlines": "object"}',
    outputSchema: '{"storeProfile": "object", "testScripts": "array"}',
    examplePrompt: '帮我为这家同城特色新店做一次四维摸排和测款脚本方案',
    isMemoryMounted: true,
  },
  {
    id: 'local-script-adaptation',
    name: '🌟 对标爆款拆解与同城洗稿',
    tagline: '4段式能量场骨架复刻，前3秒黄金钩子提炼，结合同城热搜原创二创',
    category: 'script',
    categoryLabel: '对标洗稿',
    author: 'local-life-core',
    githubRepo: 'local-life.ai/skills/local-script-adaptation',
    stars: 31200,
    installCount: 94000,
    rating: 4.9,
    version: 'v1.0.0',
    lastUpdated: '官方内置系统级核心',
    toolName: 'adapt_local_viral_script',
    directive:
      '启用【local-script-adaptation 对标爆款拆解与同城洗稿】官方系统技能：拆解对标视频的 4 段式能量场骨架，精准提炼前 3 秒黄金留人钩子，结合同城热搜与本土化语言风格生成原创度高转化二创脚本。',
    description:
      '自动穿透对标爆款短链，提取黄金前3秒留人钩子、叙事骨架、情绪曲线与转化锚点，结合同城热搜与门店工艺进行高转化二创洗稿。',
    usageSteps: [
      '粘贴任意短视频对标链接或输入爆款文案。',
      'Agent 提取前3秒钩子与结构骨架。',
      '自动结合同城热点与本店卖点生成3版原创脚本。',
    ],
    inputSchema: '{"urlOrText": "string", "targetStore": "string"}',
    outputSchema: '{"sourceAnalysis": "object", "adaptedScripts": "array"}',
    examplePrompt: '拆解这条同城爆款视频，结合本店特色二创3版高留存脚本',
    isMemoryMounted: true,
  },
  {
    id: 'local-storyboard-director',
    name: '🌟 视觉分镜与实拍导播',
    tagline: '影视级四列标准分镜表，1080P 60fps / 1/50s / 3500K暖光实拍基准',
    category: 'script',
    categoryLabel: '视觉分镜',
    author: 'local-life-core',
    githubRepo: 'local-life.ai/skills/local-storyboard-director',
    stars: 27800,
    installCount: 82500,
    rating: 4.9,
    version: 'v1.0.0',
    lastUpdated: '官方内置系统级核心',
    toolName: 'direct_shooting_storyboard',
    directive:
      '启用【local-storyboard-director 视觉分镜与实拍导播】官方系统技能：按影视级四列分镜标准生成机位角度、实拍动作、构图灯光与口播台词，实装 1080P 60fps/快门1/50s/3500K暖光基准，特写做足视觉加法。',
    description:
      '口播脚本一键转化为影视级四列标准视觉分镜表，明确景别运镜、色温快门、视觉加法构图与卡点节奏，严格注入免后厨拍摄安全防线。',
    usageSteps: [
      '输入或确认选中的口播文案。',
      '一键生成机位、运镜动作、灯光与实拍参数。',
      '现场摄制组与剪辑师按表格直接施工。',
    ],
    inputSchema: '{"scriptLines": "array", "disallowKitchen": "boolean"}',
    outputSchema: '{"storyboardTable": "array", "cameraSpecs": "object"}',
    examplePrompt: '将审定通过的口播文案转为带外拍技术参数的四列视觉分镜表',
    isMemoryMounted: true,
  },
  {
    id: 'local-groupbuy-pricing',
    name: '🌟 团购黄金6品组品与阶梯毛利精算',
    tagline: '1级引流款10%-20%毛利获客法则，精算综合客单与投流保本ROI红线',
    category: 'ecommerce',
    categoryLabel: '毛利精算',
    author: 'local-life-core',
    githubRepo: 'local-life.ai/skills/local-groupbuy-pricing',
    stars: 34100,
    installCount: 102000,
    rating: 5.0,
    version: 'v1.0.0',
    lastUpdated: '官方内置系统级核心',
    toolName: 'calculate_groupbuy_margins',
    directive:
      '启用【local-groupbuy-pricing 团购黄金6品与毛利精算】官方系统技能：搭建阶梯团购货盘矩阵，严格锁定 1 级引流款毛利率 10%~20%，靠到店附加单点实现高综合毛利，精算保本核销率与投流 ROI。',
    description:
      '深度拆解菜单成本，搭建“黄金6品”团购货盘矩阵，严格执行引流款10%-20%低毛利获客法则与利润款阶梯组合，测算保本核销率与投流ROI红线。',
    usageSteps: [
      '输入菜品单价与食材成本。',
      '系统自动生成6级货盘梯队并精算阶梯毛利。',
      '测算投流保本ROI与到店附加利润。',
    ],
    inputSchema: '{"menuItems": "array", "storeCategory": "string"}',
    outputSchema: '{"groupbuyMatrix": "array", "breakEvenRoi": "number"}',
    examplePrompt: '帮我排一个黄金6品团购套餐，精算阶梯毛利率与保本投流ROI',
    isMemoryMounted: true,
  },
  {
    id: 'local-campaign-analytics',
    name: '🌟 种草人群资产监控与投流复盘反哺',
    tagline: '5A人群资产监控，A1潜客满3万人安全阀，展点/点购漏斗归因与素材红黑榜',
    category: 'ad_roi',
    categoryLabel: '投流反哺',
    author: 'local-life-core',
    githubRepo: 'local-life.ai/skills/local-campaign-analytics',
    stars: 26500,
    installCount: 79000,
    rating: 4.8,
    version: 'v1.0.0',
    lastUpdated: '官方内置系统级核心',
    toolName: 'analyze_campaign_and_feedback',
    directive:
      '启用【local-campaign-analytics 投流与人群反哺】官方系统技能：严格执行 A1 潜客满 30,000 人投流安全阀，对曝光-点击-下单-核销漏斗归因，评定素材红黑榜并输出创作者下周反哺建议。',
    description:
      '监控同城A1潜客人群资产蓄水进度，严格执行未满3万人禁投拔草单安全阀，开展展点/点购全链路漏斗归因，评定素材红黑榜并输出下周创作反哺指令。',
    usageSteps: [
      '导入巨量本地推或云图人群资产数据。',
      '系统检测 A1 潜客是否达标并给出投流红绿灯判断。',
      '输出红黑榜素材与下周编导拍摄反哺指令。',
    ],
    inputSchema: '{"a1AudienceCount": "number", "campaignMetrics": "object"}',
    outputSchema: '{"funnelDiagnosis": "object", "feedbackToCreatives": "array"}',
    examplePrompt: '分析上周巨量本地推投放报表，诊断漏斗流失原因并反哺下周拍摄要求',
    isMemoryMounted: true,
  },
  {
    id: 'skill_short_video_script',
    name: '短视频口播脚本爆款生成器',
    tagline: '专为自媒体创作者打造，内置4段式留存结构：前3秒钩子+痛点共鸣+干货交付+结尾引导',
    category: 'script',
    categoryLabel: '口播爆款',
    author: 'codebuddy-marketplace',
    githubRepo: 'codebuddy-skills/short-video-script',
    stars: 32600,
    installCount: 96800,
    rating: 5.0,
    version: 'v1.0.0',
    lastUpdated: '已挂载至AI长期记忆',
    toolName: 'generate_viral_speaking_script',
    directive:
      '严格按照4段式高留存结构输出短视频口播脚本：1.黄金前3秒钩子(颠覆认知/痛点扎心/利益诱惑)；2.痛点放大与情绪共振(3-15s)；3.干货提炼与解法交付(15-45s，3个清晰递进动作点)；4.结尾促互动与引导完播(45-60s引导收藏备用+评论区抛梗)。',
    description:
      '专为自媒体创作者、知识博主与带货新手打造的短视频口播脚本工具。内置前3秒黄金留人钩子、情绪共鸣翻转、干货交付与高完播率结尾结构，已作为核心封装模块永久挂载到整个 AI 的总长期记忆库中。',
    usageSteps: [
      '在首页 AI 工作台输入商品卖点、选题或营销主题。',
      'AI 自动调用【短视频口播脚本爆款生成器】长期记忆模块。',
      '按照 0-3s 钩子、3-15s 痛点、15-45s 干货 3 步法与 45-60s 促完播全流程生成。',
      '直接一键无缝导入分镜精修台与视频混剪成片中心！',
    ],
    inputSchema: '{"topicOrProduct": "string", "targetAudience": "string", "hookType": "subversive|pain_point|benefit"}',
    outputSchema: '{"hook0_3s": "string", "agitation3_15s": "string", "solution15_45s": ["string"], "cta45_60s": "string"}',
    examplePrompt: '帮我写一条「招牌主打特色好物」4段式高留存口播带货脚本',
    avatarUrl: '/skills/short-video-script/assets/avatar.png',
    isMemoryMounted: true,
  },
  {
    id: 'ag_skill_hook3s',
    name: '黄金前3秒爆款冲突钩子',
    tagline: '反常识冲突与完播痛点暴击，确保前3秒完播留存 > 82%',
    category: 'hook',
    categoryLabel: '爆款钩子',
    author: 'kuaipai-labs',
    githubRepo: 'kuaipai-ai/skills/golden-3s-hook',
    stars: 14820,
    installCount: 32600,
    rating: 4.9,
    version: 'v2.4.0',
    lastUpdated: '3天前',
    toolName: 'analyze_golden_3s_hook',
    directive:
      '从输入文本或商品卖点中提取最具反差感的生活矛盾、反常识警示或情绪共鸣，并在0-3秒内生成3组AB测试开场话术与视觉冲击画面。',
    description:
      '专为短视频前3秒留存率优化的核心导演级技能。通过拆解千万点赞短视频的起幅逻辑，自动匹配「认知反差」、「利益诱惑」、「痛点警告」三大爆款钩子模型，从源头解决跳出率过高的问题。',
    usageSteps: [
      '在工作台输入推广商品名或营销意图。',
      'Agent 自动触发该 Skill 提取目标受众第一反应抗拒点。',
      '输出 3 套高完播率开场画面描述与口播首句，支持一键载入分镜卡槽。',
    ],
    inputSchema: '{"productName": "string", "targetAudience": "string", "conflictType": "warning|contrast|benefit"}',
    outputSchema: '{"hooks": [{"headline": "string", "shotPrompt": "string", "retentionRate": "string"}]}',
    examplePrompt: '为这款氨基酸控油洗发水生成前3秒痛点暴击开场',
  },
  {
    id: 'ag_skill_rag_store',
    name: 'RAG 门店知识库直连与利益点提取',
    tagline: '检索当前绑定门店的镇店爆品、地域锚点、主理人人设与团购券',
    category: 'rag_store',
    categoryLabel: '门店RAG',
    author: 'rag-flow-team',
    githubRepo: 'rag-studio/rag-store-memory',
    stars: 9640,
    installCount: 21500,
    rating: 5.0,
    version: 'v3.1.2',
    lastUpdated: '昨天',
    toolName: 'query_rag_store_memory',
    directive:
      '基于当前选择的商户或门店知识库向量索引，精确检索主打招牌、同城地理位置标签、团购券抵扣规则与主理人人设话术，确保输出无违禁词且百分百贴合实体店真实权益。',
    description:
      '让 AI 成为懂实体店生意的本地生活专家。直接打通商户数字资产，自动注入同城地理定位、特色服务流程与限时团购利益点，告别千篇一律的套话。',
    usageSteps: [
      '在左下角或门店中心绑定/切换目标实体门店。',
      '生成脚本或文案时，Agent 自动将知识库条目拼接为专属 Prompt 增强上下文。',
      '一键注入到店路线、核销方式与同城标签。',
    ],
    inputSchema: '{"storeId": "string", "query": "string", "limit": 4}',
    outputSchema: '{"matchedChunks": [{"anchor": "string", "benefit": "string", "persona": "string"}]}',
    examplePrompt: '结合当前绑定的门店画像与知识库，生成同城引流脚本',
  },
  {
    id: 'ag_skill_matrix_storyboard',
    name: '4镜高转化分镜工业化裂变',
    tagline: '按「痛点暴击-产品微距-实测对比-限时促单」生成可执行分镜',
    category: 'script',
    categoryLabel: '分镜脚本',
    author: 'director-open',
    githubRepo: 'kuaipai-ai/skills/matrix-storyboard',
    stars: 11250,
    installCount: 28400,
    rating: 4.9,
    version: 'v2.1.0',
    lastUpdated: '1周前',
    toolName: 'generate_4shot_storyboard',
    directive:
      '严格遵循 4 镜头商业短视频黄金结构（01开场起浪-02产品特写-03硬核对比-04促单转化），同步输出可拍摄的景别运镜参数、画面Prompt及每镜台词。',
    description:
      '影视编导团队沉淀的工业化分镜标准。每个镜头均标注建议时长、景别（特写/微距/中景）、运镜轨迹（推镜/平移/拉镜）及配乐节拍建议，即使拍摄新手也能按图索骥出大片。',
    usageSteps: [
      '点击装载后，工作台生成分镜时默认采用4镜头工业级卡槽。',
      '每个镜头均可单独使用 RAG 刷新或手动微调。',
      '一键推送到 AI 混剪成片台或分镜精修台。',
    ],
    inputSchema: '{"targetProduct": "string", "pacing": "fast|calm", "shotCount": 4}',
    outputSchema: '{"storyboard": [{"shotIndex": 1, "angle": "string", "movement": "string", "line": "string"}]}',
    examplePrompt: '为儿童保温杯设计一套4镜实测带货分镜',
  },
  {
    id: 'ag_skill_seo_copy',
    name: '双端爆款标题与小红书封面大字',
    tagline: '同步输出抖音/小红书高点击标题、封面大字海报文案与热门标签',
    category: 'script',
    categoryLabel: '爆款标题',
    author: 'seo-ninja',
    githubRepo: 'social-growth/viral-cover-titles',
    stars: 8520,
    installCount: 19300,
    rating: 4.8,
    version: 'v1.8.5',
    lastUpdated: '5天前',
    toolName: 'synthesize_viral_cover_titles',
    directive:
      '输出具有极强好奇心缺口（Curiosity Gap）与信息增益的主副标题组合，自动附带小红书高权重 SEO 搜索长尾标签与 emoji 划重点格式。',
    description:
      '算法推流的第一抓手。基于抖音完播算法与小红书双列封面点击率模型，自动生成大字吸睛排版文案，提升综合点击率 40% 以上。',
    usageSteps: [
      '输入内容核心主题。',
      '自动生成 3 组涵盖主标题、副标题与封面标签的预案。',
      '支持一键应用到当前项目的封面预览图上。',
    ],
    inputSchema: '{"theme": "string", "platform": "douyin|xhs|all"}',
    outputSchema: '{"coverPacks": [{"mainTitle": "string", "subTitle": "string", "tags": ["string"]}]}',
    examplePrompt: '为防脱育发精华液生成3个高点击小红书封面大字',
  },
  {
    id: 'ag_skill_ad_roi',
    name: '千川投流 ROI 诊断与留存率预估',
    tagline: '预估短视频5秒完播率、千川点击率与高转化人群画像匹配度',
    category: 'ad_roi',
    categoryLabel: '投流ROI',
    author: 'ad-matrix',
    githubRepo: 'kuaipai-ai/skills/qianchuan-ad-roi',
    stars: 7930,
    installCount: 14200,
    rating: 4.7,
    version: 'v1.5.0',
    lastUpdated: '2周前',
    toolName: 'diagnose_qianchuan_ad_roi',
    directive:
      '根据视频台词密集度、产品出现时间节点与行动召唤力，计算投流投放潜力指数，并指出前3秒与末尾促单的扣分项。',
    description:
      '付费投放操盘手必备工具。在正式烧流之前，对脚本进行投放基因诊断，给出 5 秒完播预测分与精准千川投放建议。',
    usageSteps: [
      '在工作台生成脚本后，一键点击「投流诊断」。',
      '系统返回 ROI 预测、核心受众画像标签与出价建议。',
    ],
    inputSchema: '{"scriptLines": ["string"], "productPrice": number}',
    outputSchema: '{"estimatedRoi": "string", "retention5s": "string", "suggestions": ["string"]}',
    examplePrompt: '诊断这段客单价299元的美白套盒脚本投放转化率',
  },
  {
    id: 'ag_skill_local_groupbuy',
    name: '同城团购核销逼单与到店指引',
    tagline: '生成直击同城附近5公里消费者的团购优惠口播与左下角锚点',
    category: 'rag_store',
    categoryLabel: '同城团购',
    author: 'local-king',
    githubRepo: 'douyin-local/groupbuy-hook',
    stars: 12400,
    installCount: 25100,
    rating: 4.9,
    version: 'v2.2.1',
    lastUpdated: '4天前',
    toolName: 'generate_local_groupbuy_hook',
    directive:
      '针对餐饮美食、美容美发、休闲娱乐等本地商户，强化「同城专属福利」、「免预约特权」、「限量库存」等逼单话术。',
    description:
      '同城代运营机构与实体店老板的最爱。深度适配抖音来客与美团团购，每一句口播都为引导点击左下角商品卡而设计。',
    usageSteps: [
      '绑定实体商铺与主推团购套餐。',
      '生成脚本尾镜时自动插入同城地址与团购核销促单引导。',
    ],
    inputSchema: '{"cityName": "string", "dealTitle": "string", "originalPrice": number, "dealPrice": number}',
    outputSchema: '{"callToAction": "string", "anchorPrompt": "string"}',
    examplePrompt: '为杭州武林商圈双人烤肉套餐生成促单文案',
  },
  {
    id: 'ag_skill_multilang_voice',
    name: '方言与多国语言配音情感注入',
    tagline: '支持粤语/四川话/东北话等方言及英日泰跨境出海情感口播',
    category: 'tts_avatar',
    categoryLabel: '配音数字人',
    author: 'voice-matrix',
    githubRepo: 'kuaipai-ai/skills/multilang-voice',
    stars: 6890,
    installCount: 11400,
    rating: 4.8,
    version: 'v1.4.2',
    lastUpdated: '1周前',
    toolName: 'synthesize_dialect_voiceover',
    directive:
      '为台词添加方言口语化润色标记（如倒装句、语气词），并输出适配各语种音色与停顿节奏的标记文本。',
    description:
      '让短视频更接地气、更具本地亲和力。支持国内各省特色方言润色及跨境电商外语口播，让配音自然生动，拒绝机械感。',
    usageSteps: [
      '在工作台选择目标语言或方言。',
      'Skill 自动重写台词中的口语连接词与语气词。',
      '一键同步至合成播放器进行多音色试听。',
    ],
    inputSchema: '{"rawText": "string", "dialect": "cantonese|sichuan|dongbei|english"}',
    outputSchema: '{"polishedText": "string", "audioMarkers": ["string"]}',
    examplePrompt: '将这段火锅店文案转化为四川话亲切口播风格',
  },
  {
    id: 'ag_skill_painpoint_contrast',
    name: '前后反差对比分镜视觉合成',
    tagline: '生成直观的痛点痛哭与使用后惊艳反差分镜方案',
    category: 'hook',
    categoryLabel: '痛点对比',
    author: 'contrast-lab',
    githubRepo: 'visual-lab/painpoint-contrast',
    stars: 10180,
    installCount: 23200,
    rating: 4.9,
    version: 'v2.0.4',
    lastUpdated: '6天前',
    toolName: 'synthesize_painpoint_contrast_scene',
    directive:
      '以分屏对比或前后滑变形式呈现「使用前糟糕状况」与「使用后理想蜕变」，迅速激发用户购买冲动。',
    description:
      '带货转化率提升王牌。尤其适合美妆护肤、清洁日化、数码收纳等品类，用无可辩驳的直观视觉对比击穿用户防线。',
    usageSteps: [
      '输入产品核心解决的问题（如头油、黑头、房间杂乱）。',
      '自动生成标准 Before / After 分屏拍摄机位指导。',
    ],
    inputSchema: '{"problem": "string", "solution": "string"}',
    outputSchema: '{"beforeShot": "string", "afterShot": "string", "contrastScript": "string"}',
    examplePrompt: '设计洗发水使用前后发根蓬松度对比分镜',
  },
  {
    id: 'ag_skill_ecommerce_poster',
    name: '电商商拍主图与卖点排版套图',
    tagline: '一键规划 01商拍主图 + 02卖点对比 + 03场景代入 + 04细节特写',
    category: 'ecommerce',
    categoryLabel: '电商主图',
    author: 'ecommerce-suite',
    githubRepo: 'kuaipai-ai/skills/ecommerce-poster-suite',
    stars: 9340,
    installCount: 17800,
    rating: 4.9,
    version: 'v2.2.0',
    lastUpdated: '3天前',
    toolName: 'generate_ecommerce_poster_matrix',
    directive:
      '根据商品图片与卖点规划四张不同职能的高清排版套图方案，涵盖主图大字、成分参数及场景氛围。',
    description:
      '火兔工具箱同款电商美工神器。几秒内完成一套符合天猫、抖音商城、小红书商铺规范的四宫格视觉物料。',
    usageSteps: [
      '输入商品名称与卖点。',
      'Skill 自动生成四张海报的排版文案与色彩方案。',
      '一键进入电商套图 Pro 工作台进行实时微调与导出。',
    ],
    inputSchema: '{"productName": "string", "bullets": ["string"], "aspectRatio": "3:4|1:1"}',
    outputSchema: '{"posters": [{"type": "string", "title": "string", "subtitle": "string"}]}',
    examplePrompt: '为挂耳咖啡生成一套四张电商详情主图',
  },
  {
    id: 'ag_skill_xhs_tag_miner',
    name: '小红书 SEO 长尾热搜词智能挖掘',
    tagline: '挖掘当周搜索量飙升长尾词，提升笔记自然搜索流量与收录率',
    category: 'script',
    categoryLabel: '小红书SEO',
    author: 'growth-hacker',
    githubRepo: 'seo-studio/xhs-tag-miner',
    stars: 8120,
    installCount: 15600,
    rating: 4.8,
    version: 'v1.6.0',
    lastUpdated: '1周前',
    toolName: 'mine_xhs_seo_tags',
    directive:
      '分析小红书同品类近期搜索蓝海词，输出 5-8 个高转化率标签，并融入正文前两句中以提升搜索抓取权重。',
    description:
      '让小红书笔记不仅有即时流量，更能持续吃到半年的长尾搜索流量。智能规避大词红海竞争，精准锁定意向买家。',
    usageSteps: [
      '输入笔记品类与核心关键词。',
      '自动匹配高转化长尾标签并插入文案末尾。',
    ],
    inputSchema: '{"category": "string", "keyword": "string"}',
    outputSchema: '{"seoTags": ["string"], "recommendedKeywords": ["string"]}',
    examplePrompt: '挖掘2026年夏季控油散粉的小红书搜索长尾词',
  },
];

interface SkillHubMarketplaceModalProps {
  isOpen: boolean;
  onClose: () => void;
  mountedSkillIds: string[];
  onToggleMountSkill: (skillId: string) => void;
  onMountMultipleSkills?: (skillIds: string[]) => void;
  onNotice: (type: 'success' | 'error', msg: string) => void;
  activeStore: StoreMemoryProfile;
}

export const SkillHubMarketplaceModal: React.FC<SkillHubMarketplaceModalProps> = ({
  isOpen,
  onClose,
  mountedSkillIds,
  onToggleMountSkill,
  onNotice,
  activeStore,
}) => {
  const [activeTab, setActiveTab] = useState<'marketplace' | 'mounted' | 'starred' | 'custom'>('marketplace');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [sortBy, setSortBy] = useState<'installs' | 'rating' | 'stars' | 'updated'>('installs');

  // Detail Modal state
  const [inspectingSkill, setInspectingSkill] = useState<MarketSkill | null>(null);

  // Starred skills list
  const [starredSkillIds, setStarredSkillIds] = useState<string[]>(['ag_skill_hook3s', 'ag_skill_rag_store']);

  // Custom skills uploaded by user
  const [allMarketSkills, setAllMarketSkills] = useState<MarketSkill[]>(BUILT_IN_MARKET_SKILLS);

  // Custom Import form state
  const [importRepoUrl, setImportRepoUrl] = useState('');
  const [importSkillName, setImportSkillName] = useState('');
  const [importDirective, setImportDirective] = useState('');
  const [importCategory, setImportCategory] = useState<MarketSkill['category']>('hook');

  const categories = [
    { id: 'ALL', label: '全部技能' },
    { id: 'hook', label: '爆款钩子' },
    { id: 'script', label: '分镜脚本' },
    { id: 'rag_store', label: '门店RAG' },
    { id: 'ecommerce', label: '电商主图' },
    { id: 'tts_avatar', label: '配音数字人' },
    { id: 'ad_roi', label: '投流ROI' },
  ];

  // Filtering & Sorting
  const filteredSkills = useMemo(() => {
    let list = [...allMarketSkills];

    if (activeTab === 'mounted') {
      list = list.filter((s) => mountedSkillIds.includes(s.id));
    } else if (activeTab === 'starred') {
      list = list.filter((s) => starredSkillIds.includes(s.id));
    }

    if (selectedCategory !== 'ALL') {
      list = list.filter((s) => s.category === selectedCategory);
    }

    if (searchKeyword.trim()) {
      const q = searchKeyword.toLowerCase().trim();
      list = list.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.tagline.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.author.toLowerCase().includes(q) ||
          s.githubRepo.toLowerCase().includes(q)
      );
    }

    list.sort((a, b) => {
      if (sortBy === 'installs') return b.installCount - a.installCount;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'stars') return b.stars - a.stars;
      return 0;
    });

    return list;
  }, [allMarketSkills, activeTab, selectedCategory, searchKeyword, sortBy, mountedSkillIds, starredSkillIds]);

  const handleToggleStar = (skillId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setStarredSkillIds((prev) =>
      prev.includes(skillId) ? prev.filter((id) => id !== skillId) : [...prev, skillId]
    );
  };

  const handleCustomImport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!importSkillName.trim() || !importDirective.trim()) {
      onNotice('error', '请填写技能名称与核心指令定义！');
      return;
    }

    const cleanAuthor = importRepoUrl.includes('github.com/')
      ? importRepoUrl.split('github.com/')[1].split('/')[0]
      : 'custom-dev';
    const cleanRepo = importRepoUrl.replace('https://github.com/', '') || `custom/${Date.now()}`;

    const newSkill: MarketSkill = {
      id: `custom_skill_${Date.now()}`,
      name: importSkillName.trim(),
      tagline: importDirective.trim().slice(0, 36),
      category: importCategory,
      categoryLabel: categories.find((c) => c.id === importCategory)?.label || '自定义',
      author: cleanAuthor,
      githubRepo: cleanRepo,
      stars: 1,
      installCount: 1,
      rating: 5.0,
      version: 'v1.0.0',
      lastUpdated: '刚刚',
      toolName: `custom_tool_${Date.now()}`,
      directive: importDirective.trim(),
      description: `用户自定义导入的 Skill 扩展：${importDirective.trim()}`,
      usageSteps: ['点击一键装载即可挂载至当前 AI 工作台 Agent 中作为自主决策技能。'],
      inputSchema: '{"input": "string"}',
      outputSchema: '{"result": "string"}',
      examplePrompt: `执行自定义技能：${importSkillName.trim()}`,
      isCustom: true,
    };

    setAllMarketSkills((prev) => [newSkill, ...prev]);
    onToggleMountSkill(newSkill.id);
    onNotice('success', `成功从 GitHub 导入并装载「${newSkill.name}」！`);

    // Reset Form & Switch to Mounted Tab
    setImportSkillName('');
    setImportDirective('');
    setImportRepoUrl('');
    setActiveTab('mounted');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/60 animate-fade-in">
      <div className="relative flex flex-col w-full max-w-5xl h-[88vh] max-h-[820px] rounded-3xl bg-white border border-sky-200/80 shadow-2xl overflow-hidden">
        {/* Top Header: SkillHub / GitHub plaza banner */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-slate-100 bg-white">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 text-white">
              <Boxes className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold text-slate-900">Skill 技能广场 · SkillHub / GitHub 直连</h2>
                <span className="inline-flex items-center gap-1 rounded-full bg-indigo-100/90 px-2 py-0.5 text-[10px] font-semibold text-indigo-700">
                  <Github className="h-3 w-3" />
                  <span>开源生态</span>
                </span>
                <span className="rounded-full bg-emerald-100/90 px-2 py-0.5 text-[10px] font-semibold text-emerald-800">
                  已装载 {mountedSkillIds.length} 项
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                浏览海量专业编导与带货 Skills，点击即可查看详情或一键装载到工作台 AI Agent
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors cursor-pointer"
              title="关闭技能广场"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Tab Switcher & Search/Filter Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-3 border-b border-slate-100 bg-white">
          {/* Main Tabs */}
          <div className="inline-flex items-center rounded-xl bg-slate-100/90 p-1 text-xs">
            <button
              type="button"
              onClick={() => setActiveTab('marketplace')}
              className={`rounded-lg px-3.5 py-1.5 font-semibold transition-all cursor-pointer ${
                activeTab === 'marketplace'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Skill 广场浏览
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('mounted')}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 font-semibold transition-all cursor-pointer ${
                activeTab === 'mounted'
                  ? 'bg-white text-indigo-600 shadow-2xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <span>已装载技能</span>
              <span className="rounded-full bg-indigo-100 px-1.5 py-0.2 text-[10px] font-bold text-indigo-700">
                {mountedSkillIds.length}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('starred')}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 font-semibold transition-all cursor-pointer ${
                activeTab === 'starred'
                  ? 'bg-white text-amber-600 shadow-2xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <Bookmark className="h-3.5 w-3.5" />
              <span>我的收藏</span>
              <span className="text-[10px] text-slate-400">({starredSkillIds.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('custom')}
              className={`inline-flex items-center gap-1 rounded-lg px-3.5 py-1.5 font-semibold transition-all cursor-pointer ${
                activeTab === 'custom'
                  ? 'bg-white text-purple-600 shadow-2xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <Plus className="h-3.5 w-3.5" />
              <span>自定义上传</span>
            </button>
          </div>

          {/* Search Input & Sort Dropdown */}
          {activeTab !== 'custom' && (
            <div className="flex flex-wrap items-center gap-2 flex-1 sm:flex-initial justify-end">
              <div className="relative min-w-[200px]">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  placeholder="搜索 Skill 名称、作者、指令关键词..."
                  className="h-8 w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-8 pr-3 text-xs text-slate-800 placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-none"
                />
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'installs' | 'rating' | 'stars')}
                className="h-8 rounded-xl border border-slate-200 bg-slate-50/70 px-2.5 text-xs text-slate-700 focus:outline-none cursor-pointer"
              >
                <option value="installs">🔥 按装载量排序</option>
                <option value="rating">★ 按评分排序</option>
                <option value="stars">⭐ 按 GitHub Star 排序</option>
              </select>
            </div>
          )}
        </div>

        {/* Category Filter Chips Bar (only when in marketplace/mounted/starred) */}
        {activeTab !== 'custom' && (
          <div className="flex items-center gap-1.5 overflow-x-auto px-6 py-2.5 border-b border-slate-100 bg-slate-50/50 text-xs">
            <span className="text-slate-400 text-[11px] shrink-0 mr-1 flex items-center gap-1">
              <Filter className="h-3 w-3" />
              <span>分类筛选：</span>
            </span>
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                    active
                      ? 'bg-indigo-600 text-white font-semibold shadow-2xs'
                      : 'border border-slate-200/80 bg-white text-slate-600 hover:border-indigo-200 hover:text-indigo-600'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Main Body Area */}
        <div className="flex-1 overflow-y-auto p-6 bg-slate-50/30">
          {/* TAB 1, 2, 3: Grid of Skills */}
          {activeTab !== 'custom' && (
            <div>
              {filteredSkills.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <Boxes className="h-12 w-12 text-slate-300 mb-3" />
                  <p className="text-sm font-semibold text-slate-800">未找到符合条件的 Skill</p>
                  <p className="text-xs text-slate-500 mt-1">
                    您可以尝试重置筛选词，或前往「自定义上传」导入您自己的 GitHub Skill。
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchKeyword('');
                      setSelectedCategory('ALL');
                    }}
                    className="mt-4 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-700 cursor-pointer"
                  >
                    重置筛选条件
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredSkills.map((skill) => {
                    const isMounted = mountedSkillIds.includes(skill.id);
                    const isStarred = starredSkillIds.includes(skill.id);

                    return (
                      <div
                        key={skill.id}
                        onClick={() => setInspectingSkill(skill)}
                        className={`group relative flex flex-col justify-between rounded-2xl border p-4.5 bg-white transition-all hover:shadow-md hover:-translate-y-0.5 cursor-pointer ${
                          isMounted
                            ? 'border-indigo-500/80 shadow-indigo-100 ring-1 ring-indigo-500/30'
                            : 'border-slate-200/90 hover:border-sky-300'
                        }`}
                      >
                        {/* Top: Header with category badge & star toggle */}
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <span className="rounded-md bg-sky-50 px-2 py-0.5 text-[10px] font-semibold text-[#24568d] border border-sky-100">
                              {skill.categoryLabel}
                            </span>

                            <div className="flex items-center gap-1.5">
                              <span className="font-mono text-[10px] text-slate-400">
                                {skill.version}
                              </span>
                              <button
                                type="button"
                                onClick={(e) => handleToggleStar(skill.id, e)}
                                className={`flex h-6 w-6 items-center justify-center rounded-full transition-colors cursor-pointer ${
                                  isStarred
                                    ? 'text-amber-500 bg-amber-50'
                                    : 'text-slate-400 hover:text-amber-500 hover:bg-slate-50'
                                }`}
                                title={isStarred ? '取消收藏' : '收藏此 Skill'}
                              >
                                <Star className={`h-3.5 w-3.5 ${isStarred ? 'fill-amber-400' : ''}`} />
                              </button>
                            </div>
                          </div>

                          <div className="flex items-center gap-2.5 mt-2">
                            {skill.avatarUrl ? (
                              <img
                                src={skill.avatarUrl}
                                alt={skill.name}
                                className="h-8 w-8 rounded-lg object-cover border border-indigo-200/80 shrink-0 shadow-2xs"
                              />
                            ) : (
                              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 shrink-0 border border-indigo-100">
                                <Sparkles className="h-4 w-4" />
                              </div>
                            )}
                            <div className="min-w-0 flex-1">
                              <h3 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors truncate">
                                {skill.name}
                              </h3>
                            </div>
                          </div>

                          {skill.isMemoryMounted && (
                            <div className="mt-1.5 inline-flex items-center gap-1 rounded-md bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-800 border border-amber-200">
                              <Sparkles className="h-3 w-3 text-amber-600" />
                              <span>★ 长期记忆库核心挂载</span>
                            </div>
                          )}

                          <p className="mt-1 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                            {skill.tagline}
                          </p>

                          {/* GitHub Repo info & Metrics */}
                          <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-100 pt-2.5">
                            <span className="flex items-center gap-1 truncate max-w-[130px]">
                              <Github className="h-3 w-3 shrink-0" />
                              <span className="truncate">@{skill.author}</span>
                            </span>

                            <div className="flex items-center gap-2 font-mono">
                              <span className="flex items-center gap-0.5 text-amber-600">
                                <Star className="h-2.5 w-2.5 fill-amber-500" />
                                <span>{(skill.stars / 1000).toFixed(1)}k</span>
                              </span>
                              <span className="text-slate-400">·</span>
                              <span className="text-slate-600">
                                {(skill.installCount / 1000).toFixed(1)}k装载
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Bottom Action Bar */}
                        <div className="mt-3.5 flex items-center justify-between gap-2 border-t border-slate-100 pt-3">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setInspectingSkill(skill);
                            }}
                            className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-indigo-600 cursor-pointer"
                          >
                            <BookOpen className="h-3.5 w-3.5" />
                            <span>功能说明</span>
                          </button>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onToggleMountSkill(skill.id);
                              onNotice(
                                isMounted ? 'error' : 'success',
                                isMounted
                                  ? `已从工作台 Agent 卸载「${skill.name}」`
                                  : `✓ 已一键装载「${skill.name}」到工作台 Agent！`
                              );
                            }}
                            className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                              isMounted
                                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-rose-50 hover:text-rose-700 hover:border-rose-200'
                                : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-2xs'
                            }`}
                          >
                            {isMounted ? (
                              <>
                                <Check className="h-3.5 w-3.5" />
                                <span>已装载 · 点击卸载</span>
                              </>
                            ) : (
                              <>
                                <Download className="h-3.5 w-3.5" />
                                <span>一键装载</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* TAB 4: Custom Upload / Import from GitHub */}
          {activeTab === 'custom' && (
            <div className="max-w-2xl mx-auto rounded-3xl border border-sky-200/80 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-50 text-purple-600 border border-purple-200">
                  <Github className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">自定义导入 GitHub Skill 或输入指令</h3>
                  <p className="text-xs text-slate-500">
                    无需手动繁琐配置，贴入 GitHub 仓库地址或核心 Prompt 指令即可自动封装为可挂载技能
                  </p>
                </div>
              </div>

              <form onSubmit={handleCustomImport} className="mt-5 space-y-4 text-xs">
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    GitHub 仓库链接或来源标识（可选）
                  </label>
                  <input
                    type="text"
                    value={importRepoUrl}
                    onChange={(e) => setImportRepoUrl(e.target.value)}
                    placeholder="https://github.com/my-org/custom-hook-skill 或输入作者标识..."
                    className="h-9 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3 text-xs text-slate-800 focus:border-indigo-500 focus:bg-white focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Skill 技能名称 <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={importSkillName}
                      onChange={(e) => setImportSkillName(e.target.value)}
                      placeholder="如：同城探店爆款转场 Skill"
                      className="h-9 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3 text-xs text-slate-800 focus:border-indigo-500 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      应用分类
                    </label>
                    <select
                      value={importCategory}
                      onChange={(e) =>
                        setImportCategory(
                          e.target.value as 'hook' | 'script' | 'rag_store' | 'ecommerce' | 'tts_avatar'
                        )
                      }
                      className="h-9 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3 text-xs text-slate-800 focus:border-indigo-500 focus:bg-white focus:outline-none cursor-pointer"
                    >
                      <option value="hook">爆款钩子</option>
                      <option value="script">分镜脚本</option>
                      <option value="rag_store">门店RAG</option>
                      <option value="ecommerce">电商主图</option>
                      <option value="tts_avatar">配音数字人</option>
                      <option value="ad_roi">投流ROI</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Skill 核心执行指令与规则 (Directive) <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={importDirective}
                    onChange={(e) => setImportDirective(e.target.value)}
                    placeholder="定义 Agent 调用该 Skill 时必须严格遵守的创作规则、输出格式或校验阈值..."
                    className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-xs leading-relaxed text-slate-800 focus:border-indigo-500 focus:bg-white focus:outline-none min-h-[96px]"
                  />
                  <p className="text-[11px] text-slate-400 mt-1">
                    支持自由调整大小。保存后将自动挂载至工作台 Agent，无需每次手动重新输入。
                  </p>
                </div>

                <div className="pt-2 flex justify-end gap-2.5">
                  <button
                    type="button"
                    onClick={() => setActiveTab('marketplace')}
                    className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer"
                  >
                    取消
                  </button>
                  <button
                    type="submit"
                    className="rounded-xl bg-indigo-600 px-5 py-2 text-xs font-semibold text-white hover:bg-indigo-700 shadow-sm cursor-pointer"
                  >
                    立即导入并装载到工作台
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-3 border-t border-slate-100 bg-white text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span>所有 Skill 均通过沙箱安全检测，自动与当前门店「{activeStore.storeName}」RAG 知识库隔离</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-slate-400">已装载 {mountedSkillIds.length} 个技能</span>
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl bg-[#3572b0] px-4 py-1.5 text-xs font-semibold text-white hover:bg-[#285d94] cursor-pointer"
            >
              完成并返回工作台
            </button>
          </div>
        </div>
      </div>

      {/* Detail Pop-up Modal when clicking a Skill card */}
      {inspectingSkill && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-slate-950/70 animate-fade-in">
          <div className="relative flex flex-col w-full max-w-2xl max-h-[90vh] rounded-3xl bg-white border border-sky-200/90 shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-3 p-5 sm:p-6 border-b border-slate-100 bg-white">
              <div className="flex items-center gap-3">
                {inspectingSkill.avatarUrl ? (
                  <img
                    src={inspectingSkill.avatarUrl}
                    alt={inspectingSkill.name}
                    className="h-12 w-12 rounded-2xl object-cover border border-indigo-200 shadow-sm shrink-0"
                  />
                ) : (
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 text-white font-bold text-base shadow-sm">
                    <Terminal className="h-6 w-6" />
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-slate-900">{inspectingSkill.name}</h3>
                    <span className="rounded bg-sky-100 px-2 py-0.5 text-[10px] font-semibold text-sky-800">
                      {inspectingSkill.categoryLabel}
                    </span>
                    {inspectingSkill.isMemoryMounted && (
                      <span className="rounded-md bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-900 border border-amber-200">
                        ★ 长期记忆库核心挂载
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                    <span className="font-mono">@{inspectingSkill.author}</span>
                    <span>·</span>
                    <span className="font-mono text-amber-600">★ {inspectingSkill.rating}</span>
                    <span>·</span>
                    <span>{inspectingSkill.installCount.toLocaleString()} 次装载</span>
                    <span>·</span>
                    <span>{inspectingSkill.lastUpdated}</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setInspectingSkill(null)}
                className="flex h-8 w-8 items-center justify-center rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Scroll Content */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4 text-xs">
              {/* Description */}
              <div>
                <h4 className="text-xs font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
                  <span>功能介绍与应用场景</span>
                </h4>
                <p className="text-slate-600 leading-relaxed bg-slate-50/70 p-3 rounded-xl border border-slate-100">
                  {inspectingSkill.description}
                </p>
              </div>

              {/* Usage steps */}
              <div>
                <h4 className="text-xs font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                  <BookOpen className="h-3.5 w-3.5 text-sky-600" />
                  <span>使用流程与操作示范</span>
                </h4>
                <ol className="space-y-1.5 list-decimal list-inside text-slate-600 bg-sky-50/30 p-3 rounded-xl border border-sky-100">
                  {inspectingSkill.usageSteps.map((step, i) => (
                    <li key={i} className="leading-relaxed">
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Directive Definition (ReadOnly) */}
              <div>
                <h4 className="text-xs font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                  <FileCode className="h-3.5 w-3.5 text-purple-600" />
                  <span>核心指令与执行协议 (Directive Schema)</span>
                </h4>
                <div className="rounded-xl border border-slate-200 bg-slate-900 p-3 text-slate-200 font-mono text-[11px] leading-relaxed overflow-x-auto">
                  <code>{inspectingSkill.directive}</code>
                </div>
              </div>

              {/* GitHub Link */}
              <div className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-white">
                <div className="flex items-center gap-2">
                  <Github className="h-4 w-4 text-slate-700" />
                  <span className="font-mono text-slate-700 truncate">{inspectingSkill.githubRepo}</span>
                </div>
                <span className="rounded bg-slate-100 px-2 py-0.5 font-mono text-[10px] text-slate-600">
                  ★ {inspectingSkill.stars.toLocaleString()} Stars
                </span>
              </div>
            </div>

            {/* Modal Bottom Action Bar */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-t border-slate-100 bg-slate-50/50">
              <button
                type="button"
                onClick={() => setInspectingSkill(null)}
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer"
              >
                关闭
              </button>

              <button
                type="button"
                onClick={() => {
                  const wasMounted = mountedSkillIds.includes(inspectingSkill.id);
                  onToggleMountSkill(inspectingSkill.id);
                  onNotice(
                    wasMounted ? 'error' : 'success',
                    wasMounted
                      ? `已从工作台 Agent 卸载「${inspectingSkill.name}」`
                      : `✓ 已一键装载「${inspectingSkill.name}」到工作台 Agent！`
                  );
                }}
                className={`inline-flex items-center gap-1.5 rounded-xl px-5 py-2 text-xs font-bold transition-all cursor-pointer ${
                  mountedSkillIds.includes(inspectingSkill.id)
                    ? 'bg-rose-50 text-rose-600 border border-rose-200 hover:bg-rose-100'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm'
                }`}
              >
                {mountedSkillIds.includes(inspectingSkill.id) ? (
                  <>
                    <Trash2 className="h-3.5 w-3.5" />
                    <span>从工作台卸载该技能</span>
                  </>
                ) : (
                  <>
                    <Download className="h-3.5 w-3.5" />
                    <span>一键装载到工作台 Agent</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
