"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SITE } from "@/data/content";
import { easeSmooth } from "@/lib/motion";

export function EntryGate({ onEnter }: { onEnter: () => void }) {
  const [typed, setTyped] = useState("");
  const fullText =
    "Hey! You're the most adorable person — today is all about you! 💖";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setTyped(fullText.slice(0, i));
        i++;
      } else clearInterval(timer);
    }, 55);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-y-auto overscroll-contain px-4 py-8 sm:px-6 sm:py-10"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.7, ease: easeSmooth }}
    >
      <motion.h1
        className="max-w-[min(100%,20rem)] text-center font-[family-name:var(--font-script)] text-[clamp(2rem,9vw,3.5rem)] leading-tight text-[#ff69b4] sm:max-w-xl sm:text-5xl md:text-7xl"
        style={{ textShadow: "0 0 20px rgba(255,105,180,0.4)" }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", damping: 12, delay: 0.2 }}
      >
        Happy Birthday {SITE.name}💗
      </motion.h1>

      <p className="greeting text-balance-wrap mt-6 min-h-[4.5rem] max-w-[min(100%,24rem)] text-center text-base leading-relaxed text-[#8a2be2] sm:mt-8 sm:min-h-[3rem] sm:text-lg md:text-xl">
        {typed}
        {typed.length < fullText.length && (
          <span className="animate-pulse">|</span>
        )}
      </p>

      <motion.button
        type="button"
        onClick={onEnter}
        className="cta-button mt-8 w-full max-w-xs rounded-full px-6 py-3.5 text-base font-medium text-white sm:mt-12 sm:w-auto sm:max-w-none sm:px-8 sm:py-4 sm:text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, type: "spring" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Click to Enter Our World 💕
      </motion.button>
    </motion.div>
  );
}
