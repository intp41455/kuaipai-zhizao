import React, { useState } from 'react';
import {
  Search,
  Plus,
  Download,
  Upload,
  LayoutGrid,
  List,
  Check,
  ChevronLeft,
  ChevronRight,
  FolderOpen,
  Film,
  Image as ImageIcon,
  FileText,
  Sparkles,
  Store,
  Users,
  Eye,
  Trash2,
  Edit3,
  TrendingUp,
} from 'lucide-react';
import { StoreMemoryProfile } from '../data/curatedTemplates';

export interface StaffMember {
  id: string;
  name: string;
  contact: string; // 手机号或邮箱
  status: 'enabled' | 'disabled';
  roles: string[];
  permissionsLabel: string;
  isPrimaryAccount?: boolean;
  boundStoreName?: string;
}

export interface StudioMaterialItem {
  id: string;
  title: string;
  type: 'video' | 'image' | 'copy';
  category: string;
  createdAt: string;
  previewUrl?: string;
  contentText?: string;
  source: 'AI生成' | '本地上传';
}

const ROLE_CARDS = [
  {
    id: '店长',
    title: '店长',
    desc: '拥有全部权限',
  },
  {
    id: '店员',
    title: '店员',
    desc: '接待顾客、核销券码',
  },
  {
    id: '运营',
    title: '运营',
    desc: '运营抖音号、管理商品',
  },
  {
    id: '财务',
    title: '财务',
    desc: '财务核算、管理账户',
  },
  {
    id: '客服',
    title: '客服',
    desc: '处理抖音私信、客户留资',
  },
];

/**
 * 商铺经营模块（完全对标截图1、2、3 抖音来客后台 + 截图5 线框图：门店管理 / 员工管理 / 素材管理）
 * 核心原则：系统以手机号/邮箱主账号为核心，店铺与员工为可选附加模块，界面极简清爽，每行仅保留「编辑 / 详情 / 停用 / 删除」操作
 */
export const MerchantManagementCenter: React.FC<{
  subTab: 'stores' | 'staff' | 'materials';
  onChangeSubTab: (tab: 'stores' | 'staff' | 'materials') => void;
  accountContact: string;
  storeMemoryEnabled: boolean;
  onToggleStoreMemory: (enabled: boolean) => void;
  stores: StoreMemoryProfile[];
  activeStoreId: string;
  onSelectStore: (store: StoreMemoryProfile) => void;
  onSaveStore: (storeDraft: Omit<StoreMemoryProfile, 'id'>, editId?: string | null) => void;
  onDeleteStore: (id: string) => void;
  onUseStoreForScript: (store: StoreMemoryProfile) => void;
  onShowNotice: (type: 'success' | 'error', msg: string) => void;
}> = ({
  subTab,
  onChangeSubTab,
  accountContact,
  storeMemoryEnabled,
  onToggleStoreMemory,
  stores = [],
  activeStoreId,
  onSelectStore,
  onSaveStore,
  onDeleteStore,
  onUseStoreForScript,
  onShowNotice = () => {},
}) => {
  // ==================== 1. 员工管理状态 (严格还原截图1、2、3) ====================
  const [staffList, setStaffList] = useState<StaffMember[]>([
    {
      id: 'staff_primary',
      name: '主账号',
      contact: accountContact || '173******89',
      status: 'enabled',
      roles: ['超级管理员'],
      permissionsLabel: '全部权限',
      isPrimaryAccount: true,
      boundStoreName: stores?.[0]?.storeName || '默认主账号空间',
    },
    {
      id: 'staff_02',
      name: '刘权',
      contact: '18826455471',
      status: 'enabled',
      roles: ['店长'],
      permissionsLabel: '全部权限',
      boundStoreName: stores?.[0]?.storeName || '星澜洗护沙龙',
    },
    {
      id: 'staff_03',
      name: '林晓雯',
      contact: 'linxw@kuaipai.cn',
      status: 'enabled',
      roles: ['运营'],
      permissionsLabel: '运营抖音号、管理商品',
      boundStoreName: stores?.[1]?.storeName || '爪爪星球萌宠馆',
    },
  ]);

  const [filterName, setFilterName] = useState('');
  const [filterContact, setFilterContact] = useState('');
  const [filterRole, setFilterRole] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  // 添加/编辑员工子视图状态 (严格还原截图3：添加员工账号)
  const [isStaffFormOpen, setIsStaffFormOpen] = useState(false);
  const [editingStaffId, setEditingStaffId] = useState<string | null>(null);
  const [staffNameInput, setStaffNameInput] = useState('');
  const [staffPhoneInput, setStaffPhoneInput] = useState('');
  const [selectedRoles, setSelectedRoles] = useState<string[]>(['店长']);
  const [detailStaffModal, setDetailStaffModal] = useState<StaffMember | null>(null);

  // ==================== 2. 门店管理状态 (列表/卡片视图切换 + 简洁行操作) ====================
  const [storeViewMode, setStoreViewMode] = useState<'table' | 'card'>('table');
  const [isStoreModalOpen, setIsStoreModalOpen] = useState(false);
  const [detailStoreModal, setDetailStoreModal] = useState<StoreMemoryProfile | null>(null);
  const [editingStoreId, setEditingStoreId] = useState<string | null>(null);
  const [sName, setSName] = useState('');
  const [sType, setSType] = useState('抖音来客同城团购 + 品牌店');
  const [sIndustry, setSIndustry] = useState('个护');
  const [sCity, setSCity] = useState('');
  const [sProducts, setSProducts] = useState('');
  const [sPersona, setSPersona] = useState('');
  const [sAudience, setSAudience] = useState('');
  const [sAnchors, setSAnchors] = useState('');

  // ==================== 3. 素材管理状态 (对应截图5线框图：视频/图片/文案资产管理) ====================
  const [materialFilter, setMaterialFilter] = useState<'all' | 'video' | 'image' | 'copy'>('all');
  const [materials, setMaterials] = useState<StudioMaterialItem[]>([
    {
      id: 'mat_1',
      title: '拯救头屑大作战_混剪成片.mp4',
      type: 'video',
      category: '个护',
      createdAt: '2026-11-02',
      previewUrl:
        'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
      source: 'AI生成',
    },
    {
      id: 'mat_2',
      title: '01_旗舰商拍主图_氨基酸洗发水.png',
      type: 'image',
      category: '个护',
      createdAt: '2026-11-02',
      previewUrl:
        'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
      source: 'AI生成',
    },
    {
      id: 'mat_3',
      title: '黄金前3秒痛点反问口播话术合集.txt',
      type: 'copy',
      category: '通用脚本',
      createdAt: '2026-11-01',
      contentText: '刚洗完头不到半天又扁塌泛油？别急着换洗发水，先看成分表第2位！',
      source: 'AI生成',
    },
  ]);
  const [editingMaterialId, setEditingMaterialId] = useState<string | null>(null);
  const [editingMaterialTitle, setEditingMaterialTitle] = useState('');

  const filteredStaff = staffList.filter((item) => {
    if (filterName.trim() && !item.name.toLowerCase().includes(filterName.trim().toLowerCase())) {
      return false;
    }
    if (
      filterContact.trim() &&
      !item.contact.toLowerCase().includes(filterContact.trim().toLowerCase())
    ) {
      return false;
    }
    if (filterRole && !item.roles.includes(filterRole)) {
      return false;
    }
    if (filterStatus && item.status !== filterStatus) {
      return false;
    }
    return true;
  });

  const handleOpenAddStaff = () => {
    setEditingStaffId(null);
    setStaffNameInput('');
    setStaffPhoneInput('');
    setSelectedRoles(['店长']);
    setIsStaffFormOpen(true);
  };

  const handleOpenEditStaff = (member: StaffMember) => {
    setEditingStaffId(member.id);
    setStaffNameInput(member.name);
    setStaffPhoneInput(member.contact);
    setSelectedRoles(member.roles);
    setIsStaffFormOpen(true);
  };

  const handleSaveStaff = (e: React.FormEvent) => {
    e.preventDefault();
    if (!staffNameInput.trim() || !staffPhoneInput.trim()) {
      onShowNotice('error', '请填写员工姓名与手机号/邮箱');
      return;
    }
    const permText = selectedRoles.includes('店长')
      ? '全部权限'
      : ROLE_CARDS.filter((r) => selectedRoles.includes(r.id))
          .map((r) => r.desc)
          .join('、') || '基础权限';

    if (editingStaffId) {
      setStaffList((prev) =>
        prev.map((item) =>
          item.id === editingStaffId
            ? {
                ...item,
                name: staffNameInput.trim(),
                contact: staffPhoneInput.trim(),
                roles: selectedRoles,
                permissionsLabel: permText,
              }
            : item
        )
      );
      onShowNotice('success', `已更新员工「${staffNameInput}」信息`);
    } else {
      const newMember: StaffMember = {
        id: `staff_${Date.now()}`,
        name: staffNameInput.trim(),
        contact: staffPhoneInput.trim(),
        status: 'enabled',
        roles: selectedRoles,
        permissionsLabel: permText,
        boundStoreName: stores.find((s) => s.id === activeStoreId)?.storeName || '默认门店',
      };
      setStaffList((prev) => [...prev, newMember]);
      onShowNotice('success', `已添加员工账号「${staffNameInput}」`);
    }
    setIsStaffFormOpen(false);
  };

  const handleOpenStoreForm = (store?: StoreMemoryProfile) => {
    if (store) {
      setEditingStoreId(store.id.startsWith('store_') ? null : store.id);
      setSName(store.storeName);
      setSType(store.storeType);
      setSIndustry(store.industry);
      setSCity(store.cityLocation);
      setSProducts(store.signatureProducts);
      setSPersona(store.storePersona);
      setSAudience(store.targetAudience);
      setSAnchors(store.memoryAnchors);
    } else {
      setEditingStoreId(null);
      setSName('');
      setSType('抖音来客同城团购 + 品牌店');
      setSIndustry('个护');
      setSCity('');
      setSProducts('');
      setSPersona('');
      setSAudience('');
      setSAnchors('');
    }
    setIsStoreModalOpen(true);
  };

  const handleExportStaffCsv = () => {
    const rows = [
      ['员工姓名', '手机号/邮箱', '账号状态', '岗位', '拥有权限'],
      ...filteredStaff.map((s) => [
        s.name,
        s.contact,
        s.status === 'enabled' ? '已启用' : '已停用',
        s.roles.join('/'),
        s.permissionsLabel,
      ]),
    ];
    const csv = '\uFEFF' + rows.map((r) => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '员工账号列表.csv';
    a.click();
    URL.revokeObjectURL(url);
    onShowNotice('success', '已导出员工账号数据表格');
  };

  return (
    <div className="space-y-5">
      {/* 顶部清爽二级导航 + 账号为主/店铺可选说明条 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white rounded-xl border border-slate-200/90 px-5 py-3.5 shadow-2xs">
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
          <button
            type="button"
            onClick={() => {
              onChangeSubTab('staff');
              setIsStaffFormOpen(false);
            }}
            className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
              subTab === 'staff'
                ? 'bg-white text-slate-900 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            员工管理
          </button>
          <button
            type="button"
            onClick={() => onChangeSubTab('stores')}
            className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
              subTab === 'stores'
                ? 'bg-white text-slate-900 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            门店管理 ({stores.length})
          </button>
          <button
            type="button"
            onClick={() => onChangeSubTab('materials')}
            className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
              subTab === 'materials'
                ? 'bg-white text-slate-900 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            素材管理 ({materials.length})
          </button>
        </div>

        {/* 主账号绑定提示 + 可选开启店铺开关 */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600">
          <span>
            当前归属主账号：<strong className="text-slate-900 font-mono">{accountContact}</strong>
          </span>
          <label className="inline-flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={storeMemoryEnabled}
              onChange={(e) => onToggleStoreMemory(e.target.checked)}
              className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 h-3.5 w-3.5"
            />
            <span className="text-slate-700 font-medium">
              启用店铺定向分析（可选项，个人创作者可关闭）
            </span>
          </label>
        </div>
      </div>

      {/* ==================== TAB 1: 员工管理 (1:1 还原截图 1、2、3 抖音来客简洁风格) ==================== */}
      {subTab === 'staff' && (
        <div className="bg-white rounded-xl border border-slate-200/90 p-6 shadow-2xs">
          {isStaffFormOpen ? (
            /* 截图3：添加员工账号表单视图 */
            <form onSubmit={handleSaveStaff} className="max-w-3xl space-y-6">
              <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsStaffFormOpen(false)}
                  className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <h2 className="text-base font-bold text-slate-900">
                  {editingStaffId ? '编辑员工账号' : '添加员工账号'}
                </h2>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-bold text-slate-900">基本信息</h3>
                <div className="grid grid-cols-1 gap-4 max-w-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <label className="w-24 text-xs font-medium text-slate-700 shrink-0">
                      员工姓名 <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={staffNameInput}
                      onChange={(e) => setStaffNameInput(e.target.value)}
                      placeholder="建议输入准确的员工姓名，便于后续管理"
                      className="flex-1 h-9 rounded-lg border border-slate-200 px-3 text-xs text-slate-900 focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <label className="w-24 text-xs font-medium text-slate-700 shrink-0">
                      手机号/邮箱 <span className="text-rose-500">*</span>
                    </label>
                    <div className="flex-1 flex items-center h-9 rounded-lg border border-slate-200 overflow-hidden focus-within:border-blue-500">
                      <span className="px-2.5 text-xs text-slate-500 bg-slate-50 border-r border-slate-200 h-full flex items-center">
                        +86
                      </span>
                      <input
                        type="text"
                        value={staffPhoneInput}
                        onChange={(e) => setStaffPhoneInput(e.target.value)}
                        placeholder="请输入手机号或邮箱"
                        className="flex-1 px-3 text-xs text-slate-900 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <h3 className="text-sm font-bold text-slate-900">岗位与权限</h3>
                <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                  <label className="w-24 text-xs font-medium text-slate-700 shrink-0 pt-2">
                    员工岗位 <span className="text-rose-500">*</span>
                    <span className="block text-[11px] text-slate-400 font-normal">(可多选)</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 flex-1">
                    {ROLE_CARDS.map((role) => {
                      const checked = selectedRoles.includes(role.id);
                      return (
                        <div
                          key={role.id}
                          onClick={() => {
                            setSelectedRoles((prev) =>
                              prev.includes(role.id)
                                ? prev.length > 1
                                  ? prev.filter((r) => r !== role.id)
                                  : prev
                                : [...prev, role.id]
                            );
                          }}
                          className={`rounded-lg border p-3.5 cursor-pointer transition-all ${
                            checked
                              ? 'border-blue-500 bg-blue-50/30'
                              : 'border-slate-200 hover:border-slate-300 bg-white'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-slate-900">{role.title}</span>
                            <span
                              className={`w-4 h-4 rounded flex items-center justify-center border ${
                                checked
                                  ? 'bg-blue-600 border-blue-600 text-white'
                                  : 'border-slate-300 bg-white'
                              }`}
                            >
                              {checked && <Check className="w-3 h-3" />}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 leading-relaxed">{role.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-center gap-3">
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold cursor-pointer"
                >
                  确定
                </button>
                <button
                  type="button"
                  onClick={() => setIsStaffFormOpen(false)}
                  className="px-6 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold cursor-pointer"
                >
                  取消
                </button>
              </div>
            </form>
          ) : (
            /* 截图1 & 2：员工管理列表视图 */
            <div className="space-y-5">
              <div className="flex items-center gap-2.5">
                <h2 className="text-base font-bold text-slate-900">员工管理</h2>
                <span className="px-2 py-0.5 rounded bg-slate-100 text-[11px] font-medium text-slate-600">
                  多岗分工 ⇆
                </span>
              </div>

              {/* 筛选栏 (严格还原截图2：一行4个输入框 + 查询/重置) */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center h-9 rounded-lg border border-slate-200 bg-white px-3 min-w-[200px] flex-1">
                  <span className="text-xs text-slate-500 pr-2 shrink-0">员工姓名</span>
                  <input
                    type="text"
                    value={filterName}
                    onChange={(e) => setFilterName(e.target.value)}
                    placeholder="请输入"
                    className="w-full text-xs text-slate-900 focus:outline-none"
                  />
                </div>

                <div className="flex items-center h-9 rounded-lg border border-slate-200 bg-white px-3 min-w-[220px] flex-1">
                  <span className="text-xs text-slate-500 pr-2 shrink-0">联系方式</span>
                  <input
                    type="text"
                    value={filterContact}
                    onChange={(e) => setFilterContact(e.target.value)}
                    placeholder="请输入手机号或邮箱"
                    className="w-full text-xs text-slate-900 focus:outline-none"
                  />
                </div>

                <div className="flex items-center h-9 rounded-lg border border-slate-200 bg-white px-3 min-w-[160px]">
                  <span className="text-xs text-slate-500 pr-2 shrink-0">岗位</span>
                  <select
                    value={filterRole}
                    onChange={(e) => setFilterRole(e.target.value)}
                    className="w-full text-xs text-slate-800 bg-transparent focus:outline-none"
                  >
                    <option value="">全部</option>
                    <option value="超级管理员">超级管理员</option>
                    <option value="店长">店长</option>
                    <option value="运营">运营</option>
                    <option value="店员">店员</option>
                    <option value="客服">客服</option>
                  </select>
                </div>

                <div className="flex items-center h-9 rounded-lg border border-slate-200 bg-white px-3 min-w-[160px]">
                  <span className="text-xs text-slate-500 pr-2 shrink-0">账号状态</span>
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="w-full text-xs text-slate-800 bg-transparent focus:outline-none"
                  >
                    <option value="">全部</option>
                    <option value="enabled">已启用</option>
                    <option value="disabled">已停用</option>
                  </select>
                </div>

                <button
                  type="button"
                  onClick={() => onShowNotice('success', `已筛选出 ${filteredStaff.length} 名员工`)}
                  className="h-9 px-5 rounded-lg border border-blue-500 text-blue-600 hover:bg-blue-50 text-xs font-semibold cursor-pointer"
                >
                  查询
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setFilterName('');
                    setFilterContact('');
                    setFilterRole('');
                    setFilterStatus('');
                  }}
                  className="h-9 px-5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-semibold cursor-pointer"
                >
                  重置
                </button>
              </div>

              {/* 工具操作行 */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-600">
                    员工数量: <strong className="text-slate-900">{filteredStaff.length}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={handleExportStaffCsv}
                    className="h-9 px-4 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-xs font-medium text-slate-700 cursor-pointer"
                  >
                    导出数据
                  </button>
                  <button
                    type="button"
                    onClick={handleOpenAddStaff}
                    className="h-9 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold cursor-pointer"
                  >
                    添加员工账号
                  </button>
                </div>
              </div>

              {/* 极简清爽表格 (严格还原截图1 & 2) */}
              <div className="overflow-x-auto rounded-lg border border-slate-200/80">
                <table className="w-full border-collapse text-left text-xs">
                  <thead>
                    <tr className="bg-slate-50/90 border-b border-slate-200/80 text-slate-600 font-medium">
                      <th className="py-3.5 px-4 w-10">
                        <input type="checkbox" className="rounded border-slate-300" />
                      </th>
                      <th className="py-3.5 px-4">员工姓名</th>
                      <th className="py-3.5 px-4">手机号/邮箱</th>
                      <th className="py-3.5 px-4">账号状态</th>
                      <th className="py-3.5 px-4">岗位</th>
                      <th className="py-3.5 px-4">拥有权限</th>
                      <th className="py-3.5 px-4 text-right pr-6">操作</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {filteredStaff.map((member) => (
                      <tr key={member.id} className="py-3.5 even:bg-slate-50 hover:bg-slate-100/60 transition-colors">
                        <td className="py-4 px-4">
                          <input type="checkbox" className="rounded border-slate-300" />
                        </td>
                        <td className="py-4 px-4 font-medium text-slate-900">{member.name}</td>
                        <td className="py-4 px-4 font-mono text-slate-700">{member.contact}</td>
                        <td className="py-4 px-4">
                          {member.status === 'enabled' ? (
                            <span className="inline-block px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 text-[11px] font-medium">
                              已启用
                            </span>
                          ) : (
                            <span className="inline-block px-2 py-0.5 rounded bg-slate-100 text-slate-500 text-[11px] font-medium">
                              已停用
                            </span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-slate-800">{member.roles.join('、')}</td>
                        <td className="py-4 px-4">
                          <button
                            type="button"
                            onClick={() => setDetailStaffModal(member)}
                            className="inline-flex items-center gap-0.5 text-slate-700 hover:text-blue-600 cursor-pointer"
                          >
                            <span>{member.permissionsLabel}</span>
                            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                          </button>
                        </td>
                        <td className="py-4 px-4 text-right pr-6">
                          {member.isPrimaryAccount ? (
                            <button
                              type="button"
                              onClick={() => setDetailStaffModal(member)}
                              className="text-blue-600 hover:underline font-medium cursor-pointer"
                            >
                              详情
                            </button>
                          ) : (
                            <div className="inline-flex items-center gap-3 text-blue-600 font-medium">
                              <button
                                type="button"
                                onClick={() => handleOpenEditStaff(member)}
                                className="hover:underline cursor-pointer"
                              >
                                编辑
                              </button>
                              <button
                                type="button"
                                onClick={() => setDetailStaffModal(member)}
                                className="hover:underline cursor-pointer"
                              >
                                详情
                              </button>
                              <button
                                type="button"
                                onClick={() => {
                                  setStaffList((prev) =>
                                    prev.map((s) =>
                                      s.id === member.id
                                        ? {
                                            ...s,
                                            status:
                                              s.status === 'enabled' ? 'disabled' : 'enabled',
                                          }
                                        : s
                                    )
                                  );
                                }}
                                className="hover:underline cursor-pointer"
                              >
                                {member.status === 'enabled' ? '停用' : '启用'}
                              </button>
                              <button
                                type="button"
                                onClick={() => {
                                  setStaffList((prev) => prev.filter((s) => s.id !== member.id));
                                  onShowNotice('success', `已删除员工「${member.name}」`);
                                }}
                                className="hover:underline text-rose-600 cursor-pointer"
                              >
                                删除
                              </button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* 底部分页条 (还原截图1右下角) */}
              <div className="flex items-center justify-end gap-2 pt-2 text-xs text-slate-500">
                <span className="px-2.5 py-1 rounded border border-slate-200 text-slate-400">
                  &lt;
                </span>
                <span className="px-3 py-1 rounded border border-blue-600 text-blue-600 font-semibold">
                  1
                </span>
                <span className="px-2.5 py-1 rounded border border-slate-200 text-slate-400">
                  &gt;
                </span>
                <span className="px-2.5 py-1 rounded border border-slate-200 text-slate-600">
                  10条/页
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ==================== TAB 2: 门店管理 (列表/卡片视图切换 + 简洁「切换 / 编辑 / 详情 / 删除」行操作) ==================== */}
      {subTab === 'stores' && (
        <div className="bg-white rounded-xl border border-slate-200/90 p-6 shadow-2xs space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-base font-bold text-slate-900">门店与商品档案管理（选填）</h2>
              <p className="text-xs text-slate-500 mt-0.5">
                需要拍摄实体店团购或专属品牌内容时可在此建档；每一行点击「编辑 / 详情 / 设为当前」即可操作
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="flex items-center rounded-lg border border-slate-200 p-0.5 bg-slate-50">
                <button
                  type="button"
                  onClick={() => setStoreViewMode('table')}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1 cursor-pointer ${
                    storeViewMode === 'table'
                      ? 'bg-white text-slate-900 shadow-2xs'
                      : 'text-slate-500'
                  }`}
                >
                  <List className="w-3.5 h-3.5" />
                  列表视图
                </button>
                <button
                  type="button"
                  onClick={() => setStoreViewMode('card')}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1 cursor-pointer ${
                    storeViewMode === 'card'
                      ? 'bg-white text-slate-900 shadow-2xs'
                      : 'text-slate-500'
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  卡片视图
                </button>
              </div>

              <button
                type="button"
                onClick={() => handleOpenStoreForm()}
                className="h-9 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                新建门店档案
              </button>
            </div>
          </div>

          {storeViewMode === 'table' ? (
            <div className="overflow-x-auto rounded-lg border border-slate-200/80">
              <table className="w-full border-collapse text-left text-xs">
                <thead>
                  <tr className="bg-slate-50/90 border-b border-slate-200/80 text-slate-600 font-medium">
                    <th className="py-3.5 px-4">门店/品牌名称</th>
                    <th className="py-3.5 px-4">行业品类</th>
                    <th className="py-3.5 px-4">所在城市商圈</th>
                    <th className="py-3.5 px-4">镇店套餐/核心产品</th>
                    <th className="py-3.5 px-4">当前状态</th>
                    <th className="py-3.5 px-4 text-right pr-6">操作</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {stores.map((st) => {
                    const isCurrent = st.id === activeStoreId && storeMemoryEnabled;
                    const isCustom = !st.id.startsWith('store_');
                    return (
                      <tr key={st.id} className="py-3.5 even:bg-slate-50 hover:bg-slate-100/60 transition-colors">
                        <td className="py-4 px-4 font-semibold text-slate-900">{st.storeName}</td>
                        <td className="py-4 px-4 text-slate-600">{st.industry}</td>
                        <td className="py-4 px-4 text-slate-600 max-w-[180px] truncate">
                          {st.cityLocation}
                        </td>
                        <td className="py-4 px-4 text-slate-600 max-w-[240px] truncate">
                          {st.signatureProducts}
                        </td>
                        <td className="py-4 px-4">
                          {isCurrent ? (
                            <span className="inline-block px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 text-[11px] font-medium">
                              当前已绑定
                            </span>
                          ) : (
                            <span className="inline-block px-2 py-0.5 rounded bg-slate-100 text-slate-500 text-[11px] font-medium">
                              备用档案
                            </span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-right pr-6">
                          <div className="inline-flex items-center gap-3 text-blue-600 font-medium">
                            <button
                              type="button"
                              onClick={() => {
                                onSelectStore(st);
                                onToggleStoreMemory(true);
                                onShowNotice('success', `已切换当前门店为「${st.storeName}」`);
                              }}
                              className="hover:underline cursor-pointer"
                            >
                              {isCurrent ? '已启用' : '启用'}
                            </button>
                            <button
                              type="button"
                              onClick={() => handleOpenStoreForm(st)}
                              className="hover:underline cursor-pointer"
                            >
                              编辑
                            </button>
                            <button
                              type="button"
                              onClick={() => setDetailStoreModal(st)}
                              className="hover:underline cursor-pointer"
                            >
                              详情
                            </button>
                            <button
                              type="button"
                              onClick={() => onUseStoreForScript(st)}
                              className="hover:underline cursor-pointer"
                            >
                              生成脚本
                            </button>
                            {isCustom && (
                              <button
                                type="button"
                                onClick={() => onDeleteStore(st.id)}
                                className="hover:underline text-rose-600 cursor-pointer"
                              >
                                删除
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {stores.map((st) => {
                const isCurrent = st.id === activeStoreId && storeMemoryEnabled;
                return (
                  <div
                    key={st.id}
                    className={`rounded-xl border p-4 flex flex-col justify-between transition-all ${
                      isCurrent ? 'border-blue-500 bg-blue-50/20' : 'border-slate-200 bg-white'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-bold text-slate-900">{st.storeName}</h3>
                        <span className="text-xs text-slate-500">{st.industry}</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">{st.cityLocation}</p>
                      <p className="text-xs text-slate-700 mt-2 line-clamp-2">
                        套餐：{st.signatureProducts}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-end gap-3 text-xs font-medium text-blue-600">
                      <button
                        type="button"
                        onClick={() => {
                          onSelectStore(st);
                          onToggleStoreMemory(true);
                        }}
                        className="hover:underline cursor-pointer"
                      >
                        {isCurrent ? '当前启用' : '设为当前'}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleOpenStoreForm(st)}
                        className="hover:underline cursor-pointer"
                      >
                        编辑
                      </button>
                      <button
                        type="button"
                        onClick={() => setDetailStoreModal(st)}
                        className="hover:underline cursor-pointer"
                      >
                        详情
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ==================== TAB 3: 素材管理 (对应截图5线框图：视频/图片/文案上传与AI生成归档) ==================== */}
      {subTab === 'materials' && (
        <div className="bg-white rounded-xl border border-slate-200/90 p-6 shadow-2xs space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {(['all', 'video', 'image', 'copy'] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setMaterialFilter(t)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                    materialFilter === t
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {t === 'all'
                    ? '全部素材'
                    : t === 'video'
                    ? '视频素材'
                    : t === 'image'
                    ? '商品图片'
                    : '脚本文案'}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  const newMat: StudioMaterialItem = {
                    id: `mat_${Date.now()}`,
                    title: `上传门店实拍素材_${materials.length + 1}.mp4`,
                    type: 'video',
                    category: '实拍素材',
                    createdAt: '2026-11-02',
                    source: '本地上传',
                  };
                  setMaterials((prev) => [newMat, ...prev]);
                  onShowNotice('success', '已添加素材至当前账户素材库');
                }}
                className="h-9 px-4 rounded-lg border border-slate-200 hover:bg-slate-50 text-xs font-medium text-slate-700 flex items-center gap-1.5 cursor-pointer"
              >
                <Upload className="w-3.5 h-3.5" />
                上传素材
              </button>
            </div>
          </div>

          <div className="overflow-x-auto rounded-lg border border-slate-200/80">
            <table className="w-full border-collapse text-left text-xs">
              <thead>
                <tr className="bg-slate-50/90 border-b border-slate-200/80 text-slate-600 font-medium">
                  <th className="py-3.5 px-4">素材名称</th>
                  <th className="py-3.5 px-4">类型</th>
                  <th className="py-3.5 px-4">分类</th>
                  <th className="py-3.5 px-4">来源</th>
                  <th className="py-3.5 px-4">创建时间</th>
                  <th className="py-3.5 px-4 text-right pr-6">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {materials
                  .filter((m) => materialFilter === 'all' || m.type === materialFilter)
                  .map((mat) => (
                    <tr key={mat.id} className="py-3.5 even:bg-slate-50 hover:bg-slate-100/60 transition-colors">
                      <td className="py-4 px-4 font-medium text-slate-900">
                        {editingMaterialId === mat.id ? (
                          <div className="flex items-center gap-2">
                            <input
                              type="text"
                              value={editingMaterialTitle}
                              onChange={(e) => setEditingMaterialTitle(e.target.value)}
                              className="h-7 rounded border border-blue-500 px-2 text-xs"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                setMaterials((prev) =>
                                  prev.map((x) =>
                                    x.id === mat.id ? { ...x, title: editingMaterialTitle } : x
                                  )
                                );
                                setEditingMaterialId(null);
                              }}
                              className="text-blue-600 font-semibold"
                            >
                              保存
                            </button>
                          </div>
                        ) : (
                          mat.title
                        )}
                      </td>
                      <td className="py-4 px-4 text-slate-600">
                        {mat.type === 'video' ? '视频' : mat.type === 'image' ? '图片' : '文案'}
                      </td>
                      <td className="py-4 px-4 text-slate-600">{mat.category}</td>
                      <td className="py-4 px-4">
                        <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px]">
                          {mat.source}
                        </span>
                      </td>
                      <td className="py-4 px-4 font-mono text-slate-500">{mat.createdAt}</td>
                      <td className="py-4 px-4 text-right pr-6">
                        <div className="inline-flex items-center gap-3 text-blue-600 font-medium">
                          <button
                            type="button"
                            onClick={() => {
                              setEditingMaterialId(mat.id);
                              setEditingMaterialTitle(mat.title);
                            }}
                            className="hover:underline cursor-pointer"
                          >
                            重命名
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setMaterials((prev) => prev.filter((x) => x.id !== mat.id));
                              onShowNotice('success', '已删除素材');
                            }}
                            className="hover:underline text-rose-600 cursor-pointer"
                          >
                            删除
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 员工详情简洁弹窗 */}
      {detailStaffModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl border border-slate-200 space-y-4">
            <h3 className="text-base font-bold text-slate-900">员工账号详情</h3>
            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500">员工姓名</span>
                <span className="font-semibold text-slate-900">{detailStaffModal.name}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500">手机号 / 邮箱</span>
                <span className="font-mono text-slate-900">{detailStaffModal.contact}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500">岗位角色</span>
                <span className="text-slate-900">{detailStaffModal.roles.join('、')}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500">拥有权限</span>
                <span className="text-slate-900">{detailStaffModal.permissionsLabel}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-500">关联门店</span>
                <span className="text-slate-900">{detailStaffModal.boundStoreName || '全部门店'}</span>
              </div>
            </div>
            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => setDetailStaffModal(null)}
                className="px-5 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold cursor-pointer"
              >
                关闭
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 门店详情简洁弹窗 */}
      {detailStoreModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
          <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl border border-slate-200 space-y-4">
            <h3 className="text-base font-bold text-slate-900">{detailStoreModal.storeName}</h3>
            <div className="space-y-2.5 text-xs">
              <div>
                <span className="text-slate-400 block mb-0.5">所在城市与商圈</span>
                <p className="text-slate-800">{detailStoreModal.cityLocation}</p>
              </div>
              <div>
                <span className="text-slate-400 block mb-0.5">镇店爆品 / 团购套餐</span>
                <p className="text-slate-800">{detailStoreModal.signatureProducts}</p>
              </div>
              <div>
                <span className="text-slate-400 block mb-0.5">主理人人设语气</span>
                <p className="text-slate-800">{detailStoreModal.storePersona}</p>
              </div>
              <div>
                <span className="text-slate-400 block mb-0.5">专属记忆锚点</span>
                <p className="text-slate-800">{detailStoreModal.memoryAnchors}</p>
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => {
                  const target = detailStoreModal;
                  setDetailStoreModal(null);
                  handleOpenStoreForm(target);
                }}
                className="px-4 py-2 rounded-lg border border-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
              >
                编辑档案
              </button>
              <button
                type="button"
                onClick={() => setDetailStoreModal(null)}
                className="px-5 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold cursor-pointer"
              >
                确定
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 新建/编辑门店简洁弹窗 */}
      {isStoreModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
          <div className="w-full max-w-xl rounded-xl bg-white p-6 shadow-xl border border-slate-200 space-y-4 max-h-[90vh] overflow-y-auto">
            <h3 className="text-base font-bold text-slate-900">
              {editingStoreId ? '编辑门店档案' : '新建门店档案'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block text-slate-600 font-medium mb-1">门店/品牌名称</label>
                <input
                  type="text"
                  value={sName}
                  onChange={(e) => setSName(e.target.value)}
                  placeholder="如：星澜洗护沙龙旗舰店"
                  className="w-full h-9 rounded-lg border border-slate-200 px-3 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-slate-600 font-medium mb-1">所属品类</label>
                <input
                  type="text"
                  value={sIndustry}
                  onChange={(e) => setSIndustry(e.target.value)}
                  placeholder="如：个护 / 餐饮 / 美业"
                  className="w-full h-9 rounded-lg border border-slate-200 px-3 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-slate-600 font-medium mb-1">所在城市商圈</label>
                <input
                  type="text"
                  value={sCity}
                  onChange={(e) => setSCity(e.target.value)}
                  placeholder="如：杭州·武林商圈旗舰店"
                  className="w-full h-9 rounded-lg border border-slate-200 px-3 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-slate-600 font-medium mb-1">镇店套餐 / 核心产品</label>
                <input
                  type="text"
                  value={sProducts}
                  onChange={(e) => setSProducts(e.target.value)}
                  placeholder="如：¥59买1送1洗发水；¥68头皮SPA团购"
                  className="w-full h-9 rounded-lg border border-slate-200 px-3 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-slate-600 font-medium mb-1">门店转化钩子与记忆锚点</label>
                <input
                  type="text"
                  value={sAnchors}
                  onChange={(e) => setSAnchors(e.target.value)}
                  placeholder="如：72小时控油高颅顶、左下角团购立减"
                  className="w-full h-9 rounded-lg border border-slate-200 px-3 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setIsStoreModalOpen(false)}
                className="px-4 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-600 cursor-pointer"
              >
                取消
              </button>
              <button
                type="button"
                onClick={() => {
                  onSaveStore(
                    {
                      storeName: sName || '新建门店',
                      storeType: sType,
                      industry: sIndustry || '个护',
                      cityLocation: sCity || '同城核心商圈',
                      signatureProducts: sProducts || '门店招牌套餐',
                      storePersona: sPersona || '专业实在主理人',
                      targetAudience: sAudience || '同城目标客群',
                      memoryAnchors: sAnchors || '左下角团购限时优惠',
                    },
                    editingStoreId
                  );
                  setIsStoreModalOpen(false);
                }}
                className="px-5 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold cursor-pointer"
              >
                保存档案
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
