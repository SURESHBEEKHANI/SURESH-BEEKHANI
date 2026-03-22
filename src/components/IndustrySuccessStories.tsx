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
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-[#ff0ea3]/5 to-transparent rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-ai-cyan/5 to-transparent rounded-full blur-[120px] opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12 sm:mb-16">
          <div className="flex items-start gap-4 mb-4">
            <div
              className="w-2.5 sm:w-4 h-3.5 sm:h-5 md:h-6 flex-shrink-0 mt-1 rounded-full"
              style={{
                background: '#ff0ea3',
                transform: 'skewX(-15deg)'
              }}
            ></div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#050729] leading-tight">
              {title} <span style={{ color: '#ff0ea3' }}>{highlightedTitle}</span>
            </h2>
          </div>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl leading-relaxed">
            {subtitle} <span className="font-semibold text-[#050729]">{highlightedSubtitle}</span> worldwide.
          </p>
        </div>
        
        <div className="relative group">
          {/* Navigation Buttons */}
          <button 
            onClick={() => scroll('left')} 
            disabled={!canScrollLeft} 
            className={`absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-[#ff0ea3] text-[#ff0ea3] hover:text-white p-3 sm:p-4 rounded-none shadow-xl transition-all duration-300 border border-gray-100 transform hover:scale-110 ${!canScrollLeft ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} 
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          
          <button 
            onClick={() => scroll('right')} 
            disabled={!canScrollRight} 
            className={`absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-[#ff0ea3] text-[#ff0ea3] hover:text-white p-3 sm:p-4 rounded-none shadow-xl transition-all duration-300 border border-gray-100 transform hover:scale-110 ${!canScrollRight ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} 
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
                  className="flex-shrink-0 w-80 sm:w-[420px] bg-white rounded-none overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_-15px_rgba(255,14,163,0.25)] transition-all duration-500 border border-slate-100 hover:border-[#ff0ea3]/40 group/card transform hover:-translate-y-3 flex flex-col"
                >
                  <div className="relative h-60 sm:h-72 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110" 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050729]/80 via-[#050729]/20 to-transparent opacity-80 group-hover/card:opacity-90 transition-opacity duration-500" />
                    
                    {/* Floating Badge */}
                    <div className="absolute top-5 left-5 bg-[#ff0ea3] text-white px-4 py-1.5 rounded-none text-[10px] font-bold uppercase tracking-widest shadow-lg transform -rotate-1 group-hover/card:rotate-0 transition-transform duration-300">
                      Success Story
                    </div>

                    <div className="absolute bottom-6 left-6 right-6">
                       <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight group-hover/card:text-[#ff0ea3] transition-colors duration-300 drop-shadow-md">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 space-y-5 flex flex-col flex-grow bg-white relative">
                    {/* Top glass accent line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff0ea3]/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>

                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    <div className="pt-4 mt-auto">
                      <Link 
                        to={project.link} 
                        className="group/link inline-flex items-center gap-3 text-[#ff0ea3] font-bold text-sm tracking-wide"
                      >
                        <span className="relative">
                          Case Study Details
                        </span>
                        <div className="w-8 h-8 rounded-full bg-[#ff0ea3]/5 flex items-center justify-center group-hover/link:bg-[#ff0ea3] group-hover/link:text-white transition-all duration-300">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Scroll Indicators */}
          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: Math.ceil(portfolioData.length) }).map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1.5 rounded-full transition-all duration-500 ${isAutoScrolling ? 'bg-gray-200' : 'bg-[#ff0ea3]/20'}`}
                style={{ width: idx === 0 ? '24px' : '6px' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySuccessStories;
