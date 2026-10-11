import CaseStudyPage from "./CaseStudyPage";

const LegalDocumentAI = () => (
  <CaseStudyPage
    project={{
      title: "Legal Document Intelligence System",
      category: "Custom Software",
      industry: "Legal Tech",
      introduction: "The document intelligence system helps legal teams review contracts more efficiently by extracting, classifying, and assessing important clauses with AI.",
      problem: "Law firms were spending thousands of billable hours manually reviewing contracts and extracting key clauses, creating delays and increasing error risk.",
      solution: "Built an AI-powered document intelligence platform that extracts, classifies, and risk-scores legal clauses instantly using fine-tuned NLP models and a custom clause taxonomy.",
      outcome: "Contract review time reduced from days to minutes with 94% extraction accuracy across 10,000+ documents processed.",
      metrics: [{ stat: "94%", label: "Extraction Accuracy" }, { stat: "90%", label: "Time Saved" }, { stat: "10k+", label: "Docs Processed" }],
      tags: ["Legal AI", "NLP", "Document Processing", "Classification"],
      keyCapabilities: [
        "Automated clause extraction and document classification across large-volume legal repositories",
        "Risk scoring and issue identification for contracts, policies, and supporting paperwork",
        "Searchable legal intelligence that helps counsel surface the right context faster",
      ],
      conclusion: "The legal AI system created a more scalable review workflow by turning document-heavy analysis into a structured, searchable intelligence layer. Instead of replacing legal judgment, it accelerated the review process so attorneys could focus on strategic interpretation and negotiation.",
    }}
  />
);

export default LegalDocumentAI;
