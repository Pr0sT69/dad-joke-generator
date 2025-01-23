import React from 'react';
import { motion } from 'framer-motion';

interface JokeDisplayProps {
  joke: string;
}

export const JokeDisplay: React.FC<JokeDisplayProps> = ({ joke }) => {
  return (
    <motion.div
      key={joke}
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      className="speech-bubble bg-background border-2 border-primary min-h-[120px] flex items-center justify-center p-8 mb-12"
    >
      <p className="text-2xl font-['Bangers'] leading-relaxed">{joke}</p>
    </motion.div>
  );
};