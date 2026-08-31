import React from 'react';

// Replace with the institute's real WhatsApp business number, digits only,
// including country code (e.g. 91XXXXXXXXXX for India).
const WHATSAPP_NUMBER = '9361886138';
const DEFAULT_MESSAGE = "Hi Lamda Tech Softics, I'd like to know more about your courses.";

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Chat with us on WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor" aria-hidden="true">
        <path d="M16.02 3C9.4 3 4 8.37 4 15c0 2.36.68 4.56 1.86 6.42L4 29l7.77-1.83A11.9 11.9 0 0 0 16.02 27C22.63 27 28 21.63 28 15S22.63 3 16.02 3Zm6.98 17.14c-.3.83-1.7 1.58-2.35 1.66-.6.08-1.36.11-2.2-.14-.5-.15-1.15-.36-1.98-.7-3.49-1.5-5.76-5-5.94-5.24-.17-.24-1.42-1.89-1.42-3.6 0-1.72.9-2.56 1.22-2.91.31-.34.68-.43.91-.43.23 0 .46 0 .66.01.21.01.5-.08.78.6.3.7 1.01 2.42 1.1 2.6.09.17.15.37.03.6-.12.24-.18.37-.36.57-.18.2-.37.44-.53.6-.18.17-.36.36-.16.7.2.35.9 1.48 1.93 2.4 1.32 1.18 2.44 1.55 2.79 1.72.35.17.55.15.75-.09.2-.24.86-1 1.09-1.34.23-.35.46-.29.77-.17.31.11 1.98.94 2.32 1.1.34.18.56.26.65.4.09.16.09.87-.21 1.7Z"/>
      </svg>
    </a>
  );
}
