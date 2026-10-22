import React from 'react';
import { certificationsData } from '../data/certifications';
import { useTheme } from '../context/ThemeContext';
import { getTechLogo } from '../utils/techLogos';
import {
  CheckCircle2,
  Clock,
  ArrowUpRight,
  Award,
  GraduationCap,
  ShieldCheck,
  Calendar,
  Code2,
  Database,
  Terminal,
  Cpu,
  Network,
  Box,
  Smartphone,
  LayoutGrid,
  AppWindow,
  Layers,
  Sparkles
} from 'lucide-react';

export const CertificationsPage: React.FC = () => {
  const { theme } = useTheme();

  const renderSkillIcon = (skill: string) => {
    const tech = getTechLogo(skill);
    if (tech) {
      return (
        <img
          src={tech.logo}
          alt=""
          aria-hidden="true"
          style={{
            width: '12px',
            height: '12px',
            objectFit: 'contain',
            flexShrink: 0,
            filter: tech.isMonochrome && theme === 'dark' ? 'invert(1) brightness(1.8)' : 'none'
          }}
        />
      );
    }

    const s = skill.toLowerCase();
    if (s.includes('grid') || s.includes('flexbox')) return <LayoutGrid size={11} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />;
    if (s.includes('mobile')) return <Smartphone size={11} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />;
    if (s.includes('algorithm') || s.includes('engineering')) return <Cpu size={11} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />;
    if (s.includes('data structure') || s.includes('database') || s.includes('sql')) return <Database size={11} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />;
    if (s.includes('oop') || s.includes('system')) return <Box size={11} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />;
    if (s.includes('api') || s.includes('network')) return <Network size={11} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />;
    if (s.includes('auth')) return <ShieldCheck size={11} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />;
    if (s.includes('bash') || s.includes('cli')) return <Terminal size={11} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />;
    if (s.includes('spa') || s.includes('single page')) return <AppWindow size={11} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />;
    if (s.includes('full-stack') || s.includes('redux')) return <Layers size={11} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />;
    if (s.includes('state') || s.includes('functional')) return <Code2 size={11} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />;

    return <Sparkles size={10} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Page Header */}
      <div
        style={{
          borderBottom: '1px solid var(--border-subtle)',
          paddingBottom: '20px'
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'rgba(51, 104, 160, 0.1)',
                border: '1px solid var(--border-teal)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-primary)',
                flexShrink: 0
              }}
            >
              <Award size={20} />
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                fontWeight: 800,
                color: 'var(--ink-primary)',
                letterSpacing: '-0.02em',
                margin: 0
              }}
            >
              Credentials & Certifications
            </h1>
          </div>

          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-muted)', maxWidth: '720px', lineHeight: 1.6, margin: '0 0 12px 0' }}>
            Curated technical credentials, active development curricula, and academic milestones. Click any certificate to open its live verification or curriculum link.
          </p>

          {/* Quick Telemetry Chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <span className="contact-meta-pill">
              <CheckCircle2 size={13} style={{ color: '#10B981' }} />
              <span>2 Verified Credentials</span>
            </span>
            <span className="contact-meta-pill">
              <Clock size={13} style={{ color: 'var(--color-primary)' }} />
              <span>3 Active Curricula</span>
            </span>
            <span className="contact-meta-pill">
              <GraduationCap size={13} style={{ color: 'var(--color-primary)' }} />
              <span>BulSU · BS Information Technology</span>
            </span>
          </div>
        </div>
      </div>

      {/* Grid of Interactive Certificate Cards */}
      <div className="cert-grid">
        {certificationsData.map((cert) => {
          const isAcademic = cert.issuer.toLowerCase().includes('bulacan');
          const isCompleted = cert.status === 'Completed' || cert.status === 'Verified';

          return (
            <a
              key={cert.id}
              href={cert.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card-link"
              title={`Open ${cert.title} link`}
            >
              {/* Thumbnail / Image Preview */}
              <div className="cert-card-thumb">
                <img
                  src={cert.image}
                  alt={`${cert.shortTitle} preview`}
                  className="cert-card-img"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                  }}
                />

                {/* Status Badge */}
                <div
                  className={`cert-card-badge ${
                    isCompleted ? 'cert-card-badge--completed' : 'cert-card-badge--progress'
                  }`}
                >
                  {isCompleted ? (
                    <>
                      <CheckCircle2 size={12} />
                      <span>Verified</span>
                    </>
                  ) : (
                    <>
                      <Clock size={12} />
                      <span>In Progress</span>
                    </>
                  )}
                </div>

                {/* Corner Quick-Action Icon */}
                <div className="cert-card-overlay-btn" aria-hidden="true">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              {/* Card Body */}
              <div className="cert-card-body">
                <div className="cert-card-header">
                  <div className="cert-card-issuer">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      {isAcademic ? (
                        <GraduationCap size={14} style={{ color: 'var(--color-primary)' }} />
                      ) : (
                        <Award size={14} style={{ color: 'var(--color-primary)' }} />
                      )}
                      <span>{cert.issuer}</span>
                    </div>

                    <span style={{ opacity: 0.5 }}>•</span>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={12} style={{ color: 'var(--ink-muted)' }} />
                      <span>{cert.issueDate}</span>
                    </div>

                    <span className="cert-credential-badge">
                      <ShieldCheck size={11} />
                      <span>{cert.credentialId}</span>
                    </span>
                  </div>

                  {/* Short Title & Redirect Cue */}
                  <h2 className="cert-card-title">
                    <span>{cert.shortTitle}</span>
                    <ArrowUpRight size={18} className="cert-card-title-icon" />
                  </h2>
                </div>

                {/* Short Description */}
                {cert.description && (
                  <p className="cert-card-desc">
                    {cert.description}
                  </p>
                )}

                {/* Skills tags with branded icons */}
                <div className="cert-card-footer">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="cert-skill-pill">
                      {renderSkillIcon(skill)}
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
