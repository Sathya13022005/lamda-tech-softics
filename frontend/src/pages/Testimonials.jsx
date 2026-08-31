import React, { useEffect, useState } from 'react';
import TestimonialCard from '../components/TestimonialCard.jsx';
import useReveal from '../hooks/useReveal.js';
import { getTestimonials } from '../services/api.js';
import { sampleTestimonials } from '../data/sampleData.js';
import './Testimonials.css';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState(sampleTestimonials);
  const [index, setIndex] = useState(0);
  useReveal([testimonials]);

  useEffect(() => {
    let cancelled = false;
    getTestimonials()
      .then((res) => {
        if (!cancelled && Array.isArray(res?.data) && res.data.length > 0) {
          setTestimonials(res.data);
        }
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goTo = (i) => setIndex(((i % testimonials.length) + testimonials.length) % testimonials.length);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Testimonials</p>
          <h1>What our students say after building real projects</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="carousel">
            <button className="carousel__nav carousel__nav--prev" aria-label="Previous testimonial" onClick={() => goTo(index - 1)}>&larr;</button>
            <div className="carousel__track">
              {testimonials.length > 0 && <TestimonialCard testimonial={testimonials[index]} />}
            </div>
            <button className="carousel__nav carousel__nav--next" aria-label="Next testimonial" onClick={() => goTo(index + 1)}>&rarr;</button>
          </div>
          <div className="carousel__dots">
            {testimonials.map((t, i) => (
              <button
                key={t.id || i}
                className={`carousel__dot ${i === index ? 'carousel__dot--active' : ''}`}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--raised">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow">More Stories</p>
            <h2>Browse every review</h2>
          </div>
          <div className="grid grid--3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id || t.student_name} testimonial={t} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
