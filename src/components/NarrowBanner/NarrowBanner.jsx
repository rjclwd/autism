import React from "react";
import { motion } from "framer-motion";

/**
 * NarrowBanner (LTR, fully responsive)
 * - Always a single horizontal row (no stacking)
 * - Left image scales to maximum possible height without crowding on mobile
 * - Center text scales responsively
 * - Right "AUTISM" is colorful and adaptive
 *
 * Props:
 * - image (string): desktop banner image
 * - mobileImage? (string): optional mobile-optimized image
 * - title (string)
 * - subtitle? (string)
 * - overlayOpacity? (number) default 0.8
 */
export default function NarrowBanner({
  image,
  mobileImage,
  title = "",
  subtitle = "",
  overlayOpacity = 0.8,
}) {
  const autismColors = ["#2563EB", "#F59E0B", "#10B981", "#EF4444", "#A855F7", "#0EA5E9"];
  const letters = ["A", "U", "T", "I", "S", "M"];

  return (
    <section className="relative w-screen overflow-hidden">
      {/* Banner height tuned for devices */}
      <div className="relative w-full h-[130px] xs:h-[140px] sm:h-[160px] md:h-[220px] lg:h-[260px]">
        {/* Background Image with optional mobile source */}
        <picture>
          {mobileImage && (
            <source media="(max-width: 640px)" srcSet={mobileImage} />
          )}
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </picture>

        {/* Dark overlay for clear text */}
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />

        {/* Foreground content */}
        <div
          className="relative z-10 h-full max-w-[1600px] mx-auto px-3 sm:px-6 md:px-10 lg:px-16
                     flex items-center justify-between gap-[6px] sm:gap-3 md:gap-6 flex-nowrap"
        >
          {/* LEFT: Big image (keeps max possible height) */}
          <div
            className="flex-shrink-0 h-full flex items-center justify-center"
            style={{ width: "clamp(64px, 22vw, 220px)" }} /* Adjust width smoothly */
          >
            <img
              src={import.meta.env.BASE_URL + "/autismchild.png"}
              alt="Autism Child"
              className="h-[92%] sm:h-[94%] md:h-[96%] w-auto object-contain drop-shadow-lg"
              loading="lazy"
            />
          </div>

          {/* CENTER: Title + Subtitle (responsive text, never collapses) */}
          <div className="min-w-0 flex-1 text-center px-2 sm:px-4">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white font-heading font-extrabold uppercase"
              style={{
                fontSize: "clamp(1rem, 4.4vw, 3.3rem)", // Grow with viewport
                whiteSpace: "wrap",
              }}
              title={title}
            >
              {title}
            </motion.h2>

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-accent/90 font-semibold"
                style={{
                  fontSize: "clamp(0.72rem, 2.2vw, 1.15rem)",
                  marginTop: "0.2rem",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
                title={subtitle}
              >
                {subtitle}
              </motion.p>
            )}
          </div>

          {/* RIGHT: “AUTISM” in 6 colors */}
          <div
            className="flex-shrink-0 flex items-center justify-center pr-1 sm:pr-2"
            style={{ width: "clamp(64px, 20vw, 240px)" }} // Responsive width for the word
          >
            <div className="flex gap-[1px] sm:gap-[2px] md:gap-[3px] flex-nowrap">
              {letters.map((ch, i) => (
                <span
                  key={i}
                  className="font-heading font-extrabold uppercase drop-shadow-sm"
                  style={{
                    color: autismColors[i],
                    fontSize: "clamp(0.95rem, 5.2vw, 3rem)",
                    lineHeight: 1,
                  }}
                >
                  {ch}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
