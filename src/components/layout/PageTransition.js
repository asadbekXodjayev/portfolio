import React, { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import { prefersReducedMotion } from '../../utils/helpers';

/**
 * Pixel transition between routes. The screen is covered by a grid of squares that disappear
 * one by one. Every navigation rolls a NEW random recipe, so it is never the same twice:
 *   · a pattern (diagonal, dissolve, column/row wipe, blinds, centre-out, edge-in, spiral,
 *     checkerboard, rain, wave, blocks) with a random direction,
 *   · a random cell size, duration and jitter,
 *   · a random way for each square to leave (cut, shrink, or wipe in a random direction).
 * The same pattern never plays twice in a row. It runs in a layout effect, so the new page is
 * never visible for a frame before the cover appears.
 *
 * It also wears off on purpose, so nobody gets tired of it: the first 3 navigations of a
 * session get the full sweep, navigations 4–6 are noticeably quicker, and from the 7th on it
 * is only a brief flick.
 */

const TIERS = [
  { upTo: 3, span: [380, 780], jitter: 170, speed: 1 }, // navigations 1–3: the full show
  { upTo: 6, span: [210, 380], jitter: 90, speed: 0.65 }, // 4–6: quicker
  { upTo: Infinity, span: [90, 170], jitter: 30, speed: 0.45 }, // 7+: barely there
];
const tierFor = (n) => TIERS.findIndex((t) => n <= t.upTo);

const KEY = 'pt-navs';
const countNav = () => {
  let n = 1;
  try {
    n = (Number(sessionStorage.getItem(KEY)) || 0) + 1;
    sessionStorage.setItem(KEY, String(n));
  } catch {
    /* storage blocked: stay on the full show */
  }
  return n;
};

/* ── how a single square leaves ── */
const cut = keyframes`0%, 99.9% { opacity: 1; } 100% { opacity: 0; }`;
const shrink = keyframes`0% { transform: scale(1); } 100% { transform: scale(0); }`;
const wipeUp = keyframes`0% { clip-path: inset(0 0 0 0); } 100% { clip-path: inset(0 0 100% 0); }`;
const wipeDown = keyframes`0% { clip-path: inset(0 0 0 0); } 100% { clip-path: inset(100% 0 0 0); }`;
const wipeLeft = keyframes`0% { clip-path: inset(0 0 0 0); } 100% { clip-path: inset(0 100% 0 0); }`;
const wipeRight = keyframes`0% { clip-path: inset(0 0 0 0); } 100% { clip-path: inset(0 0 0 100%); }`;

const EXITS = {
  cut: { kf: cut, ms: 1, ease: 'linear' },
  shrink: { kf: shrink, ms: 240, ease: 'steps(4, end)' },
  wipeUp: { kf: wipeUp, ms: 260, ease: 'steps(4, end)' },
  wipeDown: { kf: wipeDown, ms: 260, ease: 'steps(4, end)' },
  wipeLeft: { kf: wipeLeft, ms: 260, ease: 'steps(4, end)' },
  wipeRight: { kf: wipeRight, ms: 260, ease: 'steps(4, end)' },
};
const EXIT_KEYS = Object.keys(EXITS);

const Grid = styled.div`
  position: fixed;
  inset: 0;
  z-index: 400;
  display: grid;
  pointer-events: none;
  overflow: hidden;
  grid-template-columns: repeat(${({ $cols }) => $cols}, 1fr);
  grid-template-rows: repeat(${({ $rows }) => $rows}, 1fr);
`;

const Cell = styled.span`
  background: ${({ theme }) => theme.colors.ink};
  /* the per-square delay is an inline style: as a styled prop it would mint one CSS class per
     unique value (hundreds per transition) and stall the page before the first frame */
  ${({ $exit, $speed }) => {
    const e = EXITS[$exit];
    return css`
      animation: ${e.kf} ${Math.max(1, Math.round(e.ms * $speed))}ms ${e.ease} both;
    `;
  }}
`;

/* ── patterns: each returns a 0‥1 "when does this square go" value ── */
const hash = (a, b) => {
  const v = Math.sin(a * 127.1 + b * 311.7) * 43758.5453;
  return v - Math.floor(v);
};

const PATTERNS = {
  diagonal: { grid: 'cells', n: ({ x, y, c, r, fx, fy }) => (fx(x) + fy(y)) / (c + r - 2) },
  dissolve: { grid: 'cells', n: ({ rnd }) => rnd },
  columns: { grid: 'cols', n: ({ x, c, fx }) => fx(x) / Math.max(1, c - 1) },
  rows: { grid: 'rows', n: ({ y, r, fy }) => fy(y) / Math.max(1, r - 1) },
  blinds: { grid: 'cols', n: ({ x, c, flip }) => (x % 2 ? 0.5 : 0) + (flip ? c - 1 - x : x) / (c * 2) },
  centreOut: { grid: 'cols', n: ({ x, c, inv }) => { const d = Math.abs(x - (c - 1) / 2) / ((c - 1) / 2 || 1); return inv ? 1 - d : d; } },
  radial: { grid: 'cells', n: ({ x, y, c, r, inv }) => { const d = Math.hypot((x - (c - 1) / 2) / c, (y - (r - 1) / 2) / r) / 0.707; return inv ? 1 - d : d; } },
  spiral: {
    grid: 'cells',
    n: ({ x, y, c, r, inv }) => {
      const dx = (x - (c - 1) / 2) / c;
      const dy = (y - (r - 1) / 2) / r;
      const a = (Math.atan2(dy, dx) + Math.PI) / (2 * Math.PI);
      const d = Math.hypot(dx, dy) / 0.707;
      const v = a * 0.55 + d * 0.45;
      return inv ? 1 - v : v;
    },
  },
  checker: { grid: 'cells', n: ({ x, y, c, r, rnd }) => ((x + y) % 2) * 0.5 + ((x + y) / (c + r)) * 0.35 + rnd * 0.15 },
  rain: { grid: 'cells', n: ({ x, y, r, colRnd, fy }) => colRnd[x] * 0.62 + (fy(y) / Math.max(1, r - 1)) * 0.38 },
  wave: { grid: 'cells', n: ({ x, y, c, fx }) => clamp01(fx(x) / Math.max(1, c - 1) + 0.14 * Math.sin(y * 0.9)) },
  blocks: { grid: 'cells', n: ({ x, y, seed, rnd }) => hash(Math.floor(x / 3) + seed, Math.floor(y / 3)) * 0.8 + rnd * 0.2 },
};
const PATTERN_KEYS = Object.keys(PATTERNS);

const clamp01 = (v) => Math.max(0, Math.min(1, v));
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const between = (a, b) => a + Math.random() * (b - a);

/** Roll a brand-new recipe. `last` is the previous pattern so it is never repeated;
 *  `nav` is how many navigations this session has made (it sets how fast the effect is). */
const roll = (last, nav) => {
  const tier = tierFor(nav);
  const T = TIERS[tier];
  const pattern = pick(PATTERN_KEYS.filter((k) => k !== last));
  const spec = PATTERNS[pattern];
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const cell = Math.round(between(vw < 700 ? 40 : 44, vw < 700 ? 72 : 112) * (tier ? 1.25 : 1)); // fewer squares when quick
  let cols = Math.ceil(vw / cell);
  let rows = Math.ceil(vh / cell);
  if (spec.grid === 'cols') { cols = Math.max(8, Math.round(between(10, 34))); rows = 1; }
  if (spec.grid === 'rows') { cols = 1; rows = Math.max(6, Math.round(between(8, 22))); }

  const span = Math.round(between(T.span[0], T.span[1])); // how long the whole sweep takes
  const jitter = Math.round(between(0, T.jitter));
  const exit = pick(EXIT_KEYS);
  const flipX = Math.random() < 0.5;
  const flipY = Math.random() < 0.5;
  const inv = Math.random() < 0.5;
  const seed = Math.floor(Math.random() * 1000);
  const colRnd = Array.from({ length: cols }, () => Math.random());
  const ctx = {
    c: cols,
    r: rows,
    flip: flipX,
    inv,
    seed,
    colRnd,
    fx: (x) => (flipX ? cols - 1 - x : x),
    fy: (y) => (flipY ? rows - 1 - y : y),
  };

  const delays = [];
  for (let y = 0; y < rows; y += 1) {
    for (let x = 0; x < cols; x += 1) {
      const v = clamp01(spec.n({ ...ctx, x, y, rnd: Math.random() }));
      delays.push(Math.round(v * span + Math.random() * jitter));
    }
  }
  const total = span + jitter + Math.round(EXITS[exit].ms * T.speed) + 50;
  return { pattern, exit, cols, rows, delays, total, speed: T.speed, tier, nav };
};

const PageTransition = () => {
  const { pathname } = useLocation();
  const first = useRef(true);
  const last = useRef(null);
  const [run, setRun] = useState(null);

  useLayoutEffect(() => {
    if (first.current) {
      first.current = false;
      return undefined;
    }
    if (prefersReducedMotion()) return undefined;
    const next = { ...roll(last.current, countNav()), id: Date.now() };
    last.current = next.pattern;
    setRun(next);
    const t = setTimeout(() => setRun(null), next.total);
    return () => clearTimeout(t);
  }, [pathname]);

  const cells = useMemo(() => run?.delays ?? [], [run]);

  if (!run) return null;
  return (
    <Grid key={run.id} $cols={run.cols} $rows={run.rows} data-pattern={run.pattern} data-exit={run.exit} data-tier={run.tier} data-total={run.total} aria-hidden="true">
      {cells.map((d, i) => (
        <Cell key={i} style={{ animationDelay: `${d}ms` }} $exit={run.exit} $speed={run.speed} />
      ))}
    </Grid>
  );
};

PageTransition.displayName = 'PageTransition';
export default PageTransition;
