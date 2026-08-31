import React from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal.js';
import './About.css';

const APPROACH_STEPS = [
  { step: '01', title: 'Learn', desc: 'Understand concepts through structured, mentor-led sessions.' },
  { step: '02', title: 'Practice', desc: 'Reinforce every concept with guided hands-on exercises.' },
  { step: '03', title: 'Build Projects', desc: 'Apply skills to projects modeled on real client briefs.' },
  { step: '04', title: 'Gain Experience', desc: 'Work through internships that mirror an actual job.' },
  { step: '05', title: 'Prepare for Career', desc: 'Resume, interview and placement support to close the gap.' },
];

const APPROACH_CARDS = [
  { title: 'Practical Learning', desc: 'Classes built around doing, not just watching or reading.' },
  { title: 'Project-Based Training', desc: 'Every course ends in a project you can show, not just a certificate.' },
  { title: 'Mentor Support', desc: 'Direct access to trainers for doubts, reviews and feedback.' },
  { title: 'Career Guidance', desc: 'Guidance on resumes, interviews and the right next course.' },
];

export default function About() {
  useReveal();
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">About Lamda Tech Softics</p>
          <h1>A training center built by people who build software</h1>
          <p className="page-hero__sub">
            We exist to close the gap between classroom theory and the skills companies
            actually hire for — through practical, project-based technology training.
          </p>
        </div>
      </section>

      <section className="section section--raised">
        <div className="container grid grid--2 about-grid">
          <div className="card about-card reveal">
            <p className="eyebrow">Who We Are</p>
            <p>
              Lamda Tech Softics is a technology training and project development center
              focused on helping students and job seekers develop practical, industry-ready
              skills, based in Srivilliputhur, Tamil Nadu.
            </p>
          </div>
          <div className="grid" style={{ gap: 24 }}>
            <div className="card about-card about-card--sm reveal">
              <p className="eyebrow">Our Mission</p>
              <p>To provide affordable, practical and career-focused technology training.</p>
            </div>
            <div className="card about-card about-card--sm reveal">
              <p className="eyebrow">Our Vision</p>
              <p>To help students become confident and industry-ready professionals.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow">Our Training Approach</p>
            <h2>A path with a clear next step, always</h2>
          </div>
          <div className="approach-path">
            {APPROACH_STEPS.map((item, i) => (
              <React.Fragment key={item.step}>
                <div className="approach-step reveal">
                  <span className="approach-step__num mono-label">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                {i < APPROACH_STEPS.length - 1 && <span className="approach-arrow" aria-hidden="true">&rarr;</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--raised">
        <div className="container">
          <div className="grid grid--4">
            {APPROACH_CARDS.map((card) => (
              <div className="card why-card reveal" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="container cta__inner">
          <h2>See the courses this approach powers</h2>
          <Link to="/courses" className="btn btn--primary">Explore Courses</Link>
        </div>
      </section>
    </>
  );
}
