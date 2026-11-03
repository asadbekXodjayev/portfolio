import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';
import { pixelBox, pixelPress } from '../../styles/pixel';
import RepoCard from '../ui/RepoCard';
import SkeletonCard from '../ui/SkeletonCard';
import { projects, categories } from '../../data/projects';
import { appgraphUrl } from '../../data/config';
import { repoCuration, SHOW_UNLISTED } from '../../data/repos';
import { useGithubRepos } from '../../hooks/useGithubRepos';
import { GITHUB_USERNAME } from '../../lib/github';
import { containerVariants } from '../../lib/motion';

const VisuallyHidden = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
`;

const Header = styled.div`
  margin-bottom: ${({ theme }) => theme.space(5)};
`;

const Pills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Pill = styled.button`
  font-family: ${({ theme }) => theme.fonts.pixel};
  font-size: 16px;
  font-weight: 500;
  padding: 5px 12px;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.colors.ink};
  background: ${({ theme, $active }) => ($active ? theme.colors.primary : theme.colors.bgSecondary)};
  color: ${({ theme, $active }) => ($active ? theme.colors.bgSecondary : theme.colors.text)};
  box-shadow: ${({ $active }) => ($active ? 'none' : '3px 3px 0')} ${({ theme }) => theme.colors.shadow};
  transform: ${({ $active }) => ($active ? 'translate(3px, 3px)' : 'none')};
  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accentInk};
  }
`;

const Count = styled.span`
  margin-left: 4px;
  opacity: 0.6;
`;

/* Banner linking to AppGraph — the sys-design hub with interactive
   architecture graphs (file tree / system design / flows) for these works. */
const SysDesignBanner = styled.a`
  ${pixelBox(4)}
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-top: ${({ theme }) => theme.space(5)};
  padding: ${({ theme }) => theme.space(3)} ${({ theme }) => theme.space(4)};
  background: ${({ theme }) => theme.colors.bgSecondary};
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 14px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textMuted};
  ${pixelPress}

  strong { color: ${({ theme }) => theme.colors.text}; font-weight: 600; }
  .cta { margin-left: auto; font-family: ${({ theme }) => theme.fonts.pixel}; font-size: 17px; color: ${({ theme }) => theme.colors.primary}; white-space: nowrap; }
  &:hover .cta { text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 4px; }
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.space(5)};
  align-items: stretch;
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Note = styled.div`
  grid-column: 1 / -1;
  padding: ${({ theme }) => theme.space(4)};
  border: 2px dotted ${({ theme }) => theme.colors.ink};
  background: ${({ theme }) => theme.colors.bgSecondary};
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 14px;
  color: ${({ theme, $error }) => ($error ? theme.colors.danger : theme.colors.textMuted)};
`;

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const { repos, loading, error } = useGithubRepos();

  // repo names already represented by a curated project -> don't duplicate, enrich instead.
  const curatedRepoNames = useMemo(
    () => new Set(projects.filter((p) => p.repo).map((p) => p.repo)),
    [],
  );

  // live { repoName -> {stars, language} } for enriching matching curated cards.
  const enrichment = useMemo(() => {
    const map = {};
    repos.forEach((r) => {
      map[r.name] = { stars: r.stars, language: r.language };
    });
    return map;
  }, [repos]);

  const projectItems = useMemo(
    () =>
      projects.map((p) => {
        const live = p.repo ? enrichment[p.repo] : null;
        return live ? { ...p, ...live } : p;
      }),
    [enrichment],
  );

  // Curated open-source / desktop repos. These render straight from the static
  // curation map so the C++ / C#, Python and Open Source pills are never empty
  // when the GitHub API is rate-limited or offline; live stars / language /
  // updated-date enrich the matching cards whenever the feed is available.
  const repoItems = useMemo(() => {
    const live = {};
    repos.forEach((r) => {
      live[r.name] = r;
    });

    const curated = Object.entries(repoCuration)
      .filter(([, c]) => !c.hide)
      .map(([name, c]) => {
        const l = live[name];
        return {
          id: l?.id ?? name,
          name,
          isRepo: true,
          category: c.category || 'Open Source',
          title: c.title || name,
          description: c.desc || l?.description || null,
          language: l?.language || null,
          stars: l?.stars ?? 0,
          updatedAt: l?.updatedAt || null,
          htmlUrl: l?.htmlUrl || `https://github.com/${GITHUB_USERNAME}/${name}`,
          graph: c.graph,
          img: c.img,
        };
      });

    // Extra public repos not in the curation map — only when SHOW_UNLISTED.
    const extra = SHOW_UNLISTED
      ? repos
          .filter((r) => !curatedRepoNames.has(r.name) && !repoCuration[r.name])
          .map((r) => ({
            ...r,
            isRepo: true,
            category: 'Open Source',
            title: r.name,
            description: r.description,
          }))
      : [];

    return [...curated, ...extra];
  }, [repos, curatedRepoNames]);

  const visible = useMemo(() => {
    const all = [...projectItems, ...repoItems];
    if (filter === 'All') return all;
    if (filter === 'Open Source') return repoItems;
    return all.filter((it) => it.category === filter);
  }, [projectItems, repoItems, filter]);

  // counts for the pills
  const countFor = (cat) => {
    const all = [...projectItems, ...repoItems];
    if (cat === 'All') return all.length;
    if (cat === 'Open Source') return repoItems.length;
    return all.filter((it) => it.category === cat).length;
  };

  const showSkeletons = loading && (filter === 'All' || filter === 'Open Source');
  const showError = error && (filter === 'All' || filter === 'Open Source');

  return (
    <section>
      <Header>
        <Pills id="works-filters" role="tablist" aria-label="project categories">
          {categories.map((c) => (
            <Pill
              key={c}
              role="tab"
              aria-selected={filter === c}
              $active={filter === c}
              onClick={() => setFilter(c)}
            >
              {c}
              <Count>{countFor(c)}</Count>
            </Pill>
          ))}
        </Pills>

        <SysDesignBanner
          href={appgraphUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Open AppGraph — interactive architecture graphs for these projects"
        >
          <span>
            <strong>Architecture graphs.</strong> Interactive file trees, system designs and flow
            diagrams for these projects.
          </span>
          <span className="cta">Open AppGraph</span>
        </SysDesignBanner>
      </Header>

      <VisuallyHidden as="h2">Project list</VisuallyHidden>
      <Grid
        role="tabpanel"
        aria-labelledby="works-filters"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        layout
      >
        <AnimatePresence mode="popLayout">
          {visible.map((it) =>
            it.isRepo ? (
              <RepoCard key={`repo-${it.id}`} repo={it} />
            ) : (
              <ProjectCard key={it.id} project={it} />
            ),
          )}

          {showSkeletons &&
            Array.from({ length: 4 }).map((_, i) => (
              <motion.div key={`sk-${i}`} layout>
                <SkeletonCard />
              </motion.div>
            ))}

          {showError && (
            <Note key="err" $error>
              The GitHub feed could not be reached (rate limit or offline). Curated projects are
              still listed.
            </Note>
          )}

          {!loading && visible.length === 0 && (
            <Note key="empty">No projects in this category yet.</Note>
          )}
        </AnimatePresence>
      </Grid>
    </section>
  );
};

Projects.displayName = 'Projects';
export default Projects;
