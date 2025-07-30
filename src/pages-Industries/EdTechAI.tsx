import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedSection from "../components/ui/AnimatedSection";
import AnimatedCarousel from "../components/ui/AnimatedCarousel";
import AnimatedFAQ from "../components/ui/AnimatedFAQ";

// Custom hook for FAQ state management
const useFAQState = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  const toggleFAQ = useCallback((id: number) => {
    setOpenFAQ(prev => prev === id ? null : id);
  }, []);
  
  return { openFAQ, toggleFAQ };
};

// Custom hook for carousel state management
const useCarouselState = (totalItems: number, itemsPerView: number = 3) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => prev === totalItems - itemsPerView ? 0 : prev + 1);
  }, [totalItems, itemsPerView]);
  
  const prevSlide = useCallback(() => {
    setCurrentIndex(prev => prev === 0 ? totalItems - itemsPerView : prev - 1);
  }, [totalItems, itemsPerView]);
  
  return { currentIndex, nextSlide, prevSlide };
};

// Custom AI Education Icon Component
const AIEducationIcon: React.FC<{ className?: string }> = React.memo(({ className = "w-32 h-32" }) => (
  <motion.div 
    className={`${className} text-white/90`}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.3 }}
  >
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5"
      className="w-full h-full"
    >
      {/* Book/Education Symbol */}
      <path 
        d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" 
        stroke="currentColor" 
        strokeWidth="1.5"
      />
      <path 
        d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" 
        stroke="currentColor" 
        strokeWidth="1.5"
        fill="none"
      />
      
      {/* AI/Neural Network Elements */}
      <circle cx="10" cy="8" r="1" fill="currentColor" />
      <circle cx="14" cy="8" r="1" fill="currentColor" />
      <circle cx="10" cy="12" r="1" fill="currentColor" />
      <circle cx="14" cy="12" r="1" fill="currentColor" />
      <circle cx="12" cy="10" r="1.5" fill="currentColor" />
      
      {/* Connection Lines */}
      <path d="M10 8L12 10L14 8" stroke="currentColor" strokeWidth="1" />
      <path d="M10 12L12 10L14 12" stroke="currentColor" strokeWidth="1" />
      <path d="M10 8L12 10L10 12" stroke="currentColor" strokeWidth="1" />
      <path d="M14 8L12 10L14 12" stroke="currentColor" strokeWidth="1" />
      
      {/* Graduation Cap */}
      <path d="M8 6L16 6L12 4L8 6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 4v2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  </motion.div>
));

AIEducationIcon.displayName = 'AIEducationIcon';

// Data constants for better organization
const USE_CASES_DATA = [
  {
    id: 0,
    title: "Intelligent Content Creation",
    description: "Students who may have hearing issues or prefer to read rather than listen to lectures may find it easier to access instructional content with customized AI transcription and text-to-speech technology.",
    image: "/image/pages_img/Intelligent-Content.webp",
    alt: "AI-Driven Content Creation"
  },
  {
    id: 1,
    title: "Personalized Learning",
    description: "AI tailors educational content and pace to individual student needs, improving engagement and outcomes.",
    image: "/image/pages_img/Personalize-Learning.jpg",
    alt: "Personalized Learning Pathways"
  },
  {
    id: 2,
    title: "Automated Grading",
    description: "Machine learning automates grading of assignments and assessments, saving educators time and providing instant feedback.",
    image: "/image/pages_img/automated-grading.jpg",
    alt: "Automated Assessment & Feedback"
  },
  {
    id: 3,
    title: "Intelligent Tutoring Systems",
    description: "AI-powered tutors provide real-time support, answer questions, and guide students through complex topics.",
    image: "/image/pages_img/Intelligent-Tutoring-Systems.jpg",
    alt: "Intelligent Tutoring Solutions"
  },
  {
    id: 4,
    title: "Content Recommendation",
    description: "AI recommends relevant learning resources and pathways based on student performance and interests.",
    image: "/image/pages_img/Content-Recommendation.jpg",
    alt: "Smart Content Recommendations"
  },
  {
    id: 5,
    title: "Adaptive Assessment",
    description: "Predictive models identify at-risk students and suggest interventions to improve retention and achievement.",
    image: "/image/pages_img/adaptive-assessment.jpg",
    alt: "Adaptive Student Assessment"
  },
  {
    id: 6,
    title: "Language Translation & Accessibility",
    description: "AI enables real-time translation and accessibility features, making education inclusive for diverse learners.",
    image: "/image/pages_img/Language-Translation.jpg",
    alt: "Real-Time Language & Accessibility"
  },
  {
    id: 7,
    title: "Administrative Automation",
    description: "AI streamlines administrative tasks such as scheduling, enrollment, and resource allocation in educational institutions.",
    image: "/image/pages_img/Administrative-Automation.jpg",
    alt: "Automated Administration"
  },
  {
    id: 8,
    title: "Intelligent Writing Assistants",
    description: "These tools use natural language processing (NLP) and machine learning algorithms to analyze the text and provide real-time feedback and suggestions to users.",
    image: "/image/pages_img/Intelligent-Content.webp",
    alt: "AI Writing Assistants"
  },
  {
    id: 9,
    title: "Predictive Analytics",
    description: "AI tools for teachers to analyze student data, including grades, attendance, and behavior, to find patterns and trends that can suggest a kid is having trouble and needs more help.",
    image: "/image/pages_img/PredictiveAnalytics.jpg",
    alt: "Predictive Student Analytics"
  },
];

const FAQ_DATA = [
  {
    id: 1,
    question: "What is EdTech?",
    answer: "EdTech, or Educational Technology, leverages digital platforms and intelligent tools to enhance teaching, learning, and administration. It encompasses online learning, AI-powered tutoring, digital classrooms, and more."
  },
  {
    id: 2,
    question: "How is AI used in EdTech?",
    answer: "AI powers personalized learning, automates grading, enables intelligent tutoring, recommends content, delivers predictive analytics, supports real-time translation, and streamlines administration—driving better outcomes and efficiency."
  },
  {
    id: 3,
    question: "What are the benefits of AI in education?",
    answer: "AI enables tailored learning, saves educators time, provides instant feedback, identifies students needing support, and makes education more accessible and inclusive."
  },
  {
    id: 4,
    question: "Are there challenges to using AI in EdTech?",
    answer: "Challenges include ensuring data privacy, minimizing bias, integrating with legacy systems, and providing equitable access. Success requires robust governance and inclusive design."
  },
  {
    id: 5,
    question: "Can AI replace teachers?",
    answer: "AI is a powerful enabler, not a replacement for educators. It automates routine tasks and delivers insights, allowing teachers to focus on personalized instruction and student engagement."
  }
];

const BENEFITS_DATA = [
  {
    icon: (
      <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 2.25c.38-1.13 2.12-1.13 2.5 0l.2.6a1.25 1.25 0 0 0 1.7.77l.56-.25c1.08-.48 2.13.57 1.65 1.65l-.25.56a1.25 1.25 0 0 0 .77 1.7l.6.2c1.13.38 1.13 2.12 0 2.5l-.6.2a1.25 1.25 0 0 0-.77 1.7l.25.56c.48 1.08-.57 2.13-1.65 1.65l-.56-.25a1.25 1.25 0 0 0-1.7.77l-.2.6c-.38 1.13-2.12 1.13-2.5 0l-.2-.6a1.25 1.25 0 0 0-1.7-.77l-.56.25c-1.08.48-2.13-.57-1.65-1.65l.25-.56a1.25 1.25 0 0 0-.77-1.7l-.6-.2c-1.13-.38-1.13-2.12 0-2.5l.6-.2a1.25 1.25 0 0 0 .77-1.7l-.25-.56c-.48-1.08.57-2.13 1.65-1.65l.56.25a1.25 1.25 0 0 0 1.7-.77l.2-.6z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Speed & Precision",
    description: "Deliver rapid, accurate educational insights minimizing delays and improving learning outcomes.",
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
    description: "Reduce costs by automating educational processes and streamlining learning workflows.",
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
    title: "Early Detection",
    description: "Identify learning challenges sooner for timely intervention and better educational outcomes.",
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
    title: "Scalability",
    description: "Deploy AI education solutions at scale supporting large student populations and remote learning.",
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
    description: "Ensure reliable, standardized educational results across institutions and learning environments.",
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
    title: "Decision Support",
    description: "Empower educators with data-driven recommendations for confident teaching decisions.",
    bgColor: "bg-blue-300/20",
    textColor: "text-blue-300",
    borderColor: "hover:border-blue-300"
  }
];

const STATS_DATA = [
  {
    value: "3+",
    label: "Years of AI Experience",
    description: "Hands-on success building and deploying AI education solutions."
  },
  {
    value: "20+",
    label: "Education Projects",
    description: "Tailored AI education solutions for unique learning challenges."
  },
  {
    value: "30+",
    label: "Custom AI Models",
    description: "Advanced AI models for learning analytics, content creation, and workflow automation."
  },
  {
    value: "10+",
    label: "Satisfied Clients",
    description: "Educational institutions with improved learning outcomes, efficiency, and business value."
  },
  {
    value: "🌍",
    label: "Global Impact",
    description: "Scalable AI education solutions worldwide."
  }
];

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

// Memoized components for better performance
const HeroSection: React.FC = React.memo(() => (
  <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900 overflow-hidden">
    <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/EdTechAI.avif')] bg-cover bg-center" />
    <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 text-white space-y-8">
        <div className="w-full">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight drop-shadow-lg w-full">
            AI in Education
          </h1>
          <p className="text-base md:text-lg text-gray-100 w-full whitespace-pre-line mt-4">
            Empower your educational institution with next-generation AI solutions driving innovation in personalized learning, intelligent tutoring, automated assessment, and predictive analytics for superior learning outcomes and efficiency.
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
));

HeroSection.displayName = 'HeroSection';

const MainContentSection: React.FC = React.memo(() => (
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
              src="/image/pages_img/AIconten.jpg"
              alt="Illustration of AI transforming education"
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
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-gray-900">
            Transforming Education with AI
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl">
            Our AI-powered platform leverages deep learning and predictive analytics to enable personalized learning, intelligent tutoring, and data-driven educational insights. By analyzing student performance, learning patterns, and educational content our system delivers accurate, real-time recommendations. Continuous learning ensures it evolves with new educational methodologies, improving outcomes and reducing learning gaps.
          </p>
        </motion.div>
      </div>
    </div>
  </AnimatedSection>
));

MainContentSection.displayName = 'MainContentSection';

const CapabilitiesSection: React.FC = React.memo(() => {
  const benefits = useMemo(() => BENEFITS_DATA, []);
  
  return (
    <AnimatedSection className="relative w-full flex items-center justify-center overflow-hidden bg-gradient-to-tr from-purple-50 to-white">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-1">Key Capabilities & Benefits</h2>
          <div className="flex justify-center mb-0">
            <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Unlock AI-powered speed, accuracy, and efficiency in education
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
  );
});

CapabilitiesSection.displayName = 'CapabilitiesSection';

const WhyChooseMeSection: React.FC = React.memo(() => {
  const stats = useMemo(() => STATS_DATA, []);
  
  return (
    <AnimatedSection className="relative w-full flex items-center justify-center overflow-hidden bg-gradient-to-tr from-purple-50 to-white">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-1">Why Choose Me?</h2>
          <div className="flex justify-center mb-0">
            <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Trusted expertise in AI education for forward-thinking institutions
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
  );
});

WhyChooseMeSection.displayName = 'WhyChooseMeSection';

const EdTechAI: React.FC = () => {
  // Custom hooks for state management
  const { openFAQ, toggleFAQ } = useFAQState();
  const { currentIndex, nextSlide, prevSlide } = useCarouselState(USE_CASES_DATA.length);
  
  // Memoized data to prevent unnecessary re-renders
  const useCases = useMemo(() => USE_CASES_DATA, []);
  const faqData = useMemo(() => FAQ_DATA, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 text-gray-900">
      <Navbar />
      
      <HeroSection />

      <MainContentSection />

      <CapabilitiesSection />

      {/* Use Cases Section */}
      <AnimatedCarousel
        useCases={useCases}
        title="AI Education Use Cases"
        subtitle="See how AI reshapes education for institutions and learners"
      />

      <WhyChooseMeSection />

      {/* FAQ Section */}
      <AnimatedFAQ
        faqData={faqData}
        title="Frequently Asked Questions"
      />
      
      <Footer />
    </div>
  );
};

export default EdTechAI; 