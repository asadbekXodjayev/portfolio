import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import TerminalWindow from '../terminal/TerminalWindow';
import Badge from '../ui/Badge';
import { projects } from '../../data/projects';

const FilterBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: ${({ theme }) => theme.space(4)};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.secondary};
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 140px;
  border: 1px dashed ${({ theme }) => theme.colors.border};
  padding: 4px 8px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: inherit;
  font-size: inherit;
  outline: none;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.a`
  display: grid;
  grid-template-columns: 60px 1fr auto;
  gap: 12px;
  padding: 10px 8px;
  border-bottom: 1px dashed ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
  align-items: center;
  transition: background ${({ theme }) => theme.animation.fast};
  &:hover {
    background: ${({ theme }) => theme.colors.primary}11;
    color: ${({ theme }) => theme.colors.primary};
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Type = styled.span`
  color: ${({ theme }) => theme.colors.warning};
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
  strong { color: ${({ theme }) => theme.colors.primary}; }
  span { color: ${({ theme }) => theme.colors.textMuted}; font-size: 12px; }
`;

const Tags = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`;

const Thumb = styled.img`
  width: 100%;
  max-width: 320px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin-top: 12px;
  border-radius: 4px;
  display: block;
`;

const Projects = () => {
  const [filter, setFilter] = useState('');
  const [openKey, setOpenKey] = useState(null);

  const filtered = useMemo(() => {
    const q = filter.toLowerCase().replace(/^--tag=/, '').trim();
    if (!q) return projects;
    return projects.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.tags.some((t) => t.includes(q)) ||
        p.desc.toLowerCase().includes(q),
    );
  }, [filter]);

  return (
    <TerminalWindow title="~/works/projects — ls -la">
      <FilterBar>
        <span>$ filter</span>
        <Input
          placeholder="--tag=react"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          aria-label="filter projects"
        />
      </FilterBar>
      <List>
        {filtered.map((p) => {
          const open = openKey === p.key;
          return (
            <Row
              key={p.key}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => {
                if (!open) {
                  e.preventDefault();
                  setOpenKey(p.key);
                }
              }}
            >
              <Type>[{p.type}]</Type>
              <Name>
                <strong>{p.title}</strong>
                <span>{p.desc}</span>
                {open && <Thumb src={p.img} alt={p.title} loading="lazy" />}
              </Name>
              <Tags>
                {p.tags.map((t) => (
                  <Badge key={t}>#{t}</Badge>
                ))}
              </Tags>
            </Row>
          );
        })}
        {filtered.length === 0 && <Row as="div">no matches.</Row>}
      </List>
    </TerminalWindow>
  );
};

Projects.displayName = 'Projects';
export default Projects;
