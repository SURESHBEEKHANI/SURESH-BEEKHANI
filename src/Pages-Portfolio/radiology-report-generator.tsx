import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, FileText, Zap, CheckCircle } from "lucide-react";

const RadiologyReportGenerator: React.FC = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/Medical-Image-Analysis.webp')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto container-padding py-16 sm:py-24">
          <div className="text-center text-white space-y-6">
            <h1 className="heading-1 font-extrabold leading-tight tracking-tight drop-shadow-lg">
              Radiology Report Generator
            </h1>
            <p className="body-large text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Automatically analyzes X-rays, MRIs, or CT scans to generate accurate radiology reports, streamlining workflow and improving diagnostic consistency.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Overview */}
          <div className="mb-16">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">System Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <FileText className="h-12 w-12 text-violet-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Automated Reporting</h3>
                <p className="text-gray-700">Generate comprehensive radiology reports automatically from medical imaging with structured findings and recommendations.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <Zap className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Rapid Processing</h3>
                <p className="text-gray-700">Process medical images in seconds, dramatically reducing report turnaround time and improving patient care efficiency.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <CheckCircle className="h-12 w-12 text-fuchsia-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Assurance</h3>
                <p className="text-gray-700">Ensure consistent report quality with standardized terminology and evidence-based diagnostic criteria.</p>
              </div>
            </div>
          </div>

          {/* Imaging Modalities */}
          <div className="mb-16">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">Supported Imaging Modalities</h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">X-Ray Analysis</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Chest X-rays for pneumonia, fractures</li>
                    <li>• Bone fracture detection and classification</li>
                    <li>• Cardiac silhouette analysis</li>
                    <li>• Pulmonary edema identification</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">CT Scan Interpretation</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Brain CT for stroke and hemorrhage</li>
                    <li>• Abdominal CT for organ pathology</li>
                    <li>• Chest CT for lung nodules</li>
                    <li>• Trauma assessment and triage</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">MRI Analysis</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Brain MRI for neurological conditions</li>
                    <li>• Musculoskeletal MRI assessment</li>
                    <li>• Cardiac MRI evaluation</li>
                    <li>• Spine and joint analysis</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Specialized Imaging</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Mammography for breast screening</li>
                    <li>• Ultrasound image interpretation</li>
                    <li>• Nuclear medicine studies</li>
                    <li>• Interventional radiology support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Benefits */}
          <div className="mb-16">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">Performance Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-violet-50 rounded-xl">
                <div className="text-3xl font-bold text-violet-600 mb-2">90%</div>
                <p className="text-gray-700">Faster report generation</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <div className="text-3xl font-bold text-purple-600 mb-2">96%</div>
                <p className="text-gray-700">Diagnostic accuracy</p>
              </div>
              <div className="text-center p-6 bg-fuchsia-50 rounded-xl">
                <div className="text-3xl font-bold text-fuchsia-600 mb-2">75%</div>
                <p className="text-gray-700">Reduced radiologist workload</p>
              </div>
              <div className="text-center p-6 bg-pink-50 rounded-xl">
                <div className="text-3xl font-bold text-pink-600 mb-2">24/7</div>
                <p className="text-gray-700">Continuous availability</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Revolutionize Radiology Workflow</h2>
              <p className="text-lg mb-6 opacity-90">Implement our AI-powered radiology system to enhance diagnostic accuracy and efficiency.</p>
              <a href="/#contact" className="btn-primary bg-white text-violet-600 hover:bg-gray-100 inline-flex items-center gap-2">
                Request Demo
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

export default RadiologyReportGenerator;