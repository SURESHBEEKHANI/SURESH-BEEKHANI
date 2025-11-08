import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, Brain, Clock, Users, Download } from "lucide-react";

const PatientDiagnosticSystem: React.FC = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/Patient-Diagnostic-System.webp')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto container-padding py-16 sm:py-24">
          <div className="text-center text-white space-y-6">
            <h1 className="heading-1 font-extrabold leading-tight tracking-tight drop-shadow-lg">
              Patient Diagnostic System
            </h1>
            <p className="body-large text-gray-100 max-w-3xl mx-auto leading-relaxed">
              AI chatbots assist in rapid disease diagnosis, reducing doctor workload and improving patient care through intelligent symptom analysis and medical decision support.
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
                <Brain className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Powered Analysis</h3>
                <p className="text-gray-700">Advanced machine learning algorithms analyze patient symptoms and medical history for accurate diagnostic suggestions.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <Clock className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Rapid Response</h3>
                <p className="text-gray-700">Instant diagnostic assistance available 24/7, reducing wait times and improving patient satisfaction.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Healthcare Support</h3>
                <p className="text-gray-700">Reduces physician workload while maintaining high-quality patient care and diagnostic accuracy.</p>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">Key Features</h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Intelligent Symptom Analysis</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Natural language processing for symptom interpretation</li>
                    <li>• Multi-modal data integration (text, voice, images)</li>
                    <li>• Real-time risk assessment and triage</li>
                    <li>• Evidence-based diagnostic recommendations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Clinical Decision Support</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Integration with medical databases and guidelines</li>
                    <li>• Differential diagnosis suggestions</li>
                    <li>• Treatment pathway recommendations</li>
                    <li>• Drug interaction and allergy alerts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
                <p className="text-gray-700">Reduction in diagnostic time</p>
              </div>
              <div className="text-center p-6 bg-indigo-50 rounded-xl">
                <div className="text-3xl font-bold text-indigo-600 mb-2">92%</div>
                <p className="text-gray-700">Diagnostic accuracy rate</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">60%</div>
                <p className="text-gray-700">Reduced physician workload</p>
              </div>
              <div className="text-center p-6 bg-cyan-50 rounded-xl">
                <div className="text-3xl font-bold text-cyan-600 mb-2">24/7</div>
                <p className="text-gray-700">Availability for patients</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Ready to Transform Patient Care?</h2>
              <p className="text-lg mb-6 opacity-90">Implement our AI diagnostic system to enhance healthcare delivery and patient outcomes.</p>
              <a href="https://drive.google.com/uc?export=download&id=10JBNB6cSGBNS_Gbm2CGqMUXotInMlpnG" className="btn-primary bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 inline-flex items-center gap-2 font-bold shadow-xl px-8 py-4 text-lg">
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

export default PatientDiagnosticSystem;