import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ExternalLink } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { CONFIG } from '../config';

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

export default Work;

