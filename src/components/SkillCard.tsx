import { motion } from 'framer-motion';
import { useState } from 'react';

interface SkillCardProps {
  name: string;
  color: string;
  delay: number;
}

export const SkillCard = ({ name, color, delay }: SkillCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateY: -45 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ y: -10, rotateZ: 5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ perspective: 1000 }}
      className="h-32 cursor-pointer"
    >
      <motion.div
        className={`bg-gradient-to-br ${color} rounded-xl p-6 shadow-lg h-full flex flex-col items-center justify-center text-white relative overflow-hidden`}
        animate={{
          rotateX: isHovered ? 10 : 0,
          rotateY: isHovered ? 10 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute inset-0 bg-white opacity-0"
          animate={{ opacity: isHovered ? 0.1 : 0 }}
        />
        <div className="relative z-10 text-center">
          <motion.div
            className="text-3xl font-bold mb-2"
            animate={{ scale: isHovered ? 1.2 : 1 }}
          >
            {name.substring(0, 2)}
          </motion.div>
          <p className="text-sm font-semibold">{name}</p>
        </div>

        <motion.div
          className="absolute inset-0 opacity-0"
          animate={{
            background: isHovered ? 'radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, transparent 70%)' : '',
          }}
        />
      </motion.div>
    </motion.div>
  );
};
