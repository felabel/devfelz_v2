import { TrendingUp, Zap, Layout, Globe } from 'lucide-react';

// --- Configuration & Felicity's Professional Data ---
export const CONFIG = {
  name: "Felicity Abel",
  role: "Frontend Engineer // Revenue Catalyst",
  email: "hello@felicityabel.dev",
  tagline: "I build high-performance products that solve user problems and print revenue.",
  bio: "Results-driven Frontend Engineer with 5+ years of experience driving measurable growth. I transform complex technical challenges into elegant, user-focused solutions. From architecting ₦1 billion monthly revenue systems at Bumpa to scaling e-commerce platforms at Pricepally, I bridge the gap between pixel-perfect UI and bottom-line impact.",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  skills: [
    "ReactJS & NextJS", "TypeScript", "Redux / RTK Query", "React Query", 
    "Apollo / GraphQL", "NodeJS & Express", "Performance Optimization", "Web Accessibility (WCAG)"
  ],
  services: [
    {
      title: "Revenue-Driven Frontend",
      description: "Building high-conversion interfaces for e-commerce and fintech that directly impact the bottom line.",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Performance Therapy",
      description: "Optimizing load times and core web vitals to reduce bounce rates and improve user retention.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "UI Architecture",
      description: "Designing scalable, accessible component libraries that accelerate team velocity and product consistency.",
      icon: <Layout className="w-6 h-6" />
    },
    {
      title: "Global Reach",
      description: "Implementing SEO best practices and WCAG compliance to expand market reach to underserved users.",
      icon: <Globe className="w-6 h-6" />
    }
  ],
  resume: {
    experience: [
      {
        company: "Bumpa",
        role: "Software Engineer",
        period: "MAR 2023 - PRESENT",
        description: "Architected frontend features driving ₦1B monthly sales. Revived deprecated SMS/Email tools generating ₦2M in 3 months. Engineered the 'Yearly Wrapped' data visualizations for 10k+ merchants.",
        location: "Lagos, Nigeria"
      },
      {
        company: "Regxta",
        role: "Frontend Engineer",
        period: "SEP 2022 - MAR 2023",
        description: "Led frontend for a comprehensive fintech platform. Eliminated 70% of manual workflows by architecting an enterprise-grade Admin Dashboard with full CRUD capabilities.",
        location: "Lagos, Nigeria"
      },
      {
        company: "Pricepally",
        role: "Frontend Engineer",
        period: "SEP 2022 - MAR 2023",
        description: "Modernized grocery platform stack with React/Redux, resulting in a 20% sales increase and 45% reduction in page load times.",
        location: "Lagos, Nigeria"
      },
      {
        company: "Taquatech",
        role: "Frontend Engineer",
        period: "JAN 2020 - MAY 2021",
        description: "Developed a scalable e-learning platform enabling 3x student reach. Led a 6-month mentorship program for 5 interns with a 30% higher retention rate.",
        location: "Lagos, Nigeria"
      }
    ],
    education: [
      {
        school: "ALX Africa",
        degree: "Software Engineering Certification",
        period: "OCT 2024"
      },
      {
        school: "University of Uyo, Nigeria",
        degree: "B.Sc. Home Economics",
        period: "2014 - 2016"
      }
    ]
  },
  projects: [
    {
      title: "Bumpa Wrapped",
      description: "Personalized year-in-review data visualizations for over 10,000 merchants.",
      tags: ["React", "Data Viz", "TypeScript"],
      category: "webapps",
      image: "https://images.unsplash.com/photo-1551288049-bbbda5366991?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Fintech Admin OS",
      description: "Comprehensive dashboard reducing processing time and eliminating manual overhead.",
      tags: ["React", "Redux", "Fintech"],
      category: "webapps",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Pricepally Rebuild",
      description: "Intuitive grocery shopping experience optimized for high conversion and low latency.",
      tags: ["Next.js", "Performance", "E-commerce"],
      category: "websites",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "SwiftBank Mobile",
      description: "A high-fidelity mobile banking application focus on seamless cross-border transfers.",
      tags: ["React Native", "iOS", "Android"],
      category: "mobile apps",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Luxe Estate",
      description: "Modern real estate landing page with high-conversion lead generation funnels.",
      tags: ["Next.js", "Tailwind", "Framer"],
      category: "websites",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
    }
  ],
  musicUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3"
};

