import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ServicesView from './components/ServicesView';
import TargetCustomersView from './components/TargetCustomersView';
import GalleryView from './components/GalleryView';
import QuoteView from './components/QuoteView';
import ContactView from './components/ContactView';

import { Phone, ArrowUp, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from './data/steelData';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const pageVariants = {
    initial: { opacity: 0, scale: 0.98, y: 15 },
    animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
    exit: { opacity: 0, scale: 0.98, y: -15, transition: { duration: 0.25, ease: 'easeIn' } },
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':      return <HomeView setActiveTab={setActiveTab} />;
      case 'about':     return <AboutView setActiveTab={setActiveTab} />;
      case 'services':  return <ServicesView setActiveTab={setActiveTab} />;
      case 'customers': return <TargetCustomersView setActiveTab={setActiveTab} />;
      case 'gallery':   return <GalleryView setActiveTab={setActiveTab} />;
      case 'quote':     return <QuoteView />;
      case 'contact':   return <ContactView />;
      default:          return <HomeView setActiveTab={setActiveTab} />;
    }
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(`Hi Bagavan Steels, I would like to request a quotation for steel & roofing materials.`);
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-amber-400 selection:text-gray-950">
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
        <button
          onClick={openWhatsApp}
          className="w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 ring-4 ring-emerald-600/30"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-6 h-6" />
        </button>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-13 h-13 rounded-full bg-gray-900 text-white hover:bg-gray-800 flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 border border-gray-800"
          title="Scroll to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>

      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
