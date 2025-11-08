import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, MessageCircle, Clock, Users } from "lucide-react";

const AIChatbotsPatientSupport: React.FC = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/Patient-Support-Chatbot.jpg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto container-padding py-16 sm:py-24">
          <div className="text-center text-white space-y-6">
            <h1 className="heading-1 font-extrabold leading-tight tracking-tight drop-shadow-lg gradient-text-ai neon-text">
              AI Chatbots for Patient Support
            </h1>
            <p className="body-large ai-text-primary max-w-3xl mx-auto leading-relaxed">
              Intelligent AI chatbots handle inquiries, schedule appointments, and provide <span className="gradient-text">24/7 patient assistance</span>, improving healthcare accessibility and patient satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 ai-section">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Overview */}
          <div className="mb-16">
            <h2 className="heading-2 ai-heading mb-8 text-center">Support Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="ai-card-glow p-6 rounded-xl border border-ai-cyan/30 hover:scale-105 transition-all duration-500">
                <MessageCircle className="h-12 w-12 text-ai-cyan mb-4 ai-glow" />
                <h3 className="text-xl font-bold ai-heading mb-3">Intelligent Conversations</h3>
                <p className="ai-text-primary">Natural language processing enables human-like conversations for patient inquiries and support needs.</p>
              </div>
              <div className="ai-card-glow p-6 rounded-xl border border-ai-purple/30 hover:scale-105 transition-all duration-500">
                <Clock className="h-12 w-12 text-ai-purple mb-4 ai-glow" />
                <h3 className="text-xl font-bold ai-heading mb-3">24/7 Availability</h3>
                <p className="ai-text-primary">Round-the-clock patient support ensuring help is always available when patients need it most.</p>
              </div>
              <div className="ai-card-glow p-6 rounded-xl border border-ai-cyan/30 hover:scale-105 transition-all duration-500">
                <Users className="h-12 w-12 text-ai-cyan mb-4 ai-glow" />
                <h3 className="text-xl font-bold ai-heading mb-3">Personalized Care</h3>
                <p className="ai-text-primary">Tailored responses based on patient history, preferences, and specific healthcare needs.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="ai-card-glow rounded-2xl p-8 border border-ai-cyan/30 bg-gradient-to-r from-ai-cyan/20 to-ai-purple/20">
              <h2 className="text-2xl font-bold mb-4 ai-heading gradient-text-ai neon-text">Ready to Enhance Patient Support?</h2>
              <p className="text-lg mb-6 ai-text-primary">Deploy intelligent AI chatbots to provide 24/7 patient assistance and improve healthcare accessibility.</p>
              <a href="/#contact" className="btn-primary inline-flex items-center gap-2 min-h-[48px] px-8 py-4 text-lg font-semibold">
                Learn More & Get Started
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default AIChatbotsPatientSupport;