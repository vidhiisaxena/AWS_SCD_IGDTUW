import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { faqData } from '../data/eventData';

export const FAQ: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>([faqData[0].id]);

  const toggleFAQ = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <section id="faq" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto overflow-hidden scroll-mt-16 sm:scroll-mt-20">
      {/* Background Subtle Technical Grid */}
      <div className="absolute inset-0 cosmic-grid opacity-25 pointer-events-none" />

      {/* Atmospheric Glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-space-850 border border-purple-500/30 text-purple-300 text-xs font-mono tracking-wider mb-4"
        >
          <span className="w-2 h-2 rounded-full bg-aws-blue animate-pulse" />
          <span>QUERY CONSOLE // HELP DESK</span>
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-center text-white tracking-tight mb-4"
        >
          FREQUENTLY <span className="gradient-text-aws">QUERIED</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-300 text-sm sm:text-base font-sans max-w-xl text-center mb-14"
        >
          Interactive AWS terminal debugger. Click any bash instruction below to output protocol details and attendee guidance.
        </motion.p>

        {/* Terminal Window Frame */}
        <div className="w-full rounded-3xl bg-space-950/95 border-2 border-purple-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
          
          {/* Terminal Window Header Bar */}
          <div className="px-6 py-4 bg-space-900 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 font-mono text-xs text-slate-400 font-semibold">
                bash: ~/aws-community-day/faq.sh
              </span>
            </div>

            <div className="font-mono text-xs text-cyan-400 hidden sm:block">
              TTY-01 // READY
            </div>
          </div>

          {/* Terminal Prompts List */}
          <div className="p-4 sm:p-8 space-y-4 divide-y divide-slate-800/80">
            {faqData.map((item, index) => {
              const isOpen = openIds.includes(item.id);
              return (
                <div key={item.id} className={index > 0 ? "pt-4" : ""}>
                  <button
                    onClick={() => toggleFAQ(item.id)}
                    className="w-full text-left flex items-start justify-between gap-4 p-3 rounded-xl hover:bg-space-900/60 transition-colors group"
                  >
                    <div className="flex items-center gap-2 sm:gap-3 flex-1">
                      {/* Terminal Question Prefix */}
                      <span className="font-mono text-xs sm:text-sm font-black text-cyan-400 group-hover:text-cyan-300">
                        &gt;
                      </span>

                      <span className="font-mono font-bold text-xs sm:text-base text-slate-100 group-hover:text-aws-blue transition-colors">
                        {item.command.replace('> ', '')}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="hidden sm:inline font-mono text-[10px] text-slate-500 px-2 py-0.5 rounded bg-space-900 border border-slate-800">
                        {item.category}
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 text-cyan-400 transform transition-transform duration-200 ${
                          isOpen ? 'rotate-90' : ''
                        }`}
                      />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-6 sm:pl-8 pr-4 py-3 font-sans text-xs sm:text-sm text-slate-300 leading-relaxed bg-space-900/40 rounded-xl my-2 border-l-2 border-aws-purple">
                          <div className="font-mono text-[11px] text-purple-400/90 mb-1">
                            RESPONSE [200 OK]:
                          </div>
                          <p>{item.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Terminal Footer Prompt */}
          <div className="px-6 py-4 bg-space-900/60 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">❯</span>
              <span>Need further clearance? Ask on Discord or Instagram</span>
            </div>
            <a
              href="mailto:awscloudclubigdtuw@gmail.com"
              className="text-cyan-400 hover:underline font-semibold"
            >
              Contact Support →
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
