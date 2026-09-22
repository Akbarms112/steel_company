import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_ITEMS, STEEL_IMAGES, COMPANY_INFO } from '../data/steelData';
import { X, Filter, MessageSquare, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const easeOut = [0.16, 1, 0.3, 1];


const GRID_SIZES = [
  'gallery-item-lg',    // 1 — big
  'gallery-item-sm',    // 2 — small top-right
  'gallery-item-sm',    // 3 — small bottom-right
  'gallery-item-wide',  // 4 — wide left
  'gallery-item-wide',  // 5 — wide right
  'gallery-item-md',    // 6 — tall left
  'gallery-item-sm',    // 7 — small
  'gallery-item-sm',    // 8 — small
  'gallery-item-sm',    // 9 — small
  'gallery-item-sm',    // 10
  'gallery-item-sm',    // 11
  'gallery-item-sm',    // 12
];

export default function GalleryView({ setActiveTab }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null); // { item, index }

  const categories = ['All', 'Roofing Sheets', 'TMT Steel', 'Structural Steel', 'Pipes & Tubes', 'Warehouse'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const openLightbox = (item, index) => setLightbox({ item, index });
  const closeLightbox = () => setLightbox(null);
  const nextItem = () => {
    const nextIdx = (lightbox.index + 1) % filteredItems.length;
    setLightbox({ item: filteredItems[nextIdx], index: nextIdx });
  };
  const prevItem = () => {
    const prevIdx = (lightbox.index - 1 + filteredItems.length) % filteredItems.length;
    setLightbox({ item: filteredItems[prevIdx], index: prevIdx });
  };

  const openWA = () => {
    const text = encodeURIComponent('Hi Bagavan Steels Mart, I saw your gallery and would like to enquire about products.');
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-white">

      {/* ── Hero Header with real background image ── */}
      <section className="relative h-72 overflow-hidden">
        <img src={STEEL_IMAGES.warehouse} alt="Gallery" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'rgba(9,14,26,0.80)' }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
              Photo Showcase & Inventory
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight font-heading">
              Bagavan Steels{' '}
              <span style={{ background:'linear-gradient(90deg,#93C5FD,#BFDBFE)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                Gallery
              </span>
            </h1>
            <p className="text-white/65 mt-3 text-sm max-w-lg mx-auto">
              Explore our Jindal PPGL roofing sheets, TMT steel rod bundles, structural sections, and warehouse stock.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Filter Tabs ── */}
      <div className="bg-white border-b border-slate-100 shadow-sm sticky top-0 z-10 py-4">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-center gap-2 justify-center">
            <span className="flex items-center gap-1.5 text-xs font-bold text-slate-400 mr-3">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
                style={selectedCategory === cat ? { background: 'linear-gradient(135deg,#0F172A,#1E40AF)' } : {}}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Magazine Grid ── */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="gallery-grid"
            >
              {filteredItems.map((item, i) => {
                const sizeClass = GRID_SIZES[i % GRID_SIZES.length];
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.04, ease: easeOut }}
                    className={`gallery-item ${sizeClass} group relative`}
                    onClick={() => openLightbox(item, i)}
                  >
                    {/* Top-left red corner polygon (Pic 3 style) */}
                    <div className="corner-polygon-red" />

                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="overlay" />
                    <div className="info">
                      <span className="inline-block bg-red-600/90 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded mb-1 font-mono">
                        {item.badge}
                      </span>
                      <h3 className="text-white font-bold text-sm sm:text-base leading-snug">
                        {item.title}
                      </h3>
                      {/* Red accent line */}
                      <div className="w-8 h-0.5 bg-red-500 rounded-full my-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <p className="text-slate-300 text-xs mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.category}</p>
                    </div>
                    {/* Zoom icon on hover */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="w-12 h-12 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-xl">
                        <ZoomIn className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* CTA below grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="mt-14 text-center"
          >
            <p className="text-slate-500 text-sm mb-4">Interested in any of our products?</p>
            <div className="flex flex-wrap justify-center gap-3">
              <button onClick={openWA} className="flex items-center gap-2 px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all">
                <MessageSquare className="w-4 h-4" /> Enquire via WhatsApp
              </button>
              <button onClick={() => setActiveTab('contact')} className="btn-outline-blue">
                Request Quotation <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(9,14,26,0.96)' }}
            onClick={e => { if (e.target === e.currentTarget) closeLightbox(); }}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.35, ease: easeOut }}
              className="relative max-w-5xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <div>
                  <p className="text-blue-400 text-xs font-bold uppercase tracking-wider">{lightbox.item.category}</p>
                  <h3 className="text-white font-bold text-lg mt-0.5">{lightbox.item.title}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 text-xs font-mono">{lightbox.index + 1} / {filteredItems.length}</span>
                  <button onClick={closeLightbox}
                          className="p-2 rounded-xl bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-colors ml-2">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className="relative bg-slate-950 flex items-center justify-center" style={{ minHeight: '55vh' }}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={lightbox.item.id}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.35 }}
                    src={lightbox.item.img}
                    alt={lightbox.item.title}
                    className="max-h-[55vh] w-auto object-contain"
                  />
                </AnimatePresence>

                {/* Prev / Next */}
                <button onClick={prevItem}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 transition-all hover:scale-105">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={nextItem}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 transition-all hover:scale-105">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between px-6 py-4 border-t border-white/10">
                <p className="text-xs text-slate-500">Official Bagavan Steels Mart — Stock Visual</p>
                <div className="flex gap-2">
                  <button onClick={openWA}
                          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/10 transition-all">
                    <MessageSquare className="w-3.5 h-3.5" /> Enquire
                  </button>
                  <button
                    onClick={() => { closeLightbox(); setActiveTab('contact'); }}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-white text-xs font-bold transition-all"
                    style={{ background: 'linear-gradient(135deg,#1E40AF,#2563EB)' }}
                  >
                    Get Quote <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
