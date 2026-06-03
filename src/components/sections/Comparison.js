import React, { useState } from 'react';
import styled from 'styled-components';
import TerminalWindow from '../terminal/TerminalWindow';
import Button from '../ui/Button';

const Form = styled.form`
  display: grid;
  gap: 10px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.secondary};
  max-width: 420px;
`;

const Input = styled.input`
  padding: 8px;
  background: ${({ theme }) => theme.colors.bg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.primary};
  font-family: inherit;
  outline: none;
`;

const Select = styled.select`
  padding: 8px;
  background: ${({ theme }) => theme.colors.bg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.primary};
  font-family: inherit;
  outline: none;
`;

const Log = styled.div`
  margin-top: 20px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text};
  span { color: ${({ theme }) => theme.colors.secondary}; }
`;

const Verdict = styled.div`
  margin-top: 8px;
  font-size: 18px;
  color: ${({ theme, $kind }) =>
    $kind === 'mogged' ? theme.colors.primary : $kind === 'cap' ? theme.colors.textMuted : theme.colors.textMuted};
`;

const Bars = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-end;
  margin-top: 16px;
`;

const Bar = styled.div`
  flex: 1;
  max-width: 140px;
  background: ${({ theme }) => theme.colors.primary}22;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  text-align: center;
  padding: 4px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text};
  height: ${({ $h }) => $h}px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const MY_H = 195;

const Comparison = () => {
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('');
  const [shown, setShown] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setShown(true);
  };

  const h = parseInt(height, 10) || 0;
  const kind = h < 170 ? 'mid' : h > 195 ? 'cap' : 'mogged';
  const message = kind === 'mid' ? 'Mid tbh' : kind === 'cap' ? 'Nahh, ur cap!' : 'HEIGHTMOGGED';
  const userBarH = Math.max(20, Math.min(260, (h / MY_H) * 220));

  return (
    <TerminalWindow title="~/comparision — ./heightmog.sh">
      <Form onSubmit={submit}>
        <label>
          $ name:
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="your name" />
        </label>
        <label>
          $ height_cm:
          <Input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="e.g. 180"
          />
        </label>
        <label>
          $ gender:
          <Select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">-- select --</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </Select>
        </label>
        <div>
          <Button type="submit">[ compare ]</Button>
        </div>
      </Form>

      {shown && h > 0 && (
        <Log>
          <div>
            [<span>LOG</span>] comparing <span>{name || 'anon'}</span> ({h}cm) vs asad (195cm)
          </div>
          <Verdict $kind={kind}>&gt; verdict: {message}</Verdict>
          <Bars>
            <Bar $h={220}>
              asad
              <br />
              195cm
            </Bar>
            <Bar $h={userBarH}>
              {name || 'you'}
              <br />
              {h}cm
            </Bar>
          </Bars>
        </Log>
      )}
    </TerminalWindow>
  );
};

Comparison.displayName = 'Comparison';
export default Comparison;
