import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import TerminalWindow from '../terminal/TerminalWindow';
import { asciiPortrait } from '../../utils/ascii';
import { containerVariants, itemVariants, inViewProps } from '../../lib/motion';
import { Section, Eyebrow, MoreLink } from './previewStyles';

const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space(5)};
  grid-template-columns: 1fr;
  align-items: center;
  @media (min-width: 640px) {
    grid-template-columns: auto 1fr;
  }
`;

const Ascii = styled.pre`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 9px;
  line-height: 1.1;
  margin: 0;
  text-align: center;
`;

const Copy = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space(3)};
`;

const P = styled(motion.p)`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13.5px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
  strong {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const PreviewAbout = () => (
  <Section variants={containerVariants} {...inViewProps}>
    <Eyebrow variants={itemVariants}>
      <span>$</span> cat ~/about/whoami.md
    </Eyebrow>
    <motion.div variants={itemVariants}>
      <TerminalWindow title="~/about">
        <Grid>
          <Ascii aria-hidden="true">{asciiPortrait}</Ascii>
          <Copy>
            <P variants={itemVariants}>
              I'm <strong>Asadbek</strong> — a front-end engineer from Uzbekistan who came up
              through native <strong>C++/C#</strong> before falling for the web.
            </P>
            <P variants={itemVariants}>
              Today I ship production React apps and dig into <strong>AI/ML</strong>, always
              chasing fast, accessible, considered UI.
            </P>
            <MoreLink to="/about">read more →</MoreLink>
          </Copy>
        </Grid>
      </TerminalWindow>
    </motion.div>
  </Section>
);

PreviewAbout.displayName = 'PreviewAbout';
export default PreviewAbout;
