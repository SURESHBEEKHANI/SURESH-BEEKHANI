import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedHero from "../components/ui/AnimatedHero";
import AnimatedSection from "../components/ui/AnimatedSection";
import AnimatedCard from "../components/ui/AnimatedCard";
import AnimatedCarousel from "../components/ui/AnimatedCarousel";
import AnimatedFAQ from "../components/ui/AnimatedFAQ";

const EdTechAI: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const useCases = useMemo(() => [
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
      title: "adaptive assessment",
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
  ], []);

  const faqData = useMemo(() => [
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
  ], []);

  const benefits = useMemo(() => [
    {
      icon: (
        <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 2.25c.38-1.13 2.12-1.13 2.5 0l.2.6a1.25 1.25 0 0 0 1.7.77l.56-.25c1.08-.48 2.13.57 1.65 1.65l-.25.56a1.25 1.25 0 0 0 .77 1.7l.6.2c1.13.38 1.13 2.12 0 2.5l-.6.2a1.25 1.25 0 0 0-.77 1.7l.25.56c.48 1.08-.57 2.13-1.65 1.65l-.56-.25a1.25 1.25 0 0 0-1.7.77l-.2.6c-.38 1.13-2.12 1.13-2.5 0l-.2-.6a1.25 1.25 0 0 0-1.7-.77l-.56.25c-1.08.48-2.13-.57-1.65-1.65l.25-.56a1.25 1.25 0 0 0-.77-1.7l-.6-.2c-1.13-.38-1.13-2.12 0-2.5l.6-.2a1.25 1.25 0 0 0 .77-1.7l-.25-.56c-.48-1.08.57-2.13 1.65-1.65l.56.25a1.25 1.25 0 0 0 1.7-.77l.2-.6z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      title: "Operational Excellence",
      description: "Leverage AI and ML to automate repetitive processes, boost productivity, and streamline operations for measurable efficiency gains.",
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
      title: "Cost Optimization",
      description: "Reduce operational expenses and maximize ROI by automating workflows and delivering scalable, cost-effective learning solutions.",
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
      title: "Superior Learning Outcomes",
      description: "Drive student success with personalized learning, timely interventions, and precise assessments powered by AI and ML.",
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
      title: "New Revenue Opportunities",
      description: "Unlock innovative business models with adaptive learning, virtual tutoring, and automated content creation services.",
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
      title: "Optimized Resource Allocation",
      description: "Predict demand and allocate resources efficiently, ensuring optimal outcomes for both learners and institutions.",
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
      title: "Sustainable Competitive Edge",
      description: "Stay ahead with AI-driven solutions that enhance educational value, improve outcomes, and reduce costs for your organization.",
      bgColor: "bg-blue-300/20",
      textColor: "text-blue-300",
      borderColor: "hover:border-blue-300"
    }
  ], []);

  const stats = useMemo(() => [
    {
      value: "3+",
      label: "Years of Industry Experience",
      description: "Over three years of hands-on EdTech AI development, delivering measurable value for educators and learners."
    },
    {
      value: "20+",
      label: "Successful EdTech Projects",
      description: "Delivered 20+ custom AI solutions, each tailored to unique educational challenges and goals."
    },
    {
      value: "30+",
      label: "AI Models Engineered",
      description: "Built 30+ advanced AI models for adaptive learning, content recommendations, and student analytics."
    },
    {
      value: "10+",
      label: "Institutional Partners",
      description: "Collaborated with 10+ educational institutions, driving measurable improvements in learning and efficiency."
    },
    {
      value: "🌍",
      label: "Global Clientele",
      description: "Delivering scalable, inclusive EdTech AI solutions to organizations worldwide."
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
        title="Empowering Education with AI"
        subtitle="Transform learning experiences with AI-driven personalization, intelligent support, and actionable insights for educators and students alike."
        highlightText="Education with AI"
        backgroundImage="/image/pages_img/EdTechAI.avif"
        gradientFrom="from-blue-800/90"
        gradientVia="via-green-700/90"
        gradientTo="to-blue-900/90"
        buttonText="Talk to an Expert"
        buttonLink="mailto:sureshbeekhani@26gamil.com"
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
                  src="/image/pages_img/AIconten.jpg"
                  alt="AI in Education - Digital Transformation"
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
                  The Future of <span className="text-green-700">Education</span> with AI
                </h2>
              </div>
              <p className="text-xl lg:text-2xl leading-relaxed text-gray-800 max-w-2xl">
                Artificial intelligence—including <span className="font-semibold text-green-700">machine learning</span> and <span className="font-semibold text-blue-700">natural language processing</span>—is reshaping education by enabling adaptive learning, automating routine tasks, and delivering data-driven insights for superior outcomes.
              </p>
              <p className="text-lg lg:text-xl leading-relaxed text-gray-800 max-w-2xl">
                From tailored lesson plans to predictive analytics, AI empowers educators and learners to achieve more, driving engagement, improving retention, and making quality education accessible to all.
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
              AI Capabilities & Business Impact
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Explore the strategic advantages of integrating AI and machine learning into EdTech solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedCard
                key={index}
                delay={index * 0.1}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col items-center space-y-4 text-center">
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
        title="Transformative AI Use Cases in EdTech"
        subtitle="See how AI is redefining education through real-world applications and measurable impact."
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
              Trusted expertise and a proven record of delivering impactful EdTech AI solutions for forward-thinking organizations.
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

export default EdTechAI; 