import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  PortfolioHero,
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

// Enhanced Icon components with better accessibility
const ChatbotIcon = ({ className = "w-8 h-8 mb-1 text-purple-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2"/>
    <path d="M8 9h8M8 13h4"/>
  </svg>
);

const DiagnosisIcon = ({ className = "w-8 h-8 mb-1 text-blue-400" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 8v4l3 3"/>
  </svg>
);

const ReportIcon = ({ className = "w-8 h-8 mb-1 text-pink-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="4" y="4" width="16" height="16" rx="2"/>
    <path d="M8 2v4M16 2v4M4 10h16"/>
  </svg>
);

const IntegrationIcon = ({ className = "w-8 h-8 mb-1 text-green-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="2" y="7" width="20" height="14" rx="2"/>
    <path d="M8 21h8"/>
  </svg>
);

const PrivacyIcon = ({ className = "w-8 h-8 mb-1 text-yellow-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="11" width="18" height="10" rx="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const AnalyticsIcon = ({ className = "w-8 h-8 mb-1 text-gray-700" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 17v-2a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

// Enhanced features with descriptions
const features = [
  { 
    title: 'AI Chatbot Triage', 
    icon: ChatbotIcon,
    description: 'Intelligent symptom collection and initial assessment'
  },
  { 
    title: 'Automated Diagnosis', 
    icon: DiagnosisIcon,
    description: 'AI-powered diagnostic suggestions and analysis'
  },
  { 
    title: 'Instant Reporting', 
    icon: ReportIcon,
    description: 'Quick generation of patient reports and summaries'
  },
  { 
    title: 'EHR Integration', 
    icon: IntegrationIcon,
    description: 'Seamless integration with existing healthcare systems'
  },
  { 
    title: 'Data Privacy & Security', 
    icon: PrivacyIcon,
    description: 'HIPAA-compliant data handling and security'
  },
  { 
    title: 'Analytics Dashboard', 
    icon: AnalyticsIcon,
    description: 'Comprehensive healthcare analytics and insights'
  },
];

// Enhanced results with better visual hierarchy
const results = [
  { icon: '⏱️', stat: '60%', desc: 'Faster diagnosis time' },
  { icon: '📉', stat: '40%', desc: 'Reduced doctor workload' },
  { icon: '👍', stat: 'High', desc: 'Patient satisfaction' },
  { icon: '🌐', stat: 'Scalable', desc: 'For clinics & hospitals' },
];

// Development steps with enhanced icons
const AgileIcon = ({ className = "w-8 h-8 mb-1 text-purple-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 6v6l4 2"/>
  </svg>
);

const FeedbackIcon = ({ className = "w-8 h-8 mb-1 text-blue-400" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"/>
  </svg>
);

const ApiIcon = ({ className = "w-8 h-8 mb-1 text-green-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <path d="M7 7h.01M7 11h.01M7 15h.01M11 7h2M11 11h2M11 15h2M15 7h2M15 11h2M15 15h2"/>
  </svg>
);

const SmartIcon = ({ className = "w-8 h-8 mb-1 text-pink-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 8v4l3 3"/>
  </svg>
);

const ShieldIcon = ({ className = "w-8 h-8 mb-1 text-yellow-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3l8 4v5c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V7l8-4z" stroke="currentColor" strokeWidth="2"/>
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const SustainableIcon = ({ className = "w-8 h-8 mb-1 text-gray-700" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 0v10l6 3"/>
  </svg>
);

const steps = [
  { number: 1, title: 'Agile Development', icon: AgileIcon },
  { number: 2, title: 'Clinical Feedback Loops', icon: FeedbackIcon },
  { number: 3, title: 'API & EHR Integration', icon: ApiIcon },
  { number: 4, title: 'AI Model Optimization', icon: SmartIcon },
  { number: 5, title: 'HIPAA/GDPR Compliance', icon: ShieldIcon },
  { number: 6, title: 'Scalable Architecture', icon: SustainableIcon },
];

const PatientDiagnosticSystem = () => {
  const [showFullInfo, setShowFullInfo] = useState(false);

  // Memoize content for better performance
  const infoContent = useMemo(() => (
    <>
      <p>
        The Patient Diagnostic System leverages AI chatbots and machine learning to streamline the diagnostic process. It collects patient symptoms, analyzes data, and provides instant, evidence-based recommendations to clinicians.
      </p>
      <p className="mt-3">
        This system acts as a digital assistant, reducing manual paperwork, minimizing diagnostic errors, and ensuring patients receive timely care. It integrates with hospital EHRs for seamless workflow.
      </p>
      <p className="mt-3">
        By automating triage and initial diagnosis, it frees up doctors for complex cases and improves overall healthcare efficiency.
      </p>
      <h3 className="font-semibold text-blue-800 mt-4 mb-2">Key Benefits</h3>
      <ul className="list-disc pl-6 mb-3 space-y-1">
        <li><b>Faster Diagnosis:</b> Reduces time from patient intake to diagnosis.</li>
        <li><b>Reduced Workload:</b> Automates routine tasks for clinicians.</li>
        <li><b>Improved Accuracy:</b> Uses AI to minimize human error.</li>
        <li><b>Seamless Integration:</b> Works with existing hospital systems.</li>
        <li><b>Data Security:</b> Ensures patient privacy and compliance.</li>
        <li><b>Scalable:</b> Suitable for clinics, hospitals, and telemedicine.</li>
      </ul>
      <h3 className="font-semibold text-blue-800 mt-4 mb-2">Growing Demand</h3>
      <p className="mb-3">AI in healthcare diagnostics is projected to reach $20B+ by 2030, driven by the need for efficiency and better patient outcomes.</p>
      <h3 className="font-semibold text-blue-800 mt-4 mb-2">Beyond Diagnosis – A Digital Health Partner</h3>
      <p>More than a diagnostic tool, it supports patient education, follow-up reminders, and connects users to specialists as needed.</p>
    </>
  ), []);

  return (
    <div className="min-h-screen flex flex-col bg-white" role="main">
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <PortfolioHero
        title="Patient Diagnostic System"
        description="AI-powered system for rapid, accurate disease diagnosis. Reduces doctor workload and improves patient care."
        gradient="from-blue-900 via-blue-400 to-pink-200"
        backgroundImage="/image/pages_img/Patient-Diagnostic-System.webp"
      />

      {/* Enhanced Info Section */}
      <InfoSection
        title="AI Diagnostic System for Healthcare"
        showFullInfo={showFullInfo}
        setShowFullInfo={setShowFullInfo}
        titleColor="text-blue-900"
      >
        {infoContent}
      </InfoSection>

      {/* Enhanced What is Section */}
      <PortfolioSection className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 text-left"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-8 leading-tight">
              What is Patient Diagnostic System?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-xl mb-6 leading-relaxed">
              An AI-powered tool that collects symptoms, analyzes data, and provides instant diagnostic suggestions to healthcare professionals.
            </p>
          </motion.div>
          <PortfolioImage
            src="/image/pages_img/Patient-Diagnostic-System.webp"
            alt="What is Patient Diagnostic System illustration"
            delay={0.2}
          />
        </div>
      </PortfolioSection>

      {/* Enhanced Problems Section */}
      <PortfolioSection className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          <PortfolioImage
            src="/image/pages_img/Problems.jpg"
            alt="Problems illustration"
          />
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 text-left"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-8 leading-tight">
              Problems?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-xl leading-relaxed">
              Manual diagnosis is slow, error-prone, and increases clinician workload. Patients face delays and inconsistent care quality.
            </p>
          </motion.div>
        </div>
      </PortfolioSection>

      {/* Enhanced Main Content Section */}
      <div className="py-24 bg-gradient-to-tr from-gray-50 to-white flex-1">
        <div className="max-w-6xl mx-auto space-y-20 px-6">
          {/* Enhanced Solution */}
          <PortfolioSection className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex-1 text-left"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-8 leading-tight">
                  Solution
                </h2>
                <p className="text-xl md:text-2xl text-gray-700 max-w-xl leading-relaxed">
                  The Patient Diagnostic System automates triage, provides instant recommendations, and integrates with EHRs—improving speed, accuracy, and patient outcomes.
                </p>
              </motion.div>
              <PortfolioImage
                src="/image/pages_img/Diagnostics.jpg"
                alt="AI-powered diagnostic solution illustration"
                delay={0.2}
              />
            </div>
          </PortfolioSection>

          {/* Enhanced Features & Technologies */}
          <PortfolioSection className="max-w-6xl mx-auto">
            <SectionHeader
              title="Key Features"
              subtitle="Advanced capabilities that transform healthcare diagnostics"
              delay={0.1}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
              <PortfolioImage
                src="/image/pages_img/AI-Driven-Testing.jpg"
                alt="Key Features & Technologies illustration"
                className="max-w-sm"
              />
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-8"
              >
                {features.map((f, i) => (
                  <FeatureCard
                    key={i}
                    icon={f.icon}
                    title={f.title}
                    description={f.description}
                    delay={i * 0.1}
                  />
                ))}
              </motion.div>
            </div>
          </PortfolioSection>

          {/* Enhanced Development Section */}
          <PortfolioSection className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <SectionHeader
                  title="Development Process"
                  subtitle="Our systematic approach to building healthcare AI solutions"
                  delay={0.1}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {steps.map((s, i) => (
                    <FeatureCard
                      key={i}
                      icon={s.icon}
                      title={s.title}
                      delay={i * 0.1}
                    />
                  ))}
                </div>
              </motion.div>
              <PortfolioImage
                src="/image/pages_img/AI-Driven-Law-GPT.jpg"
                alt="Development Illustration"
              />
            </div>
          </PortfolioSection>

          {/* Enhanced Results */}
          <PortfolioSection className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
              <PortfolioImage
                src="/image/pages_img/result.jpg"
                alt="Results and impact illustration"
              />
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-left lg:text-center flex flex-col items-center"
              >
                <SectionHeader
                  title="Results"
                  subtitle="Measurable impact and outcomes"
                  delay={0.1}
                />
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-2xl mx-auto"
                >
                  {results.map((r, i) => (
                    <ResultCard
                      key={i}
                      icon={r.icon}
                      stat={r.stat}
                      desc={r.desc}
                      delay={i * 0.1}
                      bgColor="bg-gradient-to-br from-blue-50 to-indigo-50"
                      textColor="text-blue-900"
                      shadowColor="hover:shadow-blue-200/50"
                      borderColor="border-blue-100"
                    />
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </PortfolioSection>

          {/* Enhanced Call to Action */}
          <CallToAction
            title="Ready to Transform Healthcare?"
            subtitle="Let's discuss how AI can revolutionize your diagnostic processes"
            gradient="from-blue-500 to-blue-700"
            hoverGradient="hover:from-blue-600 hover:to-blue-800"
          />
        </div>
      </div>

      <Footer />
      
      {/* Enhanced Animations */}
      <style>{`
        .animate-fade-in { animation: fadeIn 1s ease; }
        .animate-fade-in-slow { animation: fadeIn 1.5s ease; }
        .animate-bounce-slow { animation: bounce 2s infinite alternate; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: none; } }
        @keyframes bounce { 0% { transform: translateY(0); } 100% { transform: translateY(-8px); } }
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

export default PatientDiagnosticSystem;
