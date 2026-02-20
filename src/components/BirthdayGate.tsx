import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Gift, Star } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BirthdayGateProps {
  onOpen: () => void;
}

export default function BirthdayGate({ onOpen }: BirthdayGateProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    
    // Trigger confetti
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FFD700', '#FF69B4', '#00BFFF']
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FFD700', '#FF69B4', '#00BFFF']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();

    onOpen();
    setTimeout(() => {
      // Keep the gate visually present for a bit if needed, 
      // but the parent already knows to show the content.
    }, 1500); 
  };

  const GateContent = () => (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="flex justify-center mb-8">
        <div className="p-4 bg-app-accent/10 rounded-full">
          <Gift className="w-10 h-10 text-app-accent" />
        </div>
      </div>
      <h1 className="text-5xl md:text-7xl font-serif mb-6 tracking-tight flex flex-col gap-4 text-center text-app-text">
        <span>Happy Birthday,</span>
        <span>Drishti</span>
      </h1>
      <p className="text-lg text-black/50 font-light max-w-md mx-auto leading-relaxed text-center px-4">
        May this year brings you happiness, fortune and good health.
        <br />
        Here's a small treat from my side.
      </p>
    </div>
  );

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-pointer-events duration-1000 ${isOpen ? 'pointer-events-none' : 'pointer-events-auto'}`}>
      
      {/* Left Gate Panel */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isOpen ? '-100%' : 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 top-0 bottom-0 w-1/2 bg-[#faf9f6] z-20 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-[200%] h-full">
          <GateContent />
        </div>
      </motion.div>

      {/* Right Gate Panel */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isOpen ? '100%' : 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-0 top-0 bottom-0 w-1/2 bg-[#faf9f6] z-20 overflow-hidden"
      >
        <div className="absolute top-0 left-[-100%] w-[200%] h-full">
          <GateContent />
        </div>
      </motion.div>

      {/* Click Handler Overlay */}
      {!isOpen && (
        <div 
            className="absolute inset-0 z-30 cursor-pointer" 
            onClick={handleOpen}
        />
      )}

      {/* Decorative Background Elements on the Gates */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <motion.div 
          animate={{ opacity: isOpen ? 0 : 0.1 }}
          className="absolute top-20 left-20"
        >
          <Star className="w-16 h-16 rotate-12" />
        </motion.div>
        <motion.div 
          animate={{ opacity: isOpen ? 0 : 0.1 }}
          className="absolute bottom-20 right-20"
        >
          <Star className="w-16 h-16 -rotate-12" />
        </motion.div>
      </div>
    </div>
  );
}
