import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/steelData';
import { Phone, Mail, MapPin, Menu, X, ShieldCheck, ChevronRight, Star, MessageSquare } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Products' },
    { id: 'customers', label: 'Target Customers' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact & Quote' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(`Hi Bagavan Steels, I would like to inquire about steel & roofing materials.`);
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950 text-white border-b border-slate-800 shadow-xl">
      {/* Top Info Bar */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs py-2 px-4 text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <div className="flex flex-wrap items-center gap-6">
            <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-semibold text-slate-200">Call Now:</span> {COMPANY_INFO.phone}
            </a>
            <button onClick={openWhatsApp} className="flex items-center gap-2 hover:text-white transition-colors">
              <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-semibold">WhatsApp Enquiry</span>
            </button>
            <a href={`mailto:${COMPANY_INFO.email}`} className="hidden md:flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-4 text-slate-400">
            <div className="flex items-center gap-1.5 bg-slate-800 px-2.5 py-0.5 rounded-full border border-slate-700 text-slate-200 text-[11px] font-semibold">
              <Star className="w-3 h-3 text-slate-300 fill-slate-300" />
              <span>{COMPANY_INFO.publicRating}</span>
            </div>
            <div className="bg-slate-800 px-2.5 py-0.5 rounded-full border border-slate-700 text-slate-300 text-[11px] font-mono font-semibold">
              GST: {COMPANY_INFO.gstin}
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span className="truncate max-w-md">{COMPANY_INFO.primaryArea}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <button onClick={() => handleNavClick('home')} className="flex items-center gap-3.5 text-left group focus:outline-none">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center shadow-lg group-hover:border-slate-500 transition-all">
            <span className="text-white font-black text-xl tracking-tighter font-heading">BS</span>
          </div>
          <div>
            <div className="font-black text-xl md:text-2xl tracking-tight text-white group-hover:text-slate-300 transition-colors font-heading uppercase">
              BAGAVAN STEELS
            </div>
            <p className="text-[11px] font-medium text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-400 inline" />
              Jindal PPGL Roofing & Steel Supplier
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-2 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 tracking-wide ${
                  isActive
                    ? 'text-slate-950 font-black'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {isActive && (
                  <div className="absolute inset-0 bg-white rounded-xl shadow-md -z-0" />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={openWhatsApp}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 flex items-center gap-2 shadow-sm transition-all"
          >
            <MessageSquare className="w-4 h-4 text-slate-300" />
            <span>WhatsApp</span>
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-200 text-slate-950 font-black text-xs shadow-lg flex items-center gap-1.5 transition-all"
          >
            <span>Get Quote</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950 px-4 pt-3 pb-6 space-y-2 shadow-2xl">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-between ${
                  isActive
                    ? 'bg-white text-slate-950 font-black shadow-md'
                    : 'text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-slate-500'}`} />
              </button>
            );
          })}
          <div className="pt-2 grid grid-cols-2 gap-2">
            <button
              onClick={openWhatsApp}
              className="py-3 rounded-xl bg-slate-800 text-white font-bold text-xs border border-slate-700 text-center flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="py-3 rounded-xl bg-white text-slate-950 font-black text-xs text-center"
            >
              Request Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
