import React, { useState } from 'react';
import { Button } from '../common/Button';
import { Play, RotateCcw, Sparkles } from 'lucide-react';
import { pipelineNodes } from '../../data/pipelineSteps';

interface PipelineSimulatorProps {
  onActiveStepChange: (index: number) => void;
}

export const PipelineSimulator: React.FC<PipelineSimulatorProps> = ({ onActiveStepChange }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState<number | null>(null);
  const [queryInput, setQueryInput] = useState('How does Sensa handle real-time multilingual captions?');
  const [simulatedLog, setSimulatedLog] = useState<string[]>([]);
  const [streamedAnswer, setStreamedAnswer] = useState('');

  const sampleQueries = [
    'How does Sensa handle real-time multilingual captions?',
    'What architecture does DoNex Planner use for task persistence?',
    'How are embeddings generated and indexed for semantic search?'
  ];

  const handleSimulate = async () => {
    if (isRunning) return;
    setIsRunning(true);
    setSimulatedLog([]);
    setStreamedAnswer('');

    const logs = [
      'Query received & sanitized: 54 chars, 9 tokens.',
      'OpenAI text-embedding-3-small computed 1536-dim vector in 38ms.',
      'Cosine similarity query matched 3 top chunks (scores: 0.89, 0.84, 0.81).',
      'Extracted verified passages: [DOC 1: Web Speech & Deepgram Pipeline].',
      'System prompt injected with verified context & citation constraints.',
      'LLM synthesis initiated with temperature=0.2 (deterministic mode).',
      'SSE stream delivered 184 tokens with source citations [DOC 1].'
    ];

    const finalAnswer =
      'Sensa utilizes a hybrid speech pipeline: local Web Speech API for low-latency direct commands, and streaming audio via Deepgram for real-time multilingual captions rendered inside an isolated Shadow DOM overlay [DOC 1].';

    for (let i = 0; i < pipelineNodes.length; i++) {
      setCurrentStep(i);
      onActiveStepChange(i);
      setSimulatedLog((prev) => [...prev, logs[i]]);
      await new Promise((r) => setTimeout(r, 650));
    }

    // Stream the final answer token by token
    const words = finalAnswer.split(' ');
    let built = '';
    for (const word of words) {
      built += (built ? ' ' : '') + word;
      setStreamedAnswer(built);
      await new Promise((r) => setTimeout(r, 45));
    }

    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCurrentStep(null);
    setSimulatedLog([]);
    setStreamedAnswer('');
    onActiveStepChange(0);
  };

  return (
    <div
      style={{
        backgroundColor: 'var(--surface-white)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-card)',
        padding: '24px',
        boxShadow: 'var(--shadow-sm)'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
        <div>
          <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 700, color: 'var(--ink-primary)' }}>
            Live Pipeline Simulator
          </h4>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-muted)' }}>
            Test how a query passes sequentially through all 7 RAG engineering stages.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button
            variant="secondary"
            size="sm"
            onClick={handleReset}
            disabled={isRunning}
            icon={<RotateCcw size={13} />}
            iconPosition="left"
          >
            Reset
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={handleSimulate}
            disabled={isRunning}
            icon={isRunning ? <Sparkles size={13} /> : <Play size={13} />}
            iconPosition="left"
          >
            {isRunning ? 'Processing...' : 'Run Pipeline'}
          </Button>
        </div>
      </div>

      {/* Preset Queries */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
        {sampleQueries.map((q) => (
          <button
            key={q}
            onClick={() => {
              if (!isRunning) {
                setQueryInput(q);
                handleReset();
              }
            }}
            disabled={isRunning}
            style={{
              padding: '4px 10px',
              fontSize: '0.75rem',
              borderRadius: 'var(--radius-pill)',
              border: queryInput === q ? '1px solid var(--color-primary)' : '1px solid var(--border-subtle)',
              backgroundColor: queryInput === q ? 'rgba(51, 104, 160, 0.08)' : 'var(--bg-canvas)',
              color: queryInput === q ? 'var(--color-primary)' : 'var(--ink-muted)',
              cursor: isRunning ? 'not-allowed' : 'pointer',
              transition: 'all var(--transition-fast)'
            }}
          >
            "{q.length > 35 ? q.slice(0, 35) + '...' : q}"
          </button>
        ))}
      </div>

      {/* Execution Progress Bar */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${pipelineNodes.length}, 1fr)`,
          gap: '4px',
          height: '6px',
          borderRadius: '3px',
          backgroundColor: 'var(--surface-card)',
          overflow: 'hidden',
          marginBottom: '16px'
        }}
      >
        {pipelineNodes.map((_, i) => (
          <div
            key={i}
            style={{
              backgroundColor:
                currentStep !== null && i <= currentStep ? 'var(--color-primary)' : 'transparent',
              transition: 'background-color 200ms ease'
            }}
          />
        ))}
      </div>

      {/* Live Terminal Log */}
      <div
        style={{
          backgroundColor: 'var(--ink-primary)',
          color: 'var(--bg-canvas)',
          borderRadius: 'var(--radius-sm)',
          padding: '14px 16px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          minHeight: '110px',
          maxHeight: '160px',
          overflowY: 'auto',
          border: '1px solid var(--border-strong)'
        }}
      >
        <div style={{ color: 'var(--color-secondary)', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span>$</span>
          <span>pipeline-runner --query="{queryInput}"</span>
        </div>

        {simulatedLog.length === 0 && !isRunning && (
          <div style={{ color: 'var(--ink-subtle)', fontStyle: 'italic' }}>
            Click 'Run Pipeline' to observe real-time data orchestration...
          </div>
        )}

        {simulatedLog.map((log, i) => (
          <div key={i} style={{ color: '#E2E8F0', display: 'flex', gap: '8px', marginBottom: '3px' }}>
            <span style={{ color: 'var(--color-secondary)' }}>✓</span>
            <span>{log}</span>
          </div>
        ))}
      </div>

      {/* Streamed Output Display */}
      {streamedAnswer && (
        <div
          style={{
            marginTop: '16px',
            padding: '16px',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: 'rgba(200, 223, 219, 0.4)',
            border: '1px solid var(--border-teal)'
          }}
        >
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: '6px' }}>
            Streamed Model Output (Verified Grounded Response)
          </div>
          <p style={{ fontSize: '0.875rem', color: 'var(--ink-primary)', lineHeight: 1.6 }}>
            {streamedAnswer}
          </p>
        </div>
      )}
    </div>
  );
};
