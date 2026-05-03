"use client";

import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const MeshGradient = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth) * 20 - 10);
      mouseY.set((clientY / innerHeight) * 20 - 10);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      <motion.div 
        className="absolute inset-0"
        style={{
          x: springX,
          y: springY,
        }}
      >
        <svg
          className="absolute w-full h-full scale-125"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="mesh-gradient-blur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
            </filter>
          </defs>
          <rect width="100" height="100" fill="var(--bg-main)" />
          <motion.g 
            filter="url(#mesh-gradient-blur)"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ transformOrigin: 'center' }}
          >
            {/* Primary Orange Blob - Deep & Rich */}
            <motion.circle
              cx="25"
              cy="30"
              r="45"
              fill="#E9502F"
              animate={{
                cx: [25, 55, 10, 25],
                cy: [30, 45, 60, 30],
                scale: [1, 1.3, 0.8, 1],
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ opacity: 0.14 }}
            />
            
            {/* Secondary Light Orange Blob - Glowing */}
            <motion.circle
              cx="85"
              cy="75"
              r="55"
              fill="#FFA500"
              animate={{
                cx: [85, 55, 95, 85],
                cy: [75, 45, 85, 75],
                scale: [1, 1.2, 1.4, 1],
              }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ opacity: 0.1 }}
            />

            {/* Warm Coral Blob - Subtle Transition */}
            <motion.circle
              cx="70"
              cy="20"
              r="35"
              fill="#FF7F50"
              animate={{
                cx: [70, 40, 80, 70],
                cy: [20, 50, 10, 20],
                scale: [1, 1.5, 0.9, 1],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ opacity: 0.08 }}
            />

            {/* Deep Rust Blob - Adding Depth */}
            <motion.circle
              cx="10"
              cy="80"
              r="60"
              fill="#D64526"
              animate={{
                cx: [10, 40, -20, 10],
                cy: [80, 60, 100, 80],
                scale: [1, 1.3, 1, 1],
              }}
              transition={{
                duration: 50,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ opacity: 0.07 }}
            />

            {/* Soft Amber Blob - Highlight */}
            <motion.circle
              cx="50"
              cy="50"
              r="50"
              fill="#FFBF00"
              animate={{
                cx: [50, 70, 30, 50],
                cy: [50, 30, 70, 50],
                scale: [1, 1.4, 0.8, 1],
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ opacity: 0.06 }}
            />
          </motion.g>
        </svg>
      </motion.div>
    </div>
  );
};

export default MeshGradient;
