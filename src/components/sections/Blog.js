import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import TerminalWindow from '../terminal/TerminalWindow';
import Button from '../ui/Button';
import { containerVariants, itemVariants, inViewProps, cardExit } from '../../lib/motion';
import seedPosts from '../../data/blog.json';

const LS_KEY = 'blog_local_v1';

/**
 * @typedef {Object} Post
 * @property {string} id
 * @property {string} title
 * @property {string} date   ISO-ish date string
 * @property {string} body
 * @property {string[]} images  data URLs (local) or plain URLs (seed)
 * @property {boolean} [local]  true => stored in this browser, deletable
 */

const readLocal = () => {
  try {
    const raw = localStorage.getItem(LS_KEY);
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space(8)};
`;

const Field = styled.input`
  padding: 8px 10px;
  background: ${({ theme }) => theme.colors.bg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
  outline: none;
  width: 100%;
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Area = styled.textarea`
  padding: 8px 10px;
  min-height: 120px;
  background: ${({ theme }) => theme.colors.bg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
  outline: none;
  resize: vertical;
  width: 100%;
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: ${({ theme }) => theme.space(3)};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.secondary};
`;

const FileRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: ${({ theme }) => theme.space(3)};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const HiddenFile = styled.input`
  display: none;
`;

const Previews = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Thumb = styled.div`
  position: relative;
  width: 64px;
  height: 64px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button {
    position: absolute;
    top: 2px;
    right: 2px;
    width: 16px;
    height: 16px;
    line-height: 1;
    padding: 0;
    border: none;
    border-radius: 3px;
    background: ${({ theme }) => theme.colors.bg}cc;
    color: ${({ theme }) => theme.colors.danger};
    font-size: 12px;
    cursor: pointer;
  }
`;

const Note = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 11px;
  color: ${({ theme, $err }) => ($err ? theme.colors.secondary : theme.colors.textMuted)};
  margin-top: 6px;
`;

const PostMeta = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 8px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const PostBody = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13.5px;
  line-height: 1.65;
  white-space: pre-wrap;
  color: ${({ theme }) => theme.colors.text};
`;

const PostImages = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 10px;
  margin-top: 12px;
  img {
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 4px;
  }
`;

const Rm = styled.button`
  margin-left: auto;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: transparent;
  color: ${({ theme }) => theme.colors.danger};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    border-color: ${({ theme }) => theme.colors.danger};
  }
`;

const fileToDataUrl = (file) =>
  new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(r.result);
    r.onerror = reject;
    r.readAsDataURL(file);
  });

const Blog = () => {
  const [local, setLocal] = useState(readLocal);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [images, setImages] = useState([]);
  const [note, setNote] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(local));
    } catch {
      setNote('⚠ storage full — remove some image-heavy posts.');
    }
  }, [local]);

  const posts = useMemo(() => {
    const seeds = seedPosts.map((p) => ({ ...p, local: false }));
    return [...local, ...seeds].sort((a, b) => String(b.date).localeCompare(String(a.date)));
  }, [local]);

  const onPickFiles = async (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    const urls = await Promise.all(files.map(fileToDataUrl));
    setImages((prev) => [...prev, ...urls]);
    e.target.value = '';
  };

  const removeImage = (i) => setImages((prev) => prev.filter((_, idx) => idx !== i));

  const publish = (e) => {
    e.preventDefault();
    if (!title.trim() && !body.trim()) {
      setNote('⚠ add a title or some text first.');
      return;
    }
    const post = {
      id: `local-${Date.now()}`,
      title: title.trim() || 'untitled',
      date: new Date().toISOString().slice(0, 10),
      body: body.trim(),
      images,
      local: true,
    };
    setLocal((prev) => [post, ...prev]);
    setTitle('');
    setBody('');
    setImages([]);
    setNote('✔ published locally (saved in this browser).');
  };

  const removePost = (id) => setLocal((prev) => prev.filter((p) => p.id !== id));

  return (
    <Wrap>
      <TerminalWindow title="~/blog — ./new-post" variant="cyan">
        <form onSubmit={publish}>
          <Label>
            $ title:
            <Field value={title} onChange={(e) => setTitle(e.target.value)} placeholder="post title" />
          </Label>
          <Label>
            $ body:
            <Area value={body} onChange={(e) => setBody(e.target.value)} placeholder="write your post... (newlines preserved)" />
          </Label>
          <FileRow>
            <Button as="label" htmlFor="blog-images" type="button">
              + add images
            </Button>
            <HiddenFile id="blog-images" type="file" accept="image/*" multiple onChange={onPickFiles} />
            {images.length > 0 && <span>{images.length} attached</span>}
          </FileRow>
          {images.length > 0 && (
            <Previews>
              {images.map((src, i) => (
                <Thumb key={i}>
                  <img src={src} alt={`attachment ${i + 1}`} />
                  <button type="button" onClick={() => removeImage(i)} aria-label="remove image">
                    ×
                  </button>
                </Thumb>
              ))}
            </Previews>
          )}
          <div style={{ marginTop: 12 }}>
            <Button type="submit">[ publish &gt; ]</Button>
          </div>
          {note && <Note $err={note.startsWith('⚠')}>{note}</Note>}
          <Note>
            // local only — nothing is uploaded. Permanent posts go in src/data/blog.json
          </Note>
        </form>
      </TerminalWindow>

      <motion.div variants={containerVariants} {...inViewProps}>
        <AnimatePresence mode="popLayout">
          {posts.map((p) => (
            <motion.div key={p.id} variants={itemVariants} exit={cardExit} layout style={{ marginBottom: 24 }}>
              <TerminalWindow title={`~/blog/${p.id}`}>
                <PostMeta>
                  <strong style={{ color: '#00ff88' }}>{p.title}</strong>
                  <span>{p.date}</span>
                  {p.local && <span>· local</span>}
                  {p.local && <Rm onClick={() => removePost(p.id)}>rm</Rm>}
                </PostMeta>
                {p.body && <PostBody>{p.body}</PostBody>}
                {p.images && p.images.length > 0 && (
                  <PostImages>
                    {p.images.map((src, i) => (
                      <img key={i} src={src} alt={`${p.title} ${i + 1}`} loading="lazy" />
                    ))}
                  </PostImages>
                )}
              </TerminalWindow>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Wrap>
  );
};

Blog.displayName = 'Blog';
export default Blog;
