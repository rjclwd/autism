import SplitText from "../../bits/SplitText/SplitText";
import Carousel from "../Carousel/Carousel";
import { motion } from "framer-motion";
import {
  CalendarCheck,
  HelpCircle,
  Youtube,
  PhoneCall,
  ShieldCheck,
  Award,
  Star,
} from "lucide-react";
import NarrowBanner from "../NarrowBanner/NarrowBanner";
import MarqueeStrip from "../MarqueeStrip/MarqueeStrip";

/**
 * Reusable, theme-aware hero for disease pages
 *
 * Props:
 * - promoTitle: string (big top claim)
 * - subtitle: string (disease-specific headline)
 * - images: string[] (carousel)
 * - phone: string (tel number)
 * - ctas: { label: string, href: string, icon?: 'help'|'youtube'|'calendar'|'custom', target?: '_blank'|'_self', variant?: 'primary'|'neutral'|'danger'|'custom', iconEl?: ReactNode }[]
 * - trust: { icon?: 'shield'|'award'|'star'|'custom', label: string, iconEl?: ReactNode }[]
 * - options: {
 *     aspect?: string (tailwind aspect class),
 *     interval?: number (ms),
 *     showArrows?: boolean,
 *     showDots?: boolean,
 *     rounded?: string (tailwind rounded),
 *     showAccents?: boolean (soft bg blobs),
 *     splitTypePromo?: 'chars'|'words',
 *     splitTypeSubtitle?: 'chars'|'words'
 *   }
 * - extraBelow?: ReactNode (any custom JSX under hero)
 */

export default function HeroUniversal({
  promoTitle = "One of India’s Leading Homeopathic Clinic Networks",
  subtitle = "Holistic solutions tailored to your care.",
  bannerText = "First Pathy Homeopathy",
  bannerSubtext = "Expert homeopathic solutions tailored for your wellness.",
  bannerImage = "./banner.png",
  images = [],
  phone = "+919117520003",
  ctas = [],
  trust = [],
  options = {},
  extraBelow = null,
}) {
  const {
    aspect = "aspect-[16/9]",
    interval = 4500,
    showArrows = true,
    showDots = true,
    rounded = "rounded-2xl",
    showAccents = true,
    splitTypePromo = "chars",
    splitTypeSubtitle = "words",
  } = options;

  // fallback icons for CTAs
  const iconMap = {
    help: <HelpCircle className="h-5 w-5" />,
    youtube: <Youtube className="h-5 w-5" />,
    calendar: <CalendarCheck className="h-5 w-5" />,
  };

  // CTA variant → classes (theme friendly)
  const variantMap = {
    primary:
      "bg-primary text-white hover:shadow-md transition hover:-translate-y-0.5",
    neutral:
      "bg-accent text-white border border-border hover:shadow-md transition hover:-translate-y-0.5",
    danger:
      "bg-red-600 text-white hover:bg-red-700 hover:shadow-md transition hover:-translate-y-0.5",
    custom: "", // allow full control if you pass custom classes in href? keep simple here
  };

  // trust icon fallback
  const trustIconMap = {
    shield: <ShieldCheck className="h-4 w-4 text-secondary" />,
    award: <Award className="h-4 w-4 text-primary" />,
    star: <Star className="h-4 w-4 text-yellow-500" />,
  };

  const telHref = `tel:${phone.replace(/\s+/g, "")}`;

  return (
    <section className="relative overflow-hidden">
      {/* Background accents */}
      {showAccents && (
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-2xl" />
          <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
        </div>
      )}
      <div className="mt-2">
        <NarrowBanner
          image={bannerImage}
          title={bannerText}
          subtitle={bannerSubtext}
          align="center"
          overlayOpacity={0.8}
        />
      </div>
      <div className="mt-2">
        <MarqueeStrip
          height={150}
          gap={36}
          duration={24}
          items={[
            { src: "/autclinic.png", alt: "Autism clinic" },
            { src: "/authand.png", alt: "Autism hand print" },
            { src: "/autws.png", alt: "Autism" },
          ]}
        />
      </div>
      <div className="px-4 py-10 sm:py-14 md:py-16 max-w-7xl mx-auto">
        {/* Promo strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-full max-w-5xl"
        >
          <div className="relative rounded-2xl border border-border bg-surface/90 shadow-lg ring-1 ring-black/5">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/5 to-secondary/10" />
            <div className="relative px-5 sm:px-7 py-5 text-center">
              <SplitText
                text={promoTitle}
                className="text-center font-heading font-extrabold uppercase text-primary drop-shadow-sm
                           text-2xl sm:text-3xl md:text-5xl"
                delay={16}
                duration={0.55}
                ease="power3.out"
                splitType={splitTypePromo}
                from={{ opacity: 0, y: 24 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-80px"
              />

              <p className="text-lg md:text-2xl font-bold italic font-accent text-text-muted">
                #FirstPathyHomeopathy
              </p>
              {!!trust.length && (
                <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-text-muted">
                  {trust.map((t, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2 bg-overlay/60 px-3 py-1.5 rounded-full border border-border"
                    >
                      {t.iconEl || trustIconMap[t.icon || "shield"]}
                      {t.label}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Carousel
        {!!images.length && (
          <div className="mt-8">
            <Carousel
              images={images}
              fullWidth
              aspect="aspect-[21/9]"
              containOnMobile   // 👈 important
              objectPosition="50% 45%" // optional focal point
            />
          </div>
        )} */}

        {/* Subtitle */}
        {subtitle && (
          <div className="mt-8 sm:mt-10 flex items-center justify-center">
            <SplitText
              text={subtitle}
              className="text-center font-heading font-bold text-secondary max-w-5xl mx-auto
                         text-lg sm:text-2xl md:text-4xl leading-tight"
              delay={12}
              duration={0.55}
              ease="power3.out"
              splitType={splitTypeSubtitle}
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-80px"
            />
          </div>
        )}

        {/* CTAs */}
        {!!ctas.length && (
          <div className="mt-8 sm:mt-10">
            <div className="grid gap-3 sm:flex sm:flex-wrap sm:justify-center">
              {ctas.map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  target={
                    c.target || (c.icon === "youtube" ? "_blank" : "_self")
                  }
                  rel={
                    c.target === "_blank" ? "noopener noreferrer" : undefined
                  }
                  className={`inline-flex items-center justify-center gap-2 uppercase rounded-full px-5 py-3
                              text-sm sm:text-base font-semibold shadow-sm ${
                                variantMap[c.variant || "neutral"]
                              }`}
                >
                  {c.iconEl || iconMap[c.icon || "help"]}
                  {c.label}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Call Banner */}
        {phone && (
          <div className="mt-8 sm:mt-12">
            <a
              href={telHref}
              className="group relative mx-auto flex w-full max-w-5xl items-center justify-center overflow-hidden
                         rounded-2xl bg-gradient-to-r from-primary to-secondary px-4 py-4 text-white shadow-lg"
            >
              <span className="absolute inset-0 opacity-20 bg-[radial-gradient(transparent,rgba(255,255,255,0.25)_40%,transparent_70%)]" />
              <span className="inline-flex items-center gap-3 text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-wide">
                <PhoneCall className="h-7 w-7 md:h-8 md:w-8 animate-pulse" />
                Book Your Appointment Instantly – Call @ <br />{" "}
                {formatPhone(phone)}
              </span>
            </a>
            <p className="mt-3 text-center text-sm text-text-muted">
              No waiting. Speak with our care coordinator now.
            </p>
          </div>
        )}

        {extraBelow}
      </div>
    </section>
  );
}

function formatPhone(p) {
  // simple pretty format for +91 numbers like +91 91175 20003
  const digits = p.replace(/[^\d+]/g, "");
  if (digits.startsWith("+91") && digits.length >= 13) {
    return `+91 ${digits.slice(3, 8)} ${digits.slice(8, 13)}`;
  }
  return p;
}
