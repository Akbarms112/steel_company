import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO, PRODUCTS_CATALOG } from '../data/steelData';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare, Building2, ChevronRight } from 'lucide-react';

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: 'JSW Trapezoidal PPGL Roofing Sheets',
    quantity: '1000 sq.ft',
    location: 'Dharmapuri',
    requirement: 'Roofing sheet requirement',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const text =
`*NEW ENQUIRY – BAGAVAN STEELS MART*
*Customer:* ${formData.name || 'Not specified'}
*Phone:* ${formData.phone || 'Not specified'}
*Product:* ${formData.product}
*Quantity:* ${formData.quantity || 'As required'}
*Location:* ${formData.location || 'Dharmapuri'}
*Requirement:* ${formData.requirement || 'Standard supply'}`;

    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
    setSubmitted(true);
  };

  const inputClass = "w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-white";
  const labelClass = "block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2";

  return (
    <div className="bg-white">

      {/* ── Page Header ── */}
      <section className="relative py-20 text-white overflow-hidden bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 space-y-4 relative z-10 text-center">
          <span className="section-label bg-white/10 border-white/20 text-white text-xs">
            Official Contact & Lead System
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight font-heading">
            Contact Us & <span className="text-gradient-metallic">Get a Quote</span>
          </h1>
          <p className="text-slate-300 text-base max-w-xl mx-auto">
            Get instant pricing, place wholesale orders, or visit our main facility at Dharmapuri Main Road, Pulkarai.
          </p>
          {/* Quick phones */}
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            {COMPANY_INFO.mobiles.map((num, i) => (
              <a key={i} href={`tel:${num}`}
                 className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-sm px-4 py-2 rounded-lg transition-all">
                <Phone className="w-4 h-4 text-blue-400" />
                {num}
              </a>
            ))}
          </div>
        </div>
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -left-10 -bottom-20 w-60 h-60 rounded-full bg-white/5 pointer-events-none" />
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* ── Branch Cards ── */}
        <div>
          <div className="text-center mb-8">
            <span className="section-label">Our Location</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading mt-3">
              Visit Our <span className="text-gradient-blue">Main Facility</span>
            </h2>
            <div className="section-divider mx-auto mt-3"></div>
          </div>
          <div className="max-w-2xl mx-auto">
            {COMPANY_INFO.branches.map((branch, i) => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card-flat p-6 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-slate-900">
                    <Building2 className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-blue-700 uppercase tracking-wider">Main Hub</p>
                    <h3 className="font-bold text-slate-900">{branch.label}</h3>
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Pulkarai+Dharmapuri+Main+Road+Dharmapuri+Tamil+Nadu"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open in Google Maps"
                  className="text-sm text-slate-600 hover:text-blue-700 flex items-start gap-2 group transition-colors"
                >
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:underline">{branch.address}</span>
                </a>
                <div className="grid grid-cols-2 gap-2">
                  <a href={`tel:${branch.phone}`}
                     className="flex items-center gap-2 px-3 py-2.5 rounded-lg border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white text-xs font-bold transition-all text-center justify-center">
                    <Phone className="w-3.5 h-3.5" />
                    {branch.phone}
                  </a>
                  <a href={`tel:${branch.phone2}`}
                     className="flex items-center gap-2 px-3 py-2.5 rounded-lg border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white text-xs font-bold transition-all text-center justify-center">
                    <Phone className="w-3.5 h-3.5" />
                    {branch.phone2}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Form + Contact Details ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="card-flat p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-900">
                  <Send className="w-5 h-5 text-blue-400" />
                </div>
                <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">
                  Quotation & Enquiry Form
                </h2>
              </div>

              {submitted && (
                <div className="p-4 mb-6 rounded-xl flex items-center gap-3 text-sm text-white bg-emerald-600 shadow-md">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Your quotation request has been sent! Our team will contact you at {formData.phone}.</span>
                </div>
              )}

              <form onSubmit={handleWhatsAppSend} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Customer Name <span className="text-blue-600">*</span></label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Phone Number <span className="text-blue-600">*</span></label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Product / Material Required</label>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    {PRODUCTS_CATALOG.map((p) => (
                      p.items.map((item) => (
                        <option key={item} value={item}>{item}</option>
                      ))
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Quantity / Tonnage</label>
                    <input
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="e.g. 5 Tonnes, 500 sq.ft"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Delivery Location</label>
                    <input
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Village / Town / District"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Additional Requirements</label>
                  <textarea
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    rows={3}
                    placeholder="e.g. Roofing for 30×40 ft shed, TMT bars for foundation, etc."
                    className={inputClass + " resize-none"}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-white font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all bg-emerald-600 hover:bg-emerald-500 hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-5 h-5" />
                  Send via WhatsApp
                </button>
                <p className="text-center text-xs text-slate-400">
                  Submitting this form will open WhatsApp with your enquiry details pre-filled.
                </p>
              </form>
            </div>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Contact */}
            <div className="card-flat p-6 space-y-5">
              <h3 className="text-base font-black text-slate-900 uppercase tracking-tight border-b border-slate-100 pb-3">
                Direct Contact
              </h3>

              <div className="space-y-4">
                {COMPANY_INFO.mobiles.map((num, i) => (
                  <a key={i} href={`tel:${num}`}
                     className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors group">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-slate-900">
                      <Phone className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Phone {i + 1}</p>
                      <p className="font-bold text-slate-900 text-sm group-hover:text-blue-700 transition-colors">{num}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 ml-auto group-hover:translate-x-1 group-hover:text-blue-600 transition-all" />
                  </a>
                ))}

                <a href={`mailto:${COMPANY_INFO.email}`}
                   className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors group">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-slate-900">
                    <Mail className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Email</p>
                    <p className="font-bold text-slate-900 text-sm group-hover:text-blue-700 transition-colors">{COMPANY_INFO.email}</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Business Info */}
            <div className="rounded-2xl p-6 text-white space-y-3 bg-slate-950 border border-slate-800">
              <h3 className="text-sm font-bold uppercase tracking-wider">Business Details</h3>
              <div className="space-y-2 text-sm text-slate-300">
                <p className="font-bold text-white">{COMPANY_INFO.fullName}</p>
                <p className="flex items-center justify-between">
                  <span>Location:</span>
                  <span className="font-bold text-sky-400">Pulikarai, Dharmapuri</span>
                </p>
                <p className="flex items-center justify-between">
                  <span>GSTIN:</span>
                  <span className="font-mono text-blue-300">{COMPANY_INFO.gstin}</span>
                </p>
                <p className="flex items-center justify-between">
                  <span>Rating:</span>
                  <span className="text-amber-400 font-bold">4.7 / 5 ⭐ Verified</span>
                </p>
              </div>
            </div>

            {/* WhatsApp Quick */}
            <button
              onClick={() => {
                const text = encodeURIComponent('Hi Bagavan Steels Mart, I would like to request a quotation.');
                window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
              }}
              className="w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold text-sm transition-all bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-900/20 hover:-translate-y-0.5"
            >
              <MessageSquare className="w-5 h-5" />
              Quick WhatsApp Enquiry
            </button>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
