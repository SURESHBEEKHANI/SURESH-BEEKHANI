import { useEffect } from "react";
import { Link } from "react-router-dom";

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0435] text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-[#130f40] rounded-xl shadow-2xl p-8 sm:p-12 border border-primary/20">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-primary">Cookie Policy</h1>
        
        <div className="space-y-8 text-gray-300">
          <section>
            <p className="text-sm text-gray-400 mb-6">Last Updated: {new Date().toLocaleDateString()}</p>
            <p className="leading-relaxed">
              This Cookie Policy explains how our website uses cookies and similar tracking technologies to recognize you when you visit our site. It explains what these technologies are, why we use them, and your right to control our use of them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white border-b border-primary/30 pb-2">What are cookies?</h2>
            <p className="leading-relaxed">
              Cookies are small text files that are stored on your computer, smartphone, or other device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white border-b border-primary/30 pb-2">Types of Cookies We Use</h2>
            <p className="leading-relaxed mb-6">
              We use three main types of cookies on our website, designed to help us provide you with the best possible experience. Here is a simple breakdown of what they are and why we use them:
            </p>

            <div className="space-y-6">
              <div className="bg-[#1e1759] p-6 rounded-lg">
                <h3 className="text-xl font-medium text-primary mb-3">1. Essential Cookies</h3>
                <p className="mb-2"><strong>What they do:</strong> These cookies are strictly necessary for our website to function properly. They enable core features like security, network management, and accessibility.</p>
                <p><strong>Can I opt-out?:</strong> No, these cannot be switched off in our systems because the website simply won't work without them. They do not store any personally identifiable information.</p>
              </div>

              <div className="bg-[#1e1759] p-6 rounded-lg">
                <h3 className="text-xl font-medium text-primary mb-3">2. Analytics Cookies</h3>
                <p className="mb-2"><strong>What they do:</strong> Also known as performance cookies, these help us understand how visitors interact with our website. They collect anonymous information about which pages are visited most often, how much time is spent on the site, and if users encounter any error messages.</p>
                <p><strong>Can I opt-out?:</strong> Yes. We use this data only to improve how our website works, but you can choose not to allow these cookies.</p>
              </div>

              <div className="bg-[#1e1759] p-6 rounded-lg">
                <h3 className="text-xl font-medium text-primary mb-3">3. Marketing Cookies</h3>
                <p className="mb-2"><strong>What they do:</strong> These cookies are used to track visitors across websites. The goal is to understand your interests so we can display advertisements that are relevant, engaging, and personalized to you, rather than showing you random ads.</p>
                <p><strong>Can I opt-out?:</strong> Yes. If you do not allow these cookies, you will still see ads, but they will be less targeted to your interests.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white border-b border-primary/30 pb-2">How can I control cookies?</h2>
            <p className="leading-relaxed mb-4">
              You have the right to decide whether to accept or reject non-essential cookies. You can set your preferences when you first visit our site using the Cookie Consent Banner. You can also change your preferences at any time by clearing your browser cookies and refreshing the page to see the consent banner again.
            </p>
            <p className="leading-relaxed">
              Additionally, most web browsers allow you to control cookies through their settings. You can set your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept essential cookies, you may not be able to use some portions of our site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white border-b border-primary/30 pb-2">Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about our use of cookies or this Cookie Policy, please <Link to="/contact" className="text-primary hover:underline font-medium">contact us</Link>.
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link to="/" className="inline-flex items-center text-primary hover:text-white transition-colors duration-300">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
