import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './EnquiryModal.css';
import './CourseDetailsModal.css';

const HIGHLIGHTS = [
  'Practical, hands-on training sessions',
  'Real-time project work',
  'Mentor support for doubts and reviews',
  'Career guidance and interview preparation',
];

export default function CourseDetailsModal({ course, logo, techList, onClose, onEnquire }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const { course_name, description, duration, level } = course;

  // Rendered in a portal so the animated card (which uses transforms)
  // cannot break the fixed-position overlay.
  return createPortal(
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="course-details-title" onClick={onClose}>
      <div className="modal-panel course-details" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close" aria-label="Close course details" onClick={onClose}>&times;</button>

        <div className="course-details__head">
          {logo && <img src={logo} alt="" className="course-details__logo" />}
          <div>
            <p className="eyebrow">Course Details</p>
            <h3 id="course-details-title">{course_name}</h3>
          </div>
        </div>

        <p>{description}</p>

        <div className="course-details__facts">
          <div><span className="mono-label">Duration</span><strong>{duration}</strong></div>
          {level && <div><span className="mono-label">Level</span><strong>{level}</strong></div>}
        </div>

        {techList.length > 0 && (
          <>
            <h4 className="course-details__sub">Technologies covered</h4>
            <ul className="course-card__tech">
              {techList.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </>
        )}

        <h4 className="course-details__sub">What you get</h4>
        <ul className="course-details__list">
          {HIGHLIGHTS.map((h) => <li key={h}>{h}</li>)}
        </ul>

        <button
          type="button"
          className="btn btn--primary btn--block"
          onClick={() => { onClose(); onEnquire && onEnquire(course); }}
        >
          Enquire Now
        </button>
      </div>
    </div>,
    document.body
  );
}
