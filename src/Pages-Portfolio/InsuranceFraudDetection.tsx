import CaseStudyPage from "./CaseStudyPage";

const InsuranceFraudDetection = () => (
  <CaseStudyPage
    project={{
      title: "AI-Powered Fraud Detection for Insurance",
      category: "AI & Automation",
      industry: "Insurance",
      introduction: "This project helps insurance investigators find suspicious claims earlier by bringing machine learning, network relationships, and behavioral signals into one fraud-detection workflow.",
      problem: "Manual claims investigation made it difficult to identify suspicious patterns quickly. Investigators were overwhelmed by case volume, and fraudulent claims slipped through at significant cost.",
      solution: "Developed an AI-driven fraud detection system that analyzes claims data and identifies anomalous patterns using machine learning models trained on historical fraud signals, network graphs, and behavioral analytics.",
      outcome: "Faster claim investigation with automated risk detection, dramatically reducing false positives and saving the client millions in fraudulent payouts.",
      metrics: [{ stat: "60%", label: "Faster Detection" }, { stat: "3x", label: "Investigation Speed" }, { stat: "24/7", label: "Monitoring" }],
      tags: ["Machine Learning", "Fraud Detection", "Analytics", "Automation"],
      keyCapabilities: [
        "Anomaly detection across claims, transactions, and customer behavior patterns",
        "Risk scoring workflows that prioritize review queues for high-likelihood fraud cases",
        "Operational analytics for reducing false positives while improving investigation efficiency",
      ],
      conclusion: "The fraud intelligence solution showed that better detection is not just about finding bad actors—it is about creating a faster and more accurate review process. By automating triage with explainable intelligence, the insurer reduced risk while keeping operations efficient and fair.",
    }}
  />
);

export default InsuranceFraudDetection;
