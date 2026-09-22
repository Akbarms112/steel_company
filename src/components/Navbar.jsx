import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/steelData';
import { Phone, Menu, X, ChevronRight, MessageSquare, ShieldCheck } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home',      label: 'Home' },
    { id: 'about',     label: 'About Us' },
    { id: 'services',  label: 'Products' },
    { id: 'customers', label: 'Customers' },
    { id: 'gallery',   label: 'Gallery' },
    { id: 'branches',  label: 'Location' },
    { id: 'contact',   label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent('Hi Bagavan Steels Mart, I would like to inquire about steel & roofing materials.');
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-100/95 backdrop-blur-md border-b border-slate-300 shadow-sm transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 flex items-center justify-between gap-4">

        {/* Logo + Brand */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 focus:outline-none group shrink-0"
        >
          <img
            src="/steel_company/logo.png"
            alt="Bagavan Steel Mart Logo"
            className="h-14 sm:h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
          />
          <div className="hidden sm:block text-left">
            <div className="text-lg font-bold tracking-tight text-slate-900 font-heading leading-tight">
              Bagavan Steels Mart
            </div>
            <p className="text-[10.5px] text-slate-500 font-medium flex items-center gap-1.5">
              <span className="font-semibold text-blue-700">Founder: {COMPANY_INFO.founder}</span>
              <span>·</span>
              <span>Roofing & Industrial Steel · Dharmapuri</span>
            </p>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 flex-nowrap shrink-0">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3.5 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap shrink-0 transition-all duration-200 ${
                  isActive
                    ? 'text-blue-700 bg-blue-500/10 border-b-2 border-blue-600'
                    : 'text-slate-700 hover:text-blue-700 hover:bg-slate-200/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          <a
            href={`tel:${COMPANY_INFO.mobiles[0]}`}
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-slate-700 hover:text-blue-700 text-xs font-semibold hover:bg-slate-200/80 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-blue-600" />
            <span>{COMPANY_INFO.mobiles[0]}</span>
          </a>

          <button
            onClick={openWhatsApp}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white text-xs font-bold transition-all duration-200 shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-white text-xs font-bold transition-all duration-200 shadow-md bg-blue-600 hover:bg-blue-700 shadow-blue-600/20"
          >
            <span>Get Quote</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-lg bg-slate-200 text-slate-800 hover:bg-slate-300 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* ── Mobile Drawer ── */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-100 border-t border-slate-300 px-4 pt-3 pb-6 space-y-1 shadow-2xl">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center justify-between ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-800 hover:bg-slate-200'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
              </button>
            );
          })}

          <div className="pt-3 border-t border-slate-200 grid grid-cols-2 gap-2">
            <button
              onClick={openWhatsApp}
              className="py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="py-2.5 rounded-lg text-white font-bold text-xs text-center bg-slate-900 hover:bg-slate-800"
            >
              Get Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
