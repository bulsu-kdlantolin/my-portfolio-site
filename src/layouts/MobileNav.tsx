import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from '../data/navigation';
import { useTheme } from '../context/ThemeContext';
import {
  X,
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
  '/': <Home size={18} />,
  '/projects': <FolderGit2 size={18} />,
  '/experience': <Briefcase size={18} />,
  '/stack': <Layers size={18} />,
  '/certifications': <Award size={18} />,
  '/about': <User size={18} />,
  '/contact': <Mail size={18} />
};

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const { theme, toggleTheme } = useTheme();
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);
  const email = 'antolin.kiandavey@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: 'rgba(10, 17, 26, 0.65)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        justifyContent: 'flex-start'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          width: '85%',
          maxWidth: '320px',
          height: '100%',
          backgroundColor: 'var(--bg-canvas)',
          borderRight: '1px solid var(--border-subtle)',
          padding: '24px 20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          animation: 'slideInLeft 200ms var(--ease-out)',
          overflowY: 'auto'
        }}
      >
        <div>
          {/* Top Close Button Row */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '8px' }}>
            <button
              onClick={onClose}
              aria-label="Close navigation"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: '1px solid var(--border-subtle)',
                backgroundColor: 'var(--surface-white)',
                color: 'var(--ink-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={16} />
            </button>
          </div>

          {/* Profile Header Block */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              marginBottom: '20px'
            }}
          >
            {/* Avatar (Floating natural portrait matching reference) */}
            <div
              style={{
                position: 'relative',
                width: '92px',
                aspectRatio: '1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '8px'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: '18% 4% 0',
                  borderRadius: '50%',
                  background: 'radial-gradient(ellipse at 50% 70%, rgba(51, 104, 160, 0.28), transparent 66%)',
                  filter: 'blur(16px)',
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
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    objectPosition: 'center bottom',
                    filter: 'drop-shadow(0 10px 18px rgba(6, 12, 26, 0.22))',
                    WebkitMaskImage: 'radial-gradient(ellipse 80% 86% at 50% 24%, #000 50%, transparent 100%)',
                    maskImage: 'radial-gradient(ellipse 80% 86% at 50% 24%, #000 50%, transparent 100%)'
                  }}
                />
              ) : (
                <div
                  style={{
                    width: '76px',
                    height: '76px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-primary)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '1.4rem'
                  }}
                >
                  KA
                </div>
              )}
            </div>

            {/* Name + Verified Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'center' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  color: 'var(--ink-primary)',
                  letterSpacing: '-0.02em',
                  margin: 0
                }}
              >
                Kian Davey Antolin
              </h2>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  backgroundColor: '#1D9BF0',
                  color: '#FFFFFF',
                  flexShrink: 0
                }}
              >
                <Check size={10} color="#FFFFFF" strokeWidth={3.5} />
              </span>
            </div>

            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.8125rem',
                color: 'var(--ink-muted)',
                marginTop: '3px',
                marginBottom: '14px'
              }}
            >
              @kiandavey · Aspiring AI Engineer
            </div>

            {/* Official Brand Icons (No Containers, Authentic Colors) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', justifyContent: 'center', marginBottom: '18px' }}>
              {/* GitHub */}
              <a
                href="https://github.com/KianDavey"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="sidebar-brand-icon"
              >
                <img
                  src="/logos/github.svg"
                  alt="GitHub"
                  style={{
                    width: '22px',
                    height: '22px',
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
                className="sidebar-brand-icon"
              >
                <img
                  src="/logos/linkedin.svg"
                  alt="LinkedIn"
                  style={{ width: '22px', height: '22px', display: 'block' }}
                />
              </a>

              {/* Gmail / Copy Email */}
              <button
                onClick={handleCopyEmail}
                aria-label="Copy Email Address"
                className="sidebar-brand-icon"
                style={{ position: 'relative' }}
              >
                <img
                  src="/logos/gmail.svg"
                  alt="Gmail"
                  style={{ width: '23px', height: '19px', display: 'block' }}
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
                className="sidebar-brand-icon"
              >
                <img
                  src="/logos/discord.svg"
                  alt="Discord"
                  style={{ width: '23px', height: '19px', display: 'block' }}
                />
              </a>
            </div>

            {/* Hairline Divider */}
            <div style={{ height: '1px', backgroundColor: 'var(--border-subtle)', width: '100%', marginBottom: '14px' }} />
          </div>

          {/* Links */}
          <nav>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.path === '/'}
                    onClick={onClose}
                    style={({ isActive }) => ({
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '11px 14px',
                      borderRadius: 'var(--radius-sm)',
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.9375rem',
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? 'var(--ink-primary)' : 'var(--ink-muted)',
                      backgroundColor: isActive
                        ? theme === 'dark'
                          ? 'rgba(74, 140, 210, 0.18)'
                          : 'rgba(200, 223, 219, 0.45)'
                        : 'transparent',
                      border: `1px solid ${isActive ? 'var(--border-teal)' : 'transparent'}`,
                      textDecoration: 'none'
                    })}
                  >
                    {({ isActive }) => (
                      <>
                        <span
                          style={{
                            color: isActive ? 'var(--color-primary)' : 'inherit',
                            display: 'flex',
                            alignItems: 'center'
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

        {/* Footer */}
        <div
          style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '14px',
            marginTop: '20px',
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
              width: '36px',
              height: '36px',
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
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--ink-subtle)', lineHeight: 1.4 }}>
            <div>© 2026</div>
            <div>Kian Davey Antolin. All rights reserved.</div>
          </div>
        </div>
      </div>
    </div>
  );
};
