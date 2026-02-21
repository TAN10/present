import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GALLERY_IMAGES } from '../constants';
import { Sparkles, ArrowLeft, Heart } from 'lucide-react';

interface BirthdayGalleryProps {
  onBack: () => void;
  onOpenSecretMessage: () => void;
}

export default function BirthdayGallery({ onBack, onOpenSecretMessage }: BirthdayGalleryProps) {
  const [unblurredImages, setUnblurredImages] = useState<Record<number, boolean>>({});

  const toggleBlur = (index: number) => {
    setUnblurredImages(prev => ({
      ...prev,
      [index]: true
    }));
  };

  return (
    <div className="min-h-screen bg-pink-300 p-4 md:p-8 relative">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-12"
      >
        <div className="flex justify-center mb-4">
          <Sparkles className="text-pink-500 w-12 h-12 animate-spin-slow" />
        </div>
        <h1 className="text-5xl md:text-8xl font-serif text-pink-600 mb-4 tracking-tight flex flex-col gap-4">
          <span>Happy Birthday,</span>
          <span>Drishti🤌🏻❤️</span>
        </h1>
        <p className="text-pink-500 font-serif italic text-2xl">
          A collection of beautiful moments
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        {GALLERY_IMAGES.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={() => toggleBlur(index)}
            className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white cursor-pointer" 
          >
            <img
              src={src}
              alt={`Birthday memory ${index + 1}`}
              className="w-full h-auto transition-all duration-1000 group-hover:scale-110"
              style={{ 
                filter: unblurredImages[index] ? 'blur(0px)' : 'blur(15px)',
              }}
              referrerPolicy="no-referrer"
            />
            {!unblurredImages[index] && (
              <div className="absolute inset-0 bg-pink-500/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                 <span className="text-pink-600/60 font-serif italic">Reveal</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-6 pb-16">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenSecretMessage}
          className="flex items-center gap-3 px-8 py-4 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition-all font-serif italic text-lg group"
        >
          <Heart className="w-5 h-5 fill-current group-hover:animate-pulse" />
          A secret message from me to you
        </motion.button>

        <button 
          onClick={onBack}
          className="flex items-center gap-2 px-6 py-3 bg-white text-pink-500 rounded-full shadow-md hover:shadow-lg hover:bg-pink-50 transition-all font-serif italic text-sm border border-pink-100"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Secret Heart
        </button>
      </div>

      <footer className="text-center py-8 text-pink-300 font-serif italic border-t border-pink-100">
        With all my love
      </footer>
    </div>
  );
}
