import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Timeline.css';

const TIMELINE_ITEMS = [
  {
    type: 'education',
    icon: '🎓',
    title: 'B.Tech in Computer Science',
    organization: 'JK Lakshimipat University, Jaipur',
    period: '2024 - 2028',
    description:
      'Currently pursuing a Bachelor of Technology (B.Tech) in Computer Science and Engineering. Building a strong foundation in programming and software development while exploring Full Stack Development and working on practical projects.'
  },
  {
    type: 'education',
    icon: '🏫',
    title: 'Higher Secondary (12th) — Science',
    organization: 'Ryan International School, Jaipur',
    period: '2022 - 2024',
    description:
      'Completed my schooling with a focus on academic excellence and building a strong foundation in core subjects. Developed analytical thinking, and communication skills that continue to support my journey in Computer Science and Engineering.',
  },
  {
    type: 'experience',
    icon: '💼',
    title: 'Internship',
    organization: 'Multiprong Technologies Pvt. Ltd., Jaipur',
    period: '2026 (May – July)',
    description:
      'Contributed to front-end development by transforming Figma designs into responsive and user-focused web interfaces. Leveraged HTML5/CSS , Tailwind, JS, React to build responsive webpages. Gained hands-on experience in UI implementation, debugging, testing, and Git-based version control while following professional development practices and refining solutions through mentor feedback.',
  },
];

function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`timeline-item ${isLeft ? 'left' : 'right'}`}
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="timeline-card card">
        <div className="timeline-card-header">
          <span className="timeline-icon">{item.icon}</span>
          <span className={`timeline-type-badge ${item.type}`}>
            {item.type === 'education' ? 'Education' : 'Experience'}
          </span>
        </div>
        <h3 className="timeline-title">{item.title}</h3>
        <p className="timeline-org">{item.organization}</p>
        <p className="timeline-period">📅 {item.period}</p>
        <p className="timeline-desc">{item.description}</p>
      </div>
      <div className="timeline-dot" />
    </motion.div>
  );
}

export default function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="timeline" className="timeline-section">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Education & Experience</h2>
          <p>My academic journey and professional milestones</p>
          <div className="line" />
        </motion.div>

        <div className="timeline-wrapper">
          <div className="timeline-line" />
          {TIMELINE_ITEMS.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
