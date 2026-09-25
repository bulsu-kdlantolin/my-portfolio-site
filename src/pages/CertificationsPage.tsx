import React, { useState } from 'react';
import { certificationsData } from '../data/certifications';
import { Badge } from '../components/common/Badge';
import { Award, ShieldCheck, CheckCircle2, ExternalLink, Filter } from 'lucide-react';

export const CertificationsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { key: 'all', label: 'All Credentials', count: certificationsData.length },
    ...Array.from(new Set(certificationsData.map((c) => c.issuerCategory))).map((cat) => ({
      key: cat,
      label: cat,
      count: certificationsData.filter((c) => c.issuerCategory === cat).length
    }))
  ];

  const filteredCerts =
    selectedCategory === 'all'
      ? certificationsData
      : certificationsData.filter((c) => c.issuerCategory === selectedCategory);

  const totalSkills = Array.from(new Set(certificationsData.flatMap((c) => c.skills))).length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Page Header */}
      <div
        style={{
          borderBottom: '1px solid var(--border-subtle)',
          paddingBottom: '20px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <Badge variant="teal" size="sm">
            VERIFIED CREDENTIALS
          </Badge>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--ink-muted)' }}>
            {certificationsData.length} ACCREDITATIONS & SPECIALIZATIONS
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
          Certifications & Technical Accreditations
        </h2>
        <p style={{ fontSize: '0.9375rem', color: 'var(--ink-muted)', maxWidth: '780px', lineHeight: 1.6 }}>
          Accredited course specializations, verified technical assessments, and foundational credentials complementing formal Bachelor of Science in Information Technology coursework.
        </p>
      </div>

      {/* Highlights / Telemetry Stats */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
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
            Total Credentials
          </span>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-primary)', marginTop: '4px' }}>
            {certificationsData.length}
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--ink-muted)' }}>100% Verified status</span>
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
            Assessed Competencies
          </span>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--ink-secondary-accent)', marginTop: '4px' }}>
            {totalSkills}+
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--ink-muted)' }}>Distinct technical skills</span>
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
            Core Focus Areas
          </span>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--ink-primary)', marginTop: '4px' }}>
            4
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--ink-muted)' }}>AI, Web, SQL & Cloud</span>
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
            Degree Alignment
          </span>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-primary)', marginTop: '4px' }}>
            BS IT
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--ink-muted)' }}>Complementary to major</span>
        </div>
      </div>

      {/* Filter Category Bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--ink-muted)', marginRight: '4px' }}>
          <Filter size={13} />
          CATEGORY:
        </span>
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              style={{
                padding: '6px 12px',
                borderRadius: 'var(--radius-pill)',
                border: `1px solid ${isActive ? 'var(--color-primary)' : 'var(--border-subtle)'}`,
                backgroundColor: isActive ? 'var(--color-primary)' : 'var(--surface-white)',
                color: isActive ? '#FFFFFF' : 'var(--ink-muted)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: isActive ? 600 : 500,
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>{cat.label}</span>
              <span
                style={{
                  fontSize: '0.6875rem',
                  padding: '1px 6px',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: isActive ? 'rgba(255, 255, 255, 0.25)' : 'var(--bg-canvas)',
                  color: isActive ? '#FFFFFF' : 'var(--ink-muted)'
                }}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Certification Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '20px'
        }}
      >
        {filteredCerts.map((cert) => (
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
              <h3
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
              </h3>

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
              {cert.verificationUrl && cert.verificationUrl !== '#' ? (
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    color: 'var(--color-primary)',
                    textDecoration: 'none',
                    fontWeight: 600
                  }}
                >
                  Verify <ExternalLink size={12} />
                </a>
              ) : (
                <span style={{ color: 'var(--ink-muted)' }}>
                  ACCREDITED
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Academic Alignment Info Card */}
      <div
        style={{
          backgroundColor: 'var(--surface-white)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-card)',
          padding: '24px',
          boxShadow: 'var(--shadow-sm)',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <CheckCircle2 size={18} style={{ color: 'var(--color-primary)' }} />
          <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--ink-primary)' }}>
            Curriculum Complement & Verification Standard
          </h4>
        </div>
        <p style={{ fontSize: '0.875rem', color: 'var(--ink-muted)', lineHeight: 1.6, margin: 0 }}>
          These external accreditations directly augment formal academic training in Computer Science and Information Technology. They certify hands-on competence in high-demand industry engineering stacks: type-safe application architecture, generative AI integration with vector retrieval, relational database normalization, and containerized deployment workflows.
        </p>
      </div>
    </div>
  );
};
