import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedHero from "../components/ui/AnimatedHero";
import AnimatedSection from "../components/ui/AnimatedSection";
import AnimatedCard from "../components/ui/AnimatedCard";
import AnimatedCarousel from "../components/ui/AnimatedCarousel";
import AnimatedFAQ from "../components/ui/AnimatedFAQ";

const ECommerceAI: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const useCases = useMemo(() => [
    {
      id: 0,
      title: "Abandoned Cart Recovery",
      description: "Leverage AI to identify shoppers who abandon their carts and automatically deliver tailored emails or incentives, driving higher conversion rates and recapturing lost revenue.",
      image: "/image/pages_img/Abandoned-Cart-Recovery.png",
      alt: "AI-Powered Abandoned Cart Recovery"
    },
    {
      id: 1,
      title: "Automated Product Tagging",
      description: "Automatically classify and tag products using AI-driven image and text analysis, enhancing product discoverability and boosting search performance.",
      image: "/image/pages_img/Automated-Product-Tagging.jpg",
      alt: "Automated Product Tagging with AI"
    },
    {
      id: 2,
      title: "Voice Commerce",
      description: "Enable seamless, hands-free shopping experiences by integrating AI-powered voice assistants and smart speaker capabilities into your storefront.",
      image: "/image/pages_img/Voice-Commerce.webp",
      alt: "Voice-Enabled Commerce Solutions"
    },
    {
      id: 3,
      title: "AI-Powered Product Descriptions",
      description: "Generate compelling, SEO-optimized product descriptions at scale, saving time and ensuring every listing stands out in search results.",
      image: "/image/pages_img/Product-Descriptions.jpg",
      alt: "Automated Product Description Generation"
    },
    {
      id: 4,
      title: "Return Prediction & Management",
      description: "Predict return likelihood and streamline reverse logistics with AI, reducing costs and improving customer satisfaction through proactive management.",
      image: "/image/pages_img/Return-Prediction-Management.jpg",
      alt: "AI-Driven Return Management"
    },
    {
      id: 5,
      title: "AI-Driven A/B Testing",
      description: "Continuously optimize your site's layout, banners, and promotions with AI-powered experimentation for maximum engagement and sales uplift.",
      image: "/image/pages_img/AI-Driven-Testing.jpg",
      alt: "AI-Driven A/B Testing for E-Commerce"
    },
    {
      id: 6,
      title: "Personalized Email Campaigns",
      description: "Boost open and conversion rates by using AI to segment audiences and deliver highly relevant, personalized email content at scale.",
      image: "/image/pages_img/Customer-Segmentation.jpg",
      alt: "AI-Personalized Email Marketing"
    },
    {
      id: 7,
      title: "Customer Lifetime Value Prediction",
      description: "Identify and nurture your most valuable customers with AI-driven insights, enabling targeted retention and loyalty strategies that maximize long-term revenue.",
      image: "/image/pages_img/Customer-Lifetime-Value-Prediction.jpg",
      alt: "Customer Lifetime Value Analytics"
    },
    {
      id: 8,
      title: "Automated Review Moderation",
      description: "Ensure trust and compliance by automatically filtering and moderating product reviews, maintaining high-quality, authentic feedback on your platform.",
      image: "/image/pages_img/Automated-Review-Moderation.jpg",
      alt: "AI Review Moderation"
    },
    {
      id: 9,
      title: "Intelligent Sizing & Fit Recommendations",
      description: "Reduce returns and increase satisfaction by providing AI-powered, data-driven sizing and fit suggestions tailored to each shopper.",
      image: "/image/pages_img/Intelligent-Sizing-Fit-Recommendations.png",
      alt: "AI Sizing and Fit Recommendations"
    },
  ], []);

  const faqData = useMemo(() => [
    {
      id: 1,
      question: "What is E-Commerce AI?",
      answer: "E-Commerce AI harnesses artificial intelligence to transform online retail—enabling personalized shopping, automating operations, and delivering actionable insights that drive business growth."
    },
    {
      id: 2,
      question: "How does AI improve online shopping?",
      answer: "AI elevates the shopping experience by personalizing recommendations, automating support, optimizing pricing, detecting fraud, and streamlining logistics—resulting in higher sales and customer satisfaction."
    },
    {
      id: 3,
      question: "Is AI safe for handling customer data?",
      answer: "With robust security and privacy protocols, AI can securely process and analyze customer data, helping prevent fraud and safeguard sensitive information."
    },
    {
      id: 4,
      question: "Can AI help reduce cart abandonment?",
      answer: "Absolutely. AI pinpoints abandonment triggers and delivers timely, personalized reminders or offers, motivating customers to complete their purchases."
    },
    {
      id: 5,
      question: "What are the benefits of AI for e-commerce businesses?",
      answer: "AI empowers e-commerce brands to operate more efficiently, increase sales, delight customers, cut costs, and unlock data-driven strategies for sustainable growth."
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
      title: "Operational Efficiency",
      description: "Automate routine workflows and streamline operations with AI, freeing your team to focus on strategic growth while reducing manual overhead.",
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
      description: "Drive profitability by leveraging AI to cut operational costs, optimize resource allocation, and eliminate inefficiencies across your business.",
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
      title: "Enhanced Customer Experience",
      description: "Deliver hyper-personalized shopping, instant support, and proactive service—building loyalty and exceeding customer expectations at every touchpoint.",
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
      title: "Revenue Growth",
      description: "Accelerate sales with AI-powered recommendations, dynamic pricing, and precision marketing that convert browsers into loyal buyers.",
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
      title: "Inventory Optimization",
      description: "Predict demand, optimize stock levels, and minimize waste with AI-driven inventory management—ensuring products are always available when customers need them.",
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
      description: "Stay ahead of the curve by adopting AI for innovation, operational excellence, and superior customer engagement in a rapidly evolving market.",
      bgColor: "bg-blue-300/20",
      textColor: "text-blue-300",
      borderColor: "hover:border-blue-300"
    }
  ], []);

  const stats = useMemo(() => [
    {
      value: "3+",
      label: "Years of Experience",
      description: "Over 3 years of hands-on experience in E-Commerce AI development, delivering impactful solutions for online retailers."
    },
    {
      value: "20+",
      label: "E-Commerce Projects",
      description: "Successfully delivered 20+ E-Commerce AI projects, each tailored to unique business needs and challenges."
    },
    {
      value: "30+",
      label: "AI Models Built",
      description: "Developed 30+ custom AI models for product recommendations, dynamic pricing, and customer analytics."
    },
    {
      value: "10+",
      label: "Happy Clients",
      description: "Partnered with 10+ e-commerce businesses, delivering measurable improvements in sales and efficiency."
    },
    {
      value: "🌍",
      label: "Global Reach",
      description: "Providing E-Commerce AI solutions to clients and businesses worldwide, supporting scalable and innovative retail."
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
        title="AI In E-Commerce"
        subtitle="AI is transforming e-commerce by personalizing shopping, optimizing operations, and delivering data-driven insights for retailers and customers alike."
        highlightText="E-Commerce"
        backgroundImage="/image/pages_img/E-Commerce.jpg"
        gradientFrom="from-blue-800/90"
        gradientVia="via-green-700/90"
        gradientTo="to-blue-900/90"
        buttonText="Talk to an Expert"
        buttonLink="mailto:sureshbeekhno26@gmail.com"
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
                  src="/image/pages_img/AI-in-E-Commerce.png"
                  alt="AI in E-Commerce Illustration"
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
                  AI in <span className="text-green-700">E-Commerce</span>
                </h2>
              </div>
              <p className="text-xl lg:text-2xl leading-relaxed text-gray-800 max-w-2xl">
                AI, including <span className="font-semibold text-green-700">machine learning</span> and <span className="font-semibold text-blue-700">predictive analytics</span>, is revolutionizing e-commerce enabling personalized shopping, automating tasks, and providing actionable insights for better business outcomes.
              </p>
              <p className="text-lg lg:text-xl leading-relaxed text-gray-800 max-w-2xl">
                From dynamic pricing to intelligent customer service, AI technologies empower retailers to boost sales, improve efficiency, and deliver exceptional customer experiences.
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
              Capabilities and Benefits
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Discover the key advantages of implementing AI and ML in E-Commerce
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
        title="AI E-Commerce Use Cases"
        subtitle="Explore how AI is revolutionizing e-commerce across various applications"
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
              Why Choose Me
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Proven expertise and track record in E-Commerce AI development and deployment
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

export default ECommerceAI; 