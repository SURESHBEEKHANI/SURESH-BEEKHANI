import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Cookie, Shield, Activity, Target, Settings, Mail, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-zinc-950 text-white pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6 ring-1 ring-primary/30 shadow-[0_0_30px_rgba(var(--primary),0.2)]">
              <Cookie className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Cookie Policy
            </h1>
            <p className="text-primary/80 font-medium tracking-wider uppercase text-sm">Last Updated: 16/06/2026</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="bg-zinc-900/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8 sm:p-12 border border-white/5 relative"
          >
            <div className="space-y-12 text-gray-300">
              
              <section className="prose prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-gray-300">
                  This Cookie Policy explains how our website uses cookies and similar tracking technologies to recognize you when you visit our site. It explains what these technologies are, why we use them, and your right to control our use of them.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                  <Cookie className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-semibold text-white m-0">What are cookies?</h2>
                </div>
                <p className="leading-relaxed text-gray-300">
                  Cookies are small text files that are stored on your computer, smartphone, or other device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                  <Settings className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-semibold text-white m-0">Types of Cookies We Use</h2>
                </div>
                <p className="leading-relaxed mb-8 text-gray-300">
                  We use three main types of cookies on our website, designed to help us provide you with the best possible experience. Here is a simple breakdown of what they are and why we use them:
                </p>

                <div className="grid gap-6">
                  {/* Essential Cookies */}
                  <motion.div 
                    whileHover={{ scale: 1.01 }}
                    className="bg-zinc-950/50 p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Shield className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-medium text-white m-0">1. Essential Cookies</h3>
                    </div>
                    <div className="space-y-3 text-sm sm:text-base text-gray-400">
                      <p><strong className="text-gray-200">What they do:</strong> These cookies are strictly necessary for our website to function properly. They enable core features like security, network management, and accessibility.</p>
                      <p><strong className="text-gray-200">Can I opt-out?:</strong> No, these cannot be switched off in our systems because the website simply won't work without them. They do not store any personally identifiable information.</p>
                    </div>
                  </motion.div>

                  {/* Analytics Cookies */}
                  <motion.div 
                    whileHover={{ scale: 1.01 }}
                    className="bg-zinc-950/50 p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Activity className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-medium text-white m-0">2. Analytics Cookies</h3>
                    </div>
                    <div className="space-y-3 text-sm sm:text-base text-gray-400">
                      <p><strong className="text-gray-200">What they do:</strong> Also known as performance cookies, these help us understand how visitors interact with our website. They collect anonymous information about which pages are visited most often, how much time is spent on the site, and if users encounter any error messages.</p>
                      <p><strong className="text-gray-200">Can I opt-out?:</strong> Yes. We use this data only to improve how our website works, but you can choose not to allow these cookies.</p>
                    </div>
                  </motion.div>

                  {/* Marketing Cookies */}
                  <motion.div 
                    whileHover={{ scale: 1.01 }}
                    className="bg-zinc-950/50 p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Target className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-medium text-white m-0">3. Marketing Cookies</h3>
                    </div>
                    <div className="space-y-3 text-sm sm:text-base text-gray-400">
                      <p><strong className="text-gray-200">What they do:</strong> These cookies are used to track visitors across websites. The goal is to understand your interests so we can display advertisements that are relevant, engaging, and personalized to you, rather than showing you random ads.</p>
                      <p><strong className="text-gray-200">Can I opt-out?:</strong> Yes. If you do not allow these cookies, you will still see ads, but they will be less targeted to your interests.</p>
                    </div>
                  </motion.div>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                  <Settings className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-semibold text-white m-0">How can I control cookies?</h2>
                </div>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    You have the right to decide whether to accept or reject non-essential cookies. You can set your preferences when you first visit our site using the Cookie Consent Banner. You can also change your preferences at any time by clearing your browser cookies and refreshing the page to see the consent banner again.
                  </p>
                  <p>
                    Additionally, most web browsers allow you to control cookies through their settings. You can set your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept essential cookies, you may not be able to use some portions of our site.
                  </p>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-semibold text-white m-0">Contact Us</h2>
                </div>
                <p className="leading-relaxed text-gray-300">
                  If you have any questions about our use of cookies or this Cookie Policy, please{" "}
                  <Link to="/contact" className="text-primary hover:text-white inline-flex items-center gap-1 transition-colors group">
                    contact us
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CookiePolicy;
