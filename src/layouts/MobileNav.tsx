import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from '../data/navigation';
import { Badge } from '../components/common/Badge';
import { GithubIcon, LinkedinIcon } from '../components/common/Icons';
import { X } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
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
        backgroundColor: 'rgba(20, 35, 52, 0.5)',
        backdropFilter: 'blur(4px)',
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
          animation: 'slideInLeft 200ms var(--ease-out)'
        }}
      >
        <div>
          {/* Mobile Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 800, color: 'var(--ink-primary)' }}>
                Kian Davey Antolin
              </h2>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                Aspiring AI Engineer
              </span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close navigation"
              style={{
                padding: '6px',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid var(--border-subtle)',
                backgroundColor: 'var(--surface-white)',
                cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <Badge variant="status" size="sm" pulse>
              BS IT (APPROACHING GRAD)
            </Badge>
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
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-sm)',
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.9375rem',
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? 'var(--color-primary)' : 'var(--ink-primary)',
                      backgroundColor: isActive ? 'rgba(200, 223, 219, 0.6)' : 'transparent',
                      border: `1px solid ${isActive ? 'var(--border-teal)' : 'transparent'}`,
                      textDecoration: 'none'
                    })}
                  >
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Social / Direct Channels */}
        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '16px' }}>
          <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--ink-muted)', marginBottom: '8px' }}>
            CONNECT WITH KIAN
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <a
              href="https://github.com/KianDavey"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-subtle)',
                backgroundColor: 'var(--surface-white)',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--ink-primary)'
              }}
            >
              <GithubIcon size={14} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kiandavey/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-subtle)',
                backgroundColor: 'var(--surface-white)',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--ink-primary)'
              }}
            >
              <LinkedinIcon size={14} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
