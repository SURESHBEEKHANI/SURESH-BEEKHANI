import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, Shield, Lock, Network } from "lucide-react";

const FederatedPrivacyCompliance: React.FC = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-600 via-gray-600 to-zinc-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/Secure-Data-Sharing.jpg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto container-padding py-16 sm:py-24">
          <div className="text-center text-white space-y-6">
            <h1 className="heading-1 font-extrabold leading-tight tracking-tight drop-shadow-lg">
              Federated Privacy Compliance
            </h1>
            <p className="body-large text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Privacy-preserving AI trains models across institutions securely without sharing sensitive patient data, enabling collaborative research while maintaining HIPAA compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Overview */}
          <div className="mb-16">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">Privacy-First AI</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <Shield className="h-12 w-12 text-slate-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Data Protection</h3>
                <p className="text-gray-700">Advanced encryption and privacy-preserving techniques ensure patient data never leaves the institution while enabling AI training.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <Lock className="h-12 w-12 text-gray-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">HIPAA Compliance</h3>
                <p className="text-gray-700">Full compliance with healthcare privacy regulations including HIPAA, GDPR, and other international data protection standards.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <Network className="h-12 w-12 text-zinc-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Collaborative Learning</h3>
                <p className="text-gray-700">Enable multi-institutional AI research and model development without compromising patient privacy or data security.</p>
              </div>
            </div>
          </div>

          {/* Technical Features */}
          <div className="mb-16">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">Technical Implementation</h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Federated Learning</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Distributed model training across institutions</li>
                    <li>• Local data processing without sharing</li>
                    <li>• Aggregated model updates for global learning</li>
                    <li>• Differential privacy mechanisms</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Security Measures</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• End-to-end encryption protocols</li>
                    <li>• Secure multi-party computation</li>
                    <li>• Homomorphic encryption support</li>
                    <li>• Zero-knowledge proof systems</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Privacy Preservation</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Data anonymization and de-identification</li>
                    <li>• Noise injection for privacy protection</li>
                    <li>• Gradient compression and quantization</li>
                    <li>• Membership inference attack prevention</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Compliance Framework</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• HIPAA audit trails and logging</li>
                    <li>• GDPR right to be forgotten support</li>
                    <li>• SOC 2 Type II compliance</li>
                    <li>• Regular security assessments</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits & Impact */}
          <div className="mb-16">
            <h2 className="heading-2 text-gray-900 mb-8 text-center">Benefits & Impact</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <div className="text-3xl font-bold text-slate-600 mb-2">100%</div>
                <p className="text-gray-700">Data privacy protection</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-gray-600 mb-2">85%</div>
                <p className="text-gray-700">Faster model development</p>
              </div>
              <div className="text-center p-6 bg-zinc-50 rounded-xl">
                <div className="text-3xl font-bold text-zinc-600 mb-2">10x</div>
                <p className="text-gray-700">Larger training datasets</p>
              </div>
              <div className="text-center p-6 bg-stone-50 rounded-xl">
                <div className="text-3xl font-bold text-stone-600 mb-2">Zero</div>
                <p className="text-gray-700">Data breaches</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-slate-600 to-gray-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Secure Collaborative AI Research</h2>
              <p className="text-lg mb-6 opacity-90">Enable multi-institutional AI development while maintaining the highest standards of data privacy and security.</p>
              <a href="/#contact" className="btn-primary bg-white text-slate-600 hover:bg-gray-100 inline-flex items-center gap-2">
                Secure Your Data
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

export default FederatedPrivacyCompliance;