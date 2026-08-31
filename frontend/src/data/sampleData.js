// Fallback content shown when the PHP backend is unreachable (e.g. before
// XAMPP is started, or during frontend-only development). Pages try the
// live API first and fall back to this so the site never looks broken.

export const CATEGORY = {
  PROGRAMMING: 'Programming',
  WEB: 'Web Development',
  DATA_AI: 'Data & AI',
  MARKETING: 'Digital Marketing',
  DESIGN: 'Design',
};

export const sampleCourses = [
  { id: 1, course_name: 'Python Programming', description: 'From core syntax to real automation and backend scripting.', duration: '2 Months', level: 'Beginner', technologies: 'Python, OOP, Flask', category: CATEGORY.PROGRAMMING, icon: 'py' },
  { id: 2, course_name: 'C Programming', description: 'Build a strong programming foundation with hands-on logic building.', duration: '6 Weeks', level: 'Beginner', technologies: 'C, GDB, DSA Basics', category: CATEGORY.PROGRAMMING, icon: 'c' },
  { id: 3, course_name: 'C++', description: 'Object-oriented programming and data structures for real projects.', duration: '2 Months', level: 'Beginner', technologies: 'C++, STL, OOP', category: CATEGORY.PROGRAMMING, icon: 'cpp' },
  { id: 4, course_name: 'Java', description: 'Core and advanced Java for enterprise-style application development.', duration: '3 Months', level: 'Intermediate', technologies: 'Java, OOP, JDBC', category: CATEGORY.PROGRAMMING, icon: 'jv' },
  { id: 5, course_name: 'HTML & CSS', description: 'Structure and style modern, responsive web pages from scratch.', duration: '3 Weeks', level: 'Beginner', technologies: 'HTML5, CSS3, Flexbox', category: CATEGORY.WEB, icon: 'html' },
  { id: 6, course_name: 'JavaScript', description: 'Make the web interactive with modern, practical JavaScript.', duration: '1 Month', level: 'Beginner', technologies: 'ES6+, DOM, Fetch API', category: CATEGORY.WEB, icon: 'js' },
  { id: 7, course_name: 'React JS', description: 'Build fast, component-driven interfaces the industry actually uses.', duration: '2 Months', level: 'Intermediate', technologies: 'React, Hooks, Router', category: CATEGORY.WEB, icon: 'rx' },
  { id: 8, course_name: 'PHP', description: 'Server-side programming and database-driven web applications.', duration: '2 Months', level: 'Intermediate', technologies: 'PHP, MySQL, REST APIs', category: CATEGORY.WEB, icon: 'php' },
  { id: 9, course_name: 'Full Stack Development', description: 'End-to-end web development: React front end, PHP/MySQL back end.', duration: '4 Months', level: 'Advanced', technologies: 'React, PHP, MySQL, Git', category: CATEGORY.WEB, icon: 'fs' },
  { id: 10, course_name: 'Data Analytics', description: 'Turn raw data into decisions using real business datasets.', duration: '2 Months', level: 'Beginner', technologies: 'Excel, SQL, Power BI', category: CATEGORY.DATA_AI, icon: 'da' },
  { id: 11, course_name: 'Data Science', description: 'Statistics, Python and visualization for real analytical projects.', duration: '3 Months', level: 'Intermediate', technologies: 'Python, Pandas, NumPy', category: CATEGORY.DATA_AI, icon: 'ds' },
  { id: 12, course_name: 'Artificial Intelligence', description: 'Understand and build practical AI-driven applications.', duration: '3 Months', level: 'Advanced', technologies: 'Python, AI Concepts, APIs', category: CATEGORY.DATA_AI, icon: 'ai' },
  { id: 13, course_name: 'Machine Learning', description: 'Train and evaluate models on real-world datasets.', duration: '3 Months', level: 'Advanced', technologies: 'Python, scikit-learn', category: CATEGORY.DATA_AI, icon: 'ml' },
  { id: 14, course_name: 'Digital Marketing', description: 'SEO, social media and paid campaigns that drive real results.', duration: '6 Weeks', level: 'Beginner', technologies: 'SEO, Google Ads, Analytics', category: CATEGORY.MARKETING, icon: 'dm' },
  { id: 15, course_name: 'UI/UX Design', description: 'Design usable, attractive interfaces backed by real user research.', duration: '2 Months', level: 'Beginner', technologies: 'Figma, Wireframing', category: CATEGORY.DESIGN, icon: 'ux' },
  { id: 16, course_name: 'Graphic Design', description: 'Visual design fundamentals for branding and digital media.', duration: '6 Weeks', level: 'Beginner', technologies: 'Photoshop, Illustrator', category: CATEGORY.DESIGN, icon: 'gd' },
  { id: 17, course_name: 'Cyber Security', description: 'Practical fundamentals of protecting systems and networks.', duration: '2 Months', level: 'Intermediate', technologies: 'Networking, Ethical Hacking', category: CATEGORY.PROGRAMMING, icon: 'sec' },
  { id: 18, course_name: 'Cloud Computing', description: 'Deploy and manage applications on modern cloud platforms.', duration: '2 Months', level: 'Intermediate', technologies: 'AWS, Linux, DevOps Basics', category: CATEGORY.PROGRAMMING, icon: 'cl' },
  { id: 19, course_name: 'Advanced Excel', description: 'Formulas, pivot tables and dashboards for workplace analysis.', duration: '3 Weeks', level: 'Beginner', technologies: 'Excel, Pivot Tables, Macros', category: CATEGORY.DATA_AI, icon: 'xl' },
  { id: 20, course_name: 'Tally Prime with GST', description: 'Practical accounting and GST compliance using Tally Prime.', duration: '1 Month', level: 'Beginner', technologies: 'Tally Prime, GST, Accounting', category: CATEGORY.MARKETING, icon: 'tl' },
];

export const sampleInternships = [
  { id: 1, internship_name: 'Python Internship', duration: '6 Weeks', technologies: 'Python, Flask, MySQL', description: 'Work on live automation and backend projects with mentor code reviews.' },
  { id: 2, internship_name: 'Full Stack Development Internship', duration: '8 Weeks', technologies: 'React, PHP, MySQL', description: 'Build and ship a complete web application from database to UI.' },
  { id: 3, internship_name: 'Web Development Internship', duration: '6 Weeks', technologies: 'HTML, CSS, JavaScript', description: 'Design and develop responsive websites for real practice briefs.' },
  { id: 4, internship_name: 'Data Analytics Internship', duration: '6 Weeks', technologies: 'SQL, Excel, Power BI', description: 'Analyze real datasets and present insights the way analysts do at work.' },
  { id: 5, internship_name: 'AI & Machine Learning Internship', duration: '8 Weeks', technologies: 'Python, scikit-learn', description: 'Build and evaluate ML models on guided, real-world problem sets.' },
  { id: 6, internship_name: 'Digital Marketing Internship', duration: '4 Weeks', technologies: 'SEO, Social Media, Ads', description: 'Plan and run real campaigns and measure their performance.' },
  { id: 7, internship_name: 'UI/UX Internship', duration: '6 Weeks', technologies: 'Figma, User Research', description: 'Design interfaces for real briefs, from wireframe to prototype.' },
];

export const sampleTestimonials = [
  { id: 1, student_name: 'Arun Kumar', course: 'Python Programming', rating: 5, testimonial: 'The practical training helped me understand Python much better. The trainer explained everything step by step.' },
  { id: 2, student_name: 'Divya S', course: 'Full Stack Development', rating: 5, testimonial: 'Building a real project during the course gave me the confidence to clear my first job interview.' },
  { id: 3, student_name: 'Karthik R', course: 'React JS', rating: 4, testimonial: "I liked how the trainers focused on real projects instead of just theory. It's very practical." },
  { id: 4, student_name: 'Priya M', course: 'Data Analytics', rating: 5, testimonial: 'The mentors were always available to clear doubts. The internship after the course was extremely useful.' },
  { id: 5, student_name: 'Suresh Babu', course: 'Digital Marketing', rating: 5, testimonial: 'From zero knowledge to running my own campaigns — Lamda Tech Softics made it simple and practical.' },
  { id: 6, student_name: 'Meena V', course: 'UI/UX Design', rating: 4, testimonial: 'Great structure — every class built on the last one, and the final portfolio project really stood out.' },
];
