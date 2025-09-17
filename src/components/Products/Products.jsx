import { ShoppingCart } from "lucide-react"


function ProductCard({ product }) {
  return (
    <div className="relative bg-surface border border-border rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col">
      {/* Badge */}
      {product.badge && (
        <span className="absolute z-10 top-4 left-4 bg-gradient-to-r from-primary to-accent text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
          {product.badge}
        </span>
      )}

      {/* Product Image */}
      <div className="w-full h-48 bg-white rounded-xl overflow-hidden flex items-center justify-center mb-5">
        <img
          src={import.meta.env.BASE_URL + product.image}
          alt={product.name}
          className="object-contain h-full w-auto transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Product Title */}
      <h3 className="font-heading text-lg md:text-xl text-foreground font-bold leading-snug line-clamp-2 mb-2">
        {product.name}
      </h3>

      {/* Price + Rating Row */}
      <div className="flex items-center justify-between mb-3">
        <p className="text-primary font-bold text-xl">₹{product.price}</p>
        {product.rating && (
          <div className="flex items-center gap-1 text-yellow-500 text-sm">
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                size={16}
                className={i < product.rating ? "fill-yellow-400" : "stroke-gray-300"}
              />
            ))}
          </div>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-text-muted leading-relaxed mb-5 line-clamp-3">
        {product.description}
      </p>

      {/* CTA */}
      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-white font-semibold text-sm md:text-base py-3 px-6 rounded-full active:scale-95 hover:shadow-lg transition-all duration-300"
      >
        <ShoppingCart size={18} />
        Buy Now
      </a>
    </div>
  )
}



export default function Products({products}) {
    return (
        <section className="py-11">
            <h2 className="text-center text-3xl md:text-4xl font-primary font-heading font-extrabold text-primary">
                Recommended Medicine
            </h2>
            <p className="text-center py-4 italic text-text-muted">Consume only on the advice of a registered medical practitioner.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
                {products.map((p, i) => (
                    <ProductCard key={i} product={p} />
                ))}
            </div>
        </section>
    )
}