import React, { useEffect, useRef } from 'react';
import { Project } from '../../types/project';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { GithubIcon } from '../common/Icons';
import { X, ExternalLink, CheckCircle2, AlertCircle } from 'lucide-react';

interface ProjectDrawerProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDrawer: React.FC<ProjectDrawerProps> = ({ project, onClose }) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(20, 35, 52, 0.45)',
        backdropFilter: 'blur(4px)',
        transition: 'opacity var(--transition-normal)'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={drawerRef}
        style={{
          width: '100%',
          maxWidth: '680px',
          height: '100%',
          backgroundColor: 'var(--bg-canvas)',
          borderLeft: '1px solid var(--border-strong)',
          boxShadow: 'var(--shadow-drawer)',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          padding: 'clamp(24px, 4vw, 40px)',
          animation: 'slideInRight 220ms var(--ease-out)'
        }}
      >
        {/* Drawer Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            borderBottom: '1px solid var(--border-subtle)',
            paddingBottom: '20px',
            marginBottom: '24px'
          }}
        >
          <div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '10px' }}>
              <Badge variant="teal" size="sm">
                {project.categoryLabel}
              </Badge>
              <Badge variant="status" size="sm" pulse={project.status === 'Active' || project.status === 'In Development'}>
                {project.status}
              </Badge>
            </div>
            <h2
              id="drawer-title"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.625rem',
                fontWeight: 700,
                color: 'var(--ink-primary)',
                lineHeight: 1.2
              }}
            >
              {project.title}
            </h2>
            <p style={{ color: 'var(--color-primary)', fontSize: '0.9375rem', fontWeight: 500, marginTop: '4px' }}>
              {project.tagline}
            </p>
          </div>

          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close project case study"
            style={{
              padding: '8px',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--border-subtle)',
              backgroundColor: 'var(--surface-white)',
              color: 'var(--ink-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all var(--transition-fast)'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Technologies Grid */}
        <div style={{ marginBottom: '28px' }}>
          <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: '10px' }}>
            Technology Stack & Libraries
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.technologies.map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-xs)',
                  backgroundColor: 'var(--surface-card)',
                  border: '1px solid var(--border-teal)',
                  color: 'var(--ink-primary)'
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Problem & Goal */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '16px',
            marginBottom: '28px'
          }}
        >
          <div
            style={{
              backgroundColor: 'var(--surface-white)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '18px'
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '8px' }}>
              <AlertCircle size={14} /> Problem Context
            </span>
            <p style={{ fontSize: '0.875rem', color: 'var(--ink-muted)', lineHeight: 1.6 }}>
              {project.problem}
            </p>
          </div>

          <div
            style={{
              backgroundColor: 'var(--surface-white)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '18px'
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-secondary)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '8px' }}>
              <CheckCircle2 size={14} /> Engineering Goal
            </span>
            <p style={{ fontSize: '0.875rem', color: 'var(--ink-muted)', lineHeight: 1.6 }}>
              {project.goal}
            </p>
          </div>
        </div>

        {/* Architecture & Flow */}
        <div
          style={{
            backgroundColor: 'var(--surface-white)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '20px',
            marginBottom: '28px'
          }}
        >
          <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '8px' }}>
            Architecture & Data Flow
          </h4>
          <p style={{ fontSize: '0.875rem', color: 'var(--ink-primary)', marginBottom: '14px', lineHeight: 1.6 }}>
            {project.architecture.overview}
          </p>
          <ol style={{ paddingLeft: '0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {project.architecture.flow.map((step, idx) => (
              <li
                key={idx}
                style={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'flex-start',
                  fontSize: '0.8125rem',
                  color: 'var(--ink-muted)',
                  lineHeight: 1.55
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    color: 'var(--color-primary)',
                    backgroundColor: 'rgba(51, 104, 160, 0.1)',
                    width: '20px',
                    height: '20px',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  {idx + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Key Engineering Decisions */}
        <div style={{ marginBottom: '28px' }}>
          <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: '12px' }}>
            Key Engineering Decisions
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {project.keyDecisions.map((decision, i) => (
              <div
                key={i}
                style={{
                  padding: '14px 16px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'rgba(200, 223, 219, 0.35)',
                  border: '1px solid var(--border-teal)'
                }}
              >
                <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--ink-primary)', marginBottom: '4px' }}>
                  {decision.title}
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--ink-muted)', lineHeight: 1.55 }}>
                  {decision.rationale}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real Challenges & Solutions */}
        <div style={{ marginBottom: '28px' }}>
          <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: '12px' }}>
            Real Engineering Challenges & Solutions
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {project.challenges.map((c, i) => (
              <div
                key={i}
                style={{
                  padding: '14px 16px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--surface-white)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--ink-primary)', marginBottom: '4px' }}>
                  Challenge: {c.challenge}
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--ink-muted)', lineHeight: 1.55 }}>
                  <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Solution: </span>
                  {c.solution}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What I Learned */}
        <div style={{ marginBottom: '32px' }}>
          <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: '10px' }}>
            Key Engineering Takeaways
          </h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {project.learnings.map((learning, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  gap: '8px',
                  alignItems: 'baseline',
                  fontSize: '0.8125rem',
                  color: 'var(--ink-primary)'
                }}
              >
                <span style={{ color: 'var(--color-secondary)' }}>▸</span>
                <span>{learning}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* External Links */}
        <div
          style={{
            marginTop: 'auto',
            paddingTop: '20px',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap'
          }}
        >
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Button variant="primary" size="sm" icon={<GithubIcon size={14} />} iconPosition="left">
                View Repository
              </Button>
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Button variant="secondary" size="sm" icon={<ExternalLink size={14} />}>
                Launch Application
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
