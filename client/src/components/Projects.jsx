// components/Projects.jsx — Project showcase cards
// CHANGE: Added useTilt hook for 3D mouse-tilt on cards.
// UNCHANGED: PROJECTS data, card content, links, Framer Motion scroll reveal, all logic.
import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import useTilt from '../hooks/useTilt';
import './Projects.css';

const FILTERS = ['All', 'React / Next.js', 'Python / AI', 'Node.js / Backend'];

function filterMatches(project, filter) {
  if (filter === 'All') return true;
  const text = (project.name + ' ' + project.tech.join(' ')).toLowerCase();
  if (filter === 'React / Next.js') {
    return text.includes('react') || text.includes('next');
  }
  if (filter === 'Python / AI') {
    return text.includes('python') || text.includes('scikit') || text.includes('sentiment') || text.includes('nlp') || text.includes('machine learning');
  }
  if (filter === 'Node.js / Backend') {
    return text.includes('node') || text.includes('express') || text.includes('mongo') || text.includes('api');
  }
  return true;
}
const PROJECTS = [
  {
    id: 1,
    name: 'Project One - Sentiment Analysis of the Cryptocurrency Market using Machine Learning',
    description:
      'This project analyzes the relationship between public sentiment and cryptocurrency price movements using real-world data. ' +
      'The project demonstrates a correlation between sentiment polarity and market movements, showing how social and news sentiment can influence crypto prices.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Natural Language Processing (NLP)'],
    github: 'https://github.com/anshil75/Sentiment-Analysis-for-Cryptocurrency-Markets'
  },
  {
    id: 2,
    name: 'Project Two - Aether',
    description:
      'A streaming AI chat app with spoken replies, on-demand image generation, and voice input. ' +
      'Chat - streaming responses completions API. Text-to-speech - the speaker icon on any assistant message converts it to audio and plays it back. Generated on demand. Image generation. Voice input - the mic icon records audio in the browser, sends it to the backend, and transcribes straight into the chat input.',
    tech: ['JavaScript', 'HTML5/CSS', 'API', 'Next.js', 'React.js', 'Vercel'],
    github: 'https://github.com/yourusername/project-two'
  },
  {
    id: 3,
    name: 'Project Three — [Replace with your project name]',
    description:
      'Placeholder: Replace this with a real description of your third project. ' +
      'Include what you learned, challenges overcome, and the impact of the project.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose'],
    github: 'https://github.com/yourusername/project-three'
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const { style: tiltStyle, onMouseMove, onMouseLeave } = useTilt();

  return (
    <motion.div
      ref={ref}
      layout
      className="project-card card"
      style={tiltStyle}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.35 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {project.status === 'placeholder' && (
        <div className="placeholder-ribbon">Placeholder</div>
      )}
      <div className="project-card-body">
        <div className="project-icon">
          {['🌐', '📱', '⚙️', '🔐', '📊'][index % 5]}
        </div>
        <h3 className="project-name">{project.name}</h3>
        <p className="project-desc">{project.description}</p>

        <div className="project-tech">
          {project.tech.map(t => (
            <span key={t} className="badge">{t}</span>
          ))}
        </div>
      </div>

      <div className="project-card-footer">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <span>⬡</span> GitHub
        </a>
        {project.demo && project.demo !== '#' && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link project-link-demo"
          >
            <span>🔗</span> Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = PROJECTS.filter(p => filterMatches(p, activeFilter));

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Projects</h2>
          <p>Things I've built — explore by technology stack</p>
          <div className="line" />
        </motion.div>

        <div className="projects-filter-bar">
          {FILTERS.map(filter => {
            const count = filter === 'All' ? PROJECTS.length : PROJECTS.filter(p => filterMatches(p, filter)).length;
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                className={`project-filter-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={isActive}
              >
                <span>{filter}</span>
                <span className="filter-count">{count}</span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
