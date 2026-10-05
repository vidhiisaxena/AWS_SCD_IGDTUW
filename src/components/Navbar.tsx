import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Gamepad2, ArrowRight } from 'lucide-react';
import { eventConfig } from '../data/eventData';

interface NavbarProps {
  onOpenArcade: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenArcade }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Speakers', href: '#speakers' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Sponsors', href: '#sponsors' },
    { label: 'Venue', href: '#venue' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-space-950/85 backdrop-blur-md border-b border-purple-500/25 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo / Title */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="flex items-center gap-3 group"
        >
          {/* Logo badge with stylized cloud/rocket */}
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-aws-purple to-aws-blue p-0.5 shadow-[0_0_15px_rgba(139,92,246,0.5)] group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-space-950 rounded-[10px] flex items-center justify-center">
              <span className="text-lg">☁️</span>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-display font-black text-sm sm:text-base tracking-wider text-white group-hover:text-cyan-300 transition-colors">
              {eventConfig.name}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 hover:text-white hover:bg-space-800/80 transition-all tracking-wide"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action Buttons (Arcade + Register) */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Cloud Arcade Button */}
          <button
            onClick={onOpenArcade}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 hover:border-amber-400 transition-all shadow-[0_0_12px_rgba(255,153,0,0.15)]"
          >
            <Gamepad2 className="w-3.5 h-3.5 text-amber-400" />
            <span>PLAY ARCADE</span>
          </button>

          {/* Primary CTA: Register Now */}
          <button
            onClick={()=> (window.location.href = "https://konfhub.com/aws-student-community-day-2026-new-delhi")}
            className="relative group overflow-hidden px-4 py-2 rounded-xl bg-gradient-to-r from-aws-purple to-aws-pink text-white font-display font-bold text-xs tracking-wider shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_25px_rgba(255,0,122,0.5)] transition-all flex items-center gap-1.5"
          >
            <span>REGISTER NOW</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenArcade}
            className="sm:hidden p-2 rounded-lg text-amber-300 bg-amber-500/10 border border-amber-500/30"
            aria-label="Arcade"
          >
            <Gamepad2 className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-space-850 border border-slate-700 text-slate-200 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-aws-pink" /> : <Menu className="w-6 h-6 text-aws-blue" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-space-950/95 border-b border-purple-500/30 backdrop-blur-xl overflow-hidden px-4 pt-3 pb-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-mono text-slate-200 hover:text-cyan-300 hover:bg-space-850 transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-slate-600 font-mono">0{navLinks.indexOf(link) + 1}</span>
                </button>
              ))}

              <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenArcade();
                  }}
                  className="w-full py-2.5 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-300 font-mono text-xs font-bold flex items-center justify-center gap-2"
                >
                  <Gamepad2 className="w-4 h-4" />
                  <span>PLAY CLOUD ARCADE</span>
                </button>

                <button
                  onClick={() => {
                    window.location.href = "https://konfhub.com/aws-student-community-day-2026-new-delhi";
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-aws-purple to-aws-pink text-white font-display font-bold text-xs tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                >
                  <span>REGISTER NOW</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
