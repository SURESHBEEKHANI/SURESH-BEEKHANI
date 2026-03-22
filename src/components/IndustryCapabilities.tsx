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
  capabilities: Capability[];
}

const IndustryCapabilities: React.FC<IndustryCapabilitiesProps> = React.memo(({
  title,
  highlightedTitle,
  capabilities
}) => (
  <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#01010c] relative overflow-hidden">
    {/* High-Tech Background Layers */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
    <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
    <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px]"></div>

    <div className="max-w-7xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-left space-y-4 mb-12 sm:mb-16 animate-fade-in lg:pl-[10%]">
        <div className="flex items-start gap-4 mb-2">
          <div
            className="w-2 sm:w-3 h-6 rounded-none flex-shrink-0 mt-1"
            style={{
              background: '#ff0ea3',
              transform: 'skewX(-15deg)'
            }}
          ></div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
            {title} <span style={{ color: '#ff0ea3' }}>{highlightedTitle}</span>
          </h2>
        </div>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {capabilities.map((capability, index) => (
          <div
            key={index}
            className="modern-card p-6 sm:p-8 flex flex-col gap-3 sm:gap-4 items-start min-h-[200px] sm:min-h-[220px] hover:scale-105 transition-all duration-300 rounded-none border-none"
          >
            <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${capability.gradient} rounded-none flex items-center justify-center mb-2 text-white shadow-lg`}>
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
            <h3 className="font-bold text-sm sm:text-base text-white mb-1.5 text-left w-full">
              {capability.title}
            </h3>
            <p className="text-xs sm:text-sm font-medium text-gray-300 text-left leading-relaxed">
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
