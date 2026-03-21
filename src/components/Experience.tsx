import React, { useState, useEffect } from 'react';
import { Briefcase, GraduationCap, Calendar, Building, Award, Star, TrendingUp, Zap, Target, Users, Globe, Brain } from 'lucide-react';
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
        <div className={`text-left mb-8 sm:mb-12 ${isVisible ? 'fade-in' : 'opacity-0'}`}>

          <div className="flex items-start gap-4 mb-3">
            <div
              className="w-2.5 sm:w-4 h-3.5 sm:h-5 md:h-6 flex-shrink-0 mt-1 rounded-full"
              style={{
                background: '#ff0ea3',
                transform: 'skewX(-15deg)'
              }}
            ></div>
            <h2 className="heading-2 text-white leading-tight">
              Why <span style={{ color: '#ff0ea3' }}>Choose Us</span>
            </h2>
          </div>

          <p className="body-large text-foreground/70 max-w-3xl">
            This reflects our skills, experience, and dedication to delivering high-quality work
          </p>
        </div>

        {/* Redesigned Stats Row with Border Lines */}
        <div className={`mt-16 sm:mt-24 border-y border-white/10 ${isVisible ? 'fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 relative z-10">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center py-12 px-4 sm:px-8 relative
                  ${index % 2 !== 1 ? 'border-r border-white/10' : ''} 
                  ${index < 2 ? 'border-b border-white/10 lg:border-b-0' : ''}
                  ${index === 2 ? 'lg:border-r border-white/10' : ''}
                  ${index === 3 ? 'lg:border-r-0' : ''}`}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ff0ea3] mb-5 tracking-tight text-center leading-none">
                  {stat.number}
                </div>
                <div className="flex items-center gap-3 w-full justify-center mt-2">
                  <div className="w-5 sm:w-8 h-[1.5px] bg-[#ff0ea3]/80"></div>
                  <div className="text-[10px] sm:text-[11px] text-white font-bold uppercase tracking-[0.2em] text-center whitespace-nowrap">
                    {stat.label}
                  </div>
                  <div className="w-5 sm:w-8 h-[1.5px] bg-[#ff0ea3]/80"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`mt-0 border-t border-l border-white/20 relative overflow-hidden ${isVisible ? 'fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {/* Left Content - Title and Description */}
            <div className="col-span-1 px-4 sm:px-6 py-6 sm:py-10 border-b border-r border-white/20 bg-white/5">
              <div className="mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                  Achievements
                </h3>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Our  AI expertise is acknowledged across leading platforms.
              </p>
            </div>

            {/* Right Content - Certificates Slider */}
            <div className="col-span-1 lg:col-span-3 px-4 sm:px-6 py-6 sm:py-10 border-b border-r border-white/20 bg-white/5 relative group/slider">
              {/* Marquee Container */}
              <div id="cert-scroll" className="relative overflow-x-auto scrollbar-hide">
                <div className="flex animate-scroll whitespace-nowrap gap-8 sm:gap-12 items-center min-w-max px-4">
                  {[...certificates, ...certificates].map((cert, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 relative group/cert transition-all duration-300"
                    >
                      <div className="bg-white rounded-xl p-3 shadow-2xl shadow-black/40 border border-white/10 group-hover/cert:border-[#ff0ea3]/30 transition-all duration-500 hover:-translate-y-2 flex items-center justify-center h-16 sm:h-24 w-28 sm:w-40 overflow-hidden">
                        <img
                          src={cert.path}
                          alt={cert.alt}
                          className="max-h-full max-w-full object-contain filter drop-shadow-md"
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
