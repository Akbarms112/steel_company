import React, { useState } from 'react';
import { COMPANY_INFO, PRODUCTS_CATALOG } from '../data/steelData';
import { ThreeDTiltCard, ThreeDScrollReveal } from './ThreeDCard';
import { Send, MessageSquare, CheckCircle2, ShieldCheck, Truck, Clock, AlertCircle } from 'lucide-react';

export default function QuoteView() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: 'Jindal Trapezoidal PPGL Roofing Sheets',
    quantity: '1000 sq.ft',
    location: 'Dharmapuri',
    requirement: 'Industrial shed roofing requirement',
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
            Quotation & Lead System
          </span>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight font-heading">
            REQUEST A <span className="text-slate-300">QUOTATION</span>
          </h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Steel and roofing prices vary by grade, thickness, size, and weight. Submit your requirements below to receive an instant, accurate quotation.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* How It Works Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {[
            { step: '01', title: 'Share Requirement', desc: 'Specify product type, size, quantity and delivery location.' },
            { step: '02', title: 'Get Quote', desc: 'Receive custom bulk quotation & stock confirmation.' },
            { step: '03', title: 'Confirm Order', desc: 'Finalize grade specifications & payment term.' },
            { step: '04', title: 'Delivery / Pickup', desc: 'Fast site delivery or direct yard pickup in Dharmapuri.' },
          ].map((item, idx) => (
            <ThreeDScrollReveal key={idx} delay={idx * 0.1}>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-900 hover:shadow-lg transition-all card-hover relative overflow-hidden">
                <span className="text-4xl font-black text-slate-200 absolute top-2 right-3 select-none">
                  {item.step}
                </span>
                <div className="relative z-10 space-y-2">
                  <h3 className="text-sm font-extrabold text-slate-900">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </ThreeDScrollReveal>
          ))}
        </div>

        {/* Main Quote Form & Instant Summary 3D Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Quote Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl">
            <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-6 pb-3 border-b border-slate-100 flex items-center gap-2">
              <Send className="w-5 h-5 text-slate-700" />
              Direct Quotation Form
            </h2>

            {submitted && (
              <div className="p-4 mb-6 rounded-2xl bg-slate-900 text-white text-xs flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-slate-300 shrink-0" />
                <span>Quotation request dispatched via WhatsApp! Our representative will respond with current pricing.</span>
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
                    placeholder="Enter your name"
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
                    Estimated Quantity <span className="text-slate-950">*</span>
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    required
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="e.g. 1500 sq.ft or 5 Tons"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200 text-sm transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                  Delivery Location (City / Area)
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
                  Additional Requirements / Specific Details
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
                  onClick={() => alert(`Quotation request noted for ${formData.name}! Call ${COMPANY_INFO.phone} for immediate confirmation.`)}
                  className="py-3.5 px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-950 border border-slate-300 font-extrabold text-xs uppercase tracking-wider shadow-sm transition-all"
                >
                  Submit Form
                </button>
              </div>
            </form>
          </div>

          {/* 3D Tilt Quote Preview Card */}
          <div className="lg:col-span-5 space-y-6">
            <ThreeDTiltCard depth={50}>
              <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-800">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <span className="text-xs text-slate-300 font-extrabold uppercase tracking-widest">
                    Live Quote Summary
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">BAGAVAN STEELS</span>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <span className="text-slate-400 uppercase tracking-wider block">Customer Name</span>
                    <p className="text-sm font-bold text-white mt-0.5">{formData.name || 'Your Name'}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-slate-400 uppercase tracking-wider block">Contact Phone</span>
                      <p className="text-sm font-bold text-slate-200 mt-0.5">{formData.phone || 'Phone Number'}</p>
                    </div>
                    <div>
                      <span className="text-slate-400 uppercase tracking-wider block">Target Location</span>
                      <p className="text-sm font-bold text-white mt-0.5">{formData.location || 'Dharmapuri'}</p>
                    </div>
                  </div>

                  <div>
                    <span className="text-slate-400 uppercase tracking-wider block">Selected Product</span>
                    <p className="text-sm font-bold text-slate-200 mt-0.5">{formData.product}</p>
                  </div>

                  <div>
                    <span className="text-slate-400 uppercase tracking-wider block">Quantity</span>
                    <p className="text-sm font-bold text-white mt-0.5">{formData.quantity}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 space-y-1">
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Requirement Details</span>
                    <p className="text-xs italic">{formData.requirement}</p>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-300" />
                    Response within 30 mins
                  </span>
                  <span className="flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5 text-slate-300" />
                    Local Delivery Ready
                  </span>
                </div>
              </div>
            </ThreeDTiltCard>
          </div>

        </div>
      </div>
    </div>
  );
}
