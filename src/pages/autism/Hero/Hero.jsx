import { useState, useEffect } from "react"
import SplitText from "../../../bits/SplitText/SplitText"
import { motion, AnimatePresence } from "framer-motion"
import { CalendarCheck, HelpCircle, PhoneCall, Youtube } from "lucide-react"
import Carousel from "../../../components/Carousel/Carousel"



function Hero() {
    const images = ["/autclinic.png", "/autws.png", "/autbook.png", "/authand.png", "/wad.png"]
    return (
        <section className="px-4 py-12 w-full flex flex-col items-center justify-center gap-y-8">
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

            <Carousel images={images} />

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
