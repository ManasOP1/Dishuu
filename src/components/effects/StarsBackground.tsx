"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

export function StarsBackground({ count = 60 }: { count?: number }) {
  const stars = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 4,
    }));
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0">
      {stars.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
          }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: 2 + Math.random() * 3,
            delay: s.delay,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
}
