import { NavItem } from '../types/nav';

export const navItems: NavItem[] = [
  {
    path: '/',
    label: 'Overview',
    shortLabel: 'Home',
    description: 'System telemetry, tech stack & builds'
  },
  {
    path: '/projects',
    label: 'Projects',
    shortLabel: 'Projects',
    description: 'Engineering case studies'
  },
  {
    path: '/certifications',
    label: 'Certifications',
    shortLabel: 'Certs',
    description: 'Verified technical credentials'
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
