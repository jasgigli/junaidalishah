import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const items = [
  { year: 2019, text: "ACM ICPC regional finalist" },
  { year: 2020, text: "Built COVID-19 tracker used by 200k users" },
  { year: 2022, text: "Promoted to Senior at TechCorp" },
  { year: 2023, text: "Speaker at React Summit" },
  { year: 2024, text: "Open-source library gigli-lang hits 1k ⭐" },
];

export const Timeline = () => {
  return (
    <section id="timeline" className="container mx-auto py-16 md:py-24">
      <div className="space-y-2 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">Journey</h2>
        <p className="text-muted-foreground">Milestones that shaped the craft</p>
      </div>
      <div className="flex gap-6 overflow-x-auto pb-4">
        {items.map((it) => (
          <Card key={it.year} className="min-w-[260px] hover-scale">
            <CardHeader>
              <CardTitle>{it.year}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{it.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
