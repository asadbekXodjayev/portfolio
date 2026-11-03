import { css } from 'styled-components';

// Shared pixel-style building blocks (2px hard borders, no radius, hard offset shadows).

/** Hard 2px border + offset shadow. Use on panels, cards, buttons. */
export const pixelBox = (size = 4) => css`
  border: 2px solid ${({ theme }) => theme.colors.ink};
  border-radius: 0;
  box-shadow: ${size}px ${size}px 0 ${({ theme }) => theme.colors.shadow};
`;

/** Interactive lift: rises on hover, presses in on active. Pair with pixelBox(4). */
export const pixelPress = css`
  transition: transform ${({ theme }) => theme.animation.fast} ${({ theme }) => theme.animation.easing},
    box-shadow ${({ theme }) => theme.animation.fast} ${({ theme }) => theme.animation.easing},
    background ${({ theme }) => theme.animation.fast} steps(1),
    color ${({ theme }) => theme.animation.fast} steps(1);
  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 ${({ theme }) => theme.colors.shadow};
  }
  &:active {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0 ${({ theme }) => theme.colors.shadow};
  }
`;

/** The page background: a checkerboard of 2px × 2px squares. */
export const pixelGrid = css`
  background-color: ${({ theme }) => theme.colors.bg};
  background-image: repeating-conic-gradient(
    ${({ theme }) => theme.colors.dot} 0% 25%,
    transparent 0% 50%
  );
  background-size: 4px 4px; /* 2 squares × 2 squares → each square is 2px */
`;
