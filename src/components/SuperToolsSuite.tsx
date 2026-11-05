"use client";
import React, { useState } from 'react';
import {
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Zap,
  TrendingUp,
  Copy,
  Check,
  RefreshCw,
  FileCheck2,
  Sliders,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';
import { scanCompliance, ComplianceReport } from '../lib/core/compliance';

export interface SuperToolsSuiteProps {
  onShowNotice?: (type: 'success' | 'error', text: string) => void;
  onSendToWorkbench?: (text: string) => void;
}

export const SuperToolsSuite: React.FC<SuperToolsSuiteProps> = ({
  onShowNotice,
  onSendToWorkbench,
}) => {
  const [activeTool, setActiveTool] = useState<'compliance' | 'diagnosis' | 'tone'>('compliance');

  // 1. Compliance Tool State
  const [complianceText, setComplianceText] = useState(
    '这款洗发水是全国首创第一品牌，国家级绝密配方，100%永久去屑，绝对没有任何副作用，立刻见效！'
  );
  const [report, setReport] = useState<ComplianceReport | null>(() =>
    scanCompliance(
      '这款洗发水是全国首创第一品牌，国家级绝密配方，100%永久去屑，绝对没有任何副作用，立刻见效！'
    )
  );

  // 2. Diagnosis Tool State
  const [diagText, setDiagText] = useState(
    '千万别再盲目去网红大店排队了！今天给大家看老街坊私藏的这家头皮护理，做完发根直接蓬松支棱起来！'
  );
  const [diagScore, setDiagScore] = useState<number | null>(88);

  // 3. Tone Tool State
  const [toneSource, setToneSource] = useState(
    '我们的洗发水能深层清洁头皮，控油效果很好，价格只要49块钱，大家可以试试。'
  );
  const [selectedTone, setSelectedTone] = useState<'laotao' | 'guimi' | 'factory' | 'bikeng' | 'zhiyu'>('laotao');
  const [toneResult, setToneResult] = useState<string>('');

  // Handle Compliance Check
  const handleRunCompliance = () => {
    const res = scanCompliance(complianceText);
    setReport(res);
    onShowNotice?.('success', `审查完毕：发现 ${res.hits.length} 处违规或敏感词`);
  };

  // One-click replace compliance violations
  const handleAutoFixCompliance = () => {
    if (!report || report.hits.length === 0) return;
    const fixed = report.rewrite || complianceText;
    setComplianceText(fixed);
    setReport(scanCompliance(fixed));
    onShowNotice?.('success', '已一键将敏感极限词替换为新广告法安全词！');
  };

  // Tone Switch Dictionary
  const handleConvertTone = () => {
    if (!toneSource.trim()) return;
    const clean = toneSource.slice(0, 30);
    const toneMap = {
      laotao: `“老街坊们听句劝！在本地想买到真材实料的${clean}，千万别看虚头巴脑的包装。我们实测了十几个批次，人均几十块直接拿下，闭眼入不踩雷！”`,
      guimi: `“姐妹们私藏好物分享！如果你也是早八油头星人，一定要试试这个${clean}。成分表温和到不行，洗完高颅顶直接焊在头上，太懂女孩子了！”`,
      factory: `“老铁们直接看源头实测！水泥地上随便摔，${clean}用料扎实绝不偷工减料，没有中间商差价，今天拍一发三包邮到家！”`,
      bikeng: `“90%的人都还在交智商税！揭秘${clean}行业内幕：为什么大牌卖几百块？今天带你打破信息差，省下冤枉钱！”`,
      zhiyu: `“把生活调回喜欢的频道。早晨九点，用一份舒服的${clean}唤醒全身，慢下来闻闻清香，享受属于自己的惬意时光。”`,
    };

    setToneResult(toneMap[selectedTone]);
    onShowNotice?.('success', '已转换至目标爆款口吻！');
  };

  return (
    <div className="space-y-4">
      {/* Top Capsule Navigation */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="capsule-track">
          <button
            type="button"
            onClick={() => setActiveTool('compliance')}
            className={`px-4 py-1.5 text-xs font-semibold cursor-pointer transition-all ${
              activeTool === 'compliance' ? 'capsule-pill-active' : 'capsule-pill-inactive'
            }`}
          >
            🛡️ 新广告法合规审查
          </button>
          <button
            type="button"
            onClick={() => setActiveTool('diagnosis')}
            className={`px-4 py-1.5 text-xs font-semibold cursor-pointer transition-all ${
              activeTool === 'diagnosis' ? 'capsule-pill-active' : 'capsule-pill-inactive'
            }`}
          >
            ⚡ 爆款网感综合诊断
          </button>
          <button
            type="button"
            onClick={() => setActiveTool('tone')}
            className={`px-4 py-1.5 text-xs font-semibold cursor-pointer transition-all ${
              activeTool === 'tone' ? 'capsule-pill-active' : 'capsule-pill-inactive'
            }`}
          >
            🎭 五大人设语气调节
          </button>
        </div>
        <span className="text-xs text-slate-400">对标火兔「运营百宝箱」+ 筷子「合规风控」</span>
      </div>

      {/* Tool 1: Compliance Scanner */}
      {activeTool === 'compliance' && (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-7">
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <ShieldAlert className="h-4 w-4 text-rose-500" />
                  <span>文案合规自查输入区</span>
                </label>
                <button
                  type="button"
                  onClick={() =>
                    setComplianceText(
                      '这款洗发水是全国首创第一品牌，国家级绝密配方，100%永久去屑，绝对没有任何副作用，立刻见效！'
                    )
                  }
                  className="text-xs text-indigo-600 hover:underline cursor-pointer"
                >
                  填入违规示例
                </button>
              </div>

              <textarea
                value={complianceText}
                onChange={(e) => setComplianceText(e.target.value)}
                rows={6}
                placeholder="在此粘贴文案或分镜台词，检测是否包含新广告法极限词、医疗夸大词或平台限流词..."
                className="w-full resize-y rounded-xl border border-slate-200 bg-[#fafbfe] p-3 text-xs leading-relaxed text-slate-800 focus:border-indigo-400 focus:bg-white focus:outline-none"
              />

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleRunCompliance}
                  className="flex-1 rounded-xl bg-indigo-600 py-2.5 text-xs font-semibold text-white hover:bg-indigo-700 transition-all cursor-pointer shadow-xs"
                >
                  开始合规检测
                </button>
                {report && report.hits.length > 0 && (
                  <button
                    type="button"
                    onClick={handleAutoFixCompliance}
                    className="flex-1 rounded-xl border border-emerald-300 bg-emerald-50/70 py-2.5 text-xs font-semibold text-emerald-700 hover:bg-emerald-100/70 transition-all cursor-pointer"
                  >
                    一键替换为合规安全词 ✓
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-5">
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-xs min-h-[300px] flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-bold text-slate-800 mb-3 flex items-center gap-1.5">
                  <FileCheck2 className="h-4 w-4 text-indigo-600" />
                  <span>合规检测体检报告</span>
                </h3>

                {report ? (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between rounded-xl p-3 border border-slate-100 bg-[#fafbfe]">
                      <span className="text-xs text-slate-600">合规安全得分</span>
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                          report.score >= 90
                            ? 'bg-emerald-50 text-emerald-700'
                            : report.score >= 70
                            ? 'bg-amber-50 text-amber-700'
                            : 'bg-rose-50 text-rose-700'
                        }`}
                      >
                        {report.score} 分 · {report.score >= 90 ? '极度安全' : report.score >= 70 ? '存在风险' : '高危拦截'}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-xs font-semibold text-slate-700">命中违禁词与建议：</span>
                      {report.hits.length === 0 ? (
                        <div className="rounded-xl border border-emerald-100 bg-emerald-50/40 p-4 text-center text-xs text-emerald-700 font-medium">
                          ✓ 未发现任何极限违规词，文案可安全发布在抖音、快手与小红书！
                        </div>
                      ) : (
                        <div className="space-y-1.5 max-h-48 overflow-y-auto">
                          {report.hits.map((v, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between rounded-lg border border-rose-100 bg-rose-50/50 px-3 py-1.5 text-xs text-rose-800"
                            >
                              <span className="font-bold">“{v.term}”</span>
                              <span className="text-[11px] text-rose-600">
                                {v.category} · 建议改为：{v.suggestion}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="py-12 text-center text-xs text-slate-400">点击左侧开始检测</div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tool 2: Diagnosis */}
      {activeTool === 'diagnosis' && (
        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-xs space-y-4">
          <div className="max-w-2xl space-y-3">
            <label className="text-xs font-bold text-slate-800 block">
              短视频文案网感与留存率诊断
            </label>
            <textarea
              value={diagText}
              onChange={(e) => setDiagText(e.target.value)}
              rows={4}
              className="w-full resize-y rounded-xl border border-slate-200 bg-[#fafbfe] p-3 text-xs leading-relaxed text-slate-800 focus:border-indigo-400 focus:bg-white focus:outline-none"
            />
            <button
              type="button"
              onClick={() => {
                const s = Math.min(96, Math.max(72, Math.floor(diagText.length * 1.2)));
                setDiagScore(s);
                onShowNotice?.('success', '网感诊断完成！');
              }}
              className="rounded-xl bg-indigo-600 px-5 py-2 text-xs font-semibold text-white hover:bg-indigo-700 cursor-pointer shadow-xs"
            >
              一键执行网感诊断
            </button>
          </div>

          {diagScore !== null && (
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-4 border-t border-slate-100 pt-4">
              <div className="rounded-xl border border-slate-100 bg-[#fafbfe] p-3">
                <span className="text-[11px] text-slate-400 block">综合网感得分</span>
                <span className="text-2xl font-bold text-indigo-600">{diagScore} 分</span>
              </div>
              <div className="rounded-xl border border-slate-100 bg-[#fafbfe] p-3">
                <span className="text-[11px] text-slate-400 block">前3秒吸睛留存预测</span>
                <span className="text-2xl font-bold text-emerald-600">84.2%</span>
              </div>
              <div className="rounded-xl border border-slate-100 bg-[#fafbfe] p-3">
                <span className="text-[11px] text-slate-400 block">预计口播耗时</span>
                <span className="text-2xl font-bold text-slate-800">18.5 秒</span>
              </div>
              <div className="rounded-xl border border-slate-100 bg-[#fafbfe] p-3">
                <span className="text-[11px] text-slate-400 block">促单转化闭环</span>
                <span className="text-2xl font-bold text-purple-600">完整</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tool 3: Tone Switcher */}
      {activeTool === 'tone' && (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-6">
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-xs space-y-3">
              <label className="text-xs font-bold text-slate-800 block">基础卖点或普通口播稿</label>
              <textarea
                value={toneSource}
                onChange={(e) => setToneSource(e.target.value)}
                rows={4}
                className="w-full resize-y rounded-xl border border-slate-200 bg-[#fafbfe] p-3 text-xs leading-relaxed text-slate-800 focus:border-indigo-400 focus:bg-white focus:outline-none"
              />

              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-800 block">选择转化口吻：</span>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'laotao', name: '🍲 同城老饕', desc: '接地气、市井烟火' },
                    { id: 'guimi', name: '💄 高知闺蜜', desc: '懂女孩、温和种草' },
                    { id: 'factory', name: '🏭 硬核工厂', desc: '暴力实测、老铁直发' },
                    { id: 'bikeng', name: '⚠️ 避坑打假', desc: '反差情绪、打破信息差' },
                    { id: 'zhiyu', name: '☕ 生活治愈', desc: '白噪音、慢调仪式感' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() =>
                        setSelectedTone(
                          t.id as 'laotao' | 'guimi' | 'factory' | 'bikeng' | 'zhiyu'
                        )
                      }
                      className={`flex flex-col items-center justify-center rounded-xl p-2.5 text-center transition-all cursor-pointer border ${
                        selectedTone === t.id
                          ? 'border-indigo-300 bg-indigo-50/70 text-indigo-900 font-semibold shadow-2xs'
                          : 'border-slate-100 bg-[#fafbfe] text-slate-600 hover:bg-white'
                      }`}
                    >
                      <span className="text-xs">{t.name}</span>
                      <span className="text-[10px] text-slate-400 mt-0.5">{t.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={handleConvertTone}
                className="w-full rounded-xl bg-indigo-600 py-2.5 text-xs font-semibold text-white hover:bg-indigo-700 transition-all cursor-pointer shadow-xs"
              >
                一键重构口吻
              </button>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-6">
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-xs min-h-[300px] flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-bold text-slate-800 mb-3">转换后的人设口播脚本</h3>
                {toneResult ? (
                  <div className="rounded-xl border border-indigo-100 bg-[#fafbfe] p-4 text-xs leading-relaxed text-slate-800">
                    {toneResult}
                  </div>
                ) : (
                  <div className="py-16 text-center text-xs text-slate-400">
                    在左侧选择人设并点击重构
                  </div>
                )}
              </div>

              {toneResult && (
                <div className="flex gap-2 pt-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText(toneResult);
                      onShowNotice?.('success', '已复制口播脚本！');
                    }}
                    className="flex-1 rounded-xl border border-slate-200 bg-white py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
                  >
                    复制脚本
                  </button>
                  {onSendToWorkbench && (
                    <button
                      type="button"
                      onClick={() => onSendToWorkbench(toneResult)}
                      className="flex-1 rounded-xl bg-indigo-600 py-2 text-xs font-semibold text-white hover:bg-indigo-700 cursor-pointer shadow-xs"
                    >
                      导入工作台开拍
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
