import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PatientDiagnosticSystem = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#03023C]">
      <Navbar />
      <main className="flex-1 flex flex-col justify-center">
        <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20 md:py-32 gap-10">
          {/* Left: Text */}
          <div className="flex-1 text-left">
            <p className="text-white text-lg md:text-xl font-medium mb-4 opacity-80">Case Study</p>
            <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-4">
              Patient Diagnostic System
            </h1>
            <p className="text-white text-lg md:text-2xl opacity-80 max-w-xl">
              Patient Diagnostic System uses AI chatbots for faster disease diagnosis. It reduces doctors' workload and improves patient care.
            </p>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src="/image/pages_img/Patient-Diagnostic-System.webp"
              alt="Patient Diagnostic System"
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

export default PatientDiagnosticSystem;
