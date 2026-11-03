import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { prefersReducedMotion } from '../../utils/helpers';

// A square that trails the pointer and inverts whatever is under it (mix-blend-mode: difference).
// It grows over links and buttons. The native cursor stays visible, so nothing is hidden from
// anyone; the effect is only enabled for fine pointers that can hover, and never with
// reduced motion.

const Box = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 500;
  width: 26px;
  height: 26px;
  margin: -13px 0 0 -13px;
  border: 2px solid #fff;
  background: transparent;
  mix-blend-mode: difference;
  pointer-events: none;
  opacity: 0;
  transition: opacity 120ms steps(2), background 90ms steps(1);
  will-change: transform;
  &[data-on='true'] { opacity: 1; }
  &[data-hover='true'] { background: #fff; }
`;

const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, summary, [data-cursor]';

const PixelCursor = () => {
  const ref = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const ok = window.matchMedia?.('(hover: hover) and (pointer: fine)').matches && !prefersReducedMotion();
    setEnabled(Boolean(ok));
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;
    const el = ref.current;
    let tx = -100;
    let ty = -100;
    let x = -100;
    let y = -100;
    let scale = 1;
    let targetScale = 1;
    let raf = 0;

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      el.dataset.on = 'true';
      const hot = e.target instanceof Element && e.target.closest(INTERACTIVE);
      el.dataset.hover = hot ? 'true' : 'false';
      targetScale = hot ? 1.7 : 1;
    };
    const onLeave = () => { el.dataset.on = 'false'; };

    const loop = () => {
      x += (tx - x) * 0.22;
      y += (ty - y) * 0.22;
      scale += (targetScale - scale) * 0.25;
      el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;
  return <Box ref={ref} aria-hidden="true" data-on="false" data-hover="false" />;
};

PixelCursor.displayName = 'PixelCursor';
export default PixelCursor;
