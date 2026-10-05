import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Clock, Terminal } from 'lucide-react';
import { timelineData } from '../data/eventData';

export const ScheduleTimeline: React.FC = () => {
  return (
    <section id="schedule" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto overflow-hidden">
      {/* Background Subtle Technical Grid */}
      <div className="absolute inset-0 cosmic-grid opacity-25 pointer-events-none" />

      {/* Atmospheric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-space-850 border border-purple-500/30 text-purple-300 text-xs font-mono tracking-wider mb-4"
        >
          <Clock className="w-3.5 h-3.5 text-aws-blue animate-pulse" />
          <span>FLIGHT PLAN</span>
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-center text-white tracking-tight mb-4"
        >
          MISSION <span className="gradient-text-aws">TIMELINE</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-300 text-sm sm:text-base font-sans max-w-xl text-center mb-14"
        >
          Telemetry markers locked for 30th October. Detailed payload briefing will be broadcasted to confirmed attendees.
        </motion.p>

        {/* Timeline Container with Blurred Cards & Futuristic TBA Overlay */}
        <div className="relative w-full max-w-3xl rounded-3xl p-6 sm:p-10 bg-space-950/70 border border-purple-500/30 overflow-hidden shadow-2xl">
          
          {/* Central Vertical Timeline Track */}
          <div className="absolute top-12 bottom-12 left-8 sm:left-28 w-0.5 bg-gradient-to-b from-aws-blue via-aws-purple to-aws-pink">
            {/* Animated glowing pulse dot running down the timeline */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_15px_#00F0FF]"
              animate={{ y: [0, 480, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Time markers and blurred placeholder session content */}
          <div className="space-y-8 relative">
            {timelineData.map((item) => (
              <div key={item.time} className="flex items-start gap-6 sm:gap-12 relative group">
                
                {/* Time Indicator Marker */}
                <div className="w-16 sm:w-20 text-left font-mono text-xs sm:text-sm font-bold text-cyan-300 pt-1 flex items-center justify-between">
                  <span>{item.marker}</span>
                  {/* Glowing Node Dot */}
                  <span className="w-3.5 h-3.5 rounded-full bg-space-900 border-2 border-aws-purple group-hover:border-cyan-400 group-hover:scale-125 transition-transform flex items-center justify-center translate-x-4 sm:translate-x-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-aws-blue" />
                  </span>
                </div>

                {/* Blurred Session Content Card */}
                <div className="flex-1 p-5 rounded-2xl bg-space-900/40 border border-slate-800/80 backdrop-blur-md filter blur-[4px] select-none pointer-events-none transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] text-purple-400 font-bold uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="font-mono text-xs text-slate-500">
                      {item.time}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-base sm:text-lg text-slate-200 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {item.detail}
                  </p>
                </div>

              </div>
            ))}
          </div>

          {/* Futuristic Overlay: "THE MISSION IS STILL LOADING... Schedule dropping soon. STATUS: TBA" */}
          <div className="absolute inset-0 bg-space-950/65 backdrop-blur-[6px] flex flex-col items-center justify-center p-6 text-center z-20">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-md p-8 rounded-3xl bg-space-900/90 border-2 border-aws-purple/60 shadow-[0_0_50px_rgba(139,92,246,0.35)] flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-aws-blue mb-5 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                <Lock className="w-6 h-6 text-aws-blue animate-pulse" />
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/15 border border-pink-500/30 text-pink-300 font-mono text-xs font-bold mb-3 tracking-widest">
                <span className="w-2 h-2 rounded-full bg-pink-400 animate-ping" />
                <span>STATUS: TBA</span>
              </div>

              <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight mb-2">
                THE MISSION IS STILL LOADING...
              </h3>

              <p className="font-mono text-xs text-cyan-300 mb-4 tracking-wide font-semibold">
                Schedule dropping soon.
              </p>

              <p className="font-sans text-xs text-slate-300 leading-relaxed mb-6">
                Speaker track allocation, lightning demos, and surprise keynote announcements are undergoing final flight telemetry checks.
              </p>

              <div className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-space-950 border border-slate-800 font-mono text-[11px] text-slate-400">
                <Terminal className="w-3.5 h-3.5 text-aws-purple" />
                <span>SYNC // PENDING AMBASSADOR KEY</span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
