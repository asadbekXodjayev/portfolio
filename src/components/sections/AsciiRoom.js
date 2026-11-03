import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Button from '../ui/Button';
import KissCanvas from './KissCanvas';
import PieceCanvas from './PieceCanvas';
import { posterFrame, COLS, ROWS } from '../../data/ascii/animations';
import { ENTRIES, GROUPS } from '../../data/ascii/entries';
import { pixelBox } from '../../styles/pixel';
import { prefersReducedMotion } from '../../utils/helpers';

const LINE_HEIGHT = 1.12;
const CHAR_W = 0.6; // IBM Plex Mono advance width, in em

// The room is exactly as tall as the page block it is given (the /ascii page makes that block
// 100vh minus the nav): menu on the left scrolls by itself, the stage fills the rest.
const Layout = styled.div`
  display: grid;
  grid-template-columns: 250px minmax(0, 1fr);
  gap: ${({ theme }) => theme.space(5)};
  height: 100%;
  min-height: 0;
  @media (max-width: 900px) { grid-template-columns: 1fr; height: auto; }
`;

const Menu = styled.nav`
  display: grid;
  gap: ${({ theme }) => theme.space(5)};
  /* a long list: it scrolls on its own, so picking an entry never moves the screen */
  align-content: start;
  @media (min-width: 901px) {
    min-height: 0;
    height: 100%;
    overflow-y: auto;
    padding: 0 10px 8px 0;
    overscroll-behavior: contain;
  }
  @media (max-width: 900px) { order: 2; }
  h2 {
    font-size: 18px;
    margin-bottom: 8px;
    padding-bottom: 4px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.ink};
  }
  ul { list-style: none; display: grid; gap: 6px; }
`;

const Pick = styled.button`
  width: 100%;
  text-align: left;
  padding: 6px 10px;
  font-family: ${({ theme }) => theme.fonts.pixel};
  font-size: 17px;
  border: 2px solid ${({ theme }) => theme.colors.ink};
  background: ${({ theme, $on }) => ($on ? theme.colors.ink : theme.colors.bgSecondary)};
  color: ${({ theme, $on }) => ($on ? theme.colors.bg : theme.colors.text)};
  box-shadow: ${({ $on }) => ($on ? 'none' : '3px 3px 0')} ${({ theme }) => theme.colors.shadow};
  transform: ${({ $on }) => ($on ? 'translate(3px, 3px)' : 'none')};
  &:hover { background: ${({ theme }) => theme.colors.accent}; color: ${({ theme }) => theme.colors.accentInk}; }
`;

const Seg = styled(Pick)`
  width: auto;
  text-align: center;
  padding: 5px 14px;
`;

const Stage = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space(3)};
  min-width: 0;
  min-height: 0;
  height: 100%;
  @media (max-width: 900px) { order: 1; height: calc(100dvh - 64px - 24px); min-height: 420px; }
`;

// The framed screen. Three sizes: small, fit (fills the column), full (fullscreen).
const Window = styled.figure`
  ${pixelBox(6)}
  scroll-margin-top: 76px;
  background: ${({ theme }) => theme.colors.bgSecondary};
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  ${({ $size }) => ($size === 'small' ? 'width: min(100%, 440px); flex: none;' : 'width: 100%; flex: 1;')}
  ${({ $full, theme }) =>
    $full &&
    `
    position: fixed;
    inset: 0;
    z-index: 600;
    width: 100vw;
    height: 100vh;
    height: 100dvh;
    border: 0;
    box-shadow: none;
    display: flex;
    flex-direction: column;
    background: ${theme.colors.bg};
  `}
  &:fullscreen {
    width: 100vw;
    height: 100vh;
    border: 0;
    box-shadow: none;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.bg};
  }
`;

const Title = styled.figcaption`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 14px;
  background: ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.bg};
  font-family: ${({ theme }) => theme.fonts.pixel};
  font-size: 17px;
  font-weight: 600;
  flex: none;
  span { font-family: ${({ theme }) => theme.fonts.mono}; font-size: 12px; font-weight: 400; }
  button {
    font-family: ${({ theme }) => theme.fonts.pixel};
    font-size: 15px;
    padding: 1px 10px;
    color: ${({ theme }) => theme.colors.bg};
    border: 2px solid ${({ theme }) => theme.colors.bg};
    &:hover { background: ${({ theme }) => theme.colors.bg}; color: ${({ theme }) => theme.colors.ink}; }
  }
`;

// The screen is always a dark "sky" with light text, in both themes (night scenes need it).
const Screen = styled.div`
  padding: ${({ $fill }) => ($fill ? '12px' : '14px')};
  background: #000;
  color: #fff;
  overflow: hidden;
  position: relative;
  ${({ $fill }) => ($fill ? 'flex: 1; min-height: 0; display: grid; place-items: center;' : '')}
`;

const Pre = styled.pre`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 9px;
  line-height: ${LINE_HEIGHT};
  white-space: pre;
  user-select: none;
  max-width: none;
  overflow: hidden;
  &[data-tint='red'] { color: #ff5a4a; }
`;

const Controls = styled.div`
  flex: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 12px;
  align-items: center;
  select {
    height: 44px;
    padding: 0 10px;
    font-family: ${({ theme }) => theme.fonts.pixel};
    font-size: 17px;
    background: ${({ theme }) => theme.colors.bgSecondary};
    box-shadow: 3px 3px 0 ${({ theme }) => theme.colors.shadow};
  }
  label, .lbl { font-family: ${({ theme }) => theme.fonts.pixel}; font-size: 17px; display: inline-flex; align-items: center; gap: 8px; }
  .group { display: inline-flex; align-items: center; gap: 8px; }
`;

const Blurb = styled.p`
  margin-top: 6px;
  font-size: 16px;
  line-height: 1.35;
  flex: none;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const Hint = styled.p`
  flex: none;
  line-height: 1.35;
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textMuted};
  kbd {
    font-family: ${({ theme }) => theme.fonts.mono};
    padding: 0 5px;
    border: 2px solid ${({ theme }) => theme.colors.ink};
    background: ${({ theme }) => theme.colors.bgSecondary};
  }
`;

const isTyping = (t) => t instanceof HTMLElement && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName));

const AsciiRoom = () => {
  const [id, setId] = useState('kiss');
  const [playing, setPlaying] = useState(() => !prefersReducedMotion());
  const [speed, setSpeed] = useState(1);
  const [nonce, setNonce] = useState(0);
  const [size, setSize] = useState('fit'); // small | fit | full
  const [fake, setFake] = useState(false); // CSS fallback when the Fullscreen API is unavailable
  const [kissMode, setKissMode] = useState('ascii');

  const anim = ENTRIES.find((a) => a.id === id);
  const isKiss = anim.kind === 'kiss';
  const isPiece = anim.kind === 'piece';
  const isCanvas = isKiss || isPiece; // anything that is not the text <pre>
  const full = size === 'full';

  const pre = useRef(null);
  const frame = useRef(null);
  const screen = useRef(null);
  const visible = useRef(true);
  const sim = useRef({ step: null, t: 0, shown: false });

  /* ── sizing: fit the 64×22 text block into whatever room the screen has ── */
  useLayoutEffect(() => {
    if (isCanvas) return undefined;
    const el = screen.current;
    const fit = () => {
      if (!pre.current) return;
      const cs = getComputedStyle(el);
      const w = el.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      const h = el.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
      const byWidth = w / (COLS * CHAR_W);
      const fs = Math.min(byWidth, h / (ROWS * LINE_HEIGHT)); // always fit both ways
      pre.current.style.fontSize = `${Math.max(5, fs).toFixed(2)}px`;
    };
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    fit();
    return () => ro.disconnect();
  }, [isCanvas, full, fake, size, id]);

  /* ── full screen: real Fullscreen API, with a CSS overlay as the fallback ── */
  const enterFull = useCallback(async () => {
    setSize('full');
    try {
      if (frame.current?.requestFullscreen) await frame.current.requestFullscreen();
      else setFake(true);
    } catch {
      setFake(true);
    }
  }, []);

  const exitFull = useCallback(async () => {
    setSize('fit');
    setFake(false);
    if (document.fullscreenElement) {
      try { await document.exitFullscreen(); } catch { /* already left */ }
    }
  }, []);

  useEffect(() => {
    const onChange = () => { if (!document.fullscreenElement) { setFake(false); setSize((s) => (s === 'full' ? 'fit' : s)); } };
    document.addEventListener('fullscreenchange', onChange);
    return () => document.removeEventListener('fullscreenchange', onChange);
  }, []);

  // Esc always leaves full screen (the browser also does it natively for the real API).
  useEffect(() => {
    if (!(full || fake)) return undefined;
    if (fake) window.__lenis?.stop();
    const onKey = (e) => { if (e.key === 'Escape') exitFull(); };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      if (fake) window.__lenis?.start();
    };
  }, [full, fake, exitFull]);

  /* ── the simulation ── */
  useEffect(() => {
    sim.current = { step: anim.create ? anim.create() : null, t: 0, shown: false };
  }, [id, nonce, anim]);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { visible.current = e.isIntersecting; });
    io.observe(frame.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (isCanvas) return undefined;
    const s = sim.current;
    const paint = (rows) => {
      if (!pre.current) return;
      pre.current.textContent = rows.join('\n');
      pre.current.dataset.tint = rows.tint || '';
    };

    if (!playing) {
      if (!s.shown) { paint(posterFrame(anim)); s.shown = true; }
      return undefined;
    }

    let raf = 0;
    let last = performance.now();
    let acc = 0;
    if (!s.shown) { paint(s.step(s.t)); s.t += 1; s.shown = true; }

    const loop = (now) => {
      const dt = now - last;
      last = now;
      if (visible.current && !document.hidden) {
        acc += dt;
        const interval = 1000 / (anim.fps * speed);
        let n = 0;
        while (acc >= interval && n < 4) {
          acc -= interval;
          paint(s.step(s.t));
          s.t += 1;
          n += 1;
        }
        if (acc > interval * 4) acc = 0;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [anim, playing, speed, nonce, id, isCanvas]);

  const go = useCallback((delta) => {
    const i = ENTRIES.findIndex((a) => a.id === id);
    setId(ENTRIES[(i + delta + ENTRIES.length) % ENTRIES.length].id);
  }, [id]);

  // picking an entry: on narrow screens the list sits below the screen, so bring the screen back
  const choose = (next) => {
    setId(next);
    if (window.innerWidth <= 900) frame.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const shuffle = () => {
    const others = ENTRIES.filter((a) => a.id !== id);
    setId(others[Math.floor(Math.random() * others.length)].id);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (isTyping(e.target) || e.ctrlKey || e.metaKey || e.altKey) return;
      if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
      else if (e.key === ' ' && (document.activeElement === document.body || full)) { e.preventDefault(); setPlaying((p) => !p); }
      else if (e.key === 'f' || e.key === 'F') { e.preventDefault(); (full ? exitFull : enterFull)(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go, full, enterFull, exitFull]);

  const isFull = full || fake;
  const fillScreen = size !== 'small'; // Fit and Full fill the available space; Small is a fixed small box

  return (
    <Layout>
      <Menu aria-label="Animations" data-lenis-prevent>
        {GROUPS.map((g) => (
          <div key={g}>
            <h2>{g}</h2>
            <ul>
              {ENTRIES.filter((a) => a.group === g).map((a) => (
                <li key={a.id}>
                  <Pick type="button" $on={a.id === id} aria-pressed={a.id === id} onClick={() => choose(a.id)}>
                    {a.name}
                  </Pick>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Menu>

      <Stage>
        <Window ref={frame} $size={size} $full={fake} aria-label={`${isCanvas ? 'Artwork' : 'ASCII animation'}: ${anim.name}`}>
          <Title>
            {anim.name}
            {isFull ? (
              <button type="button" onClick={exitFull}>Exit full screen (Esc)</button>
            ) : (
              <span>{isKiss ? 'Klimt, 1908' : `${Math.round(Math.min(anim.fps, 30) * (isPiece ? 1 : speed))} fps`}</span>
            )}
          </Title>
          <Screen ref={screen} $fill={fillScreen}>
            {isKiss && <KissCanvas playing={playing} speed={speed} mode={kissMode} fill={fillScreen} inset={isFull ? 24 : 12} nonce={nonce} />}
            {isPiece && <PieceCanvas key={anim.id} entry={anim} playing={playing} speed={speed} fill={fillScreen} inset={isFull ? 24 : 12} nonce={nonce} />}
            {!isCanvas && <Pre ref={pre} aria-hidden="true" />}
          </Screen>
        </Window>

        <Blurb>{anim.blurb}</Blurb>

        <Controls>
          <Button type="button" onClick={() => setPlaying((p) => !p)} aria-pressed={playing}>
            {playing ? 'Pause' : 'Play'}
          </Button>
          <Button type="button" $ghost onClick={() => { setNonce((n) => n + 1); setPlaying(true); }}>
            Restart
          </Button>
          <Button type="button" $ghost onClick={shuffle}>
            Surprise me
          </Button>
          <label>
            Speed
            <select value={speed} onChange={(e) => setSpeed(Number(e.target.value))} aria-label="Playback speed">
              <option value={0.5}>0.5×</option>
              <option value={1}>1×</option>
              <option value={2}>2×</option>
              <option value={3}>3×</option>
            </select>
          </label>
        </Controls>

        <Controls>
          <div className="group" role="group" aria-label="Screen size">
            <span className="lbl">Size</span>
            <Seg type="button" $on={size === 'small'} aria-pressed={size === 'small'} onClick={() => (isFull ? exitFull().then(() => setSize('small')) : setSize('small'))}>
              Small
            </Seg>
            <Seg type="button" $on={size === 'fit'} aria-pressed={size === 'fit'} onClick={() => (isFull ? exitFull() : setSize('fit'))}>
              Fit
            </Seg>
            <Seg type="button" $on={isFull} aria-pressed={isFull} onClick={enterFull}>
              Full
            </Seg>
          </div>
          {isKiss && (
            <div className="group" role="group" aria-label="Artwork view">
              <span className="lbl">View</span>
              <Seg type="button" $on={kissMode === 'ascii'} aria-pressed={kissMode === 'ascii'} onClick={() => setKissMode('ascii')}>
                ASCII
              </Seg>
              <Seg type="button" $on={kissMode === 'painting'} aria-pressed={kissMode === 'painting'} onClick={() => setKissMode('painting')}>
                Painting
              </Seg>
            </div>
          )}
        </Controls>

        <Hint>
          Keys: <kbd>←</kbd> <kbd>→</kbd> switch · <kbd>Space</kbd> play or pause · <kbd>F</kbd> full screen.{' '}
          {isKiss && 'Gustav Klimt, The Kiss (1907–08), public domain. Photograph: Google Art Project, via Wikimedia Commons.'}
          {isPiece && (
            <>
              “{anim.name}” is from <a href="https://github.com/kailashsr38/ascii-magic-art" target="_blank" rel="noreferrer">ascii-magic-art</a> by
              ASCII Magic, MIT license.
            </>
          )}
          {!isCanvas && 'Hand-made text animation.'}
        </Hint>
      </Stage>
    </Layout>
  );
};

AsciiRoom.displayName = 'AsciiRoom';
export default AsciiRoom;
