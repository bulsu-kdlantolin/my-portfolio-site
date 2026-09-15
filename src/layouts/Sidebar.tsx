import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from '../data/navigation';
import { Badge } from '../components/common/Badge';
import { GithubIcon, LinkedinIcon } from '../components/common/Icons';
import {
  LayoutDashboard,
  FolderGit2,
  Cpu,
  Layers,
  GitPullRequest,
  User,
  Mail,
  Copy,
  Check
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  '/': <LayoutDashboard size={17} />,
  '/projects': <FolderGit2 size={17} />,
  '/ai-systems': <Cpu size={17} />,
  '/stack': <Layers size={17} />,
  '/how-i-build': <GitPullRequest size={17} />,
  '/about': <User size={17} />,
  '/contact': <Mail size={17} />
};

export const Sidebar: React.FC = () => {
  const [copied, setCopied] = useState(false);
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
        padding: '28px 20px 24px',
        zIndex: 40,
        flexShrink: 0
      }}
    >
      {/* Top Section: Identity & Status */}
      <div>
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--color-primary)',
                color: 'var(--bg-canvas)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '0.875rem'
              }}
            >
              KA
            </div>
            <div>
              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1rem',
                  fontWeight: 800,
                  color: 'var(--ink-primary)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15
                }}
              >
                Kian Davey Antolin
              </h1>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6875rem',
                  color: 'var(--color-primary)',
                  fontWeight: 600,
                  letterSpacing: '0.02em'
                }}
              >
                AI & FULL-STACK ENG
              </span>
            </div>
          </div>

          <Badge variant="status" size="sm" pulse>
            BS IT (APPROACHING GRAD)
          </Badge>
        </div>

        {/* Navigation List */}
        <nav aria-label="Primary Navigation">
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) => `sidebar-nav-link ${isActive ? 'is-active' : ''}`}
                  style={({ isActive }) => ({
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '9px 12px',
                    borderRadius: 'var(--radius-sm)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.875rem',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? 'var(--color-primary)' : 'var(--ink-muted)',
                    backgroundColor: isActive ? 'rgba(200, 223, 219, 0.5)' : 'transparent',
                    border: `1px solid ${isActive ? 'var(--border-teal)' : 'transparent'}`,
                    transition: 'all var(--transition-fast)',
                    textDecoration: 'none'
                  })}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ color: 'inherit', display: 'flex' }}>
                      {iconMap[item.path]}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.625rem',
                      opacity: 0.6,
                      fontWeight: 600
                    }}
                  >
                    {item.badge}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom Utility: Quick Copy Email & Social Links */}
      <div
        style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}
      >
        <button
          onClick={handleCopyEmail}
          aria-label="Copy Kian's email address"
          title="Click to copy email address"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            padding: '8px 10px',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-subtle)',
            backgroundColor: 'var(--surface-white)',
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)',
            color: copied ? 'var(--color-primary)' : 'var(--ink-muted)',
            cursor: 'pointer',
            transition: 'all var(--transition-fast)'
          }}
        >
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {copied ? 'Copied to clipboard!' : email}
          </span>
          {copied ? <Check size={13} style={{ color: 'var(--color-primary)' }} /> : <Copy size={13} />}
        </button>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 4px' }}>
          <span style={{ fontSize: '0.6875rem', color: 'var(--ink-subtle)', fontFamily: 'var(--font-mono)' }}>
            PHILIPPINES // GMT+8
          </span>
          <div style={{ display: 'flex', gap: '8px' }}>
            <a
              href="https://github.com/KianDavey"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              style={{
                color: 'var(--ink-muted)',
                transition: 'color var(--transition-fast)',
                display: 'flex'
              }}
            >
              <GithubIcon size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/kiandavey/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              style={{
                color: 'var(--ink-muted)',
                transition: 'color var(--transition-fast)',
                display: 'flex'
              }}
            >
              <LinkedinIcon size={15} />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};
