"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

const COLORS = ["#ff6b9d", "#ffb6c1", "#d4af37", "#fff", "#ff1493", "#ffc0cb"];

export function AmbientConfetti({ count = 35 }: { count?: number }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        color: COLORS[i % COLORS.length],
        delay: Math.random() * 10,
        duration: 8 + Math.random() * 12,
        w: 4 + Math.random() * 6,
        h: 2 + Math.random() * 4,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-sm"
          style={{
            left: `${p.left}%`,
            width: p.w,
            height: p.h,
            backgroundColor: p.color,
            top: -20,
          }}
          animate={{
            y: ["0vh", "110vh"],
            rotate: [0, 360, 720],
            x: [0, 30, -20, 10],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
