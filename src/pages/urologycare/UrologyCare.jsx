import AppointmentFloat from '../../components/AppointmentFloat/AppointmentFloat'
import SuccessStory from './SuccessStory/SuccessStory'
import YoutubeCarousel from '../../components/YoutubeEm/YoutubeEm'
import Testimonials from '../../components/Testimonials/Testimonials'
import Products from '../../components/Products/Products'
import HeroUniversal from '../../components/HeroUniversal/HeroUniversal'

const testimonials = [
    {
        name: "Rohit Malhotra",
        text: "I was facing severe stress and low energy levels. After starting treatment here, my stamina improved and I feel more confident in daily life.",
        rating: 5,
    },
    {
        name: "Vikas Sharma",
        text: "For years I struggled with sleep and lifestyle issues. The personalized care and guidance helped me restore balance to my health.",
        rating: 4,
    },
    {
        name: "Amit Khanna",
        text: "The doctors truly understood my concerns about men’s health. Within weeks, I noticed improvements in both physical and mental well-being.",
        rating: 5,
    },
    {
        name: "Sandeep Verma",
        text: "I had low immunity and frequent fatigue. The treatment not only gave me more energy but also boosted my overall fitness.",
        rating: 5,
    },
    {
        name: "Manish Gupta",
        text: "Very professional and supportive approach. They explained everything clearly and helped me take better care of myself. Highly recommended!",
        rating: 4,
    },
]

const products = [
  {
    name: "Calculin Syrup for Renal Calculi",
    description:
      "2 teaspoonfuls thrice daily or as directed by the Physician.",
    price: "400",
    image: "/calculin-syrup-for-renal-calculi.jpg",
    badge: "Urology Care",
    link: "https://www.drrajeevswellness.com/product/calculin-syrup-for-renal-calculi/",
  },
  {
    name: "RL-24 Kidney Stone Drops",
    description:
      "15–20 drops 3 times daily with 1/2 cup of water or as directed by the Physician.",
    price: "180",
    image: "/rl-24-for-kidney-stone-drops.jpg",
    badge: "Urology Care",
    link: "https://www.drrajeevswellness.com/product/rl-24-for-kidney-stone-drops/",
  },
  {
    name: "RL-25 Tract Infection & Burning Urination Drops",
    description:
      "15–20 drops 3 times daily with 1/2 cup of water or as directed by the Physician.",
    price: "180",
    image: "/rl-25-for-tract-infection-burning-urination-drops.jpg",
    badge: "Urology Care",
    link: "https://www.drrajeevswellness.com/product/rl-25-for-tract-infection-burning-urination-drops/",
  },
  {
    name: "RL-49 Urea & Creatinine Drops",
    description:
      "15–20 drops 3 times daily with 1/2 cup of water or as directed by the Physician.",
    price: "180",
    image: "/rl-49-for-urea-creatinine-drops.jpg",
    badge: "Urology Care",
    link: "https://www.drrajeevswellness.com/product/rl-49-for-urea-creatinine-drops/",
  },
  {
    name: "RL-67 Kidney Albuminaria Drops",
    description:
      "As directed by the Physician.",
    price: "180",
    image: "/rl-67-kidney-aibuninaria-drops.webp",
    badge: "Urology Care",
    link: "https://www.drrajeevswellness.com/product/rl-67-kidney-albuminaria-drops/",
  },
  {
    name: "RL-70 Cardiac Efficiency Drops",
    description:
      "10–15 drops diluted in water and taken 3 times a day or as directed by the Physician.",
    price: "180",
    image: "/rl-70-cardiac-efficiency-drops.jpg",
    badge: "Urology Care",
    link: "https://www.drrajeevswellness.com/product/rl-70-cardiac-efficiency-drops/",
  },
  {
    name: "RL-74 Urinary Drops",
    description:
      "10–15 drops diluted in water and taken 3 times a day or as directed by the Physician.",
    price: "180",
    image: "/rl-74-urinary-drops.jpg",
    badge: "Urology Care",
    link: "https://www.drrajeevswellness.com/product/rl-74-urinary-drops/",
  },
]

const yt = ["4t5mXCJdymo", "NeaDb_UNyYY", "cBm6k9uNFrc"]

export default function UrologyCare() {
    return (
        <div>
            <AppointmentFloat />
            <HeroUniversal
                promoTitle="One of India’s Leading Homeopathic Clinic Networks"
                subtitle="Holistic homeopathic solutions designed to restore men’s health, strength, and vitality."
                images={["/sexhelmen.png", "/sexhelmenemo.png", "/sexhelmenfat.png"]}
                phone="+919117520003"
                trust={[
                    { icon: "shield", label: "20+ Years of Care" },
                    { icon: "award", label: "1L+ Consultations" },
                    { icon: "star", label: "4.8/5 Patient Rating" },
                ]}
                ctas={[
                    {
                        label: "Menscare Query",
                        href: "https://docs.google.com/forms/d/e/1FAIpQLScV_DZUlRX5eNqp1przBJrRELrIoY0ZlyBUNTE3MUYVyZKkfg/viewform",
                        icon: "help",
                        variant: "neutral",
                    },
                    {
                        label: "YouTube",
                        href: "https://www.youtube.com/channel/UC42j8Oi53cP0aNLFmi5KKZg",
                        icon: "youtube",
                        target: "_blank",
                        variant: "danger",
                    },
                    {
                        label: "Appointment Booking",
                        href: "https://www.rajeevclinic.com/appointment",
                        icon: "calendar",
                        variant: "primary",
                    },
                ]}
                options={{
                    aspect: "aspect-[16/9]",
                    interval: 4500,
                    showArrows: true,
                    showDots: true,
                    rounded: "rounded-2xl",
                    showAccents: true,
                }}
            />
            <YoutubeCarousel videos={yt} />
            <Products products={products} />
            <SuccessStory />
            <Testimonials testimonials={testimonials} />
        </div>
    )
}
