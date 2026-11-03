import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { paint, GlyphAtlas } from '../../data/ascii/library/runtime/canvas.js';

/**
 * Plays one public-domain painting (see data/art.js) in its ORIGINAL colours, with a slight
 * motion: a breathing zoom, a sideways ripple in the part of the picture that "moves", drifting
 * specks, and a soft band of light. Two views:
 *   "ascii"    — each cell is a glyph tinted with the painting's own colour
 *   "painting" — the painting itself
 * `cover` fills the whole screen edge to edge (the picture is cropped); otherwise the whole
 * picture is shown inside the space it is given.
 *
 * The ASCII view uses the vendored library renderer's glyph atlas (fast path): colours are
 * quantised to a 512-colour cube so the atlas stays small, the cell backgrounds are a 1px-per-cell
 * bitmap scaled up, and only the glyph layer is repainted each frame.
 */

const GC = 128; // ascii columns
const RAMP = ' .:-=+*#%@';
const BG = '#0b0907';
const SPARK = 'ÿ'; // colour key for sparkles
const LV = 8; // levels per channel in the quantised palette

const Wrap = styled.div`
  ${({ $fill, $inset, $aspect }) =>
    $fill
      ? `position: absolute; inset: ${$inset}px;`
      : `position: relative; width: 100%; aspect-ratio: ${$aspect};`}
  display: grid;
  place-items: center;
  background: ${BG};
  overflow: hidden;
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

const makeDust = (n, rise) =>
  Array.from({ length: n }, () => ({
    x: Math.random(),
    y: Math.random(),
    s: 1 + Math.random() * 1.8,
    sp: rise ? 0.006 + Math.random() * 0.016 : 0,
    ph: Math.random() * 6.28,
  }));

/** Sample the painting into GC×gr cells: luminance, gold flag, quantised colour keys, and a tiny
 *  bitmap (one pixel per cell) holding the dimmed cell backgrounds. */
const buildGrid = (img, gr) => {
  const off = document.createElement('canvas');
  off.width = GC;
  off.height = gr;
  const c = off.getContext('2d', { willReadFrequently: true });
  c.imageSmoothingQuality = 'high';
  c.drawImage(img, 0, 0, GC, gr);
  const d = c.getImageData(0, 0, GC, gr).data;

  const n = GC * gr;
  const lum = new Float32Array(n);
  const bright = new Uint8Array(n);
  const keys = new Array(n);
  const palette = { [SPARK]: '#fff4b8' };
  const q = (v) => clamp(Math.round((v / 255) * (LV - 1)), 0, LV - 1);

  const bg = document.createElement('canvas');
  bg.width = GC;
  bg.height = gr;
  const bctx = bg.getContext('2d');
  const bimg = bctx.createImageData(GC, gr);

  for (let i = 0; i < n; i += 1) {
    const r = d[i * 4];
    const g = d[i * 4 + 1];
    const b = d[i * 4 + 2];
    lum[i] = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    bright[i] = lum[i] > 0.62 ? 1 : 0; // where a sparkle may appear
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
  return { lum, bright, keys, palette, bg, gr };
};

const ArtCanvas = ({ art, playing, speed, mode, fill, cover = false, inset = 24, nonce }) => {
  const wrap = useRef(null);
  const cv = useRef(null);
  const img = useRef(null);
  const grid = useRef(null);
  const atlas = useRef(new GlyphAtlas());
  const dust = useRef([]);
  const clock = useRef(0);
  const box = useRef({ w: 0, h: 0, dpr: 1 });
  const visible = useRef(true);
  const drawRef = useRef(() => {});
  const [state, setState] = useState('loading'); // loading | ready | failed

  const aspect = art.aspect;
  const wave = art.motion.wave;

  // load the painting and sample it into an ascii-sized grid
  useEffect(() => {
    let alive = true;
    setState('loading');
    img.current = null;
    grid.current = null;
    dust.current = art.motion.dust ? makeDust(art.motion.dust.n, art.motion.dust.rise) : [];
    const im = new Image();
    im.onload = () => {
      if (!alive) return;
      img.current = im;
      const gr = Math.max(16, Math.round(GC / (im.naturalWidth / im.naturalHeight) / 2));
      grid.current = buildGrid(im, gr);
      setState('ready');
    };
    im.onerror = () => alive && setState('failed');
    im.src = art.src;
    return () => { alive = false; };
  }, [art]);

  useEffect(() => { clock.current = 0; }, [nonce, art]);

  // the renderers
  useEffect(() => {
    const dustCfg = art.motion.dust;
    const lightCfg = art.motion.light;

    /** sideways offset (fraction of the width) for a row at height y (0 top … 1 bottom) */
    const shiftFrac = (y, t) => {
      if (!wave) return 0;
      const e = clamp((y - wave.from) / 0.12, 0, 1) * clamp((wave.to - y) / 0.12, 0, 1);
      return wave.amp * e * Math.sin(y * wave.freq + t * wave.speed + 0.7 * Math.sin(y * wave.freq * 0.37 - t * 0.5));
    };

    /** where the whole picture goes inside the canvas: contained, or cropped to cover it */
    const place = (W, H) => {
      const dw = cover ? Math.max(W, H * aspect) : Math.min(W, H * aspect);
      const dh = dw / aspect;
      return { ox: (W - dw) / 2, oy: (H - dh) / 2, dw, dh };
    };

    const paintDust = (ctx, r, t) => {
      if (!dustCfg) return;
      const px = Math.max(1.5, r.dw / 420);
      dust.current.forEach((p) => {
        const y = (((p.y - t * p.sp) % 1) + 1) % 1;
        const x = p.x + Math.sin(t * 0.4 + p.ph) * 0.012;
        const a = 0.2 + 0.7 * (0.5 + 0.5 * Math.sin(t * 2.2 + p.ph * 6));
        ctx.fillStyle = `rgba(${dustCfg.rgb},${a.toFixed(3)})`;
        ctx.fillRect(Math.round(r.ox + x * r.dw), Math.round(r.oy + y * r.dh), px * p.s, px * p.s);
      });
    };

    const lightBand = (ctx, r, t) => {
      if (!lightCfg) return;
      ctx.save();
      ctx.globalCompositeOperation = 'soft-light';
      const pos = r.ox + (((t * 0.09) % 1.8) - 0.4) * r.dw;
      const gr = ctx.createLinearGradient(pos - 0.18 * r.dw, r.oy, pos + 0.18 * r.dw, r.oy + r.dh * 0.5);
      gr.addColorStop(0, `rgba(${lightCfg.rgb},0)`);
      gr.addColorStop(0.5, `rgba(${lightCfg.rgb},${lightCfg.alpha})`);
      gr.addColorStop(1, `rgba(${lightCfg.rgb},0)`);
      ctx.fillStyle = gr;
      ctx.fillRect(r.ox, r.oy, r.dw, r.dh);
      ctx.restore();
    };

    // slow breathing zoom + drift around the centre of the picture; the minimum stays high
    // enough that the sideways ripple never shows an edge
    const zoomAround = (ctx, r, t) => {
      const base = 1.035 + (wave ? wave.amp * 1.5 : 0);
      const sc = base + 0.012 * Math.sin(t * 0.33);
      ctx.translate(r.ox + r.dw / 2 + Math.sin(t * 0.21) * r.dw * 0.006, r.oy + r.dh / 2 + Math.cos(t * 0.17) * r.dh * 0.006);
      ctx.scale(sc, sc);
      ctx.translate(-(r.ox + r.dw / 2), -(r.oy + r.dh / 2));
    };

    const painting = (ctx, W, H, t) => {
      ctx.fillStyle = BG;
      ctx.fillRect(0, 0, W, H);
      const r = place(W, H);
      const im = img.current;
      ctx.save();
      ctx.beginPath(); // keep the frame's edges straight while the inside ripples
      ctx.rect(r.ox, r.oy, r.dw, r.dh);
      ctx.clip();
      zoomAround(ctx, r, t);
      if (wave) {
        const n = clamp(Math.ceil(r.dh / 3), 40, 200);
        const sh = im.naturalHeight / n;
        for (let i = 0; i < n; i += 1) {
          const dx = shiftFrac((i + 0.5) / n, t) * r.dw;
          ctx.drawImage(im, 0, i * sh, im.naturalWidth, sh + 0.5, r.ox + dx, r.oy + (i * r.dh) / n, r.dw, r.dh / n + 1);
        }
      } else {
        ctx.drawImage(im, r.ox, r.oy, r.dw, r.dh);
      }
      ctx.restore();
      lightBand(ctx, r, t);
      paintDust(ctx, r, t);
    };

    const rowsText = [];
    const rowsColor = [];
    const ascii = (ctx, W, H, t, dpr) => {
      const g = grid.current;
      const { lum, bright, keys, palette, bg, gr } = g;
      ctx.fillStyle = BG;
      ctx.fillRect(0, 0, W, H);
      const r = place(W, H);
      const cw = r.dw / GC;
      const ch = r.dh / gr;
      ctx.save();
      ctx.beginPath(); // keep the frame's edges straight while the inside ripples
      ctx.rect(r.ox, r.oy, r.dw, r.dh);
      ctx.clip();
      zoomAround(ctx, r, t);

      // cell backgrounds: a 1px-per-cell bitmap, one row at a time so the ripple can move it
      ctx.imageSmoothingEnabled = false;
      for (let y = 0; y < gr; y += 1) {
        const s = Math.round(shiftFrac((y + 0.5) / gr, t) * GC);
        ctx.drawImage(bg, 0, y, GC, 1, r.ox - s * cw, r.oy + y * ch, r.dw, ch + 0.6);
      }
      ctx.imageSmoothingEnabled = true;

      // glyph layer
      for (let y = 0; y < gr; y += 1) {
        const s = Math.round(shiftFrac((y + 0.5) / gr, t) * GC);
        let tr = '';
        let cr = '';
        for (let x = 0; x < GC; x += 1) {
          const sx = clamp(x + s, 0, GC - 1);
          const i = y * GC + sx;
          const l = clamp(lum[i] + 0.06 * Math.sin(t * 1.4 + x * 0.18 + y * 0.35), 0, 0.999);
          if (bright[i] && Math.sin(t * 3.1 + i * 12.9898) > 0.992) {
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
      rowsText.length = gr;
      rowsColor.length = gr;
      paint(ctx, { text: rowsText.join('\n'), color: rowsColor.join('\n') }, palette, {
        x: r.ox,
        y: r.oy,
        cw,
        ch,
        ink: '#ffffff',
        mode: 'text',
        atlas: atlas.current,
        dpr,
      });
      ctx.restore();
      paintDust(ctx, r, t);
    };

    drawRef.current = () => {
      const c = cv.current;
      if (!c || state !== 'ready' || !img.current || !grid.current) return; // data is cleared while a new painting loads
      const { w, h, dpr } = box.current;
      if (!w || !h) return;
      const ctx = c.getContext('2d');
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingQuality = 'high';
      (mode === 'painting' ? painting : ascii)(ctx, w, h, clock.current, dpr);
    };
    drawRef.current();
  }, [art, mode, state, cover, aspect, wave]);

  // size: fills its container (Fit / Full / Fill) or is as wide as the column (Small)
  useEffect(() => {
    const el = wrap.current;
    const resize = () => {
      const W = el.clientWidth;
      const H = fill ? el.clientHeight : W / aspect;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.max(120, Math.floor(W));
      const h = Math.max(80, Math.floor(H));
      box.current = { w, h, dpr };
      const c = cv.current;
      if (!c) return;
      c.width = Math.floor(w * dpr);
      c.height = Math.floor(h * dpr);
      c.style.width = `${w}px`;
      c.style.height = `${h}px`;
      drawRef.current();
    };
    const ro = new ResizeObserver(resize);
    ro.observe(el);
    resize();
    return () => ro.disconnect();
  }, [fill, state, aspect, cover, inset]);

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
  }, [playing, speed, mode, state, art]);

  return (
    <Wrap ref={wrap} $fill={fill} $inset={inset} $aspect={aspect} role="img" aria-label={`${art.title} by ${art.artist}, ${art.year}, softly animated`}>
      <canvas ref={cv} />
      {state === 'loading' && <Msg>Loading the painting…</Msg>}
      {state === 'failed' && <Msg>The painting could not be loaded.</Msg>}
    </Wrap>
  );
};

ArtCanvas.displayName = 'ArtCanvas';
export default ArtCanvas;
