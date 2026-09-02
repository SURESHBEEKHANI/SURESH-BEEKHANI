import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Mail, 
  MapPin, 
  Phone, 
  Sparkles, 
  Zap, 
  Layers, 
  Cpu, 
  Database,
  ChevronDown
} from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/supabaseClient';
import Navbar from './Navbar';
import Footer from './Footer';

// ─────────────────────────────────────────────────────────────────────────────
// BRAND TOKENS (Velnix Locked Color System)
// ─────────────────────────────────────────────────────────────────────────────
const C = {
  black:    '#050505',
  graphite: '#111111',
  white:    '#FFFFFF',
  lime:     '#B6FF00',
  green:    '#7DCC00',
  la: (o: number) => `rgba(182,255,0,${o})`,
  wa: (o: number) => `rgba(255,255,255,${o})`,
  ga: (o: number) => `rgba(125,204,0,${o})`,
};

const ease = [0.22, 1, 0.36, 1] as const;

// ─────────────────────────────────────────────────────────────────────────────
// FORM OPTIONS
// ─────────────────────────────────────────────────────────────────────────────
const IMPROVEMENT_GOALS = [
  { id: 'automate-work', label: 'Automate Repetitive Work', icon: Zap },
  { id: 'ai-solution', label: 'Build an AI Solution', icon: Cpu },
  { id: 'connect-systems', label: 'Connect Existing Systems', icon: Layers },
  { id: 'custom-software', label: 'Build Custom Software', icon: Database },
  { id: 'improve-product', label: 'Improve Existing Product', icon: Sparkles },
  { id: 'not-sure', label: "Not Sure / Need Assessment", icon: Clock },
];

const HELP_TOPICS = [
  { value: "ai-automation", label: "AI & Workflow Automation" },
  { value: "ai-development", label: "Custom AI Development" },
  { value: "agentic-ai", label: "Agentic AI & Autonomous Systems" },
  { value: "custom-software", label: "Custom Software Engineering" },
  { value: "chatbot-development", label: "AI Chatbots & Conversational AI" },
  { value: "machine-deep-learning", label: "Machine Learning & Analytics" },
  { value: "web-app-dev", label: "Web & Mobile Product Engineering" },
  { value: "other", label: "General Business Query" }
];

const INDUSTRY_OPTIONS = [
  { value: "healthcare", label: "Healthcare & Life Sciences" },
  { value: "fintech", label: "Financial Services & Banking" },
  { value: "ecommerce", label: "E-Commerce & Retail" },
  { value: "professional-services", label: "Professional Services & Legal" },
  { value: "logistics", label: "Logistics & Supply Chain" },
  { value: "it-software", label: "Technology & SaaS" },
  { value: "manufacturing", label: "Manufacturing & Industrial" },
  { value: "other", label: "Other SMB Industry" }
];

// ─────────────────────────────────────────────────────────────────────────────
// CUSTOM SELECT COMPONENT (Dark Graphite Velnix Theme)
// ─────────────────────────────────────────────────────────────────────────────
const CustomSelect = ({ 
  options, 
  value, 
  onChange, 
  placeholder,
  name
}: { 
  options: {value: string, label: string}[], 
  value: string, 
  onChange: (e: { target: { name: string, value: string, type: string } }) => void, 
  placeholder: string,
  name: string
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        className="w-full h-12 px-4 flex items-center justify-between text-left transition-all duration-200"
        style={{
          background: C.graphite,
          border: `1px solid ${isOpen ? C.lime : C.wa(0.12)}`,
          color: value ? C.white : C.wa(0.4),
          boxShadow: isOpen ? `0 0 16px ${C.la(0.15)}` : 'none',
        }}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-medium truncate">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown 
          size={16} 
          className="transition-transform duration-200 shrink-0" 
          style={{ 
            color: isOpen ? C.lime : C.wa(0.4),
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
          }} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 w-full mt-1 overflow-auto max-h-60"
            style={{
              background: C.graphite,
              border: `1px solid ${C.wa(0.15)}`,
              boxShadow: '0 16px 40px rgba(0,0,0,0.7)',
            }}
            role="listbox"
          >
            {options.map((option) => (
              <div
                key={option.value}
                role="option"
                aria-selected={value === option.value}
                className="px-4 py-3 cursor-pointer text-sm transition-colors duration-150 flex items-center justify-between"
                style={{
                  background: value === option.value ? C.la(0.1) : 'transparent',
                  color: value === option.value ? C.lime : C.wa(0.8),
                  fontWeight: value === option.value ? 600 : 400,
                }}
                onMouseEnter={(e) => {
                  if (value !== option.value) {
                    e.currentTarget.style.background = C.wa(0.05);
                    e.currentTarget.style.color = C.white;
                  }
                }}
                onMouseLeave={(e) => {
                  if (value !== option.value) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = C.wa(0.8);
                  }
                }}
                onClick={() => {
                  onChange({
                    target: { name, value: option.value, type: 'select-one' }
                  });
                  setIsOpen(false);
                }}
              >
                <span>{option.label}</span>
                {value === option.value && (
                  <CheckCircle2 size={14} color={C.lime} />
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// CONTACT COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const Contact = () => {
  const shouldReduce = useReducedMotion();
  const [selectedGoal, setSelectedGoal] = useState('automate-work');
  const [formData, setFormData] = useState({
    helpType: 'ai-automation',
    industry: 'healthcare',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    company: '',
    message: '',
    newsletter: true,
    terms: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> | { target: { name: string, value: string, type: string } }) => {
    const target = e.target;
    const name = target.name;
    const type = target.type;

    if (type === 'checkbox') {
      const checked = (target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: target.value }));
    }
  };

  const validateForm = () => {
    const errors: string[] = [];
    if (!formData.firstName.trim()) errors.push('First Name is required');
    if (!formData.lastName.trim()) errors.push('Last Name is required');
    if (!formData.email.trim()) errors.push('Work Email is required');
    if (!formData.company.trim()) errors.push('Company Name is required');
    if (!formData.terms) errors.push('Please agree to the Privacy Policy');

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.push('Please enter a valid email address');
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validateForm();
    if (errors.length > 0) {
      errors.forEach(error => toast.error(error));
      return;
    }

    setIsSubmitting(true);

    try {
      const goalLabel = IMPROVEMENT_GOALS.find(g => g.id === selectedGoal)?.label || selectedGoal;
      const combinedMessage = `[Primary Goal: ${goalLabel}]\n\n${formData.message || 'No additional message details provided.'}`;

      const { error } = await supabase.from('Contact Us').insert([
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone || null,
          subject: formData.helpType,
          message: combinedMessage,
          help_topic: formData.helpType,
          industry: formData.industry,
          country: formData.country || null,
          company_organization: formData.company,
          newsletter_signup: formData.newsletter,
          agree_terms: formData.terms
        }
      ]);

      if (error) {
        console.error('Supabase Error:', error);
        throw error;
      }

      toast.success('Strategy inquiry received!', {
        description: 'Our team will review your operational requirements and reach out within 24 business hours.',
        duration: 5000,
        style: { background: C.lime, color: C.black, border: 'none' }
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
      toast.error('Could not submit inquiry right now. Please email info@velnixsolutions.com directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col antialiased" style={{ background: C.black, color: C.white }}>
      <Navbar />

      {/* ── BACKGROUND AMBIENT GLOWS ── */}
      <div className="pointer-events-none select-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute top-0 left-1/4 rounded-full blur-[140px]"
          style={{ width: 500, height: 500, background: C.la(0.04) }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 rounded-full blur-[140px]"
          style={{ width: 450, height: 450, background: C.ga(0.03) }}
        />
      </div>

      <main className="flex-grow relative z-10 pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          
          {/* ══════════════════════════════════════════════════════
              HERO HEADER
          ══════════════════════════════════════════════════════ */}
          <div className="max-w-3xl mb-16 lg:mb-20">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span
                className="inline-flex items-center gap-2 px-3 py-1"
                style={{
                  border: `1px solid ${C.la(0.3)}`,
                  background: C.la(0.06),
                }}
              >
                <span
                  style={{
                    width: 6, height: 6,
                    borderRadius: '50%',
                    background: C.lime,
                    boxShadow: `0 0 8px ${C.lime}`,
                  }}
                />
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    color: C.lime,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                  }}
                >
                  LET'S BUILD WHAT'S NEXT
                </span>
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease }}
              style={{
                fontSize: 'clamp(2.2rem, 4.2vw, 3.75rem)',
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                color: C.white,
                marginBottom: '1.25rem',
              }}
            >
              Turn Your Business Problem Into An{' '}
              <span style={{ color: C.lime }}>Intelligent System.</span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease }}
              style={{
                fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
                color: C.wa(0.72),
                lineHeight: 1.7,
                fontWeight: 400,
              }}
            >
              Tell us what slows your business down. We will evaluate your workflow, assess where AI or automation creates measurable impact, and outline the right technical path. No complex jargon required.
            </motion.p>
          </div>

          {/* ══════════════════════════════════════════════════════
              MAIN TWO-COLUMN LAYOUT
          ══════════════════════════════════════════════════════ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* ──────────────────────────────────────────────────
                LEFT COLUMN — Context, Roadmap & Trust
            ────────────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.6, ease }}
              className="lg:col-span-5 flex flex-col gap-10"
            >
              {/* Problem Focus Box */}
              <div
                className="p-6 sm:p-8"
                style={{
                  background: C.graphite,
                  border: `1px solid ${C.wa(0.08)}`,
                }}
              >
                <h3
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: C.lime,
                    marginBottom: '1.25rem',
                  }}
                >
                  Common Operational Challenges We Solve
                </h3>
                
                <ul className="flex flex-col gap-3.5">
                  {[
                    'Repetitive manual work taking up team bandwidth',
                    'Disconnected tools & spreadsheet-heavy processes',
                    'Administrative workloads slowing customer delivery',
                    'Data fragmentation across multiple software tools',
                    'Custom AI software & intelligent workflow needs',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm" style={{ color: C.wa(0.8) }}>
                      <CheckCircle2 size={16} color={C.lime} className="shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3-Step What Happens Next */}
              <div>
                <h3
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: C.wa(0.5),
                    marginBottom: '1.5rem',
                  }}
                >
                  What Happens Next
                </h3>

                <div className="flex flex-col gap-6 relative">
                  {/* Step 1 */}
                  <div className="flex gap-4 items-start">
                    <div
                      className="w-8 h-8 rounded-none flex items-center justify-center shrink-0 font-bold text-xs"
                      style={{ background: C.la(0.1), color: C.lime, border: `1px solid ${C.la(0.3)}` }}
                    >
                      01
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">Tell Us the Business Problem</h4>
                      <p className="text-xs text-white/60 leading-relaxed">
                        Share your workflow, pain point, or goal through the form.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-4 items-start">
                    <div
                      className="w-8 h-8 rounded-none flex items-center justify-center shrink-0 font-bold text-xs"
                      style={{ background: C.wa(0.05), color: C.wa(0.7), border: `1px solid ${C.wa(0.1)}` }}
                    >
                      02
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">We Assess the Opportunity</h4>
                      <p className="text-xs text-white/60 leading-relaxed">
                        Our team reviews where AI, software, or system integration creates clear ROI.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-4 items-start">
                    <div
                      className="w-8 h-8 rounded-none flex items-center justify-center shrink-0 font-bold text-xs"
                      style={{ background: C.wa(0.05), color: C.wa(0.7), border: `1px solid ${C.wa(0.1)}` }}
                    >
                      03
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">We Discuss the Right Path</h4>
                      <p className="text-xs text-white/60 leading-relaxed">
                        A focused conversation to determine feasibility, scope, and technical direction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SLA & Direct Contact */}
              <div
                className="p-6 flex flex-col gap-4"
                style={{
                  background: C.wa(0.02),
                  border: `1px solid ${C.wa(0.06)}`,
                }}
              >
                <div className="flex items-center gap-3">
                  <Clock size={16} color={C.lime} />
                  <span className="text-xs font-semibold text-white/90">
                    Response Guarantee: Within 24 Business Hours
                  </span>
                </div>

                <div className="flex flex-col gap-2 pt-2" style={{ borderTop: `1px solid ${C.wa(0.06)}` }}>
                  <a 
                    href="mailto:info@velnixsolutions.com" 
                    className="flex items-center gap-3 text-xs text-white/70 hover:text-[#B6FF00] transition-colors"
                  >
                    <Mail size={14} color={C.lime} />
                    <span>info@velnixsolutions.com</span>
                  </a>
                  <a 
                    href="tel:+923351312852" 
                    className="flex items-center gap-3 text-xs text-white/70 hover:text-[#B6FF00] transition-colors"
                  >
                    <Phone size={14} color={C.lime} />
                    <span>+92 335 131 2852</span>
                  </a>
                  <div className="flex items-center gap-3 text-xs text-white/70">
                    <MapPin size={14} color={C.lime} />
                    <span>Karachi, Pakistan</span>
                  </div>
                </div>
              </div>

            </motion.div>

            {/* ──────────────────────────────────────────────────
                RIGHT COLUMN — Guided Conversion Form
            ────────────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease }}
              className="lg:col-span-7"
            >
              <div
                className="p-6 sm:p-10 relative overflow-hidden"
                style={{
                  background: C.graphite,
                  border: `1px solid ${C.wa(0.1)}`,
                  boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
                }}
              >
                {/* Form header badge */}
                <div className="flex items-center justify-between mb-8 pb-6" style={{ borderBottom: `1px solid ${C.wa(0.08)}` }}>
                  <div>
                    <h2 className="text-lg font-bold text-white">Start Your Inquiry</h2>
                    <p className="text-xs text-white/50 mt-1">Short form • ~45 seconds to complete</p>
                  </div>
                  <span
                    className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1"
                    style={{ background: C.la(0.08), color: C.lime, border: `1px solid ${C.la(0.2)}` }}
                  >
                    Qualified B2B Channel
                  </span>
                </div>

                {isSubmitted ? (
                  /* Success Screen */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 px-4 text-center space-y-6"
                  >
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                      style={{ background: C.la(0.15), border: `1px solid ${C.lime}` }}
                    >
                      <CheckCircle2 size={32} color={C.lime} />
                    </div>

                    <div className="space-y-3 max-w-md mx-auto">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        Inquiry Submitted Successfully
                      </h3>
                      <p className="text-sm text-white/70 leading-relaxed">
                        Thank you for sharing your business context. Our engineering leads will review your inquiry and reach out within 24 business hours to discuss potential next steps.
                      </p>
                    </div>

                    <div className="pt-6">
                      <button
                        type="button"
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            helpType: 'ai-automation',
                            industry: 'healthcare',
                            firstName: '',
                            lastName: '',
                            email: '',
                            phone: '',
                            country: '',
                            company: '',
                            message: '',
                            newsletter: true,
                            terms: true
                          });
                        }}
                        className="px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors"
                        style={{
                          background: C.wa(0.05),
                          color: C.white,
                          border: `1px solid ${C.wa(0.15)}`,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = C.lime;
                          e.currentTarget.style.color = C.black;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = C.wa(0.05);
                          e.currentTarget.style.color = C.white;
                        }}
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  /* Active Form */
                  <form onSubmit={handleSubmit} className="space-y-8">
                    
                    {/* STEP 1: What are you looking to improve? (Interactive Pills) */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-3">
                        01. What are you looking to improve?*
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {IMPROVEMENT_GOALS.map((goal) => {
                          const IconComp = goal.icon;
                          const isSelected = selectedGoal === goal.id;
                          return (
                            <button
                              key={goal.id}
                              type="button"
                              onClick={() => {
                                setSelectedGoal(goal.id);
                                if (goal.id === 'automate-work') setFormData(prev => ({ ...prev, helpType: 'ai-automation' }));
                                else if (goal.id === 'ai-solution') setFormData(prev => ({ ...prev, helpType: 'ai-development' }));
                                else if (goal.id === 'connect-systems') setFormData(prev => ({ ...prev, helpType: 'agentic-ai' }));
                                else if (goal.id === 'custom-software') setFormData(prev => ({ ...prev, helpType: 'custom-software' }));
                              }}
                              className="flex items-center gap-3 p-3 text-left transition-all duration-200"
                              style={{
                                background: isSelected ? C.la(0.08) : C.wa(0.02),
                                border: `1px solid ${isSelected ? C.lime : C.wa(0.08)}`,
                                color: isSelected ? C.lime : C.wa(0.75),
                              }}
                            >
                              <IconComp size={16} color={isSelected ? C.lime : C.wa(0.4)} className="shrink-0" />
                              <span className="text-xs font-medium">{goal.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* STEP 2: Service Category & Industry Dropdowns */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold text-white/70">
                          Primary Service Category*
                        </label>
                        <CustomSelect
                          name="helpType"
                          value={formData.helpType}
                          onChange={handleInputChange}
                          placeholder="Select Service"
                          options={HELP_TOPICS}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-semibold text-white/70">
                          Industry Sector*
                        </label>
                        <CustomSelect
                          name="industry"
                          value={formData.industry}
                          onChange={handleInputChange}
                          placeholder="Select Industry"
                          options={INDUSTRY_OPTIONS}
                        />
                      </div>
                    </div>

                    {/* STEP 3: Contact & Company Details */}
                    <div className="space-y-4">
                      <label className="block text-xs font-bold uppercase tracking-wider text-white/80">
                        02. Contact & Organization Details*
                      </label>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* First Name */}
                        <div>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="First Name *"
                            required
                            className="w-full h-12 px-4 bg-[#050505] text-white placeholder-white/40 text-sm outline-none transition-all duration-200"
                            style={{ border: `1px solid ${C.wa(0.12)}` }}
                            onFocus={(e) => e.target.style.borderColor = C.lime}
                            onBlur={(e) => e.target.style.borderColor = C.wa(0.12)}
                          />
                        </div>

                        {/* Last Name */}
                        <div>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="Last Name *"
                            required
                            className="w-full h-12 px-4 bg-[#050505] text-white placeholder-white/40 text-sm outline-none transition-all duration-200"
                            style={{ border: `1px solid ${C.wa(0.12)}` }}
                            onFocus={(e) => e.target.style.borderColor = C.lime}
                            onBlur={(e) => e.target.style.borderColor = C.wa(0.12)}
                          />
                        </div>

                        {/* Work Email */}
                        <div>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Work Email *"
                            required
                            className="w-full h-12 px-4 bg-[#050505] text-white placeholder-white/40 text-sm outline-none transition-all duration-200"
                            style={{ border: `1px solid ${C.wa(0.12)}` }}
                            onFocus={(e) => e.target.style.borderColor = C.lime}
                            onBlur={(e) => e.target.style.borderColor = C.wa(0.12)}
                          />
                        </div>

                        {/* Company Name */}
                        <div>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Company / Organization *"
                            required
                            className="w-full h-12 px-4 bg-[#050505] text-white placeholder-white/40 text-sm outline-none transition-all duration-200"
                            style={{ border: `1px solid ${C.wa(0.12)}` }}
                            onFocus={(e) => e.target.style.borderColor = C.lime}
                            onBlur={(e) => e.target.style.borderColor = C.wa(0.12)}
                          />
                        </div>

                        {/* Phone */}
                        <div>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Phone Number (Optional)"
                            className="w-full h-12 px-4 bg-[#050505] text-white placeholder-white/40 text-sm outline-none transition-all duration-200"
                            style={{ border: `1px solid ${C.wa(0.12)}` }}
                            onFocus={(e) => e.target.style.borderColor = C.lime}
                            onBlur={(e) => e.target.style.borderColor = C.wa(0.12)}
                          />
                        </div>

                        {/* Country */}
                        <div>
                          <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            placeholder="Country / Location"
                            className="w-full h-12 px-4 bg-[#050505] text-white placeholder-white/40 text-sm outline-none transition-all duration-200"
                            style={{ border: `1px solid ${C.wa(0.12)}` }}
                            onFocus={(e) => e.target.style.borderColor = C.lime}
                            onBlur={(e) => e.target.style.borderColor = C.wa(0.12)}
                          />
                        </div>
                      </div>
                    </div>

                    {/* STEP 4: Problem Statement / Message */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-white/80">
                        03. Tell Us About The Business Problem / Workflow
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Briefly describe what repetitive task, system bottleneck, or workflow challenge you want to address..."
                        className="w-full p-4 bg-[#050505] text-white placeholder-white/40 text-sm outline-none transition-all duration-200 resize-none"
                        style={{ border: `1px solid ${C.wa(0.12)}` }}
                        onFocus={(e) => e.target.style.borderColor = C.lime}
                        onBlur={(e) => e.target.style.borderColor = C.wa(0.12)}
                      />
                    </div>

                    {/* Terms & Newsletter */}
                    <div className="space-y-3 pt-2">
                      <label className="flex items-center gap-3 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          name="terms"
                          checked={formData.terms}
                          onChange={handleInputChange}
                          required
                          className="w-4 h-4 rounded-none accent-[#B6FF00] cursor-pointer"
                        />
                        <span className="text-xs text-white/70">
                          I agree to Velnix Solutions' Privacy Policy & Terms of Service *
                        </span>
                      </label>

                      <label className="flex items-center gap-3 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          name="newsletter"
                          checked={formData.newsletter}
                          onChange={handleInputChange}
                          className="w-4 h-4 rounded-none accent-[#B6FF00] cursor-pointer"
                        />
                        <span className="text-xs text-white/60">
                          Keep me updated on AI automation insights & B2B case studies
                        </span>
                      </label>
                    </div>

                    {/* Primary CTA Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full group inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-sm tracking-wide transition-all duration-200 relative overflow-hidden"
                        style={{
                          background: C.lime,
                          color: C.black,
                          boxShadow: `0 8px 28px ${C.la(0.3)}`,
                          cursor: isSubmitting ? 'not-allowed' : 'pointer',
                          opacity: isSubmitting ? 0.75 : 1,
                        }}
                        onMouseEnter={(e) => {
                          if (!isSubmitting) {
                            e.currentTarget.style.background = C.green;
                            e.currentTarget.style.boxShadow = `0 12px 36px ${C.la(0.5)}`;
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isSubmitting) {
                            e.currentTarget.style.background = C.lime;
                            e.currentTarget.style.boxShadow = `0 8px 28px ${C.la(0.3)}`;
                          }
                        }}
                      >
                        {isSubmitting ? (
                          <span>Processing Inquiry...</span>
                        ) : (
                          <>
                            <span>Start The Conversation</span>
                            <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                )}

              </div>
            </motion.div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
