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
  role: string;
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
      { label: "Timeframe", value: "First 3 months" },
    ],
    challenge:
      "Business users — support leads, sales managers, ops heads — in Freshworks' enterprise CX and ITSM analytics platform were ignoring dashboards because charts surfaced data without narrative context. Interpreting complex chart types (stacked bars, heatmaps, treemaps) with multiple metrics required analyst involvement, creating a bottleneck that delayed decisions and weakened the platform's value proposition for Enterprise and AI-plan accounts.",
    role:
      "End-to-end product ownership. Wrote v1.0 and v2.0 summarisation guidelines, designed a six-stage pre-processing pipeline distinct from the LLM synthesis layer, built a working React prototype for engineering grooming sessions, defined prompt engineering standards across 5 chart types with benchmark-relative language, and resolved UX conflicts between aggregate functions and summariser benchmark dropdowns. Part of six launches that earned 3× CPO recognition and $11M+ incremental ARR in 8 months.",
    solution:
      "Built a GenAI-powered chart summariser with a deterministic six-stage pre-processing pipeline (metric extraction → benchmark calculation → trend detection → anomaly flagging → language normalisation → LLM synthesis). The system uses benchmark-relative language — comparing current metrics against user-defined baselines — rather than absolute numbers, producing executive-ready narratives that make charts legible without analyst involvement. Supports stacked bars, heatmaps, treemaps, line charts, and scatter plots.",
    outcome:
      "Achieved ≥56% engagement and ≥20% action rate within the first 3 months of private beta — ahead of the 60%+ adoption target set for the first 90 days. Now being extended to report-level synthesis: a multi-agent system that prioritises significant metric movements across 50+ charts simultaneously. Recognised as a key Enterprise and AI-plan monetisation lever for Freshworks' analytics platform.",
    keyLearnings: [
      "Separating the deterministic pre-processing layer from LLM synthesis dramatically improves reliability and makes quality benchmarking tractable — you can test each stage independently.",
      "Benchmark-relative language ('8% below your Q3 average') drives better decisions than absolute numbers ('42 tickets') — context is the product, not the number.",
      "Building a prototype for engineering grooming is worth the investment; it reduces ambiguity, surfaces edge cases early, and halves the back-and-forth during sprint planning.",
    ],
    technologies: ["OpenAI GPT-4", "React", "TypeScript", "Prompt Engineering", "Tailwind CSS"],
  },

  "multi-agent-synthesis": {
    id: "multi-agent-synthesis",
    title: "Multi-Agent Report Synthesis",
    tagline: "From weeks of analyst work to minutes — a 7-agent pipeline for executive reporting",
    company: "Freshworks",
    metrics: [
      { label: "Agent Pipeline", value: "7-Agent" },
      { label: "Charts Processed", value: "50+" },
      { label: "Time Reduction", value: "Weeks → Minutes" },
    ],
    challenge:
      "Enterprise analytics teams were manually extracting data from 50+ charts per report, synthesising insights across metrics, and writing executive narratives — a process taking weeks per reporting cycle. The workflow was fragile, non-repeatable, and scaled poorly as Freshworks' enterprise customer base grew. There was no system for cross-metric correlation detection or multi-dimensional root-cause analysis at report level.",
    role:
      "Led the design of the full 7-agent pipeline architecture from metadata extraction through executive summary generation. Conducted PRD gap analysis against the existing single-chart summariser, defined gold-standard output quality benchmarks, designed the prompt editor UI and cost/token tracking dashboard, and spec'd the PDF export feature. The prototype architecture diagram is the current engineering reference. This is the next-horizon product actively in development.",
    solution:
      "Designed a 7-agent agentic AI system where each agent specialises in one pipeline stage: Agent 1 (Metadata Extraction) → Agent 2 (Data Validation) → Agent 3 (Trend Detection) → Agent 4 (Anomaly Flagging) → Agent 5 (Benchmark Comparison) → Agent 6 (Cross-Metric Correlation & Multi-Dimensional RCA) → Agent 7 (Executive Narrative Generation). The system prioritises significant metric movements across 50+ charts simultaneously, performs cross-metric correlation detection, and generates executive-ready narratives with root-cause attribution — reducing human analytical work from weeks to minutes.",
    outcome:
      "Target outcome: reducing report generation from weeks to minutes for enterprise analytics teams. Positioned as the next major monetisation lever for Freshworks' analytics platform, extending the Freddy AI Summariser's single-chart capability to full report intelligence. Gold-standard benchmarks defined; engineering build underway.",
    keyLearnings: [
      "Agent specialisation — one job per agent — dramatically improves reliability, debuggability, and the ability to evaluate each stage independently against gold-standard outputs.",
      "Gold-standard output benchmarks must be defined before the build begins, not after — they are the product spec for agentic systems, not an afterthought.",
      "Orchestration and error handling are harder problems than the individual agents; budget at least as much design time for the seams as for the agents themselves.",
    ],
    technologies: ["CrewAI", "LangGraph", "OpenAI", "AgentOps", "Python", "FastAPI", "React"],
  },

  "nl-formula-builder": {
    id: "nl-formula-builder",
    title: "AI Co-pilot Metrics Builder",
    tagline: "Say what you want to measure. Let AI write the formula.",
    company: "Freshworks",
    metrics: [
      { label: "MRR Projection", value: "$77K+" },
      { label: "New Metrics via AI", value: "≥50%" },
      { label: "Formula Time Saved", value: "~30%" },
    ],
    challenge:
      "Business users in Freshworks Analytics needed to define custom metrics (e.g., 'CSAT trend for enterprise accounts in Q4 excluding escalations') but had no SQL or formula skills. Three compounding pain points drove abandonment: complexity of formula syntax, lack of guided metric discovery, and frequent syntax errors with no actionable error messages. Every custom metric required a ticket to the analytics team — a multi-day bottleneck that blocked real-time business decisions and created recurring friction for support admins.",
    role:
      "Full product ownership. Defined the NL-to-formula translation flow, UX design including error messages and metric reuse patterns, and formula accuracy benchmarks. Built the business case with a $77K+ cumulative MRR projection, positioning the feature as a cornerstone of Freshworks' GenAI-led productivity strategy. Led engineering spec through grooming with the prototype flow.",
    solution:
      "Built an AI co-pilot that translates natural language metric definitions into validated database formulas. Users describe what they want to measure in plain English; the system generates the correct formula, surfaces similar existing metrics for reuse (eliminating duplication), and provides plain-language error explanations when formulas fail validation. The full cycle — from natural language input to saved metric — takes under 2 minutes versus the previous 3-day ticket cycle.",
    outcome:
      "Projected $77K+ cumulative MRR from active CX account adoption, making it a cornerstone of Freshworks' GenAI productivity strategy. ≥50% of new metrics expected to be created via the AI path post-launch. ≈30% reduction in formula creation time in early testing. Eliminated the SQL bottleneck entirely for non-technical support admins.",
    keyLearnings: [
      "Removing technical barriers directly unlocks revenue — the $77K MRR projection is attributable entirely to unblocking business users who previously couldn't self-serve metric creation.",
      "Metric reuse — surfacing existing similar metrics before creating new ones — was the insight that prevented a library of duplicate metrics from emerging post-launch.",
      "Plain-language error explanations matter more than the AI's formula accuracy; users need to understand *why* a formula is wrong, not just that it failed validation.",
    ],
    technologies: ["OpenAI Codex", "React", "Node.js", "PostgreSQL", "TypeScript"],
  },

  "analytics-bridge": {
    id: "analytics-bridge",
    title: "Analytics Bridge",
    tagline: "Closing the gap between insight and action across all Freshworks products",
    company: "Freshworks",
    metrics: [
      { label: "MRR Impact", value: "~$6M" },
      { label: "Product Adoption", value: "75%" },
      { label: "Resolution Time", value: "−20%" },
    ],
    challenge:
      "Freshworks enterprise users experienced significant friction when transitioning between viewing analytics data and taking action. Support agents would identify a problem in the analytics platform, then manually navigate to the core CRM or ITSM product to act on it — a context switch that caused delays in ticket responses and resolutions, eroded CSAT, and reduced the operational value of the analytics platform. This friction was systemic across all Freshworks products.",
    role:
      "Led design and implementation of the Analytics Bridge as a platform-level product. Defined the integration architecture connecting Freshworks' core SaaS applications (CX, ITSM) with the analytics platform, mapped the user journey gaps causing the context-switching problem, and built the business case projecting ~$6M MRR impact and 75% adoption across all FW products.",
    solution:
      "Designed a scalable Analytics Bridge — a seamless integration layer that embeds actionable context from the analytics platform directly into Freshworks' core products. Users can move from viewing an analytics insight to acting on a ticket or customer record without leaving their workflow. The bridge surfaces relevant analytics data contextually within the operational product, and enables action-taking from within the analytics view — eliminating the round-trip context switch entirely.",
    outcome:
      "Projected ~$6M MRR impact with 75% adoption across all Freshworks products. 20% reduction in ticket resolution times and 15% improvement in response times — directly improving customer CSAT for Freshworks' enterprise accounts including strategic accounts like Allianz Partners. Enhances the operational ROI of the analytics platform by connecting insight to outcome.",
    keyLearnings: [
      "The most valuable product moves are often not new features but better connections between existing ones — the Analytics Bridge created outsized impact by eliminating friction rather than adding capability.",
      "Mapping the full user journey across product boundaries reveals problems that single-product roadmaps miss; the context-switching problem was invisible until we tracked the end-to-end flow.",
      "Platform-level products require cross-product stakeholder alignment that is harder than the engineering; the design phase is really a negotiation phase.",
    ],
    technologies: ["React", "TypeScript", "tRPC", "REST APIs", "Freshworks Platform SDK"],
  },

  "walmart-search": {
    id: "walmart-search",
    title: "Walmart US Search & Discovery",
    tagline: "Connecting what people search to what they buy — at $180B GMV scale",
    company: "Walmart",
    metrics: [
      { label: "GMV Influenced", value: "$180M" },
      { label: "Session Conversion Lift", value: "+6.5pp" },
      { label: "Search Sessions Impacted", value: "6%+" },
    ],
    challenge:
      "Over 6% of all Walmart.com search sessions were performing poorly due to query ambiguity — the same search term meant different things depending on user context, purchase history, and session intent. A user searching 'apple' could mean fruit or electronics. Keyword-based ranking had no mechanism to resolve this ambiguity at scale, resulting in high session abandonment, low add-to-cart rates, and missed conversion for Walmart's highest-value discovery categories including apparels and home appliances.",
    role:
      "Lead PM for Search & Discovery, Walmart US (3.5 years). Owned query understanding and ML relevance strategy for Walmart.com search. Led the query-session graph initiative for ML-driven personalisation across 6%+ of search sessions. Ran A/B experiments to validate relevance improvements, partnered with data science and ML teams on experiment design and interpretation, and coordinated across merchandising, engineering, and data science to align the roadmap. Recognised with the Bravo Award for data-driven analysis and product strategy.",
    solution:
      "Led the design and implementation of a crowd-engagement based query-session graph that establishes correlations between queries, categories, and items using session-level behavioural signals — clicks, dwell time, add-to-cart events. The graph connects what users search for to what they ultimately buy, becoming the input feature layer for Walmart's ML ranking models. Rather than relying solely on query text, the system blends results from the new session-graph-informed recall layer into the existing ranking system — enabling contextual ranking that adapts to individual session intent.",
    outcome:
      "6.5 percentage point lift in session conversion rate — contributing ~$180M annualized GMV and fostering lasting customer habits. The query-session graph became the foundational ML feature layer for Walmart.com's search personalisation strategy, underpinning subsequent ranking model iterations. Bravo Award recognising the data-driven product strategy behind this work.",
    keyLearnings: [
      "Session-level signals (clicks, dwell time, add-to-cart) are more predictive of intent than query text alone — they reveal what the user meant, not just what they typed.",
      "A/B testing at Walmart scale requires statistical discipline: even a 0.1% conversion lift represents tens of millions in annualized GMV, so false positives are costly. Run experiments for longer than feels necessary.",
      "The hardest part of ML-driven ranking is the feature pipeline, not the model — getting clean, low-latency session signals into the ranking system took more engineering investment than the graph itself.",
    ],
    technologies: ["ML Ranking Models", "Query-Session Graph", "A/B Testing", "Python", "Spark", "Hadoop"],
  },
};

export default function CaseStudy() {
  const [match, params] = useRoute("/project/:id");

  const notFound = (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
        <Link href="/"><a className="text-accent hover:text-secondary transition-colors">← Back to Home</a></Link>
      </div>
    </div>
  );

  if (!match) return notFound;

  const caseStudy = caseStudies[(params?.id as string) || ""];
  if (!caseStudy) return notFound;

  useEffect(() => {
    trackCaseStudyOpen(caseStudy.id, caseStudy.title);
    setSEOMetadata({
      title: `${caseStudy.title} | Pranav Kumar Singh`,
      description: caseStudy.tagline,
      type: "article",
    });
    setArticleSchema({ headline: caseStudy.title, description: caseStudy.tagline });
  }, [caseStudy]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container max-w-4xl mx-auto px-4 py-4">
          <Link href="/"><a className="inline-flex items-center gap-2 text-foreground/70 hover:text-accent transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </a></Link>
        </div>
      </header>

      <main className="container max-w-4xl mx-auto px-4 py-16 md:py-24">

        {/* Hero */}
        <div className="mb-16 animate-fade-up">
          <p className="text-secondary font-medium mb-3">{caseStudy.company}</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{caseStudy.title}</h1>
          <p className="text-xl text-foreground/80 mb-10">{caseStudy.tagline}</p>
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

        {/* Role */}
        <section className="mb-16 animate-fade-up stagger-2">
          <h2 className="text-3xl font-bold mb-6">My Role</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">{caseStudy.role}</p>
        </section>

        {/* Solution */}
        <section className="mb-16 animate-fade-up stagger-3">
          <h2 className="text-3xl font-bold mb-6">The Solution</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">{caseStudy.solution}</p>
        </section>

        {/* Outcome */}
        <section className="mb-16 animate-fade-up stagger-4">
          <h2 className="text-3xl font-bold mb-6">The Outcome</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">{caseStudy.outcome}</p>
        </section>

        {/* Key Learnings */}
        <section className="mb-16 animate-fade-up stagger-5">
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
        <section className="animate-fade-up stagger-6">
          <h2 className="text-3xl font-bold mb-6">Technologies & Methods</h2>
          <div className="flex flex-wrap gap-3">
            {caseStudy.technologies.map((tech, index) => (
              <span key={index} className="badge-accent">{tech}</span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-20 pt-12 border-t border-border text-center animate-fade-up">
          <p className="text-foreground/70 mb-6">Interested in working together or learning more about my approach?</p>
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
