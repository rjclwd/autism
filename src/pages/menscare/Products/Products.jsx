import { ShoppingCart } from "lucide-react"

function ProductCard({ product }) {
    return (
        <div className="relative bg-surface border border-border rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition transform p-5 flex flex-col">
            {product.badge && (
                <span className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-2 py-1 rounded-md shadow-md">
                    {product.badge}
                </span>
            )}

            <div className="w-full h-44 bg-white rounded-lg overflow-hidden flex items-center justify-center mb-4">
                <img
                    src={import.meta.env.BASE_URL + product.image}
                    alt={product.name}
                    className="object-contain max-h-full"
                />
            </div>

            <h3 className="font-heading text-base md:text-lg text-foreground font-semibold mb-1 line-clamp-2">
                {product.name}
            </h3>

            <p className="text-primary font-bold text-lg mb-4">₹{product.price}</p>

            <a href={product.link} target="_blank" className="mt-auto flex items-center justify-center gap-2 bg-primary text-white font-medium text-sm md:text-base py-2 px-4 rounded-full active:scale-95 transition cursor-pointer">
                <ShoppingCart size={16} />
                Add to Cart
            </a>
        </div>
    )
}

const products = [
    { name: "Menscare Capsules", price: "770", image: "/menscare.png", badge: "Best Seller", link: "https://www.drrajeevswellness.com/product/menscare-capsules/" },
    { name: "RL-21", price: "180", image: "/RL-21.jpg", badge: "New", link: "https://www.drrajeevswellness.com/product/rl-21-for-prostate-drops/" },
    { name: "RL-60", price: "180", image: "/RL-60-Drop.jpg", badge: "Best Seller", link: "https://www.drrajeevswellness.com/product/rl-60-male-drops/" },
    { name: "RL-64", price: "180", image: "/rl-64.webp", badge: "Best Seller", link: "https://www.drrajeevswellness.com/product/rl-64-hyper-hydrosis-drops/" },
    { name: "RL-77", price: "400", image: "/RL-77.jpg", badge: "Best Seller", link: "https://www.drrajeevswellness.com/product/rl-77-vigour-vitality-tonic-for-men/" },
]

export default function Products() {
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