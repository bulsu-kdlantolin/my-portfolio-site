import React from 'react';
import { Badge } from '../components/common/Badge';
import {
  Compass,
  Layers,
  Wrench,
  SearchCheck,
  Rocket,
  RefreshCw,
  CheckCircle2
} from 'lucide-react';

export const HowIBuildPage: React.FC = () => {
  const stages = [
    {
      step: '01',
      title: 'Understand',
      tagline: 'Define the core problem and user constraints.',
      icon: <Compass size={22} style={{ color: 'var(--color-primary)' }} />,
      objective: 'Avoid solving the wrong problem or jumping into code prematurely.',
      actions: [
        'Clarify the root problem and user friction point.',
        'Document input constraints, edge cases, and expected outcomes.',
        'Define explicit scope boundaries to avoid feature creep.'
      ]
    },
    {
      step: '02',
      title: 'Design',
      tagline: 'Plan architecture, data flow, schemas, and interfaces.',
      icon: <Layers size={22} style={{ color: 'var(--color-secondary)' }} />,
      objective: 'Establish clean boundaries before writing functional code.',
      actions: [
        'Model relational schemas and TypeScript interface contracts.',
        'Map component hierarchy and unidirectional state flow.',
        'Design API endpoints, payloads, and vector indexing strategies.'
      ]
    },
    {
      step: '03',
      title: 'Build',
      tagline: 'Implement features with responsible AI-assisted velocity.',
      icon: <Wrench size={22} style={{ color: 'var(--color-primary)' }} />,
      objective: 'Maintain strict human control over architecture while leveraging AI tools.',
      actions: [
        'Use AI development tools (Cursor, Claude Code) to scaffold boilerplate and unit tests.',
        'Keep human-in-the-loop oversight on security, business logic, and dependency choice.',
        'Maintain clean Git branching and atomic, descriptive commits.'
      ]
    },
    {
      step: '04',
      title: 'Review & Debug',
      tagline: 'Inspect, test, validate edge cases, and eliminate regressions.',
      icon: <SearchCheck size={22} style={{ color: 'var(--color-secondary)' }} />,
      objective: 'Verify that code is performant, secure, and resilient.',
      actions: [
        'Run strict TypeScript compilation (`tsc`) and lint checks.',
        'Inspect network payloads and DevTools console for silent failures.',
        'Verify keyboard accessibility, screen reader landmarks, and contrast ratios.'
      ]
    },
    {
      step: '05',
      title: 'Ship',
      tagline: 'Deploy clean, production-ready builds.',
      icon: <Rocket size={22} style={{ color: 'var(--color-primary)' }} />,
      objective: 'Deliver working software with verified dependencies.',
      actions: [
        'Bundle optimized assets and inspect chunk distribution.',
        'Configure environment variables securely without secret leakage.',
        'Perform live smoke testing across mobile and desktop viewports.'
      ]
    },
    {
      step: '06',
      title: 'Monitor & Iterate',
      tagline: 'Observe real behavior, gather feedback, and refactor bottlenecks.',
      icon: <RefreshCw size={22} style={{ color: 'var(--color-secondary)' }} />,
      objective: 'Continuous improvement driven by real system telemetry.',
      actions: [
        'Monitor token consumption, query latency, and error states.',
        'Refactor complex components into decoupled primitives.',
        'Loop learnings back into the next design and architecture cycle.'
      ]
    }
  ];

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
            ENGINEERING PROCESS
          </Badge>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--ink-muted)' }}>
            6-STAGE LIFECYCLE
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
          How I Build: Engineering Philosophy
        </h2>
        <p style={{ fontSize: '0.9375rem', color: 'var(--ink-muted)', maxWidth: '780px', lineHeight: 1.6 }}>
          Building reliable software requires discipline. Below is my 6-stage engineering process, detailing how I approach requirements, architectural design, responsible AI acceleration, and system validation.
        </p>
      </div>

      {/* AI-Assisted Development Philosophy Callout */}
      <section
        style={{
          backgroundColor: 'var(--surface-white)',
          border: '1.5px solid var(--color-primary)',
          borderRadius: 'var(--radius-card)',
          padding: '24px',
          boxShadow: 'var(--shadow-card)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
          <Badge variant="teal" size="sm">
            CORE PRINCIPLE
          </Badge>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-primary)' }}>
            RESPONSIBLE AI-ASSISTED DEVELOPMENT
          </span>
        </div>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.25rem',
            fontWeight: 700,
            color: 'var(--ink-primary)',
            marginBottom: '10px'
          }}
        >
          Leveraging AI for velocity while retaining total human architectural control.
        </h3>
        <p style={{ fontSize: '0.9375rem', color: 'var(--ink-muted)', lineHeight: 1.65, maxWidth: '840px' }}>
          I use modern AI tools like Cursor and Claude Code to accelerate repetitive boilerplate, explore alternate algorithms, and generate test scaffolds. However, I treat AI as a high-speed assistant, not a substitute for engineering knowledge. Every database relationship, API contract, and security boundary is designed, inspected, and understood by me.
        </p>
      </section>

      {/* 6 Stages Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '20px'
        }}
      >
        {stages.map((st) => (
          <div
            key={st.step}
            style={{
              backgroundColor: 'var(--surface-white)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-card)',
              padding: '24px',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              {/* Card Top */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {st.icon}
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.125rem', fontWeight: 800, color: 'var(--color-primary)' }}>
                    {st.step}
                  </span>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>
                  STAGE {st.step}
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
                {st.title}
              </h3>
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '14px', fontFamily: 'var(--font-display)' }}>
                {st.tagline}
              </p>

              <div style={{ padding: '10px 12px', borderRadius: 'var(--radius-xs)', backgroundColor: 'var(--bg-canvas)', border: '1px solid var(--border-subtle)', fontSize: '0.75rem', color: 'var(--ink-muted)', marginBottom: '16px', lineHeight: 1.45 }}>
                <strong style={{ color: 'var(--ink-primary)' }}>Goal: </strong>{st.objective}
              </div>

              {/* Action items */}
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {st.actions.map((act, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      gap: '8px',
                      alignItems: 'baseline',
                      fontSize: '0.8125rem',
                      color: 'var(--ink-muted)',
                      lineHeight: 1.5
                    }}
                  >
                    <CheckCircle2 size={13} style={{ color: 'var(--color-secondary)', flexShrink: 0 }} />
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
