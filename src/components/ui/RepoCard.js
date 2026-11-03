import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { GitHubIcon, GraphIcon } from './ProjectCard';
import { itemVariants, cardHover, cardTap, cardExit } from '../../lib/motion';
import { formatUpdated } from '../../lib/github';
import { appgraphUrl } from '../../data/config';
import { pixelBox, pixelPress } from '../../styles/pixel';

const accentFor = (theme) => theme.colors.primary;

const Card = styled(motion.article)`
  --accent: ${({ theme, $category }) => accentFor(theme, $category)};
  display: flex;
  flex-direction: column;
  ${pixelBox(4)}
  background: ${({ theme }) => theme.colors.bgSecondary};
  overflow: hidden;
  font-family: ${({ theme }) => theme.fonts.ui};
  ${pixelPress}
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
  font-family: ${({ theme }) => theme.fonts.pixel};
  font-size: 21px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const Cat = styled.span`
  margin-left: auto;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textMuted};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0;
  padding: 1px 6px;
  white-space: nowrap;
`;

const Desc = styled.p`
  margin: 0;
  flex: 1;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text};
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  font-size: 13px;
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
  border: 2px solid ${({ theme }) => theme.colors.ink};
  border-radius: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  text-decoration: none;
  transition: border-color ${({ theme }) => theme.animation.fast};
  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accentInk};
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
        <Desc>{repo.description || 'No description provided.'}</Desc>
        <Meta>
          {repo.language && <Lang>{repo.language}</Lang>}
          <span>{repo.stars} stars</span>
          {repo.updatedAt && <span>Updated {formatUpdated(repo.updatedAt)}</span>}
        </Meta>
        <Actions>
          <View href={repo.htmlUrl} target="_blank" rel="noreferrer">
            <GitHubIcon /> View on GitHub
          </View>
          {repo.graph && (
            <View
              href={`${appgraphUrl}/apps/${repo.graph}`}
              target="_blank"
              rel="noreferrer"
              title="Interactive architecture graphs — file tree, system design, flows"
            >
              <GraphIcon /> Architecture
            </View>
          )}
        </Actions>
      </Body>
    </Card>
  );
};

RepoCard.displayName = 'RepoCard';
export default RepoCard;
