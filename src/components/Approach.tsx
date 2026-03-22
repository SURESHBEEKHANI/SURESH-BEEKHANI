import React from 'react';
import { Badge } from './ui/badge';

const Approach = () => {
  return (
    <section className="pt-12 pb-12 ai-section" id="approach">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12 sm:mb-16">
          <div className="flex items-start gap-4 mb-3">
            <div
              className="w-2.5 sm:w-4 h-3.5 sm:h-5 md:h-6 flex-shrink-0 mt-1 rounded-full"
              style={{
                background: '#ff0ea3',
                transform: 'skewX(-15deg)'
              }}
            ></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Our Proven <span style={{ color: '#ff0ea3' }}>Approach to Achieve</span> Your Objectives
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl px-4 sm:px-0 leading-relaxed ml-1">
            Achieve your business goals with our successful Methodology, renowned for its structured planning and consistent results.
          </p>
        </div>

      <div className="relative">
        {/* Mobile-first responsive flow container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 border-t border-l border-white/20 overflow-hidden shadow-2xl">

          {/* Step 1 */}
          <div className="flex flex-col items-start text-left p-6 sm:p-8 border-b border-r border-white/20 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 group">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <div className="grid grid-cols-2 gap-0.5 sm:gap-1 w-5 h-5 sm:w-6 sm:h-6">
                <div className="rounded-sm" style={{ background: '#ff0ea3' }}></div>
                <div className="rounded-sm" style={{ background: 'rgba(255, 14, 163, 0.8)' }}></div>
                <div className="rounded-sm" style={{ background: 'rgba(255, 14, 163, 0.8)' }}></div>
                <div className="rounded-sm" style={{ background: '#ff0ea3' }}></div>
              </div>
            </div>
            <div className="text-xs sm:text-sm mb-2" style={{ color: '#ff0ea3' }}>Step 1</div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 leading-tight">Understand pattern identification</h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Our Methodology revolves around understanding pattern identification. It involves analyzing data to identify and extract significant patterns.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-start text-left p-6 sm:p-8 border-b border-r border-white/20 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 group">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <div className="w-5 h-6 sm:w-6 sm:h-8 border-2 rounded-sm relative" style={{ borderColor: '#ff0ea3' }}>
                <div className="absolute top-1 sm:top-1.5 left-0.5 right-0.5 h-0.5" style={{ background: 'rgba(255, 14, 163, 0.7)' }}></div>
                <div className="absolute top-2.5 sm:top-3.5 left-0.5 right-0.5 h-0.5" style={{ background: 'rgba(255, 14, 163, 0.5)' }}></div>
              </div>
            </div>
            <div className="text-xs sm:text-sm mb-2" style={{ color: '#ff0ea3' }}>Step 2</div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 leading-tight">Pattern mapping user stories</h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Pattern mapping user stories is the second step in our Methodology. It involves categorizing user stories according to recognized patterns.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-start text-left p-6 sm:p-8 border-b border-r border-white/20 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 group">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <div className="w-5 h-6 sm:w-6 sm:h-8 border-2 rounded-sm relative" style={{ borderColor: '#ff0ea3' }}>
                <div className="absolute top-0.5 sm:top-1 left-0.5 right-0.5 h-0.5" style={{ background: '#ff0ea3' }}></div>
                <div className="absolute top-2 sm:top-2.5 left-0.5 right-0.5 h-0.5" style={{ background: 'rgba(255, 14, 163, 0.7)' }}></div>
                <div className="absolute top-3.5 sm:top-4 left-0.5 right-0.5 h-0.5" style={{ background: 'rgba(255, 14, 163, 0.5)' }}></div>
                <div className="absolute bottom-0.5 right-0.5 w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-sm" style={{ background: '#ff0ea3' }}></div>
              </div>
            </div>
            <div className="text-xs sm:text-sm mb-2" style={{ color: '#ff0ea3' }}>Step 3</div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 leading-tight">Wireframe and front end</h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              After pattern mapping, Our dedicated team creates wireframes and front-end designs. They align with the identified patterns and user stories.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-start text-left p-6 sm:p-8 border-b border-r border-white/20 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 group">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 rounded-sm flex items-center justify-center" style={{ borderColor: '#ff0ea3' }}>
                <span className="text-xs font-mono" style={{ color: '#ff0ea3' }}>&lt; /&gt;</span>
              </div>
            </div>
            <div className="text-xs sm:text-sm mb-2" style={{ color: '#ff0ea3' }}>Step 4</div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 leading-tight">Model development and training</h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Model development and training involves the development of machine learning models and training using the identified patterns and data.
            </p>
          </div>

          {/* Step 5 */}
          <div className="flex flex-col items-start text-left p-6 sm:p-8 border-b border-r border-white/20 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 group">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <div className="relative">
                <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 rounded-sm transform rotate-45" style={{ borderColor: '#ff0ea3' }}></div>
                <div className="absolute -top-0.5 -right-0.5 w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full" style={{ background: '#ff0ea3' }}></div>
                <div className="absolute -bottom-0.5 -left-0.5 w-0.5 sm:w-1 h-0.5 sm:h-1 rounded-full" style={{ background: 'rgba(255, 14, 163, 0.5)' }}></div>
              </div>
            </div>
            <div className="text-xs sm:text-sm mb-2" style={{ color: '#ff0ea3' }}>Step 5</div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 leading-tight">Development and deployment</h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Development and deployment is the final step in our Methodology. The developed models are integrated into the software and deployed for use.
            </p>
          </div>

        </div>

      </div>
    </div>
    </section >
  );
};

export default Approach; 
