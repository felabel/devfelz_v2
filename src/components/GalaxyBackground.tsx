import { useState, useEffect, useMemo } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import Star from './Star';

const GalaxyBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => setDimensions({ width: window.innerWidth, height: window.innerHeight });
    const handleMouseMove = (e: MouseEvent) => {
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

export default GalaxyBackground;

