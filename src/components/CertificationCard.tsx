import { motion } from 'framer-motion';
import { useState } from 'react';

interface CertificationCardProps {
  title: string;
  issuer: string;
  index: number;
  color: string;
}

export const CertificationCard = ({ title, issuer, index, color }: CertificationCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, z: -100 }}
      whileInView={{ opacity: 1, z: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="h-48 cursor-pointer"
      style={{ perspective: 1200 }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="w-full h-full"
      >
        <motion.div
          className={`bg-gradient-to-br ${color} rounded-xl p-6 shadow-xl h-full flex flex-col items-center justify-center text-white absolute w-full`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="text-center">
            <div className="text-4xl font-bold mb-3">{index + 1}</div>
            <p className="font-semibold text-sm">{issuer}</p>
          </div>
        </motion.div>

        <motion.div
          className={`bg-gradient-to-br ${color} rounded-xl p-6 shadow-xl h-full flex flex-col items-center justify-center text-white absolute w-full`}
          style={{ backfaceVisibility: 'hidden', rotateY: 180 }}
        >
          <div className="text-center">
            <p className="text-sm leading-relaxed">{title}</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
