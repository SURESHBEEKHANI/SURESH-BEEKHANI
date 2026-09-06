import { useState, useEffect, useRef } from 'react';
import {
  Menu, X, ChevronDown, Search, ArrowRight, Phone, Mail,
  HeartPulse, Landmark, GraduationCap, ShoppingCart,
  Utensils, Compass, ShieldCheck, Zap,
  Sparkles, Bot, MessageCircle, Code2, Brain,
  Languages, Eye, Globe, Smartphone, Cloud, Database,
  type LucideIcon,
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

// ─────────────────────────────────────────────────────────────────────────────
// BRAND TOKENS
// ─────────────────────────────────────────────────────────────────────────────
const C = {
  black:    '#050505',
  graphite: '#111111',
  white:    '#FFFFFF',
  lime:     '#B6FF00',
  green:    '#7DCC00',
  la: (o: number) => `rgba(182,255,0,${o})`,
  ga: (o: number) => `rgba(125,204,0,${o})`,
  wa: (o: number) => `rgba(255,255,255,${o})`,
};

const ease = [0.22, 1, 0.36, 1] as const;

// ─────────────────────────────────────────────────────────────────────────────
// NAVIGATION DATA
// ─────────────────────────────────────────────────────────────────────────────
interface NavItem { label: string; href: string; desc?: string; icon?: LucideIcon; }
interface NavGroup { label: string; href?: string; items?: NavItem[] }

const NAV: NavGroup[] = [
  {
    label: 'Services',
    items: [
      { label: 'AI Development',           href: '/ai-development',             icon: Sparkles,      desc: 'Custom AI systems built for your business.' },
      { label: 'AI Automation',             href: '/ai-automation',              icon: Zap,           desc: 'Eliminate manual work with intelligent workflows.' },
      { label: 'Agentic AI',                href: '/agentic-ai',                 icon: Bot,           desc: 'Deploy AI agents for autonomous operations.' },
      { label: 'Chatbot Development',       href: '/ai-chatbot-development',     icon: MessageCircle, desc: 'Conversational AI for customer and internal use.' },
      { label: 'Custom Software',           href: '/custom-software-development', icon: Code2,         desc: 'Bespoke applications built around your processes.' },
      { label: 'Machine Learning',          href: '/machine-learning',           icon: Brain,         desc: 'Predictive models and intelligent data systems.' },
      { label: 'NLP',                       href: '/natural-language-processing', icon: Languages,     desc: 'Text intelligence and language understanding.' },
      { label: 'Computer Vision',           href: '/computer-vision',            icon: Eye,           desc: 'Image and video intelligence systems.' },
      { label: 'Web Development',           href: '/web-development',            icon: Globe,         desc: 'Scalable, high-performance web products.' },
      { label: 'App Development',           href: '/app-development',            icon: Smartphone,    desc: 'Mobile applications for iOS and Android.' },
      { label: 'DevOps Engineering',        href: '/devops',                     icon: Cloud,         desc: 'Cloud infrastructure and deployment pipelines.' },
      { label: 'Big Data Analytics',        href: '/big-data-analytics',         icon: Database,      desc: 'Turn raw data into actionable business insight.' },
    ],
  },
  {
    label: 'Industries',
    items: [
      { label: 'Healthcare',       href: '/healthcare',          icon: HeartPulse,    desc: 'Advanced technology for healthcare excellence.' },
      { label: 'Fintech',          href: '/fintech',             icon: Landmark,      desc: 'Financial technology solutions for modern markets.' },
      { label: 'Education',        href: '/education',           icon: GraduationCap, desc: 'We promote education through innovative technology.' },
      { label: 'E-Commerce',       href: '/e-commerce',          icon: ShoppingCart,  desc: 'We enhance online commerce with tailored solutions.' },
      { label: 'Food & Groceries', href: '/food-and-groceries',  icon: Utensils,      desc: 'Tech solutions revolutionizing food and grocery.' },
      { label: 'Travel & Tourism', href: '/travel-and-tourism',  icon: Compass,       desc: 'Digital solutions for travel and hospitality.' },
      { label: 'Insurance',        href: '/insurance',           icon: ShieldCheck,   desc: 'Innovative insurance technology solutions.' },
      { label: 'On-Demand',        href: '/on-demand',           icon: Zap,           desc: 'Instant solutions tailored to your needs.' },
    ],
  },
  {
    label: 'Work',
    href: '/Portfolio',
  },
  {
    label: 'Company',
    items: [
      { label: 'About Velnix',  href: '/about' },
      { label: 'Careers',      href: '/careers' },
      { label: 'Blog',          href: '/blogs' },
      { label: 'Contact',       href: '/contact' },
    ],
  },
];

const ALL_SEARCHABLE: NavItem[] = [
  { label: 'Home',             href: '/' },
  { label: 'Portfolio',        href: '/Portfolio' },
  { label: 'About',            href: '/about' },
  { label: 'Careers',          href: '/careers' },
  { label: 'Blogs',            href: '/blogs' },
  { label: 'Contact',          href: '/contact' },
  { label: 'AI Development',   href: '/ai-development' },
  { label: 'AI Automation',    href: '/ai-automation' },
  { label: 'Agentic AI',       href: '/agentic-ai' },
  { label: 'Chatbot Dev',      href: '/ai-chatbot-development' },
  { label: 'Custom Software',  href: '/custom-software-development' },
  { label: 'Machine Learning', href: '/machine-learning' },
  { label: 'NLP',              href: '/natural-language-processing' },
  { label: 'Computer Vision',  href: '/computer-vision' },
  { label: 'Predictive Modelling', href: '/predictive-modelling' },
  { label: 'Web Development',  href: '/web-development' },
  { label: 'App Development',  href: '/app-development' },
  { label: 'DevOps Engineering', href: '/devops' },
  { label: 'Big Data Analytics', href: '/big-data-analytics' },
  { label: 'Healthcare', href: '/healthcare' },
  { label: 'Fintech', href: '/fintech' },
  { label: 'Education', href: '/education' },
  { label: 'E-Commerce', href: '/e-commerce' },
  { label: 'Food & Groceries', href: '/food-and-groceries' },
  { label: 'Travel & Tourism', href: '/travel-and-tourism' },
  { label: 'Insurance', href: '/insurance' },
  { label: 'On-Demand', href: '/on-demand' },
];

// ─────────────────────────────────────────────────────────────────────────────
// DESKTOP DROPDOWN
// ─────────────────────────────────────────────────────────────────────────────
const DesktopDropdown = ({
  items,
  variant,
}: {
  items: NavItem[];
  variant: 'solutions' | 'industries' | 'simple';
}) => (
  <motion.div
    initial={{ opacity: 0, y: -8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.18, ease }}
    className="absolute top-full left-1/2 -translate-x-1/2 z-50 pt-3"
    style={{ minWidth: variant === 'solutions' ? 680 : variant === 'industries' ? 560 : 240 }}
  >
    {/* Arrow tip */}
    <div
      style={{
        position: 'absolute', top: 8, left: '50%',
        width: 12, height: 12,
        background: C.graphite,
        border: `1px solid ${C.wa(0.1)}`,
        borderBottom: 'none',
        borderRight: 'none',
        transform: 'translateX(-50%) rotate(45deg)',
        zIndex: 1,
      }}
    />
    <div
      style={{
        background: C.graphite,
        border: `1px solid ${C.wa(0.08)}`,
        boxShadow: `0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px ${C.la(0.04)}`,
        overflow: 'hidden',
      }}
    >
      {variant === 'solutions' || variant === 'industries' ? (
        <div
          className={variant === 'solutions' ? 'grid grid-cols-3 gap-px p-2' : 'grid grid-cols-2 gap-px p-2'}
          style={{ background: C.wa(0.04) }}
        >
          {items.map(item => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                className="group flex items-start gap-3 px-4 py-3.5 transition-all duration-150"
                style={{ background: C.graphite, textDecoration: 'none' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = C.la(0.06); }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = C.graphite; }}
              >
                {Icon && (
                  <span
                    className="shrink-0 inline-flex items-center justify-center"
                    style={{
                      width: 34,
                      height: 34,
                      background: variant === 'industries'
                        ? `linear-gradient(145deg, ${C.green} 0%, #4f8f00 100%)`
                        : `linear-gradient(145deg, ${C.lime} 0%, ${C.green} 100%)`,
                      border: `1px solid ${variant === 'industries' ? C.green : C.lime}`,
                      color: C.black,
                      boxShadow: `inset 2px 2px 0 rgba(255,255,255,0.3), inset -2px -2px 0 rgba(0,0,0,0.22), 0 4px 0 rgba(0,0,0,0.28), 0 7px 14px ${variant === 'industries' ? C.ga(0.18) : C.la(0.18)}`,
                      transform: 'translateY(-1px)',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    }}
                  >
                    <Icon size={16} strokeWidth={2.25} />
                  </span>
                )}
                <span className="flex flex-col gap-0.5 min-w-0">
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: C.wa(0.92), lineHeight: 1.3 }}>
                    {item.label}
                  </span>
                  {item.desc && (
                    <span style={{ fontSize: '0.68rem', color: C.wa(0.4), lineHeight: 1.4 }}>
                      {item.desc}
                    </span>
                  )}
                </span>
              </a>
            );
          })}
        </div>
      ) : (
        <div className="py-1.5">
          {items.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-5 py-3 transition-all duration-150"
              style={{ fontSize: '0.85rem', fontWeight: 500, color: C.wa(0.75), textDecoration: 'none', background: C.graphite }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = C.lime;
                el.style.background = C.la(0.06);
                el.style.paddingLeft = '1.375rem';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = C.wa(0.75);
                el.style.background = C.graphite;
                el.style.paddingLeft = '1.25rem';
              }}
            >
              <span
                style={{ width: 4, height: 4, borderRadius: '50%', background: C.la(0.4), flexShrink: 0, display: 'inline-block' }}
              />
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  </motion.div>
);

// ─────────────────────────────────────────────────────────────────────────────
// DESKTOP NAV ITEM
// ─────────────────────────────────────────────────────────────────────────────
const DesktopNavItem = ({
  group, isActive, shouldReduce,
}: {
  group: NavGroup;
  isActive: boolean;
  shouldReduce: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const hasDropdown = !!group.items;

  return (
    <div
      className="relative"
      onMouseEnter={() => hasDropdown && setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <a
        href={group.href ?? '#'}
        onClick={e => hasDropdown && e.preventDefault()}
        className="inline-flex items-center gap-1 relative"
        style={{
          fontSize: '0.85rem',
          fontWeight: 600,
          color: isActive ? C.lime : C.wa(0.85),
          textDecoration: 'none',
          padding: '0.5rem 0.75rem',
          letterSpacing: '0.01em',
          transition: 'color 0.2s',
          outline: 'none',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = C.lime; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = isActive ? C.lime : C.wa(0.85); }}
        aria-haspopup={hasDropdown ? 'true' : undefined}
        aria-expanded={hasDropdown ? open : undefined}
      >
        {group.label}
        {hasDropdown && (
          <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown size={13} strokeWidth={2.5} />
          </motion.div>
        )}
        {/* Active indicator */}
        {isActive && (
          <span
            style={{
              position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
              width: '60%', height: 2, background: C.lime, borderRadius: 1,
            }}
          />
        )}
      </a>

      {hasDropdown && (
        <AnimatePresence>
          {open && (
            <DesktopDropdown
              items={group.items!}
              variant={
                group.label === 'Services'
                  ? 'solutions'
                  : group.label === 'Industries'
                    ? 'industries'
                    : 'simple'
              }
            />
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// MOBILE ACCORDION ITEM
// ─────────────────────────────────────────────────────────────────────────────
const MobileAccordion = ({
  group, onNavigate, shouldReduce,
}: {
  group: NavGroup;
  onNavigate: () => void;
  shouldReduce: boolean;
}) => {
  const [open, setOpen] = useState(false);

  if (!group.items) {
    return (
      <a
        href={group.href}
        onClick={onNavigate}
        className="flex items-center justify-between py-4"
        style={{
          fontSize: '1.05rem', fontWeight: 600,
          color: C.white, textDecoration: 'none',
          borderBottom: `1px solid ${C.wa(0.06)}`,
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = C.lime; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = C.white; }}
      >
        {group.label}
        <ArrowRight size={16} strokeWidth={2} color={C.wa(0.3)} />
      </a>
    );
  }

  return (
    <div style={{ borderBottom: `1px solid ${C.wa(0.06)}` }}>
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center justify-between w-full py-4"
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        aria-expanded={open}
      >
        <span style={{ fontSize: '1.05rem', fontWeight: 600, color: open ? C.lime : C.white }}>
          {group.label}
        </span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.22 }}>
          <ChevronDown size={16} strokeWidth={2.5} color={open ? C.lime : C.wa(0.4)} />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={shouldReduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease }}
            style={{ overflow: 'hidden' }}
          >
            <div className="pb-3 flex flex-col gap-0">
              {group.items.map(item => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={onNavigate}
                    className="flex items-center gap-3 py-3 pl-4"
                    style={{ fontSize: '0.875rem', color: C.wa(0.6), textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = C.lime; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = C.wa(0.6); }}
                  >
                    {Icon ? (
                      <Icon size={16} strokeWidth={1.75} color={group.label === 'Industries' ? C.green : C.lime} className="shrink-0" />
                    ) : (
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: C.la(0.5), flexShrink: 0, display: 'inline-block' }} />
                    )}
                    {item.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// SEARCH OVERLAY
// ─────────────────────────────────────────────────────────────────────────────
const SearchOverlay = ({
  open, onClose, shouldReduce,
}: {
  open: boolean; onClose: () => void; shouldReduce: boolean;
}) => {
  const [query, setQuery] = useState('');
  const [blogs, setBlogs] = useState<{ id: string; title: string }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 80);
      if (blogs.length === 0) {
        supabase.from('blogs').select('id, title').eq('status', 'published')
          .then(({ data, error }) => { if (!error && data) setBlogs(data); });
      }
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  const allLinks = [
    ...ALL_SEARCHABLE,
    ...blogs.map(b => ({ label: `Blog: ${b.title}`, href: `/blogs?article=${b.id}` })),
  ];

  const results = query
    ? allLinks.filter(l => l.label.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[200] flex justify-center items-start pt-[15vh] px-4"
          style={{ background: 'rgba(0,0,0,0.85)' }}
          onClick={e => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            initial={shouldReduce ? false : { opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.97 }}
            transition={{ duration: 0.2, ease }}
            className="w-full max-w-2xl overflow-hidden"
            style={{ background: C.graphite, border: `1px solid ${C.wa(0.1)}` }}
          >
            {/* Input row */}
            <div className="flex items-center gap-3 px-5 py-4" style={{ borderBottom: `1px solid ${C.wa(0.08)}` }}>
              <Search size={18} strokeWidth={2} color={C.wa(0.4)} />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search pages, services, industries, projects..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="flex-1 bg-transparent outline-none"
                style={{ fontSize: '0.95rem', color: C.white, border: 'none' }}
              />
              <button
                onClick={onClose}
                style={{ color: C.wa(0.4), background: 'none', border: 'none', cursor: 'pointer', lineHeight: 0 }}
                aria-label="Close search"
              >
                <X size={18} strokeWidth={2.5} />
              </button>
            </div>

            {/* Results */}
            <div style={{ maxHeight: '55vh', overflowY: 'auto' }}>
              {results.length > 0 ? (
                <div className="p-2 flex flex-col gap-0.5">
                  {results.map((l, i) => (
                    <a
                      key={`${l.href}-${i}`}
                      href={l.href}
                      onClick={onClose}
                      className="flex items-center gap-3 px-4 py-3 transition-all duration-150"
                      style={{ fontSize: '0.875rem', color: C.wa(0.75), textDecoration: 'none', borderRadius: 2 }}
                      onMouseEnter={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = C.la(0.08);
                        el.style.color = C.lime;
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = 'transparent';
                        el.style.color = C.wa(0.75);
                      }}
                    >
                      <Search size={13} strokeWidth={2} />
                      {l.label}
                    </a>
                  ))}
                </div>
              ) : query ? (
                <div className="py-12 text-center" style={{ color: C.wa(0.35), fontSize: '0.9rem' }}>
                  No results for "{query}"
                </div>
              ) : (
                <div className="py-12 text-center" style={{ color: C.wa(0.25), fontSize: '0.9rem' }}>
                  <Search size={32} style={{ margin: '0 auto 12px', opacity: 0.15 }} />
                  Type to search pages, services, and more
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// MAIN NAVBAR
// ─────────────────────────────────────────────────────────────────────────────
const Navbar = ({ isDark = false }: { isDark?: boolean }) => {
  const [scrolled, setScrolled]         = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [searchOpen, setSearchOpen]     = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const shouldReduce = useReducedMotion();
  const { pathname: currentPath } = useLocation();
  const isHeroTop = !scrolled;

  // Scroll handler
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = Math.max(
        window.scrollY,
        document.documentElement.scrollTop,
        document.body.scrollTop,
      );
      setScrolled(scrollTop > 0);

      const sections = document.querySelectorAll('section[id]');
      const pos = scrollTop + 100;
      sections.forEach(s => {
        const el = s as HTMLElement;
        if (pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActiveSection(s.getAttribute('id') ?? 'home');
        }
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('scroll', onScroll, { passive: true, capture: true });
    document.body.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('scroll', onScroll, true);
      document.body.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  const isActive = (group: NavGroup) => {
    if (group.href) return currentPath === group.href;
    return group.items?.some(i => currentPath === i.href) ?? false;
  };

  return (
    <>
      <style>{`
        .velnix-nav-link { transition: color 0.2s; }
        .velnix-nav-link:focus-visible { outline: 2px solid #B6FF00; outline-offset: 2px; }
        @media (pointer: fine) {
          .velnix-navbar-cursor,
          .velnix-navbar-cursor * { cursor: none !important; }
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="velnix-navbar-cursor"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0,
          zIndex: 100,
          background: isHeroTop ? 'transparent' : C.black,
          backgroundColor: isHeroTop ? 'transparent' : C.black,
          backgroundImage: 'none',
          backdropFilter: isHeroTop ? 'none' : 'blur(12px)',
          WebkitBackdropFilter: isHeroTop ? 'none' : 'blur(12px)',
          borderBottom: isHeroTop ? '1px solid transparent' : `1px solid ${C.wa(0.1)}`,
          boxShadow: isHeroTop ? 'none' : `0 8px 24px rgba(0,0,0,0.18)`,
          transition: 'background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease, backdrop-filter 0.35s ease',
        }}
      >
        <div
          className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between"
          style={{
            minHeight: 72,
          }}
        >

          {/* LOGO */}
          <a
            href="/"
            aria-label="Velnix Solutions — Home"
            className="flex items-center shrink-0"
            style={{ transition: 'opacity 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.85'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
          >
            <img
              src="/image/logo/logo1.png"
              alt="Velnix Solutions"
              style={{
                height: 48,
                width: 'auto',
                objectFit: 'contain',
              }}
              decoding="async"
            />
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV.map(group => (
              <DesktopNavItem
                key={group.label}
                group={group}
                isActive={isActive(group)}
                shouldReduce={!!shouldReduce}
              />
            ))}
          </div>

          {/* DESKTOP RIGHT CONTROLS */}
          <div className="hidden lg:flex items-center gap-4">

            {/* Search */}
            <button
              onClick={() => setSearchOpen(true)}
              className="velnix-nav-link"
              style={{
                background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem',
                color: C.wa(0.55), lineHeight: 0, transition: 'color 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = C.lime; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = C.wa(0.55); }}
              aria-label="Search"
            >
              <Search size={18} strokeWidth={2} />
            </button>

            {/* Phone (compact) */}
            <a
              href="tel:+923351312852"
              className="velnix-nav-link hidden xl:flex items-center gap-1.5"
              style={{ fontSize: '0.78rem', fontWeight: 600, color: C.wa(0.5), textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = C.white; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = C.wa(0.5); }}
            >
              <Phone size={13} strokeWidth={2} />
              +92 335 131 2852
            </a>

            {/* Separator */}
            <div style={{ width: 1, height: 22, background: C.wa(0.1) }} />

            {/* PRIMARY CTA */}
            <NavCTA scrolled={scrolled} />
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setMobileOpen(o => !o)}
            className="lg:hidden"
            style={{
              background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem',
              color: C.white, lineHeight: 0,
            }}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="velnix-mobile-menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={shouldReduce ? false : { rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <X size={22} strokeWidth={2.5} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={shouldReduce ? false : { rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <Menu size={22} strokeWidth={2.5} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* ── MOBILE MENU ── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="velnix-mobile-menu"
              role="menu"
              aria-label="Mobile navigation"
              initial={shouldReduce ? false : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease }}
              style={{ overflow: 'hidden', background: `radial-gradient(ellipse 80% 45% at 78% 0%, ${C.ga(0.1)} 0%, transparent 72%), ${C.black}`, borderTop: `1px solid ${C.wa(0.07)}` }}
            >
              <div
                className="max-w-[1280px] mx-auto px-6 sm:px-10"
                style={{ paddingTop: '1.25rem', paddingBottom: '2rem', maxHeight: 'calc(100vh - 72px)', overflowY: 'auto' }}
              >
                {/* Nav items */}
                <div className="flex flex-col gap-0 mb-8">
                  {NAV.map(group => (
                    <MobileAccordion
                      key={group.label}
                      group={group}
                      onNavigate={closeMenu}
                      shouldReduce={!!shouldReduce}
                    />
                  ))}
                </div>

                {/* Mobile search */}
                <button
                  onClick={() => { closeMenu(); setSearchOpen(true); }}
                  className="w-full flex items-center gap-3 mb-4 px-4 py-3.5 transition-all duration-200"
                  style={{
                    background: C.wa(0.04),
                    border: `1px solid ${C.wa(0.08)}`,
                    color: C.wa(0.5), cursor: 'pointer', textAlign: 'left',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = C.la(0.3); }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = C.wa(0.08); }}
                >
                  <Search size={16} strokeWidth={2} />
                  <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Search the site...</span>
                </button>

                {/* Contact info */}
                <div className="flex flex-col gap-3 mb-6">
                  <a
                    href="mailto:info@velnixsolutions.com"
                    className="inline-flex items-center gap-2"
                    style={{ fontSize: '0.8rem', color: C.wa(0.45), textDecoration: 'none' }}
                  >
                    <Mail size={13} strokeWidth={1.5} />
                    info@velnixsolutions.com
                  </a>
                  <a
                    href="tel:+923351312852"
                    className="inline-flex items-center gap-2"
                    style={{ fontSize: '0.8rem', color: C.wa(0.45), textDecoration: 'none' }}
                  >
                    <Phone size={13} strokeWidth={1.5} />
                    +92 335 131 2852
                  </a>
                </div>

                {/* Mobile CTA */}
                <a
                  href="https://calendar.app.google/F63aBoA5vxJdtihj7"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 w-full rounded-full py-4"
                  style={{
                    background: C.lime, color: C.black,
                    fontWeight: 700, fontSize: '0.9rem',
                    textDecoration: 'none', letterSpacing: '0.01em',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = C.green; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = C.lime; }}
                  aria-label="Book a Strategy Call with Velnix Solutions"
                >
                  <ArrowRight size={16} strokeWidth={2.5} />
                  Book a Strategy Call
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* SEARCH OVERLAY */}
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} shouldReduce={!!shouldReduce} />
    </>
  );
};

export default Navbar;

// ─────────────────────────────────────────────────────────────────────────────
// NAVBAR CTA BUTTON
// ─────────────────────────────────────────────────────────────────────────────
const NavCTA = ({ scrolled }: { scrolled: boolean }) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.12;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.12;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  return (
    <a
      ref={ref}
      href="https://calendar.app.google/F63aBoA5vxJdtihj7"
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMove}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = C.green;
        el.style.boxShadow = `0 6px 20px ${C.la(0.45)}`;
      }}
      onMouseLeave={e => {
        const el = ref.current;
        if (el) el.style.transform = 'translate(0,0)';
        const cur = e.currentTarget as HTMLElement;
        cur.style.background = C.lime;
        cur.style.boxShadow = `0 4px 16px ${C.la(0.3)}`;
      }}
      className="inline-flex items-center gap-2 rounded-full velnix-nav-link"
      style={{
        background: C.lime,
        color: C.black,
        fontWeight: 700,
        fontSize: '0.82rem',
        letterSpacing: '0.01em',
        padding: scrolled ? '0.5rem 1.25rem' : '0.6rem 1.4rem',
        textDecoration: 'none',
        boxShadow: `0 4px 16px ${C.la(0.3)}`,
        transition: 'background 0.2s, box-shadow 0.2s, padding 0.35s, transform 0.2s',
        whiteSpace: 'nowrap',
      }}
      aria-label="Book a Strategy Call with Velnix Solutions"
    >
      Book a Strategy Call
      <ArrowRight size={14} strokeWidth={2.5} />
    </a>
  );
};
