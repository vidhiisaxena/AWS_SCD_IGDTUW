import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cloud, Sparkles, Server, Users, Terminal, CloudLightning, ArrowUpRight, ChevronLeft, ChevronRight, Radio } from 'lucide-react';
import { sponsorsData } from '../data/eventData';

export const Sponsors: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'CloudLightning':
        return <CloudLightning className="w-6 h-6 text-amber-400" />;
      case 'Server':
        return <Server className="w-6 h-6 text-cyan-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-pink-400" />;
      case 'Radio':
        return <Radio className="w-6 h-6 text-emerald-400" />;
      case 'Terminal':
      default:
        return <Terminal className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section id="sponsors" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden scroll-mt-16 sm:scroll-mt-20">
      {/* Background Subtle Technical Grid */}
      <div className="absolute inset-0 cosmic-grid opacity-25 pointer-events-none" />

      {/* Atmospheric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-space-850 border border-purple-500/30 text-purple-300 text-xs font-mono tracking-wider mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 text-aws-blue" />
          <span>ALLIANCE FLEET</span>
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
          className="text-slate-300 text-sm sm:text-base font-sans max-w-xl text-center mb-8 sm:mb-16"
        >
          Visionary partners fueling student innovation, cloud workshops, and community access across Delhi.
        </motion.p>

        {/* Central Cloud Orbit Layout */}
        <div className="relative w-full max-w-5xl flex flex-col items-center">
          
          {/* Orbital Decorative Ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] md:w-[680px] h-[340px] sm:h-[500px] md:h-[680px] rounded-full border border-purple-500/20 border-dashed pointer-events-none hidden sm:block" />

          {/* Central Pulsing Cloud Core (Streamlined on Mobile) */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="my-4 sm:my-8 relative z-20 w-28 h-28 sm:w-44 sm:h-44 rounded-full bg-gradient-to-tr from-space-950 via-space-850 to-space-900 border-2 border-aws-purple/60 shadow-[0_0_40px_rgba(139,92,246,0.35)] flex flex-col items-center justify-center p-3 sm:p-4 text-center group cursor-pointer"
          >
            <Cloud className="w-8 h-8 sm:w-12 sm:h-12 text-cyan-300 group-hover:scale-110 transition-transform mb-1 drop-shadow-[0_0_15px_#00F0FF]" />
            <span className="font-display font-black text-[11px] sm:text-sm text-white tracking-wider">
              AWS CORE
            </span>
            <span className="font-mono text-[8px] sm:text-[9px] text-purple-300 tracking-widest uppercase">
              ORBIT CENTER
            </span>
          </motion.div>

          {/* MOBILE ONLY: Perfectly Centered Sponsor Slider Card */}
          <div className="w-full sm:hidden flex flex-col items-center mb-6">
            <div className="flex items-center justify-between w-full px-2 mb-3">
              <span className="text-[11px] font-mono text-cyan-300 tracking-wider">
                PARTNER NODE ({activeSlide + 1}/{sponsorsData.length})
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setActiveSlide((prev) => Math.max(0, prev - 1))}
                  disabled={activeSlide === 0}
                  className="p-1.5 rounded-lg bg-space-850 border border-slate-700 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-space-800"
                  aria-label="Previous Sponsor"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveSlide((prev) => Math.min(sponsorsData.length - 1, prev + 1))}
                  disabled={activeSlide === sponsorsData.length - 1}
                  className="p-1.5 rounded-lg bg-space-850 border border-slate-700 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-space-800"
                  aria-label="Next Sponsor"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Centered Sponsor Card with swipe support */}
            <div className="w-full relative px-1">
              <AnimatePresence mode="wait">
                {(() => {
                  const sponsor = sponsorsData[activeSlide] || sponsorsData[0];
                  return (
                    <motion.div
                      key={sponsor.id}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.2 }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.2}
                      onDragEnd={(_, info) => {
                        if (info.offset.x < -35 && activeSlide < sponsorsData.length - 1) {
                          setActiveSlide(activeSlide + 1);
                        } else if (info.offset.x > 35 && activeSlide > 0) {
                          setActiveSlide(activeSlide - 1);
                        }
                      }}
                      className="w-full rounded-2xl p-5 bg-gradient-to-b from-space-850/95 to-space-950/95 border border-slate-700/70 shadow-lg flex flex-col justify-between overflow-hidden cursor-grab active:cursor-grabbing relative"
                    >
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${sponsor.tierColor}`} />

                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 py-0.5 rounded bg-space-800 border border-slate-700">
                            {sponsor.tier}
                          </span>
                          <div className="p-2 rounded-xl bg-space-800/80 border border-slate-700/60">
                            {getIcon(sponsor.iconName)}
                          </div>
                        </div>

                        <h3 className="font-display font-extrabold text-xl text-white mb-2">
                          {sponsor.name}
                        </h3>

                        <p className="font-sans text-xs text-slate-300 leading-relaxed line-clamp-3">
                          {sponsor.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span>PARTNER NODE</span>
                        <span className="text-cyan-400 font-semibold flex items-center gap-0.5">
                          VERIFIED <ArrowUpRight className="w-3 h-3" />
                        </span>
                      </div>
                    </motion.div>
                  );
                })()}
              </AnimatePresence>
            </div>

            {/* Centered Dots Indicator */}
            <div className="flex items-center justify-center gap-1.5 mt-3">
              {sponsorsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    idx === activeSlide
                      ? 'w-5 h-1.5 bg-gradient-to-r from-aws-purple to-cyan-400'
                      : 'w-1.5 h-1.5 bg-slate-700 hover:bg-slate-500'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* DESKTOP / TABLET ONLY: 4 Orbiting / Floating Sponsor Grid */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 z-10 w-full">
            {sponsorsData.map((sponsor, idx) => (
              <motion.div
                key={sponsor.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative rounded-2xl p-6 bg-gradient-to-b from-space-850/90 to-space-950/90 border border-slate-700/60 hover:border-aws-purple transition-all shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between group overflow-hidden"
              >
                {/* Top tier color bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${sponsor.tierColor}`} />

                <div>
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 py-0.5 rounded bg-space-800 border border-slate-700">
                      {sponsor.tier}
                    </span>
                    <div className="p-2 rounded-xl bg-space-800/80 border border-slate-700/60 group-hover:border-cyan-400/50 transition-colors">
                      {getIcon(sponsor.iconName)}
                    </div>
                  </div>

                  {/* Sponsor Name */}
                  <h3 className="font-display font-extrabold text-xl text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {sponsor.name}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-xs text-slate-300 leading-relaxed">
                    {sponsor.description}
                  </p>
                </div>

                {/* Footer Telemetry */}
                <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>PARTNER NODE</span>
                  <span className="text-cyan-400 font-semibold flex items-center gap-0.5">
                    VERIFIED <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
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
