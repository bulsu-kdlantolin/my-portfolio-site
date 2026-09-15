import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  fullWidth = false,
  className = '',
  style,
  ...props
}) => {
  const getStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      display: fullWidth ? 'flex' : 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      borderRadius: 'var(--radius-pill)',
      transition: 'all var(--transition-fast)',
      cursor: 'pointer',
      textDecoration: 'none',
      width: fullWidth ? '100%' : 'auto',
      border: '1px solid transparent',
      whiteSpace: 'nowrap'
    };

    const sizeStyles: Record<string, React.CSSProperties> = {
      sm: { padding: '6px 14px', fontSize: '0.8125rem' },
      md: { padding: '9px 20px', fontSize: '0.875rem' },
      lg: { padding: '12px 26px', fontSize: '1rem' }
    };

    const variantStyles: Record<string, React.CSSProperties> = {
      primary: {
        backgroundColor: 'var(--color-primary)',
        color: 'var(--bg-canvas)',
        borderColor: 'var(--color-primary)',
        boxShadow: 'var(--shadow-sm)'
      },
      secondary: {
        backgroundColor: 'var(--surface-card)',
        color: 'var(--ink-primary)',
        borderColor: 'var(--border-teal)'
      },
      outline: {
        backgroundColor: 'transparent',
        color: 'var(--color-primary)',
        borderColor: 'var(--border-strong)'
      },
      ghost: {
        backgroundColor: 'transparent',
        color: 'var(--ink-muted)',
        borderColor: 'transparent'
      }
    };

    return {
      ...base,
      ...sizeStyles[size],
      ...variantStyles[variant],
      ...style
    };
  };

  return (
    <button className={`btn btn--${variant} ${className}`} style={getStyles()} {...props}>
      {icon && iconPosition === 'left' && <span className="btn__icon">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="btn__icon">{icon}</span>}
    </button>
  );
};
