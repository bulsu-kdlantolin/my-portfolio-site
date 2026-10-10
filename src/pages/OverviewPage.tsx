import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { Project } from '../types/project';
import { ProjectDrawer } from '../components/projects/ProjectDrawer';
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

  // Featured Experience items (Quick Access preview linking to /experience)
  const experienceItems = [
    {
      badge: 'Active Build',
      title: 'Lead Developer & Architect',
      meta: 'Sensa Chrome Extension (2024 — Present)',
      tags: ['Manifest V3', 'Web Speech API', 'Offscreen Docs']
    },
    {
      badge: 'Academic',
      title: 'BS in Information Technology',
      meta: 'Bulacan State University (Expected 2026)',
      tags: ['Systems Analysis', 'Relational Schemas', 'Software Lifecycles']
    },
    {
      badge: 'Applied AI',
      title: 'Applied AI & RAG Prototyping',
      meta: 'Independent Systems Architecture (2024 — Present)',
      tags: ['OpenAI API', 'Prompt Guardrails', 'Vector Search']
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', position: 'relative' }}>

      {/* 1. Hero Statement Row + "Get in touch" CTA */}
      <section className="hero-header-row">
        <div style={{ flex: '1 1 500px', maxWidth: '820px' }}>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 3.2vw, 2.75rem)',
              fontWeight: 800,
              color: 'var(--ink-primary)',
              letterSpacing: '-0.025em',
              lineHeight: 1.15,
              marginBottom: '12px'
            }}
          >
            Connecting AI to real applications that stay reliable when the model's output gets messy.
          </h1>
          <p
            style={{
              fontSize: 'clamp(0.9375rem, 1.15vw, 1.0625rem)',
              color: 'var(--ink-muted)',
              lineHeight: 1.6,
              margin: 0
            }}
          >
            I am a <strong>BS Information Technology student approaching graduation</strong>, focused on engineering full-stack web applications and AI-powered systems. I build responsive <strong>React &amp; TypeScript</strong> interfaces, structured <strong>Node.js / Python</strong> services, and inspectable AI pipelines.
          </p>
        </div>

        {/* Top Right "Get in touch" Pill Button */}
        <Link to="/contact" style={{ textDecoration: 'none' }}>
          <button
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '11px 24px',
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

      {/* 2. Tools I Work With Ribbon Strip (Compact, No Circle Containers, Edge-to-Edge) */}
      <section
        style={{
          backgroundColor: 'var(--surface-white)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-card)',
          padding: '6px 16px',
          minHeight: '44px',
          boxShadow: 'var(--shadow-sm)',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          overflow: 'hidden',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Left Label: Compact single-row */}
        <div
          style={{
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            paddingRight: '16px',
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
        <div className="marquee-container">
          <div className="marquee-track marquee-left-to-right">
            {/* Set 1 (2x dailyDrivers = 28 icons to fill any viewport width without gaps) */}
            {[...dailyDrivers, ...dailyDrivers].map((tool, i) => (
              <div key={`d1-${tool.name}-${i}`} className="marquee-item" title={tool.name}>
                <span className={`marquee-item-logo ${tool.isMonochrome ? 'is-monochrome' : ''}`}>
                  <img src={tool.logo} alt={tool.name} width="22" height="22" loading="lazy" />
                </span>
                <span className="marquee-item-label">{tool.name}</span>
              </div>
            ))}
            {/* Set 2 (Duplicate for Seamless Infinite Loop) */}
            {[...dailyDrivers, ...dailyDrivers].map((tool, i) => (
              <div key={`d2-${tool.name}-${i}`} className="marquee-item" aria-hidden="true" title={tool.name}>
                <span className={`marquee-item-logo ${tool.isMonochrome ? 'is-monochrome' : ''}`}>
                  <img src={tool.logo} alt={tool.name} width="22" height="22" loading="lazy" />
                </span>
                <span className="marquee-item-label">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Kenneth Villar Style Master Bento Grid Container */}
      <section className="bento-wrapper" style={{ zIndex: 1 }}>
        {/* ROW 1: Projects (38%) | About (28%) | AI Builds (34%) */}
        <div className="bento-row-1">
          {/* Card 1: Projects */}
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
              <p style={{ fontSize: '0.8125rem', color: 'var(--ink-muted)', margin: '0 0 14px 0', lineHeight: 1.45 }}>
                Assistive browser extensions, full-stack workflows, and AI apps built to solve real friction.
              </p>

              {/* Stacked Preview 1: Sensa Mockup Browser Window */}
              {sensaProject && (
                <div
                  onClick={() => setSelectedProject(sensaProject)}
                  style={{
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--bg-canvas)',
                    border: '1px solid var(--border-subtle)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)',
                    marginBottom: '10px'
                  }}
                >
                  {/* Browser Window Header Bar */}
                  <div
                    style={{
                      padding: '7px 12px',
                      borderBottom: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      backgroundColor: 'var(--surface-white)'
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

                  {/* Dark Accent Interior Preview Window (Kenneth Villar contrast style) */}
                  <div className="sensa-preview-panel">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: 'var(--color-secondary)', fontWeight: 700, letterSpacing: '0.05em' }}>
                        ASSISTIVE WEB ENGINE
                      </span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5625rem', color: 'rgba(242, 239, 231, 0.6)' }}>
                        MV3 Plasmo
                      </span>
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.9375rem', color: '#F2EFE7' }}>
                      {sensaProject.title}
                    </div>
                    <p style={{ fontSize: '0.75rem', color: 'rgba(242, 239, 231, 0.85)', lineHeight: 1.4, margin: 0 }}>
                      {sensaProject.tagline}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '4px' }}>
                      {sensaProject.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.5625rem',
                            padding: '2px 6px',
                            borderRadius: 'var(--radius-xs)',
                            backgroundColor: 'rgba(255, 255, 255, 0.12)',
                            color: '#F2EFE7',
                            fontWeight: 500
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Stacked Preview 2: Offset Honest Secondary Slot */}
            <Link to="/projects" style={{ textDecoration: 'none' }}>
              <div
                style={{
                  padding: '10px 12px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px dashed var(--border-subtle)',
                  backgroundColor: 'var(--bg-canvas)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'border-color var(--transition-fast)'
                }}
              >
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8125rem', color: 'var(--ink-primary)' }}>
                    Full-Stack & AI Systems
                  </div>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--ink-muted)' }}>
                    More projects coming soon — active planning
                  </div>
                </div>
                <ArrowUpRight size={14} style={{ color: 'var(--color-primary)' }} />
              </div>
            </Link>
          </div>

          {/* Card 2: Experience */}
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
              <p style={{ fontSize: '0.8125rem', color: 'var(--ink-muted)', margin: '0 0 12px 0', lineHeight: 1.45 }}>
                Active software engineering builds, systems analysis, and academic foundations.
              </p>

              {/* 3 Structured Experience Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
                {experienceItems.map((item, idx) => (
                  <div key={idx} className="milestone-item-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }} />
                        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8125rem', color: 'var(--ink-primary)' }}>
                          {item.title}
                        </span>
                      </div>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.5625rem',
                          color: 'var(--color-primary)',
                          fontWeight: 700,
                          backgroundColor: 'rgba(51, 104, 160, 0.08)',
                          padding: '1px 6px',
                          borderRadius: 'var(--radius-pill)'
                        }}
                      >
                        {item.badge}
                      </span>
                    </div>

                    <div style={{ fontSize: '0.75rem', color: 'var(--ink-muted)', marginBottom: '5px' }}>
                      {item.meta}
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tag}
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.625rem',
                            color: 'var(--color-primary)',
                            fontWeight: 600
                          }}
                        >
                          {tag}{tIdx < item.tags.length - 1 ? ' •' : ''}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
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
              <span>Explore full experience timeline</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>

        {/* ROW 2: Stack (spans 1.05fr) | Certifications (spans 0.95fr) | About (spans 1fr) */}
        <div className="bento-row-2">
          {/* Card 3: Stack */}
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
              <p style={{ fontSize: '0.8125rem', color: 'var(--ink-muted)', margin: '0 0 12px 0', lineHeight: 1.45 }}>
                5-layer architectural matrix across frontend, backend, database, and practical AI.
              </p>

              {/* Floating Pill Chips with Status Dots */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginBottom: '8px' }}>
                <span className="ai-pill-chip">
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }} />
                  React &amp; TypeScript
                </span>
                <span className="ai-pill-chip">
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                  Node.js / Express
                </span>
                <span className="ai-pill-chip">
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#D97706' }} />
                  Python &amp; OpenAI API
                </span>
              </div>

              {/* Search-Bar Style Command Pill */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '7px 12px',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: 'var(--bg-canvas)',
                  border: '1px solid var(--border-subtle)',
                  margin: '6px 0 10px 0'
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

              {/* Additional Floating Chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                <span className="ai-pill-chip">
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }} />
                  PostgreSQL Schemas
                </span>
                <span className="ai-pill-chip">
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--color-secondary)' }} />
                  Manifest V3 Workers
                </span>
                <span className="ai-pill-chip">
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                  Supabase Backend
                </span>
                <span className="ai-pill-chip">
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#8B5CF6' }} />
                  Prompt Guardrails
                </span>
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
              <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* Card 4: Certifications */}
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
              <p style={{ fontSize: '0.8125rem', color: 'var(--ink-muted)', margin: '0 0 12px 0', lineHeight: 1.45 }}>
                freeCodeCamp Full-Stack curriculum and continuous technical development.
              </p>

              {/* Centered Circular Seal Badge Graphic */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '14px 10px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--bg-canvas)',
                  border: '1px solid var(--border-subtle)',
                  textAlign: 'center'
                }}
              >
                <div
                  style={{
                    width: '82px',
                    height: '82px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    marginBottom: '10px',
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

                {/* Dark Pill Badge under Medal */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '5px 14px',
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
              <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* Card 5: About */}
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
                Who I am, engineering values, and academic background.
              </p>

              {/* Kenneth Villar Style 3 Fanned-Out Cards */}
              <div className="fan-deck-container">
                <div className="fan-card fan-card-left">
                  <img src="/about-var1.jpg" alt="Minimal Silhouette Vector" />
                </div>
                <div className="fan-card fan-card-center">
                  <img src="/avatar-profile.jpg" alt="Kian Davey Antolin" />
                </div>
                <div className="fan-card fan-card-right">
                  <img src="/about-var2.jpg" alt="Geometric Avatar Vector" />
                </div>
              </div>

              {/* Bio Summary */}
              <div style={{ textAlign: 'center', marginTop: '6px' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.9375rem', color: 'var(--ink-primary)' }}>
                  Kian Davey Antolin
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                  Aspiring AI Engineer · BS IT Candidate
                </div>
                <div style={{ fontSize: '0.6875rem', color: 'var(--ink-muted)', marginTop: '2px' }}>
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
              <span>Read full background</span>
              <ArrowUpRight size={13} />
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
