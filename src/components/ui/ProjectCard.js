import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Badge from './Badge';
import { itemVariants, cardHover, cardTap, cardExit } from '../../lib/motion';
import { langColor } from '../../lib/github';

// Category -> accent color for the gradient placeholder + card glow.
const accentFor = (theme, category) =>
  ({
    Web: theme.colors.primary,
    'AI/ML': theme.colors.secondary,
    Mobile: theme.colors.warning,
    'C++ / C#': theme.colors.danger,
  }[category] || theme.colors.primary);

// Card sets a single CSS var (--accent); every child reads it. Keeps things tidy.
const Card = styled(motion.article)`
  --accent: ${({ theme, $category }) => accentFor(theme, $category)};
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  overflow: hidden;
  font-family: ${({ theme }) => theme.fonts.mono};
  transition: border-color ${({ theme }) => theme.animation.fast},
    box-shadow ${({ theme }) => theme.animation.fast};

  ${({ $featured }) =>
    $featured &&
    `@media (min-width: 760px) { grid-column: span 2; }`}

  &:hover {
    border-color: var(--accent);
    box-shadow: 0 0 30px color-mix(in srgb, var(--accent) 18%, transparent);
  }
`;

const Cover = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform ${({ theme }) => theme.animation.normal}
      ${({ theme }) => theme.animation.easing};
  }
  ${Card}:hover & img {
    transform: scale(1.05);
  }
`;

const Placeholder = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.bg};
  background: linear-gradient(135deg, var(--accent) 0%, ${({ theme }) => theme.colors.bgSecondary} 90%);
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.08) 0 10px, transparent 10px 20px);
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.bg}cc;
  color: var(--accent);
  font-size: 13px;
  letter-spacing: 1px;
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
  font-size: 15px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Cat = styled.span`
  font-size: 10px;
  color: var(--accent);
  border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
  border-radius: 3px;
  padding: 1px 6px;
  white-space: nowrap;
`;

const Desc = styled.p`
  margin: 0;
  font-size: 12.5px;
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
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 4px;
  padding-top: 10px;
  border-top: 1px dashed ${({ theme }) => theme.colors.border};
  font-size: 12px;
`;

const ActionLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: ${({ theme }) => theme.colors.secondary};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Meta = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-left: auto;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 11px;
`;

const Dot = styled.span`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  display: inline-block;
`;

const Soon = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 11px;
`;

export const GitHubIcon = (props) => (
  <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

/**
 * @param {{ project: import('../../data/projects').Project & { stars?: number, language?: string } }} props
 */
const ProjectCard = ({ project }) => {
  const { title, desc, tags = [], demo, github, img, category, placeholder, stars, language } =
    project;

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
      <Cover>
        {img ? (
          <img src={img} alt={title} loading="lazy" />
        ) : (
          <Placeholder>{category}</Placeholder>
        )}
        {(demo || github) && <Overlay>view project →</Overlay>}
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
              <Badge key={t}>#{t}</Badge>
            ))}
          </Tags>
        )}
        <Footer>
          {github && (
            <ActionLink href={github} target="_blank" rel="noreferrer">
              <GitHubIcon /> code
            </ActionLink>
          )}
          {demo && (
            <ActionLink href={demo} target="_blank" rel="noreferrer">
              live ↗
            </ActionLink>
          )}
          {placeholder && !demo && !github && <Soon>// details soon</Soon>}
          {(stars != null || language) && (
            <Meta>
              {language && (
                <>
                  <Dot $color={langColor(language)} />
                  {language}
                </>
              )}
              {stars != null && <span>★ {stars}</span>}
            </Meta>
          )}
        </Footer>
      </Body>
    </Card>
  );
};

ProjectCard.displayName = 'ProjectCard';
export default ProjectCard;
