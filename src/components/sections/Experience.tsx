import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { SectionHeader } from '@/components/ui/section-header';
import { experience } from '@/config/site';

export const Experience = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="experience" className="py-20 bg-muted/10">
      <div className="container px-4 mx-auto">
        <SectionHeader
          title="Work Experience"
          subtitle="My Career Journey"
          description="A timeline of my professional experience and career milestones."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative mt-12"
        >
          {/* Timeline line */}
          <div className="absolute left-0 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />

          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={item}
              className={`relative mb-8 flex w-full ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="w-full md:w-1/2">
                <div
                  className={`p-6 bg-background rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-primary font-medium mb-4">
                    {exp.company}
                  </h4>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-muted-foreground">{desc}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs font-mono"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-primary border-4 border-background z-10" />
              
              {/* Empty div for spacing */}
              <div className="hidden md:block w-1/2"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
