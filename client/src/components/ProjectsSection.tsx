import ProjectCard from "./ProjectCard";
import { Zap, Brain, BarChart3, Search, Network } from "lucide-react";

const projects = [
  {
    id: "freddy-summarizer",
    title: "Freddy AI Chart Summarizer",
    tagline: "Turning chart noise into executive-ready narrative with a single click",
    company: "Freshworks",
    description:
      "GenAI-powered feature that transforms complex analytics charts into benchmark-relative narrative insights. Six-stage pre-processing pipeline with multi-metric chart understanding across stacked bars, heatmaps, and treemaps.",
    metrics: [
      { label: "≥56% engagement" },
      { label: "≥20% action rate" },
      { label: "First 3 months beta" },
    ],
    icon: <Zap className="w-8 h-8" />,
  },
  {
    id: "multi-agent-synthesis",
    title: "Multi-Agent Report Synthesis",
    tagline: "From weeks of analyst work to minutes — a 7-agent pipeline for executive reporting",
    company: "Freshworks",
    description:
      "Agentic AI system covering metadata extraction through executive summary generation. Prioritises significant metric movements across 50+ charts, performs cross-metric correlation detection and multi-dimensional root-cause analysis.",
    metrics: [
      { label: "7-Agent Pipeline" },
      { label: "Weeks → Minutes" },
      { label: "50+ charts analysed" },
    ],
    icon: <Brain className="w-8 h-8" />,
  },
  {
    id: "nl-formula-builder",
    title: "AI Co-pilot Metrics Builder",
    tagline: "Say what you want to measure. Let AI write the formula.",
    company: "Freshworks",
    description:
      "Natural language interface eliminating the SQL/formula bottleneck for business users. Auto-generates valid formulas, enables metric reuse, and reduces complex formula creation time by ~30%.",
    metrics: [
      { label: "$77K MRR" },
      { label: "≥50% metrics via AI" },
      { label: "~30% faster" },
    ],
    icon: <BarChart3 className="w-8 h-8" />,
  },
  {
    id: "analytics-bridge",
    title: "Analytics Bridge",
    tagline: "Closing the gap between insight and action across all Freshworks products",
    company: "Freshworks",
    description:
      "Scalable integration layer seamlessly connecting Freshworks' core SaaS applications with the analytics platform — removing friction between viewing data and taking action, reducing ticket resolution time by 20%.",
    metrics: [
      { label: "~$6M MRR" },
      { label: "75% adoption" },
      { label: "20% faster resolution" },
    ],
    icon: <Network className="w-8 h-8" />,
  },
  {
    id: "walmart-search",
    title: "Walmart US Search & Discovery",
    tagline: "Connecting what people search to what they buy — at $180B GMV scale",
    company: "Walmart",
    description:
      "ML-driven search personalisation using a query-session graph that connects search intent to purchase intent. Led relevance engineering, query understanding, and A/B experiments across 6%+ of all search sessions.",
    metrics: [
      { label: "$180M GMV" },
      { label: "+6.5% conversion" },
      { label: "6%+ sessions impacted" },
    ],
    icon: <Search className="w-8 h-8" />,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="container max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16 md:mb-20 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-lg text-foreground/80 max-w-2xl">
            Curated case studies showcasing product thinking, AI impact, and measurable outcomes at enterprise scale.
          </p>
        </div>

        {/* Grid — 2 columns gives clean layout for 5 cards (2+2+1) */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center animate-fade-up stagger-3">
          <p className="text-foreground/70 mb-4">
            Want to explore more? See my open-source builds and prototypes on GitHub.
          </p>
          <a
            href="https://github.com/pra2209/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:text-secondary transition-colors"
          >
            View on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
