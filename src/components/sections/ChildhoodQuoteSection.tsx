"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { childhoodPhoto, birthdayMessage } from "@/data/content";
import { OnceUponHearts } from "@/components/effects/OnceUponHearts";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function ChildhoodQuoteSection() {
  return (
    <section
      id="childhood-quote"
      className="section-padding relative scroll-mt-4"
    >
      <motion.div
        className="relative z-10 mx-auto w-full max-w-2xl px-2 sm:px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={staggerContainer}
      >
        <motion.div
          variants={fadeUp}
          className="relative mx-auto mb-4 w-full max-w-[min(100%,20rem)] px-6 py-6 sm:max-w-[340px] sm:px-10 sm:py-8 md:px-14"
        >
          <OnceUponHearts />
          <p className="relative z-10 mb-6 text-center text-xs font-medium tracking-[0.14em] text-[#da70d6] uppercase sm:mb-8 sm:text-sm sm:tracking-[0.2em]">
            {childhoodPhoto.label}
          </p>
          <div className="relative z-10 mx-auto w-full max-w-[min(100%,17.5rem)] sm:max-w-[280px]">
            <div className="rounded-sm bg-white p-2.5 pb-10 shadow-[0_20px_50px_rgba(255,105,180,0.25)] sm:p-3 sm:pb-12">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[#fdf8f5]">
                <Image
                  src={childhoodPhoto.src}
                  alt={childhoodPhoto.alt}
                  fill
                  unoptimized
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 85vw, 280px"
                  priority
                />
              </div>
              <p className="mt-3 text-center font-[family-name:var(--font-script)] text-lg text-[#ff69b4] sm:mt-4 sm:text-xl">
                {childhoodPhoto.caption}
              </p>
            </div>
            <div className="absolute -right-1 -top-1 z-10 text-xl sm:-right-2 sm:-top-2 sm:text-2xl">
              🎀
            </div>
          </div>
        </motion.div>

        <motion.article
          variants={fadeUp}
          className="relative mt-8 rounded-2xl border border-[#ff69b4]/20 bg-white/70 px-4 py-8 shadow-lg backdrop-blur-sm sm:mt-12 sm:rounded-3xl sm:px-6 sm:py-10 md:px-8 md:py-12"
        >
          <div className="absolute -left-1 top-6 h-12 w-1 rounded-full bg-gradient-to-b from-[#ff69b4] to-[#d4af37]/50 sm:-left-2 sm:top-8 sm:h-16" />

          <h2 className="text-balance-wrap px-1 text-center font-[family-name:var(--font-script)] text-[clamp(1.5rem,6vw,2.25rem)] leading-tight text-[#ff69b4] md:text-4xl">
            {birthdayMessage.title}
          </h2>

          <motion.div
            className="mt-6 space-y-5 sm:mt-8 sm:space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-24px" }}
            variants={staggerContainer}
          >
            {birthdayMessage.paragraphs.map((paragraph, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="text-balance-wrap text-center text-sm leading-relaxed text-[#4a4a4a] sm:text-base md:text-lg"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </motion.article>
      </motion.div>
    </section>
  );
}
