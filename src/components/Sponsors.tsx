import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cloud, Sparkles, Server, Users, Terminal, CloudLightning, ArrowUpRight, ChevronLeft, ChevronRight, Radio } from 'lucide-react';
import { sponsorsData } from '../data/eventData';

export const Sponsors: React.FC = () => {
  const communityPartners = [
    { name: "AWS UG Delhi NCR" },
    { name: "Codecrafting" },
    { name: "DevSphere" },
  ];

  return (
    <section id="sponsors" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden scroll-mt-16 sm:scroll-mt-20">
      {/* Background Subtle Technical Grid */}
      <div className="absolute inset-0 cosmic-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-space-850 border border-purple-500/30 text-purple-300 text-xs font-mono tracking-wider mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 text-aws-blue" />
          <span>OUR SPONSORS</span>
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-center text-white tracking-tight mb-4"
        >
          POWERING THE <span className="gradient-text-aws">CLOUD</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-300 text-sm sm:text-base font-sans max-w-xl text-center mb-12"
        >
          Supported by visionary industry organizations and student community builders.
        </motion.p>

        {/* TOP TIER: Title Sponsor & Ticketing Sponsor */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          
          {/* TITLE SPONSOR: AWS Community */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-3xl p-8 bg-gradient-to-b from-space-850/90 to-space-950/90 border-2 border-amber-500/40 hover:border-amber-400 transition-all shadow-[0_15px_40px_rgba(255,153,0,0.12)] flex flex-col items-center text-center group overflow-hidden"
          >
            {/* Top accent glow line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-300" />
            
            <div className="inline-block font-mono text-[11px] font-bold uppercase tracking-widest text-amber-300 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full mb-6 shadow-sm">
              TITLE SPONSOR
            </div>

            {/* AWS Logo */}
            <div className="h-24 w-full flex items-center justify-center mb-6 px-4 group-hover:scale-105 transition-transform duration-300">
              <svg viewBox="0 0 160 95" className="h-20 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38.5 45.2c0-2.8-.8-5-2.4-6.6-1.6-1.6-3.8-2.4-6.7-2.4-3.1 0-5.7.9-7.7 2.8l-3.3-6.2c3.1-2.4 7-3.6 11.8-3.6 5.4 0 9.6 1.5 12.6 4.4 3 3 4.5 7.2 4.5 12.7v23.2h-7.8v-5.4c-2.3 3.9-6.3 5.9-11.8 5.9-4.3 0-7.8-1.2-10.4-3.7-2.6-2.5-3.9-5.7-3.9-9.7 0-4.3 1.5-7.7 4.5-10.1 3-2.4 7.2-3.6 12.8-3.6h7.8v-1.7zm-7.6 17.5c2.4 0 4.5-.8 6.2-2.3 1.7-1.5 2.5-3.5 2.5-5.9v-3.7h-7.1c-3.2 0-5.6.6-7.2 1.9-1.6 1.3-2.4 3.1-2.4 5.3 0 2.2.7 3.8 2 4.8 1.4 1 3.4 1.5 6 1.5z" fill="#FFFFFF"/>
                <path d="M78.6 69.5l-8.4-30.8h8.5l4.8 21.6 5-21.6h8.4l5 21.6 4.8-21.6h8.3l-8.4 30.8h-8.7l-4.9-20.9-4.9 20.9h-8.5z" fill="#FFFFFF"/>
                <path d="M129.5 59.2c2.7 1.8 5.8 2.8 9.3 2.8 2.5 0 4.4-.5 5.6-1.4 1.2-.9 1.8-2.1 1.8-3.6 0-1.4-.6-2.5-1.9-3.4-1.3-.9-3.6-1.8-7-2.8-4.7-1.4-8.2-3.1-10.4-5.2-2.3-2.1-3.4-4.9-3.4-8.5 0-4 1.5-7.3 4.5-9.8 3-2.5 7.1-3.8 12.3-3.8 4.2 0 7.9.8 11.2 2.5l-2.9 6.7c-2.6-1.4-5.5-2.1-8.6-2.1-2.3 0-4.1.5-5.3 1.4-1.2.9-1.8 2.1-1.8 3.5 0 1.2.6 2.3 1.8 3.1 1.2.8 3.4 1.7 6.6 2.6 5 1.5 8.7 3.3 11 5.4 2.4 2.1 3.5 5 3.5 8.7 0 4.3-1.6 7.7-4.7 10.3-3.1 2.6-7.4 3.9-12.8 3.9-5 0-9.4-1.1-13.3-3.2l3.1-6.9z" fill="#FFFFFF"/>
                <path d="M14.5 76.5c22.6 15.6 55.4 18.2 84.7 9.8 4.8-1.4 9.6-3.2 14.2-5.4l2.8 6.7c-5.1 2.5-10.4 4.5-15.8 6-32.2 9.2-68.2 6.4-93.1-10.7l7.2-6.4z" fill="#FF9900"/>
                <path d="M117.4 80.8c-3.1-3.8-11.4-6.3-15.6-5.8-.9.1-1.1-1-.3-1.6 5.5-3.8 19-1.7 20.8 1.4 1.2 2-2 16.3-7.2 20.5-.7.6-1.5.2-1.3-.6.9-3.9 3.6-10.1 3.6-13.9z" fill="#FF9900"/>
              </svg>
            </div>

            <h3 className="font-display font-extrabold text-2xl text-white group-hover:text-amber-300 transition-colors mb-1">
              AWS Community
            </h3>
            <p className="font-mono text-xs text-slate-400">
              Official Title Sponsor
            </p>
          </motion.div>

          {/* TICKETING SPONSOR: Konfhub */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="relative rounded-3xl p-8 bg-gradient-to-b from-space-850/90 to-space-950/90 border-2 border-cyan-500/40 hover:border-cyan-400 transition-all shadow-[0_15px_40px_rgba(6,182,212,0.12)] flex flex-col items-center text-center group overflow-hidden"
          >
            {/* Top accent glow line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />

            <div className="inline-block font-mono text-[11px] font-bold uppercase tracking-widest text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 px-3.5 py-1 rounded-full mb-6 shadow-sm">
              TICKETING SPONSOR
            </div>

            {/* Konfhub Logo */}
            <div className="h-24 w-full flex items-center justify-center mb-6 px-4 group-hover:scale-105 transition-transform duration-300">
              <svg viewBox="0 0 190 56" className="h-14 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="52" height="52" rx="14" fill="url(#konfhub-logo-grad)" />
                <path d="M19 14v28M19 28l16-14M24 23l14 19" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="konfhub-logo-grad" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8B5CF6"/>
                    <stop offset="0.5" stopColor="#3B82F6"/>
                    <stop offset="1" stopColor="#06B6D4"/>
                  </linearGradient>
                </defs>
                <text x="68" y="36" fill="#FFFFFF" fontFamily="system-ui, -apple-system, sans-serif" fontSize="28" fontWeight="800" letterSpacing="-0.8">Konfhub</text>
              </svg>
            </div>

            <h3 className="font-display font-extrabold text-2xl text-white group-hover:text-cyan-300 transition-colors mb-1">
              Konfhub
            </h3>
            <p className="font-mono text-xs text-slate-400">
              Official Ticketing Partner
            </p>
          </motion.div>

        </div>

        {/* BOTTOM TIER: Community Partners */}
        <div className="w-full max-w-4xl flex flex-col items-center">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-transparent to-purple-500/40" />
            <div className="font-mono text-xs sm:text-sm tracking-widest text-purple-300 font-bold uppercase flex items-center gap-2">
              <Users className="w-4 h-4 text-purple-400" />
              <span>COMMUNITY PARTNERS</span>
            </div>
            <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-transparent to-purple-500/40" />
          </div>

          {/* The three community partners in clean cards */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
            {communityPartners.map((partner, idx) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * idx }}
                whileHover={{ y: -3 }}
                className="py-5 px-6 rounded-2xl bg-space-850/70 border border-slate-700/60 hover:border-purple-400/50 transition-all text-center flex flex-col items-center justify-center group shadow-md"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 mb-2 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                <h4 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-cyan-300 transition-colors">
                  {partner.name}
                </h4>
              </motion.div>
            ))}
          </div>

          {/* Become a Partner Callout */}
          <div className="mt-8 sm:mt-14 inline-flex items-center gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl bg-space-900/80 border border-purple-500/30 backdrop-blur max-w-full">
            <span className="font-mono text-xs text-slate-300 truncate">
              Want to support the next generation of cloud architects?
            </span>
            <a
              href="mailto:awscloudclubigdtuw@gmail.com"
              className="font-mono text-xs text-cyan-300 font-bold hover:underline flex items-center gap-1 shrink-0"
            >
              <span>PARTNER WITH US</span>
              <span>→</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
