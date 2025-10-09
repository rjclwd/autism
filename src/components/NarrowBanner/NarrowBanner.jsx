import React, { isValidElement } from "react";
import { motion } from "framer-motion";

/**
 * NarrowBanner (Modular, accepts ReactNode as title)
 *
 * Props:
 * - image: string (required)
 * - mobileImage?: string
 * - title?: ReactNode           // Full custom JSX if provided
 * - heading?: ReactNode         // First line (used only if `title` not provided)
 * - trailingText?: ReactNode    // Second line (default "with Homeopathy")
 * - subtitle?: ReactNode        // Optional smaller line below
 * - overlayOpacity?: number     // default 0.8
 */
export default function NarrowBanner({
  image,
  mobileImage,
  title,
  heading,
  trailingText = "with Homeopathy",
  subtitle = 'Expert homeopathic solutions tailored for your wellness.',
  overlayOpacity = 0.8,
}) {
  const hasCustomTitle = title !== undefined && title !== null;

  const renderHeading = () => {
    if (hasCustomTitle) return null;
    if (isValidElement(heading)) return heading;
    if (typeof heading === "string" && heading.trim()) return heading;
    return "Care";
  };

  const renderTrailing = () => {
    if (hasCustomTitle) return null;
    return isValidElement(trailingText) ? trailingText : <>{trailingText}</>;
  };

  return (
    <section className="relative w-screen overflow-hidden">
      <div className="relative w-full h-[130px] xs:h-[140px] sm:h-[160px] md:h-[220px] lg:h-[260px]">
        <picture>
          {mobileImage && <source media="(max-width: 640px)" srcSet={mobileImage} />}
          <img
            src={import.meta.env.BASE_URL + image}
            alt="Banner"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </picture>

        <div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />

        <div className="relative z-10 h-full max-w-[1600px] mx-auto px-3 sm:px-6 md:px-10 lg:px-16 flex items-center justify-center">
          <div className="text-center">
            {hasCustomTitle ? (
              <div>{title}</div>
            ) : (
              <>
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-white font-heading text-4xl md:text-8xl font-extrabold uppercase leading-tight"
                  style={{ letterSpacing: "0.02em" }}
                >
                  {renderHeading()}
                </motion.h2>

                {trailingText && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.05 }}
                    className="text-accent/90 text-xl md:text-4xl font-heading font-bold uppercase"
                    style={{ marginTop: "0.25rem", letterSpacing: "0.05em" }}
                  >
                    {renderTrailing()}
                  </motion.div>
                )}
              </>
            )}

            {subtitle && (
              <motion.div
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
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
