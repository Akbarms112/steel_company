import React, { useState } from 'react';
import { COMPANY_INFO, PRODUCTS_CATALOG } from '../data/steelData';
import { ThreeDTiltCard, ThreeDScrollReveal } from './ThreeDCard';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare, Clock, Truck, Building2 } from 'lucide-react';

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: 'Jindal Trapezoidal PPGL Roofing Sheets',
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
`*NEW ENQUIRY – BAGAVAN STEELS*
*Customer:* ${formData.name || 'Not specified'}
*Phone:* ${formData.phone || 'Not specified'}
*Product:* ${formData.product}
*Quantity:* ${formData.quantity || 'As required'}
*Location:* ${formData.location || 'Dharmapuri'}
*Requirement:* ${formData.requirement || 'Standard supply'}`;

    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="bg-white py-12">
      {/* Header */}
      <section className="bg-slate-950 py-14 text-white text-center relative overflow-hidden mb-12">
        <div className="max-w-4xl mx-auto px-4 space-y-3 relative z-10">
          <span className="text-xs font-extrabold text-slate-300 uppercase tracking-widest bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
            Official Contact & Lead System
          </span>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight font-heading">
            CONTACT & <span className="text-slate-300">GET QUOTE</span>
          </h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Get instant pricing, place wholesale orders, or visit our yard at Sangampatti / Pulikarai, Dharmapuri.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Main Grid: Single Form + Contact & Map Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Single Unified Quotation & Enquiry Form */}
          <ThreeDScrollReveal direction="right" className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl">
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-6 pb-3 border-b border-slate-100 flex items-center gap-2">
                <Send className="w-5 h-5 text-slate-700" />
                Quotation & Enquiry Form
              </h2>

              {submitted && (
                <div className="p-4 mb-6 rounded-2xl bg-slate-900 text-white text-xs flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-300 shrink-0" />
                  <span>Your quotation request has been sent! Our team will contact you at {formData.phone}.</span>
                </div>
              )}

              <form onSubmit={handleWhatsAppSend} className="space-y-5 text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                      Customer Name <span className="text-slate-950">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                      Mobile Phone Number <span className="text-slate-950">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter 10-digit mobile number"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200 text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                      Product Category <span className="text-slate-950">*</span>
                    </label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200 text-sm transition-all"
                    >
                      <option value="Jindal Trapezoidal PPGL Roofing Sheets">Jindal Trapezoidal PPGL Roofing Sheets</option>
                      <option value="TMT / Reinforcement Steel Bars">TMT / Reinforcement Steel Bars</option>
                      <option value="MS Angles, Channels & Beams">MS Angles, Channels & Beams</option>
                      <option value="MS Square / Round Steel Pipes">MS Square / Round Steel Pipes</option>
                      <option value="GI / Colour-Coated Sheets">GI / Colour-Coated Sheets</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                      Quantity Required
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="e.g. 1000 sq.ft or 5 Tons"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200 text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                    Delivery Location / City
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Dharmapuri, Pulikarai, Selliyampatti"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200 text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                    Requirement / Message Details
                  </label>
                  <textarea
                    name="requirement"
                    rows="3"
                    value={formData.requirement}
                    onChange={handleChange}
                    placeholder="Specify gauge thickness, TMT grade (Fe 500D), or installation requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200 text-sm transition-all resize-none"
                  ></textarea>
                </div>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="submit"
                    className="py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      alert(`Quotation request noted for ${formData.name || 'Customer'}! Call ${COMPANY_INFO.phone} for immediate response.`);
                      setSubmitted(true);
                    }}
                    className="py-3.5 px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-950 border border-slate-300 font-extrabold text-xs uppercase tracking-wider shadow-sm transition-all"
                  >
                    Submit Form
                  </button>
                </div>
              </form>
            </div>
          </ThreeDScrollReveal>

          {/* Right Address & Map Details */}
          <div className="lg:col-span-5 space-y-6">
            <ThreeDScrollReveal direction="left">
              <ThreeDTiltCard depth={40}>
                <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-800">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <h2 className="text-base font-black uppercase font-heading text-slate-200">
                      Bagavan Steels Office
                    </h2>
                    <span className="text-xs bg-slate-800 text-slate-300 font-bold px-2 py-0.5 rounded border border-slate-700">
                      4.7 ⭐ Rating
                    </span>
                  </div>

                  <div className="space-y-4 text-xs">
                    <div>
                      <h3 className="text-base font-extrabold text-white uppercase font-heading">{COMPANY_INFO.name}</h3>
                      <p className="text-slate-400 mt-0.5">{COMPANY_INFO.tagline}</p>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-slate-400 uppercase block font-bold">Mapped Yard Location</span>
                        <p className="text-sm font-semibold text-slate-200 leading-relaxed mt-0.5">{COMPANY_INFO.address}</p>
                        <p className="text-[11px] text-slate-400 mt-1 font-mono">Justdial Area: Pulikarai / Dharmapuri</p>
                      </div>
                    </div>

                    <div className="space-y-2 pt-3 border-t border-slate-800 text-sm">
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                        <p><span className="text-slate-400 text-xs">Phone :</span> <a href={`tel:${COMPANY_INFO.phone}`} className="font-bold text-white hover:text-slate-300">{COMPANY_INFO.phone}</a></p>
                      </div>

                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                        <p><span className="text-slate-400 text-xs">Email :</span> <a href={`mailto:${COMPANY_INFO.email}`} className="font-bold text-slate-300 hover:underline">{COMPANY_INFO.email}</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </ThreeDTiltCard>
            </ThreeDScrollReveal>

            {/* Google Map */}
            <ThreeDScrollReveal direction="left" delay={0.15}>
              <div className="bg-white border border-slate-200 rounded-3xl p-4 shadow-md space-y-3">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  Dharmapuri Mapped Location
                </span>
                <div className="rounded-2xl overflow-hidden aspect-video border border-slate-200 bg-slate-50">
                  <iframe
                    title="Bagavan Steels Location"
                    src="https://maps.google.com/maps?q=Selliyampatti%20Dharmapuri%20Tamilnadu%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </ThreeDScrollReveal>
          </div>

        </div>
      </div>
    </div>
  );
}
