import React from 'react';

const C = {
  black:    '#050505',
  graphite: '#111111',
  white:    '#FFFFFF',
  lime:     '#B6FF00',
  green:    '#7DCC00',
  la: (o: number) => `rgba(182,255,0,${o})`,
  wa: (o: number) => `rgba(255,255,255,${o})`,
};

const stats = [
  { number: '5+', label: 'Years of Engineering Experience' },
  { number: '23+', label: 'Enterprise & SMB Clients' },
  { number: '25+', label: 'Intelligent Systems Deployed' },
  { number: '99%', label: 'Client Satisfaction Rate' },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 scroll-mt-20 relative" style={{ background: C.black }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="pb-10 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6" style={{ borderBottom: `1px solid ${C.la(0.2)}` }}>
          <div>
            <span 
              className="text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 mb-4 inline-block"
              style={{ background: C.la(0.08), color: C.lime, border: `1px solid ${C.la(0.2)}` }}
            >
              Proven Impact
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Why Businesses Partner With Velnix
            </h2>
          </div>
          <p className="text-sm text-white/60 font-normal max-w-xl leading-relaxed">
            Our track record reflects deep engineering expertise, rapid execution, and a persistent focus on measurable business outcomes.
          </p>
        </div>

        {/* Stats Grid */}
        <div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-px" 
          style={{ background: C.wa(0.08), border: `1px solid ${C.wa(0.08)}` }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group flex flex-col items-center justify-center text-center p-8 sm:p-12 transition-all duration-300"
              style={{ background: C.graphite }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = C.la(0.04);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = C.graphite;
              }}
            >
              <div
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-3 tracking-tighter leading-none transition-transform duration-300 group-hover:scale-105"
                style={{ color: C.lime }}
              >
                {stat.number}
              </div>
              <p className="text-xs sm:text-sm font-semibold tracking-wide text-white/70 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
