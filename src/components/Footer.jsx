import React from 'react';
import { COMPANY_INFO, VERIFIED_DEALERS } from '../data/steelData';
import { Phone, Mail, MapPin, ShieldCheck, ChevronRight, Award, Star } from 'lucide-react';

export default function Footer({ setActiveTab }) {
  const handleNavClick = (id) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-950 font-black text-sm shadow-md font-heading">
                BS
              </div>
              <h3 className="text-lg font-extrabold text-white font-heading tracking-tight">
                {COMPANY_INFO.name}
              </h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {COMPANY_INFO.subMessage}
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
              <Star className="w-4 h-4 fill-slate-300 text-slate-300" />
              <span>Public Rating: {COMPANY_INFO.publicRating}</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-extrabold uppercase tracking-widest border-l-2 border-slate-500 pl-3">
              Website Structure
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'about', label: 'About Us' },
                { id: 'services', label: 'Product Catalog' },
                { id: 'customers', label: 'Industries & Customers' },
                { id: 'gallery', label: 'Photo Gallery' },
                { id: 'quote', label: 'Request a Quote' },
                { id: 'contact', label: 'Contact Details' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="hover:text-white transition-colors flex items-center gap-1.5 group text-slate-400"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:translate-x-1 transition-transform" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Categories */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-extrabold uppercase tracking-widest border-l-2 border-slate-500 pl-3">
              Verified Stock Categories
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {VERIFIED_DEALERS.map((item) => (
                <span 
                  key={item.id}
                  className="bg-slate-900 border border-slate-800 text-slate-300 text-[11px] px-2.5 py-1.5 rounded-lg flex items-center gap-1"
                >
                  <Award className="w-3 h-3 text-slate-400" />
                  {item.name}
                </span>
              ))}
            </div>
          </div>

          {/* Location & Contact */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-extrabold uppercase tracking-widest border-l-2 border-slate-500 pl-3">
              Location & Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Phone: {COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Mobile: {COMPANY_INFO.mobiles.join(' / ')}</span>
              </li>
              <li className="flex items-center gap-2 font-mono">
                <ShieldCheck className="w-4 h-4 text-slate-400 shrink-0" />
                <span>GSTIN: {COMPANY_INFO.gstin}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Email: {COMPANY_INFO.email}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-slate-900 text-center text-[11px] text-slate-500 font-mono uppercase tracking-wider">
          <p>{COMPANY_INFO.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
