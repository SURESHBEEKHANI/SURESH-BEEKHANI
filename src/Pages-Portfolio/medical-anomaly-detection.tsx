import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, Search, AlertCircle, Target } from "lucide-react";

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
        </div>
      </section>

      <Footer />
    </>
  );
};

export default MedicalAnomalyDetection;