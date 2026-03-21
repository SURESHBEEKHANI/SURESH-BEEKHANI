import React from "react";

interface IndustryHeroProps {
  title: string;
  description: string;
  bgImage: string;
}

const IndustryHero: React.FC<IndustryHeroProps> = React.memo(({ title, description, bgImage }) => (
  <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center hero-bg overflow-hidden">
    <div 
      className="absolute inset-0 opacity-20 bg-cover bg-center" 
      style={{ backgroundImage: `url('${bgImage}')` }}
    />
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="text-white space-y-6 sm:space-y-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight drop-shadow-lg">
          {title}
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-white font-medium leading-relaxed max-w-4xl drop-shadow-md">
          {description}
        </p>
      </div>
    </div>
  </section>
));

IndustryHero.displayName = 'IndustryHero';

export default IndustryHero;
