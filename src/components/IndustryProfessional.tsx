import React from "react";

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
  <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              {title} <span className="gradient-text-ai">{highlightedTitle}</span>
            </h2>
          </div>
          
          <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
            <p>{description1}</p>
            <p>{description2}</p>
          </div>
        </div>
        
        {/* Right Image with Modern Design */}
        <div className="relative max-w-xl mx-auto lg:mx-0">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl transform rotate-12 z-0 opacity-80" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-cyan-500 to-emerald-400 rounded-3xl transform -rotate-12 z-0 opacity-80" />
            
            {/* Main Image Container */}
            <div className="relative z-10 bg-white p-2 rounded-3xl">
              <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 lg:h-96" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)' }}>
                <img 
                  src={image} 
                  alt="Industry professional using AI technology" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
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
