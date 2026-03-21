import React from "react";

interface Capability {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

interface IndustryCapabilitiesProps {
  title: string;
  highlightedTitle: string;
  subtitle: string;
  highlightedSubtitle: string;
  capabilities: Capability[];
}

const IndustryCapabilities: React.FC<IndustryCapabilitiesProps> = React.memo(({
  title,
  highlightedTitle,
  subtitle,
  highlightedSubtitle,
  capabilities
}) => (
  <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#01010c] relative overflow-hidden">
    {/* High-Tech Background Layers */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
    <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
    <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px]"></div>
    
    <div className="max-w-7xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center space-y-4 mb-20 animate-fade-in">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
          {title} <span style={{ color: '#a855f7' }}>{highlightedTitle}</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
          {subtitle} <span className="text-gray-100 font-bold">{highlightedSubtitle}</span>.
        </p>
        <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mt-4 shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {capabilities.map((capability, index) => (
          <div 
            key={index}
            className="modern-card p-6 sm:p-8 flex flex-col gap-3 sm:gap-4 items-center min-h-[200px] sm:min-h-[220px] hover:scale-105 transition-all duration-300"
          >
            <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${capability.gradient} rounded-xl flex items-center justify-center mb-2 mx-auto text-white shadow-lg`}>
              <svg 
                className="w-7 h-7 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d={capability.icon} />
              </svg>
            </div>

            {/* Content */}
            <h3 className="font-bold text-sm sm:text-base text-white mb-1.5 text-center w-full">
              {capability.title}
            </h3>
            <p className="text-xs sm:text-sm font-medium text-gray-300 text-center leading-relaxed">
              {capability.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
));

IndustryCapabilities.displayName = 'IndustryCapabilities';

export default IndustryCapabilities;
