import React from 'react';
import { PipelineNode } from '../../types/pipeline';
import { Badge } from '../common/Badge';
import { Terminal, Cpu, ShieldCheck, FileCode } from 'lucide-react';

interface PipelineInspectorProps {
  node: PipelineNode;
}

export const PipelineInspector: React.FC<PipelineInspectorProps> = ({ node }) => {
  return (
    <div
      style={{
        backgroundColor: 'var(--surface-white)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-card)',
        padding: 'clamp(20px, 3vw, 28px)',
        boxShadow: 'var(--shadow-card)',
        height: '100%'
      }}
    >
      {/* Node Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '18px', flexWrap: 'wrap', gap: '8px' }}>
        <div>
          <Badge variant="primary" size="sm">
            STAGE {node.stepNumber} OF 7
          </Badge>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.375rem',
              fontWeight: 700,
              color: 'var(--ink-primary)',
              marginTop: '8px'
            }}
          >
            {node.title}
          </h3>
        </div>
        <Badge variant="teal" size="sm">
          {node.category}
        </Badge>
      </div>

      <p style={{ fontSize: '0.9375rem', color: 'var(--ink-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
        {node.summary}
      </p>

      {/* Input / Output Protocol Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '12px',
          marginBottom: '24px'
        }}
      >
        <div
          style={{
            padding: '14px',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: 'var(--bg-canvas)',
            border: '1px solid var(--border-subtle)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 600, color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: '6px' }}>
            <Terminal size={13} /> Input Data Format
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--ink-primary)', lineHeight: 1.5 }}>
            {node.inputFormat}
          </div>
        </div>

        <div
          style={{
            padding: '14px',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: 'var(--bg-canvas)',
            border: '1px solid var(--border-subtle)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 600, color: 'var(--ink-secondary-accent)', textTransform: 'uppercase', marginBottom: '6px' }}>
            <Cpu size={13} /> Output Data Format
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--ink-primary)', lineHeight: 1.5 }}>
            {node.outputFormat}
          </div>
        </div>
      </div>

      {/* Core Logic */}
      <div style={{ marginBottom: '24px' }}>
        <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: '8px' }}>
          Core Transformation Logic
        </h4>
        <div
          style={{
            padding: '14px 16px',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: 'rgba(200, 223, 219, 0.4)',
            border: '1px solid var(--border-teal)',
            fontSize: '0.875rem',
            color: 'var(--ink-primary)',
            lineHeight: 1.6
          }}
        >
          {node.coreLogic}
        </div>
      </div>

      {/* Technologies Used */}
      <div style={{ marginBottom: '24px' }}>
        <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: '10px' }}>
          Technologies & Tools
        </h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {node.technologies.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                padding: '3px 8px',
                borderRadius: 'var(--radius-xs)',
                backgroundColor: 'var(--bg-canvas)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--ink-primary)'
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Engineering Considerations */}
      <div style={{ marginBottom: '24px' }}>
        <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: '10px' }}>
          Key Engineering Considerations
        </h4>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {node.engineeringConsiderations.map((c, i) => (
            <li
              key={i}
              style={{
                display: 'flex',
                gap: '8px',
                alignItems: 'baseline',
                fontSize: '0.8125rem',
                color: 'var(--ink-muted)',
                lineHeight: 1.5
              }}
            >
              <ShieldCheck size={14} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Code Snippet */}
      {node.codeSnippet && (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: '8px' }}>
            <FileCode size={13} /> Implementation Pattern ({node.codeSnippet.language})
          </div>
          <pre
            style={{
              padding: '16px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--ink-primary)',
              color: 'var(--bg-canvas)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              lineHeight: 1.5,
              overflowX: 'auto',
              border: '1px solid var(--border-strong)'
            }}
          >
            <code>{node.codeSnippet.code}</code>
          </pre>
        </div>
      )}
    </div>
  );
};
