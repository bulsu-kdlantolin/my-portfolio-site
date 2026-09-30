import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from '../data/navigation';
import { useTheme } from '../context/ThemeContext';
import { GithubIcon, LinkedinIcon } from '../components/common/Icons';
import {
  Home,
  FolderGit2,
  Layers,
  Award,
  User,
  Mail,
  Check,
  Moon,
  Sun
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  '/': <Home size={18} />,
  '/projects': <FolderGit2 size={18} />,
  '/stack': <Layers size={18} />,
  '/certifications': <Award size={18} />,
  '/about': <User size={18} />,
  '/contact': <Mail size={18} />
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
        justifyContent: 'space-between',
        padding: '28px 20px 22px',
        zIndex: 40,
        flexShrink: 0
      }}
    >
      {/* Top Profile & Actions Block */}
      <div>
        {/* Profile Card Header (Kenneth Villar format tailored to Kian) */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: '22px'
          }}
        >
          {/* Avatar with subtle rounded squircle container */}
          <div
            style={{
              width: '84px',
              height: '84px',
              borderRadius: '24px',
              overflow: 'hidden',
              backgroundColor: 'var(--surface-white)',
              border: '2px solid var(--surface-white)',
              boxShadow: 'var(--shadow-card)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '12px',
              position: 'relative'
            }}
          >
            {!imgError ? (
              <img
                src="/avatar-profile.jpg"
                alt="Kian Davey Antolin"
                onError={() => setImgError(true)}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            ) : (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'var(--color-primary)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '1.5rem'
                }}
              >
                KA
              </div>
            )}
          </div>

          {/* Name & Verified Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'center' }}>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.0625rem',
                fontWeight: 800,
                color: 'var(--ink-primary)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                margin: 0
              }}
            >
              Kian Davey Antolin
            </h1>
            {/* Verified Badge */}
            <span
              title="Verified Profile"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-primary)',
                flexShrink: 0
              }}
            >
              <Check size={10} color="#FFFFFF" strokeWidth={3.5} />
            </span>
          </div>

          {/* Subtitle / Handle */}
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6875rem',
              color: 'var(--ink-muted)',
              marginTop: '4px',
              marginBottom: '14px'
            }}
          >
            @kiandavey · Aspiring AI Engineer
          </div>

          {/* 3 Circular Action Buttons: GitHub, LinkedIn, Copy Email */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
            {/* GitHub */}
            <a
              href="https://github.com/KianDavey"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              title="GitHub Profile"
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                border: '1px solid var(--border-subtle)',
                backgroundColor: 'var(--surface-white)',
                color: 'var(--ink-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'all var(--transition-fast)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <GithubIcon size={15} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                border: '1px solid var(--border-subtle)',
                backgroundColor: 'var(--surface-white)',
                color: 'var(--ink-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'all var(--transition-fast)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <LinkedinIcon size={15} />
            </a>

            {/* Copy Email */}
            <button
              onClick={handleCopyEmail}
              aria-label="Copy Email Address"
              title={copied ? "Email Copied!" : "Copy Email"}
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                border: `1px solid ${copied ? 'var(--color-primary)' : 'var(--border-subtle)'}`,
                backgroundColor: 'var(--surface-white)',
                color: copied ? 'var(--color-primary)' : 'var(--ink-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              {copied ? <Check size={14} /> : <Mail size={14} />}
            </button>
          </div>
        </div>

        {/* Navigation List */}
        <nav aria-label="Primary Navigation">
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) => `sidebar-nav-link ${isActive ? 'is-active' : ''}`}
                  style={({ isActive }) => ({
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-sm)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.875rem',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? 'var(--ink-primary)' : 'var(--ink-muted)',
                    backgroundColor: isActive
                      ? theme === 'dark'
                        ? 'rgba(74, 140, 210, 0.18)'
                        : 'rgba(200, 223, 219, 0.45)'
                      : 'transparent',
                    border: `1px solid ${isActive ? 'var(--border-teal)' : 'transparent'}`,
                    transition: 'all var(--transition-fast)',
                    textDecoration: 'none'
                  })}
                >
                  {({ isActive }) => (
                    <>
                      <span
                        style={{
                          color: isActive ? 'var(--color-primary)' : 'inherit',
                          display: 'flex',
                          alignItems: 'center',
                          transition: 'color var(--transition-fast)'
                        }}
                      >
                        {iconMap[item.path]}
                      </span>
                      <span>{item.label}</span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom Footer: Theme Switch Button + Copyright */}
      <div
        style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}
      >
        <button
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
          title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
          style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            border: '1px solid var(--border-subtle)',
            backgroundColor: 'var(--surface-white)',
            color: theme === 'dark' ? '#F59E0B' : 'var(--color-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            flexShrink: 0,
            transition: 'all var(--transition-fast)',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          {theme === 'dark' ? <Sun size={13} /> : <Moon size={13} />}
        </button>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--ink-subtle)', lineHeight: 1.35 }}>
          <div>© 2026 Kian Davey Antolin.</div>
          <div>All rights reserved.</div>
        </div>
      </div>
    </aside>
  );
};
