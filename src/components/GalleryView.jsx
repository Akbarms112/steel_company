import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_ITEMS, STEEL_IMAGES } from '../data/steelData';
import { X, ZoomIn, Eye, Sparkles } from 'lucide-react';

function FadeIn({ children, delay = 0, className = '' }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] }} className={className}>
      {children}
    </motion.div>
  );
}

export default function GalleryView({ setActiveTab }) {
  const [selectedCategory, setSelectedCategory] = useState('All Photos');
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = ['All Photos', 'TMT Steel Rods', 'Cement Bags', 'Structural Steel', 'Roofing Sheets', 'Signboard & Store', 'Warehouse & Inventory'];
  const filteredItems = selectedCategory === 'All Photos' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gray-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={STEEL_IMAGES.rods} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gray-900/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <FadeIn>
            <div className="flex items-center justify-center gap-3 text-gray-400 font-bold text-xs uppercase tracking-widest">
              <div className="w-8 h-0.5 bg-gray-600" />
              <Sparkles className="w-4 h-4 text-gray-400" />
              Photo Showcase & Inventory
              <div className="w-8 h-0.5 bg-gray-600" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight font-heading mt-3">
              TRICHY STEEL <span className="text-gradient-gold">GALLERY</span>
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto mt-2">
              Explore stockyards, TMT steel rod bundles, premium cement bags, and storefront images.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-[98px] z-30 bg-white border-b border-gray-100 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-gray-900 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredItems.map((item, i) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.92, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  key={item.id}
                  onClick={() => setLightboxImage(item)}
                  className="bg-white border border-gray-100 rounded-2xl overflow-hidden group cursor-pointer hover:border-gray-900 hover:shadow-xl shadow-sm transition-all"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-95 group-hover:brightness-100" />
                    {/* Default overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                    {/* Hover gray overlay */}
                    <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/35 transition-all duration-500" />
                    {/* Badge */}
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-gray-700 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full border border-gray-200 shadow-sm">{item.badge}</span>
                    {/* Zoom */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="w-12 h-12 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform border border-gray-200">
                        <ZoomIn className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-white flex items-center justify-between group-hover:bg-gray-50 transition-colors">
                    <div>
                      <h3 className="text-sm font-bold text-gray-800 group-hover:text-gray-900 transition-colors">{item.title}</h3>
                      <p className="text-[11px] text-gray-400 mt-0.5">{item.category}</p>
                    </div>
                    <Eye className="w-4 h-4 text-gray-300 group-hover:text-gray-700 transition-colors shrink-0" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/90 backdrop-blur-sm"
            onClick={(e) => { if (e.target === e.currentTarget) setLightboxImage(null); }}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.88, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-gray-100 px-2 mb-3">
                <div>
                  <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block">{lightboxImage.category}</span>
                  <h3 className="text-lg font-bold text-gray-900">{lightboxImage.title}</h3>
                </div>
                <button onClick={() => setLightboxImage(null)} className="p-2 rounded-xl bg-gray-100 text-gray-500 hover:text-gray-900 hover:bg-gray-200 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="rounded-xl overflow-hidden bg-gray-50 max-h-[65vh] flex items-center justify-center border border-gray-100 group relative">
                <img src={lightboxImage.img} alt={lightboxImage.title} className="max-h-[65vh] w-auto object-contain rounded-lg" />
                <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/10 transition-all duration-500 rounded-xl" />
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 px-2 mt-3 border-t border-gray-100">
                <p className="text-xs text-gray-400">Official Trichy Steel Company Stock Visual</p>
                <button onClick={() => { setLightboxImage(null); setActiveTab('contact'); }} className="px-5 py-2 rounded-xl btn-primary text-xs">
                  Inquire About This Product
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
