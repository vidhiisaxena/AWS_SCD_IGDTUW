import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Clock, Zap } from 'lucide-react';
import { eventConfig } from '../data/eventData';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  hasLaunched: boolean;
}

export const Countdown: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date(eventConfig.countdownTarget).getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, hasLaunched: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      hasLaunched: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'DAYS', value: timeLeft.days, code: 'SOLAR_DAYS' },
    { label: 'HOURS', value: timeLeft.hours, code: 'ORBIT_HRS' },
    { label: 'MINUTES', value: timeLeft.minutes, code: 'TELEMETRY_MIN' },
    { label: 'SECONDS', value: timeLeft.seconds, code: 'PULSE_SEC' },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
      {/* Background Decorative Frame */}
      <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-space-850/80 to-space-900/90 border border-purple-500/30 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
        
        {/* Subtle glowing ambient lighting */}
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center">
          
          {/* Header Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-space-800 border border-purple-500/30 text-xs font-mono text-cyan-300 mb-4">
            <Zap className="w-3.5 h-3.5 text-aws-blue animate-pulse" />
            <span>T-MINUS CLOUD COUNTDOWN</span>
          </div>

          {/* Heading */}
          <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl text-white tracking-tight mb-3">
            THE CLOUD <span className="gradient-text-aws">LAUNCHES IN</span>
          </h2>

          <p className="text-xs sm:text-sm font-mono text-slate-400 mb-10 max-w-md">
            Synchronized to {eventConfig.dateDisplay}, {eventConfig.timeDisplay} • IGDTUW Campus Stage
          </p>

          {/* Countdown Display or "Has Launched" state */}
          {timeLeft.hasLaunched ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="py-10 px-8 rounded-2xl bg-gradient-to-r from-purple-900/40 via-cyan-900/40 to-pink-900/40 border-2 border-aws-blue text-center shadow-[0_0_40px_rgba(0,240,255,0.3)]"
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <Rocket className="w-10 h-10 text-aws-blue animate-bounce" />
                <span className="font-display font-black text-3xl sm:text-5xl text-white tracking-wider">
                  THE CLOUD HAS LAUNCHED 🚀
                </span>
              </div>
              <p className="text-slate-300 font-mono text-sm max-w-lg mx-auto">
                Welcome to AWS Student Community Day! Sessions and workshops are now active live at IGDTUW.
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-3xl">
              {timeUnits.map((unit, index) => (
                <motion.div
                  key={unit.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="relative flex flex-col items-center justify-center p-5 sm:p-7 rounded-2xl bg-space-950/80 border border-purple-500/30 hover:border-aws-blue transition-all shadow-[0_10px_25px_rgba(0,0,0,0.5)] group overflow-hidden"
                >
                  {/* Subtle top indicator bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-aws-purple to-aws-blue" />

                  {/* Chunky Card Number */}
                  <div className="font-display font-black text-4xl sm:text-6xl text-white tracking-tighter mb-1 tabular-nums group-hover:text-cyan-300 transition-colors">
                    {String(unit.value).padStart(2, '0')}
                  </div>

                  {/* Label */}
                  <div className="font-display font-bold text-xs sm:text-sm text-slate-300 tracking-widest mt-1">
                    {unit.label}
                  </div>

                  {/* Technical Sub-Tag */}
                  <div className="font-mono text-[9px] text-purple-400/80 mt-1 uppercase tracking-wider">
                    {unit.code}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Bottom telemetry detail */}
          <div className="mt-8 flex items-center gap-2 text-xs font-mono text-slate-500">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>Target: 30-OCT-2026 10:00:00 IST // UTC+05:30</span>
          </div>

        </div>
      </div>
    </section>
  );
};
