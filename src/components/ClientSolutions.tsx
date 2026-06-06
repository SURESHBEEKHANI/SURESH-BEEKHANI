import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface SolutionDetail {
  title: string;
  description: string;
  additionalInfo: string;
  benefits: string[];
  image: string;
}

interface SolutionDetails {
  [key: string]: SolutionDetail;
}

const ClientSolutions = () => {
  const [selectedSolution, setSelectedSolution] = useState('MedImaging');
  const navigate = useNavigate();

  const solutions = ['MedImaging', 'ClinDocAI', 'DiogenesAIChatBot'];

  const solutionLabels: { [key: string]: string } = {
    'MedImaging': 'Med Imaging',
    'ClinDocAI': 'Clin Doc AI',
    'DiogenesAIChatBot': 'Diogenes AI ChatBot',
  };

  const solutionDetails: SolutionDetails = {
    'MedImaging': {
      title: 'AI Medical Imaging Assistant',
      description: 'Our AI Medical Imaging Assistant pre-screens studies, highlights suspicious regions, and prioritizes high-risk cases to help radiologists manage rising volumes and catch subtle findings.',
      additionalInfo: 'It integrates seamlessly with PACS and EHR workflows, providing explainable heatmaps for faster, more accurate diagnoses.',
      benefits: [
        'Faster report turnaround times',
        'Improved anomaly detection',
        'Higher radiologist satisfaction',
      ],
      image: '/image/Delivered For Clients/AI Medical Imaging Assistant.jpg'
    },
    'ClinDocAI': {
      title: 'AI Clinical Documentation System',
      description: 'We deployed an AI Clinical Documentation System powered by ambient NLP that listens to patient-physician conversations and auto-generates structured notes in real time.',
      additionalInfo: 'The system integrates with existing EHR platforms and supports specialty-specific templates to reduce documentation time.',
      benefits: [
        'Up to 70% less documentation time',
        'Improved note accuracy',
        'Reduced burnout rates',
      ],
      image: '/image/Delivered For Clients/Clinical Documentation AI.jpg'
    },
    'DiogenesAIChatBot': {
      title: 'Diogenes AI ChatBot',
      description: 'An intelligent AI chatbot that delivers real-time, context-aware conversations to support users with accurate and personalized responses.',
      additionalInfo: 'We built Diogenes AI ChatBot with natural language understanding and retrieval-augmented knowledge access to provide instant value.',
      benefits: [
        'Real-time context-aware responses',
        'Natural language understanding',
        'Retrieval-augmented knowledge access',
      ],
      image: '/image/Portfolio-img/Diogenes AI ChatBot.png'
    }
  };

  const currentSolution = solutionDetails[selectedSolution];

  const handleReadMore = () => {
    const pageMap: { [key: string]: string } = {
      'MedImaging': '/portfolio/ai-powered-medical-imaging-system',
      'ClinDocAI': '/portfolio/ai-clinical-documentation-system',
      'DiogenesAIChatBot': '/portfolio/diogenes-ai-chatbot',
    };
    navigate(pageMap[selectedSolution] || '/portfolio');
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Ambient background lighting - extremely subtle, organic, and premium */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#B6FF00]/10 to-transparent rounded-full blur-[100px] opacity-40"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-[#B6FF00]/5 to-transparent rounded-full blur-[100px] opacity-40"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-black leading-tight mb-3">
                AI Solutions Delivered For Clients
              </h2>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
              {solutions.map((solution) => (
                <button
                  key={solution}
                  onClick={() => setSelectedSolution(solution)}
                  className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base min-h-[44px] touch-manipulation border ${selectedSolution === solution
                    ? 'bg-[#B6FF00] text-black border-[#B6FF00] shadow-[0_2px_10px_rgba(182,255,0,0.15)] hover:bg-[#A3E600] hover:text-[#050729] hover:border-[#A3E600] hover:shadow-[0_4px_12px_rgba(182,255,0,0.25)]'
                    : 'bg-slate-50 text-slate-600 border-slate-200/60 hover:bg-slate-100 hover:text-[#050729] hover:border-slate-300/80'
                    }`}
                >
                  {solutionLabels[solution]}
                </button>
              ))}
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050729]">
                {currentSolution.title}
              </h3>

              <div className="space-y-3 sm:space-y-4">
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base/7 font-normal">
                  {currentSolution.description}
                </p>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base/7 font-normal">
                  {currentSolution.additionalInfo}
                </p>
              </div>

              <div className="space-y-2.5 sm:space-y-3">
                {currentSolution.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start group/benefit">
                    <div className="w-1.5 h-1.5 bg-[#B6FF00] rounded-full mt-[9px] mr-3 flex-shrink-0 transition-transform duration-300 group-hover/benefit:scale-125 shadow-[0_0_6px_rgba(182,255,0,0.3)]"></div>
                    <p className="text-slate-600 text-sm sm:text-base transition-colors duration-200 group-hover/benefit:text-slate-900 leading-normal">{benefit}</p>
                  </div>
                ))}
              </div>

              <Button
                onClick={handleReadMore}
                className="bg-[#B6FF00] text-black hover:bg-[#A3E600] hover:text-[#050729] font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg flex items-center gap-2 border border-transparent shadow-[0_2px_8px_rgba(182,255,0,0.15)] hover:shadow-[0_6px_20px_rgba(182,255,0,0.25)] text-sm sm:text-base min-h-[44px] touch-manipulation w-full sm:w-auto justify-center transition-all duration-300 ease-out group"
              >
                <span>Read More</span>
                <ArrowRight className="h-4 w-4 flex-shrink-0 text-black group-hover:text-[#050729] transition-all duration-300 ease-out group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          <div className="relative lg:order-last">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(5,7,41,0.12)] group/image transition-all duration-700 ease-out hover:shadow-[0_30px_60px_-15px_rgba(5,7,41,0.25)] border border-slate-100">
              <div
                className="absolute inset-0 z-10 transition-all duration-500 group-hover/image:bg-black/10"
                style={{ background: 'linear-gradient(135deg, rgba(182, 255, 0, 0.08) 0%, rgba(5, 7, 41, 0) 50%, rgba(5, 7, 41, 0.25) 100%)' }}
              ></div>
              <img
                src={currentSolution.image}
                alt={currentSolution.title}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover/image:scale-[1.04]"
              />
              {/* Crisp border overlay */}
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl z-20 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSolutions;
