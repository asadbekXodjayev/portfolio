import React from 'react';
import styled from 'styled-components';
import { config } from '../../data/config';

const Wrap = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.space(8)} ${({ theme }) => theme.space(4)};
  margin-top: ${({ theme }) => theme.space(12)};
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  gap: ${({ theme }) => theme.space(6)};
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const Block = styled.div`
  h4 { color: ${({ theme }) => theme.colors.primary}; margin-bottom: 8px; font-family: inherit; font-size: 12px; font-weight: 700; }
  a { display: block; color: ${({ theme }) => theme.colors.textMuted}; }
  a:hover { color: ${({ theme }) => theme.colors.secondary}; }
`;

const Bottom = styled.div`
  max-width: 1100px;
  margin: ${({ theme }) => theme.space(6)} auto 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: ${({ theme }) => theme.space(4)};
  border-top: 1px dashed ${({ theme }) => theme.colors.border};
`;

const Version = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;

const Footer = () => (
  <Wrap>
    <Inner>
      <Block>
        <h4># contact</h4>
        <a href={`mailto:${config.email}`}>{config.email}</a>
      </Block>
      <Block>
        <h4># social</h4>
        <a href={config.socials.telegram} target="_blank" rel="noreferrer">telegram</a>
        <a href={config.socials.instagram} target="_blank" rel="noreferrer">instagram</a>
        <a href={config.socials.linkedin} target="_blank" rel="noreferrer">linkedin</a>
      </Block>
      <Block>
        <h4># nav</h4>
        <a href="/">home</a>
        <a href="/works">works</a>
        <a href="/about">about</a>
        <a href="/contacts">contact</a>
      </Block>
    </Inner>
    <Bottom>
      <span>© {new Date().getFullYear()} {config.name}. built with ♥ in the terminal.</span>
      <span>build <Version>{config.version}</Version></span>
    </Bottom>
  </Wrap>
);

Footer.displayName = 'Footer';
export default Footer;
