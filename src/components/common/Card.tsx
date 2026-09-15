import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'canvas' | 'card' | 'elevated';
  hoverable?: boolean;
  padding?: 'sm' | 'md' | 'lg' | 'none';
  borderStyle?: 'subtle' | 'teal' | 'strong';
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'card',
  hoverable = false,
  padding = 'md',
  borderStyle = 'subtle',
  className = '',
  style,
  ...props
}) => {
  const getPadding = () => {
    switch (padding) {
      case 'none': return '0';
      case 'sm': return '16px';
      case 'lg': return '32px';
      case 'md':
      default: return '24px';
    }
  };

  const getBackground = () => {
    switch (variant) {
      case 'elevated': return 'var(--surface-white)';
      case 'canvas': return 'var(--bg-canvas)';
      case 'card':
      default: return 'var(--surface-card-subtle)';
    }
  };

  const getBorderColor = () => {
    switch (borderStyle) {
      case 'strong': return 'var(--border-strong)';
      case 'teal': return 'var(--border-teal)';
      case 'subtle':
      default: return 'var(--border-subtle)';
    }
  };

  return (
    <div
      className={`card ${hoverable ? 'card--hoverable' : ''} ${className}`}
      style={{
        backgroundColor: getBackground(),
        border: `1px solid ${getBorderColor()}`,
        borderRadius: 'var(--radius-card)',
        padding: getPadding(),
        boxShadow: variant === 'elevated' ? 'var(--shadow-card)' : 'var(--shadow-sm)',
        transition: 'transform var(--transition-fast), border-color var(--transition-fast), box-shadow var(--transition-fast)',
        position: 'relative',
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  );
};
