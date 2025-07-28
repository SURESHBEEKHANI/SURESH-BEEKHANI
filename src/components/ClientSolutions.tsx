import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              Personalized AI Solutions For Clients
            </h2>

            <div className="flex flex-wrap gap-2">
              {solutions.map((solution) => (
                <button
                  key={solution}
                  onClick={() => setSelectedSolution(solution)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    selectedSolution === solution
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {solution}
                </button>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                {currentSolution.title}
              </h3>

              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {currentSolution.description}
                </p>
                                 <p className="text-gray-600 leading-relaxed">
                   {selectedSolution === 'AI-Powered Law GPT'
                     ? 'LawGPT provides cost-effective legal support, offering a comprehensive solution to the challenges faced by our client.'
                     : selectedSolution === 'TP-Assist'
                     ? 'TP-Assist delivers cost-effective travel planning with comprehensive AI support.'
                     : `${currentSolution.title} provides cost-effective support, offering a comprehensive solution to the challenges faced by our client.`}
                 </p>
              </div>

              <div className="space-y-3">
                {currentSolution.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                                         <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>

              <Button
                onClick={handleReadMore}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-lg"
              >
                Read More
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
                             <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-blue-400/20 to-blue-300/20 rounded-2xl"></div>
              
              {/* Decorative elements */}
                             <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full opacity-60"></div>
              <div className="absolute bottom-20 left-8 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-50"></div>
              <div className="absolute top-32 left-16 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 transform rotate-45 opacity-70"></div>
              <div className="absolute bottom-10 right-16 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 transform rotate-45 opacity-60 text-[#00BFFF]"></div>
              <div className="absolute top-20 right-32 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-50"></div>

              {/* Main card */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-80 h-80 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                    <div className="text-sm font-semibold text-gray-800">
                      {selectedSolution}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded"></div>
                    <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-3/4"></div>
                    <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/2"></div>
                  </div>

                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-[#00BFFF]">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
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
