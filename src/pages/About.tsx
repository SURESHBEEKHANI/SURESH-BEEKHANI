import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Target, Users, Zap, Shield, Lightbulb, Award,
  CheckCircle2, Globe2, Clock3, Star, TrendingUp, HeartHandshake,
  ArrowRight, Brain, Cpu, BarChart3
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MeetFounder from '@/components/MeetFounder';



const values = [
  {
    icon: HeartHandshake,
    title: 'Client Value',
    desc: 'We strive to exceed our clients\' expectations and deliver measurable results that positively impact their business.',
    color: '#ff0ea3',
  },
  {
    icon: Users,
    title: 'People Driven',
    desc: 'As a people-driven company, we prioritize the needs and well-being of our employees, customers, and communities.',
    color: '#6366f1',
  },
  {
    icon: Shield,
    title: 'Integrity',
    desc: 'We place a high value on honesty, transparency, and ethical behavior, maintaining a high level of trust with all stakeholders.',
    color: '#22d3ee',
  },
  {
    icon: CheckCircle2,
    title: 'Accountability',
    desc: 'We value taking responsibility for our actions and outcomes, holding ourselves accountable for our performance.',
    color: '#f59e0b',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Led',
    desc: 'Always at the cutting edge of technological breakthroughs, constantly pushing the boundaries of what\'s possible.',
    color: '#10b981',
  },
  {
    icon: Globe2,
    title: 'Collaboration',
    desc: 'Collaboration fuels innovation among us by bringing together diverse backgrounds and skill sets toward a common goal.',
    color: '#8b5cf6',
  },
];

const whyUs = [
  {
    icon: TrendingUp,
    title: 'Proven Track Record',
    desc: 'Our team is committed to going above and beyond your expectations, ensuring complete satisfaction with every delivery.',
  },
  {
    icon: Brain,
    title: 'Industry Expertise',
    desc: 'We efficiently produce outstanding results with a thorough understanding of industry-specific standards and requirements.',
  },
  {
    icon: Users,
    title: 'Skilled Staff',
    desc: 'Our group of specialized experts are equipped with profound skill, innovative ideas, and determination to deliver success.',
  },
  {
    icon: Globe2,
    title: 'Global Expansion',
    desc: 'We have global connections across the USA, UK, and UAE, enabling us to provide digital excellence with agility and promptness.',
  },
  {
    icon: Clock3,
    title: 'On-Time Delivery',
    desc: 'Our teams are committed to delivering the exact range of products and services we pledged, within the specified timeframe.',
  },
  {
    icon: Star,
    title: 'Premium Value',
    desc: 'Our flexible hiring models — dedicated teams, fixed-price, and hourly rates — deliver premium value tailored to your needs.',
  },
];



// ─── Main Page ─────────────────────────────────────────────────────────────────
const AboutPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#04021a]">
        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#ff0ea3]/20 rounded-full blur-[140px]" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#6366f1]/20 rounded-full blur-[120px]" />
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32 text-left">


          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6"
          >
            About{' '}
            <span className="bg-gradient-to-r from-[#ff0ea3] via-[#ff6ec7] to-[#ff0ea3] bg-clip-text text-transparent bg-[length:200%] animate-[gradient-x_3s_linear_infinite]">
              Velnix Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/50 text-base sm:text-lg max-w-2xl leading-relaxed font-light"
          >
            Empowering businesses with intelligent AI systems that drive measurable growth, optimize workflows, and solve the most challenging problems of the modern era.
          </motion.p>


        </div>


      </section>



      {/* ── 3. OUR STORY ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[#ff0ea3]/20 to-[#6366f1]/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/image/certificate-image/Business Growth with AI.jpg"
                  alt="Velnix Solutions Story"
                  className="w-full h-full object-cover min-h-[480px] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#04021a]/60 via-transparent to-transparent" />
                {/* Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-[#ff0ea3] flex items-center justify-center shadow-lg shadow-[#ff0ea3]/40 flex-shrink-0">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold leading-none">Velnix Certified</p>
                      <p className="text-white/60 text-xs mt-1 uppercase tracking-widest">Standards of Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ff0ea3]/10 text-[#ff0ea3] text-xs font-bold tracking-widest uppercase">
                <Target className="w-3.5 h-3.5" />
                Discover Our Story
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-[#050729] leading-tight">
                Pioneering the Future through{' '}
                <span className="text-[#ff0ea3]">AI Intelligence</span>
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <span className="font-bold text-[#050729]">Velnix Solutions</span> is an emerging AI service provider that uses cutting-edge technology to empower organizations with smart, scalable solutions. Our goal is to help businesses fully utilize AI to improve their internal processes and stay competitive in a market that is continually evolving.
                </p>
                <p>
                  Our story began with AI enthusiasts developing innovative answers to real-world challenges. We realized that success in the digital age meant embracing AI as a strategic imperative. Our core services include machine learning, NLP, computer vision, predictive analytics, generative AI, and intelligent chatbots.
                </p>
                <p>
                  At <span className="font-bold text-[#050729]">Velnix Solutions</span>, we assist businesses of all sizes — from startups to enterprises — across industries ranging from healthcare to finance and beyond. We are driven by a passion for innovation, a commitment to excellence, and a desire to make a lasting positive impact.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { icon: Shield, label: 'Ethics First', color: 'blue' },
                  { icon: Lightbulb, label: 'Innovation Led', color: 'amber' },
                  { icon: Globe2, label: 'Global Reach', color: 'emerald' },
                  { icon: TrendingUp, label: 'Results Driven', color: 'pink' },
                ].map(({ icon: Icon, label, color }) => (
                  <div key={label} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100 shadow-sm">
                    <div className={`w-9 h-9 rounded-lg bg-${color}-50 flex items-center justify-center text-${color}-500 flex-shrink-0`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold text-[#050729]">{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4. CORE VALUES ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ff0ea3]/10 text-[#ff0ea3] text-xs font-bold tracking-widest uppercase mb-4">
              <Star className="w-3.5 h-3.5" />
              Our Core Values
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#050729]">
              What Drives <span className="text-[#ff0ea3]">Us Forward</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              These principles aren't just words — they shape every decision we make and every solution we deliver.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, desc, color }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${color}18` }}
                >
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <h3 className="text-lg font-bold text-[#050729] mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                <div
                  className="mt-5 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <MeetFounder />

      {/* ── 5. WHY CHOOSE US ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#04021a] relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff0ea3]/10 rounded-full blur-[160px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[#ff0ea3] text-xs font-bold tracking-widest uppercase mb-4">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              The Velnix <span className="text-[#ff0ea3]">Advantage</span>
            </h2>
            <p className="text-white/40 mt-4 max-w-xl mx-auto">
              We don't just build AI — we build partnerships. Here's why leading businesses choose Velnix Solutions.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group p-7 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#ff0ea3]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#ff0ea3]/10 flex items-center justify-center mb-5 group-hover:bg-[#ff0ea3]/20 transition-colors">
                  <Icon className="w-5 h-5 text-[#ff0ea3]" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl bg-gradient-to-br from-[#04021a] to-[#0d063a] relative overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#ff0ea3]/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#6366f1]/15 rounded-full blur-3xl" />
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[#ff0ea3] text-xs font-bold tracking-widest uppercase mb-6">
                <Zap className="w-3.5 h-3.5" />
                Ready to Transform?
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                Let's Build Something{' '}
                <span className="text-[#ff0ea3]">Extraordinary</span> Together
              </h2>
              <p className="text-white/50 text-base mb-8 max-w-xl mx-auto">
                Partner with Velnix Solutions and transform your ideas into high-performance AI systems that drive efficiency, growth, and competitive advantage.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#ff0ea3] to-[#d10b85] text-white font-bold text-sm shadow-[0_0_40px_rgba(255,14,163,0.5)] hover:shadow-[0_0_60px_rgba(255,14,163,0.7)] transition-all duration-300 hover:scale-105"
                >
                  Get a Free Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/#services"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/15 text-white/80 font-semibold text-sm hover:bg-white/10 transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
