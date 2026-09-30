import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { Project } from '../types/project';
import { ProjectDrawer } from '../components/projects/ProjectDrawer';
import {
  ArrowUpRight,
  FolderGit2,
  User,
  Cpu,
  Award,
  Layers,
  GraduationCap,
  Clock,
  Search
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

  // Services list (Kenneth Villar 01-05 style)
  const servicesList = [
    { num: '01', title: 'Accessible Web Extensions', desc: 'Plasmo MV3, Voice API & captions' },
    { num: '02', title: 'Type-Safe React Frontends', desc: 'Predictable state trees & clean UI' },
    { num: '03', title: 'Relational Database Design', desc: 'Normalized SQL schemas & indexing' },
    { num: '04', title: 'Python & AI Integrations', desc: 'Prompt guardrails, RAG & OpenAI API' },
    { num: '05', title: 'RESTful Backend Services', desc: 'Node.js/Express APIs & Supabase' }
  ];

  // Milestones & Foundation (Kenneth Villar Client 1-3 style)
  const milestoneItems = [
    {
      badge: 'Academic Program',
      title: 'Bulacan State University',
      meta: 'BS in Information Technology (Expected 2026)',
      tags: ['Core Systems', 'Relational Databases', 'Software Engineering']
    },
    {
      badge: 'In-Flight Build',
      title: 'Sensa Chrome Extension',
      meta: 'Assistive Voice & Captions (In Active Development)',
      tags: ['Plasmo (MV3)', 'Web Speech API', 'Supabase', 'Accessibility']
    },
    {
      badge: 'Continuous Study',
      title: 'freeCodeCamp Curriculum',
      meta: 'Full-Stack Developer Track (In Progress)',
      tags: ['JavaScript Algorithms', 'React', 'Node APIs', 'Relational SQL']
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', position: 'relative' }}>
      {/* Background Topographic Wave Contours (Kenneth Villar designer aesthetic) */}
      <svg
        style={{
          position: 'absolute',
          top: -20,
          left: -40,
          width: 'calc(100% + 80px)',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.16,
          overflow: 'hidden'
        }}
        viewBox="0 0 1200 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M -100 180 C 250 80, 520 420, 880 220 C 1080 120, 1250 320, 1400 380"
          stroke="var(--color-primary)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <path
          d="M -50 320 C 320 220, 580 580, 960 380 C 1160 280, 1320 480, 1480 520"
          stroke="var(--color-secondary)"
          strokeWidth="1.2"
        />
        <path
          d="M -120 520 C 280 420, 520 720, 920 520 C 1120 420, 1280 680, 1440 720"
          stroke="var(--color-primary)"
          strokeWidth="1"
          strokeDasharray="6 6"
        />
      </svg>

      {/* 1. Hero Statement Row + "Get in touch" CTA */}
      <section
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '20px',
          position: 'relative',
          zIndex: 1
        }}
      >
        <div style={{ maxWidth: '880px' }}>
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

      {/* 2. Daily Drivers / Tools I Work With Ribbon Strip (Moving slowly left to right) */}
      <section
        style={{
          backgroundColor: 'var(--surface-white)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-card)',
          padding: '10px 18px',
          boxShadow: 'var(--shadow-sm)',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          overflow: 'hidden',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Left Label */}
        <div style={{ flexShrink: 0, paddingRight: '14px', borderRight: '1px solid var(--border-subtle)', zIndex: 2, backgroundColor: 'var(--surface-white)' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.625rem',
              color: 'var(--color-primary)',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}
          >
            DAILY DRIVERS
          </div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '0.9375rem',
              color: 'var(--ink-primary)',
              whiteSpace: 'nowrap'
            }}
          >
            Tools I work with
          </div>
        </div>

        {/* Right Tools Auto-Scrolling Marquee Strip (Moving slowly from left to right) */}
        <div className="marquee-container">
          <div className="marquee-track marquee-left-to-right">
            {/* Set 1 */}
            {dailyDrivers.map((tool, i) => (
              <div key={`d1-${tool.name}-${i}`} className="marquee-item">
                <span className={`marquee-item-logo ${tool.isMonochrome ? 'is-monochrome' : ''}`}>
                  <img src={tool.logo} alt={tool.name} width="16" height="16" loading="lazy" />
                </span>
                <span>{tool.name}</span>
              </div>
            ))}
            {/* Set 2 (Duplicate for Seamless Infinite Loop) */}
            {dailyDrivers.map((tool, i) => (
              <div key={`d2-${tool.name}-${i}`} className="marquee-item" aria-hidden="true">
                <span className={`marquee-item-logo ${tool.isMonochrome ? 'is-monochrome' : ''}`}>
                  <img src={tool.logo} alt={tool.name} width="16" height="16" loading="lazy" />
                </span>
                <span>{tool.name}</span>
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

          {/* Card 2: About (With Kenneth Villar 3-Card Fanned Stack) */}
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
                Who I am and how I work.
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

          {/* Card 3: AI Builds (Kenneth Villar Cloud of Floating Chips + Search Pill) */}
          <div className="bento-card">
            <div>
              {/* Header */}
              <div className="bento-card-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                  <div className="bento-icon-badge" style={{ backgroundColor: 'rgba(36, 123, 123, 0.12)', color: 'var(--ink-secondary-accent)' }}>
                    <Cpu size={18} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.0625rem', fontWeight: 800, color: 'var(--ink-primary)', margin: 0 }}>
                      AI Builds
                    </h3>
                  </div>
                </div>
                <Link to="/stack" className="bento-arrow-btn" aria-label="Explore AI stack">
                  <ArrowUpRight size={18} />
                </Link>
              </div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--ink-muted)', margin: '0 0 12px 0', lineHeight: 1.45 }}>
                Agents, RAG pipelines, and model orchestration tools I run.
              </p>

              {/* Floating Pill Chips with Status Dots */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginBottom: '8px' }}>
                <span className="ai-pill-chip">
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }} />
                  Sensa Voice Engine
                </span>
                <span className="ai-pill-chip">
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                  Contextual RAG
                </span>
                <span className="ai-pill-chip">
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#D97706' }} />
                  Prompt Guardrails
                </span>
              </div>

              {/* Kenneth Villar Search-Bar Style Pill */}
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
                  Sensa speech & command parser...
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
                  JSON Schema Enforcers
                </span>
                <span className="ai-pill-chip">
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--color-secondary)' }} />
                  Manifest V3 Workers
                </span>
                <span className="ai-pill-chip">
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                  Vector Embeddings
                </span>
                <span className="ai-pill-chip">
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#8B5CF6' }} />
                  PostgreSQL Schemas
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
        </div>

        {/* ROW 2: Credentials (26%) | Services (29%) | Milestones (45%) */}
        <div className="bento-row-2">
          {/* Card 4: Credentials (Kenneth Villar Medal Seal Style) */}
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
                      Credentials
                    </h3>
                  </div>
                </div>
                <Link to="/certifications" className="bento-arrow-btn" aria-label="View certifications">
                  <ArrowUpRight size={18} />
                </Link>
              </div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--ink-muted)', margin: '0 0 12px 0', lineHeight: 1.45 }}>
                freeCodeCamp Full-Stack Curriculum. Aspiring AI Engineer.
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

                {/* Dark Pill Badge under Medal (Kenneth Villar Certified Admin button style) */}
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

          {/* Card 5: Services & Capabilities (Kenneth Villar 01-05 Numbered List) */}
          <div className="bento-card">
            <div>
              {/* Header */}
              <div className="bento-card-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                  <div className="bento-icon-badge" style={{ backgroundColor: 'rgba(217, 119, 6, 0.12)', color: '#D97706' }}>
                    <Layers size={18} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.0625rem', fontWeight: 800, color: 'var(--ink-primary)', margin: 0 }}>
                      Services
                    </h3>
                  </div>
                </div>
                <Link to="/stack" className="bento-arrow-btn" aria-label="View services specifications">
                  <ArrowUpRight size={18} />
                </Link>
              </div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--ink-muted)', margin: '0 0 12px 0', lineHeight: 1.45 }}>
                What I engineer for web applications & AI pipelines.
              </p>

              {/* Kenneth Villar 01-05 Numbered List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                {servicesList.map((svc) => (
                  <div key={svc.num} className="service-item-row">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }} />
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--ink-primary)' }}>
                        {svc.title}
                      </span>
                    </div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--ink-muted)', fontWeight: 700 }}>
                      {svc.num}
                    </span>
                  </div>
                ))}
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
              <span>View technical matrix</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* Card 6: Academic & Track Record (Kenneth Villar Testimonials / Client Cards Format) */}
          <div className="bento-card">
            <div>
              {/* Header */}
              <div className="bento-card-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                  <div className="bento-icon-badge" style={{ backgroundColor: 'rgba(36, 123, 123, 0.12)', color: 'var(--ink-secondary-accent)' }}>
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.0625rem', fontWeight: 800, color: 'var(--ink-primary)', margin: 0 }}>
                      Milestones & Track Record
                    </h3>
                  </div>
                </div>
                <Link to="/about" className="bento-arrow-btn" aria-label="View academic track record">
                  <ArrowUpRight size={18} />
                </Link>
              </div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--ink-muted)', margin: '0 0 12px 0', lineHeight: 1.45 }}>
                Institutional training and active engineering trajectory.
              </p>

              {/* 3 Kenneth Villar Style Structured Review/Milestone Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
                {milestoneItems.map((item, idx) => (
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

                    {/* Orange/Accent Tag List like Kenneth's "GHL Build · Automation · Membership" */}
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
              <span>Explore comprehensive journey</span>
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
