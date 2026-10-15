import React, { useState } from 'react';
import { stackData } from '../data/stack';
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

  const totalSkillsCount = stackData.reduce((acc, tier) => acc + tier.skills.length, 0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Page Header */}
      <div
        style={{
          borderBottom: '1px solid var(--border-subtle)',
          paddingBottom: '20px'
        }}
      >
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
          Technology Stack
        </h2>
        <p style={{ fontSize: '0.9375rem', color: 'var(--ink-muted)', maxWidth: '820px', lineHeight: 1.6, margin: 0 }}>
          Core technologies, frameworks, and developer tooling used across production applications, browser extensions, and applied AI pipelines.
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
          { id: 'all', label: `All (${totalSkillsCount})` },
          { id: 'frontend', label: `Frontend & UI (${stackData.find(t => t.id === 'frontend')?.skills.length || 0})` },
          { id: 'backend', label: `Backend & APIs (${stackData.find(t => t.id === 'backend')?.skills.length || 0})` },
          { id: 'database', label: `Databases (${stackData.find(t => t.id === 'database')?.skills.length || 0})` },
          { id: 'ai-engineering', label: `Applied AI (${stackData.find(t => t.id === 'ai-engineering')?.skills.length || 0})` },
          { id: 'workflow', label: `Tools & Ecosystem (${stackData.find(t => t.id === 'workflow')?.skills.length || 0})` }
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
                color: isActive ? '#FFFFFF' : 'var(--ink-muted)',
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
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {filteredStack.map((tier) => (
          <section
            key={tier.id}
            style={{
              backgroundColor: 'var(--surface-white)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-card)',
              padding: 'clamp(18px, 2.5vw, 22px)',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            {/* Layer Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span
                  style={{
                    color: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'var(--bg-canvas)',
                    padding: '6px',
                    borderRadius: 'var(--radius-xs)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  {tierIconMap[tier.id] || <Layers size={18} />}
                </span>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.0625rem', fontWeight: 800, color: 'var(--ink-primary)', margin: 0 }}>
                    {tier.title}
                  </h3>
                </div>
              </div>

              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6875rem',
                  color: 'var(--color-primary)',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  backgroundColor: 'var(--bg-canvas)',
                  padding: '3px 10px',
                  borderRadius: 'var(--radius-pill)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                {tier.badge}
              </span>
            </div>

            {/* Straightforward Tech Skills Grid */}
            <div className="tech-grid">
              {tier.skills.map((skill) => (
                <div key={skill.name} className="tech-card">
                  <div className="tech-card-left">
                    <div className={`tech-card-logo ${skill.isMonochrome ? 'is-monochrome' : ''}`}>
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        loading="lazy"
                        width={24}
                        height={24}
                      />
                    </div>
                    <div className="tech-card-info">
                      <span className="tech-card-name">{skill.name}</span>
                      <span className="tech-card-role">{skill.role}</span>
                    </div>
                  </div>

                  {skill.status && (
                    <span
                      className={`tech-card-badge ${
                        skill.isPrimary ? 'tech-card-badge--primary' : ''
                      }`}
                    >
                      {skill.status}
                    </span>
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

