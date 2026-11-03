import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// Konami code (↑ ↑ ↓ ↓ ← → ← → B A) opens the hidden ASCII room. Ignored while typing in a field.
const CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

const SecretKeys = () => {
  const navigate = useNavigate();
  const pos = useRef(0);

  useEffect(() => {
    const onKey = (e) => {
      const t = e.target;
      if (t instanceof HTMLElement && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (key === CODE[pos.current]) {
        pos.current += 1;
        if (pos.current === CODE.length) {
          pos.current = 0;
          navigate('/ascii');
        }
      } else {
        pos.current = key === CODE[0] ? 1 : 0;
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [navigate]);

  return null;
};

SecretKeys.displayName = 'SecretKeys';
export default SecretKeys;
