import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Zap, Shield, Award, Lightbulb } from 'lucide-react';

const stats = [
  { label: 'Years of Experience', value: '5+', icon: <Award className="w-5 h-5 text-[#ff0ea3]" /> },
  { label: 'Successful Projects', value: '150+', icon: <Zap className="w-5 h-5 text-[#ff0ea3]" /> },
  { label: 'Global Clients', value: '80+', icon: <Users className="w-5 h-5 text-[#ff0ea3]" /> },
];

const ResourcesSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white scroll-mt-20">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-[#ff0ea3]/5 to-transparent blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-500/5 to-transparent blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content Area */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff0ea3]/10 text-[#ff0ea3] text-xs font-bold tracking-widest uppercase mb-6">
              <Target className="w-3.5 h-3.5" />
              About
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-[#050729] mb-8 leading-[1.1]">
              Pioneering the Future through <span className="text-[#ff0ea3]">AI Intelligence</span>
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-light">
              <p>
                At <span className="font-bold text-[#050729]">Velnix Solutions</span>, we are more than just a technology provider. We are your strategic partner in navigating the rapidly evolving landscape of Artificial Intelligence.
              </p>
              <p>
                Our mission is to empower businesses with intelligent systems that drive measurable growth, optimize complex workflows, and solve the most challenging problems of the modern industrial era.
              </p>
              <p>
                From <span className="text-[#ff0ea3] font-medium">Predictive Analytics</span> and <span className="text-[#ff0ea3] font-medium">NLP</span> to <span className="text-[#ff0ea3] font-medium">Computer Vision</span>, we specialize in high-impact AI applications that don't just innovate — they transform.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pb-12 border-b border-gray-100">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col gap-2"
                >
                  <div className="flex items-center gap-2">
                    {stat.icon}
                    <span className="text-3xl font-black text-[#050729]">{stat.value}</span>
                  </div>
                  <span className="text-sm text-gray-400 font-medium">{stat.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600">
                  <Shield className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-[#050729]">Ethics First</h4>
                <p className="text-sm text-gray-500">Committed to responsible and ethical AI development.</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-[#050729]">Innovation Led</h4>
                <p className="text-sm text-gray-500">Always at the cutting edge of technological breakthroughs.</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Media/Visual Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Main Visual Image */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl group">
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#050729]/80 via-transparent to-transparent opacity-60 mix-blend-multiply" />
              
              <img
                src="/image/certificate-image/Business Growth with AI.jpg"
                alt="AI Development Team"
                className="w-full h-full object-cover aspect-[4/5] min-h-[500px] transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Floating Badge in Image */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#ff0ea3] flex items-center justify-center text-white shadow-lg shadow-[#ff0ea3]/40">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-lg leading-none">Velnix Certified</h5>
                    <p className="text-white/60 text-xs mt-1 uppercase tracking-widest font-medium">Standards of Excellence</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Orbit Circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-gray-100 rounded-full pointer-events-none -z-10 animate-spin-slow opacity-50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-gray-50 rounded-full pointer-events-none -z-10 animate-spin-reverse-slow opacity-30" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
