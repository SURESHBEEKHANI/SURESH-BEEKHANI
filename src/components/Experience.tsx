import React from 'react';

const ACCENT = '#ff0ea3';

const stats = [
  { number: '4+', label: 'Years of Experience' },
  { number: '10+', label: 'Happy Clients' },
  { number: '25+', label: 'Projects Completed' },
  { number: '95%', label: 'Client Satisfaction' },
];

const Experience = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 bg-[#f5f6f8] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pb-8 sm:pb-10 border-b border-gray-200">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#050729] leading-tight mb-3">
            Why Choose Velnix Solutions
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-4xl leading-relaxed">
            This highlights our skills, experience, and quality of work, demonstrating our commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center text-center py-10 sm:py-14 px-4 sm:px-6
                ${index % 2 === 0 ? 'border-r border-gray-200' : ''}
                ${index < 2 ? 'border-b border-gray-200 lg:border-b-0' : ''}
                ${index === 2 ? 'lg:border-r border-gray-200' : ''}
                ${index === 3 ? 'lg:border-r-0' : ''}`}
            >
              <div
                className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold mb-3 tracking-tight leading-none"
                style={{ color: ACCENT }}
              >
                {stat.number}
              </div>
              <p className="text-sm sm:text-base text-[#050729] font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
