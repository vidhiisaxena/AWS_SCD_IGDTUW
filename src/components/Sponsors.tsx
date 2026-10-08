import React, { useMemo, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Server, Users, Terminal, CloudLightning, ArrowUpRight, Cloud, Radio, Send, ChevronLeft, ChevronRight } from 'lucide-react';
import { sponsorsData } from '../data/eventData';
import type { Sponsor } from '../data/eventData';

const getIcon = (iconName: string, size = 'w-6 h-6') => {
  switch (iconName) {
    case 'CloudLightning':
      return <CloudLightning className={`${size} text-amber-400`} />;
    case 'Server':
      return <Server className={`${size} text-cyan-400`} />;
    case 'Users':
      return <Users className={`${size} text-pink-400`} />;
    case 'Radio':
      return <Radio className={`${size} text-emerald-400`} />;
    case 'Terminal':
    default:
      return <Terminal className={`${size} text-purple-400`} />;
  }
};

const enter = (show: boolean, transition: Record<string, unknown>) =>
  show ? transition : { duration: 0.25 };

const StarNode: React.FC<{ sponsor: Sponsor; idx: number }> = ({ sponsor, idx }) => (
  <div className="relative inline-flex items-center justify-center">
    <motion.span
      className="absolute inset-0 rounded-full border border-cyan-300/60"
      animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
      transition={{ duration: 2.4, repeat: Infinity, delay: idx * 0.4, ease: 'easeOut' }}
    />
    <div className={`rounded-full p-[2px] bg-gradient-to-br ${sponsor.tierColor} shadow-[0_0_30px_rgba(34,211,238,0.45)]`}>
      <div className="w-14 h-14 rounded-full bg-space-950 flex items-center justify-center">
        {getIcon(sponsor.iconName, 'w-6 h-6')}
      </div>
    </div>
  </div>
);

const StarCard: React.FC<{ sponsor: Sponsor; idx: number }> = ({ sponsor, idx }) => (
  <motion.div
    whileHover={{ y: -6, scale: 1.02 }}
    className="w-full relative rounded-2xl p-5 bg-gradient-to-b from-space-850/95 to-space-950/95 border border-slate-700/60 hover:border-cyan-400/60 transition-all shadow-[0_12px_35px_rgba(0,0,0,0.6)] backdrop-blur overflow-hidden flex flex-col justify-between"
  >
    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${sponsor.tierColor}`} />
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="inline-block font-mono text-[10px] font-bold uppercase tracking-wider text-slate-300 px-2 py-0.5 rounded bg-space-800 border border-slate-700">
          {sponsor.tier}
        </span>
        <span className="font-mono text-[10px] text-purple-300 font-semibold">
          ★ STAR 0{idx + 1}
        </span>
      </div>
      <h3 className="font-display font-extrabold text-lg text-white mb-2 group-hover:text-cyan-300 transition-colors">
        {sponsor.name}
      </h3>
      <p className="font-sans text-xs text-slate-300 leading-relaxed min-h-[48px]">
        {sponsor.description}
      </p>
    </div>
    <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between font-mono text-[10px] text-slate-400">
      <span>PARTNER NODE</span>
      <span className="text-cyan-400 font-semibold flex items-center gap-0.5">
        VERIFIED <ArrowUpRight className="w-3 h-3" />
      </span>
    </div>
  </motion.div>
);

const SignalBeacon: React.FC<{ show: boolean }> = ({ show }) => (
  <motion.a
    href="mailto:awscloudclubigdtuw@gmail.com"
    initial={{ opacity: 0, y: 30 }}
    animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
    transition={enter(show, { duration: 0.6, ease: 'easeOut' })}
    whileHover={{ scale: 1.015 }}
    className="group relative block w-full max-w-3xl rounded-3xl p-[1.5px] bg-gradient-to-r from-cyan-400/60 via-purple-500/60 to-pink-500/60 shadow-[0_0_50px_rgba(139,92,246,0.25)]"
  >
    <div className="relative rounded-3xl bg-space-950/95 backdrop-blur px-6 py-8 sm:px-10 sm:py-9 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
      <div className="relative shrink-0 w-24 h-24 flex items-center justify-center">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="absolute inset-0 rounded-full border border-cyan-300/50"
            animate={{ scale: [0.4, 1.5], opacity: [0.7, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 1, ease: 'easeOut' }}
          />
        ))}
        <div className="relative z-10 w-14 h-14 rounded-full bg-space-850 border border-cyan-300/50 flex items-center justify-center shadow-[0_0_25px_rgba(34,211,238,0.4)]">
          <Radio className="w-6 h-6 text-cyan-300" />
        </div>
      </div>
      <div className="text-center sm:text-left flex-1">
        <div className="font-mono text-[10px] tracking-[0.3em] text-purple-300 mb-1.5">INCOMING CHANNEL · OPEN</div>
        <h3 className="font-display font-black text-xl sm:text-2xl text-white mb-1.5">Light up the next star</h3>
        <p className="font-sans text-sm text-slate-300">
          Want to support the next generation of cloud architects? Send us a signal and join the constellation.
        </p>
      </div>
      <span className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-space-950 font-mono text-xs font-bold tracking-wider group-hover:gap-3 transition-all">
        SEND TRANSMISSION <Send className="w-3.5 h-3.5" />
      </span>
    </div>
  </motion.a>
);

export const Sponsors: React.FC = () => {
  const n = sponsorsData.length;
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const beaconRef = useRef<HTMLDivElement>(null);
  const beaconShow = useInView(beaconRef, { amount: 0.3 });

  const bgStars = useMemo(() => {
    let seed = 7;
    const rnd = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    return Array.from({ length: 70 }, () => ({
      x: rnd() * 100,
      y: rnd() * 100,
      size: rnd() * 2 + 1,
      delay: rnd() * 4,
      dur: 2 + rnd() * 3,
    }));
  }, []);

  const scrollToSlide = (index: number) => {
    if (sliderRef.current) {
      const cards = sliderRef.current.children;
      if (cards[index]) {
        (cards[index] as HTMLElement).scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest',
        });
        setActiveSlide(index);
      }
    }
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft;
      const width = sliderRef.current.offsetWidth;
      const newIndex = Math.round(scrollLeft / (width * 0.75));
      if (newIndex >= 0 && newIndex < n && newIndex !== activeSlide) {
        setActiveSlide(newIndex);
      }
    }
  };

  return (
    <section id="sponsors" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden scroll-mt-16 sm:scroll-mt-20">
      <div className="absolute inset-0 cosmic-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Twinkling sky */}
      <div className="absolute inset-0 pointer-events-none">
        {bgStars.map((s, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-white"
            style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size }}
            animate={{ opacity: [0.15, 0.9, 0.15] }}
            transition={{ duration: s.dur, repeat: Infinity, delay: s.delay, ease: 'easeInOut' }}
          />
        ))}
        {/* Shooting star */}
        <motion.div
          className="absolute h-px w-28 bg-gradient-to-r from-transparent via-cyan-200 to-white rotate-[22deg]"
          initial={{ left: '-10%', top: '4%', opacity: 0 }}
          animate={{ left: ['-10%', '110%'], top: ['4%', '48%'], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 6, ease: 'easeIn' }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-space-850 border border-purple-500/30 text-purple-300 text-xs font-mono tracking-wider mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 text-aws-blue" />
          <span>ALLIANCE FLEET</span>
        </motion.div>

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
          className="text-slate-300 text-sm sm:text-base font-sans max-w-xl text-center mb-10"
        >
          Visionary partners fueling student innovation, cloud workshops, and community access across Delhi.
        </motion.p>

        {/* ========== SLIDEABLE CONSTELLATION CONTAINER ========== */}
        <div className="w-full max-w-6xl relative flex flex-col items-center">
          
          {/* Navigation Bar / Telemetry */}
          <div className="w-full flex items-center justify-between px-3 sm:px-6 mb-4">
            <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs tracking-[0.2em] text-cyan-300">
              <Cloud className="w-4 h-4 text-cyan-300" />
              <span>CONSTELLATION · CLOUDUS MINOR</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-purple-300">
                STAR 0{activeSlide + 1} / 0{n}
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => scrollToSlide(Math.max(0, activeSlide - 1))}
                  disabled={activeSlide === 0}
                  className="p-2 rounded-xl bg-space-850 border border-slate-700 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-space-800 hover:border-cyan-400 transition-all shadow-md"
                  aria-label="Previous Sponsor Node"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollToSlide(Math.min(n - 1, activeSlide + 1))}
                  disabled={activeSlide === n - 1}
                  className="p-2 rounded-xl bg-space-850 border border-slate-700 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-space-800 hover:border-cyan-400 transition-all shadow-md"
                  aria-label="Next Sponsor Node"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Horizontal Slideable Track */}
          <div className="relative w-full overflow-hidden rounded-3xl py-4 bg-space-950/40 border border-purple-500/20 backdrop-blur-sm">
            {/* Horizontal Constellation Alignment Beam */}
            <div className="absolute top-[46px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none" />

            <div
              ref={sliderRef}
              onScroll={handleScroll}
              className="flex w-full overflow-x-auto snap-x snap-mandatory gap-6 px-6 sm:px-12 py-3 scrollbar-none items-stretch"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {sponsorsData.map((sponsor, idx) => (
                <div
                  key={sponsor.id}
                  className="w-[280px] sm:w-[320px] shrink-0 snap-center flex flex-col items-center group relative z-10"
                >
                  {/* Star Node with Orbiting Rings */}
                  <div className="mb-4 relative">
                    <StarNode sponsor={sponsor} idx={idx} />
                  </div>

                  {/* Luminous Connector Beam to Card */}
                  <div className="w-0.5 h-6 bg-gradient-to-b from-cyan-400/80 to-purple-500/60 mb-2" />

                  {/* Star Card */}
                  <div className="w-full flex-1 flex">
                    <StarCard sponsor={sponsor} idx={idx} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {sponsorsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSlide(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === activeSlide
                    ? 'w-7 h-2 bg-gradient-to-r from-aws-purple to-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.5)]'
                    : 'w-2 h-2 bg-slate-700 hover:bg-slate-500'
                }`}
                aria-label={`Go to constellation star ${idx + 1}`}
              />
            ))}
          </div>

        </div>

        {/* Partner call-to-action */}
        <div ref={beaconRef} className="w-full flex justify-center mt-16">
          <SignalBeacon show={beaconShow} />
        </div>
      </div>
    </section>
  );
};
