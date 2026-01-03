import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { CONFIG } from '../config';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

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

export default MusicPlayer;

