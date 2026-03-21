import React, { useState, useEffect } from "react";
import { Mail, Brain, Target, Zap } from "lucide-react";

interface OnboardingStep {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

interface AIOnboardingProcessProps {
  serviceName: string;
  steps?: OnboardingStep[];
}

const defaultSteps: OnboardingStep[] = [
  {
    icon: <Mail className="h-8 w-8" />,
    title: 'Contact Us',
    description: 'Reach out to start the conversation. Share your vision and requirements so we can understand your goals and how best to support you.',
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: 'Consultation & Discovery',
    description: 'Schedule a professional consultation with our experts. We\'ll discuss your project in detail, assess feasibility, and provide strategic recommendations.',
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: 'Receive a Detailed Proposal',
    description: 'Based on your requirements, we\'ll deliver a comprehensive proposal outlining the project scope, timeline, and transparent cost estimate.',
    color: "from-yellow-500 to-amber-500"
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: 'Project Kickoff & Delivery',
    description: 'Once approved, our dedicated specialists launch your project with a clear plan and open communication ensuring smooth, successful delivery.',
    color: "from-purple-500 to-violet-500"
  },
];

const AIOnboardingProcess: React.FC<AIOnboardingProcessProps> = ({ serviceName, steps }) => {
  const [isVisible, setIsVisible] = useState(false);
  const displaySteps = steps || defaultSteps;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-[#01010c] relative overflow-hidden py-12 sm:py-16">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px]"></div>
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className={`text-center space-y-4 mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
            AI Onboarding <span className="gradient-text-ai">Process</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Simple, transparent steps to <span className="text-gray-100 font-bold">launch your {serviceName} project</span>.
          </p>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mt-4 shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displaySteps.map((step, idx) => (
            <div key={idx} className={`relative group transition-all duration-700 ${isVisible ? 'fade-in' : 'opacity-0'}`} style={{ transitionDelay: `${idx * 0.15}s` }}>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/10 p-6 sm:p-8 text-center transition-all duration-300 h-full">
                <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>
                <h3 className="font-bold text-white text-base sm:text-lg mb-3">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{step.description}</p>
              </div>
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-black text-sm shadow-lg shadow-blue-600/30">
                {idx + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIOnboardingProcess;
