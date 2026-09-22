import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../data/steelData';
import { MapPin, Phone, Building2, ChevronRight, MessageSquare, Mail } from 'lucide-react';

export default function BranchesView({ setActiveTab }) {
  const openWhatsApp = () => {
    const text = encodeURIComponent('Hi Bagavan Steels Mart, I would like to get directions or contact your facility.');
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-white">

      {/* ── Page Header ── */}
      <section className="relative py-20 text-white overflow-hidden bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 space-y-4 relative z-10 text-center">
          <span className="section-label bg-white/10 border-white/20 text-white text-xs">
            Distribution Network
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight font-heading">
            Our Facility in <span className="text-gradient-metallic">Dharmapuri</span>
          </h1>
          <p className="text-slate-300 text-base max-w-xl mx-auto">
            Prime facility located at Pulkarai on Dharmapuri Main Road — ensuring fast, reliable supply of steel and roofing materials.
          </p>
        </div>
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -left-10 -bottom-20 w-60 h-60 rounded-full bg-white/5 pointer-events-none" />
      </section>

      {/* ── Branches Grid ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          {COMPANY_INFO.branches.map((branch, idx) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.55 }}
              className="card-flat p-0 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                {/* Branch number */}
                <div className="md:w-1/4 p-8 flex flex-col items-center justify-center text-white text-center bg-slate-900 border-r border-slate-800">
                  <Building2 className="w-10 h-10 text-blue-200 mb-3" />
                  <p className="text-2xl font-black font-heading">HQ</p>
                  <p className="text-blue-200 font-bold text-sm mt-1">Main Facility</p>
                  <span className="mt-3 bg-white/10 border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {branch.label}
                  </span>
                </div>

                {/* Branch details */}
                <div className="md:w-3/4 p-8 space-y-5">
                  <h2 className="text-2xl font-black text-slate-900 font-heading">
                    {COMPANY_INFO.fullName}
                  </h2>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Pulkarai+Dharmapuri+Main+Road+Dharmapuri+Tamil+Nadu"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Click to open Google Maps"
                    className="flex items-start gap-3 p-4 rounded-xl bg-blue-50 hover:bg-blue-100/80 border border-blue-200 transition-all group cursor-pointer"
                  >
                    <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <p className="text-xs font-bold text-blue-700 uppercase tracking-wider">Address</p>
                        <span className="text-[11px] text-blue-600 font-semibold group-hover:underline flex items-center gap-1">
                          Open in Maps <ChevronRight className="w-3 h-3" />
                        </span>
                      </div>
                      <p className="text-slate-800 font-semibold text-sm leading-relaxed">{branch.address}</p>
                    </div>
                  </a>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a href={`tel:${branch.phone}`}
                       className="flex items-center gap-3 p-3.5 rounded-xl bg-white border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition-all group">
                      <Phone className="w-5 h-5 shrink-0" />
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider opacity-70">Primary Phone</p>
                        <p className="font-bold text-sm">{branch.phone}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href={`tel:${branch.phone2}`}
                       className="flex items-center gap-3 p-3.5 rounded-xl bg-white border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition-all group">
                      <Phone className="w-5 h-5 shrink-0" />
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider opacity-70">Alternate Phone</p>
                        <p className="font-bold text-sm">{branch.phone2}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                    </a>
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
                </div>
              </div>
            </motion.div>
          ))}

          {/* ── Interactive Google Map Location ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="card-flat p-0 overflow-hidden shadow-xl border border-slate-200"
          >
            <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Google Maps Location
                </span>
                <h3 className="text-xl font-bold font-heading">
                  Bagavan Steels Mart — Main Yard & Facility
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Dharmapuri Main Road, Pulkarai, Dharmapuri (DT), Tamil Nadu
                </p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Pulkarai+Dharmapuri+Main+Road+Dharmapuri+Tamil+Nadu"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs font-bold py-2.5 px-4 shrink-0 shadow-md inline-flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>
            </div>

            <div className="relative w-full h-[380px] sm:h-[450px] bg-slate-100 group overflow-hidden">
              <iframe
                title="Bagavan Steels Mart Google Map Location"
                src="https://maps.google.com/maps?q=Pulkarai,+Dharmapuri+Main+Road,+Dharmapuri,+Tamil+Nadu&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 pointer-events-none scale-100 group-hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
                tabIndex="-1"
                aria-hidden="true"
              />
              
              {/* Overlay link: clicking or touching anywhere opens Google Maps */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Pulkarai+Dharmapuri+Main+Road+Dharmapuri+Tamil+Nadu"
                target="_blank"
                rel="noopener noreferrer"
                title="Click anywhere on the map to open in Google Maps"
                aria-label="Open Bagavan Steels Mart in Google Maps"
                className="absolute inset-0 z-20 cursor-pointer flex flex-col items-center justify-between p-4 sm:p-6 bg-slate-950/0 hover:bg-slate-950/15 active:bg-slate-950/25 transition-all"
              >
                {/* Floating pill badge on top right */}
                <div className="self-end bg-slate-900/90 hover:bg-slate-900 text-white px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-lg border border-white/20 backdrop-blur-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Tap anywhere to open</span>
                </div>

                {/* Central prompt on hover / touch */}
                <div className="bg-slate-900/90 text-white px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold shadow-2xl border border-white/20 backdrop-blur-md flex items-center gap-2 transform group-hover:scale-105 transition-all duration-300">
                  <MapPin className="w-4 h-4 text-rose-400 animate-bounce" />
                  <span>Click / Tap anywhere to open in Google Maps</span>
                </div>

                <div className="h-4"></div>
              </a>
            </div>
          </motion.div>

          {/* Common info card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="rounded-2xl p-8 text-white text-center bg-slate-950 border border-slate-800"
          >
            <h3 className="text-xl font-bold font-heading mb-4">General Contact & Business Info</h3>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-1">Company</p>
                <p className="font-semibold text-white">Bagavan Steels Mart</p>
              </div>
              <div>
                <p className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-1">Email</p>
                <a href={`mailto:${COMPANY_INFO.email}`} className="font-semibold hover:underline">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div>
                <p className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-1">GSTIN</p>
                <p className="font-mono font-semibold">{COMPANY_INFO.gstin}</p>
              </div>
              <div>
                <p className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-1">Rating</p>
                <p className="font-semibold">4.7 / 5 ⭐ Verified</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
