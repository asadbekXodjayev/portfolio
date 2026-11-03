import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { contributions } from '../../data/contributions';

const fmt = (iso) => {
  if (!iso) return '';
  const d = new Date(iso);
  return Number.isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
};

const List = styled.ol`
  list-style: none;
  border-top: none;
`;

const Row = styled.li`
  display: grid;
  grid-template-columns: 200px 1fr auto;
  gap: ${({ theme }) => theme.space(5)};
  padding: ${({ theme }) => theme.space(5)} 0;
  border-bottom: 2px dotted ${({ theme }) => theme.colors.border};
  transition: background ${({ theme }) => theme.animation.fast} steps(1);
  &:hover { background: ${({ theme }) => theme.colors.bgSecondary}; }
  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space(2)};
  }
`;

const Meta = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textMuted};
  strong { display: block; color: ${({ theme }) => theme.colors.text}; font-weight: 500; }
`;

const Heading = styled.h3``;

const Main = styled.div`
  min-width: 0;
  h2, h3 {
    font-size: ${({ $compact }) => ($compact ? '20px' : '23px')};
    margin-bottom: 6px;
  }
  h2 a, h3 a { color: ${({ theme }) => theme.colors.text}; text-decoration: none; }
  h2 a:hover, h3 a:hover { background: ${({ theme }) => theme.colors.accent}; color: ${({ theme }) => theme.colors.accentInk}; }
  p { font-size: 16px; color: ${({ theme }) => theme.colors.textMuted}; }
  .links { margin-top: 10px; font-family: ${({ theme }) => theme.fonts.ui}; font-size: 14px; display: flex; gap: 16px; flex-wrap: wrap; }
`;

const Side = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textMuted};
  white-space: nowrap;
  @media (max-width: 760px) { flex-direction: row; align-items: center; justify-content: flex-start; flex-wrap: wrap; }
`;

const Status = styled.span`
  padding: 2px 10px;
  font-family: ${({ theme }) => theme.fonts.pixel};
  font-size: 15px;
  font-weight: 600;
  background: ${({ theme, $open }) => ($open ? 'transparent' : theme.colors.primary)};
  color: ${({ theme, $open }) => ($open ? theme.colors.text : theme.colors.bgSecondary)};
  border: 2px ${({ $open }) => ($open ? 'dashed' : 'solid')} ${({ theme }) => theme.colors.ink};
  box-shadow: ${({ $open }) => ($open ? 'none' : '2px 2px 0')} ${({ theme }) => theme.colors.shadow};
`;

const Diff = styled.span`
  .add { color: ${({ theme }) => theme.colors.primary}; font-weight: 500; }
  .del { color: ${({ theme }) => theme.colors.textMuted}; font-weight: 500; }
`;

const Contributions = ({ compact = false, limit }) => {
  const items = limit ? contributions.slice(0, limit) : contributions;
  return (
    <List $rule={compact} aria-label="Open-source contributions">
      {items.map((c) => (
        <Row key={c.id}>
          <Meta>
            <strong>
              {c.org}/{c.repo}
            </strong>
            #{c.pr}
            {c.date ? ` · ${fmt(c.date)}` : ''}
          </Meta>
          <Main $compact={compact}>
            <Heading as={compact ? 'h3' : 'h2'}>
              <a href={c.url} target="_blank" rel="noreferrer">
                {c.title}
              </a>
            </Heading>
            {!compact && <p>{c.summary}</p>}
            {!compact && (
              <div className="links">
                <a href={c.url} target="_blank" rel="noreferrer">View pull request</a>
                <a href={c.repoUrl} target="_blank" rel="noreferrer">About {c.repo}</a>
                {c.post && <Link to={`/blog/${c.post}`}>Read the write-up</Link>}
              </div>
            )}
          </Main>
          <Side>
            <Status $open={c.status === 'open'}>{c.status === 'open' ? 'Open' : 'Merged'}</Status>
            {c.diff && (
              <Diff title={`${c.diff.files} files changed`}>
                <span className="add">+{c.diff.added}</span> <span className="del">−{c.diff.removed}</span>
              </Diff>
            )}
          </Side>
        </Row>
      ))}
    </List>
  );
};

Contributions.displayName = 'Contributions';
export default Contributions;
