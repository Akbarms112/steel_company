import React from 'react';
import { motion } from 'framer-motion';
import { TARGET_CUSTOMERS } from '../data/steelData';
import { Home, HardHat, Building, Factory, Wrench, Tractor, ChevronRight, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/steelData';

const iconMap = {
  Home: Home,
  HardHat: HardHat,
  Building: Building,
  Factory: Factory,
  Wrench: Wrench,
  Tractor: Tractor,
};

export default function TargetCustomersView({ setActiveTab }) {
  const openWhatsApp = () => {
    const text = encodeURIComponent('Hi Bagavan Steels Mart, I would like to enquire about steel and roofing supply for my project.');
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-white">

      {/* ── Page Header ── */}
      <section className="relative py-20 text-white overflow-hidden bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 space-y-4 relative z-10 text-center">
          <span className="section-label bg-white/10 border-white/20 text-white text-xs">
            Target Segments & Applications
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight font-heading">
            Industries & <span className="text-gradient-metallic">Applications</span>
          </h1>
          <p className="text-slate-300 text-base max-w-xl mx-auto">
            We supply specialized steel and roofing materials tailored for homeowners, contractors, factories, fabricators, and agricultural structures.
          </p>
        </div>
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -left-10 -bottom-20 w-60 h-60 rounded-full bg-white/5 pointer-events-none" />
      </section>

      {/* ── Customer Cards Grid ── */}
      <section className="py-20 bg-light-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">Who We Serve</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-heading mt-4">
              Serving Every <span className="text-gradient-blue">Construction Need</span>
            </h2>
            <div className="section-divider mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TARGET_CUSTOMERS.map((item, idx) => {
              const IconComp = iconMap[item.icon] || Building;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="card-flat p-7 flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform bg-slate-900">
                      <IconComp className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                        {item.segment}
                      </h3>
                      <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                        {item.requirement}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">
                      Tailored Stock Available
                    </span>
                    <button
                      onClick={() => setActiveTab('contact')}
                      className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 transition-colors"
                    >
                      Get Quote
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-16 rounded-2xl p-10 text-white text-center bg-slate-950 border border-slate-800"
          >
            <h3 className="text-2xl font-black font-heading uppercase mb-3">
              Are You a Contractor or Builder?
            </h3>
            <p className="text-slate-300 text-sm mb-6 max-w-xl mx-auto">
              We offer bulk discounts and priority supply for civil contractors, commercial builders, and large project requirements. Contact us for a customized wholesale quotation.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={openWhatsApp}
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/30 backdrop-blur-md transition-all"
              >
                WhatsApp for Bulk Pricing
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className="btn-white text-sm font-bold"
              >
                Request Quotation
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
