import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart } from 'lucide-react';
import { LOVE_REASONS } from '../constants';

export default function LoveJar() {
  const [reason, setReason] = useState<string | null>(null);
  const [isOpening, setIsOpening] = useState(false);

  const getNewReason = () => {
    setIsOpening(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * LOVE_REASONS.length);
      setReason(LOVE_REASONS[randomIndex]);
      setIsOpening(false);
    }, 600);
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="relative cursor-pointer group" onClick={getNewReason}>
        {/* The Jar Visual */}
        <motion.div 
          animate={isOpening ? { rotate: [0, -5, 5, -5, 0], scale: [1, 1.05, 1] } : {}}
          className="w-48 h-64 bg-white/40 border-4 border-romantic-accent/30 rounded-t-full rounded-b-3xl relative overflow-hidden shadow-xl backdrop-blur-sm"
        >
          <div className="absolute top-0 left-0 w-full h-8 bg-romantic-accent/20 border-b-2 border-romantic-accent/30" />
          <div className="flex flex-wrap gap-2 p-4 justify-center items-center h-full opacity-40">
            {[...Array(12)].map((_, i) => (
              <Heart key={i} className="text-romantic-accent w-4 h-4 fill-romantic-accent" />
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-serif text-lg text-romantic-text/60 font-bold uppercase tracking-widest">Love Jar</span>
          </div>
        </motion.div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-romantic-text/60 italic">Click the jar for a reason why I love you</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {reason && !isOpening && (
          <motion.div
            key={reason}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            className="mt-8 p-6 bg-white rounded-xl shadow-lg border-l-4 border-romantic-accent max-w-xs text-center relative"
          >
            <div className="absolute -top-3 -left-3 bg-romantic-accent text-white p-1 rounded-full">
              <Heart className="w-4 h-4 fill-white" />
            </div>
            <p className="font-serif text-lg italic text-romantic-text">"{reason}"</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
