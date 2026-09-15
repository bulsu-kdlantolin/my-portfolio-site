import React from 'react';
import { Project } from '../../types/project';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { GithubIcon } from '../common/Icons';
import { ExternalLink, Layers } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <article
      className="project-card"
      style={{
        backgroundColor: 'var(--surface-white)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-card)',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        boxShadow: 'var(--shadow-sm)',
        transition: 'all var(--transition-fast)'
      }}
    >
      <div>
        {/* Card Header: Category & Status */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
          <Badge variant="teal" size="sm">
            {project.categoryLabel}
          </Badge>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6875rem',
              color: 'var(--ink-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: project.status === 'Completed' ? 'var(--color-secondary)' : 'var(--color-primary)'
              }}
            />
            {project.status}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.25rem',
            fontWeight: 700,
            color: 'var(--ink-primary)',
            marginBottom: '8px',
            lineHeight: 1.3
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            fontSize: '0.875rem',
            color: 'var(--color-primary)',
            fontWeight: 500,
            marginBottom: '14px',
            fontFamily: 'var(--font-display)'
          }}
        >
          {project.tagline}
        </p>

        <p
          style={{
            fontSize: '0.875rem',
            color: 'var(--ink-muted)',
            lineHeight: 1.6,
            marginBottom: '20px'
          }}
        >
          {project.summary}
        </p>

        {/* Technology Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                padding: '3px 8px',
                borderRadius: 'var(--radius-xs)',
                backgroundColor: 'rgba(200, 223, 219, 0.4)',
                border: '1px solid var(--border-teal)',
                color: 'var(--ink-primary)'
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer: Action Buttons */}
      <div
        style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '10px'
        }}
      >
        <Button
          variant="secondary"
          size="sm"
          onClick={() => onSelect(project)}
          icon={<Layers size={14} />}
          iconPosition="left"
        >
          Case Study
        </Button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--ink-primary)',
                transition: 'all var(--transition-fast)'
              }}
            >
              <GithubIcon size={15} />
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} Live Preview`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--color-primary)',
                transition: 'all var(--transition-fast)'
              }}
            >
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
