// hooks/useTilt.js — Reusable 3D card tilt on mouse move
// Usage: const { style, onMouseMove, onMouseLeave } = useTilt();
// Wire: <div style={style} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
import { useState } from 'react';

export default function useTilt(maxDeg = 14) {
  const RESET = {
    transform: 'perspective(700px) rotateX(0deg) rotateY(0deg) translateY(0px)',
    transition: 'transform 0.5s cubic-bezier(.03,.98,.52,.99)',
  };

  const [style, setStyle] = useState(RESET);

  const onMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width  / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -maxDeg;
    const rotY = ((x - cx) / cx) *  maxDeg;
    setStyle({
      transform: `perspective(700px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateY(-6px)`,
      transition: 'transform 0.12s cubic-bezier(.03,.98,.52,.99)',
    });
  };

  const onMouseLeave = () => setStyle(RESET);

  return { style, onMouseMove, onMouseLeave };
}
