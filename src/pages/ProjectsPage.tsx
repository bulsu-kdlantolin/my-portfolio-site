import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import { Project } from '../types/project';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ProjectDrawer } from '../components/projects/ProjectDrawer';
import { Badge } from '../components/common/Badge';
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <Badge variant="primary" size="sm">
            ENGINEERING WORK
          </Badge>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--ink-muted)' }}>
            1 ACTIVE BUILD // EXPANDING REPOSITORY
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
          Practical web applications and accessibility extensions. Each project is accompanied by an architectural breakdown of problem context, system design, and technical decisions.
        </p>
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
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            minHeight: '260px',
            gap: '12px'
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: 'var(--radius-pill)',
              backgroundColor: 'var(--bg-canvas)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--ink-muted)'
            }}
          >
            <Sparkles size={20} />
          </div>
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.125rem',
                fontWeight: 700,
                color: 'var(--ink-primary)',
                marginBottom: '4px'
              }}
            >
              More projects coming soon
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
              Additional full-stack web applications and applied AI projects currently in early development and planning.
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
