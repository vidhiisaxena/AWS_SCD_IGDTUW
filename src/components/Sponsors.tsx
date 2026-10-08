import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users } from 'lucide-react';
import awsLogo from '../assets/Amazon_Web_Services_Logo.svg';

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
              <img
                src={awsLogo}
                alt="Amazon Web Services"
                className="h-16 w-auto max-w-[200px] object-contain drop-shadow-[0_4px_12px_rgba(255,153,0,0.15)]"
              />
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
