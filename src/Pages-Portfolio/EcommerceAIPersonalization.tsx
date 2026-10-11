import CaseStudyPage from "./CaseStudyPage";

const EcommerceAIPersonalization = () => (
  <CaseStudyPage
    project={{
      title: "E-Commerce AI Personalization Engine",
      category: "AI & Automation",
      industry: "E-Commerce",
      introduction: "The personalization engine uses shopper behavior and purchase context to surface more relevant product recommendations throughout the e-commerce experience.",
      problem: "Generic product recommendations resulted in low engagement and high cart abandonment rates, leaving significant revenue on the table.",
      solution: "Developed a real-time AI personalization engine analyzing browsing behavior, purchase history, and intent signals to surface hyper-relevant products for each shopper.",
      outcome: "Revenue per visitor increased by 38% within 90 days of deployment with a major reduction in cart abandonment.",
      metrics: [{ stat: "38%", label: "Revenue Per Visitor" }, { stat: "22%", label: "Cart Abandonment Drop" }, { stat: "5x", label: "Recommendation CTR" }],
      tags: ["Recommendation Engine", "ML", "Real-Time AI", "E-Commerce"],
      keyCapabilities: [
        "Real-time product recommendations based on browsing behavior and purchase intent",
        "Customer segmentation and personalization logic tuned for conversion and retention",
        "Experiment-ready analytics to measure recommendation impact across the funnel",
      ],
      conclusion: "The personalization engine demonstrated that AI performs best when it is deeply tied to the customer journey. By tailoring product discovery in real time, the business increased revenue without forcing shoppers through generic, low-conversion experiences.",
    }}
  />
);

export default EcommerceAIPersonalization;
