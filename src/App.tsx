import { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';
import GalaxyBackground from './components/GalaxyBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ResumeDossier from './components/ResumeDossier';
import Work from './components/Work';
import Contact from './components/Contact';
import MusicPlayer from './components/MusicPlayer';
import { CONFIG } from './config';

export default function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const cursorSpringX = useSpring(0, { stiffness: 600, damping: 35 });
  const cursorSpringY = useSpring(0, { stiffness: 600, damping: 35 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
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