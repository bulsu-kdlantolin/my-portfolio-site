import { TechTier } from '../types/tech';

export const stackData: TechTier[] = [
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    badge: 'LAYER 01 // CLIENT INTERFACE',
    description: 'Building responsive, accessible, and type-safe user interfaces with clean component architectures and predictable state flows.',
    skills: [
      {
        name: 'React',
        role: 'Component Architecture & State',
        experienceContext: 'Used as the core view library for SPAs and dashboards, leveraging custom hooks, state trees, and modern React patterns.',
        tags: ['Hooks', 'Context', 'Component Lifecycle']
      },
      {
        name: 'TypeScript',
        role: 'Static Typing & Interface Contracts',
        experienceContext: 'Primary language for modern web applications. Applied across client components, data models, and API boundary definitions.',
        tags: ['Generics', 'Union Types', 'Strict Null Checks']
      },
      {
        name: 'JavaScript (ESNext)',
        role: 'Core Language Fundamentals',
        experienceContext: 'Deep understanding of event loops, asynchronous programming, DOM APIs, and modern ES6+ language capabilities.',
        tags: ['Async/Await', 'Closures', 'ES Modules']
      },
      {
        name: 'CSS3 & Modern Layouts',
        role: 'Styling & Responsive Systems',
        experienceContext: 'Creating bespoke architectural layouts using Flexbox, CSS Grid, custom properties (CSS variables), and fluid clamp() typography.',
        tags: ['CSS Grid', 'Flexbox', 'Tokens', 'Transitions']
      },
      {
        name: 'HTML5 Semantic Markup',
        role: 'Document Structure & Accessibility',
        experienceContext: 'Structuring pages with proper landmark elements, heading hierarchies, form validations, and keyboard navigation support.',
        tags: ['Semantic Roles', 'ARIA Basics', 'Form Controls']
      }
    ]
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    badge: 'LAYER 02 // SERVER & SERVICES',
    description: 'Creating structured server applications, clean RESTful endpoints, and middleware to orchestrate data flows securely.',
    skills: [
      {
        name: 'Node.js',
        role: 'Runtime Environment',
        experienceContext: 'Executing server-side JavaScript applications, background tasks, automation scripts, and RESTful service backends.',
        tags: ['Event-Driven', 'npm Ecosystem', 'File System APIs']
      },
      {
        name: 'Express.js',
        role: 'API Framework & Middleware',
        experienceContext: 'Building REST endpoints, request validation pipelines, error handling middleware, and CORS configuration.',
        tags: ['Routing', 'Middleware Pipelines', 'REST Contracts']
      }
    ]
  },
  {
    id: 'database',
    title: 'Databases & Relational Systems',
    badge: 'LAYER 03 // PERSISTENCE & DATA INTEGRITY',
    description: 'Modeling data entities, writing structured SQL queries, and ensuring data integrity through relational constraints.',
    skills: [
      {
        name: 'SQL (Relational Databases)',
        role: 'Schema Design & Data Retrieval',
        experienceContext: 'Core competency studied through BS IT curriculum and applied projects. Designing normalized tables, primary/foreign keys, joins, and indexing.',
        tags: ['Schema Normalization', 'Complex Joins', 'Data Integrity', 'DDL/DML']
      },
      {
        name: 'Supabase / PostgreSQL Basics',
        role: 'Cloud Relational Persistence',
        experienceContext: 'Utilized for authentication, user profiles, and structured relational persistence in web and extension projects.',
        tags: ['Postgres', 'Row Level Security', 'Auth Integration']
      }
    ]
  },
  {
    id: 'ai-engineering',
    title: 'Applied AI Engineering',
    badge: 'LAYER 04 // MODELS, EMBEDDINGS & RAG',
    description: 'Integrating machine learning models and semantic search architectures into real-world software products.',
    skills: [
      {
        name: 'Python',
        role: 'AI Scripting & Data Pipelines',
        experienceContext: 'Primary language for developing AI experiments, document processing pipelines, embedding generation, and API integrations.',
        tags: ['Data Processing', 'API Clients', 'Automation']
      },
      {
        name: 'OpenAI API & LLM Orchestration',
        role: 'Generative Intelligence',
        experienceContext: 'Interfacing with GPT models, managing system prompts, structured JSON schema outputs, streaming completions, and parameter tuning.',
        tags: ['ChatCompletions', 'Structured Outputs', 'Streaming Responses']
      },
      {
        name: 'Vector Embeddings & Semantic Search',
        role: 'High-Dimensional Knowledge Representation',
        experienceContext: 'Generating text embeddings (e.g., text-embedding-3-small), indexing high-dimensional vectors, and computing cosine distance for similarity matching.',
        tags: ['Cosine Similarity', 'Vector Spaces', 'Semantic Indexing']
      },
      {
        name: 'RAG (Retrieval-Augmented Generation)',
        role: 'Knowledge-Grounded Systems',
        experienceContext: 'Engineering end-to-end question answering over private documentation by combining chunking, retrieval, and prompt injection.',
        tags: ['Chunk Overlap', 'Context Window Injection', 'Hallucination Mitigation']
      },
      {
        name: 'Vector Databases',
        role: 'Vector Indexing & Retrieval',
        experienceContext: 'Exploring vector storage tools and index concepts (e.g., ChromaDB, Pinecone, pgvector) to enable fast similarity search.',
        tags: ['Top-K Nearest Neighbors', 'Metadata Filtering']
      },
      {
        name: 'Hugging Face',
        role: 'Open-Source Models & Pipelines',
        experienceContext: 'Exploring pre-trained transformers, tokenizers, open-source model weights, and inference pipelines for specialized AI tasks.',
        tags: ['Transformers', 'Tokenization', 'Inference']
      }
    ]
  },
  {
    id: 'workflow',
    title: 'Tools & Workflow',
    badge: 'LAYER 05 // VELOCITY & TOOLING',
    description: 'Modern development tools and responsible AI-assisted workflows used to ship clean, tested code quickly.',
    skills: [
      {
        name: 'Git & GitHub',
        role: 'Version Control & Code Collaboration',
        experienceContext: 'Daily source control, branching strategies, commit cleanliness, and repository management.',
        tags: ['Branching', 'PRs', 'Merge Conflict Resolution']
      },
      {
        name: 'AI-Assisted Development (Cursor, Claude Code)',
        role: 'Engineering Velocity Leverage',
        experienceContext: 'Using AI development environments to accelerate boilerplate, explore edge cases, and refactor while retaining strict human control over architecture.',
        tags: ['Prompted Refactoring', 'Test Generation', 'Architectural Guidance']
      },
      {
        name: 'VS Code & Chrome DevTools',
        role: 'Development & Inspection',
        experienceContext: 'In-browser debugging, network payload inspection, breakpoint stepping, and performance profiling.',
        tags: ['DOM Inspection', 'Network Analysis', 'Console Debugging']
      },
      {
        name: 'Vite',
        role: 'Build Tooling & Bundling',
        experienceContext: 'Rapid development server, instant hot module replacement (HMR), and optimized production rollups.',
        tags: ['Fast HMR', 'Rollup Plugins', 'TypeScript Bundling']
      }
    ]
  }
];
