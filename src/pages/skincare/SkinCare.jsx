import AppointmentFloat from '../../components/AppointmentFloat/AppointmentFloat'
import Hero from './Hero/Hero'
import SuccessStory from './SuccessStory/SuccessStory'
import YoutubeCarousel from '../../components/YoutubeEm/YoutubeEm'
import Products from '../../components/Products/Products'
import Testimonials from '../../components/Testimonials/Testimonials'

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
    { name: "Menscare Capsules", description: "", price: "770", image: "/menscare.png", badge: "Best Seller", link: "https://www.drrajeevswellness.com/product/menscare-capsules/" },
    { name: "RL-21", description: "", price: "180", image: "/RL-21.jpg", badge: "New", link: "https://www.drrajeevswellness.com/product/rl-21-for-prostate-drops/" },
    { name: "RL-60", description: "", price: "180", image: "/RL-60-Drop.jpg", badge: "Best Seller", link: "https://www.drrajeevswellness.com/product/rl-60-male-drops/" },
    { name: "RL-64", description: "", price: "180", image: "/rl-64.webp", badge: "Best Seller", link: "https://www.drrajeevswellness.com/product/rl-64-hyper-hydrosis-drops/" },
    { name: "RL-77", description: "", price: "400", image: "/RL-77.jpg", badge: "Best Seller", link: "https://www.drrajeevswellness.com/product/rl-77-vigour-vitality-tonic-for-men/" },
]



export default function SkinCare() {
    return (
        <div>
            <AppointmentFloat />
            <Hero />
            <YoutubeCarousel videos={["BFBoEE1Yvps", "Mjgd4mMzO1o", "yZAMkqHAJFg", "SyIWZMOclmk"]} />
            <Products products={products}/>
            <SuccessStory />
            <Testimonials testimonials={testimonials} />
        </div>
    )
}
