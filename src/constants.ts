import { Type } from "@google/genai";

export interface Memory {
  id: string;
  date: string;
  title: string;
  description: string;
  image?: string;
}

export interface LoveReason {
  id: string;
  text: string;
}

export const INITIAL_MEMORIES: Memory[] = [
  {
    id: '1',
    date: '2023-06-15',
    title: 'The Day We Met',
    description: 'The moment everything changed. I still remember what you were wearing and how your smile lit up the whole room.',
    image: 'https://picsum.photos/seed/love1/800/600'
  },
  {
    id: '2',
    date: '2023-08-20',
    title: 'Our First Trip',
    description: 'Getting lost in the city, finding that tiny cafe, and realizing I never wanted to travel with anyone else but you.',
    image: 'https://picsum.photos/seed/love2/800/600'
  },
  {
    id: '3',
    date: '2024-01-01',
    title: 'New Year\'s Eve',
    description: 'Watching the fireworks and knowing that my only resolution was to love you even more this year.',
    image: 'https://picsum.photos/seed/love3/800/600'
  }
];

export const LOVE_REASONS: string[] = [
  "The way your eyes crinkle when you laugh, Drishti.",
  "How you always know exactly what to say to make me feel better.",
  "Your kindness towards everyone you meet, especially the little things you do.",
  "The way you're so passionate about your dreams, Drishti.",
  "How safe I feel when I'm in your arms.",
  "Your terrible jokes that I secretly find hilarious.",
  "The way you challenge me to be a better person every day.",
  "Your strength and resilience, which I admire so much.",
  "The little dance you do when you're excited.",
  "Simply because you are the most beautiful soul I know, Drishti."
];
