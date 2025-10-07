import React from "react";
import { motion } from "framer-motion";

/**
 * FullWidthNarrowBanner.jsx
 * -------------------------
 * ✅ Full-width (edge-to-edge) banner across all devices
 * ✅ Automatically narrower on mobile
 * ✅ Dark overlay for clear text contrast
 * ✅ Supports optional subtitle & alignment
 *
 * Props:
 * - image (string): Banner image URL
 * - title (string): Main heading text
 * - subtitle? (string): Optional supporting text
 * - align?: 'center' | 'left' | 'right' (default: 'center')
 * - overlayOpacity?: number (default: 0.55)
 */

export default function NarrowBanner({
  image,
  title = "",
  subtitle = "",
  align = "center",
  overlayOpacity = 0.8,
}) {
  const alignClass =
    align === "left"
      ? "items-start text-left"
      : align === "right"
      ? "items-end text-right"
      : "items-center text-center";

  return (
    <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-[100vw] overflow-hidden">
      {/* Banner container with responsive height */}
      <div className="relative w-full md:h-[200px] ">
        {/* Background Image */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
        />

        {/* Dark overlay */}
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />

        {/* Text Overlay */}
        <div
          className={`relative z-10 flex flex-col justify-center h-full px-6 sm:px-10 md:px-16 ${alignClass}`}
        >
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-bgnd uppercase font-heading font-bold text-2xl sm:text-5xl md:text-7xl drop-shadow-md"
          >
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-accent uppercase mt-2 text-sm sm:text-base md:text-lg max-w-2xl"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
