import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function MomentTimeline() {
  const [blurredImages, setBlurredImages] = useState<Record<string, boolean>>({});

  const toggleBlur = (id: string) => {
    setBlurredImages(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const isBlurred = (id: string) => blurredImages[id] !== false; // Default to true (blurred)

  return (
    <div className="py-12">
      <p className="text-center text-black/50 font-serif italic mb-4 text-lg">
        Since we've only met online, we only have chats and photos
      </p>
      <h2 className="text-4xl font-serif text-center mb-12">Shared Moments</h2>
      
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-serif mb-3">The Beginning</h3>
          <p className="text-black/60 text-lg font-serif italic">
            The day when we committed ourselves unknowingly to each other
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="overflow-hidden rounded-2xl shadow-lg cursor-pointer relative"
            onClick={() => toggleBlur('beginning-1')}
          >
            <img
              src="https://i.ibb.co/fzN3WxL9/Whats-App-Image-2026-02-19-at-20-51-07.jpg"
              alt="The Beginning 1"
              className="w-full h-auto transition-all duration-1000"
              style={{ filter: isBlurred('beginning-1') ? 'blur(20px)' : 'blur(0px)', transform: isBlurred('beginning-1') ? 'scale(1.1)' : 'scale(1)' }}
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="overflow-hidden rounded-2xl shadow-lg cursor-pointer relative"
            onClick={() => toggleBlur('beginning-2')}
          >
            <img
              src="https://i.ibb.co/zHxf7bcQ/Whats-App-Image-2026-02-19-at-20-51-06.jpg"
              alt="The Beginning 2"
              className="w-full h-auto transition-all duration-1000"
              style={{ filter: isBlurred('beginning-2') ? 'blur(20px)' : 'blur(0px)', transform: isBlurred('beginning-2') ? 'scale(1.1)' : 'scale(1)' }}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* A Special Day Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-serif mb-3">Special Days</h3>
          <p className="text-black/60 text-lg font-serif italic">
            Some special moments we spent together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "https://i.ibb.co/ZRZXj7xH/Whats-App-Image-2026-02-19-at-17-16-56-3.jpg",
            "https://i.ibb.co/S740hR3v/Whats-App-Image-2026-02-19-at-17-16-57-2.jpg",
            "https://i.ibb.co/VchFPJqh/Whats-App-Image-2026-02-19-at-20-50-17.jpg",
            "https://i.ibb.co/ychmLX2H/Whats-App-Image-2026-02-19-at-20-50-16.jpg",
            "https://i.ibb.co/bRPKfN0F/Whats-App-Image-2026-02-19-at-20-50-15.jpg",
            "https://i.ibb.co/wZ5rRB5v/Whats-App-Image-2026-02-19-at-20-50-14.jpg"
          ].map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="overflow-hidden rounded-2xl shadow-lg cursor-pointer relative"
              onClick={() => toggleBlur(`special-${index}`)}
            >
              <img
                src={src}
                alt={`Special moment ${index + 1}`}
                className="w-full h-auto transition-all duration-1000"
                style={{ filter: isBlurred(`special-${index}`) ? 'blur(20px)' : 'blur(0px)', transform: isBlurred(`special-${index}`) ? 'scale(1.1)' : 'scale(1)' }}
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
