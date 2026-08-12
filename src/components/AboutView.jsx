import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO, STEEL_IMAGES, BRANCHES } from '../data/steelData';
import { Award, MapPin, Building, Target, ChevronRight, Leaf } from 'lucide-react';

function FadeIn({ children, delay = 0, direction = 'up', className = '' }) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 36 : direction === 'down' ? -36 : 0,
      x: direction === 'left' ? 36 : direction === 'right' ? -36 : 0,
    },
    visible: {
      opacity: 1, y: 0, x: 0,
      transition: { duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={variants} className={className}>
      {children}
    </motion.div>
  );
}

/* Image with colored hover overlay */
function HoverImage({ src, alt, watermark, side = 'left' }) {
  return (
    <div className="relative">
      {/* Watermark text */}
      <div
        className={`absolute ${side === 'left' ? '-left-6' : '-right-6'} top-1/2 -translate-y-1/2 font-black uppercase text-[100px] leading-none tracking-tight select-none pointer-events-none z-0`}
        style={{ color: 'transparent', WebkitTextStroke: '1.5px #e2e8f0' }}
      >
        {watermark}
      </div>
      <div className={`relative z-10 flex gap-0 ${side === 'right' ? 'flex-row-reverse' : ''}`}>
        <div className="w-2 bg-amber-500 rounded-l-xl shrink-0" />
        <div className="rounded-r-2xl overflow-hidden shadow-2xl shadow-slate-200 flex-1 group relative">
          <img
            src={src}
            alt={alt}
            className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/20 transition-all duration-500 rounded-r-2xl" />
        </div>
      </div>
    </div>
  );
}

export default function AboutView({ setActiveTab }) {
  return (
    <div className="bg-white">

      {/* ── Page Header (styled strip) ── */}
      <section className="bg-slate-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src={STEEL_IMAGES.warehouse} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <FadeIn>
            <div className="flex items-center justify-center gap-3 text-amber-400 font-bold text-xs uppercase tracking-widest">
              <div className="w-8 h-0.5 bg-amber-400" />
              Established 2008 • Tamil Nadu
              <div className="w-8 h-0.5 bg-amber-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight font-heading mt-3">
              ABOUT <span className="text-amber-400">TRICHY STEEL COMPANY</span>
            </h1>
            <p className="text-slate-300 text-sm leading-relaxed max-w-2xl mx-auto mt-3">
              Leading Iron & Cement Merchants committed to quality products, customer satisfaction, and reliable structural supply.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Main Story Section (Core Fitness style split) ── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Image */}
            <FadeIn direction="right">
              <HoverImage
                src={STEEL_IMAGES.banner}
                alt="Trichy Steel Signboard"
                watermark="TSC"
                side="left"
              />
            </FadeIn>

            {/* Right Story */}
            <div className="space-y-6">
              <FadeIn direction="left">
                <div className="flex items-center gap-3 text-amber-600 text-xs font-bold uppercase tracking-widest">
                  <div className="w-8 h-0.5 bg-amber-500" />
                  OUR STORY
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase font-heading mt-3 leading-tight">
                  OVER 16 YEARS OF<br />
                  <span className="text-gradient-gold">BUILDING TRUST</span>
                </h2>
              </FadeIn>

              <FadeIn direction="left" delay={0.1}>
                <div className="p-4 rounded-xl bg-amber-50 border-l-4 border-amber-500 shadow-sm">
                  <p className="text-sm text-slate-700 italic leading-relaxed">"{COMPANY_INFO.aboutStory}"</p>
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={0.15}>
                <p className="text-slate-500 text-sm leading-relaxed">
                  TRICHY STEEL COMPANY is one of the most famous Iron and Cement merchants in Tamilnadu particularly around Dharmapuri District. Our success lies on Customer Satisfaction and the Quality of the Products. We are the authorized dealers of Madras Cement Ltd, SuryaDev Construction Bars Company and Agni Steels Pvt Ltd.
                </p>
              </FadeIn>

              <FadeIn direction="left" delay={0.2}>
                {/* Tamil Signboard text */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 shadow-sm">
                  <p className="text-base font-extrabold text-slate-900 leading-snug">
                    திருச்சி ஸ்டீல் கம்பெனி
                  </p>
                  <p className="text-sm text-slate-600 font-medium mt-0.5">
                    இரும்பு & சிமெண்ட் வியாபாரம் — Trichy Steel Company, Iron & Cements Merchants
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={0.25}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:border-amber-300 hover:shadow-md hover:bg-amber-50/40 transition-all group cursor-default">
                    <Target className="w-6 h-6 text-amber-500 mb-2 group-hover:scale-110 transition-transform" />
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-amber-700 transition-colors">Our Main Goal</h4>
                    <p className="text-xs text-slate-500 mt-1">Customer satisfaction through uncompromised product quality and prompt delivery.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:border-amber-300 hover:shadow-md hover:bg-amber-50/40 transition-all group cursor-default">
                    <Award className="w-6 h-6 text-amber-500 mb-2 group-hover:scale-110 transition-transform" />
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-amber-700 transition-colors">Award Winner</h4>
                    <p className="text-xs text-slate-500 mt-1">Honored by SuryaDev Construction Bars with Appreciation Award for excellence.</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={0.3}>
                <button
                  onClick={() => setActiveTab('services')}
                  className="px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-bold text-sm shadow-lg shadow-amber-200 transition-all flex items-center gap-2 hover:translate-y-[-2px]"
                >
                  VIEW OUR PRODUCTS
                  <ChevronRight className="w-5 h-5" />
                </button>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2 More Images Split ── */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: STEEL_IMAGES.warehouse, label: 'Steel Depot & Stockyard', cat: 'Warehouse' },
              { src: STEEL_IMAGES.rods, label: 'ISI Certified TMT Rods', cat: 'TMT ISI Rods' },
              { src: STEEL_IMAGES.pipes, label: 'Iron Pipes & Plates Inventory', cat: 'Structural Steel' },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group relative rounded-2xl overflow-hidden shadow-md cursor-default card-hover">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.label}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  {/* Default overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                  {/* Hover amber overlay */}
                  <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/25 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider">{item.cat}</span>
                    <p className="text-sm font-bold text-white mt-0.5">{item.label}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Branches Network ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 text-amber-600 font-bold text-xs uppercase tracking-widest mb-2">
                <div className="w-8 h-0.5 bg-amber-500" />
                Widespread Presence
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase tracking-tight font-heading flex items-center gap-3">
                <Building className="w-7 h-7 text-amber-500" />
                Branches All Around Tamil Nadu
              </h2>
            </div>
            <button
              onClick={() => setActiveTab('branches')}
              className="px-5 py-2.5 rounded-xl bg-amber-500 text-white font-bold text-xs shadow-md hover:bg-amber-400 transition-colors self-start sm:self-auto"
            >
              View Full Details
            </button>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {BRANCHES.map((branch, idx) => (
              <FadeIn key={idx} delay={idx * 0.05}>
                <div className={`p-4 rounded-xl border text-center transition-all cursor-default group card-hover ${
                  idx === 0
                    ? 'bg-amber-500 border-amber-400 text-white shadow-lg shadow-amber-200'
                    : 'bg-white border-slate-100 text-slate-700 hover:border-amber-300 hover:bg-amber-50/40 hover:shadow-md'
                }`}>
                  <MapPin className={`w-5 h-5 mx-auto mb-2 group-hover:scale-110 transition-transform ${idx === 0 ? 'text-white' : 'text-amber-400'}`} />
                  <h3 className={`text-xs font-extrabold uppercase tracking-wider mb-1 ${idx === 0 ? 'text-white' : 'text-slate-800'}`}>
                    {branch.name}
                  </h3>
                  <span className={`text-[10px] ${idx === 0 ? 'text-amber-100' : 'text-slate-400'}`}>{branch.status}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
