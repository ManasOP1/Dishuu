"use client";

import { motion } from "framer-motion";

const HEARTS = [
  { emoji: "💕", className: "left-[6%] top-[18%]", delay: 0 },
  { emoji: "💖", className: "right-[8%] top-[22%]", delay: 0.5 },
  { emoji: "♥️", className: "left-[18%] bottom-[28%]", delay: 1 },
  { emoji: "💗", className: "right-[16%] bottom-[32%]", delay: 1.5 },
  { emoji: "🎀", className: "left-[42%] top-[8%]", delay: 0.8 },
  { emoji: "✨", className: "right-[38%] bottom-[12%]", delay: 1.2 },
];

export function ReasonsFooterHearts() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-visible"
      aria-hidden
    >
      {HEARTS.map((h, i) => (
        <motion.span
          key={i}
          className={`absolute text-lg sm:text-xl ${h.className}`}
          animate={{
            opacity: [0.4, 1, 0.4],
            y: [0, -10, 0],
            scale: [0.9, 1.15, 0.9],
          }}
          transition={{
            duration: 2.2,
            delay: h.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {h.emoji}
        </motion.span>
      ))}
    </div>
  );
}
