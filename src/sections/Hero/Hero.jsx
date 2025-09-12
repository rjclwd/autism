import React, { useState, useEffect } from "react"
import SplitText from "../../bits/SplitText/SplitText"
import { motion, AnimatePresence } from "framer-motion"
import { CalendarCheck, HelpCircle, PhoneCall, Youtube } from "lucide-react"

function Carousel() {
    const images = ["/autclinic.png", "/autws.png", "/autbook.png", "/authand.png", "/wad.png"]
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
                        className={`w-3 h-3 rounded-full transition ${i === index ? "bg-primary" : "bg-gray-300"
                            }`}
                    />
                ))}
            </div>
        </motion.div>
    )
}

function Hero() {
    return (
        <section className="px-4 py-12 w-full flex flex-col items-center justify-center gap-y-8">
            {/* 🔹 PROMOTIONAL LINE (big + bold + highlighted) */}
            <div className="flex justify-center mb-10">
                <div className="bg-gradient-to-r from-primary/20 to-secondary/20 px-6 py-4 rounded-2xl shadow-lg">
                    <SplitText
                        text="One of India’s Leading Homeopathic Clinic Networks"
                        className="md:text-6xl text-2xl text-center font-heading uppercase font-extrabold text-primary drop-shadow-lg py-2"
                        delay={20}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                    />
                </div>
            </div>

            <Carousel />

            {/* 🔹 AUTISM LINE (secondary, calmer) */}
            <SplitText
                text="Spreading Hope, Care, and Awareness for Every Child on the Autism Spectrum"
                className="text-xl sm:text-2xl md:text-4xl text-center font-heading  font-bold text-secondary max-w-6xl"
                delay={20}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
            />

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 justify-center mt-6">
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScV_DZUlRX5eNqp1przBJrRELrIoY0ZlyBUNTE3MUYVyZKkfg/viewform"
                    className="flex items-center gap-2 px-6 py-3 md:text-lg rounded-full bg-purple-600 text-white font-semibold shadow-md hover:bg-purple-700 transition"
                >
                    <HelpCircle size={20} />
                    Autism Query
                </a>

                <a
                    href="https://www.youtube.com/channel/UC42j8Oi53cP0aNLFmi5KKZg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 md:text-lg rounded-full bg-red-600 text-white font-semibold shadow-md hover:bg-red-700 transition"
                >
                    <Youtube size={20} />
                    YouTube
                </a>

                <a
                    href="https://www.rajeevclinic.com/appointment"
                    className="flex items-center gap-2 px-6 py-3 md:text-lg rounded-full bg-green-600 text-white font-semibold shadow-md hover:bg-green-700 transition"
                >
                    <CalendarCheck size={20} />
                    Appointment Booking
                </a>
            </div>

            {/* Call-to-Action Banner */}
            <div className="w-full bg-primary max-w-7xl hover:bg-accent text-white py-4 px-6 flex items-center justify-center shadow-lg rounded-lg mt-8">
                <a
                    href="tel:+919117520003"
                    className="flex items-center gap-3 text-lg md:text-2xl font-extrabold uppercase tracking-wide animate-pulse hover:scale-105 transition-transform"
                >
                    <PhoneCall className="w-9 h-9" />
                    Book Your Appointment Instantly – Click Now to Call! +91 91175 20003
                </a>
            </div>
        </section>
    )
}

export default Hero
