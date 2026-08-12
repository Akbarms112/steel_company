import React from 'react';
import { motion } from 'framer-motion';
import { BRANCHES } from '../data/steelData';
import { MapPin, Phone, Building2, ChevronRight } from 'lucide-react';

function FadeIn({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function BranchesView({ setActiveTab }) {
  return (
    <div className="bg-white">
      {/* ── Header ── */}
      <section className="bg-light-pattern py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Distribution Network
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight font-heading">
              OUR BRANCHES IN <span className="text-gradient-gold">TAMIL NADU</span>
            </h1>
            <p className="text-slate-500 text-base leading-relaxed">
              We have branches established all around Tamil Nadu to ensure fast, reliable delivery of steel rods, cement, and construction materials.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Branches Grid ── */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BRANCHES.map((branch, idx) => (
              <FadeIn key={idx} delay={(idx % 3) * 0.07}>
                <div className={`rounded-2xl p-6 border transition-all space-y-4 shadow-sm card-hover ${
                  idx === 0
                    ? 'bg-gradient-to-br from-amber-500 to-amber-600 border-amber-300 shadow-amber-200'
                    : 'bg-white border-slate-100 hover:border-amber-300 hover:shadow-md'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-full border ${
                      idx === 0
                        ? 'bg-white/20 text-white border-white/30'
                        : 'bg-amber-50 text-amber-600 border-amber-200'
                    }`}>
                      {branch.status}
                    </span>
                    <span className={`text-xs font-mono ${idx === 0 ? 'text-amber-100' : 'text-slate-400'}`}>
                      Branch #{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className={`text-xl font-bold flex items-center gap-2 ${idx === 0 ? 'text-white' : 'text-slate-900'}`}>
                      <Building2 className={`w-5 h-5 shrink-0 ${idx === 0 ? 'text-white' : 'text-amber-500'}`} />
                      {branch.name}
                    </h3>
                    <p className={`text-xs mt-2 flex items-start gap-1.5 leading-relaxed ${idx === 0 ? 'text-amber-100' : 'text-slate-500'}`}>
                      <MapPin className={`w-4 h-4 shrink-0 mt-0.5 ${idx === 0 ? 'text-white' : 'text-amber-400'}`} />
                      <span>{branch.address}</span>
                    </p>
                  </div>

                  <div className={`pt-3 border-t flex items-center justify-between text-xs ${idx === 0 ? 'border-white/20' : 'border-slate-100'}`}>
                    <span className={`flex items-center gap-1.5 font-bold ${idx === 0 ? 'text-white' : 'text-slate-800'}`}>
                      <Phone className={`w-3.5 h-3.5 ${idx === 0 ? 'text-amber-100' : 'text-amber-500'}`} />
                      {branch.phone}
                    </span>
                    <button
                      onClick={() => setActiveTab('contact')}
                      className={`font-bold hover:underline flex items-center gap-1 ${idx === 0 ? 'text-white' : 'text-amber-600 hover:text-amber-700'}`}
                    >
                      <span>Contact</span>
                      <ChevronRight className="w-3.5 h-3.5" />
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
