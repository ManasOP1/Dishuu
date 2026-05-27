"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Petal = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  rotate: number;
  size: number;
  drift: number;
};

function buildPetals(count: number): Petal[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 12,
    duration: Math.random() * 10 + 14,
    rotate: Math.random() * 360,
    size: Math.random() * 10 + 8,
    drift: (Math.random() - 0.5) * 100,
  }));
}

export function RosePetals({
  countDesktop = 26,
  countMobile = 14,
}: {
  countDesktop?: number;
  countMobile?: number;
}) {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const apply = () => {
      const mobile = window.matchMedia("(max-width: 640px)").matches;
      setPetals(buildPetals(mobile ? countMobile : countDesktop));
    };

    apply();
    const mq = window.matchMedia("(max-width: 640px)");
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [countDesktop, countMobile]);

  if (petals.length === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="absolute opacity-50"
          style={{
            left: `${p.left}%`,
            top: -24,
            width: p.size,
            height: p.size * 1.4,
          }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, p.drift],
            rotate: [p.rotate, p.rotate + 280],
            opacity: [0, 0.55, 0.4, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg viewBox="0 0 24 32" fill="none" className="h-full w-full drop-shadow-sm">
            <path
              d="M12 2C8 8 4 14 6 22C7 26 10 28 12 30C14 28 17 26 18 22C20 14 16 8 12 2Z"
              fill={`url(#petal-${p.id})`}
            />
            <defs>
              <linearGradient id={`petal-${p.id}`} x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#ffb7c5" />
                <stop offset="0.5" stopColor="#f4a0b8" />
                <stop offset="1" stopColor="#e8a0c8" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
