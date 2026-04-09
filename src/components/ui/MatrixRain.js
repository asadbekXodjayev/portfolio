import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { prefersReducedMotion } from '../../utils/helpers';

const Canvas = styled.canvas`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  pointer-events: none;
  z-index: 0;
`;

const MatrixRain = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let frame = 0;
    let columns = [];
    const chars = '01░▒▓█ABCDEF<>/{};$#';
    const fontSize = 14;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const cols = Math.floor(canvas.width / fontSize);
      columns = new Array(cols).fill(0).map(() => Math.random() * -50);
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      frame += 1;
      if (frame % 3 === 0) {
        ctx.fillStyle = 'rgba(10,10,10,0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#00ff88';
        ctx.font = `${fontSize}px monospace`;
        columns.forEach((y, i) => {
          const text = chars[Math.floor(Math.random() * chars.length)];
          const x = i * fontSize;
          ctx.fillText(text, x, y * fontSize);
          columns[i] = y * fontSize > canvas.height && Math.random() > 0.975 ? 0 : y + 1;
        });
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <Canvas ref={ref} aria-hidden="true" />;
};

MatrixRain.displayName = 'MatrixRain';
export default MatrixRain;
