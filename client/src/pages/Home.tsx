import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import AIBuilderSection from "@/components/AIBuilderSection";
import WritingSection from "@/components/WritingSection";
import ConnectSection from "@/components/ConnectSection";
import FooterSection from "@/components/FooterSection";
import { setSEOMetadata, setPersonSchema, DEFAULT_SEO } from "@/lib/seo";

export default function Home() {
  useEffect(() => {
    setSEOMetadata(DEFAULT_SEO);
    setPersonSchema({
      name: "Pranav Kumar Singh",
      title: "Lead Product Manager",
      description: "Lead PM at Freshworks building GenAI and enterprise analytics products. 3× CPO recognised. $11M+ ARR in 8 months. Previously Lead PM at Walmart US Search. MBA from SPJIMR with Cornell University immersion; AI/ML credential from University of Texas at Austin McCombs School of Business.",
      email: "pgp16.pranavs@spjimr.org",
      sameAs: [
        "https://linkedin.com/in/pranav-singh/",
        "https://github.com/pra2209/",
      ],
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <AIBuilderSection />
      <WritingSection />
      <ConnectSection />
      <FooterSection />
    </div>
  );
}
