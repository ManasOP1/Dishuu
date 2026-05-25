"use client";

import { motion } from "framer-motion";

/** Cute hearts fixed around the childhood / once-upon block — SSR-safe */
const HEARTS = [
  { emoji: "💖", className: "left-0 top-0 sm:-left-6", delay: 0, size: "text-lg sm:text-2xl" },
  { emoji: "💕", className: "right-0 top-1 sm:-right-6", delay: 0.4, size: "text-base sm:text-xl" },
  { emoji: "♥️", className: "left-[22%] -top-4 sm:-top-8", delay: 0.8, size: "text-sm sm:text-lg" },
  { emoji: "💗", className: "right-[20%] -top-3 sm:-top-7", delay: 1.2, size: "text-sm sm:text-lg" },
  { emoji: "💝", className: "left-0 top-[42%] sm:-left-10", delay: 0.6, size: "text-base sm:text-2xl" },
  { emoji: "💕", className: "right-0 top-[48%] sm:-right-8", delay: 1, size: "text-lg sm:text-2xl" },
  { emoji: "✨", className: "left-[8%] bottom-[18%]", delay: 1.4, size: "text-xs sm:text-base" },
  { emoji: "💖", className: "right-[8%] bottom-[22%]", delay: 0.2, size: "text-xs sm:text-base" },
  { emoji: "🌸", className: "left-1/2 -bottom-2 -translate-x-1/2 sm:-bottom-5", delay: 0.9, size: "text-base sm:text-lg" },
];

export function OnceUponHearts() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-[1] overflow-hidden sm:overflow-visible"
      aria-hidden
    >
      {HEARTS.map((h, i) => (
        <motion.span
          key={i}
          className={`absolute select-none ${h.className} ${h.size}`}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{
            opacity: [0.55, 0.95, 0.55],
            scale: [1, 1.12, 1],
            y: [0, -6, 0],
          }}
          transition={{
            duration: 2.8 + (i % 3) * 0.4,
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
