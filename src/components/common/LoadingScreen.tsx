import React, { useEffect, useState } from 'react';
import '../../styles/loading-screen.css';

interface LoadingScreenProps {
  onComplete?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setProgress(100);
      const timer = setTimeout(() => {
        setIsLeaving(true);
        setTimeout(() => {
          setIsMounted(false);
          onComplete?.();
        }, 200);
      }, 150);
      return () => clearTimeout(timer);
    }

    const duration = 1250; // 1.25s duration
    const intervalMs = 20;
    const stepIncrement = 100 / (duration / intervalMs);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(100, prev + stepIncrement);
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsLeaving(true);
            setTimeout(() => {
              setIsMounted(false);
              onComplete?.();
            }, 500);
          }, 180);
          return 100;
        }
        return next;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (!isMounted) return null;

  const displayPercent = Math.floor(progress);

  // Dynamic status text based on progress
  let statusMessage = 'INITIALIZING NEURAL CORE';
  if (displayPercent > 25 && displayPercent <= 55) {
    statusMessage = 'SYNTHESIZING SENSA ACOUSTICS';
  } else if (displayPercent > 55 && displayPercent <= 82) {
    statusMessage = 'CALIBRATING VECTOR GRAPH';
  } else if (displayPercent > 82 && displayPercent < 100) {
    statusMessage = 'SYNCHRONIZING WORKSPACE';
  } else if (displayPercent === 100) {
    statusMessage = 'SYSTEM INITIALIZED';
  }

  return (
    <div
      className={`kian-loader-overlay ${isLeaving ? 'is-leaving' : ''}`}
      aria-label="Portfolio initializing"
      role="progressbar"
      aria-valuenow={displayPercent}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* Background Latent Blueprint Grid */}
      <div className="kian-loader-grid" />

      {/* Atmospheric Aurora Glow Blooms */}
      <div className="kian-loader-glow kian-loader-glow-1" />
      <div className="kian-loader-glow kian-loader-glow-2" />

      {/* Central Content Stage */}
      <div className="kian-loader-stage">
        {/* Emblem Wrapper */}
        <div className="kian-loader-emblem-wrap">
          {/* Sensa Acoustic Pulse Rings */}
          <div className="kian-loader-ring kian-loader-ring-1" />
          <div className="kian-loader-ring kian-loader-ring-2" />
          <div className="kian-loader-ring kian-loader-ring-3" />

          {/* Neural "K" Cipher SVG Monogram */}
          <svg
            className="kian-loader-svg"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="kian-core-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.45" />
                <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Orbit Ring */}
            <circle
              className="kian-orbit-ring"
              cx="50"
              cy="50"
              r="44"
            />

            {/* Core Glow Aura */}
            <circle cx="34" cy="50" r="24" fill="url(#kian-core-glow)" />

            {/* Synaptic Cross-Filaments */}
            <path
              className="kian-svg-connector"
              d="M 34 20 L 68 22 M 34 80 L 70 78 M 68 22 L 82 50 M 70 78 L 82 50"
              pathLength="100"
            />

            {/* Primary Neural Spine of "K" */}
            <path
              className="kian-svg-spine"
              d="M 34 20 L 34 80"
              pathLength="100"
            />

            {/* Upper Tensor Arm */}
            <path
              className="kian-svg-arm-up"
              d="M 34 50 L 68 22"
              pathLength="100"
            />

            {/* Lower Synaptic Arm */}
            <path
              className="kian-svg-arm-down"
              d="M 34 50 L 70 78"
              pathLength="100"
            />

            {/* Central Nexus Beacons */}
            <circle
              className="kian-node-beacon"
              cx="34"
              cy="50"
              r="10"
              stroke="var(--color-primary)"
              strokeWidth="1"
              opacity="0.3"
            />
            <circle
              className="kian-node-beacon"
              cx="34"
              cy="50"
              r="5.5"
              fill="var(--color-primary)"
            />

            {/* Peripheral Nodes */}
            <circle
              className="kian-node-beacon"
              cx="34"
              cy="20"
              r="3.5"
              fill="var(--color-secondary)"
            />
            <circle
              className="kian-node-beacon"
              cx="34"
              cy="80"
              r="3.5"
              fill="var(--color-primary)"
            />
            <circle
              className="kian-node-beacon"
              cx="68"
              cy="22"
              r="4"
              fill="var(--color-secondary)"
            />
            <circle
              className="kian-node-beacon"
              cx="70"
              cy="78"
              r="4"
              fill="var(--color-primary)"
            />
            <circle
              className="kian-node-beacon"
              cx="82"
              cy="50"
              r="3"
              fill="var(--color-secondary)"
            />
          </svg>
        </div>

        {/* Identity Lockup */}
        <h1 className="kian-loader-title">Kian Davey Antolin</h1>
        <div className="kian-loader-subtitle">AI &amp; Systems Architect</div>

        {/* Telemetry Bar & Status */}
        <div className="kian-loader-telemetry">
          <div className="kian-loader-bar-wrap">
            <div
              className="kian-loader-bar-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="kian-loader-status-row">
            <span className="kian-loader-status-text">
              <span className="kian-loader-status-dot" />
              {statusMessage}
            </span>
            <span className="kian-loader-percent">
              {displayPercent.toString().padStart(2, '0')}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
