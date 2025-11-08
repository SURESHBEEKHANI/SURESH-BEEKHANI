import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, Atom, Zap, FlaskConical } from "lucide-react";

const DrugDiscoveryAI: React.FC = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center hero-bg overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/Drug-Discovery-AI.jpg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto container-padding py-16 sm:py-24">
          <div className="text-center text-white space-y-6">
            <h1 className="heading-1 font-extrabold leading-tight tracking-tight drop-shadow-lg gradient-text-ai neon-text">
              Drug Discovery & Molecule Prediction AI
            </h1>
            <p className="body-large ai-text-primary max-w-3xl mx-auto leading-relaxed">
              AI predicts molecular structures and identifies <span className="gradient-text">promising drug candidates</span> faster for research labs, accelerating pharmaceutical development.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 ai-section">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Overview */}
          <div className="mb-16">
            <h2 className="heading-2 ai-heading mb-8 text-center">AI-Powered Discovery</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="ai-card-glow p-6 rounded-xl border border-ai-purple/30 hover:scale-105 transition-all duration-500">
                <Atom className="h-12 w-12 text-ai-purple mb-4 ai-glow" />
                <h3 className="text-xl font-bold ai-heading mb-3">Molecular Prediction</h3>
                <p className="ai-text-primary">Advanced AI algorithms predict molecular structures and properties for novel drug compound development.</p>
              </div>
              <div className="ai-card-glow p-6 rounded-xl border border-ai-cyan/30 hover:scale-105 transition-all duration-500">
                <Zap className="h-12 w-12 text-ai-cyan mb-4 ai-glow" />
                <h3 className="text-xl font-bold ai-heading mb-3">Accelerated Research</h3>
                <p className="ai-text-primary">Dramatically reduce drug discovery timelines from years to months through AI-powered screening and optimization.</p>
              </div>
              <div className="ai-card-glow p-6 rounded-xl border border-ai-purple/30 hover:scale-105 transition-all duration-500">
                <FlaskConical className="h-12 w-12 text-ai-purple mb-4 ai-glow" />
                <h3 className="text-xl font-bold ai-heading mb-3">Virtual Screening</h3>
                <p className="ai-text-primary">Computational screening of millions of compounds to identify the most promising drug candidates.</p>
              </div>
            </div>
          </div>

          {/* Discovery Process */}
          <div className="mb-16">
            <h2 className="heading-2 ai-heading mb-8 text-center">AI Discovery Pipeline</h2>
            <div className="ai-card-glow rounded-2xl p-8 border border-ai-purple/20">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold ai-heading mb-4 gradient-text">Target Identification</h3>
                  <ul className="space-y-3 ai-text-primary">
                    <li>• Protein structure prediction and analysis</li>
                    <li>• Disease pathway mapping</li>
                    <li>• Biomarker discovery and validation</li>
                    <li>• Drug target prioritization</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold ai-heading mb-4 gradient-text">Lead Optimization</h3>
                  <ul className="space-y-3 ai-text-primary">
                    <li>• ADMET property prediction</li>
                    <li>• Toxicity and safety assessment</li>
                    <li>• Drug-drug interaction analysis</li>
                    <li>• Formulation optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="mb-16">
            <h2 className="heading-2 ai-heading mb-8 text-center">Discovery Impact</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 ai-card-glow rounded-xl border border-ai-purple/30 hover:scale-105 transition-all duration-500">
                <div className="text-3xl font-bold text-ai-purple mb-2 ai-glow">80%</div>
                <p className="ai-text-primary">Faster discovery timeline</p>
              </div>
              <div className="text-center p-6 ai-card-glow rounded-xl border border-ai-cyan/30 hover:scale-105 transition-all duration-500">
                <div className="text-3xl font-bold text-ai-cyan mb-2 ai-glow">60%</div>
                <p className="ai-text-primary">Reduced development costs</p>
              </div>
              <div className="text-center p-6 ai-card-glow rounded-xl border border-ai-purple/30 hover:scale-105 transition-all duration-500">
                <div className="text-3xl font-bold text-ai-purple mb-2 ai-glow">95%</div>
                <p className="ai-text-primary">Prediction accuracy</p>
              </div>
              <div className="text-center p-6 ai-card-glow rounded-xl border border-ai-cyan/30 hover:scale-105 transition-all duration-500">
                <div className="text-3xl font-bold text-ai-cyan mb-2 ai-glow">10x</div>
                <p className="ai-text-primary">More compounds screened</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="ai-card-glow rounded-2xl p-8 border border-ai-purple/30 bg-gradient-to-r from-ai-purple/20 to-ai-cyan/20">
              <h2 className="text-2xl font-bold mb-4 ai-heading gradient-text-ai neon-text">Accelerate Drug Discovery</h2>
              <p className="text-lg mb-6 ai-text-primary">Transform pharmaceutical research with AI-powered molecular prediction and drug discovery.</p>
              <a href="/#contact" className="btn-primary inline-flex items-center gap-2 min-h-[48px] px-8 py-4 text-lg font-semibold">
                Learn More & Discover Faster
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

export default DrugDiscoveryAI;