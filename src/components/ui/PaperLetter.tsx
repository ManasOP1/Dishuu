"use client";

import { motion } from "framer-motion";

export function PaperLetter({
  title,
  children,
  label,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  label?: string;
  className?: string;
}) {
  return (
    <motion.div
      className={`relative mx-auto max-w-2xl ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Shadow stack — paper depth */}
      <div
        className="absolute inset-0 translate-x-2 translate-y-2 rounded-sm bg-[#e8dcc8]/80"
        aria-hidden
      />
      <div
        className="absolute inset-0 translate-x-1 translate-y-1 rounded-sm bg-[#f5f0e6]"
        aria-hidden
      />

      <article className="paper-sheet relative rounded-sm border-[3px] border-[#8B6914] bg-[#fffef8] px-8 py-10 shadow-[0_12px_40px_rgba(139,105,20,0.15)] md:px-12 md:py-14">
        {/* Inner gold frame */}
        <div
          className="pointer-events-none absolute inset-3 rounded-sm border border-[#d4af37]/60"
          aria-hidden
        />

        {/* Subtle lined paper texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(transparent, transparent 27px, #8B6914 28px)",
          }}
          aria-hidden
        />

        {label && (
          <p className="relative text-center text-[10px] font-semibold tracking-[0.35em] text-[#8B6914] uppercase">
            {label}
          </p>
        )}

        <h2 className="relative mt-2 text-center font-[family-name:var(--font-script)] text-4xl text-[#5c4033] md:text-5xl">
          {title}
        </h2>

        <div className="relative mt-8 space-y-5 text-[#3d3429]">{children}</div>
      </article>
    </motion.div>
  );
}
