import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, ExternalLink, Compass } from 'lucide-react';
import { eventConfig } from '../data/eventData';
import { trackEvent } from '../analytics';

export const Venue: React.FC = () => {
  return (
    <section id="venue" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden scroll-mt-16 sm:scroll-mt-20">
      {/* Background Subtle Technical Grid */}
      <div className="absolute inset-0 cosmic-grid opacity-25 pointer-events-none" />

      {/* Atmospheric Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-space-850 border border-purple-500/30 text-purple-300 text-xs font-mono tracking-wider mb-4"
        >
          <Compass className="w-3.5 h-3.5 text-aws-blue animate-spin" style={{ animationDuration: '8s' }} />
          <span>ORBITAL COORDINATES</span>
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-center text-white tracking-tight mb-4"
        >
          NEXT <span className="gradient-text-aws">DESTINATION</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-300 text-sm sm:text-base font-sans max-w-xl text-center mb-14"
        >
          Prepare your arrival. The fleet convenes at one of India's premier women's engineering institutions.
        </motion.p>

        {/* Venue Futuristic Card & Route Map Container */}
        <div className="w-full max-w-5xl rounded-3xl bg-gradient-to-b from-space-850 to-space-950 border border-purple-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Venue Details */}
          <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800">
            <div>
              {/* Target Location Badge */}
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-cyan-400 mb-4">
                <MapPin className="w-4 h-4 text-aws-pink animate-bounce" />
                <span>GROUND ZERO // CAMPUS HUB</span>
              </div>

              {/* Main Institution Title */}
              <h3 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight mb-2">
                IGDTUW
              </h3>
              <h4 className="font-sans font-bold text-base sm:text-lg text-purple-200 mb-4">
                {eventConfig.institution}
              </h4>

              <p className="font-sans text-sm text-slate-300 leading-relaxed mb-6">
                {eventConfig.venueAddress}
              </p>

              {/* Date & Time Highlights */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-space-900/80 border border-slate-800 text-xs font-mono text-slate-200">
                  <Calendar className="w-4 h-4 text-aws-blue" />
                  <span className="font-bold text-white">30 October</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-400">All Day Tech Summit</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-space-900/80 border border-slate-800 text-xs font-mono text-slate-200">
                  <Clock className="w-4 h-4 text-aws-purple" />
                  <span className="font-bold text-white">10:00 AM onwards</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-400">Main Auditorium</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={eventConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('venue_click', { location: 'google_maps' })}
              className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-aws-purple to-aws-blue text-white font-display font-extrabold text-sm tracking-wider shadow-[0_0_25px_rgba(139,92,246,0.35)] hover:shadow-[0_0_35px_rgba(0,240,255,0.45)] hover:scale-[1.02] transition-all"
            >
              <span>OPEN MAP</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Right Column: Stylized Radar / Map Route Visual */}
          <div className="lg:col-span-6 relative bg-space-950 p-8 sm:p-12 flex flex-col items-center justify-center min-h-[340px] overflow-hidden">
            {/* Fine Map Grid Lines */}
            <div className="absolute inset-0 cosmic-grid-fine opacity-40" />

            {/* Concentric Radar Rings */}
            <div className="absolute w-72 h-72 rounded-full border border-purple-500/20" />
            <div className="absolute w-48 h-48 rounded-full border border-cyan-500/30 border-dashed animate-spin" style={{ animationDuration: '30s' }} />
            <div className="absolute w-24 h-24 rounded-full border border-pink-500/40" />

            {/* Glowing route lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400" fill="none">
              <path
                d="M 50 350 Q 150 250 200 200 T 350 80"
                stroke="url(#routeGrad)"
                strokeWidth="2.5"
                strokeDasharray="6 6"
              />
              <defs>
                <linearGradient id="routeGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="50%" stopColor="#00F0FF" />
                  <stop offset="100%" stopColor="#FF007A" />
                </linearGradient>
              </defs>
            </svg>

            {/* Glowing Target Beacon */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-aws-pink/20 border-2 border-aws-pink flex items-center justify-center animate-pulse">
                  <MapPin className="w-8 h-8 text-aws-pink" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-cyan-400 animate-ping" />
              </div>

              <div className="mt-4 px-3 py-1.5 rounded-xl bg-space-900/90 border border-purple-500/40 text-center backdrop-blur">
                <div className="font-mono text-xs font-bold text-white">IGDTUW AUDITORIUM</div>
                <div className="font-mono text-[10px] text-cyan-300">28.6652° N, 77.2324° E</div>
              </div>
            </div>

            {/* Metro & Transit Hint */}
            <div className="absolute bottom-4 left-6 right-6 text-center font-mono text-[11px] text-slate-400">
              Nearest Metro: Kashmere Gate (Interchange Station - Red, Yellow & Violet Lines)
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
