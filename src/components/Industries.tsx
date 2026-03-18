import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Industries = () => {
  const industries = [
    {
      id: 1,
      name: "FinTech",
      description: "Fraud detection, automated compliance, intelligent chatbots, and predictive analytics.",
      image: "/image/pages_img/workflow-automation.jpg",
      link: "/fintech",
      features: ["Fraud Detection", "Compliance", "AI Chatbots", "Predictive Analytics"]
    },
    {
      id: 2,
      name: "HealthTech",
      description: "Patient scheduling, workflow automation, AI diagnostics, and predictive health insights.",
      image: "/image/pages_img/hospitals-clinics.jpg",
      link: "/healthtech",
      features: ["Patient Scheduling", "Workflow Automation", "AI Diagnostics", "Predictive Analytics"]
    },
    {
      id: 3,
      name: "RetailTech",
      description: "Personalized recommendations, demand forecasting, AI shopping assistants, and visual search.",
      image: "/image/pages_img/predictive-analytics-hospital.jpg",
      link: "/retailtech",
      features: ["Recommendations", "Demand Forecasting", "AI Assistants", "Visual Search"]
    },
    {
      id: 4,
      name: "EdTech",
      description: "Personalized learning paths, AI tutoring, automated grading, and predictive analytics.",
      image: "/image/pages_img/wellness-personalized.jpg",
      link: "/edtech",
      features: ["Personalized Learning", "AI Tutors", "Auto Grading", "Learning Analytics"]
    },
    {
      id: 5,
      name: "FitTech",
      description: "Personalized workouts, wearable analytics, AI coaches, and nutrition optimization.",
      image: "/image/pages_img/wellness-personalized.jpg",
      link: "/fittech",
      features: ["Personalized Workouts", "Wearable Analytics", "AI Coaches", "Nutrition AI"]
    },
    {
      id: 6,
      name: "LegalTech",
      description: "Contract analysis, legal document search, compliance monitoring, and AI assistants.",
      image: "/image/pages_img/workflow-automation.jpg",
      link: "/legaltech",
      features: ["Contract Analysis", "Legal Search", "Compliance", "AI Assistants"]
    },
    {
      id: 7,
      name: "WealthTech",
      description: "Robo-advisory, client onboarding, predictive analytics, and wealth management chatbots.",
      image: "/image/pages_img/workflow-automation.jpg",
      link: "/wealthtech",
      features: ["Robo-Advisory", "Client Onboarding", "Predictive Analytics", "AI Chatbots"]
    },
    {
      id: 8,
      name: "IT & Software",
      description: "AI dev tools, intelligent IT support, DevOps automation, and enterprise software.",
      image: "/image/pages_img/workflow-automation.jpg",
      link: "/it-software",
      features: ["AI Dev Tools", "IT Support", "DevOps", "Enterprise Solutions"]
    }
  ];

  return (
    <section className="py-6 sm:py-8 md:py-12 ai-section">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        {/* Industries Transforming with AI Development Section */}
        <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 relative rounded-2xl sm:rounded-3xl ai-section">
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white leading-tight">
                AI <span className="gradient-text-ai">Industries</span>
              </h2>
              <div
                className="w-20 sm:w-24 h-1 sm:h-1.5 mx-auto mb-8 sm:mb-10 rounded-full"
                style={{ background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 50%, #0891b2 100%)' }}
              ></div>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed px-2 sm:px-0">
                Transforming industries with AI solutions across finance, healthcare, retail, education, fitness, legal, wealth management, and technology.
              </p>
            </div>

            {/* Mobile-first responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-gray-300 overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl">
              {industries.map((industry) => (
                <div
                  key={industry.id}
                  className="group relative border-b border-r border-gray-300 min-h-[180px] sm:min-h-[200px] md:min-h-[220px] flex items-center justify-center cursor-pointer overflow-hidden touch-manipulation"
                  style={{ minHeight: 'clamp(180px, 25vh, 220px)' }}
                >
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 transition-opacity duration-300 z-0"
                    loading="lazy"
                  />
                  {/* Default dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30 z-10 transition-all duration-300 group-hover:opacity-0 group-active:opacity-0"></div>

                  {/* Hover overlay with content - enhanced for touch */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-6 sm:py-8 z-20 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(135deg, rgba(30, 90, 255, 0.95) 0%, rgba(168, 85, 247, 0.95) 50%, rgba(236, 72, 153, 0.95) 100%)' }}>
                    <div className="text-xl sm:text-2xl font-black text-white mb-2 sm:mb-4 leading-tight tracking-tight">{industry.name}</div>
                    <div className="text-white text-sm sm:text-base font-bold mb-4 sm:mb-6 leading-relaxed px-2 sm:px-0 drop-shadow-sm">{industry.description}</div>
                    <a
                      href={industry.link}
                      className="flex items-center gap-1.5 text-white font-bold text-sm sm:text-base hover:translate-x-1 transition-transform cursor-pointer"
                      aria-label={`Learn more about ${industry.name}`}
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Default industry name (only visible when not hovered) */}
                  <div className="relative z-20 text-base sm:text-lg font-semibold text-white group-hover:opacity-0 group-active:opacity-0 transition-opacity duration-300 drop-shadow-lg px-2 sm:px-3 text-center leading-tight">
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