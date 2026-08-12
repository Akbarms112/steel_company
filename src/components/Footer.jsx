import React from 'react';
import { COMPANY_INFO, AUTHORIZED_DEALERS } from '../data/steelData';
import { Phone, Mail, MapPin, ShieldCheck, ChevronRight, Award } from 'lucide-react';

export default function Footer({ setActiveTab }) {
  const handleNavClick = (id) => { setActiveTab(id); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <footer className="bg-gray-950 text-gray-500 border-t border-gray-800 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-gray-900 font-black text-sm shadow-md">TSC</div>
              <h3 className="text-lg font-bold text-white font-heading">TRICHY STEEL COMPANY</h3>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">Leading merchants in Steel and Cement business around Dharmapuri and across Tamil Nadu since 2008.</p>
            <div className="pt-1 flex items-center gap-2 text-xs font-semibold text-gray-400">
              <ShieldCheck className="w-4 h-4 text-gray-500" />
              <span>SuryaDev Appreciation Award Winner</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider border-l-2 border-gray-600 pl-3">Quick Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { id: 'home', label: 'Home Page' }, { id: 'about', label: 'About Company' },
                { id: 'services', label: 'Products & Services' }, { id: 'gallery', label: 'Photo Gallery' },
                { id: 'branches', label: 'Tamil Nadu Branches' }, { id: 'contact', label: 'Contact Us & Location' },
              ].map((link) => (
                <li key={link.id}>
                  <button onClick={() => handleNavClick(link.id)} className="hover:text-white transition-colors flex items-center gap-1.5 group text-gray-500">
                    <ChevronRight className="w-3.5 h-3.5 text-gray-600 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Dealerships */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider border-l-2 border-gray-600 pl-3">Authorized Dealerships</h4>
            <div className="flex flex-wrap gap-1.5">
              {AUTHORIZED_DEALERS.map((dealer) => (
                <span key={dealer.id} className="bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600 text-xs px-2.5 py-1.5 rounded-lg transition-colors flex items-center gap-1">
                  <Award className="w-3 h-3 text-gray-600" /> {dealer.name}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider border-l-2 border-gray-600 pl-3">Main Office Contact</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gray-600 mt-1 shrink-0" />
                <span className="leading-snug">{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gray-600 shrink-0" />
                <span>Phone: {COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-gray-600 mt-1 shrink-0" />
                <span>Mobile: {COMPANY_INFO.mobiles.join(' / ')}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gray-600 shrink-0" />
                <span className="text-xs">{COMPANY_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-800 text-center text-xs text-gray-600">
          <p className="font-mono tracking-tight uppercase">{COMPANY_INFO.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
