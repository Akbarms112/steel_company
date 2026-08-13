import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

/**
 * 3D Interactive Tilt Card Component
 * Adds realistic 3D perspective rotation on hover and 3D depth layer translation.
 */
export function ThreeDTiltCard({ children, className = '', depth = 40, glowColor = 'rgba(245, 158, 11, 0.15)' }) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rX = ((mouseY - height / 2) / (height / 2)) * -12; // tilt angle X
    const rY = ((mouseX - width / 2) / (width / 2)) * 12;   // tilt angle Y

    setRotateX(rX);
    setRotateY(rY);
    setGlowPos({
      x: (mouseX / width) * 100,
      y: (mouseY / height) * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`perspective-1000 ${className}`}
      style={{ perspective: '1200px' }}
    >
      <motion.div
        animate={{
          rotateX: rotateX,
          rotateY: rotateY,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
          mass: 0.5,
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
        className="relative h-full w-full rounded-2xl transition-shadow duration-300"
      >
        {/* Dynamic 3D Glow overlay */}
        {isHovered && (
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl z-30 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, ${glowColor}, transparent 70%)`,
            }}
          />
        )}

        <div style={{ transform: `translateZ(${depth}px)`, transformStyle: 'preserve-3d' }}>
          {children}
        </div>
      </motion.div>
    </div>
  );
}

/**
 * 3D Scroll Reveal Wrapper
 * Applies 3D rotation, depth zoom, and perspective flip on scroll.
 */
export function ThreeDScrollReveal({ children, delay = 0, direction = 'up', className = '' }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // 3D parallax scroll effects
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -10]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.96]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);

  const smoothRotateX = useSpring(rotateX, { stiffness: 100, damping: 20 });
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 20 });

  return (
    <div ref={containerRef} className={`perspective-1000 ${className}`} style={{ perspective: '1000px' }}>
      <motion.div
        style={{
          rotateX: smoothRotateX,
          scale: smoothScale,
          opacity: opacity,
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
