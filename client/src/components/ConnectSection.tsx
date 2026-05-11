import { Mail, Linkedin, Github, MapPin, Calendar, Download, FileText } from "lucide-react";
import { trackEmailClick, trackLinkedInClick, trackGitHubClick, getLinkedInURLWithUTM } from "@/lib/analytics";

export default function ConnectSection() {
  return (
    <section id="connect" className="section bg-card/30 border-t border-border">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center animate-fade-up">

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's build something
            <br />
            <span className="gradient-text">worth talking about.</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto">
            Actively exploring Director and Principal PM roles at AI-first companies.
            If you're building something interesting in enterprise AI, analytics, or
            B2B SaaS — I'd love to learn more.
          </p>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Email */}
            <a
              href="mailto:pgp16.pranavs@spjimr.org"
              className="p-6 rounded-lg border border-border/50 hover:border-accent/50 transition-all duration-200 group"
              onClick={() => trackEmailClick()}
            >
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-foreground/70 text-sm break-all">
                  pgp16.pranavs@spjimr.org
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={getLinkedInURLWithUTM("https://linkedin.com/in/pranav-singh/", "portfolio", "social", "connect")}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-lg border border-border/50 hover:border-accent/50 transition-all duration-200 group"
              onClick={() => trackLinkedInClick("connect")}
            >
              <div className="flex flex-col items-center">
                <Linkedin className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <p className="text-foreground/70 text-sm">Connect with me</p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/pra2209/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-lg border border-border/50 hover:border-accent/50 transition-all duration-200 group"
              onClick={() => trackGitHubClick("connect-profile")}
            >
              <div className="flex flex-col items-center">
                <Github className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">GitHub</h3>
                <p className="text-foreground/70 text-sm">Check my projects</p>
              </div>
            </a>
          </div>

          {/* Resume Download */}
          <div className="mb-12 animate-fade-up stagger-1">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-xl bg-card border border-accent/20 hover:border-accent/40 transition-all">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-accent flex-shrink-0" />
                <div className="text-left">
                  <p className="font-semibold text-foreground text-sm">Resume</p>
                  <p className="text-foreground/60 text-xs">Lead PM · Freshworks · Ex-Walmart · Barclays · Oracle</p>
                </div>
              </div>
              <a
                href="/Pranav_Kumar_Singh_Resume.pdf"
                download="Pranav_Kumar_Singh_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-secondary transition-colors text-sm flex-shrink-0"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-3 text-foreground/80 animate-fade-up stagger-2">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5 text-secondary flex-shrink-0" />
              <p>Based in Bengaluru, India. Open to remote and global roles.</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5 text-secondary flex-shrink-0" />
              <p>Available for Director / Principal PM conversations.</p>
            </div>
          </div>

          {/* Calendly Placeholder */}
          <div className="mt-12 p-6 bg-card rounded-lg border border-border/50 animate-fade-up stagger-3">
            <p className="text-foreground/70 text-sm mb-4">
              Prefer to schedule a time directly?
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:text-secondary transition-colors"
            >
              Schedule a call → (coming soon)
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
