import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import PixelScene from '../ui/PixelScene';
import Scramble from '../ui/Scramble';
import Contributions from './Contributions';
import { config } from '../../data/config';
import { contributionStats } from '../../data/contributions';
import { EASE } from '../../lib/motion';

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space(12)};
`;

const Top = styled(motion.div)`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  gap: ${({ theme }) => theme.space(10)};
  align-items: center;
  @media (max-width: 900px) { grid-template-columns: 1fr; gap: ${({ theme }) => theme.space(8)}; }
`;

const Name = styled.h1`
  font-size: clamp(40px, 6.2vw, 74px);
  line-height: 1.02;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  /* the surname is inverted (paper on ink) — the one high-contrast moment */
  span {
    background: ${({ theme }) => theme.colors.ink};
    color: ${({ theme }) => theme.colors.bg};
    padding: 0 10px;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
  }
`;

const Role = styled.p`
  margin-top: ${({ theme }) => theme.space(4)};
  font-family: ${({ theme }) => theme.fonts.pixel};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Statement = styled.p`
  margin-top: ${({ theme }) => theme.space(5)};
  font-size: clamp(19px, 2.1vw, 22px);
  line-height: 1.55;
  max-width: 36ch;
  strong { font-weight: 600; }
`;

const Actions = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  align-items: center;
  margin-top: ${({ theme }) => theme.space(6)};
`;

const Mail = styled.a`
  display: inline-block;
  margin-top: ${({ theme }) => theme.space(5)};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 14px;
`;

const Ledger = styled(motion.div)``;

const LedgerHead = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  padding-bottom: ${({ theme }) => theme.space(3)};
  border-bottom: 2px solid ${({ theme }) => theme.colors.ink};
  h2 {
    font-size: 24px;
    display: flex;
    align-items: center;
    gap: 12px;
    &::before {
      content: '';
      width: 14px;
      height: 14px;
      background: ${({ theme }) => theme.colors.accent};
      border: 2px solid ${({ theme }) => theme.colors.ink};
      flex: none;
    }
  }
  span { font-family: ${({ theme }) => theme.fonts.pixel}; font-size: 16px; color: ${({ theme }) => theme.colors.textMuted}; }
`;

const [first, ...rest] = config.name.split(' ');

const Hero = () => (
  <Wrap>
    <Top initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, ease: EASE }}>
      <div>
        <Name>
          {first} <span>{rest.join(' ')}</span>
        </Name>
        <Role>
          <Scramble text={`${config.role} · Uzbekistan`} delay={250} duration={900} />
        </Role>
        <Statement>
          I fix problems in production code and study how AI systems are <strong>trained, served and secured</strong>.
        </Statement>
        <Actions>
          <Button as={Link} to="/contributions">View contributions</Button>
          <Button as={Link} to="/blog" $ghost>Read my goals</Button>
        </Actions>
        <Mail href={`mailto:${config.academicEmail}`}>{config.academicEmail}</Mail>
      </div>
      <PixelScene />
    </Top>

    <Ledger initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.2, ease: EASE }}>
      <LedgerHead>
        <h2>Contributions to NVIDIA open source</h2>
        <span>
          {contributionStats.merged} merged · {contributionStats.repos} repos
        </span>
      </LedgerHead>
      <Contributions compact />
    </Ledger>
  </Wrap>
);

Hero.displayName = 'Hero';
export default Hero;
