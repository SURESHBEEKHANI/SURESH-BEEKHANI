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

// Enhanced Icon components with better accessibility and mobile optimization
const GavelIcon = ({ className = "w-6 h-6 sm:w-8 sm:h-8 mb-1 text-purple-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M14 10l7 7m-1.41-1.41a2 2 0 0 1-2.83 0l-7-7a2 2 0 0 1 0-2.83l2.83-2.83a2 2 0 0 1 2.83 0l7 7a2 2 0 0 1 0 2.83z"/>
    <path d="M6 19h6"/>
  </svg>
);

const AiIcon = ({ className = "w-6 h-6 sm:w-8 sm:h-8 mb-1 text-blue-400" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <path d="M8 12h8M12 8v8"/>
  </svg>
);

const ShieldIcon = ({ className = "w-6 h-6 sm:w-8 sm:h-8 mb-1 text-green-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3l8 4v5c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V7l8-4z"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
);

const ClockIcon = ({ className = "w-6 h-6 sm:w-8 sm:h-8 mb-1 text-yellow-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 6v6l4 2"/>
  </svg>
);

const CloudIcon = ({ className = "w-6 h-6 sm:w-8 sm:h-8 mb-1 text-pink-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.31 2.16A4 4 0 0 0 6 19z"/>
  </svg>
);

const CodeIcon = ({ className = "w-6 h-6 sm:w-8 sm:h-8 mb-1 text-gray-700" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>
  </svg>
);

// Enhanced features with descriptions
const features = [
  { 
    title: 'Legal Text Generation', 
    icon: GavelIcon
  },
  { 
    title: 'AI-Powered Research', 
    icon: AiIcon
  },
  { 
    title: 'Privacy & Security', 
    icon: ShieldIcon
  },
  { 
    title: 'Case Summaries', 
    icon: ClockIcon
  },
  { 
    title: 'Cloud-Based Access', 
    icon: CloudIcon
  },
  { 
    title: 'Modern Tech Stack', 
    icon: CodeIcon
  },
];

// Enhanced results with better visual hierarchy
const results = [
  { icon: '⚡', stat: '80%', desc: 'Faster document drafting' },
  { icon: '✅', stat: '99%', desc: 'Accuracy in legal text' },
  { icon: '🔒', stat: 'Secure', desc: 'Data handling & compliance' },
  { icon: '🌐', stat: 'Global', desc: 'Scalable for any jurisdiction' },
];

// Development steps with enhanced icons
const AgileIcon = ({ className = "w-6 h-6 sm:w-8 sm:h-8 mb-1 text-purple-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 6v6l4 2"/>
  </svg>
);

const FeedbackIcon = ({ className = "w-6 h-6 sm:w-8 sm:h-8 mb-1 text-blue-400" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"/>
  </svg>
);

const ApiIcon = ({ className = "w-6 h-6 sm:w-8 sm:h-8 mb-1 text-green-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <path d="M7 7h.01M7 11h.01M7 15h.01M11 7h2M11 11h2M11 15h2M15 7h2M15 11h2M15 15h2"/>
  </svg>
);

const LawIcon = ({ className = "w-6 h-6 sm:w-8 sm:h-8 mb-1 text-pink-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="4" y="4" width="16" height="16" rx="2"/>
    <path d="M8 2v4M16 2v4M4 10h16"/>
  </svg>
);

const ComplianceIcon = ({ className = "w-6 h-6 sm:w-8 sm:h-8 mb-1 text-yellow-500" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="11" width="18" height="10" rx="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const SustainableIcon = ({ className = "w-6 h-6 sm:w-8 sm:h-8 mb-1 text-gray-700" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 0v10l6 3"/>
  </svg>
);

const steps = [
  { number: 1, title: 'Agile  Development', icon: AgileIcon },
  { number: 2, title: 'Feedback Loops', icon: FeedbackIcon },
  { number: 3, title: 'API Integration', icon: ApiIcon },
  { number: 4, title: 'Legal Expertise', icon: LawIcon },
  { number: 5, title: 'Compliance', icon: ComplianceIcon },
  { number: 6, title: 'Architecture', icon: SustainableIcon },
];

const AiDrivenLawGpt = () => {
  const [showFullInfo, setShowFullInfo] = useState(false);

  // Memoize content for better performance
  const infoContent = useMemo(() => (
    <>
      <p className="mb-3 text-base text-gray-700">
        AI-Driven Law GPT is a next-generation legal assistant that automates the drafting, reviewing, and summarizing of legal documents using advanced AI. Built to understand the complexity of legal language, it adapts to various jurisdictions and ensures full compliance with ever-evolving legal regulations.
      </p>
      <p className="mb-3 text-base text-gray-700">
        Unlike conventional legal tools, this platform offers context-aware recommendations, minimizes manual effort, and significantly reduces the risk of human error. Legal professionals — from law firms to in-house counsel — can focus on strategic tasks, while routine documentation and research are handled seamlessly.
      </p>
      <p className="mb-4 text-base text-gray-700">
        With secure, cloud-based access and robust privacy safeguards, AI-Driven Law GPT integrates easily into existing legal workflows, empowering legal teams to operate smarter and faster.
      </p>

      <h3 className="font-semibold text-indigo-800 mt-4 mb-2 text-base">Key Benefits</h3>
      
      <div className="space-y-3 mb-4">
        <div>
          <h4 className="font-medium text-indigo-700 mb-1 text-base">Automated Drafting</h4>
          <p className="text-base text-gray-700">Instantly create contracts, legal briefs, memos, and agreements tailored to specific needs.</p>
        </div>
        <div>
          <h4 className="font-medium text-indigo-700 mb-1 text-base">AI-Powered Legal Research</h4>
          <p className="text-base text-gray-700">Retrieve statutes, precedents, and case law using intelligent, real-time search.</p>
        </div>
        <div>
          <h4 className="font-medium text-indigo-700 mb-1 text-base">Compliance Built-In</h4>
          <p className="text-base text-gray-700">Ensure alignment with legal standards like GDPR, HIPAA, and local regulatory frameworks.</p>
        </div>
        <div>
          <h4 className="font-medium text-indigo-700 mb-1 text-base">Real-Time Collaboration</h4>
          <p className="text-base text-gray-700">Edit, annotate, and share legal documents securely with colleagues and clients.</p>
        </div>
        <div>
          <h4 className="font-medium text-indigo-700 mb-1 text-base">Enterprise-Grade Security</h4>
          <p className="text-base text-gray-700">Includes end-to-end encryption, role-based access controls, and secure cloud storage.</p>
        </div>
        <div>
          <h4 className="font-medium text-indigo-700 mb-1 text-base">Significant Time Savings</h4>
          <p className="text-base text-gray-700">Reduce legal document turnaround times from days to minutes, boosting overall efficiency.</p>
        </div>
      </div>

      <h3 className="font-semibold text-indigo-800 mt-4 mb-2 text-base">The Growing Legal Tech Market</h3>
      <p className="text-base text-gray-700 mb-2">The AI in legal industry is forecasted to surpass $37 billion by 2030, fueled by the need for:</p>
      <ul className="list-disc pl-4 mb-3 space-y-1 text-base text-gray-700">
        <li>Increased productivity</li>
        <li>Compliance automation</li>
        <li>Cost-effective legal services</li>
        <li>Scalable legal solutions for global markets</li>
      </ul>

      <h3 className="font-semibold text-indigo-800 mt-4 mb-2 text-base">Beyond Automation: A Digital Legal Partner</h3>
      <p className="text-base text-gray-700">
        AI-Driven Law GPT goes beyond automation. It acts as a trusted digital partner, augmenting legal expertise, enhancing client outcomes, and reducing risk. It enables firms to stay competitive in a rapidly evolving legal landscape, embracing the future of legal practice.
      </p>
    </>
  ), []);

  return (
    <div className="min-h-screen flex flex-col bg-white" role="main">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/ai-law-gpt-backgoud.png')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 flex flex-col md:flex-row items-center gap-8 sm:gap-12">
          <div className="flex-1 text-white space-y-6 sm:space-y-8">
            <div className="w-full">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight tracking-tight drop-shadow-lg w-full">
                AI-Driven <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Law GPT</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-100 w-full whitespace-pre-line mt-3 sm:mt-4 leading-relaxed">
                AI-Driven Law GPT leverages advanced AI to generate, review, and summarize legal documents with speed and precision empowering legal professionals to work smarter.
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
         title="AI-Driven Law GPT for Modern Legal Practice"
         showFullInfo={showFullInfo}
         setShowFullInfo={setShowFullInfo}
         titleColor="text-indigo-900"
       >
        {infoContent}
      </InfoSection>

      {/* Enhanced What is Section */}
      <PortfolioSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-12 lg:gap-16">
                     <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
             className="flex-1 text-left"
           >
             <div className="relative pt-8 sm:pt-10">
               <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-indigo-900 mb-4 sm:mb-6 leading-tight">
                 What Is AI-Driven Law GPT?
               </h2>
             </div>
             <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl mb-4 leading-relaxed">
               AI-Driven Law GPT is an intelligent legal-tech platform that utilizes cutting-edge artificial intelligence to generate, review, and summarize legal documents with exceptional speed and accuracy. Designed to support legal professionals, firms, and corporate legal departments, the platform enhances efficiency while minimizing manual workload.
             </p>
           </motion.div>
          <PortfolioImage
            src="/image/pages_img/What-AI-Driven-Law-GPT.webp"
            alt="What is AI-Driven Law GPT illustration"
            delay={0.2}
          />
        </div>
      </PortfolioSection>

      {/* Enhanced Challenge Section */}
      <PortfolioSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-12 lg:gap-16">
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
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-indigo-900 mb-3 sm:mb-4 leading-tight">
              Problems?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl leading-relaxed">
              Legal professionals face repetitive drafting, research overload, and compliance risks. Manual processes are slow, error-prone, and costly for firms and clients.
            </p>
          </motion.div>
        </div>
      </PortfolioSection>

      {/* Enhanced Solution Section */}
      <div className="py-12 sm:py-16 bg-gradient-to-tr from-gray-50 to-white flex-1">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12 px-4 sm:px-6 lg:px-8">
          {/* Enhanced Solution */}
          <PortfolioSection className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-12 lg:gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex-1 text-left"
              >
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-indigo-900 mb-3 sm:mb-4 leading-tight">
                  Solution
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl leading-relaxed">
                  AI-Driven Law GPT automates legal drafting, research, and compliance reducing errors, saving time, and enabling lawyers to focus on high-value work.
                </p>
              </motion.div>
              <PortfolioImage
                src="/image/pages_img/Solutions.jpg"
                alt="AI-powered law solution illustration"
                delay={0.2}
              />
            </div>
          </PortfolioSection>

          {/* Enhanced Features & Technologies */}
          <PortfolioSection className="max-w-6xl mx-auto">
            <SectionHeader
              title="Key Features"
              subtitle="Advanced capabilities that transform legal workflows"
              delay={0.1}
              className="!text-lg sm:!text-xl md:!text-2xl lg:!text-3xl !text-indigo-900"
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-12 lg:gap-16">
              <PortfolioImage
                src="/image/pages_img/Key-Features-legal.png"
                alt="Legal Key Features illustration"
                className="max-w-sm"
              />
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
              >
                {features.map((f, i) => (
                  <FeatureCard
                    key={i}
                    icon={f.icon}
                    title={f.title}
                    delay={i * 0.1}
                  />
                ))}
              </motion.div>
            </div>
          </PortfolioSection>

          {/* Enhanced Development Section */}
          <PortfolioSection className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-12 lg:gap-16">
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <SectionHeader
                  title="Development Process"
                  subtitle="Our systematic approach to building AI solutions"
                  delay={0.1}
                  className="!text-lg sm:!text-xl md:!text-2xl lg:!text-3xl !text-indigo-900"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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
                src="/image/pages_img/Development-Process-law-gpt.png"
                alt="Development Process Law GPT illustration"
              />
            </div>
          </PortfolioSection>

          {/* Enhanced Results */}
          <PortfolioSection className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-12 lg:gap-16">
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
                  className="!text-lg sm:!text-xl md:!text-2xl lg:!text-3xl !text-indigo-900"
                />
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full max-w-2xl mx-auto"
                >
                  {results.map((r, i) => (
                    <ResultCard
                      key={i}
                      icon={r.icon}
                      stat={r.stat}
                      desc={r.desc}
                      delay={i * 0.1}
                      bgColor="bg-gradient-to-br from-indigo-50 to-purple-50"
                      textColor="text-indigo-900"
                      shadowColor="hover:shadow-indigo-200/50"
                      borderColor="border-indigo-100"
                    />
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </PortfolioSection>

          {/* Enhanced Call to Action */}
          <CallToAction
            title="Ready to Transform Your Legal Workflow?"
            subtitle="Let's discuss how AI can revolutionize your legal practice"
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

export default AiDrivenLawGpt;
