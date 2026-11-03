import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Badge from './Badge';
import { itemVariants, cardHover, cardTap, cardExit } from '../../lib/motion';
import { appgraphUrl } from '../../data/config';
import { pixelBox, pixelPress } from '../../styles/pixel';

// One accent across the site: ink blue.
const accentFor = (theme) => theme.colors.primary;

// Card sets a single CSS var (--accent); every child reads it. Keeps things tidy.
const Card = styled(motion.article)`
  --accent: ${({ theme, $category }) => accentFor(theme, $category)};
  position: relative;
  display: flex;
  flex-direction: column;
  ${pixelBox(4)}
  background: ${({ theme }) => theme.colors.bgSecondary};
  overflow: hidden;
  font-family: ${({ theme }) => theme.fonts.ui};
  ${pixelPress}
`;

// Full-card "stretched link": an invisible anchor covering the whole card.
// Footer links sit above it (higher z-index) so they still work individually.
const CardLink = styled.a`
  position: absolute;
  inset: 0;
  z-index: 1;
`;

const Cover = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 2px solid ${({ theme }) => theme.colors.ink};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform ${({ theme }) => theme.animation.normal}
      ${({ theme }) => theme.animation.easing};
  }
`;

const Placeholder = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textMuted};
  background: ${({ theme }) => theme.colors.surface};
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: color-mix(in srgb, ${({ theme }) => theme.colors.bg} 80%, transparent);
  color: var(--accent);
  font-size: 14px;
  font-weight: 500;
  opacity: 0;
  transition: opacity ${({ theme }) => theme.animation.fast};
  ${Card}:hover & {
    opacity: 1;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: ${({ theme }) => theme.space(4)};
  flex: 1;
`;

const TopRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
`;

const Title = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.pixel};
  font-size: 21px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const Cat = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textMuted};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 0;
  padding: 1px 6px;
  white-space: nowrap;
`;

const Desc = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textMuted};
  flex: 1;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const Footer = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 4px;
  padding-top: 10px;
  border-top: 2px dotted ${({ theme }) => theme.colors.border};
  font-size: 14px;
`;

const ActionLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Meta = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-left: auto;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 13px;
`;

const Soon = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 13px;
`;

export const GitHubIcon = (props) => (
  <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

/**
 * @param {{ project: import('../../data/projects').Project & { stars?: number, language?: string } }} props
 */
// Tiny node-graph glyph for the sys-design link (also used by RepoCard).
export const GraphIcon = (props) => (
  <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true" {...props}>
    <circle cx="8" cy="3.2" r="1.8" />
    <circle cx="3.2" cy="12" r="1.8" />
    <circle cx="12.8" cy="12" r="1.8" />
    <path d="M8 5v3M6.8 9.8 4.2 10.6M9.2 9.8l2.6.8" />
  </svg>
);

const ProjectCard = ({ project }) => {
  const { title, desc, tags = [], demo, github, graph, img, category, placeholder, stars, language } =
    project;
  const primary = demo || github;

  return (
    <Card
      layout
      $category={category}
      $featured={project.featured}
      variants={itemVariants}
      whileHover={cardHover}
      whileTap={cardTap}
      exit={cardExit}
    >
      {primary && (
        <CardLink href={primary} target="_blank" rel="noreferrer" aria-label={`Open ${title}`} />
      )}
      <Cover>
        {img ? (
          <img src={img} alt={title} loading="lazy" />
        ) : (
          <Placeholder>{category}</Placeholder>
        )}
        {(demo || github) && <Overlay>View project</Overlay>}
      </Cover>
      <Body>
        <TopRow>
          <Title>{title}</Title>
          <Cat>{category}</Cat>
        </TopRow>
        <Desc>{desc}</Desc>
        {tags.length > 0 && (
          <Tags>
            {tags.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </Tags>
        )}
        <Footer>
          {github && (
            <ActionLink href={github} target="_blank" rel="noreferrer">
              <GitHubIcon /> Code
            </ActionLink>
          )}
          {demo && (
            <ActionLink href={demo} target="_blank" rel="noreferrer">
              Live site
            </ActionLink>
          )}
          {graph && (
            <ActionLink
              href={`${appgraphUrl}/apps/${graph}`}
              target="_blank"
              rel="noreferrer"
              title="Interactive architecture graphs — file tree, system design, flows"
            >
              <GraphIcon /> Architecture
            </ActionLink>
          )}
          {placeholder && !demo && !github && <Soon>Details coming soon</Soon>}
          {(stars != null || language) && (
            <Meta>
              {language && <span>{language}</span>}
              {stars != null && <span>{stars} stars</span>}
            </Meta>
          )}
        </Footer>
      </Body>
    </Card>
  );
};

ProjectCard.displayName = 'ProjectCard';
export default ProjectCard;
