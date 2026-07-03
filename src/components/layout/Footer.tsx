import { motion } from 'framer-motion';
import { socialLinks, siteConfig } from '@/config/site';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container px-4 py-12 mx-auto">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="space-y-4
          ">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                JAS
              </span>
            </div>
            <p className="max-w-xs text-sm text-muted-foreground">
              Full-Stack Software Engineer building scalable web and cloud
              applications with modern technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Skills
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4">Work</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#projects"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.links.email}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 mt-12 border-t border-border">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-foreground"
              aria-label="Back to top"
            >
              Back to top
              <ArrowUp className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
