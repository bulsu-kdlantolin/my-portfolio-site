import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '../components/common/Badge';
import { ProjectDrawer } from '../components/projects/ProjectDrawer';
import { projectsData } from '../data/projects';
import { certificationsData } from '../data/certifications';
import { Project } from '../types/project';
import {
  ArrowRight,
  FolderGit2,
  Layers,
  Award,
  User,
  Clock,
  Sparkles
} from 'lucide-react';

export const OverviewPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sensaProject = projectsData[0];
  const activeCert = certificationsData[0];

  const primaryTools = [
    'React',
    'TypeScript',
    'Node.js',
    'Python',
    'OpenAI API',
    'SQL / Postgres',
    'Tailwind CSS',
    'Plasmo (MV3)'
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(12px, 1.6vh, 18px)',
        height: '100%',
        justifyContent: 'flex-start'
      }}
    >
      {/* 1. Hero Section: Claim + Brief Intro + Compact Telemetry Ribbon */}
      <section
        style={{
          backgroundColor: 'var(--surface-white)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-card)',
          padding: 'clamp(16px, 2.2vh, 24px) clamp(18px, 2.5vw, 28px)',
          boxShadow: 'var(--shadow-card)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Identifier Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
          <Badge variant="primary" size="sm">
            ENGINEERING OVERVIEW
          </Badge>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--ink-muted)' }}>
            SYS-ID: KDA-2026 // SINGLE-SCREEN DASHBOARD
          </span>
        </div>

        {/* Claim / Statement */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.25rem, 2.1vw, 1.875rem)',
            fontWeight: 800,
            color: 'var(--ink-primary)',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            marginBottom: '8px',
            maxWidth: '920px'
          }}
        >
          Connecting AI to real applications that stay reliable when the model's output gets messy.
        </h1>

        {/* Brief Narrative */}
        <p
          style={{
            fontSize: 'clamp(0.8125rem, 0.95vw, 0.9375rem)',
            color: 'var(--ink-muted)',
            lineHeight: 1.5,
            maxWidth: '840px',
            margin: '0 0 14px 0'
          }}
        >
          I am a <strong>BS Information Technology student approaching graduation</strong>, focused on engineering full-stack web applications and AI-powered systems. I build responsive <strong>React & TypeScript</strong> interfaces, structured <strong>Node.js & SQL</strong> backends, and practical <strong>Python, OpenAI, vector search, and RAG</strong> pipelines that solve real problems.
        </p>

        {/* Compact Telemetry Stats Ribbon */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '12px',
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '12px'
          }}
        >
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              In-Flight Project
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--color-primary)' }}>
              1 Active Build
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--ink-muted)' }}>Sensa Chrome Extension</div>
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Primary Tooling
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--ink-primary)' }}>
              Full-Stack & AI
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--ink-muted)' }}>React, TS, Python, SQL</div>
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Active Curriculum
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--ink-secondary-accent)' }}>
              freeCodeCamp
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--ink-muted)' }}>Full-Stack (In Progress)</div>
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Academic Foundation
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--ink-primary)' }}>
              BS IT Candidate
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--ink-muted)' }}>Approaching Graduation</div>
          </div>
        </div>
      </section>

      {/* 2. Four Compact Preview Thumbnail Cards (2x2 Grid) */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(12px, 1.6vh, 16px)',
          flex: 1
        }}
      >
        {/* Card 1: Projects Preview Card */}
        <div
          style={{
            backgroundColor: 'var(--surface-white)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-card)',
            padding: '16px 18px',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '12px'
          }}
        >
          <div>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <FolderGit2 size={16} style={{ color: 'var(--color-primary)' }} />
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.875rem', fontWeight: 800, color: 'var(--ink-primary)', letterSpacing: '0.02em' }}>
                  FEATURED PROJECTS
                </span>
              </div>
              <Link
                to="/projects"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--color-primary)',
                  textDecoration: 'none'
                }}
              >
                <span>All Projects</span>
                <ArrowRight size={12} />
              </Link>
            </div>

            {/* Sensa Project Preview Item */}
            {sensaProject && (
              <div
                onClick={() => setSelectedProject(sensaProject)}
                style={{
                  padding: '12px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--bg-canvas)',
                  border: '1px solid var(--border-subtle)',
                  cursor: 'pointer',
                  transition: 'border-color var(--transition-fast), transform var(--transition-fast)',
                  marginBottom: '10px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--ink-primary)' }}>
                    {sensaProject.title}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.625rem',
                      padding: '2px 6px',
                      borderRadius: 'var(--radius-xs)',
                      backgroundColor: 'rgba(51, 104, 160, 0.1)',
                      color: 'var(--color-primary)',
                      fontWeight: 600
                    }}
                  >
                    In Development
                  </span>
                </div>
                <p style={{ fontSize: '0.75rem', color: 'var(--ink-muted)', lineHeight: 1.4, margin: '0 0 6px 0' }}>
                  {sensaProject.tagline}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                  {sensaProject.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.625rem',
                        padding: '1px 5px',
                        borderRadius: 'var(--radius-xs)',
                        backgroundColor: 'var(--surface-white)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--ink-muted)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {sensaProject.technologies.length > 4 && (
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: 'var(--ink-muted)' }}>
                      +{sensaProject.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Slot 2: Honest Placeholder */}
            <div
              style={{
                padding: '10px 12px',
                borderRadius: 'var(--radius-sm)',
                border: '1px dashed var(--border-subtle)',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: 'var(--radius-xs)',
                  backgroundColor: 'var(--bg-canvas)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--ink-muted)',
                  flexShrink: 0
                }}
              >
                <Sparkles size={13} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.8125rem', color: 'var(--ink-primary)' }}>
                  More projects coming soon
                </div>
                <div style={{ fontSize: '0.6875rem', color: 'var(--ink-muted)' }}>
                  Active full-stack web and applied AI projects in development.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Stack Preview Card */}
        <div
          style={{
            backgroundColor: 'var(--surface-white)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-card)',
            padding: '16px 18px',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '12px'
          }}
        >
          <div>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Layers size={16} style={{ color: 'var(--color-primary)' }} />
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.875rem', fontWeight: 800, color: 'var(--ink-primary)', letterSpacing: '0.02em' }}>
                  CORE TECH STACK
                </span>
              </div>
              <Link
                to="/stack"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--color-primary)',
                  textDecoration: 'none'
                }}
              >
                <span>Full Stack Matrix</span>
                <ArrowRight size={12} />
              </Link>
            </div>

            <p style={{ fontSize: '0.75rem', color: 'var(--ink-muted)', lineHeight: 1.4, margin: '0 0 12px 0' }}>
              Primary engineering stack used across type-safe frontends, relational backends, and practical AI integrations.
            </p>

            {/* Compact Tool Chips Strip / Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(115px, 1fr))',
                gap: '8px',
                marginBottom: '10px'
              }}
            >
              {primaryTools.map((tool) => (
                <div
                  key={tool}
                  style={{
                    padding: '6px 10px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--bg-canvas)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'var(--ink-primary)',
                    textAlign: 'center'
                  }}
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>

          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--ink-muted)', borderTop: '1px solid var(--border-subtle)', paddingTop: '8px' }}>
            5 Architectural Layers // Click "Full Stack Matrix" for deep dive
          </div>
        </div>

        {/* Card 3: Credentials Preview Card */}
        <div
          style={{
            backgroundColor: 'var(--surface-white)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-card)',
            padding: '16px 18px',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '12px'
          }}
        >
          <div>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Award size={16} style={{ color: 'var(--color-primary)' }} />
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.875rem', fontWeight: 800, color: 'var(--ink-primary)', letterSpacing: '0.02em' }}>
                  ACTIVE CREDENTIALS
                </span>
              </div>
              <Link
                to="/certifications"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--color-primary)',
                  textDecoration: 'none'
                }}
              >
                <span>View Details</span>
                <ArrowRight size={12} />
              </Link>
            </div>

            {/* Single Honest Credential */}
            {activeCert && (
              <div
                style={{
                  padding: '12px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--bg-canvas)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                    {activeCert.issuer.toUpperCase()}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.625rem',
                      padding: '2px 6px',
                      borderRadius: 'var(--radius-xs)',
                      backgroundColor: 'rgba(217, 119, 6, 0.1)',
                      border: '1px solid rgba(217, 119, 6, 0.25)',
                      color: '#b45309',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <Clock size={10} /> In Progress
                  </span>
                </div>

                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--ink-primary)' }}>
                  {activeCert.title}
                </div>

                <p style={{ fontSize: '0.75rem', color: 'var(--ink-muted)', lineHeight: 1.4, margin: 0 }}>
                  Active self-paced curriculum covering modern HTML5, CSS3, JavaScript Algorithms, React frontends, and Node.js/Express APIs.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '4px' }}>
                  {activeCert.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.625rem',
                        padding: '1px 5px',
                        borderRadius: 'var(--radius-xs)',
                        backgroundColor: 'var(--surface-white)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--ink-muted)'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                  {activeCert.skills.length > 3 && (
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: 'var(--ink-muted)' }}>
                      +{activeCert.skills.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>

          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--ink-muted)', borderTop: '1px solid var(--border-subtle)', paddingTop: '8px' }}>
            Honestly tracked study curriculum // Augmenting university BS IT degree
          </div>
        </div>

        {/* Card 4: About Preview Card */}
        <div
          style={{
            backgroundColor: 'var(--surface-white)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-card)',
            padding: '16px 18px',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '12px'
          }}
        >
          <div>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <User size={16} style={{ color: 'var(--color-primary)' }} />
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.875rem', fontWeight: 800, color: 'var(--ink-primary)', letterSpacing: '0.02em' }}>
                  ABOUT & BACKGROUND
                </span>
              </div>
              <Link
                to="/about"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--color-primary)',
                  textDecoration: 'none'
                }}
              >
                <span>Full Profile</span>
                <ArrowRight size={12} />
              </Link>
            </div>

            {/* Teaser Content */}
            <div
              style={{
                padding: '12px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--bg-canvas)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}
            >
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--ink-primary)' }}>
                Kian Davey Antolin — Aspiring AI Engineer
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--ink-muted)', lineHeight: 1.45, margin: 0 }}>
                BS Information Technology student approaching graduation in Bulacan, Philippines. Bridging the gap between dependable, type-safe full-stack software and pragmatic applied AI integrations.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.6875rem', color: 'var(--color-primary)', fontFamily: 'var(--font-mono)' }}>
                <span>• Bulacan State University</span>
                <span>• BS IT Candidate</span>
              </div>
            </div>
          </div>

          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--ink-muted)', borderTop: '1px solid var(--border-subtle)', paddingTop: '8px' }}>
            Academic foundation, learning direction & engineering philosophy
          </div>
        </div>
      </section>

      {/* Case Study Drawer (for quick review of Sensa if clicked) */}
      <ProjectDrawer
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
