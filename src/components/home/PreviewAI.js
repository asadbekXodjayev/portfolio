import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import TerminalWindow from '../terminal/TerminalWindow';
import { fastContainerVariants, fadeInVariants, itemVariants, inViewProps } from '../../lib/motion';
import { Section, Eyebrow, MoreLink } from './previewStyles';

const P = styled(motion.p)`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13.5px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
  & + & {
    margin-top: ${({ theme }) => theme.space(3)};
  }
  strong {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const ChipRow = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: ${({ theme }) => theme.space(4)};
`;

const Chip = styled(motion.span)`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid color-mix(in srgb, ${({ theme }) => theme.colors.secondary} 45%, transparent);
  color: ${({ theme }) => theme.colors.secondary};
`;

const PreviewAI = () => (
  <Section variants={fastContainerVariants} {...inViewProps}>
    <Eyebrow variants={fadeInVariants} $accent="#00ccff">
      <span>$</span> ai --status
    </Eyebrow>
    <motion.div variants={itemVariants}>
      <TerminalWindow title="~/ai-ecosystem" variant="cyan" glow>
        <P variants={itemVariants}>
          AI isn't a bolt-on for me — it's part of the build loop. I design and run{' '}
          <strong>AI agents</strong> that plan, scaffold, and review code alongside me, and
          keep a small ecosystem of models and tools orchestrated for whatever the task needs.
        </P>
        <P variants={itemVariants}>
          That same agentic approach extends to <strong>quality</strong>: automated pipelines
          that generate, run, and self-heal end-to-end tests, catch regressions before release,
          and free up my time for the parts of a product that still need a human eye.
        </P>
        <ChipRow variants={fastContainerVariants}>
          {['Agentic Coding', 'Model Orchestration', 'Automated QA', 'LLM Integrations', 'CI/CD Automation'].map(
            (c) => (
              <Chip key={c} variants={itemVariants}>
                {c}
              </Chip>
            )
          )}
        </ChipRow>
      </TerminalWindow>
    </motion.div>
    <MoreLink to="/skills">see the full AI &amp; automation stack →</MoreLink>
  </Section>
);

PreviewAI.displayName = 'PreviewAI';
export default PreviewAI;
