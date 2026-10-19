import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import {
  GraduationCap,
  Calendar,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Layers,
  Target,
  Terminal,
  ChevronDown
} from 'lucide-react';

interface RoadmapMilestone {
  id: string;
  phase: string;
  phaseName: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: 'Active Build' | 'Academic' | 'Applied Research' | 'Curriculum' | 'Target Horizon';
  badgeVariant: 'primary' | 'secondary' | 'neutral' | 'teal' | 'status';
  category: 'active' | 'academic' | 'curriculum' | 'horizon';
  isLive: boolean;
  order: number;
  nodeIcon: 'grad' | 'terminal' | 'layers' | 'sparkles' | 'target';
  summary: string;
  highlights: string[];
  technologies: string[];
  link?: {
    text: string;
    url: string;
    isInternal?: boolean;
  };
}

const roadmapMilestones: RoadmapMilestone[] = [
  {
    id: 'bulsu',
    phase: 'PHASE 01',
    phaseName: 'Academic Foundations & Systems Theory',
    role: 'BS in Information Technology (Candidate)',
    organization: 'Bulacan State University',
    period: '2022 — Expected 2026',
    location: 'City of Malolos, Bulacan, Philippines',
    type: 'Academic',
    badgeVariant: 'secondary',
    category: 'academic',
    isLive: false,
    order: 1,
    nodeIcon: 'grad',
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
    id: 'freecodecamp',
    phase: 'PHASE 02',
    phaseName: 'Full-Stack Standards & Computational Discipline',
    role: 'Full-Stack Developer Track Scholar',
    organization: 'freeCodeCamp & Open Web Standards',
    period: '2023 — Present',
    location: 'Online Curriculum & Certification',
    type: 'Curriculum',
    badgeVariant: 'neutral',
    category: 'curriculum',
    isLive: false,
    order: 2,
    nodeIcon: 'terminal',
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
  },
  {
    id: 'sensa',
    phase: 'PHASE 03',
    phaseName: 'Production Browser Extension Architecture',
    role: 'Lead Developer & Architect',
    organization: 'Sensa Chrome Extension (Active Build)',
    period: '2024 — Present',
    location: 'Bulacan, Philippines · Independent Production Build',
    type: 'Active Build',
    badgeVariant: 'primary',
    category: 'active',
    isLive: true,
    order: 3,
    nodeIcon: 'layers',
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
    id: 'applied-ai',
    phase: 'PHASE 04',
    phaseName: 'Applied AI & RAG Pipeline Prototyping',
    role: 'Applied AI & RAG Pipeline Explorer',
    organization: 'Self-Directed Engineering & Systems Prototyping',
    period: '2024 — Present',
    location: 'Remote · Systems Research Lab',
    type: 'Applied Research',
    badgeVariant: 'primary',
    category: 'active',
    isLive: true,
    order: 4,
    nodeIcon: 'sparkles',
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
    id: 'horizon',
    phase: 'PHASE 05',
    phaseName: 'Degree Conferment & Production AI Engineering',
    role: 'BS IT Graduate & Full-Stack AI Engineer',
    organization: 'Industry & Engineering Horizon',
    period: 'Target 2026',
    location: 'Bulacan / Manila / Remote · Full-Time Trajectory',
    type: 'Target Horizon',
    badgeVariant: 'status',
    category: 'horizon',
    isLive: false,
    order: 5,
    nodeIcon: 'target',
    summary:
      'Target trajectory milestone: Completion of undergraduate degree at Bulacan State University and transition into building high-reliability full-stack software and production AI infrastructure.',
    highlights: [
      'Undergraduate Capstone Defense: Complete thesis engineering defense and attain BS in Information Technology credential from BulSU.',
      'Production AI Deployments: Architect and deploy production-grade multi-tenant web applications integrating streaming LLM responses and vector-search caching.',
      'Open-Source Web Infrastructure: Release modular browser utilities, accessibility tools, and open-source developer toolkits to the global developer community.'
    ],
    technologies: [
      'Next.js / React',
      'TypeScript',
      'Cloud Infrastructure',
      'Vector Databases',
      'System Architecture',
      'Production Reliability'
    ],
    link: {
      text: 'Connect & Inquire',
      url: '/contact',
      isInternal: true
    }
  }
];

export const ExperiencePage: React.FC = () => {
  // Start with all cards minimized
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

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
      {/* Page Header */}
      <div
        style={{
          borderBottom: '1px solid var(--border-subtle)',
          paddingBottom: '20px'
        }}
      >
        <div>
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
            Engineering Experience &amp; Roadmap
          </h2>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-muted)', maxWidth: '780px', lineHeight: 1.6, margin: 0 }}>
            A chronological milestone roadmap mapping academic foundations at Bulacan State University, web standards discipline, production browser extension architectures, applied AI research, and forward career horizons.
          </p>
        </div>
      </div>

      {/* Roadmap Continuous Timeline */}
      <div className="roadmap-timeline-container">
        {/* Continuous Spine Rail */}
        <div className="roadmap-spine" aria-hidden="true" />

        {roadmapMilestones.map((milestone) => {
          const isTarget = milestone.category === 'horizon';
          const isActive = milestone.category === 'active';
          const isAcademic = milestone.category === 'academic';
          const isCurriculum = milestone.category === 'curriculum';
          const isExpanded = expandedIds.has(milestone.id);

          let nodeClass = 'roadmap-node';
          if (isActive) nodeClass += ' roadmap-node--active';
          else if (isTarget) nodeClass += ' roadmap-node--target';
          else if (isAcademic) nodeClass += ' roadmap-node--academic';
          else if (isCurriculum) nodeClass += ' roadmap-node--curriculum';

          let cardModifier = '';
          if (isActive) cardModifier = 'roadmap-card--active';
          else if (isTarget) cardModifier = 'roadmap-card--target';
          else if (isAcademic) cardModifier = 'roadmap-card--academic';
          else if (isCurriculum) cardModifier = 'roadmap-card--curriculum';

          return (
            <div key={milestone.id} className="roadmap-item">
              {/* Milestone Node on Rail */}
              <div className="roadmap-node-col">
                <button
                  type="button"
                  onClick={() => toggleExpand(milestone.id)}
                  className={nodeClass}
                  title={`${milestone.phase}: ${milestone.phaseName} (Click to toggle)`}
                  style={{ cursor: 'pointer' }}
                >
                  {renderNodeIcon(milestone.nodeIcon)}
                </button>
              </div>

              {/* Horizontal Arm */}
              <div className="roadmap-arm" aria-hidden="true" />

              {/* Roadmap Milestone Card */}
              <article
                className={`roadmap-card ${cardModifier} ${isExpanded ? 'roadmap-card--expanded' : ''}`}
              >
                {/* Minimized Header Row (Clickable Accordion Trigger) */}
                <div
                  className="roadmap-card-header"
                  onClick={() => toggleExpand(milestone.id)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isExpanded}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleExpand(milestone.id);
                    }
                  }}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    {/* Phase Ribbon & Live Status Tag */}
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
                          letterSpacing: '0.06em'
                        }}
                      >
                        {milestone.phase} // {milestone.phaseName.toUpperCase()}
                      </span>

                      {milestone.isLive && (
                        <span className="roadmap-live-badge">
                          <span className="roadmap-live-dot" />
                          LIVE ACTIVE BUILD
                        </span>
                      )}

                      {!milestone.isLive && (
                        <Badge variant={milestone.badgeVariant} size="sm">
                          {milestone.type}
                        </Badge>
                      )}
                    </div>

                    {/* Role Title and Organization */}
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', flexWrap: 'wrap' }}>
                      <h3
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.1875rem',
                          fontWeight: 800,
                          color: 'var(--ink-primary)',
                          letterSpacing: '-0.015em',
                          margin: 0
                        }}
                      >
                        {milestone.role}
                      </h3>
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

                  {/* Date, Location & Expand Indicator */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      flexShrink: 0
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        gap: '3px'
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
                          padding: '3px 9px',
                          borderRadius: 'var(--radius-pill)',
                          border: '1px solid var(--border-subtle)'
                        }}
                      >
                        <Calendar size={12} style={{ color: isTarget ? '#D97706' : 'var(--color-primary)' }} />
                        <span>{milestone.period}</span>
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
                        <span>{milestone.location}</span>
                      </div>
                    </div>

                    {/* Expand/Collapse Trigger */}
                    <div className="roadmap-card-trigger">
                      <span>{isExpanded ? 'Minimize' : 'Details'}</span>
                      <ChevronDown
                        size={15}
                        className={`roadmap-chevron ${isExpanded ? 'roadmap-chevron--expanded' : ''}`}
                      />
                    </div>
                  </div>
                </div>

                {/* Maximized Detail Body (Expanded on click) */}
                {isExpanded && (
                  <div className="roadmap-card-body">
                    {/* Summary */}
                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--ink-muted)',
                        lineHeight: 1.6,
                        marginBottom: '18px'
                      }}
                    >
                      {milestone.summary}
                    </p>

                    {/* Milestone Deliverables */}
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
                        Architectural Milestones &amp; Key Deliverables
                      </div>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: 0, margin: 0, listStyle: 'none' }}>
                        {milestone.highlights.map((highlight, idx) => (
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
                                color: isTarget ? '#D97706' : 'var(--color-primary)',
                                flexShrink: 0,
                                marginTop: '2px'
                              }}
                            />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Tags and Action Link */}
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
                              padding: '3px 8px',
                              borderRadius: 'var(--radius-xs)'
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Link */}
                      {milestone.link && (
                        <div>
                          {milestone.link.isInternal ? (
                            <Link to={milestone.link.url} style={{ textDecoration: 'none' }}>
                              <Button variant="ghost" size="sm" icon={<ArrowUpRight size={14} />} iconPosition="right">
                                {milestone.link.text}
                              </Button>
                            </Link>
                          ) : (
                            <a
                              href={milestone.link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ textDecoration: 'none' }}
                            >
                              <Button variant="ghost" size="sm" icon={<ExternalLink size={14} />} iconPosition="right">
                                {milestone.link.text}
                              </Button>
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </article>
            </div>
          );
        })}
      </div>
    </div>
  );
};

