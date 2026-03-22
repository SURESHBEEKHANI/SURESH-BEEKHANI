import React from "react";
import { Link } from "react-router-dom";

interface IndustryProfessionalProps {
  title: string;
  highlightedTitle: string;
  description1: string;
  description2: string;
  image: string;
}

const IndustryProfessional: React.FC<IndustryProfessionalProps> = React.memo(({ 
  title, 
  highlightedTitle, 
  description1, 
  description2, 
  image 
}) => (
  <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#050729] leading-tight flex flex-wrap gap-2">
              <span className="text-[#050729]">{title}</span>
              <span style={{ color: '#ff0ea3' }}>{highlightedTitle}</span>
            </h2>
          </div>
          
          <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
            <p>{description1}</p>
            <p>{description2}</p>
          </div>

          <div className="pt-4">
            <Link to="/contact">
              <button className="bg-[#ff0ea3] text-white px-8 py-4 rounded-none font-bold text-sm uppercase tracking-widest shadow-lg hover:shadow-[#ff0ea3]/30 transition-all duration-300 transform hover:-translate-y-1 hover:brightness-110 active:scale-95 flex items-center gap-3">
                Contact Expert
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
        
        {/* Right Image with Modern Design */}
        <div className="relative max-w-xl mx-auto lg:mx-0">
          <div className="relative rounded-none overflow-hidden shadow-2xl">
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#ff0ea3]/20 to-transparent rounded-none transform rotate-12 z-0 opacity-80" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-ai-cyan/20 to-transparent rounded-none transform -rotate-12 z-0 opacity-80" />
            
            {/* Main Image Container */}
            <div className="relative z-10 bg-white p-2 rounded-none">
              <div className="relative rounded-none overflow-hidden h-64 sm:h-80 lg:h-96">
                <img 
                  src={image} 
                  alt="Industry professional using AI technology" 
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#ff0ea3]/10 to-transparent opacity-60" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
));

IndustryProfessional.displayName = 'IndustryProfessional';

export default IndustryProfessional;
