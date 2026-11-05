"use client";
import React, { useState } from 'react';
import {
  Smartphone,
  Upload,
  QrCode,
  CheckCircle2,
  Copy,
  RefreshCw,
  X,
  FileVideo,
  Image as ImageIcon,
} from 'lucide-react';

export interface MobileFastUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUploaded?: (item: { title: string; type: 'video' | 'image' }) => void;
  onShowNotice?: (type: 'success' | 'error', text: string) => void;
}

export const MobileFastUploadModal: React.FC<MobileFastUploadModalProps> = ({
  isOpen,
  onClose,
  onUploaded,
  onShowNotice,
}) => {
  const [pairingCode] = useState(() => Math.floor(100000 + Math.random() * 900000).toString());
  const [isSimulatingUpload, setIsSimulatingUpload] = useState(false);

  if (!isOpen) return null;

  const handleSimulateMobileUpload = () => {
    setIsSimulatingUpload(true);
    setTimeout(() => {
      setIsSimulatingUpload(false);
      onUploaded?.({
        title: `手机直传素材_${new Date().toLocaleTimeString().replace(/:/g, '')}.mp4`,
        type: 'video',
      });
      onShowNotice?.('success', '已通过手机扫码互联接收 1 个高清视频素材！');
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 animate-in fade-in duration-150">
      <div className="w-full max-w-md rounded-3xl border border-slate-100 bg-white p-6 shadow-2xl space-y-4">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <Smartphone className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">手机扫码免登录快传</h3>
              <p className="text-[11px] text-slate-400">对标火兔「扫码直传」：手机视频秒级同步到电脑素材库</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 text-xs cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* QR Code & Instructions */}
        <div className="flex flex-col items-center justify-center p-3 text-center space-y-3">
          <div className="flex h-44 w-44 items-center justify-center rounded-2xl border border-slate-100 bg-[#fafbfe] p-3 shadow-inner">
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
              <path d="M46 50 L49 53 L55 47" stroke="#ffffff" strokeWidth="2" fill="none" />
            </svg>
          </div>

          <div className="space-y-1">
            <div className="text-xs font-semibold text-slate-800">
              用微信或手机系统相机扫码直传
            </div>
            <div className="text-[11px] text-slate-500">
              配对识别码：<span className="font-mono font-bold text-indigo-600">{pairingCode}</span>（5分钟内有效）
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-2 border-t border-slate-100 flex gap-2">
          <button
            type="button"
            onClick={handleSimulateMobileUpload}
            disabled={isSimulatingUpload}
            className="flex-1 rounded-xl bg-indigo-600 py-2.5 text-xs font-semibold text-white hover:bg-indigo-700 transition-all cursor-pointer shadow-xs disabled:opacity-50"
          >
            {isSimulatingUpload ? '正在接收手机传输...' : '测试模拟手机扫码传输'}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-medium text-slate-600 hover:bg-slate-50 cursor-pointer"
          >
            关闭
          </button>
        </div>
      </div>
    </div>
  );
};
