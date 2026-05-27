"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { galleryPhotos, gallerySection } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { easeSmooth } from "@/lib/motion";

export function PhotoGallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const active = galleryPhotos.find((p) => p.src === lightbox);

  return (
    <section id="memories" className="section-padding relative scroll-mt-4">
      <div className="page-container relative z-10 px-0 sm:px-2">
        <SectionHeading
          label={gallerySection.label}
          title={gallerySection.title}
          subtitle={gallerySection.subtitle}
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {galleryPhotos.map((photo, i) => (
            <motion.article
              key={photo.id}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-white/90 p-4 shadow-lg sm:rounded-[20px] sm:p-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.05, duration: 0.45, ease: easeSmooth }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setLightbox(photo.src)}
            >
              <div className="relative mb-3 aspect-[4/3] overflow-hidden rounded-xl sm:mb-4 sm:rounded-[15px]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  loading="lazy"
                />
              </div>
              <p className="font-[family-name:var(--font-script)] text-lg text-[#ff69b4] sm:text-xl">
                {photo.caption}
              </p>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && active && (
          <motion.div
            className="fixed inset-0 z-[150] flex items-end justify-center bg-black/50 p-3 backdrop-blur-sm sm:items-center sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="relative max-h-[min(90dvh,100%)] w-full max-w-lg overflow-y-auto overscroll-contain rounded-t-2xl bg-white p-3 shadow-2xl sm:max-h-[85vh] sm:rounded-2xl sm:p-4"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.3, ease: easeSmooth }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[min(100%,22rem)]">
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  unoptimized
                  className="rounded-xl object-cover"
                  sizes="(max-width: 640px) 100vw, 400px"
                />
              </div>
              <p className="mt-3 text-center font-[family-name:var(--font-script)] text-xl text-[#ff69b4] sm:mt-4 sm:text-2xl">
                {active.caption}
              </p>
              <button
                type="button"
                className="cta-button mt-3 min-h-11 w-full rounded-full py-2.5 text-sm text-white sm:mt-4"
                onClick={() => setLightbox(null)}
              >
                Close ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
