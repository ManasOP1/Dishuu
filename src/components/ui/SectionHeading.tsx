"use client";

import { motion } from "framer-motion";
import { easeSmooth } from "@/lib/motion";

export function SectionHeading({
  label,
  title,
  subtitle,
}: {
  label?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      className="mb-8 px-2 text-center sm:mb-12 sm:px-0"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: easeSmooth }}
    >
      {label && (
        <p className="mb-2 text-xs font-medium text-[#da70d6] sm:text-sm">
          {label}
        </p>
      )}
      <h2 className="text-balance-wrap font-[family-name:var(--font-script)] text-[clamp(1.75rem,6.5vw,2.75rem)] text-pink-title md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-balance-wrap mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[#666] sm:mt-4 sm:text-base">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
