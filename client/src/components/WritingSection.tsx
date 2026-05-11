import { useState } from "react";
import { Linkedin, ExternalLink } from "lucide-react";

interface WritingPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: "all" | "product" | "ai" | "wins" | "podcasts";
  source: "linkedin" | "medium" | "newsletter";
  url: string;
}

const categories = [
  { id: "all", label: "All" },
  { id: "product", label: "Product Thinking" },
  { id: "ai", label: "AI & Product" },
  { id: "wins", label: "Wins & Milestones" },
  { id: "podcasts", label: "Podcasts & Talks" },
];

const posts: WritingPost[] = [
  {
    id: "1",
    title: "Why most enterprise AI features fail at adoption — and what I did differently",
    excerpt:
      "Building AI features is the easy part. Getting a support lead in a 300-person company to actually use it is the hard part. Here's what I learned...",
    date: "Apr 2026",
    category: "ai",
    source: "linkedin",
    url: "#",
  },
  {
    id: "2",
    title: "The query-session graph: How we moved $180M in GMV at Walmart",
    excerpt:
      "Search relevance isn't just about keywords. It's about understanding intent. Here's how we built a graph-based system that understood context...",
    date: "Mar 2026",
    category: "product",
    source: "linkedin",
    url: "#",
  },
  {
    id: "3",
    title: "Shipped: Freddy AI Summarizer — ≥56% engagement in 90 days",
    excerpt:
      "From concept to production in 3 months. Here's the product thinking behind an AI feature that actually gets used by analysts...",
    date: "Feb 2026",
    category: "wins",
    source: "linkedin",
    url: "#",
  },
  {
    id: "4",
    title: "Agentic AI for Enterprise Analytics: A 7-Agent Pipeline",
    excerpt:
      "Multi-agent systems aren't just hype. They're a practical tool for automating complex workflows. Here's how we built one for analytics...",
    date: "Jan 2026",
    category: "ai",
    source: "linkedin",
    url: "#",
  },
  {
    id: "5",
    title: "Toastmasters Talk: Communicating Complex Ideas to Non-Technical Stakeholders",
    excerpt:
      "As a PM, your ability to communicate is as important as your ability to think. Here's what I learned from Toastmasters...",
    date: "Dec 2025",
    category: "podcasts",
    source: "linkedin",
    url: "#",
  },
  {
    id: "6",
    title: "Mentoring 5,000+ PM candidates: What I've learned about career growth",
    excerpt:
      "Mentoring at scale taught me what separates good PMs from great ones. It's not what you think...",
    date: "Nov 2025",
    category: "wins",
    source: "linkedin",
    url: "#",
  },
];

export default function WritingSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredPosts =
    activeCategory === "all"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <section id="writing" className="section">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Writing & Thinking</h2>
          <p className="text-lg text-foreground/80 max-w-2xl">
            Thoughts on product strategy, AI, career growth, and what I've learned building at scale.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-12 overflow-x-auto animate-fade-up stagger-1">
          <div className="flex gap-3 pb-2 min-w-max md:min-w-0">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium text-sm transition-all whitespace-nowrap ${
                  activeCategory === category.id
                    ? "bg-accent text-accent-foreground"
                    : "bg-card text-foreground hover:bg-card/80"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredPosts.map((post, index) => (
              <a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="card-hover h-full flex flex-col animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-4">
                    {post.source === "linkedin" && (
                      <Linkedin className="w-5 h-5 text-accent flex-shrink-0" />
                    )}
                    <span className="badge-accent text-xs">{post.category}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-foreground/70 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <span className="text-xs text-foreground/50">{post.date}</span>
                    <div className="flex items-center text-accent font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
                      Read
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-foreground/70 mb-6">No posts in this category yet.</p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:text-secondary transition-colors"
            >
              Follow on LinkedIn for updates →
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
