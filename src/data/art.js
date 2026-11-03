/**
 * Public-domain paintings for the hidden /ascii room, shown in their ORIGINAL colours with a
 * slight motion. All images are public domain (the artists died more than 100 years ago, and
 * the flat reproductions are PD too) and were fetched from Wikimedia Commons.
 *
 * motion:
 *   wave  — rows slide sideways by a travelling sine; `amp` is a fraction of the width,
 *           `freq` how many ripples fit the height, `speed` radians/second, and `from`/`to` the
 *           part of the picture (0 top … 1 bottom) that moves.
 *   dust  — little specks: `rise` drifts them upward, otherwise they only twinkle.
 *   light — a soft band of light sweeping across (soft-light blend).
 */
export const ARTS = [
  {
    id: 'kiss',
    name: 'The Kiss (Klimt)',
    title: 'The Kiss',
    artist: 'Gustav Klimt',
    year: '1907–08',
    src: '/art/the-kiss.jpg',
    aspect: 960 / 963,
    credit: 'Photograph: Google Art Project, via Wikimedia Commons.',
    blurb: 'Gustav Klimt, 1908, in its original colors, with a slow breath of gold.',
    motion: {
      dust: { n: 80, rgb: '255,226,140', rise: true },
      light: { rgb: '255,240,190', alpha: 0.55 },
    },
  },
  {
    id: 'starry-night',
    name: 'Starry Night (Van Gogh)',
    title: 'The Starry Night',
    artist: 'Vincent van Gogh',
    year: '1889',
    src: '/art/starry-night.jpg',
    aspect: 1100 / 871,
    credit: 'Photograph: Google Art Project, via Wikimedia Commons.',
    blurb: 'Vincent van Gogh, 1889. The sky swirls, and the stars flicker.',
    motion: {
      wave: { amp: 0.014, freq: 22, speed: 1.2, from: 0, to: 0.7 },
      dust: { n: 60, rgb: '255,244,170', rise: false },
    },
  },
  {
    id: 'great-wave',
    name: 'The Great Wave (Hokusai)',
    title: 'Under the Wave off Kanagawa',
    artist: 'Katsushika Hokusai',
    year: 'c. 1831',
    src: '/art/great-wave.jpg',
    aspect: 1100 / 752,
    credit: 'Restored image from Wikimedia Commons.',
    blurb: 'Katsushika Hokusai, about 1831. The sea heaves under the wave, with spray in the air.',
    motion: {
      wave: { amp: 0.012, freq: 16, speed: 1.5, from: 0.3, to: 1 },
      dust: { n: 45, rgb: '255,255,255', rise: true },
    },
  },
  {
    id: 'wanderer',
    name: 'Wanderer above the Sea of Fog (Friedrich)',
    title: 'Wanderer above the Sea of Fog',
    artist: 'Caspar David Friedrich',
    year: 'c. 1818',
    src: '/art/wanderer.jpg',
    aspect: 960 / 1229,
    credit: 'Photographic reproduction via Wikimedia Commons.',
    blurb: 'Caspar David Friedrich, about 1818. The fog drifts past the mountains.',
    motion: {
      wave: { amp: 0.006, freq: 9, speed: 0.7, from: 0.22, to: 0.72 },
      light: { rgb: '235,240,255', alpha: 0.5 },
    },
  },
  {
    id: 'water-lilies',
    name: 'Water Lilies (Monet)',
    title: 'Water Lilies',
    artist: 'Claude Monet',
    year: '1906',
    src: '/art/water-lilies.jpg',
    aspect: 1100 / 1057,
    credit: 'Art Institute of Chicago, via Wikimedia Commons.',
    blurb: 'Claude Monet, 1906. The pond shimmers.',
    motion: {
      wave: { amp: 0.009, freq: 30, speed: 0.9, from: 0, to: 1 },
      light: { rgb: '255,250,220', alpha: 0.35 },
    },
  },
];
