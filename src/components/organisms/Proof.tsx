import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, GitBranch, Award, ExternalLink } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

// GitHub Skyline placeholder (would integrate with real GitHub API)
function GitHubSkyline() {
  const reduced = usePrefersReducedMotion();
  
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 4, 2]} intensity={0.8} />
      
      {/* Simplified contribution skyline */}
      {Array.from({ length: 52 }, (_, week) => (
        Array.from({ length: 7 }, (_, day) => {
          const height = Math.random() * 0.5 + 0.1;
          const intensity = Math.random();
          return (
            <mesh 
              key={`${week}-${day}`} 
              position={[(week - 26) * 0.12, height / 2, (day - 3) * 0.12]}
            >
              <boxGeometry args={[0.1, height, 0.1]} />
              <meshStandardMaterial 
                color={intensity > 0.7 ? "#10b981" : intensity > 0.4 ? "#22c55e" : "#dcfce7"} 
              />
            </mesh>
          );
        })
      ))}
      
      <OrbitControls 
        enableZoom={false} 
        autoRotate={!reduced} 
        autoRotateSpeed={0.5}
        enablePan={false}
      />
    </Canvas>
  );
}

const testimonials = [
  {
    quote: "Junaid refactored our billing engine in a weekend—revenue went up 18%.",
    author: "Sarah Chen",
    role: "CTO, TechCorp",
    avatar: "SC"
  },
  {
    quote: "His code reviews are TED talks. Everyone learns something new.",
    author: "Marcus Rodriguez",
    role: "Senior Engineer, Peer",
    avatar: "MR"
  },
  {
    quote: "Shipped a PWA that works offline in subway tunnels. Pure magic.",
    author: "Priya Patel",
    role: "PM, StartUpX",
    avatar: "PP"
  }
];

const achievements = [
  {
    title: "React Summit 2023",
    description: "Speaker - 'Building at Scale with Edge Functions'",
    type: "Speaking",
    year: "2023"
  },
  {
    title: "AWS Solutions Architect Pro",
    description: "Certified for designing distributed systems",
    type: "Certification",
    year: "2024"
  },
  {
    title: "Open Source Contributor",
    description: "2.4k+ stars across repositories, 15+ PRs merged to major projects",
    type: "OSS",
    year: "Ongoing"
  },
  {
    title: "Tech Blog",
    description: "50k+ monthly readers on engineering deep-dives",
    type: "Writing",
    year: "2024"
  }
];

export const Proof = () => {
  return (
    <section id="proof" className="container mx-auto py-16 md:py-24">
      <div className="space-y-12">
        
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Social Proof</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Results speak louder than promises. Here's what peers, mentees, and the community say.
          </p>
        </div>

        {/* GitHub Contribution Skyline */}
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-accent" />
              GitHub Contribution Skyline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 w-full">
              <GitHubSkyline />
            </div>
            <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
              <span>279 contributions this year</span>
              <span>Current streak: 47 days</span>
            </div>
          </CardContent>
        </Card>

        {/* Testimonials */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-center">What People Say</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-scale">
                <CardContent className="p-6 space-y-4">
                  <blockquote className="text-sm leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-mono text-sm font-bold text-primary">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{testimonial.author}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements & Recognition */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-center">Recognition & Impact</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover-scale group">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">{achievement.title}</h4>
                        <Badge variant="secondary" className="text-xs">
                          {achievement.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{achievement.year}</span>
                      {achievement.type === "Speaking" && (
                        <ExternalLink className="w-4 h-4 group-hover:text-primary transition-colors" />
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* GitHub Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Public Repos", value: "47", icon: GitBranch },
            { label: "Total Stars", value: "2.4k", icon: Star },
            { label: "Forks", value: "312", icon: GitBranch },
            { label: "Contributions", value: "1.2k", icon: Award }
          ].map((stat, index) => (
            <Card key={index} className="text-center hover-scale">
              <CardContent className="p-4 space-y-2">
                <stat.icon className="w-6 h-6 mx-auto text-accent" />
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};