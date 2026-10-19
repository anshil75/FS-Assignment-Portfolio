// components/Hero.jsx — Hero section with typewriter effect and CV download buttons
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const ROLES = [
  'MERN Stack Developer',
  'React.js Enthusiast',
  'Problem Solver',
];

function useTypewriter(words, speed = 100, pause = 1800) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const timeout = deleting
      ? setTimeout(() => setText(t => t.slice(0, -1)), speed / 2)
      : setTimeout(() => setText(t => current.slice(0, t.length + 1)), speed);

    if (!deleting && text === current) {
      setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIndex(i => i + 1);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typedText = useTypewriter(ROLES);

  const handleDownload = (type) => {
    const apiBase = import.meta.env.VITE_API_URL || '';
    const url = `${apiBase}/api/download/${type}`;
    const a = document.createElement('a');
    a.href = url;
    a.download = `resume.${type}`;
    a.click();
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg-gradient" />

      <div className="container hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.p
            className="hero-greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            👋 Hello, World! I'm
          </motion.p>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            Anshil Singh Bisth
          </motion.h1>

          <motion.div
            className="hero-role"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            <span className="typewriter">{typedText}</span>
            <span className="cursor">|</span>
          </motion.div>

          <motion.p
            className="hero-bio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            I'm a third-year Computer Science and Engineering student passionate about building modern, responsive, 
            and user-friendly web applications. 
            I'm currently exploring full stack development, strengthening my programming skills, and turning ideas 
            into solutions for real-world problems.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
          >
            <button className="btn btn-primary" onClick={() => handleDownload('pdf')}>
              📄 Download CV (PDF)
            </button>
            <button className="btn btn-outline" onClick={() => handleDownload('docx')}>
              📝 Download CV (DOCX)
            </button>
            <a href="#contact" className="btn btn-outline" onClick={e => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              💬 Hire Me
            </a>
          </motion.div>
        </motion.div>

        {/* Avatar / Illustration */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <div className="hero-avatar-ring">
            <div className="hero-avatar">
              {/* ⬇️ REPLACE src with your actual photo path */}
              <div className="avatar-placeholder">
                <span>YOUR<br/>PHOTO</span>
              </div>
            </div>
          </div>
          <div className="floating-chip chip-1">⚛️ React</div>
          <div className="floating-chip chip-2">🟢 Node.js</div>
          <div className="floating-chip chip-3">🍃 MongoDB</div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <span>↓</span>
      </motion.div>
    </section>
  );
}
