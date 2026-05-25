"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
  const [hovering, setHovering] = useState(false);
  const spring = { stiffness: 400, damping: 28 };
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(
        !!target.closest("button, a, [data-cursor-hover], .cursor-pointer")
      );
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", onOver);
    };
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed z-[95] hidden mix-blend-difference md:block"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      animate={{ scale: hovering ? 2.2 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div
        className={`rounded-full border border-white/80 transition-all ${
          hovering ? "h-3 w-3 bg-white" : "h-2 w-2 bg-white/90"
        }`}
      />
    </motion.div>
  );
}
