import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { config } from '../../data/config';
import { Sprite } from '../ui/PixelArt';
import { heart } from '../../data/pixelArt';

const Wrap = styled.footer`
  border-top: 2px solid ${({ theme }) => theme.colors.ink};
  background: ${({ theme }) => theme.colors.bgSecondary};
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const Inner = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.space(10)} 0 ${({ theme }) => theme.space(6)};
  display: grid;
  gap: ${({ theme }) => theme.space(8)};
  grid-template-columns: 1.4fr 1fr 1fr;
  @media (max-width: 760px) { grid-template-columns: 1fr; gap: ${({ theme }) => theme.space(6)}; }
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  h2 {
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 4px;
  }
  a { color: ${({ theme }) => theme.colors.textMuted}; width: fit-content; }
  a:hover { color: ${({ theme }) => theme.colors.text}; text-decoration: underline; text-decoration-thickness: 2px; }
  p { font-family: ${({ theme }) => theme.fonts.serif}; font-size: 16px; line-height: 1.55; max-width: 36ch; }
`;

const Bottom = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.space(4)} 0 ${({ theme }) => theme.space(8)};
  border-top: 2px dotted ${({ theme }) => theme.colors.border};
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const fmtTime = () =>
  new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Asia/Tashkent' }).format(new Date());

const ClockWrap = styled.span`
  margin-left: auto;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
`;

const Clock = () => {
  const [t, setT] = useState(fmtTime);
  useEffect(() => {
    const id = setInterval(() => setT(fmtTime()), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <ClockWrap>
      Tashkent <time>{t}</time>
    </ClockWrap>
  );
};

const HeartLink = styled(Link)`
  display: inline-flex;
  text-decoration: none;
  transition: transform 90ms steps(2);
  &:hover { transform: translateY(-3px); }
`;

const Footer = () => (
  <Wrap>
    <Inner>
      <Block>
        <h2>{config.name}</h2>
        <p>Software developer working toward AI systems, with merged contributions to NVIDIA open-source projects.</p>
      </Block>
      <Block>
        <h2>Contact</h2>
        <a href={`mailto:${config.academicEmail}`}>{config.academicEmail}</a>
        <a href={`mailto:${config.email}`}>{config.email}</a>
        <a href={config.socials.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={config.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={config.socials.telegram} target="_blank" rel="noreferrer">Telegram</a>
      </Block>
      <Block>
        <h2>Site</h2>
        <Link to="/works">Projects</Link>
        <Link to="/contributions">Contributions</Link>
        <Link to="/blog">Writing</Link>
        <Link to="/about">About</Link>
      </Block>
    </Inner>
    <Bottom>
      <span>© {new Date().getFullYear()} {config.fullName}</span>
      <span aria-hidden="true">·</span>
      <span>Drawn pixel by pixel</span>
      <HeartLink to="/ascii" aria-label="Pixel heart">
        <Sprite rows={heart} size={3} />
      </HeartLink>
      <Clock />
    </Bottom>
  </Wrap>
);

Footer.displayName = 'Footer';
export default Footer;
