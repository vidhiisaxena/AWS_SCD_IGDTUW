import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, ExternalLink, ArrowLeft, Trophy, Sparkles, X, Maximize2 } from 'lucide-react';
import { arcadeGames } from '../data/eventData';

interface CloudArcadeProps {
  onBackToSite: () => void;
}

export const CloudArcade: React.FC<CloudArcadeProps> = ({ onBackToSite }) => {
  const [activeIframeGame, setActiveIframeGame] = useState<{ title: string; url: string } | null>(null);

  return (
    <div className="min-h-screen w-full bg-space-950 text-white relative py-12 px-4 sm:px-6 flex flex-col items-center overflow-x-hidden">
      {/* Background Cosmic Grid */}
      <div className="absolute inset-0 cosmic-grid opacity-35 pointer-events-none" />
      
      {/* Neon Atmospheric Ambient Glows */}
      <div className="absolute top-10 left-1/3 -translate-x-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Header Navigation */}
      <div className="w-full max-w-5xl flex items-center justify-between mb-8 z-10">
        <button
          onClick={onBackToSite}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-space-850/80 border border-slate-700 hover:border-aws-purple text-slate-300 hover:text-white transition-all text-sm font-mono backdrop-blur group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>RETURN TO MAIN SUMMIT</span>
        </button>

        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
          <Trophy className="w-3.5 h-3.5 text-amber-400" />
          <span>IGDTUW CLOUD LEADERBOARD LIVE</span>
        </div>
      </div>

      {/* Heading & Subheading */}
      <div className="text-center max-w-3xl mb-12 z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-mono font-semibold tracking-wider mb-4"
        >
          <Gamepad2 className="w-4 h-4" />
          <span>COMMUNITY ARCADE ZONE</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display font-extrabold text-4xl sm:text-6xl tracking-tight mb-4"
        >
          AWS CLOUD <span className="gradient-text-aws">ARCADE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg sm:text-xl font-medium text-slate-300 max-w-xl mx-auto"
        >
          Learn AWS. Play. Compete.
        </motion.p>
        <p className="text-sm text-slate-400 mt-2 font-mono">
          Play real interactive games built by the AWS community. Master cloud services & beat high scores!
        </p>
      </div>

      {/* Two Large Game Cards */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 z-10 mb-16">
        {arcadeGames.map((game, index) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.15 }}
            whileHover={{ y: -8 }}
            className={`relative rounded-3xl p-8 bg-gradient-to-b from-space-850 to-space-900 border-2 border-slate-700/60 hover:border-aws-purple transition-all duration-300 flex flex-col justify-between shadow-[0_15px_40px_-15px_rgba(0,0,0,0.7)] group overflow-hidden`}
          >
            {/* Top decorative gradient bar */}
            <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${game.id === 'memory-cloud' ? 'from-cyan-400 to-purple-500' : 'from-pink-500 to-amber-400'}`} />

            {/* Corner Badge */}
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-space-700/80 border border-slate-600/50 text-slate-200">
                {game.badge}
              </span>
              <span className="font-mono text-xs text-aws-blue flex items-center gap-1 font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                {game.tagline}
              </span>
            </div>

            {/* Game Icon & Title */}
            <div className="mb-6">
              <div className="text-4xl mb-3">{game.icon}</div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white group-hover:text-cyan-300 transition-colors mb-2">
                {game.title}
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {game.description}
              </p>
              <div className="px-3 py-2 rounded-xl bg-space-950/70 border border-slate-800 text-xs font-mono text-slate-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {game.stats}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              {/* Primary: Open game directly in new tab */}
              <a
                href={game.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-display font-bold text-sm tracking-wide text-white transition-all shadow-lg ${
                  game.id === 'memory-cloud'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-cyan-500/25'
                    : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 shadow-pink-500/25'
                }`}
              >
                <span>{game.buttonText}</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              {/* Secondary: Instant preview modal inside site */}
              <button
                onClick={() => setActiveIframeGame({ title: game.title, url: game.url })}
                className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl font-mono text-xs text-slate-400 hover:text-white border border-slate-800 hover:border-slate-600 bg-space-900/60 transition-colors"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Play in Quick Arcade Window</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Community Challenge Callout */}
      <div className="w-full max-w-3xl rounded-2xl p-6 bg-space-850/60 border border-purple-500/20 backdrop-blur flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left z-10">
        <div>
          <h3 className="font-display font-bold text-lg text-white">Event Day Arcade Tournament</h3>
          <p className="text-xs text-slate-400 mt-1">
            Top scorers in AWS Memory Match and AWS Cloud Crush during 30th October win official AWS swags and prize bundles!
          </p>
        </div>
        <button
          onClick={onBackToSite}
          className="whitespace-nowrap px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)]"
        >
          EXPLORE SUMMIT SESSIONS →
        </button>
      </div>

      {/* Embedded In-Page Iframe Arcade Window Modal */}
      <AnimatePresence>
        {activeIframeGame && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center p-3 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-5xl h-[88vh] bg-space-900 border-2 border-aws-purple rounded-2xl flex flex-col overflow-hidden shadow-2xl"
            >
              {/* Modal Bar */}
              <div className="flex items-center justify-between px-5 py-3 bg-space-950 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <Gamepad2 className="w-5 h-5 text-aws-blue" />
                  <span className="font-display font-bold text-white text-sm sm:text-base">
                    {activeIframeGame.title}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={activeIframeGame.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-space-800"
                    title="Open in new window"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setActiveIframeGame(null)}
                    className="p-1.5 text-slate-400 hover:text-red-400 rounded-lg hover:bg-space-800"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Iframe */}
              <div className="flex-1 w-full bg-slate-950 relative">
                <iframe
                  src={activeIframeGame.url}
                  title={activeIframeGame.title}
                  className="w-full h-full border-0"
                  allow="fullscreen; autoplay"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
