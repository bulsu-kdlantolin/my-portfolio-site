import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import {
  GraduationCap,
  Sparkles,
  MapPin,
  Code2,
  Coffee,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Layers,
  HeartHandshake,
  Compass
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="about-page-container">
      {/* 1. Page Header */}
      <div
        style={{
          borderBottom: '1px solid var(--border-subtle)',
          paddingBottom: '20px'
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
            fontWeight: 800,
            color: 'var(--ink-primary)',
            letterSpacing: '-0.02em',
            margin: '0 0 8px 0'
          }}
        >
          About Me
        </h1>
        <p style={{ fontSize: '0.9375rem', color: 'var(--ink-muted)', maxWidth: '720px', lineHeight: 1.6, margin: 0 }}>
          A quick snapshot of who I am, what I build, and what drives my software engineering.
        </p>
      </div>

      {/* 2. Executive Bio Card */}
      <section className="about-hero-card">
        {/* Left: Portrait Frame */}
        <div className="about-portrait-wrapper">
          <div className="about-portrait-frame">
            <img
              src={theme === 'dark' ? '/avatar-profile-dark.jpg' : '/avatar-profile.jpg'}
              alt="Kian Davey Antolin"
              className="about-portrait-img"
            />
          </div>
        </div>

        {/* Right: Punchy Bio */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span style={{ fontSize: '1.15rem' }}>👋</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase' }}>
              Aspiring AI &amp; Full-Stack Engineer
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.35rem, 2vw, 1.65rem)',
              fontWeight: 800,
              color: 'var(--ink-primary)',
              letterSpacing: '-0.02em',
              margin: '0 0 12px 0'
            }}
          >
            Hi, I'm Kian Davey Antolin.
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9375rem', color: 'var(--ink-muted)', lineHeight: 1.65 }}>
            <p style={{ margin: 0 }}>
              I am a <strong>BS in Information Technology</strong> student approaching graduation at <strong>Bulacan State University</strong> ('26). I build responsive web apps, assistive browser extensions, and applied AI systems designed to solve real user friction.
            </p>
            <p style={{ margin: 0 }}>
              My technical focus centers on bridging type-safe <strong>React &amp; TypeScript</strong> frontends with structured <strong>Node.js / Python</strong> services and deterministic, schema-validated AI pipelines.
            </p>
          </div>

          {/* Quick Info Chips */}
          <div className="about-chips-row">
            <span className="about-chip">
              <MapPin size={13} style={{ color: 'var(--color-primary)' }} />
              Bulacan, Philippines
            </span>
            <span className="about-chip">
              <GraduationCap size={13} style={{ color: 'var(--color-primary)' }} />
              BulSU · Class of 2026
            </span>
            <span className="about-chip">
              <Code2 size={13} style={{ color: 'var(--color-primary)' }} />
              Full-Stack &amp; AI Systems
            </span>
            <span className="about-chip">
              <Sparkles size={13} style={{ color: '#10B981' }} />
              Open to Opportunities
            </span>
          </div>
        </div>
      </section>

      {/* 3. At a Glance — 3 Compact Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '18px'
        }}
      >
        {/* Card 1: What I Build */}
        <div
          style={{
            backgroundColor: 'var(--surface-white)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-card)',
            padding: '22px',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                backgroundColor: 'rgba(51, 104, 160, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-primary)'
              }}
            >
              <Layers size={16} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, color: 'var(--ink-primary)', margin: 0 }}>
              What I Build
            </h3>
          </div>

          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: 0, margin: 0, listStyle: 'none' }}>
            <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', fontSize: '0.8125rem', color: 'var(--ink-muted)', lineHeight: 1.5 }}>
              <CheckCircle2 size={14} style={{ color: 'var(--color-primary)', marginTop: '2px', flexShrink: 0 }} />
              <span><strong>Full-Stack Apps:</strong> Responsive SPAs with React, TypeScript, Next.js, Node.js, and SQL.</span>
            </li>
            <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', fontSize: '0.8125rem', color: 'var(--ink-muted)', lineHeight: 1.5 }}>
              <CheckCircle2 size={14} style={{ color: 'var(--color-primary)', marginTop: '2px', flexShrink: 0 }} />
              <span><strong>AI &amp; Assistive Tools:</strong> Chrome Manifest V3 extensions, Web Speech API, and Zod-validated LLM workflows.</span>
            </li>
            <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', fontSize: '0.8125rem', color: 'var(--ink-muted)', lineHeight: 1.5 }}>
              <CheckCircle2 size={14} style={{ color: 'var(--color-primary)', marginTop: '2px', flexShrink: 0 }} />
              <span><strong>Reliable Architectures:</strong> Resilient error handling, relational databases (PostgreSQL/Supabase), and clean APIs.</span>
            </li>
          </ul>
        </div>

        {/* Card 2: Academic Grounding */}
        <div
          style={{
            backgroundColor: 'var(--surface-white)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-card)',
            padding: '22px',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                backgroundColor: 'rgba(16, 185, 129, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#10B981'
              }}
            >
              <GraduationCap size={16} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, color: 'var(--ink-primary)', margin: 0 }}>
              Education
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--ink-primary)' }}>
              BS in Information Technology
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--ink-secondary-accent)', fontWeight: 600 }}>
              Bulacan State University · Expected 2026
            </div>
          </div>

          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-muted)', lineHeight: 1.55, margin: 0 }}>
            Four-year degree providing rigorous depth across software engineering lifecycles, database normalization, algorithms, and computing systems.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto' }}>
            {['Relational SQL', 'Systems Analysis', 'OOP Patterns', 'Web APIs'].map((topic) => (
              <span
                key={topic}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6875rem',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  backgroundColor: 'var(--bg-canvas)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--ink-muted)'
                }}
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Card 3: Values & Beyond Code */}
        <div
          style={{
            backgroundColor: 'var(--surface-white)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-card)',
            padding: '22px',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                backgroundColor: 'rgba(217, 119, 6, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#D97706'
              }}
            >
              <Compass size={16} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, color: 'var(--ink-primary)', margin: 0 }}>
              Values &amp; Interests
            </h3>
          </div>

          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: 0, margin: 0, listStyle: 'none' }}>
            <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', fontSize: '0.8125rem', color: 'var(--ink-muted)', lineHeight: 1.5 }}>
              <Sparkles size={14} style={{ color: '#D97706', marginTop: '2px', flexShrink: 0 }} />
              <span><strong>Resilience over Hype:</strong> Taming non-deterministic LLMs with strict schemas, error boundaries, and fallbacks.</span>
            </li>
            <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', fontSize: '0.8125rem', color: 'var(--ink-muted)', lineHeight: 1.5 }}>
              <HeartHandshake size={14} style={{ color: '#D97706', marginTop: '2px', flexShrink: 0 }} />
              <span><strong>User Empathy:</strong> Clean, accessible UX matters just as much as backend efficiency.</span>
            </li>
            <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', fontSize: '0.8125rem', color: 'var(--ink-muted)', lineHeight: 1.5 }}>
              <Coffee size={14} style={{ color: '#D97706', marginTop: '2px', flexShrink: 0 }} />
              <span><strong>Beyond Code:</strong> Pour-over coffee, mechanical keyboards, and helping fellow students debug tricky problems.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 4. Quick Action Footer Strip */}
      <div
        style={{
          backgroundColor: 'var(--surface-white)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-card)',
          padding: '18px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          boxShadow: 'var(--shadow-sm)'
        }}
      >
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9375rem', fontWeight: 700, color: 'var(--ink-primary)' }}>
            Want to see what I've built or explore collaborating?
          </div>
          <div style={{ fontSize: '0.8125rem', color: 'var(--ink-muted)', marginTop: '2px' }}>
            Check out my featured projects or drop a direct message.
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <Link
            to="/projects"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--border-subtle)',
              backgroundColor: 'var(--bg-canvas)',
              color: 'var(--ink-primary)',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: '0.8125rem',
              textDecoration: 'none',
              transition: 'all var(--transition-fast)'
            }}
          >
            <span>View Projects</span>
            <ArrowRight size={13} />
          </Link>

          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 18px',
              borderRadius: 'var(--radius-pill)',
              backgroundColor: 'var(--ink-primary)',
              color: 'var(--bg-canvas)',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '0.8125rem',
              textDecoration: 'none',
              transition: 'all var(--transition-fast)'
            }}
          >
            <span>Get in touch</span>
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
};
