import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import TerminalWindow from '../terminal/TerminalWindow';
import Button from '../ui/Button';
import { config } from '../../data/config';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space(3)};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
`;

const Row = styled.label`
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
  &:focus { border-color: ${({ theme }) => theme.colors.primary}; }
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
  &:focus { border-color: ${({ theme }) => theme.colors.primary}; }
`;

const Status = styled.div`
  color: ${({ theme, $ok }) => ($ok ? theme.colors.primary : theme.colors.warning)};
  font-size: 12px;
`;

const Info = styled.div`
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px dashed ${({ theme }) => theme.colors.border};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textMuted};
  a { color: ${({ theme }) => theme.colors.secondary}; }
`;

const BOT = '5564814493:AAE-fW4LsvsR5azRSdOu24GRpEiuFxt3Em8';
const CHAT = '-1001756381397';

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
      <Form onSubmit={submit}>
        <Row>
          $ name:
          <Field value={name} onChange={(e) => setName(e.target.value)} placeholder="your name" />
        </Row>
        <Row>
          $ contact:
          <Field value={link} onChange={(e) => setLink(e.target.value)} placeholder="email / telegram / linkedin" />
        </Row>
        <Row>
          $ message:
          <Area value={message} onChange={(e) => setMessage(e.target.value)} placeholder="your message..." />
        </Row>
        <div>
          <Button type="submit">[ send &gt; ]</Button>
        </div>
        {status && <Status $ok={status.startsWith('✔')}>{status}</Status>}
      </Form>
      <Info>
        direct: <a href={`mailto:${config.email}`}>{config.email}</a> · phone: {config.phone} ·{' '}
        <a href={config.socials.telegram}>telegram</a>
      </Info>
    </TerminalWindow>
  );
};

Contact.displayName = 'Contact';
export default Contact;
