import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Panel from '../ui/Panel';
import Button from '../ui/Button';
import { GitHubIcon } from '../ui/ProjectCard';
import { config } from '../../data/config';
import { containerVariants, itemVariants } from '../../lib/motion';

const Layout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: ${({ theme }) => theme.space(10)};
  align-items: start;
  @media (max-width: 860px) { grid-template-columns: 1fr; }
`;

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space(4)};
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 14px;
`;

const Row = styled(motion.label)`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

const inputCss = `
  padding: 11px 12px;
  border-radius: 0;
  font-family: inherit;
  font-size: 15px;
  font-weight: 400;
  width: 100%;
`;

const Field = styled.input`
  ${inputCss}
  background: ${({ theme }) => theme.colors.bg};
  &:focus { outline: 3px solid ${({ theme }) => theme.colors.accent}; outline-offset: 0; }
`;

const Area = styled.textarea`
  ${inputCss}
  min-height: 140px;
  resize: vertical;
  background: ${({ theme }) => theme.colors.bg};
  &:focus { outline: 3px solid ${({ theme }) => theme.colors.accent}; outline-offset: 0; }
`;

const Status = styled.div`
  font-size: 14px;
  color: ${({ theme, $ok }) => ($ok ? theme.colors.secondary : theme.colors.danger)};
`;

const Aside = styled.aside`
  display: grid;
  gap: ${({ theme }) => theme.space(6)};
  h2 { font-size: 22px; margin-bottom: 8px; }
  p { font-size: 17px; color: ${({ theme }) => theme.colors.textMuted}; }
`;

const LinkList = styled.ul`
  list-style: none;
  display: grid;
  gap: 8px;
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 15px;
  a { display: inline-flex; align-items: center; gap: 8px; }
`;

const BOT = '5564814493:AAE-fW4LsvsR5azRSdOu24GRpEiuFxt3Em8';
const CHAT = '-1001756381397';

const socialLinks = [
  { key: 'github', label: 'GitHub', href: config.socials.github, icon: <GitHubIcon /> },
  { key: 'linkedin', label: 'LinkedIn', href: config.socials.linkedin },
  { key: 'telegram', label: 'Telegram', href: config.socials.telegram },
].filter((s) => s.href);

const Contact = () => {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!name || !link || !message) return;
    setBusy(true);
    setStatus('');
    axios
      .post(
        `https://api.telegram.org/bot${BOT}/sendMessage?chat_id=${CHAT}&text=${encodeURIComponent(
          `<b>Contacts:</b>\n<b>Name:</b> ${name}\n<b>Link:</b> ${link}\n<b>Message:</b> ${message}`,
        )}&parse_mode=html`,
      )
      .then(() => {
        setStatus('ok:Message sent. I will reply as soon as I can.');
        setName('');
        setLink('');
        setMessage('');
      })
      .catch(() => setStatus(`err:The message could not be sent. Please email ${config.academicEmail} instead.`))
      .finally(() => setBusy(false));
  };

  const ok = status.startsWith('ok:');

  return (
    <Layout>
      <Panel title="Send a message">
        <Form onSubmit={submit} variants={containerVariants} initial="hidden" animate="visible">
          <Row variants={itemVariants}>
            Name
            <Field value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" required />
          </Row>
          <Row variants={itemVariants}>
            How should I reply? (email, Telegram or LinkedIn)
            <Field value={link} onChange={(e) => setLink(e.target.value)} autoComplete="email" required />
          </Row>
          <Row variants={itemVariants}>
            Message
            <Area value={message} onChange={(e) => setMessage(e.target.value)} required />
          </Row>
          <motion.div variants={itemVariants}>
            <Button type="submit" disabled={busy}>
              {busy ? 'Sending…' : 'Send message'}
            </Button>
          </motion.div>
          {status && (
            <Status role="status" $ok={ok}>
              {status.slice(status.indexOf(':') + 1)}
            </Status>
          )}
        </Form>
      </Panel>

      <Aside>
        <div>
          <h2>Email</h2>
          <p>
            For research, collaboration or roles:
            <br />
            <a href={`mailto:${config.academicEmail}`}>{config.academicEmail}</a>
          </p>
          <p style={{ marginTop: 8 }}>
            Personal: <a href={`mailto:${config.email}`}>{config.email}</a>
          </p>
        </div>
        <div>
          <h2>Elsewhere</h2>
          <LinkList>
            {socialLinks.map((s) => (
              <li key={s.key}>
                <a href={s.href} target="_blank" rel="noreferrer">
                  {s.icon}
                  {s.label}
                </a>
              </li>
            ))}
          </LinkList>
        </div>
      </Aside>
    </Layout>
  );
};

Contact.displayName = 'Contact';
export default Contact;
