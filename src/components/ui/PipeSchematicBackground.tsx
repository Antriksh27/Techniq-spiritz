'use client';

import { useRef, useId } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface PipeSchematicBackgroundProps {
  color?: string;
  opacity?: number;
}

export default function PipeSchematicBackground({ 
  color = "#C84B2A", 
  opacity = 0.05 // Lightened for subtler effect
}: PipeSchematicBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const id = useId();
  
  // Track scroll progress relative to this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress into a pixel offset (from -150px to 150px)
  // Pixel values are often much more noticeable than percentages
  const yRaw = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  
  // Apply a spring for "butter smooth" movement
  const y = useSpring(yRaw, { stiffness: 100, damping: 30, mass: 1 });

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          inset: '-250px 0', // Extra buffer for the 150px movement
          opacity: opacity,
          y,
          willChange: 'transform',
        }}
      >
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id={`pipe-pattern-${id.replace(/:/g, '')}`}
              x="0"
              y="0"
              width="250"
              height="250"
              patternUnits="userSpaceOnUse"
            >
              {/* HORIZONTAL MAIN PIPES */}
              <line x1="0" y1="50" x2="250" y2="50" stroke={color} strokeWidth="3.5" />
              <line x1="0" y1="200" x2="250" y2="200" stroke={color} strokeWidth="3.5" />

              {/* VERTICAL MAIN PIPES */}
              <line x1="50" y1="0" x2="50" y2="250" stroke={color} strokeWidth="3.5" />
              <line x1="200" y1="0" x2="200" y2="250" stroke={color} strokeWidth="3.5" />

              {/* SECONDARY PIPES */}
              <line x1="50" y1="125" x2="200" y2="125" stroke={color} strokeWidth="2" />
              <line x1="125" y1="50" x2="125" y2="200" stroke={color} strokeWidth="2" />

              {/* JUNCTIONS */}
              <circle cx="50" cy="50" r="6" fill="none" stroke={color} strokeWidth="2.5" />
              <circle cx="200" cy="50" r="6" fill="none" stroke={color} strokeWidth="2.5" />
              <circle cx="50" cy="200" r="6" fill="none" stroke={color} strokeWidth="2.5" />
              <circle cx="200" cy="200" r="6" fill="none" stroke={color} strokeWidth="2.5" />

              {/* SOLID JUNCTIONS */}
              <circle cx="125" cy="50" r="4" fill={color} />
              <circle cx="125" cy="200" r="4" fill={color} />
              <circle cx="50" cy="125" r="4" fill={color} />
              <circle cx="200" cy="125" r="4" fill={color} />
              <circle cx="125" cy="125" r="4" fill="none" stroke={color} strokeWidth="2" />

              {/* VALVES */}
              <rect x="145" y="45" width="10" height="10" fill="white" stroke={color} strokeWidth="2" />
              <rect x="45" y="145" width="10" height="10" fill="white" stroke={color} strokeWidth="2" />
              <rect x="75" y="195" width="10" height="10" fill="white" stroke={color} strokeWidth="2" />

              {/* PRESSURE INDICATOR */}
              <circle cx="200" cy="125" r="9" fill="white" stroke={color} strokeWidth="2" />
              <line x1="196" y1="125" x2="204" y2="125" stroke={color} strokeWidth="1.5" />
              <line x1="200" y1="121" x2="200" y2="129" stroke={color} strokeWidth="1.5" />

              {/* END CAPS */}
              <line x1="45" y1="0" x2="55" y2="0" stroke={color} strokeWidth="3" />
              <line x1="195" y1="0" x2="205" y2="0" stroke={color} strokeWidth="3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#pipe-pattern-${id.replace(/:/g, '')})`} />
        </svg>
      </motion.div>
    </div>
  );
}
