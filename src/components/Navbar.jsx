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
    { id: 'quote', label: 'Request Quote' },
    { id: 'contact', label: 'Contact' },
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
    <header className="sticky top-0 z-50 shadow-md bg-white border-b border-gray-100">
      {/* Top Info Bar */}
      <div className="bg-gray-900 text-gray-300 text-xs py-2 px-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          <div className="flex flex-wrap items-center gap-5">
            <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-semibold text-white">Call Now:</span> {COMPANY_INFO.phone}
            </a>
            <button onClick={openWhatsApp} className="flex items-center gap-1.5 hover:text-green-400 text-amber-300 transition-colors">
              <MessageSquare className="w-3.5 h-3.5 text-green-400" />
              <span className="font-semibold">WhatsApp Enquiry</span>
            </button>
            <a href={`mailto:${COMPANY_INFO.email}`} className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-gray-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-3 text-gray-400">
            <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-2 py-0.5 rounded text-[11px] font-bold">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>{COMPANY_INFO.publicRating}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-gray-400" />
              <span className="truncate max-w-md">{COMPANY_INFO.primaryArea}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Brand */}
        <button onClick={() => handleNavClick('home')} className="flex items-center gap-3 text-left group focus:outline-none">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-all ring-2 ring-amber-400/30">
            <span className="text-gray-950 font-black text-lg tracking-tighter">BS</span>
          </div>
          <div>
            <div className="font-extrabold text-xl md:text-2xl tracking-tight text-gray-900 group-hover:text-amber-600 transition-colors font-heading">
              BAGAVAN STEELS
            </div>
            <p className="text-[11px] font-bold text-amber-600 uppercase tracking-widest flex items-center gap-1.5">
              <ShieldCheck className="w-3 h-3 text-amber-500 inline" />
              Jindal PPGL Roofing & Steel Supplier
            </p>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-gray-50 p-1.5 rounded-full border border-gray-200">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  isActive
                    ? 'text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white hover:shadow-sm'
                }`}
              >
                {isActive && (
                  <div className="absolute inset-0 bg-gray-900 rounded-full shadow-md" />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={openWhatsApp}
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md flex items-center gap-1.5 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp</span>
          </button>

          <button
            onClick={() => handleNavClick('quote')}
            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-gray-950 font-extrabold text-xs shadow-md shadow-amber-500/20 flex items-center gap-1.5 transition-all"
          >
            <span>Get Quote</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200 border border-gray-200 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-between ${
                  isActive
                    ? 'bg-gray-900 text-white shadow-md'
                    : 'text-gray-700 bg-gray-50 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-400'}`} />
              </button>
            );
          })}
          <div className="pt-2 grid grid-cols-2 gap-2">
            <button
              onClick={openWhatsApp}
              className="py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs text-center flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>
            <button
              onClick={() => handleNavClick('quote')}
              className="py-3 rounded-xl bg-amber-500 text-gray-950 font-extrabold text-xs text-center"
            >
              Request Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
