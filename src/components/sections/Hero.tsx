import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { ArrowRight, Download, MapPin } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { siteConfig, socialLinks, highlights } from '@/config/site';

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
    <section
      id="about"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container px-4 mx-auto pt-24 pb-16">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-accent opacity-70 blur-sm" />
              <img
                src={siteConfig.avatar}
                alt={siteConfig.name}
                className="relative w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-background object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium rounded-full border bg-background/50 backdrop-blur-sm"
          >
            <span className="relative flex w-2 h-2 mr-2">
              <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-emerald-500"></span>
              <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500"></span>
            </span>
            <span>Open to new opportunities</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.div
            variants={item}
            className="flex items-center justify-center gap-1.5 mb-6 text-sm text-muted-foreground"
          >
            <MapPin className="w-4 h-4" />
            <span>{siteConfig.location}</span>
          </motion.div>

          <motion.div variants={item} className="mb-8">
            <TypeAnimation
              sequence={[
                'Full-Stack Software Engineer',
                2000,
                'React & Node.js Specialist',
                2000,
                'Open Source Author',
                2000,
                'Cloud & Systems Enthusiast',
                2000,
              ]}
              wrapper="div"
              speed={50}
              className="text-xl font-medium text-primary md:text-2xl"
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            variants={item}
            className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            I build scalable web and cloud applications with React, Node.js, and
            AWS — and publish open-source tools used by developers around the
            world. I care about performance, clean architecture, and delightful
            user experiences.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button size="lg" className="group" asChild>
              <a href="#projects">
                View My Work
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="group" asChild>
              <a href={siteConfig.resume} target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          <motion.div variants={item} className="flex justify-center gap-2 mt-10">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border bg-background/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>

          <motion.div
            variants={item}
            className="grid grid-cols-2 gap-4 mt-14 sm:grid-cols-4 max-w-3xl mx-auto"
          >
            {highlights.map((stat) => (
              <div
                key={stat.label}
                className="p-4 rounded-xl border bg-background/60 backdrop-blur-sm"
              >
                <div className="text-2xl font-bold text-primary md:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground md:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
