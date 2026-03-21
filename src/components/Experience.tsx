import React, { useState, useEffect } from 'react';
import { Briefcase, GraduationCap, Calendar, Building, Award, Star, TrendingUp, Zap, Target, Users, Globe, Brain, ChevronLeft, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('work');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '4+', label: 'Years of Experience' },
    { number: '10+', label: 'Happy Clients' },
    { number: '25+', label: 'Projects Completed' },
    { number: '95%', label: 'Client Satisfaction' },
  ];

  // Stats section removed as requested

  const certificates = [
    { path: '/image/certificate-image/AI & machine learining.png', alt: 'AI & Machine Learning Certificate' },
    { path: '/image/certificate-image/AWS-GENAI.png', alt: 'AWS Generative AI Certificate' },
    { path: '/image/certificate-image/DEEP-LEARING.png', alt: 'Deep Learning Certificate' },
    { path: '/image/certificate-image/aws.png', alt: 'AWS Certificate' },
    { path: '/image/certificate-image/machine learing AI.png', alt: 'Machine Learning AI Certificate' },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 ai-section relative overflow-hidden">
      {/* AI Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-ai-purple/20 to-ai-cyan/15 rounded-full blur-3xl animate-aurora"></div>
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-tr from-ai-cyan/15 to-ai-purple-light/20 rounded-full blur-3xl animate-aurora"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-ai-purple/5 to-ai-cyan/5 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 ${isVisible ? 'fade-in' : 'opacity-0'}`}>

          <h2 className="heading-2 mb-2 sm:mb-3">
            Why <span style={{ color: '#ff0ea3' }}>Choose Us</span>
          </h2>
          <div
            className="w-16 sm:w-20 h-0.5 sm:h-1 mx-auto mb-4 sm:mb-6"
            style={{ 
              background: 'linear-gradient(135deg, #ff0ea3 0%, rgba(255, 14, 163, 0.8) 50%, rgba(255, 14, 163, 0.4) 100%)' 
            }}
          ></div>
          <p className="body-large text-foreground/70 max-w-3xl mx-auto">
            This reflects our skills, experience, and dedication to delivering high-quality work
          </p>
        </div>

        {/* Premium Stats Glass Card */}
        <div className={`p-8 sm:p-12 pb-0 sm:pb-0 relative overflow-hidden group ${isVisible ? 'fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          {/* Subtle animated background gradients */}
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 relative z-10">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center p-6 sm:p-8 relative group/stat transition-transform duration-500 hover:-translate-y-2 rounded-2xl
                  ${index !== stats.length - 1 ? 'lg:border-r border-white/10 lg:rounded-r-none' : ''} 
                  ${index !== 0 ? 'lg:rounded-l-none' : ''}`}
                style={{ background: 'linear-gradient(180deg, rgba(223, 27, 245, 0) 0%, rgba(245, 10, 108, 0) 100%)' }}
              >
                {/* Hover glow effect for each stat */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300 rounded-2xl lg:rounded-none"></div>

                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#ff0ea3] mb-4 tracking-tighter group-hover/stat:scale-110 transition-transform duration-500 drop-shadow-lg text-center">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-300 font-semibold text-center uppercase tracking-wider flex items-center justify-center gap-2 w-full">
                  <span className="w-6 h-px bg-[#ff0ea3]/50 relative hidden lg:block"></span>
                  <span className="relative z-10 drop-shadow-md">{stat.label}</span>
                  <span className="w-6 h-px bg-[#ff0ea3]/50 relative hidden lg:block"></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates Redesigned Section */}
        <div className={`mt-0 ${isVisible ? 'fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content - Title and Description */}
            <div className="lg:col-span-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight">
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0ea3] to-[#ff0ea3]/70">Achievements</span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                Several platforms and industry experts have acknowledged our seasoned engineers' technical proficiency in various domains of AI and technology.
              </p>
            </div>

            {/* Right Content - Certificates Slider */}
            <div className="lg:col-span-8 relative group/slider">
              {/* Navigation Buttons (Visual only as per design image) */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 opacity-0 group-hover/slider:opacity-100 transition-opacity">
                <button className="w-10 h-10 rounded-full bg-[#ff0ea3] flex items-center justify-center text-white shadow-lg shadow-[#ff0ea3]/20 hover:scale-110 transition-transform">
                  <ChevronLeft size={24} />
                </button>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 opacity-0 group-hover/slider:opacity-100 transition-opacity">
                <button className="w-10 h-10 rounded-full bg-[#ff0ea3] flex items-center justify-center text-white shadow-lg shadow-[#ff0ea3]/20 hover:scale-110 transition-transform">
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Marquee Container */}
              <div className="relative overflow-hidden border border-white/5 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm p-4 sm:p-8">
                <div className="flex animate-scroll whitespace-nowrap gap-8 sm:gap-12 items-center">
                  {[...certificates, ...certificates].map((cert, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 relative group/cert transition-all duration-300"
                    >
                      <div className="bg-white rounded-2xl p-4 shadow-xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-1">
                        <img
                          src={cert.path}
                          alt={cert.alt}
                          className="h-16 sm:h-24 md:h-28 w-auto object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Experience;
