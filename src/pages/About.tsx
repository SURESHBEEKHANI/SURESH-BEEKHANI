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
import Experience from '@/components/Experience';



const values = [
  {
    icon: HeartHandshake,
    title: 'Client Value',
    desc: 'We exceed expectations, delivering tangible results that drive business success.',
    color: '#B6FF00',
  },
  {
    icon: Users,
    title: 'People Driven',
    desc: 'We prioritize the well-being and growth of our employees, customers, and communities.',
    color: '#B6FF00',
  },
  {
    icon: Shield,
    title: 'Integrity',
    desc: 'Honesty, transparency, and ethical behavior form the foundation of our trust.',
    color: '#B6FF00',
  },
  {
    icon: CheckCircle2,
    title: 'Accountability',
    desc: 'We take responsibility for our actions and outcomes, ensuring high performance.',
    color: '#B6FF00',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Led',
    desc: 'We embrace technological breakthroughs, constantly pushing the boundaries of what’s possible.',
    color: '#B6FF00',
  },
  {
    icon: Globe2,
    title: 'Collaboration',
    desc: 'By combining diverse skills and perspectives, we drive innovation and achieve shared goals.',
    color: '#B6FF00',
  },
];

const whyUs = [
  {
    icon: TrendingUp,
    title: 'Proven Track Record',
    desc: 'We go beyond expectations, delivering solutions that ensure complete client satisfaction every time.',
  },
  {
    icon: Brain,
    title: 'Industry Expertise',
    desc: 'With deep knowledge of industry-specific standards and requirements, we consistently produce outstanding, tailored results.',
  },
  {
    icon: Users,
    title: 'Skilled Experts',
    desc: 'Our team of specialists brings advanced skills, innovative thinking, and relentless dedication to every project.',
  },
  {
    icon: Globe2,
    title: 'Global Reach',
    desc: 'With strong connections across the USA, UK, and UAE, we deliver digital excellence with agility and precision.',
  },
  {
    icon: Clock3,
    title: 'On-Time Delivery',
    desc: 'We commit to delivering the full scope of products and services on schedule — every time.',
  },
  {
    icon: Star,
    title: 'Premium Value',
    desc: 'Flexible engagement models — dedicated teams, fixed-price, or hourly rates — ensure maximum value tailored to your business needs.',
  },
];



// ─── Main Page ─────────────────────────────────────────────────────────────────
const AboutPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden bg-zinc-950">
        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-fuchsia-600/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-12 text-left">


          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight drop-shadow-lg text-white mb-6"
          >
            About Velnix Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-white/70 font-medium leading-relaxed max-w-4xl drop-shadow-md"
          >
            At Velnix Solutions, we empower businesses with intelligent AI systems that drive measurable growth, streamline workflows, and tackle the most complex challenges of today’s rapidly evolving landscape.
          </motion.p>


        </div>


      </section>



      {/* ── 3. OUR STORY ─────────────────────────────────────────────────────── */}
      <section className="pt-12 sm:pt-16 pb-16 sm:pb-24 bg-white relative overflow-hidden">
        {/* Technical Grid Background */}
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >


            <div className="flex items-start gap-4 mb-3">

              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#050729] leading-[1.2]">
                Our Vision & Mission
              </h2>
            </div>

            <div className="space-y-6 text-xs sm:text-sm md:text-base text-gray-600 max-w-4xl font-medium leading-relaxed">
              <div>
                <p className="font-bold text-[#050729] mb-2 text-sm sm:text-base">Mission</p>
                <p>
                  To deliver intelligent AI-powered software that simplifies processes and improves business and healthcare outcomes.
                </p>
              </div>
              <div>
                <p className="font-bold text-[#050729] mb-2 text-sm sm:text-base">Vision</p>
                <p>
                  To become a global AI product company transforming industries through automation, intelligence, and innovation. We turn complex problems into intelligent solutions.
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ── 4. CORE VALUES ───────────────────────────────────────────────────── */}
      <section className="pt-16 sm:pt-24 pb-8 sm:pb-10 bg-white relative overflow-hidden">
        {/* Technical Grid Background */}
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-left mb-10 sm:mb-16 space-y-3 sm:space-y-4"
          >
            <div className="flex items-start gap-4 mb-3">

              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#050729] leading-[1.2]">
                What Shapes Our Brand
              </h2>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-500 max-w-3xl font-medium leading-relaxed">
              Our values guide every decision and interaction, shaping our identity and the impact we deliver:
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
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 text-zinc-950"
                  style={{ background: color }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-sm sm:text-base text-slate-800 mb-2 tracking-tight">{title}</h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">{desc}</p>
                <div
                  className="mt-5 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      <MeetFounder />
      <Experience />

      {/* ── 5. WHY CHOOSE US ─────────────────────────────────────────────────── */}
      <section className="py-8 sm:py-10 bg-white relative overflow-hidden">
        {/* Technical Grid Background */}
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-left mb-10 sm:mb-16 space-y-3 sm:space-y-4"
          >
            <div className="flex items-start gap-4 mb-3">

              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#050729] leading-[1.2]">
                The Velnix Advantage
              </h2>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-500 max-w-3xl font-medium leading-relaxed">
              At Velnix Solutions, we don’t just build AI — we build long-term partnerships. Here’s why leading businesses trust us:
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
                className="group p-7 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#B6FF00] flex items-center justify-center mb-5 transition-colors text-zinc-950">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm sm:text-base text-slate-800 mb-2 tracking-tight">{title}</h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div >
  );
};

export default AboutPage;
