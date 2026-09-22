import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles } from 'lucide-react';

export default function InitialLoader({ onComplete, duration = 3000 }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing Industrial Steel Catalog...');

  useEffect(() => {
    const startTime = performance.now();

    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);
      
      // Easing curve for realistic loading acceleration & deceleration
      const eased = Math.floor(rawProgress * 100);
      setProgress(eased);

      if (rawProgress < 0.35) {
        setStatusText('Connecting to Direct Mill Sourcing...');
      } else if (rawProgress < 0.75) {
        setStatusText('Loading Jindal PPGL & TMT Steel Catalog...');
      } else if (rawProgress < 0.95) {
        setStatusText('Preparing Digital Showroom & Quotation Engine...');
      } else {
        setStatusText('Welcome to Bagavan Steels Mart');
      }

      if (rawProgress < 1) {
        requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 150);
      }
    };

    const animId = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(animId);
  }, [duration, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.03,
        filter: 'blur(10px)',
        transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
      }}
      className="fixed inset-0 z-[99999] bg-gradient-to-b from-[#1b2639] via-[#223044] to-[#182332] flex flex-col items-center justify-center overflow-hidden select-none px-4"
    >
      {/* ── Soft Ambient Radial Highlight ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-radial from-sky-500/12 via-blue-600/6 to-transparent blur-3xl pointer-events-none" />

      {/* ── Background Architectural Grid Lines ── */}
      <div 
        className="absolute inset-0 opacity-[0.065] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      {/* ── Center Content ── */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-md w-full">
        
        {/* Brand Logo Icon with Smooth Subtle Ring */}
        <div className="relative mb-6">
          {/* Outer Soft Aura */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -inset-3 rounded-3xl bg-sky-500/25 blur-xl"
          />

          {/* Rotating Dashed Circular Ring */}
          <svg className="absolute -inset-3 w-[calc(100%+24px)] h-[calc(100%+24px)] -rotate-90 animate-[spin_10s_linear_infinite]">
            <circle
              cx="50%"
              cy="50%"
              r="46%"
              fill="none"
              stroke="rgba(148, 163, 184, 0.35)"
              strokeWidth="1.5"
              strokeDasharray="5 7"
            />
          </svg>

          {/* Logo Frame */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-24 h-24 sm:w-26 sm:h-26 rounded-2xl bg-slate-800/90 border border-slate-600/60 shadow-xl shadow-slate-950/30 flex items-center justify-center p-3 backdrop-blur-md"
          >
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Bagavan Steels Mart Logo"
              className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/steel_company/logo.png';
              }}
            />
          </motion.div>
        </div>

        {/* Company Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="space-y-1"
        >
          <h1 className="text-2xl sm:text-3xl font-bold font-heading text-white tracking-tight leading-tight">
            Bagavan Steels <span className="text-sky-300">Mart</span>
          </h1>
          <p className="text-xs sm:text-sm font-medium text-slate-300 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-400 inline" />
            Roofing & Steel Solutions · Dharmapuri
          </p>
        </motion.div>

        {/* Progress Bar & Percentage */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="w-full max-w-[280px] sm:max-w-[320px] mt-8 space-y-2.5"
        >
          {/* Progress Track */}
          <div className="relative h-2 w-full bg-slate-700/60 rounded-full overflow-hidden border border-slate-600/50 shadow-inner">
            {/* Active Progress Fill */}
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-sky-400 to-sky-300 rounded-full relative"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            >
              {/* Shimmer light at leading edge */}
              <div className="absolute right-0 top-0 bottom-0 w-6 bg-white/50 blur-[2px] rounded-full" />
            </motion.div>
          </div>

          {/* Numbers & Status row */}
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-300 font-medium tracking-wide transition-all duration-300 truncate mr-2">
              {statusText}
            </span>
            <span className="text-sky-300 font-mono font-semibold shrink-0">
              {progress}%
            </span>
          </div>
        </motion.div>

        {/* Quality Verified Badge at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-8 flex items-center gap-1.5 text-xs font-medium text-slate-400"
        >
          <Sparkles className="w-3.5 h-3.5 text-sky-300" />
          <span>Jindal Verified Partner</span>
        </motion.div>

      </div>
    </motion.div>
  );
}
