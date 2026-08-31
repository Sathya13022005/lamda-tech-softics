import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InternshipCard from '../components/InternshipCard.jsx';
import useReveal from '../hooks/useReveal.js';
import { getInternships } from '../services/api.js';
import { sampleInternships } from '../data/sampleData.js';
import './Internships.css';

const PROCESS = ['Register', 'Learn', 'Work on Project', 'Mentor Review', 'Complete', 'Certificate'];

export default function Internships() {
  const [internships, setInternships] = useState(sampleInternships);
  useReveal([internships]);

  useEffect(() => {
    let cancelled = false;
    getInternships()
      .then((res) => {
        if (!cancelled && Array.isArray(res?.data) && res.data.length > 0) {
          setInternships(res.data);
        }
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, []);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Internships</p>
          <h1>Gain Real-World Experience with Our Internship Programs</h1>
          <p className="page-hero__sub">
            Work on practical, real projects under mentor guidance — and leave with
            experience you can talk about in an interview, not just a certificate.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid--3">
            {internships.map((item) => (
              <InternshipCard key={item.id || item.internship_name} internship={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--raised">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow">Internship Process</p>
            <h2>Six stages, one clear finish line</h2>
          </div>
          <ol className="process-line">
            {PROCESS.map((step, i) => (
              <li key={step} className="process-line__item reveal">
                <span className="process-line__num mono-label">{String(i + 1).padStart(2, '0')}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section cta">
        <div className="container cta__inner">
          <h2>Start Your Internship Journey</h2>
          <p>Seats are limited per batch to keep mentor attention high.</p>
          <Link to="/contact" className="btn btn--amber">Apply for an Internship</Link>
        </div>
      </section>
    </>
  );
}
