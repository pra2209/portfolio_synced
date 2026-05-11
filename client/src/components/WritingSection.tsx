import { useState } from "react";
import { Linkedin, ExternalLink } from "lucide-react";

type PostCategory = "All" | "AI & Product" | "Product Thinking" | "Wins & Milestones";

interface Post {
  title: string;
  excerpt: string;
  category: Exclude<PostCategory, "All">;
  date: string;
  url: string;
  tags: string[];
}

const posts: Post[] = [
  {
    title: "In the agentic era: stop chasing Level 5 autonomy — win with controllable Levels 1–4",
    excerpt:
      "The rise of agentic AI is a fundamental shift, but trust beats autonomy every time. As agentic workflows rise, PMs face a real question: will agents cannibalize your product? The answer: your UI isn't obsolete — it's becoming an intelligent partner. The winners will master both.",
    category: "AI & Product",
    date: "2025",
    url: "https://www.linkedin.com/posts/pranav-singh_ai-saas-productmanagement-share-7376476369507184640-oxiv",
    tags: ["#AgenticAI", "#ProductManagement", "#SaaS"],
  },
  {
    title: "Honored to receive the Above and Beyond Gold Award at Freshworks — second year running",
    excerpt:
      "Sometimes the highest-leverage fix has nothing to do with AI. The solution was rethinking discoverability, reducing friction, and simplifying the experience. No models required. A platform that doesn't just show you what happened — but tells you what matters, why, and what to do about it.",
    category: "Wins & Milestones",
    date: "2025",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7320284709458976768/",
    tags: ["#Freshworks", "#GenAI", "#EnterpriseAI"],
  },
  {
    title: "The reframe that changed how I build AI analytics products",
    excerpt:
      "Customers don't want more data and visualizations staring at them. They want fewer actionable decisions, trust in making them, and clarity to execute. That reframing — from 'analyze these metrics' to 'tell me what I should care about and why' — fundamentally changed my product direction.",
    category: "AI & Product",
    date: "2024",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7239522823000465411/",
    tags: ["#Analytics", "#GenAI", "#ProductManagement"],
  },
  {
    title: "Advanced Analytics deep dive: what it takes to go beyond basic dashboards",
    excerpt:
      "Kicked off the first analytics learning session of the year covering advanced report personalization, constant lines for performance benchmarking, parent–child ticket relationships, time spent analysis in business vs. calendar hours, and a look at what's recently shipped and what's next.",
    category: "Product Thinking",
    date: "Jan 2025",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:6925034843286163457/",
    tags: ["#Analytics", "#SaaS", "#DataDriven"],
  },
  {
    title: "Deep learning & computer vision in production — what I built and what I learned",
    excerpt:
      "Transfer learning-based image classifier identifying 17 flower species with >80% accuracy, deployed with a user-friendly GUI for e-commerce vendors. Sharing key learnings on model selection, data augmentation, and deploying CV models that non-technical users can actually use.",
    category: "AI & Product",
    date: "2022",
    url: "https://www.linkedin.com/posts/pranav-singh_deeplearning-computervision-ai-share-6871784129818624000-yVId",
    tags: ["#DeepLearning", "#ComputerVision", "#AI"],
  },
  {
    title: "NLP for automated IT ticket routing — 91% classification accuracy",
    excerpt:
      "Built an NLP system that automatically detects IT incident categories and routes them to the right resolution team — replacing a manual, error-prone process. Key learnings: text vectorisation, handling severe class imbalance, and building classifiers business teams actually trust.",
    category: "AI & Product",
    date: "2022",
    url: "https://www.linkedin.com/posts/pranav-singh_ml-data-nlp-share-6882193090371731456-ut-M",
    tags: ["#NLP", "#MachineLearning", "#AI"],
  },
];

const categories: PostCategory[] = ["All", "AI & Product", "Product Thinking", "Wins & Milestones"];

export default function WritingSection() {
  const [activeCategory, setActiveCategory] = useState<PostCategory>("All");

  const filtered =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <section id="writing" className="section">
      <div className="container max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Writing & Thinking</h2>
          <p className="text-lg text-foreground/80 max-w-2xl">
            Ideas on AI product management, enterprise analytics, and building at scale.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex gap-2 mb-10 overflow-x-auto pb-2 animate-fade-up stagger-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-accent text-accent-foreground"
                  : "bg-card border border-border/50 text-foreground/70 hover:border-accent/40 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filtered.map((post, index) => (
            <a
              key={index}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="card-hover h-full flex flex-col">
                {/* Source + Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center gap-1.5 text-xs font-medium text-accent">
                    <Linkedin className="w-3.5 h-3.5" />
                    LinkedIn
                  </span>
                  <span className="text-xs px-2 py-0.5 bg-accent/10 text-accent rounded-full font-medium">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-foreground mb-3 group-hover:text-accent transition-colors leading-snug">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-foreground/60 text-sm leading-relaxed mb-4 flex-grow line-clamp-4">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.map((tag, i) => (
                    <span key={i} className="text-xs text-foreground/40 font-medium">{tag}</span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-border/30">
                  <span className="text-foreground/40 text-xs">{post.date}</span>
                  <div className="flex items-center gap-1 text-accent text-xs font-semibold group-hover:gap-2 transition-all">
                    Read on LinkedIn
                    <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="text-center animate-fade-up stagger-2">
          <a
            href="https://www.linkedin.com/in/pranav-singh/recent-activity/all/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:text-secondary transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            See all posts on LinkedIn →
          </a>
        </div>
      </div>
    </section>
  );
}
