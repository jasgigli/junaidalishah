import { Button } from "@/components/ui/button";
import { Globe } from "@/lib/three/Globe";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';

export const Hero = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(rootRef, { once: true, amount: 0.3 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = rootRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--mx", `${(x / rect.width) * 100}%`);
    el.style.setProperty("--my", `${(y / rect.height) * 100}%`);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden snap-start"
      style={{
        background: "radial-gradient(ellipse at bottom, hsl(var(--background)) 0%, hsl(var(--muted)) 100%)"
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bS0yIDBjMCAxLjEwNC0uODk2IDItMiAycy0yLS44OTYtMi0yIC44OTYtMiAyLTIgMiAuODk2IDIgMnoiLz48L2c+PC9nPjwvc3ZnPg==')]" />
      </div>

      <div 
        ref={rootRef}
        onMouseMove={handleMouseMove}
        className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center"
        style={{
          background: "radial-gradient(800px circle at var(--mx,50%) var(--my,50%), hsl(var(--accent)/0.08), transparent 60%",
        }}
      >
        <motion.div 
          className="space-y-8 relative z-10"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <motion.div variants={item} className="flex items-center gap-3">
            <div className="h-px w-8 bg-primary" />
            <span className="text-sm font-medium text-primary">Senior Full-Stack Engineer</span>
          </motion.div>
          
          <motion.h1 variants={item} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            <span className="block">Hi, I'm</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Junaid Ali Shah</span>
          </motion.h1>
          
          <motion.div variants={item} className="text-xl md:text-2xl text-muted-foreground font-medium">
            <TypeAnimation
              sequence={[
                'I build scalable web applications',
                1500,
                'I optimize for performance',
                1500,
                'I create seamless user experiences',
                1500,
                'I solve complex problems',
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-foreground"
            />
          </motion.div>
          
          <motion.p variants={item} className="text-lg text-muted-foreground max-w-2xl">
            Crafting high-performance, accessible, and visually stunning digital experiences. 
            Specializing in React, Node.js, and cloud-native applications.
          </motion.p>
          
          <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
            <a href="#contact">
              <Button size="lg" className="group" variant="default">
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="/Junaid_Ali_Shah_Full_Stack_Developer.pdf" download>
              <Button size="lg" variant="outline" className="group">
                Download CV
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </motion.div>
          
          <motion.div variants={item} className="flex items-center gap-4 pt-8">
            <span className="text-sm text-muted-foreground">Connect with me:</span>
            <div className="flex gap-3">
              <a 
                href="https://github.com/jasgigli" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-accent/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/jasgigli" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-accent/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:your.email@example.com" 
                className="p-2 rounded-full hover:bg-accent/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-2xl overflow-hidden border border-border/50 bg-background/50 backdrop-blur-sm shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ 
            opacity: isInView ? 1 : 0, 
            scale: isInView ? 1 : 0.95,
            transition: { 
              delay: 0.3, 
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            } 
          }}
        >
          <Globe />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: isInView ? 1 : 0, 
          y: isInView ? 0 : 20,
          transition: { delay: 1.5 }
        }}
      >
        <span className="text-sm text-muted-foreground">Scroll down</span>
        <div className="w-px h-10 bg-foreground/30">
          <motion.div 
            className="w-px h-6 bg-foreground"
            animate={{ 
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};
