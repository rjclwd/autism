import AppointmentFloat from '../../components/AppointmentFloat/AppointmentFloat'
import SuccessStory from './SuccessStory/SuccessStory'
import YoutubeCarousel from '../../components/YoutubeEm/YoutubeEm'
import Testimonials from '../../components/Testimonials/Testimonials'
import Products from '../../components/Products/Products'
import HeroUniversal from '../../components/HeroUniversal/HeroUniversal'
import DiseaseTypes from '../../components/DiseaseTypes/DiseaseTypes'

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
    name: "Joint Care Capsules",
    description: "60 Capsules",
    price: "770",
    image: "/joint-care-capsules.png",
    badge: "Ortho Care",
    link: "https://www.drrajeevswellness.com/product/joint-care-capsules/"
  },
  {
    name: "Rheum Drops",
    description: "15–20 Drops 3 times daily with 1/2 cup of water or as directed by the Physician.",
    price: "180",
    image: "/rheum-drops-for-rheumatic-pain.jpg",
    badge: "Ortho Care",
    link: "https://www.drrajeevswellness.com/product/rheum-drops-for-rheumatic-pain/"
  },
  {
    name: "Rheum Plus Drops",
    description: "10–15 Drops should be diluted in water and taken 3 times a day or as directed by the Physician.",
    price: "180",
    image: "/rheum-plus-for-rheumatic-muscles-pain-drops.jpg",
    badge: "Ortho Care",
    link: "https://www.drrajeevswellness.com/product/rheum-plus-for-rheumatic-muscles-pain-drops/"
  },
  {
    name: "Rheum Plus Syrup",
    description: "One teaspoonful thrice daily or as directed by the Physician.",
    price: "400",
    image: "/rheum-plus-syrup-for-all-types-of-rheumatic-sciatica-muscles-pain.jpg",
    badge: "Ortho Care",
    link: "https://www.drrajeevswellness.com/product/rheum-plus-syrup-for-all-types-of-rheumatic-sciatica-muscles-pain/"
  },
  {
    name: "Rheumadex Tonic",
    description: "2 to 3 teaspoonful with a little water twice daily or as directed by the physician.",
    price: "400",
    image: "/rheumadex-tonic.jpg",
    badge: "Ortho Care",
    link: "https://www.drrajeevswellness.com/product/rheumadex-tonic/"
  },
  {
    name: "RL-15 Nerve, Low Back & Sciatica Pain Drops",
    description: "15–20 drops 3 times daily with 1/2 cup of water or as directed by the Physician.",
    price: "180",
    image: "/rl-15-for-nerve-legsarms-low-back-sciatica-pain-drops.jpg",
    badge: "Ortho Care",
    link: "https://www.drrajeevswellness.com/product/rl-15-for-nerve-legsarms-low-back-sciatica-pain-drops/"
  },
  {
    name: "RL-23 Uric Acid & Heel Pain Drops",
    description: "15–20 drops 3 times daily with 1/2 cup of water or as directed by the Physician.",
    price: "180",
    image: "/rl-23-for-uric-acid-joints-pain-heel-pains-drops.jpg",
    badge: "Ortho Care",
    link: "https://www.drrajeevswellness.com/product/rl-23-for-uric-acid-joints-pain-heel-pains-drops/"
  },
  {
    name: "RL-3 Rheumatic Joint Pain Drops",
    description: "15–20 drops 3 times daily with 1/2 cup of water or as directed by the Physician.",
    price: "180",
    image: "/rl-3-rheumathic-muscles-joint-pain-drops.jpg",
    badge: "Ortho Care",
    link: "https://www.drrajeevswellness.com/product/rl-3-rheumathic-muscles-joint-pain-drops/"
  },
  {
    name: "RL-35 Rheumatic Joint & Muscle Pain Syrup",
    description: "One teaspoon thrice daily or as directed by the Physician.",
    price: "400",
    image: "/rl-35-rheumatic-joint-muscle-pain-joint-pain-nerve-pain-syrup.jpg",
    badge: "Ortho Care",
    link: "https://www.drrajeevswellness.com/product/rl-35-rheumatic-joint-muscle-pain-joint-pain-nerve-pain-syrup/"
  },
  {
    name: "RL-55 Inflammation Drops",
    description: "10–15 Drops should be diluted in water and taken 3 times a day or as directed by the Physician.",
    price: "180",
    image: "/rl-55-inflammation-drop.jpg",
    badge: "Ortho Care",
    link: "https://www.drrajeevswellness.com/product/rl-55-inflammation-drop/"
  },
  {
    name: "RL-8 Spondylitis Drops",
    description: "15–20 drops 3 times daily with 1/2 cup of water or as directed by the Physician.",
    price: "180",
    image: "/rl-8-spondylitis-neck-spine-shoulder-pain-drops.jpg",
    badge: "Ortho Care",
    link: "https://www.drrajeevswellness.com/product/rl-8-spondylitis-neck-spine-shoulder-pain-drops/"
  },
  {
    name: "Spondylax Drops",
    description: "10–15 Drops should be diluted in water and taken 3 times a day or as directed by the Physician.",
    price: "180",
    image: "/spondylax-drops-neck-pain-vertigo-relief.jpg",
    badge: "Ortho Care",
    link: "https://www.drrajeevswellness.com/product/spondylax-drops-neck-pain-vertigo-relief/"
  }
]

const yt = ["KZLddWxHUJU", "qzUI3BAavEU", "_OYn-QBb4wc", "0-Ud9hEljuY"]

const diseaseData = [
  {
    id: "osteoarthritis",
    name: "Osteoarthritis",
    description:
      "A degenerative joint disease where cartilage wears down over time, causing pain and stiffness.",
    symptoms: [
      "Joint pain",
      "Stiffness after rest",
      "Swelling",
      "Reduced flexibility",
    ],
  },
  {
    id: "rheumatoid_arthritis",
    name: "Rheumatoid Arthritis",
    description:
      "An autoimmune condition where the immune system attacks joints, leading to inflammation and deformity.",
    symptoms: [
      "Joint swelling",
      "Morning stiffness",
      "Pain in multiple joints",
      "Fatigue",
    ],
  },
  {
    id: "osteoporosis",
    name: "Osteoporosis",
    description:
      "A condition where bones become weak and brittle, increasing the risk of fractures.",
    symptoms: [
      "Frequent fractures",
      "Back pain",
      "Loss of height over time",
      "Stooped posture",
    ],
  },
  {
    id: "slip_disc",
    name: "Slip Disc (Herniated Disc)",
    description:
      "A condition where the soft cushion between spinal vertebrae bulges or ruptures, pressing on nerves.",
    symptoms: [
      "Back pain",
      "Leg pain (sciatica)",
      "Numbness or tingling",
      "Muscle weakness",
    ],
  },
  {
    id: "sciatica",
    name: "Sciatica",
    description:
      "Pain that radiates along the sciatic nerve, usually caused by a herniated disc or bone spur.",
    symptoms: [
      "Lower back pain",
      "Pain radiating to legs",
      "Tingling or numbness",
      "Weakness in affected leg",
    ],
  },
  {
    id: "spondylosis",
    name: "Spondylosis",
    description:
      "Age-related wear and tear of the spinal discs and joints, often leading to stiffness and pain.",
    symptoms: [
      "Neck or back pain",
      "Stiffness",
      "Muscle spasms",
      "Limited mobility",
    ],
  },
  {
    id: "frozen_shoulder",
    name: "Frozen Shoulder (Adhesive Capsulitis)",
    description:
      "A condition characterized by stiffness and pain in the shoulder joint, limiting movement.",
    symptoms: [
      "Shoulder stiffness",
      "Pain worsening at night",
      "Limited arm movement",
      "Gradual loss of flexibility",
    ],
  },
  {
    id: "gout",
    name: "Gout",
    description:
      "A type of arthritis caused by uric acid crystal buildup in joints, leading to sudden severe pain.",
    symptoms: [
      "Sudden joint pain (often in big toe)",
      "Swelling and redness",
      "Warmth in affected joint",
      "Recurring flare-ups",
    ],
  },
  {
    id: "ligament_injury",
    name: "Ligament Injury (ACL/MCL Tears)",
    description:
      "Tears or sprains in ligaments, often caused by sports injuries or accidents.",
    symptoms: [
      "Joint instability",
      "Swelling",
      "Sudden pain",
      "Difficulty bearing weight",
    ],
  },
  {
    id: "carpal_tunnel",
    name: "Carpal Tunnel Syndrome",
    description:
      "A condition where the median nerve in the wrist is compressed, leading to hand and finger symptoms.",
    symptoms: [
      "Numbness in hand",
      "Tingling in fingers",
      "Weak grip strength",
      "Hand pain at night",
    ],
  },
];

export default function OrthoCare() {
    return (
        <div>
            <AppointmentFloat />
            <HeroUniversal
                promoTitle="One of India’s Leading Homeopathic Clinic Networks"
                subtitle="Holistic homeopathic solutions designed to restore men’s health, strength, and vitality."
                images={["/orthocarebanner.png"]}
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
            <DiseaseTypes diseaseData={diseaseData} />
            <Products products={products} />
            <SuccessStory />
            <Testimonials testimonials={testimonials} />
        </div>
    )
}
