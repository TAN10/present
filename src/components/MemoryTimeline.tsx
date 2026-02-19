import React from 'react';
import { motion } from 'motion/react';
import { INITIAL_MEMORIES } from '../constants';

export default function MemoryTimeline() {
  return (
    <div className="py-12">
      <h2 className="text-4xl font-serif text-center mb-16 text-romantic-text">Our Journey Together</h2>
      
      <div className="relative max-w-4xl mx-auto px-4">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-romantic-accent/20 hidden md:block" />
        
        <div className="space-y-24">
          {INITIAL_MEMORIES.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2">
                <div className="relative group overflow-hidden rounded-3xl shadow-2xl aspect-[4/3]">
                  <img
                    src={memory.image}
                    alt={memory.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <div className={`inline-block px-4 py-1 rounded-full bg-romantic-accent/10 text-romantic-accent text-xs font-bold mb-4 tracking-widest uppercase`}>
                  {new Date(memory.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </div>
                <h3 className="text-3xl font-serif mb-4 text-romantic-text">{memory.title}</h3>
                <p className="text-romantic-text/80 leading-relaxed font-light">
                  {memory.description}
                </p>
              </div>
              
              {/* Center Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-romantic-accent rounded-full border-4 border-romantic-bg hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
