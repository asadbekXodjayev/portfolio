import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { runCommand } from '../../utils/terminalCommands';
import TerminalWindow from './TerminalWindow';

const History = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
  white-space: pre-wrap;
  max-height: 260px;
  overflow-y: auto;
`;

const Line = styled.div`
  color: ${({ theme, $prompt }) => ($prompt ? theme.colors.secondary : theme.colors.primary)};
`;

const InputRow = styled.form`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`;

const Prompt = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  font-family: inherit;
  font-size: inherit;
  caret-color: ${({ theme }) => theme.colors.primary};
`;

const TerminalInput = () => {
  const [history, setHistory] = useState([
    { type: 'info', text: "type 'help' to see available commands" },
  ]);
  const [value, setValue] = useState('');
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const cmd = value;
    setValue('');
    const output = runCommand(cmd);
    if (output[0] === '__CLEAR__') {
      setHistory([]);
      return;
    }
    setHistory((prev) => [
      ...prev,
      { type: 'prompt', text: `guest@asad:~$ ${cmd}` },
      ...output.map((t) => ({ type: 'out', text: t })),
    ]);
  };

  return (
    <TerminalWindow title="guest@asad: ~" variant="phosphor-green">
      <History ref={scrollRef}>
        {history.map((h, i) => (
          <Line key={i} $prompt={h.type === 'prompt'}>
            {h.text || ' '}
          </Line>
        ))}
      </History>
      <InputRow onSubmit={handleSubmit}>
        <Prompt>guest@asad:~$</Prompt>
        <Input
          autoFocus
          value={value}
          onChange={(e) => setValue(e.target.value)}
          aria-label="terminal input"
          spellCheck={false}
        />
      </InputRow>
    </TerminalWindow>
  );
};

TerminalInput.displayName = 'TerminalInput';
export default TerminalInput;
