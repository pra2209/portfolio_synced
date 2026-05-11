import { Github, ExternalLink } from "lucide-react";

interface GitHubProject {
  name: string;
  description: string;
  tags: string[];
  url: string;
}

const projects: GitHubProject[] = [
  {
    name: "Agentic Customer Feedback Pipeline",
    description:
      "6-agent system for customer feedback analysis and routing — Edureka capstone (Grade A). Automates feedback categorization, sentiment analysis, and escalation routing.",
    tags: ["CrewAI", "Streamlit", "Python"],
    url: "#",
  },
  {
    name: "RAG-Based Chatbot",
    description:
      "Retrieval-augmented generation chatbot for enterprise support. Indexes knowledge base documents and provides context-aware responses with source attribution.",
    tags: ["LangChain", "OpenAI", "FAISS"],
    url: "#",
  },
  {
    name: "NLP Sentiment Analysis",
    description:
      "Multi-class sentiment classifier for customer feedback and social listening. Fine-tuned on domain-specific data with 94% accuracy on test set.",
    tags: ["HuggingFace", "Python", "scikit-learn"],
    url: "#",
  },
  {
    name: "Image Classification Pipeline",
    description:
      "Transfer learning-based image classifier for product quality control. Deployed as REST API with real-time inference and batch processing capabilities.",
    tags: ["PyTorch", "FastAPI", "Docker"],
    url: "#",
  },
];

export default function AIBuilderSection() {
  return (
    <section id="ai-builder" className="section bg-card/30 border-t border-b border-border">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            I don't just ship AI features.
            <br />
            <span className="gradient-text">I build AI systems.</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mt-6">
            Here's what I've built outside of work. These projects showcase hands-on expertise in agentic AI, RAG systems, and production ML pipelines.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="card-hover h-full flex flex-col">
                {/* Header */}
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                  </div>
                  <Github className="w-5 h-5 text-accent flex-shrink-0 ml-2" />
                </div>

                {/* Description */}
                <p className="text-foreground/70 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="badge-secondary text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center text-accent font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
                  View on GitHub
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center animate-fade-up stagger-2">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:text-secondary transition-colors"
          >
            View all on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
