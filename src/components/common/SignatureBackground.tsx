import React from 'react';

export const SignatureBackground: React.FC = () => {
  return (
    <div
      className="kian-signature-background"
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '880px',
        maxHeight: '100%',
        pointerEvents: 'none',
        userSelect: 'none',
        overflow: 'hidden',
        zIndex: 0,
        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 68%, rgba(0,0,0,0) 100%)',
        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 68%, rgba(0,0,0,0) 100%)'
      }}
    >
      {/* 1. Atmospheric Diffuse Aurora Glows (Subtle Ambient Mesh) */}
      <div
        style={{
          position: 'absolute',
          top: '-120px',
          right: '-80px',
          width: '720px',
          height: '540px',
          background: 'radial-gradient(ellipse at center, rgba(36, 123, 123, 0.16) 0%, rgba(51, 104, 160, 0.08) 45%, transparent 70%)',
          filter: 'blur(70px)',
          borderRadius: '50%',
          opacity: 0.85,
          transform: 'translateZ(0)'
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '260px',
          left: '-100px',
          width: '640px',
          height: '520px',
          background: 'radial-gradient(ellipse at center, rgba(51, 104, 160, 0.14) 0%, rgba(102, 163, 191, 0.06) 50%, transparent 70%)',
          filter: 'blur(80px)',
          borderRadius: '50%',
          opacity: 0.75,
          transform: 'translateZ(0)'
        }}
      />

      {/* 2. Vector Artwork: Neural Constellation, Sensa Acoustic Waveforms & Telemetry */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          minHeight: '100%',
          overflow: 'hidden'
        }}
        viewBox="0 0 1440 960"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMin slice"
      >
        <defs>
          {/* Subtle micro-dot blueprint grid pattern */}
          <pattern id="kian-grid-dots" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="var(--color-primary)" opacity="0.14" />
          </pattern>

          {/* Fade mask for grid dots so they gently dissolve downward */}
          <linearGradient id="kian-grid-fade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.8" />
            <stop offset="45%" stopColor="#fff" stopOpacity="0.4" />
            <stop offset="85%" stopColor="#fff" stopOpacity="0.0" />
          </linearGradient>

          <mask id="kian-dots-mask">
            <rect width="1440" height="960" fill="url(#kian-grid-fade)" />
          </mask>

          {/* Gradient for harmonic waveforms */}
          <linearGradient id="kian-wave-primary" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.0" />
            <stop offset="20%" stopColor="var(--color-primary)" stopOpacity="0.32" />
            <stop offset="60%" stopColor="var(--color-secondary)" stopOpacity="0.4" />
            <stop offset="90%" stopColor="var(--color-primary)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.0" />
          </linearGradient>

          <linearGradient id="kian-wave-secondary" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-secondary)" stopOpacity="0.0" />
            <stop offset="30%" stopColor="var(--color-secondary)" stopOpacity="0.28" />
            <stop offset="70%" stopColor="var(--color-primary)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--color-secondary)" stopOpacity="0.0" />
          </linearGradient>

          <linearGradient id="kian-wave-tertiary" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.0" />
            <stop offset="40%" stopColor="var(--color-primary)" stopOpacity="0.18" />
            <stop offset="80%" stopColor="var(--color-secondary)" stopOpacity="0.22" />
            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* 2A. Micro-Dot Latent Matrix Canvas (Upper Atmosphere) */}
        <rect width="1440" height="960" fill="url(#kian-grid-dots)" mask="url(#kian-dots-mask)" />


        {/* 2D. Sensa Harmonic Acoustic Waveforms (Smooth, Multi-Harmonic Vector Stream) */}
        {/* Wave 1: Primary fundamental harmonic */}
        <path
          d="M -60 210 C 220 140, 480 310, 760 220 C 1020 135, 1240 280, 1500 210"
          stroke="url(#kian-wave-primary)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />

        {/* Wave 2: Resonant phase wave */}
        <path
          d="M -40 280 C 260 210, 520 380, 840 280 C 1120 190, 1310 340, 1520 270"
          stroke="url(#kian-wave-secondary)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* Wave 3: Lower sub-harmonic tensor line */}
        <path
          d="M -80 430 C 200 370, 500 520, 820 440 C 1090 370, 1290 510, 1510 440"
          stroke="url(#kian-wave-tertiary)"
          strokeWidth="1"
          strokeLinecap="round"
        />

        {/* 2E. The Neural Nexus / "K" Cipher Constellation (Upper Right Atmosphere) */}
        <g id="kian-neural-constellation">
          {/* Synaptic interconnect filaments */}
          <g stroke="var(--color-primary)" strokeWidth="1" opacity="0.32">
            {/* "K" Monogram Spine */}
            <line x1="1020" y1="90" x2="1020" y2="180" />
            <line x1="1020" y1="180" x2="1020" y2="270" />

            {/* "K" Upper Arm */}
            <line x1="1020" y1="180" x2="1100" y2="100" />
            <line x1="1100" y1="100" x2="1160" y2="70" />

            {/* "K" Lower Arm */}
            <line x1="1020" y1="180" x2="1110" y2="260" />
            <line x1="1110" y1="260" x2="1180" y2="310" />

            {/* Neural Network Cross-Branching */}
            <line x1="1020" y1="90" x2="1100" y2="100" strokeWidth="0.8" opacity="0.45" />
            <line x1="1020" y1="270" x2="1110" y2="260" strokeWidth="0.8" opacity="0.45" />
            <line x1="1100" y1="100" x2="1210" y2="140" />
            <line x1="1110" y1="260" x2="1210" y2="210" />
            <line x1="1210" y1="140" x2="1210" y2="210" strokeWidth="0.8" opacity="0.35" />

            {/* Connection to Sensa waveform flow */}
            <line x1="1020" y1="180" x2="940" y2="215" opacity="0.5" />
            <line x1="940" y1="215" x2="840" y2="280" opacity="0.4" />
          </g>

          {/* Neural Node Beacons & Halo Rings */}
          {/* Central Nexus (Pivotal Point of "K") */}
          <circle cx="1020" cy="180" r="4.5" fill="var(--color-primary)" opacity="0.8" />
          <circle cx="1020" cy="180" r="10" stroke="var(--color-primary)" strokeWidth="1" opacity="0.25" />

          {/* Spine Top */}
          <circle cx="1020" cy="90" r="3" fill="var(--color-primary)" opacity="0.65" />
          <circle cx="1020" cy="90" r="7" stroke="var(--color-primary)" strokeWidth="0.8" opacity="0.2" />

          {/* Spine Bottom */}
          <circle cx="1020" cy="270" r="3" fill="var(--color-primary)" opacity="0.65" />
          <circle cx="1020" cy="270" r="7" stroke="var(--color-primary)" strokeWidth="0.8" opacity="0.2" />

          {/* Upper Arm Joint */}
          <circle cx="1100" cy="100" r="3.5" fill="var(--color-secondary)" opacity="0.75" />
          <circle cx="1100" cy="100" r="8" stroke="var(--color-secondary)" strokeWidth="0.8" opacity="0.25" />

          {/* Upper Terminal */}
          <circle cx="1160" cy="70" r="2.5" fill="var(--color-secondary)" opacity="0.6" />

          {/* Lower Arm Joint */}
          <circle cx="1110" cy="260" r="3.5" fill="var(--color-secondary)" opacity="0.75" />
          <circle cx="1110" cy="260" r="8" stroke="var(--color-secondary)" strokeWidth="0.8" opacity="0.25" />

          {/* Lower Terminal */}
          <circle cx="1180" cy="310" r="2.5" fill="var(--color-secondary)" opacity="0.6" />

          {/* Tensor Output Satellites */}
          <circle cx="1210" cy="140" r="3" fill="var(--color-primary)" opacity="0.5" />
          <circle cx="1210" cy="210" r="3" fill="var(--color-primary)" opacity="0.5" />
          <circle cx="940" cy="215" r="2.5" fill="var(--color-primary)" opacity="0.45" />
        </g>

        {/* 2F. Subtle Flow Indicator Pulse Nodes Along Acoustic Stream */}
        <g fill="var(--color-secondary)" opacity="0.6">
          <circle cx="480" cy="285" r="2" />
          <circle cx="760" cy="220" r="2.5" />
          <circle cx="840" cy="280" r="2.5" />
          <circle cx="500" cy="485" r="1.8" />
        </g>
      </svg>
    </div>
  );
};
