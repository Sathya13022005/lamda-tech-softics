import React from 'react';
import './Cards.css';

export default function InternshipCard({ internship, onApply }) {
  const { internship_name, duration, technologies, description } = internship;
  const techList = Array.isArray(technologies)
    ? technologies
    : String(technologies || '').split(',').map((t) => t.trim()).filter(Boolean);

  return (
    <article className="card internship-card reveal">
      <div className="internship-card__head">
        <h3>{internship_name}</h3>
        <span className="pill">{duration}</span>
      </div>
      <p>{description}</p>

      {techList.length > 0 && (
        <ul className="course-card__tech" aria-label="Technologies covered">
          {techList.slice(0, 4).map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      )}

      <ul className="internship-card__perks">
        <li>Project-based learning</li>
        <li>Certificate on completion</li>
        <li>Dedicated mentor support</li>
      </ul>

      <button type="button" className="btn btn--primary btn--sm btn--block" onClick={() => onApply && onApply(internship)}>Apply Now</button>
    </article>
  );
}
