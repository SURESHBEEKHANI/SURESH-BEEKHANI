import React, { useState, useCallback, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface IndustrySuccessStoriesProps {
  portfolioData: PortfolioItem[];
  title?: string;
  highlightedTitle?: string;
  subtitle?: string;
  highlightedSubtitle?: string;
  badgeText?: string;
}

const IndustrySuccessStories: React.FC<IndustrySuccessStoriesProps> = ({
  portfolioData,
  title = "Real-World",
  highlightedTitle = "AI Solutions",
  subtitle = "Discover how our cutting-edge AI technology has transformed",
  highlightedSubtitle = "industry operations",
  badgeText = "Success Stories"
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const checkScrollButtons = useCallback(() => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 10);
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10);
    }
  }, []);

  const scroll = useCallback((direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth = 400;
      const targetScroll = direction === 'left' 
        ? Math.max(0, container.scrollLeft - cardWidth)
        : Math.min(container.scrollWidth - container.clientWidth, container.scrollLeft + cardWidth);
      container.scrollTo({ left: targetScroll, behavior: 'smooth' });
      setIsAutoScrolling(false);
      setTimeout(() => setIsAutoScrolling(true), 10000);
    }
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || !isAutoScrolling) return;
    
    const autoScrollInterval = setInterval(() => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      const currentScroll = container.scrollLeft;
      
      if (currentScroll >= maxScroll - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollTo({ left: currentScroll + 400, behavior: 'smooth' });
      }
    }, 4000);
    
    return () => clearInterval(autoScrollInterval);
  }, [isAutoScrolling]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScrollButtons();
      container.addEventListener('scroll', checkScrollButtons);
      return () => container.removeEventListener('scroll', checkScrollButtons);
    }
  }, [checkScrollButtons]);

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border border-cyan-200 shadow-sm">
              {badgeText}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
            {title} <span style={{ color: '#a855f7' }}>{highlightedTitle}</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
            {subtitle} <span className="text-slate-900 font-bold">{highlightedSubtitle}</span> worldwide.
          </p>
        </div>
        
        <div className="relative group">
          {/* Navigation Buttons */}
          <button 
            onClick={() => scroll('left')} 
            disabled={!canScrollLeft} 
            className={`absolute left-0 sm:-left-6 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-[#f01eff] via-[#f755d7] to-[#ec4899] hover:from-[#d10b85] hover:via-[#ff0ea3] hover:to-[#ff07a4] text-white p-3 sm:p-4 rounded-none shadow-2xl transition-all duration-300 transform hover:scale-110 ${!canScrollLeft ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} 
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          
          <button 
            onClick={() => scroll('right')} 
            disabled={!canScrollRight} 
            className={`absolute right-0 sm:-right-6 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-[#f01eff] via-[#f755d7] to-[#ec4899] hover:from-[#d10b85] hover:via-[#ff0ea3] hover:to-[#ff07a4] text-white p-3 sm:p-4 rounded-none shadow-2xl transition-all duration-300 transform hover:scale-110 ${!canScrollRight ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} 
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          
          {/* Scroll Container */}
          <div 
            ref={scrollContainerRef} 
            className="overflow-x-auto pb-8 scrollbar-hide scroll-smooth" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} 
            onMouseEnter={() => setIsAutoScrolling(false)} 
            onMouseLeave={() => setIsAutoScrolling(true)}
            onTouchStart={() => setIsAutoScrolling(false)}
          >
            <div className="flex gap-6 sm:gap-8 px-4 sm:px-8" style={{ width: 'max-content' }}>
              {portfolioData.map((project, idx) => (
                <div 
                  key={project.link + idx} 
                  className="flex-shrink-0 w-80 sm:w-[420px] bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-purple-200 group/card transform hover:-translate-y-2"
                >
                  <div className="relative h-52 sm:h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>
                  <div className="p-6 sm:p-7 space-y-4">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-tight group-hover/card:text-[#a855f7] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    <Link 
                      to={project.link} 
                      className="inline-flex items-center gap-1.5 text-[#a855f7] font-bold text-sm hover:translate-x-1 transition-transform"
                    >
                      Learn More 
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Scroll Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(portfolioData.length / 3) }).map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 ${idx === 0 ? 'w-8' : 'w-2'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySuccessStories;
