import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  COMPANY_INFO, STEEL_IMAGES, AUTHORIZED_DEALERS, PRODUCTS_CATALOG, FEATURES_LIST
} from '../data/steelData';
import {
  ShieldCheck, Award, ChevronRight, CheckCircle2, PhoneCall,
  Building2, Star, Package, BarChart3, BadgeCheck
} from 'lucide-react';

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
    <motion.div
      initial="hidden" whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={variants} className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Hero Slides ─── */
const heroSlides = [
  { img: STEEL_IMAGES.hero,      tag: 'Premium TMT ISI Rods',        title: 'WELCOME TO', highlight: 'TRICHY STEEL COMPANY',      sub: 'Leading merchants in Iron & Cement across Dharmapuri District and Tamil Nadu since 2008.' },
  { img: STEEL_IMAGES.warehouse, tag: 'Large-Scale Distribution',     title: 'BULK STEEL &', highlight: 'CEMENT SUPPLY',            sub: 'We stock and supply SuryaDev, AGNI, Madras Cement, UltraTech, Ramco and more at best prices.' },
  { img: STEEL_IMAGES.pipes,     tag: 'Structural Steel Experts',     title: 'IRON PIPES,', highlight: 'PLATES & ANGLES',           sub: 'Vizag & Tata Joists, Channels, Angles and Flat Bars — all under one trusted roof.' },
  { img: STEEL_IMAGES.rods,      tag: 'ISI Certified Quality',        title: 'STRONGEST TMT', highlight: 'CONSTRUCTION RODS',       sub: 'Fe 500 TMT ISI certified bars from top brands for earthquake-resistant, high-load structures.' },
];

function HeroSlider({ setActiveTab }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const goTo = (idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const slide = heroSlides[current];

  return (
    <section className="relative h-[620px] lg:h-[700px] overflow-hidden bg-gray-950 select-none">
      {/* Sliding bg */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ x: direction > 0 ? '100%' : '-100%', opacity: 0.6 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? '-100%' : '100%', opacity: 0.6 }}
          transition={{ duration: 0.9, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="absolute inset-0"
        >
          <img src={slide.img} alt={slide.tag} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/92 via-gray-900/78 to-gray-950/40" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
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
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest">
                  <Star className="w-3.5 h-3.5 fill-white/60 text-white/80" />
                  {slide.tag}
                </div>

                {/* Headline */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight font-heading text-white">
                  {slide.title}
                  <br />
                  <span className="text-gradient-gold">{slide.highlight}</span>
                </h1>

                <p className="text-base sm:text-lg text-gray-200 max-w-xl leading-relaxed">{slide.sub}</p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <button
                    onClick={() => setActiveTab('gallery')}
                    className="px-7 py-3.5 rounded-xl bg-white text-gray-900 font-bold text-sm shadow-xl transition-all flex items-center gap-2 hover:bg-gray-100 hover:translate-y-[-2px]"
                  >
                    View Products & Gallery
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setActiveTab('contact')}
                    className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold text-sm border border-white/30 hover:border-white/60 transition-all flex items-center gap-2"
                  >
                    <PhoneCall className="w-5 h-5 text-gray-300" />
                    Contact Us Today
                  </button>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-8 pt-4 border-t border-white/10">
                  {[{ val: '16+', label: 'Years Excellence' }, { val: '10', label: 'TN Branches' }, { val: '100%', label: 'Quality Guarantee' }].map((s) => (
                    <div key={s.label}>
                      <p className="text-3xl font-black text-white font-heading">{s.val}</p>
                      <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-0.5">{s.label}</p>
                    </div>
                  ))}
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
            className={`transition-all duration-500 rounded-full ${i === current ? 'w-8 h-2.5 bg-white' : 'w-2.5 h-2.5 bg-white/35 hover:bg-white/60'}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-1 bg-white/10">
        <motion.div
          key={current + '-bar'}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 5, ease: 'linear' }}
          className="h-full bg-white/70"
        />
      </div>
    </section>
  );
}

/* ─── Feature Icon Card ─── */
function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 bg-white hover:border-gray-300 hover:shadow-lg transition-all group cursor-default">
      <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-gray-900 group-hover:text-white transition-all">
        <Icon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
      </div>
      <div>
        <h4 className="text-sm font-bold text-gray-900 group-hover:text-gray-700 transition-colors">{title}</h4>
        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

/* ─── Product Card with hover overlay ─── */
function ProductCard({ product, setActiveTab }) {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-md group cursor-pointer card-hover" onClick={() => setActiveTab('services')}>
      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      </div>
      {/* Default overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/85 via-gray-900/20 to-transparent" />
      {/* Hover gray overlay */}
      <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/50 transition-all duration-500" />

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <span className="text-[10px] text-gray-300 font-bold uppercase tracking-widest block mb-1">{product.category}</span>
        <h3 className="text-base font-bold text-white group-hover:text-gray-100 transition-colors">{product.name}</h3>
        <div className="mt-2 space-y-1 overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500">
          {product.items.slice(0, 3).map((item, i) => (
            <div key={i} className="flex items-center gap-1.5 text-xs text-gray-200">
              <CheckCircle2 className="w-3 h-3 text-gray-300 shrink-0" />
              {item}
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-1 text-xs font-bold text-gray-300 group-hover:text-white transition-colors">
          <span>Explore</span>
          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
}

/* ─── Dealer Badge ─── */
function DealerBadge({ dealer }) {
  return (
    <div className="relative group p-4 rounded-2xl border border-gray-100 bg-white hover:border-gray-900 hover:shadow-xl transition-all cursor-default overflow-hidden card-hover">
      <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-100 transition-all duration-300" />
      <div className="relative z-10 text-center space-y-2">
        <div className="w-10 h-10 rounded-xl bg-gray-100 group-hover:bg-white/20 flex items-center justify-center mx-auto transition-all">
          <ShieldCheck className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
        </div>
        <h3 className="text-xs font-bold text-gray-800 group-hover:text-white transition-colors leading-tight">{dealer.name}</h3>
        <span className="text-[10px] text-gray-500 group-hover:text-gray-300 font-bold uppercase tracking-wide block transition-colors">Authorized Dealer</span>
      </div>
    </div>
  );
}

export default function HomeView({ setActiveTab }) {
  return (
    <div className="bg-white">
      {/* Hero Slider */}
      <HeroSlider setActiveTab={setActiveTab} />

      {/* ── About Split (Core Fitness style) ── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <FadeIn direction="right">
              <div className="relative">
                <div
                  className="absolute -left-6 top-1/2 -translate-y-1/2 font-black uppercase text-[120px] leading-none tracking-tight select-none pointer-events-none z-0"
                  style={{ color: 'transparent', WebkitTextStroke: '1.5px #e5e7eb' }}
                >
                  STEEL
                </div>
                <div className="relative z-10 flex gap-0">
                  <div className="w-2 bg-gray-900 rounded-l-xl shrink-0" />
                  <div className="rounded-r-2xl overflow-hidden shadow-2xl shadow-gray-200 flex-1 group relative">
                    <img src={STEEL_IMAGES.rods} alt="TMT Steel Rods" className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 rounded-r-2xl bg-gray-900/0 group-hover:bg-gray-900/20 transition-all duration-500" />
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-4 z-20 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 max-w-[200px]">
                  <div className="flex items-center gap-2 mb-1">
                    <Award className="w-4 h-4 text-gray-700" />
                    <span className="text-[10px] font-bold text-gray-600 uppercase tracking-wider">Award Winner</span>
                  </div>
                  <p className="text-xs font-semibold text-gray-700">SuryaDev Appreciation Award for Outstanding Service</p>
                </div>
              </div>
            </FadeIn>

            {/* Right Text */}
            <div className="space-y-6">
              <FadeIn direction="left">
                <div className="flex items-center gap-3 text-gray-500 font-bold text-sm">
                  <div className="w-8 h-0.5 bg-gray-900" />
                  <span className="uppercase tracking-widest text-xs text-gray-500">ABOUT US</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight uppercase font-heading mt-3">
                  TRUSTED STEEL &<br />
                  <span className="text-gradient-gold">CEMENT MERCHANTS</span>
                </h2>
              </FadeIn>

              <FadeIn direction="left" delay={0.1}>
                <p className="text-gray-500 text-sm leading-relaxed">{COMPANY_INFO.description}</p>
              </FadeIn>
              <FadeIn direction="left" delay={0.15}>
                <p className="text-gray-500 text-sm leading-relaxed">{COMPANY_INFO.aboutStory}</p>
              </FadeIn>

              <FadeIn direction="left" delay={0.2}>
                <div className="space-y-3 pt-2">
                  <FeatureCard icon={BadgeCheck} title="ISI & ISO Certified Products" desc="All steel rods, cement bags, and roofing sheets are ISI & ISO quality certified." />
                  <FeatureCard icon={Package} title="Bulk Supply & Fast Delivery" desc="Instant wholesale supply from 10 branch depots across Tamil Nadu." />
                  <FeatureCard icon={BarChart3} title="Best Market Prices Guaranteed" desc="Competitive pricing directly from authorized brand distributors." />
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={0.3}>
                <button
                  onClick={() => setActiveTab('about')}
                  className="px-8 py-3.5 rounded-xl btn-primary text-sm flex items-center gap-2 w-fit"
                >
                  LEARN MORE
                  <ChevronRight className="w-5 h-5" />
                </button>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Products Section ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <FadeIn className="text-center max-w-2xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-3 text-gray-500 font-bold text-xs uppercase tracking-widest">
              <div className="w-8 h-0.5 bg-gray-900" />
              Our Building Materials
              <div className="w-8 h-0.5 bg-gray-900" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 uppercase tracking-tight font-heading">
              Steel & Cement <span className="text-gradient-gold">Solutions</span>
            </h2>
            <p className="text-gray-400 text-sm">Hover over each product to discover available brands — click to explore the full catalog.</p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS_CATALOG.map((product, i) => (
              <FadeIn key={product.id} delay={i * 0.08}>
                <ProductCard product={product} setActiveTab={setActiveTab} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Authorized Dealers ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <FadeIn className="text-center max-w-2xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-3 text-gray-500 font-bold text-xs uppercase tracking-widest">
              <div className="w-8 h-0.5 bg-gray-900" />
              Authorized Dealerships
              <div className="w-8 h-0.5 bg-gray-900" />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 uppercase tracking-tight font-heading">
              Certified Dealers of <span className="text-gradient-gold">India's Leading Brands</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {AUTHORIZED_DEALERS.map((dealer, i) => (
              <FadeIn key={dealer.id} delay={i * 0.05}>
                <DealerBadge dealer={dealer} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features Checklist ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <FadeIn direction="left" className="order-2 lg:order-2">
              <div className="relative">
                <div
                  className="absolute -right-4 top-1/2 -translate-y-1/2 font-black uppercase text-[100px] leading-none tracking-tight select-none pointer-events-none z-0"
                  style={{ color: 'transparent', WebkitTextStroke: '1.5px #e5e7eb' }}
                >
                  IRON
                </div>
                <div className="relative z-10 flex gap-0">
                  <div className="rounded-l-2xl overflow-hidden shadow-2xl shadow-gray-200 flex-1 group relative">
                    <img src={STEEL_IMAGES.warehouse} alt="Steel Warehouse" className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 rounded-l-2xl bg-gray-900/0 group-hover:bg-gray-900/20 transition-all duration-500" />
                  </div>
                  <div className="w-2 bg-gray-900 rounded-r-xl shrink-0" />
                </div>
              </div>
            </FadeIn>

            {/* Features list */}
            <div className="space-y-6 order-1 lg:order-1">
              <FadeIn direction="right">
                <div className="flex items-center gap-3 text-gray-500 text-xs font-bold uppercase tracking-widest">
                  <div className="w-8 h-0.5 bg-gray-900" />
                  SERVICE FEATURES
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 uppercase font-heading mt-3 leading-tight">
                  FEATURES OF <span className="text-gradient-gold">OUR SERVICE</span>
                </h2>
              </FadeIn>

              <FadeIn direction="right" delay={0.1}>
                <div className="space-y-2.5">
                  {FEATURES_LIST.slice(0, 8).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-gray-100 hover:border-gray-900 hover:shadow-md transition-all group cursor-default">
                      <span className="w-5 h-5 rounded-full bg-gray-100 border border-gray-200 text-gray-600 flex items-center justify-center shrink-0 text-[10px] font-bold group-hover:bg-gray-900 group-hover:text-white group-hover:border-gray-900 transition-all">✓</span>
                      <p className="text-xs font-semibold text-gray-700 leading-snug group-hover:text-gray-900 transition-colors">{feature}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.25}>
                <button
                  onClick={() => setActiveTab('services')}
                  className="px-6 py-3 rounded-xl btn-primary text-sm flex items-center gap-2"
                >
                  VIEW ALL SERVICES
                  <ChevronRight className="w-4 h-4" />
                </button>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Branches CTA ── */}
      <section className="relative overflow-hidden bg-gray-900 py-16">
        <div className="absolute inset-0 opacity-15">
          <img src={STEEL_IMAGES.hero} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gray-900/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <Building2 className="w-10 h-10 text-gray-300 mb-3" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight font-heading">Our Branches All Around Tamil Nadu</h2>
              <p className="text-sm text-gray-400 mt-2 max-w-xl">
                Dharmapuri · Thiruvarur · Aranthangi · Paramakudi · Aruppukottai · Musuri · Nannilam · Puthukottai · Kumbakonam · Soolur
              </p>
            </div>
            <button
              onClick={() => setActiveTab('branches')}
              className="px-6 py-3 rounded-xl bg-white text-gray-900 font-bold text-sm shadow-xl transition-all flex items-center gap-2 shrink-0 hover:bg-gray-100 hover:translate-y-[-2px]"
            >
              Explore All 10 Branches
              <ChevronRight className="w-4 h-4" />
            </button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
