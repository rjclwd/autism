import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function MarqueeStrip({
  items = [],
  pauseDuration = 3000,
  transitionDuration = 600,
  gap = 16,
  centerRatio = 0.72, // default for desktop; overridden on mobile
  showArrows = true,
  pauseOnHover = true,
  className = "",
}) {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [hover, setHover] = useState(false);

  // Normalize items: accept strings or {src, alt, href}
  const data = useMemo(() => {
    const arr = (items || []).map((it) =>
      typeof it === "string" ? { src: it } : it
    );
    return arr.length
      ? arr
      : [{ src: "/placeholder1.jpg" }, { src: "/placeholder2.jpg" }];
  }, [items]);

  const len = data.length;

  // Resolve src safely (no double BASE_URL)
  const resolveSrc = (src) => {
    if (!src) return "";
    if (/^https?:\/\//i.test(src)) return src;
    if (src.startsWith("/"))
      return `${import.meta.env.BASE_URL}${src}`.replace(/([^:]\/)\/+/g, "$1");
    return `${import.meta.env.BASE_URL}${src}`.replace(/([^:]\/)\/+/g, "$1");
  };

  // Responsive center ratio: larger on mobile
  const effectiveCenterRatio = useMemo(() => {
    if (width <= 768) {
      return 0.86; // occupy more width on mobile (bigger main image)
    }
    return centerRatio; // fallback to prop for tablet/desktop
  }, [width, centerRatio]);

  // Compute base slide width and padding to keep neighbors visible
  const slideWidth = Math.max(80, Math.round(width * effectiveCenterRatio));
  const sidePad = Math.max(0, Math.round((width - slideWidth) / 2));

  // Watch container width
  useEffect(() => {
    const measure = () => {
      const w = containerRef.current?.clientWidth || 0;
      setWidth(w);
    };
    measure();

    const obs = new ResizeObserver(measure);
    if (containerRef.current) obs.observe(containerRef.current);
    window.addEventListener("resize", measure);
    return () => {
      obs.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  // Autoplay
  useEffect(() => {
    if (pauseOnHover && hover) return;
    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % len);
    }, pauseDuration + transitionDuration);
    return () => clearInterval(t);
  }, [len, pauseDuration, transitionDuration, hover, pauseOnHover]);

  const goNext = () => setIndex((i) => (i + 1) % len);
  const goPrev = () => setIndex((i) => (i - 1 + len) % len);

  // translate the track by current index
  const translateX = index * (slideWidth + gap);

  // Mobile-first height logic — BIGGER on phones
  const getHeights = (isActive) => {
    if (width <= 768) {
      // Mobile / small screens
      return isActive
        ? "clamp(320px, 80vw, 520px)" // larger main image on mobile
        : "clamp(280px, 68vw, 460px)"; // neighbor images slightly smaller
    }
    // Tablet / desktop
    return isActive ? "clamp(280px, 50vw, 480px)" : "clamp(240px, 42vw, 420px)";
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-visible flex flex-col items-center ${className}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      role="region"
      aria-label="Image carousel"
    >
      <h1 className="text-center text-3xl uppercase md:text-5xl font-bold text-highlight font-heading pb-2">
        Autism Awareness Workshop
      </h1>

      {/* Carousel wrapper */}
      <div
        className="relative overflow-hidden w-full -mt-2" // 👈 pull up slightly
        style={{
          paddingLeft: sidePad,
          paddingRight: sidePad,
        }}
      >
        {/* Track */}
        <div
          className="flex items-center bg-red-500 h-28"
          style={{
            gap: `${gap}px`,
            transform: `translateX(${-translateX}px)`,
            transition: `transform ${transitionDuration}ms ease`,
          }}
        >
          {data.map((item, i) => {
            const src = resolveSrc(item.src);
            const isActive = i === index;

            const content = (
              <img
                src={src}
                alt={item.alt || `Slide ${i + 1}`}
                className="mx-auto object-contain w-auto transition-transform duration-500"
                style={{
                  height: getHeights(isActive),
                  transform: isActive ? "scale(1)" : "scale(0.92)",
                  opacity: isActive ? 1 : 0.8,
                }}
                draggable={false}
                loading="lazy"
              />
            );

            return (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center rounded-lg"
                style={{ width: slideWidth }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={
                      /^https?:\/\//i.test(item.href) ? "_blank" : "_self"
                    }
                    rel="noopener noreferrer"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Buttons */}
      {showArrows && len > 1 && (
        <div className="flex justify-center gap-6 mt-4">
          <button
            onClick={goPrev}
            aria-label="Previous"
            className="bg-white/80 hover:bg-white text-black shadow p-2 rounded-full border border-black/10 backdrop-blur"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goNext}
            aria-label="Next"
            className="bg-white/80 hover:bg-white text-black shadow p-2 rounded-full border border-black/10 backdrop-blur"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}
