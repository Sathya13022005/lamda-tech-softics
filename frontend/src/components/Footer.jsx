import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <div className="brand" style={{ color: '#fff' }}>
            <img src={logo} alt="Lamda Tech Softics logo" className="brand__logo brand__logo--footer" />
            <span className="brand__text" style={{ color: '#fff' }}>
              Lamda Tech <strong style={{ color: 'var(--teal)' }}>Softics</strong>
            </span>
          </div>
          <p className="site-footer__about">
            A software training and project development center helping students
            in Srivilliputhur and across Tamil Nadu build real, job-ready skills.
          </p>
        </div>

        <div>
          <h4 className="site-footer__heading">Explore</h4>
          <ul className="site-footer__links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/internships">Internships</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="site-footer__heading">Popular Courses</h4>
          <ul className="site-footer__links">
            <li><Link to="/courses">Python Programming</Link></li>
            <li><Link to="/courses">Full Stack Development</Link></li>
            <li><Link to="/courses">React JS</Link></li>
            <li><Link to="/courses">Data Analytics</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="site-footer__heading">Contact</h4>
          <ul className="site-footer__links">
            <li>Srivilliputhur, Tamil Nadu</li>
            <li>+91 9361886138</li>
            <li>lamdatechsofticssrivilliputtur</li>
          </ul>
          <Link to="/contact" className="btn btn--amber btn--sm" style={{ marginTop: 14 }}>
            Send an Enquiry
          </Link>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container site-footer__bottom-inner">
          <span>&copy; {year} Lamda Tech Softics. All rights reserved.</span>
          <span className="mono-label" style={{ color: '#7c869c' }}>Srivilliputhur · Tamil Nadu</span>
        </div>
      </div>
    </footer>
  );
}
