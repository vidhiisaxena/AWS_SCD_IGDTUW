import React from 'react';
import { motion } from 'framer-motion';
import { Radio, Sparkles } from 'lucide-react';
import { LinkedinIcon } from './BrandIcons';
import { type Speaker, speakersData } from '../data/eventData';
import { trackEvent } from '../analytics';


interface SpeakerCardProps {
  speaker: Speaker;
  index: number;
}

export const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker, index }) => {
  const getGradientBorder = () => {
    switch (speaker.accentColor) {
      case 'blue':
        return 'hover:border-cyan-400 border-cyan-500/30 group-hover:shadow-[0_0_35px_rgba(0,240,255,0.3)]';
      case 'pink':
        return 'hover:border-pink-400 border-pink-500/30 group-hover:shadow-[0_0_35px_rgba(255,0,122,0.3)]';
      case 'orange':
        return 'hover:border-amber-400 border-amber-500/30 group-hover:shadow-[0_0_35px_rgba(255,153,0,0.3)]';
      case 'purple':
      default:
        return 'hover:border-purple-400 border-purple-500/30 group-hover:shadow-[0_0_35px_rgba(139,92,246,0.3)]';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className={`group relative rounded-3xl p-6 bg-gradient-to-b from-space-850 to-space-950 border-2 ${getGradientBorder()} transition-all duration-300 flex flex-col justify-between overflow-hidden w-full shadow-2xl`}
    >
      <div className="absolute inset-0 cosmic-grid-fine opacity-20 pointer-events-none" />

      <div>
        {/* Top Header Bar */}
        <div className="flex items-center justify-between mb-4 relative z-10">
          <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-slate-300 tracking-wider">
            <Radio className="w-3.5 h-3.5 text-aws-blue animate-pulse" />
            <span>AWS SPEAKER</span>
          </div>
          {speaker.socials?.linkedin && (
            <a
              href={speaker.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent('speaker_click', { speaker: speaker.name, platform: 'linkedin' })}
              className="p-1.5 rounded-lg bg-space-900 border border-slate-700/80 hover:border-cyan-400 text-slate-300 hover:text-white transition-colors"
              aria-label={`${speaker.name} LinkedIn`}
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-cyan-400" />
            </a>
          )}
        </div>

        {/* Speaker Photo - Clean full color, responsive aspect ratio, properly framed */}
        <div className="relative w-full aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden mb-5 border border-slate-700/60 group-hover:border-cyan-400/50 transition-colors bg-space-900">
          <img
            src={speaker.avatar}
            alt={speaker.name}
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-space-950/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Speaker Name, Role & Company */}
        <div className="mb-4 text-center">
          <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white group-hover:text-cyan-300 transition-colors tracking-tight">
            {speaker.name}
          </h3>
          <p className="font-mono text-xs text-purple-300 font-semibold mt-1">
            {speaker.role}
          </p>
          <p className="font-mono text-[11px] text-slate-400 mt-0.5">
            {speaker.company}
          </p>
        </div>

        {/* Session Block */}
        <div className="p-3.5 rounded-xl bg-space-900/90 border border-slate-800 group-hover:border-slate-700 transition-colors text-center">
          <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400 block mb-1">
            SESSION //
          </span>
          <p className="font-sans font-semibold text-xs sm:text-sm text-slate-200 leading-snug">
            {speaker.sessionTitle.toUpperCase() === 'TBA' ? (
              <span className="text-amber-400 font-mono tracking-wider font-bold">TBA</span>
            ) : (
              `"${speaker.sessionTitle}"`
            )}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const Speakers: React.FC = () => {
  return (
    <section id="speakers" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden scroll-mt-16 sm:scroll-mt-20">
      <div className="absolute inset-0 cosmic-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-space-850 border border-purple-500/30 text-purple-300 text-xs font-mono tracking-wider mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 text-aws-blue" />
          <span>KEYNOTE & TECHNICAL SPEAKERS</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-center text-white tracking-tight mb-4"
        >
          FEATURED <span className="gradient-text-aws">SPEAKERS</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-300 text-sm sm:text-base font-sans max-w-2xl text-center mb-14"
        >
          Industry leaders, AWS Heroes, Solutions Architects, and community builders bringing real-world insights, architecture patterns, and hands-on guidance.
        </motion.p>

        {/* Centered Speakers Grid */}
        <div className="w-full flex flex-wrap justify-center gap-6 pt-2 px-2">
          {speakersData.map((speaker, index) => (
            <div key={speaker.id} className="w-full max-w-[300px] sm:w-[290px] md:w-[300px]">
              <SpeakerCard speaker={speaker} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
