import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import Markdown from 'react-markdown';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Send, Sparkles, Loader2 } from 'lucide-react';

export default function LetterGenerator() {
  const [prompt, setPrompt] = useState('');
  const [letter, setLetter] = useState('');
  const [loading, setLoading] = useState(false);

  const generateLetter = async () => {
    if (!prompt.trim()) return;
    
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Write a deeply romantic, poetic, and personal birthday love letter to my girlfriend, Drishti. 
        It's her birthday today. Incorporate these details or themes: ${prompt}. 
        Make it feel sincere, not cheesy. Use beautiful imagery. 
        Format it with nice spacing and paragraphs.`,
      });
      
      setLetter(response.text || 'Failed to generate a letter. My love for you is too great for words!');
    } catch (error) {
      console.error("Error generating letter:", error);
      setLetter("I tried to write how I feel, but the words got lost in my heart. (API Error)");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 glass-card rounded-3xl">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="text-romantic-accent w-5 h-5" />
        <h2 className="text-2xl font-serif text-romantic-text">AI Love Letter Assistant</h2>
      </div>
      
      <div className="space-y-4">
        <p className="text-sm text-romantic-text/70 italic">
          Tell me a memory, a feeling, or something you love about her, and I'll help you find the perfect words.
        </p>
        
        <div className="relative">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., Our first date at the beach, her kindness, how she makes me laugh..."
            className="w-full p-4 rounded-2xl border border-romantic-accent/20 bg-white/50 focus:ring-2 focus:ring-romantic-accent/50 focus:border-transparent outline-none min-h-[100px] transition-all"
          />
          <button
            onClick={generateLetter}
            disabled={loading || !prompt.trim()}
            className="absolute bottom-4 right-4 p-2 bg-romantic-accent text-white rounded-full hover:scale-110 active:scale-95 disabled:opacity-50 disabled:scale-100 transition-all shadow-lg"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
          </button>
        </div>

        <AnimatePresence>
          {letter && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-8 p-8 bg-white rounded-2xl shadow-inner border border-romantic-accent/10 relative"
            >
              <Heart className="absolute top-4 right-4 text-romantic-accent/20 w-12 h-12" />
              <div className="markdown-body prose prose-stone max-w-none font-serif leading-relaxed text-romantic-text">
                <Markdown>{letter}</Markdown>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
