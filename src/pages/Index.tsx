import { Nav } from "@/components/organisms/Nav";
import { Hero } from "@/components/organisms/Hero";
import { Projects } from "@/components/organisms/Projects";
import { Timeline } from "@/components/organisms/Timeline";
import { Skills } from "@/components/organisms/Skills";

const Index = () => {
  return (
    <div className="min-h-screen snap-container">
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Timeline />
      </main>
      <footer id="contact" className="border-t border-border">
        <div className="container mx-auto py-8 text-sm text-muted-foreground flex items-center justify-between">
          <p>© <span>{new Date().getFullYear()}</span> Junaid Ali Shah Gigli</p>
          <a href="mailto:hello@junaid.sh" className="story-link">hello@junaid.sh</a>
        </div>
      </footer>

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Junaid Ali Shah Gigli",
        "url": "https://junaid.sh/",
        "jobTitle": "Staff Software Engineer",
        "sameAs": [
          "https://github.com/jasgigli",
          "https://www.linkedin.com/in/jasgigli"
        ]
      }) }} />
    </div>
  );
};

export default Index;
