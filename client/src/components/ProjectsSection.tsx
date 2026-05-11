import ProjectCard from "./ProjectCard";
import { Zap, Brain, BarChart3 } from "lucide-react";

const projects = [
  {
    id: "freddy-summarizer",
    title: "Freddy AI Chart Summarizer",
    tagline: "Turning chart noise into executive-ready narrative with a single click",
    company: "Freshworks",
    description:
      "GenAI-powered feature that transforms analytics dashboards into narrative insights. Benchmark-relative language system with multi-metric chart summarization.",
    metrics: [
      { label: "≥20% action rate" },
      { label: "≥56% engagement" },
      { label: "5 chart types" },
    ],
    icon: <Zap className="w-8 h-8" />,
  },
  {
    id: "multi-agent-synthesis",
    title: "Multi-Agent Analytics Report Synthesis",
    tagline: "From weeks of analyst work to minutes — a 7-agent pipeline for executive reporting",
    company: "Freshworks",
    description:
      "Agentic AI system that automates enterprise analytics workflows. 7-agent pipeline covering metadata extraction through executive summary generation.",
    metrics: [
      { label: "7-Agent Pipeline" },
      { label: "Weeks → Minutes" },
      { label: "Enterprise scale" },
    ],
    icon: <Brain className="w-8 h-8" />,
  },
  {
    id: "nl-formula-builder",
    title: "AI Co-pilot Metrics Builder",
    tagline: "Say what you want to measure. Let AI write the formula.",
    company: "Freshworks",
    description:
      "Natural language interface for custom metric definition. Eliminates SQL/formula bottleneck for business users with $77K MRR projection.",
    metrics: [
      { label: "$77K MRR" },
      { label: "NL-to-Formula" },
      { label: "Business users" },
    ],
    icon: <BarChart3 className="w-8 h-8" />,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-lg text-foreground/80 max-w-2xl">
            Curated case studies showcasing product thinking, AI impact, and measurable outcomes. Each project demonstrates how I approach complex problems at scale.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6">
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

        {/* View All CTA */}
        <div className="mt-16 text-center animate-fade-up stagger-3">
          <p className="text-foreground/70 mb-4">
            Want to see more? Explore additional projects and case studies.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:text-secondary transition-colors"
          >
            View All Projects →
          </a>
        </div>
      </div>
    </section>
  );
}
