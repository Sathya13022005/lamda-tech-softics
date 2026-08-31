import React, { useState } from 'react';
import { submitEnquiry } from '../services/api.js';
import './EnquiryForm.css';

const COURSE_OPTIONS = [
  'Python Programming', 'Full Stack Development', 'React JS', 'Web Development',
  'Data Analytics', 'Digital Marketing', 'AI & Machine Learning', 'UI/UX Design',
  'Cyber Security', 'Cloud Computing', 'Other',
];

const initialState = { name: '', email: '', phone: '', course: '', message: '' };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!values.phone.trim()) {
    errors.phone = 'Please enter your phone number.';
  } else if (!/^[0-9+\-\s]{7,15}$/.test(values.phone)) {
    errors.phone = 'Please enter a valid phone number.';
  }
  if (!values.course) errors.course = 'Please select a course.';
  return errors;
}

export default function EnquiryForm({ defaultCourse = '', onSuccess, compact = false }) {
  const [values, setValues] = useState({ ...initialState, course: defaultCourse });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [serverError, setServerError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('submitting');
    setServerError('');
    try {
      await submitEnquiry(values);
      setStatus('success');
      setValues({ ...initialState, course: defaultCourse });
      if (onSuccess) onSuccess();
    } catch (err) {
      setStatus('error');
      setServerError(err.message || 'Could not submit your enquiry. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="enquiry-success" role="status">
        <div className="enquiry-success__icon">&#10003;</div>
        <h3>Thank you!</h3>
        <p>Your enquiry has been submitted successfully. Our team will reach out to you shortly.</p>
        <button type="button" className="btn btn--outline btn--sm" onClick={() => setStatus('idle')}>
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form className={`enquiry-form ${compact ? 'enquiry-form--compact' : ''}`} onSubmit={handleSubmit} noValidate>
      <div className="enquiry-form__row">
        <label>
          Name
          <input type="text" name="name" value={values.name} onChange={handleChange} placeholder="Your full name" aria-invalid={!!errors.name} />
          {errors.name && <span className="field-error">{errors.name}</span>}
        </label>
        <label>
          Email
          <input type="email" name="email" value={values.email} onChange={handleChange} placeholder="you@example.com" aria-invalid={!!errors.email} />
          {errors.email && <span className="field-error">{errors.email}</span>}
        </label>
      </div>

      <div className="enquiry-form__row">
        <label>
          Phone
          <input type="tel" name="phone" value={values.phone} onChange={handleChange} placeholder="9876543210" aria-invalid={!!errors.phone} />
          {errors.phone && <span className="field-error">{errors.phone}</span>}
        </label>
        <label>
          Course
          <select name="course" value={values.course} onChange={handleChange} aria-invalid={!!errors.course}>
            <option value="">Select a course</option>
            {COURSE_OPTIONS.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          {errors.course && <span className="field-error">{errors.course}</span>}
        </label>
      </div>

      <label>
        Message
        <textarea name="message" rows={compact ? 3 : 4} value={values.message} onChange={handleChange} placeholder="Tell us what you'd like to learn or ask (optional)" />
      </label>

      {status === 'error' && <p className="field-error field-error--server">{serverError}</p>}

      <button type="submit" className="btn btn--primary btn--block" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send Enquiry'}
      </button>
    </form>
  );
}
