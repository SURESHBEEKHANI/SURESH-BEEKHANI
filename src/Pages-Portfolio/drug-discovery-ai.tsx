import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, Atom, Zap, FlaskConical } from "lucide-react";

const DrugDiscoveryAI: React.FC = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-emerald-600 via-green-600 to-lime-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/Drug-Discovery-AI.jpg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto container-padding py-16 sm:py-24">
          <div className="text-center text-white space-y-6">
            <h1 className="heading-1 font-extrabold leading-tight tracking-tight drop-shadow-lg">
              Drug Discovery & Molecule Prediction AI
            </h1>
            <p className="body-large text-gray-100 max-w-3xl mx-auto leading-relaxed">
              AI predicts molecular structures and identifies promising drug candidates faster for research labs, accelerating pharmaceutical development.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Overview */}
          <div className="mb-16">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">AI-Powered Discovery</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <Atom className="h-12 w-12 text-emerald-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Molecular Prediction</h3>
                <p className="text-gray-700">Advanced AI algorithms predict molecular structures and properties for novel drug compound development.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <Zap className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Accelerated Research</h3>
                <p className="text-gray-700">Dramatically reduce drug discovery timelines from years to months through AI-powered screening and optimization.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <FlaskConical className="h-12 w-12 text-lime-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Virtual Screening</h3>
                <p className="text-gray-700">Computational screening of millions of compounds to identify the most promising drug candidates.</p>
              </div>
            </div>
          </div>

          {/* Discovery Process */}
          <div className="mb-16">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">AI Discovery Pipeline</h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Target Identification</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Protein structure prediction and analysis</li>
                    <li>• Disease pathway mapping</li>
                    <li>• Biomarker discovery and validation</li>
                    <li>• Drug target prioritization</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Lead Optimization</h3>
                  <ul className="space-y-3 text-gray-700">
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
            <h2 className="heading-2 text-gray-900 mb-8 text-center">Discovery Impact</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-emerald-50 rounded-xl">
                <div className="text-3xl font-bold text-emerald-600 mb-2">80%</div>
                <p className="text-gray-700">Faster discovery timeline</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <div className="text-3xl font-bold text-green-600 mb-2">60%</div>
                <p className="text-gray-700">Reduced development costs</p>
              </div>
              <div className="text-center p-6 bg-lime-50 rounded-xl">
                <div className="text-3xl font-bold text-lime-600 mb-2">95%</div>
                <p className="text-gray-700">Prediction accuracy</p>
              </div>
              <div className="text-center p-6 bg-teal-50 rounded-xl">
                <div className="text-3xl font-bold text-teal-600 mb-2">10x</div>
                <p className="text-gray-700">More compounds screened</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Accelerate Drug Discovery</h2>
              <p className="text-lg mb-6 opacity-90">Transform pharmaceutical research with AI-powered molecular prediction and drug discovery.</p>
              <a href="/#contact" className="btn-primary bg-white text-emerald-600 hover:bg-gray-100 inline-flex items-center gap-2">
                Discover Faster
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