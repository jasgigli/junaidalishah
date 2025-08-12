import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

export const Hero = () => {
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
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/30">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-20">
        <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="container px-4 mx-auto">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium rounded-full border bg-background/50 backdrop-blur-sm">
            <span className="relative flex w-2 h-2 mr-2">
              <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-primary"></span>
              <span className="relative inline-flex w-2 h-2 rounded-full bg-primary"></span>
            </span>
            <span>Available for new opportunities</span>
          </motion.div>

          <motion.h1 
            variants={item}
            className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
          >
            Junaid Ali Shah
          </motion.h1>

          <motion.div variants={item} className="mb-8">
            <TypeAnimation
              sequence={[
                'Senior Full-Stack Engineer',
                2000,
                'Cloud Solutions Architect',
                2000,
                'Open Source Contributor',
                2000,
                'Tech Lead',
                2000,
              ]}
              wrapper="div"
              speed={50}
              className="text-xl font-medium text-muted-foreground md:text-2xl"
              repeat={Infinity}
            />
          </motion.div>

          <motion.p 
            variants={item}
            className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            I build exceptional digital experiences with modern web technologies, 
            focusing on performance, accessibility, and clean code.
          </motion.p>

          <motion.div 
            variants={item}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button size="lg" className="group">
              View My Work
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </motion.div>

          <motion.div 
            variants={item}
            className="flex justify-center gap-4 mt-12"
          >
            <a 
              href="https://github.com/jasgigli" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/jasgigli" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:contact@junaid.sh" 
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center text-sm text-muted-foreground"
        >
          <span>Scroll down</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 mt-1"
          >
            <path
              d="M7 10L12 15L17 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};
