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
    name: "Baby Drops",
    description: "15–20 Drops 3 times daily with 1/2 cup of water or as directed by the Physician.",
    price: "180",
    image: "/baby-drops.jpg",
    badge: "Child Care",
    link: "https://www.drrajeevswellness.com/product/baby-drops/"
  },
  {
    name: "Babylex Tonic with Iron & Calcium",
    description: "Infantile: 1/2 teaspoonful with milk or fruit juice twice daily. Children: 1 teaspoonful with milk or fruit juice twice daily or as directed by the Physician.",
    price: "400",
    image: "/babylex-tonic-for-health-tonic-with-iron-calcium.jpg",
    badge: "Child Care",
    link: "https://www.drrajeevswellness.com/product/babylex-tonic-for-health-tonic-with-iron-calcium/"
  },
  {
    name: "RL-33 Baby & Calcium Tonic",
    description: "Adults: 1 to 2 teaspoonful thrice daily. Children: 1/2 to 1 teaspoonful thrice or as directed by the Physician.",
    price: "400",
    image: "/rl-33-for-baby-calcium-tonic.jpg",
    badge: "Autism Care, Child Care",
    link: "https://www.drrajeevswellness.com/product/rl-33-for-baby-calcium-tonic/"
  },
  {
    name: "RL-45 Height Drops",
    description: "15–20 drops 3 times daily with 1/2 cup of water or as directed by the Physician.",
    price: "180",
    image: "/rl-45-height-drops.jpg",
    badge: "Child Care",
    link: "https://www.drrajeevswellness.com/product/rl-45-height-drops/"
  },
  {
    name: "RL-52 Worms Drops",
    description: "For all types of worms. Dosage as directed by the Physician.",
    price: "180",
    image: "/rl-52-for-all-types-of-worms.webp",
    badge: "Child Care",
    link: "https://www.drrajeevswellness.com/product/rl-52-for-all-types-of-worms/"
  },
  {
    name: "Super Seven Health Tonic for Family",
    description: "Adult: 2 teaspoonful thrice daily. Children: 1/2 or 1 teaspoonful thrice daily or as directed by the Physician.",
    price: "390",
    image: "/super-seven-health-tonic-for-family.jpg",
    badge: "Autoimmune Disease, Child Care",
    link: "https://www.drrajeevswellness.com/product/super-seven-health-tonic-for-family/"
  }
]

const yt = ["zzfTKWwZpPU", "HoPfEBixTCY", "delrgWp4Dqs", "9iBhj7UgcPA", "4eTQkhpUegc", "Fi80m1Y-Aig"]

export default function ChildCare() {
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
