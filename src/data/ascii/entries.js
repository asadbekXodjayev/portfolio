import { ANIMATIONS } from './animations';
import { LIBRARY } from './library/registry';

/**
 * Everything the hidden room can play, in menu order.
 *   kind 'text'  — hand-made text animation (Rain)
 *   kind 'kiss'  — Klimt's The Kiss (canvas, original colours)
 *   kind 'piece' — a piece from the vendored MIT library (ascii-magic-art)
 */
export const GROUPS = ['Art', 'Love & Bloom', 'Animals', 'Sky', 'Roads', 'Rain & Storm', 'Nature'];

const kiss = {
  id: 'kiss',
  kind: 'kiss',
  name: 'The Kiss (Klimt)',
  group: 'Art',
  blurb: 'Gustav Klimt, 1908, in its original colors, with a slow breath of gold. View it as ASCII or as the painting.',
  fps: 30,
};

const text = ANIMATIONS.map((a) => ({ ...a, kind: 'text' }));
const pieces = LIBRARY.map((p) => ({
  id: p.slug,
  kind: 'piece',
  name: p.name,
  group: p.group,
  blurb: p.note,
  fps: p.fps,
  cols: p.cols,
  rows: p.rows,
}));

export const ENTRIES = [kiss, ...text, ...pieces].sort((a, b) => GROUPS.indexOf(a.group) - GROUPS.indexOf(b.group));
