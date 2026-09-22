import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion';
import {
  COMPANY_INFO, STEEL_IMAGES, VERIFIED_DEALERS, PRODUCTS_CATALOG, TRUST_ELEMENTS
} from '../data/steelData';
import {
  ChevronRight, CheckCircle2, MessageSquare, ArrowRight,
  Phone, Star, Award, Check, ShieldCheck
} from 'lucide-react';


const easeOut = [0.16, 1, 0.3, 1];

const fadeUp   = { hidden: { opacity: 0, y: 45, filter: 'blur(3px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)' } };
const fadeLeft = { hidden: { opacity: 0, x: -45, filter: 'blur(3px)' }, visible: { opacity: 1, x: 0, filter: 'blur(0px)' } };
const fadeRight= { hidden: { opacity: 0, x: 45,  filter: 'blur(3px)' }, visible: { opacity: 1, x: 0, filter: 'blur(0px)' } };
const scaleUp  = { hidden: { opacity: 0, scale: 0.92, y: 30, filter: 'blur(3px)' }, visible: { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' } };

function Reveal({ children, delay = 0, variant = fadeUp, once = false, amount = 0.15, className = '' }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variant}
      transition={{ duration: 0.85, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedDivider({ className = 'mt-5' }) {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width: 64, opacity: 1 }}
      viewport={{ once: false, amount: 0.8 }}
      transition={{ duration: 0.8, ease: easeOut }}
      className={`h-[3px] bg-gradient-to-r from-blue-600 via-sky-400 to-blue-500 rounded-full ${className}`}
    />
  );
}


function Counter({ end, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const endVal = parseFloat(end);
    const increment = endVal / 50;
    const timer = setInterval(() => {
      start += increment;
      if (start >= endVal) { setCount(endVal); clearInterval(timer); }
      else setCount(Math.floor(start * 10) / 10);
    }, 30);
    return () => clearInterval(timer);
  }, [inView, end]);

  return <span ref={ref}>{count}{suffix}</span>;
}


const heroSlides = [
  {
    img: STEEL_IMAGES.roofingJindal,
    label: 'Verified Jindal Supplier',
    title: 'Quality Steel &',
    highlight: 'Roofing Solutions',
    sub: 'Reliable steel and roofing materials for homes, businesses, civil contractors and industrial projects in Dharmapuri.',
  },
  {
    img: STEEL_IMAGES.hero,
    label: 'Trapezoidal PPGL Sheets',
    title: 'Jindal Trapezoidal',
    highlight: 'PPGL Roofing Sheets',
    sub: 'ISO certified weather-resistant colour coated PPGL roofing sheets for sheds, warehouses and residential homes.',
  },
  {
    img: STEEL_IMAGES.tmtRods,
    label: 'High-Strength TMT Steel',
    title: 'Certified TMT &',
    highlight: 'Reinforcement Steel',
    sub: 'Earthquake-resistant high yield strength TMT bars and mild steel rods for home foundations and civil structures.',
  },
  {
    img: STEEL_IMAGES.structuralMain,
    label: 'Structural Steel',
    title: 'MS Angles, Channels',
    highlight: 'Beams & Industrial Pipes',
    sub: 'Equal angles, C-channels, flat bars, MS plates, square and round pipes for custom fabrication.',
  },
];


function WaterRippleOverlay({ heroRef }) {
  const canvasRef = useRef(null);
  const ripplesRef = useRef([]);
  const starsRef = useRef([]);
  const mouseRef = useRef({ x: -1000, y: -1000, inside: false });
  const prevMouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const heroEl = heroRef.current;
    if (!canvas || !heroEl) return;

    const ctx = canvas.getContext('2d');
    let animId;
    let lastAmbientTime = Date.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = heroEl.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    // Star sparkle colors (diamond white, ice blue, starlight gold)
    const starColors = ['#FFFFFF', '#BAE6FD', '#FDE047', '#38BDF8', '#E0F2FE', '#F8FAFC'];

    // Spawn star sparkles
    const addStar = (x, y, count = 1) => {
      for (let i = 0; i < count; i++) {
        if (starsRef.current.length > 70) {
          starsRef.current.shift();
        }
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * 22;
        const size = 3.5 + Math.random() * 6.5; // 3.5px to 10px star
        starsRef.current.push({
          x: x + Math.cos(angle) * dist,
          y: y + Math.sin(angle) * dist,
          size,
          alpha: 1.0,
          decay: 0.018 + Math.random() * 0.02,
          rotation: Math.random() * Math.PI,
          rotSpeed: (Math.random() - 0.5) * 0.08,
          vx: (Math.random() - 0.5) * 0.7,
          vy: -0.4 - Math.random() * 0.6, // gentle floating upward
          color: starColors[Math.floor(Math.random() * starColors.length)],
        });
      }
    };

    // Draw 4-pointed diamond star
    const drawStar = (cx, cy, size, rot, alpha, color) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rot);
      ctx.globalAlpha = alpha;
      ctx.fillStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = 8;

      ctx.beginPath();
      for (let i = 0; i < 4; i++) {
        const a = (i * Math.PI) / 2;
        ctx.lineTo(Math.cos(a) * size, Math.sin(a) * size);
        const mid = a + Math.PI / 4;
        ctx.lineTo(Math.cos(mid) * (size * 0.22), Math.sin(mid) * (size * 0.22));
      }
      ctx.closePath();
      ctx.fill();

      // Center bright white nucleus
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.22, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();

      ctx.restore();
    };

    // Spawn a water ripple disturbance
    const addRipple = (x, y, maxR = 130, speed = 2.6, alpha = 0.88) => {
      if (ripplesRef.current.length > 55) {
        ripplesRef.current.shift();
      }
      ripplesRef.current.push({
        x,
        y,
        radius: 8,
        maxRadius: maxR,
        speed,
        alpha,
      });
    };

    // Auto-start ambient ripples & stars on page load
    const startTimer = setTimeout(() => {
      const rect = heroEl.getBoundingClientRect();
      addRipple(rect.width * 0.60, rect.height * 0.42, 135, 2.5, 0.85);
      addStar(rect.width * 0.60, rect.height * 0.42, 5);
      setTimeout(() => {
        addRipple(rect.width * 0.38, rect.height * 0.58, 120, 2.4, 0.75);
        addStar(rect.width * 0.38, rect.height * 0.58, 4);
      }, 500);
    }, 350);

    const handlePointerMove = (e) => {
      const rect = heroEl.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      mouseRef.current.x = x;
      mouseRef.current.y = y;
      mouseRef.current.inside = true;

      // Draw in water: create continuous wave disturbances along path + twinkling stars
      const prev = prevMouseRef.current;
      const dist = Math.hypot(x - prev.x, y - prev.y);

      if (dist > 15) {
        const steps = Math.min(Math.floor(dist / 15), 4);
        for (let i = 1; i <= steps; i++) {
          const ix = prev.x + (x - prev.x) * (i / steps);
          const iy = prev.y + (y - prev.y) * (i / steps);
          addRipple(ix, iy, 125, 2.5, 0.85);
          // Spawn sparkles/stars along water path
          if (Math.random() > 0.3) {
            addStar(ix, iy, 1);
          }
        }
        prevMouseRef.current = { x, y };
      }
    };

    const handlePointerDown = (e) => {
      const rect = heroEl.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      // Splash ripple when clicking with burst of stars
      addRipple(x, y, 175, 3.6, 0.98);
      addRipple(x, y, 130, 2.8, 0.80);
      addStar(x, y, 7);
    };

    const handlePointerLeave = () => {
      mouseRef.current.inside = false;
      prevMouseRef.current = { x: -1000, y: -1000 };
    };

    heroEl.addEventListener('pointermove', handlePointerMove);
    heroEl.addEventListener('pointerdown', handlePointerDown);
    heroEl.addEventListener('pointerleave', handlePointerLeave);

    const render = () => {
      const rect = heroEl.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      // Periodic gentle ambient star & ripple when idle
      const now = Date.now();
      if (!mouseRef.current.inside && now - lastAmbientTime > 3000) {
        lastAmbientTime = now;
        const rx = w * (0.3 + Math.random() * 0.45);
        const ry = h * (0.25 + Math.random() * 0.5);
        addRipple(rx, ry, 120, 2.2, 0.70);
        addStar(rx, ry, 3);
      }

      // 1. Base steel-grey + industrial blue overlay
      const grad = ctx.createLinearGradient(0, 0, w, h * 0.88);
      grad.addColorStop(0, 'rgba(15, 23, 42, 0.90)');
      grad.addColorStop(0.38, 'rgba(30, 41, 59, 0.85)');
      grad.addColorStop(0.72, 'rgba(29, 78, 216, 0.65)');
      grad.addColorStop(1, 'rgba(15, 23, 42, 0.50)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // 2. Liquid Water Clearing: Erase blue overlay along the ripples and cursor
      ctx.globalCompositeOperation = 'destination-out';

      // Comfortably sized core clearing under cursor (~65px)
      if (mouseRef.current.inside) {
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;
        const coreGrad = ctx.createRadialGradient(mx, my, 0, mx, my, 65);
        coreGrad.addColorStop(0, 'rgba(0, 0, 0, 0.95)');
        coreGrad.addColorStop(0.55, 'rgba(0, 0, 0, 0.70)');
        coreGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = coreGrad;
        ctx.beginPath();
        ctx.arc(mx, my, 65, 0, Math.PI * 2);
        ctx.fill();
      }

      // Water ripples erasing the blue overlay as they expand
      const activeRipples = ripplesRef.current;
      for (let i = 0; i < activeRipples.length; i++) {
        const r = activeRipples[i];
        const rGrad = ctx.createRadialGradient(
          r.x, r.y, Math.max(0, r.radius - 18),
          r.x, r.y, r.radius + 18
        );
        rGrad.addColorStop(0, 'rgba(0, 0, 0, 0)');
        rGrad.addColorStop(0.45, `rgba(0, 0, 0, ${r.alpha * 0.88})`);
        rGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = rGrad;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius + 18, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. Water Surface Light Reflections & Sparkling Stars (Source-Over)
      ctx.globalCompositeOperation = 'source-over';

      // Draw water ripples
      for (let i = activeRipples.length - 1; i >= 0; i--) {
        const r = activeRipples[i];

        // Outer liquid wave crest
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(186, 230, 253, ${r.alpha * 0.58})`;
        ctx.lineWidth = Math.max(1, 2.8 * (1 - r.radius / r.maxRadius));
        ctx.stroke();

        // Inner secondary wave ring
        if (r.radius > 22) {
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.radius - 18, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(56, 189, 248, ${r.alpha * 0.40})`;
          ctx.lineWidth = Math.max(0.8, 1.8 * (1 - r.radius / r.maxRadius));
          ctx.stroke();
        }

        // Third faint ripple ring
        if (r.radius > 45) {
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.radius - 36, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(224, 242, 254, ${r.alpha * 0.22})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Advance ripple physics
        r.radius += r.speed;
        r.alpha -= 0.015; // smooth natural dissipation
        if (r.alpha <= 0 || r.radius >= r.maxRadius) {
          activeRipples.splice(i, 1);
        }
      }

      // Draw sparkling stars along water path
      const activeStars = starsRef.current;
      for (let i = activeStars.length - 1; i >= 0; i--) {
        const s = activeStars[i];
        drawStar(s.x, s.y, s.size, s.rotation, s.alpha, s.color);

        // Advance star physics
        s.x += s.vx;
        s.y += s.vy;
        s.rotation += s.rotSpeed;
        s.alpha -= s.decay;

        if (s.alpha <= 0) {
          activeStars.splice(i, 1);
        }
      }

      // Gentle droplet highlight at pointer place
      if (mouseRef.current.inside) {
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(startTimer);
      window.removeEventListener('resize', resize);
      heroEl.removeEventListener('pointermove', handlePointerMove);
      heroEl.removeEventListener('pointerdown', handlePointerDown);
      heroEl.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, [heroRef]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
    />
  );
}

function HeroSlider({ setActiveTab }) {
  const [current, setCurrent] = useState(0);
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 600], [0, 120]); // parallax

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % heroSlides.length), 5500);
    return () => clearInterval(t);
  }, []);

  const slide = heroSlides[current];
  const openWA = () => {
    const text = encodeURIComponent('Hi Bagavan Steels Mart, I would like to request a quotation for steel & roofing materials.');
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section
      ref={heroRef}
      className="relative h-[100vh] min-h-[640px] max-h-[900px] overflow-hidden select-none"
    >
      {/* Parallax Background */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0"
          style={{ y: imgY }}
        >
          <img src={slide.img} alt={slide.label} className="w-full h-full object-cover scale-110" />
        </motion.div>
      </AnimatePresence>

      {/* Interactive Water Ripple & Water Drawing Overlay */}
      <WaterRippleOverlay heroRef={heroRef} />

      {/* Bottom gradient fade into StatsBar */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current + '-c'}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.65, ease: easeOut, delay: 0.1 }}
                className="space-y-6"
              >
                {/* Label pill */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/85 border border-blue-400/40 text-sky-300 text-xs font-bold uppercase tracking-widest shadow-md backdrop-blur-md"
                >
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  {slide.label}
                </motion.div>

                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight font-heading text-white">
                  {slide.title}
                  <br />
                  <span className="text-sky-400 block mt-1">
                    {slide.highlight}
                  </span>
                </h1>

                <p className="text-slate-200 text-lg leading-relaxed max-w-xl font-medium">
                  {slide.sub}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button onClick={() => setActiveTab('contact')} className="btn-primary text-sm font-bold shadow-lg shadow-blue-600/30">
                    Get a Free Quote
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button onClick={openWA} className="flex items-center gap-2 px-6 py-3.5 rounded-lg bg-slate-800/85 hover:bg-slate-700 text-white font-bold text-sm border border-slate-600 shadow-md backdrop-blur-md transition-all">
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    WhatsApp Us
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-16 right-10 z-20 flex flex-col gap-2.5">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-500 ${i === current ? 'h-8 w-2 bg-sky-400' : 'h-2 w-2 bg-slate-400/60 hover:bg-slate-200'}`}
          />
        ))}
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
      >
        <span className="text-slate-300 text-[10px] font-semibold uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-0.5 h-8 bg-gradient-to-b from-sky-400 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}


function StatsBar() {
  const stats = [
    { value: 1,     suffix: '',   label: 'Prime Hub in Dharmapuri' },
    { value: 4,     suffix: '+',  label: 'Product Categories' },
    { value: 4.7,   suffix: '★',  label: 'Verified Rating' },
    { value: 100,   suffix: '%',  label: 'Quality Assurance' },
  ];
  return (
    <section className="bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-800">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.08} className="py-10 px-8 text-center">
              <p className="text-4xl font-black font-heading text-white leading-none">
                <Counter end={s.value} suffix={s.suffix} />
              </p>
              <p className="text-xs text-slate-400 font-medium mt-2">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


function AboutSection({ setActiveTab }) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const badgeY1 = useTransform(scrollYProgress, [0, 1], [-25, 25]);
  const badgeY2 = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const openWA = () => {
    const text = encodeURIComponent('Hi Bagavan Steels Mart, I would like to request a quotation.');
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };
  return (
    <section ref={sectionRef} className="py-28 bg-slate-100/90 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — stacked images with 4th pic cutout */}
          <Reveal variant={fadeLeft} className="relative">
            <div className="relative hover-showcase-card group cursor-pointer bg-gradient-to-br from-slate-200 via-slate-100 to-slate-300 border border-slate-300 aspect-[4/3] flex items-center justify-center p-6 shadow-2xl">
              {/* Corner polygon (Pic 3 style) */}
              <div className="corner-polygon-red" />

              {/* Ambient backdrop glow */}
              <div className="absolute w-72 h-72 rounded-full bg-red-500/10 blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

              {/* Top-right brand pill */}
              <div className="absolute top-4 right-4 z-20">
                <span className="bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-slate-700 flex items-center gap-1.5 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
                  Original Jindal PPGL
                </span>
              </div>

              {/* 4th Pic Cutout */}
              <img
                src={STEEL_IMAGES.jindalCutout}
                alt="Jindal Sabrang PPGL Roofing Sheet"
                className="w-full h-full object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.25)] group-hover:scale-105 transition-all duration-700 ease-out relative z-10"
              />

              {/* Hover overlay with details (Pic 3 style) */}
              <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-[3px] p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                <span className="text-red-400 text-xs font-bold uppercase tracking-wider">Verified Material Supply</span>
                <h3 className="text-2xl font-black text-white font-heading mt-1">Jindal Trapezoidal PPGL Sheets</h3>
                <div className="w-14 h-1 bg-red-600 rounded-full my-3" />
                <p className="text-slate-300 text-xs leading-relaxed max-w-sm mb-3">
                  Corrosion-resistant, high tensile strength colour-coated sheets engineered for extreme weather and long-lasting commercial and residential roofing.
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold bg-emerald-950/80 px-2 py-1 rounded border border-emerald-800/50">
                    ISO 9001 Certified
                  </span>
                  <span className="text-[11px] font-mono text-blue-300 font-semibold bg-blue-950/80 px-2 py-1 rounded border border-blue-800/50">
                    25-Year Lifespan
                  </span>
                </div>
              </div>

              {/* Floating branch badge with scroll parallax */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.7, ease: easeOut }}
                style={{ y: badgeY1 }}
                className="absolute -top-5 -left-5 rounded-2xl text-white p-4 text-center shadow-2xl bg-slate-950 border border-slate-700 z-30 pointer-events-none"
              >
                <p className="text-3xl font-black font-heading text-white">1</p>
                <p className="text-xs text-slate-300 font-semibold leading-tight">Central<br/>Location</p>
              </motion.div>

              {/* Floating rating badge with scroll parallax */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.7, ease: easeOut }}
                style={{ y: badgeY2 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-5 border border-slate-100 max-w-[210px] z-30 pointer-events-none"
              >
                <p className="text-3xl font-black text-slate-900 font-heading">4.7★</p>
                <p className="text-xs text-slate-500 font-semibold mt-0.5">Verified Google Rating</p>
                <div className="flex gap-0.5 mt-2">
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} className={`w-3.5 h-3.5 ${s <= 4 ? 'text-amber-400 fill-amber-400' : 'text-amber-400 fill-amber-200'}`} />
                  ))}
                </div>
              </motion.div>
            </div>
          </Reveal>

          {/* Right — text */}
          <Reveal variant={fadeRight} className="space-y-7">
            <div>
              <span className="section-label bg-slate-200 border-slate-300 text-blue-700">Company Overview</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 font-heading leading-tight mt-4">
                Your Trusted <span className="text-gradient-blue">Steel & Roofing</span> Supplier
              </h2>
              <AnimatedDivider className="mt-5" />
            </div>

            <p className="text-slate-600 leading-relaxed text-base font-medium">
              {COMPANY_INFO.description}
            </p>

            <div className="bg-slate-200/80 border-l-4 border-blue-600 p-5 rounded-r-xl">
              <p className="text-sm text-slate-800 font-medium leading-relaxed italic">
                "{COMPANY_INFO.aboutStory}"
              </p>
            </div>

            {/* Branch info */}
            <div className="grid grid-cols-1 gap-4">
              {COMPANY_INFO.branches.map((b, i) => (
                <div key={b.id} className="p-4 rounded-xl bg-slate-200/90 border border-slate-300">
                  <p className="text-[10px] font-bold text-blue-700 uppercase tracking-wider mb-1">{b.label}</p>
                  <p className="text-xs font-semibold text-slate-800 leading-snug">{b.address}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <button onClick={() => setActiveTab('contact')} className="btn-primary">
                Request Quotation <ChevronRight className="w-4 h-4" />
              </button>
              <button onClick={openWA} className="btn-outline-blue">
                <MessageSquare className="w-4 h-4" /> WhatsApp Us
              </button>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}


function BrandTicker() {
  const items = [
    'Jindal Trapezoidal PPGL',
    'TMT Reinforcement Bars',
    'PPGL & GI Roofing Sheets',
    'MS Structural Steel',
    'Square / Rectangular Pipes',
    'Galvanized Iron Sheets',
    'MS Angles & Channels',
    'Civil Construction Steel',
  ];
  return (
    <div className="bg-slate-800 border-y border-slate-700 py-4 overflow-hidden">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 22, ease: 'linear' }}
        className="flex items-center gap-0 whitespace-nowrap"
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 text-slate-200 text-xs font-bold uppercase tracking-widest px-8 font-mono">
            <span className="w-2 h-2 rounded-full bg-sky-400 inline-block shrink-0 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}


function ProductsSection({ setActiveTab }) {
  return (
    <section className="py-28 bg-light-pattern">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <Reveal className="text-center mb-16">
          <span className="section-label">Verified Product Range</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 font-heading leading-tight mt-4">
            Our Product <span className="text-gradient-blue">Categories</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            Quality-assured, competitively priced steel and roofing materials serving Dharmapuri and surrounding regions.
          </p>
          <AnimatedDivider className="mx-auto mt-5" />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS_CATALOG.map((product, idx) => (
            <Reveal key={product.id} delay={idx * 0.12} variant={scaleUp}>
              <div
                onClick={() => setActiveTab('services')}
                className="hover-showcase-card group cursor-pointer h-[470px] relative flex flex-col justify-end"
              >
                {/* ── Top-Left Corner Polygon (Pic 3 style) ── */}
                <div className="corner-polygon-red" />

                {/* ── Verified Badge ── */}
                {product.verified && (
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-slate-950/75 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-slate-700/60 flex items-center gap-1 shadow-md">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" /> Verified
                    </span>
                  </div>
                )}

                {/* ── Background Image ── */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent pt-14 pb-6 px-6 flex flex-col justify-end transition-all duration-400 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none z-10">
                  <span className="text-red-400 text-xs font-semibold mb-1">
                    {product.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-heading leading-snug">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-slate-400 text-[11px] mt-2 font-medium">
                    <span>Hover for details</span>
                    <ChevronRight className="w-3 h-3 text-red-400" />
                  </div>
                </div>

                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/92 to-slate-950/70 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 backdrop-blur-[2px]">
                  <span className="text-red-400 text-xs font-semibold">
                    {product.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading leading-tight mt-1">
                    {product.name}
                  </h3>

                  {/* Red accent line like 3rd pic */}
                  <div className="w-14 h-1 bg-gradient-to-r from-red-600 to-rose-500 rounded-full my-3" />

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                    {product.description}
                  </p>

                  {/* Key specs checklist */}
                  <div className="space-y-1.5 mb-5">
                    {product.items.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={(e) => { e.stopPropagation(); setActiveTab('services'); }}
                      className="flex-1 py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md shadow-red-900/30"
                    >
                      <span>Explore Category</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const text = encodeURIComponent(`Hi Bagavan Steels Mart, I would like to inquire about ${product.name}.`);
                        window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
                      }}
                      className="p-2.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors"
                      title="WhatsApp Enquiry"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-400" />
                    </button>
                  </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-12">
          <button onClick={() => setActiveTab('services')} className="btn-outline-blue">
            View All Products <ArrowRight className="w-4 h-4" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}


function WhyUsSection() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <Reveal variant={fadeLeft}>
            <span className="section-label bg-slate-800 border-slate-700 text-sky-400">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mt-4 leading-tight text-white">
              The Bagavan <span className="text-sky-400">Steels Advantage</span>
            </h2>
            <AnimatedDivider className="mt-5" />
            <p className="text-slate-300 mt-5 leading-relaxed">
              Quality materials, competitive pricing, and responsive local supply across Dharmapuri, Pulkarai, Palacode, and surrounding areas of Tamil Nadu.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-4">
            {TRUST_ELEMENTS.map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.09} variant={fadeRight}>
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start gap-4 p-5 rounded-xl border border-slate-700/80 bg-slate-800/90 hover:border-sky-400 hover:shadow-xl transition-all shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{item.title}</h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


function GalleryPreview({ setActiveTab }) {
  const previews = [
    { img: STEEL_IMAGES.banner,          label: 'Jindal PPGL Sheets', category: 'Roofing' },
    { img: STEEL_IMAGES.tmtRods,         label: 'TMT Steel Bars',      category: 'TMT Steel' },
    { img: STEEL_IMAGES.structuralMain,  label: 'MS Structural Steel',  category: 'Structural' },
    { img: STEEL_IMAGES.structuralPipes, label: 'MS Pipes & Tubes',     category: 'Pipes' },
    { img: STEEL_IMAGES.roofingSteel2,   label: 'Industrial Roofing',   category: 'Roofing' },
  ];
  return (
    <section className="py-28 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-end justify-between mb-12">
          <Reveal>
            <span className="section-label bg-slate-200 border-slate-300 text-blue-700">Gallery</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 font-heading leading-tight mt-4">
              Our Materials <span className="text-gradient-blue">Showcase</span>
            </h2>
            <AnimatedDivider className="mt-5" />
          </Reveal>
          <Reveal delay={0.2}>
            <button onClick={() => setActiveTab('gallery')} className="btn-outline-blue text-sm hidden sm:flex">
              View All Photos <ArrowRight className="w-4 h-4" />
            </button>
          </Reveal>
        </div>

        {/* Magazine-style grid preview */}
        <div className="grid grid-cols-12 grid-rows-2 gap-3 h-[480px]">
          {/* Large left */}
          <Reveal delay={0} className="col-span-12 sm:col-span-6 row-span-2">
            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.5 }}
              className="gallery-item w-full h-full"
              onClick={() => setActiveTab('gallery')}
            >
              <img src={previews[0].img} alt={previews[0].label} className="w-full h-full object-cover" />
              <div className="overlay" />
              <div className="info">
                <span className="text-blue-300 text-[10px] font-bold uppercase tracking-widest">{previews[0].category}</span>
                <h3 className="text-white font-bold text-lg leading-snug">{previews[0].label}</h3>
              </div>
            </motion.div>
          </Reveal>
          {/* Right top row — 3 small */}
          {previews.slice(1, 4).map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.08} className="col-span-4 sm:col-span-2 row-span-1">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="gallery-item w-full h-full"
                onClick={() => setActiveTab('gallery')}
              >
                <img src={p.img} alt={p.label} className="w-full h-full object-cover" />
                <div className="overlay" />
                <div className="info">
                  <span className="text-blue-300 text-[9px] font-bold uppercase tracking-widest">{p.category}</span>
                  <h3 className="text-white font-semibold text-xs leading-snug">{p.label}</h3>
                </div>
              </motion.div>
            </Reveal>
          ))}
          {/* Right bottom - 1 wide */}
          <Reveal delay={0.35} className="col-span-12 sm:col-span-6 row-span-1">
            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.5 }}
              className="gallery-item w-full h-full"
              onClick={() => setActiveTab('gallery')}
            >
              <img src={previews[4].img} alt={previews[4].label} className="w-full h-full object-cover" />
              <div className="overlay" />
              <div className="info">
                <span className="text-blue-300 text-[10px] font-bold uppercase tracking-widest">{previews[4].category}</span>
                <h3 className="text-white font-bold text-base">{previews[4].label}</h3>
              </div>
            </motion.div>
          </Reveal>
        </div>

        <Reveal className="text-center mt-8 sm:hidden">
          <button onClick={() => setActiveTab('gallery')} className="btn-outline-blue text-sm">
            View All Photos <ArrowRight className="w-4 h-4" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}


function CTABanner({ setActiveTab }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const openWA = () => {
    const text = encodeURIComponent('Hi Bagavan Steels Mart, I need a quotation for steel and roofing materials.');
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };
  return (
    <section ref={ref} className="relative py-24 overflow-hidden border-t border-slate-700/60 bg-[#1e2532]">
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <img src={STEEL_IMAGES.warehouse} alt="" className="w-full h-full object-cover scale-110 opacity-20 grayscale mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1c2433] via-[#243042] to-[#1f2838]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(56,189,248,0.06),transparent_60%)]" />
      </motion.div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Reveal variant={fadeLeft} className="space-y-3 text-white text-center md:text-left">
            <span className="section-label bg-slate-700/60 border-slate-600/70 text-sky-300">Instant Quotation</span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading uppercase mt-3 text-white">
              Need Fast Pricing<br />& Stock Status?
            </h2>
            <p className="text-slate-300 max-w-md">
              Connect directly with Bagavan Steels Mart via WhatsApp or Phone for immediate quotes.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-1">
              {COMPANY_INFO.mobiles.map((num, i) => (
                <a key={i} href={`tel:${num}`} className="flex items-center gap-1.5 text-sm text-slate-300 hover:text-sky-300 transition-colors font-semibold">
                  <Phone className="w-4 h-4 text-sky-400" /> {num}
                </a>
              ))}
            </div>
          </Reveal>
          <Reveal variant={fadeRight} className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button onClick={openWA}
                    className="flex items-center gap-2 px-6 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all">
              <MessageSquare className="w-4 h-4" /> WhatsApp Us
            </button>
            <button onClick={() => setActiveTab('contact')} className="btn-primary text-sm font-bold shadow-md">
              Request Quote <ChevronRight className="w-4 h-4" />
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


export default function HomeView({ setActiveTab }) {
  return (
    <div className="bg-slate-100">
      <HeroSlider setActiveTab={setActiveTab} />
      <StatsBar />
      <BrandTicker />
      <AboutSection setActiveTab={setActiveTab} />
      <ProductsSection setActiveTab={setActiveTab} />
      <WhyUsSection />
      <GalleryPreview setActiveTab={setActiveTab} />
      <CTABanner setActiveTab={setActiveTab} />
    </div>
  );
}
