import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Layers, 
  Cpu, 
  Smartphone, 
  Send,
  User,
  Briefcase,
  MessageSquare,
  ChevronRight,
  Monitor,
  Coffee,
  Terminal,
  Bug,
  Sparkles,
  Music,
  Volume2,
  VolumeX,
  FileText,
  Download,
  Calendar,
  MapPin,
  GraduationCap,
  Award,
  TrendingUp,
  Zap,
  Layout,
  Globe
} from 'lucide-react';

// --- Configuration & Felicity's Professional Data ---
const CONFIG = {
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

// --- Galaxy Particle System ---
const GalaxyBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => setDimensions({ width: window.innerWidth, height: window.innerHeight });
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const stars = useMemo(() => {
    return [...Array(200)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      baseOpacity: Math.random() * 0.6 + 0.2,
      color: i % 4 === 0 ? '#60A5FA' : i % 7 === 0 ? '#A78BFA' : '#FFFFFF',
      parallaxFactor: Math.random() * 20 + 5,
      twinkleSpeed: Math.random() * 4 + 2,
    }));
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#020205] pointer-events-none">
      <motion.div 
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-blue-900/10 blur-[120px] rounded-full" 
      />
      <motion.div 
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[80%] bg-purple-900/10 blur-[150px] rounded-full" 
      />
      {stars.map((s) => (
        <Star key={s.id} s={s} mouseX={mouseX} mouseY={mouseY} dimensions={dimensions} />
      ))}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020205]" />
    </div>
  );
};

const Star = ({ s, mouseX, mouseY, dimensions }) => {
  const tx = useTransform(mouseX, [0, dimensions.width], [s.parallaxFactor, -s.parallaxFactor]);
  const ty = useTransform(mouseY, [0, dimensions.height], [s.parallaxFactor, -s.parallaxFactor]);
  const x = useSpring(tx, { stiffness: 50, damping: 30 });
  const y = useSpring(ty, { stiffness: 50, damping: 30 });

  return (
    <motion.div
      className="absolute rounded-full z-0"
      style={{
        width: s.size + "px",
        height: s.size + "px",
        left: s.x + "%",
        top: s.y + "%",
        backgroundColor: s.color,
        x,
        y,
        boxShadow: s.size > 1 ? `0 0 8px ${s.color}60` : 'none',
      }}
      animate={{
        opacity: [s.baseOpacity * 0.4, s.baseOpacity, s.baseOpacity * 0.4],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: s.twinkleSpeed,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

// --- Magnetic Button ---
const MagneticButton = ({ children, className, onClick, href, download }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });
  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={ref}
      href={href}
      download={download}
      onClick={onClick}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </Component>
  );
};

// --- Music Player Component (Bottom-Right) ---
const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-10 right-10 z-[100] flex items-center gap-4">
      <AnimatePresence>
        {isPlaying && (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/5 text-[10px] font-bold tracking-widest text-blue-400 uppercase pointer-events-none"
          >
            Lofi_Engineering.exe
          </motion.div>
        )}
      </AnimatePresence>
      
      <audio ref={audioRef} src={CONFIG.musicUrl} loop />
      <MagneticButton
        onClick={toggleMusic}
        className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 border shadow-2xl bg-blue-600 border-blue-400 shadow-blue-500/20"
      >
        {isPlaying ? (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Volume2 className="text-white" size={20} />
          </motion.div>
        ) : (
          <VolumeX className="text-white" size={20} />
        )}
      </MagneticButton>
    </div>
  );
};

// --- Resume Dossier Section ---
const ResumeDossier = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    setIsScanning(true);
    const timer = setTimeout(() => setIsScanning(false), 1200);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <section id="resume" className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Dossier Sidebar */}
          <div className="w-full lg:w-1/3 sticky top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <div className="flex items-center gap-2 mb-4 text-blue-400 font-bold uppercase tracking-[0.4em] text-xs">
                  <FileText size={14} /> Personnel File
                </div>
                <h2 className="text-6xl font-black tracking-tighter uppercase leading-none mb-4">
                  Growth <br /> <span className="text-blue-600 italic font-serif">Engine.</span>
                </h2>
                <p className="text-zinc-500 text-sm max-w-sm leading-relaxed mb-8">
                  A verifiable record of revenue-driven engineering across Fintech, E-commerce, and EdTech sectors.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {['experience', 'education', 'stack'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-4 rounded-2xl border text-xs font-black uppercase tracking-[0.2em] transition-all flex items-center justify-between group ${
                      activeTab === tab 
                        ? 'bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-500/20' 
                        : 'bg-zinc-900/30 border-zinc-800 text-zinc-500 hover:border-zinc-700'
                    }`}
                  >
                    {tab}
                    <ChevronRight size={14} className={`transition-transform ${activeTab === tab ? 'translate-x-1' : 'group-hover:translate-x-1'}`} />
                  </button>
                ))}
              </div>

              <MagneticButton 
                href="#" 
                className="w-full mt-8 px-8 py-5 bg-white text-black font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-blue-500 hover:text-white transition-all text-sm tracking-widest uppercase shadow-2xl"
              >
                DOWNLOAD FULL RESUME <Download size={18} />
              </MagneticButton>
            </motion.div>
          </div>

          {/* Content Area */}
          <div className="w-full lg:w-2/3 bg-zinc-900/20 backdrop-blur-xl border border-zinc-800/50 rounded-[3rem] p-8 md:p-12 relative overflow-hidden min-h-[600px]">
            <AnimatePresence>
              {isScanning && (
                <motion.div 
                  initial={{ top: '-10%' }}
                  animate={{ top: '110%' }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: "linear" }}
                  className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent z-20 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                />
              )}
            </AnimatePresence>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative z-10"
            >
              {activeTab === 'experience' && (
                <div className="space-y-12">
                  {CONFIG.resume.experience.map((exp, i) => (
                    <div key={i} className="relative pl-10 border-l border-zinc-800">
                      <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.8)]" />
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                        <div>
                          <h3 className="text-2xl font-bold text-zinc-100">{exp.role}</h3>
                          <div className="text-blue-500 font-bold uppercase tracking-widest text-[10px] mt-1 flex items-center gap-2">
                             <Briefcase size={10} /> {exp.company}
                          </div>
                        </div>
                        <div className="flex flex-col items-start md:items-end text-[10px] text-zinc-500 font-bold uppercase tracking-widest gap-1">
                          <div className="flex items-center gap-2 font-mono"><Calendar size={10} /> {exp.period}</div>
                        </div>
                      </div>
                      <p className="text-zinc-400 text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'education' && (
                <div className="space-y-12">
                  {CONFIG.resume.education.map((edu, i) => (
                    <div key={i} className="flex gap-6 items-start">
                      <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 shrink-0 border border-blue-500/20">
                        <GraduationCap size={32} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-zinc-100">{edu.degree}</h3>
                        <p className="text-blue-500 font-bold uppercase tracking-widest text-[10px] mt-2">{edu.school}</p>
                        <p className="text-zinc-500 text-xs font-bold uppercase mt-2 font-mono">{edu.period}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'stack' && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {CONFIG.skills.map((skill, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex flex-col items-center text-center gap-3"
                    >
                      <Cpu size={24} className="text-blue-500" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-zinc-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Navbar ---
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? 'bg-black/40 backdrop-blur-2xl py-4 border-b border-zinc-800/30' : 'bg-transparent py-10'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
          <motion.div 
            whileHover={{ rotate: 180 }}
            className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            <Terminal size={20} className="text-white" />
          </motion.div>
          <span className="hidden sm:block font-black uppercase tracking-tighter">{CONFIG.name}</span>
        </div>
        <div className="flex gap-8 text-[10px] font-bold tracking-[0.25em] uppercase text-zinc-500">
          {['About', 'Resume', 'Work', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

// --- Hero ---
const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 400]);

  return (
    <section className="min-h-screen flex items-center pt-20 relative px-6 z-10">
      <div className="container mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <motion.div style={{ y }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-emerald-400 mb-8 font-mono text-sm bg-emerald-500/5 border border-emerald-500/20 w-fit px-4 py-1.5 rounded-full"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for new engineering missions
          </motion.div>
          <h1 className="text-7xl md:text-[9.5rem] font-black text-zinc-100 leading-[0.75] mb-10 tracking-tighter uppercase">
            REVENUE <br />
            <span className="text-transparent stroke-text opacity-40">CATALYST.</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-md leading-relaxed mb-12">
            {CONFIG.tagline} <br />
            <span className="text-sm font-mono opacity-40 mt-3 block">
              // Senior Frontend Engineer // ₦1B Sales Milestones
            </span>
          </p>
          <div className="flex gap-6">
            <MagneticButton 
              href="#resume"
              className="px-12 py-6 bg-blue-600 text-white font-black rounded-2xl flex items-center gap-3 hover:bg-blue-500 transition-all uppercase tracking-tight shadow-[0_20px_40px_rgba(37,99,235,0.2)]"
            >
              Access Dossier <ChevronRight size={20} />
            </MagneticButton>
          </div>
        </motion.div>

        <div className="relative hidden lg:block perspective-2000">
          <motion.div 
            style={{ rotateY: 15, rotateX: 5 }}
            whileHover={{ rotateY: 0, rotateX: 0, scale: 1.05 }}
            className="w-full aspect-square bg-zinc-900/30 backdrop-blur-xl rounded-[3rem] border border-zinc-800/50 relative overflow-hidden"
          >
             <div className="absolute top-0 left-0 w-full h-10 bg-zinc-800/30 border-b border-zinc-700/50 flex items-center px-6 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/40" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                <div className="w-3 h-3 rounded-full bg-green-500/40" />
             </div>
             <div className="p-12 pt-20 font-mono text-[13px] text-blue-300/80 leading-relaxed">
                <p><span className="text-blue-500">const</span> <span className="text-white">Growth</span> = {"{"}</p>
                <p className="pl-6 text-zinc-500">sales: '₦1B/month',</p>
                <p className="pl-6 text-zinc-500">loadTime: '-45%',</p>
                <p className="pl-6 text-zinc-500">userEngagement: '+35%',</p>
                <p className="pl-6 mt-2 text-emerald-400">optimize(features) {"=>"} {"{"}</p>
                <p className="pl-12 text-blue-400">return features.map(ship);</p>
                <p className="pl-6">{"}"}</p>
                <p>{"};"}</p>
             </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .stroke-text { -webkit-text-stroke: 1.5px white; }
        .perspective-2000 { perspective: 2000px; }
      `}</style>
    </section>
  );
};

// --- Work ---
const Work = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const filters = ['all', 'websites', 'webapps', 'mobile apps'];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return CONFIG.projects;
    return CONFIG.projects.filter(project => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="work" className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-2 mb-4 text-blue-400 font-bold uppercase tracking-[0.4em] text-xs">
              <Sparkles size={14} /> Major Deployments
            </div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
              Featured <br /> <span className="text-blue-600 italic font-serif">Solutions.</span>
            </h2>
          </motion.div>
          
          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2 bg-zinc-900/40 p-1.5 rounded-2xl border border-zinc-800/50 backdrop-blur-md">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                  activeFilter === f 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                    : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, i) => (
              <motion.div 
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col bg-zinc-900/10 border border-zinc-800/30 rounded-[2.5rem] overflow-hidden hover:border-blue-500/20 transition-all duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                   <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"/>
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <MagneticButton className="w-24 h-24 bg-white text-black rounded-full font-black text-[10px] tracking-widest uppercase shadow-2xl">View</MagneticButton>
                   </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-black tracking-[0.1em] uppercase py-1 px-3 rounded-md bg-blue-500/5 text-blue-400 border border-blue-500/10">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{p.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-grow">{p.description}</p>
                  <div className="pt-6 border-t border-zinc-800/30 flex justify-between items-center text-zinc-600 group-hover:text-zinc-400">
                     <span className="text-[10px] font-bold tracking-widest uppercase">{p.category}</span>
                     <ExternalLink size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

// --- Contact ---
const Contact = () => (
  <section id="contact" className="py-32 px-6 relative z-10">
    <div className="container mx-auto max-w-6xl rounded-[4rem] bg-blue-600/5 border border-blue-500/10 p-12 md:p-32 relative overflow-hidden text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/10 blur-[150px] pointer-events-none" />
      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}>
        <h2 className="text-6xl md:text-9xl font-black mb-10 leading-[0.8] uppercase tracking-tighter">Growth <br /><span className="text-blue-500 italic font-serif">Inquiry.</span></h2>
        <p className="text-xl text-zinc-400 mb-16 max-w-2xl mx-auto leading-relaxed">Currently accepting new engineering missions, architectural consultations, and growth-focused collaborations.</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <MagneticButton href={`mailto:${CONFIG.email}`} className="px-16 py-7 bg-white text-black font-black rounded-[2rem] flex items-center justify-center gap-3 hover:bg-blue-600 hover:text-white transition-all text-lg tracking-tight">SEND SIGNAL <Send size={24} /></MagneticButton>
          <a href={CONFIG.socials.github} target="_blank" className="group flex flex-col items-center gap-2">
             <div className="w-16 h-16 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-blue-500 transition-colors"><Github size={24} className="group-hover:text-blue-400 transition-colors" /></div>
             <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-600 group-hover:text-zinc-300">GITHUB</span>
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const cursorSpringX = useSpring(0, { stiffness: 600, damping: 35 });
  const cursorSpringY = useSpring(0, { stiffness: 600, damping: 35 });

  useEffect(() => {
    const moveCursor = (e) => {
      cursorSpringX.set(e.clientX);
      cursorSpringY.set(e.clientY);
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorSpringX, cursorSpringY]);

  if (!CONFIG || !CONFIG.services || !CONFIG.skills) return null;

  return (
    <div className="relative text-zinc-100 selection:bg-blue-600/40 font-sans cursor-none min-h-screen bg-[#020205]">
      <GalaxyBackground />
      <Navbar />

      <div className="relative z-10">
        <Hero />
        
        <section id="about" className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20">
            <div>
               <h2 className="text-4xl md:text-7xl font-black mb-12 leading-[0.85] uppercase tracking-tighter">Scale. <br /> Performance. <br /> <span className="text-blue-600">Impact.</span></h2>
               <p className="text-xl text-zinc-400 leading-relaxed mb-10 max-w-xl">{CONFIG.bio}</p>
               <div className="flex flex-wrap gap-3">
                  {CONFIG.skills.map((skill, i) => (
                    <span key={i} className="px-5 py-2.5 bg-zinc-900/20 border border-zinc-800/40 rounded-xl text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white hover:border-blue-500 transition-all">{skill}</span>
                  ))}
               </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {CONFIG.services.map((s, i) => (
                <div key={i} className="p-8 rounded-[2.5rem] bg-zinc-900/10 border border-zinc-800/30 hover:bg-blue-900/5 hover:border-blue-500/20 transition-all group">
                  <div className="text-blue-500 mb-6 group-hover:scale-110 group-hover:text-blue-400 transition-transform">{s.icon}</div>
                  <h3 className="font-bold text-lg mb-3">{s.title}</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ResumeDossier />
        <Work />
        <Contact />
        
        <footer className="py-24 text-center">
          <div className="text-[10px] font-black tracking-[0.5em] text-zinc-700 uppercase mb-4">ENGINEERING LOG // FE-01 // v5.0.0</div>
          <div className="text-zinc-800 text-[9px] uppercase tracking-widest">© {new Date().getFullYear()} - Felicity Abel.</div>
        </footer>
      </div>

      <MusicPlayer />

      <motion.div 
        className="fixed top-0 left-0 w-12 h-12 rounded-full border border-blue-500/30 pointer-events-none z-[9999] hidden lg:block"
        style={{ x: cursorSpringX, y: cursorSpringY, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div 
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-blue-400 rounded-full pointer-events-none z-[9999] hidden lg:block shadow-[0_0_15px_#60A5FA]"
        style={{ x: cursorPos.x, y: cursorPos.y, translateX: "-50%", translateY: "-50%" }}
      />
    </div>
  );
}