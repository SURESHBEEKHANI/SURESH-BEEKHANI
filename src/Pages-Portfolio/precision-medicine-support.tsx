import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, Target, Microscope, Users, Download } from "lucide-react";

const PrecisionMedicineSupport: React.FC = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/Precision-Medicine.jpg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto container-padding py-16 sm:py-24">
          <div className="text-center text-white space-y-6">
            <h1 className="heading-1 font-extrabold leading-tight tracking-tight drop-shadow-lg">
              Precision Medicine Support
            </h1>
            <p className="body-large text-gray-100 max-w-3xl mx-auto leading-relaxed">
              AI predicts patient-specific treatment plans using genetic and molecular data, enabling personalized medicine for optimal therapeutic outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Overview */}
          <div className="mb-16">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">System Overview</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <Target className="h-12 w-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Targeted Therapy</h3>
                <p className="text-gray-700">AI-driven selection of optimal treatments based on individual patient genetic profiles and biomarkers.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <Microscope className="h-12 w-12 text-cyan-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Molecular Analysis</h3>
                <p className="text-gray-700">Advanced analysis of genomic, proteomic, and metabolomic data for comprehensive treatment planning.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Care</h3>
                <p className="text-gray-700">Tailored treatment protocols that consider individual patient characteristics and response patterns.</p>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">Key Features</h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Oncology Precision Medicine</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Comprehensive tumor genetic profiling</li>
                    <li>• Immunotherapy response prediction</li>
                    <li>• Chemotherapy sensitivity testing</li>
                    <li>• Targeted cancer therapy selection</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Pharmacogenomics</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Drug metabolism prediction analysis</li>
                    <li>• Adverse reaction risk assessment</li>
                    <li>• Optimal dosage recommendations</li>
                    <li>• Alternative medication suggestions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Biomarker Discovery</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Disease-specific biomarker identification</li>
                    <li>• Treatment response biomarkers</li>
                    <li>• Prognostic marker analysis</li>
                    <li>• Companion diagnostic development</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Treatment Optimization</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Personalized treatment protocol design</li>
                    <li>• Combination therapy optimization</li>
                    <li>• Treatment efficacy monitoring</li>
                    <li>• Adaptive therapy adjustments</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-teal-50 rounded-xl">
                <div className="text-3xl font-bold text-teal-600 mb-2">85%</div>
                <p className="text-gray-700">Treatment effectiveness</p>
              </div>
              <div className="text-center p-6 bg-cyan-50 rounded-xl">
                <div className="text-3xl font-bold text-cyan-600 mb-2">60%</div>
                <p className="text-gray-700">Reduced adverse effects</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">70%</div>
                <p className="text-gray-700">Improved patient outcomes</p>
              </div>
              <div className="text-center p-6 bg-sky-50 rounded-xl">
                <div className="text-3xl font-bold text-sky-600 mb-2">50%</div>
                <p className="text-gray-700">Lower treatment costs</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Revolutionize Patient Treatment</h2>
              <p className="text-lg mb-6 opacity-90">Implement precision medicine to deliver personalized treatments with better outcomes.</p>
              <a href="/#contact" className="btn-primary bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 inline-flex items-center gap-2 font-bold shadow-xl px-8 py-4 text-lg">
                <Download className="h-5 w-5" />
                Download Case Study
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default PrecisionMedicineSupport;