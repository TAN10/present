import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, ArrowLeft } from 'lucide-react';

interface ThankYouPageProps {
  onBackToMemoir: () => void;
}

export default function ThankYouPage({ onBackToMemoir }: ThankYouPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#F5E6D3] p-6 md:p-12 font-serif selection:bg-pink-300 relative flex flex-col items-center justify-center text-center"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white/80 backdrop-blur-md p-8 md:p-16 rounded-[2rem] shadow-xl border border-white/50 relative overflow-hidden max-w-3xl"
      >
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Heart className="w-32 h-32 text-pink-500" />
        </div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', delay: 0.4 }}
          className="inline-block p-3 bg-pink-100 rounded-full mb-6"
        >
          <Sparkles className="w-6 h-6 text-pink-500" />
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
          Thank You, My Love ❤️
        </h1>

        <article className="prose prose-pink prose-lg max-w-none text-gray-700 leading-relaxed space-y-6 whitespace-pre-wrap italic mb-12">
          {"Thank you for being with me in tough situations till now and i want you to be with me forever and ever , Thank you for being the someone special i have always dreamt of and again A very very Happy Birthday to you my love ❤️ Dirshti urf Diya❤️meri zindagi ki jyoti, meri life ka delulu 😭 my special my precious my only one that i care the most the cutu of my life❤️🧿✨kisi ki nazar na lge aapko jo bhi glti hui h maaf kr dena mujhe ,Love you baby, Aise hi life m progress aur ho skte to mere sath rehte hue ho❤️🤭\nJanamdin Mubarak Drishti ji✨❤️🧿🔱"}
        </article>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBackToMemoir}
          className="px-8 py-3 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition-all font-serif italic flex items-center gap-2 mx-auto"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Memoir
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
