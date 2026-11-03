import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { config } from '../../data/config';
import { containerVariants, itemVariants, inViewProps } from '../../lib/motion';
import { Section, Head, Heading } from './previewStyles';

const Panel = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space(5)};
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.space(6)};
  border: 2px solid ${({ theme }) => theme.colors.ink};
  box-shadow: 6px 6px 0 ${({ theme }) => theme.colors.shadow};
  background: ${({ theme }) => theme.colors.bgSecondary};
  p { font-size: 19px; max-width: 46ch; }
  a.mail { font-family: ${({ theme }) => theme.fonts.ui}; font-size: 15px; }
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const PreviewContact = () => (
  <Section variants={containerVariants} {...inViewProps}>
    <Head>
      <Heading variants={itemVariants}>Contact</Heading>
    </Head>
    <Panel variants={itemVariants}>
      <p>
        For research, collaboration or roles, write to{' '}
        <a className="mail" href={`mailto:${config.academicEmail}`}>{config.academicEmail}</a>.
      </p>
      <Actions>
        <Button as="a" href={`mailto:${config.academicEmail}`}>Send an email</Button>
        <Button as={Link} to="/contacts" $ghost>Contact form</Button>
      </Actions>
    </Panel>
  </Section>
);

PreviewContact.displayName = 'PreviewContact';
export default PreviewContact;
