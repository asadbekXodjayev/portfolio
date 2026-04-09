import React, { useState } from 'react';
import styled from 'styled-components';
import TerminalWindow from '../terminal/TerminalWindow';
import { config, interests } from '../../data/config';
import { asciiPortrait } from '../../utils/ascii';

const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space(6)};
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1.4fr;
  }
`;

const Ascii = styled.pre`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 10px;
  line-height: 1.1;
  text-align: center;
`;

const Line = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text};
  margin: 4px 0;
  opacity: 0;
  animation: rise 500ms forwards;
  animation-delay: ${({ $i }) => $i * 120}ms;
  @keyframes rise { to { opacity: 1; } }
  strong { color: ${({ theme }) => theme.colors.primary}; }
  em { color: ${({ theme }) => theme.colors.secondary}; font-style: normal; }
`;

const InterestGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: ${({ theme }) => theme.space(4)};
`;

const Chip = styled.button`
  border: 1px solid ${({ theme, $active }) => ($active ? theme.colors.primary : theme.colors.border)};
  color: ${({ theme, $active }) => ($active ? theme.colors.bg : theme.colors.text)};
  background: ${({ theme, $active }) => ($active ? theme.colors.primary : 'transparent')};
  padding: 4px 10px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  cursor: pointer;
  transition: all 150ms;
  &:hover { border-color: ${({ theme }) => theme.colors.primary}; }
`;

const Desc = styled.div`
  margin-top: 12px;
  padding: 10px;
  border-left: 2px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  font-size: 13px;
`;

const bio = [
  { t: '<strong>user:</strong> asad' },
  { t: '<strong>role:</strong> front-end developer' },
  { t: '<strong>loc:</strong> Uzbekistan' },
  { t: '<strong>focus:</strong> React, UI, fast interfaces' },
  { t: 'Greetings! I build web things with React and a strong bias for clean, fast UI. I love terminals, typography, and details.' },
];

const About = () => {
  const [active, setActive] = useState('');
  const current = interests.find((i) => i.name === active);

  return (
    <Grid>
      <TerminalWindow title="~/about/portrait" variant="amber">
        <Ascii>{asciiPortrait}</Ascii>
        <div style={{ marginTop: 12, fontSize: 12, color: '#999' }}>
          <div># system</div>
          <div>os:     {config.systemInfo.os}</div>
          <div>kernel: {config.systemInfo.kernel}</div>
          <div>shell:  {config.systemInfo.shell}</div>
          <div>editor: {config.systemInfo.editor}</div>
          <div>uptime: {config.systemInfo.uptime}</div>
          <div>host:   {config.systemInfo.host}</div>
        </div>
      </TerminalWindow>

      <TerminalWindow title="~/about/bio">
        {bio.map((b, i) => (
          <Line key={i} $i={i} dangerouslySetInnerHTML={{ __html: b.t }} />
        ))}
        <div style={{ marginTop: 16, color: '#00ccff', fontSize: 12 }}># interests</div>
        <InterestGrid>
          {interests.map((i) => (
            <Chip
              key={i.name}
              $active={i.name === active}
              onClick={() => setActive(i.name === active ? '' : i.name)}
            >
              {i.name}
            </Chip>
          ))}
        </InterestGrid>
        {current && <Desc>{current.desc}</Desc>}
      </TerminalWindow>
    </Grid>
  );
};

About.displayName = 'About';
export default About;
