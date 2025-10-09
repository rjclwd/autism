import { useMemo, useState } from "react";
import { ShoppingCart, Star } from "lucide-react";

/* ---------- Helpers ---------- */

const formatINR = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Number(value || 0));

function Stars({ rating = 0, size = 16 }) {
  const full = Math.floor(rating);
  const frac = Math.max(0, Math.min(1, rating - full));
  return (
    <div className="relative inline-flex items-center">
      <div className="flex gap-0.5 text-gray-300">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={`empty-${i}`} size={size} className="stroke-current" />
        ))}
      </div>
      <div
        className="absolute inset-0 overflow-hidden text-yellow-500"
        style={{ width: `${Math.min(5, full + frac) / 5 * 100}%` }}
        aria-hidden="true"
      >
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={`full-${i}`} size={size} className="fill-current stroke-current" />
          ))}
        </div>
      </div>
      <span className="sr-only">{`Rated ${rating} out of 5`}</span>
    </div>
  );
}

/* ---------- Card ---------- */

function ProductCard({ product }) {
  const {
    name,
    description,
    price,
    rating,
    image,
    link,
    badge,
    inStock = true,
  } = product || {};

  const prepareImage = (src) => {
    if (!src) return import.meta.env.BASE_URL + "placeholder.png";
    if (src.startsWith("http://") || src.startsWith("https://")) return src;
    return import.meta.env.BASE_URL + src.replace(/^\//, "");
  }

  const [imgSrc, setImgSrc] = useState(prepareImage(image));
  const priceLabel = useMemo(() => formatINR(price), [price]);

  return (
    <article
      className="relative bg-surface border border-border rounded-2xl shadow-md p-6 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus-within:shadow-xl focus-within:-translate-y-1"
      aria-label={name}
    >
      {badge && (
        <span
          className="absolute z-10 top-4 left-4 bg-gradient-to-r from-primary to-accent text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg"
          aria-label={`Badge: ${badge}`}
        >
          {badge}
        </span>
      )}

      <div className="w-full h-48 bg-white rounded-xl overflow-hidden flex items-center justify-center mb-5">
        <img
          src={imgSrc}
          alt={name || "Product image"}
          className="object-contain h-full w-auto transition-transform duration-300 hover:scale-105"
          loading="lazy"
          decoding="async"
          onError={() => setImgSrc(import.meta.env.BASE_URL + "placeholder.png")}
        />
      </div>

      <h3 className="font-heading text-lg md:text-xl text-foreground font-bold leading-snug line-clamp-2 mb-2">
        {name}
      </h3>

      <div className="flex items-center justify-between mb-3">
        <p className="text-primary font-bold text-xl">{priceLabel}</p>
        {Number.isFinite(rating) && (
          <div className="flex items-center gap-2">
            <Stars rating={rating} />
            <span className="text-xs text-text-muted">{rating.toFixed(1)}</span>
          </div>
        )}
      </div>

      {description && (
        <p className="whitespace-pre-line text-sm text-text-muted leading-relaxed mb-5">
          {description}
        </p>
      )}

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Buy ${name} for ${priceLabel}`}
        className={`mt-auto inline-flex items-center justify-center gap-2 font-semibold text-sm md:text-base py-3 px-6 rounded-full active:scale-95 transition-all duration-300
        ${inStock
            ? "bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg"
            : "bg-gray-200 text-gray-500 cursor-not-allowed"}`}
        tabIndex={inStock ? 0 : -1}
        onClick={(e) => {
          if (!inStock) e.preventDefault();
        }}
      >
        <ShoppingCart size={18} />
        {inStock ? "Buy Now" : "Out of Stock"}
      </a>
    </article>
  );
}

/* ---------- List with Load More ---------- */

export default function Products({ products = [] }) {
  const [visibleCount, setVisibleCount] = useState(9);

  if (!products.length) return null;

  const visibleProducts = products.slice(0, visibleCount);

  return (
    <section className="py-11">
      <h2 className="text-center text-3xl md:text-4xl uppercase font-primary font-heading font-extrabold text-primary">
        Recommended Medicine
      </h2>
      <p className="text-center py-4 italic text-text-muted">
        Consume only on the advice of a registered medical practitioner.
      </p>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6"
        role="list"
        aria-label="Product recommendations"
      >
        {visibleProducts.map((p, i) => (
          <div role="listitem" key={p?.id ?? i}>
            <ProductCard product={p} />
          </div>
        ))}
      </div>

      {visibleCount < products.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setVisibleCount((prev) => prev + 9)}
            className="px-6 py-3 rounded-full bg-primary text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 active:scale-95"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}
