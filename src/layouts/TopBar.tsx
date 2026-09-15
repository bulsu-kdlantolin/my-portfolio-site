import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { navItems } from '../data/navigation';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { GithubIcon } from '../components/common/Icons';
import { Menu, ArrowUpRight } from 'lucide-react';

interface TopBarProps {
  onOpenMobileMenu: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenMobileMenu }) => {
  const location = useLocation();
  const currentNav = navItems.find((item) => item.path === location.pathname) || navItems[0];

  return (
    <header
      className="dashboard-topbar"
      style={{
        height: 'var(--topbar-h)',
        position: 'sticky',
        top: 0,
        zIndex: 30,
        backgroundColor: 'rgba(242, 239, 231, 0.92)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid var(--border-subtle)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 clamp(16px, 3vw, 32px)'
      }}
    >
      {/* Left: Mobile trigger & Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button
          onClick={onOpenMobileMenu}
          className="mobile-menu-trigger"
          aria-label="Open Navigation Menu"
          style={{
            display: 'none',
            padding: '8px',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-subtle)',
            backgroundColor: 'var(--surface-white)',
            color: 'var(--ink-primary)',
            cursor: 'pointer'
          }}
        >
          <Menu size={18} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
          <span style={{ color: 'var(--ink-subtle)', display: 'none' }} className="breadcrumb-root">
            WORKSPACE
          </span>
          <span style={{ color: 'var(--ink-subtle)', display: 'none' }} className="breadcrumb-separator">
            /
          </span>
          <span style={{ color: 'var(--color-primary)', fontWeight: 600, letterSpacing: '0.04em' }}>
            {currentNav.label.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Right: Quick Telemetry & Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div className="topbar-status-badge">
          <Badge variant="teal" size="sm" pulse>
            READY TO BUILD
          </Badge>
        </div>

        <a
          href="https://github.com/KianDavey"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <Button variant="outline" size="sm" icon={<GithubIcon size={14} />} iconPosition="left">
            GitHub
          </Button>
        </a>

        <Link to="/contact" style={{ textDecoration: 'none' }}>
          <Button variant="primary" size="sm" icon={<ArrowUpRight size={14} />} iconPosition="right">
            Get in Touch
          </Button>
        </Link>
      </div>
    </header>
  );
};
