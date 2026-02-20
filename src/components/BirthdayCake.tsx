import React from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';

export default function BirthdayCake() {
  const handleCelebrate = () => {
    // Fire confetti from the center
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF69B4', '#FFD700', '#FF1493', '#00BFFF', '#32CD32']
    });

    // Fire side bursts
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FF69B4', '#FFD700']
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FF69B4', '#FFD700']
      });
    }, 200);
  };

  return (
    <div className="flex flex-col items-center justify-center py-8 cursor-pointer group" onClick={handleCelebrate}>
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{ 
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        className="relative"
      >
        {/* Cake SVG */}
        <svg width="120" height="120" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Cake Base */}
          <path d="M40 120H160V160C160 171.046 151.046 180 140 180H60C48.9543 180 40 171.046 40 160V120Z" fill="#FFB6C1"/>
          <path d="M40 120H160V130H40V120Z" fill="#FF69B4"/>
          
          {/* Cake Top Layer */}
          <path d="M50 80H150V120H50V80Z" fill="#FFC0CB"/>
          <path d="M50 80H150V90H50V80Z" fill="#FF1493"/>
          
          {/* Frosting Drips */}
          <path d="M50 80C50 80 60 95 70 80C80 65 90 80 100 80C110 80 120 95 130 80C140 65 150 80 150 80" stroke="#FFF" strokeWidth="8" strokeLinecap="round"/>

          {/* Candles */}
          <rect x="70" y="50" width="8" height="30" fill="#FFD700"/>
          <rect x="96" y="45" width="8" height="35" fill="#FFD700"/>
          <rect x="122" y="50" width="8" height="30" fill="#FFD700"/>

          {/* Flames (Animated) */}
          <motion.path 
            d="M74 30C74 30 70 40 74 50C78 40 74 30 74 30Z" 
            fill="#FF4500"
            animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.path 
            d="M100 25C100 25 96 35 100 45C104 35 100 25 100 25Z" 
            fill="#FF4500"
            animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse", delay: 0.1 }}
          />
          <motion.path 
            d="M126 30C126 30 122 40 126 50C130 40 126 30 126 30Z" 
            fill="#FF4500"
            animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse", delay: 0.2 }}
          />
        </svg>
      </motion.div>
      <p className="mt-4 text-sm font-serif italic text-black/40 group-hover:text-pink-500 transition-colors">
        Click to celebrate!
      </p>
    </div>
  );
}
