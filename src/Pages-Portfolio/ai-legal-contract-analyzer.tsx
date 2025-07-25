import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AILegalContractAnalyzer = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#03023C]">
      <Navbar />
      <main className="flex-1 flex flex-col justify-center">
        <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20 md:py-32 gap-10">
          {/* Left: Text */}
          <div className="flex-1 text-left">
            <p className="text-white text-lg md:text-xl font-medium mb-4 opacity-80">Case Study</p>
            <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-4">
              AI Legal Contract Analyzer
            </h1>
            <p className="text-white text-lg md:text-2xl opacity-80 max-w-xl">
              Legal Contract Analyzer automates contract review with AI. Boosts accuracy, efficiency, and compliance for legal teams.
            </p>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src="/image/pages_img/AI-Legal-Contract-Analyzer.png"
              alt="AI Legal Contract Analyzer"
              className="w-full max-w-xl h-auto rounded-lg shadow-2xl border-4 border-white/10 object-contain"
              draggable={false}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AILegalContractAnalyzer;
