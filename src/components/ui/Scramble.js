import React, { useLayoutEffect, useState } from 'react';
import { prefersReducedMotion } from '../../utils/helpers';

// "Decode" text reveal: letters start shuffled and lock into place left to right.
// The pool is the text's own letters, so glyph widths stay close to the final line (little
// reflow). Screen readers get the final text immediately via aria-label.

const SR_ONLY = { position: 'absolute', width: 1, height: 1, margin: -1, padding: 0, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap', border: 0 };

const shuffleFrom = (pool) => pool[Math.floor(Math.random() * pool.length)];

const Scramble = ({ text, duration = 650, delay = 0, as: Tag = 'span', ...rest }) => {
  const [out, setOut] = useState(text);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) {
      setOut(text);
      return undefined;
    }
    const letters = [...text].filter((c) => c.trim());
    const render = (progress) =>
      [...text]
        .map((c, i) => {
          if (!c.trim()) return c;
          const lockAt = (i / text.length) * 0.75 + 0.15;
          return progress >= lockAt ? c : shuffleFrom(letters);
        })
        .join('');

    setOut(render(0));
    const start = performance.now() + delay;
    let raf = 0;
    let lastPaint = 0;
    const tick = (now) => {
      const p = (now - start) / duration;
      if (p >= 1) {
        setOut(text);
        return;
      }
      if (p >= 0 && now - lastPaint > 55) {
        lastPaint = now;
        setOut(render(p));
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [text, duration, delay]);

  return (
    <Tag {...rest}>
      <span aria-hidden="true">{out}</span>
      <span style={SR_ONLY}>{text}</span>
    </Tag>
  );
};

Scramble.displayName = 'Scramble';
export default Scramble;
