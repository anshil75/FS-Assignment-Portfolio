import React from 'react';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="logo-bracket">&lt;</span>Portfolio<span className="logo-bracket">/&gt;</span>
        </div>

        <p className="footer-tagline">
          Built with ⚛️ React, 🟢 Node.js &amp; 🍃 MongoDB
        </p>

        <div className="footer-socials">
          <a href="https://github.com/anshil75" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            ⬡ GitHub
          </a>
          <a href="https://www.linkedin.com/in/anshil-singh-bisth-asb/?isSelfProfile=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            💼 LinkedIn
          </a>
          <a href="mailto:rishisinghbisth@gmail.com" aria-label="Email">
            📧 Email
          </a>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} Anshil Singh. All rights reserved.</p>
          <a href="#top" className="back-to-top" onClick={scrollTop}>
            ↑ Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
