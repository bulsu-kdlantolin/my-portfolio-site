import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import { Project, ProjectCategory } from '../types/project';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ProjectDrawer } from '../components/projects/ProjectDrawer';
import { Badge } from '../components/common/Badge';

export const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: { key: ProjectCategory; label: string; count: number }[] = [
    { key: 'all', label: 'All Projects', count: projectsData.length },
    {
      key: 'accessibility',
      label: 'Accessibility & Extensions',
      count: projectsData.filter((p) => p.category === 'accessibility').length
    },
    {
      key: 'web-app',
      label: 'Web Applications',
      count: projectsData.filter((p) => p.category === 'web-app').length
    },
    {
      key: 'ai-rag',
      label: 'Applied AI & RAG',
      count: projectsData.filter((p) => p.category === 'ai-rag').length
    },
    {
      key: 'frontend',
      label: 'Frontend Systems',
      count: projectsData.filter((p) => p.category === 'frontend').length
    }
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Page Header */}
      <div
        style={{
          borderBottom: '1px solid var(--border-subtle)',
          paddingBottom: '20px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <Badge variant="primary" size="sm">
            ENGINEERING WORK
          </Badge>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--ink-muted)' }}>
            {filteredProjects.length} REPOSITORIES / CASE STUDIES
          </span>
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
            fontWeight: 800,
            color: 'var(--ink-primary)',
            letterSpacing: '-0.02em',
            marginBottom: '8px'
          }}
        >
          Engineering Projects & Case Studies
        </h2>
        <p style={{ fontSize: '0.9375rem', color: 'var(--ink-muted)', maxWidth: '780px', lineHeight: 1.6 }}>
          Practical web applications, accessibility extensions, and retrieval-augmented generation systems. Each project is accompanied by an architectural breakdown of problem context, system design, and technical decisions.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          paddingBottom: '4px',
          scrollbarWidth: 'none'
        }}
      >
        {categories.map((cat) => {
          const isActive = activeCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: 'var(--radius-pill)',
                border: `1px solid ${isActive ? 'var(--color-primary)' : 'var(--border-subtle)'}`,
                backgroundColor: isActive ? 'var(--color-primary)' : 'var(--surface-white)',
                color: isActive ? 'var(--bg-canvas)' : 'var(--ink-primary)',
                fontFamily: 'var(--font-display)',
                fontSize: '0.8125rem',
                fontWeight: isActive ? 600 : 500,
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
                whiteSpace: 'nowrap'
              }}
            >
              <span>{cat.label}</span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6875rem',
                  padding: '1px 6px',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: isActive ? 'rgba(255, 255, 255, 0.25)' : 'rgba(200, 223, 219, 0.6)',
                  color: isActive ? 'var(--bg-canvas)' : 'var(--ink-primary)'
                }}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '24px'
        }}
      >
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={(p) => setSelectedProject(p)}
          />
        ))}
      </div>

      {/* Case Study Modal Sheet */}
      <ProjectDrawer
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
