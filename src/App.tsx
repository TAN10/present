import React from 'react';
import { motion } from 'motion/react';
import { Heart, Music, Camera, MessageSquare, Gift } from 'lucide-react';
import MemoryTimeline from './components/MemoryTimeline';
import LoveJar from './components/LoveJar';
import LetterGenerator from './components/LetterGenerator';
import AnniversaryTracker from './components/AnniversaryTracker';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-romantic-accent/30">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/romantic-bg/1920/1080?blur=8" 
            className="w-full h-full object-cover opacity-20"
            alt="Background"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="z-10 text-center"
        >
          <div className="flex justify-center mb-6">
            <motion.div 
              animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="text-romantic-accent"
            >
              <Gift className="w-16 h-16" />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-4"
          >
            <span className="px-4 py-1 rounded-full bg-romantic-accent text-white text-xs font-bold tracking-[0.3em] uppercase">
              Happy Birthday, My Love
            </span>
          </motion.div>
          <h1 className="text-6xl md:text-9xl font-serif text-romantic-text mb-6 tracking-tight">
            Drishti
          </h1>
          <p className="text-lg md:text-xl text-romantic-text/60 font-light max-w-lg mx-auto leading-relaxed italic">
            "To the woman who brings light to my world every single day. Today is all about celebrating you."
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-romantic-text/30 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-romantic-text/30 to-transparent" />
        </motion.div>
      </section>

      {/* Anniversary Tracker */}
      <section className="py-24 px-4 bg-white/30">
        <AnniversaryTracker />
      </section>

      {/* Memory Timeline */}
      <section className="py-24 px-4">
        <MemoryTimeline />
      </section>

      {/* Love Jar & Letter Generator Grid */}
      <section className="py-24 px-4 bg-romantic-accent/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-serif text-romantic-text mb-4">The Love Jar</h2>
              <p className="text-romantic-text/60 max-w-md mx-auto lg:mx-0">
                A collection of all the little things that make me fall for you every single day.
              </p>
            </div>
            <LoveJar />
          </div>

          <div className="space-y-12">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-serif text-romantic-text mb-4">Heartfelt Words</h2>
              <p className="text-romantic-text/60 max-w-md mx-auto lg:mx-0">
                Sometimes it's hard to say exactly how I feel. Let's find the words together.
              </p>
            </div>
            <LetterGenerator />
          </div>
        </div>
      </section>

      {/* Footer / Closing */}
      <footer className="py-32 px-4 text-center border-t border-romantic-accent/10">
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.9 }}
          className="space-y-8"
        >
          <div className="flex justify-center gap-4 text-romantic-accent/40">
            <Camera className="w-5 h-5" />
            <Music className="w-5 h-5" />
            <MessageSquare className="w-5 h-5" />
            <Gift className="w-5 h-5" />
          </div>
          <h2 className="text-3xl font-serif text-romantic-text">To many more memories...</h2>
          <p className="text-romantic-text/40 text-sm tracking-widest uppercase font-bold">
            Always & Forever
          </p>
          <div className="pt-12">
            <Heart className="w-6 h-6 mx-auto text-romantic-accent fill-romantic-accent opacity-20" />
          </div>
        </motion.div>
      </footer>
    </div>
  );
}
