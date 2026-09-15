import { NavItem } from '../types/nav';

export const navItems: NavItem[] = [
  {
    path: '/',
    label: 'Overview',
    shortLabel: 'Home',
    badge: '01',
    description: 'System telemetry & key builds'
  },
  {
    path: '/projects',
    label: 'Projects',
    shortLabel: 'Projects',
    badge: '02',
    description: 'Engineering case studies'
  },
  {
    path: '/ai-systems',
    label: 'AI Systems',
    shortLabel: 'AI / RAG',
    badge: '03',
    description: 'Interactive architecture explorer'
  },
  {
    path: '/stack',
    label: 'Stack',
    shortLabel: 'Stack',
    badge: '04',
    description: 'Technologies by layer'
  },
  {
    path: '/how-i-build',
    label: 'How I Build',
    shortLabel: 'Process',
    badge: '05',
    description: '6-stage engineering process'
  },
  {
    path: '/about',
    label: 'About',
    shortLabel: 'About',
    badge: '06',
    description: 'Background & education'
  },
  {
    path: '/contact',
    label: 'Contact',
    shortLabel: 'Contact',
    badge: '07',
    description: 'Direct communication'
  }
];
