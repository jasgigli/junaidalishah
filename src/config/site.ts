import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const siteConfig = {
  name: 'Junaid Ali Shah Gigli',
  shortName: 'Junaid Ali Shah',
  title: 'Junaid Ali Shah Gigli | Full-Stack Software Engineer',
  description:
    'Full-Stack Software Engineer building scalable web and cloud applications with React.js, Node.js, AWS, and microservices architecture.',
  url: 'https://junaidalishah.vercel.app',
  location: 'Peshawar, Pakistan',
  avatar: 'https://avatars.githubusercontent.com/u/167529475?v=4',
  resume: '/Junaid_Ali_Shah_Full_Stack_Developer.pdf',
  links: {
    github: 'https://github.com/jasgigli',
    linkedin: 'https://linkedin.com/in/jasgigli',
    twitter: 'https://twitter.com/jasgiigli',
    email: 'mailto:overview.jjj@gmail.com',
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

export const highlights = [
  { value: '45+', label: 'Open-source repositories' },
  { value: '10+', label: 'Production projects shipped' },
  { value: '4+', label: 'Years writing software' },
  { value: '5+', label: 'npm packages published' },
];

export const skills = {
  languages: ['TypeScript', 'JavaScript', 'Python', 'Go', 'Rust', 'SQL'],
  frontend: [
    'React',
    'Next.js',
    'Tailwind CSS',
    'Redux',
    'Framer Motion',
    'shadcn/ui',
  ],
  backend: ['Node.js', 'Express', 'NestJS', 'FastAPI', 'REST APIs', 'GraphQL'],
  devops: ['Docker', 'AWS', 'Vercel', 'CI/CD', 'GitHub Actions', 'Linux'],
  databases: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'],
  tools: ['Git', 'VS Code', 'Jest', 'Vite', 'Postman', 'Figma'],
};

export const experience = [
  {
    id: 1,
    role: 'Full-Stack Software Engineer',
    company: 'Giant Tech Solutions LLC',
    period: '2023 - Present',
    description: [
      'Design and build scalable web applications with React, Node.js, and cloud-native architectures',
      'Develop RESTful and real-time APIs powering customer-facing products',
      'Own features end-to-end: system design, implementation, testing, and deployment',
      'Collaborate with designers and stakeholders to ship polished, accessible UIs',
    ],
    technologies: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    id: 2,
    role: 'Software Engineer',
    company: 'Z-Graphics LLC',
    period: '2021 - 2023',
    description: [
      'Built and maintained customer-facing web applications using modern JavaScript frameworks',
      'Improved page performance and Core Web Vitals through code-splitting and asset optimization',
      'Integrated third-party services and payment providers into production systems',
      'Contributed to open-source tooling and internal component libraries',
    ],
    technologies: ['JavaScript', 'React', 'Express', 'MongoDB', 'Docker'],
  },
];

export const projects = [
  {
    id: 1,
    title: 'gigli.js',
    description:
      'Metamorphic, type-safe validation engine for TypeScript with a unified runtime and compile-time schema. Published on npm.',
    technologies: ['TypeScript', 'npm package', 'Zero-dependency'],
    githubUrl: 'https://github.com/jasgigli/gigli.js',
    liveUrl: 'https://www.npmjs.com/package/gigli.js',
    featured: true,
  },
  {
    id: 2,
    title: 'OmniRequest',
    description:
      'A modern, powerful JavaScript library for seamless API requests with interceptors, retries, and caching built in.',
    technologies: ['TypeScript', 'HTTP client', 'npm package'],
    githubUrl: 'https://github.com/jasgigli/omni-request',
    liveUrl: 'https://www.npmjs.com/package/omnirequest',
    featured: true,
  },
  {
    id: 3,
    title: 'Build Your Own Redis',
    description:
      'An educational, extensible Redis clone built from scratch in Node.js — covering the wire protocol, data structures, and persistence.',
    technologies: ['Node.js', 'Systems', 'Education'],
    githubUrl: 'https://github.com/jasgigli/build-your-own-redis',
    liveUrl: '',
    featured: true,
  },
  {
    id: 4,
    title: 'ReviewMesh',
    description:
      'Peer-to-peer code review in your terminal. No servers, no friction — just code review over a distributed mesh.',
    technologies: ['Rust', 'P2P', 'CLI'],
    githubUrl: 'https://github.com/jasgigli/review-mesh',
    liveUrl: '',
    featured: true,
  },
  {
    id: 5,
    title: 'GigliZip',
    description:
      'A fast, interactive, cross-platform file and folder compression tool built in Rust for speed and ergonomics.',
    technologies: ['Rust', 'CLI', 'Compression'],
    githubUrl: 'https://github.com/jasgigli/GigliZip',
    liveUrl: '',
    featured: true,
  },
  {
    id: 6,
    title: 'Restaurant Management System',
    description:
      'Full-stack restaurant management platform with ordering, inventory, and analytics dashboards.',
    technologies: ['React', 'Express', 'shadcn/ui', 'React Query'],
    githubUrl: 'https://github.com/jasgigli/restaurant-management-system',
    liveUrl: '',
    featured: true,
  },
];

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];
