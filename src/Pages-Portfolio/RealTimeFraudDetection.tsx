import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  InfoSection,
  PortfolioSection,
  FeatureCard,
  ResultCard,
  PortfolioImage,
  CallToAction,
  staggerContainer,
  SectionHeader,
  ResponsiveGrid
} from '@/components/ui/portfolio-components';
import {
  LegalIcon,
  AiIcon,
  SecurityIcon,
  AnalyticsIcon,
  CloudIcon,
  CodeIcon,
  DevelopmentIcon,
  FeedbackIcon,
  ApiIcon,
  ExpertiseIcon,
  ComplianceIcon,
  ArchitectureIcon
} from '@/components/ui/ImageIcon';

// Enhanced features with descriptions using optimized image icons
const features = [
  { 
    title: 'Real-Time Monitoring', 
    icon: LegalIcon
  },
  { 
    title: 'AI-Powered Detection', 
    icon: AiIcon
  },
  { 
    title: 'Pattern Recognition', 
    icon: SecurityIcon
  },
  { 
    title: 'Instant Alerts', 
    icon: AnalyticsIcon
  },
  { 
    title: 'Cloud-Based Processing', 
    icon: CloudIcon
  },
  { 
    title: 'Modern Tech Stack', 
    icon: CodeIcon
  },
];

// Enhanced results with better visual hierarchy
const results = [
  { icon: '⚡', stat: '99.9%', desc: 'Detection accuracy' },
  { icon: '✅', stat: '<1s', desc: 'Response time' },
  { icon: '🔒', stat: 'PCI DSS', desc: 'Compliant security' },
  { icon: '💼', stat: '24/7', desc: 'Continuous monitoring' },
];

// Development steps with enhanced icons
const steps = [
  { number: 1, title: 'Agile Development', icon: DevelopmentIcon },
  { number: 2, title: 'Feedback Loops', icon: FeedbackIcon },
  { number: 3, title: 'API Integration', icon: ApiIcon },
  { number: 4, title: 'Security Expertise', icon: ExpertiseIcon },
  { number: 5, title: 'PCI Compliance', icon: ComplianceIcon },
  { number: 6, title: 'Architecture', icon: ArchitectureIcon },
];

const RealTimeFraudDetection = () => {
  const [showFullInfo, setShowFullInfo] = useState(false);

  // Memoize content for better performance
  const infoContent = useMemo(() => (
    <>
      <p className="mb-3 text-base text-gray-700">
        Real-Time Fraud Detection AI is a cutting-edge financial security platform that leverages advanced artificial intelligence to detect and prevent fraudulent activities in real-time. Built with sophisticated machine learning algorithms, it analyzes transaction patterns, user behavior, and risk indicators to provide instant fraud alerts.
      </p>
      <p className="mb-3 text-base text-gray-700">
        The system goes beyond traditional rule-based fraud detection by implementing adaptive AI that learns from new fraud patterns and evolves with emerging threats. It supports financial institutions, e-commerce platforms, and payment processors with comprehensive fraud prevention capabilities.
      </p>
      <p className="mb-4 text-base text-gray-700">
        With sub-second response times and high accuracy rates, Real-Time Fraud Detection AI protects businesses and consumers from financial losses while maintaining seamless user experiences and regulatory compliance.
      </p>

      <h3 className="font-semibold text-slate-800 mt-4 mb-2 text-base">Key Benefits</h3>
      
      <div className="space-y-3 mb-4">
        <div>
          <h4 className="font-medium text-slate-700 mb-1 text-base">Instant Detection</h4>
          <p className="text-base text-gray-700">Identify fraudulent activities in real-time with sub-second response times and high accuracy rates.</p>
        </div>
        <div>
          <h4 className="font-medium text-slate-700 mb-1 text-base">Adaptive Learning</h4>
          <p className="text-base text-gray-700">AI algorithms continuously learn from new fraud patterns and evolve with emerging threats.</p>
        </div>
        <div>
          <h4 className="font-medium text-slate-700 mb-1 text-base">Risk Scoring</h4>
          <p className="text-base text-gray-700">Advanced risk assessment algorithms provide detailed scoring for each transaction.</p>
        </div>
        <div>
          <h4 className="font-medium text-slate-700 mb-1 text-base">Behavioral Analysis</h4>
          <p className="text-base text-gray-700">Monitor user behavior patterns to detect anomalies and suspicious activities.</p>
        </div>
        <div>
          <h4 className="font-medium text-slate-700 mb-1 text-base">Regulatory Compliance</h4>
          <p className="text-base text-gray-700">Ensure compliance with PCI DSS, GDPR, and other financial security regulations.</p>
        </div>
        <div>
          <h4 className="font-medium text-slate-700 mb-1 text-base">Cost Reduction</h4>
          <p className="text-base text-gray-700">Significant reduction in fraud-related losses and operational costs.</p>
        </div>
      </div>

      <h3 className="font-semibold text-slate-800 mt-4 mb-2 text-base">The Growing Fraud Detection Market</h3>
      <p className="text-base text-gray-700 mb-2">The global fraud detection market is projected to reach $129 billion by 2029, driven by:</p>
      <ul className="list-disc pl-4 mb-3 space-y-1 text-base text-gray-700">
        <li>Increasing sophistication of fraud attacks</li>
        <li>Growing digital payment adoption</li>
        <li>Regulatory compliance requirements</li>
        <li>Need for real-time protection</li>
      </ul>

      <h3 className="font-semibold text-slate-800 mt-4 mb-2 text-base">Beyond Detection: A Proactive Security Partner</h3>
      <p className="text-base text-gray-700">
        Real-Time Fraud Detection AI represents the future of financial security, combining human expertise with artificial intelligence to deliver proactive, adaptive protection. It empowers businesses to stay ahead of fraudsters while maintaining seamless customer experiences.
      </p>
    </>
  ), []);

  return (
    <div className="min-h-screen flex flex-col bg-white" role="main">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-24 flex flex-col md:flex-row items-center gap-8 sm:gap-12">
          <div className="flex-1 text-white space-y-6 sm:space-y-8">
            <div className="w-full">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight tracking-tight drop-shadow-lg w-full">
                Real-Time Fraud Detection AI
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-100 w-full whitespace-pre-line mt-3 sm:mt-4 leading-relaxed">
                AI-powered platform that detects and prevents fraudulent activities in real-time, protecting businesses and consumers from financial losses.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 sm:pt-6 w-full">
                <a
                  href="/#contact"
                  className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold px-6 sm:px-8 py-3 sm:py-3 rounded-lg shadow-lg transition-all duration-300 text-base sm:text-lg text-center min-h-[44px] flex items-center justify-center"
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

      {/* Enhanced Info Section */}
      <InfoSection
        title="Real-Time Fraud Detection AI for Financial Security"
        showFullInfo={showFullInfo}
        setShowFullInfo={setShowFullInfo}
        titleColor="text-slate-800"
      >
        {infoContent}
      </InfoSection>

      {/* Enhanced What is Section */}
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-8 sm:py-12">
        <PortfolioSection className="w-full rounded-xl sm:rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 p-6 sm:p-8 lg:p-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <div className="relative pt-4 sm:pt-6 md:pt-8 lg:pt-10">
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-black mb-3 sm:mb-4 md:mb-6 leading-tight">
                  What Is Real-Time Fraud Detection AI?
                </h2>
              </div>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-xl mb-3 sm:mb-4 leading-relaxed">
                Real-Time Fraud Detection AI is a cutting-edge financial security platform that leverages advanced artificial intelligence to detect and prevent fraudulent activities in real-time. Built with sophisticated machine learning algorithms, it analyzes transaction patterns to provide instant fraud alerts.
              </p>
            </motion.div>
            <div className="flex justify-center">
              <img
                src="/image/pages_img/What-Real-Time-Fraud-Detection-AI.jpg"
                alt="What is Real-Time Fraud Detection AI illustration"
                className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] object-cover rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl shadow-md sm:shadow-lg md:shadow-xl lg:shadow-2xl transition-all duration-500 hover:shadow-lg sm:hover:shadow-xl md:hover:shadow-2xl touch-manipulation"
              />
            </div>
          </div>
        </PortfolioSection>
      </div>

      {/* Enhanced Challenge Section */}
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-8 sm:py-12">
        <PortfolioSection className="w-full rounded-xl sm:rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 p-6 sm:p-8 lg:p-10">
            {/* Image - Hidden on mobile/tablet, shown on desktop (left side) */}
            <div className="hidden lg:block order-1">
              <PortfolioImage
                src="/image/pages_img/Challenges-Addressed.webp"
                alt="Problems illustration"
              />
            </div>
            
            {/* Content - Desktop (right side), Mobile/Tablet (top) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-left order-2 lg:order-2"
            >
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-black mb-3 sm:mb-4 leading-tight">
                Challenges Addressed
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-xl leading-relaxed mb-3">
                Real-Time Fraud Detection AI addresses critical financial security challenges:
              </p>
              <ul className="list-none space-y-1.5 sm:space-y-2 text-xs sm:text-sm md:text-base lg:text-lg text-gray-600">
                <li><span className="inline-flex items-center justify-center w-5 h-5 bg-blue-500 text-white rounded-full text-xs font-bold mr-2">✓</span> Sophisticated fraud attacks and evolving threats</li>
                <li><span className="inline-flex items-center justify-center w-5 h-5 bg-blue-500 text-white rounded-full text-xs font-bold mr-2">✓</span> Slow response times in fraud detection</li>
                <li><span className="inline-flex items-center justify-center w-5 h-5 bg-blue-500 text-white rounded-full text-xs font-bold mr-2">✓</span> High false positive rates in detection systems</li>
                <li><span className="inline-flex items-center justify-center w-5 h-5 bg-blue-500 text-white rounded-full text-xs font-bold mr-2">✓</span> Regulatory compliance requirements</li>
                <li><span className="inline-flex items-center justify-center w-5 h-5 bg-blue-500 text-white rounded-full text-xs font-bold mr-2">✓</span> Significant financial losses from fraud</li>
              </ul>
            </motion.div>
            
            {/* Image - Shown on mobile/tablet, hidden on desktop */}
            <div className="lg:hidden order-3">
              <PortfolioImage
                src="/image/pages_img/Challenges-Addressed.webp"
                alt="Problems illustration"
              />
            </div>
          </div>
        </PortfolioSection>
      </div>

      {/* Enhanced Solution Section */}
      <div className="w-full bg-gradient-to-tr from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-8 sm:py-12">
          {/* Enhanced Solution */}
          <PortfolioSection className="w-full max-w-7xl mx-auto px-8 sm:px-10 lg:px-12 py-6 sm:py-8 rounded-xl sm:rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-left"
              >
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-black mb-4 sm:mb-6 leading-tight">
                  Industry Insight: Did You Know?
                </h2>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-slate-800 mb-6">📊 The Rise of AI in Fraud Detection</h3>
                
                <div className="space-y-6 sm:space-y-8">
                  {/* Data Point 1 */}
                  <div className="flex flex-col space-y-3">
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 font-medium">
                      🧠 AI detects fraud 10x faster than traditional methods
                    </p>
                    <div className="relative w-full bg-gray-200 rounded-full h-3 sm:h-4">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full flex items-center justify-end pr-2" style={{ width: '100%' }}>
                        <span className="text-white text-xs sm:text-sm font-bold">10x</span>
                      </div>
                    </div>
                  </div>

                  {/* Data Point 2 */}
                  <div className="flex flex-col space-y-3">
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 font-medium">
                      💰 $42 billion lost to fraud annually worldwide
                    </p>
                    <div className="relative w-full bg-gray-200 rounded-full h-3 sm:h-4">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full flex items-center justify-end pr-2" style={{ width: '100%' }}>
                        <span className="text-white text-xs sm:text-sm font-bold">$42B</span>
                      </div>
                    </div>
                  </div>

                  {/* Data Point 3 */}
                  <div className="flex flex-col space-y-3">
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 font-medium">
                      ⚡ 99.9% accuracy in fraud detection with AI
                    </p>
                    <div className="relative w-full bg-gray-200 rounded-full h-3 sm:h-4">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full flex items-center justify-end pr-2" style={{ width: '99.9%' }}>
                        <span className="text-white text-xs sm:text-sm font-bold">99.9%</span>
                      </div>
                    </div>
                  </div>

                  {/* Data Point 4 */}
                  <div className="flex flex-col space-y-3">
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 font-medium">
                      🌍 85% of financial institutions use AI for fraud detection
                    </p>
                    <div className="relative w-full bg-gray-200 rounded-full h-3 sm:h-4">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full flex items-center justify-end pr-2" style={{ width: '85%' }}>
                        <span className="text-white text-xs sm:text-sm font-bold">85%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <PortfolioImage
                src="/image/pages_img/Did-You-Know.jpg"
                alt="AI-powered fraud detection solution illustration"
                delay={0.2}
              />
            </div>
          </PortfolioSection>

          {/* Enhanced Features & Technologies */}
          <PortfolioSection className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-6 sm:py-8 rounded-xl sm:rounded-2xl border border-gray-200 bg-white shadow-sm">
            <SectionHeader
              title="Core Features of Real-Time Fraud Detection AI"
              subtitle="AI-powered security tools for real-time monitoring, pattern recognition, and fraud prevention automation"
              delay={0.1}
              className="!text-base sm:!text-lg md:!text-xl lg:!text-2xl xl:!text-3xl !text-black"
            />
            <div className="max-w-6xl mx-auto">
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
              >
                <div className="bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg p-4 sm:p-6 border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <span className="text-2xl sm:text-3xl mr-2 sm:mr-3">⚙️</span>
                    <h3 className="font-semibold text-slate-800 text-sm sm:text-base md:text-lg">Real-Time Monitoring</h3>
                  </div>
                  <ul className="list-disc pl-3 sm:pl-4 space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                    <li>🤖 AI-powered transaction monitoring and analysis</li>
                    <li>⚡ Sub-second response times for fraud detection</li>
                    <li>🔍 Advanced pattern recognition and anomaly detection</li>
                    <li>📊 Real-time risk scoring and assessment</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg p-4 sm:p-6 border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <span className="text-2xl sm:text-3xl mr-2 sm:mr-3">🧑‍💼</span>
                    <h3 className="font-semibold text-slate-800 text-sm sm:text-base md:text-lg">Professional Tools</h3>
                  </div>
                  <ul className="list-disc pl-3 sm:pl-4 space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                    <li>📚 Comprehensive fraud pattern database</li>
                    <li>⚡ Instant alert system and notifications</li>
                    <li>🔄 Continuous learning and model improvement</li>
                    <li>💡 Adaptive threat response and mitigation</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg p-4 sm:p-6 border border-gray-100 sm:col-span-2 lg:col-span-1">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <span className="text-2xl sm:text-3xl mr-2 sm:mr-3">📊</span>
                    <h3 className="font-semibold text-slate-800 text-sm sm:text-base md:text-lg">Insight & Analytics</h3>
                  </div>
                  <ul className="list-disc pl-3 sm:pl-4 space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                    <li>📈 Fraud trend analysis and reporting</li>
                    <li>📋 Risk assessment and threat categorization</li>
                    <li>🔎 Advanced search and filtering capabilities</li>
                    <li>👥 Secure collaboration with security teams</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </PortfolioSection>

          {/* Enhanced Professional Workspace Section */}
          <PortfolioSection className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-6 sm:py-8 rounded-xl sm:rounded-2xl border border-gray-200 bg-white shadow-sm">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12 md:mb-16"
            >
              <SectionHeader
                title="Benefits for Financial Security Teams"
                subtitle="Transform your fraud detection with AI-powered efficiency"
                delay={0.1}
                className="!text-base sm:!text-lg md:!text-xl lg:!text-2xl xl:!text-3xl !text-black"
              />
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg sm:rounded-2xl p-6 sm:p-8 h-full border border-blue-200 hover:border-blue-300 hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md sm:shadow-lg group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg sm:text-xl md:text-2xl text-white">⏳</span>
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">Real-Time Detection</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Instant fraud alerts</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    Detect fraudulent activities in real-time with sub-second response times and high accuracy rates.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg sm:rounded-2xl p-6 sm:p-8 h-full border border-green-200 hover:border-green-300 hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md sm:shadow-lg group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg sm:text-xl md:text-2xl text-white">✅</span>
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">High Accuracy</h3>
                      <p className="text-xs sm:text-sm text-gray-600">99.9% detection rate</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    Achieve exceptional accuracy in fraud detection with advanced AI algorithms and pattern recognition.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg sm:rounded-2xl p-6 sm:p-8 h-full border border-purple-200 hover:border-purple-300 hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md sm:shadow-lg group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg sm:text-xl md:text-2xl text-white">💼</span>
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">Cost Reduction</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Prevent financial losses</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    Reduce fraud-related losses and operational costs through proactive detection and prevention.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-lg sm:rounded-2xl p-6 sm:p-8 h-full border border-orange-200 hover:border-orange-300 hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md sm:shadow-lg group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg sm:text-xl md:text-2xl text-white">💸</span>
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">Adaptive Learning</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Evolving threat detection</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    Continuously learn from new fraud patterns and adapt to emerging threats automatically.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-lg sm:rounded-2xl p-4 sm:p-6 h-full border border-teal-200 hover:border-teal-300 hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md sm:shadow-lg group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg sm:text-xl md:text-2xl text-white">📈</span>
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">24/7 Monitoring</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Continuous protection</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    Monitor transactions continuously with round-the-clock protection and instant alerts.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg sm:rounded-2xl p-4 sm:p-6 h-full border border-indigo-200 hover:border-indigo-300 hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md sm:shadow-lg group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg sm:text-xl md:text-2xl text-white">⚖️</span>
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">PCI Compliance</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Regulatory adherence</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    Ensure full compliance with PCI DSS and other financial security regulations.
                  </p>
                </div>
              </motion.div>
            </div>
          </PortfolioSection>

          {/* Enhanced Compliance & Security Section */}
          <PortfolioSection className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-6 sm:py-8 rounded-xl sm:rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-12">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center max-w-4xl"
              >
                
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-black mb-4 sm:mb-6 leading-tight">
                  Compliance & Security
                </h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  Enterprise-grade security and compliance for your financial data.
                </p>
              </motion.div>
              

              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full max-w-5xl"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="group relative overflow-hidden bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-200">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative p-4 sm:p-6">
                      <div className="flex items-center mb-3 sm:mb-4">
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md sm:shadow-lg">
                          <span className="text-lg sm:text-xl text-white">✅</span>
                        </div>
                        <div className="ml-3 sm:ml-4">
                          <h3 className="font-bold text-gray-900 text-sm sm:text-base">PCI DSS-Compliant</h3>
                          <p className="text-xs sm:text-sm text-gray-600">Payment card security</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group relative overflow-hidden bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative p-4 sm:p-6">
                      <div className="flex items-center mb-3 sm:mb-4">
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md sm:shadow-lg">
                          <span className="text-lg sm:text-xl text-white">🔐</span>
                        </div>
                        <div className="ml-3 sm:ml-4">
                          <h3 className="font-bold text-gray-900 text-sm sm:text-base">End-to-End Encryption</h3>
                          <p className="text-xs sm:text-sm text-gray-600">Military-grade security</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group relative overflow-hidden bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative p-4 sm:p-6">
                      <div className="flex items-center mb-3 sm:mb-4">
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md sm:shadow-lg">
                          <span className="text-lg sm:text-xl text-white">👥</span>
                        </div>
                        <div className="ml-3 sm:ml-4">
                          <h3 className="font-bold text-gray-900 text-sm sm:text-base">Access Controls</h3>
                          <p className="text-xs sm:text-sm text-gray-600">Role-based permissions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group relative overflow-hidden bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-200">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative p-4 sm:p-6">
                      <div className="flex items-center mb-3 sm:mb-4">
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md sm:shadow-lg">
                          <span className="text-lg sm:text-xl text-white">🗂️</span>
                        </div>
                        <div className="ml-3 sm:ml-4">
                          <h3 className="font-bold text-gray-900 text-sm sm:text-base">Secure Storage</h3>
                          <p className="text-xs sm:text-sm text-gray-600">99.9% uptime guarantee</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </PortfolioSection>

          {/* Enhanced Call to Action */}
          <CallToAction
            title="Ready to Transform Your Fraud Detection?"
            subtitle="Let's discuss how AI can revolutionize your financial security"
            gradient="from-indigo-500 to-indigo-700"
            hoverGradient="hover:from-indigo-600 hover:to-indigo-800"
          />
        </div>
      </div>

      <Footer />
      
      {/* Enhanced Animations */}
      <style>{`
        .animate-fade-in { 
          animation: fadeIn 1s ease; 
        }
        .animate-fade-in-slow { 
          animation: fadeIn 1.5s ease; 
        }
        .animate-bounce-slow { 
          animation: bounce 2s infinite alternate; 
        }
        @keyframes fadeIn { 
          from { opacity: 0; transform: translateY(30px); } 
          to { opacity: 1; transform: none; } 
        }
        @keyframes bounce { 
          0% { transform: translateY(0); } 
          100% { transform: translateY(-8px); } 
        }
        .line-clamp-6 {
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .text-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </div>
  );
};

export default RealTimeFraudDetection; 