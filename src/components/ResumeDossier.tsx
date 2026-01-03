import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ChevronRight, Download, Briefcase, Calendar, GraduationCap, Cpu } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { CONFIG } from '../config';

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

export default ResumeDossier;

