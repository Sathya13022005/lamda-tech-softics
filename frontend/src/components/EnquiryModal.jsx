import React, { useEffect } from 'react';
import EnquiryForm from './EnquiryForm.jsx';
import './EnquiryModal.css';

export default function EnquiryModal({ open, course, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="enquiry-modal-title" onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close" aria-label="Close enquiry form" onClick={onClose}>&times;</button>
        <p className="eyebrow">Course Enquiry</p>
        <h3 id="enquiry-modal-title">{course ? course.course_name : 'Tell us what you need'}</h3>
        <p style={{ marginBottom: 18 }}>Share a few details and our team will get back to you within one working day.</p>
        <EnquiryForm defaultCourse={course ? course.course_name : ''} compact onSuccess={() => {}} />
      </div>
    </div>
  );
}
