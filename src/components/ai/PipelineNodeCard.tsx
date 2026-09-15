import React from 'react';
import { PipelineNode } from '../../types/pipeline';

interface PipelineNodeCardProps {
  node: PipelineNode;
  isActive: boolean;
  isSimulating: boolean;
  onSelect: (node: PipelineNode) => void;
}

export const PipelineNodeCard: React.FC<PipelineNodeCardProps> = ({
  node,
  isActive,
  isSimulating,
  onSelect
}) => {
  return (
    <button
      onClick={() => onSelect(node)}
      className="pipeline-node-btn"
      style={{
        width: '100%',
        textAlign: 'left',
        padding: '16px 18px',
        borderRadius: 'var(--radius-md)',
        backgroundColor: isActive ? 'var(--surface-white)' : 'rgba(255, 255, 255, 0.65)',
        border: `1.5px solid ${
          isActive ? 'var(--color-primary)' : isSimulating ? 'var(--color-secondary)' : 'var(--border-subtle)'
        }`,
        boxShadow: isActive ? 'var(--shadow-card)' : 'var(--shadow-sm)',
        transition: 'all var(--transition-fast)',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Step badge & Category */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6875rem',
            fontWeight: 700,
            color: isActive ? 'var(--color-primary)' : 'var(--ink-muted)'
          }}
        >
          {node.label}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.625rem',
            textTransform: 'uppercase',
            padding: '2px 6px',
            borderRadius: 'var(--radius-xs)',
            backgroundColor: isActive ? 'rgba(51, 104, 160, 0.1)' : 'rgba(200, 223, 219, 0.5)',
            color: 'var(--ink-primary)'
          }}
        >
          {node.category}
        </span>
      </div>

      {/* Node Title */}
      <h4
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '0.9375rem',
          fontWeight: 700,
          color: 'var(--ink-primary)',
          marginBottom: '4px'
        }}
      >
        {node.title}
      </h4>

      {/* Short Summary */}
      <p
        style={{
          fontSize: '0.75rem',
          color: 'var(--ink-muted)',
          lineHeight: 1.45
        }}
      >
        {node.summary}
      </p>

      {/* Active Indicator Bar */}
      {isActive && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '3px',
            backgroundColor: 'var(--color-primary)'
          }}
        />
      )}
    </button>
  );
};
