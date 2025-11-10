import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Industries = () => {
  const industries = [
    {
      id: 1,
      name: "Hospitals & Clinics",
      description: "Patient scheduling, workflow automation, AI chatbots, and predictive analytics.",
      image: "/image/pages_img/hospitals-clinics.jpg",
      link: "/HospitalsClinics",
      features: ["Patient Scheduling", "Workflow Automation", "AI Chatbots", "Predictive Analytics"]
    },
    {
      id: 2,
      name: "Telemedicine & Digital Health",
      description: "Symptom triage, remote monitoring dashboards, and predictive health insights.",
      image: "/image/pages_img/telemedicine-digital.jpg",
      link: "/TelemedicineDigitalHealth",
      features: ["Symptom Triage", "Remote Monitoring", "Predictive Health Insights"]
    },
    {
      id: 3,
      name: "Mental Health & Wellness",
      description: "AI counseling chatbots, sentiment analysis, and personalized wellness solutions.",
      image: "/image/pages_img/mental-wellness.jpg",
      link: "/MentalHealthWellness",
      features: ["AI Counseling Chatbots", "Sentiment Analysis", "Personalized Wellness"]
    },
    {
      id: 4,
      name: "Medical Imaging & Diagnostics",
      description: "AI-assisted X-ray/MRI/CT analysis, anomaly detection, and radiologist workflow integration.",
      image: "/image/pages_img/medical-diagnostics.jpg",
      link: "/MedicalImagingDiagnostics",
      features: ["X-ray/MRI/CT Analysis", "Anomaly Detection", "Workflow Integration"]
    },
    {
      id: 5,
      name: "Drug Discovery & Biotech Labs",
      description: "Molecule prediction models, clinical trial analytics, and precision medicine support.",
      image: "/image/pages_img/drug-biotech.jpg",
      link: "/DrugDiscoveryBiotech",
      features: ["Molecule Prediction", "Clinical Trial Analytics", "Precision Medicine"]
    },
    {
      id: 6,
      name: "Genomics & Personalized Medicine",
      description: "Genomic risk analysis, disease prediction, and AI-driven treatment recommendations.",
      image: "/image/pages_img/genomics-personalized.jpg",
      link: "/GenomicsPersonalizedMedicine",
      features: ["Genomic Risk Analysis", "Disease Prediction", "Treatment Recommendations"]
    },
    {
      id: 7,
      name: "Healthcare IoT & Smart Devices",
      description: "IoT data analytics, edge AI for hospitals, and home care device integration.",
      image: "/image/pages_img/healthcare-iot.jpg",
      link: "/HealthcareIoTSmartDevices",
      features: ["IoT Data Analytics", "Edge AI", "Home Care Integration"]
    },
    {
      id: 8,
      name: "Health Data Privacy & Security",
      description: "Federated learning, anomaly detection, and HIPAA-compliant AI platforms.",
      image: "/image/pages_img/health-privacy-security.jpg",
      link: "/HealthDataPrivacySecurity",
      features: ["Federated Learning", "Anomaly Detection", "HIPAA Compliance"]
    }
  ];

  return (
    <section className="py-6 sm:py-8 md:py-12 ai-section">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        {/* Industries Transforming with AI Development Section */}
        <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 relative rounded-2xl sm:rounded-3xl ai-section">
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-10 md:mb-12">
              <Badge 
                variant="outline" 
                className="mb-2 px-3 sm:px-4 py-1 font-medium text-sm sm:text-base border-[#00C2CB]/30"
                style={{ background: 'linear-gradient(135deg, rgba(30, 90, 255, 0.2) 0%, rgba(0, 194, 203, 0.2) 50%, rgba(113, 239, 163, 0.2) 100%)', color: '#00C2CB' }}
              >
                Industries
              </Badge>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight">
                AI Healthcare <span className="gradient-text">Industries</span>
              </h2>
              <div 
                className="w-16 sm:w-20 h-0.5 sm:h-1 mx-auto mb-6 sm:mb-8"
                style={{ background: 'linear-gradient(135deg, #1E5AFF 0%, #00C2CB 50%, #71EFA3 100%)' }}
              ></div>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed px-2 sm:px-0">
                Transforming healthcare with cutting-edge AI solutions across diagnostics, patient care, drug discovery, and secure data management.
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
                    style={{ background: 'rgba(59, 130, 246, 0.95)' }}>
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