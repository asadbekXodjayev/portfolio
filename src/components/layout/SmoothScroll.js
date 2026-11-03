import { useEffect } from 'react';
import Lenis from 'lenis';
import { prefersReducedMotion } from '../../utils/helpers';

/**
 * Inertial smooth scrolling (Lenis). A low `lerp` makes the page trail slightly behind the
 * wheel — that is the "delay". Skipped entirely for reduced-motion users and coarse pointers
 * (touch devices already have native momentum scrolling).
 * The instance is exposed as window.__lenis so other pieces (marquee, back-to-top,
 * route changes) can read velocity or scroll programmatically.
 */
const SmoothScroll = () => {
  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    if (window.matchMedia?.('(pointer: coarse)').matches) return undefined;

    const lenis = new Lenis({
      lerp: 0.07, // lower = longer trailing delay
      wheelMultiplier: 0.95,
      smoothWheel: true,
      anchors: true,
    });
    window.__lenis = lenis;

    let raf = 0;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return null;
};

SmoothScroll.displayName = 'SmoothScroll';
export default SmoothScroll;
