import React from 'react';
import './Cards.css';

function Stars({ rating = 5 }) {
  return (
    <div className="stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? 'star star--filled' : 'star'}>&#9733;</span>
      ))}
    </div>
  );
}

export default function TestimonialCard({ testimonial }) {
  const { student_name, course, rating, testimonial: quote } = testimonial;
  const initial = (student_name || '?').trim().charAt(0).toUpperCase();

  return (
    <article className="card testimonial-card reveal">
      <Stars rating={rating} />
      <p className="testimonial-card__quote">&ldquo;{quote}&rdquo;</p>
      <div className="testimonial-card__person">
        <div className="testimonial-card__avatar" aria-hidden="true">{initial}</div>
        <div>
          <div className="testimonial-card__name">{student_name}</div>
          <div className="mono-label">{course}</div>
        </div>
      </div>
    </article>
  );
}
