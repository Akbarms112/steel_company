import React from 'react';
import { COMPANY_INFO, VERIFIED_DEALERS } from '../data/steelData';
import { Phone, Mail, ChevronRight, Award, Building2, MessageSquare } from 'lucide-react';

export default function Footer({ setActiveTab }) {
  const handleNavClick = (id) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent('Hi Bagavan Steels Mart, I would like to enquire about steel and roofing materials.');
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <footer className="bg-[#151c27] text-slate-300 border-t border-slate-700/60">
      {/* ── Main Footer Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand Column */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <img
                src="/steel_company/logo.png"
                alt="Bagavan Steel Mart Logo"
                className="h-20 sm:h-22 w-auto object-contain drop-shadow-md"
              />
              <div>
                <h3 className="text-lg font-bold text-white font-heading tracking-tight leading-tight">
                  Bagavan Steels Mart
                </h3>
                <p className="text-xs text-sky-400 font-medium mt-0.5">
                  Founder: {COMPANY_INFO.founder}
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {COMPANY_INFO.subMessage}
            </p>
            <div className="flex flex-col gap-2">
              {COMPANY_INFO.mobiles.map((num, i) => (
                <a key={i} href={`tel:${num}`}
                   className="flex items-center gap-2 text-sm text-slate-200 hover:text-blue-400 transition-colors font-semibold">
                  <Phone className="w-4 h-4 text-blue-500" />
                  {num}
                </a>
              ))}
              <a href={`mailto:${COMPANY_INFO.email}`}
                 className="flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 text-blue-500" />
                {COMPANY_INFO.email}
              </a>
            </div>
            <button
              onClick={openWhatsApp}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all w-full justify-center shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              Quick WhatsApp Enquiry
            </button>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-black uppercase tracking-widest border-l-2 border-blue-500 pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { id: 'home',      label: 'Home' },
                { id: 'about',     label: 'About Us' },
                { id: 'services',  label: 'Product Catalog' },
                { id: 'customers', label: 'Industries & Customers' },
                { id: 'gallery',   label: 'Photo Gallery' },
                { id: 'branches',  label: 'Our Facility' },
                { id: 'contact',   label: 'Contact & Quote' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="hover:text-white transition-colors flex items-center gap-1.5 group text-slate-400"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-blue-500 group-hover:translate-x-1 transition-transform" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-black uppercase tracking-widest border-l-2 border-blue-500 pl-3">
              Product Categories
            </h4>
            <div className="flex flex-wrap gap-2">
              {VERIFIED_DEALERS.map((item) => (
                <span
                  key={item.id}
                  className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 text-slate-300 text-[11px] font-semibold px-2.5 py-1.5 rounded-lg"
                >
                  <Award className="w-3 h-3 text-blue-500" />
                  {item.name}
                </span>
              ))}
            </div>
          </div>

          {/* Branches */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-black uppercase tracking-widest border-l-2 border-blue-500 pl-3">
              Our Facility
            </h4>
            <div className="space-y-4">
              {COMPANY_INFO.branches.map((branch, i) => (
                <div key={branch.id} className="space-y-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span className="font-bold text-slate-200">{branch.label}</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed pl-5">{branch.address}</p>
                  <div className="pl-5 flex flex-col gap-1">
                    <a href={`tel:${branch.phone}`} className="hover:text-white transition-colors flex items-center gap-1">
                      <Phone className="w-3 h-3 text-blue-500" /> {branch.phone}
                    </a>
                    <a href={`tel:${branch.phone2}`} className="hover:text-white transition-colors flex items-center gap-1">
                      <Phone className="w-3 h-3 text-blue-500" /> {branch.phone2}
                    </a>
                  </div>
                </div>
              ))}
              <p className="text-xs text-slate-300">
                <span className="font-semibold text-sky-400">Founder:</span> {COMPANY_INFO.founder}
              </p>
              <p className="text-xs text-slate-400 pl-0">
                <span className="font-mono text-blue-400">GST:</span> {COMPANY_INFO.gstin}
              </p>
            </div>
          </div>

        </div>

        {/* ── Bottom Copyright ── */}
        <div className="pt-6 border-t border-slate-900 text-center text-[11px] text-slate-500 font-mono uppercase tracking-wider">
          <p>{COMPANY_INFO.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
