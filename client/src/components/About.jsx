import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

function FadeIn({ children, delay = 0, direction = 'up' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  };
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <FadeIn>
          <div className="section-title">
            <h2>About Me</h2>
            <p>A little about who I am and what I do</p>
            <div className="line" />
          </div>
        </FadeIn>

        <div className="about-grid">
          <FadeIn direction="right" delay={0.1}>
            <div className="about-photo-wrap">
              <div className="about-photo">
                <img
                  src="/profile.png"
                  alt="Anshil Singh Bisth"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const placeholder = e.currentTarget.nextElementSibling;
                    if (placeholder) placeholder. style.display = 'flex';
                  }}
                />
                <div className="photo-placeholder" style={{ display: 'none' }}>YOUR PHOTO</div>
              </div>
              <div className="about-photo-bg" />
            </div>
          </FadeIn>
          <FadeIn direction="left" delay={0.2}>
            <div className="about-info">
              <h3 className="about-greeting">
          
                Hi, I'm <span className="accent">Anshil Singh Bisth</span>
              </h3>

              <p className="about-bio">
                I'm passionate about technology, software development, and creating digital experiences that solve
                real-world problems. Currently, I'm learning Full Stack Development, where I'm exploring both 
                frontend and backend technologies to understand how complete web applications are designed, 
                developed, and deployed.

                I enjoy learning new technologies, experimenting with ideas, and building projects that help me 
                turn theoretical knowledge into practical skills.
              </p>
              <p className="about-bio">
                I thrive in collaborative environments and enjoy turning complex problems
                into simple, beautiful, and intuitive designs.
              </p>

              <div className="about-meta">
                <div className="meta-item">
                  <span className="meta-icon">📍</span>
                  <a
                    href="https://www.google.com/maps/place/Jaipur,+Rajasthan,+India"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Jaipur, India
                  </a>
                </div>
                <div className="meta-item">
                  <span className="meta-icon">🎓</span>
                  <span>B.Tech Student</span>
                </div>
                <div className="meta-item">
                  <span className="meta-icon">💼</span>
                  <span>Open to Opportunities</span>
                </div>
                <div className="meta-item">
                  <span className="meta-icon">✉️</span>
                  <a href="mailto:rishisinghbisth@gmail.com" className="about-email-link">rishisinghbisth@gmail.com</a>
                </div>
              </div>

              <div className="about-actions">
                <a
                  href="#contact"
                  className="btn btn-primary"
                  onClick={e => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get In Touch
                </a>
                <a
                  href="#projects"
                  className="btn btn-outline"
                  onClick={e => {
                    e.preventDefault();
                    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  View Projects
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
