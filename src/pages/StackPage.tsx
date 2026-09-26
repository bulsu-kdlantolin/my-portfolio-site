import React, { useState } from 'react';
import { stackData } from '../data/stack';
import { Badge } from '../components/common/Badge';
import { Layers, Terminal, Database, Cpu, Layout, Sparkles } from 'lucide-react';

const tierIconMap: Record<string, React.ReactNode> = {
  frontend: <Layout size={18} />,
  backend: <Terminal size={18} />,
  database: <Database size={18} />,
  'ai-engineering': <Cpu size={18} />,
  workflow: <Sparkles size={18} />
};

export const StackPage: React.FC = () => {
  const [activeStackTier, setActiveStackTier] = useState<string>('all');

  const filteredStack =
    activeStackTier === 'all'
      ? stackData
      : stackData.filter((tier) => tier.id === activeStackTier);

  const totalTools = stackData.flatMap((tier) => tier.skills).length;

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
          <Badge variant="primary" size="sm">
            CAPABILITY MATRIX
          </Badge>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--ink-muted)' }}>
            5-LAYER ARCHITECTURE // {totalTools} CORE TECHNOLOGIES
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
          Technology Stack & Technical Competencies
        </h2>
        <p style={{ fontSize: '0.9375rem', color: 'var(--ink-muted)', maxWidth: '820px', lineHeight: 1.6 }}>
          Structured by engineering responsibility—explaining where each technology is applied across frontend client views, backend services, relational databases, practical AI pipelines, and developer tooling.
        </p>
      </div>

      {/* Layer Filter Bar */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px'
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
                padding: '7px 16px',
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
                    color: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  {tierIconMap[tier.id] || <Layers size={18} />}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    color: 'var(--color-primary)',
                    fontWeight: 700,
                    letterSpacing: '0.04em'
                  }}
                >
                  {tier.badge}
                </span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--ink-primary)', marginBottom: '4px' }}>
                {tier.title}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--ink-muted)', lineHeight: 1.5, margin: 0 }}>
                {tier.description}
              </p>
            </div>

            {/* Skills Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '14px'
              }}
            >
              {tier.skills.map((skill) => (
                <div
                  key={skill.name}
                  style={{
                    padding: '16px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--bg-canvas)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--ink-primary)' }}>
                      {skill.name}
                    </div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--ink-secondary-accent)' }}>
                      {skill.role}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.8125rem', color: 'var(--ink-muted)', lineHeight: 1.5, margin: '6px 0 10px' }}>
                    {skill.experienceContext}
                  </p>

                  {skill.tags && skill.tags.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {skill.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.6875rem',
                            padding: '2px 8px',
                            borderRadius: 'var(--radius-xs)',
                            backgroundColor: 'rgba(200, 223, 219, 0.4)',
                            border: '1px solid var(--border-teal)',
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
    </div>
  );
};
