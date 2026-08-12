import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO, STEEL_IMAGES, BRANCHES } from '../data/steelData';
import { Award, MapPin, Building, Target, ChevronRight } from 'lucide-react';

function FadeIn({ children, delay = 0, direction = 'up', className = '' }) {
  const variants = {
    hidden: { opacity: 0, y: direction === 'up' ? 36 : direction === 'down' ? -36 : 0, x: direction === 'left' ? 36 : direction === 'right' ? -36 : 0 },
    visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] } },
  };
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={variants} className={className}>
      {children}
    </motion.div>
  );
}

export default function AboutView({ setActiveTab }) {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gray-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src={STEEL_IMAGES.warehouse} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gray-900/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <FadeIn>
            <div className="flex items-center justify-center gap-3 text-gray-400 font-bold text-xs uppercase tracking-widest">
              <div className="w-8 h-0.5 bg-gray-500" />
              Established 2008 • Tamil Nadu
              <div className="w-8 h-0.5 bg-gray-500" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight font-heading mt-3">
              ABOUT <span className="text-gradient-gold">TRICHY STEEL COMPANY</span>
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto mt-3">
              Leading Iron & Cement Merchants committed to quality products, customer satisfaction, and reliable structural supply.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative">
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 font-black uppercase text-[100px] leading-none tracking-tight select-none pointer-events-none z-0"
                  style={{ color: 'transparent', WebkitTextStroke: '1.5px #e5e7eb' }}>TSC</div>
                <div className="relative z-10 flex gap-0">
                  <div className="w-2 bg-gray-900 rounded-l-xl shrink-0" />
                  <div className="rounded-r-2xl overflow-hidden shadow-2xl shadow-gray-200 flex-1 group relative">
                    <img src={STEEL_IMAGES.banner} alt="Trichy Steel Signboard" className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 rounded-r-2xl bg-gray-900/0 group-hover:bg-gray-900/20 transition-all duration-500" />
                  </div>
                </div>
              </div>
            </FadeIn>

            <div className="space-y-6">
              <FadeIn direction="left">
                <div className="flex items-center gap-3 text-gray-500 text-xs font-bold uppercase tracking-widest">
                  <div className="w-8 h-0.5 bg-gray-900" /> OUR STORY
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 uppercase font-heading mt-3 leading-tight">
                  OVER 16 YEARS OF<br /><span className="text-gradient-gold">BUILDING TRUST</span>
                </h2>
              </FadeIn>
              <FadeIn direction="left" delay={0.1}>
                <div className="p-4 rounded-xl bg-gray-50 border-l-4 border-gray-900 shadow-sm">
                  <p className="text-sm text-gray-700 italic leading-relaxed">"{COMPANY_INFO.aboutStory}"</p>
                </div>
              </FadeIn>
              <FadeIn direction="left" delay={0.15}>
                <p className="text-gray-500 text-sm leading-relaxed">
                  TRICHY STEEL COMPANY is one of the most famous Iron and Cement merchants in Tamilnadu particularly around Dharmapuri District. Our success lies on Customer Satisfaction and the Quality of the Products.
                </p>
              </FadeIn>
              <FadeIn direction="left" delay={0.2}>
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 shadow-sm">
                  <p className="text-base font-extrabold text-gray-900 leading-snug">திருச்சி ஸ்டீல் கம்பெனி</p>
                  <p className="text-sm text-gray-600 font-medium mt-0.5">இரும்பு & சிமெண்ட் வியாபாரம் — Iron & Cements Merchants</p>
                </div>
              </FadeIn>
              <FadeIn direction="left" delay={0.25}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Target, title: 'Our Main Goal', desc: 'Customer satisfaction through uncompromised product quality and prompt delivery.' },
                    { icon: Award, title: 'Award Winner', desc: 'Honored by SuryaDev Construction Bars with Appreciation Award for excellence.' },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:border-gray-900 hover:shadow-md transition-all group cursor-default">
                      <Icon className="w-6 h-6 text-gray-400 mb-2 group-hover:text-gray-900 transition-colors" />
                      <h4 className="text-sm font-bold text-gray-900">{title}</h4>
                      <p className="text-xs text-gray-500 mt-1">{desc}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
              <FadeIn direction="left" delay={0.3}>
                <button onClick={() => setActiveTab('services')} className="px-7 py-3.5 rounded-xl btn-primary text-sm flex items-center gap-2">
                  VIEW OUR PRODUCTS <ChevronRight className="w-5 h-5" />
                </button>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-16 bg-gray-50">
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
                    <img src={item.src} alt={item.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                  <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/40 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{item.cat}</span>
                    <p className="text-sm font-bold text-white mt-0.5">{item.label}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Branches */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 text-gray-500 font-bold text-xs uppercase tracking-widest mb-2">
                <div className="w-8 h-0.5 bg-gray-900" /> Widespread Presence
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 uppercase tracking-tight font-heading flex items-center gap-3">
                <Building className="w-7 h-7 text-gray-700" />
                Branches All Around Tamil Nadu
              </h2>
            </div>
            <button onClick={() => setActiveTab('branches')} className="px-5 py-2.5 rounded-xl btn-primary text-xs self-start sm:self-auto">
              View Full Details
            </button>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {BRANCHES.map((branch, idx) => (
              <FadeIn key={idx} delay={idx * 0.04}>
                <div className={`p-4 rounded-xl border text-center transition-all cursor-default group card-hover ${
                  idx === 0 ? 'bg-gray-900 border-gray-700 text-white shadow-lg' : 'bg-white border-gray-100 text-gray-700 hover:border-gray-900 hover:bg-gray-50 hover:shadow-md'
                }`}>
                  <MapPin className={`w-5 h-5 mx-auto mb-2 group-hover:scale-110 transition-transform ${idx === 0 ? 'text-gray-300' : 'text-gray-400'}`} />
                  <h3 className={`text-xs font-extrabold uppercase tracking-wider mb-1 ${idx === 0 ? 'text-white' : 'text-gray-800'}`}>{branch.name}</h3>
                  <span className={`text-[10px] ${idx === 0 ? 'text-gray-400' : 'text-gray-400'}`}>{branch.status}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
