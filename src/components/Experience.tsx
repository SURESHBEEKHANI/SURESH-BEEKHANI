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
    { number: '04', label: 'Global Connections' },
  ];

  // Stats section removed as requested

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
          <Badge 
            className="mb-4 px-4 py-2 border-[#a855f7]/30"
            style={{ background: 'linear-gradient(135deg, rgba(109, 40, 217, 0.2) 0%, rgba(168, 85, 247, 0.2) 50%, rgba(236, 72, 153, 0.2) 100%)', color: '#a855f7' }}
          >
            <Star className="w-4 h-4 mr-2" />
            Our Impact
          </Badge>
          <h2 className="heading-2 mb-4">
            Why <span className="gradient-text">Choose Us</span>
          </h2>
          <p className="body-large text-foreground/70 max-w-3xl mx-auto">
            Delivering excellence in AI, machine learning, and data solutions with a proven track record of worldwide success.
          </p>
        </div>

        {/* Premium Stats Glass Card */}
        <div className={`bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 sm:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.2)] relative overflow-hidden group ${isVisible ? 'fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          {/* Subtle animated background gradients */}
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
          
          <div className="mb-10 relative z-10">
            <p className="text-gray-300 text-base sm:text-lg font-medium text-center max-w-2xl mx-auto italic">
              "This highlights our skills, experience, and quality of work, demonstrating our commitment to excellence."
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 relative z-10">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`flex flex-col items-center justify-center p-6 sm:p-8 relative group/stat transition-transform duration-500 hover:-translate-y-2 rounded-2xl
                  ${index !== stats.length - 1 ? 'lg:border-r border-white/10 lg:rounded-r-none' : ''} 
                  ${index !== 0 ? 'lg:rounded-l-none' : ''}`}
                style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)' }}
              >
                {/* Hover glow effect for each stat */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300 rounded-2xl lg:rounded-none"></div>
                
                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-primary to-fuchsia-400 mb-4 tracking-tighter group-hover/stat:scale-110 transition-transform duration-500 drop-shadow-lg">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-300 font-semibold text-center uppercase tracking-wider flex items-center justify-center gap-2 w-full">
                  <span className="w-6 h-px bg-primary/50 relative hidden lg:block"></span>
                  <span className="relative z-10 drop-shadow-md">{stat.label}</span>
                  <span className="w-6 h-px bg-primary/50 relative hidden lg:block"></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

  );
};

export default Experience;
