import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { Project } from '../types/project';
import { ProjectDrawer } from '../components/projects/ProjectDrawer';
import { useTheme } from '../context/ThemeContext';
import { getTechLogo } from '../utils/techLogos';
import {
  ArrowUpRight,
  FolderGit2,
  User,
  Award,
  Layers,
  Clock,
  Search,
  Briefcase
} from 'lucide-react';

export const OverviewPage: React.FC = () => {
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sensaProject = projectsData[0];

  // Daily Drivers / Tools strip with official high-quality downloaded logos
  const dailyDrivers = [
    { name: 'React', logo: '/logos/react.svg', isMonochrome: false },
    { name: 'TypeScript', logo: '/logos/typescript.svg', isMonochrome: false },
    { name: 'Python', logo: '/logos/python.svg', isMonochrome: false },
    { name: 'Node.js', logo: '/logos/nodejs.svg', isMonochrome: false },
    { name: 'Next.js', logo: '/logos/nextjs.svg', isMonochrome: false },
    { name: 'OpenAI API', logo: '/logos/openai.svg', isMonochrome: true },
    { name: 'PostgreSQL', logo: '/logos/postgresql.svg', isMonochrome: false },
    { name: 'Supabase', logo: '/logos/supabase.svg', isMonochrome: false },
    { name: 'Tailwind CSS', logo: '/logos/tailwindcss.svg', isMonochrome: false },
    { name: 'Plasmo (MV3)', logo: '/logos/plasmo.svg', isMonochrome: true },
    { name: 'Git', logo: '/logos/git.svg', isMonochrome: false },
    { name: 'GitHub', logo: '/logos/github.svg', isMonochrome: true },
    { name: 'VS Code', logo: '/logos/vscode.svg', isMonochrome: false },
    { name: 'Cursor', logo: '/logos/cursor.svg', isMonochrome: true }
  ];

  // Featured Experience item (1 featured example for homepage executive overview)
  const featuredExperience = {
    badge: 'Active Build',
    title: 'Lead Developer & Architect',
    meta: 'Sensa Chrome Extension (2024 — Present)',
    summary: 'Architecting Manifest V3 service workers, Web Speech API offscreen documents, and real-time accessibility pipelines with zero-latency audio captioning.',
    tags: ['Manifest V3', 'Web Speech API', 'Offscreen Docs', 'Plasmo']
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px, 1.4vh, 16px)', position: 'relative' }}>

      {/* 1. Hero Statement Row + "Get in touch" CTA */}
      <section className="hero-header-row">
        <div style={{ flex: '1 1 500px', maxWidth: '840px' }}>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 2.2vw, 1.95rem)',
              fontWeight: 800,
              color: 'var(--ink-primary)',
              letterSpacing: '-0.025em',
              lineHeight: 1.18,
              marginBottom: '6px'
            }}
          >
            Connecting AI to real applications that stay reliable when the model's output gets messy.
          </h1>
          <p
            style={{
              fontSize: 'clamp(0.875rem, 1vw, 0.9375rem)',
              color: 'var(--ink-muted)',
              lineHeight: 1.5,
              margin: 0
            }}
          >
            I am a <strong>BS Information Technology student approaching graduation</strong>, focused on engineering full-stack web applications and AI-powered systems. I build responsive <strong>React &amp; TypeScript</strong> interfaces, structured <strong>Node.js / Python</strong> services, and inspectable AI pipelines.
          </p>
        </div>

        {/* Top Right "Get in touch" Pill Button */}
        <Link to="/contact" style={{ textDecoration: 'none', flexShrink: 0 }}>
          <button
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 22px',
              borderRadius: 'var(--radius-pill)',
              backgroundColor: 'var(--ink-primary)',
              color: 'var(--bg-canvas)',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '0.875rem',
              border: 'none',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <span>Get in touch</span>
            <ArrowUpRight size={15} />
          </button>
        </Link>
      </section>

      {/* 2. Tools I Work With Ribbon Strip (Edge-to-Edge) */}
      <section
        style={{
          backgroundColor: 'var(--surface-white)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-card)',
          padding: '6px 16px',
          minHeight: '38px',
          boxShadow: 'var(--shadow-sm)',
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          overflow: 'hidden',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Left Label */}
        <div
          style={{
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            paddingRight: '14px',
            borderRight: '1px solid var(--border-subtle)',
            zIndex: 2,
            backgroundColor: 'var(--surface-white)'
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-primary)',
              flexShrink: 0
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '0.8125rem',
              color: 'var(--ink-primary)',
              whiteSpace: 'nowrap',
              letterSpacing: '-0.01em'
            }}
          >
            Tools I work with
          </span>
        </div>

        {/* Right Tools Auto-Scrolling Marquee Strip */}
        <div className="marquee-container" style={{ padding: '0' }}>
          <div className="marquee-track marquee-left-to-right" style={{ gap: '18px' }}>
            {/* Set 1 */}
            {[...dailyDrivers, ...dailyDrivers].map((tool, i) => (
              <div key={`d1-${tool.name}-${i}`} className="marquee-item" title={tool.name} style={{ height: '30px' }}>
                <span className={`marquee-item-logo ${tool.isMonochrome ? 'is-monochrome' : ''}`} style={{ width: '20px', height: '20px' }}>
                  <img src={tool.logo} alt={tool.name} width="20" height="20" loading="lazy" style={{ width: '20px', height: '20px' }} />
                </span>
                <span className="marquee-item-label" style={{ fontSize: '0.75rem' }}>{tool.name}</span>
              </div>
            ))}
            {/* Set 2 */}
            {[...dailyDrivers, ...dailyDrivers].map((tool, i) => (
              <div key={`d2-${tool.name}-${i}`} className="marquee-item" aria-hidden="true" title={tool.name} style={{ height: '30px' }}>
                <span className={`marquee-item-logo ${tool.isMonochrome ? 'is-monochrome' : ''}`} style={{ width: '20px', height: '20px' }}>
                  <img src={tool.logo} alt={tool.name} width="20" height="20" loading="lazy" style={{ width: '20px', height: '20px' }} />
                </span>
                <span className="marquee-item-label" style={{ fontSize: '0.75rem' }}>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Master Bento Grid Container (1 Featured Example Per Category) */}
      <section className="bento-wrapper" style={{ zIndex: 1 }}>
        {/* ROW 1: Projects (1.25fr) | Experience (1fr) */}
        <div className="bento-row-1">
          {/* Card 1: Projects (1 example: Sensa Chrome Extension) */}
          <div className="bento-card">
            <div>
              {/* Header */}
              <div className="bento-card-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                  <div className="bento-icon-badge" style={{ backgroundColor: 'rgba(51, 104, 160, 0.12)', color: 'var(--color-primary)' }}>
                    <FolderGit2 size={18} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.0625rem', fontWeight: 800, color: 'var(--ink-primary)', margin: 0 }}>
                      Projects
                    </h3>
                  </div>
                </div>
                <Link to="/projects" className="bento-arrow-btn" aria-label="View all projects">
                  <ArrowUpRight size={18} />
                </Link>
              </div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--ink-muted)', margin: '0 0 10px 0', lineHeight: 1.45 }}>
                Assistive browser extensions, full-stack workflows, and AI apps built to solve real friction.
              </p>

              {/* 1 Project Example: Sensa Mockup Browser Window */}
              {sensaProject && (
                <div
                  onClick={() => setSelectedProject(sensaProject)}
                  style={{
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--bg-canvas)',
                    border: '1px solid var(--border-subtle)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  {/* Browser Window Header Bar */}
                  <div
                    style={{
                      padding: '5px 12px',
                      borderBottom: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      backgroundColor: 'var(--surface-white)',
                      height: '24px',
                      boxSizing: 'border-box'
                    }}
                  >
                    <div style={{ display: 'flex', gap: '5px' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#EF4444' }} />
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#F59E0B' }} />
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                    </div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: 'var(--ink-muted)' }}>
                      chrome-extension://sensa/
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.5625rem',
                        padding: '1px 7px',
                        borderRadius: 'var(--radius-pill)',
                        backgroundColor: 'rgba(51, 104, 160, 0.1)',
                        color: 'var(--color-primary)',
                        fontWeight: 700
                      }}
                    >
                      In Development
                    </span>
                  </div>

                  {/* Dual Pane Layout: Image Preview on Left + Dark Panel on Right */}
                  <div className="sensa-split-preview" style={{ display: 'grid', gridTemplateColumns: '46% 54%', minHeight: '146px' }}>
                    {/* Left: Product Screenshot */}
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden',
                        backgroundColor: 'var(--bg-canvas)',
                        borderRight: '1px solid var(--border-subtle)',
                        position: 'relative'
                      }}
                    >
                      <img
                        src={sensaProject.image}
                        alt={sensaProject.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block'
                        }}
                      />
                    </div>

                    {/* Right: Dark Accent Interior Details */}
                    <div
                      className="sensa-preview-panel"
                      style={{
                        padding: '12px 14px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        borderTop: 'none'
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: 'var(--color-secondary)', fontWeight: 700, letterSpacing: '0.04em' }}>
                            ASSISTIVE WEB ENGINE
                          </span>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5625rem', color: 'rgba(242, 239, 231, 0.6)' }}>
                            MV3 Plasmo
                          </span>
                        </div>
                        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.9375rem', color: '#F2EFE7', marginTop: '2px' }}>
                          {sensaProject.title}
                        </div>
                        <p style={{ fontSize: '0.75rem', color: 'rgba(242, 239, 231, 0.85)', lineHeight: 1.4, margin: '3px 0 0 0' }}>
                          {sensaProject.tagline}
                        </p>
                      </div>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '4px' }}>
                        {sensaProject.technologies.slice(0, 5).map((tech) => {
                          const techInfo = getTechLogo(tech);
                          return (
                            <span
                              key={tech}
                              style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.625rem',
                                padding: '2px 7px',
                                borderRadius: 'var(--radius-pill)',
                                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                color: '#F2EFE7',
                                fontWeight: 500,
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '3px'
                              }}
                            >
                              {techInfo && (
                                <img
                                  src={techInfo.logo}
                                  alt={`${tech} logo`}
                                  style={{
                                    width: '10px',
                                    height: '10px',
                                    objectFit: 'contain',
                                    filter: techInfo.isMonochrome ? 'invert(1) brightness(2)' : 'none'
                                  }}
                                />
                              )}
                              {tech}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'var(--font-display)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                color: 'var(--color-primary)',
                textDecoration: 'none'
              }}
            >
              <span>Explore all projects &amp; case studies</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Card 2: Experience (1 example: Lead Developer & Architect) */}
          <div className="bento-card">
            <div>
              {/* Header */}
              <div className="bento-card-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                  <div className="bento-icon-badge" style={{ backgroundColor: 'rgba(16, 185, 129, 0.12)', color: '#10B981' }}>
                    <Briefcase size={18} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.0625rem', fontWeight: 800, color: 'var(--ink-primary)', margin: 0 }}>
                      Experience
                    </h3>
                  </div>
                </div>
                <Link to="/experience" className="bento-arrow-btn" aria-label="View experience">
                  <ArrowUpRight size={18} />
                </Link>
              </div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--ink-muted)', margin: '0 0 10px 0', lineHeight: 1.45 }}>
                Active software engineering builds, systems analysis, and academic foundations.
              </p>

              {/* 1 Experience Example: Lead Developer & Architect */}
              <div className="milestone-item-card" style={{ padding: '12px 14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--ink-primary)' }}>
                      {featuredExperience.title}
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.625rem',
                      color: 'var(--color-primary)',
                      fontWeight: 700,
                      backgroundColor: 'rgba(51, 104, 160, 0.08)',
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-pill)'
                    }}
                  >
                    {featuredExperience.badge}
                  </span>
                </div>

                <div style={{ fontSize: '0.75rem', color: 'var(--ink-muted)', marginBottom: '8px' }}>
                  {featuredExperience.meta}
                </div>

                <p style={{ fontSize: '0.75rem', color: 'var(--ink-primary)', lineHeight: 1.5, margin: '0 0 10px 0' }}>
                  {featuredExperience.summary}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                  {featuredExperience.tags.map((tag, tIdx) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.625rem',
                        color: 'var(--color-primary)',
                        fontWeight: 600
                      }}
                    >
                      {tag}{tIdx < featuredExperience.tags.length - 1 ? ' •' : ''}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/experience"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'var(--font-display)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                color: 'var(--color-primary)',
                textDecoration: 'none'
              }}
            >
              <span>Explore full experience timeline (3 milestones)</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* ROW 2: Stack (spans 1.05fr) | Certifications (spans 0.95fr) | About (spans 1fr) */}
        <div className="bento-row-2">
          {/* Card 3: Stack (1 example: Core Full-Stack & AI Stack) */}
          <div className="bento-card">
            <div>
              {/* Header */}
              <div className="bento-card-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                  <div className="bento-icon-badge" style={{ backgroundColor: 'rgba(36, 123, 123, 0.12)', color: 'var(--ink-secondary-accent)' }}>
                    <Layers size={18} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.0625rem', fontWeight: 800, color: 'var(--ink-primary)', margin: 0 }}>
                      Stack
                    </h3>
                  </div>
                </div>
                <Link to="/stack" className="bento-arrow-btn" aria-label="Explore technology stack">
                  <ArrowUpRight size={18} />
                </Link>
              </div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--ink-muted)', margin: '0 0 10px 0', lineHeight: 1.45 }}>
                5-layer architectural matrix across frontend, backend, database, and practical AI.
              </p>

              {/* 1 Example: Core Daily Drivers */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  <span className="ai-pill-chip">
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }} />
                    React &amp; TypeScript
                  </span>
                  <span className="ai-pill-chip">
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                    Node.js &amp; Express
                  </span>
                  <span className="ai-pill-chip">
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#D97706' }} />
                    Python &amp; OpenAI API
                  </span>
                  <span className="ai-pill-chip">
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--color-secondary)' }} />
                    Supabase &amp; PostgreSQL
                  </span>
                </div>

                {/* Inspectable Command Pill */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: 'var(--bg-canvas)',
                    border: '1px solid var(--border-subtle)',
                    marginTop: '2px'
                  }}
                >
                  <Search size={13} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--ink-muted)' }}>
                    Sensa speech engine &amp; LLM parser...
                  </span>
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-primary)',
                      marginLeft: 'auto',
                      flexShrink: 0
                    }}
                  />
                </div>
              </div>
            </div>

            <Link
              to="/stack"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'var(--font-display)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                color: 'var(--color-primary)',
                textDecoration: 'none'
              }}
            >
              <span>Explore 5-layer stack matrix</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Card 4: Certifications (1 example: freeCodeCamp Full-Stack) */}
          <div className="bento-card">
            <div>
              {/* Header */}
              <div className="bento-card-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                  <div className="bento-icon-badge" style={{ backgroundColor: 'rgba(51, 104, 160, 0.12)', color: 'var(--color-primary)' }}>
                    <Award size={18} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.0625rem', fontWeight: 800, color: 'var(--ink-primary)', margin: 0 }}>
                      Certifications
                    </h3>
                  </div>
                </div>
                <Link to="/certifications" className="bento-arrow-btn" aria-label="View certifications">
                  <ArrowUpRight size={18} />
                </Link>
              </div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--ink-muted)', margin: '0 0 10px 0', lineHeight: 1.45 }}>
                freeCodeCamp Full-Stack curriculum and continuous technical development.
              </p>

              {/* 1 Example: freeCodeCamp Medal Seal */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '8px 10px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--bg-canvas)',
                  border: '1px solid var(--border-subtle)',
                  textAlign: 'center'
                }}
              >
                <div
                  style={{
                    width: '58px',
                    height: '58px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    marginBottom: '6px',
                    boxShadow: 'var(--shadow-sm)',
                    backgroundColor: 'var(--surface-white)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid rgba(51, 104, 160, 0.2)'
                  }}
                >
                  <img
                    src="/certifications-badge.jpg"
                    alt="freeCodeCamp Credential Badge"
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: 'var(--ink-primary)',
                    color: 'var(--bg-canvas)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <Clock size={11} style={{ color: 'var(--color-primary)' }} />
                  <span>In Progress · Full-Stack Track</span>
                </div>
              </div>
            </div>

            <Link
              to="/certifications"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'var(--font-display)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                color: 'var(--color-primary)',
                textDecoration: 'none'
              }}
            >
              <span>View curriculum details</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Card 5: About (1 example: Engineering Bio) */}
          <div className="bento-card">
            <div>
              {/* Header */}
              <div className="bento-card-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                  <div className="bento-icon-badge" style={{ backgroundColor: 'rgba(217, 119, 6, 0.12)', color: '#D97706' }}>
                    <User size={18} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.0625rem', fontWeight: 800, color: 'var(--ink-primary)', margin: 0 }}>
                      About
                    </h3>
                  </div>
                </div>
                <Link to="/about" className="bento-arrow-btn" aria-label="Read full about background">
                  <ArrowUpRight size={18} />
                </Link>
              </div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--ink-muted)', margin: '0 0 8px 0', lineHeight: 1.45 }}>
                The personal journey, engineering values, and curiosity behind my craft.
              </p>

              {/* Fanned Cards */}
              <div className="fan-deck-container" style={{ height: '70px', margin: '4px 0' }}>
                <div className="fan-card fan-card-left" style={{ width: '52px', height: '62px' }}>
                  <img src="/about-var1.jpg" alt="Minimal Silhouette Vector" />
                </div>
                <div className="fan-card fan-card-center" style={{ width: '52px', height: '62px' }}>
                  <img
                    src={theme === 'dark' ? '/avatar-profile-dark.jpg' : '/avatar-profile.jpg'}
                    alt="Kian Davey Antolin"
                  />
                </div>
                <div className="fan-card fan-card-right" style={{ width: '52px', height: '62px' }}>
                  <img src="/about-var2.jpg" alt="Geometric Avatar Vector" />
                </div>
              </div>

              {/* Bio Summary */}
              <div style={{ textAlign: 'center', marginTop: '4px' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.875rem', color: 'var(--ink-primary)' }}>
                  Kian Davey Antolin
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                  Aspiring AI Engineer · BS IT Candidate
                </div>
                <div style={{ fontSize: '0.65625rem', color: 'var(--ink-muted)', marginTop: '1px' }}>
                  Bulacan State University · Class of 2026
                </div>
              </div>
            </div>

            <Link
              to="/about"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'var(--font-display)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                color: 'var(--color-primary)',
                textDecoration: 'none'
              }}
            >
              <span>Read my story</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Study Drawer */}
      <ProjectDrawer
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
