import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

interface SolutionDetail {
  title: string;
  description: string;
  benefits: string[];
}

interface SolutionDetails {
  [key: string]: SolutionDetail;
}

const ClientSolutions = () => {
  const [selectedSolution, setSelectedSolution] = useState('AI-Powered Law GPT');
  const navigate = useNavigate();

  const solutions = ['TP-Assist', 'GP-Pod', 'AI-Powered Law GPT'];

  const solutionDetails: SolutionDetails = {
    'TP-Assist': {
      title: 'AI-Powered TP-Assist',
      description: 'We developed an AI-powered travel planning platform that transforms personalized trip creation. The solution addresses fragmented travel data, time-consuming itinerary building, and lack of real-time optimization. Our AI assistant delivers smart recommendations, real-time updates, and seamless itinerary management, resulting in enhanced user engagement and operational efficiency.',
             benefits: [
         'Time saved on planning and bookings',
         'Enhanced customer satisfaction and retention',
         'Smart Itinerary Builder with real-time updates',
         'Personalized recommendations for activities and dining',
         'Calendar integration and cost optimization',
         'Sustainable travel support'
       ]
    },
    'GP-Pod': {
      title: 'GP-Pod',
      description: 'Our client needed an intelligent system to assist general practitioners with diagnostic support, patient management, and treatment recommendations. We developed GP-Pod, an AI-powered platform that provides real-time diagnostic assistance, patient history analysis, and evidence-based treatment recommendations.',
      benefits: [
        'Real-time diagnostic assistance and support',
        'Comprehensive patient history analysis',
        'Evidence-based treatment recommendations',
        'Improved accuracy in medical decision-making'
      ]
    },
    'AI-Powered Law GPT': {
      title: 'AI-Powered Law GPT',
      description: 'Our client struggled with data overload, time-consuming legal research tasks, and the need to centralize legal information efficiently. We partnered with them to provide an AI-powered Law GPT solution that alleviates legal professionals\' burdens by streamlining tasks, ensuring compliance, and enabling earlier risk mitigation.',
      benefits: [
        'Streamlined legal research and document analysis',
        'Enhanced compliance monitoring and risk assessment',
        'Automated contract review and legal document processing',
        'Centralized legal knowledge management'
      ]
    }
  };

  const currentSolution = solutionDetails[selectedSolution];

  const handleReadMore = () => {
    const pageMap: { [key: string]: string } = {
      'TP-Assist': '/portfolio/personalized-travel-assistant',
      'GP-Pod': '/portfolio/patient-diagnostic-system',
      'AI-Powered Law GPT': '/portfolio/ai-driven-law-gpt'
    };
    navigate(pageMap[selectedSolution] || '/');
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="text-center">
              <Badge variant="outline" className="mb-3 sm:mb-4 px-3 sm:px-4 py-1 bg-primary/10 text-primary font-medium text-sm sm:text-base">
                Our Solutions
              </Badge>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight px-2 sm:px-0">
                Personalized AI Solutions For Clients
              </h2>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
              {solutions.map((solution) => (
                <button
                  key={solution}
                  onClick={() => setSelectedSolution(solution)}
                  className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base min-h-[44px] touch-manipulation ${
                    selectedSolution === solution
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300'
                  }`}
                >
                  {solution}
                </button>
              ))}
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                {currentSolution.title}
              </h3>

              <div className="space-y-3 sm:space-y-4">
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {currentSolution.description}
                </p>
                                 <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                   {selectedSolution === 'AI-Powered Law GPT'
                     ? 'LawGPT provides cost-effective legal support, offering a comprehensive solution to the challenges faced by our client.'
                     : selectedSolution === 'TP-Assist'
                     ? 'TP-Assist delivers cost-effective travel planning with comprehensive AI support.'
                     : `${currentSolution.title} provides cost-effective support, offering a comprehensive solution to the challenges faced by our client.`}
                 </p>
              </div>

              <div className="space-y-2.5 sm:space-y-3">
                {currentSolution.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                                         <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm sm:text-base">{benefit}</p>
                  </div>
                ))}
              </div>

              <Button
                onClick={handleReadMore}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg flex items-center gap-2 shadow-lg text-sm sm:text-base min-h-[44px] touch-manipulation w-full sm:w-auto justify-center"
              >
                Read More
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="relative lg:order-last">
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/10 via-blue-400/10 to-blue-300/10">
                             <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-blue-400/20 to-blue-300/20 rounded-2xl"></div>
              
              {/* Decorative elements - responsive sizing */}
                             <div className="absolute top-4 sm:top-6 md:top-10 right-4 sm:right-6 md:right-10 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full opacity-60"></div>
              <div className="absolute bottom-8 sm:bottom-12 md:bottom-20 left-2 sm:left-4 md:left-8 w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-50"></div>
              <div className="absolute top-12 sm:top-20 md:top-32 left-4 sm:left-8 md:left-16 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-purple-400 to-pink-400 transform rotate-45 opacity-70"></div>
              <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 right-4 sm:right-8 md:right-16 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gradient-to-r from-purple-400 to-pink-400 transform rotate-45 opacity-60 text-[#00BFFF]"></div>
              <div className="absolute top-8 sm:top-12 md:top-20 right-12 sm:right-20 md:right-32 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-50"></div>

              {/* Main card - responsive sizing */}
              <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4 md:p-6">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-white/90 backdrop-blur-sm rounded-2xl p-3 sm:p-4 md:p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-white rounded-full"></div>
                    </div>
                    <div className="text-xs sm:text-sm md:text-base font-semibold text-gray-800">
                      {selectedSolution}
                    </div>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
                    <div className="h-1.5 sm:h-2 md:h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded"></div>
                    <div className="h-1.5 sm:h-2 md:h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-3/4"></div>
                    <div className="h-1.5 sm:h-2 md:h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/2"></div>
                  </div>

                  <div className="absolute -top-1 sm:-top-2 md:-top-4 -right-1 sm:-right-2 md:-right-4 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-[#00BFFF]">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute -bottom-0.5 sm:-bottom-1 md:-bottom-2 -left-0.5 sm:-left-1 md:-left-2 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default ClientSolutions;
