import { CheckCircle2 } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
}

const timeline: TimelineItem[] = [
  {
    year: "2024",
    title: "Lead Product Manager",
    company: "Freshworks",
    description: "Enterprise Analytics & GenAI",
  },
  {
    year: "2020",
    title: "Lead Product Manager",
    company: "Walmart US",
    description: "Search & Discovery (3.5 years)",
  },
  {
    year: "2017",
    title: "MBA",
    company: "SPJIMR",
    description: "SP Jain Institute of Management",
  },
];

const beliefs = [
  {
    title: "AI is a builder's tool, not a feature",
    description:
      "I don't just spec AI features—I build AI systems. From multi-agent pipelines to NL-to-formula translation, I prototype and validate before handing off to engineering.",
  },
  {
    title: "Enterprise adoption comes from empathy",
    description:
      "The best analytics feature means nothing if analysts don't use it. I obsess over the moment a support lead finally understands what their data is telling them.",
  },
  {
    title: "Mentorship is part of the job",
    description:
      "I mentor PM candidates at Relevel (5,000+), coach at UT Austin and Great Lakes, and speak at Toastmasters. Growing the next generation of product leaders matters.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section bg-card/30 border-t border-b border-border">
      <div className="container max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">My Story</h2>
          <div className="space-y-6 text-lg text-foreground/80 max-w-3xl">
            <p>
              I spent three years at Walmart figuring out why people search for "apple" and get electronics. That problem—closing the gap between intent and outcome at scale—is still what drives me. At Freshworks, I've taken that same obsession into enterprise AI: building a multi-agent system that turns weeks of analyst work into minutes, and an AI summarizer that finally makes dashboards speak the language of business.
            </p>
            <p>
              My north star isn't the model. It's the moment a support lead looks at a chart and finally understands what it's telling her—without asking the data team. I'm transitioning toward Director or Principal PM roles at AI-first companies, and I'm building this portfolio to signal that readiness.
            </p>
          </div>
        </div>

        {/* Career Timeline */}
        <div className="mb-16 md:mb-20 animate-fade-up stagger-1">
          <h3 className="text-2xl font-bold mb-8">Career Timeline</h3>
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 pb-6 border-b border-border last:border-b-0 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    {item.year}
                  </div>
                </div>
                <div className="flex-grow">
                  <h4 className="text-lg font-semibold text-foreground">{item.title}</h4>
                  <p className="text-accent font-medium">{item.company}</p>
                  <p className="text-foreground/60 text-sm mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What I Believe */}
        <div className="animate-fade-up stagger-2">
          <h3 className="text-2xl font-bold mb-8">What I Believe</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {beliefs.map((belief, index) => (
              <div
                key={index}
                className="card-hover animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-foreground">
                      {belief.title}
                    </h4>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      {belief.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
