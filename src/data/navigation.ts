import { NavItem } from '../types/nav';

export const navItems: NavItem[] = [
  {
    path: '/',
    label: 'Home',
    shortLabel: 'Home',
    description: 'Overview & single-screen telemetry'
  },
  {
    path: '/projects',
    label: 'Projects',
    shortLabel: 'Projects',
    description: 'Engineering case studies'
  },
  {
    path: '/experience',
    label: 'Experience',
    shortLabel: 'Experience',
    description: 'Engineering milestones & trajectory'
  },
  {
    path: '/stack',
    label: 'Stack',
    shortLabel: 'Stack',
    description: '5-layer architecture matrix'
  },
  {
    path: '/certifications',
    label: 'Certifications',
    shortLabel: 'Certs',
    description: 'Curriculum & credentials'
  },
  {
    path: '/about',
    label: 'About',
    shortLabel: 'About',
    description: 'Background & education'
  },
  {
    path: '/contact',
    label: 'Contact',
    shortLabel: 'Contact',
    description: 'Direct communication'
  }
];
