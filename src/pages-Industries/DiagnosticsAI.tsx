import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedHero from "../components/ui/AnimatedHero";
import AnimatedSection from "../components/ui/AnimatedSection";
import AnimatedCard from "../components/ui/AnimatedCard";
import AnimatedCarousel from "../components/ui/AnimatedCarousel";
import AnimatedFAQ from "../components/ui/AnimatedFAQ";

const DiagnosticsAI: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const useCases = useMemo(() => [
    {
      id: 0,
      title: "Medical Image Analysis",
      description: "AI algorithms analyze X-rays, MRIs, and CT scans to detect anomalies such as tumors, fractures, and infections with high accuracy.",
      image: "/image/pages_img/Medical-Image-Analysis.webp",
      alt: "Medical Image Analysis",
    },
    {
      id: 1,
      title: "Early Disease Detection",
      description: "Machine learning models identify early signs of diseases like cancer, diabetes, and cardiovascular conditions, enabling timely intervention.",
      image: "/image/pages_img/Early-Disease-Detection.jpg",
      alt: "Early Disease Detection",
    },
    {
      id: 2,
      title: "Predictive Diagnostics",
      description: "AI predicts patient risk factors and potential health issues by analyzing electronic health records and lifestyle data.",
      image: "/image/pages_img/Predictive-Diagnostics.avif",
      alt: "Predictive Diagnostics",
    },
    {
      id: 3,
      title: "Pathology Automation",
      description: "Automated analysis of pathology slides speeds up diagnosis and reduces human error in laboratory settings.",
      image: "/image/pages_img/Pathology-Automation.webp",
      alt: "Pathology Automation",
    },
    {
      id: 5,
      title: "Genomic Data Analysis",
      description: "AI analyzes genetic data to identify mutations and recommend personalized treatment plans.",
      image: "/image/pages_img/Genomic-Data-Analysis.jpg",
      alt: "Genomic Data Analysis",
    },
    {
      id: 6,
      title: "Clinical Decision Support",
      description: "AI systems assist doctors by providing evidence-based recommendations and diagnostic suggestions.",
      image: "/image/pages_img/Clinical-Decision-Support.jpg",
      alt: "Clinical Decision Support",
    },
    {
      id: 7,
      title: "Workflow Optimization",
      description: "AI streamlines diagnostic workflows, automates administrative tasks, and improves resource allocation in healthcare facilities.",
      image: "/image/pages_img/Workflow-Optimization.jpg",
      alt: "Workflow Optimization",
    },
    {
      id: 9,
      title: "Anomaly Detection in Lab Results",
      description: "AI flags abnormal lab results and trends, supporting early intervention and improved patient outcomes.",
      image: "/image/pages_img/Anomaly-Detection.jpg",
      alt: "Anomaly Detection in Lab Results",
    },
  ], []);

  const faqData = useMemo(() => [
    {
      id: 1,
      question: "What is AI Diagnostics?",
      answer: "AI Diagnostics refers to the use of artificial intelligence and machine learning algorithms to assist in the detection, analysis, and prediction of diseases and medical conditions.",
    },
    {
      id: 2,
      question: "How does AI improve diagnostic accuracy?",
      answer: "AI can process vast amounts of medical data, recognize complex patterns, and reduce human error, leading to more accurate and timely diagnoses.",
    },
    {
      id: 3,
      question: "Is AI Diagnostics safe and reliable?",
      answer: "When properly validated and used alongside clinical expertise, AI diagnostics can be highly reliable and improve patient safety. However, oversight and continuous evaluation are essential.",
    },
    {
      id: 4,
      question: "Can AI replace doctors in diagnostics?",
      answer: "AI is designed to support—not replace—healthcare professionals. It provides decision support, but final diagnoses and treatment decisions remain with clinicians.",
    },
    {
      id: 5,
      question: "What are the challenges of AI in diagnostics?",
      answer: "Challenges include data privacy, integration with existing systems, algorithm transparency, and ensuring unbiased, equitable care.",
    },
  ], []);

  const benefits = useMemo(() => [
    {
      icon: (
        <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 2.25c.38-1.13 2.12-1.13 2.5 0l.2.6a1.25 1.25 0 0 0 1.7.77l.56-.25c1.08-.48 2.13.57 1.65 1.65l-.25.56a1.25 1.25 0 0 0 .77 1.7l.6.2c1.13.38 1.13 2.12 0 2.5l-.6.2a1.25 1.25 0 0 0-.77 1.7l.25.56c.48 1.08-.57 2.13-1.65 1.65l-.56-.25a1.25 1.25 0 0 0-1.7.77l-.2.6c-.38 1.13-2.12 1.13-2.5 0l-.2-.6a1.25 1.25 0 0 0-1.7-.77l-.56.25c-1.08.48-2.13-.57-1.65-1.65l.25-.56a1.25 1.25 0 0 0-.77-1.7l-.6-.2c-1.13-.38-1.13-2.12 0-2.5l.6-.2a1.25 1.25 0 0 0 .77-1.7l-.25-.56c-.48-1.08.57-2.13 1.65-1.65l.56.25a1.25 1.25 0 0 0 1.7-.77l.2-.6z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      title: "Unmatched Speed & Precision",
      description: "Deliver rapid, highly accurate diagnostic results—minimizing delays and elevating patient outcomes.",
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
      description: "Reduce costs and optimize resources by automating diagnostics and streamlining workflows.",
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
      title: "Proactive Early Detection",
      description: "Identify health risks sooner, enabling timely intervention and improved long-term outcomes.",
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
      title: "Effortless Scalability",
      description: "Deploy AI diagnostics at scale—supporting large populations and remote locations with ease.",
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
      title: "Consistent Quality",
      description: "Ensure reliable, standardized diagnostic results—minimizing variability across teams and sites.",
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
      title: "Intelligent Decision Support",
      description: "Empower clinicians with data-driven recommendations for confident, informed decision-making.",
      bgColor: "bg-blue-300/20",
      textColor: "text-blue-300",
      borderColor: "hover:border-blue-300"
    }
  ], []);

  const stats = useMemo(() => [
    {
      value: "3+",
      label: "Years of AI Experience",
      description: "Over three years of hands-on success building and deploying AI diagnostics that drive measurable results."
    },
    {
      value: "20+",
      label: "Diagnostics Projects Delivered",
      description: "A portfolio of 20+ tailored AI diagnostics solutions, each designed to solve unique business and clinical challenges."
    },
    {
      value: "30+",
      label: "Custom AI Models",
      description: "Developed 30+ advanced AI models for imaging, analytics, and workflow automation—built for real-world impact."
    },
    {
      value: "10+",
      label: "Satisfied Clients",
      description: "Partnered with 10+ organizations, consistently delivering improved accuracy, efficiency, and business value."
    },
    {
      value: "🌍",
      label: "Global Impact",
      description: "Delivering scalable, accessible AI diagnostics solutions to clients worldwide—empowering organizations to lead in digital health."
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
      <AnimatedHero
        title="AI-Driven Diagnostics"
        subtitle="Accelerate healthcare innovation with instant, precise disease detection, automated image analysis, and actionable insights that empower professionals to deliver exceptional care."
        highlightText="Diagnostics"
        backgroundImage="/image/pages_img/Diagnostics.jpg"
        gradientFrom="from-blue-900"
        gradientVia="via-cyan-800"
        gradientTo="to-blue-900"
        buttonText="Talk to an Expert"
        buttonLink="mailto:sureshbeekhani26@gmail.com"
      />

      {/* Main Content Section */}
      <AnimatedSection className="relative w-full flex items-center justify-center overflow-hidden bg-white/90 border-b border-blue-100">
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
                  src="/image/pages_img/AI-Diagnostics-in.jpg"
                  alt="Illustration of AI transforming diagnostics"
                  className="relative w-full max-w-md h-80 lg:h-96 object-cover rounded-2xl shadow-2xl border-4 border-white/20"
                  loading="lazy"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
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
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-blue-900">
                Transforming <span className="text-green-700">Diagnostics</span> with AI
              </h2>
              <p className="text-xl text-gray-800 max-w-2xl">
                <span className="font-semibold text-green-700">Deep learning</span> and <span className="font-semibold text-blue-700">predictive analytics</span> are redefining diagnostics—enabling earlier detection, seamless automation, and smarter clinical decisions.
              </p>
              <p className="text-lg text-gray-700 max-w-2xl">
                From advanced medical imaging to real-time patient monitoring, AI empowers providers to deliver faster, more accurate, and highly personalized care at scale.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Capabilities and Benefits Section */}
      <AnimatedSection className="py-20 px-6 lg:px-8 bg-gradient-to-br from-green-900/95 via-blue-900/95 to-blue-800/95">
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
            <h2 className="text-3xl font-bold text-white">Key Capabilities & Strategic Benefits</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Unlock the full potential of diagnostics with AI-powered speed, accuracy, and efficiency
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedCard
                key={index}
                delay={index * 0.1}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className={`flex-shrink-0 w-12 h-12 ${benefit.bgColor} rounded-lg flex items-center justify-center group-hover:bg-opacity-40 transition-colors mb-4`}>
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-lg text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-200 leading-relaxed">{benefit.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Use Cases Section */}
      <AnimatedCarousel
        useCases={useCases}
        title="Real-World AI Diagnostics Use Cases"
        subtitle="See how AI is reshaping diagnostics for healthcare and industry leaders worldwide"
        accentColor="green"
      />

      {/* Why Choose Me Section */}
      <AnimatedSection className="py-20 px-6 lg:px-8 bg-gradient-to-br from-green-900/95 via-blue-900/95 to-blue-800/95">
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
            <h2 className="text-3xl font-bold text-white">Why Partner with Me?</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Trusted expertise and a proven record in delivering high-impact AI diagnostics for forward-thinking organizations
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

export default DiagnosticsAI; 