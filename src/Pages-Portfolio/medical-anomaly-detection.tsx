import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, Search, AlertCircle, Target, Download } from "lucide-react";

const MedicalAnomalyDetection: React.FC = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-red-600 via-rose-600 to-pink-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/Medical-Anomaly-Detection.jpg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto container-padding py-16 sm:py-24">
          <div className="text-center text-white space-y-6">
            <h1 className="heading-1 font-extrabold leading-tight tracking-tight drop-shadow-lg">
              Medical Anomaly Detection
            </h1>
            <p className="body-large text-gray-100 max-w-3xl mx-auto leading-relaxed">
              AI identifies subtle anomalies in medical imaging or patient data that might be missed by human review, enhancing diagnostic accuracy and patient safety.
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
                <Search className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Pattern Recognition</h3>
                <p className="text-gray-700">Deep learning algorithms detect subtle patterns and anomalies in medical data that may escape human observation.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <AlertCircle className="h-12 w-12 text-rose-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Real-time Alerts</h3>
                <p className="text-gray-700">Immediate notification system alerts healthcare providers when critical anomalies are detected in patient data.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <Target className="h-12 w-12 text-pink-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Precision Detection</h3>
                <p className="text-gray-700">High-precision anomaly detection with minimal false positives, ensuring reliable and actionable insights.</p>
              </div>
            </div>
          </div>

          {/* Detection Areas */}
          <div className="mb-16">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">Anomaly Detection Areas</h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Medical Imaging Anomalies</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Tumor and lesion detection</li>
                    <li>• Fracture identification</li>
                    <li>• Organ abnormalities</li>
                    <li>• Vascular irregularities</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Patient Data Anomalies</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Vital sign irregularities</li>
                    <li>• Lab result outliers</li>
                    <li>• Medication interactions</li>
                    <li>• Treatment response deviations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="mb-16">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">Detection Performance</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-red-50 rounded-xl">
                <div className="text-3xl font-bold text-red-600 mb-2">97%</div>
                <p className="text-gray-700">Detection accuracy</p>
              </div>
              <div className="text-center p-6 bg-rose-50 rounded-xl">
                <div className="text-3xl font-bold text-rose-600 mb-2">85%</div>
                <p className="text-gray-700">Reduced false positives</p>
              </div>
              <div className="text-center p-6 bg-pink-50 rounded-xl">
                <div className="text-3xl font-bold text-pink-600 mb-2">70%</div>
                <p className="text-gray-700">Earlier detection</p>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-xl">
                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <p className="text-gray-700">Continuous monitoring</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-red-600 to-rose-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Enhance Diagnostic Accuracy</h2>
              <p className="text-lg mb-6 opacity-90">Implement AI-powered anomaly detection to catch critical issues that might be missed by human review.</p>
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

export default MedicalAnomalyDetection;