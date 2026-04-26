import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center bg-[#0a0435] overflow-hidden pt-20">
        {/* Ambient Blurs to match footer */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-fuchsia-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] animate-pulse" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="text-white space-y-4 sm:space-y-6 text-left">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight drop-shadow-lg">
              Privacy Policy
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-200 font-medium leading-relaxed max-w-2xl drop-shadow-md">
              We are committed to protecting personal data in accordance with GDPR and international privacy regulations.
            </p>
          </div>
        </div>
      </section>

      <main className="pb-20 px-6 sm:px-12 lg:px-24 max-w-6xl mx-auto relative z-10">
        <div className="space-y-8 text-gray-600 text-sm leading-relaxed text-justify mt-12">
          <section>
            <p className="mb-4">
              Velnix Solutions ("Company", "we", "our", or "us") is committed to protecting the privacy and security of personal data in accordance with applicable data protection laws, including the General Data Protection Regulation (GDPR) (EU) 2016/679 and other international privacy regulations.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, process, disclose, and safeguard your information when you engage with our services, website, or business operations.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-3">1. Scope and Applicability</h2>
            <p>
              This Privacy Policy applies to all personal data processed by Velnix Solutions in connection with:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Clients and business partners</li>
              <li>Website visitors and users</li>
              <li>Service engagements and communications</li>
            </ul>
            <p>This policy does not apply to third-party entities that we do not own or control.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">2. Definitions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold text-gray-800">Personal Data:</span> Any information relating to an identified or identifiable individual</li>
              <li><span className="font-semibold text-gray-800">Processing:</span> Any operation performed on personal data (collection, storage, use, etc.)</li>
              <li><span className="font-semibold text-gray-800">Data Subject:</span> The individual whose data is processed</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">3. Data Controller</h2>
            <p className="mb-4">
              Velnix Solutions acts as the Data Controller for personal data collected and processed under this policy.
            </p>
            <ul className="space-y-2">
              <li><span className="font-semibold text-gray-800">Email:</span> velnixsolutions@gmail.com</li>
              <li><span className="font-semibold text-gray-800">Phone:</span> +92 335 1312852</li>
              <li><span className="font-semibold text-gray-800">Location:</span> Karachi, Pakistan</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">4. Information We Collect</h2>
            <p className="mb-4">We may collect and process the following categories of personal data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold text-gray-800">Personal Information:</span> Name, email address, phone number, address and contact details</li>
              <li><span className="font-semibold text-gray-800">Business Information:</span> Company name, project details, communications</li>
              <li><span className="font-semibold text-gray-800">Financial Information:</span> Billing details, payment information (processed securely via third-party providers)</li>
              <li><span className="font-semibold text-gray-800">Technical Data:</span> IP address, browser type, device information, usage data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">5. Legal Basis for Processing (GDPR)</h2>
            <p className="mb-4">We process personal data under the following lawful bases:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contractual Necessity - To perform agreements and deliver services</li>
              <li>Legitimate Interests - To improve services, operations, and communication</li>
              <li>Consent - For marketing and optional communications</li>
              <li>Legal Obligation - To comply with applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">6. How We Use Your Information</h2>
            <p className="mb-4">We use personal data to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and manage AI, software, and consulting services</li>
              <li>Process transactions and fulfill contractual obligations</li>
              <li>Communicate with clients and provide support</li>
              <li>Improve products, services, and user experience</li>
              <li>Send updates, marketing, or relevant business information (with consent)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">7. Data Sharing and Disclosure</h2>
            <p className="mb-4">We do not sell or rent personal data. We may share information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Trusted service providers (e.g., hosting, payment processors, cloud services)</li>
              <li>Business partners involved in service delivery</li>
              <li>Legal authorities where required by law</li>
            </ul>
            <p className="mt-4">All third parties are required to maintain appropriate data protection standards.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">8. International Data Transfers</h2>
            <p className="mb-4">
              As a global service provider, your data may be transferred and processed outside your country of residence.
            </p>
            <p className="mb-4">We ensure appropriate safeguards, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Standard Contractual Clauses (SCCs)</li>
              <li>Secure data processing agreements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">9. Data Retention</h2>
            <p className="mb-4">We retain personal data only for as long as necessary to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fulfill contractual and business obligations</li>
              <li>Comply with legal requirements</li>
              <li>Resolve disputes and enforce agreements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">10. Data Security</h2>
            <p className="mb-4">We implement appropriate technical and organizational measures, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encryption of sensitive data</li>
              <li>Secure infrastructure and access controls</li>
              <li>Continuous monitoring and protection systems</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">11. Your Rights (GDPR and International Users)</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Correct or update inaccurate data</li>
              <li>Request deletion (Right to be Forgotten)</li>
              <li>Restrict or object to processing</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-4">To exercise your rights, contact: velnixsolutions@gmail.com</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">12. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies to enhance functionality and analyze usage. Users can control cookie preferences via browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">13. Third-Party Links</h2>
            <p>
              Our website may contain links to external sites. We are not responsible for their privacy practices.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">14. Children's Privacy</h2>
            <p>
              We do not knowingly collect data from individuals under 18. Any such data will be deleted if identified.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">15. Policy Updates</h2>
            <p>
              We may update this policy periodically. Changes will be posted with an updated effective date.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">16. Contact Information</h2>
            <ul className="space-y-2">
              <li><span className="font-semibold text-gray-800">Velnix Solutions</span></li>
              <li><span className="font-semibold text-gray-800">Location:</span> Karachi, Pakistan</li>
              <li><span className="font-semibold text-gray-800">Phone:</span> +92 335 1312852</li>
              <li><span className="font-semibold text-gray-800">Email:</span> info@velnixsolutions.com</li>
            </ul>
          </section>

          <section className="border-b border-slate-200 pb-8 mb-8">
            <h2 className="text-lg font-bold text-gray-800 mb-4">17. Governing Law</h2>
            <p>This Privacy Policy shall be governed by applicable international data protection laws.</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
