import React from 'react';
import { TARGET_CUSTOMERS } from '../data/steelData';
import { ThreeDTiltCard, ThreeDScrollReveal } from './ThreeDCard';
import { Home, HardHat, Building, Factory, Wrench, Tractor, ChevronRight } from 'lucide-react';

const iconMap = {
  Home: Home,
  HardHat: HardHat,
  Building: Building,
  Factory: Factory,
  Wrench: Wrench,
  Tractor: Tractor,
};

export default function TargetCustomersView({ setActiveTab }) {
  return (
    <div className="bg-white py-12">
      {/* Header */}
      <section className="bg-slate-950 py-14 text-white text-center relative overflow-hidden mb-12">
        <div className="max-w-4xl mx-auto px-4 space-y-3 relative z-10">
          <span className="text-xs font-extrabold text-slate-300 uppercase tracking-widest bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
            Target Segments & Applications
          </span>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight font-heading">
            INDUSTRIES & <span className="text-slate-300">CUSTOMERS</span>
          </h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            We supply specialized steel and roofing materials tailored for homeowners, contractors, factories, fabricators, and agricultural structures.
          </p>
        </div>
      </section>

      {/* Target Customer Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TARGET_CUSTOMERS.map((item, idx) => {
            const IconComp = iconMap[item.icon] || Building;
            return (
              <ThreeDScrollReveal key={idx} delay={idx * 0.08}>
                <ThreeDTiltCard depth={35}>
                  <div className="bg-white border border-slate-200 rounded-3xl p-7 shadow-lg hover:shadow-2xl hover:border-slate-900 transition-all space-y-4 group flex flex-col justify-between h-full">
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-2xl bg-slate-950 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                        <IconComp className="w-6 h-6" />
                      </div>

                      <div>
                        <h3 className="text-lg font-extrabold text-slate-950 group-hover:text-slate-700 transition-colors">
                          {item.segment}
                        </h3>
                        <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                          {item.requirement}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Tailored Stock
                      </span>
                      <button
                        onClick={() => setActiveTab('quote')}
                        className="text-xs font-bold text-slate-950 group-hover:text-slate-700 flex items-center gap-1"
                      >
                        <span>Get Quote</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </ThreeDTiltCard>
              </ThreeDScrollReveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
