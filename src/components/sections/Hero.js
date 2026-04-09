import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import GlitchText from '../ui/GlitchText';
import MatrixRain from '../ui/MatrixRain';
import { config } from '../../data/config';
import { asciiLogo } from '../../utils/ascii';

const Wrap = styled.section`
  position: relative;
  padding: ${({ theme }) => theme.space(16)} 0;
  text-align: center;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.bgSecondary};
`;

const Inner = styled.div`
  position: relative;
  z-index: 1;
`;

const Prompt = styled.div`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 13px;
  margin-bottom: 12px;
`;

const Name = styled.h1`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: clamp(40px, 8vw, 84px);
  letter-spacing: 0.02em;
  margin: 0 0 ${({ theme }) => theme.space(4)};
`;

const Role = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: clamp(14px, 2.5vw, 20px);
  min-height: 1.6em;
`;

const Ascii = styled.pre`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 11px;
  line-height: 1.2;
  margin-top: ${({ theme }) => theme.space(6)};
  opacity: 0.7;
`;

const Hero = () => (
  <Wrap>
    <MatrixRain />
    <Inner>
      <Prompt>~$ whoami</Prompt>
      <Name>
        <GlitchText>{config.name.toUpperCase()}</GlitchText>
      </Name>
      <Role>
        <Typewriter
          options={{ strings: config.roles, autoStart: true, loop: true, delay: 55, deleteSpeed: 30 }}
        />
      </Role>
      <Ascii>{asciiLogo}</Ascii>
    </Inner>
  </Wrap>
);

Hero.displayName = 'Hero';
export default Hero;
