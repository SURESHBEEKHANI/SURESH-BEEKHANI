import { useState, useEffect, useRef } from 'react';
import {
  Menu, X, ChevronDown, ChevronRight, Search, ArrowRight, Phone, Mail,
  HeartPulse, Landmark, GraduationCap, ShoppingCart,
  Utensils, Compass, ShieldCheck, Zap,
  Sparkles, MessageCircle, Code2, Brain,
  Eye, Workflow, GitBranch, ArrowUpRight, type LucideIcon,
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
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
      { label: 'AI Audit',                 href: '/ai-audit' },
      { label: 'Agentic AI',               href: '/agentic-ai' },
      { label: 'AI Automation',             href: '/ai-automation' },
      { label: 'AI Development',           href: '/ai-development' },
      { label: 'Conversational AI',         href: '/ai-chatbot-development' },
      { label: 'Machine Learning & Data',   href: '/machine-learning' },
      { label: 'Computer Vision & NLP',     href: '/computer-vision' },
      { label: 'Custom Software',           href: '/custom-software-development' },
      { label: 'Cloud DevOps',              href: '/devops' },
      { label: 'Web & Mobile Development',  href: '/web-development' },
      { label: 'UI/UX & Product Design',    href: '/ui-ux-design' },
      { label: 'Software Modernization',    href: '/software-modernization' },
    ],
  },
  {
    label: 'Industries',
    href: '/#industries',
    items: [
      { label: 'Healthcare',       href: '/healthcare',          icon: HeartPulse,    desc: 'AI-powered healthcare solutions and clinical workflow automation.' },
      { label: 'Fintech',          href: '/fintech',             icon: Landmark,      desc: 'Secure financial systems and intelligent payment processing.' },
      { label: 'Education',        href: '/education',           icon: GraduationCap, desc: 'Smart learning platforms and educational AI systems.' },
      { label: 'E-Commerce',       href: '/e-commerce',          icon: ShoppingCart,  desc: 'AI-driven shopping experiences and inventory optimization.' },
      { label: 'Food & Groceries', href: '/food-and-groceries',  icon: Utensils,      desc: 'Supply chain automation and food delivery platforms.' },
      { label: 'Travel & Tourism', href: '/travel-and-tourism',  icon: Compass,       desc: 'Smart booking systems and travel experience optimization.' },
      { label: 'Insurance',        href: '/insurance',           icon: ShieldCheck,   desc: 'Automated claims processing and risk assessment AI.' },
      { label: 'On-Demand',        href: '/on-demand',           icon: Zap,           desc: 'Real-time service platforms and on-demand delivery systems.' },
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
  { label: 'AI Automation',    href: '/ai-automation' },
  { label: 'AI Development',   href: '/ai-development' },
  { label: 'Agentic AI',       href: '/agentic-ai' },
  { label: 'Conversational AI', href: '/ai-chatbot-development' },
  { label: 'Machine Learning & Data', href: '/machine-learning' },
  { label: 'Computer Vision & NLP', href: '/computer-vision' },
  { label: 'Custom Software',  href: '/custom-software-development' },
  { label: 'AI Audit',         href: '/ai-audit' },
  { label: 'Web & Mobile Development', href: '/web-development' },
  { label: 'UI/UX & Product Design', href: '/ui-ux-design' },
  // Legacy service routes for search compatibility
  { label: 'Machine Learning', href: '/machine-learning' },
  { label: 'NLP',              href: '/natural-language-processing' },
  { label: 'Predictive Modelling', href: '/predictive-modelling' },
  { label: 'Web Development',  href: '/web-development' },
  { label: 'App Development',  href: '/app-development' },
  { label: 'DevOps Engineering', href: '/devops' },
      { label: 'Software Modernization', href: '/software-modernization' },
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
const chunk = <T extends unknown>(arr: T[], size: number): T[][] => {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
};

const DesktopDropdown = ({
  items,
  variant,
  columns,
  activeHref,
}: {
  items: NavItem[];
  variant: 'solutions' | 'industries' | 'simple';
  columns?: number;
  activeHref?: string;
}) => {
  const colCount = variant === 'solutions' ? (columns ?? 2) : variant === 'industries' ? 2 : 1;
  const isGrid = variant === 'solutions' || variant === 'industries';

  // For Services with 2 columns, split items evenly (6 per column for 12 items)
  const getColumns = () => {
    if (variant === 'solutions' && colCount === 2) {
      const itemsPerCol = Math.ceil(items.length / 2);
      return [
        items.slice(0, itemsPerCol),
        items.slice(itemsPerCol)
      ];
    }
    return chunk(items, colCount);
  };

  const columns_data = getColumns();

  return (
    <motion.div
      initial={{ opacity: 0, y: -12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -12, scale: 0.98 }}
      transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="absolute top-full left-1/2 -translate-x-1/2 z-50 pt-4"
      style={{
        minWidth: variant === 'solutions' ? 720 : variant === 'industries' ? 540 : 260,
        maxWidth: 'calc(100vw - 2rem)',
      }}
    >
      <div
        style={{
          background: `linear-gradient(135deg, ${C.graphite} 0%, rgba(25,25,25,0.98) 100%)`,
          border: `1px solid ${C.wa(0.12)}`,
          boxShadow: `
            0 32px 80px rgba(0,0,0,0.45),
            0 8px 24px rgba(0,0,0,0.25),
            inset 0 1px 0 ${C.wa(0.08)}
          `,
          overflow: 'hidden',
          borderRadius: 18,
          padding: '16px',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
        }}
      >
        <div
          className="grid"
          style={{ gridTemplateColumns: `repeat(${colCount}, minmax(0, 1fr))`, gap: '4px 20px' }}
        >
          {columns_data.map((col, ci) => (
            <div key={ci} className="flex flex-col gap-1">
              {col.map((item, index) => {
                const isActive = activeHref === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (ci * col.length + index) * 0.03, duration: 0.2 }}
                  >
                    <Link
                      to={item.href}
                      className="group relative flex items-center justify-between gap-3 px-4 py-3.5 transition-all duration-200"
                      style={{
                        background: isActive ? `linear-gradient(135deg, ${C.la(0.15)} 0%, ${C.la(0.08)} 100%)` : 'transparent',
                        textDecoration: 'none',
                        borderRadius: 12,
                        border: `1px solid ${isActive ? C.la(0.25) : 'transparent'}`,
                      }}
                      onMouseEnter={e => {
                        const el = e.currentTarget as HTMLElement;
                        if (!isActive) {
                          el.style.background = `linear-gradient(135deg, ${C.la(0.12)} 0%, ${C.la(0.06)} 100%)`;
                          el.style.borderColor = C.la(0.2);
                          el.style.transform = 'translateX(2px)';
                          const text = el.querySelector('.menu-text') as HTMLElement;
                          const arrow = el.querySelector('svg') as SVGElement;
                          if (text) text.style.color = C.lime;
                          if (arrow) {
                            arrow.style.color = C.lime;
                            arrow.style.transform = 'translate(2px, -2px)';
                          }
                        }
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLElement;
                        if (!isActive) {
                          el.style.background = 'transparent';
                          el.style.borderColor = 'transparent';
                          el.style.transform = 'translateX(0px)';
                          const text = el.querySelector('.menu-text') as HTMLElement;
                          const arrow = el.querySelector('svg') as SVGElement;
                          if (text) text.style.color = C.wa(0.9);
                          if (arrow) {
                            arrow.style.color = C.wa(0.5);
                            arrow.style.transform = 'translate(0px, 0px)';
                          }
                        }
                      }}
                    >
                      <div className="flex flex-col gap-1">
                        <span
                          className="menu-text text-sm font-semibold transition-all duration-200"
                          style={{ 
                            color: isActive ? C.lime : C.wa(0.9),
                            lineHeight: '1.4'
                          }}
                        >
                          {item.label}
                        </span>
                        {item.desc && variant === 'solutions' && (
                          <span
                            className="text-xs leading-relaxed"
                            style={{ 
                              color: C.wa(0.55),
                              maxWidth: '280px',
                              lineHeight: '1.5'
                            }}
                          >
                            {item.desc}
                          </span>
                        )}
                      </div>
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.75}
                        style={{ 
                          color: isActive ? C.lime : C.wa(0.5), 
                          flexShrink: 0, 
                          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// DESKTOP NAV ITEM
// ─────────────────────────────────────────────────────────────────────────────
const DesktopNavItem = ({
  group, isActive, shouldReduce, currentPath,
}: {
  group: NavGroup;
  isActive: boolean;
  shouldReduce: boolean;
  currentPath: string;
}) => {
  const [open, setOpen] = useState(false);
  const hasDropdown = !!group.items;

  return (
    <div
      className="relative"
      onMouseEnter={() => hasDropdown && setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        to={group.href ?? '#'}
        onClick={e => {
          if (!group.href || group.href === '#') {
            if (hasDropdown) {
              e.preventDefault();
              setOpen(o => !o);
            }
          } else {
            setOpen(false);
          }
        }}
        className="velnix-nav-link relative inline-flex items-center gap-1 text-sm font-semibold"
        style={{
          color: isActive ? C.lime : C.wa(0.85),
          textDecoration: 'none',
          padding: '0.5rem 0.75rem',
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

      </Link>



      {hasDropdown && (
        <AnimatePresence>
          {open && (
            <DesktopDropdown
              items={group.items!}
              columns={group.label === 'Services' ? 2 : 2}
              activeHref={group.items?.find(i => currentPath === i.href)?.href}
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
        className="flex items-center justify-between py-4 text-lg font-bold"
        style={{
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
        <span className="text-lg font-bold" style={{ color: open ? C.lime : C.white }}>
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
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={onNavigate}
                    className="flex items-center gap-3 py-3 pl-4 text-sm leading-6"
                    style={{ color: C.wa(0.55), textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = C.lime; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = C.wa(0.55); }}
                  >
                    {Icon ? (
                      <Icon size={16} strokeWidth={1.75} color={group.label === 'Industries' ? C.green : C.lime} className="shrink-0" />
                    ) : (
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: C.la(0.5), flexShrink: 0, display: 'inline-block' }} />
                    )}
                    {item.label}
                  </Link>
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
          className="fixed inset-0 z-[200] flex items-start justify-center px-4 pt-[15vh] font-display"
          style={{ background: 'rgba(0,0,0,0.85)' }}
          onClick={e => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            initial={shouldReduce ? false : { opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.97 }}
            transition={{ duration: 0.2, ease }}
            className="w-full overflow-hidden"
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
                className="flex-1 bg-transparent text-lg outline-none"
                style={{ color: C.white, border: 'none' }}
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
                      className="flex items-center gap-3 px-4 py-3 text-sm transition-all duration-150"
                      style={{ color: C.wa(0.75), textDecoration: 'none', borderRadius: 2 }}
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
                <div className="py-12 text-center text-sm leading-6" style={{ color: C.wa(0.42) }}>
                  No results for "{query}"
                </div>
              ) : (
                <div className="py-12 text-center text-sm leading-6" style={{ color: C.wa(0.42) }}>
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
        aria-label="Main navigation"
        className="velnix-navbar-cursor font-display"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0,
          zIndex: 100,
          background: isHeroTop 
            ? 'linear-gradient(180deg, rgba(5,5,5,0.85) 0%, rgba(5,5,5,0.45) 100%)' 
            : `linear-gradient(180deg, ${C.black} 0%, rgba(8,8,8,0.98) 100%)`,
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          borderBottom: isHeroTop 
            ? `1px solid ${C.wa(0.06)}` 
            : `1px solid ${C.wa(0.12)}`,
          boxShadow: isHeroTop 
            ? '0 4px 16px rgba(0,0,0,0.12)' 
            : `0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 ${C.wa(0.05)}`,
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div
          className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between relative"
          style={{
            minHeight: 76,
          }}
        >
          {/* Subtle background accent */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(ellipse 100% 40% at 50% 0%, ${C.ga(0.03)} 0%, transparent 70%)`,
              pointerEvents: 'none'
            }}
          />

          {/* LOGO */}
          <motion.a
            href="/"
            aria-label="Velnix Solutions — Home"
            className="flex items-center shrink-0 relative z-10"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            style={{ 
              transition: 'opacity 0.3s ease',
              filter: 'drop-shadow(0 2px 8px rgba(182,255,0,0.1))'
            }}
            onMouseEnter={e => { 
              (e.currentTarget as HTMLElement).style.opacity = '0.9'; 
            }}
            onMouseLeave={e => { 
              (e.currentTarget as HTMLElement).style.opacity = '1'; 
            }}
          >
            <img
              src="/image/logo/logo1.png"
              alt="Velnix Solutions"
              width={2172}
              height={724}
              style={{
                height: 50,
                width: 'auto',
              }}
              decoding="async"
            />
          </motion.a>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-2 relative z-10">
            {NAV.map(group => (
              <DesktopNavItem
                key={group.label}
                group={group}
                isActive={isActive(group)}
                shouldReduce={!!shouldReduce}
                currentPath={currentPath}
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
              className="velnix-nav-link hidden items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] xl:flex"
              style={{ color: C.wa(0.42), textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = C.white; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = C.wa(0.42); }}
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
            <motion.nav
              id="velnix-mobile-menu"
              aria-label="Mobile navigation"
              initial={shouldReduce ? false : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease }}
              style={{ overflow: 'hidden', background: `radial-gradient(ellipse 80% 45% at 78% 0%, ${C.ga(0.1)} 0%, transparent 72%), ${C.black}`, borderTop: `1px solid ${C.wa(0.07)}` }}
            >
              <div
                className="max-w-7xl mx-auto px-6 lg:px-8"
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
                  <span className="text-sm font-semibold">Search the site...</span>
                </button>

                {/* Contact info */}
                <div className="flex flex-col gap-3 mb-6">
                  <a
                    href="mailto:info@velnixsolutions.com"
                    className="inline-flex items-center gap-2 text-sm leading-6"
                    style={{ color: C.wa(0.55), textDecoration: 'none' }}
                  >
                    <Mail size={13} strokeWidth={1.5} />
                    info@velnixsolutions.com
                  </a>
                  <a
                    href="tel:+923351312852"
                    className="inline-flex items-center gap-2 text-sm leading-6"
                    style={{ color: C.wa(0.55), textDecoration: 'none' }}
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
                  className="flex w-full items-center justify-center gap-3 rounded-full py-4 text-sm font-bold"
                  style={{
                    background: C.lime, color: C.black,
                    textDecoration: 'none',
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
            </motion.nav>
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
      className="velnix-nav-link inline-flex items-center gap-3 rounded-full text-sm font-bold"
      style={{
        background: C.lime,
        color: C.black,
        padding: scrolled ? '0.75rem 1.5rem' : '1rem 1.5rem',
        textDecoration: 'none',
        boxShadow: `0 4px 16px ${C.la(0.3)}`,
        transition: 'background 0.2s, box-shadow 0.2s, padding 0.35s, transform 0.2s',
        whiteSpace: 'nowrap',
      }}
      aria-label="Book a Strategy Call with Velnix Solutions"
    >
      Book a Strategy Call
      <ArrowRight size={17} strokeWidth={2.5} />
    </a>
  );
};