import { ArrowRight, Linkedin, Github, Trophy } from "lucide-react";
import { trackCTAClick, trackLinkedInClick, trackGitHubClick, getLinkedInURLWithUTM } from "@/lib/analytics";

export default function HeroSection() {
  const handleScroll = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 md:pt-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container max-w-4xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Left: Text */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="text-foreground">Pranav Kumar Singh</span>
                <br />
                <span className="gradient-text">AI Product Leader</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 max-w-md leading-relaxed">
                Building enterprise intelligence at the intersection of GenAI and analytics. Lead PM at Freshworks, previously Walmart Search.
              </p>
            </div>

            {/* Achievement credibility bar */}
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent font-semibold text-xs">
                <Trophy className="w-3 h-3" />
                3× CPO Recognition
              </span>
              <span className="inline-flex items-center px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent font-semibold text-xs">
                Top 5% of 185+ PMs
              </span>
              <span className="inline-flex items-center px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent font-semibold text-xs">
                $11M ARR · 8 months
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => { trackCTAClick("View My Work", "hero"); handleScroll("#projects"); }}
                className="btn-primary inline-flex items-center justify-center gap-2 group"
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => { trackCTAClick("Let's Connect", "hero"); handleScroll("#connect"); }}
                className="btn-outline inline-flex items-center justify-center gap-2"
              >
                Let's Connect
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href={getLinkedInURLWithUTM("https://linkedin.com/in/pranav-singh/", "portfolio", "social", "hero")}
                target="_blank" rel="noopener noreferrer"
                className="p-3 bg-card hover:bg-accent/20 rounded-lg transition-all duration-200 group"
                aria-label="LinkedIn"
                onClick={() => trackLinkedInClick("hero")}
              >
                <Linkedin className="w-5 h-5 text-accent group-hover:text-secondary transition-colors" />
              </a>
              <a
                href="https://github.com/pra2209/"
                target="_blank" rel="noopener noreferrer"
                className="p-3 bg-card hover:bg-accent/20 rounded-lg transition-all duration-200 group"
                aria-label="GitHub"
                onClick={() => trackGitHubClick("hero-profile")}
              >
                <Github className="w-5 h-5 text-accent group-hover:text-secondary transition-colors" />
              </a>
            </div>
          </div>

          {/* Right: Photo */}
          <div className="relative order-first md:order-none block animate-slide-in stagger-1">
            <div className="relative mx-auto aspect-square w-40 sm:w-52 md:w-full max-w-xs md:max-w-none">
              <div className="absolute inset-0 rounded-full border-2 border-accent/30 animate-pulse-glow"></div>

              <div
                className="absolute inset-3 md:inset-4 rounded-full border-2 border-secondary/20 animate-pulse-glow"
                style={{ animationDelay: "0.5s" }}
              ></div>

              <div className="absolute inset-6 md:inset-8 rounded-full bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                <img
                  src="/WhatsApp_Image_2026-05-11_at_07.03.22.jpeg"
                  alt="Pranav Kumar Singh — AI Product Leader"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
              </div>
            </div>

            <div
              className="absolute -bottom-3 right-1/2 translate-x-1/2 md:-bottom-4 md:-right-4 md:translate-x-0 bg-accent text-accent-foreground px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-base font-semibold shadow-lg animate-float whitespace-nowrap"
              style={{ animationDelay: "0.3s" }}
            >
              AI Builder
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-accent rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
