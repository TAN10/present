import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

interface SecretHeartSectionProps {
  onUnlock: () => void;
  isUnlocked: boolean;
}

export default function SecretHeartSection({ onUnlock, isUnlocked }: SecretHeartSectionProps) {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (input.toLowerCase().trim() === 'drishti') {
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  if (isUnlocked) return null;

  return (
    <div className="relative py-24 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-pink-50/50 -skew-y-3 transform origin-bottom-right -z-10" />
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative flex flex-col items-center justify-center"
      >
        <div className="relative cursor-pointer group" onClick={handleSubmit}>
          {/* Pulsing Heart Background */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-pink-400 drop-shadow-xl"
          >
            <Heart className="w-64 h-64 fill-pink-400" strokeWidth={0} />
          </motion.div>

          {/* Input Container inside Heart */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pt-6">
            <span className="text-white font-serif text-2xl mb-2 font-bold drop-shadow-md">Tanmay</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
              onClick={(e) => e.stopPropagation()} 
              placeholder="code"
              className="w-40 bg-white/20 backdrop-blur-sm border-b-2 border-white/50 text-center text-white placeholder-white/60 focus:outline-none focus:border-white font-serif text-lg py-1 px-2 rounded-t-lg transition-colors"
            />
          </div>
        </div>

        {/* Error Shake Animation */}
        {error && (
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: [-10, 10, -10, 10, 0] }}
            transition={{ duration: 0.4 }}
            className="absolute -bottom-12 text-red-400 font-serif italic"
          >
            Try typing 'drishti'
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
