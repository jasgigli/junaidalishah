import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Clock, TrendingUp } from "lucide-react";

const posts = [
  {
    title: "Scaling WebSocket Connections to 100k Concurrent Users",
    excerpt: "Deep dive into Redis Streams, connection pooling, and horizontal scaling strategies that took our real-time chat from 1k to 100k concurrent without breaking the bank.",
    date: "Dec 2024",
    readTime: "8 min",
    tags: ["Redis", "WebSockets", "Scale"],
    views: "12.4k",
    featured: true
  },
  {
    title: "Zero-Downtime Deployments with Cloudflare Workers",
    excerpt: "How we achieve true zero-downtime deployments using Durable Objects, gradual rollouts, and automatic rollback strategies.",
    date: "Nov 2024", 
    readTime: "6 min",
    tags: ["DevOps", "Cloudflare", "Zero-Downtime"],
    views: "8.9k",
    featured: false
  },
  {
    title: "The Art of Code Reviews: From Good to Great",
    excerpt: "Lessons learned from reviewing 500+ PRs. How to give feedback that educates, motivates, and elevates the entire team.",
    date: "Oct 2024",
    readTime: "12 min", 
    tags: ["Leadership", "Code Review", "Team"],
    views: "15.2k",
    featured: false
  },
  {
    title: "Building React Components That Last",
    excerpt: "Component design patterns, testing strategies, and API design principles that make UI components reusable across teams and years.",
    date: "Sep 2024",
    readTime: "10 min",
    tags: ["React", "Components", "Architecture"], 
    views: "9.7k",
    featured: false
  }
];

const stats = [
  { label: "Monthly Readers", value: "50k+", trend: "+23%" },
  { label: "Total Views", value: "180k", trend: "+45%" }, 
  { label: "Articles Published", value: "24", trend: "New weekly" },
  { label: "Community Engagement", value: "2.1k", trend: "Comments & shares" }
];

export const Blog = () => {
  return (
    <section id="blog" className="container mx-auto py-16 md:py-24">
      <div className="space-y-12">
        
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Thoughts & Deep Dives</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Engineering lessons learned, architectural decisions explained, and the occasional rant about semicolons.
          </p>
        </div>

        {/* Blog Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover-scale">
              <CardContent className="p-4 space-y-2">
                <TrendingUp className="w-5 h-5 mx-auto text-accent" />
                <p className="text-xl font-bold text-primary">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
                <Badge variant="secondary" className="text-xs">
                  {stat.trend}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Post */}
        <Card className="border-2 border-primary/20 hover-scale">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Badge className="bg-primary text-primary-foreground">Featured</Badge>
              <Badge variant="secondary">{posts[0].readTime} read</Badge>
            </div>
            <CardTitle className="text-xl leading-tight">
              {posts[0].title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              {posts[0].excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{posts[0].date}</span>
                <span className="flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  {posts[0].views} views
                </span>
              </div>
              <Button variant="link" className="px-0 group">
                Read article
                <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {posts[0].tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Posts Grid */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Recent Articles</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {posts.slice(1).map((post, index) => (
              <Card key={index} className="hover-scale group">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.views} views</span>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <Button variant="ghost" size="sm" className="px-2 group">
                      Read
                      <ExternalLink className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="soft" size="lg">
            View All Articles
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};