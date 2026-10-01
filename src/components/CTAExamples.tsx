import CTA from './ui/CTA';

// ─────────────────────────────────────────────────────────────────────────────
// CTA EXAMPLES - Different variations using Velnix brand colors
// ─────────────────────────────────────────────────────────────────────────────

const CTAExamples = ({ className = '' }: { className?: string }) => {
  return (
    <div className="space-y-0">
      
      {/* Example 1: Main Hero CTA */}
      <CTA
        eyebrow="The Future We're Building"
        title="We don't just advise on AI. We build it, ship it, and scale it, for you, and for the world."
        description="Whether you're an enterprise, a founder, or an investor. Let's build your part of the future."
        primaryLabel="Start a Project"
        primaryHref="/contact"
        secondaryLabel="View Our Work →"
        secondaryHref="/portfolio"
        variant="centered"
        background="gradient"
        size="md"
        className={className}
      />





    </div>
  );
};

export default CTAExamples;