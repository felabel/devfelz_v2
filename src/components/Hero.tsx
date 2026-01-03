import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { CONFIG } from '../config';

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

export default Hero;

