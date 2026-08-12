import React from 'react';
import { motion } from 'framer-motion';
import { BRANCHES } from '../data/steelData';
import { MapPin, Phone, Building2, ChevronRight } from 'lucide-react';

function FadeIn({ children, delay = 0, className = '' }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] }} className={className}>
      {children}
    </motion.div>
  );
}

export default function BranchesView({ setActiveTab }) {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <FadeIn>
            <div className="flex items-center justify-center gap-3 text-gray-400 text-xs font-bold uppercase tracking-widest">
              <div className="w-8 h-0.5 bg-gray-600" /> Distribution Network <div className="w-8 h-0.5 bg-gray-600" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight font-heading mt-3">
              OUR BRANCHES IN <span className="text-gradient-gold">TAMIL NADU</span>
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto mt-2">
              We have branches established all around Tamil Nadu ensuring fast, reliable delivery of steel rods, cement, and construction materials.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Branches Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BRANCHES.map((branch, idx) => (
              <FadeIn key={idx} delay={(idx % 3) * 0.07}>
                <div className={`rounded-2xl p-6 border transition-all space-y-4 shadow-sm card-hover ${
                  idx === 0
                    ? 'bg-gray-900 border-gray-700 shadow-gray-300'
                    : 'bg-white border-gray-100 hover:border-gray-900 hover:shadow-lg'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-full border ${
                      idx === 0 ? 'bg-white/10 text-gray-200 border-white/20' : 'bg-gray-100 text-gray-600 border-gray-200'
                    }`}>{branch.status}</span>
                    <span className={`text-xs font-mono ${idx === 0 ? 'text-gray-500' : 'text-gray-400'}`}>Branch #{idx + 1}</span>
                  </div>

                  <div>
                    <h3 className={`text-xl font-bold flex items-center gap-2 ${idx === 0 ? 'text-white' : 'text-gray-900'}`}>
                      <Building2 className={`w-5 h-5 shrink-0 ${idx === 0 ? 'text-gray-300' : 'text-gray-500'}`} />
                      {branch.name}
                    </h3>
                    <p className={`text-xs mt-2 flex items-start gap-1.5 leading-relaxed ${idx === 0 ? 'text-gray-400' : 'text-gray-500'}`}>
                      <MapPin className={`w-4 h-4 shrink-0 mt-0.5 ${idx === 0 ? 'text-gray-500' : 'text-gray-400'}`} />
                      {branch.address}
                    </p>
                  </div>

                  <div className={`pt-3 border-t flex items-center justify-between text-xs ${idx === 0 ? 'border-white/10' : 'border-gray-100'}`}>
                    <span className={`flex items-center gap-1.5 font-bold ${idx === 0 ? 'text-gray-300' : 'text-gray-700'}`}>
                      <Phone className={`w-3.5 h-3.5 ${idx === 0 ? 'text-gray-500' : 'text-gray-400'}`} />
                      {branch.phone}
                    </span>
                    <button
                      onClick={() => setActiveTab('contact')}
                      className={`font-bold flex items-center gap-1 hover:underline ${idx === 0 ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                    >
                      Contact <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
