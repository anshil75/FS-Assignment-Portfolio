
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Skills.css';

const SKILL_GROUPS = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React.js',    level: 60, color: '#61DAFB' },
      { name: 'JavaScript',  level: 70, color: '#F7DF1E' },
      { name: 'HTML5 / CSS3',level: 90, color: '#E34F26' },
      { name: 'Framer Motion',level: 72, color: '#BB4DE8' },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js',    level: 60, color: '#339933' },
      { name: 'Express.js', level: 60, color: '#aaaaaa' },
      { name: 'MongoDB',    level: 65, color: '#47A248' },
      { name: 'REST APIs',  level: 70, color: '#6366f1' },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: '🛠️',
    skills: [
      { name: 'Git & GitHub', level: 82, color: '#F05032' },
      { name: 'VS Code',      level: 90, color: '#007ACC' },
      { name: 'Postman',      level: 60, color: '#FF6C37' },
      { name: 'Mongoose ODM', level: 70, color: '#880000' },
    ],
  },
];

function getProficiency(level) {
  if (level >= 90) return 'Expert';
  if (level >= 75) return 'Advanced';
  if (level >= 65) return 'Intermediate';
  return 'Foundational';
}

function SkillBar({ name, level, color, inView, delay }) {
  const tier = getProficiency(level);

  return (
    <div className="skill-item" title={`${name}: ${level}% (${tier})`}>
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-level">{level}%</span>
      </div>
      <div className="skill-bar-bg">
        <motion.div
          className="skill-bar-fill"
          style={{ background: color || 'var(--accent)' }}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
        />
      </div>
      <div className="skill-tooltip" role="tooltip">
        <span className="tooltip-level">{level}%</span>
        <span className="tooltip-sep">•</span>
        <span className="tooltip-tier">{tier}</span>
      </div>
    </div>
  );
}

function SkillGroup({ group, groupIndex }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className="skill-group card"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: groupIndex * 0.15 }}
    >
      <div className="skill-group-header">
        <span className="skill-group-icon">{group.icon}</span>
        <h3>{group.title}</h3>
      </div>
      <div className="skill-list">
        {group.skills.map((skill, i) => (
          <SkillBar
            key={skill.name}
            {...skill}
            inView={inView}
            delay={0.2 + i * 0.12}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>My Skills</h2>
          <p>Technologies I work with to bring ideas to life</p>
          <div className="line" />
        </motion.div>

        <div className="skills-grid">
          {SKILL_GROUPS.map((group, i) => (
            <SkillGroup key={group.title} group={group} groupIndex={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
