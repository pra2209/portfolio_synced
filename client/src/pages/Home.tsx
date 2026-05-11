import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import AIBuilderSection from "@/components/AIBuilderSection";
import WritingSection from "@/components/WritingSection";
import ConnectSection from "@/components/ConnectSection";
import { setSEOMetadata, setPersonSchema, DEFAULT_SEO } from "@/lib/seo";

export default function Home() {
  useEffect(() => {
    setSEOMetadata(DEFAULT_SEO);
    setPersonSchema({
      name: "Pranav Kumar Singh",
      title: "Lead Product Manager",
      description: "Lead PM at Freshworks building enterprise intelligence at the intersection of GenAI and analytics. Previously Walmart Search. Exploring Director/Principal PM roles at AI-first companies.",
      email: "pgp16.pranavs@spjimr.org",
      sameAs: [
        "https://linkedin.com/in/pranav-singh",
        "https://github.com/pra2209/",
      ],
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <AIBuilderSection />
      <WritingSection />
      <ConnectSection />
    </div>
  );
}
