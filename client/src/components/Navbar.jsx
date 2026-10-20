
import React, { useState, useEffect } from 'react';
import { useTheme } from '../App';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home',           href: '#hero' },
  { label: 'About',          href: '#about' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Timeline',       href: '#timeline' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',        href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#hero" className="nav-logo" onClick={e => handleLink(e, '#hero')}>
          <span className="logo-bracket">&lt;</span>Portfolio<span className="logo-bracket">/&gt;</span>
        </a>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={e => handleLink(e, link.href)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button
            className="hamburger"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
