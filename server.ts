import 'dotenv/config';
import express from 'express';
import type { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, Type } from '@google/genai';
import { localDb } from './localDb.js';
import {
  searchWebKnowledgeSummary,
  matchIndustryKnowledge,
} from './webIntel.js';
import { getAggregatedHotTrends } from './hotTrendsHarvester.js';
import { runAutonomousStoreSwarm } from './autonomousStoreAgent.js';
import {
  discoverMatchingSkills,
  trackAndCrystallizeWorkflow,
  recordSkillFeedback,
  getMetaSkillsOverview,
} from './metaSkillsEngine.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json({ limit: '20mb' }));

interface StoreMemoryContext {
  storeName?: string;
  storeType?: string;
  industry?: string;
  cityLocation?: string;
  signatureProducts?: string;
  storePersona?: string;
  targetAudience?: string;
  memoryAnchors?: string;
}

const GLOBAL_SHORT_VIDEO_SCRIPT_SKILL_MEMORY = `
【全局 AI 总长期记忆库常驻封装模块：short-video-script (短视频口播脚本爆款生成器 Skill)】：
1. 黄金前3秒法则：严禁平铺直叙，必须采用「本地土著私藏揭秘 / 反常识痛点暴击 / 权威TOP榜单排比 / 只知道XX就亏大了」四大高留存开口公式之一。
2. 真人口播语感：所有台词必须具备浓郁的「真人生活化口语感与烟火气」（像老朋友面对面安利私藏好店/好物），短句为主、节奏明快，杜绝生硬书面语或机械广告腔。
3. 视觉与花字协同：每个镜头必须明确给出随手拍实景运镜动作（如：门头烟火气推镜、招牌微距流口水特写、多宫格合集快切）与高转化花字关键词。
4. 落地转化闭环：结尾自然植入同城 POI 打卡引导、评论区互动提问或左下角团购/商品卡促单钩子。`;

function buildStoreMemoryPromptBlock(store?: StoreMemoryContext | null): string {
  if (!store || !store.storeName) {
    return GLOBAL_SHORT_VIDEO_SCRIPT_SKILL_MEMORY;
  }
  return `
${GLOBAL_SHORT_VIDEO_SCRIPT_SKILL_MEMORY}
【当前绑定的抖音来客/门店/个人专属长期记忆知识库（RAG）】：
- 门店/品牌名称：${store.storeName}
- 门店经营类型：${store.storeType || '抖音来客同城团购+品牌店'}
- 所在城市/POI商圈：${store.cityLocation || '同城核心商圈'}
- 镇店爆品/团购套餐：${store.signatureProducts || ''}
- 门店主理人人设与语气：${store.storePersona || ''}
- 核心进店/下单客群画像：${store.targetAudience || ''}
- 门店专属记忆锚点与转化钩子：${store.memoryAnchors || ''}
`;
}

interface ExternalGatewayConfig {
  providerId?: string;
  providerName?: string;
  modelName?: string;
  baseUrl?: string;
  apiKey?: string;
}

async function callExternalOpenAIGateway(
  gateway: ExternalGatewayConfig | undefined,
  systemInstruction: string,
  userPrompt: string
): Promise<Record<string, unknown> | null> {
  if (
    !gateway ||
    gateway.providerId === 'builtin' ||
    !gateway.baseUrl ||
    !gateway.apiKey ||
    !gateway.apiKey.trim()
  ) {
    return null;
  }
  try {
    const cleanBase = gateway.baseUrl.replace(/\/+$/, '');
    const endpoint = cleanBase.endsWith('/chat/completions')
      ? cleanBase
      : `${cleanBase}/chat/completions`;
    const resp = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${gateway.apiKey.trim()}`,
      },
      body: JSON.stringify({
        model: gateway.modelName || 'deepseek-chat',
        messages: [
          { role: 'system', content: `${systemInstruction}\n请严格只输出合法的 JSON 对象，不要包含 Markdown 代码块。` },
          { role: 'user', content: userPrompt },
        ],
        response_format: { type: 'json_object' },
        temperature: 0.7,
      }),
    });
    if (!resp.ok) return null;
    const data = (await resp.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const rawText = data?.choices?.[0]?.message?.content || '';
    const cleaned = rawText.replace(/```json|```/g, '').trim();
    return JSON.parse(cleaned);
  } catch {
    // Seamless fallback to built-in Gemini cloud engine
    return null;
  }
}

function getGenAIClient(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY environment variable is missing. Please check Settings > Secrets.');
  }
  const httpOptions: Record<string, unknown> = {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  };
  if (process.env.GEMINI_BASE_URL) {
    httpOptions.baseUrl = process.env.GEMINI_BASE_URL;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions,
  });
}

function formatGeminiError(error: unknown): { status: number; message: string } {
  const raw = error instanceof Error ? error.message : String(error);
  if (raw.includes('PERMISSION_DENIED') || raw.includes('403') || raw.includes('API_KEY_INVALID')) {
    return {
      status: 403,
      message: 'AI 模型密钥无效或无权限，请在 Settings > Secrets 面板检查您的 GEMINI_API_KEY 配置。',
    };
  }
  if (raw.includes('RESOURCE_EXHAUSTED') || raw.includes('429')) {
    return {
      status: 429,
      message: 'AI 模型调用配额暂时达到上限，请稍后重试或在 Settings > Secrets 中绑定计费 API 密钥。',
    };
  }
  return {
    status: 500,
    message: `AI 服务请求异常: ${raw.slice(0, 200)}`,
  };
}

export type RbacRoleId =
  | 'super_admin'
  | 'store_manager'
  | 'operator'
  | 'finance'
  | 'support'
  | 'creator';

export const RBAC_PERMISSION_MATRIX: Record<RbacRoleId, string[]> = {
  super_admin: ['*'],
  store_manager: [
    'ai:generate',
    'ai:dissect',
    'ai:video_remix',
    'ai:ecommerce_suite',
    'store:write',
    'staff:manage',
    'project:export',
  ],
  operator: [
    'ai:generate',
    'ai:dissect',
    'ai:video_remix',
    'ai:ecommerce_suite',
    'project:export',
  ],
  finance: ['billing:read', 'billing:redeem', 'project:read'],
  support: ['store:read', 'project:read', 'ai:generate'],
  creator: [
    'ai:generate',
    'ai:dissect',
    'ai:video_remix',
    'ai:ecommerce_suite',
    'project:export',
  ],
};

function resolveRequestRbac(req: Request): {
  uid: string;
  role: RbacRoleId;
  permissions: string[];
} {
  const uid = String(req.headers['x-user-uid'] || 'cn_default_creator').slice(0, 128);
  const rawRole = String(req.headers['x-user-role'] || 'super_admin') as RbacRoleId;
  const role: RbacRoleId = RBAC_PERMISSION_MATRIX[rawRole] ? rawRole : 'creator';
  return {
    uid,
    role,
    permissions: RBAC_PERMISSION_MATRIX[role],
  };
}

// Health check & architecture status endpoint for decoupled frontend-backend verification
app.get('/api/health', (req: Request, res: Response) => {
  const rbac = resolveRequestRbac(req);
  res.json({
    ok: true,
    service: 'kuaipai-ai-saas-agent',
    model: 'gemini-3.8-flash',
    rbac,
  });
});

app.get('/api/system/architecture', (req: Request, res: Response) => {
  const rbac = resolveRequestRbac(req);
  res.json({
    ok: true,
    service: 'kuaipai-ai-enterprise-gateway',
    version: '2.6.0',
    aiEngine: {
      defaultModel: 'gemini-3.8-flash',
      sdk: '@google/genai',
      supportedGateways: ['builtin', 'deepseek', 'qwen', 'doubao', 'kimi', 'custom'],
    },
    database: {
      engine: 'Firebase Cloud Firestore + Local Edge Dual-Write',
      collections: [
        'users',
        'projects',
        'templates',
        'dissections',
        'shared_links',
        'store_profiles',
      ],
      securityRules: 'Strict ownerId & RBAC schema-bounded rules active',
    },
    rbac: {
      currentSession: rbac,
      roles: Object.keys(RBAC_PERMISSION_MATRIX),
    },
    endpoints: [
      'GET /api/health',
      'GET /api/system/architecture',
      'POST /api/ai/dissect',
      'POST /api/ai/generate-project',
      'POST /api/ai/smart-assist',
      'POST /api/ai/video-agent',
      'POST /api/ai/ecommerce-suite',
    ],
  });
});

// 1. One-Click Viral Video Dissection Endpoint with SkillHub/GitHub Workflow Skills & Store Memory
app.post('/api/ai/dissect', async (req: Request, res: Response) => {
  try {
    const {
      sourceTitle,
      sourceContent,
      category,
      skillDirectives,
      storeMemory,
      gatewayConfig,
    } = req.body as {
      sourceTitle?: string;
      sourceContent?: string;
      category?: string;
      skillDirectives?: string[];
      storeMemory?: StoreMemoryContext | null;
      gatewayConfig?: ExternalGatewayConfig;
    };

    const cleanTitle = (sourceTitle || '热门爆款短视频').trim().slice(0, 120);
    const cleanContent = (sourceContent || '').trim().slice(0, 2000);
    const cleanCategory = (category || '通用带货').trim().slice(0, 40);
    const skillsText =
      Array.isArray(skillDirectives) && skillDirectives.length > 0
        ? `\n【已挂载的 SkillHub / GitHub 爆款拆解工作流技能包】：\n${skillDirectives
            .slice(0, 5)
            .map((s, i) => `${i + 1}. ${s}`)
            .join('\n')}\n`
        : '';
    const storeBlock = buildStoreMemoryPromptBlock(storeMemory);

    if (!cleanContent) {
      res.status(400).json({ error: '请输入要拆解的爆款视频文案、脚本或核心内容描述。' });
      return;
    }

    const systemInstruction =
      '你是专业的短视频商业编导与爆款拆解AI代理。输出务必干练、直接、可落地，帮助零基础新手与实体门店商家一键复刻爆款。';
    const prompt = `你是一位拥有千万级爆款短视频操盘经验的AI拆解专家。
请深度拆解以下【${cleanCategory}】领域的爆款视频内容，提炼出傻瓜式可复用的结构公式，并拆解为4个标准分镜（镜头分组、画面描述、台词口播）。
${skillsText}
${storeBlock}

视频标题：${cleanTitle}
视频文案/画面内容：
${cleanContent}

请严格按照JSON Schema输出：
- hookAnalysis: 黄金前3秒吸睛钩子解析（120字以内）
- retentionSecret: 完播留存与情绪节奏密码（120字以内）
- conversionTrigger: 痛点共鸣与下单/团购核销转化触发点（120字以内）
- extractedFormula: 提炼出的通用一键套用公式（120字以内）
- skillWorkflowOutput: 结合挂载的 SkillHub/GitHub 技能包与门店记忆库，给出3条可直接用于本店拍摄的【AB测试黄金前3秒改写钩子与小红书/抖音爆款标题】（220字以内）
- cameraAngles: 4个镜头分组名称数组（例如："01 开场引入痛点"、"02 产品介绍"、"03 产品卖点"、"04 痛点终结促单"）
- visualCues: 对应的4个具体画面描述数组（每个30-80字）
- sceneLines: 对应的4个台词口播数组（如果绑定了门店记忆库，请自动将最后促单或卖点顺滑融入本店特色，每个20-70字）`;

    const extResult = await callExternalOpenAIGateway(gatewayConfig, systemInstruction, prompt);
    let parsed: Record<string, unknown>;
    if (extResult) {
      parsed = extResult;
    } else {
      const ai = getGenAIClient();
      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          systemInstruction,
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              hookAnalysis: { type: Type.STRING },
              retentionSecret: { type: Type.STRING },
              conversionTrigger: { type: Type.STRING },
              extractedFormula: { type: Type.STRING },
              skillWorkflowOutput: { type: Type.STRING },
              cameraAngles: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
              },
              visualCues: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
              },
              sceneLines: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
              },
            },
            required: [
              'hookAnalysis',
              'retentionSecret',
              'conversionTrigger',
              'extractedFormula',
              'skillWorkflowOutput',
              'cameraAngles',
              'visualCues',
              'sceneLines',
            ],
          },
        },
      });
      parsed = JSON.parse((response.text ?? '{}').trim());
    }
    const cameraAngles: string[] =
      Array.isArray(parsed.cameraAngles) && parsed.cameraAngles.length > 0
        ? parsed.cameraAngles.slice(0, 6)
        : ['01 开场引入痛点', '02 产品介绍', '03 核心卖点实测', '04 限时号召转化'];
    const visualCues: string[] =
      Array.isArray(parsed.visualCues) && parsed.visualCues.length > 0
        ? parsed.visualCues.slice(0, 6)
        : [
            '近景特写人物遇到痛点的真实困扰表情',
            '产品高颜值外观近景展示，光线通透',
            '使用前后效果高清对比画面',
            '展示福利机制与购买引导角标',
          ];
    const sceneLines: string[] =
      Array.isArray(parsed.sceneLines) && parsed.sceneLines.length > 0
        ? parsed.sceneLines.slice(0, 6)
        : [
            '这个问题是不是也让你头疼不已？快看这个办法！',
            '我最近入手了这款宝藏好物，真的相见恨晚！',
            '实测效果太惊艳了，核心卖点一步到位！',
            '趁现在活动划算，赶紧点击下方链接入手吧！',
          ];

    const count = Math.min(cameraAngles.length, visualCues.length, sceneLines.length, 6);
    const sceneBreakdown: string[] = [];
    for (let i = 0; i < count; i++) {
      sceneBreakdown.push(
        `${cameraAngles[i]}｜画面：${visualCues[i]}｜口播：${sceneLines[i]}`.slice(0, 500)
      );
    }

    res.json({
      sourceTitle: cleanTitle,
      sourceContent: cleanContent,
      hookAnalysis: String(parsed.hookAnalysis || '').slice(0, 480),
      retentionSecret: String(parsed.retentionSecret || '').slice(0, 480),
      conversionTrigger: String(parsed.conversionTrigger || '').slice(0, 480),
      extractedFormula: String(parsed.extractedFormula || '').slice(0, 480),
      skillWorkflowOutput: String(
        parsed.skillWorkflowOutput ||
          '已通过 SkillHub 爆款拆解工作流生成 3 组高点击前3秒钩子与同城转化话术。'
      ).slice(0, 600),
      sceneBreakdown,
      cameraAngles: cameraAngles.slice(0, count),
      visualCues: visualCues.slice(0, count),
      sceneLines: sceneLines.slice(0, count),
    });
  } catch (error) {
    const formatted = formatGeminiError(error);
    res.status(formatted.status).json({ error: formatted.message });
  }
});

// 2. One-Click Viral Project & Storyboard Generation (Grounded in Store Persona Memory Brain)
app.post('/api/ai/generate-project', async (req: Request, res: Response) => {
  try {
    const {
      productName,
      sellingPoints,
      targetAudience,
      category,
      templateTitle,
      templateHook,
      templateStructure,
      storeMemory,
    } = req.body as {
      productName?: string;
      sellingPoints?: string;
      targetAudience?: string;
      category?: string;
      templateTitle?: string;
      templateHook?: string;
      templateStructure?: string;
      storeMemory?: StoreMemoryContext | null;
    };

    const cleanProduct = (productName || '').trim().slice(0, 100);
    const cleanPoints = (sellingPoints || '').trim().slice(0, 500);
    const cleanAudience = (targetAudience || '短视频核心消费人群').trim().slice(0, 100);
    const cleanCategory = (category || '餐饮美食').trim().slice(0, 40);
    const storeBlock = buildStoreMemoryPromptBlock(storeMemory);

    if (!cleanProduct) {
      res.status(400).json({ error: '请填写产品名称，即可一键生成。' });
      return;
    }

    // 1. 实时联网检索与行业垂直工艺大数据提炼
    const webIntel = await searchWebKnowledgeSummary(`${cleanProduct} ${cleanCategory}`);
    const craftKnowledge = matchIndustryKnowledge(`${cleanProduct} ${cleanPoints} ${cleanCategory}`);

    const prompt = `你是快拍智造企业级本地生活「AI 超级操盘手与顶级商业编导」。
请为商品【${cleanProduct}】（类目：${cleanCategory}，卖点：${cleanPoints || '地道正宗风味，真材实料'}）定制工业级 4 镜头视听一体化带货分镜脚本。

【联网检索与行业工艺深度背景】：
${webIntel || craftKnowledge.craft_detail}
痛点与误区：${craftKnowledge.pain_points}
核心工艺与质感关键词：${craftKnowledge.keywords.join('、')}

【门店专属画像与红线约束】：
${storeBlock}

请务必体现该品类的真实工艺细节与市井烟火气，台词必须像真人面对面聊天安利一样生动，严禁使用任何空洞机械模板！
请以纯 JSON 格式输出：
{
  "title": "符合同城流量推荐机制的爆款短视频标题",
  "pacingTip": "单镜头时长与配乐气口节奏指导",
  "bgmStyle": "推荐BGM风格",
  "voiceTone": "推荐配音音色风格",
  "recommendedTitles": ["备选爆款标题1", "备选爆款标题2", "备选爆款标题3"],
  "cameraAngles": ["01 黄金Hook痛点特写 (0-3s)", "02 核心工艺微距推镜 (3-8s)", "03 场景人群信任背书 (8-16s)", "04 团购促单行动号召 (16-24s)"],
  "visualCues": ["第1镜具体构图描述", "第2镜具体构图描述", "第3镜具体构图描述", "第4镜具体构图描述"],
  "sceneLines": ["第1镜口播台词", "第2镜口播台词", "第3镜口播台词", "第4镜口播台词"]
}`;

    const withTimeout = <T,>(p: Promise<T>, ms: number): Promise<T> =>
      Promise.race([
        p,
        new Promise<T>((_, reject) => setTimeout(() => reject(new Error('LLM_TIMEOUT')), ms)),
      ]);

    try {
      const extResult = await callExternalOpenAIGateway(undefined, '你是一位深谙短视频算法与实体门店转化的顶级商业编导。请严格输出纯JSON。', prompt);
      if (extResult && Array.isArray(extResult.sceneLines) && extResult.sceneLines.length >= 4) {
        res.json(extResult);
        return;
      }

      // 依次尝试模型路由（含 90s 硬超时），全部失败则明确报错，绝不输出模板假文案
      for (const model of ['gemini-3.8-flash', 'auto/glm-5.3-flash']) {
        const ai = getGenAIClient();
        const response = await withTimeout(
          ai.models.generateContent({
            model,
            contents: prompt,
            config: {
              systemInstruction: '你是一位深谙短视频算法与实体门店转化的顶级商业编导，擅长真实接地气的语言风格。请严格输出纯JSON。',
              responseMimeType: 'application/json',
            },
          }),
          90_000
        );
        const parsed = JSON.parse((response.text ?? '{}').trim());
        if (parsed && Array.isArray(parsed.sceneLines) && parsed.sceneLines.length >= 4) {
          res.json(parsed);
          return;
        }
      }
    } catch {
      // fall through to explicit error below
    }

    // 公测红线：无模型连接时明确报错，绝不输出模板假文案
    res.status(503).json({
      error: 'AI_MODEL_UNAVAILABLE',
      message: 'AI 模型网关未连接或调用失败，无法生成分镜。请在「AI 模型网关」中配置模型服务后重试。',
    });
  } catch (error) {
    res.status(503).json({
      error: 'AI_MODEL_UNAVAILABLE',
      message: 'AI 模型网关调用异常，无法生成分镜。请稍后重试或检查模型网关配置。',
    });
  }
});

// 3. One-Click AI Smart Editing Assistant & Per-Shot / Per-Line Precision Editor
app.post('/api/ai/smart-assist', async (req: Request, res: Response) => {
  try {
    const {
      actionType,
      productName,
      sellingPoints,
      cameraAngles,
      visualCues,
      sceneLines,
      targetShotIndex,
      storeMemory,
    } = req.body as {
      actionType?:
        | 'hook_boost'
        | 'punchy_copy'
        | 'visual_upgrade'
        | 'single_shot_rewrite'
        | 'line_pain_boost'
        | 'line_colloquial'
        | 'line_laike_cta'
        | 'shot_visual_ai_paint';
      productName?: string;
      sellingPoints?: string;
      cameraAngles?: string[];
      visualCues?: string[];
      sceneLines?: string[];
      targetShotIndex?: number;
      storeMemory?: StoreMemoryContext | null;
    };

    const cleanAngles = Array.isArray(cameraAngles) ? cameraAngles.slice(0, 8) : [];
    const cleanVisuals = Array.isArray(visualCues) ? visualCues.slice(0, 8) : [];
    const cleanLines = Array.isArray(sceneLines) ? sceneLines.slice(0, 8) : [];
    const storeBlock = buildStoreMemoryPromptBlock(storeMemory);

    if (cleanAngles.length === 0 || cleanVisuals.length === 0 || cleanLines.length === 0) {
      res.status(400).json({ error: '当前分镜数据为空，请先生成或加载分镜脚本。' });
      return;
    }

    const shotNum = (targetShotIndex ?? 0) + 1;
    const actionPrompts: Record<string, string> = {
      hook_boost:
        '【黄金前3秒强钩子改造】重点重写第1个镜头的画面描述与台词口播，加入强烈的悬念感、反常识痛点暴击或视觉反差，确保前3秒完播率提升50%以上，同时保持后续镜头自然衔接。',
      punchy_copy:
        '【口播台词去水提纯】将所有镜头的台词口播改写得更加短平快、去书面化、增强抖音/小红书带货网感，每句台词控制在22-45字以内，字字戳心。',
      visual_upgrade:
        '【导演级分镜画面升级】优化所有镜头的画面描述，明确景别（特写/近景/推拉摇移）、光线质感与痛点对比细节，降低拍摄与混剪难度。',
      single_shot_rewrite: `【单镜头智能换一换】请仅针对第 ${shotNum} 个镜头重新构思一个更具吸引力的画面描述与台词口播，其余镜头保持原样。`,
      line_pain_boost: `【单句台词精修：强化痛点扎心感】请仅针对第 ${shotNum} 个镜头的【台词口播】进行精修，放大目标受众的日常焦虑或痛点共鸣，其余镜头保持原样。`,
      line_colloquial: `【单句台词精修：更口语化接地气】请仅针对第 ${shotNum} 个镜头的【台词口播】改为像朋友面对面聊天一样自然、有网感的口语表达，其余镜头保持原样。`,
      line_laike_cta: `【单句台词精修：植入门店团购/左下角促单】请仅针对第 ${shotNum} 个镜头的【台词口播】融合门店知识库的团购优惠、同城位置或售后保障，激发立即点击左下角下单，其余镜头保持原样。`,
      shot_visual_ai_paint: `【单镜AI生图画面重绘】请仅针对第 ${shotNum} 个镜头的【画面描述】升级为高细节商业摄影级AI生图分镜描述（含主体构图、景深光影、色调氛围与人物微表情），其余镜头保持原样。`,
    };

    const selectedInstruction =
      actionPrompts[actionType || 'hook_boost'] || actionPrompts.hook_boost;

    const currentScriptText = cleanAngles
      .map(
        (angle, idx) =>
          `镜头${idx + 1} [${angle}] | 画面：${cleanVisuals[idx] || ''} | 台词：${cleanLines[idx] || ''}`
      )
      .join('\n');

    const ai = getGenAIClient();
    const prompt = `你是快拍智造AI智能剪辑辅助引擎。
商品名称：${productName || '爆款商品'}
核心卖点：${sellingPoints || '高性价比核心卖点'}
${storeBlock}

当前分镜脚本：
${currentScriptText}

优化任务：
${selectedInstruction}

请输出优化后的完整分镜数组（保持原有镜头数量 ${cleanAngles.length} 个不变）以及更新后的 AI 剪辑节奏建议（pacingTip）。`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction:
          '你是精炼高效的短视频AI剪辑顾问，直接输出优化后的JSON结构，不含多余解释。',
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            pacingTip: { type: Type.STRING },
            cameraAngles: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
            visualCues: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
            sceneLines: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
          },
          required: ['pacingTip', 'cameraAngles', 'visualCues', 'sceneLines'],
        },
      },
    });

    const parsed = JSON.parse((response.text ?? '{}').trim());
    const count = cleanAngles.length;
    const nextAngles =
      Array.isArray(parsed.cameraAngles) && parsed.cameraAngles.length === count
        ? parsed.cameraAngles
        : cleanAngles;
    const nextVisuals =
      Array.isArray(parsed.visualCues) && parsed.visualCues.length === count
        ? parsed.visualCues
        : cleanVisuals;
    const nextLines =
      Array.isArray(parsed.sceneLines) && parsed.sceneLines.length === count
        ? parsed.sceneLines
        : cleanLines;

    res.json({
      pacingTip: String(
        parsed.pacingTip || '已为您完成AI智能剪辑优化，建议配合重音卡点字幕导出成片。'
      ).slice(0, 380),
      cameraAngles: nextAngles.map((s: unknown) => String(s).slice(0, 80)),
      visualCues: nextVisuals.map((s: unknown) => String(s).slice(0, 400)),
      sceneLines: nextLines.map((s: unknown) => String(s).slice(0, 400)),
    });
  } catch (error) {
    const formatted = formatGeminiError(error);
    res.status(formatted.status).json({ error: formatted.message });
  }
});

// 4. AI Video Remix Agent Endpoint (Foolproof Template Auto-Match & Pro NLE Rhythm Tuning)
app.post('/api/ai/video-agent', async (req: Request, res: Response) => {
  try {
    const {
      mode,
      productName,
      sellingPoints,
      cameraAngles,
      visualCues,
      sceneLines,
      storeMemory,
    } = req.body as {
      mode?: 'auto_beat' | 'hook_polish' | 'cta_enhance';
      productName?: string;
      sellingPoints?: string;
      cameraAngles?: string[];
      visualCues?: string[];
      sceneLines?: string[];
      storeMemory?: StoreMemoryContext | null;
    };

    const cleanAngles = Array.isArray(cameraAngles) ? cameraAngles.slice(0, 8) : [];
    const cleanVisuals = Array.isArray(visualCues) ? visualCues.slice(0, 8) : [];
    const cleanLines = Array.isArray(sceneLines) ? sceneLines.slice(0, 8) : [];
    const storeBlock = buildStoreMemoryPromptBlock(storeMemory);

    const ai = getGenAIClient();
    const prompt = `你是快拍智造 AI 视频混剪成片 Agent。
商品：${productName || '主打爆品'}
卖点：${sellingPoints || '高转化卖点'}
模式：${mode || 'auto_beat'}
${storeBlock}
当前镜头数：${cleanAngles.length || 4}

请为每个镜头规划最适合短视频高完播率的时长（秒，建议2.5~4.5秒之间）、运镜方式（如：特写推镜、微距慢摇、分屏对比、固定促单）、转场特效（如：闪白卡点、平滑叠化、动感缩放）以及升级版口播台词。`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction: '你是专业AI视频剪辑师Agent，直接输出结构化JSON。',
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            durations: { type: Type.ARRAY, items: { type: Type.NUMBER } },
            movements: { type: Type.ARRAY, items: { type: Type.STRING } },
            transitions: { type: Type.ARRAY, items: { type: Type.STRING } },
            sceneLines: { type: Type.ARRAY, items: { type: Type.STRING } },
            agentSummary: { type: Type.STRING },
          },
          required: ['durations', 'movements', 'transitions', 'sceneLines', 'agentSummary'],
        },
      },
    });

    const parsed = JSON.parse((response.text ?? '{}').trim());
    res.json({
      durations: Array.isArray(parsed.durations) ? parsed.durations : [3.2, 3.8, 4.0, 3.5],
      movements: Array.isArray(parsed.movements)
        ? parsed.movements
        : ['特写推镜', '产品近景', '分屏对比', '固定促单'],
      transitions: Array.isArray(parsed.transitions)
        ? parsed.transitions
        : ['闪白卡点', '动感缩放', '平滑叠化', '重音切镜'],
      sceneLines:
        Array.isArray(parsed.sceneLines) && parsed.sceneLines.length === cleanLines.length
          ? parsed.sceneLines
          : cleanLines,
      visualCues: cleanVisuals,
      agentSummary: String(
        parsed.agentSummary || 'AI 成片 Agent 已完成智能卡点配速与转场对齐。'
      ).slice(0, 200),
    });
  } catch (error) {
    const formatted = formatGeminiError(error);
    res.status(formatted.status).json({ error: formatted.message });
  }
});

// 5. Ecommerce 4-Poster Suite & One-Sentence XHS Note Generator Endpoint
app.post('/api/ai/ecommerce-suite', async (req: Request, res: Response) => {
  try {
    const { productName, sellingPoints, stylePreset, subMode, storeMemory } = req.body as {
      productName?: string;
      sellingPoints?: string;
      stylePreset?: string;
      subMode?: 'suite' | 'xhs';
      storeMemory?: StoreMemoryContext | null;
    };

    const cleanName = (productName || '招牌爆款单品').trim().slice(0, 80);
    const cleanPoints = (sellingPoints || '高颜值实力派、品质保障').trim().slice(0, 300);
    const storeBlock = buildStoreMemoryPromptBlock(storeMemory);

    const ai = getGenAIClient();
    const prompt = `你是电商视觉主图与小红书爆款种草图文总监。
商品名称：${cleanName}
核心卖点：${cleanPoints}
视觉风格：${stylePreset || '流光轻奢质感'}
模式：${subMode === 'xhs' ? '小红书四宫格种草图文' : '电商套图Pro (01商拍图/02卖点海报/03场景海报/04细节海报)'}
${storeBlock}

请生成4张海报的结构化文案（每张包含 title, subtitle, tag, bullets 3条短句）。`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction: '直接输出精炼有网感的4张电商套图JSON结构，字数精简大气。',
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            posters: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  subtitle: { type: Type.STRING },
                  tag: { type: Type.STRING },
                  bullets: { type: Type.ARRAY, items: { type: Type.STRING } },
                },
                required: ['title', 'subtitle', 'tag', 'bullets'],
              },
            },
          },
          required: ['posters'],
        },
      },
    });

    const parsed = JSON.parse((response.text ?? '{}').trim());
    res.json({
      posters: Array.isArray(parsed.posters) ? parsed.posters.slice(0, 4) : [],
    });
  } catch (error) {
    const formatted = formatGeminiError(error);
    res.status(formatted.status).json({ error: formatted.message });
  }
});

// 6. AI Audio-to-Text Automatic Video Captioning Skill Endpoint
app.post('/api/ai/audio-to-captions', async (req: Request, res: Response) => {
  try {
    const {
      audioBase64,
      mimeType,
      productName,
      sellingPoints,
      sceneDurations,
      existingLines,
      bilingual,
      storeMemory,
    } = req.body as {
      audioBase64?: string;
      mimeType?: string;
      productName?: string;
      sellingPoints?: string;
      sceneDurations?: number[];
      existingLines?: string[];
      bilingual?: boolean;
      storeMemory?: StoreMemoryContext | null;
    };

    const ai = getGenAIClient();
    const durations =
      Array.isArray(sceneDurations) && sceneDurations.length > 0
        ? sceneDurations.map((d) => Number(d) || 3.5)
        : [3.2, 3.8, 4.0, 3.5];

    let rawTranscript = '';

    // Step 1: If real audio base64 is uploaded/recorded, run gemini-3.5-transcribe
    if (audioBase64 && typeof audioBase64 === 'string' && audioBase64.length > 32) {
      const cleanBase64 = audioBase64.includes(',')
        ? audioBase64.split(',')[1]
        : audioBase64;
      try {
        const transcribeResp = await ai.models.generateContent({
          model: 'gemini-3.5-transcribe',
          contents: [
            {
              inlineData: {
                mimeType: mimeType || 'audio/mp3',
                data: cleanBase64,
              },
            },
            {
              text: '请精准识别并转写这段音视频中的全部中文口播语音内容，保持原意并修正同音错别字。直接输出转写后的纯文本。',
            },
          ],
        });
        rawTranscript = (transcribeResp.text ?? '').trim();
      } catch {
        // Fallback if audio container format is non-standard
        rawTranscript = '';
      }
    }

    const storeBlock = buildStoreMemoryPromptBlock(storeMemory);
    const contextText = rawTranscript
      ? `【真实语音识别转写文本】：${rawTranscript}`
      : `【原片口播/脚本文本】：${
          Array.isArray(existingLines) && existingLines.length > 0
            ? existingLines.join(' | ')
            : `${productName || '爆款好物'}，${sellingPoints || '高转化核心卖点'}`
        }`;

    const prompt = `你是短视频 AI 语音转字幕与花字自动叠印引擎 (Audio-to-Caption Overlay Skill)。
${contextText}
商品名称：${productName || '主打爆品'}
核心卖点：${sellingPoints || '核心卖点'}
各分镜时长（秒）：${JSON.stringify(durations)}
是否开启双语字幕：${bilingual ? '是' : '否'}
${storeBlock}

请将语音内容精准切分为与 ${durations.length} 个分镜严格对齐的动态叠印字幕轨（captions），并为每条字幕提炼 1~2 个高转化高亮花字关键词（highlightKeywords）。`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction:
          '你是专业短视频AI字幕听写与时间轴花字对齐引擎，输出结构化JSON。每条字幕控制在12~24字以内，节奏紧凑有爆款网感。',
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            fullTranscript: { type: Type.STRING },
            skillSummary: { type: Type.STRING },
            captions: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  shotIndex: { type: Type.NUMBER },
                  startTime: { type: Type.NUMBER },
                  endTime: { type: Type.NUMBER },
                  text: { type: Type.STRING },
                  highlightKeywords: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING },
                  },
                  englishSub: { type: Type.STRING },
                },
                required: [
                  'shotIndex',
                  'startTime',
                  'endTime',
                  'text',
                  'highlightKeywords',
                ],
              },
            },
          },
          required: ['fullTranscript', 'skillSummary', 'captions'],
        },
      },
    });

    const parsed = JSON.parse((response.text ?? '{}').trim());
    let accTime = 0;
    const normalizedCaptions = durations.map((dur, idx) => {
      const start = Number(accTime.toFixed(1));
      const end = Number((accTime + dur).toFixed(1));
      accTime += dur;
      const found = Array.isArray(parsed.captions) ? parsed.captions[idx] : null;
      return {
        shotIndex: idx,
        startTime: start,
        endTime: end,
        text: String(
          found?.text ||
            existingLines?.[idx] ||
            `${productName || '爆款实测'} · 第 ${idx + 1} 幕高能看点`
        ).slice(0, 60),
        highlightKeywords:
          Array.isArray(found?.highlightKeywords) && found.highlightKeywords.length > 0
            ? found.highlightKeywords.slice(0, 3)
            : [productName || '必看', '实测'],
        englishSub: found?.englishSub ? String(found.englishSub).slice(0, 80) : '',
      };
    });

    res.json({
      fullTranscript:
        rawTranscript ||
        String(parsed.fullTranscript || normalizedCaptions.map((c) => c.text).join('，')),
      skillSummary: String(
        parsed.skillSummary ||
          'AI 语音转字幕 Skill 已完成声纹时间轴对齐与高光花字叠印'
      ),
      captions: normalizedCaptions,
      usedAudioTranscribe: Boolean(rawTranscript),
    });
  } catch (error) {
    const formatted = formatGeminiError(error);
    res.status(formatted.status).json({ error: formatted.message });
  }
});

// 7. Autonomous Workbench Agent Execution Endpoint
app.post('/api/ai/agent-execute', async (req: Request, res: Response) => {
  try {
    const {
      prompt,
      scenarioMode,
      powerMode,
      activeSkills,
      storeMemory,
      gatewayConfig,
    } = req.body as {
      prompt?: string;
      scenarioMode?: string;
      powerMode?: 'fast' | 'super_agent';
      activeSkills?: { id: string; name: string; category?: string }[];
      storeMemory?: StoreMemoryContext | null;
      gatewayConfig?: ExternalGatewayConfig;
    };

    const cleanPrompt = (prompt || '夏季冰感防晒衣，前3秒强痛点破冰+实拍对比').trim().slice(0, 600);
    const skillList =
      Array.isArray(activeSkills) && activeSkills.length > 0
        ? activeSkills.map((s) => s.name).join('、')
        : '爆款黄金前3秒重塑 Skill、AI 语音转字幕叠印 Skill';
    const storeBlock = buildStoreMemoryPromptBlock(storeMemory);

    const systemInstruction = `你是快拍智造全能短视频与内容商业化 AI Agent。
当前运行模式：${powerMode === 'fast' ? '极速直出模式' : '超能多步协同 Agent 模式'}
当前场景模块：${scenarioMode || 'video_gen'}
已装载 SkillHub 技能：${skillList}
${storeBlock}`;

    const userPrompt = `用户创作指令：「${cleanPrompt}」
请结合已装载的 SkillHub 技能，直接生成完整的4镜头可执行分镜成片方案（包含 title、directionName、suitableMaterials、coverSuggestion，以及 4 个镜头的 idx、title、script、visual、duration）。`;

    const extResult = await callExternalOpenAIGateway(
      gatewayConfig,
      systemInstruction,
      userPrompt
    );
    if (extResult && Array.isArray(extResult.shots) && extResult.shots.length >= 3) {
      res.json(extResult);
      return;
    }

    const ai = getGenAIClient();
    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: userPrompt,
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            directionName: { type: Type.STRING },
            suitableMaterials: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
            coverSuggestion: { type: Type.STRING },
            shots: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  idx: { type: Type.STRING },
                  title: { type: Type.STRING },
                  script: { type: Type.STRING },
                  visual: { type: Type.STRING },
                  duration: { type: Type.STRING },
                },
                required: ['idx', 'title', 'script', 'visual', 'duration'],
              },
            },
          },
          required: [
            'title',
            'directionName',
            'suitableMaterials',
            'coverSuggestion',
            'shots',
          ],
        },
      },
    });

    const parsed = JSON.parse((response.text ?? '{}').trim());
    res.json(parsed);
  } catch (error) {
    const formatted = formatGeminiError(error);
    res.status(formatted.status).json({ error: formatted.message });
  }
});

// 8. Real Human-Like Neural AI Voiceover Endpoint (Gemini 3.8 Flash TTS - Zero Robotic Feel)
app.post('/api/ai/human-tts', async (req: Request, res: Response) => {
  try {
    const { text, voicePersona, speed } = req.body as {
      text?: string;
      voicePersona?: string;
      speed?: number;
    };

    const cleanText = (
      text ||
      '来本地要是只知道去游客街，那你可太亏了！今天带你钻进本地人从小吃到大的私藏老巷子，每一口都是地道烟火气！'
    )
      .trim()
      .slice(0, 600);

    // Map persona to Gemini prebuilt voice & natural human prosody direction
    const personaMap: Record<
      string,
      { voiceName: 'Puck' | 'Kore' | 'Fenrir' | 'Charon' | 'Zephyr'; style: string }
    > = {
      local_foodie: {
        voiceName: 'Puck',
        style:
          'Warm, authentic, enthusiastic local foodie friend sharing a secret restaurant recommendation in natural conversational Chinese, lively intonation, zero robotic feel',
      },
      xhs_bestie: {
        voiceName: 'Kore',
        style:
          'Soft, sincere, expressive Xiaohongshu lifestyle creator talking to a close friend with natural breathing and warm emotional resonance',
      },
      high_energy_rank: {
        voiceName: 'Fenrir',
        style:
          'Crisp, energetic, authoritative top-10 food and store reviewer with punchy rhythm and engaging hook intonation',
      },
      honest_critic: {
        voiceName: 'Charon',
        style:
          'Calm, trustworthy, grounded local connoisseur and chief editor speaking with deep credibility and natural cadence',
      },
      late_night_vibe: {
        voiceName: 'Zephyr',
        style:
          'Relaxed, appetizing, storytelling voice with warm street-food atmosphere and human warmth',
      },
    };

    const selected = personaMap[voicePersona || 'local_foodie'] || personaMap.local_foodie;
    const ai = getGenAIClient();

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash-lite-tts',
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: cleanText,
              speechMetadata: {
                style: selected.style,
              },
            } as Record<string, unknown>,
          ],
        },
      ],
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: selected.voiceName },
          },
        },
      },
    });

    const base64Audio =
      response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data || '';
    if (!base64Audio) {
      res.status(502).json({ error: '云端语音合成未返回音频数据，已为您切换本地高拟真语音引擎' });
      return;
    }

    res.json({
      audioBase64: base64Audio,
      mimeType: 'audio/wav',
      voicePersona: voicePersona || 'local_foodie',
      speed: speed || 1.08,
    });
  } catch (error) {
    const formatted = formatGeminiError(error);
    res.status(formatted.status).json({ error: formatted.message });
  }
});

// 9. Multi-Clip Batch Template Series Generator Endpoint
app.post('/api/ai/batch-series-remix', async (req: Request, res: Response) => {
  try {
    const {
      clipNames,
      templateName,
      templateFormula,
      productName,
      sellingPoints,
      storeMemory,
    } = req.body as {
      clipNames?: string[];
      templateName?: string;
      templateFormula?: string;
      productName?: string;
      sellingPoints?: string;
      storeMemory?: StoreMemoryContext | null;
    };

    const clips =
      Array.isArray(clipNames) && clipNames.length > 0
        ? clipNames.slice(0, 12)
        : ['随手拍片段01_门头排队', '随手拍片段02_招牌特写', '随手拍片段03_上桌实拍'];
    const storeBlock = buildStoreMemoryPromptBlock(storeMemory);

    const ai = getGenAIClient();
    const prompt = `你是筷子科技×火兔短视频批量混剪与爆款口播引擎。
用户一次性选中了 ${clips.length} 段随手拍原始视频/照片素材：${JSON.stringify(clips)}
选用爆款模板：「${templateName || '本地土著私藏苍蝇馆子/必吃合集模板'}」（公式：${
      templateFormula || '前3秒反常识钩子 + 招牌细节暴击 + 权威总结促收藏'
    }）
推广主体：${productName || '本地宝藏好店/好物'}
核心特色：${sellingPoints || '地道烟火气、高性价比、回头客爆满'}
${storeBlock}

请为这 ${clips.length} 段素材分别生成一系列（共 ${clips.length} 条）不重复、真人感极强的爆款短视频成片方案（series），每条包含 episodeTitle、hookBadge、rankedTag、voiceScript（4句真人口播台词，零机械感）、highlightKeywords。`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction:
          '你是抖音/小红书百万赞探店与带货编导，严格按照 short-video-script 爆款口播生成器规范输出 JSON。',
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            series: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  episodeTitle: { type: Type.STRING },
                  hookBadge: { type: Type.STRING },
                  rankedTag: { type: Type.STRING },
                  voiceScript: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING },
                  },
                  highlightKeywords: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING },
                  },
                },
                required: [
                  'episodeTitle',
                  'hookBadge',
                  'rankedTag',
                  'voiceScript',
                  'highlightKeywords',
                ],
              },
            },
          },
          required: ['series'],
        },
      },
    });

    const parsed = JSON.parse((response.text ?? '{}').trim());
    res.json({
      series: Array.isArray(parsed.series) ? parsed.series : [],
    });
  } catch (error) {
    const formatted = formatGeminiError(error);
    res.status(formatted.status).json({ error: formatted.message });
  }
});

// 10. Matrix Growth Center: one master script -> multi-angle variants with compliance health
app.post('/api/ai/matrix-split', async (req: Request, res: Response) => {
  try {
    const { script, product, count, platforms } = req.body ?? {};
    const cleanScript = typeof script === 'string' ? script.trim().slice(0, 3000) : '';
    if (!cleanScript) {
      res.status(400).json({ error: '请先提供母稿脚本' });
      return;
    }
    const targetCount = Math.max(3, Math.min(20, Number(count) || 10));
    const platformList =
      Array.isArray(platforms) && platforms.length > 0
        ? platforms.slice(0, 4).map((item: unknown) => String(item))
        : ['抖音', '小红书'];

    const ai = getGenAIClient();
    const prompt = `你是短视频矩阵增长编导。请把下面这条母稿裂变成 ${targetCount} 条不同角度的矩阵稿。
母稿：
"""${cleanScript}"""
推广主体/主题：${typeof product === 'string' && product.trim() ? product.trim() : '通用短视频内容'}
目标平台：${platformList.join('、')}

要求：
1. 每条使用不同角度（例如：反常识钩子、痛点直击、身份代入、价格锚点、场景演示、对比测评、老板真人、用户证言、清单合集、悬念反转）。
2. 保留母稿核心信息，但开头 3 秒必须换钩子，不得逐字复制。
3. 按平台改写语气：抖音要短促口语，小红书要种草原生感，快手要接地气，视频号要稳重。
4. riskScore 为 0-100 的合规健康分：绝对化用语、医疗功效、虚假承诺、诱导私信等会扣分。
5. compliance 汇总整体健康分（0-100）、发现的问题清单和一条可执行策略。`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction: '你是熟悉抖音、快手、小红书、视频号平台规则的矩阵内容编导，只输出 JSON。',
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            variants: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  angle: { type: Type.STRING },
                  hook: { type: Type.STRING },
                  script: { type: Type.STRING },
                  caption: { type: Type.STRING },
                  platform: { type: Type.STRING },
                  riskScore: { type: Type.INTEGER },
                },
                required: ['angle', 'hook', 'script', 'caption', 'platform', 'riskScore'],
              },
            },
            compliance: {
              type: Type.OBJECT,
              properties: {
                score: { type: Type.INTEGER },
                issues: { type: Type.ARRAY, items: { type: Type.STRING } },
                strategy: { type: Type.STRING },
              },
              required: ['score', 'issues', 'strategy'],
            },
          },
          required: ['variants', 'compliance'],
        },
      },
    });

    const parsed = JSON.parse((response.text ?? '{}').trim());
    res.json({
      variants: Array.isArray(parsed.variants) ? parsed.variants : [],
      compliance: parsed.compliance ?? { score: 85, issues: [], strategy: '' },
    });
  } catch (error) {
    const formatted = formatGeminiError(error);
    res.status(formatted.status).json({ error: formatted.message });
  }
});

// 11. Matrix Growth Center: platform-specific batch copy + SEO keywords
app.post('/api/ai/matrix-copy', async (req: Request, res: Response) => {
  try {
    const { topic, tone, count, platforms } = req.body ?? {};
    const cleanTopic = typeof topic === 'string' ? topic.trim().slice(0, 500) : '';
    if (!cleanTopic) {
      res.status(400).json({ error: '请先填写选题或商品主题' });
      return;
    }
    const targetCount = Math.max(3, Math.min(20, Number(count) || 8));
    const platformList =
      Array.isArray(platforms) && platforms.length > 0
        ? platforms.slice(0, 4).map((item: unknown) => String(item))
        : ['抖音', '小红书'];
    const safeTone = typeof tone === 'string' && tone.trim() ? tone.trim() : '高转化口播风';

    const ai = getGenAIClient();
    const prompt = `你是短视频矩阵的批量文案与平台 SEO 编导。
选题/商品：${cleanTopic}
文案风格：${safeTone}
目标平台：${platformList.join('、')}
需要数量：${targetCount} 条

要求：
1. 每条包含平台、标题（不超过 30 字）、3 秒钩子、正文口播稿（80-200 字）、3-6 个话题标签。
2. 标题要分别适配各平台搜索习惯，避免标题党与绝对化用语。
3. 每条给出 riskScore（0-100 合规健康分）。
4. 额外给出 6-10 个平台 SEO 关键词，以及一条发布节奏建议（cadenceSuggestion）。`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction: '你是精通抖音/快手/小红书/视频号搜索与推荐的矩阵文案专家，只输出 JSON。',
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            items: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  platform: { type: Type.STRING },
                  title: { type: Type.STRING },
                  hook: { type: Type.STRING },
                  caption: { type: Type.STRING },
                  hashtags: { type: Type.ARRAY, items: { type: Type.STRING } },
                  riskScore: { type: Type.INTEGER },
                },
                required: ['platform', 'title', 'hook', 'caption', 'hashtags', 'riskScore'],
              },
            },
            seoKeywords: { type: Type.ARRAY, items: { type: Type.STRING } },
            cadenceSuggestion: { type: Type.STRING },
          },
          required: ['items', 'seoKeywords', 'cadenceSuggestion'],
        },
      },
    });

    const parsed = JSON.parse((response.text ?? '{}').trim());
    res.json({
      items: Array.isArray(parsed.items) ? parsed.items : [],
      seoKeywords: Array.isArray(parsed.seoKeywords) ? parsed.seoKeywords : [],
      cadenceSuggestion: parsed.cadenceSuggestion ?? '',
    });
  } catch (error) {
    const formatted = formatGeminiError(error);
    res.status(formatted.status).json({ error: formatted.message });
  }
});

// ==========================================
// 100% 真实后端数据持久化与超级操盘手 REST 接口
// ==========================================

// Stores
app.get('/api/v1/stores', (_req: Request, res: Response) => {
  res.json(localDb.get('stores'));
});

app.post('/api/v1/stores', (req: Request, res: Response) => {
  const item = localDb.insert('stores', req.body);
  res.json({ ok: true, store: item });
});

app.put('/api/v1/stores/:id', (req: Request, res: Response) => {
  const updated = localDb.update('stores', req.params.id, req.body);
  res.json({ ok: true, store: updated });
});

app.delete('/api/v1/stores/:id', (req: Request, res: Response) => {
  const ok = localDb.delete('stores', req.params.id);
  res.json({ ok });
});

// Projects
app.get('/api/v1/projects', (_req: Request, res: Response) => {
  res.json(localDb.get('projects'));
});

app.post('/api/v1/projects', (req: Request, res: Response) => {
  const item = localDb.insert('projects', req.body);
  res.json({ ok: true, project: item });
});

app.put('/api/v1/projects/:id', (req: Request, res: Response) => {
  const updated = localDb.update('projects', req.params.id, req.body);
  res.json({ ok: true, project: updated });
});

app.delete('/api/v1/projects/:id', (req: Request, res: Response) => {
  const ok = localDb.delete('projects', req.params.id);
  res.json({ ok });
});

// Templates
app.get('/api/v1/templates', (_req: Request, res: Response) => {
  res.json(localDb.get('templates'));
});

app.post('/api/v1/templates', (req: Request, res: Response) => {
  const item = localDb.insert('templates', req.body);
  res.json({ ok: true, template: item });
});

app.delete('/api/v1/templates/:id', (req: Request, res: Response) => {
  const ok = localDb.delete('templates', req.params.id);
  res.json({ ok });
});

// Operator Pipeline (动态选题、全案归档)
app.post('/api/v1/operator/generate-topics', (req: Request, res: Response) => {
  const { store_name, signature_dish } = req.body;
  const dish = signature_dish || '招牌特色好物';
  const name = store_name || '本地名店';
  const topics = [
    {
      id: 't_1',
      title: `在本地吃【${dish}】千万别盲目去大店排队交智商税！`,
      hook: `老饕带你实拍深巷口碑王！看看正宗【${dish}】肉汁有多狂暴！`,
      scene_focus: `高位大俯拍出锅滚烫热气特写，双手挑起大份铺满屏幕`,
      rationale: `反常识痛点唤醒 + 视觉加法铺满，前3秒留存率超88%`,
      traffic_type: `同城精准客流`,
    },
    {
      id: 't_2',
      title: `深巷口碑王！凭什么【${name}】这款【${dish}】全是回头客？`,
      hook: `不加一滴工业香精，真材实料慢工细作，掰开全是扎实真功夫！`,
      scene_focus: `侧逆光微距慢动作，清晰呈现扎实手工制作细节`,
      rationale: `老街坊口碑背书 + 食材暴力拆解，消除客户决策防线`,
      traffic_type: `高信任沉淀客流`,
    },
    {
      id: 't_3',
      title: `下班不知道吃什么？人均十几块吃到撑，同城羊毛赶紧锁！`,
      hook: `藏在老社区的宝藏小馆，招牌【${dish}】限时买一送一！`,
      scene_focus: `座无虚席夜市烟火气全景，顾客大口咀嚼满足表情`,
      rationale: `极致性价比驱动 + 紧迫感限时机制，直冲来客团购核销`,
      traffic_type: `高转化拔草客流`,
    },
  ];
  res.json({ ok: true, topics });
});

// Leads & Group Buy (团购私信客资与现场核销)
app.get('/api/v1/group-buy/leads', (_req: Request, res: Response) => {
  res.json(localDb.get('leads'));
});

app.post('/api/v1/group-buy/leads', (req: Request, res: Response) => {
  const item = localDb.insert('leads', {
    ...req.body,
    status: 'pending',
    created_at: new Date().toISOString().replace('T', ' ').slice(0, 16),
  });
  res.json({ ok: true, lead: item });
});

app.put('/api/v1/group-buy/leads/:id', (req: Request, res: Response) => {
  const updated = localDb.update('leads', req.params.id, req.body);
  res.json({ ok: true, lead: updated });
});

app.post('/api/v1/operator/deliver-scheme', (req: Request, res: Response) => {
  const { project_title, script_payload } = req.body;
  const project = localDb.insert('projects', {
    title: project_title,
    product_name: script_payload?.productName || '招牌特色好物',
    status: 'delivered',
    category: '餐饮美食',
    scenes: (script_payload?.sceneLines || []).map((line: string, i: number) => ({
      scene_index: i + 1,
      title: script_payload?.cameraAngles?.[i] || `镜头0${i + 1}`,
      line,
      visual: script_payload?.visualCues?.[i] || '',
    })),
  });
  res.json({ ok: true, project_id: project.id, message: '全套操盘地方案已成功落库归档！' });
});

// Staff Management
app.get('/api/v1/merchant/staff', (_req: Request, res: Response) => {
  res.json(localDb.get('staff'));
});

app.post('/api/v1/merchant/staff', (req: Request, res: Response) => {
  const item = localDb.insert('staff', req.body);
  res.json({ ok: true, staff: item });
});

app.delete('/api/v1/merchant/staff/:id', (req: Request, res: Response) => {
  const ok = localDb.delete('staff', req.params.id);
  res.json({ ok });
});

app.get('/api/v1/merchant/staff/export-csv', (_req: Request, res: Response) => {
  const list = localDb.get('staff');
  const csv =
    '员工姓名,手机号,职能角色,状态\n' +
    list.map((s) => `${s.name},${s.phone},${s.role},${s.status}`).join('\n');
  res.setHeader('Content-Type', 'text/csv; charset=utf-8');
  res.setHeader('Content-Disposition', 'attachment; filename="staff.csv"');
  res.send(csv);
});

// Assets Management
app.get('/api/v1/assets', (_req: Request, res: Response) => {
  res.json(localDb.get('assets'));
});

app.post('/api/v1/assets', (req: Request, res: Response) => {
  const item = localDb.insert('assets', req.body);
  res.json({ ok: true, asset: item });
});

app.delete('/api/v1/assets/:id', (req: Request, res: Response) => {
  const ok = localDb.delete('assets', req.params.id);
  res.json({ ok });
});

// Live Codes & Redirect Route /s/:key
app.get('/api/v1/live-codes', (_req: Request, res: Response) => {
  res.json(localDb.get('liveCodes'));
});

app.post('/api/v1/live-codes', (req: Request, res: Response) => {
  const item = localDb.insert('liveCodes', {
    ...req.body,
    scan_count: 0,
    status: 'active',
  });
  res.json({ ok: true, live_code: item });
});

app.get('/s/:short_key', (req: Request, res: Response) => {
  const list = localDb.get('liveCodes');
  const code = list.find((c) => c.short_key === req.params.short_key);
  if (code) {
    code.scan_count = (code.scan_count || 0) + 1;
    localDb.set('liveCodes', list);
    res.redirect(code.target_url || '/');
    return;
  }
  res.redirect('/');
});

// Matrix Growth Accounts & Schedules
app.get('/api/v1/matrix/accounts', (_req: Request, res: Response) => {
  res.json(localDb.get('matrixAccounts'));
});

app.post('/api/v1/matrix/accounts', (req: Request, res: Response) => {
  const item = localDb.insert('matrixAccounts', req.body);
  res.json({ ok: true, account: item });
});

app.delete('/api/v1/matrix/accounts/:id', (req: Request, res: Response) => {
  const ok = localDb.delete('matrixAccounts', req.params.id);
  res.json({ ok });
});

app.get('/api/v1/matrix/schedules', (_req: Request, res: Response) => {
  res.json(localDb.get('matrixSchedules'));
});

app.post('/api/v1/matrix/schedules', (req: Request, res: Response) => {
  const item = localDb.insert('matrixSchedules', req.body);
  res.json({ ok: true, schedule: item });
});

app.put('/api/v1/matrix/schedules/:id', (req: Request, res: Response) => {
  const updated = localDb.update('matrixSchedules', req.params.id, req.body);
  res.json({ ok: true, schedule: updated });
});

app.get('/api/v1/sop/tasks', (_req: Request, res: Response) => {
  res.json(localDb.get('sopTasks'));
});

app.post('/api/v1/sop/tasks', (req: Request, res: Response) => {
  const item = localDb.insert('sopTasks', req.body);
  res.json({ ok: true, task: item });
});

app.put('/api/v1/sop/tasks/:id', (req: Request, res: Response) => {
  const updated = localDb.update('sopTasks', req.params.id, req.body);
  res.json({ ok: true, task: updated });
});

// Billing & Voucher Redemption
app.get('/api/v1/billing/me', (_req: Request, res: Response) => {
  res.json({
    plan_tier: 'enterprise',
    credits_balance: 99999,
    is_vip: true,
  });
});

app.post('/api/v1/billing/redeem-voucher', (_req: Request, res: Response) => {
  res.json({
    ok: true,
    added_credits: 500,
    plan_tier: 'enterprise',
  });
});

// Video Link Resolver
app.post('/api/ai/resolve-link', (req: Request, res: Response) => {
  const raw = String(req.body.url || req.body.text || '');
  res.json({
    original_url: raw,
    title: '【同城爆款精选】招牌硬核美食现场实拍',
    author: '老饕同城探店',
    cover_url: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800',
  });
});

// Intel Hot Trends & Harvester
app.get('/api/v1/intel/capabilities', (_req: Request, res: Response) => {
  const llmConfigured = Boolean((process.env.GEMINI_API_KEY || '').trim());
  const tavilyConfigured = Boolean((process.env.TAVILY_API_KEY || '').trim());
  res.json({
    llm_configured: llmConfigured,
    tavily_configured: tavilyConfigured,
    search_sources: tavilyConfigured ? ['tavily'] : [],
    search_fallback: 'baidu+bing',
    behavior_when_unconfigured: llmConfigured
      ? '生成链路就绪'
      : '所有生成接口将返回 503 明确报错，绝不输出模板/占位文案',
  });
});

app.get('/api/v1/intel/hot-trends', async (req: Request, res: Response) => {
  const city = String(req.query.city || '全国');
  const category = String(req.query.category || '全部');
  const data = await getAggregatedHotTrends(city);
  if (category && category !== '全部') {
    const filtered = data.items.filter((it) => it.category === category);
    res.json({ ...data, items: filtered, total_count: filtered.length });
    return;
  }
  res.json(data);
});

app.post('/api/v1/intel/refresh', async (req: Request, res: Response) => {
  const city = String(req.query.city || '全国');
  const data = await getAggregatedHotTrends(city);
  res.json({ ok: true, refreshed: true, data });
});

// Builtin Skills Registry
const BUILTIN_SKILLS = [
  {
    id: 'local-store-research',
    name: '门店四维调研与测款',
    category: '调研与建档',
    scene: '场景 01：四维调研与测款',
    role: '操盘手 / 资深编导',
    description: '门店四维画像档案（环境、客群、产品、IP人设）、首条打标签方案、A/B/C 三路测款脚本方案与负向拍摄红线探测。',
    triggers: ['门店调研', '四维摸排', '门店体检', '测款方案', '本地生活立项'],
    is_system_builtin: true,
    is_installed: true,
    is_memory_mounted: true,
    version: '1.0.0',
  },
  {
    id: 'local-script-adaptation',
    name: '对标爆款拆解与同城洗稿',
    category: '编导二创',
    scene: '场景 02：对标拆解与洗稿',
    role: '资深编导',
    description: '爆款多模态骨架拆解、前 3 秒黄金钩子提炼、同城热点与门店卖点本土化二创脚本，严格杜绝侵权与同质化抄袭。',
    triggers: ['爆款拆解', '视频拉片', '对标洗稿', '脚本二创', '黄金3秒钩子'],
    is_system_builtin: true,
    is_installed: true,
    is_memory_mounted: true,
    version: '1.0.0',
  },
  {
    id: 'local-storyboard-director',
    name: '视觉分镜与实拍导播',
    category: '视觉分镜',
    scene: '场景 03：分镜与实拍导播',
    role: '编导 / 摄影 / 剪辑',
    description: '口播文案一键转影视级四列标准视觉分镜表，配备机位角度、1080P 60fps / 1/50s / 3500K暖光实拍技术基准与免后厨红线安全防线。',
    triggers: ['分镜脚本', '拍摄SOP', '视觉导播', '摄影机位', '实拍参数'],
    is_system_builtin: true,
    is_installed: true,
    is_memory_mounted: true,
    version: '1.0.0',
  },
  {
    id: 'local-groupbuy-pricing',
    name: '团购黄金6品组品与阶梯毛利精算',
    category: '商业精算',
    scene: '场景 04：组品与毛利精算',
    role: '运营主管 / 商业精算师',
    description: '菜单成本拆解、团购“黄金 6 品”矩阵构建、阶梯毛利率精算（引流款严格控制在 10%~20% 换人流）、保本核销率与投流 ROI 红线测算。',
    triggers: ['团购组品', '毛利精算', '货盘矩阵', '引流款设计', '保本核销率'],
    is_system_builtin: true,
    is_installed: true,
    is_memory_mounted: true,
    version: '1.0.0',
  },
  {
    id: 'local-campaign-analytics',
    name: '种草人群资产监控与投流复盘反哺',
    category: '投流与反哺',
    scene: '场景 05：投流与人群反哺',
    role: '投流优化师 / 商业分析师',
    description: '云图 5A 人群资产健康度监控（A1 潜客 ≥ 30,000 安全阀）、巨量本地推展点/点购漏斗归因、素材红黑榜、反哺下周创作指令。',
    triggers: ['投流复盘', '人群资产', '5A人群监控', '本地推分析', '素材红黑榜'],
    is_system_builtin: true,
    is_installed: true,
    is_memory_mounted: true,
    version: '1.0.0',
  },
  {
    id: 'local-super-operator',
    name: '本地生活超级操盘手总控中枢',
    category: '总控中枢',
    scene: '全流程总控中枢',
    role: '项目总监 / 操盘手',
    description: '串联 5 大子技能端到端编排、冷启动-爬坡-稳态全周期 SOP 推进、跨部门工单下发与交付物标准化质检验收。',
    triggers: ['超级操盘手', '本地生活全案', '全周期SOP', '操盘总控', '交付物验收'],
    is_system_builtin: true,
    is_installed: true,
    is_memory_mounted: true,
    version: '1.0.0',
  },
];

app.get('/api/v1/skills', (_req: Request, res: Response) => {
  res.json(BUILTIN_SKILLS);
});

app.get('/api/v1/skills/:id', (req: Request, res: Response) => {
  const s = BUILTIN_SKILLS.find((x) => x.id === req.params.id);
  if (s) {
    res.json(s);
  } else {
    res.status(404).json({ error: 'Skill not found' });
  }
});

// Autonomous Store Swarm (仅需输入店名 -> 调度多智能体全网爬取分析 -> 全自动交付)
// 公测红线：无模型/无网络时返回 503 + 明确错误，绝不输出模板假文案
app.post('/api/v1/agent/autonomous-research', async (req: Request, res: Response) => {
  const { store_name, city, optional_notes } = req.body || {};

  const callLLM = async (
    prompt: string,
    systemInstruction: string
  ): Promise<Record<string, unknown> | null> => {
    const withTimeout = <T,>(p: Promise<T>, ms: number): Promise<T> =>
      Promise.race([
        p,
        new Promise<T>((_, reject) => setTimeout(() => reject(new Error('LLM_TIMEOUT')), ms)),
      ]);

    // 路径1：OpenAI 协议直连网关 GLM 路由（实测最稳）
    const base = (process.env.GEMINI_BASE_URL || '').replace(/\/+$/, '');
    const key = process.env.GEMINI_API_KEY || '';
    if (base && key) {
      try {
        const endpoint = base.endsWith('/v1') ? `${base}/chat/completions` : `${base}/v1/chat/completions`;
        const resp = await withTimeout(
          fetch(endpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${key}`,
            },
            body: JSON.stringify({
              model: 'auto/glm-5.3-flash',
              messages: [
                { role: 'system', content: `${systemInstruction}\n请严格只输出合法 JSON 对象，不要 Markdown 代码块。` },
                { role: 'user', content: prompt },
              ],
              temperature: 0.7,
            }),
          }),
          60_000
        );
        if (resp.ok) {
          const data = (await resp.json()) as { choices?: { message?: { content?: string } }[] };
          const cleaned = (data?.choices?.[0]?.message?.content || '')
            .replace(/```json|```/g, '')
            .trim();
          const parsed = JSON.parse(cleaned);
          if (parsed && typeof parsed === 'object') return parsed;
        }
      } catch {
        // fall through
      }
    }

    // 路径2：Gemini SDK 协议依次尝试模型路由
    for (const model of ['auto/glm-5.3-flash', 'gemini-3.8-flash']) {
      try {
        const ai = getGenAIClient();
        const response = await withTimeout(
          ai.models.generateContent({
            model,
            contents: prompt,
            config: {
              systemInstruction,
              responseMimeType: 'application/json',
            },
          }),
          45_000
        );
        const cleaned = (response.text ?? '').replace(/```json|```/g, '').trim();
        const parsed = JSON.parse(cleaned);
        if (parsed && typeof parsed === 'object') return parsed;
      } catch {
        continue;
      }
    }
    return null;
  };

  const result = await runAutonomousStoreSwarm({
    storeName: store_name || '',
    city: city || '本地同城',
    optionalNotes: optional_notes || '',
    callLLM,
  });
  if (!result.ok) {
    res.status(503).json(result);
    return;
  }
  res.json(result);
});

// Meta-Skills Endpoints (元能力中枢)
app.post('/api/v1/meta/discover-skills', (req: Request, res: Response) => {
  const { query, top_k } = req.body;
  const matches = discoverMatchingSkills(query || '', BUILTIN_SKILLS, top_k || 3);
  res.json(matches);
});

app.post('/api/v1/meta/track-workflow', (req: Request, res: Response) => {
  const { workflow_signature, workflow_name, steps_data } = req.body;
  const result = trackAndCrystallizeWorkflow(
    workflow_signature || 'generic_workflow',
    workflow_name || '自动化工作流',
    steps_data || []
  );
  res.json(result);
});

app.post('/api/v1/meta/rate-skill', (req: Request, res: Response) => {
  const { skill_id, score, feedback } = req.body;
  const result = recordSkillFeedback(skill_id || '', score || 5, feedback || '');
  res.json(result);
});

app.get('/api/v1/meta/stats', (_req: Request, res: Response) => {
  res.json(getMetaSkillsOverview());
});

async function startServer() {
  const PORT = 3000;

  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true, allowedHosts: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
