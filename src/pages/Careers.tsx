import { motion } from 'framer-motion';
import {
  ArrowRight,
  Brain,
  Check,
  Code2,
  Database,
  Layers3,
  Lightbulb,
  Network,
  Scale,
  Sparkles,
  Target,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const C = {
  black: '#050505',
  graphite: '#111111',
  white: '#FFFFFF',
  lime: '#B6FF00',
  green: '#7DCC00',
  la: (o: number) => `rgba(182,255,0,${o})`,
  wa: (o: number) => `rgba(255,255,255,${o})`,
  ga: (o: number) => `rgba(125,204,0,${o})`,
};

const ease = [0.22, 1, 0.36, 1] as const;

const principles = [
  { icon: Target, title: 'Build with purpose', text: 'Connect technical decisions to a real business outcome, not technology for its own sake.' },
  { icon: Scale, title: 'Own the outcome', text: 'Take responsibility for the quality, clarity, and momentum of the work in front of you.' },
  { icon: Lightbulb, title: 'Stay curious', text: 'Question assumptions, keep learning, and look for the simpler way through complexity.' },
  { icon: Network, title: 'Think together', text: 'The strongest solutions come from shared context across engineering, design, and business.' },
];

const workAreas = [
  { icon: Brain, title: 'AI systems', text: 'Build intelligent capabilities that help teams make better decisions and reduce repetitive work.' },
  { icon: Code2, title: 'Digital products', text: 'Turn complex workflows into focused web and mobile experiences people can rely on.' },
  { icon: Layers3, title: 'Automation', text: 'Connect tools, teams, and processes so businesses can spend more time on meaningful work.' },
  { icon: Database, title: 'Data and integrations', text: 'Create the dependable foundations that let information move clearly through an organization.' },
];

const process = ['Understand the context', 'Think through the system', 'Build the smallest useful step', 'Test with real feedback', 'Improve what matters'];

const roles = [
  { title: 'AI and ML Engineering', group: 'Engineering', text: 'Models, intelligent workflows, and production systems.' },
  { title: 'Full-stack Engineering', group: 'Engineering', text: 'Reliable products across interfaces, APIs, and data.' },
  { title: 'Product Design', group: 'Design', text: 'Clear, human experiences for complex business problems.' },
  { title: 'Product and Delivery', group: 'Product', text: 'Strong context, thoughtful decisions, and steady execution.' },
];

const Reveal = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ delay, duration: 0.55, ease }}
    className={className}
  >
    {children}
  </motion.div>
);

const Careers = () => (
  <div className="min-h-screen antialiased" style={{ background: C.black, color: C.white }}>
    <style>{`
      @keyframes careers-signal { 0%, 100% { opacity: .25; transform: scale(.9); } 50% { opacity: 1; transform: scale(1); } }
      @keyframes careers-scan { from { transform: translateX(-110%); } to { transform: translateX(110%); } }
    `}</style>
    <Navbar />

    <main className="overflow-hidden pt-24 sm:pt-32">
      <section className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-24 sm:px-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-16 lg:pb-32">
        <div className="pointer-events-none absolute -right-48 top-0 h-[480px] w-[480px] rounded-full" style={{ background: C.la(0.06), filter: 'blur(120px)' }} />
        <div className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }} className="mb-6 flex items-center gap-3">
            <span style={{ width: 28, height: 1, background: C.lime }} />
            <span style={{ color: C.lime, fontSize: '.68rem', fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase' }}>Careers at Velnix</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08, duration: .65, ease }} className="max-w-3xl" style={{ fontSize: 'clamp(2.8rem, 6vw, 5.6rem)', fontWeight: 800, lineHeight: .98, letterSpacing: '-.045em' }}>
            Build what <span style={{ color: C.lime }}>matters.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2, duration: .6, ease }} className="mt-7 max-w-xl" style={{ color: C.wa(.7), fontSize: 'clamp(1rem, 1.5vw, 1.18rem)', lineHeight: 1.75 }}>
            Build intelligent systems, scalable products, and practical solutions for businesses solving meaningful problems. Bring your curiosity, judgment, and ambition to the work.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .32, duration: .55, ease }} className="mt-9 flex flex-wrap gap-4">
            <a href="#open-positions" className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-bold transition-transform duration-200 hover:-translate-y-1" style={{ background: C.lime, color: C.black, textDecoration: 'none' }}>
              Explore opportunities <ArrowRight size={17} />
            </a>
            <a href="#how-we-work" className="inline-flex items-center gap-2 rounded-full border px-6 py-3.5 font-bold transition-colors duration-200 hover:border-[#B6FF00]" style={{ borderColor: C.wa(.22), color: C.white, textDecoration: 'none' }}>
              How we work
            </a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .18, duration: .8, ease }} className="relative min-h-[360px] overflow-hidden border sm:min-h-[460px]" style={{ borderColor: C.wa(.15), background: `linear-gradient(145deg, ${C.graphite}, ${C.black})` }} aria-label="Intelligent Systems Architecture diagram showing people, ideas, code, and impact">
          <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(${C.wa(.05)} 1px, transparent 1px), linear-gradient(90deg, ${C.wa(.05)} 1px, transparent 1px)`, backgroundSize: '42px 42px', opacity: .45 }} />
          <div className="absolute inset-x-0 top-0 flex items-center justify-between border-b px-5 py-4" style={{ borderColor: C.wa(.1), color: C.wa(.48), fontSize: '.58rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase' }}>
            <span>Velnix / Systems</span>
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full" style={{ background: C.lime, boxShadow: `0 0 10px ${C.lime}` }} />Active architecture</span>
          </div>
          <div className="absolute left-[16%] top-[30%] h-px w-[68%]" style={{ background: `linear-gradient(90deg, transparent, ${C.lime}, transparent)`, animation: 'careers-scan 4s ease-in-out infinite' }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative mt-5 flex h-56 w-56 items-center justify-center rounded-full border" style={{ borderColor: C.la(.5), boxShadow: `0 0 0 24px ${C.la(.04)}, 0 0 80px ${C.la(.12)}` }}>
              <div className="pointer-events-none absolute inset-[-14px] rounded-full border" style={{ borderColor: C.la(.16), borderStyle: 'dashed' }} />
              <div className="text-center"><Sparkles size={26} color={C.lime} className="mx-auto mb-3" /><span className="block text-xs font-bold uppercase tracking-[.22em]" style={{ color: C.white }}>Intelligent<br />systems</span><span className="mt-3 block text-[.55rem] uppercase tracking-[.18em]" style={{ color: C.wa(.4) }}>People + technology</span></div>
              {['People', 'Ideas', 'Code', 'Impact'].map((label, index) => (
                <div key={label} className="absolute flex items-center gap-2 text-[.65rem] font-bold uppercase tracking-[.16em]" style={{ color: C.wa(.7), top: index === 0 ? '-2rem' : index === 2 ? 'auto' : '50%', bottom: index === 2 ? '-2rem' : 'auto', left: index === 1 ? '-4.5rem' : index === 3 ? 'auto' : '50%', right: index === 3 ? '-4.5rem' : 'auto', transform: index === 0 || index === 2 ? 'translateX(-50%)' : 'translateY(-50%)', whiteSpace: 'nowrap' }}>
                  <span className="h-2 w-2 rounded-full" style={{ background: C.lime, animation: `careers-signal 2.2s ${index * .25}s ease-in-out infinite` }} />{label}
                </div>
              ))}
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t px-5 py-4" style={{ borderColor: C.wa(.1), color: C.wa(.42), fontSize: '.58rem', fontWeight: 700, letterSpacing: '.15em', textTransform: 'uppercase' }}>
            <span>Build / Learn / Lead</span>
            <span style={{ color: C.lime }}>01 — 04</span>
          </div>
        </motion.div>
      </section>

      <section className="border-y px-6 py-20 sm:px-10 lg:px-16 lg:py-28" style={{ borderColor: C.wa(.08), background: C.graphite }}>
        <div className="mx-auto max-w-7xl">
          <Reveal><p className="mb-4 text-xs font-bold uppercase tracking-[.2em]" style={{ color: C.lime }}>Why Velnix</p><h2 className="max-w-2xl" style={{ fontSize: 'clamp(2rem, 4vw, 3.7rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-.035em' }}>Serious technology. <span style={{ color: C.lime }}>Human judgment.</span></h2></Reveal>
          <div className="mt-14 grid gap-px sm:grid-cols-2 lg:grid-cols-4" style={{ background: C.wa(.1) }}>
            {principles.map((item, index) => { const Icon = item.icon; return <Reveal key={item.title} delay={index * .06} className="h-full"><div className="h-full p-7" style={{ background: C.graphite }}><Icon size={23} color={C.lime} strokeWidth={1.6} /><h3 className="mt-8 text-lg font-bold">{item.title}</h3><p className="mt-3 text-sm leading-7" style={{ color: C.wa(.58) }}>{item.text}</p></div></Reveal>; })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <Reveal><div className="flex flex-wrap items-end justify-between gap-6"><div><p className="mb-4 text-xs font-bold uppercase tracking-[.2em]" style={{ color: C.lime }}>What you will work on</p><h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.7rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-.035em' }}>From complexity<br /><span style={{ color: C.lime }}>to capability.</span></h2></div><p className="max-w-sm text-sm leading-7" style={{ color: C.wa(.58) }}>Our work sits where AI, software engineering, automation, data, and real business context meet.</p></div></Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-2">{workAreas.map((item, index) => { const Icon = item.icon; return <Reveal key={item.title} delay={index * .06}><div className="group flex gap-5 border p-7 transition-colors duration-300 hover:border-[#B6FF00]" style={{ borderColor: C.wa(.12), background: C.graphite }}><div className="flex h-11 w-11 shrink-0 items-center justify-center" style={{ background: C.la(.09), color: C.lime }}><Icon size={21} strokeWidth={1.6} /></div><div><h3 className="text-lg font-bold">{item.title}</h3><p className="mt-2 text-sm leading-7" style={{ color: C.wa(.58) }}>{item.text}</p></div></div></Reveal>; })}</div>
      </section>

      <section id="how-we-work" className="border-y px-6 py-20 sm:px-10 lg:px-16 lg:py-28" style={{ borderColor: C.wa(.08), background: C.graphite }}>
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.75fr_1.25fr] lg:items-start"><Reveal><p className="mb-4 text-xs font-bold uppercase tracking-[.2em]" style={{ color: C.lime }}>How we work</p><h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.7rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-.035em' }}>Context before<br /><span style={{ color: C.lime }}>complexity.</span></h2><p className="mt-6 max-w-md text-sm leading-7" style={{ color: C.wa(.58) }}>Good work starts with understanding the problem. We move deliberately, test our thinking early, and keep improving what reaches the customer.</p></Reveal><div className="border-l pl-6 sm:pl-10" style={{ borderColor: C.la(.35) }}>{process.map((step, index) => <Reveal key={step} delay={index * .07}><div className="relative flex gap-5 border-b py-5" style={{ borderColor: C.wa(.1) }}><span className="-ml-[2.05rem] flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold" style={{ background: index === process.length - 1 ? C.lime : C.graphite, border: `1px solid ${C.la(.55)}`, color: index === process.length - 1 ? C.black : C.lime }}>{index + 1}</span><span className="font-semibold">{step}</span></div></Reveal>)}</div></div>
      </section>

      <section id="open-positions" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28"><Reveal><div className="flex flex-wrap items-end justify-between gap-6"><div><p className="mb-4 text-xs font-bold uppercase tracking-[.2em]" style={{ color: C.lime }}>Open positions</p><h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.7rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-.035em' }}>Find where you can<br /><span style={{ color: C.lime }}>make an impact.</span></h2></div><p className="max-w-sm text-sm leading-7" style={{ color: C.wa(.58) }}>We are interested in thoughtful people across engineering, design, data, and product. Tell us where you can contribute.</p></div></Reveal><div className="mt-12 border-t" style={{ borderColor: C.wa(.15) }}>{roles.map((role, index) => <Reveal key={role.title} delay={index * .05}><a href="mailto:info@velnixsolutions.com?subject=Careers%20at%20Velnix" className="group grid gap-3 border-b py-6 transition-colors duration-200 hover:bg-[#111111] sm:grid-cols-[1fr_auto_auto] sm:items-center sm:gap-8 sm:px-5" style={{ borderColor: C.wa(.12), color: C.white, textDecoration: 'none' }}><span><strong className="block text-base sm:text-lg">{role.title}</strong><span className="mt-1 block text-sm" style={{ color: C.wa(.5) }}>{role.text}</span></span><span className="text-xs font-bold uppercase tracking-[.14em]" style={{ color: C.lime }}>{role.group}</span><ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" color={C.lime} /></a></Reveal>)}</div></section>

      <section className="border-y px-6 py-20 sm:px-10 lg:px-16 lg:py-28" style={{ borderColor: C.wa(.08), background: C.graphite }}><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2"><Reveal><p className="mb-4 text-xs font-bold uppercase tracking-[.2em]" style={{ color: C.lime }}>Growth at Velnix</p><h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.7rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-.035em' }}>Learn. Apply.<br /><span style={{ color: C.lime }}>Take ownership.</span></h2></Reveal><Reveal delay={.1}><div className="space-y-5 text-sm leading-7" style={{ color: C.wa(.62) }}><p>Growth here comes through challenging projects, close collaboration, technical exploration, and increasing ownership of meaningful outcomes.</p><p>There is room to deepen your craft, cross disciplines, and help shape how the work gets done.</p><div className="flex flex-wrap gap-2 pt-3">{['Challenging projects', 'Shared context', 'Technical curiosity', 'Real ownership'].map(item => <span key={item} className="inline-flex items-center gap-2 border px-3 py-2 text-xs font-semibold" style={{ borderColor: C.wa(.14), color: C.white }}><Check size={13} color={C.lime} />{item}</span>)}</div></div></Reveal></div></section>

      <section className="relative mx-auto max-w-7xl px-6 py-24 text-center sm:px-10 lg:px-16 lg:py-32"><div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: C.la(.08), filter: 'blur(100px)' }} /><Reveal><p className="relative mb-5 text-xs font-bold uppercase tracking-[.2em]" style={{ color: C.lime }}>Make your next move</p><h2 className="relative mx-auto max-w-3xl" style={{ fontSize: 'clamp(2.3rem, 5vw, 4.8rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-.045em' }}>Bring your best thinking to <span style={{ color: C.lime }}>work that matters.</span></h2><a href="mailto:info@velnixsolutions.com?subject=Careers%20at%20Velnix" className="relative mt-9 inline-flex items-center gap-2 rounded-full px-7 py-4 font-bold" style={{ background: C.lime, color: C.black, textDecoration: 'none' }}>Start a conversation <ArrowRight size={17} /></a></Reveal></section>
    </main>
    <Footer />
  </div>
);

export default Careers;