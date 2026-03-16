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
}

interface SolutionDetails {
  [key: string]: SolutionDetail;
}

const ClientSolutions = () => {
  const [selectedSolution, setSelectedSolution] = useState('MedImaging');
  const navigate = useNavigate();

  const solutions = ['MedImaging', 'FraudGuard', 'RiskAnalyzer'];

  const solutionLabels: { [key: string]: string } = {
    'MedImaging': 'Med Imaging',
    'FraudGuard': 'Fraud Guard',
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
      ]
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
      ]
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
      ]
    }
  };

  const currentSolution = solutionDetails[selectedSolution];

  const handleReadMore = () => {
    const pageMap: { [key: string]: string } = {
      'MedImaging': '/portfolio/ai-medical-imaging-assistant',
      'FraudGuard': '/portfolio/ai-fraud-detection-system',
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
              <Badge 
                variant="outline" 
                className="mb-3 sm:mb-4 px-3 sm:px-4 py-1 font-medium text-sm sm:text-base border-[#00C2CB]/30"
                style={{ background: 'linear-gradient(135deg, rgba(109, 40, 217, 0.2) 0%, rgba(168, 85, 247, 0.2) 50%, rgba(236, 72, 153, 0.2) 100%)', color: '#a855f7' }}
              >
                Our Solutions
              </Badge>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight px-2 sm:px-0">
                AI Solutions Delivered For <span className="gradient-text-ai">Clients</span>
              </h2>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
              {solutions.map((solution) => (
                <button
                  key={solution}
                  onClick={() => setSelectedSolution(solution)}
                  className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base min-h-[44px] touch-manipulation ${
                    selectedSolution === solution
                      ? 'text-white shadow-lg'
                      : 'bg-white/10 text-white/80 hover:bg-white/20 active:bg-white/30 backdrop-blur-sm border border-white/10'
                  }`}
                  style={selectedSolution === solution ? { background: 'linear-gradient(135deg, #6D28D9 0%, #a855f7 50%, #ec4899 100%)' } : {}}
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
                    <div className="w-2 h-2 bg-gradient-to-r from-ai-cyan to-ai-purple rounded-full mt-2 mr-3 flex-shrink-0 shadow-lg"></div>
                    <p className="text-white/90 text-sm sm:text-base">{benefit}</p>
                  </div>
                ))}
              </div>

              <Button
                onClick={handleReadMore}
                className="text-white font-medium px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg flex items-center gap-2 shadow-lg text-sm sm:text-base min-h-[44px] touch-manipulation w-full sm:w-auto justify-center transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #6D28D9 0%, #a855f7 50%, #ec4899 100%)' }}
              >
                <span>Read More</span>
                <ArrowRight className="h-4 w-4 flex-shrink-0" />
              </Button>
            </div>
          </div>

          <div className="relative lg:order-last">
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden"
              style={{ background: 'linear-gradient(135deg, rgba(109, 40, 217, 0.1) 0%, rgba(168, 85, 247, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%)' }}>
              <div className="absolute inset-0 rounded-2xl"
                style={{ background: 'linear-gradient(135deg, rgba(109, 40, 217, 0.2) 0%, rgba(168, 85, 247, 0.2) 50%, rgba(236, 72, 153, 0.2) 100%)' }}></div>
              
              {/* Decorative elements - responsive sizing */}
              <div className="absolute top-4 sm:top-6 md:top-10 right-4 sm:right-6 md:right-10 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full opacity-60"
                style={{ background: 'linear-gradient(135deg, #6D28D9 0%, #ec4899 100%)' }}></div>
              <div className="absolute bottom-8 sm:bottom-12 md:bottom-20 left-2 sm:left-4 md:left-8 w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full opacity-50"
                style={{ background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)' }}></div>
              <div className="absolute top-12 sm:top-20 md:top-32 left-4 sm:left-8 md:left-16 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 transform rotate-45 opacity-70"
                style={{ background: 'linear-gradient(135deg, #6D28D9 0%, #a855f7 100%)' }}></div>
              <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 right-4 sm:right-8 md:right-16 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 transform rotate-45 opacity-60"
                style={{ background: 'linear-gradient(135deg, #6D28D9 0%, #ec4899 100%)' }}></div>
              <div className="absolute top-8 sm:top-12 md:top-20 right-12 sm:right-20 md:right-32 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 rounded-full opacity-50"
                style={{ background: 'linear-gradient(135deg, #6D28D9 0%, #ec4899 100%)' }}></div>

              {/* Main card - responsive sizing */}
              <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4 md:p-6">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-white/90 backdrop-blur-sm rounded-2xl p-3 sm:p-4 md:p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, #6D28D9 0%, #a855f7 50%, #ec4899 100%)' }}>
                      <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-white rounded-full"></div>
                    </div>
                    <div className="text-xs sm:text-sm md:text-base font-semibold text-gray-800">
                      {solutionLabels[selectedSolution]}
                    </div>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
                    <div className="h-1.5 sm:h-2 md:h-3 rounded"
                      style={{ background: 'linear-gradient(135deg, rgba(109, 40, 217, 0.3) 0%, rgba(168, 85, 247, 0.3) 100%)' }}></div>
                    <div className="h-1.5 sm:h-2 md:h-3 rounded w-3/4"
                      style={{ background: 'linear-gradient(135deg, rgba(109, 40, 217, 0.3) 0%, rgba(168, 85, 247, 0.3) 100%)' }}></div>
                    <div className="h-1.5 sm:h-2 md:h-3 rounded w-1/2"
                      style={{ background: 'linear-gradient(135deg, rgba(109, 40, 217, 0.3) 0%, rgba(168, 85, 247, 0.3) 100%)' }}></div>
                  </div>

                  <div className="absolute -top-1 sm:-top-2 md:-top-4 -right-1 sm:-right-2 md:-right-4 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)' }}>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute -bottom-0.5 sm:-bottom-1 md:-bottom-2 -left-0.5 sm:-left-1 md:-left-2 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 rounded-full"
                    style={{ background: 'linear-gradient(135deg, #6D28D9 0%, #ec4899 100%)' }}></div>
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
