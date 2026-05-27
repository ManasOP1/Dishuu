"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Heart = { id: number; x: number; y: number };

export function ClickHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  const spawn = useCallback((e: MouseEvent) => {
    const id = Date.now() + Math.random();
    setHearts((prev) => [...prev.slice(-12), { id, x: e.clientX, y: e.clientY }]);
    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== id));
    }, 1200);
  }, []);

  useEffect(() => {
    window.addEventListener("click", spawn);
    return () => window.removeEventListener("click", spawn);
  }, [spawn]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[80]">
      <AnimatePresence>
        {hearts.map((h) => (
          <motion.span
            key={h.id}
            className="absolute text-lg text-[#f8b4c4]"
            style={{ left: h.x, top: h.y }}
            initial={{ opacity: 1, scale: 0, y: 0 }}
            animate={{ opacity: 0, scale: 1.2, y: -60 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            💕
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
