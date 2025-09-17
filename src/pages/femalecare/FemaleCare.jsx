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
    { name: "Femacare Syrup Utrine Tonic", description: "Two teaspoonful twice daily or as directed by the Physician.", price: "400", image: "/femsyp450.jpg", badge: "Best Seller", link: "https://www.drrajeevswellness.com/product/femacare-syrup-utrine-tonic/" },
    { name: "Ovary Drops, For Ovary Trouble", description: "15-20 Drops 3 times daily with 1/2 cup of water or as directed by the Physician.", price: "180", image: "/overydrop30.jpg", badge: "New", link: "https://www.drrajeevswellness.com/product/ovary-drops-for-ovary-trouble//" },
    { name: "Female Care Capsules", description: "60 Capsules", price: "670", image: "/femcrcap.png", badge: "Best Seller", link: "https://www.drrajeevswellness.com/product/female-care-capsules/" },
    { name: "RL-37 For Leucorrhoea All Types Female Problems Syrup", description: "Two teaspoonful twice daily or as directed by the Physician.", price: "400", image: "/RL-37.jpg", badge: "Best Seller", link: "https://www.drrajeevswellness.com/product/rl-37-for-leucorrhoea-all-types-female-problems-syrup/" },
    { name: "RL-5 Leucorrhoea & All Female Problems", description: "15 - 20 drops 3 times daily with 1/2 cup of water or as directed by the Physician", price: "180", image: "/RL-5.jpg", badge: "Best Seller", link: "https://www.drrajeevswellness.com/product/rl-5-leucorrhoea-all-female-problems/" },
    { name: "RL-61 Female Drops", description: "10 - 15 Drops should e diluted in water and taken 3times a day or as directed by the Physician.", price: "180", image: "/RL-61-Drop.jpg", badge: "Best Seller", link: "https://www.drrajeevswellness.com/product/rl-61-female-drops/" },
]


export default function FemaleCare() {
    return (
        <div>
            <AppointmentFloat />
            <Hero />
            <YoutubeCarousel videos={["BFBoEE1Yvps", "Mjgd4mMzO1o", "yZAMkqHAJFg", "SyIWZMOclmk"]} />
            <Products products={products} />
            <SuccessStory />
            <Testimonials testimonials={testimonials} />
        </div>
    )
}
