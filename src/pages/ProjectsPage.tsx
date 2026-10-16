import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import { Project } from '../types/project';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ProjectDrawer } from '../components/projects/ProjectDrawer';
import { Sparkles } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'accessibility' | 'ai-rag' | 'web-app'>('all');

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Page Header */}
      <div
        style={{
          borderBottom: '1px solid var(--border-subtle)',
          paddingBottom: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '16px'
        }}
      >
        <div>
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
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-muted)', maxWidth: '780px', lineHeight: 1.6, margin: 0 }}>
            Practical software builds, accessibility browser engines, and AI systems. Each project includes official technology stack badges, UI previews, and architectural breakdowns.
          </p>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: 'var(--surface-white)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-pill)',
            padding: '4px',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <button
            onClick={() => setActiveFilter('all')}
            style={{
              padding: '6px 14px',
              borderRadius: 'var(--radius-pill)',
              border: 'none',
              backgroundColor: activeFilter === 'all' ? 'var(--color-primary)' : 'transparent',
              color: activeFilter === 'all' ? '#ffffff' : 'var(--ink-muted)',
              fontFamily: 'var(--font-display)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all var(--transition-fast)'
            }}
          >
            All ({projectsData.length})
          </button>
          <button
            onClick={() => setActiveFilter('accessibility')}
            style={{
              padding: '6px 14px',
              borderRadius: 'var(--radius-pill)',
              border: 'none',
              backgroundColor: activeFilter === 'accessibility' ? 'var(--color-primary)' : 'transparent',
              color: activeFilter === 'accessibility' ? '#ffffff' : 'var(--ink-muted)',
              fontFamily: 'var(--font-display)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all var(--transition-fast)'
            }}
          >
            Accessibility
          </button>
          <button
            onClick={() => setActiveFilter('ai-rag')}
            style={{
              padding: '6px 14px',
              borderRadius: 'var(--radius-pill)',
              border: 'none',
              backgroundColor: activeFilter === 'ai-rag' ? 'var(--color-primary)' : 'transparent',
              color: activeFilter === 'ai-rag' ? '#ffffff' : 'var(--ink-muted)',
              fontFamily: 'var(--font-display)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all var(--transition-fast)'
            }}
          >
            AI Systems
          </button>
          <button
            onClick={() => setActiveFilter('web-app')}
            style={{
              padding: '6px 14px',
              borderRadius: 'var(--radius-pill)',
              border: 'none',
              backgroundColor: activeFilter === 'web-app' ? 'var(--color-primary)' : 'transparent',
              color: activeFilter === 'web-app' ? '#ffffff' : 'var(--ink-muted)',
              fontFamily: 'var(--font-display)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all var(--transition-fast)'
            }}
          >
            Web Apps
          </button>
        </div>
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

        {/* Clear, honest placeholder for upcoming projects */}
        {activeFilter === 'all' && (
          <div
            style={{
              border: '2px dashed var(--border-subtle)',
              borderRadius: 'var(--radius-card)',
              padding: '32px 24px',
              backgroundColor: 'var(--surface-white)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              minHeight: '320px',
              gap: '12px',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'var(--bg-canvas)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-primary)'
              }}
            >
              <Sparkles size={22} />
            </div>
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.125rem',
                  fontWeight: 800,
                  color: 'var(--ink-primary)',
                  marginBottom: '6px'
                }}
              >
                More projects in active pipeline
              </h3>
              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--ink-muted)',
                  maxWidth: '320px',
                  lineHeight: 1.5,
                  margin: 0
                }}
              >
                Additional full-stack microservices, edge extensions, and LLM evaluations currently in active engineering.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Case Study Modal Sheet */}
      <ProjectDrawer
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
