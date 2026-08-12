import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS_CATALOG, FEATURES_LIST } from '../data/steelData';
import { ShieldCheck, CheckCircle2, PhoneCall, ChevronRight } from 'lucide-react';

function FadeIn({ children, delay = 0, direction = 'up', className = '' }) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
    },
    visible: {
      opacity: 1, y: 0, x: 0,
      transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
    },
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
  const filteredProducts = selectedCategory === 'All'
    ? PRODUCTS_CATALOG
    : PRODUCTS_CATALOG.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-white">
      {/* ── Header ── */}
      <section className="bg-light-pattern py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Products & Service Offerings
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight font-heading">
              PRODUCTS & <span className="text-gradient-gold">SERVICES</span>
            </h1>
            <p className="text-slate-500 text-base leading-relaxed">
              Explore our full range of cement, TMT ISI rods, structural steel, and cool roofing sheets.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Category Tabs ── */}
      <section className="py-8 bg-white border-b border-slate-100 sticky top-[100px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'btn-gold text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Cards ── */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProducts.map((product, i) => (
              <FadeIn key={product.id} delay={i * 0.08}>
                <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:border-amber-300 hover:shadow-xl hover:shadow-amber-50 transition-all group flex flex-col md:flex-row card-hover">
                  <div className="md:w-5/12 relative aspect-[4/3] md:aspect-auto bg-slate-100 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 glass-white text-amber-700 text-[10px] font-bold px-2.5 py-1 rounded-full border border-amber-100 uppercase">
                      {product.category}
                    </span>
                  </div>

                  <div className="md:w-7/12 p-6 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-2 leading-relaxed">{product.description}</p>
                      <div className="mt-4 space-y-2">
                        <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider block">
                          Available Brands & Types:
                        </span>
                        <div className="space-y-1.5">
                          {product.items.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                              <span className="font-medium">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] text-slate-400 font-mono">ISI & ISO Certified</span>
                      <button
                        onClick={() => setActiveTab('contact')}
                        className="px-4 py-2 rounded-xl btn-gold text-xs flex items-center gap-1"
                      >
                        <span>Request Price Quote</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Features ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <FadeIn className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Service Guarantee</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase tracking-tight font-heading">
              Features of Our Service
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
            {FEATURES_LIST.map((feature, idx) => (
              <FadeIn key={idx} delay={(idx % 3) * 0.07}>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3 hover:border-amber-200 hover:shadow-md transition-all card-hover">
                  <div className="w-6 h-6 rounded-lg bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    {idx + 1}
                  </div>
                  <p className="text-xs font-semibold text-slate-700 leading-snug">{feature}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-white font-heading">Need Bulk Steel or Cement Supply?</h3>
              <p className="text-sm font-medium text-slate-300 mt-1">
                Get instant wholesale quotes directly from Trichy Steel Company.
              </p>
            </div>
            <button
              onClick={() => setActiveTab('contact')}
              className="px-6 py-3 rounded-xl btn-gold text-sm shrink-0 flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Contact Sales Team</span>
            </button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
