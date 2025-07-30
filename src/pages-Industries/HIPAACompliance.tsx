import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedHero from "../components/ui/AnimatedHero";
import AnimatedSection from "../components/ui/AnimatedSection";
import AnimatedCard from "../components/ui/AnimatedCard";
import AnimatedCarousel from "../components/ui/AnimatedCarousel";
import AnimatedFAQ from "../components/ui/AnimatedFAQ";

// Color configuration for better maintainability
const CARD_COLORS = [
  "from-cyan-50 to-blue-100 border-cyan-200",
  "from-green-50 to-emerald-100 border-green-200", 
  "from-purple-50 to-violet-100 border-purple-200",
  "from-yellow-50 to-amber-100 border-yellow-200",
  "from-pink-50 to-rose-100 border-pink-200",
  "from-indigo-50 to-blue-100 border-indigo-200"
];

const ICON_COLORS = [
  "from-cyan-500 to-blue-600",
  "from-green-500 to-emerald-600",
  "from-purple-500 to-violet-600", 
  "from-yellow-500 to-amber-600",
  "from-pink-500 to-rose-600",
  "from-indigo-500 to-blue-600"
];

const HIPAACompliance: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const useCases = useMemo(() => [
    {
      id: 1,
      title: "Automated Compliance Monitoring",
      description: "AI continuously monitors systems for HIPAA violations, automatically detecting and flagging potential security breaches and compliance issues.",
      image: "/image/pages_img/Automated-Compliance-Monitoring.jpg",
      alt: "AI Automated HIPAA Compliance Monitoring"
    },
    {
      id: 2,
      title: "Data Access Control & Audit",
      description: "AI-powered systems track and analyze data access patterns, ensuring only authorized personnel can access sensitive patient information.",
      image: "/image/pages_img/Data-Access-Control-Audit.jpg",
      alt: "AI Data Access Control"
    },
    {
      id: 3,
      title: "Risk Assessment & Management",
      description: "Machine learning models identify potential security risks and vulnerabilities, enabling proactive compliance management and threat prevention.",
      image: "/image/pages_img/Risk-Assessment-Management.jpg",
      alt: "AI Risk Assessment"
    },
    {
      id: 4,
      title: "Secure Communication Systems",
      description: "AI ensures all patient communications are encrypted and compliant, automatically detecting and preventing unauthorized data transmission.",
      image: "/image/pages_img/Secure-Communication-Systems.jpg",
      alt: "AI Secure Communication"
    },
    {
      id: 5,
      title: "Incident Response Automation",
      description: "AI systems automatically detect and respond to potential HIPAA violations, minimizing response times and reducing breach impact.",
      image: "/image/pages_img/Incident-Response-Automation.jpg",
      alt: "AI Incident Response"
    },
    {
      id: 6,
      title: "Compliance Reporting & Analytics",
      description: "AI generates comprehensive compliance reports and provides analytics to demonstrate HIPAA adherence and identify improvement areas.",
      image: "/image/pages_img/Compliance-Reporting-Analytics.jpg",
      alt: "AI Compliance Reporting"
    },
    {
      id: 7,
      title: "Training & Awareness Programs",
      description: "AI-powered training systems ensure staff understand HIPAA requirements and maintain ongoing compliance awareness.",
      image: "/image/pages_img/Training-Awareness-Programs.jpg",
      alt: "AI Training Programs"
    }
  ], []);

  const faqData = useMemo(() => [
    {
      id: 1,
      question: "What is HIPAA Compliance?",
      answer: "HIPAA (Health Insurance Portability and Accountability Act) compliance ensures the protection of patient health information through security measures, privacy controls, and regulatory adherence."
    },
    {
      id: 2,
      question: "How does AI help with HIPAA compliance?",
      answer: "AI enhances HIPAA compliance by automating monitoring, detecting violations, managing access controls, and providing real-time security insights to protect patient data."
    },
    {
      id: 3,
      question: "What are the benefits of AI in HIPAA compliance?",
      answer: "AI reduces compliance costs, improves accuracy, enables proactive threat detection, automates reporting, and ensures continuous monitoring of security measures."
    },
    {
      id: 4,
      question: "Are there challenges to implementing AI for HIPAA?",
      answer: "Challenges include ensuring AI systems themselves are compliant, maintaining human oversight, integrating with existing systems, and balancing automation with privacy requirements."
    },
    {
      id: 5,
      question: "Can AI replace human compliance officers?",
      answer: "AI augments human compliance efforts by automating routine tasks and providing insights, while human expertise remains essential for complex decisions and oversight."
    }
  ], []);

  const benefits = useMemo(() => [
    {
      icon: (
        <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 2.25c.38-1.13 2.12-1.13 2.5 0l.2.6a1.25 1.25 0 0 0 1.7.77l.56-.25c1.08-.48 2.13.57 1.65 1.65l-.25.56a1.25 1.25 0 0 0 .77 1.7l.6.2c1.13.38 1.13 2.12 0 2.5l-.6.2a1.25 1.25 0 0 0-.77 1.7l.25.56c.48 1.08-.57 2.13-1.65 1.65l-.56-.25a1.25 1.25 0 0 0-1.7.77l-.2.6c-.38 1.13-2.12 1.13-2.5 0l-.2-.6a1.25 1.25 0 0 0-1.7-.77l-.56.25c-1.08.48-2.13-.57-1.65-1.65l.25-.56a1.25 1.25 0 0 0-.77-1.7l-.6-.2c-1.13-.38-1.13-2.12 0-2.5l.6-.2a1.25 1.25 0 0 0 .77-1.7l-.25-.56c-.48-1.08.57-2.13 1.65-1.65l.56.25a1.25 1.25 0 0 0 1.7-.77l.2-.6z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      title: "Enhanced Security",
      description: "AI provides continuous monitoring and threat detection, ensuring patient data remains protected and HIPAA requirements are consistently met.",
      bgColor: "bg-green-300/20",
      textColor: "text-green-300",
      borderColor: "hover:border-green-300"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.21 0-4 1.343-4 3s1.79 3 4 3 4 1.343 4 3-1.79 3-4 3m0-12v2m0 14v-2" />
        </svg>
      ),
      title: "Cost Reduction",
      description: "AI automates compliance tasks, reduces manual monitoring costs, and prevents expensive violations through proactive detection.",
      bgColor: "bg-blue-300/20",
      textColor: "text-blue-300",
      borderColor: "hover:border-blue-300"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13l2-2 4 4 8-8 2 2" />
        </svg>
      ),
      title: "Regulatory Compliance",
      description: "AI ensures consistent adherence to HIPAA regulations, automates reporting, and provides audit trails for compliance verification.",
      bgColor: "bg-green-300/20",
      textColor: "text-green-300",
      borderColor: "hover:border-green-300"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8" />
        </svg>
      ),
      title: "Proactive Risk Management",
      description: "AI identifies potential security risks before they become violations, enabling preventive measures and continuous improvement.",
      bgColor: "bg-blue-300/20",
      textColor: "text-blue-300",
      borderColor: "hover:border-blue-300"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9 9 0 1 0 21 12h-9z" />
        </svg>
      ),
      title: "Automated Monitoring",
      description: "AI provides 24/7 monitoring of systems and data access, ensuring immediate detection and response to potential violations.",
      bgColor: "bg-green-300/20",
      textColor: "text-green-300",
      borderColor: "hover:border-green-300"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ),
      title: "Trust & Reputation",
      description: "AI-powered compliance demonstrates commitment to patient privacy, building trust and maintaining organizational reputation.",
      bgColor: "bg-blue-300/20",
      textColor: "text-blue-300",
      borderColor: "hover:border-blue-300"
    }
  ], []);

  const stats = useMemo(() => [
    {
      value: "3+",
      label: "HIPAA AI Experience",
      description: "Specialized experience delivering AI solutions for HIPAA compliance and patient data protection."
    },
    {
      value: "15+",
      label: "HIPAA AI Projects",
      description: "Delivered HIPAA compliance AI projects designed to protect patient privacy and meet regulatory requirements."
    },
    {
      value: "25+",
      label: "AI Models Built",
      description: "Custom AI models for compliance monitoring, threat detection, and security analytics."
    },
    {
      value: "10+",
      label: "Healthcare Partners",
      description: "Collaborated with healthcare organizations ensuring HIPAA requirements and patient data protection."
    },
    {
      value: "🌍",
      label: "Global Compliance Impact",
      description: "Scalable HIPAA compliance AI solutions worldwide protecting patient privacy."
    }
  ], []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === useCases.length - 3 ? 0 : prevIndex + 1
    );
  }, [useCases.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? useCases.length - 3 : prevIndex - 1
    );
  }, [useCases.length]);

  const toggleFAQ = useCallback((id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  }, [openFAQ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 text-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/HIPAA.avif')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-white space-y-8">
            <div className="w-full">
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight drop-shadow-lg w-full">
                AI in HIPAA Compliance
              </h1>
              <p className="text-base md:text-lg text-gray-100 w-full whitespace-pre-line mt-4">
                Transform healthcare data protection with AI-powered compliance monitoring, automated security controls, and intelligent threat detection that ensures patient privacy.
              </p>
              <div className="flex space-x-4 pt-6 w-full">
                <a
                  href="/#contact"
                  className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300 text-lg"
                >
                  Talk to an Expert
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            {/* Optionally, you can add an image or illustration here if needed */}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <AnimatedSection className="relative w-full flex items-center justify-center overflow-hidden bg-gradient-to-tr from-purple-50 to-white">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <motion.div 
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl blur-2xl opacity-30"></div>
                <motion.img
                  src="/image/pages_img/AI-HIPAA.jpg"
                  alt="AI in HIPAA Compliance - Data Protection"
                  className="relative w-full max-w-md h-80 lg:h-96 object-cover rounded-2xl shadow-2xl border-4 border-white/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  loading="lazy"
                />
              </div>
            </motion.div>
            
            {/* Right: Content */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-gray-900">
                AI in Healthcare Data Protection
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl">
                AI, including and predictive analytics, is revolutionizing HIPAA compliance—enabling automated monitoring, intelligent threat detection, and proactive data protection.
              </p>
              <p className="text-lg text-gray-700 max-w-2xl">
                From automated compliance monitoring to secure communication systems, AI empowers healthcare organizations to maintain patient privacy, meet regulatory requirements, and build trust through robust data protection.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* AI Capabilities and Benefits Section */}
      <AnimatedSection className="relative w-full flex items-center justify-center overflow-hidden bg-gradient-to-tr from-purple-50 to-white">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-1">AI Capabilities & Compliance Impact</h2>
            <div className="flex justify-center mb-0">
              <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-xl text-gray-700">
              Explore how AI and machine learning are transforming HIPAA compliance and healthcare data protection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const cardColor = CARD_COLORS[index % CARD_COLORS.length];
              const iconColor = ICON_COLORS[index % ICON_COLORS.length];
              
              return (
                <div key={index} className={`bg-gradient-to-br ${cardColor} rounded-2xl p-8 shadow-xl border flex flex-col gap-4 items-center`}>
                  <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${iconColor} rounded-xl flex items-center justify-center mb-2 mx-auto`}>
                    {benefit.icon}
                  </div>
                  <h3 className="font-semibold text-base text-gray-900 mb-2 text-center w-full">{benefit.title}</h3>
                  <p className="text-gray-800 text-center">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* Use Cases Section */}
      <AnimatedCarousel
        useCases={useCases}
        title="AI HIPAA Compliance Use Cases"
        subtitle="See how AI is reshaping healthcare data protection through innovative applications and measurable compliance impact."
        accentColor="green"
      />

      {/* Why Choose Me Section */}
      <AnimatedSection className="relative w-full flex items-center justify-center overflow-hidden bg-gradient-to-tr from-purple-50 to-white">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-1">Why Partner With Me</h2>
            <div className="flex justify-center mb-0">
              <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <p className="text-xl text-gray-700">
              Trusted expertise and a proven record of delivering transformative AI solutions for healthcare data protection and HIPAA compliance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {stats.map((stat, index) => {
              const cardColor = CARD_COLORS[index % CARD_COLORS.length];
              const iconColor = ICON_COLORS[index % ICON_COLORS.length];
              
              return (
                <div key={index} className={`bg-gradient-to-br ${cardColor} rounded-2xl p-8 shadow-xl border flex flex-col items-center gap-4`}>
                  <span className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${iconColor} text-white mb-2`}>
                    <span className="text-2xl">{stat.value}</span>
                  </span>
                  <span className="font-bold text-gray-900 text-lg text-center">{stat.label}</span>
                  <p className="text-gray-800 text-center">{stat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedFAQ
        faqData={faqData}
        title="Frequently Asked Questions"
        accentColor="green"
      />
      
      <Footer />
    </div>
  );
};

export default HIPAACompliance;