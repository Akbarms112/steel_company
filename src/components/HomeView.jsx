import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  COMPANY_INFO, STEEL_IMAGES, AUTHORIZED_DEALERS, PRODUCTS_CATALOG, FEATURES_LIST
} from '../data/steelData';
import {
  ShieldCheck, Award, ChevronRight, CheckCircle2, PhoneCall,
  Building2, Star, Package, Layers, BarChart3, BadgeCheck
} from 'lucide-react';

/* ─── Reusable scroll-reveal wrapper ─── */
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
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Hero Slider ─── */
const heroSlides = [
  {
    img: STEEL_IMAGES.hero,
    tag: 'Premium TMT ISI Rods',
    title: 'WELCOME TO',
    highlight: 'TRICHY STEEL COMPANY',
    sub: 'Leading merchants in Iron & Cement across Dharmapuri District and Tamil Nadu since 2008.',
    accent: '#f59e0b',
  },
  {
    img: STEEL_IMAGES.warehouse,
    tag: 'Large-Scale Distribution',
    title: 'BULK STEEL &',
    highlight: 'CEMENT SUPPLY',
    sub: 'We stock and supply SuryaDev, AGNI, Madras Cement, UltraTech, Ramco and more at best prices.',
    accent: '#f59e0b',
  },
  {
    img: STEEL_IMAGES.pipes,
    tag: 'Structural Steel Experts',
    title: 'IRON PIPES,',
    highlight: 'PLATES & ANGLES',
    sub: 'Vizag & Tata Joists, Channels, Angles and Flat Bars — all under one trusted roof.',
    accent: '#f59e0b',
  },
  {
    img: STEEL_IMAGES.rods,
    tag: 'ISI Certified Quality',
    title: 'STRONGEST TMT',
    highlight: 'CONSTRUCTION RODS',
    sub: 'Fe 500 TMT ISI certified bars from top brands for earthquake-resistant, high-load structures.',
    accent: '#f59e0b',
  },
];

function HeroSlider({ setActiveTab }) {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setPrev(current);
      setCurrent((c) => (c + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const goTo = (idx) => {
    setDirection(idx > current ? 1 : -1);
    setPrev(current);
    setCurrent(idx);
  };

  const slide = heroSlides[current];

  return (
    <section className="relative h-[620px] lg:h-[700px] overflow-hidden bg-slate-900 select-none">
      {/* ── Sliding Background Images ── */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ x: direction > 0 ? '100%' : '-100%', opacity: 0.6 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? '-100%' : '100%', opacity: 0.6 }}
          transition={{ duration: 0.9, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="absolute inset-0"
        >
          <img
            src={slide.img}
            alt={slide.tag}
            className="w-full h-full object-cover"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-slate-950/40" />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* ── Slide Content ── */}
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
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/60 bg-amber-400/10 backdrop-blur-sm text-amber-300 text-xs font-bold uppercase tracking-widest">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  {slide.tag}
                </div>

                {/* Headline */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight font-heading text-white">
                  {slide.title}
                  <br />
                  <span className="text-amber-400">{slide.highlight}</span>
                </h1>

                {/* Subtext */}
                <p className="text-base sm:text-lg text-slate-200 max-w-xl leading-relaxed font-normal">
                  {slide.sub}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <button
                    onClick={() => setActiveTab('gallery')}
                    className="px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-bold text-sm shadow-xl shadow-amber-500/30 transition-all flex items-center gap-2 hover:translate-y-[-2px]"
                  >
                    View Products & Gallery
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setActiveTab('contact')}
                    className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold text-sm border border-white/30 hover:border-amber-400 transition-all flex items-center gap-2"
                  >
                    <PhoneCall className="w-5 h-5 text-amber-400" />
                    Contact Us Today
                  </button>
                </div>

                {/* Quick Stats */}
                <div className="flex flex-wrap gap-8 pt-4 border-t border-white/10">
                  {[{ val: '16+', label: 'Years Excellence' }, { val: '10', label: 'TN Branches' }, { val: '100%', label: 'Quality Guarantee' }].map((s) => (
                    <div key={s.label}>
                      <p className="text-3xl font-black text-amber-400 font-heading">{s.val}</p>
                      <p className="text-xs text-slate-300 font-medium uppercase tracking-wider mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ── Slide Dots & Progress ── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-500 rounded-full ${
              i === current ? 'w-8 h-2.5 bg-amber-400' : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* ── Auto-play progress bar ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-1 bg-white/10">
        <motion.div
          key={current + '-bar'}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 5, ease: 'linear' }}
          className="h-full bg-amber-400"
        />
      </div>
    </section>
  );
}

/* ─── Feature Icon Card ─── */
function FeatureCard({ icon: Icon, title, desc, color }) {
  return (
    <div className="flex items-start gap-4 p-5 rounded-2xl border border-slate-100 bg-white hover:border-amber-300 hover:shadow-lg hover:shadow-amber-50 transition-all group cursor-default">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${color} group-hover:scale-110 transition-transform`}>
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h4 className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors">{title}</h4>
        <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

/* ─── Product Card with hover color overlay ─── */
function ProductCard({ product, setActiveTab }) {
  const overlayColors = {
    'Cement': 'from-amber-500/80',
    'Iron & TMT': 'from-orange-600/80',
    'Structural Steel': 'from-slate-700/80',
    'Roofing': 'from-sky-600/80',
  };
  const overlay = overlayColors[product.category] || 'from-amber-500/80';

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-md group cursor-pointer card-hover" onClick={() => setActiveTab('services')}>
      <div className="aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Default state overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

      {/* Hover colored overlay - transitions in */}
      <div className={`absolute inset-0 bg-gradient-to-t ${overlay} to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500`} />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <span className="text-[10px] text-amber-300 font-bold uppercase tracking-widest block mb-1">{product.category}</span>
        <h3 className="text-base font-bold text-white group-hover:text-amber-100 transition-colors">{product.name}</h3>

        {/* Items - shown on hover */}
        <div className="mt-2 space-y-1 overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500">
          {product.items.slice(0, 3).map((item, i) => (
            <div key={i} className="flex items-center gap-1.5 text-xs text-white/90">
              <CheckCircle2 className="w-3 h-3 text-amber-300 shrink-0" />
              {item}
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center gap-1 text-xs font-bold text-amber-300 group-hover:text-white transition-colors">
          <span>Explore</span>
          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
}

/* ─── Dealer Badge with hover glow ─── */
function DealerBadge({ dealer }) {
  return (
    <div className="relative group p-4 rounded-2xl border border-slate-100 bg-white hover:border-amber-400 hover:shadow-xl hover:shadow-amber-100 transition-all cursor-default overflow-hidden card-hover">
      {/* Hover color fill */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-all duration-300" />

      <div className="relative z-10 text-center space-y-2">
        <div className="w-10 h-10 rounded-xl bg-amber-50 group-hover:bg-amber-100 border border-amber-100 group-hover:border-amber-300 flex items-center justify-center mx-auto transition-all">
          <ShieldCheck className="w-5 h-5 text-amber-600" />
        </div>
        <h3 className="text-xs font-bold text-slate-800 group-hover:text-amber-700 transition-colors leading-tight">{dealer.name}</h3>
        <span className="text-[10px] text-amber-500 font-bold uppercase tracking-wide block">Authorized Dealer</span>
      </div>
    </div>
  );
}

export default function HomeView({ setActiveTab }) {
  return (
    <div className="bg-white">
      {/* ── Auto-Sliding Hero ── */}
      <HeroSlider setActiveTab={setActiveTab} />

      {/* ── About / Feature Split Section (Core Fitness style) ── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Image with big watermark text behind it */}
            <FadeIn direction="right">
              <div className="relative">
                {/* Watermark text */}
                <div
                  className="absolute -left-6 top-1/2 -translate-y-1/2 font-black uppercase text-[120px] leading-none tracking-tight select-none pointer-events-none z-0"
                  style={{ color: 'transparent', WebkitTextStroke: '1.5px #e2e8f0' }}
                >
                  STEEL
                </div>

                {/* Main image with orange left border accent */}
                <div className="relative z-10 flex gap-0">
                  <div className="w-2 bg-amber-500 rounded-l-xl shrink-0" />
                  <div className="rounded-r-2xl overflow-hidden shadow-2xl shadow-slate-200 flex-1 group">
                    <img
                      src={STEEL_IMAGES.rods}
                      alt="TMT Steel Rods"
                      className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Image hover color overlay */}
                    <div className="absolute inset-0 rounded-r-2xl bg-amber-500/0 group-hover:bg-amber-500/15 transition-all duration-500" />
                  </div>
                </div>

                {/* Floating badge card */}
                <div className="absolute -bottom-6 -right-4 z-20 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 max-w-[200px]">
                  <div className="flex items-center gap-2 mb-1">
                    <Award className="w-4 h-4 text-amber-500" />
                    <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">Award Winner</span>
                  </div>
                  <p className="text-xs font-semibold text-slate-700">SuryaDev Appreciation Award for Outstanding Service</p>
                </div>
              </div>
            </FadeIn>

            {/* Right: Text Content (Core Fitness style) */}
            <div className="space-y-6">
              <FadeIn direction="left">
                <div className="flex items-center gap-3 text-amber-600 font-bold text-sm">
                  <div className="w-8 h-0.5 bg-amber-500" />
                  <span className="uppercase tracking-widest text-xs">ABOUT US</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight uppercase font-heading mt-3">
                  TRUSTED STEEL &<br />
                  <span className="text-gradient-gold">CEMENT MERCHANTS</span>
                </h2>
              </FadeIn>

              <FadeIn direction="left" delay={0.1}>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {COMPANY_INFO.description}
                </p>
              </FadeIn>

              <FadeIn direction="left" delay={0.15}>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {COMPANY_INFO.aboutStory}
                </p>
              </FadeIn>

              <FadeIn direction="left" delay={0.2}>
                <div className="space-y-3 pt-2">
                  <FeatureCard
                    icon={BadgeCheck}
                    title="ISI & ISO Certified Products"
                    desc="All steel rods, cement bags, and roofing sheets are ISI & ISO quality certified."
                    color="bg-amber-50 text-amber-600"
                  />
                  <FeatureCard
                    icon={Package}
                    title="Bulk Supply & Fast Delivery"
                    desc="Instant wholesale supply from 10 branch depots across Tamil Nadu."
                    color="bg-orange-50 text-orange-600"
                  />
                  <FeatureCard
                    icon={BarChart3}
                    title="Best Market Prices Guaranteed"
                    desc="Competitive pricing directly from authorized brand distributors."
                    color="bg-amber-50 text-amber-700"
                  />
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={0.3}>
                <button
                  onClick={() => setActiveTab('about')}
                  className="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-bold text-sm shadow-lg shadow-amber-200 transition-all flex items-center gap-2 hover:translate-y-[-2px] w-fit"
                >
                  LEARN MORE
                  <ChevronRight className="w-5 h-5" />
                </button>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Products Section with hover color transition ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <FadeIn className="text-center max-w-2xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-3 text-amber-600 font-bold text-xs uppercase tracking-widest">
              <div className="w-8 h-0.5 bg-amber-500" />
              Our Building Materials
              <div className="w-8 h-0.5 bg-amber-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 uppercase tracking-tight font-heading">
              Steel & Cement <span className="text-gradient-gold">Solutions</span>
            </h2>
            <p className="text-slate-400 text-sm">Hover over each product to discover what's available — click to explore the full catalog.</p>
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
            <div className="flex items-center justify-center gap-3 text-amber-600 font-bold text-xs uppercase tracking-widest">
              <div className="w-8 h-0.5 bg-amber-500" />
              Authorized Dealerships
              <div className="w-8 h-0.5 bg-amber-500" />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 uppercase tracking-tight font-heading">
              Certified Authorized Dealers of <span className="text-gradient-gold">India's Leading Brands</span>
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
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Right Image Column */}
            <FadeIn direction="left" className="order-2 lg:order-2">
              <div className="relative group">
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 font-black uppercase text-[100px] leading-none tracking-tight select-none pointer-events-none z-0"
                  style={{ color: 'transparent', WebkitTextStroke: '1.5px #e2e8f0' }}>IRON</div>
                <div className="relative z-10 flex gap-0">
                  <div className="rounded-l-2xl overflow-hidden shadow-2xl shadow-slate-200 flex-1 group">
                    <img
                      src={STEEL_IMAGES.warehouse}
                      alt="Steel Warehouse"
                      className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 rounded-l-2xl bg-orange-500/0 group-hover:bg-orange-500/15 transition-all duration-500" />
                  </div>
                  <div className="w-2 bg-amber-500 rounded-r-xl shrink-0" />
                </div>
              </div>
            </FadeIn>

            {/* Left Text Column */}
            <div className="space-y-6 order-1 lg:order-1">
              <FadeIn direction="right">
                <div className="flex items-center gap-3 text-amber-600 font-bold text-xs uppercase tracking-widest">
                  <div className="w-8 h-0.5 bg-amber-500" />
                  SERVICE FEATURES
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase font-heading mt-3 leading-tight">
                  FEATURES OF <span className="text-gradient-gold">OUR SERVICE</span>
                </h2>
              </FadeIn>

              <FadeIn direction="right" delay={0.1}>
                <div className="space-y-2.5">
                  {FEATURES_LIST.slice(0, 8).map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-100 hover:border-amber-200 hover:shadow-md hover:bg-amber-50/30 transition-all group cursor-default"
                    >
                      <span className="w-5 h-5 rounded-full bg-amber-100 border border-amber-200 text-amber-600 flex items-center justify-center shrink-0 text-[10px] font-bold group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 transition-all">
                        ✓
                      </span>
                      <p className="text-xs font-semibold text-slate-700 leading-snug group-hover:text-amber-700 transition-colors">{feature}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.25}>
                <button
                  onClick={() => setActiveTab('services')}
                  className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-bold text-sm shadow-lg shadow-amber-200 transition-all hover:translate-y-[-2px] flex items-center gap-2"
                >
                  VIEW ALL SERVICES
                  <ChevronRight className="w-4 h-4" />
                </button>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tamil Nadu Branches CTA Banner ── */}
      <section className="relative overflow-hidden bg-slate-900 py-16">
        <div className="absolute inset-0 opacity-20">
          <img src={STEEL_IMAGES.hero} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <Building2 className="w-10 h-10 text-amber-400 mb-3" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight font-heading">
                Our Branches All Around Tamil Nadu
              </h2>
              <p className="text-sm text-slate-300 mt-2 max-w-xl">
                Dharmapuri · Thiruvarur · Aranthangi · Paramakudi · Aruppukottai · Musuri · Nannilam · Puthukottai · Kumbakonam · Soolur (Coimbatore)
              </p>
            </div>
            <button
              onClick={() => setActiveTab('branches')}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-bold text-sm shadow-xl transition-all flex items-center gap-2 shrink-0 hover:translate-y-[-2px]"
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
