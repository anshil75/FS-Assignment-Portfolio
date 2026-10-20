// components/CursorGlow.jsx — Soft cursor glow + bubble trail
// Styling only. No logic, routes or API calls touched.
// Auto-disabled on touch devices and prefers-reduced-motion.
import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    // Disable on touch devices and for users who prefer reduced motion
    const noHover = window.matchMedia("(hover: none)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (noHover || reduced) return;

    const glow = glowRef.current;
    let x = window.innerWidth / 2, y = window.innerHeight / 2; // target
    let gx = x, gy = y;                                        // smoothed position
    let lastTrail = 0, raf;

    const onMove = (e) => {
      x = e.clientX; y = e.clientY;
      const now = performance.now();
      if (now - lastTrail > 70) {          
        lastTrail = now;
        const b = document.createElement("div");
        b.className = "cursor-trail";
        b.style.left = x + "px";
        b.style.top  = y + "px";
        document.body.appendChild(b);
        setTimeout(() => b.remove(), 1000);
      }
    };

    const loop = () => {
      if (glowRef.current) {
        gx += (x - gx) * 0.15;              
        gy += (y - gy) * 0.15;
        glowRef.current.style.transform = `translate3d(${gx}px, ${gy}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />;
}
