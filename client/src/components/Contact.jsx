import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import axios from 'axios';
import './Contact.css';

const INIT = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm]       = useState(INIT);
  const [status, setStatus]   = useState('idle');
  const [errMsg, setErrMsg]   = useState('');
  const [errors, setErrors]   = useState({});

  const ref    = useRef(null);
  const inView = useInView(ref, { once: true });

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.email.trim())   e.email   = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    setStatus('loading');
    try {
      const apiBase = import.meta.env.VITE_API_URL || '';
      await axios.post(`${apiBase}/api/contact`, form);
      setStatus('success');
      setForm(INIT);
      setErrors({});
    } catch (err) {
      setStatus('error');
      setErrMsg(
        err.response?.data?.errors?.[0]?.msg ||
        err.response?.data?.error ||
        'Something went wrong. Please try again.'
      );
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Get In Touch</h2>
          <p>Have a project, question, or opportunity? Send me a message!</p>
          <div className="line" />
        </motion.div>

        <div className="contact-grid">
          {/* Info panel */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3>Let's Connect</h3>
            <p className="contact-info-text">
              I'm currently open to new opportunities and collaborations.
              Whether you have a project in mind or just want to say hi,
              my inbox is always open!
            </p>
            <div className="contact-details">
              <div className="contact-detail-item">
                <span className="contact-icon">📧</span>
                <a href="mailto:rishisinghbisth@gmail.com">rishisinghbisth@gmail.com</a>
              </div>
              <div className="contact-detail-item">
                <span className="contact-icon">📍</span>
                <a
                  href="https://www.google.com/maps/place/Jaipur,+Rajasthan,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jaipur, India
                </a>
              </div>
              <div className="contact-detail-item">
                <span className="contact-icon">💼</span>
                <a href="https://www.linkedin.com/in/anshil-singh-bisth-asb/?isSelfProfile=true" target="_blank" rel="noopener noreferrer">
                LinkedIn Profile
                </a>
              </div>
              <div className="contact-detail-item">
                <span className="contact-icon">⬡</span>
                <a href="https://github.com/anshil75" target="_blank" rel="noopener noreferrer">
                GitHub Profile
                </a>
              </div>
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <form onSubmit={handleSubmit} className="contact-form card" noValidate>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name" name="name"
                  type="text"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  className={errors.name ? 'input-error' : ''}
                />
                {errors.name && <span className="field-error">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email" name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className={errors.email ? 'input-error' : ''}
                />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message" name="message"
                  rows={5}
                  placeholder="Your message..."
                  value={form.message}
                  onChange={handleChange}
                  className={errors.message ? 'input-error' : ''}
                />
                {errors.message && <span className="field-error">{errors.message}</span>}
              </div>

              {status === 'success' && (
                <div className="form-feedback success">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="form-feedback error">❌ {errMsg}</div>
              )}

              <button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? '⏳ Sending...' : '🚀 Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
