import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedHero from "../components/ui/AnimatedHero";
import AnimatedSection from "../components/ui/AnimatedSection";
import AnimatedCard from "../components/ui/AnimatedCard";
import AnimatedCarousel from "../components/ui/AnimatedCarousel";
import AnimatedFAQ from "../components/ui/AnimatedFAQ";

const GreenTechAI: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const useCases = useMemo(() => [
    {
      id: 1,
      title: "Renewable Energy Optimization",
      description: "AI optimizes solar and wind energy production, predicts weather patterns, and maximizes efficiency of renewable energy systems.",
      image: "/image/pages_img/Renewable-Energy-Optimization.jpg",
      alt: "AI Renewable Energy Optimization"
    },
    {
      id: 2,
      title: "Smart Grid Management",
      description: "Intelligent grid systems balance energy supply and demand, integrate renewable sources, and prevent power outages through predictive analytics.",
      image: "/image/pages_img/Smart-Grid-Management.jpg",
      alt: "AI Smart Grid Management"
    },
    {
      id: 3,
      title: "Carbon Footprint Tracking",
      description: "AI monitors and analyzes carbon emissions across operations, providing insights for sustainability improvements and compliance reporting.",
      image: "/image/pages_img/Carbon-Footprint-Tracking.jpg",
      alt: "AI Carbon Footprint Tracking"
    },
    {
      id: 4,
      title: "Waste Management Optimization",
      description: "AI-powered systems optimize waste collection routes, improve recycling processes, and reduce environmental impact through intelligent sorting.",
      image: "/image/pages_img/Waste-Management-Optimization.jpg",
      alt: "AI Waste Management"
    },
    {
      id: 5,
      title: "Precision Agriculture",
      description: "AI enables sustainable farming practices through soil monitoring, crop optimization, and resource-efficient irrigation systems.",
      image: "/image/pages_img/Precision-Agriculture.jpg",
      alt: "AI Precision Agriculture"
    },
    {
      id: 6,
      title: "Environmental Monitoring",
      description: "AI analyzes environmental data from sensors and satellites to track air quality, water pollution, and ecosystem health in real-time.",
      image: "/image/pages_img/Environmental-Monitoring.jpg",
      alt: "AI Environmental Monitoring"
    },
    {
      id: 7,
      title: "Sustainable Supply Chains",
      description: "AI optimizes supply chain operations to reduce emissions, minimize waste, and ensure sustainable sourcing practices.",
      image: "/image/pages_img/Sustainable-Supply-Chains.jpg",
      alt: "AI Sustainable Supply Chains"
    }
  ], []);

  const faqData = useMemo(() => [
    {
      id: 1,
      question: "What is GreenTech AI?",
      answer: "GreenTech AI combines artificial intelligence with environmental technology to create sustainable solutions that reduce carbon footprints, optimize resource usage, and promote environmental conservation."
    },
    {
      id: 2,
      question: "How does AI help with sustainability?",
      answer: "AI enhances sustainability by optimizing energy consumption, improving resource efficiency, predicting environmental impacts, and enabling data-driven decisions for greener operations."
    },
    {
      id: 3,
      question: "What are the benefits of AI in GreenTech?",
      answer: "AI reduces environmental impact, lowers costs, improves efficiency, enables predictive maintenance, and helps organizations meet sustainability goals and regulatory requirements."
    },
    {
      id: 4,
      question: "Are there challenges to implementing GreenTech AI?",
      answer: "Challenges include initial investment costs, data integration complexity, regulatory compliance, and ensuring accurate environmental impact measurements."
    },
    {
      id: 5,
      question: "Can AI help achieve net-zero goals?",
      answer: "Yes, AI provides the tools and insights needed to track emissions, optimize operations, and implement strategies that support net-zero and carbon reduction targets."
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
      title: "Environmental Impact Reduction",
      description: "AI optimizes operations to minimize carbon emissions, reduce waste, and improve resource efficiency across all business processes.",
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
      title: "Cost Savings",
      description: "AI-driven sustainability initiatives reduce energy costs, optimize resource usage, and create long-term financial benefits through efficiency gains.",
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
      description: "AI ensures adherence to environmental regulations, automates reporting, and provides audit trails for sustainability certifications.",
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
      title: "Predictive Analytics",
      description: "AI predicts environmental risks, optimizes maintenance schedules, and enables proactive sustainability management.",
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
      title: "Resource Optimization",
      description: "AI maximizes the efficiency of renewable energy systems, water usage, and material consumption through intelligent monitoring and control.",
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
      title: "Competitive Advantage",
      description: "AI-powered sustainability provides market differentiation, attracts environmentally conscious customers, and enhances brand reputation.",
      bgColor: "bg-blue-300/20",
      textColor: "text-blue-300",
      borderColor: "hover:border-blue-300"
    }
  ], []);

  const stats = useMemo(() => [
    {
      value: "3+",
      label: "Years of GreenTech AI Experience",
      description: "Over three years of specialized experience delivering AI solutions that drive environmental sustainability and operational efficiency."
    },
    {
      value: "15+",
      label: "GreenTech AI Projects",
      description: "Successfully delivered 15+ GreenTech AI projects, each designed to reduce environmental impact and improve sustainability outcomes."
    },
    {
      value: "25+",
      label: "AI Models Built",
      description: "Developed 25+ custom AI models for energy optimization, carbon tracking, and environmental monitoring."
    },
    {
      value: "10+",
      label: "Sustainability Partners",
      description: "Collaborated with 10+ organizations, driving measurable improvements in environmental performance and sustainability metrics."
    },
    {
      value: "🌍",
      label: "Global Environmental Impact",
      description: "Delivering scalable GreenTech AI solutions worldwide—contributing to a more sustainable future for all."
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
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <AnimatedHero
        title="AI In GreenTech"
        subtitle="Transform environmental sustainability with AI-powered solutions that optimize energy usage, reduce carbon footprints, and create a greener future."
        highlightText="GreenTech"
        backgroundImage="/image/pages_img/GreenTechAI.jpg"
        gradientFrom="from-blue-900"
        gradientVia="via-cyan-800"
        gradientTo="to-blue-900"
        buttonText="Talk to an Expert"
        buttonLink="mailto:sureshbeekhani26@gmail.com"
      />

      {/* Main Content Section */}
      <AnimatedSection className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-white/90">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Image */}
            <motion.div 
              className="relative flex justify-center lg:justify-start"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl blur-xl opacity-30"></div>
                <motion.img
                  src="/image/pages_img/AI-GreenTech.jpg"
                  alt="AI in GreenTech - Environmental Sustainability"
                  className="relative w-full max-w-md h-80 lg:h-96 object-cover rounded-2xl shadow-2xl border-4 border-white/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  loading="lazy"
                />
              </div>
            </motion.div>
            
            {/* Right: Content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-blue-900">
                  AI in <span className="text-green-700">Environmental Technology</span>
                </h2>
              </div>
              <p className="text-xl lg:text-2xl leading-relaxed text-gray-800 max-w-2xl">
                AI, including <span className="font-semibold text-green-700">machine learning</span> and <span className="font-semibold text-blue-700">predictive analytics</span>, is revolutionizing environmental sustainability—enabling smarter resource management, carbon reduction, and climate action.
              </p>
              <p className="text-lg lg:text-xl leading-relaxed text-gray-800 max-w-2xl">
                From renewable energy optimization to waste management, AI empowers organizations to achieve sustainability goals, reduce environmental impact, and create a more sustainable future.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* AI Capabilities and Benefits Section */}
      <AnimatedSection className="py-20 px-6 lg:px-8 bg-gradient-to-br from-green-900/90 via-blue-900/90 to-blue-800/90">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center space-y-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-green-300 to-blue-300 rounded-full"></div>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white">
              AI Capabilities & Environmental Impact
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Explore how AI and machine learning are transforming environmental sustainability and green technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedCard
                key={index}
                delay={index * 0.1}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className={`flex-shrink-0 w-12 h-12 ${benefit.bgColor} rounded-lg flex items-center justify-center group-hover:bg-opacity-40 transition-colors`}>
                    {benefit.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-200 leading-relaxed">{benefit.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Use Cases Section */}
      <AnimatedCarousel
        useCases={useCases}
        title="AI GreenTech Use Cases"
        subtitle="See how AI is reshaping environmental sustainability through innovative applications and measurable impact."
        accentColor="green"
      />

      {/* Why Choose Me Section */}
      <AnimatedSection className="py-20 px-6 lg:px-8 bg-gradient-to-br from-green-900/90 via-blue-900/90 to-blue-800/90">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center space-y-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-green-300 to-blue-300 rounded-full"></div>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white">
              Why Partner With Me
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Trusted expertise and a proven record of delivering transformative AI solutions for environmental sustainability.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {stats.map((stat, index) => (
              <AnimatedCard
                key={index}
                delay={index * 0.1}
                className="bg-white/90 border border-blue-100 p-6 flex flex-col items-center text-center space-y-3"
              >
                <span className="text-4xl font-extrabold text-green-600">{stat.value}</span>
                <h3 className="text-lg font-bold text-blue-900">{stat.label}</h3>
                <p className="text-gray-700 text-sm">{stat.description}</p>
              </AnimatedCard>
            ))}
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

export default GreenTechAI; 