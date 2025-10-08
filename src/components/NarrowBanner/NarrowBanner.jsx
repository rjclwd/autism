import React from "react";
import { motion } from "framer-motion";

/**
 * NarrowBanner (Two-line heading, optional autism color word)
 *
 * Props:
 * - image: string (required)
 * - mobileImage?: string
 * - title?: string                // e.g., "Autism Care with Homeopathy"
 * - heading?: string              // e.g., "Autism Care" (preferred explicit)
 * - trailingText?: string         // default "with Homeopathy" (always small, second line)
 * - subtitle?: string             // optional small line under heading block
 * - overlayOpacity?: number       // default 0.8
 * - isAutism?: boolean            // injects colorful "AUTISM" into heading
 */
export default function NarrowBanner({
  image,
  mobileImage,
  title = "",
  heading,                       // optional explicit first line
  trailingText = "with Homeopathy",
  subtitle = "",
  overlayOpacity = 0.8,
  isAutism = false,
}) {
  // Extract heading + trailing if only "title" is provided.
  // Prefer explicit "heading" if passed.
  const { topLine, bottomLine } = (() => {
    if (heading && heading.trim()) {
      return { topLine: heading.trim(), bottomLine: trailingText };
    }
    const raw = title || "";
    const match = raw.split(/with\s+homeopathy/i);
    if (match.length > 1) {
      return { topLine: match[0].trim(), bottomLine: "with Homeopathy" };
    }
    return { topLine: raw || "Care", bottomLine: "with Homeopathy" };
  })();

  // Replace first occurrence of "autism" with colorful word
  const renderTopLine = () => {
    if (!isAutism) return topLine;
    const lower = topLine.toLowerCase();
    const target = "autism";
    const idx = lower.indexOf(target);
    if (idx === -1) return topLine;

    const before = topLine.slice(0, idx);
    const after = topLine.slice(idx + target.length);
    return (
      <>
        {before}
        <ColorfulAutismWord className="align-baseline" />
        {after}
      </>
    );
  };

  return (
    <section className="relative w-screen overflow-hidden">
      {/* Banner Height: tuned to devices */}
      <div className="relative w-full h-[130px] xs:h-[140px] sm:h-[160px] md:h-[220px] lg:h-[260px]">
        {/* Background with optional mobile source */}
        <picture>
          {mobileImage && <source media="(max-width: 640px)" srcSet={mobileImage} />}
          <img
            src={image}
            alt={typeof title === "string" ? title : heading || "Banner"}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </picture>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />

        {/* Content: centered block */}
        <div className="relative z-10 h-full max-w-[1600px] mx-auto px-3 sm:px-6 md:px-10 lg:px-16 flex items-center justify-center">
          <div className="text-center">
            {/* Top Line (big) */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white font-heading text-4xl md:text-8xl font-extrabold uppercase leading-tight"
              style={{
                letterSpacing: "0.02em",
              }}
            >
              {renderTopLine()}
            </motion.h2>

            {/* Bottom Line (smaller) */}
            {bottomLine && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.05 }}
                className="text-accent/90 text-xl md:text-4xl font-heading font-bold uppercase"
                style={{
                  marginTop: "0.25rem",
                  letterSpacing: "0.05em",
                }}
              >
                {bottomLine}
              </motion.div>
            )}

            {/* Optional smaller subtitle (third line) */}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.1 }}
                className="text-white/80 font-semibold uppercase"
                style={{
                  fontSize: "clamp(0.7rem, 2.2vw, 1rem)",
                  marginTop: "0.2rem",
                }}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -----------------------------
   Colorful AUTISM word inline
------------------------------ */
function ColorfulAutismWord({ className = "", style = {} }) {
  const colors = ["#2563EB", "#F59E0B", "#10B981", "#EF4444", "#A855F7", "#0EA5E9"];
  const letters = ["A", "U", "T", "I", "S", "M"];

  return (
    <span
      aria-label="Autism"
      className={`inline-flex items-baseline gap-[2px] sm:gap-[3px] ${className}`}
      style={{ lineHeight: 1, ...style }}
    >
      {letters.map((ch, i) => (
        <span
          key={i}
          className="font-heading font-extrabold uppercase drop-shadow-sm"
          style={{ color: colors[i], lineHeight: 1 }}
        >
          {ch}
        </span>
      ))}
    </span>
  );
}
