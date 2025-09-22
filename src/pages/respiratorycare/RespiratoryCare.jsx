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
        name: "Detox Liver Capsules",
        description: "60 Capsules",
        price: "670",
        image: "/detox-liver-capsules.png",
        badge: "Respiratory Care",
        link: "https://www.drrajeevswellness.com/product/detox-liver-capsules/"
    },
    {
        name: "Livo Care Syrup",
        description: "Adult: 2 Teaspoonful Daily. Children: 1 Teaspoonful twice daily before meals or as directed by the Physician.",
        price: "400",
        image: "/livo-care-syrup-a-comprehensive-liver-restorative.jpg",
        badge: "Respiratory Care",
        link: "https://www.drrajeevswellness.com/product/livo-care-syrup-a-comprehensive-liver-restorative/"
    },
    {
        name: "RL-19 For Asthma Acute & Chronic Drops",
        description: "15–20 drops 3 times daily with 1/2 cup of water or as directed by the Physician.",
        price: "180",
        image: "/rl-19-for-asthma-acute-chronic-drops.jpg",
        badge: "Respiratory Care",
        link: "https://www.drrajeevswellness.com/product/rl-19-for-asthma-acute-chronic-drops/"
    },
    {
        name: "RL-29 For Heart Gold Drops",
        description: "15–20 drops 3 times daily with 1/2 cup of water or as directed by the Physician.",
        price: "180",
        image: "/rl-29-for-heart-gold-drops.jpg",
        badge: "Respiratory Care",
        link: "https://www.drrajeevswellness.com/product/rl-29-for-heart-gold-drops/"
    },
    {
        name: "RL-31 For Liver Disorder, Jaundice & Hepatitis Syrup",
        description: "Adults: 1 to 2 teaspoonful thrice daily. Children: 1/2 to 1 teaspoonful thrice or as directed by the Physician.",
        price: "400",
        image: "/rl-31-for-liver-disorder-jaundices-hepatitis-syrup.jpg",
        badge: "Respiratory Care",
        link: "https://www.drrajeevswellness.com/product/rl-31-for-liver-disorder-jaundices-hepatitis-syrup/"
    },
    {
        name: "RL-32 For All Types of Cough Syrup",
        description: "Adults: 1 to 2 teaspoonful thrice daily. Children: 1/2 to 1 teaspoonful thrice or as directed by the Physician.",
        price: "390",
        image: "/rl-32-for-all-type-of-cough-syrup.jpg",
        badge: "Respiratory Care",
        link: "https://www.drrajeevswellness.com/product/rl-32-for-all-type-of-cough-syrup/"
    },
    {
        name: "RL-39 For Asthma (Acute & Chronic) Syrup",
        description: "Adults: 1 to 2 teaspoonful thrice daily. Children: 1/2 to 1 teaspoonful thrice or as directed by the Physician.",
        price: "400",
        image: "/rl-39-for-asthma-acute-chronic-syrup.jpg",
        badge: "Respiratory Care",
        link: "https://www.drrajeevswellness.com/product/rl-39-for-asthma-acute-chronic-syrup/"
    },
    {
        name: "RL-71 Calcium + Vitamin D Tonic",
        description: "Adults: 1 to 2 teaspoonful thrice daily. Children: 1/2 to 1 teaspoonful thrice or as directed by the Physician.",
        price: "400",
        image: "/rl-71-calcium-vitamin-d-tonic.jpg",
        badge: "Respiratory Care",
        link: "https://www.drrajeevswellness.com/product/rl-71-calcium-vitamin-d-tonic/"
    }
]

const yt = ["ptcolnjOltk", "A_7C6_ackQY", "8QL79s2WcCU", "OJhnWQl1eyQ"]

export default function RespiratoryCare() {
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
