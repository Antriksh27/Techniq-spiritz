import React from 'react';

interface SectionDividerProps {
  /** Hex color of the section above */
  fromColor: string;
  /** Hex color of the section below */
  toColor: string;
  /** Which way the curve bows */
  direction: 'down' | 'up';
  /** Height of the divider in pixels (default 80) */
  height?: number;
}

/**
 * A reusable SVG section divider that creates a curved transition between sections.
 */
const SectionDivider: React.FC<SectionDividerProps> = ({
  fromColor,
  toColor,
  direction,
  height = 80,
}) => {
  // Path logic based on direction:
  // "down" (curve bows downward — like a hill): M0,0 L1440,0 L1440,20 Q720,80 0,20 Z
  // "up" (curve bows upward — like a valley): M0,80 L1440,80 L1440,60 Q720,0 0,60 Z
  const pathD = direction === 'down' 
    ? "M0,80 L1440,80 L1440,20 Q720,80 0,20 Z" 
    : "M0,80 L1440,80 L1440,60 Q720,0 0,60 Z";

  return (
    <div 
      style={{ 
        margin: 0, 
        padding: 0, 
        display: 'block', 
        lineHeight: 0,
        width: '100%',
        overflow: 'hidden'
      }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        style={{
          width: '100%',
          height: `${height}px`,
          display: 'block',
          margin: 0,
          padding: 0,
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {fromColor !== 'transparent' && <rect width="1440" height="80" fill={fromColor} />}
        <path d={pathD} fill={toColor} />
      </svg>
    </div>
  );
};

export default SectionDivider;
