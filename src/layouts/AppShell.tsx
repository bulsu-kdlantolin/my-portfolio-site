import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { MobileNav } from './MobileNav';
import { SignatureBackground } from '../components/common/SignatureBackground';

export const AppShell: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="app-shell" style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--bg-canvas)' }}>
      {/* Desktop Persistent Sidebar */}
      <Sidebar />

      {/* Mobile Drawer Navigation */}
      <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      {/* Main Workspace Area */}
      <div
        className={`app-main-workspace ${isHomePage ? 'app-main-workspace--home' : ''}`}
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          minWidth: 0,
          minHeight: '100vh',
          position: 'relative'
        }}
      >
        {/* Kian Exclusive Signature Background */}
        <SignatureBackground />

        {/* Sticky TopBar */}
        <TopBar onOpenMobileMenu={() => setIsMobileMenuOpen(true)} />

        {/* Dynamic Page Content View */}
        <main
          id="workspace-content"
          className={isHomePage ? 'workspace-content--home' : 'workspace-content--page'}
          style={{
            flex: 1,
            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box',
            position: 'relative',
            zIndex: 1
          }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};
