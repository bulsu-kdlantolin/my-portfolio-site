import { NavItem } from '../types/nav';

export const navItems: NavItem[] = [
  {
    path: '/',
    label: 'Overview',
    shortLabel: 'Home',
    badge: '01',
    description: 'System telemetry, tech stack & builds'
  },
  {
    path: '/projects',
    label: 'Projects',
    shortLabel: 'Projects',
    badge: '02',
    description: 'Engineering case studies'
  },
  {
    path: '/about',
    label: 'About',
    shortLabel: 'About',
    badge: '03',
    description: 'Background & education'
  },
  {
    path: '/contact',
    label: 'Contact',
    shortLabel: 'Contact',
    badge: '04',
    description: 'Direct communication'
  }
];
