import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from '../data/navigation';
import { useTheme } from '../context/ThemeContext';
import { GithubIcon, LinkedinIcon } from '../components/common/Icons';
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
            {/* Avatar */}
            <div
              style={{
                width: '76px',
                height: '76px',
                borderRadius: '20px',
                overflow: 'hidden',
                backgroundColor: 'var(--surface-white)',
                border: '2px solid var(--surface-white)',
                boxShadow: 'var(--shadow-card)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '10px'
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
                    fontSize: '1.25rem'
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
                  fontSize: '1.0625rem',
                  fontWeight: 800,
                  color: 'var(--ink-primary)',
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
                  backgroundColor: 'var(--color-primary)',
                  flexShrink: 0
                }}
              >
                <Check size={10} color="#FFFFFF" strokeWidth={3.5} />
              </span>
            </div>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                color: 'var(--ink-muted)',
                marginTop: '3px',
                marginBottom: '14px'
              }}
            >
              @kiandavey · Aspiring AI Engineer
            </div>

            {/* 4 Circular Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
              {/* GitHub */}
              <a
                href="https://github.com/KianDavey"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
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
                  textDecoration: 'none'
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
                  textDecoration: 'none'
                }}
              >
                <LinkedinIcon size={15} />
              </a>

              {/* Copy Email */}
              <button
                onClick={handleCopyEmail}
                aria-label="Copy Email Address"
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
                  cursor: 'pointer'
                }}
              >
                {copied ? <Check size={14} /> : <Mail size={14} />}
              </button>
            </div>
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
            gap: '8px'
          }}
        >
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
            title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
            style={{
              width: '26px',
              height: '26px',
              borderRadius: '50%',
              border: '1px solid var(--border-subtle)',
              backgroundColor: 'var(--surface-white)',
              color: theme === 'dark' ? '#F59E0B' : 'var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            {theme === 'dark' ? <Sun size={13} /> : <Moon size={13} />}
          </button>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: 'var(--ink-subtle)' }}>
            © 2026 Kian Davey Antolin
          </div>
        </div>
      </div>
    </div>
  );
};
