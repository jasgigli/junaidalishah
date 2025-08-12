import { Nav } from "@/components/organisms/Nav";
import { Hero } from "@/components/organisms/Hero";
import { About } from "@/components/organisms/About";
import { Timeline } from "@/components/organisms/Timeline";
import { Skills } from "@/components/organisms/Skills";
import { Projects } from "@/components/organisms/Projects";
import { Proof } from "@/components/organisms/Proof";
import { Blog } from "@/components/organisms/Blog";
import { Contact } from "@/components/organisms/Contact";
import { Footer } from "@/components/organisms/Footer";

const Index = () => {
  return (
    <div className="min-h-screen snap-container">
      <Nav />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <Projects />
        <Proof />
        <Blog />
        <Contact />
      </main>
      <Footer />

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
