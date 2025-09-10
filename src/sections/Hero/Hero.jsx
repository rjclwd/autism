import React, { useState, useEffect } from "react"
import SplitText from "../../bits/SplitText/SplitText"
import { motion, AnimatePresence } from "framer-motion"
import { CalendarCheck, HelpCircle, Youtube } from "lucide-react"

function Carousel() {
    const images = ["/autclinic.png", "/autws.png", "/autbook.png", "/authand.png", "wad.png"]
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
            className="relative w-full max-w-5xl mx-auto overflow-hidden shadow-lg"
        >
            <div className="aspect-[16/6] relative">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={index}
                        src={images[index]}
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
                        className={`w-3 h-3 rounded-full transition ${
                            i === index ? "bg-white" : "bg-white/50"
                        }`}
                    />
                ))}
            </div>
        </motion.div>
    )
}

function Hero() {
    return (
        <section className="px-4 py-8 w-full flex flex-col items-center justify-center gap-y-6">
            <SplitText
                text="One of leading homeopathic clinic network in India"
                className="text-3xl sm:text-4xl md:text-6xl text-center drop-shadow-2xl font-heading font-extrabold text-purple uppercase leading-tight"
                delay={20}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
            />
            <Carousel />
            <div className="flex flex-wrap gap-3 justify-center mt-6">
                <a
                    href="#"
                    className="flex items-center gap-2 px-5 py-2 rounded-full bg-purple-600 text-white font-medium shadow-md hover:bg-purple-700 hover:shadow-lg transition"
                >
                    <HelpCircle size={18} />
                    Autism Query
                </a>

                <a
                    href="https://www.youtube.com/channel/UC42j8Oi53cP0aNLFmi5KKZg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2 rounded-full bg-red-600 text-white font-medium shadow-md hover:bg-red-700 hover:shadow-lg transition"
                >
                    <Youtube size={18} />
                    YouTube
                </a>

                <a
                    href="#"
                    className="flex items-center gap-2 px-5 py-2 rounded-full bg-green-600 text-white font-medium shadow-md hover:bg-green-700 hover:shadow-lg transition"
                >
                    <CalendarCheck size={18} />
                    Appointment Booking
                </a>
            </div>
        </section>
    )
}

export default Hero
