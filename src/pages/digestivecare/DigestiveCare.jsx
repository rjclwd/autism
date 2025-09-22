import AppointmentFloat from '../../components/AppointmentFloat/AppointmentFloat'
import Hero from './Hero/Hero'
import SuccessStory from './SuccessStory/SuccessStory'
import YoutubeCarousel from '../../components/YoutubeEm/YoutubeEm'
import Testimonials from '../../components/Testimonials/Testimonials'
import Products from '../../components/Products/Products'

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
        name: "Constilax Syrup for Constipation",
        description:
            "Adults: 2 teaspoonfuls two or three times daily or as directed by the Physician. Children: Half of the adult dose or as directed by the physician.",
        price: "400",
        image: "/constilax-syrup-for-constipation.jpg",
        badge: "Digestive Care",
        link: "https://www.drrajeevswellness.com/product/constilax-syrup-for-constipation/",
    },
    {
        name: "Digelex Syrup (All Types of Stomach Problems)",
        description:
            "Adult: 2 teaspoonful thrice daily. Children: 1 teaspoonful thrice daily before meals or as directed by the Physician.",
        price: "400",
        image: "/digelex-syrup-for-all-types-of-stomach-problems.jpg",
        badge: "Digestive Care",
        link: "https://www.drrajeevswellness.com/product/digelex-syrup-for-all-types-of-stomach-problems/",
    },
    {
        name: "DigeVita Tonic for Indigestion & Stomach Problems",
        description:
            "1 to 2 teaspoonfuls twice daily before meals or as directed by the Physician.",
        price: "400",
        image: "/digevita-tonic-for-indigestion-stomach-problems.jpg",
        badge: "Digestive Care",
        link: "https://www.drrajeevswellness.com/product/digevita-tonic-for-indigestion-stomach-problems/",
    },
    {
        name: "Pilax Drops (Bleeding & Non-Bleeding Piles)",
        description:
            "15–20 drops diluted in water, 3 times a day or as directed by the Physician.",
        price: "180",
        image: "/pilax-drops-for-bleeding-non-bleeding-piles.jpg",
        badge: "Digestive Care",
        link: "https://www.drrajeevswellness.com/product/pilax-drops-for-bleeding-non-bleeding-piles/",
    },
    {
        name: "RL-13 For Gastritis, Acidity & All Types Stomach Problem (Drops)",
        description:
            "15–20 drops 3 times daily with 1/2 cup of water or as directed by the Physician.",
        price: "180",
        image:
            "/rl-13-for-gastritis-acidity-all-types-stomach-problem-drops.jpg",
        badge: "Digestive Care",
        link: "https://www.drrajeevswellness.com/product/rl-13-for-gastritis-acidity-all-types-stomach-problem-drops/",
    },
    {
        name: "RL-26 For Colic (Drops)",
        description:
            "15–20 drops 3 times daily with 1/2 cup of water or as directed by the Physician.",
        price: "180",
        image: "/rl-26-for-colic-drops.jpg",
        badge: "Digestive Care",
        link: "https://www.drrajeevswellness.com/product/rl-26-for-colic-drops/",
    },
    {
        name: "RL-36 Gastritis, Acidity & Stomach Problems (Syrup)",
        description:
            "2 to 3 teaspoonful with a little water twice daily or as directed by the Physician.",
        price: "390",
        image:
            "/rl-36-gastritis-acidity-all-types-stomach-problems-syrup.jpg",
        badge: "Digestive Care",
        link: "https://www.drrajeevswellness.com/product/rl-36-gastritis-acidity-all-types-stomach-problems-syrup/",
    },
    {
        name: "RL-42 For Enzyme & Constipation (Syrup)",
        description:
            "Adults: 1–2 teaspoonful thrice daily. Children: 1/2–1 teaspoonful thrice daily or as directed by the Physician.",
        price: "400",
        image: "/rl-42-for-enzyme-constipation-syrup.jpg",
        badge: "Digestive Care",
        link: "https://www.drrajeevswellness.com/product/rl-42-for-enzyme-constipation-syrup/",
    },
    {
        name: "RL-44 For Obesity (Drops)",
        description:
            "15–20 drops 3 times daily with 1/2 cup of water or as directed by the Physician.",
        price: "180",
        image: "/rl-44-for-obesity-drops.jpg",
        badge: "Digestive Care",
        link: "https://www.drrajeevswellness.com/product/rl-44-for-obesity-drops/",
    },
    {
        name: "RL-56 Nausea (Drops)",
        description:
            "10–15 drops diluted in water, 3 times a day or as directed by the Physician.",
        price: "180",
        image: "/rl-56-nausea-drop.jpg",
        badge: "Digestive Care",
        link: "https://www.drrajeevswellness.com/product/rl-56-nausea-drop/",
    },
    {
        name: "RL-62 Right Abdoninal (Drops)",
        description:
            "10–15 drops diluted in water, 3 times a day or as directed by the Physician.",
        price: "180",
        image: "/rl-62-right-abdoninal-drops.jpg",
        badge: "Digestive Care",
        link: "https://www.drrajeevswellness.com/product/rl-62-right-abdoninal-drops/",
    },
    {
        name: "RL-63 Left Abdominal (Drops)",
        description:
            "10–15 drops diluted in water, 3 times a day or as directed by the Physician.",
        price: "180",
        image: "/rl-63-left-abdominal-drops.jpg",
        badge: "Digestive Care",
        link: "https://www.drrajeevswellness.com/product/rl-63-left-abdominal-drops/",
    },
];

const yt = ["FEiAaXTaS5Q", "_4Udya5yMUo", "Vk9r94KPSuM", "1985Hhe7jgc", "6w7SGi3SelE", "FvVfq-dDNGg"];

export default function DigestiveCare() {
    return (
        <div>
            <AppointmentFloat />
            <Hero />
            <YoutubeCarousel videos={yt} />
            <Products products={products} />
            <SuccessStory />
            <Testimonials testimonials={testimonials} />
        </div>
    )
}
