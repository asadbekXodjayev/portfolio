import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const lines = [
  { status: 'OK', text: 'Starting portfolio kernel v2.0...' },
  { status: 'OK', text: 'Loading modules: projects, skills, experience' },
  { status: 'OK', text: 'Mounting filesystem /dev/asad0...' },
  { status: 'OK', text: 'Initializing terminal interface' },
  { status: 'OK', text: 'All systems nominal. Welcome.' },
];

const Wrap = styled.div`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.colors.bg};
  z-index: 9998;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  opacity: ${({ $fading }) => ($fading ? 0 : 1)};
  transition: opacity 500ms ease;
  pointer-events: ${({ $fading }) => ($fading ? 'none' : 'auto')};
`;

const Box = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  max-width: 640px;
  width: 100%;
`;

const Line = styled.div`
  opacity: 0;
  animation: fade 300ms forwards;
  animation-delay: ${({ $i }) => $i * 350}ms;
  @keyframes fade { to { opacity: 1; } }
`;

const Tag = styled.span`
  color: ${({ theme }) => theme.colors.warning};
`;

const BootSequence = ({ onDone }) => {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const total = lines.length * 350 + 800;
    const fadeT = setTimeout(() => setFading(true), total);
    const doneT = setTimeout(() => onDone && onDone(), total + 600);
    return () => {
      clearTimeout(fadeT);
      clearTimeout(doneT);
    };
  }, [onDone]);

  return (
    <Wrap $fading={fading}>
      <Box>
        {lines.map((l, i) => (
          <Line key={i} $i={i}>
            [ <Tag>{l.status}</Tag> ] {l.text}
          </Line>
        ))}
      </Box>
    </Wrap>
  );
};

BootSequence.displayName = 'BootSequence';
export default BootSequence;
