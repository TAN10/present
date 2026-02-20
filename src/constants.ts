export interface Moment {
  id: string;
  date: string;
  title: string;
  description: string;
  image?: string;
}

export const INITIAL_MOMENTS: Moment[] = [
  {
    id: '1',
    date: '2025-12-14',
    title: 'The Beginning',
    description: 'The day when we committed ourselves unknowingly to each other',
    image: 'https://i.ibb.co/fzN3WxL9/Whats-App-Image-2026-02-19-at-20-51-07.jpg'
  },
  {
    id: '2',
    date: '2026-01-15',
    title: 'A Special Day',
    description: 'Just one of those days that reminded me why our connection is so unique.',
    image: 'https://i.ibb.co/zHxf7bcQ/Whats-App-Image-2026-02-19-at-20-51-06.jpg'
  }
];

export const THOUGHTS: string[] = [
  "I wanted to create this space to share some of my thoughts with you...",
  "I'm so grateful for the time we spend together.",
  "Your perspective on things always inspires me.",
  "Thank you for being such a wonderful presence in my life.",
  "Wishing you the happiest of birthdays, Drishti!"
];

// Add your image URLs here for the gallery
export const GALLERY_IMAGES: string[] = [
  "https://i.ibb.co/HfK5yDsz/Whats-App-Image-2026-02-19-at-17-16-51-1.jpg",
  "https://i.ibb.co/PzxvjBDf/Whats-App-Image-2026-02-19-at-17-16-51.jpg",
  "https://i.ibb.co/WNcv96wc/Whats-App-Image-2026-02-19-at-17-16-52-1.jpg",
  "https://i.ibb.co/ynJJw3GM/Whats-App-Image-2026-02-19-at-17-16-52-2.jpg",
  "https://i.ibb.co/Kk2tmDP/Whats-App-Image-2026-02-19-at-17-16-52.jpg",
  "https://i.ibb.co/GfVGkWJQ/Whats-App-Image-2026-02-19-at-17-16-53-1.jpg",
  "https://i.ibb.co/bRdHDNjP/Whats-App-Image-2026-02-19-at-17-16-53.jpg",
  "https://i.ibb.co/RTdj99TQ/Whats-App-Image-2026-02-19-at-17-16-54.jpg",
  "https://i.ibb.co/LXD8Tq0K/Whats-App-Image-2026-02-19-at-17-16-55-1.jpg",
  "https://i.ibb.co/21t8LzgY/Whats-App-Image-2026-02-19-at-17-16-55.jpg",
  "https://i.ibb.co/xSTWDj9J/Whats-App-Image-2026-02-19-at-17-16-56-2.jpg",
  "https://i.ibb.co/4bKrJHV/Whats-App-Image-2026-02-19-at-17-16-56.jpg",
  "https://i.ibb.co/S740hR3v/Whats-App-Image-2026-02-19-at-17-16-57-2.jpg",
  "https://i.ibb.co/W48FNyrb/Whats-App-Image-2026-02-19-at-17-16-57.jpg",
  "https://i.ibb.co/nN2LyRBH/Whats-App-Image-2026-02-19-at-17-16-50.jpg",
  "https://i.ibb.co/7NJbg8pm/Whats-App-Image-2026-02-19-at-17-24-45.jpg",
];
