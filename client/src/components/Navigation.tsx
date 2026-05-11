import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "AI Builder", href: "#ai-builder" },
  { label: "Writing", href: "#writing" },
  { label: "Connect", href: "#connect" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#"
          onClick={() => handleNavClick("#")}
          className="text-xl md:text-2xl font-bold text-accent hover:text-secondary transition-colors"
        >
          Pranav
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-foreground/80 hover:text-accent transition-colors font-medium text-sm"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-card rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-accent" />
          ) : (
            <Menu className="w-6 h-6 text-accent" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="container py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left px-4 py-3 text-foreground hover:bg-background rounded-lg transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
