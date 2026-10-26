import React, { useEffect } from 'react';
import EnquiryForm from './EnquiryForm.jsx';
import './EnquiryModal.css';

// Label used both in the dropdown and in the WhatsApp message,
// e.g. "Python Internship (30 Days)"
export const internshipLabel = (i) => `${i.internship_name} (${i.duration})`;

export default function InternshipApplyModal({ internship, allInternships = [], onClose }) {
  const open = !!internship;

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
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="apply-modal-title" onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close" aria-label="Close application form" onClick={onClose}>&times;</button>
        <p className="eyebrow">Internship Application</p>
        <h3 id="apply-modal-title">{internship.internship_name}</h3>
        <p style={{ marginBottom: 18 }}>
          Fill in your details. WhatsApp will open with your application ready to send to us.
        </p>
        <EnquiryForm
          compact
          defaultCourse={internshipLabel(internship)}
          courseOptions={allInternships.map(internshipLabel)}
          courseLabel="Internship"
          whatsappHeading="New internship application from the website:"
          noun="application"
          submitLabel="Apply via WhatsApp"
        />
      </div>
    </div>
  );
}
