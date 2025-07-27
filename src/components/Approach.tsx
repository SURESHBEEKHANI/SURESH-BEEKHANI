import React from 'react';

const Approach = () => {
  return (
    <section className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Proven Approach to Achieve Your Objectives
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Achieve your business goals with our successful Methodology, renowned for its structured planning and consistent results.
          </p>
        </div>

        <div className="relative">
          {/* Horizontal flow container */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
            
                         {/* Step 1 */}
             <div className="flex flex-col items-center text-center max-w-xs">
               <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                 <div className="grid grid-cols-2 gap-1 w-6 h-6">
                   <div className="bg-blue-600 rounded-sm"></div>
                   <div className="bg-blue-600 rounded-sm"></div>
                   <div className="bg-blue-600 rounded-sm"></div>
                   <div className="bg-blue-600 rounded-sm"></div>
                 </div>
               </div>
                               <div className="text-sm text-gray-600 mb-2">Step 1</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Understand pattern identification</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Our Methodology revolves around understanding pattern identification. It involves analyzing data to identify and extract significant patterns.
                </p>
             </div>

             {/* Step 2 */}
             <div className="flex flex-col items-center text-center max-w-xs">
               <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                 <div className="w-6 h-8 border-2 border-blue-600 rounded-sm relative">
                   <div className="absolute top-1.5 left-0.5 right-0.5 h-0.5 bg-blue-600"></div>
                   <div className="absolute top-3.5 left-0.5 right-0.5 h-0.5 bg-blue-600"></div>
                 </div>
               </div>
                               <div className="text-sm text-gray-600 mb-2">Step 2</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Pattern mapping user stories</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Pattern mapping user stories is the second step in our Methodology. It involves categorizing user stories according to recognized patterns.
                </p>
             </div>

             {/* Step 3 */}
             <div className="flex flex-col items-center text-center max-w-xs">
               <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                 <div className="w-6 h-8 border-2 border-blue-600 rounded-sm relative">
                   <div className="absolute top-1 left-0.5 right-0.5 h-0.5 bg-blue-600"></div>
                   <div className="absolute top-2.5 left-0.5 right-0.5 h-0.5 bg-blue-600"></div>
                   <div className="absolute top-4 left-0.5 right-0.5 h-0.5 bg-blue-600"></div>
                   <div className="absolute bottom-0.5 right-0.5 w-1.5 h-1.5 bg-blue-600 rounded-sm"></div>
                 </div>
               </div>
                               <div className="text-sm text-gray-600 mb-2">Step 3</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Wireframe and front end</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  After pattern mapping, Our dedicated team creates wireframes and front-end designs. They align with the identified patterns and user stories.
                </p>
             </div>

             {/* Step 4 */}
             <div className="flex flex-col items-center text-center max-w-xs">
               <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                 <div className="w-6 h-6 border-2 border-blue-600 rounded-sm flex items-center justify-center">
                   <span className="text-blue-600 text-xs font-mono">&lt; /&gt;</span>
                 </div>
               </div>
                               <div className="text-sm text-gray-600 mb-2">Step 4</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Model development and training</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Model development and training involves the development of machine learning models and training using the identified patterns and data.
                </p>
             </div>

             {/* Step 5 */}
             <div className="flex flex-col items-center text-center max-w-xs">
               <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                 <div className="relative">
                   <div className="w-6 h-6 border-2 border-blue-600 rounded-sm transform rotate-45"></div>
                   <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                   <div className="absolute -bottom-0.5 -left-0.5 w-1 h-1 bg-blue-600 rounded-full"></div>
                 </div>
               </div>
                               <div className="text-sm text-gray-600 mb-2">Step 5</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Development and deployment</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
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