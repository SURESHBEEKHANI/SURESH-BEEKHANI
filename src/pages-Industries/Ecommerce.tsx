import { useState } from "react";
import { ArrowRight, Brain, Zap, BarChart3, Shield, Sparkles, TrendingUp, Star } from "lucide-react";
import { Link } from "react-router-dom";

// ─── Footer Color Palette ─────────────────────────────────────────────
const C = {
  black: '#050505',
  graphite: '#111111',
  white: '#FFFFFF',
  lime: '#B6FF00',
  green: '#7DCC00',
  la: (o: number) => `rgba(182,255,0,${o})`,
  ga: (o: number) => `rgba(125,204,0,${o})`,
  wa: (o: number) => `rgba(255,255,255,${o})`,
};

const capabilities = [
  { icon: Zap, title: "Higher Conversion", description: "Make discovery, search, and checkout easier with relevant recommendations." },
  { icon: TrendingUp, title: "Better Margin", description: "Reduce overstock, stockouts, and costly returns with predictive operations." },
  { icon: Shield, title: "Richer Customer Experience", description: "Answer product questions instantly and personalize the path to purchase." },
  { icon: BarChart3, title: "Clearer Merchandising Insight", description: "See what actually drives demand across SKUs, channels, and campaigns." },
  { icon: Brain, title: "Leaner Operations", description: "Handle catalog, support, and fulfillment exceptions without adding headcount." },
  { icon: Star, title: "Tailored to Your Stack", description: "Works with Shopify, custom storefronts, ERPs, and the tools you already run." },
];

const useCases = [
  { id: 1, title: "Product Recommendations", description: "Show the right product at the right moment using behavior, inventory, and context.", image: "/image/pages_img/Revolutionize Your Business with Custom Software.png", alt: "Recommendations" },
  { id: 2, title: "Intelligent Search", description: "Help shoppers find items with natural language, typo tolerance, and intent.", image: "/image/pages_img/Revolutionize Your Business with Custom Software.png", alt: "Commerce Search" },
  { id: 3, title: "Shopping Assistants", description: "Guide customers through size, fit, and product questions in real time.", image: "/image/pages_img/Revolutionize Your Business with Custom Software.png", alt: "Shopping Assistants" },
  { id: 4, title: "Demand Forecasting", description: "Plan inventory and promotions with more accurate demand signals.", image: "/image/pages_img/Revolutionize Your Business with Custom Software.png", alt: "Demand Forecasting" },
  { id: 5, title: "Returns Reduction", description: "Improve product guidance and QA so fewer orders come back.", image: "/image/pages_img/Revolutionize Your Business with Custom Software.png", alt: "Returns Reduction" },
  { id: 6, title: "Store Operations Automation", description: "Automate catalog updates, support tickets, and order exception handling.", image: "/image/pages_img/Revolutionize Your Business with Custom Software.png", alt: "Store Ops" },
];

const faqData = [
  { id: 1, question: "Do you only work with large marketplaces?", answer: "No. We work with growing D2C brands, retailers, and marketplaces. The first build is scoped to the highest-friction part of the funnel." },
  { id: 2, question: "Can this connect to Shopify or a custom storefront?", answer: "Yes. We integrate with common commerce platforms, PIMs, ERPs, and custom stacks." },
  { id: 3, question: "How soon can recommendations or search improve?", answer: "If catalog and event data are available, a first recommendation or search improvement can be launched as a controlled experiment quickly." },
  { id: 4, question: "Will this replace our current support team?", answer: "It reduces repetitive tickets. Complex orders, exceptions, and VIP cases still go to people." },
  { id: 5, question: "How do you measure success?", answer: "We agree on conversion, AOV, ticket volume, forecast error, or return rate before build — then instrument those outcomes." },
];

const stats = [
  { value: "3.2x", label: "Avg. Conversion Lift" },
  { value: "42%", label: "Returns Reduction" },
  { value: "10M+", label: "Products Indexed" },
  { value: "98%", label: "Uptime SLA" },
];

// ─── Hero Section ─────────────────────────────────────────────────────
const Hero = () => (
  <section className="relative isolate w-full overflow-hidden text-white" style={{ background: C.black }}>
    {/* Ambient background */}
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.98)_0%,rgba(5,5,5,0.86)_42%,rgba(5,5,5,0.28)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(182,255,0,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(182,255,0,0.06)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full" style={{ background: `radial-gradient(circle, ${C.la(0.12)} 0%, transparent 70%)`, filter: 'blur(80px)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full" style={{ background: `radial-gradient(circle, ${C.ga(0.1)} 0%, transparent 70%)`, filter: 'blur(60px)' }} />
    </div>

    <div className="relative z-10 mx-auto grid min-h-[min(78vh,760px)] w-full max-w-7xl items-center gap-12 px-6 py-28 sm:px-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(380px,1.08fr)] lg:gap-20 lg:px-16 lg:py-32">
      {/* Left Content */}
      <div className="max-w-2xl">
        <div className="mb-7 inline-flex items-center gap-2 border border-[#B6FF00]/30 bg-[#B6FF00]/[0.07] px-3 py-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#B6FF00]">
          <Sparkles size={13} aria-hidden="true" />
          E-Commerce Intelligence
        </div>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
          Conversion Systems for{" "}
          <span style={{ color: C.lime }}>Online Commerce</span>
        </h1>
        <p className="mt-7 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
          We help retailers and marketplaces increase conversion, reduce returns, and run operations with less manual work — from recommendations and search to support, inventory, and fulfillment intelligence.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link
            to="/contact"
            className="group inline-flex min-h-12 items-center gap-2 bg-[#B6FF00] px-6 py-3 text-sm font-bold text-[#050505] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B6FF00]"
          >
            Build your advantage
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-white/45">AI systems, built around your work</span>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative aspect-[4/3] min-h-[280px] overflow-hidden border border-white/15 bg-[#111111] shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:min-h-[360px]">
        <img src="/image/pages_img/Revolutionize Your Business with Custom Software.png" alt="E-Commerce technology" className="absolute inset-0 h-full w-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(5,5,5,0.08),rgba(5,5,5,0.72))]" />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-[#B6FF00]/30 bg-[#050505]/75 px-4 py-3 backdrop-blur-sm">
          <span className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#B6FF00]">Velnix / Applied AI</span>
          <span className="h-2 w-2 rounded-full bg-[#B6FF00] shadow-[0_0_14px_#B6FF00]" aria-hidden="true" />
        </div>
      </div>
    </div>
  </section>
);

// ─── Professional Section ─────────────────────────────────────────────
const Professional = () => (
  <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8" style={{ background: C.graphite }}>
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight flex flex-wrap gap-2" style={{ color: C.white }}>
              <span style={{ color: C.white }}>Conversion Systems for</span>
              <span style={{ color: C.lime }}>Online Commerce</span>
            </h2>
          </div>

          <div className="space-y-5 text-white/70 text-lg leading-relaxed">
            <p>We help retailers and marketplaces increase conversion, reduce returns, and run operations with less manual work — from recommendations and search to support, inventory, and fulfillment intelligence.</p>
            <p>Every build is tailored to your catalog, channels, and customer journey rather than a generic storefront add-on.</p>
          </div>

          <div className="pt-4">
            <Link to="/contact">
              <button className="bg-[#B6FF00] text-black px-8 py-4 rounded-none font-bold text-sm uppercase tracking-widest shadow-lg hover:shadow-[#B6FF00]/30 transition-all duration-300 transform hover:-translate-y-1 hover:brightness-110 active:scale-95 flex items-center gap-3">
                Contact Expert
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative max-w-xl mx-auto lg:mx-0">
          <div className="relative rounded-none overflow-hidden shadow-2xl">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#B6FF00]/20 to-transparent rounded-none transform rotate-12 z-0 opacity-80" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#7DCC00]/20 to-transparent rounded-none transform -rotate-12 z-0 opacity-80" />

            <div className="relative z-10 bg-[#111111] p-2 rounded-none">
              <div className="relative rounded-none overflow-hidden h-64 sm:h-80 lg:h-96">
                <img
                  src="/image/pages_img/Revolutionize Your Business with Custom Software.png"
                  alt="E-Commerce professional using AI technology"
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#B6FF00]/10 to-transparent opacity-60" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─── Capabilities Section ─────────────────────────────────────────────
const Capabilities = () => (
  <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: C.black }}>
    {/* Background layers */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" aria-hidden="true" />
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#B6FF00]/20 to-transparent" aria-hidden="true" />
    <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#B6FF00]/5 rounded-full blur-[120px] animate-pulse" aria-hidden="true" />
    <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#7DCC00]/5 rounded-full blur-[140px]" aria-hidden="true" />

    <div className="max-w-7xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-left space-y-4 mb-8 sm:mb-10 animate-fade-in lg:pl-[10%]">
        <div className="flex items-start gap-4 mb-2">
          <div className="w-2 sm:w-3 h-6 rounded-none flex-shrink-0 mt-1" style={{ background: C.lime, transform: 'skewX(-15deg)' }}></div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
            Capabilities and Benefits of <span style={{ color: C.lime }}>AI in E-Commerce</span>
          </h2>
        </div>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {capabilities.map((cap, index) => (
          <div
            key={index}
            className="modern-card p-6 sm:p-8 flex flex-col gap-3 sm:gap-4 items-start min-h-[200px] sm:min-h-[220px] hover:scale-105 transition-all duration-300 rounded-none border-none"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-none flex items-center justify-center mb-2 text-white shadow-lg">
              <cap.icon className="w-7 h-7 text-white" />
            </div>

            <h3 className="font-bold text-sm sm:text-base text-white mb-1.5 text-left w-full">
              {cap.title}
            </h3>
            <p className="text-xs sm:text-sm font-medium text-gray-300 text-left leading-relaxed">
              {cap.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Stats Section ────────────────────────────────────────────────────
const Stats = () => (
  <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: C.graphite }}>
    <div className="absolute inset-0 opacity-30" aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.98)_0%,rgba(5,5,5,0.86)_42%,rgba(5,5,5,0.28)_100%)]" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight" style={{ color: C.lime }}>
              {stat.value}
            </div>
            <div className="mt-2 text-sm sm:text-base text-white/60 font-medium uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Use Cases Section ────────────────────────────────────────────────
const UseCases = () => (
  <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8" style={{ background: C.black }}>
    <div className="max-w-7xl mx-auto">
      <div className="text-center space-y-4 mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
          E-Commerce AI <span style={{ color: C.lime }}>Solutions</span>
        </h2>
        <p className="text-base text-white/60 max-w-2xl mx-auto">
          Technology that turns traffic into revenue
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {useCases.map((useCase) => (
          <div key={useCase.id} className="group relative overflow-hidden rounded-none border border-white/10 bg-[#111111] transition-all duration-500 hover:border-[#B6FF00]/50 hover:shadow-[0_0_30px_rgba(182,255,0,0.1)]">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={useCase.image}
                alt={useCase.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-base text-white mb-2">{useCase.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{useCase.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── FAQ Section ──────────────────────────────────────────────────────
const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8" style={{ background: C.graphite }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
            Frequently Asked <span style={{ color: C.lime }}>Questions</span>
          </h2>
          <p className="text-base text-white/60">
            Everything you need to know about AI for <span style={{ color: C.lime }}>E-Commerce</span>
          </p>
        </div>

        <div className="space-y-3">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="border border-white/10 bg-[#050505] overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="flex w-full items-center justify-between py-4 px-6 text-left"
                style={{ background: 'none', border: 'none', cursor: 'pointer', width: '100%' }}
              >
                <span className="text-sm sm:text-base font-medium text-white pr-4">{item.question}</span>
                <svg
                  className={`w-5 h-5 text-[#B6FF00] shrink-0 transition-transform duration-300 ${openId === item.id ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openId === item.id ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="px-6 pb-4 text-sm text-white/60 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── CTA Section ──────────────────────────────────────────────────────
const CTA = () => (
  <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: C.black }}>
    <div className="absolute inset-0" aria-hidden="true">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#B6FF00]/25 to-transparent" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full" style={{ background: `radial-gradient(circle, ${C.la(0.1)} 0%, transparent 70%)`, filter: 'blur(80px)' }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full" style={{ background: `radial-gradient(circle, ${C.ga(0.1)} 0%, transparent 70%)`, filter: 'blur(60px)' }} />
    </div>

    <div className="relative z-10 max-w-4xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 border border-[#B6FF00]/30 bg-[#B6FF00]/[0.07] px-3 py-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#B6FF00] mb-6">
        <span className="h-2 w-2 rounded-full bg-[#B6FF00] shadow-[0_0_8px_#B6FF00]" />
        Start the Conversation
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
        Ready to automate what{' '}
        <span style={{ color: C.lime }}>slows your</span>
        {' '}business down?
      </h2>

      <p className="text-base text-white/60 max-w-2xl mx-auto mb-8">
        Tell us where your operation loses time. We'll identify what to automate and build the system to make it work.
      </p>

      <Link
        to="/contact"
        className="group inline-flex items-center gap-2.5 bg-[#B6FF00] text-[#050505] font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-none shadow-lg hover:shadow-[#B6FF00]/30 transition-all duration-300 hover:-translate-y-1 hover:brightness-110"
      >
        Book a Strategy Call
        <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
    </div>
  </section>
);

// ─── Main Ecommerce Page ──────────────────────────────────────────────
const Ecommerce = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col" style={{ background: C.black }}>
      <Navbar />
      <Hero />
      <Professional />
      <Stats />
      <Capabilities />
      <UseCases />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

// ─── Navbar Placeholder ───────────────────────────────────────────────
const Navbar = () => (
  <nav className="fixed top-0 w-full z-50" style={{ background: C.black }}>
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2">
          <img src="/image/logo/logo1.avif" alt="Velnix" className="h-8 w-auto" loading="lazy" />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['Services', 'Industries', 'Portfolio', 'Blog', 'Contact'].map((item) => (
            <a key={item} href={`/${item.toLowerCase()}`} className="text-sm text-white/60 hover:text-[#B6FF00] transition-colors">
              {item}
            </a>
          ))}
        </div>
        <a href="/contact" className="bg-[#B6FF00] text-[#050505] px-5 py-2 text-sm font-bold hover:bg-[#7DCC00] transition-colors">
          Get Started
        </a>
      </div>
    </div>
  </nav>
);

// ─── Footer Placeholder ───────────────────────────────────────────────
const Footer = () => (
  <footer className="border-t border-white/10 py-12" style={{ background: C.graphite }}>
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <img src="/image/logo/logo1.avif" alt="Velnix" className="h-8 w-auto mb-4" loading="lazy" />
          <p className="text-sm text-white/60">AI systems, software, and automation built around real business operations.</p>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#B6FF00] mb-4">Services</h4>
          <ul className="space-y-2">
            {['AI Development', 'AI Automation', 'Custom Software', 'AI Agents', 'Chatbot', 'Machine Learning'].map((item) => (
              <li key={item}><a href="#" className="text-sm text-white/60 hover:text-[#B6FF00] transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#B6FF00] mb-4">Company</h4>
          <ul className="space-y-2">
            {['About', 'Careers', 'Portfolio', 'Blog', 'Contact'].map((item) => (
              <li key={item}><a href="#" className="text-sm text-white/60 hover:text-[#B6FF00] transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#B6FF00] mb-4">Contact</h4>
          <ul className="space-y-2">
            <li className="text-sm text-white/60">M.A. Jinnah Road, Karachi</li>
            <li className="text-sm text-white/60">info@velnixsolutions.com</li>
            <li className="text-sm text-white/60">+92 335 131 2852</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/40">© {new Date().getFullYear()} Velnix Solutions — All rights reserved.</p>
        <div className="flex items-center gap-6">
          {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
            <a key={item} href="#" className="text-xs text-white/40 hover:text-[#B6FF00] transition-colors">{item}</a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Ecommerce;
