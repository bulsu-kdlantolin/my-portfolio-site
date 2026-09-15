import React from 'react';
import { stackData } from '../data/stack';
import { Badge } from '../components/common/Badge';

export const StackPage: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Header */}
      <div
        style={{
          borderBottom: '1px solid var(--border-subtle)',
          paddingBottom: '20px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <Badge variant="primary" size="sm">
            CAPABILITY MATRIX
          </Badge>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--ink-muted)' }}>
            STRUCTURED BY ENGINEERING LAYER
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
          Technology Stack & Capabilities
        </h2>
        <p style={{ fontSize: '0.9375rem', color: 'var(--ink-muted)', maxWidth: '780px', lineHeight: 1.6 }}>
          Instead of an unorganized wall of company logos, my stack is organized by practical engineering responsibility—explaining where each technology is applied across frontend client views, backend services, databases, and AI pipelines.
        </p>
      </div>

      {/* Tiers List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
        {stackData.map((tier) => (
          <section
            key={tier.id}
            style={{
              backgroundColor: 'var(--surface-white)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-card)',
              padding: 'clamp(20px, 3vw, 28px)',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            {/* Tier Header */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
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
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--ink-primary)',
                  marginBottom: '4px'
                }}
              >
                {tier.title}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--ink-muted)', lineHeight: 1.5 }}>
                {tier.description}
              </p>
            </div>

            {/* Skills Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '16px'
              }}
            >
              {tier.skills.map((skill) => (
                <div
                  key={skill.name}
                  style={{
                    padding: '16px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--bg-canvas)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                      <h4
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1rem',
                          fontWeight: 700,
                          color: 'var(--ink-primary)'
                        }}
                      >
                        {skill.name}
                      </h4>
                    </div>

                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--color-primary)',
                        fontWeight: 600,
                        marginBottom: '8px'
                      }}
                    >
                      {skill.role}
                    </div>

                    <p style={{ fontSize: '0.8125rem', color: 'var(--ink-muted)', lineHeight: 1.55, marginBottom: '14px' }}>
                      {skill.experienceContext}
                    </p>
                  </div>

                  {skill.tags && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                      {skill.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.625rem',
                            padding: '2px 6px',
                            borderRadius: 'var(--radius-xs)',
                            backgroundColor: 'rgba(200, 223, 219, 0.5)',
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
          </section>
        ))}
      </div>
    </div>
  );
};
