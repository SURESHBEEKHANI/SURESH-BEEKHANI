import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Overview = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div
                  className="w-2.5 sm:w-4 h-3.5 sm:h-5 md:h-6 flex-shrink-0 rounded-full"
                  style={{
                    background: '#B6FF00',
                    transform: 'skewX(-15deg)'
                  }}
                >
                </div>
                <h2 className="min-w-0 text-[clamp(0.8125rem,2.4vw,1.875rem)] font-bold text-[#050729] leading-tight tracking-tight whitespace-nowrap">
                  Drive Unstoppable Business Growth with AI
                </h2>
              </div>

              <div className="space-y-4 text-gray-600 leading-relaxed text-xs sm:text-sm">
                <p>
                  Maximize your business potential with cutting-edge AI solutions from <span className="font-bold text-[#050729]">Velnix Solutions</span>. We focus on real-world impact, designing intelligent systems that don’t just work — they deliver measurable results.
                </p>
                <p>
                  Leveraging machine learning, deep learning, and advanced AI applications in NLP, computer vision, predictive analytics, generative AI, and AI chatbots, we build scalable solutions tailored to your unique business needs.
                </p>
                <p>
                  Our approach is simple: solve real problems, optimize operations, and create lasting value. Whether automating workflows, enhancing decision-making, or extracting powerful insights from your data — we help your business move faster and smarter.
                </p>
                <p>
                  Partner with <span className="font-bold text-[#050729]">Velnix Solutions</span> to transform your ideas into high-performance AI systems that drive efficiency, growth, and a competitive advantage.
                </p>
              </div>
            </div>

            <Button
              asChild
              className="text-black hover:text-black px-8 py-5 rounded-md text-xs sm:text-sm font-medium transition-all border border-black/10 shadow-[0_0_20px_rgba(182,255,0,0.2)] hover:shadow-[0_0_35px_rgba(182,255,0,0.55)]"
              style={{ background: '#B6FF00' }}
            >
              <Link to="/contact" className="text-black hover:text-black">Get a Quote</Link>
            </Button>
          </div>

          <div className="flex items-center justify-center">
            <img
              src="/image/certificate-image/Business Growth with AI.png"
              alt="Business Growth with AI"
              className="w-full h-auto max-w-lg mx-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
