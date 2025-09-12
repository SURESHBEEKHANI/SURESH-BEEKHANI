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
    title: 'Predictive Analytics', 
    icon: LegalIcon
  },
  { 
    title: 'Real-Time Monitoring', 
    icon: AiIcon
  },
  { 
    title: 'Risk Assessment', 
    icon: SecurityIcon
  },
  { 
    title: 'Early Warning System', 
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
  { icon: '⚡', stat: '90%', desc: 'Earlier detection rate' },
  { icon: '✅', stat: '95%', desc: 'Accuracy in predictions' },
  { icon: '🔒', stat: 'HIPAA', desc: 'Compliant data handling' },
  { icon: '💼', stat: '24/7', desc: 'Continuous monitoring' },
];

// Development steps with enhanced icons
const steps = [
  { number: 1, title: 'Agile Development', icon: DevelopmentIcon },
  { number: 2, title: 'Feedback Loops', icon: FeedbackIcon },
  { number: 3, title: 'API Integration', icon: ApiIcon },
  { number: 4, title: 'Medical Expertise', icon: ExpertiseIcon },
  { number: 5, title: 'HIPAA Compliance', icon: ComplianceIcon },
  { number: 6, title: 'Architecture', icon: ArchitectureIcon },
];

const EarlyDiseaseDetectionAI = () => {
  const [showFullInfo, setShowFullInfo] = useState(false);

  // Memoize content for better performance
  const infoContent = useMemo(() => (
    <>
      <p className="mb-3 text-base text-gray-700">
        Early Disease Detection AI is a revolutionary healthcare platform that leverages advanced artificial intelligence to identify potential health risks and diseases at their earliest stages. Built with cutting-edge machine learning algorithms, it analyzes patient data, symptoms, and medical history to provide proactive health insights.
      </p>
      <p className="mb-3 text-base text-gray-700">
        The system goes beyond traditional reactive healthcare by implementing predictive analytics that can detect patterns and anomalies before they manifest as serious conditions. It supports healthcare providers with early warning systems, risk stratification, and personalized prevention strategies.
      </p>
      <p className="mb-4 text-base text-gray-700">
        With seamless integration into existing healthcare workflows and robust security measures, Early Disease Detection AI enhances clinical decision-making, improves patient outcomes, and reduces healthcare costs through preventive care.
      </p>

      <h3 className="font-semibold text-slate-800 mt-4 mb-2 text-base">Key Benefits</h3>
      
      <div className="space-y-3 mb-4">
        <div>
          <h4 className="font-medium text-slate-700 mb-1 text-base">Proactive Detection</h4>
          <p className="text-base text-gray-700">Identify health risks and diseases before they become serious, enabling early intervention and treatment.</p>
        </div>
        <div>
          <h4 className="font-medium text-slate-700 mb-1 text-base">Predictive Analytics</h4>
          <p className="text-base text-gray-700">Advanced AI algorithms analyze patterns and predict potential health issues with high accuracy.</p>
        </div>
        <div>
          <h4 className="font-medium text-slate-700 mb-1 text-base">Personalized Risk Assessment</h4>
          <p className="text-base text-gray-700">Individualized health risk profiles based on genetic, lifestyle, and medical data.</p>
        </div>
        <div>
          <h4 className="font-medium text-slate-700 mb-1 text-base">Real-Time Monitoring</h4>
          <p className="text-base text-gray-700">Continuous health monitoring with instant alerts for concerning changes or trends.</p>
        </div>
        <div>
          <h4 className="font-medium text-slate-700 mb-1 text-base">Preventive Care Optimization</h4>
          <p className="text-base text-gray-700">Data-driven recommendations for lifestyle changes and preventive measures.</p>
        </div>
        <div>
          <h4 className="font-medium text-slate-700 mb-1 text-base">Cost Reduction</h4>
          <p className="text-base text-gray-700">Significant healthcare cost savings through early detection and prevention.</p>
        </div>
      </div>

      <h3 className="font-semibold text-slate-800 mt-4 mb-2 text-base">The Growing Preventive Healthcare Market</h3>
      <p className="text-base text-gray-700 mb-2">The global preventive healthcare market is projected to reach $432 billion by 2027, driven by:</p>
      <ul className="list-disc pl-4 mb-3 space-y-1 text-base text-gray-700">
        <li>Increasing focus on preventive care and early intervention</li>
        <li>Rising healthcare costs and need for cost-effective solutions</li>
        <li>Advancements in AI and predictive analytics</li>
        <li>Growing demand for personalized healthcare</li>
      </ul>

      <h3 className="font-semibold text-slate-800 mt-4 mb-2 text-base">Beyond Detection: A Proactive Health Partner</h3>
      <p className="text-base text-gray-700">
        Early Disease Detection AI represents the future of healthcare, combining human expertise with artificial intelligence to deliver proactive, personalized care. It empowers healthcare providers and patients to take control of health outcomes through early detection and prevention.
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
                Early Disease Detection AI
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-100 w-full whitespace-pre-line mt-3 sm:mt-4 leading-relaxed">
                AI-powered platform that detects health risks and diseases at their earliest stages, enabling proactive healthcare and improved patient outcomes.
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
        title="Early Disease Detection AI for Proactive Healthcare"
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
                 <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-black mb-3 sm:mb-4 md:mb-6 leading-tight">
                   What Is Early Disease Detection AI?
                 </h2>
               </div>
               <p className="text-xs sm:text-xs md:text-sm lg:text-base text-gray-600 max-w-xl mb-3 sm:mb-4 leading-relaxed">
                 Early Disease Detection AI uses advanced artificial intelligence to identify health risks and diseases at their earliest stages, providing proactive health insights through patient data analysis.
               </p>
            </motion.div>
            <div className="flex justify-center">
              <PortfolioImage
                src="/image/Portfolio-img/What Is Early Disease Detection AI.png"
                alt="What is Early Disease Detection AI illustration"
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
                Early Disease Detection AI addresses critical healthcare challenges:
              </p>
              <ul className="list-none space-y-1.5 sm:space-y-2 text-xs sm:text-sm md:text-base lg:text-lg text-gray-600">
                <li><span className="inline-flex items-center justify-center w-5 h-5 bg-blue-500 text-white rounded-full text-xs font-bold mr-2">✓</span> Late-stage disease detection and diagnosis</li>
                <li><span className="inline-flex items-center justify-center w-5 h-5 bg-blue-500 text-white rounded-full text-xs font-bold mr-2">✓</span> Limited access to preventive healthcare</li>
                <li><span className="inline-flex items-center justify-center w-5 h-5 bg-blue-500 text-white rounded-full text-xs font-bold mr-2">✓</span> High healthcare costs from late interventions</li>
                <li><span className="inline-flex items-center justify-center w-5 h-5 bg-blue-500 text-white rounded-full text-xs font-bold mr-2">✓</span> Lack of personalized risk assessment</li>
                <li><span className="inline-flex items-center justify-center w-5 h-5 bg-blue-500 text-white rounded-full text-xs font-bold mr-2">✓</span> Reactive rather than proactive healthcare</li>
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
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-slate-800 mb-6">📊 The Rise of AI in Preventive Healthcare</h3>
                
                <div className="space-y-6 sm:space-y-8">
                  {/* Data Point 1 */}
                  <div className="flex flex-col space-y-3">
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 font-medium">
                      🧠 AI detects diseases 3-5 years earlier than traditional methods
                    </p>
                    <div className="relative w-full bg-gray-200 rounded-full h-3 sm:h-4">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full flex items-center justify-end pr-2" style={{ width: '100%' }}>
                        <span className="text-white text-xs sm:text-sm font-bold">3-5y</span>
                      </div>
                    </div>
                  </div>

                  {/* Data Point 2 */}
                  <div className="flex flex-col space-y-3">
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 font-medium">
                      💊 90% of diseases are treatable when caught early
                    </p>
                    <div className="relative w-full bg-gray-200 rounded-full h-3 sm:h-4">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full flex items-center justify-end pr-2" style={{ width: '90%' }}>
                        <span className="text-white text-xs sm:text-sm font-bold">90%</span>
                      </div>
                    </div>
                  </div>

                  {/* Data Point 3 */}
                  <div className="flex flex-col space-y-3">
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 font-medium">
                      💰 60% reduction in healthcare costs with early detection
                    </p>
                    <div className="relative w-full bg-gray-200 rounded-full h-3 sm:h-4">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full flex items-center justify-end pr-2" style={{ width: '60%' }}>
                        <span className="text-white text-xs sm:text-sm font-bold">60%</span>
                      </div>
                    </div>
                  </div>

                  {/* Data Point 4 */}
                  <div className="flex flex-col space-y-3">
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 font-medium">
                      🌍 85% of healthcare providers plan to adopt AI for prevention
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
                alt="AI-powered preventive healthcare solution illustration"
                delay={0.2}
              />
            </div>
          </PortfolioSection>

          {/* Enhanced Features & Technologies */}
          <PortfolioSection className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-6 sm:py-8 rounded-xl sm:rounded-2xl border border-gray-200 bg-white shadow-sm">
            <SectionHeader
              title="Core Features of Early Disease Detection AI"
              subtitle="AI-powered healthcare tools for predictive analytics, risk assessment, and preventive care automation"
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
                    <h3 className="font-semibold text-slate-800 text-sm sm:text-base md:text-lg">Predictive Analytics</h3>
                  </div>
                  <ul className="list-disc pl-3 sm:pl-4 space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                    <li>🤖 AI-powered disease prediction and risk assessment</li>
                    <li>📊 Advanced pattern recognition for health trends</li>
                    <li>🔍 Intelligent symptom analysis and correlation</li>
                    <li>📋 Automated health risk scoring and alerts</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg p-4 sm:p-6 border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <span className="text-2xl sm:text-3xl mr-2 sm:mr-3">🧑‍💼</span>
                    <h3 className="font-semibold text-slate-800 text-sm sm:text-base md:text-lg">Professional Tools</h3>
                  </div>
                  <ul className="list-disc pl-3 sm:pl-4 space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                    <li>📚 Comprehensive medical knowledge database</li>
                    <li>⚡ Real-time health monitoring and alerts</li>
                    <li>🔄 Continuous learning and model improvement</li>
                    <li>💡 Personalized prevention recommendations</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg p-4 sm:p-6 border border-gray-100 sm:col-span-2 lg:col-span-1">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <span className="text-2xl sm:text-3xl mr-2 sm:mr-3">📊</span>
                    <h3 className="font-semibold text-slate-800 text-sm sm:text-base md:text-lg">Insight & Analytics</h3>
                  </div>
                  <ul className="list-disc pl-3 sm:pl-4 space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                    <li>📈 Health trend analysis and population insights</li>
                    <li>📋 Risk stratification and patient categorization</li>
                    <li>🔎 Advanced search and filtering capabilities</li>
                    <li>👥 Secure collaboration with healthcare teams</li>
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
                title="Benefits for Healthcare Teams"
                subtitle="Transform your preventive care with AI-powered efficiency"
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
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">Early Detection</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Proactive identification</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    Identify health risks and diseases years before traditional methods with AI-powered predictive analytics.
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
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">Improved Outcomes</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Better patient care</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    Achieve better patient outcomes through early intervention and preventive care strategies.
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
                      <p className="text-xs sm:text-sm text-gray-600">Preventive care savings</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    Reduce healthcare costs through early detection and preventive interventions.
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
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">Personalized Care</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Individual risk profiles</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    Provide personalized preventive care based on individual risk profiles and health data.
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
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">Continuous Monitoring</h3>
                      <p className="text-xs sm:text-sm text-gray-600">24/7 health tracking</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    Monitor patient health continuously with real-time alerts and trend analysis.
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
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">HIPAA Compliance</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Secure data handling</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    Ensure full compliance with healthcare data protection standards.
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
                  Enterprise-grade security and compliance for your healthcare data.
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
                          <h3 className="font-bold text-gray-900 text-sm sm:text-base">HIPAA-Compliant</h3>
                          <p className="text-xs sm:text-sm text-gray-600">Healthcare data protection</p>
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
            title="Ready to Transform Your Preventive Healthcare?"
            subtitle="Let's discuss how AI can revolutionize your early detection capabilities"
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

export default EarlyDiseaseDetectionAI; 