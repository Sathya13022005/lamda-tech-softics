import React, { useState } from 'react';
import CourseDetailsModal from './CourseDetailsModal.jsx';
import { getCourseLogo } from '../data/courseIcons.js';
import './Cards.css';

export default function CourseCard({ course, onEnquire }) {
  const { course_name, description, duration, level, technologies, icon } = course;
  const [showDetails, setShowDetails] = useState(false);
  const logo = getCourseLogo(course_name);
  const techList = Array.isArray(technologies)
    ? technologies
    : String(technologies || '').split(',').map((t) => t.trim()).filter(Boolean);

  return (
    <article className="card course-card reveal">
      <div className="course-card__icon">
        {logo ? (
          <img src={logo} alt={`${course_name} logo`} loading="lazy" />
        ) : (
          <span aria-hidden="true">{icon || '{ }'}</span>
        )}
      </div>
      <h3>{course_name}</h3>
      <p className="course-card__desc">{description}</p>

      <div className="course-card__meta">
        <span className="pill">{duration}</span>
        {level && <span className="pill pill--amber">{level}</span>}
      </div>

      {techList.length > 0 && (
        <ul className="course-card__tech" aria-label="Technologies covered">
          {techList.slice(0, 4).map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      )}

      <div className="course-card__actions">
        <button type="button" className="btn btn--outline btn--sm" onClick={() => setShowDetails(true)}>View Details</button>
        <button type="button" className="btn btn--primary btn--sm" onClick={() => onEnquire && onEnquire(course)}>
          Enquire Now
        </button>
      </div>
      {showDetails && (
        <CourseDetailsModal
          course={course}
          logo={logo}
          techList={techList}
          onClose={() => setShowDetails(false)}
          onEnquire={onEnquire}
        />
      )}
    </article>
  );
}
