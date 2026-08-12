import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../data/steelData';
import { Phone, Mail, MapPin, RefreshCw, Send, CheckCircle2, AlertCircle, Building2 } from 'lucide-react';

function FadeIn({ children, delay = 0, direction = 'up', className = '' }) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
    },
    visible: {
      opacity: 1, y: 0, x: 0,
      transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={variants} className={className}>
      {children}
    </motion.div>
  );
}

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: '', email: '', mobile: '', address: '', comments: '', captchaInput: '',
  });
  const [captchaCode, setCaptchaCode] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [captchaError, setCaptchaError] = useState('');

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789abcdefghijkmnpqrstuvwxyz';
    let code = '';
    for (let i = 0; i < 6; i++) code += chars.charAt(Math.floor(Math.random() * chars.length));
    setCaptchaCode(code);
    setCaptchaError('');
  };

  useEffect(() => { generateCaptcha(); }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (captchaError) setCaptchaError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.captchaInput.trim().toLowerCase() !== captchaCode.toLowerCase()) {
      setCaptchaError('Captcha code does not match. Please try again.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* ── Header ── */}
      <section className="bg-light-pattern py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight font-heading">
              CONTACT <span className="text-gradient-gold">TRICHY STEEL</span>
            </h1>
            <p className="text-slate-500 text-base leading-relaxed">
              Send us your inquiries, request wholesale pricing, or visit our head office at Krishnagiri Main Road, Dharmapuri.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Form + Address ── */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Left — Contact Form */}
            <FadeIn direction="right" className="lg:col-span-7">
              <div className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-md">
                <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-6 pb-3 border-b border-slate-100 flex items-center gap-2 font-heading">
                  <Send className="w-5 h-5 text-amber-500" />
                  Contact Form
                </h2>

                {submitted ? (
                  <div className="p-8 rounded-xl bg-amber-50 border border-amber-200 text-center space-y-4">
                    <CheckCircle2 className="w-12 h-12 text-amber-500 mx-auto" />
                    <h3 className="text-2xl font-bold text-slate-900">Thank You!</h3>
                    <p className="text-sm text-slate-600">
                      Your inquiry has been received. We'll contact you shortly at{' '}
                      <span className="font-bold text-amber-600">{formData.mobile}</span>.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', mobile: '', address: '', comments: '', captchaInput: '' });
                        generateCaptcha();
                      }}
                      className="px-6 py-2.5 rounded-xl btn-gold text-xs"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 text-sm">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {[
                        { label: 'Name', name: 'name', type: 'text', placeholder: 'Your full name', required: true },
                        { label: 'Email', name: 'email', type: 'email', placeholder: 'Your email address', required: true },
                      ].map((f) => (
                        <div key={f.name}>
                          <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                            {f.label} {f.required && <span className="text-amber-500">*</span>}
                          </label>
                          <input
                            type={f.type}
                            name={f.name}
                            required={f.required}
                            value={formData[f.name]}
                            onChange={handleChange}
                            placeholder={f.placeholder}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all text-sm"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {[
                        { label: 'Mobile', name: 'mobile', type: 'tel', placeholder: 'Your phone number', required: true },
                        { label: 'Address', name: 'address', type: 'text', placeholder: 'City / District', required: false },
                      ].map((f) => (
                        <div key={f.name}>
                          <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                            {f.label} {f.required && <span className="text-amber-500">*</span>}
                          </label>
                          <input
                            type={f.type}
                            name={f.name}
                            required={f.required}
                            value={formData[f.name]}
                            onChange={handleChange}
                            placeholder={f.placeholder}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all text-sm"
                          />
                        </div>
                      ))}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                        Comments / Requirement Details
                      </label>
                      <textarea
                        name="comments"
                        rows="4"
                        value={formData.comments}
                        onChange={handleChange}
                        placeholder="Specify steel grades, cement quantity, or roofing requirements..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all resize-none text-sm"
                      ></textarea>
                    </div>

                    {/* Captcha */}
                    <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 space-y-3">
                      <label className="block text-xs font-bold text-amber-700 uppercase tracking-wider">
                        Verification Captcha
                      </label>
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="px-5 py-2.5 rounded-lg bg-white border-2 border-amber-300 select-none font-mono text-xl font-black text-amber-600 tracking-widest shadow-sm">
                          <span className="italic">{captchaCode}</span>
                        </div>
                        <button
                          type="button"
                          onClick={generateCaptcha}
                          className="text-xs font-semibold text-amber-600 hover:text-amber-700 flex items-center gap-1.5 focus:outline-none"
                        >
                          <RefreshCw className="w-3.5 h-3.5" />
                          <span>Can't read the image? Click here to refresh</span>
                        </button>
                      </div>
                      <input
                        type="text"
                        name="captchaInput"
                        required
                        value={formData.captchaInput}
                        onChange={handleChange}
                        placeholder="Enter the code above here"
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-amber-200 text-slate-900 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all text-sm"
                      />
                      {captchaError && (
                        <p className="text-xs font-semibold text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {captchaError}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl btn-gold text-base uppercase tracking-wider"
                    >
                      Submit Form
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>

            {/* Right — Contact Address */}
            <div className="lg:col-span-5 space-y-6">
              <FadeIn direction="left">
                <div className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-md space-y-6">
                  <h2 className="text-xl font-black text-amber-600 uppercase tracking-tight pb-3 border-b border-slate-100 flex items-center gap-2 font-heading">
                    <Building2 className="w-5 h-5 text-amber-500" />
                    Contact Address
                  </h2>

                  <div className="space-y-5 text-slate-700">
                    <div>
                      <h3 className="text-lg font-black text-slate-900 tracking-tight uppercase font-heading">
                        {COMPANY_INFO.name}
                      </h3>
                      <p className="text-xs text-amber-600 font-semibold mt-0.5">Iron & Cement Merchants</p>
                    </div>

                    <div className="flex items-start gap-3 text-sm">
                      <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                      <p className="text-slate-600 leading-snug">{COMPANY_INFO.address}</p>
                    </div>

                    <div className="space-y-2.5 pt-2 border-t border-slate-100 text-sm">
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                        <p>
                          <span className="text-slate-400 text-xs">Phone :</span>{' '}
                          <a href={`tel:${COMPANY_INFO.phone}`} className="font-bold text-slate-900 hover:text-amber-600">
                            {COMPANY_INFO.phone}
                          </a>
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <p>
                          <span className="text-slate-400 text-xs">Mobile :</span>{' '}
                          <span className="font-bold text-slate-900">{COMPANY_INFO.mobiles.join(', ')}</span>
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                        <p>
                          <span className="text-slate-400 text-xs">Email :</span>{' '}
                          <a href={`mailto:${COMPANY_INFO.email}`} className="font-bold text-amber-600 hover:underline text-sm">
                            {COMPANY_INFO.email}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Google Maps Embed */}
              <FadeIn direction="left" delay={0.15}>
                <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-md space-y-3">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-amber-500" />
                    Dharmapuri Main Office Location
                  </span>
                  <div className="rounded-xl overflow-hidden aspect-video border border-slate-100 bg-slate-50">
                    <iframe
                      title="Trichy Steel Company Location"
                      src="https://maps.google.com/maps?q=Dharmapuri%20Tamilnadu%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      className="w-full h-full border-0"
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
