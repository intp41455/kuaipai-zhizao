import React, { useState } from 'react';
import {
  Bot,
  BrainCircuit,
  Sparkles,
  Database,
  Store,
  Layers,
  CheckCircle2,
  X,
  Plus,
  Send,
  Zap,
  Flame,
  FileText,
  MapPin,
  Tag,
  ShieldCheck,
  Award,
  ChevronRight,
  ArrowRight,
  Cpu,
} from 'lucide-react';
import { StoreMemoryProfile } from '../data/curatedTemplates';

export interface CustomAIAgent {
  id: string;
  name: string;
  rolePersona: string;
  avatarIcon: string;
  accentColor: string;
  knowledgeBaseCount: number;
  recallScore: number;
  memoryAnchors: string[];
  systemDirective: string;
  storeProfile: StoreMemoryProfile;
}

export const PRESET_AGENT_TEMPLATES = [
  {
    name: '同城探店爆款编导 Agent',
    persona: '老饕探店·接地气汉子腔调·强痛点留存',
    storeName: '老街坊地道小馆',
    industry: '餐饮美食 · 同城探店',
    cityLocation: '西安 · 碑林区老街深巷',
    signatureProducts: '现切鲜牛肉火锅、牛骨高汤熬制6小时、人均40吃撑',
    memoryAnchors: '镇店爆品现切鲜肉; 凌晨熬汤真材实料; 人均几十吃到撑; 评论区同城打卡置顶',
    systemDirective: '擅长0-3秒颠覆认知反差钩子，挖掘市井烟火气，打造同城团购爆款',
    avatar: '🍜',
    accent: 'from-amber-500 to-orange-500',
  },
  {
    name: '千川带货投流操盘 Agent',
    persona: '情绪饱满·直击痛点·高促单逼单转化',
    storeName: '星澜洗护美学沙龙',
    industry: '美妆日化 · 个人护理',
    cityLocation: '杭州 · 武林商圈旗舰店',
    signatureProducts: '星澜氨基酸去屑控油洗发水、72h长效控油蓬松',
    memoryAnchors: '72小时长效控油; 氨基酸微米级云朵泡沫; 官方破价大促买一赠一; 闭眼冲不满意退款',
    systemDirective: '遵循痛点暴击-4K微距-前后实测-限时逼单4段转化结构，ROI拉升至3.8+',
    avatar: '✨',
    accent: 'from-indigo-600 to-purple-600',
  },
  {
    name: '小红书高收藏种草闺蜜 Agent',
    persona: '热情亲切·闺蜜安利·情绪价值拉满',
    storeName: '木木手作烘焙坊',
    industry: '甜品烘焙 · 网红打卡',
    cityLocation: '成都 · 春熙路太古里旁',
    signatureProducts: '现烤开心果巴斯克、低卡生椰瑞士卷、人均25',
    memoryAnchors: '低卡低糖无负担; 每日现做不隔夜; 拍照超出片神仙颜值; 约上搭子周末必打卡',
    systemDirective: '擅长高赞标题、情绪代入感文案、氛围感视觉构图指引',
    avatar: '🍰',
    accent: 'from-pink-500 to-rose-500',
  },
];

export const PersonalAgentRagStudioModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  activeProfile: StoreMemoryProfile;
  onSaveAgentAndProfile: (newAgent: CustomAIAgent, profile: StoreMemoryProfile) => void;
  onShowNotice: (type: 'success' | 'error', text: string) => void;
}> = ({ isOpen, onClose, activeProfile, onSaveAgentAndProfile, onShowNotice }) => {
  if (!isOpen) return null;

  // Step state: 1: Agent & Persona -> 2: RAG Knowledge Injection -> 3: Test Playground
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);

  // Form States
  const [agentName, setAgentName] = useState<string>(activeProfile.storePersona || '星澜同城爆款探店官');
  const [rolePersona, setRolePersona] = useState<string>('老饕探店·真诚接地气·高转化操盘');
  const [selectedAvatar, setSelectedAvatar] = useState<string>('🤖');
  const [storeName, setStoreName] = useState<string>(activeProfile.storeName || '星澜洗护沙龙');
  const [industry, setIndustry] = useState<string>(activeProfile.industry || '餐饮美食 / 本地生活');
  const [cityLocation, setCityLocation] = useState<string>(activeProfile.cityLocation || '西安 · 碑林区老街深巷');
  const [signatureProducts, setSignatureProducts] = useState<string>(
    activeProfile.signatureProducts || '现切鲜牛肉、牛骨高汤熬制6小时、人均40吃撑'
  );
  const [rawKnowledgeText, setRawKnowledgeText] = useState<string>(
    `【店铺全称】${activeProfile.storeName}
【主打特色】${activeProfile.signatureProducts}
【目标受众】${activeProfile.targetAudience}
【核心记忆与利益点】${activeProfile.memoryAnchors}
【服务承诺】纯手工制作真材实料，支持随时退款，本地老街坊三十年口碑相传。`
  );

  // Extracted Memory Anchors
  const [extractedAnchors, setExtractedAnchors] = useState<string[]>([
    '镇店爆品核心细节',
    '客群痛点与颠覆钩子',
    '地域商圈同城定位',
    '限时福利促单利益点',
  ]);

  // Test Playground States
  const [testInput, setTestInput] = useState<string>('帮我根据本店知识库，写一句针对明天抖音爆款视频的前3秒痛点台词');
  const [testMessages, setTestMessages] = useState<
    { role: 'user' | 'agent'; text: string; time: string }[]
  >([
    {
      role: 'agent',
      text: `你好！我是你的专属 AI 智能体「${agentName}」，已成功深度挂载「${storeName}」RAG 知识库（共 24 条知识切片，检索准确度 99.4%）。请随时向我下达创作指令！`,
      time: '刚刚',
    },
  ]);
  const [isProcessingRAG, setIsProcessingRAG] = useState<boolean>(false);

  // Apply a Preset Template
  const handleApplyPreset = (tpl: (typeof PRESET_AGENT_TEMPLATES)[0]) => {
    setAgentName(tpl.name);
    setRolePersona(tpl.persona);
    setStoreName(tpl.storeName);
    setIndustry(tpl.industry);
    setCityLocation(tpl.cityLocation);
    setSignatureProducts(tpl.signatureProducts);
    setSelectedAvatar(tpl.avatar);
    setRawKnowledgeText(
      `【主体全称】${tpl.storeName}\n【所属行业】${tpl.industry}\n【定位坐标】${tpl.cityLocation}\n【镇店爆品】${tpl.signatureProducts}\n【记忆核心】${tpl.memoryAnchors}\n【系统准则】${tpl.systemDirective}`
    );
    setExtractedAnchors(tpl.memoryAnchors.split('; '));
    onShowNotice('success', `已载入优质智能体模板「${tpl.name}」！`);
  };

  // Run AI RAG Vectorization
  const handleRunRAGVectorization = () => {
    if (!rawKnowledgeText.trim()) {
      onShowNotice('error', '请先粘贴或输入店铺/商品资料！');
      return;
    }

    setIsProcessingRAG(true);
    setTimeout(() => {
      // Extract smart anchors
      const lines = rawKnowledgeText.split('\n').filter((l) => l.trim().length > 0);
      const anchors = lines.slice(0, 4).map((l) => l.replace(/【.*?】/, '').trim().slice(0, 24));
      setExtractedAnchors(anchors.length > 0 ? anchors : ['镇店爆品核心细节', '客群痛点颠覆认知', '同城打卡地址', '团购福利优惠']);
      setIsProcessingRAG(false);
      setActiveStep(3);
      onShowNotice('success', 'RAG 深度知识库已完成切片向量化与记忆锚点提取！');
    }, 900);
  };

  // Handle Test Chat Submission
  const handleSendTestMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!testInput.trim()) return;

    const userMsg = testInput.trim();
    setTestMessages((prev) => [
      ...prev,
      { role: 'user', text: userMsg, time: '刚刚' },
    ]);
    setTestInput('');

    // Simulate RAG Deep Response
    setTimeout(() => {
      const generatedReply = `【RAG知识库命中：${storeName} · ${cityLocation}】\n🎯 为你精准生成的爆款前3秒开场文案：\n\n“先别划走！如果你在${cityLocation}只知道盲目去网红大店排队，那真交了学费！藏在深巷里的这家【${storeName}】，主打【${signatureProducts.slice(0, 28)}】，人均几十块直接吃到扶墙出！”\n\n💡 编导建议：镜头配合大特写推镜，突出市井烟火气！`;
      setTestMessages((prev) => [
        ...prev,
        { role: 'agent', text: generatedReply, time: '刚刚' },
      ]);
    }, 600);
  };

  // Complete & Save
  const handleCompleteAndMount = () => {
    const updatedProfile: StoreMemoryProfile = {
      ...activeProfile,
      id: `profile_${Date.now()}`,
      storeName: storeName.trim() || '特色商铺',
      storePersona: agentName.trim() || '专属AI编导',
      industry: industry.trim() || '本地生活',
      cityLocation: cityLocation.trim() || '同城老街',
      signatureProducts: signatureProducts.trim() || '镇店爆款好物',
      memoryAnchors: extractedAnchors.join(' · '),
    };

    const newAgent: CustomAIAgent = {
      id: `agent_${Date.now()}`,
      name: agentName.trim() || '我的专属AI智能体',
      rolePersona,
      avatarIcon: selectedAvatar,
      accentColor: 'from-indigo-600 to-sky-500',
      knowledgeBaseCount: 32,
      recallScore: 99.4,
      memoryAnchors: extractedAnchors,
      systemDirective: `你作为「${agentName}」，深度熟记「${storeName}」知识库，服务于同城爆款视频生成与电商短视频转化。`,
      storeProfile: updatedProfile,
    };

    onSaveAgentAndProfile(newAgent, updatedProfile);
    onShowNotice('success', `个性化智能体「${agentName}」与 RAG 知识库已建立并全局挂载生效！`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl rounded-[28px] border border-slate-800 bg-slate-950 text-slate-100 shadow-[0_25px_70px_-15px_rgba(15,23,42,0.8)] overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800/80 bg-slate-900/40">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-600 text-white">
              <BrainCircuit className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white tracking-tight">
                  极简自定义 AI 智能体与 RAG 知识库
                </h3>
                <span className="rounded-full bg-cyan-500/10 border border-cyan-500/30 px-2 py-0.5 text-[10px] font-mono text-cyan-300">
                  RAG v3.8 向量引擎
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                极简 2 步极速建立，同时拥有工业级高深度记忆召回与精准内容生成能力
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Step Indicator Tabs */}
        <div className="flex items-center border-b border-slate-800/80 px-6 bg-slate-900/20 text-xs">
          {[
            { step: 1, title: '1. 智能体人设与命名', icon: Bot },
            { step: 2, title: '2. RAG 知识深度切片', icon: Database },
            { step: 3, title: '3. 试运行与效果验证', icon: Sparkles },
          ].map((item) => {
            const Icon = item.icon;
            const active = activeStep === item.step;
            const passed = activeStep > item.step;
            return (
              <button
                key={item.step}
                type="button"
                onClick={() => setActiveStep(item.step as 1 | 2 | 3)}
                className={`flex items-center gap-2 py-3 px-4 font-semibold border-b-2 transition-all cursor-pointer ${
                  active
                    ? 'border-cyan-400 text-cyan-300'
                    : passed
                    ? 'border-transparent text-emerald-400 hover:text-emerald-300'
                    : 'border-transparent text-slate-500 hover:text-slate-300'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{item.title}</span>
                {passed && <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />}
              </button>
            );
          })}
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* STEP 1: Agent Persona & Brand Information */}
          {activeStep === 1 && (
            <div className="space-y-5 animate-in fade-in duration-150">
              {/* Presets Bar */}
              <div className="rounded-2xl border border-slate-800/90 bg-slate-900/50 p-3.5 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400 font-semibold">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Award className="h-3.5 w-3.5 text-amber-400" />
                    <span>一键套用高分精选智能体模板（省时极速）</span>
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {PRESET_AGENT_TEMPLATES.map((tpl, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleApplyPreset(tpl)}
                      className="group flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/70 p-2.5 text-left hover:border-cyan-500/50 hover:bg-slate-800/60 transition-all cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-base">{tpl.avatar}</span>
                        <span className="text-[10px] text-slate-500 group-hover:text-cyan-400 transition-colors">
                          一键套用 →
                        </span>
                      </div>
                      <div className="font-bold text-xs text-white truncate">{tpl.name}</div>
                      <p className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">{tpl.persona}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-1">
                    <Bot className="h-3.5 w-3.5 text-cyan-400" />
                    <span>智能体名称 (Agent Name)</span>
                  </label>
                  <input
                    type="text"
                    value={agentName}
                    onChange={(e) => setAgentName(e.target.value)}
                    placeholder="如：星澜同城爆款探店官 / 千川美妆带货一姐"
                    className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2 text-xs text-white placeholder-slate-600 focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-1">
                    <Store className="h-3.5 w-3.5 text-indigo-400" />
                    <span>关联主体 / 店铺名称</span>
                  </label>
                  <input
                    type="text"
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                    placeholder="如：星澜洗护沙龙 / 阿强潮汕牛肉火锅"
                    className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2 text-xs text-white placeholder-slate-600 focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-amber-400" />
                    <span>同城商圈 / 地理锚点</span>
                  </label>
                  <input
                    type="text"
                    value={cityLocation}
                    onChange={(e) => setCityLocation(e.target.value)}
                    placeholder="如：西安 · 碑林区老街深巷 / 成都 · 春熙路"
                    className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2 text-xs text-white placeholder-slate-600 focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-1">
                    <Tag className="h-3.5 w-3.5 text-rose-400" />
                    <span>所属垂直行业</span>
                  </label>
                  <input
                    type="text"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    placeholder="如：餐饮美食 / 个护美妆 / 休闲娱乐"
                    className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2 text-xs text-white placeholder-slate-600 focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 flex items-center gap-1">
                  <Flame className="h-3.5 w-3.5 text-orange-400" />
                  <span>镇店爆品 / 核心招牌 / 爆款痛点</span>
                </label>
                <input
                  type="text"
                  value={signatureProducts}
                  onChange={(e) => setSignatureProducts(e.target.value)}
                  placeholder="如：现切鲜牛肉、牛骨高汤熬制6小时、人均40吃撑"
                  className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2 text-xs text-white placeholder-slate-600 focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveStep(2)}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-5 py-2.5 text-xs font-bold text-white transition-colors cursor-pointer"
                >
                  <span>下一步：注入 RAG 深度知识库</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: RAG Deep Knowledge Base Injection */}
          {activeStep === 2 && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div className="rounded-2xl border border-cyan-500/20 bg-cyan-950/20 p-4 space-y-2">
                <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold">
                  <Database className="h-4 w-4" />
                  <span>极简文本注入，AI 自动切片向量化</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  可直接粘贴任何介绍、菜单、特色故事、招牌卖点、或公号推文。系统将自动进行语义向量分块，生成高质量精准记忆锚点。
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <label className="font-semibold text-slate-300">
                    知识文本 / 资料手册（支持大段粘贴）
                  </label>
                  <span className="font-mono text-[10px] text-slate-500">
                    {rawKnowledgeText.length} 字符
                  </span>
                </div>
                <textarea
                  rows={8}
                  value={rawKnowledgeText}
                  onChange={(e) => setRawKnowledgeText(e.target.value)}
                  placeholder="粘贴店铺资料、招牌介绍、优惠政策、客户常见问题..."
                  className="w-full rounded-2xl border border-slate-800 bg-slate-900 p-4 text-xs font-mono text-slate-200 placeholder-slate-600 focus:border-cyan-400 focus:outline-none leading-relaxed"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setActiveStep(1)}
                  className="text-xs text-slate-400 hover:text-white cursor-pointer"
                >
                  ← 返回修改人设
                </button>

                <button
                  type="button"
                  disabled={isProcessingRAG}
                  onClick={handleRunRAGVectorization}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 px-5 py-2.5 text-xs font-bold text-white transition-colors cursor-pointer"
                >
                  {isProcessingRAG ? (
                    <>
                      <Cpu className="h-3.5 w-3.5 animate-spin" />
                      <span>正在进行向量化与记忆切片...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>开始智能向量化提取 (RAG)</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Test Playground & Verification */}
          {activeStep === 3 && (
            <div className="space-y-5 animate-in fade-in duration-150">
              {/* Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
                  <div className="text-[10px] text-slate-400">智能体主体</div>
                  <div className="text-xs font-bold text-white truncate mt-0.5">{storeName}</div>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
                  <div className="text-[10px] text-slate-400">向量知识切片</div>
                  <div className="text-xs font-bold text-cyan-300 font-mono mt-0.5">32 组语义分块</div>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
                  <div className="text-[10px] text-slate-400">记忆召回置信度</div>
                  <div className="text-xs font-bold text-emerald-400 font-mono mt-0.5">99.4% (高可靠)</div>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
                  <div className="text-[10px] text-slate-400">记忆锚点数</div>
                  <div className="text-xs font-bold text-purple-300 font-mono mt-0.5">
                    {extractedAnchors.length} 个核心标签
                  </div>
                </div>
              </div>

              {/* Anchors Pills */}
              <div className="space-y-1.5">
                <div className="text-xs font-semibold text-slate-400">已提取的 4 大核心记忆锚点：</div>
                <div className="flex flex-wrap gap-2">
                  {extractedAnchors.map((anc, idx) => (
                    <span
                      key={idx}
                      className="rounded-lg bg-slate-900 border border-slate-800 px-2.5 py-1 text-xs text-slate-300"
                    >
                      ✦ {anc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Chat Simulation Sandbox */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2">
                  <span className="flex items-center gap-1.5 text-slate-300 font-bold">
                    <Bot className="h-3.5 w-3.5 text-cyan-400" />
                    <span>智能体 RAG 记忆实时试调控台</span>
                  </span>
                  <span className="text-emerald-400 font-mono text-[10px]">● 已接入本地记忆池</span>
                </div>

                <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1 text-xs">
                  {testMessages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                    >
                      <div
                        className={`rounded-2xl px-3.5 py-2.5 max-w-[85%] leading-relaxed ${
                          msg.role === 'user'
                            ? 'bg-indigo-600 text-white rounded-tr-xs'
                            : 'bg-slate-800 text-slate-200 border border-slate-700/60 rounded-tl-xs whitespace-pre-line'
                        }`}
                      >
                        {msg.text}
                      </div>
                      <span className="text-[9px] text-slate-500 mt-0.5 px-1">{msg.time}</span>
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <form onSubmit={handleSendTestMessage} className="flex gap-2 pt-2 border-t border-slate-800">
                  <input
                    type="text"
                    value={testInput}
                    onChange={(e) => setTestInput(e.target.value)}
                    placeholder="输入测试提问，如：针对我们店写一句高留存黄金3秒开场..."
                    className="flex-1 rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2 text-xs text-white placeholder-slate-600 focus:border-cyan-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors cursor-pointer"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              </div>

              {/* Final Confirm Bar */}
              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setActiveStep(2)}
                  className="text-xs text-slate-400 hover:text-white cursor-pointer"
                >
                  ← 返回重新切片
                </button>

                <button
                  type="button"
                  onClick={handleCompleteAndMount}
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-6 py-2.5 text-xs font-bold text-white transition-colors cursor-pointer"
                >
                  <ShieldCheck className="h-4 w-4" />
                  <span>完成建立并立即全局挂载</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
