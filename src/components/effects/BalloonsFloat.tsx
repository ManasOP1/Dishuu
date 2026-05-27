"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

const COLORS = ["#ff6b9d", "#f8b4c4", "#ffb6c1", "#ffc0cb", "#d4af37", "#e8ddf5"];

export function BalloonsFloat({ count = 10 }: { count?: number }) {
  const balloons = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: 5 + Math.random() * 90,
        color: COLORS[i % COLORS.length],
        delay: Math.random() * 6,
        duration: 12 + Math.random() * 8,
        size: 28 + Math.random() * 20,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {balloons.map((b) => (
        <motion.div
          key={b.id}
          className="absolute"
          style={{ left: `${b.left}%`, bottom: "-10%" }}
          animate={{
            y: [0, -1200],
            x: [0, Math.sin(b.id) * 60, 0],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            className="rounded-full shadow-lg"
            style={{
              width: b.size,
              height: b.size * 1.15,
              background: `radial-gradient(circle at 30% 30%, ${b.color}, ${b.color}99)`,
              boxShadow: `0 0 30px ${b.color}66`,
            }}
          />
          <div
            className="mx-auto h-16 w-px opacity-40"
            style={{ background: b.color }}
          />
        </motion.div>
      ))}
    </div>
  );
}
