import React from 'react';
import { certificationsData } from '../data/certifications';
import { Badge } from '../components/common/Badge';
import { Award, BookOpen, ExternalLink, Clock } from 'lucide-react';

export const CertificationsPage: React.FC = () => {
  const cert = certificationsData[0];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Page Header */}
      <div
        style={{
          borderBottom: '1px solid var(--border-subtle)',
          paddingBottom: '20px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <Badge variant="teal" size="sm">
            CONTINUOUS LEARNING
          </Badge>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--ink-muted)' }}>
            ACTIVE CURRICULUM & CREDENTIALS
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
          Credentials & Technical Curriculum
        </h2>
        <p style={{ fontSize: '0.9375rem', color: 'var(--ink-muted)', maxWidth: '780px', lineHeight: 1.6 }}>
          Structured, self-paced technical curricula and coursework currently in progress, reinforcing core full-stack software development alongside university BS IT studies.
        </p>
      </div>

      {/* Highlights / Telemetry Stats */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px'
        }}
      >
        <div
          style={{
            backgroundColor: 'var(--surface-white)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-card)',
            padding: '18px 20px',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Current Track
          </span>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary)', marginTop: '4px' }}>
            Full-Stack Curriculum
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--ink-muted)' }}>freeCodeCamp Core</span>
        </div>

        <div
          style={{
            backgroundColor: 'var(--surface-white)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-card)',
            padding: '18px 20px',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Curriculum Status
          </span>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--ink-primary)', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Clock size={18} style={{ color: 'var(--color-primary)' }} /> In Progress
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--ink-muted)' }}>Active daily study & labs</span>
        </div>

        <div
          style={{
            backgroundColor: 'var(--surface-white)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-card)',
            padding: '18px 20px',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Core Skill Units
          </span>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--ink-secondary-accent)', marginTop: '4px' }}>
            5 Certifications
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--ink-muted)' }}>HTML, JS, React, SQL & APIs</span>
        </div>

        <div
          style={{
            backgroundColor: 'var(--surface-white)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-card)',
            padding: '18px 20px',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Degree Connection
          </span>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary)', marginTop: '4px' }}>
            BS IT Program
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--ink-muted)' }}>Direct practical complement</span>
        </div>
      </div>

      {/* Main Real Credential Card */}
      {cert && (
        <div
          style={{
            backgroundColor: 'var(--surface-white)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-card)',
            padding: 'clamp(20px, 3vw, 28px)',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    padding: '3px 8px',
                    borderRadius: 'var(--radius-xs)',
                    backgroundColor: 'rgba(200, 223, 219, 0.5)',
                    border: '1px solid var(--border-teal)',
                    color: 'var(--ink-primary)',
                    fontWeight: 600
                  }}
                >
                  {cert.issuerCategory.toUpperCase()}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    padding: '3px 8px',
                    borderRadius: 'var(--radius-xs)',
                    backgroundColor: 'var(--bg-canvas)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--color-primary)',
                    fontWeight: 600
                  }}
                >
                  {cert.status.toUpperCase()}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                  fontWeight: 800,
                  color: 'var(--ink-primary)',
                  marginBottom: '6px'
                }}
              >
                {cert.title}
              </h3>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem', color: 'var(--ink-muted)' }}>
                <Award size={16} style={{ color: 'var(--color-primary)' }} />
                <span>
                  <strong>{cert.issuer}</strong> • {cert.issueDate}
                </span>
              </div>
            </div>

            <a
              href={cert.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--bg-canvas)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--color-primary)',
                fontFamily: 'var(--font-display)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                textDecoration: 'none'
              }}
            >
              Curriculum Link <ExternalLink size={13} />
            </a>
          </div>

          <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '16px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--ink-muted)', marginBottom: '8px' }}>
              CURRICULUM MODULES & CORE SKILLS BEING MASTERED:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {cert.skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    padding: '4px 10px',
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
        </div>
      )}

      {/* Curriculum Note */}
      <div
        style={{
          backgroundColor: 'var(--surface-white)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-card)',
          padding: '20px',
          boxShadow: 'var(--shadow-sm)',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '12px'
        }}
      >
        <BookOpen size={20} style={{ color: 'var(--color-primary)', marginTop: '2px', flexShrink: 0 }} />
        <div>
          <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.9375rem', fontWeight: 700, color: 'var(--ink-primary)', marginBottom: '4px' }}>
            Academic Alignment & Pragmatic Mastery
          </h4>
          <p style={{ fontSize: '0.875rem', color: 'var(--ink-muted)', lineHeight: 1.5, margin: 0 }}>
            This curriculum directly complements coursework at Bulacan State University, reinforcing hands-on web development discipline through projects and algorithm challenges.
          </p>
        </div>
      </div>
    </div>
  );
};
