import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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

  const solutions = ['MedImaging', 'FraudGuard', 'RiskAnalyzer'];

  const solutionLabels: { [key: string]: string } = {
    'FraudGuard': 'Fraud Guard',
    'MedImaging': 'Med Imaging',
    'RiskAnalyzer': 'Risk Analyzer',
  };

  const solutionDetails: SolutionDetails = {
    'MedImaging': {
      title: 'AI Medical Imaging Assistant',
      description: 'Our client, a multi-site hospital network, struggled with rising radiology volumes, long report turnaround times, and growing pressure on radiologists to catch subtle findings across X-ray, CT, and MRI studies. We implemented an AI Medical Imaging Assistant that pre-screens studies, highlights suspicious regions, and prioritizes high-risk cases in the worklist.',
      additionalInfo: 'The system integrates with existing PACS and EHR workflows, provides explainable heatmaps, and supports clinicians without disrupting their reading patterns — delivering faster, more accurate diagnoses at scale.',
      benefits: [
        'Reduced average report turnaround time for critical cases',
        'Improved detection rates for subtle and early-stage anomalies',
        'Higher radiologist satisfaction with workload distribution and triage',
        'Better visibility into imaging throughput and case-mix across the network',
        'Seamless PACS & EHR workflow integration',
        'Explainable AI heatmaps for confident clinical decisions',
      ],
      image: '/image/Delivered For Clients/AI Medical Imaging Assistant.jpg'
    },
    'FraudGuard': {
      title: 'AI Fraud Detection System',
      description: 'Our client, a leading financial institution, faced challenges with manual fraud detection, delayed responses, and increasing fraudulent activities, impacting customer trust and revenue. We implemented an AI-powered Fraud Detection System that leverages machine learning to identify anomalies, predict fraudulent patterns, and automate alerts.',
      additionalInfo: 'The platform ensures proactive fraud prevention and enhances security — providing cost-effective protection that scales with transaction volume and evolves with emerging threat patterns.',
      benefits: [
        'Reduced fraud detection time by 60%',
        'Improved accuracy of fraud identification',
        'Minimized financial losses due to fraud',
        'Enhanced customer trust and satisfaction',
        'Real-time anomaly detection on live transaction streams',
        'Automated alert workflows for faster response',
      ],
      image: '/image/Delivered For Clients/Fraud Guard.jpg'
    },
    'RiskAnalyzer': {
      title: 'AI Portfolio Risk Analyzer',
      description: 'Our client, an asset management firm, needed faster, more transparent risk analytics across complex multi-asset portfolios, without adding headcount to the risk team. We implemented an AI Portfolio Risk Analyzer that combines traditional risk metrics with machine learning–driven scenario analysis and factor decomposition.',
      additionalInfo: 'This gives portfolio managers and risk officers a shared, explainable view of exposure — enabling stronger risk governance with consistent, auditable analytics at a fraction of the cost of manual processes.',
      benefits: [
        'Reduced time to produce daily and intraday risk reports',
        'Improved visibility into concentration and factor risk across portfolios',
        'Earlier detection of limit breaches and emerging stress scenarios',
        'Stronger risk governance with consistent, auditable analytics',
        'AI-driven scenario analysis and stress testing',
        'Explainable factor decomposition for investment teams',
      ],
      image: '/image/Delivered For Clients/Risk Analyzer.jpg'
    }
  };

  const currentSolution = solutionDetails[selectedSolution];

  const handleReadMore = () => {
    const pageMap: { [key: string]: string } = {
      'FraudGuard': '/portfolio/ai-fraud-detection-system',
      'MedImaging': '/portfolio/ai-medical-imaging-assistant',
      'RiskAnalyzer': '/portfolio/ai-portfolio-risk-analyzer',
    };
    navigate(pageMap[selectedSolution] || '/portfolio');
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 ai-section relative overflow-hidden">
      {/* AI Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-ai-purple/20 to-ai-cyan/15 rounded-full blur-3xl animate-aurora"></div>
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-tr from-ai-cyan/15 to-ai-purple-light/20 rounded-full blur-3xl animate-aurora"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-ai-purple/5 to-ai-cyan/5 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight px-2 sm:px-0 mb-3">
                AI Solutions Delivered For <span style={{ color: '#ff0ea3' }}>Clients</span>
              </h2>
              <div
                className="w-16 h-1 mx-auto mb-6"
                style={{
                  background: 'linear-gradient(135deg, #ff0ea3 0%, rgba(255, 14, 163, 0.8) 50%, rgba(255, 14, 163, 0.4) 100%)'
                }}
              ></div>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
              {solutions.map((solution) => (
                <button
                  key={solution}
                  onClick={() => setSelectedSolution(solution)}
                  className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base min-h-[44px] touch-manipulation ${selectedSolution === solution
                    ? 'text-white shadow-lg'
                    : 'bg-white/10 text-white/80 hover:bg-white/20 active:bg-white/30 backdrop-blur-sm border border-white/10'
                    }`}
                  style={selectedSolution === solution ? { background: 'linear-gradient(135deg, #ff0ea3 0%, rgba(255, 14, 163, 0.8) 50%, rgba(255, 14, 163, 0.6) 100%)' } : {}}
                >
                  {solutionLabels[solution]}
                </button>
              ))}
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {currentSolution.title}
              </h3>

              <div className="space-y-3 sm:space-y-4">
                <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                  {currentSolution.description}
                </p>
                <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                  {currentSolution.additionalInfo}
                </p>
              </div>

              <div className="space-y-2.5 sm:space-y-3">
                {currentSolution.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-[#ff0ea3] rounded-full mt-2 mr-3 flex-shrink-0 shadow-lg shadow-[#ff0ea3]/20"></div>
                    <p className="text-white/90 text-sm sm:text-base">{benefit}</p>
                  </div>
                ))}
              </div>

              <Button
                onClick={handleReadMore}
                className="text-white font-medium px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg flex items-center gap-2 shadow-lg text-sm sm:text-base min-h-[44px] touch-manipulation w-full sm:w-auto justify-center transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #ff0ea3 0%, rgba(255, 14, 163, 0.8) 50%, rgba(255, 14, 163, 0.6) 100%)' }}
              >
                <span>Read More</span>
                <ArrowRight className="h-4 w-4 flex-shrink-0" />
              </Button>
            </div>
          </div>

          <div className="relative lg:order-last">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl group/image">
              <div
                className="absolute inset-0 z-10 transition-colors duration-300 group-hover/image:bg-black/20"
                style={{ background: 'linear-gradient(135deg, rgba(255, 14, 163, 0.1) 0%, transparent 100%)' }}
              ></div>
              <img
                src={currentSolution.image}
                alt={currentSolution.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
              />
              <div className="absolute inset-0 border border-white/10 rounded-2xl z-20 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default ClientSolutions;
