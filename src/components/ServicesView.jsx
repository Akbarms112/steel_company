import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS_CATALOG, FEATURES_LIST } from '../data/steelData';
import { CheckCircle2, PhoneCall, ChevronRight } from 'lucide-react';

function FadeIn({ children, delay = 0, direction = 'up', className = '' }) {
  const variants = {
    hidden: { opacity: 0, y: direction === 'up' ? 30 : 0, x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0 },
    visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] } },
  };
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={variants} className={className}>
      {children}
    </motion.div>
  );
}

export default function ServicesView({ setActiveTab }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Cement', 'Iron & TMT', 'Structural Steel', 'Roofing'];
  const filteredProducts = selectedCategory === 'All' ? PRODUCTS_CATALOG : PRODUCTS_CATALOG.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gray-900 py-16 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <FadeIn>
            <div className="flex items-center justify-center gap-3 text-gray-400 text-xs font-bold uppercase tracking-widest">
              <div className="w-8 h-0.5 bg-gray-600" /> Products & Services <div className="w-8 h-0.5 bg-gray-600" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight font-heading mt-3">
              PRODUCTS & <span className="text-gradient-gold">SERVICES</span>
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto mt-2">
              Full range of cement, TMT ISI rods, structural steel, and cool roofing sheets.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-[98px] z-30 bg-white border-b border-gray-100 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
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

      {/* Product Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProducts.map((product, i) => (
              <FadeIn key={product.id} delay={i * 0.08}>
                <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:border-gray-900 hover:shadow-xl transition-all group flex flex-col md:flex-row card-hover">
                  <div className="md:w-5/12 relative aspect-[4/3] md:aspect-auto bg-gray-100 overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/20 transition-all duration-500" />
                    <span className="absolute top-3 left-3 glass-white text-gray-700 text-[10px] font-bold px-2.5 py-1 rounded-full border border-gray-200 uppercase">{product.category}</span>
                  </div>
                  <div className="md:w-7/12 p-6 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">{product.name}</h3>
                      <p className="text-xs text-gray-500 mt-2 leading-relaxed">{product.description}</p>
                      <div className="mt-4 space-y-2">
                        <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">Available Brands & Types:</span>
                        <div className="space-y-1.5">
                          {product.items.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                              <span className="font-medium">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-[11px] text-gray-400 font-mono">ISI & ISO Certified</span>
                      <button onClick={() => setActiveTab('contact')} className="px-4 py-2 rounded-xl btn-primary text-xs flex items-center gap-1">
                        Request Price Quote <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <FadeIn className="text-center max-w-2xl mx-auto space-y-2">
            <div className="flex items-center justify-center gap-3 text-gray-500 font-bold text-xs uppercase tracking-widest">
              <div className="w-8 h-0.5 bg-gray-900" /> Service Guarantee <div className="w-8 h-0.5 bg-gray-900" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 uppercase tracking-tight font-heading">Features of Our Service</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
            {FEATURES_LIST.map((feature, idx) => (
              <FadeIn key={idx} delay={(idx % 3) * 0.07}>
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-start gap-3 hover:border-gray-900 hover:shadow-md transition-all card-hover group cursor-default">
                  <div className="w-6 h-6 rounded-lg bg-gray-100 border border-gray-200 text-gray-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold group-hover:bg-gray-900 group-hover:text-white group-hover:border-gray-900 transition-all">{idx + 1}</div>
                  <p className="text-xs font-semibold text-gray-700 leading-snug group-hover:text-gray-900 transition-colors">{feature}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-white font-heading">Need Bulk Steel or Cement Supply?</h3>
              <p className="text-sm font-medium text-gray-400 mt-1">Get instant wholesale quotes directly from Trichy Steel Company.</p>
            </div>
            <button onClick={() => setActiveTab('contact')} className="px-6 py-3 rounded-xl bg-white text-gray-900 font-bold text-sm shrink-0 flex items-center gap-2 hover:bg-gray-100 hover:translate-y-[-2px] transition-all shadow-xl">
              <PhoneCall className="w-4 h-4 text-gray-600" /> Contact Sales Team
            </button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
