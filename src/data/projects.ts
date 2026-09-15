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
  },
  {
    id: 'donex-planner',
    title: 'DoNex Planner',
    tagline: 'Structured personal planner emphasizing predictable task hierarchies and distraction-free usability.',
    category: 'web-app',
    categoryLabel: 'Full-Stack Web App',
    status: 'Completed',
    featured: true,
    summary: 'A productivity and schedule planning tool engineered for clarity, predictable state transitions, and responsive task tracking.',
    technologies: ['React', 'TypeScript', 'CSS Modules', 'State Persistence'],
    problem: 'Many productivity tools overwhelm users with excessive configuration, high visual noise, and unpredictable synchronization states.',
    goal: 'Create a clean, focused task and schedule management workspace that prioritizes visual hierarchy, rapid keyboard interactions, and dependable persistence.',
    architecture: {
      overview: 'Built around a modular React component tree with strong TypeScript interfaces managing task states, priorities, and category tags with persistent local caching.',
      flow: [
        'User defines categories, milestones, and daily planning schedules.',
        'Local state updates optimistically with validated TypeScript models.',
        'Changes persist safely through structured local storage serialization.',
        'Responsive layout reorganizes from multi-column boards into focused task lists on mobile.'
      ]
    },
    keyDecisions: [
      {
        title: 'TypeScript-Driven Task Modeling',
        rationale: 'Defined strict union types for task status, recurrence, and priority levels to prevent runtime invalid states.'
      },
      {
        title: 'Distraction-Free Visual Hierarchy',
        rationale: 'Applied neutral surfaces and restrained color accents to keep user focus squarely on scheduled deliverables.'
      }
    ],
    challenges: [
      {
        challenge: 'Fluid Responsive Layout Without Layout Shift',
        solution: 'Used CSS Grid with auto-fit minmax columns and clamp-based typography to avoid jarring reflows.'
      }
    ],
    learnings: [
      'Gained deep discipline in state modeling and component decoupling in React.',
      'Learned the importance of defensive type checking for user-generated data models.'
    ],
    links: {
      github: 'https://github.com/KianDavey'
    }
  },
  {
    id: 'ai-rag-pipeline',
    title: 'AI / RAG Contextual Assistant',
    tagline: 'Retrieval-Augmented Generation system for accurate, document-grounded question answering.',
    category: 'ai-rag',
    categoryLabel: 'Applied AI & RAG',
    status: 'Active',
    featured: true,
    summary: 'An end-to-end question-answering architecture using vector embeddings and semantic search to ground LLM responses in verified local documentation.',
    technologies: ['Python', 'OpenAI API', 'Vector Embeddings', 'Vector Database', 'React', 'TypeScript'],
    problem: 'Standard large language models produce hallucinations and lack access to private, domain-specific, or localized information.',
    goal: 'Build an educational and practical RAG pipeline that extracts text from documents, computes high-dimensional embeddings, queries a vector index, and prompts an LLM with strictly grounded context.',
    architecture: {
      overview: 'A dual-phase architecture: an offline ingestion pipeline for document chunking and vector indexing, paired with an online query retrieval and streaming synthesis pipeline.',
      flow: [
        'Raw documentation is partitioned into semantically coherent text chunks with controlled overlap.',
        'Chunks are converted into high-dimensional vector embeddings via OpenAI embedding models.',
        'Vectors and metadata are indexed in a vector store for fast similarity search.',
        'Incoming user queries are embedded and matched against top-k similar chunks using cosine similarity.',
        'Retrieved chunks are injected into a constrained system prompt, producing an accurate streamed response with citations.'
      ]
    },
    keyDecisions: [
      {
        title: 'Chunk Size vs. Context Window Optimization',
        rationale: 'Chose a 500-token chunk window with 50-token overlap to maintain complete ideas while avoiding retrieval clutter.'
      },
      {
        title: 'Hallucination Guardrails in System Prompt',
        rationale: 'Instructed the LLM to explicitly report when query answers cannot be found in the provided context, preventing fabrication.'
      }
    ],
    challenges: [
      {
        challenge: 'Balancing Retrieval Speed with Context Richness',
        solution: 'Indexed metadata (document title, section, page number) alongside embeddings to allow filtered querying before scoring.'
      }
    ],
    learnings: [
      'Deep understanding of embedding spaces, cosine distance metrics, and vector database mechanics.',
      'Practical experience structuring prompt templates for structured, reproducible LLM outputs.',
      'Awareness of latency, token consumption, and architectural tradeoffs in AI applications.'
    ],
    links: {
      github: 'https://github.com/KianDavey',
      docs: '/ai-systems'
    }
  },
  {
    id: 'frontend-systems',
    title: 'Frontend Systems & Interface Builds',
    tagline: 'Curated collection of responsive, accessible web applications and interface challenges.',
    category: 'frontend',
    categoryLabel: 'Frontend Engineering',
    status: 'Completed',
    featured: false,
    summary: 'A series of precision-crafted web interfaces and Frontend Mentor challenges focusing on semantic HTML, clean CSS architecture, and fluid responsiveness.',
    technologies: ['HTML5', 'CSS3 Architecture', 'JavaScript', 'TypeScript', 'React'],
    problem: 'Many contemporary web interfaces rely excessively on heavy frameworks while neglecting core web fundamentals like semantic landmarks, fluid typography, and keyboard accessibility.',
    goal: 'Demonstrate mastery of core browser technologies by building pixel-accurate, accessible, and lightweight interfaces that scale seamlessly across device sizes.',
    architecture: {
      overview: 'Modular component-based architecture adhering to CSS custom property tokens, semantic HTML5 structuring, and progressive enhancement.',
      flow: [
        'Semantic HTML foundation establishes landmark roles and logical heading levels.',
        'Custom property design token system drives typography, color contrast, and spacing.',
        'Layouts respond smoothly using modern Flexbox and Grid without unnecessary breakpoint bloat.'
      ]
    },
    keyDecisions: [
      {
        title: 'Zero-Dependency Vanilla CSS Foundation',
        rationale: 'Crafted custom CSS tokens rather than heavy external UI kits to maintain full control over performance and specificity.'
      }
    ],
    challenges: [
      {
        challenge: 'Universal Keyboard Navigation & Focus Ring Clarity',
        solution: 'Implemented consistent outline-offset focus rings and verified natural tab orders across all interactive components.'
      }
    ],
    learnings: [
      'Deepened fluency in modern CSS layout techniques (clamp(), subgrid, aspect-ratio).',
      'Hands-on understanding of accessibility standards, DOM tree optimization, and responsive design.'
    ],
    links: {
      github: 'https://github.com/KianDavey'
    }
  }
];
