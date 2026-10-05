import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ArrowUp } from 'lucide-react';
import { InstagramIcon, LinkedinIcon, GithubIcon } from './BrandIcons';
import { eventConfig } from '../data/eventData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-24 pb-12 bg-space-950 border-t border-purple-500/20 text-white overflow-hidden">
      {/* Background Subtle Technical Grid */}
      <div className="absolute inset-0 cosmic-grid opacity-20 pointer-events-none" />

      {/* Atmospheric Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Slowly Floating Upward Rocket Motif */}
      <motion.div
        animate={{
          y: [0, -35, 0],
          rotate: [-1, 2, -1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 right-8 sm:right-24 z-10 opacity-75 hidden sm:flex flex-col items-center"
      >
        <div className="w-12 h-16 relative">
          <Rocket className="w-12 h-12 text-cyan-300 transform -rotate-45 drop-shadow-[0_0_15px_#00F0FF]" />
          {/* Subtle rocket jet trail */}
          <div className="w-2.5 h-6 bg-gradient-to-b from-amber-400 to-transparent rounded-full blur-[1px] mx-auto -mt-2 animate-pulse" />
        </div>
        <span className="font-mono text-[9px] text-cyan-400/80 tracking-widest uppercase mt-1">
          ORBITING
        </span>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Main Footer Heading */}
        <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight mb-4">
          ONE COMMUNITY. <br />
          <span className="gradient-text-aws">COUNTLESS POSSIBILITIES.</span>
        </h2>

        {/* Club Attribution */}
        <div className="mb-2">
          <span className="font-display font-bold text-lg sm:text-xl text-purple-200">
            {eventConfig.organizer}
          </span>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center gap-4 mb-12">
          <a
            href={eventConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-2xl bg-space-850 border border-slate-700 hover:border-pink-500 hover:text-pink-400 flex items-center justify-center transition-all shadow-md group"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>

          <a
            href={eventConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-2xl bg-space-850 border border-slate-700 hover:border-blue-500 hover:text-blue-400 flex items-center justify-center transition-all shadow-md group"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>

          <a
            href={eventConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-2xl bg-space-850 border border-slate-700 hover:border-purple-500 hover:text-purple-400 flex items-center justify-center transition-all shadow-md group"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="w-full pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            Built with love for the community ☁️
          </div>

          <div className="flex items-center gap-4">
            <span>© 2026 {eventConfig.organizer}</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-300 hover:text-cyan-300 transition-colors p-1"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
