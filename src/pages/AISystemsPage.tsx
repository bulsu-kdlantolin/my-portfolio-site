import React, { useState } from 'react';
import { pipelineNodes } from '../data/pipelineSteps';
import { PipelineNodeCard } from '../components/ai/PipelineNodeCard';
import { PipelineInspector } from '../components/ai/PipelineInspector';
import { PipelineSimulator } from '../components/ai/PipelineSimulator';
import { Badge } from '../components/common/Badge';

export const AISystemsPage: React.FC = () => {
  const [selectedNodeIndex, setSelectedNodeIndex] = useState<number>(0);
  const selectedNode = pipelineNodes[selectedNodeIndex];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* View Header */}
      <div
        style={{
          borderBottom: '1px solid var(--border-subtle)',
          paddingBottom: '20px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <Badge variant="primary" size="sm">
            AI ARCHITECTURE EXPLORER
          </Badge>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--ink-muted)' }}>
            RAG & EMBEDDING PIPELINE
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
          Applied AI Systems & Architecture
        </h2>
        <p style={{ fontSize: '0.9375rem', color: 'var(--ink-muted)', maxWidth: '820px', lineHeight: 1.6 }}>
          Understanding AI engineering means understanding data flow, coordinate vectors, token budgets, and prompt guardrails—not just making basic API calls. Below is an interactive architectural breakdown of a production-style Retrieval-Augmented Generation (RAG) system.
        </p>
      </div>

      {/* Interactive Simulator Section */}
      <PipelineSimulator onActiveStepChange={(idx) => setSelectedNodeIndex(idx)} />

      {/* Split Architecture Explorer: Nodes on Left, Inspector on Right */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--ink-primary)' }}>
            Pipeline Stage Inspector (Click Any Stage to Inspect)
          </h3>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--ink-muted)' }}>
            CURRENT: STAGE {selectedNode.stepNumber} OF 7
          </span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            alignItems: 'start'
          }}
        >
          {/* Left Column: 7 Nodes List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {pipelineNodes.map((node, i) => (
              <PipelineNodeCard
                key={node.id}
                node={node}
                isActive={selectedNodeIndex === i}
                isSimulating={false}
                onSelect={() => setSelectedNodeIndex(i)}
              />
            ))}
          </div>

          {/* Right Column: Deep-Dive Inspector Panel */}
          <div style={{ position: 'sticky', top: '80px' }}>
            <PipelineInspector node={selectedNode} />
          </div>
        </div>
      </section>
    </div>
  );
};
