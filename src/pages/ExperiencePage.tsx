import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import {
  GraduationCap,
  Calendar,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Code2,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: 'Active Build' | 'Academic' | 'Applied Research' | 'Curriculum';
  badgeVariant: 'primary' | 'secondary' | 'neutral' | 'teal' | 'status';
  summary: string;
  highlights: string[];
  technologies: string[];
  link?: {
    text: string;
    url: string;
    isInternal?: boolean;
  };
}

const experiences: ExperienceItem[] = [
  {
    id: 'sensa',
    role: 'Lead Developer & Architect',
    organization: 'Sensa Chrome Extension (Active Build)',
    period: '2024 — Present',
    location: 'Bulacan, Philippines · Independent Project',
    type: 'Active Build',
    badgeVariant: 'primary',
    summary:
      'Designing and developing an accessible, real-time live captions and speech-to-text overlay browser extension. Built for low latency, zero external API costs, and full cross-website tab compatibility.',
    highlights: [
      'Architected Chrome Manifest V3 extension leveraging Chrome Offscreen Documents (chrome.offscreen) to execute Web Speech API audio processing outside service worker lifecycle boundaries.',
      'Constructed a floating, draggable glassmorphic caption HUD injected into active DOMs with configurable font sizes, background opacities, and instant drag-repositioning.',
      'Engineered resilient reconnection loops and error-handling routines for microphone permissions, tab focus changes, and speech recognition dropouts.',
      'Designed clean architectural separation between content scripts, background service workers, offscreen documents, and popup telemetry views.'
    ],
    technologies: [
      'Manifest V3',
      'TypeScript',
      'React',
      'Web Speech API',
      'Offscreen Documents',
      'Chrome Extension APIs',
      'Vanilla CSS'
    ],
    link: {
      text: 'View Sensa Case Study',
      url: '/projects',
      isInternal: true
    }
  },
  {
    id: 'bulsu',
    role: 'BS in Information Technology (Student Candidate)',
    organization: 'Bulacan State University',
    period: '2022 — Expected 2026',
    location: 'City of Malolos, Bulacan, Philippines',
    type: 'Academic',
    badgeVariant: 'secondary',
    summary:
      'Undergraduate student approaching graduation, building rigorous foundations in software engineering principles, system analysis, relational database design, network architecture, and computing theory.',
    highlights: [
      'Systems Analysis & Design: Produced comprehensive technical specification documents, data flow diagrams (DFD), entity-relationship models, and system requirement matrices.',
      'Database Management Systems: Mastered relational schema normalization (1NF to 3NF), PostgreSQL/MySQL query tuning, transaction management, and indexing strategies.',
      'Data Structures & Algorithms: Applied core computing structures (trees, graphs, hash tables) and evaluated time/space computational complexities (Big-O analysis).',
      'Team Leadership & Technical Defense: Led student development groups in collaborative web projects, maintaining Git workflow discipline and presenting architectural defenses to faculty.'
    ],
    technologies: [
      'Systems Analysis',
      'PostgreSQL',
      'MySQL',
      'Data Structures & Algorithms',
      'Software Engineering Lifecycles',
      'Git / GitHub'
    ],
    link: {
      text: 'Read Academic Background',
      url: '/about',
      isInternal: true
    }
  },
  {
    id: 'applied-ai',
    role: 'Applied AI & RAG Pipeline Explorer',
    organization: 'Self-Directed Engineering & Systems Prototyping',
    period: '2024 — Present',
    location: 'Remote · Laboratory Research',
    type: 'Applied Research',
    badgeVariant: 'primary',
    summary:
      'Focused investigation into production-grade AI system design: bridging probabilistic large language models with deterministic full-stack application logic, structured JSON outputs, and vector retrieval.',
    highlights: [
      'Built retrieval-augmented generation (RAG) experiments exploring text chunking strategies, cosine similarity retrieval, and vector database integrations (pgvector).',
      'Implemented schema enforcement using Zod and TypeScript to guarantee model outputs conform strictly to application data contracts, preventing client-side UI rendering breaks.',
      'Evaluated latency, token costs, and prompt compression techniques to design cost-efficient LLM integrations for real-world web tools.',
      'Experimented with local inference workflows using Ollama for privacy-focused offline processing.'
    ],
    technologies: [
      'Python',
      'TypeScript',
      'Node.js',
      'OpenAI API',
      'Vector Embeddings',
      'pgvector',
      'Zod Schema Enforcement',
      'Prompt Architecture'
    ],
    link: {
      text: 'Explore Applied AI Stack',
      url: '/stack',
      isInternal: true
    }
  },
  {
    id: 'freecodecamp',
    role: 'Full-Stack Developer Track Scholar',
    organization: 'freeCodeCamp & Open Web Standards',
    period: '2023 — Present',
    location: 'Online Curriculum',
    type: 'Curriculum',
    badgeVariant: 'neutral',
    summary:
      'Rigorous self-paced technical curriculum covering accessible web development, algorithmic computational problem-solving, and standards-compliant frontend engineering.',
    highlights: [
      'Responsive Web Design: Completed semantic HTML5 and modern CSS layout architectures with strict adherence to responsive viewport principles and WCAG accessibility.',
      'JavaScript Algorithms & Data Structures: Solved hundreds of coding exercises focusing on functional programming, array manipulations, recursion, and object-oriented patterns.',
      'Front-End Development Libraries: Built responsive client apps focusing on React component lifecycles, state management, and declarative rendering.'
    ],
    technologies: [
      'JavaScript (ES6+)',
      'TypeScript',
      'CSS Flexbox/Grid',
      'Semantic HTML5',
      'WCAG Accessibility',
      'Algorithm Design'
    ],
    link: {
      text: 'View Certifications & Credentials',
      url: '/certifications',
      isInternal: true
    }
  }
];

export const ExperiencePage: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Page Header */}
      <div
        style={{
          borderBottom: '1px solid var(--border-subtle)',
          paddingBottom: '20px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <Badge variant="primary" size="sm">
            ENGINEERING MILESTONES
          </Badge>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--ink-muted)' }}>
            ACADEMIC &amp; ACTIVE BUILD TRAJECTORY
          </span>
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
            fontWeight: 800,
            color: 'var(--ink-primary)',
            letterSpacing: '-0.02em',
            marginBottom: '8px'
          }}
        >
          Engineering Experience &amp; Milestones
        </h2>
        <p style={{ fontSize: '0.9375rem', color: 'var(--ink-muted)', maxWidth: '820px', lineHeight: 1.6 }}>
          A chronological overview of active software builds, academic computer science training at Bulacan State University, browser extension architecture, and ongoing applied AI investigations.
        </p>
      </div>

      {/* Trajectory Summary Telemetry Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px'
        }}
      >
        <div
          style={{
            backgroundColor: 'var(--surface-white)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-card)',
            padding: '18px 20px',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            alignItems: 'center',
            gap: '14px'
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              backgroundColor: 'rgba(51, 104, 160, 0.12)',
              color: 'var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <GraduationCap size={20} />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Academic Degree
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9375rem', fontWeight: 700, color: 'var(--ink-primary)' }}>
              BS Information Technology
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--ink-subtle)' }}>
              Bulacan State University · 2022–2026
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: 'var(--surface-white)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-card)',
            padding: '18px 20px',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            alignItems: 'center',
            gap: '14px'
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              backgroundColor: 'rgba(102, 163, 191, 0.15)',
              color: 'var(--color-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <Code2 size={20} />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Active Engineering Build
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9375rem', fontWeight: 700, color: 'var(--ink-primary)' }}>
              Sensa Browser Extension
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--ink-subtle)' }}>
              Manifest V3 · Web Speech API
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: 'var(--surface-white)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-card)',
            padding: '18px 20px',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            alignItems: 'center',
            gap: '14px'
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              backgroundColor: 'rgba(200, 223, 219, 0.45)',
              color: 'var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <Sparkles size={20} />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Primary Career Focus
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9375rem', fontWeight: 700, color: 'var(--ink-primary)' }}>
              Full-Stack &amp; AI Systems
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--ink-subtle)' }}>
              Reliable LLM integrations &amp; modern web apps
            </div>
          </div>
        </div>
      </div>

      {/* Experience Timeline */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {experiences.map((exp) => (
          <section
            key={exp.id}
            style={{
              backgroundColor: 'var(--surface-white)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-card)',
              padding: 'clamp(20px, 3vw, 28px)',
              boxShadow: 'var(--shadow-sm)',
              position: 'relative',
              transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)'
            }}
          >
            {/* Top Bar inside Card */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '12px',
                marginBottom: '14px'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: 'var(--ink-primary)',
                      letterSpacing: '-0.015em',
                      margin: 0
                    }}
                  >
                    {exp.role}
                  </h3>
                  <Badge variant={exp.badgeVariant} size="sm">
                    {exp.type}
                  </Badge>
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    color: 'var(--color-primary)'
                  }}
                >
                  {exp.organization}
                </div>
              </div>

              {/* Date & Location Pill */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  gap: '4px'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--ink-primary)',
                    fontWeight: 600,
                    backgroundColor: 'var(--bg-canvas)',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-pill)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <Calendar size={12} style={{ color: 'var(--color-primary)' }} />
                  <span>{exp.period}</span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.6875rem',
                    color: 'var(--ink-muted)'
                  }}
                >
                  <MapPin size={11} />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            {/* Summary */}
            <p
              style={{
                fontSize: '0.875rem',
                color: 'var(--ink-muted)',
                lineHeight: 1.6,
                marginBottom: '18px'
              }}
            >
              {exp.summary}
            </p>

            {/* Detailed Highlights */}
            <div style={{ marginBottom: '20px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  color: 'var(--ink-subtle)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '10px'
                }}
              >
                Key Responsibilities &amp; Technical Contributions
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {exp.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      fontSize: '0.84375rem',
                      color: 'var(--ink-primary)',
                      lineHeight: 1.55
                    }}
                  >
                    <CheckCircle2
                      size={15}
                      style={{
                        color: 'var(--color-primary)',
                        flexShrink: 0,
                        marginTop: '2px'
                      }}
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Tags and Link Action */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '14px',
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '16px'
              }}
            >
              {/* Tech Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      color: 'var(--ink-muted)',
                      backgroundColor: 'var(--bg-canvas)',
                      border: '1px solid var(--border-subtle)',
                      padding: '3px 8px',
                      borderRadius: 'var(--radius-xs)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Link */}
              {exp.link && (
                <div>
                  {exp.link.isInternal ? (
                    <Link to={exp.link.url} style={{ textDecoration: 'none' }}>
                      <Button variant="ghost" size="sm" icon={<ArrowUpRight size={14} />} iconPosition="right">
                        {exp.link.text}
                      </Button>
                    </Link>
                  ) : (
                    <a
                      href={exp.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none' }}
                    >
                      <Button variant="ghost" size="sm" icon={<ExternalLink size={14} />} iconPosition="right">
                        {exp.link.text}
                      </Button>
                    </a>
                  )}
                </div>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
