/**
 * CUSTOMIZATION GUIDE
 * Photos live in /public/images/photos/
 * Edit captions and birthday message below
 */

import { photoPath } from "@/lib/photoPath";

const PHOTOS = "/images/photos";

export const SITE = {
  name: "Dishuu",
};

/** Childhood photo — shown with birthday message (not in main gallery) */
export const childhoodPhoto = {
  src: photoPath(PHOTOS, "Small Dishu.jpeg"),
  alt: "Little Dishuu — childhood",
  caption: "Little Dishuu — always precious, always special 💕",
  label: "Once upon a time…",
};

/** Birthday message below childhood photo — edit here */
export const birthdayMessage = {
  title: "Happy Birthday Dishuu 🎂✨",
  paragraphs: [
    "26th May is not just a normal day for me, it is the day when the most beautiful and precious girl came into this world. The day I met you became the best day of my entire life because you are truly a wonderful person with the purest heart and the sweetest smile.",
    "You are a real Laxmi for your mom and dad, bringing happiness and positivity everywhere you go. And for me, you will always be the prettiest, most beautiful, and most special girl forever 💖",
    "May this birthday bring endless happiness, success, beautiful memories, and everything your heart wishes for. Keep smiling always because your smile makes every moment feel better and brighter ✨",
    "You will always be a very special person for me, and you are the most precious thing and the most precious person in my life 💕",
  ],
};

/** Click-through messages — edit text & emoji */
export const birthdayReasons = [
  {
    id: "r1",
    emoji: "🌟",
    text: "You're such a kind and wonderful person — I feel lucky to celebrate you today. 💖",
  },
  {
    id: "r2",
    emoji: "🌸",
    text: "May your day be filled with love, laughter, and endless joy. Happy birthday! 🥳",
  },
  {
    id: "r3",
    emoji: "✨",
    text: "Wishing you success, happiness, and everything your beautiful heart desires.",
  },
  {
    id: "r4",
    emoji: "💕",
    text: "Stay the amazing girl you are — always spreading positivity and making everyone smile.",
  },
];

/** Gallery section — photos are only of Dishuu */
export const gallerySection = {
  label: "For you",
  title: "Her Beautiful Moments",
  subtitle:
    "Every frame is just you — and every one reminds me how precious you are, Dishuu ✨",
};

/** 6 memory photos (childhood photo is separate above) */
export const galleryPhotos = [
  {
    id: "1",
    src: photoPath(PHOTOS, "WhatsApp Image 2026-05-27 at 1.10.00 PM.jpeg"),
    alt: "Dishuu memory 1",
    caption: "A beautiful moment",
  },
  {
    id: "2",
    src: photoPath(PHOTOS, "WhatsApp Image 2026-05-25 at 11.02.13 PM.jpeg"),
    alt: "Dishuu memory 2",
    caption: "That smile I adore",
  },
  {
    id: "3",
    src: photoPath(PHOTOS, "WhatsApp Image 2026-05-25 at 11.02.13 PM (2).jpeg"),
    alt: "Dishuu memory 3",
    caption: "Pure happiness",
  },
  {
    id: "4",
    src: photoPath(PHOTOS, "WhatsApp Image 2026-05-25 at 11.02.13 PM (3).jpeg"),
    alt: "Dishuu memory 4",
    caption: "Unforgettable",
  },
  {
    id: "5",
    src: photoPath(PHOTOS, "WhatsApp Image 2026-05-25 at 11.02.14 PM.jpeg"),
    alt: "Dishuu memory 5",
    caption: "Radiating joy",
  },
  {
    id: "6",
    src: photoPath(PHOTOS, "WhatsApp Image 2026-05-25 at 11.26.06 PM.jpeg"),
    alt: "Dishuu memory 6",
    caption: "A day to remember",
  },
];

export const secretSurpriseMessage = {
  title: "A Little Secret For You",
  body: `Replace this message with your personal surprise note for Dishuu.`,
};
