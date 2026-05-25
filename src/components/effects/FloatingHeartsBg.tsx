"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

export function FloatingHeartsBg({ count = 8 }: { count?: number }) {
  const hearts = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: 10 + Math.random() * 80,
      delay: Math.random() * 8,
      duration: 14 + Math.random() * 10,
      size: 12 + Math.random() * 16,
    }));
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          className="absolute text-[#f8b4c4]"
          style={{ left: `${h.left}%`, bottom: "-5%", fontSize: h.size }}
          animate={{
            y: [0, -900],
            x: [0, Math.sin(h.id) * 40],
            opacity: [0, 0.6, 0],
            rotate: [0, 15, -10],
          }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ♡
        </motion.div>
      ))}
    </div>
  );
}
