import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO, STEEL_IMAGES, TRUST_ELEMENTS } from '../data/steelData';
import { Award, MapPin, ShieldCheck, CheckCircle2, ChevronRight, Star, MessageSquare, Phone, Building2 } from 'lucide-react';

export default function AboutView({ setActiveTab }) {
  const openWhatsApp = () => {
    const text = encodeURIComponent('Hi Bagavan Steels Mart, I would like to request information about steel & roofing supply.');
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-white">

      {/* ── Page Header ── */}
      <section className="relative py-20 text-white overflow-hidden bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 space-y-4 relative z-10 text-center">
          <span className="section-label bg-white/10 border-white/20 text-white text-xs">
            Company Overview & Profile
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight font-heading">
            About <span className="text-gradient-metallic">Bagavan Steels Mart</span>
          </h1>
          <p className="text-slate-300 text-base max-w-xl mx-auto">
            Steel & Roofing Materials Supplier serving residential, commercial and construction requirements across Dharmapuri and nearby areas.
          </p>
        </div>
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -left-10 -bottom-20 w-60 h-60 rounded-full bg-white/5 pointer-events-none" />
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">

        {/* ── Main Story Split ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={STEEL_IMAGES.banner}
                alt="Bagavan Steels Mart"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 glass-white rounded-xl p-4">
                <p className="text-xs font-bold text-blue-700 uppercase tracking-widest">
                  Verified Product Association
                </p>
                <p className="text-sm font-bold text-slate-900 mt-1">
                  JSW Trapezoidal PPGL Roofing Sheets
                </p>
              </div>
            </div>
            {/* Rating badge */}
            <div className="absolute -top-5 -right-5 rounded-2xl text-white p-4 shadow-xl text-center bg-slate-900 border border-slate-700">
              <p className="text-2xl font-black text-amber-400">4.7★</p>
              <p className="text-xs text-slate-300 leading-tight font-semibold mt-0.5">Verified<br/>Rating</p>
            </div>
          </motion.div>

          {/* Right Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <span className="section-label">About Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-heading mt-4 leading-tight">
                Dependable Materials for{' '}
                <span className="text-gradient-blue">Your Construction Needs</span>
              </h2>
            </div>

            <div className="p-4 rounded-xl bg-blue-50 border-l-4 border-blue-600">
              <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                {COMPANY_INFO.description}
              </p>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              {COMPANY_INFO.aboutStory}
            </p>

            {/* Leadership Spotlight Card */}
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-blue-50/90 to-slate-100 border border-blue-100 shadow-sm">
              <div className="w-13 h-13 rounded-xl bg-blue-700 text-white flex items-center justify-center font-bold text-xl font-heading shadow-md shadow-blue-700/20 shrink-0">
                B
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider">Company Leadership</span>
                <h3 className="text-lg font-bold text-slate-900 leading-tight">Mr. {COMPANY_INFO.founder}</h3>
                <p className="text-xs text-slate-600 mt-0.5">Founder & Head · Direct Customer Support & Mill Wholesale Orders</p>
              </div>
            </div>

            {/* Trust items */}
            <div className="space-y-3">
              {TRUST_ELEMENTS.slice(0, 3).map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => setActiveTab('contact')}
                className="btn-primary text-sm"
              >
                Request Quotation
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={openWhatsApp}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-900/20 transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Us
              </button>
            </div>
          </motion.div>
        </div>

        {/* ── Business Identity Cards ── */}
        <div>
          <div className="text-center mb-10">
            <span className="section-label">Our Location</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading mt-4">
              Central <span className="text-gradient-blue">Facility</span>
            </h2>
            <div className="section-divider mx-auto mt-4"></div>
          </div>

          <div className="max-w-2xl mx-auto">
            {COMPANY_INFO.branches.map((branch, i) => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card-flat p-6 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-900">
                    <Building2 className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-blue-700 uppercase tracking-wider">Main Hub</p>
                    <h3 className="font-bold text-slate-900 text-sm">{branch.label}</h3>
                  </div>
                </div>
                <p className="text-sm text-slate-600 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  {branch.address}
                </p>
                <div className="flex flex-col gap-1.5">
                  <a href={`tel:${branch.phone}`} className="flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900">
                    <Phone className="w-4 h-4" />
                    {branch.phone}
                  </a>
                  <a href={`tel:${branch.phone2}`} className="flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900">
                    <Phone className="w-4 h-4" />
                    {branch.phone2}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Business Details ── */}
        <div className="rounded-2xl p-8 text-white bg-slate-950 border border-slate-800">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
            <div className="pt-4 sm:pt-0">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Founder</p>
              <p className="text-2xl font-bold font-heading text-white mt-1">Mr. {COMPANY_INFO.founder}</p>
              <p className="text-blue-300 text-xs mt-0.5">Founder & Head</p>
            </div>
            <div className="pt-4 sm:pt-0">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Industry</p>
              <p className="text-2xl font-bold font-heading text-white mt-1">Steel & Roofing</p>
              <p className="text-blue-300 text-xs mt-0.5">Multi-Brand Hub</p>
            </div>
            <div className="pt-4 sm:pt-0">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Verified Rating</p>
              <p className="text-2xl font-bold font-heading text-amber-400 mt-1">4.7 ★</p>
              <p className="text-blue-200 text-xs mt-0.5">Customer Trust</p>
            </div>
            <div className="pt-4 sm:pt-0">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Distributor</p>
              <p className="text-2xl font-bold font-heading text-white mt-1">JSW Steel</p>
              <p className="text-blue-200 text-xs mt-0.5">PPGL Roofing Sheets</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
