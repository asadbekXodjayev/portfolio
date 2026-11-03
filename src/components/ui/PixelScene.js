import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { Pixels, PixelSvg } from './PixelArt';
import { dev, sun, moon, cloud, mug, books } from '../../data/pixelArt';
import { useTheme } from '../../context/ThemeContext';
import { pixelBox } from '../../styles/pixel';

const drift = keyframes`
  from { transform: translateX(-18px); }
  to   { transform: translateX(70px); }
`;
const blink = keyframes`
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0.15; }
`;
const eyeBlink = keyframes`
  0%, 92%, 98%, 100% { fill: var(--n); }
  93%, 97% { fill: var(--s); }
`;
const steam = keyframes`
  0%   { transform: translateY(0); opacity: 1; }
  50%  { transform: translateY(-2px); opacity: 0.7; }
  100% { transform: translateY(-4px); opacity: 0; }
`;
const twinkle = keyframes`
  0%, 60%, 100% { opacity: 1; }
  70%, 90% { opacity: 0.1; }
`;
const bubbleCursor = keyframes`
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
`;

const Wrap = styled.figure`
  position: relative;
  ${pixelBox(6)}
  background: ${({ theme }) => theme.colors.sky};
  overflow: hidden;
  line-height: 0;
`;

const Svg = styled(PixelSvg)`
  width: 100%;
  height: auto;
  .cloud-a { animation: ${drift} 80s steps(88) infinite; }
  .cloud-b { animation: ${drift} 110s steps(88) infinite; animation-delay: -45s; }
  .blink { animation: ${blink} 1.1s steps(1) infinite; }
  .eye { animation: ${eyeBlink} 5s steps(1) infinite; }
  .steam { animation: ${steam} 1.6s steps(4) infinite; }
  .steam.s2 { animation-delay: -0.8s; }
  .twinkle { animation: ${twinkle} 3s steps(1) infinite; }
  .t2 { animation-delay: -1s; }
  .t3 { animation-delay: -2s; }
  .orb { cursor: pointer; }
  .orb:hover rect { filter: brightness(1.12); }
  .orb:focus-visible { outline: 3px solid ${({ theme }) => theme.colors.primary}; }
`;

const Bubble = styled.div`
  position: absolute;
  left: 5%;
  top: 9%;
  padding: 6px 10px;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 2px solid ${({ theme }) => theme.colors.ink};
  box-shadow: 3px 3px 0 ${({ theme }) => theme.colors.shadow};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.pixel};
  font-size: clamp(12px, 1.5vw, 15px);
  line-height: 1.2;
  white-space: nowrap;
  &::after {
    /* little pixel tail */
    content: '';
    position: absolute;
    left: 18px;
    bottom: -8px;
    width: 8px;
    height: 8px;
    background: ${({ theme }) => theme.colors.bgSecondary};
    border-right: 2px solid ${({ theme }) => theme.colors.ink};
    border-bottom: 2px solid ${({ theme }) => theme.colors.ink};
    transform: rotate(45deg) translate(-3px, -3px);
  }
  .cur {
    display: inline-block;
    width: 0.5em;
    height: 1em;
    margin-left: 3px;
    vertical-align: -0.12em;
    background: ${({ theme }) => theme.colors.accent};
    animation: ${bubbleCursor} 1s steps(1) infinite;
  }
`;

const Hint = styled.span`
  position: absolute;
  right: 8px;
  bottom: 6px;
  padding: 1px 6px;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 2px solid ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.pixel};
  font-size: 13px;
  line-height: 1.3;
  pointer-events: none;
  opacity: ${({ $gone }) => ($gone ? 0 : 0.92)};
  transition: opacity 200ms steps(3);
`;

/* ── hover to colour ──────────────────────────────────────────────────────────────────────
   The scene is drawn twice: in black & white (the base) and in full colour on top. The colour
   copy is only visible through a clip path made of the squares you have hovered, so each square
   you touch "wakes up" in the scene's real colours, and the picture slowly fills with life.   */
const GW = 64;
const GH = 40;
const SVG_NS = 'http://www.w3.org/2000/svg';

// Real-life colours for the scene (same CSS variables the art already uses).
const LIFE = {
  light: { '--k': '#7EC8F2', '--w': '#FFFFFF', '--a': '#FFC52E', '--s': '#F2C48D', '--n': '#4A2E1A', '--b': '#3E9A4D', '--l': '#8CCB6E' },
  dark: { '--k': '#17224F', '--w': '#5A6AA0', '--a': '#F4E9B1', '--s': '#F2C48D', '--n': '#2B1B10', '--b': '#2F7F43', '--l': '#6FB35B' },
};

const useReveal = (svgRef, clipRef, onFirst) => {
  const done = useRef(new Set());
  const last = useRef(null);
  const first = useRef(false);

  useEffect(() => {
    const svg = svgRef.current;
    const clip = clipRef.current;
    const wrap = svg.parentElement;

    const cellAt = (e) => {
      const r = svg.getBoundingClientRect();
      const x = Math.floor(((e.clientX - r.left) / r.width) * GW);
      const y = Math.floor(((e.clientY - r.top) / r.height) * GH);
      return x >= 0 && y >= 0 && x < GW && y < GH ? [x, y] : null;
    };

    const reveal = (x, y) => {
      const key = `${x},${y}`;
      if (done.current.has(key)) return;
      done.current.add(key);
      const r = document.createElementNS(SVG_NS, 'rect');
      // a hair of overlap so neighbouring squares never leave a seam
      r.setAttribute('x', x - 0.02);
      r.setAttribute('y', y - 0.02);
      r.setAttribute('width', 1.04);
      r.setAttribute('height', 1.04);
      clip.appendChild(r);
      if (!first.current) { first.current = true; onFirst?.(); }
    };

    // fill the gaps if the pointer jumped several squares between two events
    const line = (x0, y0, x1, y1) => {
      const dx = Math.abs(x1 - x0);
      const dy = Math.abs(y1 - y0);
      const sx = x0 < x1 ? 1 : -1;
      const sy = y0 < y1 ? 1 : -1;
      let err = dx - dy;
      let x = x0;
      let y = y0;
      for (let i = 0; i < 200; i += 1) {
        reveal(x, y);
        if (x === x1 && y === y1) break;
        const e2 = 2 * err;
        if (e2 > -dy) { err -= dy; x += sx; }
        if (e2 < dx) { err += dx; y += sy; }
      }
    };

    const onMove = (e) => {
      const c = cellAt(e);
      if (!c) { last.current = null; return; }
      if (last.current) line(last.current[0], last.current[1], c[0], c[1]);
      else reveal(c[0], c[1]);
      last.current = c;
    };
    const onLeave = () => { last.current = null; };
    const onDbl = (e) => {
      if (e.target instanceof Element && e.target.closest('.orb')) return; // the sun/moon button
      done.current.clear();
      while (clip.firstChild) clip.removeChild(clip.firstChild);
    };

    wrap.addEventListener('pointermove', onMove);
    wrap.addEventListener('pointerleave', onLeave);
    wrap.addEventListener('dblclick', onDbl);
    return () => {
      wrap.removeEventListener('pointermove', onMove);
      wrap.removeEventListener('pointerleave', onLeave);
      wrap.removeEventListener('dblclick', onDbl);
    };
  }, [svgRef, clipRef, onFirst]);
};

const STARS = [
  [6, 4, ''], [14, 9, 't2'], [24, 3, 't3'], [36, 8, ''], [55, 20, 't2'], [60, 6, 't3'], [10, 18, 't3'], [30, 16, ''],
];

/** The artwork itself. Rendered once in black & white (interactive) and once in colour (clipped). */
const SceneArt = ({ dark, interactive, toggle, onKey }) => (
  <>
    {/* sky */}
    <rect width="64" height="40" style={{ fill: 'var(--k)' }} />

    {/* stars (night only) */}
    {dark &&
      STARS.map(([x, y, c], i) => (
        <rect key={i} x={x} y={y} width="1" height="1" className={`twinkle ${c}`} style={{ fill: 'var(--l)' }} />
      ))}

    {/* sun / moon — click to switch theme (only the base copy is a button) */}
    <g
      className={interactive ? 'orb' : undefined}
      {...(interactive
        ? {
            role: 'button',
            tabIndex: 0,
            'aria-label': dark ? 'Switch to light theme' : 'Switch to dark theme',
            onClick: toggle,
            onKeyDown: onKey,
          }
        : {})}
    >
      <rect x="44" y="3" width="13" height="13" fill="transparent" />
      <Pixels rows={dark ? moon : sun} x={46} y={5} />
    </g>

    {/* clouds */}
    {!dark && <Pixels rows={cloud} x={4} y={10} className="cloud-a" />}
    {!dark && <Pixels rows={cloud} x={30} y={5} className="cloud-b" />}
    {dark && <Pixels rows={cloud} x={8} y={12} className="cloud-a" />}

    {/* distant hills */}
    <rect x="0" y="25" width="14" height="3" style={{ fill: 'var(--l)' }} opacity="0.55" />
    <rect x="14" y="24" width="10" height="4" style={{ fill: 'var(--l)' }} opacity="0.55" />
    <rect x="46" y="25" width="10" height="3" style={{ fill: 'var(--l)' }} opacity="0.55" />
    <rect x="56" y="23" width="8" height="5" style={{ fill: 'var(--l)' }} opacity="0.55" />

    {/* desk */}
    <rect y="28" width="64" height="12" style={{ fill: 'var(--n)' }} />
    <rect y="28" width="64" height="2" style={{ fill: 'var(--b)' }} />
    <rect x="6" y="34" width="16" height="1" style={{ fill: 'var(--b)' }} />
    <rect x="42" y="34" width="16" height="1" style={{ fill: 'var(--b)' }} />

    {/* props */}
    <Pixels rows={books} x={10} y={25} />
    <Pixels rows={mug} x={46} y={24} />
    <rect x="47" y="21" width="1" height="2" className="steam" style={{ fill: 'var(--w)' }} />
    <rect x="49" y="20" width="1" height="2" className="steam s2" style={{ fill: 'var(--w)' }} />

    {/* the developer */}
    <Pixels rows={dev} x={24} y={14} />
  </>
);

const PixelScene = () => {
  const { mode, toggle } = useTheme();
  const dark = mode === 'dark';
  const svgRef = useRef(null);
  const clipRef = useRef(null);
  const [hinted, setHinted] = React.useState(false);
  const onFirst = React.useCallback(() => setHinted(true), []);
  useReveal(svgRef, clipRef, onFirst);

  const onKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <Wrap>
      <Svg ref={svgRef} viewBox="0 0 64 40" role="group" aria-label="Pixel illustration of a developer working at a laptop with a cup of coffee">
        <defs>
          <clipPath id="scene-awake" ref={clipRef} />
        </defs>
        <SceneArt dark={dark} interactive toggle={toggle} onKey={onKey} />
        {/* the same scene in real colours, visible only where you have hovered */}
        <g clipPath="url(#scene-awake)" style={LIFE[dark ? 'dark' : 'light']} aria-hidden="true" pointerEvents="none">
          <SceneArt dark={dark} />
        </g>
      </Svg>
      <Hint aria-hidden="true" $gone={hinted}>hover to wake up the colors · double-click to reset</Hint>
      <Bubble aria-hidden="true">
        hello, world<span className="cur" />
      </Bubble>
    </Wrap>
  );
};

PixelScene.displayName = 'PixelScene';
export default PixelScene;
