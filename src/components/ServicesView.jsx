import React, { useState } from 'react';
import { PRODUCTS_CATALOG } from '../data/steelData';
import { ThreeDTiltCard, ThreeDScrollReveal } from './ThreeDCard';
import { CheckCircle2, PhoneCall, ChevronRight, MessageSquare, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/steelData';

export default function ServicesView({ setActiveTab }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Roofing Sheets', 'TMT Steel', 'Structural Steel', 'Pipes & Tubes'];

  const filteredProducts = selectedCategory === 'All'
    ? PRODUCTS_CATALOG
    : PRODUCTS_CATALOG.filter((p) => p.category === selectedCategory);

  const openWhatsApp = (productName) => {
    const text = encodeURIComponent(`Hi Bagavan Steels, I would like to inquire about price and stock for: ${productName}`);
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-white py-12">
      {/* Header */}
      <section className="bg-gray-900 py-14 text-white text-center relative overflow-hidden mb-12">
        <div className="max-w-4xl mx-auto px-4 space-y-3 relative z-10">
          <span className="text-xs font-extrabold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
            Steel & Roofing Inventory
          </span>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight font-heading">
            BAGAVAN STEELS <span className="text-amber-400">PRODUCTS</span>
          </h1>
          <p className="text-gray-300 text-sm max-w-xl mx-auto">
            Jindal Trapezoidal PPGL Sheets, TMT Bars, MS Structural Sections (Angles, Channels, Beams), and Steel Pipes.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
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

      {/* Products 3D Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProducts.map((product, idx) => (
            <ThreeDScrollReveal key={product.id} delay={idx * 0.08}>
              <ThreeDTiltCard depth={35}>
                <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-amber-400 transition-all flex flex-col md:flex-row group h-full">
                  <div className="md:w-5/12 relative aspect-[4/3] md:aspect-auto bg-gray-100 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <span className="absolute top-3 left-3 bg-gray-950/80 backdrop-blur-md text-amber-400 text-[10px] font-extrabold px-2.5 py-1 rounded-full border border-gray-800 uppercase">
                      {product.category}
                    </span>
                  </div>

                  <div className="md:w-7/12 p-6 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-lg font-extrabold text-gray-900 group-hover:text-amber-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                        {product.description}
                      </p>

                      <div className="mt-4 space-y-2">
                        <span className="text-[11px] font-extrabold text-amber-600 uppercase tracking-wider block">
                          Stock Items & Specifications:
                        </span>
                        <div className="space-y-1.5">
                          {product.items.map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                              <span className="font-semibold">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2">
                      <button
                        onClick={() => openWhatsApp(product.name)}
                        className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1 shadow-sm"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>WhatsApp Quote</span>
                      </button>

                      <button
                        onClick={() => setActiveTab('quote')}
                        className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-gray-950 font-extrabold text-xs flex items-center gap-1 shadow-sm"
                      >
                        <span>Get Estimate</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </ThreeDTiltCard>
            </ThreeDScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
