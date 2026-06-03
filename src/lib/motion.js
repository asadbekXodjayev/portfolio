// Shared Framer Motion variants — keeps animation timing consistent across the site.
// Mirrors the terminal/neon aesthetic: short, snappy entrances with a soft easeOut.

export const EASE = [0.16, 1, 0.3, 1];

// Page / section container that staggers its children in.
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

// Individual item: rises and fades in.
export const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

// Tighter stagger for dense rows (tags, skill chips).
export const fastContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  },
};

export const fadeInVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
};

// Shared whileInView config so every scroll-triggered section behaves the same.
export const inViewProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, margin: '-80px' },
};

// Card hover/tap presets (neon lift). Use with a styled motion component.
export const cardHover = { y: -6, transition: { duration: 0.2, ease: EASE } };
export const cardTap = { scale: 0.98 };

// Exit used by AnimatePresence when filtering cards out.
export const cardExit = { opacity: 0, scale: 0.9, transition: { duration: 0.2 } };
