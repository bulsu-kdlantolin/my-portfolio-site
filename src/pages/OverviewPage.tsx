import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ProjectDrawer } from '../components/projects/ProjectDrawer';
import { projectsData } from '../data/projects';
import { Project } from '../types/project';
import { ArrowRight, Cpu } from 'lucide-react';

export const OverviewPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
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
        {/* Subtle architectural grid indicator */}
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
          Building modern web applications with solid full-stack foundations and practical AI.
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

        {/* Action Group */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
          <Link to="/projects" style={{ textDecoration: 'none' }}>
            <Button variant="primary" size="md" icon={<ArrowRight size={15} />}>
              Explore Built Projects
            </Button>
          </Link>
          <Link to="/ai-systems" style={{ textDecoration: 'none' }}>
            <Button
              variant="secondary"
              size="md"
              icon={<Cpu size={15} />}
              iconPosition="left"
            >
              Interactive AI Systems
            </Button>
          </Link>
          <Link to="/how-i-build" style={{ textDecoration: 'none' }}>
            <Button variant="outline" size="md">
              How I Build
            </Button>
          </Link>
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
              color: 'var(--color-secondary)',
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
              color: 'var(--color-secondary)',
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

      {/* 4. AI Systems Visualizer Teaser Card */}
      <section
        style={{
          backgroundColor: 'rgba(200, 223, 219, 0.45)',
          border: '1.5px solid var(--border-teal)',
          borderRadius: 'var(--radius-card)',
          padding: 'clamp(20px, 3vw, 28px)',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <Badge variant="primary" size="sm">
                SYSTEM PIPELINE
              </Badge>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--ink-muted)' }}>
                7-STAGE ARCHITECTURE
              </span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--ink-primary)' }}>
              Interactive RAG & AI Pipeline Visualizer
            </h3>
          </div>
          <Link to="/ai-systems" style={{ textDecoration: 'none' }}>
            <Button variant="primary" size="sm" icon={<Cpu size={14} />} iconPosition="left">
              Launch Architecture Explorer
            </Button>
          </Link>
        </div>

        <p style={{ fontSize: '0.875rem', color: 'var(--ink-muted)', lineHeight: 1.6, maxWidth: '820px' }}>
          Explore how modern AI applications convert queries into vector coordinates, query embeddings across vector indices, assemble verified context blocks, and stream fact-grounded responses to web interfaces.
        </p>

        {/* Visual Mini Pipeline Track */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            overflowX: 'auto',
            padding: '8px 0',
            scrollbarWidth: 'none'
          }}
        >
          {['01. Query Input', '02. Embedding', '03. Vector Search', '04. Context Filtering', '05. Prompt Injection', '06. LLM Synthesis', '07. UI Stream'].map(
            (step, i) => (
              <React.Fragment key={step}>
                <div
                  style={{
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-xs)',
                    backgroundColor: 'var(--surface-white)',
                    border: '1px solid var(--border-subtle)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    color: 'var(--ink-primary)',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {step}
                </div>
                {i < 6 && (
                  <span style={{ color: 'var(--color-secondary)', fontSize: '0.75rem', fontWeight: 700 }}>
                    →
                  </span>
                )}
              </React.Fragment>
            )
          )}
        </div>
      </section>

      {/* 5. How I Build & Values Overview */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px'
        }}
      >
        <div
          style={{
            backgroundColor: 'var(--surface-white)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-card)',
            padding: '24px'
          }}
        >
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '8px' }}>
            ENGINEERING WORKFLOW
          </div>
          <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 700, color: 'var(--ink-primary)', marginBottom: '10px' }}>
            Responsible AI-Assisted Development
          </h4>
          <p style={{ fontSize: '0.875rem', color: 'var(--ink-muted)', lineHeight: 1.6, marginBottom: '16px' }}>
            I use AI tools like Cursor and Claude Code to accelerate boilerplate, explore edge cases, and run rapid iterations—while preserving strict human ownership over system architecture, security, and logic.
          </p>
          <Link to="/how-i-build" style={{ textDecoration: 'none' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              Read the 6-stage process <ArrowRight size={13} />
            </span>
          </Link>
        </div>

        <div
          style={{
            backgroundColor: 'var(--surface-white)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-card)',
            padding: '24px'
          }}
        >
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-secondary)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '8px' }}>
            HONEST POSITIONING
          </div>
          <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 700, color: 'var(--ink-primary)', marginBottom: '10px' }}>
            Work Grounded in Code, Not Buzzwords
          </h4>
          <p style={{ fontSize: '0.875rem', color: 'var(--ink-muted)', lineHeight: 1.6, marginBottom: '16px' }}>
            No fabricated clients, fake revenue metrics, or unearned titles. Every project displayed on this workspace represents real, inspectable code built with verified technical discipline.
          </p>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              About Kian's background <ArrowRight size={13} />
            </span>
          </Link>
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
