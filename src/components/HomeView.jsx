import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  COMPANY_INFO, STEEL_IMAGES, VERIFIED_DEALERS, PRODUCTS_CATALOG, TRUST_ELEMENTS, TARGET_CUSTOMERS
} from '../data/steelData';
import { ThreeDTiltCard, ThreeDScrollReveal } from './ThreeDCard';
import {
  ShieldCheck, Award, ChevronRight, CheckCircle2, PhoneCall,
  Building2, Star, Package, MessageSquare, MapPin, Tag, Truck, Check
} from 'lucide-react';

/* ─── Hero Slider ─── */
const heroSlides = [
  {
    img: STEEL_IMAGES.banner,
    tag: 'Verified Jindal Supplier',
    title: 'QUALITY STEEL & ROOFING',
    highlight: 'FOR YOUR CONSTRUCTION NEEDS',
    sub: 'Reliable steel and roofing materials for homes, businesses, civil contractors and industrial projects in Dharmapuri.',
  },
  {
    img: STEEL_IMAGES.hero,
    tag: 'Trapezoidal PPGL Sheets',
    title: 'JINDAL TRAPEZOIDAL',
    highlight: 'PPGL ROOFING SHEETS',
    sub: 'ISO certified weather-resistant colour coated PPGL roofing sheets for sheds, warehouses and residential homes.',
  },
  {
    img: STEEL_IMAGES.tmtRods,
    tag: 'High Strength TMT Rods',
    title: 'CERTIFIED TMT &',
    highlight: 'REINFORCEMENT STEEL',
    sub: 'Earthquake-resistant high yield strength TMT bars and mild steel rods for home foundations and civil structures.',
  },
  {
    img: STEEL_IMAGES.structuralMain,
    tag: 'Structural Steel Depots',
    title: 'MS ANGLES, CHANNELS,',
    highlight: 'BEAMS & MS PIPES',
    sub: 'Equal angles, C-channels, flat bars, MS plates, square and round pipes for custom fabrication.',
  },
];

function HeroSlider({ setActiveTab }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const goTo = (idx) => {
    setCurrent(idx);
  };

  const slide = heroSlides[current];

  const openWhatsApp = () => {
    const text = encodeURIComponent(`Hi Bagavan Steels, I would like to request a quotation for steel & roofing materials.`);
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section className="relative h-[620px] lg:h-[700px] overflow-hidden bg-gray-950 select-none">
      {/* Sliding Background */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <img src={slide.img} alt={slide.tag} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/92 via-gray-900/80 to-gray-950/50" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current + '-content'}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: 0.15 }}
                className="space-y-5"
              >
                {/* Tag pill */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/50 bg-amber-400/10 backdrop-blur-sm text-amber-300 text-xs font-bold uppercase tracking-widest">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  {slide.tag}
                </div>

                {/* Headline */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight font-heading text-white">
                  {slide.title}
                  <br />
                  <span className="text-gradient-gold">{slide.highlight}</span>
                </h1>

                <p className="text-base sm:text-lg text-gray-200 max-w-xl leading-relaxed">{slide.sub}</p>

                {/* Primary CTAs (From Section 6 of PDF: Get a Quote / WhatsApp Us / Call Now) */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => setActiveTab('quote')}
                    className="px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-gray-950 font-extrabold text-sm shadow-xl shadow-amber-500/20 transition-all flex items-center gap-2 hover:scale-105"
                  >
                    <span>Get a Quote</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={openWhatsApp}
                    className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl transition-all flex items-center gap-2 hover:scale-105"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Us</span>
                  </button>

                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold text-sm border border-white/30 transition-all flex items-center gap-2"
                  >
                    <PhoneCall className="w-4 h-4 text-amber-400" />
                    <span>Call Now</span>
                  </a>
                </div>

                {/* Metrics */}
                <div className="flex flex-wrap gap-8 pt-4 border-t border-white/10">
                  <div>
                    <p className="text-3xl font-black text-white font-heading">4.7 / 5 ⭐</p>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-0.5">Verified Public Rating</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-amber-400 font-heading">Jindal PPGL</p>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-0.5">Trapezoidal Roofing</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-white font-heading">Dharmapuri</p>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-0.5">Local Ready Stock</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-500 rounded-full ${i === current ? 'w-8 h-2.5 bg-amber-400' : 'w-2.5 h-2.5 bg-white/35 hover:bg-white/60'}`}
          />
        ))}
      </div>
    </section>
  );
}

export default function HomeView({ setActiveTab }) {
  const openWhatsApp = () => {
    const text = encodeURIComponent(`Hi Bagavan Steels, I would like to request a quotation for steel & roofing materials.`);
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-white space-y-0">
      {/* Hero */}
      <HeroSlider setActiveTab={setActiveTab} />

      {/* ── 3D Perspective Section: About & Verified Products ── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left 3D Tilt Card Image Showcase */}
            <ThreeDScrollReveal direction="right">
              <ThreeDTiltCard depth={45}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 group">
                  <img
                    src={STEEL_IMAGES.banner}
                    alt="Jindal Trapezoidal PPGL Sheet"
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 glass-white p-4 rounded-2xl border border-gray-100 shadow-xl">
                    <span className="text-[10px] font-extrabold text-amber-600 uppercase tracking-widest block mb-1">
                      Verified Stock Listing
                    </span>
                    <h3 className="text-base font-extrabold text-gray-900">
                      Jindal Trapezoidal PPGL Roofing Sheets
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Pulikarai / Dharmapuri, Tamil Nadu • 4.7 ⭐ Rating
                    </p>
                  </div>
                </div>
              </ThreeDTiltCard>
            </ThreeDScrollReveal>

            {/* Right Story & Positioning */}
            <div className="space-y-6">
              <ThreeDScrollReveal direction="left">
                <div className="flex items-center gap-3 text-amber-600 font-extrabold text-xs uppercase tracking-widest">
                  <div className="w-8 h-0.5 bg-amber-500" />
                  <span>COMPANY OVERVIEW & POSITIONING</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight uppercase font-heading mt-3">
                  YOUR TRUSTED STEEL & <br />
                  <span className="text-gradient-gold">ROOFING SUPPLIER</span>
                </h2>
              </ThreeDScrollReveal>

              <ThreeDScrollReveal direction="left" delay={0.1}>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {COMPANY_INFO.description}
                </p>
              </ThreeDScrollReveal>

              <ThreeDScrollReveal direction="left" delay={0.15}>
                <div className="p-4 rounded-2xl bg-amber-50 border-l-4 border-amber-500 shadow-sm space-y-1">
                  <p className="text-xs font-bold text-amber-800 uppercase tracking-wider">Business Identity</p>
                  <p className="text-sm font-semibold text-gray-800">
                    BAGAVAN STEELS — Pulikarai / Sangampatti, Selliyampatti, Dharmapuri - 636809
                  </p>
                </div>
              </ThreeDScrollReveal>

              <ThreeDScrollReveal direction="left" delay={0.2}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-1">
                    <span className="text-[10px] font-bold text-amber-600 uppercase">Primary Area</span>
                    <p className="text-xs font-extrabold text-gray-900">Dharmapuri & Surrounding Tamil Nadu</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-1">
                    <span className="text-[10px] font-bold text-amber-600 uppercase">Verified Product</span>
                    <p className="text-xs font-extrabold text-gray-900">Jindal Trapezoidal PPGL Sheets</p>
                  </div>
                </div>
              </ThreeDScrollReveal>

              <ThreeDScrollReveal direction="left" delay={0.25}>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => setActiveTab('quote')}
                    className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-gray-950 font-extrabold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2"
                  >
                    <span>Request Quotation</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={openWhatsApp}
                    className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Quote</span>
                  </button>
                </div>
              </ThreeDScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── Product Categories Section (3D Tilt Cards) ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ThreeDScrollReveal className="text-center max-w-2xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-3 text-amber-600 font-bold text-xs uppercase tracking-widest">
              <div className="w-8 h-0.5 bg-amber-500" />
              Verified & Complete Product Range
              <div className="w-8 h-0.5 bg-amber-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 uppercase tracking-tight font-heading">
              Our Product <span className="text-gradient-gold">Categories</span>
            </h2>
            <p className="text-gray-500 text-sm">
              We stock Jindal Trapezoidal PPGL roofing sheets, high yield strength TMT bars, structural MS sections, and steel pipes.
            </p>
          </ThreeDScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS_CATALOG.map((product, idx) => (
              <ThreeDScrollReveal key={product.id} delay={idx * 0.08}>
                <ThreeDTiltCard depth={40}>
                  <div 
                    onClick={() => setActiveTab('services')}
                    className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-amber-400 transition-all cursor-pointer group flex flex-col h-full"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <span className="absolute top-3 right-3 bg-gray-950/80 backdrop-blur-md text-amber-400 text-[10px] font-extrabold px-2.5 py-1 rounded-full border border-gray-800 uppercase">
                        {product.category}
                      </span>
                    </div>

                    <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
                      <div>
                        <h3 className="text-base font-extrabold text-gray-900 group-hover:text-amber-600 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                          {product.description}
                        </p>
                      </div>

                      <div className="space-y-1.5 pt-3 border-t border-gray-100">
                        {product.items.slice(0, 3).map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>

                      <button className="w-full py-2.5 rounded-xl bg-gray-900 hover:bg-amber-500 hover:text-gray-950 text-white text-xs font-bold transition-all flex items-center justify-center gap-1 mt-auto">
                        <span>Explore Category</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </ThreeDTiltCard>
              </ThreeDScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Elements Section (Section 10 of PDF) ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ThreeDScrollReveal className="text-center max-w-2xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-3 text-amber-600 font-bold text-xs uppercase tracking-widest">
              <div className="w-8 h-0.5 bg-amber-500" />
              Website Trust Elements
              <div className="w-8 h-0.5 bg-amber-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 uppercase tracking-tight font-heading">
              Why Choose <span className="text-gradient-gold">Bagavan Steels</span>
            </h2>
          </ThreeDScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {TRUST_ELEMENTS.map((item, idx) => (
              <ThreeDScrollReveal key={idx} delay={idx * 0.06}>
                <ThreeDTiltCard depth={30}>
                  <div className="bg-white border border-gray-200 rounded-3xl p-5 text-center space-y-3 hover:border-amber-400 hover:shadow-xl transition-all h-full flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center mx-auto">
                        <Check className="w-5 h-5" />
                      </div>
                      <h3 className="text-sm font-extrabold text-gray-900">{item.title}</h3>
                      <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </ThreeDTiltCard>
              </ThreeDScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WhatsApp Direct CTA Banner ── */}
      <section className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Instant Quotation</span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase font-heading">Need Fast Pricing & Stock Status?</h2>
            <p className="text-gray-300 text-sm">
              Connect directly with Bagavan Steels via WhatsApp or Phone for immediate quotes.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={openWhatsApp}
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </button>
            <button
              onClick={() => setActiveTab('quote')}
              className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-gray-950 font-extrabold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2"
            >
              <span>Request Quote</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
