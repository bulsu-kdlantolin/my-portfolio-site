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
    image: '/projects/project-sensa.jpg',
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
  },
  {
    id: 'ai-rag-pipeline',
    title: 'Applied AI & RAG Prototyping',
    tagline: 'Deterministic LLM retrieval architecture with vector search and semantic guardrails.',
    category: 'ai-rag',
    categoryLabel: 'AI & Systems Engineering',
    status: 'In Development',
    featured: true,
    image: '/projects/project-rag.jpg',
    summary: 'A retrieval-augmented generation pipeline designed to keep language models grounded in custom knowledge bases with verifiable source citations and token telemetry.',
    technologies: ['Python', 'OpenAI API', 'LangChain', 'Vector Search', 'Prompt Guardrails', 'PostgreSQL'],
    problem: 'Standard generative AI outputs suffer from hallucinations and inconsistent formatting when queried on complex domain documentation without contextual grounding.',
    goal: 'Build an inspectable RAG pipeline with semantic document chunking, vector similarity retrieval, and strict guardrails that sanitize outputs before delivery.',
    architecture: {
      overview: 'Modular Python pipeline with document parsing, text chunking, OpenAI embeddings generation, vector indexing, and structured prompt orchestration.',
      flow: [
        'Domain markdown and PDF documents are parsed and chunked with token overlap.',
        'High-dimensional embeddings are generated and stored in a vector similarity store.',
        'User queries trigger semantic vector search to retrieve top-k context passages.',
        'Synthesized prompts with grounding rules are evaluated by OpenAI models and output guardrails.'
      ]
    },
    keyDecisions: [
      {
        title: 'Semantic Document Chunking',
        rationale: 'Preserves conceptual coherence by chunking along header hierarchies rather than arbitrary character counts.'
      },
      {
        title: 'Two-Tier Guardrail Verification',
        rationale: 'Validates both input safety and output schema compliance before returning responses to client applications.'
      }
    ],
    challenges: [
      {
        challenge: 'Retrieval Latency and Token Overhead',
        solution: 'Implemented similarity score filtering to prune irrelevant context and caching for repeated semantic queries.'
      }
    ],
    learnings: [
      'Deepened practical expertise in embedding models, vector spaces, and prompt engineering.',
      'Designed deterministic fallback behaviors when LLM responses violate JSON schemas.'
    ],
    links: {
      github: 'https://github.com/KianDavey',
      docs: '#rag-overview'
    }
  },
  {
    id: 'portfolio-hub',
    title: 'Developer Workspace & Portfolio',
    tagline: 'High-contrast portfolio and engineering dashboard with circular theme transitions.',
    category: 'web-app',
    categoryLabel: 'Full-Stack Web App',
    status: 'Completed',
    featured: true,
    image: '/projects/project-portfolio.jpg',
    summary: 'A bespoke personal portfolio and developer cockpit featuring an interactive capability matrix, collapsible career roadmap, and dual-mode theme transitions.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'CSS3', 'Git'],
    problem: 'Generic portfolio templates look generic, lack interactive architectural depth, and fail to honestly represent hands-on engineering skills.',
    goal: 'Create a state-of-the-art developer platform with custom interactive widgets, seamless view transitions, and accessible navigation.',
    architecture: {
      overview: 'Modular React 19 application bundled with Vite, featuring custom design tokens, dark/light theme state sync, and responsive layout grids.',
      flow: [
        'Vite bundles TypeScript components with optimized asset hashing.',
        'ThemeContext manages system preference sync with circular view transition ripples.',
        'Dedicated route views handle Project case studies, roadmap timeline, and skill telemetry.'
      ]
    },
    keyDecisions: [
      {
        title: 'Zero Third-Party UI Bloat',
        rationale: 'Engineered custom components and vanilla CSS token architecture for maximum performance and sub-100ms load times.'
      },
      {
        title: 'Accessible Dialog & Drawers',
        rationale: 'Implemented keyboard focus traps and ESC dismissals for all interactive modal drawers.'
      }
    ],
    challenges: [
      {
        challenge: 'Circular View Transition Spread',
        solution: 'Leveraged native document.startViewTransition with fallback ripple geometry for smooth theme switching.'
      }
    ],
    learnings: [
      'Fine-tuned advanced CSS layouts with subgrid and flexbox containment.',
      'Optimized asset loading and responsive imagery across mobile and desktop rails.'
    ],
    links: {
      github: 'https://github.com/KianDavey',
      live: 'https://kiandavey.dev'
    }
  }
];
