import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ProjectDrawer } from '../components/projects/ProjectDrawer';
import { projectsData } from '../data/projects';
import { stackData } from '../data/stack';
import { certificationsData } from '../data/certifications';
import { Project } from '../types/project';
import { ArrowRight, Layers, Award, ShieldCheck } from 'lucide-react';

export const OverviewPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeStackTier, setActiveStackTier] = useState<string>('all');
  const featuredProjects = projectsData.filter((p) => p.featured);

  const filteredStack =
    activeStackTier === 'all'
      ? stackData
      : stackData.filter((tier) => tier.id === activeStackTier);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
      {/* 1. Command Center / Overview Header Banner */}
      <section
        style={{
          backgroundColor: 'var(--surface-white)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-card)',
          padding: 'clamp(24px, 4vw, 36px)',
          boxShadow: 'var(--shadow-card)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Architectural indicator badges */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '16px',
            flexWrap: 'wrap'
          }}
        >
          <Badge variant="primary" size="sm">
            ENGINEERING OVERVIEW
          </Badge>
          <Badge variant="teal" size="sm">
            BS IT (APPROACHING GRADUATION)
          </Badge>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6875rem',
              color: 'var(--ink-muted)'
            }}
          >
            SYS-ID: KDA-2026 // WORKSPACE ACTIVE
          </span>
        </div>

        {/* Primary Statement */}
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            fontWeight: 800,
            color: 'var(--ink-primary)',
            letterSpacing: '-0.02em',
            lineHeight: 1.18,
            marginBottom: '14px',
            maxWidth: '920px'
          }}
        >
          Connecting AI to real applications that stay reliable when the model's output gets messy.
        </h2>

        {/* Narrative */}
        <p
          style={{
            fontSize: 'clamp(0.9375rem, 1.2vw, 1.0625rem)',
            color: 'var(--ink-muted)',
            lineHeight: 1.65,
            maxWidth: '820px',
            marginBottom: '28px'
          }}
        >
          I am a <strong>BS Information Technology student approaching graduation</strong>, focused on
          engineering full-stack web applications and AI-powered systems. I build responsive{' '}
          <strong>React & TypeScript</strong> interfaces, structured <strong>Node.js & SQL</strong> backends,
          and practical <strong>Python, OpenAI, vector search, and RAG</strong> pipelines that solve real problems.
        </p>

        {/* Action Group: 90/10 Action Balance */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
          <Link to="/projects" style={{ textDecoration: 'none' }}>
            <Button variant="primary" size="md" icon={<ArrowRight size={15} />}>
              Explore Built Projects
            </Button>
          </Link>
          <a href="#tech-stack" style={{ textDecoration: 'none' }}>
            <Button
              variant="secondary"
              size="md"
              icon={<Layers size={15} />}
              iconPosition="left"
            >
              Technology Stack
            </Button>
          </a>
          <a href="#certifications" style={{ textDecoration: 'none' }}>
            <Button
              variant="outline"
              size="md"
              icon={<Award size={15} />}
              iconPosition="left"
            >
              Certifications
            </Button>
          </a>
        </div>
      </section>

      {/* 2. Telemetry & Focus Grid */}
      <section
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
            borderRadius: 'var(--radius-md)',
            padding: '20px',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6875rem',
              color: 'var(--color-primary)',
              textTransform: 'uppercase',
              fontWeight: 700,
              marginBottom: '6px'
            }}
          >
            TECHNICAL FOCUS
          </div>
          <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--ink-primary)', marginBottom: '4px' }}>
            AI Application Engineering
          </div>
          <div style={{ fontSize: '0.8125rem', color: 'var(--ink-muted)', lineHeight: 1.5 }}>
            Bridging web products with embeddings, semantic search, and contextual RAG pipelines.
          </div>
        </div>

        <div
          style={{
            backgroundColor: 'var(--surface-white)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '20px',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6875rem',
              color: 'var(--ink-secondary-accent)',
              textTransform: 'uppercase',
              fontWeight: 700,
              marginBottom: '6px'
            }}
          >
            FULL-STACK STACK
          </div>
          <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--ink-primary)', marginBottom: '4px' }}>
            React + TypeScript + Node & SQL
          </div>
          <div style={{ fontSize: '0.8125rem', color: 'var(--ink-muted)', lineHeight: 1.5 }}>
            Predictable state trees, strict typing, relational schemas, and RESTful APIs.
          </div>
        </div>

        <div
          style={{
            backgroundColor: 'var(--surface-white)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '20px',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6875rem',
              color: 'var(--color-primary)',
              textTransform: 'uppercase',
              fontWeight: 700,
              marginBottom: '6px'
            }}
          >
            ACADEMIC FOUNDATION
          </div>
          <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--ink-primary)', marginBottom: '4px' }}>
            BS Information Technology
          </div>
          <div style={{ fontSize: '0.8125rem', color: 'var(--ink-muted)', lineHeight: 1.5 }}>
            Systems analysis, database administration, software engineering, and networking.
          </div>
        </div>

        <div
          style={{
            backgroundColor: 'var(--surface-white)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '20px',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6875rem',
              color: 'var(--ink-secondary-accent)',
              textTransform: 'uppercase',
              fontWeight: 700,
              marginBottom: '6px'
            }}
          >
            AVAILABILITY STATUS
          </div>
          <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--ink-primary)', marginBottom: '4px' }}>
            Ready for Opportunities
          </div>
          <div style={{ fontSize: '0.8125rem', color: 'var(--ink-muted)', lineHeight: 1.5 }}>
            Open to full-time engineering roles, AI projects, and software internships.
          </div>
        </div>
      </section>

      {/* 3. Featured Engineering Builds */}
      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '4px' }}>
              PRIMARY DELIVERABLES
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--ink-primary)' }}>
              Featured Engineering Projects
            </h3>
          </div>
          <Link to="/projects" style={{ textDecoration: 'none' }}>
            <Button variant="secondary" size="sm" icon={<ArrowRight size={14} />}>
              View All 4 Projects
            </Button>
          </Link>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px'
          }}
        >
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </section>

      {/* 4. Tech Stack & Capabilities Section */}
      <section id="tech-stack" style={{ scrollMarginTop: '80px' }}>
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', flexWrap: 'wrap' }}>
            <Badge variant="primary" size="sm">
              CAPABILITY MATRIX
            </Badge>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--ink-muted)' }}>
              5-LAYER ENGINEERING ARCHITECTURE
            </span>
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--ink-primary)', marginBottom: '6px' }}>
            Technology Stack & Core Competencies
          </h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--ink-muted)', maxWidth: '820px', lineHeight: 1.6 }}>
            Structured by engineering responsibility—explaining where each technology is applied across frontend client views, backend services, relational databases, practical AI pipelines, and developer tooling.
          </p>
        </div>

        {/* Filter Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '20px'
          }}
        >
          {[
            { id: 'all', label: `All Layers (${stackData.length})` },
            { id: 'frontend', label: 'Frontend' },
            { id: 'backend', label: 'Backend & APIs' },
            { id: 'database', label: 'Databases' },
            { id: 'ai-engineering', label: 'Applied AI' },
            { id: 'workflow', label: 'Tools & Workflow' }
          ].map((tab) => {
            const isActive = activeStackTier === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveStackTier(tab.id)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.8125rem',
                  fontWeight: isActive ? 700 : 500,
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-pill)',
                  border: `1px solid ${isActive ? 'var(--color-primary)' : 'var(--border-subtle)'}`,
                  backgroundColor: isActive ? 'var(--color-primary)' : 'var(--surface-white)',
                  color: isActive ? 'var(--bg-canvas)' : 'var(--ink-muted)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Stack Layers List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {filteredStack.map((tier) => (
            <div
              key={tier.id}
              style={{
                backgroundColor: 'var(--surface-white)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-card)',
                padding: 'clamp(20px, 3vw, 24px)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              {/* Layer Header */}
              <div style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      color: 'var(--color-primary)',
                      letterSpacing: '0.04em'
                    }}
                  >
                    {tier.badge}
                  </span>
                </div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1875rem', fontWeight: 700, color: 'var(--ink-primary)', marginBottom: '4px' }}>
                  {tier.title}
                </h4>
                <p style={{ fontSize: '0.8125rem', color: 'var(--ink-muted)', lineHeight: 1.5, maxWidth: '820px' }}>
                  {tier.description}
                </p>
              </div>

              {/* Skills Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '12px'
                }}
              >
                {tier.skills.map((skill) => (
                  <div
                    key={skill.name}
                    style={{
                      backgroundColor: 'rgba(200, 223, 219, 0.25)',
                      border: '1px solid var(--border-teal)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '14px 16px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
                        <span style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--ink-primary)', fontFamily: 'var(--font-display)' }}>
                          {skill.name}
                        </span>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--ink-secondary-accent)', fontWeight: 600 }}>
                          {skill.role}
                        </span>
                      </div>
                      <p style={{ fontSize: '0.8125rem', color: 'var(--ink-muted)', lineHeight: 1.5, marginBottom: '12px' }}>
                        {skill.experienceContext}
                      </p>
                    </div>

                    {skill.tags && skill.tags.length > 0 && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                        {skill.tags.map((tag) => (
                          <span
                            key={tag}
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.6875rem',
                              padding: '2px 7px',
                              borderRadius: '4px',
                              backgroundColor: 'var(--surface-white)',
                              border: '1px solid var(--border-subtle)',
                              color: 'var(--ink-primary)'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Technical Certifications & Accreditations Section */}
      <section id="certifications" style={{ scrollMarginTop: '80px' }}>
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', flexWrap: 'wrap' }}>
            <Badge variant="teal" size="sm">
              VERIFIED CREDENTIALS
            </Badge>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--ink-muted)' }}>
              INDUSTRY & ACADEMIC ACCREDITATIONS
            </span>
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--ink-primary)', marginBottom: '6px' }}>
            Certifications & Technical Accreditations
          </h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--ink-muted)', maxWidth: '820px', lineHeight: 1.6 }}>
            Accredited course specializations, verified technical assessments, and foundational certifications complementing formal BS Information Technology coursework.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px'
          }}
        >
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              style={{
                backgroundColor: 'var(--surface-white)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-card)',
                padding: '24px',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)'
              }}
            >
              <div>
                {/* Top Row: Category + Status Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
                  <Badge variant="teal" size="sm">
                    {cert.issuerCategory}
                  </Badge>
                  <Badge variant="status" size="sm">
                    {cert.status}
                  </Badge>
                </div>

                {/* Title */}
                <h4
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    color: 'var(--ink-primary)',
                    lineHeight: 1.35,
                    marginBottom: '8px'
                  }}
                >
                  {cert.title}
                </h4>

                {/* Issuer & Issue Date */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.8125rem',
                    color: 'var(--ink-muted)',
                    marginBottom: '12px'
                  }}
                >
                  <Award size={15} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span>
                    <strong style={{ color: 'var(--color-primary)' }}>{cert.issuer}</strong> • {cert.issueDate}
                  </span>
                </div>

                {/* Credential ID badge */}
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    color: 'var(--ink-muted)',
                    backgroundColor: 'var(--bg-canvas)',
                    border: '1px solid var(--border-subtle)',
                    padding: '3px 8px',
                    borderRadius: 'var(--radius-xs)',
                    display: 'inline-block',
                    marginBottom: '16px'
                  }}
                >
                  CREDENTIAL ID: {cert.credentialId}
                </div>

                {/* Skills Covered */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6875rem',
                        padding: '3px 8px',
                        borderRadius: 'var(--radius-xs)',
                        backgroundColor: 'rgba(200, 223, 219, 0.4)',
                        border: '1px solid var(--border-teal)',
                        color: 'var(--ink-primary)'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Verification Link / Status */}
              <div
                style={{
                  paddingTop: '14px',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    color: 'var(--ink-secondary-accent)',
                    fontWeight: 600
                  }}
                >
                  <ShieldCheck size={14} />
                  <span>VERIFIED RECORD</span>
                </span>
                <span style={{ color: 'var(--ink-muted)' }}>
                  ACCREDITED
                </span>
              </div>
            </div>
          ))}
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
