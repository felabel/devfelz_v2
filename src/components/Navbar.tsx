import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { CONFIG } from '../config';

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

export default Navbar;

