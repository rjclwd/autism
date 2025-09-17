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
    { name: "RL-22 For Eczema & Skin Disease Drops", description: "15 – 20 drops 3 times daily with 1/2 cup of water or as directed by the Physician.", price: "180", image: "/RL-22.jpg", badge: "Best Seller", link: "https://www.drrajeevswellness.com/product/rl-22-for-eczema-skin-disease-drops/" },
    { name: "RL-30 For Warts & Corn Mole Drops", description: "15 – 20 drop 3 times Daily with 1/2 cup of water or as directed by the Physician.", price: "180", image: "/RL-30.jpg", badge: "New", link: "https://www.drrajeevswellness.com/product/rl-30-for-warts-corn-mole-drops/" },
    { name: "RL-48 For Psoriasis Drops", description: "15 – 20 drops 3 times daily with 1/2 cup of water or as directed by the Physician.", price: "180", image: "/RL-481.jpg", badge: "Best Seller", link: "https://www.drrajeevswellness.com/product/rl-48-for-psoriasis-drops/" },
    { name: "RL-69 Skin Drops", description: "10 – 15 Drops should e diluted in water and taken 3 times a day or as directed by the Physician.", price: "180", image: "/RL-69-Drop.jpg", badge: "Best Seller", link: "https://www.drrajeevswellness.com/product/rl-69-skin-drops/" },
    { name: "RL-75 Reactivating Drops", description: "10 – 15 Drops should e diluted in water and taken 3 times a day or as directed by the Physician", price: "180", image: "/RL-751.jpg", badge: "Best Seller", link: "https://www.drrajeevswellness.com/product/rl-75-reactivating-drops/" },
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
