import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import GlitchText from '../ui/GlitchText';
import MatrixRain from '../ui/MatrixRain';
import Button from '../ui/Button';
import { config } from '../../data/config';
import { asciiLogo } from '../../utils/ascii';
import { containerVariants, itemVariants } from '../../lib/motion';

const Wrap = styled.section`
  position: relative;
  padding: ${({ theme }) => theme.space(16)} 0;
  text-align: center;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.bgSecondary};
`;

const Inner = styled(motion.div)`
  position: relative;
  z-index: 1;
`;

const Prompt = styled(motion.div)`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 13px;
  margin-bottom: 12px;
`;

const Name = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: clamp(40px, 8vw, 84px);
  letter-spacing: 0.02em;
  margin: 0 0 ${({ theme }) => theme.space(4)};
`;

const Role = styled(motion.div)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: clamp(14px, 2.5vw, 20px);
  min-height: 1.6em;
`;

const Tagline = styled(motion.p)`
  max-width: 560px;
  margin: ${({ theme }) => theme.space(4)} auto 0;
  padding: 0 ${({ theme }) => theme.space(4)};
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
  line-height: 1.6;
`;

const Actions = styled(motion.div)`
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: ${({ theme }) => theme.space(6)};
`;

const Ascii = styled(motion.pre)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 11px;
  line-height: 1.2;
  margin-top: ${({ theme }) => theme.space(6)};
  opacity: 0.7;
`;

const Hero = () => (
  <Wrap>
    <MatrixRain />
    <Inner variants={containerVariants} initial="hidden" animate="visible">
      <Prompt variants={itemVariants}>~$ whoami</Prompt>
      <Name variants={itemVariants}>
        <GlitchText>{config.name.toUpperCase()}</GlitchText>
      </Name>
      <Role variants={itemVariants}>
        <Typewriter
          options={{ strings: config.roles, autoStart: true, loop: true, delay: 55, deleteSpeed: 30 }}
        />
      </Role>
      <Tagline variants={itemVariants}>
        Front-end engineer who started in native C++/C#, ships production React, and is going
        deep on AI/ML. I care about speed, accessibility, and motion that means something.
      </Tagline>
      <Actions variants={itemVariants}>
        <Button as={Link} to="/works">
          ./see-my-work →
        </Button>
        <Button as={Link} to="/about">
          ./about-me
        </Button>
      </Actions>
      <Ascii variants={itemVariants}>{asciiLogo}</Ascii>
    </Inner>
  </Wrap>
);

Hero.displayName = 'Hero';
export default Hero;
