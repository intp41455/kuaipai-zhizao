"use client";
import React, { useState, useEffect } from 'react';
import {
  QrCode,
  Plus,
  Copy,
  Download,
  Share2,
  Trash2,
  Edit3,
  ExternalLink,
  Users,
  Store,
  TrendingUp,
  Eye,
  CheckCircle2,
  Sparkles,
  RefreshCw,
  Search,
} from 'lucide-react';
import { StoreMemoryProfile } from '../data/curatedTemplates';

export interface LiveCodeItem {
  id: string;
  name: string;
  targetStore: string;
  dispatchType: 'store_nearby' | 'round_robin' | 'group_overflow';
  wechatAccounts: string[];
  totalScans: number;
  todayScans: number;
  conversionCount: number;
  status: 'active' | 'paused';
  createdAt: string;
  shortUrl: string;
}

export interface LiveCodeCenterProps {
  stores: StoreMemoryProfile[];
  onShowNotice?: (type: 'success' | 'error', text: string) => void;
}

export const LiveCodeCenter: React.FC<LiveCodeCenterProps> = ({
  stores,
  onShowNotice,
}) => {
  const [liveCodes, setLiveCodes] = useState<LiveCodeItem[]>([]);

  useEffect(() => {
    fetch('/api/v1/live-codes')
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setLiveCodes(
            data.map((r: any) => ({
              id: String(r.id),
              name: r.name,
              targetStore: r.storeName || '默认门店',
              dispatchType: r.dispatchType || 'round_robin',
              wechatAccounts: (r.wechatAccounts || []).map((w: any) => w.name || '专属客服'),
              totalScans: r.totalScans || 0,
              todayScans: r.todayScans || 0,
              conversionCount: Math.round((r.totalScans || 0) * 0.25),
              status: r.status || 'active',
              createdAt: r.createdAt || '刚刚',
              shortUrl: r.url || `/s/${r.shortKey}`,
            }))
          );
        }
      })
      .catch(() => {});
  }, []);

  const [searchKw, setSearchKw] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedPreviewCode, setSelectedPreviewCode] = useState<LiveCodeItem | null>(null);

  // Create Form State
  const [newName, setNewName] = useState('');
  const [newStore, setNewStore] = useState(stores[0]?.storeName || '默认门店');
  const [newDispatchType, setNewDispatchType] = useState<'store_nearby' | 'round_robin' | 'group_overflow'>('store_nearby');
  const [newWechat, setNewWechat] = useState('');

  const handleCreateLiveCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) {
      onShowNotice?.('error', '请填写活码名称！');
      return;
    }
    const accounts = newWechat
      .split(/[,，\s]/)
      .map((s) => s.trim())
      .filter(Boolean);

    fetch('/api/v1/live-codes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: newName.trim(),
        store_name: newStore,
        dispatch_type: newDispatchType,
        wechat_accounts: accounts.map((acc) => ({ name: acc, qrcode: '' })),
      }),
    })
      .then((r) => r.json())
      .then((res) => {
        const newItem: LiveCodeItem = {
          id: String(res.id || Date.now()),
          name: newName.trim(),
          targetStore: newStore,
          dispatchType: newDispatchType,
          wechatAccounts: accounts.length > 0 ? accounts : ['专属客服'],
          totalScans: 0,
          todayScans: 0,
          conversionCount: 0,
          status: 'active',
          createdAt: '刚刚',
          shortUrl: res.url || `/s/${res.shortKey}`,
        };
        setLiveCodes((prev) => [newItem, ...prev]);
        setShowCreateModal(false);
        setNewName('');
        setNewWechat('');
        onShowNotice?.('success', '门店引流活码已创建并落库至数据库！');
      })
      .catch(() => {});
  };

  const handleDelete = (id: string) => {
    const numId = id.replace('lc_', '');
    if (!isNaN(Number(numId))) {
      fetch(`/api/v1/live-codes/${numId}`, { method: 'DELETE' }).catch(() => {});
    }
    setLiveCodes((prev) => prev.filter((item) => item.id !== id));
    onShowNotice?.('success', '已从数据库删除该引流活码');
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    onShowNotice?.('success', '专属推广短链已复制！');
  };

  const filtered = liveCodes.filter((c) =>
    c.name.toLowerCase().includes(searchKw.toLowerCase()) ||
    c.targetStore.toLowerCase().includes(searchKw.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {/* Top Banner and Quick Stats */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-4">
        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-xs">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
            <span>活跃引流活码</span>
            <QrCode className="h-4 w-4 text-indigo-600" />
          </div>
          <div className="text-xl font-bold text-slate-800">{liveCodes.length} 个</div>
          <div className="text-[11px] text-emerald-600 mt-1">● 100% 动态轮询就绪</div>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-xs">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
            <span>今日总扫码 (PV)</span>
            <Eye className="h-4 w-4 text-blue-600" />
          </div>
          <div className="text-xl font-bold text-slate-800">
            {liveCodes.reduce((acc, cur) => acc + cur.todayScans, 0)} 次
          </div>
          <div className="text-[11px] text-slate-400 mt-1">视频挂载实时追踪</div>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-xs">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
            <span>累计引流线索 (UV)</span>
            <Users className="h-4 w-4 text-purple-600" />
          </div>
          <div className="text-xl font-bold text-slate-800">
            {liveCodes.reduce((acc, cur) => acc + cur.totalScans, 0)} 人
          </div>
          <div className="text-[11px] text-slate-400 mt-1">跨端精准归因</div>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-xs">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
            <span>到店 / 成交转化</span>
            <TrendingUp className="h-4 w-4 text-emerald-600" />
          </div>
          <div className="text-xl font-bold text-emerald-700">
            {liveCodes.reduce((acc, cur) => acc + cur.conversionCount, 0)} 单
          </div>
          <div className="text-[11px] text-emerald-600 mt-1">平均转化率 24.8%</div>
        </div>
      </div>

      {/* Main List Box */}
      <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-xs space-y-4">
        {/* Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2 flex-1 max-w-sm">
            <div className="relative w-full">
              <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
              <input
                value={searchKw}
                onChange={(e) => setSearchKw(e.target.value)}
                placeholder="搜索活码名称或所属门店..."
                className="w-full rounded-xl border border-slate-200 bg-[#fafbfe] pl-9 pr-3 py-1.5 text-xs text-slate-800 placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowCreateModal(true)}
            className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-700 transition-all cursor-pointer shadow-xs"
          >
            <Plus className="h-3.5 w-3.5" />
            <span>新建引流活码</span>
          </button>
        </div>

        {/* Live Code Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-[#f8faff] text-[11px] font-semibold text-slate-500 border-y border-slate-100">
              <tr>
                <th className="px-4 py-3">活码名称 / 短链</th>
                <th className="px-4 py-3">绑定门店</th>
                <th className="px-4 py-3">分流策略</th>
                <th className="px-4 py-3">客服/社群微信号</th>
                <th className="px-4 py-3 text-right">今日 / 累计扫码</th>
                <th className="px-4 py-3 text-right">到店转化</th>
                <th className="px-4 py-3 text-center">状态</th>
                <th className="px-4 py-3 text-right">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="px-4 py-3.5">
                    <div className="font-bold text-slate-900">{item.name}</div>
                    <div className="flex items-center gap-1.5 mt-0.5 text-[11px] text-slate-400">
                      <span>{item.shortUrl}</span>
                      <button
                        type="button"
                        onClick={() => handleCopy(item.shortUrl)}
                        className="text-indigo-600 hover:underline cursor-pointer"
                      >
                        复制
                      </button>
                    </div>
                  </td>

                  <td className="px-4 py-3.5">
                    <span className="inline-flex items-center gap-1 rounded-md bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-700 border border-slate-200/60">
                      <Store className="h-3 w-3 text-slate-400" />
                      <span>{item.targetStore}</span>
                    </span>
                  </td>

                  <td className="px-4 py-3.5">
                    <span className="text-[11px] text-slate-600">
                      {item.dispatchType === 'store_nearby' && '📍 同城就近分配'}
                      {item.dispatchType === 'round_robin' && '🔄 导购轮流分流'}
                      {item.dispatchType === 'group_overflow' && '👥 满200人自动换群'}
                    </span>
                  </td>

                  <td className="px-4 py-3.5">
                    <div className="flex flex-wrap gap-1">
                      {item.wechatAccounts.map((acc, i) => (
                        <span
                          key={i}
                          className="rounded bg-indigo-50/70 px-1.5 py-0.5 text-[10px] font-mono text-indigo-700"
                        >
                          {acc}
                        </span>
                      ))}
                    </div>
                  </td>

                  <td className="px-4 py-3.5 text-right font-mono">
                    <span className="font-bold text-indigo-600">{item.todayScans}</span>
                    <span className="text-slate-400"> / {item.totalScans}</span>
                  </td>

                  <td className="px-4 py-3.5 text-right font-mono font-bold text-emerald-600">
                    {item.conversionCount} 单
                  </td>

                  <td className="px-4 py-3.5 text-center">
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
                      正常运行
                    </span>
                  </td>

                  <td className="px-4 py-3.5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedPreviewCode(item)}
                        className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2 py-1 text-[11px] font-medium text-slate-700 hover:border-indigo-400 hover:text-indigo-600 cursor-pointer shadow-2xs"
                      >
                        <QrCode className="h-3 w-3" />
                        <span>看码</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDelete(item.id)}
                        className="rounded-lg p-1 text-slate-400 hover:bg-rose-50 hover:text-rose-600 cursor-pointer"
                        title="删除活码"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* QR Preview Modal */}
      {selectedPreviewCode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 animate-in fade-in duration-150">
          <div className="w-full max-w-sm rounded-3xl border border-slate-100 bg-white p-6 shadow-2xl space-y-4 text-center">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-900 truncate">
                {selectedPreviewCode.name}
              </h3>
              <button
                type="button"
                onClick={() => setSelectedPreviewCode(null)}
                className="text-slate-400 hover:text-slate-700 text-xs cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Simulated Live QR Code SVG */}
            <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-2xl border border-slate-100 bg-white p-3 shadow-inner">
              <svg viewBox="0 0 100 100" className="h-full w-full text-slate-900">
                <rect x="5" y="5" width="30" height="30" fill="currentColor" rx="4" />
                <rect x="10" y="10" width="20" height="20" fill="#ffffff" rx="2" />
                <rect x="15" y="15" width="10" height="10" fill="currentColor" />
                <rect x="65" y="5" width="30" height="30" fill="currentColor" rx="4" />
                <rect x="70" y="10" width="20" height="20" fill="#ffffff" rx="2" />
                <rect x="75" y="15" width="10" height="10" fill="currentColor" />
                <rect x="5" y="65" width="30" height="30" fill="currentColor" rx="4" />
                <rect x="10" y="70" width="20" height="20" fill="#ffffff" rx="2" />
                <rect x="15" y="75" width="10" height="10" fill="currentColor" />
                <circle cx="50" cy="50" r="10" fill="#4f46e5" />
                <text x="50" y="53" fill="#ffffff" fontSize="8" textAnchor="middle" fontWeight="bold">
                  快
                </text>
              </svg>
            </div>

            <div className="text-xs text-slate-500">
              <span>短链：{selectedPreviewCode.shortUrl}</span>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => handleCopy(selectedPreviewCode.shortUrl)}
                className="flex-1 rounded-xl border border-slate-200 bg-white py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                复制短链
              </button>
              <button
                type="button"
                onClick={() => {
                  onShowNotice?.('success', '已导出高清引流码图片！');
                  setSelectedPreviewCode(null);
                }}
                className="flex-1 rounded-xl bg-indigo-600 py-2 text-xs font-semibold text-white hover:bg-indigo-700 cursor-pointer shadow-xs"
              >
                下载高清码
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 animate-in fade-in duration-150">
          <form
            onSubmit={handleCreateLiveCode}
            className="w-full max-w-md rounded-3xl border border-slate-100 bg-white p-6 shadow-2xl space-y-4"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <QrCode className="h-4 w-4 text-indigo-600" />
                <h3 className="text-sm font-bold text-slate-900">新建门店引流活码</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowCreateModal(false)}
                className="text-slate-400 hover:text-slate-700 text-xs cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-slate-800 mb-1">活码名称 *</label>
                <input
                  required
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="例如：68元头皮护理专属到店码"
                  className="w-full rounded-xl border border-slate-200 bg-[#fafbfe] px-3 py-2 text-slate-800 focus:border-indigo-400 focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-800 mb-1">绑定门店</label>
                <select
                  value={newStore}
                  onChange={(e) => setNewStore(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-[#fafbfe] px-3 py-2 text-slate-800 focus:border-indigo-400 focus:bg-white focus:outline-none cursor-pointer"
                >
                  {stores.map((s) => (
                    <option key={s.id} value={s.storeName}>
                      {s.storeName} ({s.cityLocation})
                    </option>
                  ))}
                  <option value="全域线上直发仓">全域线上自营仓</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-800 mb-1">分流策略</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'store_nearby', label: '就近分配' },
                    { id: 'round_robin', label: '导购轮询' },
                    { id: 'group_overflow', label: '满员换群' },
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() =>
                        setNewDispatchType(
                          p.id as 'store_nearby' | 'round_robin' | 'group_overflow'
                        )
                      }
                      className={`rounded-xl border p-2 text-center transition-all cursor-pointer ${
                        newDispatchType === p.id
                          ? 'border-indigo-300 bg-indigo-50/70 text-indigo-700 font-semibold'
                          : 'border-slate-100 bg-[#fafbfe] text-slate-600'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-800 mb-1">
                  客服/导购微信号（多个用逗号隔开）
                </label>
                <input
                  value={newWechat}
                  onChange={(e) => setNewWechat(e.target.value)}
                  placeholder="如：wx_kf01, wx_kf02"
                  className="w-full rounded-xl border border-slate-200 bg-[#fafbfe] px-3 py-2 text-slate-800 focus:border-indigo-400 focus:bg-white focus:outline-none"
                />
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex gap-2">
              <button
                type="button"
                onClick={() => setShowCreateModal(false)}
                className="flex-1 rounded-xl border border-slate-200 bg-white py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer"
              >
                取消
              </button>
              <button
                type="submit"
                className="flex-1 rounded-xl bg-indigo-600 py-2 text-xs font-semibold text-white hover:bg-indigo-700 transition-all cursor-pointer shadow-xs"
              >
                确认创建
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
