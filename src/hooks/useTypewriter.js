import { useEffect, useState } from 'react';

export const useTypewriter = (text, speed = 40, startDelay = 0) => {
  const [out, setOut] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    setOut('');
    setDone(false);
    let i = 0;
    let interval;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        if (i < text.length) {
          setOut(text.slice(0, i + 1));
          i += 1;
        } else {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return [out, done];
};
