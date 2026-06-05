import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { GitHubIcon, GraphIcon } from './ProjectCard';
import { itemVariants, cardHover, cardTap, cardExit } from '../../lib/motion';
import { formatUpdated } from '../../lib/github';
import { appgraphUrl } from '../../data/config';

// Green + black: green accent; cyan reserved for AI/ML + the live "Open Source" feed.
const accentFor = (theme, category) =>
  category === 'AI/ML' || category === 'Open Source'
    ? theme.colors.secondary
    : theme.colors.primary;

const Card = styled(motion.article)`
  --accent: ${({ theme, $category }) => accentFor(theme, $category)};
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  overflow: hidden;
  font-family: ${({ theme }) => theme.fonts.mono};
  transition: border-color ${({ theme }) => theme.animation.fast},
    box-shadow ${({ theme }) => theme.animation.fast};
  &:hover {
    border-color: var(--accent);
    box-shadow: 0 0 30px color-mix(in srgb, var(--accent) 18%, transparent);
  }
`;

const Cover = styled.div`
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

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: ${({ theme }) => theme.space(4)};
  flex: 1;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 12px;
`;

const Name = styled.h3`
  margin: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
  word-break: break-all;
`;

const Cat = styled.span`
  margin-left: auto;
  font-size: 10px;
  color: var(--accent);
  border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
  border-radius: 3px;
  padding: 1px 6px;
  white-space: nowrap;
`;

const Desc = styled.p`
  margin: 0;
  flex: 1;
  font-size: 12.5px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text};
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  font-size: 11px;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const Lang = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const View = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 4px;
  padding: 6px 10px;
  align-self: flex-start;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 12px;
  transition: all ${({ theme }) => theme.animation.fast};
  &:hover {
    border-color: var(--accent);
    color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 16px color-mix(in srgb, var(--accent) 25%, transparent);
  }
`;

/**
 * @param {{ repo: { name: string, description: string|null, language: string|null, stars: number, updatedAt: string, htmlUrl: string, category?: string, title?: string } }} props
 */
const RepoCard = ({ repo }) => {
  const category = repo.category || 'Open Source';
  return (
    <Card
      layout
      $category={category}
      variants={itemVariants}
      whileHover={cardHover}
      whileTap={cardTap}
      exit={cardExit}
    >
      {repo.img && (
        <Cover>
          <img src={repo.img} alt={repo.title || repo.name} loading="lazy" />
        </Cover>
      )}
      <Body>
        <Head>
          <GitHubIcon />
          <Name>{repo.title || repo.name}</Name>
          <Cat>{category}</Cat>
        </Head>
        <Desc>{repo.description || '// no description provided'}</Desc>
        <Meta>
          {repo.language && <Lang>{repo.language}</Lang>}
          <span>★ {repo.stars}</span>
          {repo.updatedAt && <span>updated {formatUpdated(repo.updatedAt)}</span>}
        </Meta>
        <Actions>
          <View href={repo.htmlUrl} target="_blank" rel="noreferrer">
            <GitHubIcon /> view on github ↗
          </View>
          {repo.graph && (
            <View
              href={`${appgraphUrl}/apps/${repo.graph}`}
              target="_blank"
              rel="noreferrer"
              title="Interactive architecture graphs — file tree, system design, flows"
            >
              <GraphIcon /> sys-design
            </View>
          )}
        </Actions>
      </Body>
    </Card>
  );
};

RepoCard.displayName = 'RepoCard';
export default RepoCard;
