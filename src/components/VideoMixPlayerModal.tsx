"use client";
import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  Download,
  Volume2,
  VolumeX,
  X,
  CheckCircle2,
  Sparkles,
  Film,
} from 'lucide-react';

export interface VideoMixPlayerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  productName: string;
  category: string;
  aspectRatio: '9:16' | '16:9' | '4:3';
  bgmStyle: string;
  voiceTone: string;
  cameraAngles: string[];
  visualCues: string[];
  sceneLines: string[];
}

const SCENE_DURATION_SEC = 4.0;

const PALETTES: Record<string, { bg1: string; bg2: string; accent: string; badge: string }> = {
  个护: { bg1: '#1e1b4b', bg2: '#312e81', accent: '#818cf8', badge: '#4f46e5' },
  美妆: { bg1: '#064e3b', bg2: '#0f766e', accent: '#34d399', badge: '#059669' },
  宠物: { bg1: '#3b0764', bg2: '#701a75', accent: '#e879f9', badge: '#9333ea' },
  穿搭: { bg1: '#0c4a6e', bg2: '#1d4ed8', accent: '#38bdf8', badge: '#0284c7' },
  咖啡: { bg1: '#451a03', bg2: '#78350f', accent: '#fbbf24', badge: '#d97706' },
  美食: { bg1: '#451a03', bg2: '#7c2d12', accent: '#fb923c', badge: '#ea580c' },
  教育: { bg1: '#422006', bg2: '#713f12', accent: '#facc15', badge: '#ca8a04' },
  数码: { bg1: '#090d16', bg2: '#1e293b', accent: '#38bdf8', badge: '#2563eb' },
};

function wrapCanvasText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number
): string[] {
  const chars = Array.from(text);
  const lines: string[] = [];
  let current = '';
  for (const ch of chars) {
    const test = current + ch;
    if (ctx.measureText(test).width > maxWidth && current.length > 0) {
      lines.push(current);
      current = ch;
    } else {
      current = test;
    }
  }
  if (current) lines.push(current);
  return lines;
}

export const VideoMixPlayerModal: React.FC<VideoMixPlayerProps> = ({
  isOpen,
  onClose,
  title,
  productName,
  category,
  aspectRatio,
  bgmStyle,
  voiceTone,
  cameraAngles,
  visualCues,
  sceneLines,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isExporting, setIsExporting] = useState(false);
  const [exportSuccessUrl, setExportSuccessUrl] = useState<string | null>(null);

  const totalScenes = Math.max(1, Math.min(cameraAngles.length, visualCues.length, sceneLines.length));
  const totalDuration = totalScenes * SCENE_DURATION_SEC;

  const audioCtxRef = useRef<AudioContext | null>(null);
  const lastSpokenSceneRef = useRef<number>(-1);
  const lastBeatIndexRef = useRef<number>(-1);

  const stopAudioAndSpeech = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    lastSpokenSceneRef.current = -1;
    lastBeatIndexRef.current = -1;
  }, []);

  const triggerBeatTone = useCallback(
    (beatIndex: number) => {
      if (isMuted) return;
      try {
        if (!audioCtxRef.current) {
          const AudioContextClass =
            window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
          audioCtxRef.current = new AudioContextClass();
        }
        const ctx = audioCtxRef.current;
        if (ctx.state === 'suspended') {
          ctx.resume();
        }
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const notes = [261.63, 329.63, 392.0, 523.25];
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(notes[beatIndex % notes.length], ctx.currentTime);
        gain.gain.setValueAtTime(0.035, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.22);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.24);
      } catch {
        // Ignore Web Audio restriction errors
      }
    },
    [isMuted]
  );

  const speakSceneLine = useCallback(
    (sceneIdx: number) => {
      if (isMuted || typeof window === 'undefined' || !('speechSynthesis' in window)) return;
      const line = sceneLines[sceneIdx];
      if (!line) return;
      try {
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(line);
        utter.lang = 'zh-CN';
        utter.rate = 1.18;
        utter.pitch = voiceTone.includes('女') ? 1.08 : 0.95;
        window.speechSynthesis.speak(utter);
      } catch {
        // Ignore TTS failure
      }
    },
    [isMuted, sceneLines, voiceTone]
  );

  // Draw current video frame onto HTML5 Canvas
  const renderFrame = useCallback(
    (timeSec: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const W = canvas.width;
      const H = canvas.height;
      const clampedTime = Math.min(Math.max(timeSec, 0), totalDuration - 0.01);
      const sceneIndex = Math.min(totalScenes - 1, Math.floor(clampedTime / SCENE_DURATION_SEC));
      const sceneLocalTime = clampedTime - sceneIndex * SCENE_DURATION_SEC;
      const sceneProgress = Math.min(1, Math.max(0, sceneLocalTime / SCENE_DURATION_SEC));

      const palette = PALETTES[category] || PALETTES['个护'];

      // 1. Dynamic Studio Gradient Background
      const grad = ctx.createLinearGradient(0, 0, W, H);
      grad.addColorStop(0, palette.bg1);
      grad.addColorStop(1, palette.bg2);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      // 2. Subtle animated radial light glow
      const pulseX = W * (0.5 + 0.18 * Math.sin(timeSec * 1.6));
      const pulseY = H * (0.38 + 0.1 * Math.cos(timeSec * 1.2));
      const radial = ctx.createRadialGradient(pulseX, pulseY, 20, pulseX, pulseY, W * 0.65);
      radial.addColorStop(0, `${palette.accent}44`);
      radial.addColorStop(1, 'transparent');
      ctx.fillStyle = radial;
      ctx.fillRect(0, 0, W, H);

      // 3. Top Header Bar (Shot Index & Product Tag)
      const padX = Math.round(W * 0.065);
      const topY = Math.round(H * 0.055);

      ctx.fillStyle = 'rgba(15, 23, 42, 0.72)';
      ctx.beginPath();
      ctx.roundRect(padX, topY, W - padX * 2, 54, 14);
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.16)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      const angleText = cameraAngles[sceneIndex] || `0${sceneIndex + 1} 核心镜头`;
      ctx.fillStyle = palette.accent;
      ctx.font = '700 18px "Plus Jakarta Sans", "PingFang SC", sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(angleText, padX + 18, topY + 33);

      ctx.fillStyle = 'rgba(255,255,255,0.75)';
      ctx.font = '600 15px "JetBrains Mono", monospace';
      ctx.textAlign = 'right';
      ctx.fillText(
        `SHOT 0${sceneIndex + 1}/0${totalScenes} · ${clampedTime.toFixed(1)}s`,
        W - padX - 18,
        topY + 33
      );

      // 4. Central Storyboard Visual Card (Animated Motion Graphic Scene)
      const cardY = topY + 76;
      const cardH = Math.round(H * 0.44);
      const cardW = W - padX * 2;

      ctx.save();
      ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.beginPath();
      ctx.roundRect(padX, cardY, cardW, cardH, 20);
      ctx.fill();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.22)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Animated geometric spotlight inside the visual frame
      const centerX = W / 2;
      const centerY = cardY + cardH * 0.42;
      const ringRadius = 56 + 10 * Math.sin(sceneProgress * Math.PI);

      ctx.beginPath();
      ctx.arc(centerX, centerY, ringRadius + 18, 0, Math.PI * 2);
      ctx.strokeStyle = `${palette.accent}55`;
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(centerX, centerY, ringRadius, 0, Math.PI * 2);
      ctx.fillStyle = palette.badge;
      ctx.fill();

      // Scene number & product emblem inside circle
      ctx.fillStyle = '#ffffff';
      ctx.font = '700 26px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText(`0${sceneIndex + 1}`, centerX, centerY + 9);

      // Product Name Pill Banner inside visual card
      ctx.fillStyle = '#ffffff';
      ctx.font = '700 22px "Plus Jakarta Sans", "PingFang SC", sans-serif';
      ctx.fillText(productName.slice(0, 18), centerX, cardY + cardH * 0.72);

      // Visual Description Cue (画面描述)
      const visualCue = visualCues[sceneIndex] || '';
      ctx.fillStyle = 'rgba(226, 232, 240, 0.92)';
      ctx.font = '400 16px "Plus Jakarta Sans", "PingFang SC", sans-serif';
      const cueLines = wrapCanvasText(ctx, `画面指导：${visualCue}`, cardW - 48).slice(0, 2);
      cueLines.forEach((line, i) => {
        ctx.fillText(line, centerX, cardY + cardH * 0.84 + i * 24);
      });
      ctx.restore();

      // 5. Kinetic Broadcast Subtitle Box (台词口播高亮字幕)
      const subBoxY = cardY + cardH + 28;
      const subBoxH = Math.round(H * 0.23);

      ctx.fillStyle = 'rgba(15, 23, 42, 0.88)';
      ctx.beginPath();
      ctx.roundRect(padX, subBoxY, cardW, subBoxH, 18);
      ctx.fill();
      ctx.strokeStyle = palette.accent;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Subtitle label
      ctx.fillStyle = palette.accent;
      ctx.font = '600 14px "Plus Jakarta Sans", "PingFang SC", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('AI 混剪同步口播字幕', W / 2, subBoxY + 28);

      // Main spoken subtitle line
      const spokenLine = sceneLines[sceneIndex] || '';
      ctx.fillStyle = '#ffffff';
      ctx.font = '700 22px "Plus Jakarta Sans", "PingFang SC", sans-serif';
      const wrappedSub = wrapCanvasText(ctx, `“${spokenLine}”`, cardW - 44).slice(0, 3);
      wrappedSub.forEach((line, idx) => {
        ctx.fillText(line, W / 2, subBoxY + 66 + idx * 32);
      });

      // 6. Bottom Progress Timeline Bar
      const barY = H - 34;
      const barW = W - padX * 2;
      ctx.fillStyle = 'rgba(255,255,255,0.18)';
      ctx.beginPath();
      ctx.roundRect(padX, barY, barW, 8, 4);
      ctx.fill();

      const overallProgress = Math.min(1, Math.max(0, clampedTime / totalDuration));
      ctx.fillStyle = palette.accent;
      ctx.beginPath();
      ctx.roundRect(padX, barY, Math.max(8, barW * overallProgress), 8, 4);
      ctx.fill();
    },
    [cameraAngles, category, productName, sceneLines, totalDuration, totalScenes, visualCues]
  );

  // Playback animation loop
  useEffect(() => {
    if (!isOpen) {
      setIsPlaying(false);
      stopAudioAndSpeech();
      return;
    }
    renderFrame(currentTime);
  }, [isOpen, currentTime, renderFrame, stopAudioAndSpeech]);

  useEffect(() => {
    if (!isOpen || !isPlaying) return;

    let animId = 0;
    let lastTs = performance.now();

    const tick = (now: number) => {
      const dt = (now - lastTs) / 1000;
      lastTs = now;

      setCurrentTime((prev) => {
        const next = prev + dt;
        if (next >= totalDuration) {
          setIsPlaying(false);
          stopAudioAndSpeech();
          return 0;
        }

        const sceneIdx = Math.floor(next / SCENE_DURATION_SEC);
        if (sceneIdx !== lastSpokenSceneRef.current) {
          lastSpokenSceneRef.current = sceneIdx;
          speakSceneLine(sceneIdx);
        }

        const beatIdx = Math.floor(next * 2);
        if (beatIdx !== lastBeatIndexRef.current) {
          lastBeatIndexRef.current = beatIdx;
          triggerBeatTone(beatIdx);
        }

        return next;
      });

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [isOpen, isPlaying, speakSceneLine, stopAudioAndSpeech, totalDuration, triggerBeatTone]);

  // Auto-start playback when modal opens
  useEffect(() => {
    if (isOpen) {
      setExportSuccessUrl(null);
      setCurrentTime(0);
      lastSpokenSceneRef.current = -1;
      lastBeatIndexRef.current = -1;
      setIsPlaying(true);
    }
  }, [isOpen]);

  // Real One-Click WebM Video Export via MediaRecorder
  const handleExportVideo = async () => {
    const canvas = canvasRef.current;
    if (!canvas || isExporting) return;

    setIsExporting(true);
    setExportSuccessUrl(null);
    stopAudioAndSpeech();
    setIsPlaying(false);

    try {
      const stream = canvas.captureStream(30);
      const mimeType = MediaRecorder.isTypeSupported('video/webm;codecs=vp9')
        ? 'video/webm;codecs=vp9'
        : 'video/webm';
      const recorder = new MediaRecorder(stream, { mimeType });
      const chunks: BlobPart[] = [];

      recorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) {
          chunks.push(e.data);
        }
      };

      const exportDone = new Promise<string>((resolve) => {
        recorder.onstop = () => {
          const blob = new Blob(chunks, { type: 'video/webm' });
          const url = URL.createObjectURL(blob);
          resolve(url);
        };
      });

      recorder.start();

      // Render fast-forward frames at 30fps for complete video capture
      const fps = 25;
      const totalFrames = Math.ceil(totalDuration * fps);
      for (let f = 0; f <= totalFrames; f++) {
        const t = (f / totalFrames) * (totalDuration - 0.05);
        setCurrentTime(t);
        renderFrame(t);
        await new Promise((r) => setTimeout(r, 18));
      }

      recorder.stop();
      const downloadUrl = await exportDone;
      setExportSuccessUrl(downloadUrl);

      // Trigger automatic browser file download
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = `${title || productName || 'AI混剪成片'}.webm`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (err) {
      console.error('Video export error:', err);
    } finally {
      setIsExporting(false);
    }
  };

  if (!isOpen) return null;

  const canvasWidth = aspectRatio === '16:9' ? 800 : 540;
  const canvasHeight = aspectRatio === '16:9' ? 450 : 960;
  const activeShotIndex = Math.min(totalScenes - 1, Math.floor(currentTime / SCENE_DURATION_SEC));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4">
      <div className="flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl lg:flex-row">
        {/* Left: Real-time Video Canvas Viewport */}
        <div className="flex flex-1 flex-col items-center justify-center bg-slate-900 p-6">
          <div className="mb-3 flex w-full items-center justify-between text-xs text-slate-300">
            <span className="font-medium text-white">{title}</span>
            <span className="font-mono tabular-nums">
              {aspectRatio} · {bgmStyle} · {voiceTone}
            </span>
          </div>

          <div className="relative flex items-center justify-center overflow-hidden rounded-xl border border-slate-700 bg-slate-950 shadow-lg">
            <canvas
              ref={canvasRef}
              width={canvasWidth}
              height={canvasHeight}
              className={
                aspectRatio === '16:9'
                  ? 'h-auto max-h-[380px] w-full max-w-[640px]'
                  : 'h-[480px] w-[270px] sm:h-[540px] sm:w-[304px]'
              }
            />
          </div>

          {/* Player Transport Controls */}
          <div className="mt-4 flex w-full max-w-md items-center justify-between gap-3 rounded-xl bg-slate-800/90 px-4 py-2.5 text-white">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  if (isPlaying) {
                    setIsPlaying(false);
                    stopAudioAndSpeech();
                  } else {
                    lastSpokenSceneRef.current = -1;
                    setIsPlaying(true);
                  }
                }}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white transition-colors hover:bg-indigo-500"
                title={isPlaying ? '暂停' : '播放'}
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </button>
              <button
                type="button"
                onClick={() => {
                  stopAudioAndSpeech();
                  setCurrentTime(0);
                  setIsPlaying(true);
                }}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-700 text-slate-200 transition-colors hover:bg-slate-600"
                title="重播"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => {
                  const nextMute = !isMuted;
                  setIsMuted(nextMute);
                  if (nextMute) stopAudioAndSpeech();
                }}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-700 text-slate-200 transition-colors hover:bg-slate-600"
                title={isMuted ? '开启声音' : '静音'}
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </button>
            </div>

            <div className="font-mono text-xs tabular-nums text-slate-300">
              {currentTime.toFixed(1)}s / {totalDuration.toFixed(1)}s
            </div>
          </div>
        </div>

        {/* Right: Synchronized Storyboard Shot Track & 1-Click Export */}
        <div className="flex w-full flex-col justify-between border-t border-slate-200 bg-white p-6 lg:w-96 lg:border-t-0 lg:border-l">
          <div className="overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2">
                <Film className="h-5 w-5 text-indigo-600" />
                <h3 className="text-base font-bold text-slate-900">AI 视频混剪时间轴</h3>
              </div>
              <button
                type="button"
                onClick={() => {
                  stopAudioAndSpeech();
                  onClose();
                }}
                className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              点击任意分镜可快速跳转预览；系统已自动合成语音播报、动态字幕与卡点背景音。
            </p>

            <div className="mt-4 space-y-2.5">
              {cameraAngles.slice(0, totalScenes).map((angle, idx) => {
                const isActive = idx === activeShotIndex;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      stopAudioAndSpeech();
                      setCurrentTime(idx * SCENE_DURATION_SEC + 0.05);
                      renderFrame(idx * SCENE_DURATION_SEC + 0.05);
                    }}
                    className={`w-full rounded-xl border p-3 text-left transition-colors ${
                      isActive
                        ? 'border-indigo-600 bg-indigo-50/70'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-900">
                      <span>{angle}</span>
                      <span className="font-mono text-slate-400 tabular-nums">
                        {(idx * SCENE_DURATION_SEC).toFixed(0)}s - {((idx + 1) * SCENE_DURATION_SEC).toFixed(0)}s
                      </span>
                    </div>
                    <p className="mt-1 line-clamp-2 text-xs text-slate-600">
                      口播：{sceneLines[idx]}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-6 border-t border-slate-100 pt-4">
            {exportSuccessUrl && (
              <div className="mb-3 flex items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs text-emerald-800">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  成片渲染完成，已开始下载
                </span>
                <a
                  href={exportSuccessUrl}
                  download={`${title || productName}.webm`}
                  className="font-semibold underline"
                >
                  重新保存
                </a>
              </div>
            )}

            <button
              type="button"
              disabled={isExporting}
              onClick={handleExportVideo}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 disabled:opacity-60"
            >
              {isExporting ? (
                <>
                  <Sparkles className="h-4 w-4 animate-spin" />
                  <span>正在逐帧合成高清成片...</span>
                </>
              ) : (
                <>
                  <Download className="h-4 w-4" />
                  <span>一键导出高清成片 (.webm)</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
