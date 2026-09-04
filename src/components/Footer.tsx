import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  ArrowUp, ArrowRight,
  Linkedin, Twitter, Instagram, Facebook,
  MapPin, Mail, Phone,
  ChevronDown,
} from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/supabaseClient';

// ─────────────────────────────────────────────────────────────────────────────
// BRAND TOKENS
// ─────────────────────────────────────────────────────────────────────────────
const C = {
  black:      '#050505',
  graphite:   '#111111',
  white:      '#FFFFFF',
  lime:       '#B6FF00',
  green:      '#7DCC00',
  la: (o: number) => `rgba(182,255,0,${o})`,
  wa: (o: number) => `rgba(255,255,255,${o})`,
  ga: (o: number) => `rgba(125,204,0,${o})`,
};

const ease = [0.22, 1, 0.36, 1] as const;

// ─────────────────────────────────────────────────────────────────────────────
// NAVIGATION DATA
// ─────────────────────────────────────────────────────────────────────────────
const NAV_COLS = [
  {
    title: 'Solutions',
    links: [
      { label: 'AI Development',       href: '/ai-development' },
      { label: 'AI Automation',         href: '/ai-automation' },
      { label: 'Custom Software',       href: '/custom-software-development' },
      { label: 'AI Agents',             href: '/agentic-ai' },
      { label: 'Chatbot Development',   href: '/ai-chatbot-development' },
      { label: 'Machine Learning',      href: '/machine-learning' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Healthcare',            href: '/healthcare' },
      { label: 'Fintech',               href: '/fintech' },
      { label: 'Education',             href: '/education' },
      { label: 'E-Commerce',            href: '/e-commerce' },
      { label: 'Food & Groceries',      href: '/food-and-groceries' },
      { label: 'Travel & Tourism',      href: '/travel-and-tourism' },
      { label: 'Insurance',             href: '/insurance' },
      { label: 'On-Demand',             href: '/on-demand' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Velnix',          href: '/about' },
      { label: 'Our Process',           href: '/#approach' },
      { label: 'Portfolio',             href: '/portfolio' },
      { label: 'Blog & Insights',       href: '/blogs' },
      { label: 'Contact',               href: '/contact' },
    ],
  },
];

const SOCIAL_LINKS = [
  { name: 'LinkedIn',  icon: <Linkedin  size={15} strokeWidth={1.5} />, href: 'https://www.linkedin.com/company/velnixsolutions/' },
  { name: 'X / Twitter', icon: <Twitter size={15} strokeWidth={1.5} />, href: 'https://x.com/VelnixSolutions' },
  { name: 'Facebook', icon: <Facebook   size={15} strokeWidth={1.5} />, href: 'https://www.facebook.com/VelnixSolutions' },
  { name: 'Instagram', icon: <Instagram size={15} strokeWidth={1.5} />, href: 'https://www.instagram.com/velnixsolutions/' },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy',    href: '/privacy-policy' },
  { label: 'Terms of Service',  href: '/terms-and-conditions' },
  { label: 'Cookie Policy',     href: '/cookie-policy' },
];

// ─────────────────────────────────────────────────────────────────────────────
// EMAIL VALIDATION
// ─────────────────────────────────────────────────────────────────────────────
const isValidEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim());

// ─────────────────────────────────────────────────────────────────────────────
// FOOTER ACCORDION (mobile only)
// ─────────────────────────────────────────────────────────────────────────────
const FooterCol = ({ title, links }: { title: string; links: { label: string; href: string }[] }) => {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const list = (
    <ul className="flex flex-col gap-3 mt-4">
      {links.map(l => (
        <li key={l.label}>
          <a
            href={l.href}
            className="group inline-flex items-center gap-2 text-sm transition-colors duration-200"
            style={{ color: C.wa(0.55), textDecoration: 'none' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = C.lime; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = C.wa(0.55); }}
          >
            <span
              className="shrink-0 rounded-full transition-all duration-200"
              style={{
                width: 4, height: 4,
                background: C.wa(0.2),
                display: 'inline-block',
              }}
            />
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  );

  if (!mobile) {
    return (
      <div>
        <h3
          style={{
            fontSize: '0.65rem',
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: C.lime,
            marginBottom: '1rem',
          }}
        >
          {title}
        </h3>
        {list}
      </div>
    );
  }

  return (
    <div style={{ borderBottom: `1px solid ${C.wa(0.07)}` }}>
      <button
        onClick={() => setOpen(o => !o)}
        className="flex w-full items-center justify-between py-4"
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        aria-expanded={open}
      >
        <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.lime }}>
          {title}
        </span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown size={16} color={C.wa(0.4)} />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={shouldReduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            style={{ overflow: 'hidden' }}
          >
            <div className="pb-5">{list}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CONTACT_DETAILS = [
  { label: 'M.A. Jinnah Road, Near Taj Medical Complex,Street 13, Karachi, Sindh ,Pakistan', href: undefined, icon: MapPin },
  { label: 'info@velnixsolutions.com', href: 'mailto:info@velnixsolutions.com', icon: Mail },
  { label: '+92 335 131 2852', href: 'tel:+923351312852', icon: Phone },
] as const;

const FooterContactCol = () => {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const list = (
    <ul className="flex flex-col gap-3 mt-4">
      {CONTACT_DETAILS.map(item => {
        const Icon = item.icon;
        const inner = (
          <>
            <Icon size={13} color={C.la(0.7)} strokeWidth={1.5} className="shrink-0" />
            {item.label}
          </>
        );
        return (
          <li key={item.label}>
            {item.href ? (
              <a
                href={item.href}
                className="inline-flex items-center gap-2 text-sm transition-colors duration-200"
                style={{ color: C.wa(0.55), textDecoration: 'none' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = C.lime; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = C.wa(0.55); }}
              >
                {inner}
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 text-sm" style={{ color: C.wa(0.55) }}>
                {inner}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );

  if (!mobile) {
    return (
      <div>
        <h3
          style={{
            fontSize: '0.65rem',
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: C.lime,
            marginBottom: '1rem',
          }}
        >
          Contact
        </h3>
        {list}
      </div>
    );
  }

  return (
    <div style={{ borderBottom: `1px solid ${C.wa(0.07)}` }}>
      <button
        onClick={() => setOpen(o => !o)}
        className="flex w-full items-center justify-between py-4"
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        aria-expanded={open}
      >
        <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.lime }}>
          Contact
        </span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown size={16} color={C.wa(0.4)} />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={shouldReduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            style={{ overflow: 'hidden' }}
          >
            <div className="pb-5">{list}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// NEWSLETTER FORM
// ─────────────────────────────────────────────────────────────────────────────
const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const val = email.trim();
    if (!val) { toast.error('Email is required'); return; }
    if (!isValidEmail(val)) { toast.error('Please enter a valid email'); return; }

    setSubmitting(true);
    try {
      const { error } = await supabase.from('newsletter_signups').insert([{ email: val }]);
      if (error) {
        if ((error as { code?: string })?.code === '23505') {
          toast.success('Already subscribed!', { style: { background: C.lime, color: C.black, border: 'none' } });
          setEmail(''); return;
        }
        throw error;
      }
      toast.success('Subscribed!', { style: { background: C.lime, color: C.black, border: 'none' } });
      setEmail(''); setDone(true);
    } catch { toast.error('Could not subscribe. Please try again.'); }
    finally { setSubmitting(false); }
  };

  return (
    <div>
      <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.lime, marginBottom: 12 }}>
        Stay Updated
      </p>
      {done ? (
        <p style={{ fontSize: '0.875rem', color: C.lime, fontWeight: 600 }}>Welcome to Velnix. ✓</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Your work email"
            disabled={submitting}
            style={{
              flex: 1,
              background: C.wa(0.04),
              border: `1px solid ${C.wa(0.1)}`,
              color: C.white,
              fontSize: '0.8rem',
              padding: '0.6rem 0.875rem',
              outline: 'none',
              borderRadius: 0,
              minWidth: 0,
            }}
            onFocus={e => { (e.currentTarget as HTMLElement).style.borderColor = C.la(0.5); }}
            onBlur={e => { (e.currentTarget as HTMLElement).style.borderColor = C.wa(0.1); }}
          />
          <button
            type="submit"
            disabled={submitting}
            style={{
              background: C.lime,
              color: C.black,
              fontWeight: 700,
              fontSize: '0.75rem',
              padding: '0.6rem 1rem',
              border: 'none',
              cursor: submitting ? 'not-allowed' : 'pointer',
              whiteSpace: 'nowrap',
              opacity: submitting ? 0.7 : 1,
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => { if (!submitting) (e.currentTarget as HTMLElement).style.background = C.green; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = C.lime; }}
          >
            {submitting ? '…' : 'Subscribe'}
          </button>
        </form>
      )}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// MAIN FOOTER
// ─────────────────────────────────────────────────────────────────────────────
const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <style>{`
        @keyframes velnix-footer-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.25; }
        }
      `}</style>

      <footer
        style={{ background: 'radial-gradient(ellipse 52% 74% at 4% 44%, rgba(125,204,0,0.22) 0%, rgba(125,204,0,0.07) 40%, transparent 76%), radial-gradient(ellipse 46% 60% at 94% 84%, rgba(182,255,0,0.12) 0%, rgba(125,204,0,0.035) 42%, transparent 76%), #050505', color: C.white, position: 'relative', overflow: 'hidden' }}
        aria-label="Velnix Solutions site footer"
      >

        {/* ── AMBIENT BACKGROUND ── */}
        <div className="pointer-events-none select-none absolute inset-0" aria-hidden="true">
          {/* Top separator line */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${C.la(0.25)}, transparent)` }} />
          {/* Subtle lime glow top-left */}
          <div style={{ position: 'absolute', top: -120, left: -100, width: 500, height: 500, background: `radial-gradient(circle, ${C.la(0.1)} 0%, ${C.ga(0.035)} 40%, transparent 72%)`, filter: 'blur(48px)' }} />
          {/* Subtle green glow bottom-right */}
          <div style={{ position: 'absolute', bottom: -80, right: -60, width: 400, height: 400, background: `radial-gradient(circle, ${C.ga(0.12)} 0%, ${C.ga(0.04)} 42%, transparent 74%)`, filter: 'blur(58px)' }} />
        </div>

        {/* ══════════════════════════════════════════════════════
            ZONE 1 — FINAL CONVERSION CTA
        ══════════════════════════════════════════════════════ */}
        <div
          className="relative z-10"
          style={{
            borderBottom: `1px solid ${C.wa(0.07)}`,
            background: `linear-gradient(180deg, ${C.graphite}55 0%, transparent 100%)`,
          }}
        >
          <div
            className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16"
            style={{ paddingTop: '5rem', paddingBottom: '5rem' }}
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

              {/* Left — Headline + copy */}
              <div style={{ maxWidth: 560 }}>
                {/* CTA Eyebrow */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease }}
                  className="inline-flex items-center gap-2 mb-6"
                >
                  <span
                    style={{
                      width: 6, height: 6, borderRadius: '50%',
                      background: C.lime,
                      display: 'inline-block',
                      boxShadow: `0 0 8px ${C.lime}`,
                      animation: shouldReduce ? 'none' : 'velnix-footer-blink 2s ease-in-out infinite',
                    }}
                  />
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.la(0.8) }}>
                    Start the Conversation
                  </span>
                </motion.div>

                {/* CTA Headline */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08, duration: 0.6, ease }}
                  style={{
                    fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)',
                    fontWeight: 800,
                    lineHeight: 1.1,
                    letterSpacing: '-0.03em',
                    color: C.white,
                    marginBottom: '1.25rem',
                  }}
                >
                  Ready to automate what{' '}
                  <span style={{ color: C.lime }}>slows your</span>
                  {' '}business down?
                </motion.h2>

                {/* CTA Supporting copy */}
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.16, duration: 0.55, ease }}
                  style={{ fontSize: '1rem', color: C.wa(0.6), lineHeight: 1.7, fontWeight: 400 }}
                >
                  Tell us where your operation loses time. We'll identify what to automate
                  and build the system to make it work.
                </motion.p>
              </div>

              {/* Right — CTA buttons + contact quick access */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.55, ease }}
                className="flex flex-col gap-4 shrink-0"
              >
                {/* Primary CTA */}
                <FooterCTA />

              </motion.div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            ZONE 2 — BRAND + NAVIGATION GRID
        ══════════════════════════════════════════════════════ */}
        <div className="relative z-10">
          <div
            className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16"
            style={{ paddingTop: '4rem', paddingBottom: '4rem' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

              {/* Brand column */}
              <div className="lg:col-span-4 flex flex-col gap-8">

                {/* Logo */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease }}
                >
                  <a href="/" aria-label="Velnix Solutions home">
                    <img
                      src="/image/logo/logo1.png"
                      alt="Velnix Solutions"
                      style={{ height: 56, width: 'auto', objectFit: 'contain' }}
                    />
                  </a>
                </motion.div>

                {/* Brand statement */}
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08, duration: 0.5, ease }}
                  style={{ fontSize: '0.9rem', color: C.wa(0.55), lineHeight: 1.75, maxWidth: '34ch' }}
                >
                  AI systems, software, and automation built around real business operations.
                  We turn operational complexity into scalable intelligence.
                </motion.p>

                {/* Social links */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.16, duration: 0.5, ease }}
                  className="flex items-center gap-3"
                >
                  {SOCIAL_LINKS.map(s => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      className="inline-flex items-center justify-center transition-all duration-200"
                      style={{
                        width: 34, height: 34,
                        background: C.wa(0.05),
                        border: `1px solid ${C.wa(0.1)}`,
                        color: C.wa(0.5),
                      }}
                      onMouseEnter={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.color = C.lime;
                        el.style.borderColor = C.la(0.4);
                        el.style.background = C.la(0.07);
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.color = C.wa(0.5);
                        el.style.borderColor = C.wa(0.1);
                        el.style.background = C.wa(0.05);
                      }}
                    >
                      {s.icon}
                    </a>
                  ))}
                </motion.div>

                {/* Newsletter */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5, ease }}
                >
                  <NewsletterForm />
                </motion.div>
              </div>

              {/* Navigation columns */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-6">
                  {NAV_COLS.map((col, i) => (
                    <motion.div
                      key={col.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * i, duration: 0.5, ease }}
                    >
                      <FooterCol title={col.title} links={col.links} />
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15, duration: 0.5, ease }}
                  >
                    <FooterContactCol />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            ZONE 3 — LEGAL / BOTTOM BAR
        ══════════════════════════════════════════════════════ */}
        <div
          className="relative z-10"
          style={{ borderTop: `1px solid ${C.wa(0.07)}` }}
        >
          <div
            className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}
          >
            {/* Copyright */}
            <p style={{ fontSize: '0.7rem', color: C.wa(0.35), letterSpacing: '0.08em', fontWeight: 500 }}>
              © {new Date().getFullYear()}{' '}
              <span style={{ color: C.la(0.8), fontWeight: 700 }}>Velnix Solutions</span>
              {' '}— All rights reserved.
            </p>

            {/* Legal links */}
            <div className="flex items-center gap-6">
              {LEGAL_LINKS.map((l, i) => (
                <React.Fragment key={l.label}>
                  {i > 0 && <span style={{ color: C.wa(0.15), fontSize: '0.6rem' }}>•</span>}
                  <a
                    href={l.href}
                    style={{
                      fontSize: '0.7rem',
                      color: C.wa(0.35),
                      fontWeight: 500,
                      letterSpacing: '0.06em',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = C.lime; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = C.wa(0.35); }}
                  >
                    {l.label}
                  </a>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* ── SCROLL TO TOP ── */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.25 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 z-[100] flex items-center justify-center"
              style={{
                width: 44, height: 44,
                background: C.lime,
                color: C.black,
                border: 'none',
                cursor: 'pointer',
                boxShadow: `0 8px 28px ${C.la(0.4)}`,
                transition: 'background 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = C.green;
                el.style.boxShadow = `0 12px 36px ${C.la(0.6)}`;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = C.lime;
                el.style.boxShadow = `0 8px 28px ${C.la(0.4)}`;
              }}
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} strokeWidth={2.5} />
            </motion.button>
          )}
        </AnimatePresence>
      </footer>
    </>
  );
};

export default Footer;

// ─────────────────────────────────────────────────────────────────────────────
// FOOTER CTA BUTTON
// ─────────────────────────────────────────────────────────────────────────────
const FooterCTA = () => {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.15;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.15;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleLeave = (e: React.MouseEvent) => {
    const el = ref.current;
    if (el) el.style.transform = 'translate(0,0)';
    (e.currentTarget as HTMLElement).style.background = C.lime;
    (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 28px ${C.la(0.35)}`;
  };

  return (
    <a
      ref={ref}
      href="https://calendar.app.google/F63aBoA5vxJdtihj7"
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMove}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.background = C.green;
        (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 36px ${C.la(0.55)}`;
      }}
      onMouseLeave={handleLeave}
      className="group inline-flex items-center gap-2.5 relative overflow-hidden rounded-full"
      style={{
        background: C.lime,
        color: C.black,
        fontWeight: 700,
        fontSize: '0.875rem',
        letterSpacing: '0.01em',
        padding: '0.875rem 2rem',
        textDecoration: 'none',
        transition: 'background 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease',
        boxShadow: `0 8px 28px ${C.la(0.35)}`,
        whiteSpace: 'nowrap',
      }}
      aria-label="Book a strategy call with Velnix Solutions"
    >
      {/* Shimmer */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%)',
          backgroundSize: '200% auto',
          animation: 'velnix-footer-shimmer 2.8s linear infinite',
        }}
      />
      <style>{`@keyframes velnix-footer-shimmer { from { background-position: -200% center; } to { background-position: 200% center; } }`}</style>

      <span className="relative z-10">Book a Strategy Call</span>
      <ArrowRight
        size={16}
        strokeWidth={2.5}
        className="relative z-10 group-hover:translate-x-0.5 transition-transform duration-200"
      />
    </a>
  );
};
