import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, Eye, Shield, Target } from "lucide-react";

const EarlyDiseaseDetectionAI: React.FC = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center hero-bg overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/Early-Disease-Detection.jpg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto container-padding py-16 sm:py-24">
          <div className="text-center text-white space-y-6">
            <h1 className="heading-1 font-extrabold leading-tight tracking-tight drop-shadow-lg gradient-text-ai neon-text">
              Early Disease Detection AI
            </h1>
            <p className="body-large ai-text-primary max-w-3xl mx-auto leading-relaxed">
              <span className="gradient-text">Predictive analytics</span> and medical imaging for early detection of diseases like cancer, cardiovascular, or neurological disorders, enabling timely intervention and improved outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 ai-section">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Overview */}
          <div className="mb-16">
            <h2 className="heading-2 ai-heading mb-8 text-center">Detection Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="ai-card-glow p-6 rounded-xl border border-ai-purple/30 hover:scale-105 transition-all duration-500">
                <Eye className="h-12 w-12 text-ai-purple mb-4 ai-glow" />
                <h3 className="text-xl font-bold ai-heading mb-3">Medical Imaging Analysis</h3>
                <p className="ai-text-primary">Advanced computer vision algorithms analyze medical images to detect early signs of disease with high precision.</p>
              </div>
              <div className="ai-card-glow p-6 rounded-xl border border-ai-cyan/30 hover:scale-105 transition-all duration-500">
                <Target className="h-12 w-12 text-ai-cyan mb-4 ai-glow" />
                <h3 className="text-xl font-bold ai-heading mb-3">Predictive Analytics</h3>
                <p className="ai-text-primary">Machine learning models predict disease risk based on patient data, lifestyle factors, and genetic markers.</p>
              </div>
              <div className="ai-card-glow p-6 rounded-xl border border-ai-purple/30 hover:scale-105 transition-all duration-500">
                <Shield className="h-12 w-12 text-ai-purple mb-4 ai-glow" />
                <h3 className="text-xl font-bold ai-heading mb-3">Preventive Care</h3>
                <p className="ai-text-primary">Early detection enables proactive treatment strategies and preventive care measures for better patient outcomes.</p>
              </div>
            </div>
          </div>

          {/* Disease Categories */}
          <div className="mb-16">
            <h2 className="heading-2 ai-heading mb-8 text-center">Disease Detection Areas</h2>
            <div className="ai-card-glow rounded-2xl p-8 border border-ai-purple/20">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-bold ai-heading mb-4 gradient-text">Cancer Detection</h3>
                  <ul className="space-y-3 ai-text-primary">
                    <li>• Breast cancer screening from mammograms</li>
                    <li>• Lung cancer detection in CT scans</li>
                    <li>• Skin cancer analysis from dermoscopy</li>
                    <li>• Prostate cancer risk assessment</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold ai-heading mb-4 gradient-text">Cardiovascular Diseases</h3>
                  <ul className="space-y-3 ai-text-primary">
                    <li>• Heart disease risk prediction</li>
                    <li>• Arrhythmia detection from ECG</li>
                    <li>• Coronary artery disease screening</li>
                    <li>• Heart failure early warning signs</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold ai-heading mb-4 gradient-text">Neurological Disorders</h3>
                  <ul className="space-y-3 ai-text-primary">
                    <li>• Alzheimer's disease early detection</li>
                    <li>• Parkinson's disease screening</li>
                    <li>• Stroke risk assessment</li>
                    <li>• Multiple sclerosis identification</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="mb-16">
            <h2 className="heading-2 ai-heading mb-8 text-center">Performance Metrics</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 ai-card-glow rounded-xl border border-ai-purple/30 hover:scale-105 transition-all duration-500">
                <div className="text-3xl font-bold text-ai-purple mb-2 ai-glow">94%</div>
                <p className="ai-text-primary">Detection accuracy</p>
              </div>
              <div className="text-center p-6 ai-card-glow rounded-xl border border-ai-cyan/30 hover:scale-105 transition-all duration-500">
                <div className="text-3xl font-bold text-ai-cyan mb-2 ai-glow">6 months</div>
                <p className="ai-text-primary">Earlier detection</p>
              </div>
              <div className="text-center p-6 ai-card-glow rounded-xl border border-ai-purple/30 hover:scale-105 transition-all duration-500">
                <div className="text-3xl font-bold text-ai-purple mb-2 ai-glow">78%</div>
                <p className="ai-text-primary">Improved survival rates</p>
              </div>
              <div className="text-center p-6 ai-card-glow rounded-xl border border-ai-cyan/30 hover:scale-105 transition-all duration-500">
                <div className="text-3xl font-bold text-ai-cyan mb-2 ai-glow">50%</div>
                <p className="ai-text-primary">Reduced healthcare costs</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="ai-card-glow rounded-2xl p-8 border border-ai-purple/30 bg-gradient-to-r from-ai-purple/20 to-ai-cyan/20">
              <h2 className="text-2xl font-bold mb-4 ai-heading gradient-text-ai neon-text">Save Lives Through Early Detection</h2>
              <p className="text-lg mb-6 ai-text-primary">Implement our AI system to detect diseases earlier and improve patient outcomes significantly.</p>
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

export default EarlyDiseaseDetectionAI;