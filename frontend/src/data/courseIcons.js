// Course name -> logo file inside frontend/public/tech/
// To change a logo: replace the file name here, or drop a new .svg/.png
// into public/tech/ and point to it. Courses not listed here fall back to
// the small text badge (e.g. "xl", "tl").
const LOGOS = {
  'Python Programming': 'python.svg',
  'C Programming': 'c.svg',
  'C++': 'cplusplus.svg',
  'Java': 'java.svg',
  'HTML & CSS': 'html5.svg',
  'JavaScript': 'javascript.svg',
  'React JS': 'react.svg',
  'PHP': 'php.svg',
  'Full Stack Development': 'mysql.svg',
  'Data Analytics': 'pandas.svg',
  'Data Science': 'pandas.svg',
  'Artificial Intelligence': 'tensorflow.svg',
  'Machine Learning': 'scikitlearn.svg',
  'Digital Marketing': 'google.svg',
  'UI/UX Design': 'figma.svg',
  'Graphic Design': 'photoshop.svg',
  'Cyber Security': 'linux.svg',
  'Cloud Computing': 'amazonwebservices.svg',
};

export function getCourseLogo(courseName) {
  const file = LOGOS[courseName];
  return file ? `/tech/${file}` : null;
}
