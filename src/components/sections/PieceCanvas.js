import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { renderTo, cellAspect } from '../../data/ascii/library/runtime/canvas.js';

/**
 * Plays one piece from the vendored `ascii-magic-art` library (MIT, by ASCII Magic):
 *   https://github.com/kailashsr38/ascii-magic-art
 * Each piece is a small ES module whose `create()` returns `draw(t)` (t in seconds). The
 * library's own canvas renderer paints the frame, so block characters and colours are drawn
 * the way the author intended. Pieces are loaded on demand, one chunk each.
 */

const loaders = import.meta.glob('../../data/ascii/library/pieces/*.js');
const BG = '#000';

const Wrap = styled.div`
  ${({ $fill, $inset }) =>
    $fill
      ? `position: absolute; inset: ${$inset}px;`
      : 'position: relative; width: 100%;'}
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
  color: #aaa;
  font-family: ${({ theme }) => theme.fonts.pixel};
  font-size: 18px;
  text-align: center;
  padding: 16px;
`;

const POSTER_T = 3.2; // the frame shown when paused / reduced motion (seconds into the piece)

const PieceCanvas = ({ entry, playing, speed, fill, inset = 24, nonce }) => {
  const wrap = useRef(null);
  const cv = useRef(null);
  const piece = useRef({ draw: null, meta: null });
  const clock = useRef(0);
  const box = useRef({ w: 0, h: 0 });
  const visible = useRef(true);
  const drawNow = useRef(() => {});
  const [state, setState] = useState('loading'); // loading | ready | failed
  const [aspect, setAspect] = useState(() => (entry.rows * 1.66) / entry.cols);

  // load + instantiate the piece
  useEffect(() => {
    let alive = true;
    setState('loading');
    const load = loaders[`../../data/ascii/library/pieces/${entry.id}.js`];
    if (!load) { setState('failed'); return undefined; }
    load()
      .then((mod) => {
        if (!alive) return;
        piece.current = { draw: mod.default(), meta: mod.meta };
        clock.current = playing ? 0 : POSTER_T;
        setAspect((mod.meta.rows * cellAspect(mod.meta)) / mod.meta.cols);
        setState('ready');
      })
      .catch(() => alive && setState('failed'));
    return () => { alive = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entry.id, nonce]);

  // paint the current frame at the current size
  useEffect(() => {
    drawNow.current = () => {
      const c = cv.current;
      const { draw, meta } = piece.current;
      const { w, h } = box.current;
      if (!c || !draw || !w || !h) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      renderTo(c, draw(clock.current), meta.palette, {
        width: Math.floor(w * dpr),
        height: Math.floor(h * dpr),
        bg: BG,
        ink: '#e8e8ea',
        fit: 'contain',
        margin: 0,
        meta,
      });
      c.style.width = `${w}px`;
      c.style.height = `${h}px`;
    };
    drawNow.current();
  }, [state, aspect]);

  // size: as wide as the column, or (full screen) the largest that fits both ways
  useEffect(() => {
    const el = wrap.current;
    const resize = () => {
      const W = el.clientWidth;
      const H = el.clientHeight;
      let w = W;
      let h = W * aspect;
      if (fill && H && h > H) { h = H; w = H / aspect; }
      box.current = { w: Math.max(80, Math.floor(w)), h: Math.max(40, Math.floor(h)) };
      drawNow.current();
    };
    const ro = new ResizeObserver(resize);
    ro.observe(el);
    resize();
    return () => ro.disconnect();
  }, [fill, aspect, state]);

  // the loop
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { visible.current = e.isIntersecting; });
    io.observe(wrap.current);
    if (!playing || state !== 'ready') {
      drawNow.current();
      return () => io.disconnect();
    }
    const fps = Math.min(piece.current.meta?.fps || entry.fps || 20, 30);
    let raf = 0;
    let last = performance.now();
    let acc = 0;
    const loop = (now) => {
      const dt = now - last;
      last = now;
      if (visible.current && !document.hidden) {
        acc += dt;
        const every = 1000 / fps;
        if (acc >= every) {
          clock.current += (acc / 1000) * speed;
          acc = 0;
          drawNow.current();
        }
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [playing, speed, state, entry.fps]);

  return (
    <Wrap ref={wrap} $fill={fill} $inset={inset} role="img" aria-label={`${entry.name}: animated text art`}>
      <canvas ref={cv} style={{ minHeight: state === 'ready' ? undefined : `${Math.round(120)}px` }} />
      {state === 'loading' && <Msg>Loading…</Msg>}
      {state === 'failed' && <Msg>This piece could not be loaded.</Msg>}
    </Wrap>
  );
};

PieceCanvas.displayName = 'PieceCanvas';
export default PieceCanvas;
