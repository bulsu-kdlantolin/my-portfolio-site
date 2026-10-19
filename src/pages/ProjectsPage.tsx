import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import { Project } from '../types/project';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ProjectDrawer } from '../components/projects/ProjectDrawer';
import { Sparkles } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Page Header */}
      <div
        style={{
          borderBottom: '1px solid var(--border-subtle)',
          paddingBottom: '20px'
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
      </div>

      {/* Projects Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '24px'
        }}
      >
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={(p) => setSelectedProject(p)}
          />
        ))}

        {/* Clear, honest placeholder for upcoming projects */}
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
      </div>

      {/* Case Study Modal Sheet */}
      <ProjectDrawer
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
