import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard.jsx';
import EnquiryModal from '../components/EnquiryModal.jsx';
import AnimatedCounter from '../components/AnimatedCounter.jsx';
import useReveal from '../hooks/useReveal.js';
import { getCourses } from '../services/api.js';
import { sampleCourses } from '../data/sampleData.js';
import './Home.css';

const WHY_US = [
  { title: 'Practical Training', desc: 'Every concept is taught hands-on, not just from slides.', icon: '01' },
  { title: 'Industry-Oriented Courses', desc: 'Curriculum shaped by what employers actually look for.', icon: '02' },
  { title: 'Experienced Trainers', desc: 'Learn from mentors who have built real production software.', icon: '03' },
  { title: 'Real-Time Projects', desc: 'Apply every skill to projects modeled on real client work.', icon: '04' },
  { title: 'Internship Opportunities', desc: 'Move from classroom learning to real project experience.', icon: '05' },
  { title: 'Career Guidance', desc: 'Resume, interview and placement support built into the journey.', icon: '06' },
];

const TERMINAL_LINES = [
  { prompt: '$', text: 'learn --track=full-stack' },
  { prompt: '$', text: 'practice --mode=hands-on' },
  { prompt: '$', text: 'build --project=real-world' },
  { prompt: '$', text: 'deploy --target=career', highlight: true },
];

export default function Home() {
  const [courses, setCourses] = useState(sampleCourses.slice(0, 6));
  const [modalCourse, setModalCourse] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [typedLines, setTypedLines] = useState(0);

  useReveal([courses]);

  useEffect(() => {
    let cancelled = false;
    getCourses()
      .then((res) => {
        if (!cancelled && Array.isArray(res?.data) && res.data.length > 0) {
          setCourses(res.data.slice(0, 6));
        }
      })
      .catch(() => {
        // Backend not running yet — sample data already in state.
      });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    if (typedLines >= TERMINAL_LINES.length) return;
    const timer = setTimeout(() => setTypedLines((n) => n + 1), 650);
    return () => clearTimeout(timer);
  }, [typedLines]);

  const openEnquiry = (course) => {
    setModalCourse(course);
    setModalOpen(true);
  };

  return (
    <>
      {/* HERO ---------------------------------------------------------- */}
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Software Training &amp; Project Development Center</p>
            <h1>Build Your Skills. <span className="hero__accent">Build Your Career.</span></h1>
            <p className="hero__sub">
              Learn industry-ready skills with practical training at Lamda Tech Softics —
              real projects, real mentors, real outcomes.
            </p>
            <div className="hero__actions">
              <Link to="/courses" className="btn btn--primary">Explore Courses</Link>
              <Link to="/internships" className="btn btn--ghost">Join Internship</Link>
            </div>
            <div className="hero__trust">
              <span className="mono-label">Trusted by learners across Tamil Nadu</span>
            </div>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <div className="terminal">
              <div className="terminal__bar">
                <span className="terminal__dot terminal__dot--red" />
                <span className="terminal__dot terminal__dot--amber" />
                <span className="terminal__dot terminal__dot--green" />
                <span className="terminal__title">career.sh</span>
              </div>
              <div className="terminal__body">
                {TERMINAL_LINES.slice(0, typedLines).map((line, i) => (
                  <div key={i} className={`terminal__line ${line.highlight ? 'terminal__line--highlight' : ''}`}>
                    <span className="terminal__prompt">{line.prompt}</span> {line.text}
                  </div>
                ))}
                {typedLines < TERMINAL_LINES.length && <span className="terminal__cursor" />}
                {typedLines >= TERMINAL_LINES.length && (
                  <div className="terminal__line terminal__line--success">&#10003; career.deployed successfully</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US --------------------------------------------------- */}
      <section className="section section--raised">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow">Why Lamda Tech Softics</p>
            <h2>A training model built around outcomes</h2>
            <p>Six things every student gets, on every course, from day one.</p>
          </div>
          <div className="grid grid--3">
            {WHY_US.map((item) => (
              <div className="card why-card reveal" key={item.title}>
                <span className="mono-label why-card__num">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR COURSES ------------------------------------------------- */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Popular Courses</p>
            <h2>Skills employers are hiring for right now</h2>
          </div>
          <div className="grid grid--3">
            {courses.map((course) => (
              <CourseCard key={course.id || course.course_name} course={course} onEnquire={openEnquiry} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/courses" className="btn btn--outline">View All Courses</Link>
          </div>
        </div>
      </section>

      {/* STATISTICS -------------------------------------------------------- */}
      <section className="section section--dark stats">
        <div className="container grid grid--4">
          <div className="stat">
            <div className="stat__num"><AnimatedCounter end={2500} suffix="+" /></div>
            <div className="mono-label">Students Trained</div>
          </div>
          <div className="stat">
            <div className="stat__num"><AnimatedCounter end={20} suffix="+" /></div>
            <div className="mono-label">Courses Offered</div>
          </div>
          <div className="stat">
            <div className="stat__num"><AnimatedCounter end={400} suffix="+" /></div>
            <div className="mono-label">Projects Completed</div>
          </div>
          <div className="stat">
            <div className="stat__num"><AnimatedCounter end={800} suffix="+" /></div>
            <div className="mono-label">Internship Students</div>
          </div>
        </div>
      </section>

      {/* CTA ---------------------------------------------------------------- */}
      <section className="section cta">
        <div className="container cta__inner">
          <h2>Ready to Start Your IT Career?</h2>
          <p>Talk to our team about the right course or internship for where you are today.</p>
          <Link to="/contact" className="btn btn--amber">Join Lamda Tech Softics Today</Link>
        </div>
      </section>

      <EnquiryModal open={modalOpen} course={modalCourse} onClose={() => setModalOpen(false)} />
    </>
  );
}
