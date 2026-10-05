import { useState } from 'react';
import { motion } from 'framer-motion';
import { RocketLoader } from './components/RocketLoader';
import { WelcomeScreen } from './components/WelcomeScreen';
import { CloudArcade } from './components/CloudArcade';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { About } from './components/About';
import { Speakers } from './components/Speakers';
import { ScheduleTimeline } from './components/ScheduleTimeline';
import { Sponsors } from './components/Sponsors';
import { TeamControlRoom } from './components/TeamControlRoom';
import { Venue } from './components/Venue';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';
import { StarField } from './components/StarField';

type AppStage = 'preloader' | 'welcome' | 'main' | 'arcade';

export function App() {
  const [stage, setStage] = useState<AppStage>('preloader');
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const scrollToCommunity = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-space-900 text-slate-100 flex flex-col font-sans relative selection:bg-aws-purple selection:text-white">
      {/* 1. Cinematic Preloader Experience */}
      {stage === 'preloader' && (
        <RocketLoader onComplete={() => setStage('welcome')} />
      )}

      {/* 2. Welcome Screen with Dual Choice Cards */}
      {stage === 'welcome' && (
        <WelcomeScreen
          onEnterCloud={() => setStage('main')}
          onOpenArcade={() => setStage('arcade')}
        />
      )}

      {/* 3. AWS Cloud Arcade Screen */}
      {stage === 'arcade' && (
        <CloudArcade onBackToSite={() => setStage('main')} />
      )}

      {/* 4. Main Event Experience Website */}
      {stage === 'main' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col min-h-screen relative"
        >
          {/* Ambient Cosmic Starfield Background */}
          <StarField />

          <Navbar
            onOpenArcade={() => setStage('arcade')}
          />

          <main className="flex-1 relative z-10">
            <Hero
              onExploreCommunity={scrollToCommunity}
            />
            <Countdown />
            <About />
            <Speakers />
            <ScheduleTimeline />
            <Sponsors />
            <TeamControlRoom />
            <Venue />
            <FAQ />
          </main>

          <Footer />

          <RegistrationModal
            isOpen={isRegisterOpen}
            onClose={() => setIsRegisterOpen(false)}
          />
        </motion.div>
      )}

      {/* Persistent RSVP Modal if triggered elsewhere */}
      {stage !== 'main' && (
        <RegistrationModal
          isOpen={isRegisterOpen}
          onClose={() => setIsRegisterOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
