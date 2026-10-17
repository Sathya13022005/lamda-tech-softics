import React, { useEffect, useMemo, useState } from 'react';
import CourseCard from '../components/CourseCard.jsx';
import EnquiryModal from '../components/EnquiryModal.jsx';
import useReveal from '../hooks/useReveal.js';
import { getCourses } from '../services/api.js';
import { sampleCourses, CATEGORY } from '../data/sampleData.js';
import './Courses.css';

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: CATEGORY.PROGRAMMING, label: 'Programming' },
  { key: CATEGORY.WEB, label: 'Web Development' },
  { key: CATEGORY.DATA_AI, label: 'Data & AI' },
  { key: CATEGORY.MARKETING, label: 'Digital Marketing' },
  { key: CATEGORY.DESIGN, label: 'Design' },
];

export default function Courses() {
  const [courses, setCourses] = useState(sampleCourses);
  const [activeFilter, setActiveFilter] = useState('all');
  const [modalCourse, setModalCourse] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    let cancelled = false;
    getCourses()
      .then((res) => {
        if (!cancelled && Array.isArray(res?.data) && res.data.length > 0) {
          setCourses(res.data);
        }
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, []);

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return courses;
    return courses.filter((c) => c.category === activeFilter);
  }, [courses, activeFilter]);

  useReveal([filtered]);

  const openEnquiry = (course) => {
    setModalCourse(course);
    setModalOpen(true);
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Courses</p>
          <h1>Practical courses across programming, web, data & design</h1>
          <p className="page-hero__sub">Filter by track to find the right course, 
            then enquire directly from the card.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filter-bar" role="tablist" aria-label="Filter courses by category">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                type="button"
                role="tab"
                aria-selected={activeFilter === f.key}
                className={`filter-chip ${activeFilter === f.key ? 'filter-chip--active' : ''}`}
                onClick={() => setActiveFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p style={{ textAlign: 'center', padding: '48px 0' }}>No courses found in this category yet.</p>
          ) : (
            <div className="grid grid--3" style={{ marginTop: 36 }}>
              {filtered.map((course) => (
                <CourseCard key={course.id || course.course_name} course={course} onEnquire={openEnquiry} />
              ))}
            </div>
          )}
        </div>
      </section>

      <EnquiryModal open={modalOpen} course={modalCourse} onClose={() => setModalOpen(false)} />
    </>
  );
}
