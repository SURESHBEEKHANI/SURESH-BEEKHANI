import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Check, ChevronLeft, ChevronRight, Star } from 'lucide-react';
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

  // Memoized display testimonials
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
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
        aria-hidden="true"
      />
    ));
  };

  return (
    <section 
      className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white relative overflow-hidden"
      aria-label="Client Testimonials"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-100/40 to-pink-100/40 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge 
            variant="outline" 
            className="mb-4 px-4 py-2 bg-primary/10 text-primary font-medium text-sm rounded-full border-primary/20 hover:bg-primary/15 transition-colors duration-300"
          >
            Client Testimonials
          </Badge>
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Trusted by <span className="text-primary">Innovators</span> Worldwide
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what our clients say about working with us on their AI and machine learning projects.
            </p>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="relative">
          {/* Navigation buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 z-20">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300 group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors" />
            </Button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20">
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300 group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors" />
            </Button>
          </div>

          {/* Testimonials carousel */}
          <div 
            className="flex justify-center items-center gap-4 md:gap-6 lg:gap-8 mb-12 relative overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
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
                <div className="w-72 md:w-80 lg:w-96 h-80 md:h-88 lg:h-96 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 rounded-3xl p-6 md:p-8 shadow-2xl transform hover:rotate-0 transition-all duration-500 hover:scale-105 hover:shadow-3xl border border-white/10 backdrop-blur-sm">
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

          {/* Dots indicator */}
          <div className="flex justify-center gap-3 mb-8" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                  index === currentIndex
                    ? 'bg-primary scale-125 shadow-lg'
                    : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                }`}
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-sm text-gray-500">
              <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                isAutoPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-300'
              }`}></div>
              <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
