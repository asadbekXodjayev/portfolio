import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { config } from '../../data/config';
import { containerVariants, itemVariants, inViewProps } from '../../lib/motion';
import { Section, Eyebrow } from './previewStyles';

const Panel = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space(4)};
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.space(6)};
  border: 1px dashed ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.bgSecondary};
`;

const Line = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  strong {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const PreviewContact = () => (
  <Section variants={containerVariants} {...inViewProps}>
    <Eyebrow variants={itemVariants}>
      <span>$</span> ./contact --start
    </Eyebrow>
    <Panel variants={itemVariants}>
      <Line>
        Got a project, a role, or just want to talk shop? <strong>Let's build something.</strong>
      </Line>
      <Actions>
        <Button as="a" href={`mailto:${config.email}`}>
          ./email-me
        </Button>
        <Button as={Link} to="/contacts">
          open form →
        </Button>
      </Actions>
    </Panel>
  </Section>
);

PreviewContact.displayName = 'PreviewContact';
export default PreviewContact;
