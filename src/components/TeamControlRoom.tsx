import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Radio, ChevronLeft, ChevronRight } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './BrandIcons';
import { teamControlData } from '../data/eventData';

export const TeamControlRoom: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(teamControlData[0].id);
  const [mobileMemberIdx, setMobileMemberIdx] = useState(0);

  const activeCategory = teamControlData.find((c) => c.id === activeCategoryId) || teamControlData[0];

  useEffect(() => {
    setMobileMemberIdx(0);
  }, [activeCategoryId]);

  return (
    <section id="community" className="relative py-14 sm:py-24 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden scroll-mt-16 sm:scroll-mt-20">
      {/* Background Subtle Technical Grid */}
      <div className="absolute inset-0 cosmic-grid opacity-25 pointer-events-none" />

      {/* Atmospheric Glow */}
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-space-850 border border-purple-500/30 text-purple-300 text-xs font-mono tracking-wider mb-3 sm:mb-4"
        >
          <Terminal className="w-3.5 h-3.5 text-aws-blue animate-pulse" />
          <span>MISSION CONTROL ARCHITECTURE</span>
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display font-black text-2xl sm:text-5xl md:text-6xl text-center text-white tracking-tight mb-2 sm:mb-4"
        >
          THE PEOPLE <span className="gradient-text-aws">BEHIND THE CLOUD</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-300 text-xs sm:text-base font-sans max-w-xl text-center mb-6 sm:mb-12"
        >
          {teamControlData.length > 1
            ? "Interactive Cloud Control Room. Select a flight department below to inspect organizing squad nodes and real-time operations telemetry."
            : "Interactive Cloud Control Room. Meet the organizing squad nodes and student leaders behind AWS Student Community Day IGDTUW."}
        </motion.p>

        {/* Command Center Console Main Frame */}
        <div className="w-full max-w-5xl rounded-2xl sm:rounded-3xl bg-space-950/90 border-2 border-purple-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden">
          
          {/* Top Console Bar */}
          <div className="px-4 py-2.5 sm:px-6 sm:py-4 bg-space-900 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="font-mono text-[10px] sm:text-xs font-bold text-slate-300 tracking-wider">
                CLOUD_CONTROL // FLEET_CONSOLE
              </span>
            </div>

            <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400">
                <Radio className="w-3 h-3 sm:w-3.5 sm:h-3.5 animate-pulse" />
                {activeCategory.status}
              </span>
            </div>
          </div>

          {/* Department Selection Navigation Tabs */}
          <div className="p-2.5 sm:p-6 bg-space-900/40 border-b border-slate-800/80 overflow-x-auto scrollbar-none">
            <div className="flex items-center gap-1.5 sm:gap-3 min-w-max">
              {teamControlData.map((cat) => {
                const isActive = cat.id === activeCategoryId;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategoryId(cat.id)}
                    className={`flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-xl font-mono text-[11px] sm:text-sm font-bold transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-aws-purple to-purple-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.4)] border border-purple-400'
                        : 'bg-space-850 text-slate-400 hover:text-white hover:bg-space-800 border border-slate-800'
                    }`}
                  >
                    <span className="text-cyan-400">{cat.code} —</span>
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Department Telemetry and Members View */}
          <div className="p-3.5 sm:p-6">
            <div className="flex items-center justify-between mb-3 sm:mb-5 pb-2 sm:pb-3 border-b border-slate-800">
              <div>
                <div className="font-mono text-[10px] sm:text-xs text-cyan-400 font-bold mb-0.5">
                  DEPARTMENT // {activeCategory.code}
                </div>
                <h3 className="font-display font-extrabold text-lg sm:text-2xl text-white">
                  {activeCategory.name} SQUADRON
                </h3>
              </div>
              <div className="text-right font-mono text-[11px] sm:text-xs text-slate-400">
                <span className="text-purple-400 font-semibold">{activeCategory.members.length} CREW</span>
                <span className="hidden sm:inline"> DEPLOYED</span>
              </div>
            </div>

            {/* MOBILE ONLY: Perfectly Centered Crew Member Console Card */}
            <div className="sm:hidden flex flex-col items-center w-full">
              <div className="flex items-center justify-between w-full px-1 mb-2">
                <span className="text-[10px] font-mono text-cyan-300 tracking-wider">
                  CREW MEMBER ({mobileMemberIdx + 1}/{activeCategory.members.length})
                </span>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setMobileMemberIdx((prev) => Math.max(0, prev - 1))}
                    disabled={mobileMemberIdx === 0}
                    className="p-1 rounded-lg bg-space-850 border border-slate-700 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-space-800"
                    aria-label="Previous Crew Member"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setMobileMemberIdx((prev) => Math.min(activeCategory.members.length - 1, prev + 1))}
                    disabled={mobileMemberIdx === activeCategory.members.length - 1}
                    className="p-1 rounded-lg bg-space-850 border border-slate-700 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-space-800"
                    aria-label="Next Crew Member"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Centered Member Card with swipe and smooth animation */}
              <div className="w-full relative">
                <AnimatePresence mode="wait">
                  {(() => {
                    const member = activeCategory.members[mobileMemberIdx] || activeCategory.members[0];
                    return (
                      <motion.div
                        key={`${activeCategory.id}-${mobileMemberIdx}`}
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragEnd={(_, info) => {
                          if (info.offset.x < -35 && mobileMemberIdx < activeCategory.members.length - 1) {
                            setMobileMemberIdx(mobileMemberIdx + 1);
                          } else if (info.offset.x > 35 && mobileMemberIdx > 0) {
                            setMobileMemberIdx(mobileMemberIdx - 1);
                          }
                        }}
                        className="w-full max-w-[210px] mx-auto rounded-2xl p-2.5 bg-space-850/95 border border-slate-700/80 shadow-lg flex flex-col items-center text-center"
                      >
                        {/* Photo fitting top width with rounded corners */}
                        <div className="w-full aspect-square rounded-xl overflow-hidden mb-2 shadow-sm bg-space-900 border border-purple-500/20">
                          <img
                            src={member.avatar}
                            alt={member.name}
                            className="w-full h-full object-cover object-top"
                          />
                        </div>

                        {/* Name & Position */}
                        <h4 className="font-display font-bold text-sm text-white">
                          {member.name}
                        </h4>
                        <p className="font-sans text-[11px] text-slate-400 font-medium mt-0.5 line-clamp-1">
                          {member.role}
                        </p>

                        {/* MEET [NAME] Pill Button */}
                        <div className="mt-2.5 flex items-center justify-center gap-1.5">
                          <a
                            href={member.linkedin || "#"}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-1 px-3 py-1 rounded-full border border-slate-700 hover:border-cyan-400 bg-space-900/80 text-[10px] font-mono text-slate-300 hover:text-white transition-all shadow-sm"
                            aria-label={`Connect with ${member.name} on LinkedIn`}
                          >
                            <LinkedinIcon className="w-3 h-3 text-cyan-400" />
                          </a>
                          {member.github && (
                            <a
                              href={member.github}
                              target="_blank"
                              rel="noreferrer"
                              className="p-1 rounded-full border border-slate-700 hover:border-cyan-400 bg-space-900/80 text-slate-400 hover:text-white transition-colors"
                              aria-label={`${member.name} GitHub`}
                            >
                              <GithubIcon className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </motion.div>
                    );
                  })()}
                </AnimatePresence>
              </div>

              {/* Centered Dot Indicators */}
              <div className="flex items-center justify-center gap-1.5 mt-2.5">
                {activeCategory.members.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setMobileMemberIdx(idx)}
                    className={`transition-all duration-300 rounded-full ${
                      idx === mobileMemberIdx
                        ? 'w-5 h-1.5 bg-gradient-to-r from-aws-purple to-cyan-400'
                        : 'w-1.5 h-1.5 bg-slate-700 hover:bg-slate-500'
                    }`}
                    aria-label={`Go to crew member ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* DESKTOP / TABLET: Full Members Grid */}
            <div className="hidden sm:block">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-wrap justify-center gap-4 sm:gap-5 max-w-4xl mx-auto"
                >
                  {activeCategory.members.map((member) => {
                    
                    return (
                      <div
                        key={member.name}
                        className="w-[185px] sm:w-[200px] p-2.5 sm:p-3 rounded-2xl bg-space-850/80 border border-slate-800 hover:border-cyan-400/50 hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)] transition-all group flex flex-col items-center text-center overflow-hidden"
                      >
                        {/* Top Photo with Rounded Corners */}
                        <div className="w-full aspect-square rounded-xl overflow-hidden mb-2.5 shadow-sm bg-space-900 border border-purple-500/20 group-hover:border-cyan-400/40 transition-colors">
                          <img
                            src={member.avatar}
                            alt={member.name}
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                        {/* Name & Position */}
                        <h4 className="font-display font-bold text-sm sm:text-base text-white group-hover:text-cyan-300 transition-colors leading-snug">
                          {member.name}
                        </h4>
                        <p className="font-sans text-[11px] sm:text-xs text-slate-400 font-medium mt-0.5 line-clamp-1">
                          {member.role}
                        </p>

                        {/* MEET [NAME] Pill Button */}
                        <div className="mt-2.5 flex items-center justify-center gap-1.5">
                          <a
                            href={member.linkedin || "#"}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-1 px-3 py-1 rounded-full border border-slate-700/80 hover:border-cyan-400 bg-space-900/70 hover:bg-space-800 text-[10px] sm:text-[11px] font-mono text-slate-300 hover:text-white transition-all shadow-sm group/btn"
                            aria-label={`Connect with ${member.name} on LinkedIn`}
                          >
                            <LinkedinIcon className="w-3 h-3 text-cyan-400 group-hover/btn:scale-110 transition-transform" />
                          </a>
                          {member.github && (
                            <a
                              href={member.github}
                              target="_blank"
                              rel="noreferrer"
                              className="p-1 rounded-full border border-slate-700/80 hover:border-cyan-400 bg-space-900/70 hover:bg-space-800 text-slate-400 hover:text-white transition-all"
                              aria-label={`${member.name} GitHub`}
                            >
                              <GithubIcon className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* Console Command Prompt Footer */}
          <div className="px-4 py-2 sm:px-6 sm:py-3 bg-space-950 border-t border-slate-800 font-mono text-[11px] sm:text-xs text-slate-400 flex items-center gap-2">
            <span className="text-aws-blue">$</span>
            <span>crew.status --all --fleet=IGDTUW</span>
            <span className="w-2 h-4 bg-aws-blue animate-pulse inline-block" />
          </div>

        </div>

      </div>
    </section>
  );
};
