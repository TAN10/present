import React from 'react';
import { motion } from 'motion/react';
import { THOUGHTS } from '../constants';
import { Quote } from 'lucide-react';

export default function QuotesSection() {
  return (
    <section className="py-24 bg-white/30 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block p-3 bg-pink-100 rounded-full mb-4"
          >
            <Quote className="w-6 h-6 text-pink-500" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-serif text-gray-800"
          >
            Special Quotes
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '3rem' }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-[1px] bg-pink-300 mx-auto mt-4" 
          />
        </div>

        <div className="space-y-8">
          {THOUGHTS.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative p-8 bg-white/80 rounded-3xl shadow-sm border border-pink-100/50 hover:shadow-md transition-shadow group"
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-pink-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Quote className="w-4 h-4 text-pink-300" />
              </div>
              <p className="text-lg md:text-xl font-serif italic text-gray-700 leading-relaxed text-center">
                "{quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
