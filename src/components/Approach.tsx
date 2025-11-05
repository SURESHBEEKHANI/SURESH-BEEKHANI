import React from 'react';
import { Badge } from './ui/badge';

const Approach = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 ai-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="outline" className="mb-3 sm:mb-4 px-3 sm:px-4 py-1 bg-ai-purple/20 text-ai-purple font-medium text-sm sm:text-base border-ai-purple/30">
            Our Approach
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Our Proven Approach to Achieve Your Objectives
          </h2>
          <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-ai-purple mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
            Achieve your business goals with our successful Methodology, renowned for its structured planning and consistent results.
          </p>
        </div>

        <div className="relative">
          {/* Mobile-first responsive flow container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-6 lg:gap-4">
            
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center max-w-full sm:max-w-xs">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                <div className="grid grid-cols-2 gap-0.5 sm:gap-1 w-5 h-5 sm:w-6 sm:h-6">
                  <div className="bg-blue-600 rounded-sm"></div>
                  <div className="bg-blue-600 rounded-sm"></div>
                  <div className="bg-blue-600 rounded-sm"></div>
                  <div className="bg-blue-600 rounded-sm"></div>
                </div>
              </div>
              <div className="text-xs sm:text-sm text-ai-purple mb-2">Step 1</div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 leading-tight">Understand pattern identification</h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed px-2 sm:px-0">
                Our Methodology revolves around understanding pattern identification. It involves analyzing data to identify and extract significant patterns.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center max-w-full sm:max-w-xs">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                <div className="w-5 h-6 sm:w-6 sm:h-8 border-2 border-blue-600 rounded-sm relative">
                  <div className="absolute top-1 sm:top-1.5 left-0.5 right-0.5 h-0.5 bg-blue-600"></div>
                  <div className="absolute top-2.5 sm:top-3.5 left-0.5 right-0.5 h-0.5 bg-blue-600"></div>
                </div>
              </div>
              <div className="text-xs sm:text-sm text-ai-purple mb-2">Step 2</div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 leading-tight">Pattern mapping user stories</h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed px-2 sm:px-0">
                Pattern mapping user stories is the second step in our Methodology. It involves categorizing user stories according to recognized patterns.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center max-w-full sm:max-w-xs">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                <div className="w-5 h-6 sm:w-6 sm:h-8 border-2 border-blue-600 rounded-sm relative">
                  <div className="absolute top-0.5 sm:top-1 left-0.5 right-0.5 h-0.5 bg-blue-600"></div>
                  <div className="absolute top-2 sm:top-2.5 left-0.5 right-0.5 h-0.5 bg-blue-600"></div>
                  <div className="absolute top-3.5 sm:top-4 left-0.5 right-0.5 h-0.5 bg-blue-600"></div>
                  <div className="absolute bottom-0.5 right-0.5 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-blue-600 rounded-sm"></div>
                </div>
              </div>
              <div className="text-xs sm:text-sm text-ai-purple mb-2">Step 3</div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 leading-tight">Wireframe and front end</h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed px-2 sm:px-0">
                After pattern mapping, Our dedicated team creates wireframes and front-end designs. They align with the identified patterns and user stories.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center max-w-full sm:max-w-xs">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-blue-600 rounded-sm flex items-center justify-center">
                  <span className="text-blue-600 text-xs font-mono">&lt; /&gt;</span>
                </div>
              </div>
              <div className="text-xs sm:text-sm text-ai-purple mb-2">Step 4</div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 leading-tight">Model development and training</h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed px-2 sm:px-0">
                Model development and training involves the development of machine learning models and training using the identified patterns and data.
              </p>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col items-center text-center max-w-full sm:max-w-xs">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                <div className="relative">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-blue-600 rounded-sm transform rotate-45"></div>
                  <div className="absolute -top-0.5 -right-0.5 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-blue-600 rounded-full"></div>
                  <div className="absolute -bottom-0.5 -left-0.5 w-0.5 sm:w-1 h-0.5 sm:h-1 bg-blue-600 rounded-full"></div>
                </div>
              </div>
              <div className="text-xs sm:text-sm text-ai-purple mb-2">Step 5</div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 leading-tight">Development and deployment</h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed px-2 sm:px-0">
                Development and deployment is the final step in our Methodology. The developed models are integrated into the software and deployed for use.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Approach; 