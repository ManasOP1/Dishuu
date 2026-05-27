"use client";

import { motion } from "framer-motion";

const lights = [
  { color: "rgba(255,105,180,0.35)", x: "10%", delay: 0 },
  { color: "rgba(255,182,193,0.4)", x: "35%", delay: 0.5 },
  { color: "rgba(212,175,55,0.3)", x: "60%", delay: 1 },
  { color: "rgba(255,20,147,0.25)", x: "85%", delay: 1.5 },
];

export function PartyLights() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[2] overflow-hidden opacity-70">
      {lights.map((l, i) => (
        <motion.div
          key={i}
          className="absolute top-0 h-full w-[30vw] blur-[100px]"
          style={{
            left: l.x,
            background: `radial-gradient(ellipse at top, ${l.color}, transparent 70%)`,
          }}
          animate={{
            opacity: [0.3, 0.7, 0.4],
            scaleY: [0.8, 1.2, 0.9],
          }}
          transition={{
            duration: 4 + i,
            delay: l.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1/2"
        style={{
          background:
            "linear-gradient(to top, rgba(255,105,180,0.12), transparent)",
        }}
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </div>
  );
}
