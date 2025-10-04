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
        name: "Allertone Drops for Allergy",
        description: "10–15 drops should be diluted in water and taken 3 times a day or as directed by the Physician.",
        price: "180",
        image: "/allertone-drops-for-allergy.jpg",
        badge: "ENT Care",
        link: "https://www.drrajeevswellness.com/product/allertone-drops-for-allergy/"
    },
    {
        name: "Fiebrisom for Throat Infection",
        description: "Adult: 20 drops in a tablespoon of water, 1/2 an hour before eating, 3 to 5 times daily. Children: Half the adult dose or as directed by the Physician.",
        price: "180",
        image: "/fiebrisom-for-throat-infection.jpg",
        badge: "ENT Care",
        link: "https://www.drrajeevswellness.com/product/fiebrisom-throat-infection/"
    },
    {
        name: "Migratax Drops for Headache & Migraine",
        description: "10–15 drops should be diluted in water and taken 3 times a day or as directed by the Physician.",
        price: "180",
        image: "/migratax-drops-for-headache-migraine.jpg",
        badge: "ENT Care",
        link: "https://www.drrajeevswellness.com/product/migratax-headache-migraine/"
    },
    {
        name: "RL-1 Allergy, Nasal Congestion Drops",
        description: "15–20 drops 3 times daily with 1/2 cup of water or as directed by the Physician.",
        price: "180",
        image: "/rl-1-allergy-nasal-congestion-drops.jpg",
        badge: "ENT Care",
        link: "https://www.drrajeevswellness.com/product/rl-1-allergy-nasal-congestion-drops/"
    },
    {
        name: "RL-14 Sinusitis & Nasal Polypus Drops",
        description: "15–20 drops 3 times daily with 1/2 cup of water or as directed by the Physician.",
        price: "180",
        image: "/rl-14-for-sinusitis-nasal-polypus-drops.jpg",
        badge: "ENT Care",
        link: "https://www.drrajeevswellness.com/product/rl-14-sinusitis-nasal-polypus-drops/"
    },
    {
        name: "RL-28 Tonsil & Throat Infection Drops",
        description: "15–20 drops 3 times daily with 1/2 cup of water or as directed by the Physician.",
        price: "180",
        image: "/rl-28-for-tonsil-throat-infection-drops.jpg",
        badge: "ENT Care",
        link: "https://www.drrajeevswellness.com/product/rl-28-tonsil-throat-infection-drops/"
    },
    {
        name: "RL-46 Cataract, Glaucoma & Eye Vision Drops",
        description: "15–20 drops 3 times daily with 1/2 cup of water or as directed by the Physician.",
        price: "180",
        image: "/rl-46-for-cataract-glaucoma-eye-vision-drop.jpg",
        badge: "ENT Care",
        link: "https://www.drrajeevswellness.com/product/rl-46-cataract-glaucoma-eye-vision-drops/"
    },
    {
        name: "RL-6 Migraine & Headache Drops",
        description: "15–20 drops 3 times daily with 1/2 cup of water or as directed by the Physician.",
        price: "180",
        image: "/rl-6-migraine-headache-drops.jpg",
        badge: "ENT Care",
        link: "https://www.drrajeevswellness.com/product/rl-6-migraine-headache-drops/"
    },
    {
        name: "RL-68 Teeth Drops",
        description: "10–15 drops should be diluted in water and taken 3 times a day or as directed by the Physician.",
        price: "180",
        image: "/rl-68-teeth-drops.jpg",
        badge: "ENT Care",
        link: "https://www.drrajeevswellness.com/product/rl-68-teeth-drops/"
    },
    {
        name: "RL-9 Thyroid Problem Drops",
        description: "5–20 drops 3 times daily with 1/2 cup of water or as directed by the Physician.",
        price: "180",
        image: "/rl-9-thyroid-problem-drops.jpg",
        badge: "ENT Care",
        link: "https://www.drrajeevswellness.com/product/rl-9-thyroid-problem-drops/"
    },
    {
        name: "Sinolax Drops for Sinus & Nasal Polypus",
        description: "15–20 drops should be diluted in water and taken 3 times a day or as directed by the Physician.",
        price: "180",
        image: "/sinolax-drops-for-sinus-nasal-polypus.jpg",
        badge: "ENT Care",
        link: "https://www.drrajeevswellness.com/product/sinolax-drops-sinus-nasal-polypus/"
    }
]

const yt = ["ZQQGpjJEx6w", "vkykraw1Zmg", "NmQBT3LTv9E", "NmQBT3LTv9E", "r3NKpPFpL98"]

export default function EntCare() {
    return (
        <div>
            <AppointmentFloat />
            <HeroUniversal
                promoTitle="One of India’s Leading Homeopathic Clinic Networks"
                subtitle="Holistic homeopathic solutions designed to restore men’s health, strength, and vitality."
                images={["/entbanner.png"]}
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
