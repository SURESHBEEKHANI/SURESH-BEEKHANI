import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, Eye, Shield, Target, Download } from "lucide-react";

const EarlyDiseaseDetectionAI: React.FC = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/Early-Disease-Detection.jpg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto container-padding py-16 sm:py-24">
          <div className="text-center text-white space-y-6">
            <h1 className="heading-1 font-extrabold leading-tight tracking-tight drop-shadow-lg">
              Early Disease Detection AI
            </h1>
            <p className="body-large text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Predictive analytics and medical imaging for early detection of diseases like cancer, cardiovascular, or neurological disorders, enabling timely intervention and improved outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Overview */}
          <div className="mb-16">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">Detection Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <Eye className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Medical Imaging Analysis</h3>
                <p className="text-gray-700">Advanced computer vision algorithms analyze medical images to detect early signs of disease with high precision.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <Target className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Predictive Analytics</h3>
                <p className="text-gray-700">Machine learning models predict disease risk based on patient data, lifestyle factors, and genetic markers.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Preventive Care</h3>
                <p className="text-gray-700">Early detection enables proactive treatment strategies and preventive care measures for better patient outcomes.</p>
              </div>
            </div>
          </div>

          {/* Disease Categories */}
          <div className="mb-16">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">Disease Detection Areas</h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Cancer Detection</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Breast cancer screening from mammograms</li>
                    <li>• Lung cancer detection in CT scans</li>
                    <li>• Skin cancer analysis from dermoscopy</li>
                    <li>• Prostate cancer risk assessment</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Cardiovascular Diseases</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Heart disease risk prediction</li>
                    <li>• Arrhythmia detection from ECG</li>
                    <li>• Coronary artery disease screening</li>
                    <li>• Heart failure early warning signs</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Neurological Disorders</h3>
                  <ul className="space-y-3 text-gray-700">
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
            <h2 className="heading-2 text-gray-900 mb-8 text-center">Performance Metrics</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <div className="text-3xl font-bold text-purple-600 mb-2">94%</div>
                <p className="text-gray-700">Detection accuracy</p>
              </div>
              <div className="text-center p-6 bg-indigo-50 rounded-xl">
                <div className="text-3xl font-bold text-indigo-600 mb-2">6 months</div>
                <p className="text-gray-700">Earlier detection</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">78%</div>
                <p className="text-gray-700">Improved survival rates</p>
              </div>
              <div className="text-center p-6 bg-cyan-50 rounded-xl">
                <div className="text-3xl font-bold text-cyan-600 mb-2">50%</div>
                <p className="text-gray-700">Reduced healthcare costs</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Save Lives Through Early Detection</h2>
              <p className="text-lg mb-6 opacity-90">Implement our AI system to detect diseases earlier and improve patient outcomes significantly.</p>
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

export default EarlyDiseaseDetectionAI;