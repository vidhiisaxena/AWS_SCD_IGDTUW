import React from 'react';
import { motion } from 'framer-motion';
import { Radio, Sparkles } from 'lucide-react';
import { LinkedinIcon, TwitterIcon, GithubIcon } from './BrandIcons';
import { type Speaker, speakersData } from '../data/eventData';

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

  const getTagColor = () => {
    switch (speaker.accentColor) {
      case 'blue':
        return 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30';
      case 'pink':
        return 'bg-pink-500/15 text-pink-300 border-pink-500/30';
      case 'orange':
        return 'bg-amber-500/15 text-amber-300 border-amber-500/30';
      case 'purple':
      default:
        return 'bg-purple-500/15 text-purple-300 border-purple-500/30';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12 }}
      whileHover={{ y: -8, rotateZ: index % 2 === 0 ? 0.6 : -0.6 }}
      className={`group relative rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-space-850 to-space-950 border-2 ${getGradientBorder()} transition-all duration-300 flex flex-col justify-between overflow-hidden flex-shrink-0 w-[300px] sm:w-[320px] md:w-auto shadow-2xl`}
    >
      <div className="absolute inset-0 cosmic-grid-fine opacity-20 pointer-events-none" />

      <div>
        <div className="flex items-center justify-between mb-4 relative z-10">
          <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-slate-300 tracking-wider">
            <Radio className="w-3.5 h-3.5 text-aws-blue animate-pulse" />
            <span>AWS COMMUNITY DAY</span>
          </div>
          <span className="font-mono text-xs font-black text-cyan-400 px-2 py-0.5 rounded bg-space-800 border border-slate-700">
            {speaker.badgeNumber}
          </span>
        </div>

        <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-5 border border-slate-700/60 group-hover:border-cyan-400/50 transition-colors">
          <img
            src={speaker.avatar}
            alt={speaker.name}
            className="w-full h-full object-cover object-center filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/20 to-transparent" />

          <div className="absolute bottom-3 left-3 z-10">
            <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider border ${getTagColor()}`}>
              {speaker.tag}
            </span>
          </div>

          <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
            {speaker.socials?.linkedin && (
              <a
                href={speaker.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-lg bg-space-900/80 border border-slate-700 hover:border-aws-blue flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
            )}
            {speaker.socials?.twitter && (
              <a
                href={speaker.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-lg bg-space-900/80 border border-slate-700 hover:border-aws-blue flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-3.5 h-3.5" />
              </a>
            )}
            {speaker.socials?.github && (
              <a
                href={speaker.socials.github}
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-lg bg-space-900/80 border border-slate-700 hover:border-aws-blue flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-display font-extrabold text-2xl text-white group-hover:text-cyan-300 transition-colors tracking-tight">
            {speaker.name}
          </h3>
          <p className="font-mono text-xs text-purple-300 font-semibold mt-0.5">
            {speaker.role}
          </p>
          <p className="font-mono text-[11px] text-slate-400">
            {speaker.company}
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-space-900/90 border border-slate-800 group-hover:border-slate-700 transition-colors mb-4">
          <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400 block mb-1">
            KEYNOTE PAYLOAD //
          </span>
          <p className="font-sans font-semibold text-xs sm:text-sm text-slate-200 leading-snug line-clamp-2">
            "{speaker.sessionTitle}"
          </p>
        </div>
      </div>

      {speaker.metrics && (
        <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-800/80 text-[10px] font-mono">
          {speaker.metrics.map((m) => (
            <div key={m.label} className="bg-space-950/60 px-2 py-1 rounded border border-slate-800 flex justify-between">
              <span className="text-slate-400">{m.label}</span>
              <span className="text-cyan-300 font-bold">{m.value}</span>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export const Speakers: React.FC = () => {
  return (
    <section id="speakers" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
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
          <span>FLIGHT CREW</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-center text-white tracking-tight mb-4"
        >
          MEET THE <span className="gradient-text-aws">CLOUD CREW</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-300 text-sm sm:text-base font-sans max-w-2xl text-center mb-14"
        >
          Collectible AWS Community Day flight cards. Visionary engineers, architects, and student builders guiding our expedition into the cloud.
        </motion.p>

        <div className="w-full flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto pb-6 md:pb-0 pt-2 px-2 scrollbar-none snap-x snap-mandatory">
          {speakersData.map((speaker, index) => (
            <div key={speaker.id} className="snap-center">
              <SpeakerCard speaker={speaker} index={index} />
            </div>
          ))}
        </div>

        <div className="md:hidden mt-4 text-xs font-mono text-slate-400 flex items-center gap-1.5">
          <span>← Swipe horizontally to explore crew →</span>
        </div>
      </div>
    </section>
  );
};
