import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Radio } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './BrandIcons';
import { teamControlData } from '../data/eventData';

export const TeamControlRoom: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(teamControlData[0].id);

  const activeCategory = teamControlData.find((c) => c.id === activeCategoryId) || teamControlData[0];

  return (
    <section id="community" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
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
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-space-850 border border-purple-500/30 text-purple-300 text-xs font-mono tracking-wider mb-4"
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
          className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-center text-white tracking-tight mb-4"
        >
          THE PEOPLE <span className="gradient-text-aws">BEHIND THE CLOUD</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-300 text-sm sm:text-base font-sans max-w-xl text-center mb-12"
        >
          Interactive Cloud Control Room. Select a flight department below to inspect organizing squad nodes and real-time operations telemetry.
        </motion.p>

        {/* Command Center Console Main Frame */}
        <div className="w-full max-w-5xl rounded-3xl bg-space-950/90 border-2 border-purple-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden">
          
          {/* Top Console Bar */}
          <div className="px-6 py-4 bg-space-900 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="font-mono text-xs font-bold text-slate-300 tracking-wider">
                CLOUD_CONTROL // FLEET_CONSOLE_v2.6
              </span>
            </div>

            <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400">
                <Radio className="w-3.5 h-3.5 animate-pulse" />
                {activeCategory.status}
              </span>
            </div>
          </div>

          {/* Department Selection Navigation Tabs */}
          <div className="p-4 sm:p-6 bg-space-900/40 border-b border-slate-800/80 overflow-x-auto scrollbar-none">
            <div className="flex items-center gap-2 sm:gap-3 min-w-max">
              {teamControlData.map((cat) => {
                const isActive = cat.id === activeCategoryId;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategoryId(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-aws-purple to-purple-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] border border-purple-400'
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
          <div className="p-6 sm:p-10">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
              <div>
                <div className="font-mono text-xs text-cyan-400 font-bold mb-1">
                  DEPARTMENT // {activeCategory.code}
                </div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                  {activeCategory.name} SQUADRON
                </h3>
              </div>
              <div className="hidden sm:block text-right font-mono text-xs text-slate-400">
                <div>STATION HEALTH: OPTIMAL</div>
                <div className="text-purple-400 font-semibold">{activeCategory.members.length} CREW DEPLOYED</div>
              </div>
            </div>

            {/* Members Cards in Command Room */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              >
                {activeCategory.members.map((member) => (
                  <div
                    key={member.name}
                    className="p-5 rounded-2xl bg-space-850/80 border border-slate-800 hover:border-aws-blue transition-all group relative overflow-hidden"
                  >
                    {/* Top corner station tag */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[10px] text-slate-400 bg-space-900 px-2 py-0.5 rounded border border-slate-800">
                        {member.systemTag}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    </div>

                    {/* Member photo and info */}
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-14 h-14 rounded-xl object-cover border border-purple-500/40 group-hover:scale-105 transition-transform"
                      />
                      <div>
                        <h4 className="font-display font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                          {member.name}
                        </h4>
                        <p className="font-sans text-xs text-purple-300 font-medium">
                          {member.role}
                        </p>
                      </div>
                    </div>

                    {/* Links */}
                    <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                      <span>AWS STUDENT BUILDER GROUP IGDTUW</span>
                      <div className="flex items-center gap-2">
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-white text-slate-400"
                            aria-label="LinkedIn"
                          >
                            <LinkedinIcon className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {member.github && (
                          <a
                            href={member.github}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-white text-slate-400"
                            aria-label="GitHub"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

          </div>

          {/* Console Command Prompt Footer */}
          <div className="px-6 py-3 bg-space-950 border-t border-slate-800 font-mono text-xs text-slate-400 flex items-center gap-2">
            <span className="text-aws-blue">$</span>
            <span>crew.status --all --fleet=IGDTUW</span>
            <span className="w-2 h-4 bg-aws-blue animate-pulse inline-block" />
          </div>

        </div>

      </div>
    </section>
  );
};
