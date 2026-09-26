import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { Menu, ArrowUpRight } from 'lucide-react';

interface TopBarProps {
  onOpenMobileMenu: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenMobileMenu }) => {
  const location = useLocation();

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
      {/* Left: Mobile trigger */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
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
      </div>

      {/* Right: Primary Action */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {location.pathname !== '/contact' ? (
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <Button variant="primary" size="sm" icon={<ArrowUpRight size={14} />} iconPosition="right">
              Get in Touch
            </Button>
          </Link>
        ) : (
          <Link to="/projects" style={{ textDecoration: 'none' }}>
            <Button variant="secondary" size="sm" icon={<ArrowUpRight size={14} />} iconPosition="right">
              Explore Projects
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
};
