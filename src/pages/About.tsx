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
    color: '#ff0ea3',
  },
  {
    icon: Users,
    title: 'People Driven',
    desc: 'We prioritize the well-being and growth of our employees, customers, and communities.',
    color: '#6366f1',
  },
  {
    icon: Shield,
    title: 'Integrity',
    desc: 'Honesty, transparency, and ethical behavior form the foundation of our trust.',
    color: '#22d3ee',
  },
  {
    icon: CheckCircle2,
    title: 'Accountability',
    desc: 'We take responsibility for our actions and outcomes, ensuring high performance.',
    color: '#f59e0b',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Led',
    desc: 'We embrace technological breakthroughs, constantly pushing the boundaries of what’s possible.',
    color: '#10b981',
  },
  {
    icon: Globe2,
    title: 'Collaboration',
    desc: 'By combining diverse skills and perspectives, we drive innovation and achieve shared goals.',
    color: '#8b5cf6',
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
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#04021a]">
        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#ff0ea3]/20 rounded-full blur-[140px]" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#6366f1]/20 rounded-full blur-[120px]" />
          {/* Grid overlay */}
          <div
            className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.06]"
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-12 text-left">


          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight drop-shadow-lg text-white mb-6"
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
            className="text-sm sm:text-base md:text-lg text-white/70 font-medium leading-relaxed max-w-4xl drop-shadow-md"
          >
            At Velnix Solutions, we empower businesses with intelligent AI systems that drive measurable growth, streamline workflows, and tackle the most complex challenges of today’s rapidly evolving landscape.
          </motion.p>


        </div>


      </section>



      {/* ── 3. OUR STORY ─────────────────────────────────────────────────────── */}
      <section className="pt-12 sm:pt-16 pb-16 sm:pb-24 bg-white relative overflow-hidden">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-40 z-0" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >


            <div className="flex items-start gap-4 mb-3">
              <div
                className="w-2.5 sm:w-4 h-3.5 sm:h-5 md:h-6 flex-shrink-0 mt-1 rounded-full"
                style={{
                  background: '#ff0ea3',
                  transform: 'skewX(-15deg)'
                }}
              ></div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#050729] leading-[1.2]">
                Our Vision & Mission
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm md:text-base text-gray-600 max-w-4xl font-medium leading-relaxed">
              <p>
                As an emerging AI service provider, <span className="font-bold text-[#050729]">Velnix Solutions</span> leverages cutting-edge technology to deliver smart, scalable solutions that help organizations fully harness AI. Our mission is to enhance internal processes, boost competitiveness, and future-proof businesses in a world where technology evolves at lightning speed.
              </p>
              <p>
                Our journey began with a team of AI enthusiasts passionate about solving real-world problems. We understood that success in the digital age requires treating AI as a strategic priority. Our expertise spans machine learning, natural language processing (NLP), computer vision, predictive analytics, generative AI, and intelligent chatbots.
              </p>
              <p>
                From startups to enterprises, across industries including healthcare, finance, and beyond, we help organizations transform ideas into measurable impact. Innovation, excellence, and meaningful change drive everything we do.
              </p>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ── 4. CORE VALUES ───────────────────────────────────────────────────── */}
      <section className="pt-16 sm:pt-24 pb-8 sm:pb-10 bg-white relative overflow-hidden">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-40 z-0" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-left mb-10 sm:mb-16 space-y-3 sm:space-y-4"
          >
            <div className="flex items-start gap-4 mb-3">
              <div
                className="w-2.5 sm:w-4 h-3.5 sm:h-5 md:h-6 flex-shrink-0 mt-1 rounded-full"
                style={{
                  background: '#ff0ea3',
                  transform: 'skewX(-15deg)'
                }}
              ></div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#050729] leading-[1.2]">
                What Shapes Our  <span className="text-[#ff0ea3]">Brand</span>
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
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${color}18` }}
                >
                  <Icon className="w-6 h-6" style={{ color }} />
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
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-40 z-0" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-left mb-10 sm:mb-16 space-y-3 sm:space-y-4"
          >
            <div className="flex items-start gap-4 mb-3">
              <div
                className="w-2.5 sm:w-4 h-3.5 sm:h-5 md:h-6 flex-shrink-0 mt-1 rounded-full"
                style={{
                  background: '#ff0ea3',
                  transform: 'skewX(-15deg)'
                }}
              ></div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#050729] leading-[1.2]">
                The Velnix <span className="text-[#ff0ea3]">Advantage</span>
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
                <div className="w-12 h-12 rounded-xl bg-[#ff0ea3]/10 flex items-center justify-center mb-5 group-hover:bg-[#ff0ea3] group-hover:text-white transition-colors text-[#ff0ea3]">
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
