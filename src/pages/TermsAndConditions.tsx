import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      <Navbar />

      <section className="relative w-full min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center bg-[#0a0435] overflow-hidden pt-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-fuchsia-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] animate-pulse" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="text-white space-y-4 sm:space-y-6 text-left">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight drop-shadow-lg">
              Terms and Conditions
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-200 font-medium leading-relaxed max-w-2xl drop-shadow-md">
              These terms govern your use of our services, website, and products.
            </p>
          </div>
        </div>
      </section>

      <main className="pb-20 px-6 sm:px-12 lg:px-24 max-w-6xl mx-auto relative z-10">
        <div className="space-y-8 text-gray-600 text-sm leading-relaxed text-justify mt-12">
          <section>
            <p className="mb-4">
              These Terms and Conditions ("Terms") govern your use of services, website, and products provided by Velnix Solutions ("Company", "we", "our", or "us"). By accessing or using our services, you agree to be bound by these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-3">1. Scope of Services</h2>
            <p>
              Velnix Solutions provides AI, machine learning, software development, automation, and consulting services. All services are delivered based on agreed proposals, contracts, or statements of work.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">2. Acceptance of Terms</h2>
            <p className="mb-4">By accessing our website or engaging our services, you confirm that you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Agree to these Terms</li>
              <li>Are legally capable of entering into a binding agreement</li>
              <li>Will comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">3. Services and Deliverables</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All services will be defined in a formal agreement or proposal</li>
              <li>Deliverables, timelines, and scope are subject to mutual agreement</li>
              <li>Any changes in scope may result in revised pricing and timelines</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">4. Payments and Billing</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Clients agree to pay all fees as outlined in the agreement</li>
              <li>Payments must be made according to agreed terms (e.g., upfront, milestone-based)</li>
              <li>Late payments may result in service delays or suspension</li>
              <li>All fees are non-refundable unless explicitly stated</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">5. Intellectual Property Rights</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All intellectual property developed by Velnix Solutions remains our property until full payment is received</li>
              <li>Upon full payment, ownership of agreed deliverables may be transferred to the client</li>
              <li>Velnix Solutions retains the right to showcase completed work for portfolio and marketing purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">6. Confidentiality</h2>
            <p className="mb-4">Both parties agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Keep confidential information secure</li>
              <li>Not disclose proprietary or sensitive information to third parties without consent</li>
              <li>Use such information solely for business purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">7. Client Responsibilities</h2>
            <p className="mb-4">Clients agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Respond promptly to requests and approvals</li>
              <li>Ensure lawful use of delivered solutions</li>
            </ul>
            <p className="mt-4">Failure to meet responsibilities may impact project timelines and outcomes.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">8. Data Protection and Privacy</h2>
            <p>
              We process personal data in accordance with our Privacy Policy. Clients are responsible for ensuring that any data shared complies with applicable data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">9. Third-Party Services</h2>
            <p className="mb-4">Our solutions may integrate with third-party tools or services. We are not responsible for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Performance or availability of third-party services</li>
              <li>Any losses caused by third-party providers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">10. Limitation of Liability</h2>
            <p className="mb-4">To the fullest extent permitted by law:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Velnix Solutions shall not be liable for indirect, incidental, or consequential damages</li>
              <li>Our total liability shall not exceed the amount paid for the services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">11. Service Availability</h2>
            <p>
              We strive to ensure continuous service availability but do not guarantee uninterrupted or error-free operation.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">12. Termination</h2>
            <p className="mb-4">We reserve the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Suspend or terminate services for breach of Terms</li>
              <li>Terminate agreements with reasonable notice</li>
            </ul>
            <p className="mt-4">Clients may terminate services based on agreed contractual terms.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">13. Indemnification</h2>
            <p>
              Clients agree to indemnify and hold Velnix Solutions harmless from any claims, damages, or liabilities arising from misuse of services or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">14. Governing Law</h2>
            <p>
              These Terms shall be governed by and interpreted in accordance with applicable laws. Any disputes shall be subject to the jurisdiction of relevant courts.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">15. Changes to Terms</h2>
            <p>
              We may update these Terms at any time. Continued use of our services constitutes acceptance of updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">16. Contact Information</h2>
            <ul className="space-y-2">
              <li><span className="font-semibold text-gray-800">Velnix Solutions</span></li>
              <li><span className="font-semibold text-gray-800">Location:</span> Karachi, Pakistan</li>
              <li><span className="font-semibold text-gray-800">Phone:</span> +92 335 1312852</li>
              <li><span className="font-semibold text-gray-800">Email:</span> velnixsolutions@gmail.com</li>
            </ul>
          </section>

          <section className="border-b border-slate-200 pb-8 mb-8">
            <h2 className="text-lg font-bold text-gray-800 mb-4">17. Entire Agreement</h2>
            <p>
              These Terms, along with any agreements or proposals, constitute the entire agreement between Velnix Solutions and the client.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
