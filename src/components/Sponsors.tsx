import React, { useMemo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Server, Users, Terminal, CloudLightning, ArrowUpRight, Cloud, Radio, Send } from 'lucide-react';
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
    case 'Terminal':
    default:
      return <Terminal className={`${size} text-purple-400`} />;
  }
};

// Star positions (in % of the constellation box): evenly spread, alternating high/low
const getPos = (i: number, total: number) => ({
  x: ((i + 0.5) / total) * 100,
  y: i % 2 === 0 ? 28 : 72,
});

// Replays animations every time the element scrolls into view.
// When hiding, it resets quickly (no delay) so the next entrance starts clean.
const enter = (show: boolean, transition: Record<string, unknown>) =>
  show ? transition : { duration: 0.25 };

const StarNode: React.FC<{ sponsor: Sponsor; idx: number; small?: boolean }> = ({ sponsor, idx, small }) => (
  <div className="relative inline-flex items-center justify-center">
    <motion.span
      className="absolute inset-0 rounded-full border border-cyan-300/60"
      animate={{ scale: [1, 1.9], opacity: [0.6, 0] }}
      transition={{ duration: 2.4, repeat: Infinity, delay: idx * 0.4, ease: 'easeOut' }}
    />
    <div className={`rounded-full p-[2px] bg-gradient-to-br ${sponsor.tierColor} shadow-[0_0_30px_rgba(34,211,238,0.45)]`}>
      <div className={`${small ? 'w-10 h-10' : 'w-16 h-16'} rounded-full bg-space-950 flex items-center justify-center`}>
        {getIcon(sponsor.iconName, small ? 'w-5 h-5' : 'w-7 h-7')}
      </div>
    </div>
  </div>
);

const StarCard: React.FC<{ sponsor: Sponsor; idx: number }> = ({ sponsor, idx }) => (
  <motion.div
    whileHover={{ y: -6, scale: 1.03 }}
    className="relative rounded-2xl p-4 bg-gradient-to-b from-space-850/90 to-space-950/90 border border-slate-700/60 hover:border-aws-purple transition-colors shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur overflow-hidden"
  >
    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${sponsor.tierColor}`} />
    <span className="inline-block font-mono text-[10px] font-bold uppercase tracking-wider text-slate-300 px-2 py-0.5 rounded bg-space-800 border border-slate-700 mb-2">
      {sponsor.tier}
    </span>
    <h3 className="font-display font-extrabold text-lg text-white mb-1.5">{sponsor.name}</h3>
    <p className="font-sans text-xs text-slate-300 leading-relaxed">{sponsor.description}</p>
    <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between font-mono text-[10px] text-slate-400">
      <span>★ STAR {String(idx + 1).padStart(2, '0')}</span>
      <span className="text-cyan-400 font-semibold flex items-center gap-0.5">
        VERIFIED <ArrowUpRight className="w-3 h-3" />
      </span>
    </div>
  </motion.div>
);

// Separate "Partner with us" call-to-action: a signal beacon
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
      {/* Radar antenna */}
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

      {/* Message */}
      <div className="text-center sm:text-left flex-1">
        <div className="font-mono text-[10px] tracking-[0.3em] text-purple-300 mb-1.5">INCOMING CHANNEL · OPEN</div>
        <h3 className="font-display font-black text-xl sm:text-2xl text-white mb-1.5">Light up the next star</h3>
        <p className="font-sans text-sm text-slate-300">
          Want to support the next generation of cloud architects? Send us a signal and join the constellation.
        </p>
      </div>

      {/* Button */}
      <span className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-space-950 font-mono text-xs font-bold tracking-wider group-hover:gap-3 transition-all">
        SEND TRANSMISSION <Send className="w-3.5 h-3.5" />
      </span>
    </div>
  </motion.a>
);

export const Sponsors: React.FC = () => {
  const n = sponsorsData.length;

  // One "is this block on screen?" flag per layout. Flips on every enter/leave,
  // so the animation sequence replays each time you come back.
  const desktopRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const beaconRef = useRef<HTMLDivElement>(null);
  const desktopShow = useInView(desktopRef, { amount: 0.3 });
  const mobileShow = useInView(mobileRef, { amount: 0.1 });
  const beaconShow = useInView(beaconRef, { amount: 0.4 });

  // Deterministic twinkling background stars
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

  const points = sponsorsData.map((_, i) => getPos(i, n));
  const polyline = points.map((p) => `${p.x},${p.y}`).join(' ');

  return (
    <section id="sponsors" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
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
          className="text-slate-300 text-sm sm:text-base font-sans max-w-xl text-center mb-14"
        >
          Visionary partners fueling student innovation, cloud workshops, and community access across Delhi.
        </motion.p>

        {/* ========== DESKTOP: the constellation (replays on every visit) ========== */}
        <div ref={desktopRef} className="hidden lg:block relative w-full max-w-6xl h-[640px]">
          {/* Map labels */}
          <div className="absolute top-0 left-0 flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-slate-500">
            <Cloud className="w-3.5 h-3.5 text-cyan-300" />
            CONSTELLATION · CLOUDUS MINOR
          </div>
          <div className="absolute bottom-0 right-0 font-mono text-[10px] tracking-[0.25em] text-slate-500">
            ap-south-1 · DELHI
          </div>

          {/* Faint AWS cloud outline made of star dots */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
          >
            <motion.path
              d="M25 70 C10 70 8 50 24 48 C24 30 48 22 56 38 C66 28 86 36 82 54 C95 56 95 70 80 70 Z"
              fill="none"
              stroke="rgba(148,163,184,0.18)"
              strokeWidth={0.4}
              strokeDasharray="1 1.6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: desktopShow ? 1 : 0 }}
              transition={enter(desktopShow, { duration: 3, ease: 'easeInOut' })}
            />
            {[
              [25, 70],
              [24, 48],
              [56, 38],
              [82, 54],
              [80, 70],
              [52, 70],
            ].map(([cx, cy], i) => (
              <motion.circle
                key={i}
                cx={cx}
                cy={cy}
                r={0.6}
                fill="#a5f3fc"
                animate={{ opacity: [0.2, 0.9, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              />
            ))}
          </svg>

          {/* Constellation lines between sponsors */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <motion.polyline
              points={polyline}
              fill="none"
              stroke="rgba(34,211,238,0.25)"
              strokeWidth={6}
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: desktopShow ? 1 : 0 }}
              transition={enter(desktopShow, { duration: 2.2, ease: 'easeInOut' })}
              style={{ filter: 'blur(4px)' }}
            />
            <motion.polyline
              points={polyline}
              fill="none"
              stroke="rgba(165,243,252,0.85)"
              strokeWidth={1.5}
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: desktopShow ? 1 : 0 }}
              transition={enter(desktopShow, { duration: 2.2, ease: 'easeInOut' })}
            />
          </svg>

          {/* Sponsor stars + cards */}
          {sponsorsData.map((sponsor, idx) => {
            const { x, y } = getPos(idx, n);
            const cardBelow = idx % 2 === 0;
            const offset = cardBelow ? -12 : 12;
            return (
              <React.Fragment key={sponsor.id}>
                <motion.div
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                  style={{ left: `${x}%`, top: `${y}%` }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={desktopShow ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={enter(desktopShow, { delay: 0.3 + idx * 0.45, type: 'spring', stiffness: 140 })}
                >
                  <StarNode sponsor={sponsor} idx={idx} />
                </motion.div>

                <motion.div
                  className="absolute -translate-x-1/2 w-[210px] z-10"
                  style={
                    cardBelow
                      ? { left: `${x}%`, top: `calc(${y}% + 52px)` }
                      : { left: `${x}%`, bottom: `calc(${100 - y}% + 52px)` }
                  }
                  initial={{ opacity: 0, y: offset }}
                  animate={desktopShow ? { opacity: 1, y: 0 } : { opacity: 0, y: offset }}
                  transition={enter(desktopShow, { delay: 0.5 + idx * 0.45, duration: 0.5 })}
                >
                  <StarCard sponsor={sponsor} idx={idx} />
                </motion.div>
              </React.Fragment>
            );
          })}
        </div>

        {/* ========== MOBILE / TABLET: vertical star trail (replays too) ========== */}
        <div ref={mobileRef} className="lg:hidden relative w-full max-w-md pl-12">
          <div className="absolute left-5 top-4 bottom-4 w-px bg-gradient-to-b from-cyan-300/80 via-purple-500/40 to-transparent" />

          {sponsorsData.map((sponsor, idx) => (
            <motion.div
              key={sponsor.id}
              initial={{ opacity: 0, x: 30 }}
              animate={mobileShow ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={enter(mobileShow, { delay: idx * 0.15, duration: 0.5 })}
              className="relative mb-7 last:mb-0"
            >
              <div className="absolute -left-12 top-4">
                <StarNode sponsor={sponsor} idx={idx} small />
              </div>
              <StarCard sponsor={sponsor} idx={idx} />
            </motion.div>
          ))}
        </div>

        {/* Partner call-to-action, separate from the sponsors */}
        <div ref={beaconRef} className="w-full flex justify-center mt-16">
          <SignalBeacon show={beaconShow} />
        </div>
      </div>
    </section>
  );
};
