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

  const solutions = ['MedImaging', 'ClinDocAI', 'PatientRisk'];

  const solutionLabels: { [key: string]: string } = {
    'MedImaging': 'Med Imaging',
    'ClinDocAI': 'Clin Doc AI',
    'PatientRisk': 'Patient Risk',
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
    'ClinDocAI': {
      title: 'AI Clinical Documentation System',
      description: 'Our client, a large multi-specialty hospital network, struggled with physician burnout driven by excessive documentation time, inconsistent clinical note quality, and costly transcription workflows. We deployed an AI Clinical Documentation System powered by ambient NLP that listens to patient-physician conversations and auto-generates structured clinical notes in real time.',
      additionalInfo: 'The system integrates seamlessly with existing EHR platforms, supports specialty-specific templates, and flags documentation gaps — empowering clinicians to spend less time on paperwork and more time on patient care.',
      benefits: [
        'Reduced physician documentation time by up to 70%',
        'Improved clinical note accuracy and completeness scores',
        'Lower transcription and medical scribe costs across the network',
        'Higher physician satisfaction and reduced burnout rates',
        'Seamless EHR integration with specialty-specific templates',
        'Real-time documentation gap detection and compliance flags',
      ],
      image: '/image/Delivered For Clients/Clinical Documentation AI.jpg'
    },
    'PatientRisk': {
      title: 'AI Patient Risk Stratification',
      description: 'Our client, a regional health system, needed a proactive approach to identify high-risk patients before acute deterioration occurred, reduce preventable readmissions, and optimize care coordination across inpatient and outpatient settings. We built an AI Patient Risk Stratification platform that continuously analyzes vital signs, lab trends, EHR history, and social determinants of health.',
      additionalInfo: 'The platform generates dynamic risk scores for each patient, surfaces early warning signals to care teams, and recommends targeted interventions — enabling clinicians to act earlier and allocate resources where they matter most.',
      benefits: [
        'Reduced 30-day readmission rates through earlier intervention',
        'Improved ICU transfer timing with real-time deterioration alerts',
        'Better care coordination between inpatient and outpatient teams',
        'Enhanced identification of high-risk patients using SDOH factors',
        'AI-driven early warning system integrated with nursing workflows',
        'Measurable reduction in preventable adverse clinical events',
      ],
      image: '/image/Delivered For Clients/Risk Analyzer.jpg'
    }
  };

  const currentSolution = solutionDetails[selectedSolution];

  const handleReadMore = () => {
    const pageMap: { [key: string]: string } = {
      'MedImaging': '/portfolio/ai-medical-imaging-assistant',
      'ClinDocAI': '/portfolio/ai-clinical-documentation-system',
      'PatientRisk': '/portfolio/ai-patient-risk-stratification',
    };
    navigate(pageMap[selectedSolution] || '/portfolio');
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* AI Background decorative elements - muted for white background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-[#ff0ea3]/5 to-ai-cyan/5 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-tr from-ai-cyan/5 to-[#ff0ea3]/5 rounded-full blur-3xl opacity-50"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="text-left">
              <div className="flex items-start gap-4 mb-3">
                <div
                  className="w-2.5 sm:w-4 h-3.5 sm:h-5 md:h-6 flex-shrink-0 mt-1 rounded-full"
                  style={{
                    background: '#ff0ea3',
                    transform: 'skewX(-15deg)'
                  }}
                ></div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#050729] leading-tight px-2 sm:px-0 whitespace-nowrap">
                  AI Solutions Delivered For <span style={{ color: '#ff0ea3' }}>Clients</span>
                </h2>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
              {solutions.map((solution) => (
                <button
                  key={solution}
                  onClick={() => setSelectedSolution(solution)}
                  className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base min-h-[44px] touch-manipulation ${selectedSolution === solution
                    ? 'text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                    }`}
                  style={selectedSolution === solution ? { background: 'linear-gradient(135deg, #ff0ea3 0%, rgba(255, 14, 163, 0.8) 50%, rgba(255, 14, 163, 0.6) 100%)' } : {}}
                >
                  {solutionLabels[solution]}
                </button>
              ))}
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#050729]">
                {currentSolution.title}
              </h3>

              <div className="space-y-3 sm:space-y-4">
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {currentSolution.description}
                </p>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {currentSolution.additionalInfo}
                </p>
              </div>

              <div className="space-y-2.5 sm:space-y-3">
                {currentSolution.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-[#ff0ea3] rounded-full mt-2 mr-3 flex-shrink-0 shadow-lg shadow-[#ff0ea3]/20"></div>
                    <p className="text-gray-700 text-sm sm:text-base">{benefit}</p>
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
              <div className="absolute inset-0 border border-gray-100 rounded-2xl z-20 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default ClientSolutions;
