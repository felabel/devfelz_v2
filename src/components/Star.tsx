import { motion, useTransform, useSpring, MotionValue } from 'framer-motion';

interface StarProps {
  s: {
    id: number;
    x: number;
    y: number;
    size: number;
    baseOpacity: number;
    color: string;
    parallaxFactor: number;
    twinkleSpeed: number;
  };
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  dimensions: { width: number; height: number };
}

const Star = ({ s, mouseX, mouseY, dimensions }: StarProps) => {
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

export default Star;

