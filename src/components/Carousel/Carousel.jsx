import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export default function Carousel({ images }) {

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [images.length])

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-5xl mx-auto overflow-hidden shadow-lg rounded-lg bg-white"
        >
            <div className="aspect-[16/10] relative">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={index}
                        src={import.meta.env.BASE_URL + images[index]}
                        alt={`carousel-${index}`}
                        className="absolute w-full h-full object-cover"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                    />
                </AnimatePresence>
            </div>

            {/* Dots Navigation */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-3 h-3 rounded-full transition ${i === index ? "bg-primary" : "bg-gray-300"
                            }`}
                    />
                ))}
            </div>
        </motion.div>
    )
}