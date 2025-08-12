import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Github, Linkedin, Twitter, Heart, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const socialLinks = [
  { icon: Github, href: "https://github.com/jasgigli", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/jasgigli", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/jasgigli", label: "Twitter" }
];

const navigationLinks = [
  { href: "#about", label: "About" },
  { href: "#timeline", label: "Journey" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#proof", label: "Proof" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" }
];

export const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [konami, setKonami] = useState<string[]>([]);
  const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "KeyB", "KeyA"];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const newKonami = [...konami, e.code].slice(-10);
      setKonami(newKonami);
      
      if (newKonami.join(',') === konamiCode.join(',')) {
        // Easter egg: Matrix rain effect
        document.body.classList.add('matrix-mode');
        setTimeout(() => document.body.classList.remove('matrix-mode'), 5000);
        setKonami([]);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [konami, konamiCode]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();
  const currentTime = new Date().toLocaleTimeString('en-US', { 
    timeZone: 'America/Los_Angeles',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  });

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto py-12">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-bold">Junaid Ali Shah Gigli</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Staff Software Engineer crafting millisecond-grade experiences. 
                Building systems that scale, mentoring developers, and occasionally 
                writing code that makes other engineers smile.
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>Currently {currentTime}</span>
              <span>•</span>
              <span>San Francisco, CA</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Navigation</h4>
            <nav className="flex flex-col space-y-2">
              {navigationLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors story-link"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social & Theme */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Connect</h4>
            <div className="flex flex-col space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  {social.label}
                </a>
              ))}
              
              <div className="flex items-center gap-2 pt-2">
                <span className="text-sm text-muted-foreground">Theme:</span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>© {currentYear} Built with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>& caffeine in SF</span>
          </div>
          
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>Made with React, Vite, Tailwind & Three.js</span>
            <span>•</span>
            <span>100/100 Lighthouse Score</span>
          </div>
        </div>

        {/* Easter Egg Hint */}
        <div className="text-center mt-4">
          <p className="text-xs text-muted-foreground/50">
            Try the Konami code for a surprise 🎮
          </p>
        </div>
      </div>

      {/* Scroll to Top FAB */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-6 right-6 rounded-full shadow-lg z-50 animate-fade-in"
          variant="default"
        >
          <ArrowUp className="w-4 h-4" />
        </Button>
      )}
    </footer>
  );
};