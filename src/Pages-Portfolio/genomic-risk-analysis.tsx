import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, Dna, Shield, TrendingUp } from "lucide-react";

const GenomicRiskAnalysis: React.FC = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center hero-bg overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/Genomic-Risk-Analysis.jpg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto container-padding py-16 sm:py-24">
          <div className="text-center text-white space-y-6">
            <h1 className="heading-1 font-extrabold leading-tight tracking-tight drop-shadow-lg gradient-text-ai neon-text">
              Genomic Risk Analysis
            </h1>
            <p className="body-large ai-text-primary max-w-3xl mx-auto leading-relaxed">
              <span className="gradient-text">AI analyzes genetic data</span> to identify disease susceptibility and provide personalized preventive care recommendations based on individual genetic profiles.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 ai-section">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Overview */}
          <div className="mb-16">
            <h2 className="heading-2 ai-heading mb-8 text-center">Genetic Analysis Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="ai-card-glow p-6 rounded-xl border border-ai-cyan/30 hover:scale-105 transition-all duration-500">
                <Dna className="h-12 w-12 text-ai-cyan mb-4 ai-glow" />
                <h3 className="text-xl font-bold ai-heading mb-3">Genetic Profiling</h3>
                <p className="ai-text-primary">Comprehensive analysis of genetic variants, mutations, and polymorphisms to assess disease risk factors.</p>
              </div>
              <div className="ai-card-glow p-6 rounded-xl border border-ai-purple/30 hover:scale-105 transition-all duration-500">
                <Shield className="h-12 w-12 text-ai-purple mb-4 ai-glow" />
                <h3 className="text-xl font-bold ai-heading mb-3">Preventive Strategies</h3>
                <p className="ai-text-primary">Personalized prevention plans based on genetic predispositions and lifestyle factors for optimal health outcomes.</p>
              </div>
              <div className="ai-card-glow p-6 rounded-xl border border-ai-cyan/30 hover:scale-105 transition-all duration-500">
                <TrendingUp className="h-12 w-12 text-ai-cyan mb-4 ai-glow" />
                <h3 className="text-xl font-bold ai-heading mb-3">Risk Prediction</h3>
                <p className="ai-text-primary">Advanced algorithms predict disease likelihood and progression timelines for proactive healthcare planning.</p>
              </div>
            </div>
          </div>

          {/* Risk Categories */}
          <div className="mb-16">
            <h2 className="heading-2 ai-heading mb-8 text-center">Disease Risk Assessment</h2>
            <div className="ai-card-glow rounded-2xl p-8 border border-ai-cyan/20">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold ai-heading mb-4 gradient-text">Cancer Susceptibility</h3>
                  <ul className="space-y-3 ai-text-primary">
                    <li>• BRCA1/BRCA2 breast cancer risk</li>
                    <li>• Lynch syndrome colorectal cancer</li>
                    <li>• p53 tumor suppressor mutations</li>
                    <li>• Hereditary cancer syndromes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold ai-heading mb-4 gradient-text">Cardiovascular Risks</h3>
                  <ul className="space-y-3 ai-text-primary">
                    <li>• Familial hypercholesterolemia</li>
                    <li>• Hypertrophic cardiomyopathy</li>
                    <li>• Coronary artery disease predisposition</li>
                    <li>• Arrhythmia genetic markers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="ai-card-glow rounded-2xl p-8 border border-ai-cyan/30 bg-gradient-to-r from-ai-cyan/20 to-ai-purple/20">
              <h2 className="text-2xl font-bold mb-4 ai-heading gradient-text-ai neon-text">Unlock Your Genetic Health Insights</h2>
              <p className="text-lg mb-6 ai-text-primary">Discover your genetic predispositions and take proactive steps for better health outcomes.</p>
              <a href="/#contact" className="btn-primary inline-flex items-center gap-2 min-h-[48px] px-8 py-4 text-lg font-semibold">
                Learn More & Analyze Genetics
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

export default GenomicRiskAnalysis;