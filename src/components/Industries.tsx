import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Industries Transforming with AI Development Section */}
        <section className="py-16 px-6 lg:px-8 relative rounded-3xl">
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-1xl md:text-3xl font-bold tracking-tight text-gray-900">
              Industries Transformed by AI
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-medium">
                Empowering organizations across sectors to make smarter, data-driven decisions with advanced AI and machine learning.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-l border-gray-300 overflow-hidden rounded-2xl shadow-2xl">
              {industries.map((industry) => (
                <div
                  key={industry.id}
                  className="group relative border-b border-r border-gray-300 min-h-[200px] flex items-center justify-center cursor-pointer overflow-hidden"
                >
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 transition-opacity duration-300 z-0"
                  />
                  {/* Default dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30 z-10 transition-all duration-300 group-hover:opacity-0"></div>
                  {/* Hover overlay with content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 py-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'rgba(59, 130, 246, 0.95)'}}>
                    <div className="text-xl font-bold text-white mb-4">{industry.name}</div>
                    <div className="text-white text-sm font-normal mb-4">{industry.description}</div>
                    <a href={industry.link} className="inline-flex items-center gap-2 text-white font-semibold hover:translate-x-1 transition-transform text-sm">Learn More <span aria-hidden="true">→</span></a>
                  </div>
                  {/* Default industry name (only visible when not hovered) */}
                  <div className="relative z-20 text-lg font-semibold text-white group-hover:opacity-0 transition-opacity duration-300 drop-shadow-lg">
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