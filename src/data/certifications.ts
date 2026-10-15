import { Certification } from '../types/certification';

/**
 * Technical Credentials & Continuous Education
 * Curated certifications, active curricula, and academic program.
 */
export const certificationsData: Certification[] = [
  {
    id: 'fcc-rwd',
    title: 'Responsive Web Design Certification',
    shortTitle: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    issuerCategory: 'Frontend Foundations',
    issueDate: '2024',
    credentialId: 'FCC-RWD-VERIFIED',
    skills: ['HTML5', 'CSS3', 'Flexbox', 'CSS Grid', 'Mobile First'],
    verificationUrl: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/',
    status: 'Completed',
    image: '/certifications/cert-rwd.jpg',
    description: 'Mastery of modern semantic HTML5, accessible CSS layouts, flexbox, and responsive CSS grid architectures.'
  },
  {
    id: 'fcc-js-algorithms',
    title: 'JavaScript Algorithms & Data Structures',
    shortTitle: 'JavaScript & Algorithms',
    issuer: 'freeCodeCamp',
    issuerCategory: 'Core Programming',
    issueDate: '2024',
    credentialId: 'FCC-JS-VERIFIED',
    skills: ['JavaScript ES6+', 'Algorithms', 'Data Structures', 'OOP', 'Functional'],
    verificationUrl: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/',
    status: 'Completed',
    image: '/certifications/cert-js.jpg',
    description: 'ES6+ fundamentals, algorithmic problem solving, computational logic, and memory-efficient data structures.'
  },
  {
    id: 'fcc-frontend-libraries',
    title: 'Front End Development Libraries',
    shortTitle: 'Front End Libraries (React)',
    issuer: 'freeCodeCamp',
    issuerCategory: 'UI Architecture',
    issueDate: '2025',
    credentialId: 'FCC-FEL-ACTIVE',
    skills: ['React', 'Redux', 'Component State', 'Sass', 'Single Page Apps'],
    verificationUrl: 'https://www.freecodecamp.org/learn/front-end-development-libraries/',
    status: 'In Progress',
    image: '/certifications/cert-frontend.jpg',
    description: 'Engineering interactive, reactive user interfaces with modern React, hooks, state containers, and reusable UI modules.'
  },
  {
    id: 'fcc-relational-databases',
    title: 'Relational Database & SQL Certification',
    shortTitle: 'Relational Database & SQL',
    issuer: 'freeCodeCamp',
    issuerCategory: 'Database Engineering',
    issueDate: '2025',
    credentialId: 'FCC-DB-ACTIVE',
    skills: ['PostgreSQL', 'SQL', 'Bash CLI', 'Git', 'Schema Normalization'],
    verificationUrl: 'https://www.freecodecamp.org/learn/relational-database/',
    status: 'In Progress',
    image: '/certifications/cert-db.jpg',
    description: 'Comprehensive relational modeling, PostgreSQL queries, bash shell automation, and structured database design.'
  },
  {
    id: 'fcc-backend-apis',
    title: 'Back End Development and APIs',
    shortTitle: 'Back End Dev & APIs',
    issuer: 'freeCodeCamp',
    issuerCategory: 'Backend & Systems',
    issueDate: '2025',
    credentialId: 'FCC-BACKEND-ACTIVE',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'Authentication'],
    verificationUrl: 'https://www.freecodecamp.org/learn/back-end-development-and-apis/',
    status: 'In Progress',
    image: '/certifications/cert-backend.jpg',
    description: 'Server-side API design, Express routing, asynchronous Node.js backends, and persistent NoSQL document stores.'
  },
  {
    id: 'bulsu-bsit',
    title: 'Bachelor of Science in Information Technology',
    shortTitle: 'BS Information Technology',
    issuer: 'Bulacan State University',
    issuerCategory: 'Higher Education',
    issueDate: '2022–2026',
    credentialId: 'BSU-CICT-BSIT',
    skills: ['Full-Stack Dev', 'Software Engineering', 'Networking', 'Databases', 'Information Systems'],
    verificationUrl: 'https://www.bulsu.edu.ph',
    status: 'In Progress',
    image: '/certifications/cert-academic.jpg',
    description: 'Four-year degree program providing rigorous foundational depth across software engineering, systems design, and applied IT.'
  }
];
