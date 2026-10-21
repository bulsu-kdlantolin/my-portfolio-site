import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import {
  Mail,
  Copy,
  Check,
  Send,
  MapPin,
  ExternalLink,
  Globe2
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { theme } = useTheme();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDiscord, setCopiedDiscord] = useState(false);
  const [currentTimePHT, setCurrentTimePHT] = useState('');
  const [isWorkingHours, setIsWorkingHours] = useState(false);

  const email = 'antolin.kiandavey@gmail.com';
  const discordHandle = 'kiandavey';

  // Live Philippine Standard Time (PHT, UTC+8)
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const timeFormatter = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Manila',
          hour: 'numeric',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        });
        const hourFormatter = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Manila',
          hour: 'numeric',
          hour12: false
        });

        setCurrentTimePHT(timeFormatter.format(now));
        const manilaHour = parseInt(hourFormatter.format(now), 10);
        // Working hours: 8:00 AM to 6:00 PM PHT
        setIsWorkingHours(manilaHour >= 8 && manilaHour < 18);
      } catch {
        const d = new Date();
        const utc = d.getTime() + d.getTimezoneOffset() * 60000;
        const pht = new Date(utc + 3600000 * 8);
        setCurrentTimePHT(pht.toLocaleTimeString());
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText(discordHandle);
    setCopiedDiscord(true);
    setTimeout(() => setCopiedDiscord(false), 2200);
  };

  return (
    <div className="contact-page-container">
      {/* Header Section */}
      <header className="contact-header">
        <h1 className="contact-title">
          Contact & Collaboration
        </h1>

        <p className="contact-subtitle">
          I am actively exploring full-time software engineering roles, AI system positions, and technical collaborations. 
          Feel free to reach out directly via email or connect through any of my verified channels below.
        </p>
      </header>

      {/* Featured Primary Channel: Direct Email Hero */}
      <section className="contact-hero-card" aria-label="Direct Email Contact">
        <div className="contact-hero-left">
          <div className="contact-hero-tag-row">
            <span className="contact-card-icon-badge" style={{ width: '28px', height: '28px' }}>
              <Mail size={15} />
            </span>
            <span className="contact-card-tag">Primary Communication Channel</span>
            <span style={{ fontSize: '0.75rem', color: '#10B981', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#10B981' }} />
              Monitored Daily
            </span>
          </div>

          <div className="contact-hero-email-text">
            {email}
          </div>

          <p className="contact-hero-desc">
            The fastest channel for job offers, contract opportunities, and in-depth engineering discussions.
          </p>
        </div>

        <div className="contact-hero-actions">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="contact-action-btn"
            aria-label="Copy email address to clipboard"
            style={{ padding: '9px 18px', fontSize: '0.8125rem' }}
          >
            {copiedEmail ? <Check size={15} style={{ color: '#10B981' }} /> : <Copy size={15} />}
            <span>{copiedEmail ? 'Copied to Clipboard!' : 'Copy Email Address'}</span>
          </button>

          <a
            href={`mailto:${email}?subject=Opportunity%20Inquiry%20-%20Kian%20Antolin`}
            className="contact-action-btn contact-action-btn--primary"
            aria-label="Open default mail client"
            style={{ padding: '9px 18px', fontSize: '0.8125rem' }}
          >
            <Send size={14} />
            <span>Launch Mail App</span>
          </a>
        </div>
      </section>

      {/* 2-Column Balanced Supporting Grid */}
      <div className="contact-sub-grid">
        {/* Card 1: Verified Profiles & Socials */}
        <div className="contact-card">
          <div className="contact-card-header">
            <div className="contact-card-title-group">
              <h2 className="contact-card-title">Verified Profiles</h2>
            </div>
            <span className="contact-card-tag">Direct Links</span>
          </div>

          <p className="contact-card-desc">
            Connect or view code repositories across verified developer profiles.
          </p>

          <div className="contact-social-list">
            {/* GitHub */}
            <a
              href="https://github.com/KianDavey"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-item"
              title="View GitHub Profile"
            >
              <div className="contact-social-item-left">
                <div className="contact-social-logo">
                  <img
                    src="/logos/github.svg"
                    alt="GitHub"
                    style={{ filter: theme === 'dark' ? 'invert(1)' : 'none' }}
                  />
                </div>
                <div className="contact-social-meta">
                  <span className="contact-social-name">GitHub</span>
                  <span className="contact-social-desc">Open-source & code repositories</span>
                </div>
              </div>
              <span className="contact-social-handle">
                @KianDavey <ExternalLink size={12} />
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-item"
              title="Connect on LinkedIn"
            >
              <div className="contact-social-item-left">
                <div className="contact-social-logo">
                  <img src="/logos/linkedin.svg" alt="LinkedIn" />
                </div>
                <div className="contact-social-meta">
                  <span className="contact-social-name">LinkedIn</span>
                  <span className="contact-social-desc">Professional background & network</span>
                </div>
              </div>
              <span className="contact-social-handle">
                /in/kiandavey <ExternalLink size={12} />
              </span>
            </a>

            {/* Discord */}
            <div
              className="contact-social-item"
              style={{ cursor: 'pointer' }}
              onClick={handleCopyDiscord}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') handleCopyDiscord();
              }}
              title="Click to copy Discord handle"
            >
              <div className="contact-social-item-left">
                <div className="contact-social-logo">
                  <img src="/logos/discord.svg" alt="Discord" />
                </div>
                <div className="contact-social-meta">
                  <span className="contact-social-name">Discord</span>
                  <span className="contact-social-desc">Real-time chat & technical sync</span>
                </div>
              </div>
              <span className="contact-social-handle">
                {copiedDiscord ? (
                  <>
                    <Check size={12} style={{ color: '#10B981' }} /> Copied!
                  </>
                ) : (
                  <>
                    @{discordHandle} <Copy size={12} />
                  </>
                )}
              </span>
            </div>
          </div>
        </div>

        {/* Card 2: Live Philippines Telemetry & Availability */}
        <div className="contact-telemetry-card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={17} style={{ color: 'var(--color-primary)' }} />
              <h2 style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--ink-primary)', margin: 0 }}>
                Location & Availability
              </h2>
            </div>
            <span className="telemetry-time-zone">GMT+8 (PHT)</span>
          </div>

          {/* Dynamic Clock */}
          <div className="telemetry-clock-display">
            <div>
              <div style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', color: 'var(--ink-muted)', textTransform: 'uppercase', marginBottom: '2px' }}>
                Philippine Local Time
              </div>
              <div className="telemetry-time-val">{currentTimePHT || '12:00:00 PM'}</div>
            </div>

            <div>
              <span
                className={`telemetry-status-pill ${
                  isWorkingHours ? 'telemetry-status-pill--active' : 'telemetry-status-pill--afterhours'
                }`}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: isWorkingHours ? '#10B981' : 'var(--color-primary)'
                  }}
                />
                {isWorkingHours ? 'Active Work Hours' : 'After Hours · Queued'}
              </span>
            </div>
          </div>

          {/* Overlap Matrix */}
          <div className="telemetry-zone-chips">
            <div className="telemetry-zone-chip">
              <span className="telemetry-zone-name">North America (US)</span>
              <span className="telemetry-zone-diff">Evening PHT / Early Morning EST/PST</span>
            </div>
            <div className="telemetry-zone-chip">
              <span className="telemetry-zone-name">Europe / UK</span>
              <span className="telemetry-zone-diff">Afternoon PHT / Morning GMT</span>
            </div>
          </div>

          <div className="telemetry-status-row">
            <Globe2 size={14} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
            <span>Equipped with high-speed fiber internet and dedicated workstation for remote teams worldwide.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
