import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import Lenis from 'lenis';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ServicesView from './components/ServicesView';
import TargetCustomersView from './components/TargetCustomersView';
import GalleryView from './components/GalleryView';
import ContactView from './components/ContactView';
import BranchesView from './components/BranchesView';

import { ArrowUp, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from './data/steelData';
import InitialLoader from './components/InitialLoader';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  // Control scrolling while initial loader is active
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
      if (window.lenis) window.lenis.stop();
    } else {
      document.body.style.overflow = '';
      if (window.lenis) window.lenis.start();
    }
  }, [isLoading]);

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setShowScrollTop(latest > 250);
    });
  }, [scrollY]);

  // Initialize Lenis for luxurious slow smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4, // Slower, buttery smooth deceleration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.85, // Slower, controlled scroll speed
      touchMultiplier: 1.5,
      infinite: false,
    });

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const pageVariants = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] } },
    exit: { opacity: 0, y: -12, transition: { duration: 0.2, ease: 'easeIn' } },
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':      return <HomeView setActiveTab={setActiveTab} />;
      case 'about':     return <AboutView setActiveTab={setActiveTab} />;
      case 'services':  return <ServicesView setActiveTab={setActiveTab} />;
      case 'customers': return <TargetCustomersView setActiveTab={setActiveTab} />;
      case 'gallery':   return <GalleryView setActiveTab={setActiveTab} />;
      case 'contact':   return <ContactView />;
      case 'quote':     return <ContactView />;
      case 'branches':  return <BranchesView setActiveTab={setActiveTab} />;
      default:          return <HomeView setActiveTab={setActiveTab} />;
    }
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent('Hi Bagavan Steels Mart, I would like to request a quotation for steel & roofing materials.');
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex flex-col font-sans">
      {/* ── Initial 3-Second Loading Animation ── */}
      <AnimatePresence>
        {isLoading && (
          <InitialLoader duration={3000} onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* ── Dynamic Top Scroll Progress Bar ── */}
      <motion.div
        style={{ scaleX, transformOrigin: '0%' }}
        className="fixed top-0 left-0 right-0 h-[3.5px] bg-gradient-to-r from-blue-600 via-sky-400 to-blue-500 z-[100] shadow-[0_0_12px_rgba(56,189,248,0.85)] pointer-events-none"
      />

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-center">
        <button
          onClick={openWhatsApp}
          className="w-12 h-12 rounded-full text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 bg-emerald-600 hover:bg-emerald-500 shadow-emerald-900/30"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-6 h-6" />
        </button>

        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.7, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.7, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={scrollToTop}
              className="relative w-12 h-12 rounded-full bg-slate-900 text-white hover:text-sky-400 flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 border border-slate-700 group"
              title="Scroll to Top"
            >
              {/* Circular SVG scroll track & indicator */}
              <svg className="absolute inset-0 w-full h-full -rotate-90 p-0.5" viewBox="0 0 44 44">
                <circle
                  cx="22"
                  cy="22"
                  r="19"
                  fill="none"
                  stroke="rgba(255,255,255,0.15)"
                  strokeWidth="2.5"
                />
                <motion.circle
                  cx="22"
                  cy="22"
                  r="19"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="2.5"
                  strokeDasharray="119.38"
                  style={{
                    pathLength: scrollYProgress,
                  }}
                />
              </svg>
              <ArrowUp className="w-4 h-4 relative z-10 group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
