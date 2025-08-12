import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";

const skills = {
  core: ["TypeScript", "Rust", "Go", "Solidity"],
  frontend: ["React", "R3F", "Tailwind", "Shadcn"],
  backend: ["Postgres", "Redis", "GraphQL", "gRPC"],
  cloud: ["AWS", "Cloudflare", "Vercel", "Supabase"],
};

export const Skills = () => {
  const current = useTypingAnimation(skills.core);

  return (
    <section className="container mx-auto py-16 md:py-24 grid gap-8">
      <div className="space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold">Expanded & Visualized Skills</h2>
        <p className="text-muted-foreground">Core strengths across the stack</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="hover-scale">
          <CardHeader>
            <CardTitle>Core Languages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="font-mono text-lg">{current}</div>
          </CardContent>
        </Card>
        <Card className="hover-scale">
          <CardHeader>
            <CardTitle>Frontend</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2 flex-wrap">
            {skills.frontend.map((t) => (
              <span key={t} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground border border-border text-sm">
                {t}
              </span>
            ))}
          </CardContent>
        </Card>
        <Card className="hover-scale">
          <CardHeader>
            <CardTitle>Backend</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2 flex-wrap">
            {skills.backend.map((t) => (
              <span key={t} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground border border-border text-sm">
                {t}
              </span>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
