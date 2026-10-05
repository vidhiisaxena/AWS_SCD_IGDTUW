import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowRight, ArrowDown, Sparkles, Rocket, Quote, ShieldCheck } from 'lucide-react';
import { eventConfig } from '../data/eventData';

interface HeroProps {
  onOpenRegister: () => void;
  onExploreCommunity: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister, onExploreCommunity }) => {
  return (
    <section id="home" className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-center items-center overflow-hidden">
      {/* Background Subtle Technical Grid */}
      <div className="absolute inset-0 cosmic-grid opacity-30 pointer-events-none" />

      {/* Floating AWS-inspired Nebula Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-purple-600/20 via-cyan-500/15 to-pink-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-aws-purple/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle Floating Space Dust Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: (i % 3 === 0 ? 3 : 2) + 'px',
              height: (i % 3 === 0 ? 3 : 2) + 'px',
              backgroundColor: i % 2 === 0 ? '#00F0FF' : '#FF007A',
              left: `${(i * 19) % 96}%`,
              top: `${(i * 31) % 92}%`,
              opacity: 0.35,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 0.7, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + (i % 4),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
        
        {/* Top Community Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-space-850/90 border border-purple-500/40 text-purple-200 text-xs sm:text-sm font-mono tracking-wider mb-6 shadow-[0_0_20px_rgba(139,92,246,0.25)]"
        >
          <Sparkles className="w-4 h-4 text-aws-blue animate-spin" style={{ animationDuration: '6s' }} />
          <span className="font-bold text-white tracking-widest uppercase">
            {eventConfig.organizer}
          </span>
          <span className="text-slate-500">|</span>
          <span className="text-cyan-300 font-semibold">PRESENTS</span>
        </motion.div>

        {/* Main Event Title with Chunky Playful Typography */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.04] mb-4">
            <span className="block text-white">AWS STUDENT</span>
            <span className="block gradient-text-aws">COMMUNITY DAY</span>
          </h1>

          {/* Motto */}
          <div className="inline-block mt-1 mb-8">
            <span className="font-mono text-sm sm:text-lg uppercase tracking-[0.25em] text-cyan-300 font-bold px-4 py-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/30">
              {eventConfig.tagline}
            </span>
          </div>
        </motion.div>

        {/* Key Event Badges: Date, Time, Venue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-mono text-slate-200 mb-10 px-6 py-3 rounded-2xl bg-space-850/80 border border-slate-700/60 backdrop-blur-md shadow-xl"
        >
          <div className="flex items-center gap-2 text-cyan-300">
            <Calendar className="w-4 h-4 text-aws-blue" />
            <span className="font-bold tracking-wide">30 OCTOBER</span>
          </div>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <div className="flex items-center gap-2 text-purple-300">
            <Clock className="w-4 h-4 text-aws-purple" />
            <span>10:00 AM ONWARDS</span>
          </div>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <div className="flex items-center gap-2 text-pink-300">
            <MapPin className="w-4 h-4 text-aws-pink" />
            <span>IGDTUW • DELHI</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <button
            onClick={onOpenRegister}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-aws-purple via-purple-600 to-aws-pink text-white font-display font-extrabold text-sm sm:text-base tracking-wider shadow-[0_0_35px_rgba(139,92,246,0.45)] hover:shadow-[0_0_45px_rgba(255,0,122,0.6)] hover:scale-105 transition-all flex items-center justify-center gap-2.5 group"
          >
            <Rocket className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            <span>REGISTER NOW</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary CTA */}
          <button
            onClick={onExploreCommunity}
            className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-space-850/80 hover:bg-space-800 border border-slate-700 hover:border-aws-blue text-slate-200 hover:text-white font-mono text-xs sm:text-sm font-semibold tracking-wide transition-all backdrop-blur flex items-center justify-center gap-2 group"
          >
            <span>EXPLORE THE COMMUNITY</span>
            <ArrowDown className="w-4 h-4 text-aws-blue group-hover:translate-y-1 transition-transform" />
          </button>
        </motion.div>

        {/* 9. FLOATING QUOTE / COMMUNITY MESSAGE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-2xl w-full"
        >
          <div className="glass-panel rounded-2xl p-6 sm:p-7 relative text-left border border-purple-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.4),0_0_20px_rgba(139,92,246,0.15)] group hover:border-cyan-500/50 transition-all">
            {/* Top decorative badge */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-aws-blue">
                <Quote className="w-4 h-4 rotate-180" />
                <span className="font-bold tracking-wider uppercase">COMMUNITY PHILOSOPHY</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-mono text-purple-300">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                <span>OFFICIAL CREED</span>
              </div>
            </div>

            {/* Quote content */}
            <p className="font-display font-bold text-lg sm:text-xl text-white tracking-wide leading-snug mb-3">
              “Together, we learn. Together, we build. Together, we grow.”
            </p>

            {/* Quote attribution */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
              <span className="text-xs sm:text-sm font-mono text-slate-400">
                — {eventConfig.organizer}
              </span>
              <span className="text-[11px] font-mono text-cyan-400 font-semibold">
                IGDTUW, Delhi
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
