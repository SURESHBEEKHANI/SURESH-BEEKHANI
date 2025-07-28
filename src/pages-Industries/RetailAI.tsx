import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedHero from "../components/ui/AnimatedHero";
import AnimatedSection from "../components/ui/AnimatedSection";
import AnimatedCard from "../components/ui/AnimatedCard";
import AnimatedCarousel from "../components/ui/AnimatedCarousel";
import AnimatedFAQ from "../components/ui/AnimatedFAQ";

const RetailAI: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const useCases = useMemo(() => [
    {
      id: 1,
      title: "Personalized Product Recommendations",
      description: "AI analyzes customer behavior and preferences to deliver highly targeted product suggestions, increasing conversion rates and customer satisfaction.",
      image: "/image/pages_img/Personalized-Product-Recommendations.jpg",
      alt: "AI Personalized Product Recommendations"
    },
    {
      id: 2,
      title: "Inventory Management & Demand Forecasting",
      description: "Machine learning predicts demand patterns, optimizes stock levels, and reduces waste through intelligent inventory management.",
      image: "/image/pages_img/Inventory-Management-Demand-Forecasting.jpg",
      alt: "AI Inventory Management"
    },
    {
      id: 3,
      title: "Dynamic Pricing Optimization",
      description: "AI-powered pricing strategies adjust prices in real-time based on demand, competition, and market conditions to maximize profitability.",
      image: "/image/pages_img/Dynamic-Pricing-Optimization.jpg",
      alt: "AI Dynamic Pricing"
    },
    {
      id: 4,
      title: "Customer Service Automation",
      description: "Intelligent chatbots and virtual assistants provide 24/7 customer support, handling inquiries and resolving issues efficiently.",
      image: "/image/pages_img/Customer-Service-Automation.jpg",
      alt: "AI Customer Service"
    },
    {
      id: 5,
      title: "Visual Search & Image Recognition",
      description: "AI enables customers to search for products using images, improving discovery and creating seamless shopping experiences.",
      image: "/image/pages_img/Visual-Search-Image-Recognition.jpg",
      alt: "AI Visual Search"
    },
    {
      id: 6,
      title: "Fraud Detection & Security",
      description: "AI systems detect fraudulent transactions and suspicious activities, protecting both retailers and customers from financial losses.",
      image: "/image/pages_img/Fraud-Detection-Security.jpg",
      alt: "AI Fraud Detection"
    },
    {
      id: 7,
      title: "Store Layout Optimization",
      description: "AI analyzes customer movement patterns to optimize store layouts, product placement, and traffic flow for maximum sales.",
      image: "/image/pages_img/Store-Layout-Optimization.jpg",
      alt: "AI Store Layout"
    }
  ], []);

  const faqData = useMemo(() => [
    {
      id: 1,
      question: "What is Retail AI?",
      answer: "Retail AI leverages artificial intelligence to enhance shopping experiences, optimize operations, and drive business growth through personalized recommendations, inventory management, and intelligent automation."
    },
    {
      id: 2,
      question: "How does AI improve retail operations?",
      answer: "AI enhances retail by personalizing customer experiences, optimizing inventory, automating pricing, improving customer service, detecting fraud, and providing data-driven insights for better decision-making."
    },
    {
      id: 3,
      question: "What are the benefits of AI in retail?",
      answer: "AI increases sales, reduces costs, improves customer satisfaction, optimizes inventory, enhances security, and provides competitive advantages through data-driven insights and automation."
    },
    {
      id: 4,
      question: "Are there challenges to implementing AI in retail?",
      answer: "Challenges include data integration, privacy concerns, initial investment costs, staff training, and ensuring seamless customer experiences while maintaining human touch."
    },
    {
      id: 5,
      question: "Can AI replace human retail staff?",
      answer: "AI is designed to augment—not replace—human staff, automating routine tasks while enabling employees to focus on high-value customer interactions and complex problem-solving."
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
      title: "Enhanced Customer Experience",
      description: "AI delivers personalized shopping experiences, intelligent recommendations, and seamless interactions that increase customer satisfaction and loyalty.",
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
      title: "Operational Efficiency",
      description: "AI automates routine tasks, optimizes inventory management, and streamlines operations—reducing costs and improving productivity.",
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
      title: "Revenue Growth",
      description: "AI-driven insights and automation increase sales through better targeting, optimized pricing, and improved customer engagement.",
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
      title: "Cost Reduction",
      description: "AI reduces operational costs through automated processes, optimized inventory, and improved resource allocation.",
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
      title: "Data-Driven Insights",
      description: "AI analyzes customer behavior and market trends to provide actionable insights for strategic decision-making.",
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
      description: "AI provides retailers with innovative capabilities that differentiate their offerings and create sustainable competitive advantages.",
      bgColor: "bg-blue-300/20",
      textColor: "text-blue-300",
      borderColor: "hover:border-blue-300"
    }
  ], []);

  const stats = useMemo(() => [
    {
      value: "3+",
      label: "Years of Retail AI Experience",
      description: "Over three years of specialized experience delivering AI solutions that transform retail operations and customer experiences."
    },
    {
      value: "15+",
      label: "Retail AI Projects",
      description: "Successfully delivered 15+ retail AI projects, each designed to solve unique business challenges and drive measurable growth."
    },
    {
      value: "25+",
      label: "AI Models Built",
      description: "Developed 25+ custom AI models for recommendations, inventory optimization, and customer analytics."
    },
    {
      value: "10+",
      label: "Retail Partners",
      description: "Collaborated with 10+ retail organizations, driving measurable improvements in sales, efficiency, and customer satisfaction."
    },
    {
      value: "🌍",
      label: "Global Retail Impact",
      description: "Delivering scalable retail AI solutions worldwide—empowering businesses to compete in the digital marketplace."
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
        title="AI In Retail"
        subtitle="Transform retail operations with AI-powered personalization, intelligent automation, and data-driven insights that drive growth and customer satisfaction."
        highlightText="Retail"
        backgroundImage="/image/pages_img/RetailAI.jpg"
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
                  src="/image/pages_img/AI-Retail.jpg"
                  alt="AI in Retail - Digital Transformation"
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
                  AI in <span className="text-green-700">Retail Technology</span>
                </h2>
              </div>
              <p className="text-xl lg:text-2xl leading-relaxed text-gray-800 max-w-2xl">
                AI, including <span className="font-semibold text-green-700">machine learning</span> and <span className="font-semibold text-blue-700">predictive analytics</span>, is revolutionizing retail—enabling personalized experiences, intelligent automation, and data-driven decision-making.
              </p>
              <p className="text-lg lg:text-xl leading-relaxed text-gray-800 max-w-2xl">
                From inventory optimization to customer service automation, AI empowers retailers to deliver exceptional experiences, increase sales, and stay competitive in the digital marketplace.
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
              AI Capabilities & Retail Impact
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Explore how AI and machine learning are transforming retail operations and customer experiences.
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
        title="AI Retail Use Cases"
        subtitle="See how AI is reshaping retail through innovative applications and measurable business impact."
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
              Trusted expertise and a proven record of delivering transformative AI solutions for the retail sector.
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

export default RetailAI; 