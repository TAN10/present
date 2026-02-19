import React, { useState, useEffect } from 'react';
import { differenceInDays, differenceInMonths, differenceInYears } from 'date-fns';
import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

export default function AnniversaryTracker() {
  // Hardcoded anniversary for demo, user can change this
  const anniversaryDate = new Date('2023-06-15');
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000 * 60 * 60); // Update every hour
    return () => clearInterval(timer);
  }, []);

  const years = differenceInYears(now, anniversaryDate);
  const months = differenceInMonths(now, anniversaryDate) % 12;
  const days = differenceInDays(now, anniversaryDate) % 30; // Rough approximation

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-card p-8 rounded-[2rem] text-center max-w-md mx-auto"
    >
      <div className="flex justify-center mb-4">
        <div className="p-3 bg-romantic-accent/10 rounded-2xl">
          <Calendar className="text-romantic-accent w-6 h-6" />
        </div>
      </div>
      <h3 className="text-sm uppercase tracking-[0.2em] text-romantic-text/50 font-bold mb-6">Days of Loving You</h3>
      
      <div className="flex justify-center gap-8">
        <div className="flex flex-col">
          <span className="text-4xl font-serif text-romantic-text">{years}</span>
          <span className="text-[10px] uppercase tracking-widest text-romantic-text/40 font-bold">Years</span>
        </div>
        <div className="flex flex-col">
          <span className="text-4xl font-serif text-romantic-text">{months}</span>
          <span className="text-[10px] uppercase tracking-widest text-romantic-text/40 font-bold">Months</span>
        </div>
        <div className="flex flex-col">
          <span className="text-4xl font-serif text-romantic-text">{days}</span>
          <span className="text-[10px] uppercase tracking-widest text-romantic-text/40 font-bold">Days</span>
        </div>
      </div>
      
      <p className="mt-8 text-sm italic text-romantic-text/60">
        "Every second with you is a gift I never take for granted."
      </p>
    </motion.div>
  );
}
