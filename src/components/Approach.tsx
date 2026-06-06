import React from 'react';

const PINK = '#ff0ea3';

const awards = [
  { path: '/image/certificate-image/AI & machine learining.png', alt: 'AI & Machine Learning Certificate' },
  { path: '/image/certificate-image/AWS-GENAI.png', alt: 'AWS Generative AI Certificate' },
  { path: '/image/certificate-image/DEEP-LEARING.png', alt: 'Deep Learning Certificate' },
  { path: '/image/certificate-image/aws.png', alt: 'AWS Certificate' },
  { path: '/image/certificate-image/machine learing AI.png', alt: 'Machine Learning AI Certificate' },
  { path: '/image/certificate-image/AI develpments.png', alt: 'AI develpments' },
];

const toSrc = (path: string) => encodeURI(path);

const Approach = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 ai-section scroll-mt-20" id="approach">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            Awards and Certifications
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70 font-medium tracking-wide max-w-3xl mx-auto leading-relaxed">
            Our AI expertise is recognized across leading platforms and industry certifications.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 border-t border-l border-white/10 relative">
          {awards.map((item) => (
            <div
              key={item.path}
              className="group flex items-center justify-center p-6 sm:p-10 min-h-[180px] sm:min-h-[220px] border-b border-r border-white/10 transition-all duration-500 ease-out hover:bg-white/[0.02]"
            >
              <img
                src={toSrc(item.path)}
                alt={item.alt}
                className="max-h-[110px] sm:max-h-[140px] w-auto max-w-full object-contain opacity-90 group-hover:opacity-100 transform group-hover:scale-[1.02] transition-all duration-500 ease-out drop-shadow-sm group-hover:drop-shadow-lg"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
