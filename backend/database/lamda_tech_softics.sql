-- =========================================================================
-- Lamda Tech Softics - Database Schema
-- Import this file in phpMyAdmin (XAMPP) or via:
--   mysql -u root -p < lamda_tech_softics.sql
-- =========================================================================

CREATE DATABASE IF NOT EXISTS lamda_tech_softics
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE lamda_tech_softics;

-- -------------------------------------------------------------------------
-- courses
-- -------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS courses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  course_name VARCHAR(150) NOT NULL,
  description TEXT NOT NULL,
  duration VARCHAR(50) NOT NULL,
  level VARCHAR(50) NOT NULL DEFAULT 'Beginner',
  technologies VARCHAR(255) NOT NULL,
  category VARCHAR(80) NOT NULL DEFAULT 'Programming',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- -------------------------------------------------------------------------
-- internships
-- -------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS internships (
  id INT AUTO_INCREMENT PRIMARY KEY,
  internship_name VARCHAR(150) NOT NULL,
  duration VARCHAR(50) NOT NULL,
  technologies VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- -------------------------------------------------------------------------
-- testimonials
-- -------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS testimonials (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_name VARCHAR(100) NOT NULL,
  course VARCHAR(150) NOT NULL,
  testimonial TEXT NOT NULL,
  rating TINYINT NOT NULL DEFAULT 5 CHECK (rating BETWEEN 1 AND 5),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- -------------------------------------------------------------------------
-- enquiries
-- -------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS enquiries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  course VARCHAR(150) NOT NULL,
  message TEXT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- =========================================================================
-- Seed data
-- =========================================================================

INSERT INTO courses (course_name, description, duration, level, technologies, category) VALUES
('Python Programming', 'From core syntax to real automation and backend scripting.', '2 Months', 'Beginner', 'Python, OOP, Flask', 'Programming'),
('C Programming', 'Build a strong programming foundation with hands-on logic building.', '6 Weeks', 'Beginner', 'C, GDB, DSA Basics', 'Programming'),
('C++', 'Object-oriented programming and data structures for real projects.', '2 Months', 'Beginner', 'C++, STL, OOP', 'Programming'),
('Java', 'Core and advanced Java for enterprise-style application development.', '3 Months', 'Intermediate', 'Java, OOP, JDBC', 'Programming'),
('HTML & CSS', 'Structure and style modern, responsive web pages from scratch.', '3 Weeks', 'Beginner', 'HTML5, CSS3, Flexbox', 'Web Development'),
('JavaScript', 'Make the web interactive with modern, practical JavaScript.', '1 Month', 'Beginner', 'ES6+, DOM, Fetch API', 'Web Development'),
('React JS', 'Build fast, component-driven interfaces the industry actually uses.', '2 Months', 'Intermediate', 'React, Hooks, Router', 'Web Development'),
('PHP', 'Server-side programming and database-driven web applications.', '2 Months', 'Intermediate', 'PHP, MySQL, REST APIs', 'Web Development'),
('Full Stack Development', 'End-to-end web development: React front end, PHP/MySQL back end.', '4 Months', 'Advanced', 'React, PHP, MySQL, Git', 'Web Development'),
('Data Analytics', 'Turn raw data into decisions using real business datasets.', '2 Months', 'Beginner', 'Excel, SQL, Power BI', 'Data & AI'),
('Data Science', 'Statistics, Python and visualization for real analytical projects.', '3 Months', 'Intermediate', 'Python, Pandas, NumPy', 'Data & AI'),
('Artificial Intelligence', 'Understand and build practical AI-driven applications.', '3 Months', 'Advanced', 'Python, AI Concepts, APIs', 'Data & AI'),
('Machine Learning', 'Train and evaluate models on real-world datasets.', '3 Months', 'Advanced', 'Python, scikit-learn', 'Data & AI'),
('Digital Marketing', 'SEO, social media and paid campaigns that drive real results.', '6 Weeks', 'Beginner', 'SEO, Google Ads, Analytics', 'Digital Marketing'),
('UI/UX Design', 'Design usable, attractive interfaces backed by real user research.', '2 Months', 'Beginner', 'Figma, Wireframing', 'Design'),
('Graphic Design', 'Visual design fundamentals for branding and digital media.', '6 Weeks', 'Beginner', 'Photoshop, Illustrator', 'Design'),
('Cyber Security', 'Practical fundamentals of protecting systems and networks.', '2 Months', 'Intermediate', 'Networking, Ethical Hacking', 'Programming'),
('Cloud Computing', 'Deploy and manage applications on modern cloud platforms.', '2 Months', 'Intermediate', 'AWS, Linux, DevOps Basics', 'Programming'),
('Advanced Excel', 'Formulas, pivot tables and dashboards for workplace analysis.', '3 Weeks', 'Beginner', 'Excel, Pivot Tables, Macros', 'Data & AI'),
('Tally Prime with GST', 'Practical accounting and GST compliance using Tally Prime.', '1 Month', 'Beginner', 'Tally Prime, GST, Accounting', 'Digital Marketing');

INSERT INTO internships (internship_name, duration, technologies, description) VALUES
('Python Internship', '30 Days', 'Python, Flask, MySQL', 'Work on live automation and backend projects with mentor code reviews.'),
('Full Stack Development Internship', '30 Days', 'React, PHP, MySQL', 'Build and ship a complete web application from database to UI.'),
('Web Development Internship', '15 Days', 'HTML, CSS, JavaScript', 'Design and develop responsive websites for real practice briefs.'),
('Data Analytics Internship', '30 Days', 'SQL, Excel, Power BI', 'Analyze real datasets and present insights the way analysts do at work.'),
('AI & Machine Learning Internship', '30 Days', 'Python, scikit-learn', 'Build and evaluate ML models on guided, real-world problem sets.'),
('Digital Marketing Internship', '15 Days', 'SEO, Social Media, Ads', 'Plan and run real campaigns and measure their performance.'),
('UI/UX Internship', '15 Days', 'Figma, User Research', 'Design interfaces for real briefs, from wireframe to prototype.');

INSERT INTO testimonials (student_name, course, testimonial, rating) VALUES
('Arun Kumar', 'Python Programming', 'The practical training helped me understand Python much better. The trainer explained everything step by step.', 5),
('Divya S', 'Full Stack Development', 'Building a real project during the course gave me the confidence to clear my first job interview.', 5),
('Karthik R', 'React JS', 'I liked how the trainers focused on real projects instead of just theory. It is very practical.', 4),
('Priya M', 'Data Analytics', 'The mentors were always available to clear doubts. The internship after the course was extremely useful.', 5),
('Suresh Babu', 'Digital Marketing', 'From zero knowledge to running my own campaigns, Lamda Tech Softics made it simple and practical.', 5),
('Meena V', 'UI/UX Design', 'Great structure, every class built on the last one, and the final portfolio project really stood out.', 4);
