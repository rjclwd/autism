import SplitText from "../../../bits/SplitText/SplitText"
import { motion } from "framer-motion"
import { CalendarCheck, HelpCircle, PhoneCall, Youtube, ShieldCheck, Award } from "lucide-react"
import Carousel from "../../../components/Carousel/Carousel"

export default function Hero() {
  const images = ["/sexhelmen.png", "/sexhelmenemo.png", "/sexhelmenfat.png"]

  return (
    <section className="relative overflow-hidden">
      {/* soft themeable background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-2xl" />
        <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="px-4 py-10 sm:py-14 md:py-16 max-w-7xl mx-auto">
        {/* PROMO STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-full max-w-5xl"
        >
          <div className="relative rounded-2xl border border-border bg-surface/90 shadow-lg ring-1 ring-black/5">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/5 to-secondary/10" />
            <div className="relative px-5 sm:px-7 py-5">
              <SplitText
                text="One of India’s Leading Homeopathic Clinic Networks"
                className="text-center font-heading font-extrabold uppercase text-primary drop-shadow-sm
                           text-2xl sm:text-3xl md:text-5xl"
                delay={16}
                duration={0.55}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 24 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-80px"
              />
              {/* trust mini bar */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-text-muted">
                <span className="inline-flex items-center gap-2 bg-overlay/60 px-3 py-1.5 rounded-full border border-border">
                  <ShieldCheck className="h-4 w-4 text-secondary" /> 20+ Years of Care
                </span>
                <span className="inline-flex items-center gap-2 bg-overlay/60 px-3 py-1.5 rounded-full border border-border">
                  <Award className="h-4 w-4 text-primary" /> 1L+ Consultations
                </span>
                <span className="inline-flex items-center gap-2 bg-overlay/60 px-3 py-1.5 rounded-full border border-border">
                  ⭐ 4.8/5 Patient Rating
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CAROUSEL */}
        <div className="mt-8">
          <Carousel
            images={images}
            aspect="aspect-[16/9]"
            interval={4500}
            showArrows
            showDots
            rounded="rounded-2xl"
          />
        </div>

        {/* MEN'S CARE HEADLINE */}
        <div className="mt-8 sm:mt-10">
          <SplitText
            text="Holistic homeopathic solutions designed to restore men’s health, strength, and vitality."
            className="text-center font-heading font-bold text-secondary max-w-5xl mx-auto
                       text-lg sm:text-2xl md:text-4xl leading-tight"
            delay={12}
            duration={0.55}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-80px"
          />
        </div>

        {/* PRIMARY CTA STRIP */}
        <div className="mt-8 sm:mt-10">
          <div className="grid gap-3 sm:flex sm:flex-wrap sm:justify-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScV_DZUlRX5eNqp1przBJrRELrIoY0ZlyBUNTE3MUYVyZKkfg/viewform"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-5 py-3
                         text-sm sm:text-base font-semibold text-text shadow-sm hover:shadow-md transition hover:-translate-y-0.5"
            >
              <HelpCircle className="h-5 w-5 text-primary" />
              Menscare Query
            </a>

            <a
              href="https://www.youtube.com/channel/UC42j8Oi53cP0aNLFmi5KKZg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-3
                         text-sm sm:text-base font-semibold text-white shadow-sm hover:shadow-md transition hover:-translate-y-0.5"
            >
              <Youtube className="h-5 w-5" />
              YouTube
            </a>

            <a
              href="https://www.rajeevclinic.com/appointment"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3
                         text-sm sm:text-base font-semibold text-white shadow-sm hover:shadow-md transition hover:-translate-y-0.5"
            >
              <CalendarCheck className="h-5 w-5" />
              Appointment Booking
            </a>
          </div>
        </div>

        {/* CALL BANNER */}
        <div className="mt-8 sm:mt-12">
          <a
            href="tel:+919117520003"
            className="group relative mx-auto flex w-full max-w-5xl items-center justify-center overflow-hidden
                       rounded-2xl bg-gradient-to-r from-primary to-secondary px-4 py-4 text-white shadow-lg"
          >
            <span className="absolute inset-0 opacity-20 bg-[radial-gradient(transparent,rgba(255,255,255,0.25)_40%,transparent_70%)]" />
            <span className="inline-flex items-center gap-3 text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-wide">
              <PhoneCall className="h-7 w-7 md:h-8 md:w-8 animate-pulse" />
              Book Your Appointment Instantly – Call +91 91175 20003
            </span>
          </a>
          {/* reassurance line */}
          <p className="mt-3 text-center text-sm text-text-muted">
            No waiting. Speak with our care coordinator now.
          </p>
        </div>
      </div>
    </section>
  )
}
