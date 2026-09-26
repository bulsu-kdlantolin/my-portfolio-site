import { Project } from '../types/project';

export const projectsData: Project[] = [
  {
    id: 'sensa-extension',
    title: 'Sensa Chrome Extension',
    tagline: 'Assistive browser extension with voice navigation and real-time multilingual captions.',
    category: 'accessibility',
    categoryLabel: 'Accessibility & Extension',
    status: 'In Development',
    featured: true,
    summary: 'A browser extension built to assist sensory-impaired users with voice-driven navigation and live multilingual captioning directly inside web pages.',
    technologies: ['Plasmo', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Web Speech API', 'Deepgram'],
    problem: 'Users with visual, motor, or auditory impairments experience friction when navigating standard web pages that lack accessible media transcription or hands-free voice navigation.',
    goal: 'Deliver a lightweight, privacy-conscious Chrome extension using Manifest V3 that enables users to issue spoken navigation commands and view live multilingual captions on demand.',
    architecture: {
      overview: 'Engineered using the Plasmo framework with a Manifest V3 background service worker communicating across isolated content scripts and speech recognition providers.',
      flow: [
        'User initiates audio input via browser microphone or media tab stream.',
        'Speech capture is routed through Web Speech API / Deepgram streaming endpoint.',
        'Transcribed tokens are mapped to navigation commands or rendered in an accessible caption overlay.',
        'User configurations, saved profiles, and language preferences sync securely via Supabase.'
      ]
    },
    keyDecisions: [
      {
        title: 'Plasmo Framework Adoption',
        rationale: 'Plasmo provides native TypeScript support, hot reloading for extension sandboxes, and automated Manifest V3 bundling.'
      },
      {
        title: 'Decoupled Caption Overlay',
        rationale: 'Injected captions reside in an isolated Shadow DOM container to prevent host website CSS from interfering with readability and contrast.'
      },
      {
        title: 'Hybrid Speech Processing',
        rationale: 'Utilizes local Web Speech API where available for zero-latency commands, falling back to Deepgram for complex multilingual captioning.'
      }
    ],
    challenges: [
      {
        challenge: 'Service Worker Lifecycle in Manifest V3',
        solution: 'Manifest V3 terminates idle background workers. Implemented event-driven message dispatching and persistent state hydration via Chrome storage.'
      },
      {
        challenge: 'Audio Stream Permissions Across Dynamic Domains',
        solution: 'Configured clear user-granted permission workflows and graceful fallback states when microphone access is restricted.'
      }
    ],
    learnings: [
      'Mastered Chrome Extension Manifest V3 architecture and security boundaries.',
      'Practical implementation of real-time audio streaming and speech recognition APIs.',
      'Accessibility-first UI design prioritizing high contrast, clear sizing, and keyboard control.'
    ],
    links: {
      github: 'https://github.com/KianDavey',
      docs: '#sensa-overview'
    }
  }
];
