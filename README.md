# Lamda Tech Softics — Website

A complete, working website for **Lamda Tech Softics**, a software training and
project development center in Srivilliputhur, Tamil Nadu.

- **Frontend:** React.js (Vite) + React Router
- **Backend:** PHP REST-style API (PDO + MySQL, no framework required)
- **Database:** MySQL (`lamda_tech_softics`)

```
lamda-tech-softics/
├── frontend/                 React app (Vite)
│   ├── src/
│   │   ├── components/       Header, Footer, cards, forms, floating buttons
│   │   ├── pages/             Home, About, Courses, Internships, Testimonials, Contact, NotFound
│   │   ├── services/api.js    All fetch() calls to the PHP backend
│   │   ├── data/sampleData.js Fallback content if the backend isn't running yet
│   │   └── hooks/useReveal.js Scroll-reveal animation hook
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── backend/                  PHP API (place inside your XAMPP htdocs)
    ├── config/
    │   ├── database.php       PDO connection settings
    │   └── cors.php           CORS headers + JSON response helper
    ├── api/
    │   ├── courses.php        GET  /api/courses.php
    │   ├── internships.php    GET  /api/internships.php
    │   ├── testimonials.php   GET  /api/testimonials.php
    │   └── enquiries.php      POST /api/enquiries.php
    └── database/
        └── lamda_tech_softics.sql   Schema + seed data
```

---

## 1. Prerequisites

- [Node.js](https://nodejs.org/) 18+ and npm
- [XAMPP](https://www.apachefriends.org/) (Apache + PHP + MySQL) — or any local
  PHP 8+/MySQL setup
- [VS Code](https://code.visualstudio.com/) with the **PHP Intelephense** and
  **ES7+ React/Redux/React-Native snippets** extensions recommended

---

## 2. Set up the backend (PHP + MySQL / XAMPP)

1. **Copy the backend into htdocs.**
   Copy the whole `backend/` folder into your XAMPP `htdocs` directory, inside
   a folder named `lamda-tech-softics`, so the path looks like:

   ```
   C:\xampp\htdocs\lamda-tech-softics\backend\...      (Windows)
   /Applications/XAMPP/htdocs/lamda-tech-softics/backend/...  (macOS)
   /opt/lampp/htdocs/lamda-tech-softics/backend/...     (Linux)
   ```

2. **Start Apache and MySQL** from the XAMPP Control Panel.

3. **Create the database.**
   Open [http://localhost/phpmyadmin](http://localhost/phpmyadmin), click
   **Import**, choose `backend/database/lamda_tech_softics.sql`, and click
   **Go**. This creates the `lamda_tech_softics` database with all 4 tables
   and seed data (courses, internships, testimonials).

   Or from a terminal:
   ```bash
   mysql -u root -p < backend/database/lamda_tech_softics.sql
   ```

4. **Check the DB credentials.**
   Open `backend/config/database.php`. The defaults match a stock XAMPP
   install (`host: localhost`, `user: root`, `password: ''`). Update them if
   your MySQL setup differs.

5. **Test the API directly** by visiting, in your browser:
   ```
   http://localhost/lamda-tech-softics/backend/api/courses.php
   http://localhost/lamda-tech-softics/backend/api/internships.php
   http://localhost/lamda-tech-softics/backend/api/testimonials.php
   ```
   Each should return a JSON response like `{"success":true,"data":[...]}`.

---

## 3. Set up the frontend (React + Vite)

1. Open the `frontend/` folder in VS Code.
2. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Open the URL Vite prints (usually `http://localhost:5173`).

The dev server is already configured (`vite.config.js`) to proxy any request
to `/api/...` through to
`http://localhost/lamda-tech-softics/backend/api/...`, so the React app and
PHP backend talk to each other with no extra setup. If your backend folder
name or port differs, update the `target` in `vite.config.js`.

> **Note:** The site works even before the backend is running — every page
> falls back to sample data in `src/data/sampleData.js` so you always have
> something to look at. Once XAMPP is running and the DB is imported, live
> data automatically takes over.

---

## 4. Building for production

```bash
cd frontend
npm run build
```

This outputs a static `frontend/dist/` folder. Deploy it to any static host
(or copy it into another folder inside XAMPP's `htdocs`) alongside the
`backend/` folder. Before building, create a `frontend/.env` file so the app
knows where the live backend is:

```
VITE_API_BASE_URL=http://your-domain-or-ip/lamda-tech-softics/backend/api
```

---

## 5. Customizing content

- **Courses / Internships / Testimonials:** edit rows directly in MySQL
  (via phpMyAdmin) — the frontend fetches from the database automatically.
  You can also edit `backend/database/lamda_tech_softics.sql` before
  importing for a fresh setup.
- **WhatsApp number:** update `WHATSAPP_NUMBER` in
  `frontend/src/components/WhatsAppButton.jsx` and the link in
  `frontend/src/pages/Contact.jsx`.
- **Contact details / address / map:** edit `frontend/src/pages/Contact.jsx`.
- **Colors / fonts (design tokens):** edit the `:root` variables at the top
  of `frontend/src/index.css`.

---

## 6. API reference

| Method | Endpoint                | Description                          |
|--------|--------------------------|---------------------------------------|
| GET    | `/api/courses.php`       | List all courses (optional `?category=`) |
| GET    | `/api/internships.php`   | List all internship programs          |
| GET    | `/api/testimonials.php`  | List all student testimonials         |
| POST   | `/api/enquiries.php`     | Submit a contact/course enquiry       |

**POST `/api/enquiries.php` body:**
```json
{
  "name": "Student Name",
  "email": "student@example.com",
  "phone": "9876543210",
  "course": "React JS",
  "message": "Optional message"
}
```

All endpoints return JSON with a `success` boolean, use prepared statements
(no SQL injection risk), validate input server-side, and return proper HTTP
status codes (200, 201, 400, 405, 422, 500).

---

## 7. Troubleshooting

- **"Database connection failed"** → confirm MySQL is running in XAMPP and
  the credentials in `backend/config/database.php` are correct.
- **CORS errors in the browser console** → confirm the frontend origin
  (`http://localhost:5173` by default) is listed in
  `backend/config/cors.php`, or run the frontend through the same Vite proxy
  described above.
- **Blank course/internship/testimonial lists** → the SQL file may not have
  been imported yet; the site will show sample placeholder content in the
  meantime.
