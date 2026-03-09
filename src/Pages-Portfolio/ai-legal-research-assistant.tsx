import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AILegalResearchAssistant: React.FC = () => {
  return (
    <>
      <Navbar />

      <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/ai-legal-research-assistant.jpg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto container-padding py-16 sm:py-24">
          <div className="text-center text-white space-y-6">
            <h1 className="heading-1 font-extrabold leading-tight tracking-tight drop-shadow-lg">
              AI Legal Research Assistant
            </h1>
            <p className="body-large text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Retrieval‑augmented generation that surfaces relevant case law, precedents, and statutes in response to
              natural‑language questions from legal teams.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="heading-2 text-gray-900 mb-4">Smarter Legal Research</h2>
            <p className="text-gray-700 leading-relaxed">
              Instead of spending hours sifting through databases, lawyers can ask questions in plain language and get
              AI‑generated answers linked to authoritative sources.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Assistant Features</h3>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Vector search across case law, regulations, and internal memos.</li>
              <li>Grounded responses with citations and paragraph‑level references.</li>
              <li>Workspace for saving, tagging, and sharing research within teams.</li>
              <li>Fine‑tuning on firm‑specific knowledge where appropriate.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="heading-2 text-gray-900 mb-4">Boost Legal Team Productivity</h2>
          <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
            Integrate our AI legal research assistant into your firm’s toolkit to accelerate case preparation and
            improve research quality.
          </p>
          <a href="/#contact" className="btn-primary inline-flex items-center justify-center">
            Talk to an Expert
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AILegalResearchAssistant;

