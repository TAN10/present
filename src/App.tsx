import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gift, BookOpen, Star, Crown } from 'lucide-react';
import MomentTimeline from './components/MomentTimeline';
import QuotesSection from './components/QuotesSection';
import SecretHeartSection from './components/SecretHeartSection';
import BirthdayGallery from './components/BirthdayGallery';
import BirthdayCake from './components/BirthdayCake';
import BirthdayGate from './components/BirthdayGate';
import SecretMessage from './components/SecretMessage';
import ThankYouPage from './components/ThankYouPage';

export default function App() {
  const [isGalleryUnlocked, setIsGalleryUnlocked] = useState(false);
  const [showGate, setShowGate] = useState(true);
  const [showSecretMessage, setShowSecretMessage] = useState(false);
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);

  return (
    <div className="min-h-screen font-sans selection:bg-app-accent/20 bg-[#F5E6D3]">
      <AnimatePresence>
        {showGate && (
          <BirthdayGate onOpen={() => setShowGate(false)} />
        )}
      </AnimatePresence>

      {/* Main Content - Revealed after gate opens */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: showGate ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* Moments Section (Now the top section) */}
        <section className="py-20 min-h-screen flex flex-col justify-center">
          <div className="max-w-6xl mx-auto px-4 w-full">
            <div className="flex items-center gap-4 mb-8 justify-center">
              <Crown className="text-app-accent w-12 h-12" />
              <h2 className="text-4xl md:text-6xl font-serif text-center text-black/80 font-bold tracking-tight">Maharani Sahiba</h2>
            </div>
            
            {/* Maharani Image */}
            <div className="mb-16 flex justify-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring" }}
                className="relative p-4 bg-white shadow-2xl rounded-2xl rotate-1 hover:rotate-0 transition-transform duration-500"
              >
                <img 
                  src="https://i.ibb.co/nqQQCcMb/dbday.jpg" 
                  alt="Maharani Sahiba" 
                  className="rounded-xl max-w-full md:max-w-[500px] h-auto object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-full shadow-xl rotate-12">
                  <span className="text-4xl">👑</span>
                </div>
              </motion.div>
            </div>

            {/* Birthday Cake */}
            <div className="mb-20">
              <BirthdayCake />
            </div>

            <MomentTimeline />
          </div>
        </section>

        {/* Quotes Section */}
        <QuotesSection />

        {/* Secret Heart Section */}
        <SecretHeartSection 
          onUnlock={() => setIsGalleryUnlocked(true)} 
          isUnlocked={isGalleryUnlocked}
        />

        {/* Unlocked Gallery Section */}
        <AnimatePresence>
          {isGalleryUnlocked && !showSecretMessage && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.8 }}
            >
              <BirthdayGallery 
                onBack={() => setIsGalleryUnlocked(false)} 
                onOpenSecretMessage={() => setShowSecretMessage(true)}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Secret Message Section */}
        <AnimatePresence>
          {showSecretMessage && !showThankYouMessage && (
            <SecretMessage 
              onBack={() => setShowSecretMessage(false)}
              onOpenThankYou={() => setShowThankYouMessage(true)}
            />
          )}
        </AnimatePresence>

        {/* Thank You Page Section */}
        <AnimatePresence>
          {showThankYouMessage && (
            <ThankYouPage onBackToMemoir={() => setShowThankYouMessage(false)} />
          )}
        </AnimatePresence>

        {/* Footer */}
        <footer className="py-20 text-center border-t border-black/5 mt-12">
          <div className="flex justify-center gap-6 mb-8 text-black/20">
            <BookOpen className="w-5 h-5" />
            <Star className="w-5 h-5" />
            <Gift className="w-5 h-5" />
          </div>
          <p className="text-sm font-serif italic text-black/40 mb-8">
            Wishing you a day as wonderful as you are.
          </p>
          <button
            onClick={() => setShowGate(true)}
            className="px-6 py-2 bg-black/5 hover:bg-black/10 text-black/60 rounded-full text-sm font-medium transition-colors"
          >
            Open Gate Again
          </button>
        </footer>
      </motion.div>
    </div>
  );
}
