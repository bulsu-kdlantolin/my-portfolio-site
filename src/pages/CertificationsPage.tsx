import React from 'react';
import { certificationsData } from '../data/certifications';
import { CheckCircle2, Clock, ArrowUpRight, Award, GraduationCap } from 'lucide-react';

export const CertificationsPage: React.FC = () => {
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
            Credentials & Certifications
          </h2>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-muted)', maxWidth: '720px', lineHeight: 1.6, margin: 0 }}>
            Curated technical credentials, active development curricula, and academic milestones. Click any certificate to open its live verification or curriculum link.
          </p>
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
              {/* Thumbnail / Image Placeholder */}
              <div className="cert-card-thumb">
                <img
                  src={cert.image}
                  alt={`${cert.shortTitle} certification preview placeholder`}
                  className="cert-card-img"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to a solid styled background if image fails
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
                    {isAcademic ? (
                      <GraduationCap size={14} style={{ color: 'var(--color-primary)' }} />
                    ) : (
                      <Award size={14} style={{ color: 'var(--color-primary)' }} />
                    )}
                    <span>
                      {cert.issuer} • {cert.issueDate}
                    </span>
                  </div>

                  {/* Short Title & Redirect Cue */}
                  <h3 className="cert-card-title">
                    <span>{cert.shortTitle}</span>
                    <ArrowUpRight size={18} className="cert-card-title-icon" />
                  </h3>
                </div>

                {/* Short Description */}
                {cert.description && (
                  <p className="cert-card-desc">
                    {cert.description}
                  </p>
                )}

                {/* Skills tags */}
                <div className="cert-card-footer">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="cert-skill-pill">
                      {skill}
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
