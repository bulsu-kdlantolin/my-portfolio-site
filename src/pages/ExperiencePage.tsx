import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Layers,
  Target,
  Terminal
} from 'lucide-react';

interface RoadmapMilestone {
  id: string;
  phase: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  typeBadge: string;
  category: 'academic' | 'curriculum' | 'active' | 'research' | 'horizon';
  isLive?: boolean;
  nodeIcon: 'grad' | 'terminal' | 'layers' | 'sparkles' | 'target';
  summary: string;
  highlights: string[];
  technologies: string[];
  link?: {
    text: string;
    url: string;
    isExternal?: boolean;
  };
}

const roadmapMilestones: RoadmapMilestone[] = [
  {
    id: 'bulsu',
    phase: 'PHASE 01 · 2022 — 2026',
    role: 'BS in Information Technology',
    organization: 'Bulacan State University',
    period: '2022 — Expected 2026',
    location: 'Bulacan, Philippines',
    typeBadge: 'Academic Foundation',
    category: 'academic',
    nodeIcon: 'grad',
    summary:
      'Four-year computing degree building rigorous foundations in software engineering lifecycles, database normalization, algorithms, and distributed systems.',
    highlights: [
      'Database Systems: Normalized schemas (1NF to 3NF) and optimized relational queries in PostgreSQL and MySQL.',
      'Core Algorithms: Applied trees, graphs, and Big-O complexity analysis to solve computational problems.',
      'System Architecture: Led team development lifecycles, data flow diagrams, and architectural defenses.'
    ],
    technologies: ['PostgreSQL', 'MySQL', 'Systems Analysis', 'Data Structures', 'Git & GitHub'],
    link: {
      text: 'View Academic Background',
      url: '/about'
    }
  },
  {
    id: 'web-standards',
    phase: 'PHASE 02 · 2023 — Present',
    role: 'Full-Stack Developer Track',
    organization: 'freeCodeCamp & Open Standards',
    period: '2023 — Present',
    location: 'Curriculum & Independent Practice',
    typeBadge: 'Web Standards Track',
    category: 'curriculum',
    nodeIcon: 'terminal',
    summary:
      'Self-directed mastery of semantic web standards, WCAG accessibility compliance, algorithmic problem solving, and modern reactive frontend architectures.',
    highlights: [
      'Responsive Web Standards: Engineered accessible, mobile-first interfaces using CSS Grid, Flexbox, and semantic HTML5.',
      'Reactive Component Design: Built SPAs with modern React, hooks, declarative rendering, and state workflows.',
      'Algorithmic Logic: Solved hundreds of algorithmic coding exercises in ES6+ JavaScript and TypeScript.'
    ],
    technologies: ['TypeScript', 'JavaScript (ES6+)', 'React', 'CSS Flexbox/Grid', 'Semantic HTML5', 'REST APIs'],
    link: {
      text: 'View Certifications & Credentials',
      url: '/certifications'
    }
  },
  {
    id: 'sensa',
    phase: 'PHASE 03 · 2024 — Present',
    role: 'Lead Developer & Architect',
    organization: 'Sensa Chrome Extension',
    period: '2024 — Present',
    location: 'Bulacan, Philippines · Active Production Build',
    typeBadge: 'Active Build',
    category: 'active',
    isLive: true,
    nodeIcon: 'layers',
    summary:
      'Architecting an accessible assistive browser extension delivering real-time, low-latency live captions and voice navigation with zero external API costs.',
    highlights: [
      'Manifest V3 Architecture: Orchestrated Chrome Offscreen Documents to run Web Speech audio capture outside service worker lifecycles.',
      'Floating HUD Interface: Built a draggable, glassmorphic caption display injected seamlessly into active browser DOMs.',
      'Resilient Engineering: Implemented automatic reconnection loops for audio dropouts, microphone permissions, and tab focus changes.'
    ],
    technologies: ['Manifest V3', 'TypeScript', 'React', 'Web Speech API', 'Offscreen Documents', 'Chrome APIs'],
    link: {
      text: 'View Sensa Case Study',
      url: '/projects'
    }
  },
  {
    id: 'applied-ai',
    phase: 'PHASE 04 · 2024 — Present',
    role: 'Applied AI & Systems Explorer',
    organization: 'Self-Directed Systems Lab',
    period: '2024 — Present',
    location: 'Remote · Systems Prototyping',
    typeBadge: 'Applied Systems',
    category: 'research',
    nodeIcon: 'sparkles',
    summary:
      'Designing production-grade AI applications that bridge probabilistic language models with deterministic full-stack logic, structured schemas, and semantic search.',
    highlights: [
      'Strict Schema Enforcement: Enforced Zod schemas and TypeScript boundaries to guarantee deterministic JSON outputs from LLMs.',
      'Semantic Search & RAG: Prototyped vector retrieval workflows evaluating cosine similarity, token chunking, and pgvector embeddings.',
      'Inference Optimization: Tested prompt compression, streaming response pipelines, and local inference models using Ollama.'
    ],
    technologies: ['Python', 'Node.js', 'OpenAI API', 'pgvector', 'Zod', 'Vector Embeddings'],
    link: {
      text: 'Explore Applied AI Stack',
      url: '/stack'
    }
  },
  {
    id: 'horizon',
    phase: 'PHASE 05 · Target 2026',
    role: 'BS IT Graduate & Full-Stack AI Engineer',
    organization: 'Industry & Engineering Horizon',
    period: 'Target 2026',
    location: 'Bulacan / Manila / Remote · Full-Time Trajectory',
    typeBadge: 'Upcoming Horizon',
    category: 'horizon',
    nodeIcon: 'target',
    summary:
      'Upcoming milestone: Graduating from Bulacan State University and joining a forward-thinking engineering team to build scalable full-stack software and AI systems.',
    highlights: [
      'Undergraduate Capstone Defense: Complete thesis defense and receive BS in Information Technology diploma from BulSU.',
      'Production Engineering: Open to full-time junior/associate software engineering and full-stack AI roles.'
    ],
    technologies: ['React & Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Applied AI', 'Cloud Deployments'],
    link: {
      text: 'Get in touch for Opportunities',
      url: '/contact'
    }
  }
];

export const ExperiencePage: React.FC = () => {
  const renderNodeIcon = (type: RoadmapMilestone['nodeIcon']) => {
    switch (type) {
      case 'grad':
        return <GraduationCap size={20} />;
      case 'terminal':
        return <Terminal size={19} />;
      case 'layers':
        return <Layers size={20} />;
      case 'sparkles':
        return <Sparkles size={19} />;
      case 'target':
        return <Target size={20} />;
    }
  };

  return (
    <div className="roadmap-wrapper">
      {/* 1. Page Header */}
      <div
        style={{
          borderBottom: '1px solid var(--border-subtle)',
          paddingBottom: '20px',
          marginBottom: '28px'
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
            fontWeight: 800,
            color: 'var(--ink-primary)',
            letterSpacing: '-0.02em',
            margin: '0 0 8px 0'
          }}
        >
          Engineering Journey &amp; Roadmap
        </h1>
        <p style={{ fontSize: '0.9375rem', color: 'var(--ink-muted)', maxWidth: '780px', lineHeight: 1.6, margin: 0 }}>
          A chronological milestone roadmap mapping academic foundations at Bulacan State University, web standards mastery, production browser architectures, and applied AI systems.
        </p>
      </div>

      {/* 2. Continuous Roadmap Timeline */}
      <div className="roadmap-timeline-container">
        {/* Continuous Spine Rail */}
        <div className="roadmap-spine" aria-hidden="true" />

        {roadmapMilestones.map((milestone) => {
          const isTarget = milestone.category === 'horizon';
          const isActive = milestone.category === 'active';
          const isAcademic = milestone.category === 'academic';
          const isCurriculum = milestone.category === 'curriculum';
          const isResearch = milestone.category === 'research';

          let nodeClass = 'roadmap-node';
          if (isActive) nodeClass += ' roadmap-node--active';
          else if (isTarget) nodeClass += ' roadmap-node--target';
          else if (isAcademic) nodeClass += ' roadmap-node--academic';
          else if (isCurriculum) nodeClass += ' roadmap-node--curriculum';
          else if (isResearch) nodeClass += ' roadmap-node--research';

          let cardModifier = '';
          if (isActive) cardModifier = 'roadmap-card--active';
          else if (isTarget) cardModifier = 'roadmap-card--target';
          else if (isAcademic) cardModifier = 'roadmap-card--academic';
          else if (isCurriculum) cardModifier = 'roadmap-card--curriculum';
          else if (isResearch) cardModifier = 'roadmap-card--research';

          return (
            <div key={milestone.id} className="roadmap-item">
              {/* Milestone Node on Spine */}
              <div className="roadmap-node-col">
                <div
                  className={nodeClass}
                  title={`${milestone.phase}: ${milestone.role}`}
                >
                  {renderNodeIcon(milestone.nodeIcon)}
                </div>
              </div>

              {/* Horizontal Connecting Arm */}
              <div className="roadmap-arm" aria-hidden="true" />

              {/* Milestone Card */}
              <article className={`roadmap-card ${cardModifier}`}>
                {/* Header Row */}
                <div className="roadmap-card-header">
                  <div style={{ flex: '1 1 320px' }}>
                    {/* Phase Tag & Status Badge */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.6875rem',
                          fontWeight: 700,
                          color: isTarget ? '#D97706' : 'var(--color-primary)',
                          backgroundColor: isTarget ? 'rgba(217, 119, 6, 0.12)' : 'rgba(51, 104, 160, 0.1)',
                          padding: '2px 8px',
                          borderRadius: 'var(--radius-xs)',
                          letterSpacing: '0.04em'
                        }}
                      >
                        {milestone.phase}
                      </span>

                      {milestone.isLive ? (
                        <span className="roadmap-live-badge">
                          <span className="roadmap-live-dot" />
                          LIVE ACTIVE BUILD
                        </span>
                      ) : (
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.6875rem',
                            fontWeight: 600,
                            padding: '2px 8px',
                            borderRadius: 'var(--radius-xs)',
                            backgroundColor: 'var(--bg-canvas)',
                            border: '1px solid var(--border-subtle)',
                            color: 'var(--ink-muted)'
                          }}
                        >
                          {milestone.typeBadge}
                        </span>
                      )}
                    </div>

                    {/* Role Title and Organization */}
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', flexWrap: 'wrap' }}>
                      <h2
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
                          fontWeight: 800,
                          color: 'var(--ink-primary)',
                          letterSpacing: '-0.015em',
                          margin: 0
                        }}
                      >
                        {milestone.role}
                      </h2>
                      <span
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '0.9375rem',
                          fontWeight: 600,
                          color: isTarget ? '#D97706' : 'var(--color-primary)'
                        }}
                      >
                        · {milestone.organization}
                      </span>
                    </div>
                  </div>

                  {/* Period & Location Metadata */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      gap: '4px',
                      flexShrink: 0
                    }}
                  >
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--ink-primary)',
                        fontWeight: 600,
                        backgroundColor: 'var(--bg-canvas)',
                        padding: '3px 10px',
                        borderRadius: 'var(--radius-pill)',
                        border: '1px solid var(--border-subtle)'
                      }}
                    >
                      <Calendar size={12} style={{ color: isTarget ? '#D97706' : 'var(--color-primary)' }} />
                      <span>{milestone.period}</span>
                    </div>
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '0.6875rem',
                        color: 'var(--ink-muted)',
                        paddingLeft: '4px'
                      }}
                    >
                      <MapPin size={11} />
                      <span>{milestone.location}</span>
                    </div>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="roadmap-card-body">
                  {/* Summary */}
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--ink-muted)',
                      lineHeight: 1.6,
                      margin: 0
                    }}
                  >
                    {milestone.summary}
                  </p>

                  {/* Deliverables / Highlights */}
                  <ul
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      padding: 0,
                      margin: '4px 0 0 0',
                      listStyle: 'none'
                    }}
                  >
                    {milestone.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '8px',
                          fontSize: '0.8125rem',
                          color: 'var(--ink-primary)',
                          lineHeight: 1.5
                        }}
                      >
                        <CheckCircle2
                          size={14}
                          style={{
                            color: isTarget ? '#D97706' : 'var(--color-primary)',
                            flexShrink: 0,
                            marginTop: '2px'
                          }}
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Footer Strip: Tech Tags + Action Link */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '12px',
                      borderTop: '1px solid var(--border-subtle)',
                      paddingTop: '12px',
                      marginTop: '4px'
                    }}
                  >
                    {/* Technologies */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {milestone.technologies.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.6875rem',
                            fontWeight: 600,
                            color: 'var(--ink-muted)',
                            backgroundColor: 'var(--bg-canvas)',
                            border: '1px solid var(--border-subtle)',
                            padding: '2px 8px',
                            borderRadius: 'var(--radius-xs)'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Link */}
                    {milestone.link && (
                      <Link
                        to={milestone.link.url}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontFamily: 'var(--font-display)',
                          fontSize: '0.8125rem',
                          fontWeight: 700,
                          color: isTarget ? '#D97706' : 'var(--color-primary)',
                          textDecoration: 'none',
                          transition: 'opacity var(--transition-fast)'
                        }}
                      >
                        <span>{milestone.link.text}</span>
                        <ArrowUpRight size={14} />
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </div>
  );
};
