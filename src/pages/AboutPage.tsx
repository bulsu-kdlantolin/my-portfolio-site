import React from 'react';
import { Badge } from '../components/common/Badge';
import { GraduationCap, Compass, CheckCircle2 } from 'lucide-react';

export const AboutPage: React.FC = () => {
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
            PERSONAL PROFILE
          </Badge>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--ink-muted)' }}>
            KIAN DAVEY ANTOLIN
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
          About Me & Engineering Journey
        </h2>
        <p style={{ fontSize: '0.9375rem', color: 'var(--ink-muted)', maxWidth: '780px', lineHeight: 1.6 }}>
          A snapshot of my academic background, technical focus, learning direction, and engineering values.
        </p>
      </div>

      {/* Main Narrative Split */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}
      >
        {/* Left Column: Background & Mission */}
        <section
          style={{
            backgroundColor: 'var(--surface-white)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-card)',
            padding: 'clamp(20px, 3vw, 28px)',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--ink-primary)', marginBottom: '16px' }}>
            Academic Foundation & Focus
          </h3>

          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-muted)', lineHeight: 1.65, marginBottom: '16px' }}>
            I am a <strong>Bachelor of Science in Information Technology (BS IT)</strong> student currently approaching graduation in the Philippines. My education has provided me with a grounded foundation in computing fundamentals—relational database design, systems analysis, network architecture, and software development lifecycles.
          </p>

          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-muted)', lineHeight: 1.65, marginBottom: '16px' }}>
            Over the course of my studies, I discovered a strong affinity for building <strong>end-to-end web products</strong>. As AI models advanced, I realized that the real frontier isn't merely writing prompts, but <strong>engineering robust applications that integrate AI meaningfully into user workflows</strong>.
          </p>

          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-muted)', lineHeight: 1.65 }}>
            Today, my focus is centered on becoming an <strong>AI Application Engineer</strong> who possesses strong web development fundamentals: type-safe React/TypeScript frontends, organized Node.js and SQL backends, and practical Python-driven RAG pipelines.
          </p>
        </section>

        {/* Right Column: Academic Coursework & Trajectory */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Degree Card */}
          <div
            style={{
              backgroundColor: 'var(--surface-white)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-card)',
              padding: '24px',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <GraduationCap size={18} style={{ color: 'var(--color-primary)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase' }}>
                FORMAL EDUCATION
              </span>
            </div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 700, color: 'var(--ink-primary)', marginBottom: '4px' }}>
              Bachelor of Science in Information Technology
            </h4>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--ink-secondary-accent)', fontWeight: 600, marginBottom: '12px' }}>
              Approaching Graduation // Expected 2026
            </div>
            <div style={{ fontSize: '0.8125rem', color: 'var(--ink-muted)', lineHeight: 1.55 }}>
              Core curriculum: Relational Database Systems (SQL), Systems Analysis & Design, Web Development & APIs, Object-Oriented Programming, Computer Networks, and Information Assurance.
            </div>
          </div>

          {/* Current Learning Direction */}
          <div
            style={{
              backgroundColor: 'rgba(200, 223, 219, 0.45)',
              border: '1.5px solid var(--border-teal)',
              borderRadius: 'var(--radius-card)',
              padding: '24px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <Compass size={18} style={{ color: 'var(--color-primary)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase' }}>
                CURRENT LEARNING DIRECTION
              </span>
            </div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 700, color: 'var(--ink-primary)', marginBottom: '8px' }}>
              Active Areas of Exploration
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                'Optimizing chunking strategies and overlap thresholds for semantic search.',
                'Real-time streaming transcription with Web Speech and Deepgram APIs.',
                'Relational schema design and data normalization in SQL.',
                'TypeScript union types and runtime boundary validation with Zod.'
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    gap: '8px',
                    alignItems: 'baseline',
                    fontSize: '0.8125rem',
                    color: 'var(--ink-primary)',
                    lineHeight: 1.5
                  }}
                >
                  <CheckCircle2 size={13} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
