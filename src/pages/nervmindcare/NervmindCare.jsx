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
    name: "Cerolin Drops Effective for Brain",
    description:
      "20 drops from bottle C diluted with one tablespoon of water twice a day or as directed by the Physician.",
    price: "1200",
    image: "/cerolin-drops-effective-for-brain.jpg",
    badge: "Autism & Mind Care",
    link: "https://www.drrajeevswellness.com/product/cerolin-drops-effective-for-brain/",
  },
  {
    name: "Neuroplus",
    description:
      "20 drops from bottle C diluted with one tablespoon of water twice a day or as directed by the Physician.",
    price: "1200",
    image: "/neuroplus.jpg",
    badge: "Autism & Mind Care",
    link: "https://www.drrajeevswellness.com/product/neuroplus/",
  },
  {
    name: "RL-43 IQ Memory Concentration Drops",
    description:
      "15–20 drops 3 times daily with 1/2 cup of water or as directed by the Physician.",
    price: "180",
    image: "/rl-43-for-iq-memory-concentration-drops.jpg",
    badge: "Mind Care",
    link: "https://www.drrajeevswellness.com/product/rl-43-for-iq-memory-concentration-drops/",
  },
  {
    name: "RL-47 Sleep, Tension & Stress Drops",
    description:
      "15–20 drops 3 times daily with 1/2 cup of water or as directed by the Physician.",
    price: "180",
    image: "/rl-47-for-sleep-tension-stress-drops.jpg",
    badge: "Mind Care",
    link: "https://www.drrajeevswellness.com/product/rl-47-for-sleep-tension-stress-drops/",
  },
  {
    name: "RL-66 Circulation Drops",
    description:
      "10–15 drops diluted in water, taken 3 times a day or as directed by the Physician.",
    price: "180",
    image: "/rl-66-circulation-drops.jpg",
    badge: "Mind Care",
    link: "https://www.drrajeevswellness.com/product/rl-66-circulation-drops/",
  },
  {
    name: "RL-73 Vertigo Drops",
    description:
      "10–15 drops diluted in water, taken 3 times a day or as directed by the Physician.",
    price: "180",
    image: "/rl-73-vertigo-drops.jpg",
    badge: "Mind Care",
    link: "https://www.drrajeevswellness.com/product/rl-73-vertigo-drops/",
  },
]

const yt = ["1-cBBo0wLYc", "eKXMAVi3bbc", "2o4muZeKphk"];

export default function NervmindCare() {
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
