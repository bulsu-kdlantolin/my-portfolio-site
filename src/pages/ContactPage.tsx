import React, { useState } from 'react';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { GithubIcon, LinkedinIcon } from '../components/common/Icons';
import { Mail, Copy, Check, Send, MapPin, Clock, MessageSquare } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Full-Time Role / Opportunity',
    message: ''
  });

  const email = 'antolin.kiandavey@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

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
            GET IN TOUCH
          </Badge>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--ink-muted)' }}>
            DIRECT COMMUNICATION
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
          Contact & Collaboration
        </h2>
        <p style={{ fontSize: '0.9375rem', color: 'var(--ink-muted)', maxWidth: '780px', lineHeight: 1.6 }}>
          I am actively exploring full-time software engineering roles, AI application development positions, and technical collaborations. Feel free to reach out directly via email or the form below.
        </p>
      </div>

      {/* Two Column Layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          alignItems: 'start'
        }}
      >
        {/* Left Column: Direct Channels & Telemetry */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Email Direct Card */}
          <div
            style={{
              backgroundColor: 'var(--surface-white)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-card)',
              padding: '24px',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <Mail size={18} style={{ color: 'var(--color-primary)' }} />
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 700, color: 'var(--ink-primary)' }}>
                Direct Email
              </h3>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--ink-muted)', marginBottom: '14px' }}>
              Best channel for inquiries regarding employment, projects, or questions.
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 14px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--bg-canvas)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--ink-primary)', fontWeight: 600 }}>
                {email}
              </span>
              <button
                onClick={handleCopy}
                aria-label="Copy email address to clipboard"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '5px 12px',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: copied ? 'rgba(51, 104, 160, 0.1)' : 'var(--surface-white)',
                  border: `1px solid ${copied ? 'var(--color-primary)' : 'var(--border-subtle)'}`,
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--color-primary)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  minWidth: '76px',
                  justifyContent: 'center',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {copied ? <Check size={13} /> : <Copy size={13} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Social Profiles */}
          <div
            style={{
              backgroundColor: 'var(--surface-white)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-card)',
              padding: '24px',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 700, color: 'var(--ink-primary)', marginBottom: '14px' }}>
              Verified Profiles
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a
                href="https://github.com/KianDavey"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--bg-canvas)',
                  border: '1px solid var(--border-subtle)',
                  textDecoration: 'none',
                  color: 'var(--ink-primary)',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <GithubIcon size={16} />
                  <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>GitHub</span>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                  @KianDavey ↗
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/kiandavey/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--bg-canvas)',
                  border: '1px solid var(--border-subtle)',
                  textDecoration: 'none',
                  color: 'var(--ink-primary)',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <LinkedinIcon size={16} />
                  <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>LinkedIn</span>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                  /in/kiandavey ↗
                </span>
              </a>
            </div>
          </div>

          {/* Timezone & Location */}
          <div
            style={{
              backgroundColor: 'rgba(200, 223, 219, 0.45)',
              border: '1px solid var(--border-teal)',
              borderRadius: 'var(--radius-card)',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8125rem', color: 'var(--ink-primary)', fontWeight: 600 }}>
              <MapPin size={15} style={{ color: 'var(--color-primary)' }} />
              <span>Location: Philippines (Open to Remote Worldwide)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8125rem', color: 'var(--ink-muted)' }}>
              <Clock size={15} style={{ color: 'var(--color-primary)' }} />
              <span>Timezone: GMT+8 (Flexible overlap with US / Europe hours)</span>
            </div>
          </div>
        </div>

        {/* Right Column: Inquiry Message Form */}
        <section
          style={{
            backgroundColor: 'var(--surface-white)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-card)',
            padding: 'clamp(20px, 3vw, 28px)',
            boxShadow: 'var(--shadow-card)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <MessageSquare size={18} style={{ color: 'var(--color-primary)' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--ink-primary)' }}>
              Send a Direct Message
            </h3>
          </div>

          {formSubmitted && (
            <div
              role="status"
              aria-live="polite"
              style={{
                padding: '16px 18px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'rgba(200, 223, 219, 0.55)',
                border: '1px solid var(--color-primary)',
                marginBottom: '20px'
              }}
            >
              <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--ink-primary)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Check size={16} style={{ color: 'var(--color-primary)' }} />
                <span>Message Received</span>
              </div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--ink-muted)', lineHeight: 1.5 }}>
                Thank you for reaching out, {formData.name}. Your note has been recorded. You can also reach me directly at{' '}
                <a href={`mailto:${email}`} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                  {email}
                </a>.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label
                htmlFor="contact-name"
                style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--ink-muted)', marginBottom: '6px', textTransform: 'uppercase' }}
              >
                Your Name *
              </label>
              <input
                id="contact-name"
                type="text"
                required
                className="form-control"
                placeholder="e.g. Alex Rivera"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--ink-muted)', marginBottom: '6px', textTransform: 'uppercase' }}
              >
                Email Address *
              </label>
              <input
                id="contact-email"
                type="email"
                required
                className="form-control"
                placeholder="name@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label
                htmlFor="contact-subject"
                style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--ink-muted)', marginBottom: '6px', textTransform: 'uppercase' }}
              >
                Inquiry Topic
              </label>
              <select
                id="contact-subject"
                className="form-control"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              >
                <option value="Full-Time Role">Full-Time Engineering Role</option>
                <option value="Internship">Internship Opportunity</option>
                <option value="AI Application Project">AI Application / RAG Project</option>
                <option value="General Collaboration">General Technical Inquiry</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--ink-muted)', marginBottom: '6px', textTransform: 'uppercase' }}
              >
                Message *
              </label>
              <textarea
                id="contact-message"
                rows={5}
                required
                className="form-control"
                placeholder="Share details about the role, team, or project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{ resize: 'vertical' }}
              />
            </div>

            <Button type="submit" variant="primary" size="md" icon={<Send size={14} />}>
              {formSubmitted ? 'Resend Message' : 'Send Message'}
            </Button>
          </form>
        </section>
      </div>
    </div>
  );
};
