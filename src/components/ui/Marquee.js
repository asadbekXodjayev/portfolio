import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { prefersReducedMotion } from '../../utils/helpers';

// Infinite ticker that reacts to scrolling: it speeds up with scroll velocity and reverses
// when you scroll up. Pauses when off-screen; static for reduced motion.

const Band = styled.div`
  overflow: hidden;
  background: ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.bg};
  border-top: 2px solid ${({ theme }) => theme.colors.ink};
  border-bottom: 2px solid ${({ theme }) => theme.colors.ink};
  box-shadow: 0 6px 0 ${({ theme }) => theme.colors.shadow};
  user-select: none;
`;

const Track = styled.div`
  display: flex;
  width: max-content;
  will-change: transform;
  font-family: ${({ theme }) => theme.fonts.pixel};
  font-size: clamp(26px, 4vw, 46px);
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
  padding: 14px 0;
`;

const Item = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 28px;
  padding-right: 28px;
  &::after {
    content: '';
    width: 0.38em;
    height: 0.38em;
    background: currentColor;
    flex: none;
  }
`;

const Marquee = ({ items, base = 45 }) => {
  const wrap = useRef(null);
  const track = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    let x = 0;
    let dir = -1;
    let visible = true;
    let lastY = window.scrollY;
    let last = performance.now();
    let raf = 0;

    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(wrap.current);

    const loop = (now) => {
      const dt = Math.min(64, now - last) / 1000;
      last = now;
      const dy = window.scrollY - lastY;
      lastY = window.scrollY;
      if (visible) {
        if (Math.abs(dy) > 0.5) dir = dy > 0 ? -1 : 1;
        const speed = base + Math.min(Math.abs(dy) * 55, 700);
        x += dir * speed * dt;
        const half = track.current.scrollWidth / 2;
        if (x <= -half) x += half;
        if (x > 0) x -= half;
        track.current.style.transform = `translate3d(${x}px, 0, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [base]);

  return (
    <Band ref={wrap} aria-hidden="true">
      <Track ref={track}>
        {[...items, ...items].map((t, i) => (
          <Item key={i}>{t}</Item>
        ))}
      </Track>
    </Band>
  );
};

Marquee.displayName = 'Marquee';
export default Marquee;
