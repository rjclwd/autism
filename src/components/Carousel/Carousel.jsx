import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel({
  images = [],
  interval = 4000,
  // 21:9 perfect for 2520×1080
  aspect = "aspect-[21/9]",
  responsiveAspect = false, // optional: 4/5 → 16/9 → 21/9
  autoPlay = true,
  pauseOnHover = true,
  showArrows = true,
  showDots = true,
  rounded = "rounded-xl",
  fullWidth = true,
  objectPosition = "center",
  // ✅ NEW: show full image on mobile (letterboxed), cover on larger screens
  containOnMobile = true,
}) {
  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [inView, setInView] = useState(true);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);
  const rafRef = useRef(null);
  const lastTickRef = useRef(0);
  const prefersReducedMotion = useReducedMotion();

  const len = Math.max(images.length, 1);

  const goTo = (i) => setIndex(((i % len) + len) % len);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  const isPaused = useMemo(
    () => !autoPlay || isHovering || !inView || !!prefersReducedMotion,
    [autoPlay, isHovering, inView, prefersReducedMotion]
  );

  useEffect(() => {
    if (isPaused) return;
    setProgress(0);
    lastTickRef.current = performance.now();

    const tick = (now) => {
      const last = lastTickRef.current || now;
      const dt = now - last;
      lastTickRef.current = now;

      setProgress((p) => {
        const np = p + dt / interval;
        if (np >= 1) {
          next();
          return 0;
        }
        return np;
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [index, isPaused, interval]);

  useEffect(() => {
    const onVis = () => setInView(!document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 }
    );
    obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      const el = containerRef.current;
      if (!el) return;
      const active = document.activeElement;
      const within = active && (el.contains(active) || active === document.body);
      if (!within) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, len]);

  // touch swipe
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };
  const onTouchMove = (e) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    const THRESHOLD = 60;
    if (touchDeltaX.current > THRESHOLD) prev();
    else if (touchDeltaX.current < -THRESHOLD) next();
  };

  // preload adjacent
  useEffect(() => {
    const preload = (src) => {
      if (!src) return;
      const img = new Image();
      img.src = import.meta.env.BASE_URL + src;
    };
    preload(images[index]);
    preload(images[(index + 1) % len]);
    preload(images[(index - 1 + len) % len]);
  }, [index, images, len]);

  if (!images.length) return null;

  const outerWrapClass = fullWidth
    ? "relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-[100vw]"
    : "relative w-full max-w-6xl mx-auto";

  const aspectClass = responsiveAspect
    ? "aspect-[4/5] sm:aspect-[16/9] xl:aspect-[21/9]"
    : aspect;

  const roundedClass = fullWidth ? "rounded-none" : rounded;

  // ✅ contain on mobile, cover on >=sm
  const fitClasses = containOnMobile
    ? "object-contain sm:object-cover"
    : "object-cover";

  return (
    <div className={`mt-6 ${outerWrapClass}`}>
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className={`relative overflow-hidden ${roundedClass} bg-black`}
        onMouseEnter={() => pauseOnHover && setIsHovering(true)}
        onMouseLeave={() => pauseOnHover && setIsHovering(false)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        role="region"
        aria-roledescription="carousel"
        aria-label="Image Carousel"
        tabIndex={0}
      >
        <div className={`${aspectClass} relative`}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={index}
              src={import.meta.env.BASE_URL + images[index]}
              alt={`Slide ${index + 1} of ${len}`}
              className={`absolute inset-0 w-full h-full ${fitClasses}`}
              style={{ objectPosition }}
              initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: prefersReducedMotion ? 0.25 : 0.6, ease: "easeOut" }}
              loading="eager"
              sizes={fullWidth ? "100vw" : "(max-width: 1024px) 100vw, 1024px"}
              draggable={false}
            />
          </AnimatePresence>
        </div>

        {autoPlay && (
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/15">
            <div
              className="h-full bg-white/70 transition-[width] duration-100 ease-linear"
              style={{ width: `${Math.min(progress * 100, 100)}%` }}
              aria-hidden
            />
          </div>
        )}

        {showArrows && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous slide"
              className="group absolute left-3 top-1/2 -translate-y-1/2 bg-white/85 hover:bg-white text-black shadow p-2 rounded-full border border-black/10 backdrop-blur"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="group absolute right-3 top-1/2 -translate-y-1/2 bg-white/85 hover:bg-white text-black shadow p-2 rounded-full border border-black/10 backdrop-blur"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {showDots && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {images.map((_, i) => {
              const active = i === index;
              return (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={active ? "true" : "false"}
                  className={`h-2.5 rounded-full transition-all ${
                    active ? "w-6 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"
                  }`}
                />
              );
            })}
          </div>
        )}
      </motion.div>
    </div>
  );
}
