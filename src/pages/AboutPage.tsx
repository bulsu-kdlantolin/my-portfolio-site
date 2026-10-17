import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import {
  GraduationCap,
  Compass,
  CheckCircle2,
  Sparkles,
  BrainCircuit,
  Layers,
  Coffee,
  Quote,
  ArrowRight,
  MapPin,
  Calendar,
  Code2,
  Heart,
  Mail,
  ShieldCheck,
  Zap
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="about-page-container">
      {/* 1. Header Banner */}
      <div
        style={{
          borderBottom: '1px solid var(--border-subtle)',
          paddingBottom: '20px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <Badge variant="teal" size="sm">
            <Sparkles size={12} style={{ marginRight: '4px', color: 'var(--color-primary)' }} />
            <span>STORY &amp; JOURNEY</span>
          </Badge>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--ink-muted)' }}>
            // Kian Davey Antolin
          </span>
        </div>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)',
            fontWeight: 800,
            color: 'var(--ink-primary)',
            letterSpacing: '-0.025em',
            lineHeight: 1.2,
            marginBottom: '10px'
          }}
        >
          Curiosity, Code &amp; Craft
        </h1>
        <p style={{ fontSize: 'clamp(0.9375rem, 1.1vw, 1.0625rem)', color: 'var(--ink-muted)', maxWidth: '820px', lineHeight: 1.65, margin: 0 }}>
          A personal look at my journey, what fuels my engineering curiosity, and how an obsession with computers evolved into building resilient, AI-powered software products.
        </p>
      </div>

      {/* 2. Welcoming Hero Story Card */}
      <section className="about-hero-card">
        {/* Left: Portrait Frame with live status badge */}
        <div className="about-portrait-wrapper">
          <div className="about-portrait-frame">
            <img
              src={theme === 'dark' ? '/avatar-profile-dark.jpg' : '/avatar-profile.jpg'}
              alt="Kian Davey Antolin"
              className="about-portrait-img"
            />
          </div>
          <div className="about-status-pill">
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: '#10B981',
                boxShadow: '0 0 8px #10B981'
              }}
            />
            <span>Open to Opportunities · 2026 Grad</span>
          </div>
        </div>

        {/* Right: Conversational Opening Letter */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span style={{ fontSize: '1.25rem' }}>👋</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase' }}>
              HEY THERE, WELCOME!
            </span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.35rem, 2.2vw, 1.75rem)',
              fontWeight: 800,
              color: 'var(--ink-primary)',
              letterSpacing: '-0.02em',
              marginBottom: '14px'
            }}
          >
            I'm Kian Davey—an engineer who loves turning ideas into living, breathing software.
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9375rem', color: 'var(--ink-muted)', lineHeight: 1.7 }}>
            <p style={{ margin: 0 }}>
              I am a <strong>Bachelor of Science in Information Technology (BS IT)</strong> student approaching graduation at <strong>Bulacan State University</strong>. Ever since I first opened a terminal and saw lines of code render an interactive canvas in the browser, I was hooked on the creative power of software engineering.
            </p>
            <p style={{ margin: 0 }}>
              Over the last few years, I’ve dedicated myself to mastering the modern web stack—building type-safe <strong>React &amp; TypeScript</strong> interfaces, architecting <strong>Node.js &amp; SQL</strong> backends, and bridging non-deterministic <strong>AI models</strong> into reliable, production-ready experiences.
            </p>
          </div>

          {/* Quick Vibe Chips */}
          <div className="about-chips-row">
            <span className="about-chip">
              <MapPin size={13} style={{ color: 'var(--color-primary)' }} />
              Bulacan, Philippines
            </span>
            <span className="about-chip">
              <GraduationCap size={13} style={{ color: 'var(--color-primary)' }} />
              Bulacan State University ('26)
            </span>
            <span className="about-chip">
              <Code2 size={13} style={{ color: 'var(--color-primary)' }} />
              Full-Stack &amp; AI Systems
            </span>
            <span className="about-chip">
              <Coffee size={13} style={{ color: 'var(--color-primary)' }} />
              Curiosity &amp; Coffee
            </span>
          </div>
        </div>
      </section>

      {/* 3. The Story Chapters */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Compass size={18} style={{ color: 'var(--color-primary)' }} />
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--ink-primary)', margin: 0 }}>
            The Journey &amp; Milestones
          </h2>
        </div>

        {/* Chapter 01: The Spark */}
        <article className="about-story-chapter-card">
          <div className="about-chapter-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(51, 104, 160, 0.1)',
                  color: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Sparkles size={18} />
              </div>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase' }}>
                  CHAPTER 01
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1875rem', fontWeight: 800, color: 'var(--ink-primary)', margin: '2px 0 0 0' }}>
                  The Spark &amp; The Joy of Building
                </h3>
              </div>
            </div>
            <Badge variant="neutral" size="sm">
              <Calendar size={11} style={{ marginRight: '4px' }} />
              2022 — Early University Days
            </Badge>
          </div>

          <div style={{ fontSize: '0.9375rem', color: 'var(--ink-muted)', lineHeight: 1.75, display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ margin: 0 }}>
              Like many programmers, my journey started with an itch to understand how the digital world works behind the glass screen. Entering the Information Technology program at Bulacan State University gave me a structured playground: studying data structures, relational database normalization, and computer networking.
            </p>
            <p style={{ margin: 0 }}>
              While theory gave me grounding, writing code gave me wings. The moment I built my first web app that solved a real problem—taking raw inputs, manipulating state, and rendering dynamic responses in milliseconds—I realized that software development is the modern alchemy. It transforms abstract thoughts into interactive utility.
            </p>
          </div>
        </article>

        {/* Chapter 02: The Turning Point */}
        <article className="about-story-chapter-card">
          <div className="about-chapter-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(16, 185, 129, 0.12)',
                  color: '#10B981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <BrainCircuit size={18} />
              </div>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700, color: '#10B981', textTransform: 'uppercase' }}>
                  CHAPTER 02
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1875rem', fontWeight: 800, color: 'var(--ink-primary)', margin: '2px 0 0 0' }}>
                  The Turning Point — Taming the Stochastic
                </h3>
              </div>
            </div>
            <Badge variant="teal" size="sm">
              <Zap size={11} style={{ marginRight: '4px', color: 'var(--color-primary)' }} />
              2023–2024 — Applied AI Shift
            </Badge>
          </div>

          <div style={{ fontSize: '0.9375rem', color: 'var(--ink-muted)', lineHeight: 1.75, display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ margin: 0 }}>
              When Large Language Models emerged, much of the conversation revolved around clever prompting. But as I started embedding AI into actual applications, I ran into the real challenge: <strong>models are probabilistic and unpredictable, but software users require determinism and absolute reliability.</strong>
            </p>
            <p style={{ margin: 0 }}>
              This insight led directly to architecting <strong>Sensa</strong>, my assistive browser extension. Building under Chrome’s strict Manifest V3 service-worker lifecycle required orchestrating offscreen documents for Web Speech audio capture, handling real-time stream disconnects, and enforcing Zod runtime schema boundaries on LLM outputs. It cemented my career direction: I wanted to be an <strong>AI Application Engineer</strong>—someone who writes resilient, production-grade software around intelligent systems.
            </p>
          </div>
        </article>

        {/* Typographic Pull-Quote Banner */}
        <aside className="about-quote-card">
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
            <Quote size={28} style={{ color: 'var(--color-primary)', flexShrink: 0, opacity: 0.8 }} />
            <div>
              <blockquote
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.0625rem, 1.6vw, 1.25rem)',
                  fontWeight: 700,
                  color: 'var(--ink-primary)',
                  lineHeight: 1.5,
                  margin: '0 0 10px 0',
                  fontStyle: 'italic'
                }}
              >
                "Great engineering doesn’t shout for attention. It simply works—gracefully absorbing chaos, edge cases, and unpredictable model outputs behind a calm, intuitive interface."
              </blockquote>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                // Core Engineering Manifesto
              </div>
            </div>
          </div>
        </aside>

        {/* Chapter 03: Engineering Principles */}
        <article className="about-story-chapter-card">
          <div className="about-chapter-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(217, 119, 6, 0.12)',
                  color: '#D97706',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Layers size={18} />
              </div>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700, color: '#D97706', textTransform: 'uppercase' }}>
                  CHAPTER 03
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1875rem', fontWeight: 800, color: 'var(--ink-primary)', margin: '2px 0 0 0' }}>
                  The Philosophy — Values I Build By
                </h3>
              </div>
            </div>
            <Badge variant="neutral" size="sm">
              Craft &amp; Execution
            </Badge>
          </div>

          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-muted)', lineHeight: 1.65, margin: '0 0 16px 0' }}>
            No matter the project or technology, these four core principles guide every architectural decision I make:
          </p>

          <div className="about-values-grid">
            <div className="about-value-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <ShieldCheck size={18} style={{ color: 'var(--color-primary)' }} />
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.9375rem', fontWeight: 700, color: 'var(--ink-primary)', margin: 0 }}>
                  Resilience Over Hype
                </h4>
              </div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--ink-muted)', lineHeight: 1.55, margin: 0 }}>
                AI can hallucinate and networks can drop. Production code must wrap unpredictability with Zod validation, retry policies, and sensible fallbacks.
              </p>
            </div>

            <div className="about-value-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Code2 size={18} style={{ color: 'var(--color-primary)' }} />
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.9375rem', fontWeight: 700, color: 'var(--ink-primary)', margin: 0 }}>
                  Type Safety as Leverage
                </h4>
              </div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--ink-muted)', lineHeight: 1.55, margin: 0 }}>
                TypeScript isn’t extra ceremony—it's self-documenting code and the armor that lets you refactor fearlessly as applications grow in scale.
              </p>
            </div>

            <div className="about-value-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Heart size={18} style={{ color: 'var(--color-primary)' }} />
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.9375rem', fontWeight: 700, color: 'var(--ink-primary)', margin: 0 }}>
                  User Empathy First
                </h4>
              </div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--ink-muted)', lineHeight: 1.55, margin: 0 }}>
                Complex systems mean nothing if the user interface feels clunky or confusing. Speed, accessibility, and delight are non-negotiable.
              </p>
            </div>

            <div className="about-value-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Compass size={18} style={{ color: 'var(--color-primary)' }} />
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.9375rem', fontWeight: 700, color: 'var(--ink-primary)', margin: 0 }}>
                  Relentless Student
                </h4>
              </div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--ink-muted)', lineHeight: 1.55, margin: 0 }}>
                Frameworks come and go, but fundamentals—relational schemas, distributed protocols, state lifecycles—remain timeless. Always stay curious.
              </p>
            </div>
          </div>
        </article>

        {/* Chapter 04: Beyond the Terminal */}
        <article className="about-story-chapter-card">
          <div className="about-chapter-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(139, 92, 246, 0.12)',
                  color: '#8B5CF6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Coffee size={18} />
              </div>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700, color: '#8B5CF6', textTransform: 'uppercase' }}>
                  CHAPTER 04
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1875rem', fontWeight: 800, color: 'var(--ink-primary)', margin: '2px 0 0 0' }}>
                  Beyond the Terminal — The Human Dimension
                </h3>
              </div>
            </div>
            <Badge variant="neutral" size="sm">
              Vibe &amp; Inspiration
            </Badge>
          </div>

          <div style={{ fontSize: '0.9375rem', color: 'var(--ink-muted)', lineHeight: 1.75, display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ margin: 0 }}>
              When I'm not in front of VS Code or Cursor, you'll probably find me exploring new tech essays, tuning my mechanical keyboard switches, or brewing a fresh cup of pour-over coffee.
            </p>
            <p style={{ margin: 0 }}>
              I love working to the groove of <strong>lo-fi beats, synthwave, and deep instrumental house</strong>—music is my companion when entering a deep engineering flow state. I'm also deeply passionate about tech communities and pair-programming: some of my most rewarding moments come from helping fellow students debug tricky SQL joins or walk through React state re-renders.
            </p>
          </div>
        </article>
      </div>

      {/* 4. Academic Foundation & Current Exploration Split */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '20px'
        }}
      >
        {/* Academic Card */}
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
              ACADEMIC GROUNDING
            </span>
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 700, color: 'var(--ink-primary)', marginBottom: '4px' }}>
            BS in Information Technology
          </h3>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--ink-secondary-accent)', fontWeight: 600, marginBottom: '10px' }}>
            Bulacan State University · Expected 2026
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-muted)', lineHeight: 1.6, margin: '0 0 14px 0' }}>
            A rigorous computer science and systems curriculum emphasizing software engineering lifecycles, database normalization, distributed network protocols, and computing security.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {['Relational SQL', 'Systems Analysis', 'Web APIs', 'Network Architecture', 'OOP Patterns'].map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6875rem',
                  padding: '3px 8px',
                  borderRadius: '4px',
                  backgroundColor: 'var(--bg-canvas)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--ink-muted)'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Current Active Exploration Lab */}
        <div
          style={{
            backgroundColor: 'var(--surface-white)',
            border: '1px solid var(--border-teal)',
            borderRadius: 'var(--radius-card)',
            padding: '24px',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <Compass size={18} style={{ color: 'var(--color-primary)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase' }}>
              CURRENT EXPLORATION LAB
            </span>
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 700, color: 'var(--ink-primary)', marginBottom: '8px' }}>
            Active Areas of Deep Dive
          </h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: 0, margin: 0, listStyle: 'none' }}>
            {[
              {
                title: 'Semantic Search & RAG Architecture',
                detail: 'Optimizing token chunking windows, cosine similarity ranking, and vector storage.'
              },
              {
                title: 'Real-Time Audio & Speech Streaming',
                detail: 'Low-latency browser speech synthesis, Web Audio API streaming, and Offscreen Documents.'
              },
              {
                title: 'Type Safety & Runtime Boundaries',
                detail: 'Strict TypeScript union discriminating, Zod schemas, and deterministic API contracts.'
              },
              {
                title: 'Modern Full-Stack Patterns',
                detail: 'Next.js App Router server components, Supabase row-level security, and edge deployments.'
              }
            ].map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <CheckCircle2 size={15} style={{ color: 'var(--color-primary)', marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--ink-primary)' }}>{item.title}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--ink-muted)', lineHeight: 1.45 }}>{item.detail}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 5. Inviting "Let's Connect" Finale Card */}
      <section className="about-connect-card">
        <div style={{ maxWidth: '620px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: 'var(--surface-hover)',
              color: 'var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '14px'
            }}
          >
            <Mail size={22} />
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.4rem, 2.4vw, 1.85rem)',
              fontWeight: 800,
              color: 'var(--ink-primary)',
              letterSpacing: '-0.02em',
              marginBottom: '10px'
            }}
          >
            Let’s build something remarkable together.
          </h2>

          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-muted)', lineHeight: 1.65, margin: '0 0 24px 0', textAlign: 'center' }}>
            Whether you’re looking for a passionate <strong>Full-Stack or AI Systems Engineer</strong> for your team, have an exciting project to brainstorm, or simply want to chat about tech and coffee—my inbox is always open.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <Button variant="primary" size="md" icon={<ArrowRight size={16} />}>
                Say Hello / Start a Conversation
              </Button>
            </Link>
            <Link to="/projects" style={{ textDecoration: 'none' }}>
              <Button variant="secondary" size="md">
                Explore My Case Studies
              </Button>
            </Link>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href="https://github.com/bulsu-kdlantolin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              style={{
                color: 'var(--ink-muted)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.8125rem',
                fontFamily: 'var(--font-mono)',
                textDecoration: 'none',
                transition: 'color var(--transition-fast)'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ink-muted)')}
            >
              <img
                src="/logos/github.svg"
                alt="GitHub"
                style={{
                  width: '15px',
                  height: '15px',
                  display: 'inline-block',
                  filter: theme === 'dark' ? 'invert(1)' : 'none'
                }}
              />
              <span>GitHub</span>
            </a>
            <span style={{ color: 'var(--border-subtle)' }}>•</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              style={{
                color: 'var(--ink-muted)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.8125rem',
                fontFamily: 'var(--font-mono)',
                textDecoration: 'none',
                transition: 'color var(--transition-fast)'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ink-muted)')}
            >
              <img
                src="/logos/linkedin.svg"
                alt="LinkedIn"
                style={{
                  width: '15px',
                  height: '15px',
                  display: 'inline-block'
                }}
              />
              <span>LinkedIn</span>
            </a>
            <span style={{ color: 'var(--border-subtle)' }}>•</span>
            <a
              href="mailto:antolin.kiandavey@gmail.com"
              aria-label="Email directly"
              style={{
                color: 'var(--ink-muted)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.8125rem',
                fontFamily: 'var(--font-mono)',
                textDecoration: 'none',
                transition: 'color var(--transition-fast)'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ink-muted)')}
            >
              <Mail size={15} />
              <span>antolin.kiandavey@gmail.com</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
