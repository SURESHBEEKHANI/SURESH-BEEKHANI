import CaseStudyPage from "./CaseStudyPage";

const EdtechAdaptiveLearning = () => (
  <CaseStudyPage
    project={{
      title: "Adaptive Learning AI for EdTech",
      category: "Healthcare AI",
      industry: "Education",
      introduction: "This adaptive learning engine personalizes lesson paths, pace, and difficulty so education platforms can better support learners with different needs.",
      problem: "One-size-fits-all course content failed students who learned at different paces, leading to high dropout rates and poor learning outcomes.",
      solution: "Designed an adaptive AI engine that personalizes learning paths, pacing, and content difficulty per student in real time, integrating with existing LMS platforms.",
      outcome: "Student completion rates improved by 65% with measurable learning outcome gains and 3x engagement increase.",
      metrics: [{ stat: "65%", label: "Completion Rate Up" }, { stat: "3x", label: "Engagement" }, { stat: "48h", label: "Onboarding Cut" }],
      tags: ["EdTech", "Adaptive AI", "Personalization", "LMS Integration"],
      keyCapabilities: [
        "Adaptive learner pathways that change pacing, difficulty, and content recommendation in real time",
        "Progress tracking and personalization logic tied to LMS and student engagement data",
        "Retention-focused analytics to identify at-risk learners and support intervention timing",
      ],
      conclusion: "The adaptive learning engine showed that personalization is a meaningful lever for engagement and completion. When lesson paths align with individual learning needs, learners progress with more confidence and institutions can support outcomes at scale.",
    }}
  />
);

export default EdtechAdaptiveLearning;
