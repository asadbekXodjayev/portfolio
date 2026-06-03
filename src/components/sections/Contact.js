import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import TerminalWindow from '../terminal/TerminalWindow';
import Button from '../ui/Button';
import { GitHubIcon } from '../ui/ProjectCard';
import { config } from '../../data/config';
import { containerVariants, itemVariants } from '../../lib/motion';

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space(3)};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
`;

const Row = styled(motion.label)`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: ${({ theme }) => theme.colors.secondary};
`;

const Field = styled.input`
  padding: 8px 10px;
  background: ${({ theme }) => theme.colors.bg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.primary};
  font-family: inherit;
  outline: none;
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Area = styled.textarea`
  padding: 8px 10px;
  min-height: 110px;
  background: ${({ theme }) => theme.colors.bg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.primary};
  font-family: inherit;
  outline: none;
  resize: vertical;
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Status = styled.div`
  color: ${({ theme, $ok }) => ($ok ? theme.colors.primary : theme.colors.secondary)};
  font-size: 12px;
`;

const Socials = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
  padding-top: 14px;
  border-top: 1px dashed ${({ theme }) => theme.colors.border};
`;

const Social = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 12px;
  transition: all ${({ theme }) => theme.animation.fast};
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 16px ${({ theme }) => theme.colors.primary}33;
  }
`;

const Info = styled.div`
  margin-top: 14px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textMuted};
  a {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const BOT = '5564814493:AAE-fW4LsvsR5azRSdOu24GRpEiuFxt3Em8';
const CHAT = '-1001756381397';

const socialLinks = [
  { key: 'github', label: 'github', href: config.socials.github, icon: <GitHubIcon /> },
  { key: 'linkedin', label: 'linkedin', href: config.socials.linkedin },
  { key: 'telegram', label: 'telegram', href: config.socials.telegram },
  { key: 'instagram', label: 'instagram', href: config.socials.instagram },
].filter((s) => s.href);

const Contact = () => {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!name || !link || !message) return;
    setStatus('Connecting to server...');
    setTimeout(() => {
      axios
        .post(
          `https://api.telegram.org/bot${BOT}/sendMessage?chat_id=${CHAT}&text=${encodeURIComponent(
            `<b>Contacts:</b>\n<b>Name:</b> ${name}\n<b>Link:</b> ${link}\n<b>Message:</b> ${message}`,
          )}&parse_mode=html`,
        )
        .then(() => {
          setStatus('✔ Transmission complete. I will reach out soon.');
          setName('');
          setLink('');
          setMessage('');
        })
        .catch(() => setStatus('✗ Transmission failed. Try again.'));
    }, 700);
  };

  return (
    <TerminalWindow title="~/contacts — /bin/send">
      <Form onSubmit={submit} variants={containerVariants} initial="hidden" animate="visible">
        <Row variants={itemVariants}>
          $ name:
          <Field value={name} onChange={(e) => setName(e.target.value)} placeholder="your name" />
        </Row>
        <Row variants={itemVariants}>
          $ contact:
          <Field
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="email / telegram / linkedin"
          />
        </Row>
        <Row variants={itemVariants}>
          $ message:
          <Area
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="your message..."
          />
        </Row>
        <motion.div variants={itemVariants}>
          <Button type="submit">[ send &gt; ]</Button>
        </motion.div>
        {status && <Status $ok={status.startsWith('✔')}>{status}</Status>}
      </Form>

      <Socials variants={containerVariants} initial="hidden" animate="visible">
        {socialLinks.map((s) => (
          <Social key={s.key} href={s.href} target="_blank" rel="noreferrer" as={motion.a} variants={itemVariants}>
            {s.icon}
            {s.label} ↗
          </Social>
        ))}
      </Socials>

      <Info>
        direct: <a href={`mailto:${config.email}`}>{config.email}</a>
      </Info>
    </TerminalWindow>
  );
};

Contact.displayName = 'Contact';
export default Contact;
