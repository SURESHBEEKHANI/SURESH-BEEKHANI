import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Upload,
  ChevronDown,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Award,
  Star,
  Globe,
  FileText,
  X
} from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/supabaseClient';
import Navbar from './Navbar';
import Footer from './Footer';

// ─────────────────────────────────────────────────────────────────────────────
// BRAND TOKENS
// ─────────────────────────────────────────────────────────────────────────────
const C = {
  black:    '#050505',
  graphite: '#111111',
  card:     '#141414',
  white:    '#FFFFFF',
  lime:     '#B6FF00',
  green:    '#7DCC00',
  la: (o: number) => `rgba(182,255,0,${o})`,
  wa: (o: number) => `rgba(255,255,255,${o})`,
  ga: (o: number) => `rgba(125,204,0,${o})`,
};

// ─────────────────────────────────────────────────────────────────────────────
// OPTIONS
// ─────────────────────────────────────────────────────────────────────────────
const TECH_STACK_OPTIONS = [
  { value: "ai-automation",  label: "AI & Workflow Automation" },
  { value: "custom-ai-dev",  label: "Custom AI & Machine Learning" },
  { value: "agentic-ai",     label: "Agentic AI Systems" },
  { value: "web-development", label: "Full-Stack Web Development" },
  { value: "mobile-app-dev", label: "Mobile App Development" },
  { value: "cloud-devops",   label: "Cloud & DevOps Infrastructure" },
  { value: "data-analytics", label: "Big Data & Business Intelligence" },
  { value: "other",          label: "Other Technology Needs" }
];

const COUNTRY_CODES = [
  { code: "+92",  country: "PK", flag: "🇵🇰", name: "Pakistan" },
  { code: "+1",   country: "US", flag: "🇺🇸", name: "United States" },
  { code: "+44",  country: "GB", flag: "🇬🇧", name: "United Kingdom" },
  { code: "+971", country: "AE", flag: "🇦🇪", name: "UAE" },
  { code: "+91",  country: "IN", flag: "🇮🇳", name: "India" },
  { code: "+61",  country: "AU", flag: "🇦🇺", name: "Australia" },
  { code: "+49",  country: "DE", flag: "🇩🇪", name: "Germany" },
  { code: "+33",  country: "FR", flag: "🇫🇷", name: "France" },
  { code: "+966", country: "SA", flag: "🇸🇦", name: "Saudi Arabia" },
];

// Shared input class (dark brand style)
const inputCls =
  "w-full px-5 rounded-xl text-sm font-medium outline-none transition-all duration-200 placeholder-white/30";
const inputStyle = {
  background: C.graphite,
  border: `1px solid ${C.wa(0.1)}`,
  color: C.white,
  height: 48,
};

// ─────────────────────────────────────────────────────────────────────────────
// CONTACT COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const Contact = () => {
  const fileInputRef   = useRef<HTMLInputElement>(null);
  const countryRef     = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    fullName: '', email: '', phoneCode: '+92', phone: '',
    techStack: 'ai-automation', message: '', terms: true
  });
  const [selectedFile,         setSelectedFile]         = useState<File | null>(null);
  const [isSubmitting,         setIsSubmitting]         = useState(false);
  const [isSubmitted,          setIsSubmitted]          = useState(false);
  const [showCountryDropdown,  setShowCountryDropdown]  = useState(false);
  const [focusedField,         setFocusedField]         = useState<string | null>(null);

  React.useEffect(() => {
    const close = (e: MouseEvent) => {
      if (countryRef.current && !countryRef.current.contains(e.target as Node))
        setShowCountryDropdown(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setSelectedFile(e.target.files[0]);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files?.[0]) setSelectedFile(e.dataTransfer.files[0]);
  };

  const validateForm = () => {
    const errors: string[] = [];
    if (!formData.fullName.trim()) errors.push('Full Name is required');
    if (!formData.email.trim())    errors.push('Email Address is required');
    if (!formData.terms)           errors.push('Please agree to the terms & conditions');
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errors.push('Please enter a valid email address');
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (errors.length > 0) { errors.forEach(err => toast.error(err)); return; }
    setIsSubmitting(true);
    try {
      const nameParts      = formData.fullName.trim().split(' ');
      const firstName      = nameParts[0] || '';
      const lastName       = nameParts.slice(1).join(' ') || nameParts[0] || '';
      const techStackLabel = TECH_STACK_OPTIONS.find(t => t.value === formData.techStack)?.label || formData.techStack;
      let combinedMessage  = `[Tech Stack / Service: ${techStackLabel}]\n\n${formData.message || 'No additional project details provided.'}`;
      if (selectedFile) combinedMessage += `\n\n[Attached File: ${selectedFile.name} (${(selectedFile.size / 1024).toFixed(1)} KB)]`;
      const fullPhone = `${formData.phoneCode} ${formData.phone}`.trim();

      const { error } = await supabase.from('Contact Us').insert([{
        first_name:            firstName,
        last_name:             lastName,
        email:                 formData.email,
        phone:                 fullPhone || null,
        subject:               techStackLabel,
        message:               combinedMessage,
        help_topic:            formData.techStack,
        industry:              'other',
        country:               formData.phoneCode,
        company_organization:  'Not Specified',
        newsletter_signup:     true,
        agree_terms:           formData.terms
      }]);

      if (error) { console.error('Supabase Error:', error); throw error; }

      toast.success('Inquiry Submitted Successfully!', {
        description: "We'll have the right developer ready within 24 hours.",
        duration: 5000,
        style: { background: C.lime, color: C.black, border: 'none', fontWeight: 600 }
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      toast.error('Could not submit right now. Please email info@velnixsolutions.com directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedCountry = COUNTRY_CODES.find(c => c.code === formData.phoneCode) || COUNTRY_CODES[0];

  // Helper: border color for focused inputs
  const borderFor = (field: string) =>
    focusedField === field ? C.lime : C.wa(0.1);

  return (
    <div className="min-h-screen flex flex-col antialiased" style={{ background: C.black, color: C.white }}>
      <Navbar />

      {/* ── AMBIENT BACKGROUND ── */}
      <div className="pointer-events-none select-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute top-0 left-1/3 w-80 h-80 rounded-full blur-[140px]"
          style={{ background: C.la(0.04) }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full blur-[140px]"
          style={{ background: C.ga(0.03) }}
        />
      </div>

      <main className="flex-grow relative z-10">

        {/* ══════════════════════════════════════════════════════
            HERO SECTION
        ══════════════════════════════════════════════════════ */}
        <section className="relative w-full pt-28 pb-48 sm:pt-36 sm:pb-56 overflow-hidden text-center border-b border-white/[0.06]">
          {/* Deep dark radial backdrop */}
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
            <div
              className="absolute inset-0"
              style={{ background: 'radial-gradient(ellipse 95% 85% at 50% 25%, #1e3300 0%, #111d00 36%, #080f00 68%, #050505 100%)' }}
            />
            {/* Central lime light cone */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[110px]"
              style={{ background: 'radial-gradient(circle, rgba(182,255,0,0.18) 0%, rgba(100,160,0,0.09) 60%, transparent 80%)' }}
            />
            {/* Dot grid */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
            />
            {/* Edge vignettes */}
            <div className="absolute inset-y-0 left-0  w-48 bg-gradient-to-r from-[#050505] to-transparent" />
            <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#050505] to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
          </div>

          {/* Hero content */}
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 flex flex-col items-center">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-white/70"
            >
              GET IN TOUCH
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.5 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-4"
              style={{ color: C.lime, textShadow: `0 0 50px ${C.la(0.35)}` }}
            >
              Contact Us
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.5 }}
              className="text-sm sm:text-base max-w-lg leading-relaxed mb-8"
              style={{ color: C.wa(0.75) }}
            >
              Start the conversation with our team today. We'll have the right developer ready within just 24 hours.
            </motion.p>

            {/* Schedule a Call Button */}
            <motion.a
              href="https://calendar.app.google/F63aBoA5vxJdtihj7"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm transition-all hover:scale-[1.03] active:scale-[0.98]"
              style={{
                background: C.lime,
                color: C.black,
                boxShadow: `0 6px 24px ${C.la(0.35)}`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = C.green;
                e.currentTarget.style.boxShadow = `0 8px 32px ${C.la(0.5)}`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = C.lime;
                e.currentTarget.style.boxShadow = `0 6px 24px ${C.la(0.35)}`;
              }}
            >
              <span>Schedule a Call</span>
              <span className="font-extrabold text-base">›</span>
            </motion.a>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            MAIN CARD — "Let's Discuss Your Needs"
        ══════════════════════════════════════════════════════ */}
        <section id="contact-form" className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 -mt-32 sm:-mt-40 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[24px] sm:rounded-[28px] p-6 sm:p-10 md:p-12"
            style={{
              background: 'linear-gradient(160deg, #141414 0%, #0d0d0d 100%)',
              border: `1px solid ${C.wa(0.09)}`,
              boxShadow: `0 8px 16px rgba(0,0,0,0.4), 0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px ${C.la(0.06)}, 0 0 60px ${C.la(0.06)}`,
            }}
          >
            {/* Subtle lime glow top-right */}
            <div
              className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-[90px] pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(182,255,0,0.12) 0%, transparent 70%)' }}
            />

            {/* Card Header */}
            <div className="text-center mb-8 relative z-10">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-[-0.03em] mb-2"
                style={{ color: C.white }}
              >
                Let's Discuss Your Needs
              </h2>
              <p
                className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em]"
                style={{ color: C.wa(0.45) }}
              >
                Tell Us About Your Project. We'll Take It From There
              </p>
              {/* Lime divider */}
              <div
                className="mx-auto mt-5 h-[1px] w-24"
                style={{ background: `linear-gradient(90deg, transparent, ${C.la(0.5)}, transparent)` }}
              />
            </div>

            {isSubmitted ? (
              /* ── Success State ── */
              <div className="py-14 text-center space-y-5 relative z-10">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                  style={{ background: C.la(0.12), border: `1px solid ${C.lime}` }}
                >
                  <CheckCircle2 size={32} color={C.lime} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Thank You for Reaching Out!</h3>
                <p className="text-sm max-w-md mx-auto leading-relaxed" style={{ color: C.wa(0.65) }}>
                  Your project details have been received. One of our lead engineers will evaluate your requirements and contact you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ fullName: '', email: '', phoneCode: '+92', phone: '', techStack: 'ai-automation', message: '', terms: true });
                    setSelectedFile(null);
                  }}
                  className="mt-4 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all hover:scale-[1.02]"
                  style={{ background: C.lime, color: C.black }}
                >
                  Submit Another Project
                </button>
              </div>
            ) : (
              /* ── Form ── */
              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">

                {/* ROW 1: Full Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('fullName')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Full Name"
                    required
                    className={inputCls}
                    style={{ ...inputStyle, border: `1px solid ${borderFor('fullName')}`, boxShadow: focusedField === 'fullName' ? `0 0 0 3px ${C.la(0.1)}` : 'none' }}
                  />

                  {/* Phone with flag selector */}
                  <div className="flex" ref={countryRef}>
                    {/* Country Code Button */}
                    <div className="relative shrink-0">
                      <button
                        type="button"
                        onClick={() => setShowCountryDropdown(p => !p)}
                        className="h-12 px-3 rounded-l-xl flex items-center gap-1.5 text-xs font-semibold transition-colors"
                        style={{
                          background: '#1a1a1a',
                          borderTop: `1px solid ${C.wa(0.1)}`,
                          borderBottom: `1px solid ${C.wa(0.1)}`,
                          borderLeft: `1px solid ${C.wa(0.1)}`,
                          borderRight: `1px solid ${C.wa(0.06)}`,
                          color: C.wa(0.8),
                        }}
                      >
                        <span className="text-base">{selectedCountry.flag}</span>
                        <span>{selectedCountry.code}</span>
                        <ChevronDown size={13} style={{ color: C.wa(0.4) }} />
                      </button>

                      {showCountryDropdown && (
                        <div
                          className="absolute left-0 top-full mt-1 z-50 w-52 rounded-xl overflow-auto max-h-56 py-1"
                          style={{ background: '#1c1c1c', border: `1px solid ${C.wa(0.12)}`, boxShadow: '0 16px 40px rgba(0,0,0,0.7)' }}
                        >
                          {COUNTRY_CODES.map(c => (
                            <button
                              key={c.code + c.country}
                              type="button"
                              onClick={() => { setFormData(prev => ({ ...prev, phoneCode: c.code })); setShowCountryDropdown(false); }}
                              className="w-full px-3 py-2 text-xs flex items-center justify-between transition-colors"
                              style={{ color: c.code === formData.phoneCode ? C.lime : C.wa(0.75) }}
                              onMouseEnter={e => (e.currentTarget.style.background = C.wa(0.05))}
                              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                            >
                              <span className="flex items-center gap-2">
                                <span>{c.flag}</span>
                                <span className="font-medium">{c.name}</span>
                              </span>
                              <span className="font-mono text-white/40">{c.code}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Phone input */}
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Phone Number"
                      className="flex-1 px-4 rounded-r-xl text-sm font-medium outline-none transition-all duration-200 placeholder-white/30"
                      style={{
                        background: C.graphite,
                        borderTop: `1px solid ${borderFor('phone')}`,
                        borderRight: `1px solid ${borderFor('phone')}`,
                        borderBottom: `1px solid ${borderFor('phone')}`,
                        borderLeft: 'none',
                        color: C.white,
                        height: 48,
                        boxShadow: focusedField === 'phone' ? `0 0 0 3px ${C.la(0.1)}` : 'none',
                      }}
                    />
                  </div>
                </div>

                {/* ROW 2: Email & Tech Stack */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Email Address *"
                    required
                    className={inputCls}
                    style={{ ...inputStyle, border: `1px solid ${borderFor('email')}`, boxShadow: focusedField === 'email' ? `0 0 0 3px ${C.la(0.1)}` : 'none' }}
                  />

                  <div className="relative">
                    <select
                      name="techStack"
                      value={formData.techStack}
                      onChange={handleInputChange}
                      className="w-full px-5 pr-10 rounded-xl text-sm font-medium outline-none transition-all duration-200 appearance-none cursor-pointer"
                      style={{ ...inputStyle, color: C.wa(0.8) }}
                    >
                      {TECH_STACK_OPTIONS.map(opt => (
                        <option key={opt.value} value={opt.value} style={{ background: '#111', color: '#fff' }}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={15} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: C.wa(0.35) }} />
                  </div>
                </div>

                {/* ROW 3: Message Textarea */}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={4}
                  placeholder="Help us understand what you require assistance with, the goal of your project, and the problem we're dedicated to solving *"
                  className="w-full p-5 rounded-xl text-sm font-medium outline-none transition-all duration-200 resize-none placeholder-white/30"
                  style={{
                    background: C.graphite,
                    border: `1px solid ${borderFor('message')}`,
                    color: C.white,
                    boxShadow: focusedField === 'message' ? `0 0 0 3px ${C.la(0.1)}` : 'none',
                  }}
                />

                {/* ROW 4: File Upload */}
                <div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.zip"
                  />
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    onDragOver={e => e.preventDefault()}
                    onDrop={handleDrop}
                    className="w-full rounded-xl p-6 text-center cursor-pointer group flex flex-col items-center justify-center min-h-[110px] transition-all duration-200"
                    style={{
                      background: C.graphite,
                      border: `2px dashed ${C.wa(0.15)}`,
                    }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = C.la(0.4))}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = C.wa(0.15))}
                  >
                    {selectedFile ? (
                      <div
                        className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-semibold"
                        style={{ background: C.wa(0.06), border: `1px solid ${C.wa(0.1)}`, color: C.white }}
                      >
                        <FileText size={16} style={{ color: C.lime }} />
                        <span className="truncate max-w-xs">{selectedFile.name}</span>
                        <span style={{ color: C.wa(0.4) }}>({(selectedFile.size / 1024).toFixed(1)} KB)</span>
                        <button
                          type="button"
                          onClick={e => { e.stopPropagation(); setSelectedFile(null); }}
                          className="p-1 transition-colors hover:text-red-400"
                          style={{ color: C.wa(0.4) }}
                        >
                          <X size={13} />
                        </button>
                      </div>
                    ) : (
                      <>
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center mb-2 transition-all group-hover:scale-110"
                          style={{ background: C.wa(0.06), color: C.wa(0.6) }}
                        >
                          <Upload size={17} />
                        </div>
                        <p className="text-xs" style={{ color: C.wa(0.55) }}>
                          <span
                            className="font-bold transition-colors"
                            style={{ color: C.lime }}
                          >
                            Click to upload
                          </span>{' '}
                          or drag and drop
                        </p>
                      </>
                    )}
                  </div>
                </div>

                {/* ROW 5: Terms & Submit */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <label className="flex items-center gap-3 cursor-pointer select-none text-xs font-medium" style={{ color: C.wa(0.65) }}>
                    <input
                      type="checkbox"
                      name="terms"
                      checked={formData.terms}
                      onChange={handleInputChange}
                      required
                      className="w-4 h-4 cursor-pointer accent-[#B6FF00]"
                    />
                    <span>
                      I understand and agree to the{' '}
                      <a
                        href="/terms-and-conditions"
                        className="font-bold underline transition-colors"
                        style={{ color: C.lime }}
                      >
                        terms & conditions
                      </a>.
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-extrabold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed shrink-0"
                    style={{
                      background: C.lime,
                      color: C.black,
                      boxShadow: `0 8px 24px ${C.la(0.35)}`,
                    }}
                    onMouseEnter={e => {
                      if (!isSubmitting) {
                        e.currentTarget.style.background = C.green;
                        e.currentTarget.style.boxShadow = `0 12px 32px ${C.la(0.5)}`;
                      }
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = C.lime;
                      e.currentTarget.style.boxShadow = `0 8px 24px ${C.la(0.35)}`;
                    }}
                  >
                    <span>{isSubmitting ? 'Submitting...' : 'Submit Now'}</span>
                    <ArrowUpRight size={17} strokeWidth={2.5} />
                  </button>
                </div>

                {/* ROW 6: Trust Badges */}
                <div
                  className="pt-7 mt-5 flex flex-wrap items-center justify-center gap-3"
                  style={{ borderTop: `1px solid ${C.wa(0.07)}` }}
                >
                  {[
                    { icon: <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />,        label: 'Pro on UpCity' },
                    { icon: <Star size={11} className="fill-amber-400 text-amber-400" />,                label: 'Top Developer' },
                    { icon: <Award size={11} style={{ color: C.lime }} />,                              label: 'Clutch 4.9/5' },
                    { icon: <ShieldCheck size={11} className="text-blue-400" />,                        label: 'Top Software Firm' },
                    { icon: <Globe size={11} className="text-teal-400" />,                              label: 'Global Partner' },
                  ].map(({ icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold"
                      style={{ background: C.wa(0.05), border: `1px solid ${C.wa(0.09)}`, color: C.wa(0.7) }}
                    >
                      {icon}
                      <span>{label}</span>
                    </div>
                  ))}
                </div>

              </form>
            )}
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
