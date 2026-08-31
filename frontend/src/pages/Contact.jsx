import React from 'react';
import EnquiryForm from '../components/EnquiryForm.jsx';
import useReveal from '../hooks/useReveal.js';
import './Contact.css';

export default function Contact() {
  useReveal();
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact Us</p>
          <h1>Lamda Tech Softics</h1>
          <p className="page-hero__sub">Training &amp; Project Development Center · Srivilliputhur, Tamil Nadu</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="reveal">
            <div className="card contact-info">
              <h3>Get in touch</h3>
              <ul className="contact-info__list">
                <li>
                  <span className="contact-info__label mono-label">Address</span>
                  <span>Lamda Tech Softics, Srivilliputhur, Tamil Nadu, India</span>
                </li>
                <li>
                  <span className="contact-info__label mono-label">Phone</span>
                  <span>+91 9361886138</span>
                </li>
                <li>
                  <span className="contact-info__label mono-label">WhatsApp</span>
                  <span>+91 9361886138</span>
                </li>
                <li>
                  <span className="contact-info__label mono-label">Email</span>
                  <span>lamdatechsofticssrivilliputtur@gmail.com</span>
                </li>
              </ul>
              <a
                href="https://wa.me/9361886138"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--block"
                style={{ marginTop: 20 }}
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="card map-card reveal">
              <iframe
                title="Lamda Tech Softics location on Google Maps"
                src="https://www.google.com/maps?q=Srivilliputhur,Tamil+Nadu&output=embed"
                width="100%"
                height="260"
                style={{ border: 0, borderRadius: 'var(--radius-md)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="card contact-form-card reveal">
            <h3>Send an enquiry</h3>
            <p>Fill in your details and our team will get back to you within one working day.</p>
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
