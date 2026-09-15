import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AppShell } from './layouts/AppShell';
import { OverviewPage } from './pages/OverviewPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AISystemsPage } from './pages/AISystemsPage';
import { StackPage } from './pages/StackPage';
import { HowIBuildPage } from './pages/HowIBuildPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top on route navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<AppShell />}>
          <Route index element={<OverviewPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="ai-systems" element={<AISystemsPage />} />
          <Route path="stack" element={<StackPage />} />
          <Route path="how-i-build" element={<HowIBuildPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<OverviewPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
