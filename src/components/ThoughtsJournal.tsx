import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PenLine, Plus, Trash2 } from 'lucide-react';
import { THOUGHTS } from '../constants';

interface Note {
  id: string;
  text: string;
  date: string;
}

export default function ThoughtsJournal() {
  const [notes, setNotes] = useState<Note[]>(() => {
    const saved = localStorage.getItem('thoughts-journal');
    if (saved) {
      return JSON.parse(saved);
    }
    return THOUGHTS.map((text, index) => ({
      id: `init-${index}`,
      text,
      date: new Date().toLocaleDateString()
    }));
  });
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    localStorage.setItem('thoughts-journal', JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (!newNote.trim()) return;
    const note: Note = {
      id: Date.now().toString(),
      text: newNote,
      date: new Date().toLocaleDateString()
    };
    setNotes([note, ...notes]);
    setNewNote('');
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter(n => n.id !== id));
  };

  const DEDICATIONS = [
    "जन्मदिन की हार्दिक शुभकामनाएं मेरी प्यारी दुलारी दृष्टि, दिया ,कुटु , स्वीटू , प्यारु , महादेव की अनुपम हमेशा आप पर बनी रहे , जहां जाओ झंंडेगड़ो , स्वस्थ रहो , मस्त रहो,जो चाहो वो मिले , और हम हमेशा साथ रहे ✨🙏🧿🔱",
    "Like Sun is nothing without sunshine, moon is nothing without moonlight, i am nothing without you , you are the light i need so that we can shine brightly in the sky",
    "आप मेरे जिंदगी के गाने की धुन हो जिसके बिना गाना अधूरा लगता था जो आपके आने से पूरा हो गया✨🎶",
    "तन्मय और दृष्टि मिलकर रोशनी भी ले आएंगे हमारे जीवन में 🫣🤭",
    "अगर आप दिया हो तो में आपकी बत्ती दोनों एक दूसरे के बिना नहीं रह सकते और जब साथ आते हैं तो प्रकाश ले आते है✨",
    "Today's your 22nd birthday on 22nd feb, Lucky Golden Birthday that happens once in a lifetime , May this birthday act as the starting point of all positive and fortunate changes in your life and Brings you all the good luck and good health.✨🧿"
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="mb-16 space-y-8 text-center">
        {DEDICATIONS.map((text, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="relative"
          >
            <p className="text-lg md:text-xl font-serif leading-relaxed text-app-accent italic">
              "{text}"
            </p>
            {i < DEDICATIONS.length - 1 && (
              <div className="mt-8 flex justify-center">
                <div className="w-12 h-[1px] bg-app-accent/20" />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="flex items-center gap-3 mb-8">
        <PenLine className="text-app-accent w-6 h-6" />
        <h2 className="text-3xl font-serif">Thoughts & Notes</h2>
      </div>

      <div className="mb-10">
        <div className="relative">
          <textarea
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Type a thought or a message for Drishti..."
            className="w-full p-6 rounded-2xl border border-black/10 bg-white focus:ring-2 focus:ring-app-accent/30 outline-none min-h-[120px] transition-all shadow-sm"
          />
          <button
            onClick={addNote}
            className="absolute bottom-4 right-4 bg-app-accent text-white p-3 rounded-full hover:scale-105 active:scale-95 transition-all shadow-md"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <AnimatePresence>
          {notes.map((note) => (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card p-6 rounded-2xl relative group"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] uppercase tracking-widest text-black/40 font-bold">{note.date}</span>
                <button 
                  onClick={() => deleteNote(note.id)}
                  className="opacity-0 group-hover:opacity-100 text-black/20 hover:text-red-400 transition-all"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <p className="text-app-text leading-relaxed whitespace-pre-wrap">{note.text}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
