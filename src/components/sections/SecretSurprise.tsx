"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { secretSurpriseMessage } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FloatingParticles } from "@/components/effects/FloatingParticles";

export function SecretSurprise() {
  const [open, setOpen] = useState(false);

  return (
    <section id="surprise" className="section-padding relative min-h-[70vh]">
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={
          open
            ? {
                background: [
                  "radial-gradient(circle at 50% 50%, rgba(212,175,55,0.08), transparent)",
                  "radial-gradient(circle at 50% 50%, rgba(248,180,196,0.15), transparent)",
                ],
              }
            : {}
        }
        transition={{ duration: 2, repeat: open ? Infinity : 0, repeatType: "reverse" }}
      />
      <FloatingParticles count={30} />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <SectionHeading label="Bash Exclusive" title="Your Secret Surprise" />

        <div className="flex flex-col items-center">
          <motion.button
            type="button"
            data-cursor-hover
            onClick={() => setOpen(true)}
            disabled={open}
            className="relative focus:outline-none disabled:pointer-events-none"
            whileHover={!open ? { scale: 1.05 } : {}}
            whileTap={!open ? { scale: 0.98 } : {}}
          >
            <motion.div
              className="relative"
              animate={open ? { y: -20, scale: 0.9 } : { y: [0, -8, 0] }}
              transition={
                open
                  ? { duration: 0.8 }
                  : { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }
            >
              {!open && (
                <motion.div
                  className="absolute -inset-8 rounded-full bg-[#d4af37]/20 blur-3xl"
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}

              <div className="relative">
                <motion.div
                  className="mx-auto h-32 w-36 rounded-t-lg bg-gradient-to-b from-[#f8b4c4] to-[#e8ddf5] shadow-lg"
                  animate={open ? { rotateX: -120, opacity: 0 } : {}}
                  style={{ transformOrigin: "bottom center" }}
                  transition={{ duration: 0.8 }}
                />
                <div className="mx-auto h-24 w-40 rounded-b-xl bg-gradient-to-b from-[#d4af37] to-[#b8942e] shadow-[0_20px_60px_rgba(212,175,55,0.3)]" />
                <div className="absolute -top-4 left-1/2 h-8 w-16 -translate-x-1/2 rounded-full border-4 border-[#d4af37] bg-transparent" />
              </div>
            </motion.div>

            {!open && (
              <p className="mt-8 text-sm tracking-widest text-white/50 uppercase">
                Tap to open
              </p>
            )}
          </motion.button>

          <AnimatePresence>
            {open && (
              <>
                {Array.from({ length: 20 }).map((_, i) => (
                  <motion.span
                    key={i}
                    className="pointer-events-none absolute text-[#f8b4c4]"
                    initial={{
                      opacity: 1,
                      x: 0,
                      y: 0,
                      scale: 0,
                    }}
                    animate={{
                      opacity: 0,
                      x: (Math.random() - 0.5) * 300,
                      y: (Math.random() - 0.5) * 300 - 100,
                      scale: 1.5,
                    }}
                    transition={{ duration: 1.2, delay: i * 0.03 }}
                  >
                    ✦
                  </motion.span>
                ))}

                <motion.div
                  className="glass-strong glow-gold mt-12 rounded-3xl p-10 text-left"
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.9 }}
                >
                  <h3 className="font-[family-name:var(--font-display)] text-3xl text-gradient-gold">
                    {secretSurpriseMessage.title}
                  </h3>
                  <p className="mt-6 whitespace-pre-line text-base leading-relaxed text-white/70">
                    {secretSurpriseMessage.body}
                  </p>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
