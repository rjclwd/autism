import React, { useEffect, useMemo, useState } from "react";

export default function MarqueeStrip({
  items = [],
  gap = 32,
  duration = 25,
  pauseOnHover = true,
  reverse = false,
  edgeFade = true,
  className = "",
  bgClass = "bg-surface",
}) {
  useEffect(() => {
    const id = "marquee-strip-css";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.innerHTML = `
      .marquee-strip {
        position: relative;
        overflow: hidden;
        width: 100%;
      }
      .marquee-track {
        display: flex;
        width: max-content;
        will-change: transform;
        animation: marquee linear infinite;
        animation-duration: var(--marquee-duration, 25s);
      }
      .marquee-track.reverse {
        animation-direction: reverse;
      }
      .marquee-strip.paused .marquee-track {
        animation-play-state: paused;
      }
      .marquee-group {
        display: inline-flex;
        align-items: center;
        white-space: nowrap;
      }
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `;
    document.head.appendChild(style);
  }, []);

  const [isHover, setIsHover] = useState(false);
  const paused = pauseOnHover && isHover;

  const data = useMemo(() => {
    if (!items || items.length === 0) {
      return [
        { text: "Dr. Rajeev’s Wellness" },
        { text: "Holistic Homeopathy" },
        { text: "20+ Years of Care" },
        { text: "1L+ Consultations" },
      ];
    }
    return items;
  }, [items]);

  const renderItem = (item, idx) => {
    const content = item.node ? (
      item.node
    ) : item.src ? (
      <img
        src={item.src.startsWith("http") ? item.src : import.meta.env.BASE_URL + item.src}
        alt={item.alt || "marquee-item"}
        className="object-contain h-auto w-auto max-h-[80px] sm:max-h-[100px] md:max-h-[120px] lg:max-h-[140px]"
        style={{
          display: "block",
          maxWidth: "none",
        }}
        loading="lazy"
      />
    ) : (
      <span className="text-base sm:text-lg font-semibold text-text">
        {item.text || ""}
      </span>
    );

    return item.href ? (
      <a
        key={idx}
        href={item.href}
        className="inline-flex items-center justify-center"
        target={item.href.startsWith("http") ? "_blank" : "_self"}
        rel="noreferrer noopener"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        {content}
      </a>
    ) : (
      <span key={idx} className="inline-flex items-center justify-center">
        {content}
      </span>
    );
  };

  return (
    <div
      className={`marquee-strip ${paused ? "paused" : ""} ${className} ${bgClass}`}
      style={{
        display: "flex",
        alignItems: "center",
        minHeight: "60px",
        padding: "0.25rem 0",
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {/* Edge Fades */}
      {edgeFade && (
        <>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 z-10 bg-gradient-to-r from-[rgba(0,0,0,0.1)] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 z-10 bg-gradient-to-l from-[rgba(0,0,0,0.1)] to-transparent" />
        </>
      )}

      {/* Track */}
      <div
        className={`marquee-track ${reverse ? "reverse" : ""}`}
        style={{ "--marquee-duration": `${duration}s` }}
      >
        <div className="marquee-group" style={{ gap }}>
          {data.map((item, idx) => renderItem(item, idx))}
        </div>
        <div className="marquee-group" style={{ gap }} aria-hidden="true">
          {data.map((item, idx) => renderItem(item, idx))}
        </div>
      </div>
    </div>
  );
}
