import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, TrendingUp, Users, Zap } from "lucide-react";

const metrics = [
  { label: "API Response Time", value: "< 50ms", trend: "62% faster" },
  { label: "System Uptime", value: "99.99%", trend: "Zero downtime" },
  { label: "Developers Mentored", value: "12+", trend: "5 promoted" },
  { label: "Open Source Stars", value: "2.4k+", trend: "Growing weekly" },
];

const journey = [
  {
    age: "12",
    milestone: "First C++ hello-world",
    description: "Curiosity sparked in a dusty computer lab in Lahore"
  },
  {
    age: "19", 
    milestone: "Led 5 developers at StartUpX",
    description: "Built real-time chat serving 50k+ daily active users"
  },
  {
    age: "Present",
    milestone: "Staff Engineer designing auth at scale",
    description: "Multi-region serverless layer handling 2M+ requests/minute"
  }
];

export const About = () => {
  return (
    <section id="about" className="container mx-auto py-16 md:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        
        {/* Story Narrative */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">From Lahore to Lambda</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Started as a curious kid reverse-engineering games, now architecting systems that serve millions. 
              I believe great code is poetry that machines can execute and humans can understand.
            </p>
          </div>

          {/* Journey Timeline */}
          <div className="space-y-6">
            {journey.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center font-mono text-sm font-bold text-primary">
                  {item.age}
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground">{item.milestone}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <Button variant="soft" size="lg" className="group">
            <Download className="w-4 h-4 group-hover:animate-bounce" />
            Download Resume
          </Button>
        </div>

        {/* Metrics Dashboard */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Impact by Numbers</h3>
            <p className="text-sm text-muted-foreground">
              Metrics that matter, measured obsessively
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {metrics.map((metric, index) => (
              <Card key={index} className="hover-scale">
                <CardContent className="p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <TrendingUp className="w-4 h-4 text-accent" />
                    <Badge variant="secondary" className="text-xs">
                      {metric.trend}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-primary">{metric.value}</p>
                    <p className="text-xs text-muted-foreground">{metric.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Core Values */}
          <Card className="p-6 glass">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4 text-accent" />
              Engineering Philosophy
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-sm"><strong>Speed is a feature</strong> — Sub-second response times aren't luxury, they're table stakes.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p className="text-sm"><strong>Scale-first mindset</strong> — Design for 10x today's load, optimize for 100x tomorrow's.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                <p className="text-sm"><strong>Code as craft</strong> — Every commit is a small masterpiece. Every PR tells a story.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};