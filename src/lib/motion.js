// Shared Framer Motion variants. Deliberately restrained: short fades with a tiny
// offset. Anything bigger should be a single, intentional moment (see Hero).

export const EASE = [0.2, 0, 0, 1];

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.02 },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.28, ease: EASE } },
};

export const fastContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.025 } },
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25, ease: EASE } },
};

export const inViewProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, margin: '-60px' },
};

export const cardHover = { y: -2, transition: { duration: 0.15, ease: EASE } };
export const cardTap = { scale: 0.99 };
export const cardExit = { opacity: 0, transition: { duration: 0.15 } };
