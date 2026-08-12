import React from 'react';
import { COMPANY_INFO, AUTHORIZED_DEALERS } from '../data/steelData';
import { Phone, Mail, MapPin, ShieldCheck, ChevronRight, Award, Building2 } from 'lucide-react';

export default function Footer({ setActiveTab }) {
  const handleNavClick = (id) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white font-black text-sm shadow-md">
                TSC
              </div>
              <h3 className="text-lg font-bold text-white font-heading">TRICHY STEEL COMPANY</h3>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Leading merchants in Steel (Iron) and Cement business around Dharmapuri District and across Tamil Nadu since 2008.
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs font-semibold text-amber-400">
              <ShieldCheck className="w-4 h-4 text-amber-500" />
              <span>SuryaDev Appreciation Award Winner</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider border-l-2 border-amber-500 pl-3">Quick Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'about', label: 'About Company' },
                { id: 'services', label: 'Products & Services' },
                { id: 'gallery', label: 'Photo Gallery' },
                { id: 'branches', label: 'Tamil Nadu Branches' },
                { id: 'contact', label: 'Contact Us & Location' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5 group text-slate-400"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-amber-500 group-hover:translate-x-1 transition-transform" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Authorized Dealerships */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider border-l-2 border-amber-500 pl-3">Authorized Dealerships</h4>
            <div className="flex flex-wrap gap-1.5">
              {AUTHORIZED_DEALERS.map((dealer) => (
                <span key={dealer.id} className="bg-slate-800 border border-slate-700 text-slate-300 hover:text-amber-300 hover:border-amber-500/40 text-xs px-2.5 py-1.5 rounded-lg transition-colors flex items-center gap-1">
                  <Award className="w-3 h-3 text-amber-500" />
                  {dealer.name}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider border-l-2 border-amber-500 pl-3">Main Office Contact</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 mt-1 shrink-0" />
                <span className="leading-snug">{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Phone: {COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 mt-1 shrink-0" />
                <span>Mobile: {COMPANY_INFO.mobiles.join(' / ')}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="text-xs">{COMPANY_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
          <p className="font-mono tracking-tight uppercase">{COMPANY_INFO.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
