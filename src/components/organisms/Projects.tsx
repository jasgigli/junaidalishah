import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "SaaS Platform",
    story: "How I cut infra cost by 62% using Cloudflare Workers + Durable Objects.",
    twist: "GraphQL subscription over WebRTC.",
  },
  {
    title: "Real-Time Chat",
    story: "Scaling websockets to 100k concurrent with Redis Streams.",
    twist: "E2E encryption via @stablelib.",
  },
  {
    title: "JAMstack E-Com",
    story: "Achieving 0 ms TTFB with Next.js 14 Partial Prerendering.",
    twist: "Stripe + PayPal + Crypto.",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="container mx-auto py-16 md:py-24">
      <div className="space-y-2 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">Projects — Case Studies</h2>
        <p className="text-muted-foreground">Stories, not bullet lists</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <Card key={p.title} className="hover-scale">
            <CardHeader>
              <CardTitle>{p.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">{p.story}</p>
              <p className="text-sm text-muted-foreground">{p.twist}</p>
              <Button variant="link" className="px-0">Read case study →</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
