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
              <h2 className="text-[clamp(0.8125rem,2.4vw,1.875rem)] font-bold text-[#050729] leading-tight tracking-tight whitespace-nowrap">
                Drive Unstoppable Business Growth with AI
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed text-xs sm:text-sm">
                <p>
                  We help businesses grow, operate more efficiently, and deliver better customer experiences through smart, results-driven solutions. Our focus is not on technology for its own sake - it&apos;s on creating real value that helps your business succeed.
                </p>
                <p>
                  From streamlining daily operations and reducing manual work to improving decision-making and increasing productivity, we develop solutions tailored to your unique goals and challenges.
                </p>
                <p>
                  Every business is different, which is why we take the time to understand your needs and create strategies that support sustainable growth and long-term success.
                </p>
                <p>
                  Partner with <span className="font-bold text-[#050729]">Velnix Solutions</span> to improve efficiency, unlock new opportunities, and build a stronger, more competitive business for the future.
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
