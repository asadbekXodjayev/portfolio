import { ANIMATIONS } from './animations';
import { ARTS } from '../art';
import { LIBRARY } from './library/registry';

/**
 * Everything the hidden room can play, in menu order.
 *   kind 'text'  — hand-made text animation (Rain)
 *   kind 'art'   — a public-domain painting (canvas, original colours, slight motion)
 *   kind 'piece' — a piece from the vendored MIT library (ascii-magic-art)
 */
export const GROUPS = ['Art', 'Love & Bloom', 'Animals', 'Sky', 'Roads', 'Rain & Storm', 'Nature'];

const arts = ARTS.map((a) => ({
  id: a.id,
  kind: 'art',
  name: a.name,
  group: 'Art',
  blurb: a.blurb,
  fps: 30,
  art: a,
}));

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

export const ENTRIES = [...arts, ...text, ...pieces].sort((a, b) => GROUPS.indexOf(a.group) - GROUPS.indexOf(b.group));
