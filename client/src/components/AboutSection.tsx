import { Trophy, Award, BookOpen } from "lucide-react";

const timeline = [
  {
    year: "2026",
    title: "Reforge — AI Product Suite",
    company: "Reforge",
    description: "AI Prototyping · AI Evals · AI Product Leadership · AI Growth (Apr–May 2026)",
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
    description: "Enterprise Analytics & GenAI — Freddy AI Summarizer, Multi-Agent Synthesis, AI Co-pilot, Analytics Bridge · $11M ARR in 8 months (Apr'24 – present)",
  },
  {
    year: "2020",
    title: "Lead Product Manager — Search & Discovery",
    company: "Walmart US",
    description: "$180M GMV · Query-session graph · ML ranking · Data Privacy · Bravo Award (Nov'20 – Apr'24)",
  },
  {
    year: "2020",
    title: "PG — Artificial Intelligence & Machine Learning",
    company: "University of Texas at Austin — McCombs School of Business & Great Lakes",
    description: "AI/ML, Deep Learning, NLP, Computer Vision, Recommender Systems · 10+ end-to-end projects (Nov'20 – Nov'21)",
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
    company: "SPJIMR, Mumbai + Cornell University International Immersion",
    description: "Global immersion at Cornell University · National Best Internship Award · CFA Research Challenge finalist, top 4 of 17 B-schools (Jun'16 – Jun'18)",
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
    detail: "Top 5% of 185+ PMs — $11M+ incremental ARR in 8 months through six product launches",
  },
  {
    title: "Bravo Award",
    org: "Walmart",
    detail: "Excellent data-driven analysis and product strategy for the Toys search category",
  },
  {
    title: "Impact Award",
    org: "Walmart",
    detail: "Innovation council leadership — organised 2 hackathons within 7 months of joining",
  },
  {
    title: "National Best Internship Award",
    org: "SPJIMR",
    detail: "Among 250 B-schools — mobile app for microfinance institution (20% increase in loan applications)",
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
  { name: "PG Program — Artificial Intelligence & Machine Learning", issuer: "University of Texas at Austin — McCombs School of Business & Great Lakes" },
  { name: "International Immersion Program", issuer: "Cornell University" },
  { name: "Project Management Professional (PMP)", issuer: "PMI, US" },
  { name: "CFA Level 1", issuer: "CFA Institute" },
  { name: "Google Analytics", issuer: "Google" },
  { name: "Bloomberg Market Concepts", issuer: "Bloomberg" },
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
              finally understands what it's telling her — without asking the data team. That outcome
              focus is what I bring to every portfolio I own: high-velocity experimentation, obsessive
              instrumentation, and exec-friendly storytelling that aligns teams and unblocks decisions.
            </p>
            <p>
              At Freshworks, I lead the Enterprise Analytics and GenAI portfolio across CX and ITSM.
              In my first eight months, we shipped six major launches — recognised top 5% among 185+
              PMs — and helped protect $11M+ in ARR by removing analytics friction and reliability
              gaps. Before that, at Walmart, I led parts of US e-commerce search at massive scale:
              retrieval and ranking improvements backed by A/B testing that delivered $180M+ in
              annualised GMV impact. Earlier at Barclays, a cashback recommendation engine I shipped
              generated £1MM in partner revenue in its first week.
            </p>
            <p>
              Across all three, I've been most effective where the job requires portfolio thinking
              paired with tight execution — AI and ML productisation, platform modernisation,
              enterprise readiness, and cross-functional leadership with VP and CxO-level
              stakeholders.
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
                className="flex gap-4 p-4 rounded-lg bg-card border border-border/50 hover:border-accent/30 transition-colors"
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
        <div className="animate-fade-up stagger-3">
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

      </div>
    </section>
  );
}
