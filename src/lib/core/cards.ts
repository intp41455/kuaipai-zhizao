/**
 * 图文卡片批量生成引擎
 * 对标火兔工具箱「AI 批量爆款图文笔记」：
 * 把一条选题渲染成多种版式的 3:4 竖版卡片，直接导出 PNG，可批量下载。
 * 使用 Canvas 2D 绘制，无第三方依赖，可在浏览器离线运行。
 */

export type CardTemplate = 'cover' | 'list' | 'compare' | 'quote';

export interface CardSpec {
  template: CardTemplate;
  title: string;
  subtitle?: string;
  bullets?: string[];
  tag?: string;
  brand?: string;
  accent?: string;
}

export interface CardSize {
  width: number;
  height: number;
}

export const CARD_SIZES: Record<'note' | 'square' | 'wide', CardSize> = {
  note: { width: 1080, height: 1440 },
  square: { width: 1080, height: 1080 },
  wide: { width: 1200, height: 900 },
};

const DEFAULT_ACCENT = '#4f46e5';

function hexToRgba(hex: string, alpha: number): string {
  const value = hex.replace('#', '');
  const full = value.length === 3 ? value.split('').map((c) => c + c).join('') : value;
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}

/** 中文按字符断行，英文按空格断词，避免半行出现孤字 */
function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number
): string[] {
  const lines: string[] = [];
  let line = '';
  for (const ch of Array.from(text)) {
    const next = line + ch;
    if (ctx.measureText(next).width > maxWidth && line) {
      lines.push(line);
      line = ch;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function drawBackground(ctx: CanvasRenderingContext2D, w: number, h: number, accent: string) {
  const gradient = ctx.createLinearGradient(0, 0, w, h);
  gradient.addColorStop(0, '#ffffff');
  gradient.addColorStop(0.55, hexToRgba(accent, 0.08));
  gradient.addColorStop(1, hexToRgba(accent, 0.18));
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, w, h);

  // 装饰圆环，让封面不至于太空
  ctx.fillStyle = hexToRgba(accent, 0.12);
  ctx.beginPath();
  ctx.arc(w * 0.86, h * 0.12, w * 0.18, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = hexToRgba(accent, 0.25);
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(w * 0.1, h * 0.92, w * 0.1, 0, Math.PI * 2);
  ctx.stroke();
}

function drawTag(ctx: CanvasRenderingContext2D, tag: string, x: number, y: number, accent: string) {
  if (!tag) return;
  ctx.font = '600 34px "PingFang SC", "Microsoft YaHei", sans-serif';
  const width = ctx.measureText(tag).width + 48;
  ctx.fillStyle = hexToRgba(accent, 0.14);
  roundRect(ctx, x, y, width, 60, 30);
  ctx.fill();
  ctx.fillStyle = accent;
  ctx.textBaseline = 'middle';
  ctx.fillText(tag, x + 24, y + 31);
}

function drawBrand(ctx: CanvasRenderingContext2D, brand: string, w: number, h: number) {
  if (!brand) return;
  ctx.font = '500 30px "PingFang SC", "Microsoft YaHei", sans-serif';
  ctx.fillStyle = 'rgba(15, 23, 42, 0.45)';
  ctx.textAlign = 'right';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText(brand, w - 64, h - 56);
  ctx.textAlign = 'left';
}

/** 主渲染：所有模板共用背景与品牌位，仅版式不同 */
export function renderCard(ctx: CanvasRenderingContext2D, spec: CardSpec, size: CardSize) {
  const { width: w, height: h } = size;
  const accent = spec.accent || DEFAULT_ACCENT;
  const pad = Math.round(w * 0.085);
  const contentWidth = w - pad * 2;

  ctx.clearRect(0, 0, w, h);
  drawBackground(ctx, w, h, accent);
  drawTag(ctx, spec.tag || '', pad, pad, accent);
  drawBrand(ctx, spec.brand || '', w, h);

  const top = spec.tag ? pad + 110 : pad + 40;

  if (spec.template === 'cover') {
    ctx.fillStyle = '#0f172a';
    ctx.font = `800 ${Math.round(w * 0.085)}px "PingFang SC", "Microsoft YaHei", sans-serif`;
    const titleLines = wrapText(ctx, spec.title, contentWidth);
    titleLines.slice(0, 5).forEach((line, i) => {
      ctx.fillText(line, pad, top + i * w * 0.105);
    });
    if (spec.subtitle) {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.62)';
      ctx.font = `500 ${Math.round(w * 0.042)}px "PingFang SC", "Microsoft YaHei", sans-serif`;
      wrapText(ctx, spec.subtitle, contentWidth).slice(0, 4).forEach((line, i) => {
        ctx.fillText(line, pad, top + titleLines.slice(0, 5).length * w * 0.105 + 40 + i * w * 0.058);
      });
    }
  }

  if (spec.template === 'list') {
    ctx.fillStyle = '#0f172a';
    ctx.font = `800 ${Math.round(w * 0.062)}px "PingFang SC", "Microsoft YaHei", sans-serif`;
    wrapText(ctx, spec.title, contentWidth).slice(0, 2).forEach((line, i) => {
      ctx.fillText(line, pad, top + i * w * 0.075);
    });
    const startY = top + w * 0.16;
    const itemGap = Math.round(w * 0.115);
    (spec.bullets || []).slice(0, 6).forEach((bullet, index) => {
      const y = startY + index * itemGap;
      ctx.fillStyle = accent;
      ctx.beginPath();
      ctx.arc(pad + 26, y - 12, 16, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.font = '700 26px "PingFang SC", "Microsoft YaHei", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(String(index + 1), pad + 26, y - 3);
      ctx.textAlign = 'left';
      ctx.fillStyle = '#1e293b';
      ctx.font = `600 ${Math.round(w * 0.04)}px "PingFang SC", "Microsoft YaHei", sans-serif`;
      wrapText(ctx, bullet, contentWidth - 90).slice(0, 2).forEach((line, i) => {
        ctx.fillText(line, pad + 72, y + i * w * 0.052);
      });
    });
  }

  if (spec.template === 'compare') {
    ctx.fillStyle = '#0f172a';
    ctx.font = `800 ${Math.round(w * 0.058)}px "PingFang SC", "Microsoft YaHei", sans-serif`;
    wrapText(ctx, spec.title, contentWidth).slice(0, 2).forEach((line, i) => {
      ctx.fillText(line, pad, top + i * w * 0.07);
    });
    const bullets = spec.bullets || [];
    const boxTop = top + w * 0.16;
    const boxHeight = Math.round(h * 0.42);
    const boxWidth = (contentWidth - 40) / 2;
    const mid = Math.ceil(bullets.length / 2);
    const columns: Array<{ label: string; items: string[]; tint: string }> = [
      { label: 'Before', items: bullets.slice(0, mid), tint: 'rgba(148, 163, 184, 0.18)' },
      { label: 'After', items: bullets.slice(mid), tint: hexToRgba(accent, 0.16) },
    ];
    columns.forEach((col, index) => {
      const x = pad + index * (boxWidth + 40);
      ctx.fillStyle = col.tint;
      roundRect(ctx, x, boxTop, boxWidth, boxHeight, 28);
      ctx.fill();
      ctx.fillStyle = '#334155';
      ctx.font = '700 32px "PingFang SC", "Microsoft YaHei", sans-serif';
      ctx.fillText(col.label, x + 28, boxTop + 54);
      ctx.fillStyle = '#1e293b';
      ctx.font = '500 30px "PingFang SC", "Microsoft YaHei", sans-serif';
      col.items.slice(0, 5).forEach((item, i) => {
        wrapText(ctx, `· ${item}`, boxWidth - 56).slice(0, 2).forEach((line, li) => {
          ctx.fillText(line, x + 28, boxTop + 108 + i * 96 + li * 38);
        });
      });
    });
  }

  if (spec.template === 'quote') {
    ctx.fillStyle = hexToRgba(accent, 0.35);
    ctx.font = '800 140px Georgia, serif';
    ctx.fillText('"', pad - 10, top + 90);
    ctx.fillStyle = '#0f172a';
    ctx.font = `700 ${Math.round(w * 0.068)}px "PingFang SC", "Microsoft YaHei", sans-serif`;
    wrapText(ctx, spec.title, contentWidth - 40).slice(0, 7).forEach((line, i) => {
      ctx.fillText(line, pad + 20, top + 190 + i * w * 0.085);
    });
    if (spec.subtitle) {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.55)';
      ctx.font = '500 34px "PingFang SC", "Microsoft YaHei", sans-serif';
      ctx.fillText(spec.subtitle, pad + 24, h - pad - 90);
    }
  }

  ctx.textBaseline = 'alphabetic';
}

/** 生成一张卡片的 Blob，便于预览或直接下载 */
export async function renderCardBlob(spec: CardSpec, size: CardSize = CARD_SIZES.note): Promise<Blob> {
  const canvas = document.createElement('canvas');
  canvas.width = size.width;
  canvas.height = size.height;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('当前浏览器不支持 Canvas 2D');
  renderCard(ctx, spec, size);
  return await new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((blob) => (blob ? resolve(blob) : reject(new Error('卡片导出失败'))), 'image/png');
  });
}

/** 批量导出：逐张下载，避免浏览器同时弹太多下载被拦截 */
export async function downloadCards(specs: CardSpec[], size: CardSize = CARD_SIZES.note) {
  for (let i = 0; i < specs.length; i += 1) {
    const blob = await renderCardBlob(specs[i], size);
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${String(i + 1).padStart(2, '0')}-${specs[i].template}.png`;
    link.click();
    URL.revokeObjectURL(url);
    await new Promise((resolve) => setTimeout(resolve, 300));
  }
}

/** 一条选题扩展成整套图文：封面 + 清单 + 对比 + 金句 */
export function buildCardSet(topic: string, points: string[], brand = '快拍智造'): CardSpec[] {
  const title = topic.trim() || '今日选题';
  return [
    { template: 'cover', title, subtitle: points[0] || '一条能直接开拍的选题', tag: '封面', brand },
    {
      template: 'list',
      title: `${title}｜关键 ${Math.min(points.length, 6)} 步`,
      bullets: points.slice(0, 6),
      tag: '干货清单',
      brand,
    },
    {
      template: 'compare',
      title: `${title}｜改前 vs 改后`,
      bullets: points.slice(0, 8),
      tag: '对比',
      brand,
    },
    {
      template: 'quote',
      title: points[0] || title,
      subtitle: '把这句话放在第 3 秒，完播率通常更稳',
      tag: '金句',
      brand,
    },
  ];
}
