import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const siteConfig = {
  name: 'Junaid Ali Shah',
  title: 'Junaid Ali Shah | Senior Full-Stack Engineer',
  description:
    'Senior Full-Stack Engineer with expertise in modern web technologies. Building scalable, performant, and accessible web applications.',
  url: 'https://junaid.sh',
  ogImage: 'https://junaid.sh/og-image.jpg',
  links: {
    github: 'https://github.com/jasgigli',
    linkedin: 'https://linkedin.com/in/jasgigli',
    twitter: 'https://twitter.com/jasgigli',
    email: 'mailto:contact@junaid.sh',
  },
};

export const socialLinks = [
  {
    name: 'GitHub',
    url: siteConfig.links.github,
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: siteConfig.links.linkedin,
    icon: Linkedin,
  },
  {
    name: 'Twitter',
    url: siteConfig.links.twitter,
    icon: Twitter,
  },
  {
    name: 'Email',
    url: siteConfig.links.email,
    icon: Mail,
  },
];

export const skills = {
  languages: [
    'TypeScript',
    'JavaScript',
    'Python',
    'Go',
    'Rust',
    'SQL',
  ],
  frontend: [
    'React',
    'Next.js',
    'Tailwind CSS',
    'Redux',
    'GraphQL',
    'Framer Motion',
  ],
  backend: [
    'Node.js',
    'Express',
    'NestJS',
    'Django',
    'FastAPI',
    'gRPC',
  ],
  devops: [
    'Docker',
    'Kubernetes',
    'AWS',
    'GCP',
    'Terraform',
    'CI/CD',
  ],
  databases: [
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'Elasticsearch',
  ],
  tools: [
    'Git',
    'Linux',
    'VSCode',
    'Jest',
    'Cypress',
    'Storybook',
  ],
};

export const experience = [
  {
    id: 1,
    role: 'Senior Full-Stack Engineer',
    company: 'TechCorp',
    period: '2021 - Present',
    description: [
      'Led a team of 5 engineers to build a scalable microservices architecture serving 1M+ users',
      'Improved application performance by 40% through code optimization and infrastructure improvements',
      'Implemented CI/CD pipelines reducing deployment time from 20 minutes to under 2 minutes',
      'Mentored junior developers and conducted technical interviews for new hires',
    ],
    technologies: ['TypeScript', 'React', 'Node.js', 'Kubernetes', 'AWS'],
  },
  {
    id: 2,
    role: 'Full-Stack Developer',
    company: 'WebSolutions Inc.',
    period: '2018 - 2021',
    description: [
      'Developed and maintained customer-facing web applications using modern JavaScript frameworks',
      'Reduced page load time by 60% through performance optimization techniques',
      'Collaborated with cross-functional teams to implement new features and fix bugs',
      'Contributed to open-source projects and wrote technical blog posts',
    ],
    technologies: ['JavaScript', 'React', 'Express', 'MongoDB', 'Docker'],
  },
  // Add more experiences as needed
];

export const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory management and payment processing.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    githubUrl: '#',
    liveUrl: '#',
    image: '/projects/ecommerce.jpg',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    technologies: ['React', 'Firebase', 'Material-UI'],
    githubUrl: '#',
    liveUrl: '#',
    image: '/projects/taskapp.jpg',
    featured: true,
  },
  // Add more projects as needed
];

export const education = [
  {
    id: 1,
    degree: 'MSc in Computer Science',
    institution: 'Stanford University',
    period: '2016 - 2018',
    description: 'Specialized in Artificial Intelligence and Machine Learning',
  },
  {
    id: 2,
    degree: 'BSc in Software Engineering',
    institution: 'MIT',
    period: '2012 - 2016',
    description: 'Graduated with First Class Honors',
  },
];

export const certifications = [
  {
    id: 1,
    name: 'AWS Certified Solutions Architect - Professional',
    issuer: 'Amazon Web Services',
    date: '2022',
    credentialId: 'ABC123XYZ',
    credentialUrl: '#',
  },
  {
    id: 2,
    name: 'Google Cloud Professional Cloud Architect',
    issuer: 'Google Cloud',
    date: '2021',
    credentialId: 'XYZ789ABC',
    credentialUrl: '#',
  },
];

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];
