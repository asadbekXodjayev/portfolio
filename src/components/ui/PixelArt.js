import React, { useMemo } from 'react';
import styled from 'styled-components';

/**
 * Tiny pixel-art engine. Art is written as rows of characters; each character is a palette key:
 *   n navy · b blue · l light-blue · a amber · s skin · w cloud/white · k sky · r red
 *   e = eye (navy, blinks)   A = amber that blinks (cursor / logo)   . = empty
 * Colors come from the theme through CSS variables, so every sprite follows light/dark mode.
 */

const COLOR = { n: 'n', b: 'b', l: 'l', a: 'a', s: 's', w: 'w', k: 'k', r: 'r', e: 'n', A: 'a' };

const toRuns = (rows) => {
  const runs = [];
  rows.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const ch = row[x];
      if (ch === '.' || !COLOR[ch]) {
        x += 1;
        continue;
      }
      let w = 1;
      while (row[x + w] === ch) w += 1;
      runs.push({ x, y, w, ch });
      x += w;
    }
  });
  return runs;
};

/** Draws art inside an existing <svg>. */
export const Pixels = ({ rows, x = 0, y = 0, className }) => {
  const runs = useMemo(() => toRuns(rows), [rows]);
  return (
    <g transform={`translate(${x} ${y})`} className={className}>
      {runs.map((r, i) => (
        <rect
          key={i}
          x={r.x}
          y={r.y}
          width={r.w}
          height={1}
          className={r.ch === 'e' ? 'eye' : r.ch === 'A' ? 'blink' : undefined}
          style={{ fill: `var(--${COLOR[r.ch]})` }}
        />
      ))}
    </g>
  );
};

/** Theme → CSS variables used by the art. */
export const paletteVars = ({ theme }) => `
  --n: ${theme.colors.navy};
  --b: ${theme.colors.blue};
  --l: ${theme.colors.light};
  --a: ${theme.colors.sceneAccent};
  --s: ${theme.colors.skin};
  --w: ${theme.colors.cloud};
  --k: ${theme.colors.sky};
  --r: ${theme.colors.danger};
`;

const Svg = styled.svg`
  ${paletteVars}
  display: block;
  shape-rendering: crispEdges;
  image-rendering: pixelated;
`;

/** Standalone sprite: <Sprite rows={...} size={4} label="..." /> — size = screen pixels per art pixel. */
export const Sprite = ({ rows, size = 3, label, className }) => {
  const w = Math.max(...rows.map((r) => r.length));
  const h = rows.length;
  return (
    <Svg
      className={className}
      viewBox={`0 0 ${w} ${h}`}
      width={w * size}
      height={h * size}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <Pixels rows={rows} />
    </Svg>
  );
};

export { Svg as PixelSvg };
