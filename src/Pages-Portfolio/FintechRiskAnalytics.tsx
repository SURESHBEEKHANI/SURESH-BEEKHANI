import CaseStudyPage from "./CaseStudyPage";

const FintechRiskAnalytics = () => (
  <CaseStudyPage
    project={{
      title: "FinTech Credit Risk Analytics Platform",
      category: "AI & Automation",
      industry: "Financial Services",
      introduction: "This analytics platform supplements traditional credit assessment with alternative data signals to support faster, more inclusive lending decisions.",
      problem: "Traditional credit scoring models failed to capture non-traditional borrower signals, causing high default rates and exclusion of creditworthy underserved populations.",
      solution: "Engineered an ML-driven risk analytics platform processing 200+ alternative data signals for real-time credit decisions, including social, behavioral, and transactional patterns.",
      outcome: "Default rates reduced by 42% while approvals increased for creditworthy underserved borrowers.",
      metrics: [{ stat: "42%", label: "Default Rate Reduction" }, { stat: "200+", label: "Data Signals" }, { stat: "<3s", label: "Decision Time" }],
      tags: ["FinTech", "Risk Modeling", "Machine Learning", "Real-Time"],
      keyCapabilities: [
        "Alternative-data risk scoring using behavioral, transactional, and identity signals",
        "Real-time underwriting workflows designed to balance speed with responsible decisions",
        "Governance dashboards for monitoring model performance, approval quality, and risk drift",
      ],
      conclusion: "The platform proved that inclusive credit intelligence is possible without sacrificing control. By blending alternative signals with operational guardrails, the client expanded access to credit while preserving a disciplined and explainable risk framework.",
    }}
  />
);

export default FintechRiskAnalytics;
