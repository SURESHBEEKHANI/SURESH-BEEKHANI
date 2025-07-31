import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Industries = () => {
  const industries = [
    {
      id: 1,
      name: "HealthTech AI",
      description: "Revolutionizing healthcare with AI-powered diagnostics and personalized patient care.",
      image: "/image/pages_img/healthtechai.jpg",
      link: "/HealthTechAI",
      features: ["Medical Image Analysis", "Predictive Diagnostics", "Virtual Health Assistants"]
    },
    {
      id: 2,
      name: "FinTech AI",
      description: "Transforming financial services with intelligent automation and risk assessment.",
      image: "/image/pages_img/fintech.jpg",
      link: "/FinTechAI",
      features: ["Fraud Detection", "Credit Scoring", "Algorithmic Trading"]
    },
    {
      id: 3,
      name: "EdTech AI",
      description: "Enhancing education through personalized learning and intelligent tutoring systems.",
      image: "/image/pages_img/EdTechAI.avif",
      link: "/EdTechAI",
      features: ["Personalized Learning", "Adaptive Assessment", "Intelligent Tutoring"]
    },
    {
      id: 4,
      name: "GreenTech AI",
      description: "Driving sustainability with AI-powered environmental monitoring and energy optimization.",
      image: "/image/pages_img/greentech.jpg",
      link: "/GreenTechAI",
      features: ["Climate Forecasting", "Energy Optimization", "Carbon Tracking"]
    },
    {
      id: 5,
      name: "Retail AI",
      description: "Revolutionizing retail with intelligent inventory management and personalized recommendations.",
      image: "/image/pages_img/retail.jpg",
      link: "/RetailAI",
      features: ["Inventory Optimization", "Personalized Recommendations", "Customer Segmentation"]
    },
    {
      id: 6,
      name: "E-Commerce AI",
      description: "Powering online commerce with smart product recommendations and dynamic pricing.",
      image: "/image/pages_img/E-Commerce.jpg",
      link: "/E-Commerce",
      features: ["Product Recommendations", "Dynamic Pricing", "Customer Analytics"]
    },
    {
      id: 7,
      name: "Diagnostics AI",
      description: "Advancing medical diagnostics with AI-powered image analysis and early disease detection.",
      image: "/image/pages_img/Diagnostics.jpg",
      link: "/DiagnosticsAI",
      features: ["Medical Imaging", "Early Detection", "Automated Screening"]
    },
    {
      id: 8,
      name: "HIPAA Compliance",
      description: "Ensuring data security and regulatory compliance in healthcare with AI-powered privacy protection.",
      image: "/image/pages_img/HIPAA.avif",
      link: "/HIPAACompliance",
      features: ["Data Protection", "Audit Automation", "Privacy Controls"]
    }
  ];

  return (
    <section className="py-6 sm:py-8 md:py-12">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        {/* Industries Transforming with AI Development Section */}
        <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 relative rounded-2xl sm:rounded-3xl">
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-10 md:mb-12">
              <Badge variant="outline" className="mb-2 px-3 sm:px-4 py-1 bg-primary/10 text-primary font-medium text-sm sm:text-base">
                Industries
              </Badge>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-gray-900 leading-tight">
                Industries Transformed by AI
              </h2>
              <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-primary mx-auto mb-6 sm:mb-8"></div>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed px-2 sm:px-0">
                Empowering organizations across sectors to make smarter, data-driven decisions with advanced AI and machine learning.
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
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3 sm:px-4 md:px-6 py-6 sm:py-8 z-20 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300" 
                       style={{background: 'rgba(59, 130, 246, 0.95)'}}>
                    <div className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4 leading-tight">{industry.name}</div>
                    <div className="text-white text-xs sm:text-sm font-normal mb-3 sm:mb-4 leading-relaxed px-1 sm:px-0">{industry.description}</div>
                    <a 
                      href={industry.link} 
                      className="inline-flex items-center gap-1 sm:gap-2 text-white font-semibold hover:translate-x-1 transition-transform text-xs sm:text-sm py-1 px-2 sm:py-2 sm:px-3 rounded-md hover:bg-white/20 active:scale-95 touch-manipulation"
                      aria-label={`Learn more about ${industry.name}`}
                    >
                      Learn More <span aria-hidden="true">→</span>
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