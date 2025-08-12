import { Button } from "@/components/ui/button";
import { Globe } from "@/lib/three/Globe";
import { useRef } from "react";

export const Hero = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = rootRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--mx", `${(x / rect.width) * 100}%`);
    el.style.setProperty("--my", `${(y / rect.height) * 100}%`);
  };

  return (
    <section id="top" className="relative overflow-hidden snap-section">
      <div
        ref={rootRef}
        onMouseMove={handleMouseMove}
        className="relative container mx-auto grid md:grid-cols-2 gap-10 py-20 md:py-28 items-center"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), hsl(var(--accent)/0.12), transparent 60%)",
        }}
      >
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Junaid Ali Shah Gigli – <span className="text-transparent bg-clip-text bg-[image:var(--gradient-primary)]">Architect of Millisecond-Grade Experiences</span>.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-prose">
            I turn coffee into <strong>sub-50 ms API responses</strong>, <strong>99.99% uptime</strong>, and <strong>pixel-perfect UIs</strong>.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects"><Button variant="hero" size="xl">See the code</Button></a>
            <a href="#timeline"><Button variant="soft" size="xl">Read the story</Button></a>
          </div>
        </div>
        <div className="h-[360px] md:h-[480px] rounded-xl border border-border glass shadow-[var(--shadow-elev)]">
          <Globe />
        </div>
      </div>
    </section>
  );
};
