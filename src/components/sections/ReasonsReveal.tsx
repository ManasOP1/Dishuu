"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { birthdayReasons, SITE } from "@/data/content";
import { ReasonsFooterHearts } from "@/components/effects/ReasonsFooterHearts";
import { easeSmooth } from "@/lib/motion";

export function ReasonsReveal({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0);
  const [cards, setCards] = useState<typeof birthdayReasons>([]);
  const lastCardRef = useRef<HTMLElement | null>(null);
  const allDone = index >= birthdayReasons.length;

  useEffect(() => {
    if (cards.length === 0) return;
    const timer = window.setTimeout(() => {
      lastCardRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }, 300);
    return () => window.clearTimeout(timer);
  }, [cards.length]);

  const handleClick = () => {
    if (allDone) {
      onComplete();
      return;
    }
    setCards((prev) => [...prev, birthdayReasons[index]]);
    setIndex((i) => i + 1);
  };

  return (
    <section className="relative z-10 w-full">
      <div className="mx-auto w-full max-w-lg px-4 pb-[calc(8.5rem+env(safe-area-inset-bottom))] pt-[max(3.5rem,env(safe-area-inset-top))] sm:px-6 sm:pb-36 sm:pt-16">
        <motion.h2
          className="px-2 text-center font-[family-name:var(--font-script)] text-[clamp(1.75rem,7vw,2.5rem)] leading-tight text-[#ff69b4] md:text-5xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeSmooth }}
        >
          Happy Birthday {SITE.name} 💖
        </motion.h2>

        <motion.p
          className="mt-3 px-2 text-center text-sm text-[#8a2be2] sm:mt-4 sm:text-base"
          key={allDone ? "done" : index}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: easeSmooth }}
        >
          {allDone
            ? "Ready for something special?"
            : `Message ${Math.min(index + 1, birthdayReasons.length)} of ${birthdayReasons.length}`}
        </motion.p>

        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:gap-4">
          <AnimatePresence initial={false}>
            {cards.map((reason, i) => (
              <motion.article
                key={reason.id}
                ref={i === cards.length - 1 ? lastCardRef : undefined}
                className="rounded-2xl bg-white/90 p-4 shadow-lg sm:rounded-3xl sm:p-6"
                initial={{ opacity: 0, y: 24, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.95 }}
                transition={{ duration: 0.45, ease: easeSmooth }}
              >
                <p className="text-center text-base leading-relaxed text-[#4a4a4a] sm:text-lg md:text-xl">
                  <span className="mr-1.5 inline-block text-xl sm:mr-2 sm:text-2xl">
                    {reason.emoji}
                  </span>
                  {reason.text}
                </p>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div className="safe-bottom fixed inset-x-0 bottom-0 z-30 border-t border-[#ff69b4]/10 bg-[#fee9f7]/95 px-4 py-4 backdrop-blur-sm sm:px-6 sm:py-5">
        <div className="relative mx-auto flex h-20 w-full max-w-lg items-center justify-center sm:h-24">
          <ReasonsFooterHearts />
          <motion.button
            type="button"
            onClick={handleClick}
            className={`cta-button relative z-10 w-full rounded-full px-6 py-3.5 text-base font-medium text-white sm:w-auto sm:px-10 sm:py-4 sm:text-lg ${
              allDone ? "cta-button--glow" : "cta-button--pulse"
            }`}
            whileTap={{ scale: 0.94 }}
          >
            {allDone ? "Enter Our Storylane 💫" : "Click Here... 💕"}
          </motion.button>
        </div>
      </div>
    </section>
  );
}
