import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, Zap, Server, GitBranch } from "lucide-react";
import { useRef } from "react";

const metrics = [
  { 
    label: "API Response Time", 
    value: "< 50ms", 
    trend: "62% faster",
    icon: <Zap className="w-5 h-5 text-amber-400" />
  },
  { 
    label: "System Uptime", 
    value: "99.99%", 
    trend: "Zero downtime",
    icon: <Server className="w-5 h-5 text-emerald-400" />
  },
  { 
    label: "Developers Mentored", 
    value: "12+", 
    trend: "5 promoted",
    icon: <Users className="w-5 h-5 text-blue-400" />
  },
  { 
    label: "Open Source", 
    value: "2.4k+ stars", 
    trend: "Growing weekly",
    icon: <GitBranch className="w-5 h-5 text-purple-400" />
  },
];

const journey = [
  {
    age: "12",
    year: "2010",
    milestone: "First C++ Program",
    description: "Wrote my first 'Hello World' in a computer lab in Lahore, sparking a lifelong passion for coding"
  },
  {
    age: "19",
    year: "2017",
    milestone: "Led Development Team",
    description: "Managed a team of 5 developers to build a real-time chat platform serving 50k+ daily active users"
  },
  {
    age: "Present",
    year: "2025",
    milestone: "Senior Staff Engineer",
    description: "Designing and implementing scalable authentication systems handling 2M+ requests/minute across multiple regions"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section 
      id="about" 
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at top, hsl(var(--muted)/0.3) 0%, transparent 70%)"
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {/* Story Narrative */}
          <motion.div 
            className="space-y-10 relative z-10"
            variants={item}
          >
            <motion.div 
              className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: isInView ? 1 : 0, 
                x: isInView ? 0 : -20,
                transition: { delay: 0.2 }
              }}
            >
              About Me
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80"
              variants={item}
            >
              Crafting Digital Experiences
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Through Code & Design</span>
            </motion.h2>
            
            <motion.div 
              className="prose prose-lg dark:prose-invert prose-p:text-muted-foreground max-w-none"
              variants={item}
            >
              <p>
                I'm a <span className="text-foreground font-medium">Senior Full-Stack Engineer</span> with a passion for building scalable, performant web applications. 
                My journey in tech started at a young age, and I've since had the privilege of working with amazing teams to solve complex problems at scale.
              </p>
              <p>
                I specialize in <span className="text-foreground font-medium">React, Node.js, and cloud-native architectures</span>, with a strong focus on 
                creating seamless user experiences backed by robust, maintainable code.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open source, mentoring junior developers, or exploring the latest in web technologies.
              </p>
            </motion.div>

            {/* Metrics */}
            <motion.div 
              className="grid grid-cols-2 gap-4 pt-4"
              variants={container}
            >
              {metrics.map((metric, index) => (
                <motion.div 
                  key={index}
                  className="p-4 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm hover:bg-accent/5 transition-colors"
                  variants={item}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/10">
                      {metric.icon}
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{metric.value}</p>
                      <p className="text-sm text-muted-foreground">{metric.label}</p>
                      <p className="text-xs text-primary mt-1 flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5" />
                        {metric.trend}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Journey Timeline */}
          <motion.div 
            className="relative"
            variants={item}
          >
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-border to-transparent" />
            <div className="space-y-10">
              {journey.map((item, index) => (
                <motion.div 
                  key={index}
                  className="relative pl-14 group"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ 
                    opacity: isInView ? 1 : 0, 
                    x: isInView ? 0 : 20,
                    transition: { 
                      delay: 0.5 + (index * 0.15),
                      duration: 0.5 
                    }
                  }}
                  whileHover={{ x: 8 }}
                >
                  <div className="absolute left-0 w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center font-mono text-sm font-bold text-primary z-10 group-hover:bg-primary/20 transition-colors">
                    {item.age}
                  </div>
                  <div className="absolute left-6 top-6 w-1 h-full bg-gradient-to-b from-primary to-transparent opacity-30" />
                  <div className="relative">
                    <div className="text-sm text-muted-foreground mb-1">{item.year}</div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{item.milestone}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl -z-10" />
      <div className="absolute -left-20 bottom-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl -z-10" />
    </section>
  );
};
