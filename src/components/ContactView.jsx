import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/steelData';
import { ThreeDTiltCard, ThreeDScrollReveal } from './ThreeDCard';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare, Building2, Star } from 'lucide-react';

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const text = 
`*ENQUIRY – BAGAVAN STEELS*
*Name:* ${formData.name || 'Customer'}
*Phone:* ${formData.phone}
*Message:* ${formData.message || 'General Enquiry'}`;

    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="bg-white py-12">
      {/* Header */}
      <section className="bg-gray-900 py-14 text-white text-center relative overflow-hidden mb-12">
        <div className="max-w-4xl mx-auto px-4 space-y-3 relative z-10">
          <span className="text-xs font-extrabold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
            Dharmapuri, Tamil Nadu
          </span>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight font-heading">
            CONTACT <span className="text-amber-400">BAGAVAN STEELS</span>
          </h1>
          <p className="text-gray-300 text-sm max-w-xl mx-auto">
            Visit our yard at Sangampatti / Pulikarai, Dharmapuri, or contact us directly via phone or WhatsApp for quick pricing.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Form */}
          <ThreeDScrollReveal direction="right" className="lg:col-span-7">
            <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-xl">
              <h2 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-6 pb-3 border-b border-gray-100 flex items-center gap-2">
                <Send className="w-5 h-5 text-amber-500" />
                Quick Message / Enquiry
              </h2>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h3 className="text-lg font-bold text-gray-900">Message Dispatched!</h3>
                  <p className="text-xs text-gray-600">Our representative will call or WhatsApp you back shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleWhatsAppSend} className="space-y-5 text-sm">
                  <div>
                    <label className="block text-xs font-extrabold text-gray-700 uppercase tracking-wider mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:border-gray-900 text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-extrabold text-gray-700 uppercase tracking-wider mb-2">Phone / Mobile</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter mobile number"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:border-gray-900 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-extrabold text-gray-700 uppercase tracking-wider mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email address"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:border-gray-900 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-gray-700 uppercase tracking-wider mb-2">Requirement / Message</label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specify roofing sheet requirements, TMT bar quantity..."
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:border-gray-900 text-sm resize-none"
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      type="submit"
                      className="py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp Direct</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSubmitted(true)}
                      className="py-3.5 px-6 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-bold text-xs uppercase tracking-wider shadow-lg"
                    >
                      Submit Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </ThreeDScrollReveal>

          {/* Right Address & Map */}
          <div className="lg:col-span-5 space-y-6">
            <ThreeDScrollReveal direction="left">
              <ThreeDTiltCard depth={40}>
                <div className="bg-gray-900 text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl border border-gray-800">
                  <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                    <h2 className="text-lg font-black uppercase font-heading text-amber-400">
                      Bagavan Steels Location
                    </h2>
                    <span className="text-xs bg-amber-400/20 text-amber-300 font-bold px-2 py-0.5 rounded border border-amber-400/30">
                      4.7 ⭐ Rating
                    </span>
                  </div>

                  <div className="space-y-4 text-xs">
                    <div>
                      <h3 className="text-base font-extrabold text-white uppercase font-heading">{COMPANY_INFO.name}</h3>
                      <p className="text-gray-400 mt-0.5">{COMPANY_INFO.tagline}</p>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-400 uppercase block font-bold">Publicly Mapped Location</span>
                        <p className="text-sm font-semibold text-gray-200 leading-relaxed mt-0.5">{COMPANY_INFO.address}</p>
                        <p className="text-[11px] text-amber-400 mt-1 font-mono">Justdial Area: Pulikarai / Dharmapuri</p>
                      </div>
                    </div>

                    <div className="space-y-2 pt-3 border-t border-gray-800 text-sm">
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                        <p><span className="text-gray-400 text-xs">Phone :</span> <a href={`tel:${COMPANY_INFO.phone}`} className="font-bold text-white hover:text-amber-400">{COMPANY_INFO.phone}</a></p>
                      </div>

                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                        <p><span className="text-gray-400 text-xs">Email :</span> <a href={`mailto:${COMPANY_INFO.email}`} className="font-bold text-amber-400 hover:underline">{COMPANY_INFO.email}</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </ThreeDTiltCard>
            </ThreeDScrollReveal>

            {/* Google Map */}
            <ThreeDScrollReveal direction="left" delay={0.15}>
              <div className="bg-white border border-gray-200 rounded-3xl p-4 shadow-md space-y-3">
                <span className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-amber-500" />
                  Dharmapuri Mapped Location
                </span>
                <div className="rounded-2xl overflow-hidden aspect-video border border-gray-200 bg-gray-50">
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
