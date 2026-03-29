import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden scroll-mt-20">
      {/* Decorative background elements - subtle for white background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#ff0ea3]/5 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-ai-cyan/5 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div
                  className="w-2.5 sm:w-4 h-3.5 sm:h-5 md:h-6 flex-shrink-0 mt-1 rounded-full"
                  style={{
                    background: '#ff0ea3',
                    transform: 'skewX(-15deg)'
                  }}
                >
                </div>
  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#050729] leading-tight tracking-tight">
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
              className="text-white px-8 py-5 rounded-md text-xs sm:text-sm font-semibold transition-all shadow-lg hover:shadow-[#ff0ea3]/25"
              style={{ background: 'linear-gradient(135deg, #f01eff 0%, #f755d7 50%, #ec4899 100%)' }}
            >
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Right Visual Area */}
          <div className="relative group">
            {/* Background Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#ff0ea3] to-ai-cyan opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500 rounded-full"></div>
            
            {/* Orbits / Tech Decorative Elements */}
            <div className="absolute -top-12 -left-12 w-24 h-24 border border-[#ff0ea3]/20 rounded-full animate-spin-slow hidden sm:block">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#ff0ea3] rounded-full shadow-[0_0_10px_#ff0ea3]"></div>
            </div>
            <div className="absolute -bottom-12 -right-12 w-32 h-32 border border-ai-cyan/20 rounded-full animate-spin-reverse-slow hidden lg:block">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-ai-cyan rounded-full shadow-[0_0_15px_#22d3ee]"></div>
            </div>

            {/* Floating Tech Nodes */}
            <div className="absolute top-1/4 -right-8 w-16 h-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center rotate-12 animate-float z-20 hidden sm:flex">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ff0ea3] to-[#d10b85] opacity-80"></div>
            </div>
            <div className="absolute bottom-1/4 -left-8 w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center -rotate-12 animate-float-delayed z-20 hidden sm:flex">
              <div className="w-6 h-6 rounded-md bg-ai-cyan/80"></div>
            </div>

            {/* Main Image Container with 3D effect */}
            <div className="relative z-10 rounded-none overflow-hidden shadow-[0_20px_60px_-15px_rgba(255,14,163,0.2)] border border-white/10 bg-[#050729] transform-gpu transition-all duration-700 [perspective:1000px] group-hover:[transform:rotateX(2deg)_rotateY(-5deg)_scale(1.02)]">
              {/* Animated Border Beam - More subtle and techy */}
              <div className="absolute inset-0 z-20 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff0ea3] to-transparent animate-border-beam opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-ai-cyan to-transparent animate-border-beam-reverse opacity-50"></div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-tr from-[#050729]/60 via-transparent to-white/5 z-10 transition-opacity duration-500 group-hover:opacity-30"></div>
              
              <img
                src="/image/certificate-image/Business Growth with AI.jpg"
                alt="Business Growth with AI"
                className="w-full h-full object-cover min-h-[350px] sm:min-h-[450px] transition-all duration-700 group-hover:scale-110 filter brightness-90 group-hover:brightness-110"
              />

              {/* Futuristic HUD Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-none z-20 transform transition-all duration-500 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full border border-[#ff0ea3]/30 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#ff0ea3] animate-pulse"></div>
                      </div>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-[#ff0ea3] uppercase tracking-[0.2em]">Neural Engine</p>
                      <p className="text-white text-xs font-medium">Optimized & Active</p>
                    </div>
                  </div>
                  <div className="text-right flex flex-col items-end">
                    <div className="flex gap-0.5 mb-1">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className={`w-1 h-3 rounded-full ${i < 4 ? 'bg-[#ff0ea3]' : 'bg-white/20'} animate-pulse`} style={{ animationDelay: `${i * 0.2}s` }}></div>
                      ))}
                    </div>
                    <p className="text-[8px] text-white/50 font-mono">98.4% EFF</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
