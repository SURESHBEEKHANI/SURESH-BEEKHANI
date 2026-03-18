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
      <section className="relative w-full min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center hero-bg overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-20 bg-[url('/image/pages_img/AI-Development-backgound.webp')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="text-white space-y-4 sm:space-y-6 text-left">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight drop-shadow-lg">
              Privacy Policy
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-200 font-medium leading-relaxed max-w-2xl drop-shadow-md">
              Your privacy is our priority. We are committed to protecting the personal data of our clients and customers.
            </p>
          </div>
        </div>
      </section>

      <main className="pb-20 px-6 sm:px-12 lg:px-24 max-w-6xl mx-auto relative z-10">
        <div className="space-y-8 text-gray-600 text-sm leading-relaxed text-justify mt-12">
          <p className="font-medium text-slate-800 text-base border-b border-slate-200 pb-8 mb-8">
            Suresh Beekhani is dedicated to safeguarding the privacy and security of our clients and customers. This Privacy Policy explains how we collect, use, store, and protect your information.
          </p>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-3">1. Scope of Policy</h2>
            <p>
              This Privacy Policy applies only to the practices of Suresh Beekhani. It does not apply to third-party companies, websites, or individuals that we do not own, control, employ, or manage.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">2. Policy Updates</h2>
            <p>
              We reserve the right to update or modify this Privacy Policy at any time without prior notice. Users are encouraged to review the latest version regularly to stay informed about how we protect their information.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">3. Information Collection</h2>
            <p className="mb-4">We collect information voluntarily provided by clients and customers for business purposes, including but not limited to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Personal information (e.g., name, email address, phone number, shipping address)</li>
              <li>Financial information (e.g., billing details, credit card information)</li>
            </ul>
            <p>This information is collected through forms, transactions, and interactions with our services.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">4. Use of Information</h2>
            <p className="mb-4">The information collected is used to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process orders and manage transactions</li>
              <li>Provide customer support and communication</li>
              <li>Share updates about products, services, and offers</li>
              <li>Improve our products, services, and user experience</li>
              <li>Develop relevant content and future offerings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">5. Data Protection and Security</h2>
            <p>
              We implement appropriate physical, electronic, and managerial safeguards to protect your data from unauthorized access, misuse, or disclosure. Sensitive information, such as payment details, is encrypted using industry-standard security technologies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">6. Cookies</h2>
            <p>
              Our website uses cookies to enhance user experience and maintain session identity. Cookies help users remain logged in during a session. Users may disable cookies through their browser settings; however, some features of the website may be affected.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">7. Information Sharing</h2>
            <p className="mb-4">We do not sell or rent personal information. Information may only be shared:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>With authorized third parties (e.g., vendors, suppliers, shipping providers) as necessary to deliver services</li>
              <li>When required by law, legal proceedings, or government authorities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">8. Third-Party Links</h2>
            <p>
              Our website may contain links to external websites. We are not responsible for the privacy practices of those websites. Users are encouraged to review the privacy policies of any third-party sites they visit.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">9. Children's Privacy</h2>
            <p>
              We do not knowingly collect personal information from individuals under the age of 18. If such information is identified, it will be promptly deleted.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">10. Data Accuracy and User Rights</h2>
            <p>
              Clients and customers may request to update, correct, or delete their personal information at any time. We take reasonable steps to ensure that all personal data is accurate and up to date.
            </p>
          </section>

          <section className="border-b border-slate-200 pb-8 mb-8">
            <h2 className="text-lg font-bold text-gray-800 mb-4">11. Communication of Changes</h2>
            <p>
              Any changes to this Privacy Policy will be posted on our website and other appropriate platforms to ensure users remain informed about how their information is handled.
            </p>
          </section>


        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
