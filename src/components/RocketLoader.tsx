import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Terminal } from 'lucide-react';

interface RocketLoaderProps {
  onComplete: () => void;
}

export const RocketLoader: React.FC<RocketLoaderProps> = ({ onComplete }) => {
  // Stages:
  // 0: Initial still & ignition check (0s - 1.2s)
  // 1: Shaking / vibrating & thruster ignition glow (1.2s - 2.4s)
  // 2: Clouds & smoke billow outward (2.4s - 3.4s)
  // 3: Blastoff upward into the stratosphere (3.4s - 4.4s)
  // 4: Smoke & cloud flash covers entire viewport, transitioning to Welcome screen (4.4s+)
  const [phase, setPhase] = useState<number>(0);
  const [telemetryText, setTelemetryText] = useState<string>("SYSTEM_CHECK: IDLE");

  useEffect(() => {
    const t1 = setTimeout(() => {
      setPhase(1);
      setTelemetryText("ENGINE_IGNITION: ARMED [TEMP 4500K]");
    }, 1000);

    const t2 = setTimeout(() => {
      setPhase(2);
      setTelemetryText("VAPOR_EXPANSION: CLOUD THRUST MAX");
    }, 2200);

    const t3 = setTimeout(() => {
      setPhase(3);
      setTelemetryText("LIFTOFF: T-0 DEPLOYING PAYLOAD");
    }, 3200);

    const t4 = setTimeout(() => {
      setPhase(4);
      setTelemetryText("ORBITAL INSERTION: WELCOME FLEET");
    }, 4200);

    const t5 = setTimeout(() => {
      onComplete();
    }, 5100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-space-950 overflow-hidden select-none">
      {/* Background Technical Grid */}
      <div className="absolute inset-0 cosmic-grid opacity-30 pointer-events-none" />
      
      {/* Radial Atmospheric Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_65%,rgba(139,92,246,0.18)_0%,rgba(0,240,255,0.08)_40%,transparent_75%)] pointer-events-none" />

      {/* Floating Space Dust Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(24)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: (i % 3) + 2 + 'px',
              height: (i % 3) + 2 + 'px',
              left: `${(i * 17) % 100}%`,
              top: `${(i * 29) % 100}%`,
              opacity: (i % 5) * 0.15 + 0.2,
            }}
            animate={{
              y: phase >= 3 ? [0, 400] : [0, -20, 0],
              opacity: phase >= 3 ? [0.8, 0] : [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: phase >= 3 ? 0.8 : 3 + (i % 3),
              repeat: phase >= 3 ? 0 : Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Top telemetry HUD */}
      <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-space-800/80 border border-purple-500/30 backdrop-blur-md">
          <Terminal className="w-3.5 h-3.5 text-aws-blue animate-pulse" />
          <span className="font-mono text-xs text-slate-300 tracking-wider">
            MISSION // AWS-SCD-IGDTUW
          </span>
        </div>

        <button
          onClick={onComplete}
          className="text-xs font-mono text-slate-400 hover:text-white px-3 py-1.5 rounded-md border border-slate-700/50 hover:border-aws-purple/60 bg-space-900/60 backdrop-blur transition-all flex items-center gap-1.5"
        >
          <span>SKIP LAUNCH</span>
          <span className="text-aws-blue">→</span>
        </button>
      </div>

      {/* Main Rocket Launch Stage */}
      <div className="relative w-full max-w-md h-[460px] flex flex-col items-center justify-end pb-12 z-10">
        
        {/* The Rocket Container */}
        <motion.div
          className="relative flex flex-col items-center"
          animate={
            phase === 1
              ? { x: [-2, 2, -2, 2, 0], y: [-1, 1, -1, 1, 0] }
              : phase === 2
              ? { x: [-3, 3, -4, 4, -2, 2, 0], y: [-2, 2, -1, 1, 0] }
              : phase >= 3
              ? { y: -800, scale: [1, 1.1, 0.9] }
              : {}
          }
          transition={
            phase >= 3
              ? { duration: 1.1, ease: [0.32, 0, 0.67, 0] }
              : { duration: 0.2, repeat: phase > 0 ? Infinity : 0 }
          }
        >
          {/* Rocket SVG Illustration */}
          <div className="relative w-28 h-36">
            <svg viewBox="0 0 100 140" className="w-full h-full drop-shadow-[0_0_20px_rgba(139,92,246,0.6)]">
              <defs>
                <linearGradient id="bodyGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#1e1b4b" />
                  <stop offset="50%" stopColor="#312e81" />
                  <stop offset="100%" stopColor="#4338ca" />
                </linearGradient>
                <linearGradient id="finGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FF007A" />
                  <stop offset="100%" stopColor="#7C3AED" />
                </linearGradient>
                <linearGradient id="windowGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#00F0FF" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
                <radialGradient id="engineCore" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="40%" stopColor="#FF9900" />
                  <stop offset="100%" stopColor="#FF007A" />
                </radialGradient>
              </defs>

              {/* Left & Right Stabilizer Wings */}
              <path d="M22 80 L6 110 L25 110 Z" fill="url(#finGrad)" />
              <path d="M78 80 L94 110 L75 110 Z" fill="url(#finGrad)" />

              {/* Rocket Main Body */}
              <path
                d="M50 10 Q28 45 28 95 L72 95 Q72 45 50 10 Z"
                fill="url(#bodyGrad)"
                stroke="#8B5CF6"
                strokeWidth="1.5"
              />

              {/* Nose Cone Accent Line */}
              <path d="M43 25 Q50 15 57 25" stroke="#00F0FF" strokeWidth="2" strokeLinecap="round" />

              {/* Porthole Glass */}
              <circle cx="50" cy="50" r="13" fill="#050816" stroke="#8B5CF6" strokeWidth="2" />
              <circle cx="50" cy="50" r="10" fill="url(#windowGrad)" />
              <circle cx="47" cy="47" r="3" fill="#FFFFFF" opacity="0.8" />

              {/* AWS Cloud Logo Icon Accent */}
              <path
                d="M44 76 C42 76 40 78 40 80 C38 80 37 81 37 83 C37 85 39 86 41 86 L59 86 C61 86 63 85 63 83 C63 81 62 80 60 80 C60 78 58 76 56 76 C55 74 53 74 50 74 C47 74 45 74 44 76 Z"
                fill="#FF9900"
                opacity="0.9"
              />

              {/* Engine Nozzle */}
              <polygon points="40,95 60,95 65,108 35,108" fill="#1e1b4b" stroke="#7C3AED" strokeWidth="1" />
            </svg>

            {/* Glowing Engine Fire (Phase 1, 2, 3) */}
            <AnimatePresence>
              {phase >= 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{
                    opacity: [0.8, 1, 0.9],
                    scaleY: phase >= 3 ? [1.8, 2.5] : [0.9, 1.3, 1],
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15, repeat: Infinity, repeatType: "reverse" }}
                  className="absolute left-1/2 -bottom-10 -translate-x-1/2 w-8 h-14 origin-top flex flex-col items-center pointer-events-none"
                >
                  <div className="w-6 h-10 rounded-full bg-gradient-to-b from-white via-aws-orange to-aws-pink blur-[2px] shadow-[0_0_25px_#FF7A00]" />
                  <div className="w-2.5 h-6 -mt-6 rounded-full bg-white blur-[1px]" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Launch Pad Ring */}
          <div className="w-44 h-4 rounded-[100%] border border-slate-700/60 bg-space-800/40 mt-3 relative flex items-center justify-center">
            <div className="w-28 h-2 rounded-[100%] bg-purple-900/40" />
            {phase >= 1 && (
              <div className="absolute inset-0 rounded-[100%] shadow-[0_0_30px_rgba(255,122,0,0.4)]" />
            )}
          </div>
        </motion.div>

        {/* Billowing Smoke & Cloud Particles underneath */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-80 h-36 flex items-center justify-center pointer-events-none">
          {phase >= 2 && (
            <>
              {/* Expanding White Cloud Circles */}
              {[...Array(14)].map((_, i) => (
                <motion.div
                  key={`smoke-${i}`}
                  className="absolute rounded-full bg-slate-100/90 blur-[14px]"
                  style={{
                    width: 45 + (i * 8) + 'px',
                    height: 45 + (i * 8) + 'px',
                  }}
                  initial={{
                    scale: 0.2,
                    x: 0,
                    y: 10,
                    opacity: 0,
                  }}
                  animate={{
                    scale: phase >= 4 ? 12 : [0.8, 1.8, 2.4],
                    x: (i % 2 === 0 ? 1 : -1) * (15 + i * 14),
                    y: phase >= 4 ? -80 : -10 - (i * 4),
                    opacity: phase >= 4 ? 1 : [0.3, 0.85, 0.5],
                  }}
                  transition={{
                    duration: phase >= 4 ? 0.8 : 1.4,
                    repeat: phase >= 4 ? 0 : Infinity,
                    delay: i * 0.08,
                    ease: "easeOut",
                  }}
                />
              ))}
            </>
          )}
        </div>
      </div>

      {/* Status Readout Bar */}
      <div className="relative z-20 flex flex-col items-center gap-2 mt-4 px-6 text-center">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-aws-blue animate-ping" />
          <p className="font-mono text-sm tracking-widest text-aws-blue uppercase font-bold">
            {telemetryText}
          </p>
        </div>

        {/* Loading Progress Bar */}
        <div className="w-64 h-1.5 rounded-full bg-space-800 overflow-hidden border border-purple-900/50">
          <motion.div
            className="h-full bg-gradient-to-r from-aws-blue via-aws-purple to-aws-pink"
            initial={{ width: "5%" }}
            animate={{ width: phase === 4 ? "100%" : `${phase * 24 + 15}%` }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>
        
        <p className="text-[11px] font-mono text-slate-400 mt-1">
          AWS STUDENT COMMUNITY DAY • PREPARING CLOUD TELEMETRY
        </p>
      </div>

      {/* Final Viewport Cloud Takeover Transition (Phase 4) */}
      <AnimatePresence>
        {phase === 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 z-40 bg-gradient-to-b from-white via-indigo-50 to-slate-200 pointer-events-none flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center font-display text-space-900 font-extrabold text-3xl tracking-tight flex items-center gap-2"
            >
              <Sparkles className="w-8 h-8 text-aws-purple animate-spin" />
              <span>ORBIT REACHED</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
