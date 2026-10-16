import React from 'react';
import { Project } from '../../types/project';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { GithubIcon } from '../common/Icons';
import { ExternalLink, Layers } from 'lucide-react';
import { getTechLogo } from '../../utils/techLogos';

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
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        boxShadow: 'var(--shadow-sm)',
        transition: 'all var(--transition-fast)'
      }}
    >
      <div>
        {/* Project Thumbnail Image Preview */}
        <div
          className="project-card-image-wrap"
          onClick={() => onSelect(project)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onSelect(project);
            }
          }}
          aria-label={`View ${project.title} case study`}
        >
          <img
            src={project.image}
            alt={`${project.title} software interface preview`}
            className="project-card-img"
            loading="lazy"
          />
          <div className="project-card-image-overlay" />
          <div className="project-card-image-badge">
            <Badge variant="teal" size="sm">
              {project.categoryLabel}
            </Badge>
          </div>
        </div>

        {/* Status & Category Meta */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '10px',
            flexWrap: 'wrap',
            gap: '8px'
          }}
        >
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
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor:
                  project.status === 'Completed'
                    ? 'var(--color-secondary)'
                    : 'var(--color-primary)',
                boxShadow:
                  project.status === 'In Development'
                    ? '0 0 0 3px rgba(51, 104, 160, 0.2)'
                    : 'none'
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
            fontWeight: 800,
            color: 'var(--ink-primary)',
            marginBottom: '6px',
            lineHeight: 1.3,
            cursor: 'pointer'
          }}
          onClick={() => onSelect(project)}
        >
          {project.title}
        </h3>

        <p
          style={{
            fontSize: '0.875rem',
            color: 'var(--color-primary)',
            fontWeight: 600,
            marginBottom: '12px',
            fontFamily: 'var(--font-display)',
            lineHeight: 1.4
          }}
        >
          {project.tagline}
        </p>

        <p
          style={{
            fontSize: '0.8125rem',
            color: 'var(--ink-muted)',
            lineHeight: 1.6,
            marginBottom: '18px'
          }}
        >
          {project.summary}
        </p>

        {/* Technology Badges with Official Logos */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
          {project.technologies.map((tech) => {
            const techInfo = getTechLogo(tech);
            return (
              <span key={tech} className="project-tech-badge">
                {techInfo && (
                  <img
                    src={techInfo.logo}
                    alt={`${tech} logo`}
                    className={`project-tech-logo ${
                      techInfo.isMonochrome ? 'project-tech-logo--monochrome' : ''
                    }`}
                  />
                )}
                <span>{tech}</span>
              </span>
            );
          })}
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
                backgroundColor: 'var(--bg-canvas)',
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
                backgroundColor: 'var(--bg-canvas)',
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
