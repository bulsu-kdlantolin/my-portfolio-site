import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'teal' | 'neutral' | 'status';
  size?: 'sm' | 'md';
  pulse?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'teal',
  size = 'md',
  pulse = false,
  className = ''
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: 'var(--color-primary)',
          color: 'var(--bg-canvas)',
          borderColor: 'var(--color-primary)'
        };
      case 'secondary':
        return {
          backgroundColor: 'var(--surface-hover)',
          color: 'var(--color-primary)',
          borderColor: 'var(--color-secondary)'
        };
      case 'status':
        return {
          backgroundColor: 'rgba(51, 104, 160, 0.08)',
          color: 'var(--color-primary)',
          borderColor: 'rgba(51, 104, 160, 0.25)'
        };
      case 'neutral':
        return {
          backgroundColor: 'var(--surface-white)',
          color: 'var(--ink-muted)',
          borderColor: 'var(--border-subtle)'
        };
      case 'teal':
      default:
        return {
          backgroundColor: 'rgba(200, 223, 219, 0.5)',
          color: 'var(--ink-primary)',
          borderColor: 'var(--border-teal)'
        };
    }
  };

  const style = getVariantStyles();

  return (
    <span
      className={`badge ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: size === 'sm' ? '2px 8px' : '4px 10px',
        fontSize: size === 'sm' ? '0.6875rem' : '0.75rem',
        fontFamily: 'var(--font-mono)',
        fontWeight: 600,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        borderRadius: 'var(--radius-pill)',
        border: `1px solid ${style.borderColor}`,
        backgroundColor: style.backgroundColor,
        color: style.color,
        lineHeight: 1.2,
        whiteSpace: 'nowrap'
      }}
    >
      {pulse && (
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-primary)',
            boxShadow: '0 0 0 2px rgba(51, 104, 160, 0.25)',
            display: 'inline-block'
          }}
        />
      )}
      {children}
    </span>
  );
};
