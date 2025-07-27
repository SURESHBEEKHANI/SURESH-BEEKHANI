import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  testimonial: string;
  image: string;
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Kate Callahan",
      title: "Chief Executive Officer",
      testimonial: "The collaboration has been amazing. Flexible and accommodating of scope changes, the team is quick to accommodate requests and answer questions. They continue to deliver high-quality work at a competitive price.",
      image: "/image/clinets-img/Jennifer Jones.jpg"
    },
    {
      id: 2,
      name: "Aram Saffarian",
      title: "VP of Engineering",
      testimonial: "Suresh Beekhani has improved the client's existing app. Suresh Beekhani utilizes their expertise to deliver comprehensive, user-friendly solutions. Their team manages projects well and has excellent documentation processes and communication.",
      image: "/image/clinets-img/Andrey Korablin.jpg"
    },
    {
      id: 3,
      name: "Jeff Moye",
      title: "Director of Product",
      testimonial: "The Suresh Beekhani team has finished 2/3 of the project and completed every milestone so far. Their workflow is good; their members communicate regularly through Zoom, and they collaborate well with the client via GitHub, Jira, and Slack. They solve problems fast and deliver information on time.",
      image: "/image/clinets-img/Andrew Osadca.jpg"
    },
    {
      id: 4,
      name: "Dominika Kowalska",
      title: "Lead Data Scientist",
      testimonial: "Outstanding AI solutions that transformed our business processes. The team's expertise in machine learning and their innovative approach helped us achieve remarkable results in record time.",
      image: "/image/clinets-img/Dominika Kowalska.jpg"
    },
    {
      id: 5,
      name: "Jamie Milnes",
      title: "Head of Technology",
      testimonial: "Exceptional technical expertise combined with excellent communication. They delivered our AI-powered platform ahead of schedule and exceeded all our expectations.",
      image: "/image/clinets-img/Jamie Milnes.jpg"
    },
    {
      id: 6,
      name: "Roma Kończak",
      title: "AI Solutions Architect",
      testimonial: "The team's deep understanding of AI and their ability to translate complex requirements into elegant solutions is truly impressive. Highly recommended for any AI development project.",
      image: "/image/clinets-img/Roma-Kończak.jpg"
    }
  ];



  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const getDisplayTestimonials = () => {
    const current = testimonials[currentIndex];
    const next = testimonials[(currentIndex + 1) % testimonials.length];
    const nextNext = testimonials[(currentIndex + 2) % testimonials.length];
    return [current, next, nextNext];
  };

  const displayTestimonials = getDisplayTestimonials();

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Trusted by Innovators Worldwide
            </h2>
          </div>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="relative">
          <div className="flex justify-center items-center gap-2 md:gap-4 mb-8 relative overflow-hidden">
            {displayTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`relative transform transition-all duration-700 ${
                  index === 0 
                    ? 'scale-100 z-30 translate-x-0' 
                    : index === 1 
                    ? 'scale-90 z-20 translate-x-2 md:translate-x-4 opacity-90' 
                    : 'scale-80 z-10 translate-x-4 md:translate-x-8 opacity-70'
                }`}
                style={{
                  transform: `perspective(1000px) rotateY(${index * 6 - 6}deg) translateZ(${index * 8}px)`
                }}
              >
                <div className="w-64 md:w-72 h-72 md:h-80 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-4 md:p-6 shadow-2xl transform hover:rotate-0 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 md:border-4 border-white/30">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-base md:text-lg">
                        {testimonial.name}
                      </h3>
                      <p className="text-white/80 text-xs md:text-sm">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                  <p className="text-white/90 text-xs md:text-sm leading-relaxed">
                    "{testimonial.testimonial}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mb-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>


        </div>
      </div>
    </section>
  );
};

export default Testimonials;
