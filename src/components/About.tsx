import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Hammer, TrendingUp, Sparkles } from 'lucide-react';


export const About: React.FC = () => {
  const pillars = [
    {
      title: 'LEARN',
      subtitle: 'Workshops • Talks • Knowledge',
      description: 'Hands-on architectural masterclasses and guided deep-dives from industry cloud engineers and community ambassadors.',
      icon: BookOpen,
      color: 'from-cyan-500 to-blue-600',
      borderColor: 'border-cyan-500/40 hover:border-cyan-400',
      badge: 'PILLAR 01',
      stats: '10+ Tech Sessions',
    },
    {
      title: 'BUILD',
      subtitle: 'Projects • Experiments • Hackathons',
      description: 'Turn theoretical knowledge into production-ready serverless apps, AI pipelines, and distributed event-driven systems.',
      icon: Hammer,
      color: 'from-purple-500 to-pink-600',
      borderColor: 'border-purple-500/40 hover:border-purple-400',
      badge: 'PILLAR 02',
      stats: 'Live Deployment Labs',
    },
    {
      title: 'GROW',
      subtitle: 'Community • Networking • Opportunities',
      description: 'Connect with peers across universities, engage with cloud recruiters, and unlock internships, swags, and certifications.',
      icon: TrendingUp,
      color: 'from-amber-500 to-orange-600',
      borderColor: 'border-amber-500/40 hover:border-amber-400',
      badge: 'PILLAR 03',
      stats: 'Endless Horizons',
    },
  ];

  const stats = [
    { label: 'ATTENDEES & BUILDERS', value: '250+', subtext: 'Students across colleges' },
    { label: 'TECHNICAL SESSIONS', value: '7+', subtext: 'Deep-dive keynotes & labs' },
    { label: 'CLOUD MENTORS', value: '9+', subtext: 'Industry leaders & heroes' },
    { label: 'STUDENT INITIATIVE', value: '100%', subtext: 'Organized by IGDTUW club' },
  ];

  return (
    <section id="about" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden scroll-mt-16 sm:scroll-mt-20">
      {/* Background Subtle Technical Grid */}
      <div className="absolute inset-0 cosmic-grid opacity-25 pointer-events-none" />

      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-space-850 border border-purple-500/30 text-purple-300 text-xs font-mono tracking-wider mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 text-aws-blue" />
          <span>ABOUT THE SUMMIT</span>
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-center text-white tracking-tight mb-8"
        >
          ABOUT <span className="gradient-text-aws">AWS STUDENT COMMUNITY DAY</span>
        </motion.h2>

        {/* Event Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="max-w-4xl text-center space-y-5 mb-12 sm:mb-16"
        >
          <p className="font-sans text-slate-200 text-base sm:text-lg leading-relaxed font-medium">
            AWS Student Community Day at IGDTUW is a student-led initiative designed to bring together aspiring developers, cloud enthusiasts, innovators, and technology learners under one platform.
          </p>

          <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed">
            Our goal is to create an inclusive space where students can learn from industry professionals, build alongside fellow innovators, exchange ideas, and turn curiosity into action. From discovering new technologies to showcasing ideas and connecting with the wider AWS community, AWS Student Community Day is a platform to take the next step in your technology journey.
          </p>
        </motion.div>

        {/* 3 Core Interactive Pillar Cards: LEARN, BUILD, CONNECT (Omitted on mobile view only) */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 w-full max-w-6xl mb-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className={`relative rounded-3xl p-8 bg-gradient-to-b from-space-850 to-space-900 border-2 ${pillar.borderColor} transition-all duration-300 flex flex-col justify-between shadow-[0_12px_35px_rgba(0,0,0,0.5)] group`}
              >
                <div>
                  {/* Top Header Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-space-800 border border-slate-700 text-slate-300">
                      {pillar.badge}
                    </span>
                    <span className="font-mono text-xs text-slate-400 font-semibold">
                      {pillar.stats}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.color} p-0.5 mb-6 group-hover:scale-110 transition-transform`}>
                    <div className="w-full h-full bg-space-950 rounded-[14px] flex items-center justify-center text-white">
                      <Icon className="w-7 h-7 text-cyan-300" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display font-extrabold text-3xl text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {pillar.title}
                  </h3>
                  <p className="font-mono text-xs text-purple-300 font-medium mb-4">
                    {pillar.subtitle}
                  </p>

                  {/* Description */}
                  <p className="font-sans text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Live Event Statistics Grid */}
        <div className="w-full max-w-5xl grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-space-850/60 border border-slate-800 backdrop-blur text-center flex flex-col justify-center items-center hover:border-purple-500/40 transition-colors"
            >
              <div className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight gradient-text-aws mb-1">
                {stat.value}
              </div>
              <div className="font-display font-bold text-xs sm:text-sm text-slate-200 uppercase tracking-wide">
                {stat.label}
              </div>
              <div className="font-mono text-[11px] text-slate-400 mt-1">
                {stat.subtext}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
