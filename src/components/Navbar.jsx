import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/steelData';
import { Phone, Mail, MapPin, Menu, X, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services & Products' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'branches', label: 'Branches' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 shadow-sm bg-white border-b border-slate-100">
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          <div className="flex flex-wrap items-center gap-5">
            <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-1.5 hover:text-amber-100 transition-colors">
              <Phone className="w-3.5 h-3.5 text-white" />
              <span className="font-semibold">Phone:</span> {COMPANY_INFO.phone}
            </a>
            <a href={`tel:${COMPANY_INFO.mobiles[0]}`} className="flex items-center gap-1.5 hover:text-amber-100 transition-colors">
              <Phone className="w-3.5 h-3.5 text-white" />
              <span className="font-semibold">Mobile:</span> {COMPANY_INFO.mobiles.join(' / ')}
            </a>
            <a href={`mailto:${COMPANY_INFO.email}`} className="hidden md:flex items-center gap-1.5 hover:text-amber-100 transition-colors">
              <Mail className="w-3.5 h-3.5 text-white" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
          <div className="hidden lg:flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-white" />
            <span className="truncate max-w-md text-amber-50">Opp: S.M.Arumugam Polytechnic, Dharmapuri - 636702</span>
            <span className="bg-white/20 border border-white/30 text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ml-2">
              Est. 2008
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Brand */}
        <button onClick={() => handleNavClick('home')} className="flex items-center gap-3 text-left group focus:outline-none">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-md shadow-amber-300/40 group-hover:scale-105 transition-all ring-2 ring-amber-200">
            <span className="text-white font-black text-lg tracking-tighter">TSC</span>
          </div>
          <div>
            <div className="font-extrabold text-xl md:text-2xl tracking-tight text-slate-900 group-hover:text-amber-600 transition-colors font-heading">
              TRICHY STEEL COMPANY
            </div>
            <p className="text-[11px] font-semibold text-amber-600 uppercase tracking-widest flex items-center gap-1.5">
              <ShieldCheck className="w-3 h-3 text-amber-500 inline" />
              Iron & Cement Merchants • Tamil Nadu
            </p>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-50 p-1.5 rounded-full border border-slate-200">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white hover:shadow-sm'
                }`}
              >
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full shadow-md shadow-amber-200" />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => handleNavClick('contact')}
            className="px-5 py-2.5 rounded-xl btn-gold text-sm flex items-center gap-2"
          >
            <span>Get Quote</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 border border-slate-200 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-all flex items-center justify-between ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md'
                    : 'text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
              </button>
            );
          })}
          <div className="pt-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-3 rounded-xl btn-gold text-center"
            >
              Contact Us & Request Price
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
