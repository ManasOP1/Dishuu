"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function MouseGlow() {
  const [visible, setVisible] = useState(false);
  const spring = { stiffness: 150, damping: 20 };
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };

    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  if (!visible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-[90] hidden md:block"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <div className="h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(248,180,196,0.15)_0%,rgba(212,175,55,0.08)_40%,transparent_70%)] blur-2xl" />
    </motion.div>
  );
}
