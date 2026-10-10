import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from '../data/navigation';
import { useTheme } from '../context/ThemeContext';
import {
  Home,
  FolderGit2,
  Briefcase,
  Layers,
  Award,
  User,
  Mail,
  Check,
  Moon,
  Sun
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  '/': <Home size={19} />,
  '/projects': <FolderGit2 size={19} />,
  '/experience': <Briefcase size={19} />,
  '/stack': <Layers size={19} />,
  '/certifications': <Award size={19} />,
  '/about': <User size={19} />,
  '/contact': <Mail size={19} />
};

export const Sidebar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);
  const email = 'antolin.kiandavey@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <aside
      className="desktop-sidebar"
      style={{
        width: 'var(--sidebar-w)',
        height: '100vh',
        position: 'sticky',
        top: 0,
        backgroundColor: 'var(--bg-canvas)',
        borderRight: '1px solid var(--border-subtle)',
        display: 'flex',
        flexDirection: 'column',
        padding: 'clamp(28px, 4vh, 52px) 30px 28px',
        zIndex: 40,
        flexShrink: 0,
        overflowY: 'auto',
        scrollbarWidth: 'none'
      }}
    >
      <div
        className="rail__inner"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '100%',
          width: '100%'
        }}
      >
        {/* Profile Avatar */}
        <div
          className="rail__avatar"
          style={{
            position: 'relative',
            width: 'clamp(132px, 21vh, 190px)',
            aspectRatio: '1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Ambient backlight glow matching Kenneth Villar rail */}
          <div
            style={{
              position: 'absolute',
              inset: '18% 4% 0',
              borderRadius: '50%',
              background: 'radial-gradient(ellipse at 50% 70%, rgba(51, 104, 160, 0.28), transparent 66%)',
              filter: 'blur(22px)',
              pointerEvents: 'none'
            }}
          />

          {!imgError ? (
            <img
              src="/avatar-profile.png"
              alt="Kian Davey Antolin"
              onError={() => setImgError(true)}
              style={{
                position: 'relative',
                display: 'block',
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'center bottom',
                filter: 'drop-shadow(0 14px 22px rgba(6, 12, 26, 0.35))',
                WebkitMaskImage: 'radial-gradient(ellipse 80% 86% at 50% 24%, #000 50%, transparent 100%)',
                maskImage: 'radial-gradient(ellipse 80% 86% at 50% 24%, #000 50%, transparent 100%)'
              }}
            />
          ) : (
            <div
              style={{
                width: '110px',
                height: '110px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-primary)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.75rem'
              }}
            >
              KA
            </div>
          )}
        </div>

        {/* Name & Blue Verified Badge */}
        <h2
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '7px',
            marginTop: '20px',
            marginBottom: 0,
            fontFamily: 'var(--font-display)',
            fontSize: '22px',
            fontWeight: 700,
            letterSpacing: '-0.022em',
            lineHeight: 1.2,
            color: 'var(--ink-primary)',
            textAlign: 'center'
          }}
        >
          Kian Davey Antolin
          <span
            title="Verified Profile"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              backgroundColor: '#1D9BF0',
              color: '#FFFFFF',
              flexShrink: 0
            }}
          >
            <Check size={11} strokeWidth={3.5} />
          </span>
        </h2>

        {/* Handle / Subtitle */}
        <p
          style={{
            margin: '5px 0 0 0',
            fontFamily: 'var(--font-display)',
            fontSize: '14.5px',
            color: 'var(--ink-muted)',
            letterSpacing: '0.004em',
            textAlign: 'center'
          }}
        >
          @kiandavey
          <span style={{ color: 'var(--ink-muted)', fontWeight: 500 }}>
            {' · '}Aspiring AI Engineer
          </span>
        </p>

        {/* Official Brand Icons (No Containers, Authentic Colors) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            marginTop: '18px',
            justifyContent: 'center'
          }}
        >
          {/* GitHub */}
          <a
            href="https://github.com/KianDavey"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            title="GitHub Profile"
            className="sidebar-brand-icon"
          >
            <img
              src="/logos/github.svg"
              alt="GitHub"
              style={{
                width: '23px',
                height: '23px',
                display: 'block',
                filter: theme === 'dark' ? 'invert(1)' : 'none'
              }}
            />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            title="LinkedIn Profile"
            className="sidebar-brand-icon"
          >
            <img
              src="/logos/linkedin.svg"
              alt="LinkedIn"
              style={{ width: '23px', height: '23px', display: 'block' }}
            />
          </a>

          {/* Gmail / Copy Email */}
          <button
            onClick={handleCopyEmail}
            aria-label="Copy Email Address"
            title={copied ? 'Email Copied!' : 'Copy Email (antolin.kiandavey@gmail.com)'}
            className="sidebar-brand-icon"
            style={{ position: 'relative' }}
          >
            <img
              src="/logos/gmail.svg"
              alt="Gmail"
              style={{ width: '24px', height: '20px', display: 'block' }}
            />
            {copied && (
              <span
                style={{
                  position: 'absolute',
                  top: '-24px',
                  backgroundColor: 'var(--ink-primary)',
                  color: 'var(--bg-canvas)',
                  fontSize: '0.625rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  padding: '2px 6px',
                  borderRadius: '4px',
                  whiteSpace: 'nowrap',
                  pointerEvents: 'none',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                Copied!
              </span>
            )}
          </button>

          {/* Discord */}
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord Profile"
            title="Discord"
            className="sidebar-brand-icon"
          >
            <img
              src="/logos/discord.svg"
              alt="Discord"
              style={{ width: '24px', height: '20px', display: 'block' }}
            />
          </a>
        </div>

        {/* Navigation List */}
        <nav
          className="rail__nav"
          style={{
            width: '100%',
            marginTop: 'clamp(20px, 3vh, 32px)',
            paddingTop: 'clamp(18px, 2.6vh, 28px)',
            borderTop: '1px solid var(--border-subtle)'
          }}
          aria-label="Primary Navigation"
        >
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '3px', listStyle: 'none', padding: 0, margin: 0 }}>
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) => `rail__link ${isActive ? 'active' : ''}`}
                >
                  {iconMap[item.path]}
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hairline Divider & Footer (Pinned to bottom via margin-top: auto) */}
        <div
          className="rail__copy"
          style={{
            width: '100%',
            marginTop: 'auto',
            paddingTop: 'clamp(24px, 4vh, 40px)',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}
        >
          {/* Dark / Light Mode Switch Button at Footer */}
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="theme-toggle-footer-btn"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              backgroundColor: 'var(--surface-white)',
              border: '1px solid var(--border-subtle)',
              color: theme === 'dark' ? '#F59E0B' : 'var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              color: 'var(--ink-muted)',
              lineHeight: 1.6,
              letterSpacing: '0.004em'
            }}
          >
            <div>© 2026</div>
            <div>Kian Davey Antolin. All rights reserved.</div>
          </div>
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
