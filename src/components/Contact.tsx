import { motion } from 'framer-motion';
import { Send, Github } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { CONFIG } from '../config';

const Contact = () => (
  <section id="contact" className="py-32 px-6 relative z-10">
    <div className="container mx-auto max-w-6xl rounded-[4rem] bg-blue-600/5 border border-blue-500/10 p-12 md:p-32 relative overflow-hidden text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/10 blur-[150px] pointer-events-none" />
      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}>
        <h2 className="text-6xl md:text-9xl font-black mb-10 leading-[0.8] uppercase tracking-tighter">Growth <br /><span className="text-blue-500 italic font-serif">Inquiry.</span></h2>
        <p className="text-xl text-zinc-400 mb-16 max-w-2xl mx-auto leading-relaxed">Currently accepting new engineering missions, architectural consultations, and growth-focused collaborations.</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <MagneticButton href={`mailto:${CONFIG.email}`} className="px-16 py-7 bg-white text-black font-black rounded-[2rem] flex items-center justify-center gap-3 hover:bg-blue-600 hover:text-white transition-all text-lg tracking-tight">SEND SIGNAL <Send size={24} /></MagneticButton>
          <a href={CONFIG.socials.github} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2">
             <div className="w-16 h-16 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-blue-500 transition-colors"><Github size={24} className="group-hover:text-blue-400 transition-colors" /></div>
             <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-600 group-hover:text-zinc-300">GITHUB</span>
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Contact;

