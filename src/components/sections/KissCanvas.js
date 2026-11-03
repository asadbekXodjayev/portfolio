import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { paint, GlyphAtlas } from '../../data/ascii/library/runtime/canvas.js';

/**
 * Gustav Klimt — "The Kiss" (1907–08). Public domain; photograph via the Google Art Project
 * on Wikimedia Commons. Shown in its ORIGINAL colors (one of the few places on the site that is
 * not monochrome, on purpose), with a slight motion:
 *   · slow breathing zoom and drift
 *   · a soft band of light sweeping over the gold
 *   · gold dust that twinkles and rises
 * Two views: "ascii" (each cell is a glyph tinted with the painting's own color) or "painting".
 *
 * The ASCII view is drawn with the vendored library renderer's glyph atlas (fast path): colours
 * are quantised to a 512-colour cube so the atlas stays small, the cell backgrounds are a static
 * 1px-per-cell bitmap scaled up, and only the glyph layer is repainted each frame.
 */

const SRC = '/art/the-kiss.jpg';
const GC = 112; // ascii grid columns
const GR = 56; // ascii grid rows (cells are twice as tall as wide)
const RAMP = ' .:-=+*#%@';
const BG = '#0b0907';
const SPARK = 'ÿ'; // colour key for gold sparkles
const LV = 8; // levels per channel in the quantised palette

const Wrap = styled.div`
  ${({ $fill, $inset }) =>
    $fill
      ? `position: absolute; inset: ${$inset}px;`
      : 'position: relative; width: 100%; aspect-ratio: 1 / 1;'}
  display: grid;
  place-items: center;
  background: ${BG};
  canvas { display: block; }
`;

const Msg = styled.p`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  color: #d9c58a;
  font-family: ${({ theme }) => theme.fonts.pixel};
  font-size: 18px;
  text-align: center;
  padding: 16px;
`;

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const hex2 = (v) => Math.round(v).toString(16).padStart(2, '0');

const makeDust = () =>
  Array.from({ length: 80 }, () => ({
    x: Math.random(),
    y: Math.random(),
    s: 1 + Math.random() * 1.8,
    sp: 0.006 + Math.random() * 0.016,
    ph: Math.random() * 6.28,
  }));

/** Sample the painting into GC×GR cells: luminance, gold flag, quantised colour keys, and a
 *  tiny bitmap (one pixel per cell) holding the dimmed cell backgrounds. */
const buildGrid = (img) => {
  const off = document.createElement('canvas');
  off.width = GC;
  off.height = GR;
  const c = off.getContext('2d', { willReadFrequently: true });
  c.imageSmoothingQuality = 'high';
  c.drawImage(img, 0, 0, GC, GR);
  const d = c.getImageData(0, 0, GC, GR).data;

  const n = GC * GR;
  const lum = new Float32Array(n);
  const gold = new Uint8Array(n);
  const keys = new Array(n);
  const palette = { [SPARK]: '#fff4b8' };
  const q = (v) => clamp(Math.round((v / 255) * (LV - 1)), 0, LV - 1);

  const bg = document.createElement('canvas');
  bg.width = GC;
  bg.height = GR;
  const bctx = bg.getContext('2d');
  const bimg = bctx.createImageData(GC, GR);

  for (let i = 0; i < n; i += 1) {
    const r = d[i * 4];
    const g = d[i * 4 + 1];
    const b = d[i * 4 + 2];
    lum[i] = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    gold[i] = r > 150 && g > 105 && b < 120 ? 1 : 0;
    // glyph colour: the painting's colour, slightly lifted so thin glyphs still read
    const lr = Math.min(255, r * 1.14 + 10);
    const lg = Math.min(255, g * 1.14 + 10);
    const lb = Math.min(255, b * 1.14 + 10);
    const qr = q(lr);
    const qg = q(lg);
    const qb = q(lb);
    const key = String.fromCharCode(0x100 + (qr * LV + qg) * LV + qb);
    keys[i] = key;
    if (!palette[key]) palette[key] = `#${hex2((qr * 255) / (LV - 1))}${hex2((qg * 255) / (LV - 1))}${hex2((qb * 255) / (LV - 1))}`;
    bimg.data[i * 4] = r * 0.84;
    bimg.data[i * 4 + 1] = g * 0.84;
    bimg.data[i * 4 + 2] = b * 0.84;
    bimg.data[i * 4 + 3] = 255;
  }
  bctx.putImageData(bimg, 0, 0);
  return { lum, gold, keys, palette, bg };
};

const KissCanvas = ({ playing, speed, mode, fill, inset = 24, nonce }) => {
  const wrap = useRef(null);
  const cv = useRef(null);
  const img = useRef(null);
  const grid = useRef(null);
  const atlas = useRef(new GlyphAtlas());
  const dust = useRef(makeDust());
  const clock = useRef(0);
  const box = useRef({ side: 0, dpr: 1 });
  const visible = useRef(true);
  const drawRef = useRef(() => {});
  const [state, setState] = useState('loading'); // loading | ready | failed

  // load the painting once and sample it into an ascii-sized grid
  useEffect(() => {
    const im = new Image();
    im.onload = () => {
      img.current = im;
      grid.current = buildGrid(im);
      setState('ready');
    };
    im.onerror = () => setState('failed');
    im.src = SRC;
  }, []);

  useEffect(() => { clock.current = 0; }, [nonce]);

  // the two renderers
  useEffect(() => {
    const paintDust = (ctx, S, t) => {
      const px = Math.max(1.5, S / 420);
      dust.current.forEach((p) => {
        const y = (((p.y - t * p.sp) % 1) + 1) % 1;
        const x = p.x + Math.sin(t * 0.4 + p.ph) * 0.012;
        const a = 0.2 + 0.7 * (0.5 + 0.5 * Math.sin(t * 2.2 + p.ph * 6));
        ctx.fillStyle = `rgba(255,226,140,${a.toFixed(3)})`;
        ctx.fillRect(Math.round(x * S), Math.round(y * S), px * p.s, px * p.s);
      });
    };

    const painting = (ctx, S, t) => {
      ctx.fillStyle = BG;
      ctx.fillRect(0, 0, S, S);
      const sc = 1.03 + 0.012 * Math.sin(t * 0.33); // stays >= 1.018 so the drift never shows an edge
      ctx.save();
      ctx.translate(S / 2 + Math.sin(t * 0.21) * S * 0.008, S / 2 + Math.cos(t * 0.17) * S * 0.008);
      ctx.scale(sc, sc);
      ctx.drawImage(img.current, -S / 2, -S / 2, S, S);
      ctx.restore();
      // a soft band of light drifting over the gold
      ctx.save();
      ctx.globalCompositeOperation = 'soft-light';
      const pos = (((t * 0.09) % 1.8) - 0.4) * S;
      const gr = ctx.createLinearGradient(pos - 0.18 * S, 0, pos + 0.18 * S, S * 0.5);
      gr.addColorStop(0, 'rgba(255,240,190,0)');
      gr.addColorStop(0.5, 'rgba(255,240,190,0.55)');
      gr.addColorStop(1, 'rgba(255,240,190,0)');
      ctx.fillStyle = gr;
      ctx.fillRect(0, 0, S, S);
      ctx.restore();
      paintDust(ctx, S, t);
    };

    const rowsText = new Array(GR);
    const rowsColor = new Array(GR);
    const ascii = (ctx, S, t, dpr) => {
      const { lum, gold, keys, palette, bg } = grid.current;
      ctx.fillStyle = BG;
      ctx.fillRect(0, 0, S, S);
      const sc = 1 + 0.012 * Math.sin(t * 0.33);
      ctx.save();
      ctx.translate(S / 2, S / 2);
      ctx.scale(sc, sc);
      ctx.translate(-S / 2, -S / 2);

      // cell backgrounds: a 1px-per-cell bitmap, scaled up without smoothing
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(bg, 0, 0, S, S);
      ctx.imageSmoothingEnabled = true;

      // glyph layer
      for (let y = 0; y < GR; y += 1) {
        let tr = '';
        let cr = '';
        for (let x = 0; x < GC; x += 1) {
          const i = y * GC + x;
          const l = clamp(lum[i] + 0.06 * Math.sin(t * 1.4 + x * 0.18 + y * 0.35), 0, 0.999);
          if (gold[i] && Math.sin(t * 3.1 + i * 12.9898) > 0.992) {
            tr += '*';
            cr += SPARK;
          } else {
            tr += RAMP[Math.floor(l * RAMP.length)];
            cr += keys[i];
          }
        }
        rowsText[y] = tr;
        rowsColor[y] = cr;
      }
      paint(ctx, { text: rowsText.join('\n'), color: rowsColor.join('\n') }, palette, {
        x: 0,
        y: 0,
        cw: S / GC,
        ch: S / GR,
        ink: '#ffffff',
        mode: 'text',
        atlas: atlas.current,
        dpr,
      });
      ctx.restore();
      paintDust(ctx, S, t);
    };

    drawRef.current = () => {
      const c = cv.current;
      if (!c || state !== 'ready') return;
      const { side, dpr } = box.current;
      if (!side) return;
      const ctx = c.getContext('2d');
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingQuality = 'high';
      (mode === 'painting' ? painting : ascii)(ctx, side, clock.current, dpr);
    };
    drawRef.current();
  }, [mode, state]);

  // keep the canvas square and sharp: width-bound normally, min(width, height) when filling
  useEffect(() => {
    const el = wrap.current;
    const resize = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      const side = Math.max(120, Math.floor(fill ? Math.min(w, h || w) : w));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      box.current = { side, dpr };
      const c = cv.current;
      if (!c) return;
      c.width = Math.floor(side * dpr);
      c.height = Math.floor(side * dpr);
      c.style.width = `${side}px`;
      c.style.height = `${side}px`;
      drawRef.current();
    };
    const ro = new ResizeObserver(resize);
    ro.observe(el);
    resize();
    return () => ro.disconnect();
  }, [fill, state]);

  // animation loop (paused when asked, off-screen or in a hidden tab)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { visible.current = e.isIntersecting; });
    io.observe(wrap.current);
    if (!playing || state !== 'ready') {
      drawRef.current();
      return () => io.disconnect();
    }
    let raf = 0;
    let last = performance.now();
    let acc = 0;
    const loop = (now) => {
      const dt = now - last;
      last = now;
      if (visible.current && !document.hidden) {
        acc += dt;
        const every = mode === 'painting' ? 1000 / 40 : 1000 / 20;
        if (acc >= every) {
          clock.current += (acc / 1000) * speed;
          acc = 0;
          drawRef.current();
        }
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [playing, speed, mode, state]);

  return (
    <Wrap ref={wrap} $fill={fill} $inset={inset} role="img" aria-label="The Kiss by Gustav Klimt, 1908, softly animated">
      <canvas ref={cv} />
      {state === 'loading' && <Msg>Loading the painting…</Msg>}
      {state === 'failed' && <Msg>The painting could not be loaded.</Msg>}
    </Wrap>
  );
};

KissCanvas.displayName = 'KissCanvas';
export default KissCanvas;
