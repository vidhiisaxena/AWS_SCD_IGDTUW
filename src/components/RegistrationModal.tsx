import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Ticket, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { eventConfig } from '../data/eventData';
import { trackEvent } from '../analytics';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      try {
        confetti({
          particleCount: 70,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#00F0FF', '#8B5CF6', '#FF007A', '#FF9900'],
        });
      } catch {
        // Safe fallback
      }
    }
  }, [isOpen]);

  const perks = [
    'Complimentary Access to all Keynotes & Tech Tracks',
    'Official AWS Community Day Swag Bag & Stickers',
    'Hands-on Cloud Lab Access & Workshop Resources',
    'Lunch, Snacks & Networking Orbit Access',
    'Verified Digital Certificate of Participation',
    'Eligible for Hackathon & Arcade Leaderboard Prizes',
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.92, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.92, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl rounded-3xl bg-gradient-to-b from-space-850 to-space-950 border-2 border-purple-500/50 p-6 sm:p-8 relative shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-aws-blue via-aws-purple to-aws-pink" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-xl bg-space-900 border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 font-bold mb-3">
              <Ticket className="w-4 h-4 text-aws-blue" />
              <span>STUDENT BOARDING PASS // RSVP OPEN</span>
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight mb-2">
              CLAIM YOUR SEAT
            </h3>

            <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              Join 500+ student engineers and cloud architects at <span className="text-white font-bold">{eventConfig.institution}</span> on <span className="text-cyan-300 font-bold">30th October</span>.
            </p>

            {/* Event Coordinates Summary */}
            <div className="grid grid-cols-2 gap-3 mb-6 font-mono text-xs">
              <div className="p-3 rounded-xl bg-space-900 border border-slate-800">
                <span className="text-slate-500 block mb-0.5">DATE & TIME</span>
                <span className="text-white font-bold">30 Oct • 10:00 AM</span>
              </div>
              <div className="p-3 rounded-xl bg-space-900 border border-slate-800">
                <span className="text-slate-500 block mb-0.5">COST</span>
                <span className="text-emerald-400 font-bold">100% FREE</span>
              </div>
            </div>

            {/* Perks List */}
            <div className="space-y-2 mb-8">
              <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                INCLUDED ATTENDEE PERKS:
              </span>
              {perks.map((perk, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>{perk}</span>
                </div>
              ))}
            </div>

            {/* Submit / Open Registration Form Button */}
            <a
              href={eventConfig.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('rsvp_click', { location: 'registration_modal' })}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-aws-purple via-purple-600 to-aws-pink text-white font-display font-extrabold text-sm sm:text-base tracking-wider shadow-[0_0_30px_rgba(139,92,246,0.45)] hover:shadow-[0_0_40px_rgba(255,0,122,0.6)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
            >
              <span>PROCEED TO RSVP FORM</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <div className="mt-4 text-center">
              <span className="font-mono text-[11px] text-slate-400">
                Seats allocated on first-come-first-serve basis for verified university students.
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
