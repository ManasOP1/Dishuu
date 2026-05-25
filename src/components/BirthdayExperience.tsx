"use client";

import { useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { RomanticBackground } from "@/components/effects/RomanticBackground";
import { RosePetals } from "@/components/effects/RosePetals";
import { EntryGate } from "@/components/sections/EntryGate";
import { ReasonsReveal } from "@/components/sections/ReasonsReveal";
import { ChildhoodQuoteSection } from "@/components/sections/ChildhoodQuoteSection";
import { PhotoGallery } from "@/components/sections/PhotoGallery";
import { EndingScreen } from "@/components/sections/EndingScreen";
import { ConfettiLayer, useConfetti } from "@/components/effects/ConfettiBurst";
import { easeSmooth } from "@/lib/motion";

type Phase = "gate" | "reasons" | "story";

export function BirthdayExperience() {
  const [phase, setPhase] = useState<Phase>("gate");
  const { pieces, burst } = useConfetti();

  useEffect(() => {
    document.documentElement.classList.remove("lenis");
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";

    if (phase === "gate" || phase === "reasons") {
      document.body.style.overflowY = "auto";
      document.documentElement.style.overflowY = "auto";
    }
  }, [phase]);

  const enterWorld = useCallback(() => {
    burst();
    setPhase("reasons");
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [burst]);

  const enterStory = useCallback(() => {
    burst();
    setPhase("story");
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
  }, [burst]);

  return (
    <div className="relative w-full overflow-x-clip">
      <RomanticBackground />
      <RosePetals />
      <ConfettiLayer pieces={pieces} />

      <AnimatePresence mode="wait">
        {phase === "gate" && <EntryGate key="gate" onEnter={enterWorld} />}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {phase === "reasons" && (
          <motion.div
            key="reasons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: easeSmooth }}
          >
            <ReasonsReveal onComplete={enterStory} />
          </motion.div>
        )}
      </AnimatePresence>

      {phase === "story" && (
        <SmoothScrollProvider enabled>
          <AnimatePresence mode="wait">
            <motion.main
              key="story"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: easeSmooth }}
              className="relative w-full overflow-x-clip"
            >
              <ChildhoodQuoteSection />
              <PhotoGallery />
              <EndingScreen />
            </motion.main>
          </AnimatePresence>
        </SmoothScrollProvider>
      )}
    </div>
  );
}
