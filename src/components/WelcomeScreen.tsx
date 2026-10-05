import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Gamepad2, Compass, Sparkles, MapPin, Calendar, Clock, ArrowRight } from 'lucide-react';
import { eventConfig } from '../data/eventData';

interface WelcomeScreenProps {
  onEnterCloud: () => void;
  onOpenArcade: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  onEnterCloud,
  onOpenArcade,
}) => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-12 bg-space-950 text-white overflow-hidden">
      {/* Background Cosmic Grid */}
      <div className="absolute inset-0 cosmic-grid opacity-30 pointer-events-none" />

      {/* Atmospheric Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center">
        
        {/* Organizer Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-space-850/80 border border-purple-500/40 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(139,92,246,0.2)]"
        >
          <Sparkles className="w-4 h-4 text-aws-blue" />
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-purple-200 uppercase">
            Organized by {eventConfig.organizer}
          </span>
        </motion.div>

        {/* Big Bold Welcome Header */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.08] mb-6"
        >
          WELCOME TO <br />
          <span className="gradient-text-aws">
            {eventConfig.name}
          </span>
        </motion.h1>

        {/* Event Key Highlights (Date, Time, Venue) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-mono text-slate-300 mb-10 px-4 py-2.5 rounded-2xl bg-space-900/70 border border-slate-800/80 backdrop-blur"
        >
          <div className="flex items-center gap-2 text-cyan-300">
            <Calendar className="w-4 h-4 text-aws-blue" />
            <span className="font-bold tracking-wide">30TH OCTOBER</span>
          </div>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <div className="flex items-center gap-2 text-purple-300">
            <Clock className="w-4 h-4 text-aws-purple" />
            <span>10:00 AM ONWARDS</span>
          </div>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <div className="flex items-center gap-2 text-pink-300">
            <MapPin className="w-4 h-4 text-aws-pink" />
            <span>IGDTUW, DELHI</span>
          </div>
        </motion.div>

        {/* Philosophy Motto */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-medium text-slate-400 text-sm sm:text-base max-w-xl mb-12 italic"
        >
          "{eventConfig.philosophy}"
        </motion.p>

        {/* 2 Large Interactive Futuristic Floating Choice Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl px-2"
        >
          {/* CHOICE 1: ENTER THE CLOUD */}
          <motion.button
            whileHover={{ scale: 1.03, y: -6 }}
            whileTap={{ scale: 0.98 }}
            onClick={onEnterCloud}
            className="group relative flex flex-col items-start p-7 rounded-2xl text-left bg-gradient-to-b from-space-800/90 to-space-900/90 border-2 border-aws-purple/50 hover:border-aws-blue shadow-[0_0_30px_rgba(139,92,246,0.25)] hover:shadow-[0_0_40px_rgba(0,240,255,0.4)] transition-all overflow-hidden"
          >
            {/* Top Glowing Gradient Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-aws-purple via-aws-blue to-aws-purple group-hover:h-2 transition-all" />

            <div className="flex items-center justify-between w-full mb-4">
              <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-aws-blue group-hover:scale-110 group-hover:bg-cyan-500/20 transition-transform">
                <Cloud className="w-8 h-8" />
              </div>
              <span className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 font-semibold tracking-wider">
                MAIN FLEET
              </span>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl sm:text-2xl font-display font-extrabold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                ENTER THE CLOUD
              </span>
              <ArrowRight className="w-5 h-5 text-aws-blue transform group-hover:translate-x-1.5 transition-transform" />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
              Explore keynote speakers, mission timeline, student community showcase & register for the summit.
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold">
              <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Full Event Experience</span>
            </div>
          </motion.button>

          {/* CHOICE 2: PLAY (CLOUD ARCADE) */}
          <motion.button
            whileHover={{ scale: 1.03, y: -6 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenArcade}
            className="group relative flex flex-col items-start p-7 rounded-2xl text-left bg-gradient-to-b from-space-800/90 to-space-900/90 border-2 border-aws-pink/50 hover:border-amber-400 shadow-[0_0_30px_rgba(255,0,122,0.25)] hover:shadow-[0_0_40px_rgba(255,153,0,0.4)] transition-all overflow-hidden"
          >
            {/* Top Glowing Gradient Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-aws-pink via-aws-orange to-amber-400 group-hover:h-2 transition-all" />

            <div className="flex items-center justify-between w-full mb-4">
              <div className="w-14 h-14 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-aws-pink group-hover:scale-110 group-hover:bg-pink-500/20 transition-transform">
                <Gamepad2 className="w-8 h-8" />
              </div>
              <span className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-pink-500/20 text-pink-300 font-semibold tracking-wider">
                ARCADE ARENA
              </span>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl sm:text-2xl font-display font-extrabold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                PLAY
              </span>
              <ArrowRight className="w-5 h-5 text-amber-400 transform group-hover:translate-x-1.5 transition-transform" />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
              Step into the AWS Cloud Arcade. Test your architectural memory in Memory Match & crush cloud clusters!
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs font-mono text-amber-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span>2 Games Ready • Play in Browser</span>
            </div>
          </motion.button>
        </motion.div>

        {/* Footer Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="font-mono text-xs text-slate-500 tracking-wider">
            <a 
            href={eventConfig.socials.instagram} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-slate-800 transition-colors"
              >
            Instagram
            </a>  <span></span>          • <span></span>
            <a 
            href={eventConfig.socials.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-slate-800 transition-colors"
            >
            LinkedIn
            </a> 
          </p>
        </motion.div>
      </div>
    </div>
  );
};
