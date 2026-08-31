// Central place for all calls to the PHP backend.
//
// In development, Vite's dev server proxies "/api/*" to the PHP backend
// (see vite.config.js), so this file can just call relative paths.
//
// In production, set VITE_API_BASE_URL in a .env file to the deployed
// backend URL, e.g. VITE_API_BASE_URL=http://localhost/lamda-tech-softics/backend/api
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options,
  });

  let payload = null;
  try {
    payload = await response.json();
  } catch (err) {
    // Non-JSON response (e.g. a PHP fatal error page) — surface a clear error.
    throw new Error('Unexpected response from server. Please try again later.');
  }

  if (!response.ok || payload?.success === false) {
    throw new Error(payload?.message || 'Something went wrong. Please try again.');
  }

  return payload;
}

export function getCourses() {
  return request('/courses.php');
}

export function getInternships() {
  return request('/internships.php');
}

export function getTestimonials() {
  return request('/testimonials.php');
}

export function submitEnquiry(data) {
  return request('/enquiries.php', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}
