import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import posts from '../../data/blog.json';

const sorted = [...posts].sort((a, b) => String(b.date).localeCompare(String(a.date)));

const fmt = (iso) =>
  new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

const readingMinutes = (body) => Math.max(1, Math.round(body.split(/\s+/).length / 220));

/* ───────────── Index ───────────── */

const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: ${({ theme }) => theme.space(8)};
`;

const FilterBtn = styled.button`
  padding: 4px 12px;
  font-family: ${({ theme }) => theme.fonts.pixel};
  font-size: 16px;
  border: 2px solid ${({ theme }) => theme.colors.ink};
  background: ${({ theme, $on }) => ($on ? theme.colors.primary : theme.colors.bgSecondary)};
  color: ${({ theme, $on }) => ($on ? theme.colors.bgSecondary : theme.colors.text)};
  box-shadow: ${({ $on }) => ($on ? 'none' : '3px 3px 0')} ${({ theme }) => theme.colors.shadow};
  transform: ${({ $on }) => ($on ? 'translate(3px, 3px)' : 'none')};
  &:hover { background: ${({ theme }) => theme.colors.accent}; color: ${({ theme }) => theme.colors.accentInk}; }
`;

const List = styled.ol`
  list-style: none;
  border-top: 2px solid ${({ theme }) => theme.colors.ink};
`;

const Item = styled.li`
  border-bottom: 2px dotted ${({ theme }) => theme.colors.border};
  a.row {
    display: grid;
    grid-template-columns: 170px minmax(0, 1fr);
    gap: ${({ theme }) => theme.space(6)};
    padding: ${({ theme }) => theme.space(6)} 0;
    text-decoration: none;
    color: inherit;
  }
  a.row:hover h2 { background: ${({ theme }) => theme.colors.accent}; color: ${({ theme }) => theme.colors.accentInk}; }
  @media (max-width: 700px) { a.row { grid-template-columns: 1fr; gap: 6px; } }
  time, .min { font-family: ${({ theme }) => theme.fonts.mono}; font-size: 13px; color: ${({ theme }) => theme.colors.textMuted}; display: block; }
  h2 { font-size: 28px; margin-bottom: 8px; width: fit-content; }
  p { font-size: 18px; color: ${({ theme }) => theme.colors.textMuted}; }
  .tags { margin-top: 10px; display: flex; gap: 8px; flex-wrap: wrap; font-family: ${({ theme }) => theme.fonts.ui}; font-size: 13px; color: ${({ theme }) => theme.colors.textMuted}; }
  .tags span { padding: 1px 8px; border: 2px solid ${({ theme }) => theme.colors.border}; background: ${({ theme }) => theme.colors.bgSecondary}; }
`;

const Blog = () => {
  const [tag, setTag] = useState('All');
  const tags = useMemo(() => ['All', ...new Set(sorted.flatMap((p) => p.tags || []))], []);
  const shown = tag === 'All' ? sorted : sorted.filter((p) => (p.tags || []).includes(tag));

  return (
    <div>
      <Filters role="group" aria-label="Filter posts by topic">
        {tags.map((t) => (
          <FilterBtn key={t} type="button" $on={t === tag} aria-pressed={t === tag} onClick={() => setTag(t)}>
            {t}
          </FilterBtn>
        ))}
      </Filters>
      <List>
        {shown.map((p) => (
          <Item key={p.id}>
            <Link className="row" to={`/blog/${p.id}`}>
              <div>
                <time dateTime={p.date}>{fmt(p.date)}</time>
                <span className="min">{readingMinutes(p.body)} min read</span>
              </div>
              <div>
                <h2>{p.title}</h2>
                <p>{p.summary}</p>
                <div className="tags">
                  {(p.tags || []).map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </Link>
          </Item>
        ))}
      </List>
    </div>
  );
};

/* ───────────── Post view ───────────── */

const Progress = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 8px;
  z-index: 300;
  width: ${({ $p }) => $p}%;
  background: ${({ theme }) => theme.colors.accent};
  border-bottom: 2px solid ${({ theme }) => theme.colors.ink};
  border-right: 2px solid ${({ theme }) => theme.colors.ink};
`;

const Article = styled.article`
  max-width: 68ch;
  margin: 0 auto;
  h1 { font-size: clamp(32px, 5vw, 48px); font-weight: 400; letter-spacing: -0.02em; margin: 12px 0 16px; }
  h2 { font-size: 28px; margin: 44px 0 12px; }
  p { font-size: 20px; line-height: 1.7; margin-bottom: 20px; max-width: none; }
  ul { margin: 0 0 20px 22px; font-size: 20px; line-height: 1.7; }
  li { margin-bottom: 6px; }
  .meta { font-family: ${({ theme }) => theme.fonts.mono}; font-size: 13px; color: ${({ theme }) => theme.colors.textMuted}; }
  .lede { font-size: 22px; color: ${({ theme }) => theme.colors.textMuted}; margin-bottom: 32px; padding-bottom: 24px; border-bottom: 2px dotted ${({ theme }) => theme.colors.ink}; }
  .back { font-family: ${({ theme }) => theme.fonts.ui}; font-size: 14px; }
  .end { margin-top: 48px; padding-top: 24px; border-top: 2px dotted ${({ theme }) => theme.colors.ink}; font-family: ${({ theme }) => theme.fonts.pixel}; font-size: 17px; display: flex; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
`;

const linkify = (text) =>
  text.split(/(https?:\/\/[^\s)]+)/g).map((part, i) =>
    /^https?:\/\//.test(part) ? (
      <a key={i} href={part} target="_blank" rel="noreferrer">
        {part.replace(/^https?:\/\//, '')}
      </a>
    ) : (
      part
    ),
  );

const renderBody = (body) => {
  const out = [];
  let bullets = [];
  const flush = () => {
    if (bullets.length) {
      out.push(
        <ul key={`ul-${out.length}`}>
          {bullets.map((b, i) => (
            <li key={i}>{linkify(b)}</li>
          ))}
        </ul>,
      );
      bullets = [];
    }
  };
  body.split(/\n\n+/).forEach((block, idx) => {
    if (block.startsWith('## ')) {
      flush();
      out.push(<h2 key={idx}>{block.slice(3)}</h2>);
    } else if (block.split('\n').every((l) => l.startsWith('- '))) {
      bullets.push(...block.split('\n').map((l) => l.slice(2)));
      flush();
    } else {
      flush();
      out.push(<p key={idx}>{linkify(block)}</p>);
    }
  });
  flush();
  return out;
};

export const PostView = ({ id }) => {
  const post = sorted.find((p) => p.id === id);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(100, (window.scrollY / h) * 100) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [id]);

  if (!post) {
    return (
      <Article>
        <h1>Post not found</h1>
        <p>
          That post does not exist. <Link to="/blog">Back to all writing</Link>.
        </p>
      </Article>
    );
  }

  const i = sorted.findIndex((p) => p.id === id);
  const next = sorted[i + 1];

  return (
    <>
      <Progress $p={progress} aria-hidden="true" />
      <Article>
        <Link className="back" to="/blog">
          ← All writing
        </Link>
        <div className="meta" style={{ marginTop: 24 }}>
          {fmt(post.date)} · {readingMinutes(post.body)} min read
        </div>
        <h1>{post.title}</h1>
        <p className="lede">{post.summary}</p>
        {renderBody(post.body)}
        <div className="end">
          <Link to="/blog">← All writing</Link>
          {next && <Link to={`/blog/${next.id}`}>Older: {next.title} →</Link>}
        </div>
      </Article>
    </>
  );
};

Blog.displayName = 'Blog';
export default Blog;
