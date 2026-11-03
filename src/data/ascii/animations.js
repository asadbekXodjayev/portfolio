/**
 * The hand-made text animation kept in the hidden /ascii room: Rain. Everything else in the room
 * comes from the vendored MIT library (see ./library) or is the Klimt piece.
 *
 * An animation is { id, name, group, blurb, fps, poster, create }.
 *   create()  → returns a step function  (t) => string[ROWS]   (t = frame counter)
 * Frames are COLS × ROWS characters, plain printable ASCII.
 */

export const COLS = 64;
export const ROWS = 22;

/* ───────────────────────────── helpers ───────────────────────────── */

const blank = () => Array.from({ length: ROWS }, () => Array(COLS).fill(' '));

const put = (g, x, y, c) => {
  const ix = Math.round(x);
  const iy = Math.round(y);
  if (ix >= 0 && ix < COLS && iy >= 0 && iy < ROWS) g[iy][ix] = c;
};

const write = (g, x, y, s) => [...s].forEach((c, i) => put(g, x + i, y, c));

/** Stamp art with its top-left at (x, y). Spaces are transparent unless `opaque`. */
const stamp = (g, x, y, art, opaque = false) =>
  art.forEach((row, j) => [...row].forEach((c, i) => { if (opaque || c !== ' ') put(g, x + i, y + j, c); }));

/** Stamp art horizontally centred on cx, with its last row on bottomY. */
const stampBottomCentre = (g, cx, bottomY, art) => {
  const w = Math.max(...art.map((r) => r.length));
  stamp(g, cx - Math.floor(w / 2), bottomY - art.length + 1, art.map((r) => r.padEnd(w, ' ')));
};

const lines = (g) => g.map((r) => r.join(''));
const rnd = Math.random;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

/* ──────────────────────────── 10 · rain ──────────────────────────── */

const rain = () => {
  const drops = Array.from({ length: 70 }, () => ({ x: rnd() * COLS, y: rnd() * ROWS, v: 0.7 + rnd() * 0.9 }));
  const splashes = [];
  return () => {
    const g = blank();
    for (let x = 0; x < COLS; x += 1) put(g, x, ROWS - 1, '_');
    drops.forEach((d) => {
      d.y += d.v;
      d.x -= 0.15;
      if (d.y >= ROWS - 1) {
        splashes.push({ x: d.x, age: 0 });
        d.y = -rnd() * 6;
        d.x = rnd() * (COLS + 6);
      }
      put(g, d.x, d.y, d.v > 1.2 ? '|' : "'");
    });
    for (let i = splashes.length - 1; i >= 0; i -= 1) {
      const s = splashes[i];
      s.age += 1;
      if (s.age > 3) { splashes.splice(i, 1); continue; }
      put(g, s.x - s.age, ROWS - 2, '.');
      put(g, s.x + s.age, ROWS - 2, '.');
      if (s.age === 1) put(g, s.x, ROWS - 2, 'o');
    }
    return lines(g);
  };
};

/* ───────────────────────────── registry ──────────────────────────── */

export const ANIMATIONS = [
  { id: 'rain', name: 'Rain', group: 'Rain & Storm', blurb: 'Windy rain with tiny splashes.', fps: 20, poster: 30, create: rain },
];

/** Run an animation up to frame `t` and return that frame (used for the still poster). */
export const posterFrame = (anim) => {
  if (!anim.create) return [];
  const step = anim.create();
  let out = [];
  for (let i = 0; i <= anim.poster; i += 1) out = step(i);
  return out;
};
