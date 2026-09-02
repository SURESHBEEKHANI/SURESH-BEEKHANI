import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Search, ChevronDown, ArrowRight, HelpCircle, CheckCircle2, ShieldCheck, Sparkles, Layers, Code, DollarSign, Wrench, Shield, Compass } from 'lucide-react';

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

export interface FAQItem {
  id: string;
  category: 'General' | 'AI & Automation' | 'Software Development' | 'Process' | 'Pricing' | 'Implementation' | 'Security & Support';
  question: string;
  answer: string | React.ReactNode;
}

const CATEGORIES = [
  'All',
  'General',
  'AI & Automation',
  'Software Development',
  'Process',
  'Pricing',
  'Implementation',
  'Security & Support',
] as const;

const FAQ_DATA: FAQItem[] = [
  // GENERAL
  {
    id: 'faq-1',
    category: 'General',
    question: 'What does Velnix Solutions do?',
    answer: 'Velnix Solutions is an AI development and custom software engineering company. We help SMBs and growing enterprises identify operational bottlenecks, redesign manual workflows, and build custom AI models, intelligent software, and automated data systems that improve efficiency and scalability.',
  },
  {
    id: 'faq-2',
    category: 'General',
    question: 'Do I need to know exactly what technology I need before reaching out?',
    answer: 'No. You only need to know the business problem or operational bottleneck you are experiencing. Velnix operates on a "Business Problem First, Technology Second" principle. During our discovery phase, we evaluate your workflows and determine whether custom software, workflow automation, data integration, or AI is the most effective solution.',
  },
  {
    id: 'faq-3',
    category: 'General',
    question: 'What types of business problems can Velnix solve?',
    answer: 'We solve repetitive manual tasks, slow document processing, fragmented internal data, disconnected software tools, high customer support inquiry volumes, operational bottlenecks in scheduling/ehr/billing, and legacy application scaling limitations.',
  },

  // AI & AUTOMATION
  {
    id: 'faq-4',
    category: 'AI & Automation',
    question: 'Where can AI provide genuine ROI for my business?',
    answer: 'AI creates the highest ROI in repetitive document extraction, automated customer support triage, internal data synthesis (RAG chatbots), predictive operational modeling, and automated data entry between legacy tools.',
  },
  {
    id: 'faq-5',
    category: 'AI & Automation',
    question: 'Does every business problem require AI?',
    answer: 'No. We believe in practical engineering, not hype. Many operational bottlenecks are best solved with clean workflow automation, API integrations, or custom database interfaces. We only recommend AI when it provides clear accuracy, speed, or intelligence advantages.',
  },
  {
    id: 'faq-6',
    category: 'AI & Automation',
    question: 'Can Velnix automate our existing software and tools?',
    answer: 'Yes. We build custom API connectors, webhooks, and automation pipelines to link your existing CRM, ERP, EHR, billing systems, and cloud databases together seamlessly.',
  },

  // SOFTWARE DEVELOPMENT
  {
    id: 'faq-7',
    category: 'Software Development',
    question: 'Can Velnix build custom web applications and internal tools?',
    answer: 'Yes. We design and build enterprise-grade web applications, internal operational dashboards, custom client portals, and cloud-native software tailored specifically to your company’s unique workflows.',
  },
  {
    id: 'faq-8',
    category: 'Software Development',
    question: 'Can you upgrade or modernize our existing application?',
    answer: 'Yes. We audit legacy applications, refactor code architecture, improve database indexing, optimize UI/UX responsiveness, and integrate modern cloud infrastructure without breaking existing user data.',
  },

  // PROCESS
  {
    id: 'faq-9',
    category: 'Process',
    question: 'How does the Velnix development process work?',
    answer: (
      <div className="space-y-4">
        <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
          We follow a structured 6-step lifecycle engineered to minimize risk and deliver predictable outcomes:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 border border-white/10 bg-white/[0.02]">
            <strong className="text-[#B6FF00] block mb-1">1. Discover</strong>
            <span className="text-white/70">Understand operational goals, user pain points, and system constraints.</span>
          </div>
          <div className="p-3 border border-white/10 bg-white/[0.02]">
            <strong className="text-[#B6FF00] block mb-1">2. Diagnose</strong>
            <span className="text-white/70">Identify exact bottlenecks and quantify potential ROI opportunities.</span>
          </div>
          <div className="p-3 border border-white/10 bg-white/[0.02]">
            <strong className="text-[#B6FF00] block mb-1">3. Design</strong>
            <span className="text-white/70">Define system architecture, user experience, and technical specifications.</span>
          </div>
          <div className="p-3 border border-white/10 bg-white/[0.02]">
            <strong className="text-[#B6FF00] block mb-1">4. Build</strong>
            <span className="text-white/70">Engineered development with clean code, testing, and sprint reviews.</span>
          </div>
          <div className="p-3 border border-white/10 bg-white/[0.02]">
            <strong className="text-[#B6FF00] block mb-1">5. Launch</strong>
            <span className="text-white/70">Staged deployment, team onboarding, and system validation.</span>
          </div>
          <div className="p-3 border border-white/10 bg-white/[0.02]">
            <strong className="text-[#B6FF00] block mb-1">6. Improve</strong>
            <span className="text-white/70">Ongoing monitoring, performance optimization, and iterative updates.</span>
          </div>
        </div>
      </div>
    ),
  },

  // PRICING
  {
    id: 'faq-10',
    category: 'Pricing',
    question: 'How much does a Velnix software or AI project cost?',
    answer: 'Project investment is scoped based on operational complexity, number of system integrations, data pipeline requirements, and UI/UX scope. After our initial discovery conversation, we provide a detailed proposal with clear scope boundaries and transparent pricing options before any work begins.',
  },
  {
    id: 'faq-11',
    category: 'Pricing',
    question: 'Are there ongoing maintenance or cloud infrastructure costs?',
    answer: 'Ongoing costs depend on cloud hosting, API model usage (such as OpenAI or Claude API consumption), and elected maintenance support agreements. We explicitly itemize all estimated third-party hosting and API costs during project scoping so there are no unexpected surprises.',
  },

  // IMPLEMENTATION
  {
    id: 'faq-12',
    category: 'Implementation',
    question: 'Will implementation disrupt our current business operations?',
    answer: 'No. We build and test all new software, AI systems, and automation pipelines in isolated staging environments. Production cutovers are scheduled during off-peak hours with zero downtime and strict rollback protocols.',
  },
  {
    id: 'faq-13',
    category: 'Implementation',
    question: 'How long does a typical project take from start to launch?',
    answer: 'Workflow automation and targeted AI integrations typically take 2 to 4 weeks. Full custom web applications and multi-system enterprise architectures range from 6 to 12 weeks, with functional milestones delivered throughout.',
  },

  // SECURITY & SUPPORT
  {
    id: 'faq-14',
    category: 'Security & Support',
    question: 'How is our proprietary company data protected?',
    answer: 'Your security is paramount. All data transfers use TLS 1.3 encryption and databases are encrypted at rest using AES-256. When deploying LLMs or AI agents, we utilize private cloud instances where your business data is NEVER used to train public foundation models.',
  },
  {
    id: 'faq-15',
    category: 'Security & Support',
    question: 'What support options do you offer after project launch?',
    answer: 'We provide post-launch support windows with guaranteed response times, proactive system monitoring, security patch management, and flexible ongoing evolution retainers.',
  },
];

const FAQ = () => {
  const [selectedCategory, setSelectedCategory] = useState<typeof CATEGORIES[number]>('General');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');
  const shouldReduce = useReducedMotion();

  // Filter FAQs based on active category & search query
  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch = 
        searchQuery.trim() === '' ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (typeof item.answer === 'string' && item.answer.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section 
      className="py-16 sm:py-24 relative overflow-hidden antialiased"
      style={{ background: C.black, color: C.white }}
      aria-label="Frequently Asked Questions & Decision Support"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none select-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/3 rounded-full blur-[140px]" style={{ width: 500, height: 500, background: C.la(0.03) }} />
        <div className="absolute bottom-1/3 right-1/4 rounded-full blur-[140px]" style={{ width: 450, height: 450, background: C.ga(0.02) }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* ══════════════════════════════════════════════════════
            HERO HEADER
        ══════════════════════════════════════════════════════ */}
        <div className="max-w-3xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span
              className="inline-flex items-center gap-2 px-3 py-1"
              style={{
                border: `1px solid ${C.la(0.3)}`,
                background: C.la(0.06),
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.lime, boxShadow: `0 0 8px ${C.lime}` }} />
              <span style={{ fontSize: '0.65rem', fontWeight: 700, color: C.lime, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                DECISION SUPPORT & FAQ
              </span>
            </span>
          </motion.div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
            Everything You Need To Know{' '}
            <span style={{ color: C.lime }}>Before We Build Together.</span>
          </h2>

          <p className="text-xs sm:text-sm text-white/60 font-normal leading-relaxed">
            Clear, transparent answers on how Velnix approaches AI, custom software development, discovery scoping, pricing, data security, and ongoing support for business decision-makers.
          </p>
        </div>

        {/* ══════════════════════════════════════════════════════
            SEARCH & CATEGORY FILTER BAR
        ══════════════════════════════════════════════════════ */}
        <div className="mb-10 space-y-6">
          {/* Live Search Bar */}
          <div className="relative max-w-xl">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/40">
              <Search size={16} />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g., pricing, security, timeline, AI)..."
              className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm text-white placeholder-white/40 transition-all outline-none"
              style={{
                background: C.graphite,
                border: `1px solid ${C.wa(0.12)}`,
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = C.lime; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = C.wa(0.12); }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs text-white/40 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Pills */}
          <div 
            className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className="px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-all duration-200"
                  style={{
                    background: isActive ? C.lime : C.graphite,
                    color: isActive ? C.black : C.white,
                    border: `1px solid ${isActive ? C.lime : C.wa(0.08)}`,
                    boxShadow: isActive ? `0 4px 14px ${C.la(0.3)}` : 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.borderColor = C.wa(0.25);
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.borderColor = C.wa(0.08);
                  }}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            ACCORDION FAQ LIST
        ══════════════════════════════════════════════════════ */}
        <div className="space-y-4 mb-16">
          {filteredFaqs.length === 0 ? (
            <div 
              className="p-8 text-center"
              style={{ background: C.graphite, border: `1px dashed ${C.wa(0.1)}` }}
            >
              <HelpCircle size={32} color={C.la(0.5)} className="mx-auto mb-3" />
              <h3 className="text-sm font-bold text-white mb-1">No matching questions found</h3>
              <p className="text-xs text-white/60">Try adjusting your search terms or selecting a different category.</p>
            </div>
          ) : (
            filteredFaqs.map((item) => {
              const isOpen = expandedId === item.id;
              return (
                <div
                  key={item.id}
                  className="transition-all duration-200"
                  style={{
                    background: C.graphite,
                    border: `1px solid ${isOpen ? C.la(0.35) : C.wa(0.08)}`,
                  }}
                >
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 group"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono px-2 py-0.5 tracking-wider uppercase" style={{ background: C.wa(0.04), color: C.lime, border: `1px solid ${C.la(0.2)}` }}>
                        {item.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#B6FF00] transition-colors leading-snug">
                        {item.question}
                      </h3>
                    </div>

                    <div 
                      className="p-1.5 rounded-full shrink-0 transition-all duration-300"
                      style={{
                        background: isOpen ? C.la(0.15) : C.wa(0.04),
                        color: isOpen ? C.lime : C.white,
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    >
                      <ChevronDown size={18} />
                    </div>
                  </button>

                  <AnimatePresence mode="wait">
                    {isOpen && (
                      <motion.div
                        initial={shouldReduce ? false : { opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={shouldReduce ? false : { opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 border-t border-white/5 mt-1">
                          <div className="pt-4 text-xs sm:text-sm text-white/80 leading-relaxed">
                            {item.answer}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>


      </div>
    </section>
  );
};

export default FAQ;
