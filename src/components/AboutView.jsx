import React from 'react';
import { COMPANY_INFO, STEEL_IMAGES, TRUST_ELEMENTS } from '../data/steelData';
import { ThreeDTiltCard, ThreeDScrollReveal } from './ThreeDCard';
import { Award, MapPin, Building, ShieldCheck, CheckCircle2, ChevronRight, Star, MessageSquare } from 'lucide-react';

export default function AboutView({ setActiveTab }) {
  const openWhatsApp = () => {
    const text = encodeURIComponent(`Hi Bagavan Steels, I would like to request information about steel & roofing supply.`);
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-white py-12">
      {/* Page Header */}
      <section className="bg-gray-900 py-14 text-white text-center relative overflow-hidden mb-12">
        <div className="max-w-4xl mx-auto px-4 space-y-3 relative z-10">
          <span className="text-xs font-extrabold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
            Company Overview & Profile
          </span>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight font-heading">
            ABOUT <span className="text-amber-400">BAGAVAN STEELS</span>
          </h1>
          <p className="text-gray-300 text-sm max-w-xl mx-auto">
            Steel & Roofing Materials Supplier serving residential, commercial and construction requirements in Dharmapuri and nearby areas.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Main Story Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left 3D Image Card */}
          <ThreeDScrollReveal direction="right">
            <ThreeDTiltCard depth={45}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 group">
                <img
                  src={STEEL_IMAGES.banner}
                  alt="Bagavan Steels Jindal PPGL Sheets"
                  className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 glass-white p-4 rounded-2xl border border-gray-100 shadow-xl">
                  <p className="text-xs font-extrabold text-amber-600 uppercase tracking-widest">
                    Verified Product Association
                  </p>
                  <p className="text-sm font-extrabold text-gray-900">
                    Jindal Trapezoidal PPGL Roofing Sheets
                  </p>
                </div>
              </div>
            </ThreeDTiltCard>
          </ThreeDScrollReveal>

          {/* Right Text Copy */}
          <div className="space-y-6">
            <ThreeDScrollReveal direction="left">
              <div className="flex items-center gap-3 text-amber-600 font-extrabold text-xs uppercase tracking-widest">
                <div className="w-8 h-0.5 bg-amber-500" />
                <span>ABOUT US — RECOMMENDED COPY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 uppercase tracking-tight font-heading mt-3 leading-tight">
                DEPENDABLE MATERIALS FOR <br />
                <span className="text-gradient-gold">YOUR CONSTRUCTION NEEDS</span>
              </h2>
            </ThreeDScrollReveal>

            <ThreeDScrollReveal direction="left" delay={0.1}>
              <div className="p-4 rounded-2xl bg-amber-50 border-l-4 border-amber-500 shadow-sm space-y-2">
                <p className="text-sm text-gray-800 font-semibold leading-relaxed">
                  "{COMPANY_INFO.description}"
                </p>
              </div>
            </ThreeDScrollReveal>

            <ThreeDScrollReveal direction="left" delay={0.15}>
              <p className="text-gray-600 text-sm leading-relaxed">
                {COMPANY_INFO.aboutStory}
              </p>
            </ThreeDScrollReveal>

            <ThreeDScrollReveal direction="left" delay={0.2}>
              <div className="space-y-3 pt-2">
                {TRUST_ELEMENTS.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-extrabold text-gray-900">{item.title}</h4>
                      <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ThreeDScrollReveal>

            <ThreeDScrollReveal direction="left" delay={0.25}>
              <div className="flex items-center gap-3 pt-2">
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
                  <span>WhatsApp Us</span>
                </button>
              </div>
            </ThreeDScrollReveal>
          </div>

        </div>
      </div>
    </div>
  );
}
