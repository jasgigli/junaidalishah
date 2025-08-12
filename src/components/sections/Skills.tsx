import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { SectionHeader } from '@/components/ui/section-header';
import { Progress } from '@/components/ui/progress';
import { skills } from '@/config/site';

const skillCategories = [
  {
    title: 'Languages',
    items: skills.languages,
  },
  {
    title: 'Frontend',
    items: skills.frontend,
  },
  {
    title: 'Backend',
    items: skills.backend,
  },
  {
    title: 'DevOps & Cloud',
    items: skills.devops,
  },
  {
    title: 'Databases',
    items: skills.databases,
  },
  {
    title: 'Tools',
    items: skills.tools,
  },
];

export const Skills = () => {
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
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <SectionHeader
          title="Technical Skills"
          subtitle="Technologies I've worked with"
          description="I've had the opportunity to work with a variety of technologies across the full stack."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={item}
              className="p-6 bg-background rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="font-mono text-xs px-2.5 py-1 hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold text-center mb-8">
            My Expertise Level
          </h3>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { name: 'TypeScript/JavaScript', level: 95 },
              { name: 'React & Next.js', level: 90 },
              { name: 'Node.js & Express', level: 88 },
              { name: 'Python', level: 85 },
              { name: 'AWS & Cloud Architecture', level: 85 },
              { name: 'Databases (SQL/NoSQL)', level: 80 },
            ].map((skill) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-1"
              >
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
