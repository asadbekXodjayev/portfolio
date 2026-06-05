import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';
import RepoCard from '../ui/RepoCard';
import SkeletonCard from '../ui/SkeletonCard';
import { projects, categories } from '../../data/projects';
import { appgraphUrl } from '../../data/config';
import { repoCuration, SHOW_UNLISTED } from '../../data/repos';
import { useGithubRepos } from '../../hooks/useGithubRepos';
import { containerVariants } from '../../lib/motion';

const Header = styled.div`
  margin-bottom: ${({ theme }) => theme.space(5)};
`;

const Prompt = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: ${({ theme }) => theme.space(4)};
  strong {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Pills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Pill = styled.button`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12.5px;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid ${({ theme, $active }) => ($active ? theme.colors.primary : theme.colors.border)};
  background: ${({ theme, $active }) => ($active ? theme.colors.primary : 'transparent')};
  color: ${({ theme, $active }) => ($active ? theme.colors.bg : theme.colors.text)};
  transition: all ${({ theme }) => theme.animation.fast};
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme, $active }) => ($active ? theme.colors.bg : theme.colors.primary)};
  }
`;

const Count = styled.span`
  margin-left: 4px;
  opacity: 0.6;
`;

/* Banner linking to AppGraph — the sys-design hub with interactive
   architecture graphs (file tree / system design / flows) for these works. */
const SysDesignBanner = styled.a`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-top: ${({ theme }) => theme.space(4)};
  padding: ${({ theme }) => theme.space(3)} ${({ theme }) => theme.space(4)};
  border: 1px dashed ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12.5px;
  color: ${({ theme }) => theme.colors.textMuted};
  transition: all ${({ theme }) => theme.animation.fast};

  strong {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }

  .cta {
    margin-left: auto;
    color: ${({ theme }) => theme.colors.secondary};
    white-space: nowrap;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    border-style: solid;
    color: ${({ theme }) => theme.colors.text};
    box-shadow: 0 0 24px
      color-mix(in srgb, ${({ theme }) => theme.colors.primary} 15%, transparent);
    .cta {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
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
  border: 1px dashed ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12.5px;
  color: ${({ theme, $error }) => ($error ? theme.colors.secondary : theme.colors.textMuted)};
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

  // Build repo cards from the live feed, honoring the curation config.
  const repoItems = useMemo(() => {
    return repos
      .filter((r) => !curatedRepoNames.has(r.name))
      .map((r) => {
        const c = repoCuration[r.name];
        if (c?.hide) return null;
        if (!c && !SHOW_UNLISTED) return null;
        return {
          ...r,
          isRepo: true,
          category: c?.category || 'Open Source',
          title: c?.title || r.name,
          description: c?.desc || r.description,
        };
      })
      .filter(Boolean);
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
        <Prompt>
          <strong>asad@dev</strong>:~/works$ ls --projects --filter={filter.toLowerCase()}
        </Prompt>
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
              <Count>[{countFor(c)}]</Count>
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
            $ open <strong>sys-design</strong> — interactive architecture graphs (file tree ·
            system design · flows) for the projects below
          </span>
          <span className="cta">go to AppGraph →</span>
        </SysDesignBanner>
      </Header>

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
              ✗ couldn't reach the GitHub API (rate limit or offline). Curated projects are
              still listed above.
            </Note>
          )}

          {!loading && visible.length === 0 && (
            <Note key="empty">// no projects in this category yet.</Note>
          )}
        </AnimatePresence>
      </Grid>
    </section>
  );
};

Projects.displayName = 'Projects';
export default Projects;
