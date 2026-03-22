import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Industries = () => {
  const [activeIndustry, setActiveIndustry] = useState<string>("FinTech");
  const industries = [
    {
      id: 1,
      name: "FinTech",
      description: "Fraud detection, automated compliance, intelligent chatbots, and predictive analytics.",
      image: "/image/pages_img/FinTech.jpg",
      link: "/fintech",
      features: ["Fraud Detection", "Compliance", "AI Chatbots", "Predictive Analytics"]
    },
    {
      id: 2,
      name: "HealthTech",
      description: "Patient scheduling, workflow automation, AI diagnostics, and predictive health insights.",
      image: "/image/pages_img/HealthTech.png",
      link: "/healthtech",
      features: ["Patient Scheduling", "Workflow Automation", "AI Diagnostics", "Predictive Analytics"]
    },
    {
      id: 3,
      name: "RetailTech",
      description: "Personalized recommendations, demand forecasting, AI shopping assistants, and visual search.",
      image: "/image/pages_img/RetailTech.jpg",
      link: "/retailtech",
      features: ["Recommendations", "Demand Forecasting", "AI Assistants", "Visual Search"]
    },
    {
      id: 4,
      name: "EdTech",
      description: "Personalized learning paths, AI tutoring, automated grading, and predictive analytics.",
      image: "/image/pages_img/EdTech.jpg",
      link: "/edtech",
      features: ["Personalized Learning", "AI Tutors", "Auto Grading", "Learning Analytics"]
    },
    {
      id: 5,
      name: "FitTech",
      description: "Personalized workouts, wearable analytics, AI coaches, and nutrition optimization.",
      image: "/image/pages_img/FitTech.jpg",
      link: "/fittech",
      features: ["Personalized Workouts", "Wearable Analytics", "AI Coaches", "Nutrition AI"]
    },
    {
      id: 6,
      name: "LegalTech",
      description: "Contract analysis, legal document search, compliance monitoring, and AI assistants.",
      image: "/image/pages_img/LegalTech.jpg",
      link: "/legaltech",
      features: ["Contract Analysis", "Legal Search", "Compliance", "AI Assistants"]
    },
    {
      id: 7,
      name: "WealthTech",
      description: "Robo-advisory, client onboarding, predictive analytics, and wealth management chatbots.",
      image: "/image/pages_img/WealthTech.jpg",
      link: "/wealthtech",
      features: ["Robo-Advisory", "Client Onboarding", "Predictive Analytics", "AI Chatbots"]
    },
    {
      id: 8,
      name: "IT & Software",
      description: "AI dev tools, intelligent IT support, DevOps automation, and enterprise software.",
      image: "/image/pages_img/IT-Software.jpg",
      link: "/it-software",
      features: ["AI Dev Tools", "IT Support", "DevOps", "Enterprise Solutions"]
    }
  ];

  return (
    <section id="industries" className="pt-2 sm:pt-4 md:pt-6 pb-12 bg-white w-full overflow-x-hidden scroll-mt-20">
      <div className="w-full">
        {/* Industries Transforming with AI Development Section */}
        <section className="pt-2 sm:pt-4 md:pt-6 pb-0 relative bg-white w-full">
          <div className="relative z-15 w-full">
            <div className="text-left space-y-3 sm:space-y-4 mb-10 sm:mb-12 md:mb-16 px-[5%] sm:px-[10%]">
              <div className="flex items-start gap-3 sm:gap-4">
                <div
                  className="w-2.5 sm:w-4 h-3.5 sm:h-5 md:h-6 flex-shrink-0 mt-1 rounded-full"
                  style={{
                    background: '#ff0ea3',
                    transform: 'skewX(-15deg)'
                  }}
                ></div>

                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#050729] leading-[1.2]">
                  Industries We Transform with Innovative  <span className="gradient-text-ai">AI Software Solutions</span>
                </h2>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-2xl font-medium leading-relaxed">
                We empower businesses across diverse industries with custom AI solutions, driving innovation, efficiency, and sustainable growth in the digital era.
              </p>
            </div>

            {/* Mobile-first responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-gray-200 overflow-hidden shadow-lg sm:shadow-2xl w-full">
              {industries.map((industry) => (
                <div
                  key={industry.id}
                  onClick={() => setActiveIndustry(industry.name)}
                  className={`group relative border-b border-r border-gray-200 min-h-[180px] sm:min-h-[200px] md:min-h-[220px] flex items-center justify-center cursor-pointer overflow-hidden touch-manipulation transition-all duration-300 hover:z-30 hover:shadow-[0_0_20px_rgba(255,14,163,0.3)] ${activeIndustry === industry.name ? 'z-30 shadow-[0_0_20px_rgba(255,14,163,0.3)]' : ''
                    }`}
                  style={{ minHeight: 'clamp(250px, 25vh, 520px)' }}
                >
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className={`absolute inset-0 w-full h-full object-cover opacity-80 transition-all duration-700 z-0 group-hover:scale-110 ${activeIndustry === industry.name ? 'scale-110 opacity-100' : ''
                      }`}
                    loading="lazy"
                  />
                  {/* Default dark overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30 z-10 transition-all duration-300 group-hover:opacity-0 group-active:opacity-0 ${activeIndustry === industry.name ? 'opacity-0' : ''
                    }`}></div>

                  {/* Hover overlay with content - enhanced for touch */}
                  <div className={`absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-6 sm:py-8 z-20 transition-all duration-300 border-2 border-[#ff0ea3]/40 ${activeIndustry === industry.name ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 group-active:opacity-100'
                    }`}
                    style={{ background: 'linear-gradient(135deg, rgba(255, 14, 163, 0.7) 0%, rgba(255, 14, 163, 0.5) 50%, rgba(255, 14, 163, 0.8) 100%)' }}>
                    <div className="text-xl sm:text-2xl font-black text-white mb-2 sm:mb-4 leading-tight tracking-tight">{industry.name}</div>
                    <div className="text-white text-sm sm:text-base font-bold mb-4 sm:mb-6 leading-relaxed px-2 sm:px-0 drop-shadow-sm">{industry.description}</div>
                    <a
                      href={industry.link}
                      className="flex items-center gap-1.5 text-white font-bold text-sm sm:text-base hover:text-white/80 hover:translate-x-1 transition-all cursor-pointer group/link"
                      aria-label={`Learn more about ${industry.name}`}
                    >
                      Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>

                  {/* Default industry name (only visible when not hovered) */}
                  <div className={`relative z-20 text-base sm:text-lg font-semibold text-white transition-opacity duration-300 drop-shadow-lg px-2 sm:px-3 text-center leading-tight ${activeIndustry === industry.name ? 'opacity-0' : 'group-hover:opacity-0 group-active:opacity-0'
                    }`}>
                    {industry.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>

  );
};

export default Industries; 
