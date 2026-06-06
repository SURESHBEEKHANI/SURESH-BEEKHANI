import React from 'react';

const ACCENT = '#B6FF00';

const stats = [
  { number: '5+', label: 'Years of Experience' },
  { number: '23+', label: 'Happy Clients' },
  { number: '25+', label: 'Projects Completed' },
  { number: '99%', label: 'Client Satisfaction' },
];

const Experience = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 bg-[#f5f6f8] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pb-8 sm:pb-10 border-b border-[#B6FF00]/60">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#050729] leading-tight mb-3">
            Why Choose Velnix Solutions
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-medium tracking-wide max-w-4xl leading-[1.7]">
            This highlights our skills, experience, and quality of work, demonstrating our commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group flex flex-col items-center justify-center text-center py-10 sm:py-14 px-4 sm:px-6 transition-all duration-500 ease-out hover:bg-white/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)]
                ${index % 2 === 0 ? 'border-r border-[#B6FF00]/40' : ''}
                ${index < 2 ? 'border-b border-[#B6FF00]/40 lg:border-b-0' : ''}
                ${index === 1 ? 'lg:border-r border-[#B6FF00]/40' : ''}`}
            >
              <div
                className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold mb-3 tracking-tighter leading-none drop-shadow-sm transform group-hover:scale-[1.03] transition-all duration-500 ease-out"
                style={{ color: ACCENT }}
              >
                {stat.number}
              </div>
              <p className="text-sm sm:text-base text-[#050729]/90 font-semibold tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
