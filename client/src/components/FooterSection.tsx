import { Linkedin, Github, Mail, ArrowUp } from "lucide-react";
import { getLinkedInURLWithUTM } from "@/lib/analytics";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "AI Builder", href: "#ai-builder" },
  { label: "Writing", href: "#writing" },
  { label: "Connect", href: "#connect" },
];

export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">

          {/* Brand */}
          <div>
            <p className="text-xl font-bold text-foreground mb-2">Pranav Kumar Singh</p>
            <p className="text-foreground/60 text-sm leading-relaxed mb-4">
              AI Product Leader · Lead PM at Freshworks · ex-Walmart, Barclays, Oracle
            </p>
            <p className="text-foreground/40 text-xs">
              Open to Director / Principal PM roles at AI-first companies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Quick Links
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-foreground/60 text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Connect
            </p>
            <div className="flex gap-3 mb-4">
              <a
                href={getLinkedInURLWithUTM("https://linkedin.com/in/pranav-singh/", "portfolio", "social", "footer")}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-background hover:bg-accent/20 rounded-lg border border-border/50 hover:border-accent/40 transition-all group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-accent group-hover:text-secondary transition-colors" />
              </a>
              <a
                href="https://github.com/pra2209/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-background hover:bg-accent/20 rounded-lg border border-border/50 hover:border-accent/40 transition-all group"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 text-accent group-hover:text-secondary transition-colors" />
              </a>
              <a
                href="mailto:pgp16.pranavs@spjimr.org"
                className="p-2.5 bg-background hover:bg-accent/20 rounded-lg border border-border/50 hover:border-accent/40 transition-all group"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-accent group-hover:text-secondary transition-colors" />
              </a>
            </div>
            <a
              href="/Pranav_Kumar_Singh_Resume.pdf"
              download="Pranav_Kumar_Singh_Resume.pdf"
              className="text-sm text-foreground/60 hover:text-accent transition-colors underline underline-offset-2"
            >
              Download Resume →
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border/50">
          <p className="text-foreground/40 text-xs">
            © 2026 Pranav Kumar Singh · Bengaluru, India
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-foreground/40 text-xs hover:text-accent transition-colors group"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
