"use client";

import { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Piece = {
  id: number;
  x: number;
  y: number;
  color: string;
  angle: number;
};

const COLORS = ["#f8b4c4", "#e8ddf5", "#d4af37", "#ffe8d6", "#fce4ec"];

export function useConfetti() {
  const [pieces, setPieces] = useState<Piece[]>([]);

  const burst = useCallback((x?: number, y?: number) => {
    const cx = x ?? window.innerWidth / 2;
    const cy = y ?? window.innerHeight / 2;
    const newPieces: Piece[] = Array.from({ length: 48 }, (_, i) => ({
      id: Date.now() + i,
      x: cx,
      y: cy,
      color: COLORS[i % COLORS.length],
      angle: Math.random() * Math.PI * 2,
    }));
    setPieces((prev) => [...prev, ...newPieces]);
    setTimeout(() => {
      setPieces((prev) =>
        prev.filter((p) => !newPieces.find((n) => n.id === p.id))
      );
    }, 2000);
  }, []);

  return { pieces, burst };
}

export function ConfettiLayer({ pieces }: { pieces: Piece[] }) {
  return (
    <div className="pointer-events-none fixed inset-0 z-[85]">
      <AnimatePresence>
        {pieces.map((p) => {
          const dist = 80 + Math.random() * 120;
          const dx = Math.cos(p.angle) * dist;
          const dy = Math.sin(p.angle) * dist + 60;
          return (
            <motion.div
              key={p.id}
              className="absolute h-2 w-1.5 rounded-sm"
              style={{
                left: p.x,
                top: p.y,
                backgroundColor: p.color,
              }}
              initial={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }}
              animate={{
                opacity: 0,
                x: dx,
                y: dy,
                rotate: Math.random() * 720,
                scale: 0.3,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.6, ease: "easeOut" }}
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
}
