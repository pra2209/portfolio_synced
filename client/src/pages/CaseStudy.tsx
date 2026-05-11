import { useRoute } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { trackCaseStudyOpen } from "@/lib/analytics";
import { useEffect } from "react";
import { setSEOMetadata, setArticleSchema } from "@/lib/seo";

interface CaseStudyData {
  id: string;
  title: string;
  tagline: string;
  company: string;
  metrics: { label: string; value: string }[];
  challenge: string;
  solution: string;
  outcome: string;
  keyLearnings: string[];
  technologies: string[];
}

const caseStudies: Record<string, CaseStudyData> = {
  "freddy-summarizer": {
    id: "freddy-summarizer",
    title: "Freddy AI Chart Summarizer",
    tagline: "Turning chart noise into executive-ready narrative with a single click",
    company: "Freshworks",
    metrics: [
      { label: "Engagement Rate", value: "≥56%" },
      { label: "Action Rate", value: "≥20%" },
      { label: "Chart Types Supported", value: "5" },
    ],
    challenge:
      "Support teams spend hours interpreting dashboards. Analysts create charts, but the narrative—what the data means—is left to the user. This creates friction and delays decision-making.",
    solution:
      "Built a GenAI-powered chart summarizer that transforms analytics visualizations into narrative insights. The system uses benchmark-relative language to contextualize metrics and multi-metric chart understanding to synthesize complex data into executive-ready summaries.",
    outcome:
      "Shipped in 90 days. Achieved ≥56% engagement within first quarter. Support teams now spend less time interpreting data and more time acting on insights.",
    keyLearnings: [
      "GenAI features succeed when they reduce cognitive load, not when they add features.",
      "Engagement metrics matter more than raw adoption—focus on value, not usage.",
      "Benchmark-relative language (vs. absolute numbers) drives better decision-making.",
    ],
    technologies: ["OpenAI GPT-4", "React", "TypeScript", "Tailwind CSS"],
  },
  "multi-agent-synthesis": {
    id: "multi-agent-synthesis",
    title: "Multi-Agent Analytics Report Synthesis",
    tagline: "From weeks of analyst work to minutes — a 7-agent pipeline for executive reporting",
    company: "Freshworks",
    metrics: [
      { label: "Agent Pipeline", value: "7-Agent" },
      { label: "Time Reduction", value: "Weeks → Minutes" },
      { label: "Scale", value: "Enterprise" },
    ],
    challenge:
      "Executive reporting is a bottleneck. Analysts manually extract data, synthesize insights, and format reports—a process that takes weeks and scales poorly.",
    solution:
      "Designed and built a 7-agent agentic AI system that automates the entire analytics workflow: metadata extraction, data querying, analysis, insight generation, and executive summary creation. Each agent specializes in one step of the pipeline.",
    outcome:
      "Reduced report generation time from weeks to minutes. Enabled on-demand executive reporting at scale without analyst overhead.",
    keyLearnings: [
      "Agentic AI is practical for enterprise workflows, not just hype.",
      "Agent specialization (one job per agent) improves reliability and debuggability.",
      "Orchestration and error handling are harder than the individual agents.",
    ],
    technologies: ["CrewAI", "OpenAI", "Python", "FastAPI"],
  },
  "nl-formula-builder": {
    id: "nl-formula-builder",
    title: "AI Co-pilot Metrics Builder",
    tagline: "Say what you want to measure. Let AI write the formula.",
    company: "Freshworks",
    metrics: [
      { label: "MRR Projection", value: "$77K" },
      { label: "Interface", value: "NL-to-Formula" },
      { label: "Users", value: "Business Users" },
    ],
    challenge:
      "Custom metrics require SQL or formula knowledge. Business users can't define their own metrics without analyst help, creating a bottleneck.",
    solution:
      "Built an AI co-pilot that translates natural language metric definitions into database formulas. Users describe what they want to measure in plain English, and the system generates the correct SQL/formula.",
    outcome:
      "Eliminated the SQL bottleneck. Business users can now define custom metrics independently. $77K MRR projection from this feature alone.",
    keyLearnings: [
      "Removing technical barriers unlocks user empowerment and revenue.",
      "NL-to-code is a high-leverage use case for GenAI in enterprise tools.",
      "Validation and error messages are critical—users need to understand why a formula is wrong.",
    ],
    technologies: ["OpenAI Codex", "React", "Node.js", "PostgreSQL"],
  },
};

export default function CaseStudy() {
  const [match, params] = useRoute("/project/:id");

  if (!match) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Link href="/">
            <a className="text-accent hover:text-secondary transition-colors">
              ← Back to Home
            </a>
          </Link>
        </div>
      </div>
    );
  }

  const caseStudy = caseStudies[(params?.id as string) || ""];

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Link href="/">
            <a className="text-accent hover:text-secondary transition-colors">
              ← Back to Home
            </a>
          </Link>
        </div>
      </div>
    );
  }

  useEffect(() => {
    trackCaseStudyOpen(caseStudy.id, caseStudy.title);
    setSEOMetadata({
      title: `${caseStudy.title} | Pranav`,
      description: caseStudy.tagline,
      type: "article",
    });
    setArticleSchema({
      headline: caseStudy.title,
      description: caseStudy.tagline,
    });
  }, [caseStudy]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container max-w-4xl mx-auto px-4 py-4">
          <Link href="/">
            <a className="inline-flex items-center gap-2 text-foreground/70 hover:text-accent transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back
            </a>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-4xl mx-auto px-4 py-16 md:py-24">
        {/* Hero */}
        <div className="mb-16 animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{caseStudy.title}</h1>
          <p className="text-xl text-foreground/80 mb-6">{caseStudy.tagline}</p>
          <p className="text-secondary font-medium mb-8">{caseStudy.company}</p>

          {/* Metrics */}
          <div className="grid md:grid-cols-3 gap-4">
            {caseStudy.metrics.map((metric, index) => (
              <div key={index} className="card">
                <p className="text-foreground/70 text-sm mb-2">{metric.label}</p>
                <p className="text-3xl font-bold text-accent">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Challenge */}
        <section className="mb-16 animate-fade-up stagger-1">
          <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">{caseStudy.challenge}</p>
        </section>

        {/* Solution */}
        <section className="mb-16 animate-fade-up stagger-2">
          <h2 className="text-3xl font-bold mb-6">The Solution</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">{caseStudy.solution}</p>
        </section>

        {/* Outcome */}
        <section className="mb-16 animate-fade-up stagger-3">
          <h2 className="text-3xl font-bold mb-6">The Outcome</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">{caseStudy.outcome}</p>
        </section>

        {/* Key Learnings */}
        <section className="mb-16 animate-fade-up stagger-4">
          <h2 className="text-3xl font-bold mb-6">Key Learnings</h2>
          <ul className="space-y-4">
            {caseStudy.keyLearnings.map((learning, index) => (
              <li key={index} className="flex gap-4">
                <span className="text-accent font-bold flex-shrink-0">→</span>
                <p className="text-lg text-foreground/80">{learning}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Technologies */}
        <section className="animate-fade-up stagger-5">
          <h2 className="text-3xl font-bold mb-6">Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {caseStudy.technologies.map((tech, index) => (
              <span key={index} className="badge-accent">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-20 pt-12 border-t border-border text-center animate-fade-up stagger-6">
          <p className="text-foreground/70 mb-6">
            Interested in working together or learning more about my approach?
          </p>
          <Link href="/#connect">
            <a className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-secondary transition-colors">
              Let's Talk
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
