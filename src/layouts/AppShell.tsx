import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { MobileNav } from './MobileNav';

export const AppShell: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="app-shell" style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--bg-canvas)' }}>
      {/* Desktop Persistent Sidebar */}
      <Sidebar />

      {/* Mobile Drawer Navigation */}
      <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      {/* Main Workspace Area */}
      <div
        className="app-main-workspace"
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          minWidth: 0,
          minHeight: '100vh'
        }}
      >
        {/* Sticky TopBar */}
        <TopBar onOpenMobileMenu={() => setIsMobileMenuOpen(true)} />

        {/* Dynamic Page Content View */}
        <main
          id="workspace-content"
          style={{
            flex: 1,
            padding: 'clamp(14px, 2vw, 24px) clamp(16px, 2.5vw, 32px)',
            maxWidth: '1240px',
            width: '100%',
            margin: '0 auto'
          }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};
