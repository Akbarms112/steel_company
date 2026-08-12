import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ServicesView from './components/ServicesView';
import GalleryView from './components/GalleryView';
import BranchesView from './components/BranchesView';
import ContactView from './components/ContactView';

import { Phone, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from './data/steelData';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const pageVariants = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
    exit: { opacity: 0, y: -12, transition: { duration: 0.25, ease: 'easeIn' } },
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':     return <HomeView setActiveTab={setActiveTab} />;
      case 'about':    return <AboutView setActiveTab={setActiveTab} />;
      case 'services': return <ServicesView setActiveTab={setActiveTab} />;
      case 'gallery':  return <GalleryView setActiveTab={setActiveTab} />;
      case 'branches': return <BranchesView setActiveTab={setActiveTab} />;
      case 'contact':  return <ContactView />;
      default:         return <HomeView setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-amber-400 selection:text-white">
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
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="w-12 h-12 rounded-full btn-gold flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 ring-2 ring-amber-300"
          title="Call Trichy Steel Company"
        >
          <Phone className="w-5 h-5 text-white" />
        </a>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 rounded-full bg-white text-slate-700 hover:text-amber-600 border border-slate-200 hover:border-amber-400 flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
          title="Scroll to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>

      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
