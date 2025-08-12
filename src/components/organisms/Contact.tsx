import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  MessageSquare, 
  Calendar, 
  Github, 
  Linkedin, 
  Twitter, 
  Coffee,
  MapPin,
  Clock
} from "lucide-react";
import { useState } from "react";

const quickTopics = [
  "Technical Consulting",
  "Speaking Opportunity", 
  "Open Source Collaboration",
  "Mentorship",
  "System Architecture Review",
  "Just Want to Say Hi 👋"
];

const socialLinks = [
  { 
    icon: Github, 
    label: "GitHub", 
    href: "https://github.com/jasgigli",
    username: "@jasgigli"
  },
  { 
    icon: Linkedin, 
    label: "LinkedIn", 
    href: "https://linkedin.com/in/jasgigli",
    username: "jasgigli"
  },
  { 
    icon: Twitter, 
    label: "Twitter", 
    href: "https://twitter.com/jasgigli",
    username: "@jasgigli"
  }
];

export const Contact = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  
  return (
    <section id="contact" className="container mx-auto py-16 md:py-24">
      <div className="space-y-12">
        
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Let's Build Something</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you're scaling to millions of users, optimizing for nanoseconds, or just want to talk shop about clean code — I'm here.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-accent" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Quick Topic Selection */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">What's on your mind?</label>
                  <div className="flex flex-wrap gap-2">
                    {quickTopics.map((topic) => (
                      <Badge 
                        key={topic}
                        variant={selectedTopic === topic ? "default" : "outline"}
                        className="cursor-pointer hover:bg-primary/10 transition-colors"
                        onClick={() => setSelectedTopic(topic)}
                      >
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="your.email@company.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input 
                    placeholder={selectedTopic || "What would you like to discuss?"} 
                    value={selectedTopic}
                    onChange={(e) => setSelectedTopic(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project, challenge, or just say hello..."
                    rows={6}
                  />
                </div>

                <Button size="lg" className="w-full">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-6">
            
            {/* Direct Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Direct Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="soft" size="lg" className="w-full justify-start" asChild>
                  <a href="mailto:hello@junaid.sh">
                    <Mail className="w-4 h-4" />
                    hello@junaid.sh
                  </a>
                </Button>
                
                <Button variant="soft" size="lg" className="w-full justify-start" asChild>
                  <a href="https://cal.com/jasgigli/30min" target="_blank" rel="noopener noreferrer">
                    <Calendar className="w-4 h-4" />
                    Schedule a Call
                  </a>
                </Button>
                
                <Button variant="soft" size="lg" className="w-full justify-start" asChild>
                  <a href="https://calendly.com/jasgigli/coffee" target="_blank" rel="noopener noreferrer">
                    <Coffee className="w-4 h-4" />
                    Virtual Coffee Chat
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Location & Timezone */}
            <Card>
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-accent" />
                  <span>PST/PDT (UTC-8/-7)</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Usually respond within 24 hours
                </p>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Find Me Online</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {socialLinks.map((social) => (
                  <Button 
                    key={social.label}
                    variant="ghost" 
                    size="sm" 
                    className="w-full justify-start" 
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="w-4 h-4" />
                      <span className="flex-1 text-left">{social.label}</span>
                      <span className="text-xs text-muted-foreground">{social.username}</span>
                    </a>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="text-center">
              <CardContent className="p-4 space-y-2">
                <p className="text-xs text-muted-foreground">Response Rate</p>
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-xs text-muted-foreground">
                  I read and respond to every message
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};