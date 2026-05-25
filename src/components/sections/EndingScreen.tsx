"use client";

import { motion } from "framer-motion";
import { SITE } from "@/data/content";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function EndingScreen() {
  return (
    <section className="section-padding relative text-center">
      <motion.div
        className="mx-auto w-full max-w-2xl rounded-2xl bg-white/40 px-4 py-8 backdrop-blur-md sm:rounded-3xl sm:px-6 sm:py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp}>
          <motion.h2
            className="text-balance-wrap px-1 font-[family-name:var(--font-script)] text-[clamp(1.75rem,6vw,2.5rem)] text-[#ff69b4] md:text-5xl"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Thank You for the Memories
          </motion.h2>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="text-balance-wrap mt-5 text-sm leading-relaxed text-[#4a4a4a] sm:mt-6 sm:text-base md:text-lg"
        >
          Every laugh, every smile, every moment — you make life brighter,{" "}
          {SITE.name}. On your birthday, I wish you endless happiness, love, and
          success. Keep shining and spreading your beautiful energy. ✨
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-6 font-[family-name:var(--font-script)] text-xl text-[#ff69b4] sm:mt-8 sm:text-2xl"
        >
          Until we celebrate again 💝
        </motion.p>
      </motion.div>
    </section>
  );
}
