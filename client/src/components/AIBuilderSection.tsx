import { Github, ExternalLink } from "lucide-react";

interface GitHubProject {
  name: string;
  description: string;
  tags: string[];
  url: string;
  hasRepo: boolean;
}

const projects: GitHubProject[] = [
  {
    name: "Agentic Customer Feedback Pipeline",
    description:
      "6-agent system for customer feedback analysis and routing — Edureka capstone (Grade A). Automates feedback categorisation, sentiment analysis, priority scoring, and escalation routing end-to-end.",
    tags: ["CrewAI", "LangGraph", "AgentOps", "Streamlit", "Python"],
    url: "https://github.com/pra2209/",
    hasRepo: false,
  },
  {
    name: "Analytics FAQs Chatbot (RAG)",
    description:
      "RAG-powered chatbot that answers enterprise analytics queries by dynamically retrieving context from an indexed knowledge base. Produces source-attributed responses — reducing average resolution lookup time significantly in testing.",
    tags: ["Python", "RAG", "LangChain", "OpenAI"],
    url: "https://github.com/pra2209/Analytics_FAQs_chatbot",
    hasRepo: true,
  },
  {
    name: "Automated IT Ticket Classifier",
    description:
      "NLP system that automatically detects the category of IT incidents and allocates them to the right functional group for resolution — replacing a manual, error-prone process. Achieved 91% classification accuracy.",
    tags: ["NLP", "Python", "scikit-learn", "Classification"],
    url: "https://github.com/pra2209/Automated-Ticket-Assignment",
    hasRepo: true,
  },
  {
    name: "Flower Image Classifier",
    description:
      "Transfer learning-based image classifier identifying flower species across 17 categories with >80% accuracy — deployed with a user-friendly GUI enabling e-commerce vendors to upload and search product images by species.",
    tags: ["PyTorch", "Computer Vision", "Transfer Learning", "HTML"],
    url: "https://github.com/pra2209/Flower_image_classification",
    hasRepo: true,
  },
  {
    name: "ML & Data Science Portfolio",
    description:
      "End-to-end ML project collection from UT Austin & Great Lakes PG programme — including sentiment analysis (92% F1), handset recommendation engine using SVD/collaborative filtering, and customer preference modelling.",
    tags: ["SVD", "Collaborative Filtering", "NLP", "Python", "scikit-learn"],
    url: "https://github.com/pra2209/datascience",
    hasRepo: true,
  },
];

export default function AIBuilderSection() {
  return (
    <section id="ai-builder" className="section bg-card/30 border-t border-b border-border">
      <div className="container max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16 md:mb-20 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            I don't just ship AI features.
            <br />
            <span className="gradient-text">I build AI systems.</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mt-6">
            Hands-on projects in agentic AI, RAG, NLP, computer vision, and ML — built outside
            of work to sharpen the craft behind the product decisions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="card-hover h-full flex flex-col">
                <div className="mb-4 flex items-start justify-between">
                  <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-accent transition-colors flex-grow pr-2">
                    {project.name}
                  </h3>
                  <Github className="w-5 h-5 text-accent flex-shrink-0" />
                </div>

                <p className="text-foreground/70 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="badge-secondary text-xs">{tag}</span>
                  ))}
                </div>

                <div className="flex items-center text-accent font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
                  {project.hasRepo ? "View on GitHub" : "View Profile"}
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All */}
        <div className="text-center animate-fade-up stagger-2">
          <a
            href="https://github.com/pra2209/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:text-secondary transition-colors"
          >
            View all repositories on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
