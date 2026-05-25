"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FLOATING = ["💖", "✨", "🌸", "💫", "💕", "🎀", "🦋", "⭐"];

/** Spread across viewport — subtle idle float */
const FIXED_FLOATERS = [
  { emoji: "💖", left: 10, top: 15, size: 20 },
  { emoji: "✨", left: 85, top: 22, size: 16 },
  { emoji: "🌸", left: 72, top: 55, size: 22 },
  { emoji: "💫", left: 18, top: 48, size: 18 },
  { emoji: "💕", left: 50, top: 72, size: 24 },
  { emoji: "🎀", left: 88, top: 78, size: 17 },
  { emoji: "💗", left: 28, top: 82, size: 19 },
  { emoji: "⭐", left: 62, top: 28, size: 15 },
];

export function RomanticBackground() {
  const [mounted, setMounted] = useState(false);
  const [floaters, setFloaters] = useState<
    { id: number; emoji: string; left: number; top: number; size: number }[]
  >([]);

  useEffect(() => {
    setMounted(true);

    const spawn = () => {
      const id = Date.now() + Math.random();
      setFloaters((prev) => [
        ...prev.slice(-12),
        {
          id,
          emoji: FLOATING[Math.floor(Math.random() * FLOATING.length)],
          left: 5 + Math.random() * 90,
          top: 10 + Math.random() * 75,
          size: 16 + Math.random() * 18,
        },
      ]);
      setTimeout(() => {
        setFloaters((prev) => prev.filter((f) => f.id !== id));
      }, 9000);
    };

    spawn();
    const interval = setInterval(spawn, 1600);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="romantic-gradient-bg fixed inset-0 -z-10" />
      <div className="magic-sparkles pointer-events-none fixed inset-0 -z-[5]" />
      {mounted && (
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          {FIXED_FLOATERS.map((f, i) => (
            <motion.span
              key={`fixed-${i}`}
              className="absolute will-change-transform"
              style={{
                left: `${f.left}%`,
                top: `${f.top}%`,
                fontSize: f.size,
              }}
              animate={{
                opacity: [0.25, 0.65, 0.25],
                y: [0, -28, 0],
                x: [0, i % 2 === 0 ? 12 : -12, 0],
              }}
              transition={{
                duration: 3.5 + i * 0.35,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {f.emoji}
            </motion.span>
          ))}
          {floaters.map((f) => (
            <motion.span
              key={f.id}
              className="absolute will-change-transform"
              style={{
                left: `${f.left}%`,
                top: `${f.top}%`,
                fontSize: f.size,
              }}
              initial={{ opacity: 0, y: 0, scale: 0.8 }}
              animate={{
                opacity: [0, 0.85, 0.6, 0],
                y: [0, -120, -280],
                x: [0, (f.id % 2 === 0 ? 1 : -1) * 40],
                scale: [0.8, 1, 0.9],
              }}
              transition={{ duration: 9, ease: "easeOut" }}
            >
              {f.emoji}
            </motion.span>
          ))}
        </div>
      )}
    </>
  );
}
