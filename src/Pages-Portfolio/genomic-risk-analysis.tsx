import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, Dna, Shield, TrendingUp } from "lucide-react";

const GenomicRiskAnalysis: React.FC = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/Genomic-Risk-Analysis.jpg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto container-padding py-16 sm:py-24">
          <div className="text-center text-white space-y-6">
            <h1 className="heading-1 font-extrabold leading-tight tracking-tight drop-shadow-lg">
              Genomic Risk Analysis
            </h1>
            <p className="body-large text-gray-100 max-w-3xl mx-auto leading-relaxed">
              AI analyzes genetic data to identify disease susceptibility and provide personalized preventive care recommendations based on individual genetic profiles.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Overview */}
          <div className="mb-16">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">Genetic Analysis Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <Dna className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Genetic Profiling</h3>
                <p className="text-gray-700">Comprehensive analysis of genetic variants, mutations, and polymorphisms to assess disease risk factors.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <Shield className="h-12 w-12 text-violet-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Preventive Strategies</h3>
                <p className="text-gray-700">Personalized prevention plans based on genetic predispositions and lifestyle factors for optimal health outcomes.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <TrendingUp className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Risk Prediction</h3>
                <p className="text-gray-700">Advanced algorithms predict disease likelihood and progression timelines for proactive healthcare planning.</p>
              </div>
            </div>
          </div>

          {/* Risk Categories */}
          <div className="mb-16">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">Disease Risk Assessment</h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Cancer Susceptibility</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• BRCA1/BRCA2 breast cancer risk</li>
                    <li>• Lynch syndrome colorectal cancer</li>
                    <li>• p53 tumor suppressor mutations</li>
                    <li>• Hereditary cancer syndromes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Cardiovascular Risks</h3>
                  <ul className="space-y-3 text-gray-700">
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
            <div className="bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Unlock Your Genetic Health Insights</h2>
              <p className="text-lg mb-6 opacity-90">Discover your genetic predispositions and take proactive steps for better health outcomes.</p>
              <a href="/#contact" className="btn-primary bg-white text-purple-600 hover:bg-gray-100 inline-flex items-center gap-2">
                Analyze Genetics
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