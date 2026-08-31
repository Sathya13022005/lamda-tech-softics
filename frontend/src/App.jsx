import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import ScrollToTopButton from './components/ScrollToTopButton.jsx';
import './components/Floating.css';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Courses from './pages/Courses.jsx';
import Internships from './pages/Internships.jsx';
import Testimonials from './pages/Testimonials.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';

// Keep each route's <title> in sync for basic per-page SEO without a
// dedicated head-management library.
const TITLES = {
  '/': 'Lamda Tech Softics | Build Your Skills. Build Your Career.',
  '/about': 'About Us | Lamda Tech Softics',
  '/courses': 'Courses | Lamda Tech Softics',
  '/internships': 'Internships | Lamda Tech Softics',
  '/testimonials': 'Student Testimonials | Lamda Tech Softics',
  '/contact': 'Contact Us | Lamda Tech Softics',
};

function RouteEffects() {
  const location = useLocation();
  useEffect(() => {
    document.title = TITLES[location.pathname] || 'Lamda Tech Softics';
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }, [location.pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <RouteEffects />
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
    </>
  );
}
