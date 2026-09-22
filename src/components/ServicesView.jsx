import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS_CATALOG, COMPANY_INFO } from '../data/steelData';
import { CheckCircle2, ChevronRight, MessageSquare, ShieldCheck, ArrowRight, Filter } from 'lucide-react';

export default function ServicesView({ setActiveTab }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Roofing Sheets', 'TMT Steel', 'Structural Steel', 'Pipes & Tubes'];

  const filteredProducts = selectedCategory === 'All'
    ? PRODUCTS_CATALOG
    : PRODUCTS_CATALOG.filter((p) => p.category === selectedCategory);

  const openWhatsApp = (productName) => {
    const text = encodeURIComponent(`Hi Bagavan Steels Mart, I would like to inquire about price and stock for: ${productName}`);
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-white">

      {/* ── Page Header ── */}
      <section className="relative py-20 text-white overflow-hidden bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 space-y-4 relative z-10 text-center">
          <span className="section-label bg-white/10 border-white/20 text-white text-xs">
            Steel & Roofing Inventory
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight font-heading">
            Our <span className="text-gradient-metallic">Product Catalog</span>
          </h1>
          <p className="text-slate-300 text-base max-w-xl mx-auto">
            Jindal Trapezoidal PPGL Sheets, TMT Bars, MS Structural Sections, and Steel Pipes — quality assured, competitively priced.
          </p>
        </div>
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -left-10 -bottom-20 w-60 h-60 rounded-full bg-white/5 pointer-events-none" />
      </section>

      {/* ── Category Filter Tabs ── */}
      <div className="bg-slate-50 border-b border-slate-200 py-4 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 justify-center">
            <span className="flex items-center gap-1.5 text-xs font-bold text-slate-500 mr-2">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'text-white bg-slate-900 shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Products Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="card-flat overflow-hidden flex flex-col md:flex-row group"
            >
              {/* Image */}
              <div className="md:w-5/12 relative overflow-hidden bg-slate-100 aspect-[4/3] md:aspect-auto">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 section-label text-xs">
                  {product.category}
                </span>
                {product.verified && (
                  <span className="absolute bottom-3 left-3 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Verified
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="md:w-7/12 p-6 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mt-4 space-y-2">
                    <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider block">
                      Stock Items & Specifications:
                    </span>
                    {product.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                  <button
                    onClick={() => openWhatsApp(product.name)}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white text-xs font-bold transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    WhatsApp Quote
                  </button>
                  <button
                    onClick={() => setActiveTab('contact')}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-white text-xs font-bold transition-all shadow-sm bg-slate-900 hover:bg-slate-800"
                  >
                    Get Estimate
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl p-8 text-white text-center bg-slate-950 border border-slate-800">
          <h3 className="text-2xl font-black font-heading uppercase">
            Need a Custom Quotation?
          </h3>
          <p className="text-blue-100 text-sm mt-2 mb-6">
            Contact us directly via WhatsApp or fill the quotation form for bulk orders.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => openWhatsApp('Steel & Roofing Materials')}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/30 backdrop-blur-md transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp Us
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className="btn-white text-sm font-bold"
            >
              Request Quotation
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
