
import React, { useMemo } from 'react';
import './BackgroundFX.css';

const TOTAL_BUBBLES = 22;

function rand(min, max) { return Math.random() * (max - min) + min; }

  export default function BackgroundFX() {
  const bubbles = useMemo(() =>
    Array.from({ length: TOTAL_BUBBLES }, (_, i) => ({
      id: i,
      size:     rand(14, 84),
      left:     rand(0, 100),
      duration: rand(9, 21),
      delay:    rand(-21, 0),         // negative delay = already mid-rise on load
      sway:     rand(-35, 35),        // horizontal drift px
    })),
  []);

  return (
    <div className="bg-fx" aria-hidden="true">
      {/* Morphing aurora blobs */}
      <div className="blob blob-pink" />
      <div className="blob blob-cyan" />

      {/* Rising bubbles */}
      {bubbles.map(b => (
        <div
          key={b.id}
          className="bubble"
          style={{
            width:             `${b.size}px`,
            height:            `${b.size}px`,
            left:              `${b.left}vw`,
            animationDuration: `${b.duration}s`,
            animationDelay:    `${b.delay}s`,
            '--sway':          `${b.sway}px`,
          }}
        />
      ))}
    </div>
  );
}
