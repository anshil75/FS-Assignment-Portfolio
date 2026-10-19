import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Certifications.css';

const CERTS = [
  {
    id: 1,
    title: 'Database Management System',
    issuer: 'Infosys',
    date: 'November 2025',
    link: '/certificates/dbms-cert.pdf',
    icon: '🏅',
    isPlaceholder: false,
  },
  {
    id: 2,
    title: 'TCS Young Professional',
    issuer: 'TCS',
    date: 'January 2026',
    link: '/certificates/tcs-cert.pdf',
    icon: '🎖️',
    isPlaceholder: false,
  },
  {
    id: 3,
    title: 'LNM Hacks (Hackathon Participation)',
    issuer: 'LNMIIT Jaipur',
    date: 'February 2026',
    link: '/certificates/lnm-hacks.jpeg',
    icon: '🏆',
    isPlaceholder: false,
  },
];

function CertCard({ cert, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className="cert-card card"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {cert.isPlaceholder && <div className="cert-placeholder-tag">Placeholder</div>}
      <div className="cert-icon">{cert.icon}</div>
      <h3 className="cert-title">{cert.title}</h3>
      <p className="cert-issuer">{cert.issuer}</p>
      <p className="cert-date">📅 {cert.date}</p>
      {cert.link && cert.link !== '#' ? (
        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
          🔗 View Certificate
        </a>
      ) : (
        <span className="cert-link-placeholder">Replace with verified link</span>
      )}
    </motion.div>
  );
}

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="certifications" className="cert-section">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Certifications & Achievements</h2>
          <p>Replace placeholders with your actual certificates and awards</p>
          <div className="line" />
        </motion.div>

        <div className="cert-grid">
          {CERTS.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
