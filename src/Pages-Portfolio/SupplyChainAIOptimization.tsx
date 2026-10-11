import CaseStudyPage from "./CaseStudyPage";

const SupplyChainAIOptimization = () => (
  <CaseStudyPage
    project={{
      title: "AI-Driven Supply Chain Optimization",
      category: "AI & Automation",
      industry: "Logistics & Supply Chain",
      introduction: "This optimization system combines supplier, logistics, and demand data to give operations teams a clearer basis for forecasting and inventory decisions.",
      problem: "Supply chain disruptions and inaccurate demand forecasting led to excess inventory, missed delivery windows, and ballooning operational costs.",
      solution: "Implemented an AI forecasting and optimization system integrating live supplier, logistics, and market demand data across 15+ sources for real-time decision intelligence.",
      outcome: "Inventory costs cut by 30% with 98% on-time delivery performance achieved across all distribution nodes.",
      metrics: [{ stat: "30%", label: "Inventory Cost Cut" }, { stat: "98%", label: "On-Time Delivery" }, { stat: "15+", label: "Data Sources Unified" }],
      tags: ["Supply Chain", "Forecasting", "Optimization", "Logistics AI"],
      keyCapabilities: [
        "Demand forecasting and inventory optimization across supplier, market, and logistics signals",
        "Scenario planning for disruption risk and fulfillment tradeoffs",
        "Operational dashboards that unify logistics performance, cost, and delivery visibility",
      ],
      conclusion: "The optimization system proved that resilient supply chains are built through better prediction and faster decision support. By giving operations teams a clearer view of risk and tradeoffs, the client improved delivery reliability while reducing unnecessary inventory cost.",
    }}
  />
);

export default SupplyChainAIOptimization;
