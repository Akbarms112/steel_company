import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/steelData';
import {
  Phone,
  Menu,
  X,
  ChevronRight,
  MessageSquare,
  ShieldCheck,
  Home,
  Building2,
  Package,
  Users,
  Image,
  MapPin,
  PhoneCall,
} from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home',      label: 'Home',      icon: Home },
    { id: 'about',     label: 'About Us',  icon: Building2 },
    { id: 'services',  label: 'Products',  icon: Package },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'gallery',   label: 'Gallery',   icon: Image },
    { id: 'branches',  label: 'Location',  icon: MapPin },
    { id: 'contact',   label: 'Contact',   icon: PhoneCall },
  ];

  const navTiles = [
    { id: 'home',      label: 'Home',      desc: 'Overview & Steel',      icon: Home,      accent: 'text-blue-600 bg-blue-500/10' },
    { id: 'services',  label: 'Products',  desc: 'TMT & Roofing Sheets',  icon: Package,   accent: 'text-sky-600 bg-sky-500/10' },
    { id: 'about',     label: 'About Us',  desc: 'Founder Bagavan',       icon: Building2, accent: 'text-indigo-600 bg-indigo-500/10' },
    { id: 'customers', label: 'Customers', desc: 'Builders & Sheds',      icon: Users,     accent: 'text-amber-600 bg-amber-500/10' },
    { id: 'gallery',   label: 'Gallery',   desc: 'Live Yard & Sites',     icon: Image,     accent: 'text-emerald-600 bg-emerald-500/10' },
    { id: 'branches',  label: 'Location',  desc: 'Dharmapuri Main Rd',    icon: MapPin,    accent: 'text-rose-600 bg-rose-500/10' },
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 flex items-center justify-between gap-3 sm:gap-4">

        {/* Logo + Brand (Visible on mobile & desktop) */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 sm:gap-3 focus:outline-none group shrink-0 text-left min-w-0"
        >
          <img
            src="/steel_company/logo.png"
            alt="Bagavan Steel Mart Logo"
            className="h-14 sm:h-16 w-auto object-contain scale-x-[1.06] group-hover:scale-105 transition-transform duration-300 drop-shadow-sm shrink-0"
          />
          <div className="text-left min-w-0">
            <div className="text-base sm:text-2xl font-black tracking-tight text-slate-900 font-heading leading-tight truncate">
              Bagavan Steels Mart
            </div>
            <p className="text-[11px] sm:text-xs text-slate-500 font-medium flex items-center gap-1 sm:gap-1.5 mt-0.5 whitespace-nowrap overflow-hidden text-ellipsis">
              <span className="font-bold text-blue-700">Founder: {COMPANY_INFO.founder}</span>
              <span className="text-slate-300">·</span>
              <span className="hidden md:inline">Roofing & Industrial Steel · Dharmapuri</span>
              <span className="inline md:hidden text-slate-500">Dharmapuri</span>
            </p>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 flex-nowrap shrink-0">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`group relative px-3.5 py-2 rounded-lg text-sm font-semibold whitespace-nowrap shrink-0 transition-all duration-200 ${
                  isActive
                    ? 'text-blue-700 bg-blue-50/80 font-bold'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-white/80'
                }`}
              >
                <span>{item.label}</span>
                {/* Animated active & hover bottom accent indicator */}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2.5px] rounded-full transition-all duration-300 ${
                    isActive
                      ? 'w-7 bg-blue-600 shadow-sm shadow-blue-500/50'
                      : 'w-0 bg-blue-500 group-hover:w-7'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          <a
            href={`tel:${COMPANY_INFO.mobiles[0]}`}
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-slate-700 hover:text-blue-700 text-xs font-semibold hover:bg-white/80 transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-blue-600 transition-transform group-hover:rotate-12" />
            <span>{COMPANY_INFO.mobiles[0]}</span>
          </a>

          <button
            onClick={openWhatsApp}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white text-xs font-bold transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-emerald-600/20 hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-white text-xs font-bold transition-all duration-200 shadow-md bg-blue-600 hover:bg-blue-700 shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Get Quote</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-xl bg-slate-200/90 text-slate-800 hover:bg-slate-300 active:bg-slate-400 transition-colors shrink-0"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* ── Mobile Drawer (Fresh App Grid Design) ── */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/98 backdrop-blur-2xl border-t border-slate-200/80 px-4 pt-3 pb-6 shadow-2xl rounded-b-3xl space-y-3">
          
          {/* Quick Info & Call Bar */}
          <div className="flex items-center justify-between px-1 pb-2 border-b border-slate-100 text-xs">
            <div className="flex items-center gap-1.5 text-slate-600 font-medium text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Dharmapuri, Tamil Nadu</span>
            </div>
            <a
              href={`tel:${COMPANY_INFO.mobiles[0]}`}
              className="flex items-center gap-1 font-bold text-blue-700 bg-blue-50 active:bg-blue-100 px-2.5 py-1 rounded-lg text-xs transition-colors"
            >
              <Phone className="w-3 h-3 text-blue-600" />
              <span>{COMPANY_INFO.mobiles[0]}</span>
            </a>
          </div>

          {/* Quick 2-Column App Grid */}
          <div className="grid grid-cols-2 gap-2">
            {navTiles.map((item) => {
              const isActive = activeTab === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left p-3 rounded-2xl transition-all flex flex-col justify-between min-h-[82px] ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'bg-slate-50 hover:bg-white border border-slate-200/80 text-slate-800 shadow-xs active:scale-[0.98]'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                      isActive ? 'bg-white/20 text-white' : item.accent
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                    )}
                  </div>
                  <div className="mt-2">
                    <div className={`text-sm font-black leading-tight ${isActive ? 'text-white' : 'text-slate-900'}`}>
                      {item.label}
                    </div>
                    <div className={`text-[10.5px] font-medium leading-tight mt-0.5 ${isActive ? 'text-blue-100' : 'text-slate-400'}`}>
                      {item.desc}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Contact & Instant Quote Feature Card */}
          <button
            onClick={() => handleNavClick('contact')}
            className={`w-full text-left p-3.5 rounded-2xl transition-all flex items-center justify-between ${
              activeTab === 'contact'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg shadow-blue-600/30 ring-2 ring-blue-500'
                : 'bg-gradient-to-r from-slate-900 to-slate-950 text-white shadow-md shadow-slate-950/20 active:scale-[0.99]'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-sky-400 flex items-center justify-center shrink-0">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-black tracking-tight flex items-center gap-2">
                  <span>Contact & Quotation</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold">Fast Reply</span>
                </div>
                <p className="text-[11px] text-slate-300 font-medium">Direct wholesale quotes & phone enquiry</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400 shrink-0" />
          </button>

          {/* Fast Contact Action Buttons */}
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            <button
              onClick={openWhatsApp}
              className="py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-900/30 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </button>
            <a
              href={`tel:${COMPANY_INFO.mobiles[0]}`}
              className="py-3 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-blue-900/30 transition-all text-center"
            >
              <Phone className="w-4 h-4" />
              <span>Direct Call</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
