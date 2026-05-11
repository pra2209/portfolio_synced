import { CheckCircle2, Trophy, Award, BookOpen } from "lucide-react";

const timeline = [
  {
    year: "2026",
    title: "Reforge — AI Product Suite",
    company: "Reforge",
    description: "AI Prototyping · AI Evals · AI Product Leadership · AI Growth (concurrent, Apr–May 2026)",
  },
  {
    year: "2025",
    title: "Agentic AI Engineer — Grade A",
    company: "Edureka",
    description: "Capstone: 6-agent customer feedback pipeline using CrewAI, LangGraph, AgentOps, Streamlit",
  },
  {
    year: "2024",
    title: "Lead Product Manager",
    company: "Freshworks",
    description: "Enterprise Analytics & GenAI — Freddy AI Summarizer, Multi-Agent Report Synthesis, AI Co-pilot, Analytics Bridge · $11M ARR in 8 months (Apr'24 – present)",
  },
  {
    year: "2020",
    title: "Lead Product Manager — Search & Discovery",
    company: "Walmart US",
    description: "$180M GMV · Query-session graph · ML ranking · Data Privacy (Senior PM) · Bravo Award (Nov'20 – Apr'24)",
  },
  {
    year: "2020",
    title: "PG — Artificial Intelligence & Machine Learning",
    company: "UT Austin (US) & Great Lakes (India)",
    description: "Deep Learning, NLP, Computer Vision, Recommender Systems · 10+ end-to-end projects (Nov'20 – Nov'21)",
  },
  {
    year: "2018",
    title: "Product Platform Tech Lead (Asst. VP)",
    company: "Barclays",
    description: "Campaign platform (£1MM revenue, 21× conversion) · Insurance platform · API migration saving £400K/year (Apr'18 – Nov'20)",
  },
  {
    year: "2016",
    title: "MBA — Finance & Analytics",
    company: "SPJIMR, Mumbai",
    description: "National Best Internship Award · CFA Research Challenge finalist (top 4 of 17) · Cornell International Immersion 2017 (Jun'16 – Jun'18)",
  },
  {
    year: "2013",
    title: "Associate Consultant",
    company: "Oracle",
    description: "Corporate & retail branch banking solutions · Credit Agricole, Egypt · ~10% profit uplift in year 1 (Dec'13 – Apr'16)",
  },
];

const awards = [
  {
    title: "3× CPO Gold Recognition",
    org: "Freshworks",
    detail: "Top 5% of 185+ PMs — $11M+ incremental ARR in 8 months through six product launches including AI chart summary and data exports",
  },
  {
    title: "Bravo Award",
    org: "Walmart",
    detail: "Excellent data-driven analysis and product strategy for the Toys search category — query-session graph contributing $180M GMV",
  },
  {
    title: "Impact Award",
    org: "Walmart",
    detail: "Spearheaded Innovation Council for Walmart Chennai — organised 2 hackathons & networking events within 7 months of joining",
  },
  {
    title: "National Best Internship Award",
    org: "SPJIMR",
    detail: "Among 250 B-schools — mobile app for microfinance institution achieving 20% increase in annual loan applications",
  },
  {
    title: "CFA Research Challenge",
    org: "SPJIMR",
    detail: "Zonal round winner — selected among top 4 of 17 participating B-schools",
  },
  {
    title: "National Finalist — Brand Factory Strategy",
    org: "SPJIMR",
    detail: "National level B-school competition to plan strategy for Future Group's Brand Factory stores",
  },
];

const certifications = [
  { name: "Leadership in AI", issuer: "ISB Hyderabad" },
  { name: "Agentic AI Engineer (Grade A)", issuer: "Edureka" },
  { name: "Azure AI Fundamentals", issuer: "Microsoft" },
  { name: "PG — AI & Machine Learning", issuer: "UT Austin & Great Lakes" },
  { name: "Project Management Professional (PMP)", issuer: "PMI, US" },
  { name: "CFA Level 1", issuer: "CFA Institute" },
  { name: "Google Analytics", issuer: "Google" },
  { name: "Bloomberg Market Concepts", issuer: "Bloomberg" },
];

const beliefs = [
  {
    title: "AI is a builder's tool, not a feature",
    description:
      "I don't just spec AI features — I build AI systems. From multi-agent pipelines to NL-to-formula translation, I prototype and validate before handing off to engineering.",
  },
  {
    title: "Enterprise adoption comes from empathy",
    description:
      "The best analytics feature means nothing if analysts don't use it. I obsess over the moment a support lead finally understands what their data is telling her — without asking the data team.",
  },
  {
    title: "Mentorship is part of the job",
    description:
      "I mentor PM candidates at Relevel (5,000+), coach at UT Austin and Great Lakes, and speak at Toastmasters. Growing the next generation of product leaders matters as much as the product itself.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section bg-card/30 border-t border-b border-border">
      <div className="container max-w-5xl mx-auto">

        {/* My Story */}
        <div className="mb-16 md:mb-20 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">My Story</h2>
          <div className="space-y-6 text-lg text-foreground/80 max-w-3xl">
            <p>
              I spent three years at Walmart figuring out why people search for "apple" and get
              electronics. That problem — closing the gap between intent and outcome at scale — is
              still what drives me. At Freshworks, I've taken that same obsession into enterprise
              AI: building a multi-agent system that turns weeks of analyst work into minutes, and
              an AI summarizer that finally makes dashboards speak the language of business.
            </p>
            <p>
              My north star isn't the model. It's the moment a support lead looks at a chart and
              finally understands what it's telling her — without asking the data team. Recognised
              3× by Freshworks CPO (top 5% of 185+ PMs) and having shipped $11M+ in incremental
              ARR across six launches in 8 months, I'm targeting Director / Principal PM roles at
              AI-first companies.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16 md:mb-20 animate-fade-up stagger-1">
          <h3 className="text-2xl font-bold mb-8">Career & Learning Timeline</h3>
          <div className="space-y-5">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 pb-5 border-b border-border last:border-b-0 animate-fade-up"
                style={{ animationDelay: `${index * 0.07}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-xs">
                    {item.year}
                  </div>
                </div>
                <div className="flex-grow pt-1">
                  <h4 className="text-base font-semibold text-foreground">{item.title}</h4>
                  <p className="text-accent font-medium text-sm">{item.company}</p>
                  <p className="text-foreground/60 text-sm mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div className="mb-16 md:mb-20 animate-fade-up stagger-2">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Trophy className="w-6 h-6 text-accent" />
            Awards & Recognition
          </h3>
          <div className="space-y-3">
            {awards.map((award, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 rounded-lg bg-card border border-border/50 hover:border-accent/30 transition-colors animate-fade-up"
                style={{ animationDelay: `${index * 0.07}s` }}
              >
                <Award className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h4 className="font-semibold text-foreground text-sm">{award.title}</h4>
                    <span className="text-xs px-2 py-0.5 bg-accent/10 text-accent rounded-full font-medium">
                      {award.org}
                    </span>
                  </div>
                  <p className="text-foreground/60 text-sm">{award.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16 md:mb-20 animate-fade-up stagger-3">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-accent" />
            Certifications & Credentials
          </h3>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="px-4 py-3 rounded-lg bg-card border border-border/50 hover:border-accent/30 transition-colors"
              >
                <p className="font-semibold text-foreground text-sm">{cert.name}</p>
                <p className="text-foreground/50 text-xs mt-0.5">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What I Believe */}
        <div className="animate-fade-up stagger-4">
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
                    <h4 className="text-lg font-semibold mb-2 text-foreground">{belief.title}</h4>
                    <p className="text-foreground/70 text-sm leading-relaxed">{belief.description}</p>
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
