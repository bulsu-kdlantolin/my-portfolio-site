import { TechTier } from '../types/tech';

export const stackData: TechTier[] = [
  {
    id: 'frontend',
    title: 'Frontend & Client Architecture',
    badge: 'LAYER 01 // CLIENT INTERFACE',
    skills: [
      {
        name: 'TypeScript',
        role: 'Primary Typed Language',
        logo: '/logos/typescript.svg',
        isMonochrome: false,
        status: 'Core',
        isPrimary: true
      },
      {
        name: 'React',
        role: 'UI Library & State',
        logo: '/logos/react.svg',
        isMonochrome: false,
        status: 'Core',
        isPrimary: true
      },
      {
        name: 'Next.js',
        role: 'Full-Stack Framework',
        logo: '/logos/nextjs.svg',
        isMonochrome: true,
        status: 'Framework'
      },
      {
        name: 'JavaScript',
        role: 'Modern ES6+ Standards',
        logo: '/logos/javascript.svg',
        isMonochrome: false,
        status: 'Core'
      },
      {
        name: 'Tailwind CSS',
        role: 'Utility-First Styling',
        logo: '/logos/tailwindcss.svg',
        isMonochrome: false,
        status: 'Styling'
      },
      {
        name: 'HTML5',
        role: 'Semantic Markup & Web',
        logo: '/logos/html5.svg',
        isMonochrome: false,
        status: 'Standard'
      },
      {
        name: 'CSS3',
        role: 'Modern Flexbox & Grid',
        logo: '/logos/css3.svg',
        isMonochrome: false,
        status: 'Standard'
      }
    ]
  },
  {
    id: 'backend',
    title: 'Backend & Server Systems',
    badge: 'LAYER 02 // SERVER & SERVICES',
    skills: [
      {
        name: 'Node.js',
        role: 'Runtime Environment',
        logo: '/logos/nodejs.svg',
        isMonochrome: false,
        status: 'Core',
        isPrimary: true
      },
      {
        name: 'Express.js',
        role: 'REST APIs & Middleware',
        logo: '/logos/express.svg',
        isMonochrome: true,
        status: 'Framework'
      },
      {
        name: 'Python',
        role: 'Scripting & AI Services',
        logo: '/logos/python.svg',
        isMonochrome: false,
        status: 'Core',
        isPrimary: true
      }
    ]
  },
  {
    id: 'database',
    title: 'Databases & Persistence',
    badge: 'LAYER 03 // PERSISTENCE & DATA INTEGRITY',
    skills: [
      {
        name: 'PostgreSQL',
        role: 'Relational Database',
        logo: '/logos/postgresql.svg',
        isMonochrome: false,
        status: 'Primary DB',
        isPrimary: true
      },
      {
        name: 'Supabase',
        role: 'Auth & Cloud Postgres',
        logo: '/logos/supabase.svg',
        isMonochrome: false,
        status: 'BaaS'
      },
      {
        name: 'MySQL',
        role: 'Relational Systems (RDBMS)',
        logo: '/logos/mysql.svg',
        isMonochrome: false,
        status: 'Academic'
      }
    ]
  },
  {
    id: 'ai-engineering',
    title: 'Applied AI & ML Architecture',
    badge: 'LAYER 04 // MODELS, EMBEDDINGS & RAG',
    skills: [
      {
        name: 'OpenAI API',
        role: 'LLM Orchestration & Prompts',
        logo: '/logos/openai.svg',
        isMonochrome: true,
        status: 'Active AI',
        isPrimary: true
      },
      {
        name: 'RAG & Vectors',
        role: 'Retrieval Pipelines & Search',
        logo: '/logos/langchain.svg',
        isMonochrome: true,
        status: 'Architecture',
        isPrimary: true
      },
      {
        name: 'Hugging Face',
        role: 'Open Transformers & Models',
        logo: '/logos/huggingface.svg',
        isMonochrome: true,
        status: 'Models'
      },
      {
        name: 'Ollama',
        role: 'Local Offline Inference',
        logo: '/logos/ollama.svg',
        isMonochrome: true,
        status: 'Local Lab'
      },
      {
        name: 'Deepgram',
        role: 'Speech Recognition Streaming',
        logo: '/logos/deepgram.svg',
        isMonochrome: true,
        status: 'Sensa MV3'
      }
    ]
  },
  {
    id: 'workflow',
    title: 'Developer Tools & Ecosystem',
    badge: 'LAYER 05 // VELOCITY & TOOLING',
    skills: [
      {
        name: 'Git',
        role: 'Version Control',
        logo: '/logos/git.svg',
        isMonochrome: false,
        status: 'Standard',
        isPrimary: true
      },
      {
        name: 'GitHub',
        role: 'Repositories & Collaboration',
        logo: '/logos/github.svg',
        isMonochrome: true,
        status: 'Standard'
      },
      {
        name: 'VS Code',
        role: 'Code Editor',
        logo: '/logos/vscode.svg',
        isMonochrome: false,
        status: 'IDE'
      },
      {
        name: 'Cursor',
        role: 'AI-Powered Development',
        logo: '/logos/cursor.svg',
        isMonochrome: true,
        status: 'Velocity'
      },
      {
        name: 'Vite',
        role: 'Build Tooling & Fast HMR',
        logo: '/logos/vite.svg',
        isMonochrome: false,
        status: 'Bundler'
      },
      {
        name: 'Plasmo (MV3)',
        role: 'Chrome Extension Framework',
        logo: '/logos/plasmo.svg',
        isMonochrome: true,
        status: 'Active Build'
      }
    ]
  }
];

