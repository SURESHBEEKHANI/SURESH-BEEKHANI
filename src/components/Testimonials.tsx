import { useState, useEffect, useCallback, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  testimonial: string;
  image: string;
  rating?: number;
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Memoized testimonials data
  const testimonials: Testimonial[] = useMemo(() => [
    {
      id: 1,
      name: "Kate Callahan",
      title: "Chief Executive Officer",
      testimonial: "The collaboration has been amazing. Flexible and accommodating of scope changes, the team is quick to accommodate requests and answer questions. They continue to deliver high-quality work at a competitive price.",
      image: "/image/clinets-img/Jennifer Jones.jpg",
      rating: 5
    },
    {
      id: 2,
      name: "Aram Saffarian",
      title: "VP of Engineering",
      testimonial: "Suresh Beekhani has improved the client's existing app. Suresh Beekhani utilizes their expertise to deliver comprehensive, user-friendly solutions. Their team manages projects well and has excellent documentation processes and communication.",
      image: "/image/clinets-img/Andrey Korablin.jpg",
      rating: 5
    },
    {
      id: 3,
      name: "Jeff Moye",
      title: "Director of Product",
      testimonial: "The Suresh Beekhani team has finished 2/3 of the project and completed every milestone so far. Their workflow is good; their members communicate regularly through Zoom, and they collaborate well with the client via GitHub, Jira, and Slack. They solve problems fast and deliver information on time.",
      image: "/image/clinets-img/Andrew Osadca.jpg",
      rating: 5
    },
    {
      id: 4,
      name: "Dominika Kowalska",
      title: "Lead Data Scientist",
      testimonial: "Outstanding AI solutions that transformed our business processes. The team's expertise in machine learning and their innovative approach helped us achieve remarkable results in record time.",
      image: "/image/clinets-img/Dominika Kowalska.jpg",
      rating: 5
    },
    {
      id: 5,
      name: "Jamie Milnes",
      title: "Head of Technology",
      testimonial: "Exceptional technical expertise combined with excellent communication. They delivered our AI-powered platform ahead of schedule and exceeded all our expectations.",
      image: "/image/clinets-img/Jamie Milnes.jpg",
      rating: 5
    },
    {
      id: 6,
      name: "Roma Kończak",
      title: "AI Solutions Architect",
      testimonial: "The team's deep understanding of AI and their ability to translate complex requirements into elegant solutions is truly impressive. Highly recommended for any AI development project.",
      image: "/image/clinets-img/Roma-Kończak.jpg",
      rating: 5
    }
  ], []);

  // Auto-scroll effect with pause on hover
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  // Memoized navigation functions
  const goToTestimonial = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  // Memoized display testimonials - mobile shows only current, desktop shows 3
  const displayTestimonials = useMemo(() => {
    const current = testimonials[currentIndex];
    const next = testimonials[(currentIndex + 1) % testimonials.length];
    const nextNext = testimonials[(currentIndex + 2) % testimonials.length];
    return [current, next, nextNext];
  }, [testimonials, currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrevious]);

  // Render star rating
  const renderStars = (rating: number = 5) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 sm:w-4 sm:h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
        aria-hidden="true"
      />
    ));
  };

  return (
    <section 
      className="py-12 sm:py-16 md:py-20 lg:py-24 ai-section relative overflow-hidden"
      aria-label="Client Testimonials"
    >
      {/* AI Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-ai-purple/20 to-ai-cyan/15 rounded-full blur-3xl animate-aurora"></div>
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-tr from-ai-cyan/15 to-ai-purple-light/20 rounded-full blur-3xl animate-aurora"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-ai-purple/5 to-ai-cyan/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
              Client <span className="gradient-text">Testimonials</span>
            </h2>
            
            {/* Dots indicator moved under title */}
            <div className="flex justify-center gap-2 sm:gap-3 mb-4 sm:mb-6" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ai-purple/50 ${
                    index === currentIndex
                      ? 'bg-ai-cyan scale-125 shadow-lg ai-glow'
                      : 'bg-ai-gray/30 hover:bg-ai-purple/50 hover:scale-110'
                  }`}
                  role="tab"
                  aria-selected={index === currentIndex}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <p className="body-large text-white/90 max-w-3xl mx-auto">
              Discover what our clients say about working with us on their <span className="gradient-text-ai">AI and machine learning projects</span>.
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Navigation buttons - hidden on mobile, visible on desktop */}
          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-4 z-20">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full bg-ai-dark/80 backdrop-blur-sm border-ai-purple/30 hover:bg-ai-dark hover:shadow-lg ai-glow transition-all duration-300 group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-ai-cyan group-hover:text-ai-purple transition-colors" />
            </Button>
          </div>

          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 right-4 z-20">
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-ai-dark/80 backdrop-blur-sm border-ai-purple/30 hover:bg-ai-dark hover:shadow-lg ai-glow transition-all duration-300 group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-ai-cyan group-hover:text-ai-purple transition-colors" />
            </Button>
          </div>

          {/* Mobile navigation buttons */}
          <div className="md:hidden flex justify-center gap-4 mb-6">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="w-10 h-10 rounded-full bg-ai-dark/90 backdrop-blur-sm border-ai-purple/30 hover:bg-ai-dark hover:shadow-lg ai-glow transition-all duration-300 group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4 text-ai-cyan group-hover:text-ai-purple transition-colors" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="w-10 h-10 rounded-full bg-ai-dark/90 backdrop-blur-sm border-ai-purple/30 hover:bg-ai-dark hover:shadow-lg ai-glow transition-all duration-300 group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4 text-ai-cyan group-hover:text-ai-purple transition-colors" />
            </Button>
          </div>

          {/* Testimonials carousel */}
          <div 
            className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 mb-8 sm:mb-12 relative overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Mobile: Show only current testimonial */}
            <div className="md:hidden w-full max-w-sm">
              <div
                key={`${testimonials[currentIndex].id}-${currentIndex}`}
                className="relative transform transition-all duration-700 ease-out scale-100 z-30 translate-x-0 opacity-100"
              >
                <div className="w-full h-auto min-h-[320px] sm:min-h-[360px] ai-card-glow rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl transform hover:rotate-0 transition-all duration-500 hover:scale-105 hover:shadow-3xl border border-ai-purple/20 backdrop-blur-sm" style={{background: 'linear-gradient(135deg, #6C63FF 0%, #00C2FF 50%, #8B5CF6 100%)'}}>
                  {/* Rating stars */}
                  <div className="flex items-center gap-1 mb-3 sm:mb-4" aria-label={`${testimonials[currentIndex].rating} out of 5 stars`}>
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>

                  {/* Quote icon */}
                  <div className="absolute top-4 sm:top-6 right-4 sm:right-6 text-white/20">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-3 sm:border-4 border-white/30 shadow-lg flex-shrink-0">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={`${testimonials[currentIndex].name}, ${testimonials[currentIndex].title}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-bold text-base sm:text-lg md:text-xl mb-1">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-white/80 text-sm sm:text-base font-medium">
                        {testimonials[currentIndex].title}
                      </p>
                    </div>
                  </div>
                  
                  <blockquote className="text-white/95 text-sm sm:text-base leading-relaxed italic">
                    "{testimonials[currentIndex].testimonial}"
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Desktop: Show 3 testimonials with carousel effect */}
            <div className="hidden md:flex">
              {displayTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${currentIndex}`}
                  className={`relative transform transition-all duration-700 ease-out ${
                    index === 0 
                      ? 'scale-100 z-30 translate-x-0 opacity-100' 
                      : index === 1 
                      ? 'scale-90 z-20 translate-x-2 md:translate-x-4 opacity-80' 
                      : 'scale-80 z-10 translate-x-4 md:translate-x-8 opacity-60'
                  }`}
                  style={{
                    transform: `perspective(1000px) rotateY(${index * 6 - 6}deg) translateZ(${index * 8}px)`
                  }}
                >
                  <div className="w-72 md:w-80 lg:w-96 h-80 md:h-88 lg:h-96 ai-card-glow rounded-3xl p-6 md:p-8 shadow-2xl transform hover:rotate-0 transition-all duration-500 hover:scale-105 hover:shadow-3xl border border-ai-purple/20 backdrop-blur-sm" style={{background: 'linear-gradient(135deg, #6C63FF 0%, #00C2FF 50%, #8B5CF6 100%)'}}>
                    {/* Rating stars */}
                    <div className="flex items-center gap-1 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Quote icon */}
                    <div className="absolute top-6 right-6 text-white/20">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                      </svg>
                    </div>

                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-white/30 shadow-lg flex-shrink-0">
                        <img
                          src={testimonial.image}
                          alt={`${testimonial.name}, ${testimonial.title}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-bold text-lg md:text-xl mb-1">
                          {testimonial.name}
                        </h3>
                        <p className="text-white/80 text-sm md:text-base font-medium">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                    
                    <blockquote className="text-white/95 text-sm md:text-base leading-relaxed italic">
                      "{testimonial.testimonial}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Removed dots indicator from here since it's now under the title */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
