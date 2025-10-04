import AppointmentFloat from '../../components/AppointmentFloat/AppointmentFloat'
import SuccessStory from './SuccessStory/SuccessStory'
import YoutubeCarousel from '../../components/YoutubeEm/YoutubeEm'
import Products from '../../components/Products/Products'
import Testimonials from '../../components/Testimonials/Testimonials'
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
    { name: "RL-22 For Eczema & Skin Disease Drops", description: "15 - 20 drops 3 times daily with 1/2 cup of water or as directed by the Physician.", price: "180", image: "/RL-22.jpg", badge: "Best Seller", link: "https://www.drrajeevswellness.com/product/rl-22-for-eczema-skin-disease-drops/" },
    { name: "RL-30 For Warts & Corn Mole Drops", description: "15 - 20 drop 3 times Daily with 1/2 cup of water or as directed by the Physician.", price: "180", image: "/RL-30.jpg", badge: "New", link: "https://www.drrajeevswellness.com/product/rl-30-for-warts-corn-mole-drops/" },
    { name: "RL-48 For Psoriasis Drops", description: "15 - 20 drops 3 times daily with 1/2 cup of water or as directed by the Physician.", price: "180", image: "/RL-481.jpg", badge: "Best Seller", link: "https://www.drrajeevswellness.com/product/rl-48-for-psoriasis-drops/" },
    { name: "RL-69 Skin Drops", description: "10 - 15 Drops should e diluted in water and taken 3 times a day or as directed by the Physician.", price: "180", image: "/RL-69-Drop.jpg", badge: "Best Seller", link: "https://www.drrajeevswellness.com/product/rl-69-skin-drops/" },
    { name: "RL-75 Reactivating Drops", description: "10 - 15 Drops should e diluted in water and taken 3 times a day or as directed by the Physician", price: "180", image: "/RL-751.jpg", badge: "Best Seller", link: "https://www.drrajeevswellness.com/product/rl-75-reactivating-drops/" },
]

const yt = ["iyfhPVuzreI", "rOp23WT7Dng", "EvPhJMvE7ZQ", "Zj5pC0qRE9I", "pFBx17AkW8s"];

const diseaseData = [
  {
    id: "acne",
    name: "Acne",
    description:
      "A skin condition where hair follicles become clogged with oil and dead skin cells, leading to pimples, blackheads, and cysts.",
    symptoms: [
      "Pimples",
      "Blackheads/whiteheads",
      "Cystic lesions",
      "Scarring or dark spots",
    ],
  },
  {
    id: "eczema",
    name: "Eczema (Atopic Dermatitis)",
    description:
      "A chronic skin condition that causes inflammation, itching, redness, and dryness.",
    symptoms: [
      "Dry, itchy skin",
      "Red patches",
      "Thickened or cracked skin",
      "Recurring flare-ups",
    ],
  },
  {
    id: "psoriasis",
    name: "Psoriasis",
    description:
      "An autoimmune disease that causes rapid buildup of skin cells, leading to scaling and inflammation.",
    symptoms: [
      "Red patches of skin",
      "Silvery-white scales",
      "Itchy or painful skin",
      "Cracks that may bleed",
    ],
  },
  {
    id: "fungal_infections",
    name: "Fungal Infections",
    description:
      "Skin infections caused by fungi, such as ringworm, athlete’s foot, or yeast infections.",
    symptoms: [
      "Itchy rash",
      "Red circular patches",
      "Scaling skin",
      "Blisters in some cases",
    ],
  },
  {
    id: "urticaria",
    name: "Hives (Urticaria)",
    description:
      "A skin reaction causing itchy welts, often triggered by allergens, stress, or medications.",
    symptoms: [
      "Raised, red bumps",
      "Itching",
      "Swelling of skin",
      "Burning or stinging sensation",
    ],
  },
  {
    id: "rosacea",
    name: "Rosacea",
    description:
      "A chronic skin condition that causes facial redness, swelling, and visible blood vessels.",
    symptoms: [
      "Facial redness",
      "Swollen red bumps",
      "Eye irritation",
      "Visible blood vessels",
    ],
  },
  {
    id: "vitiligo",
    name: "Vitiligo",
    description:
      "A condition where the skin loses pigment cells, leading to white patches on different parts of the body.",
    symptoms: [
      "White patches on skin",
      "Premature greying of hair",
      "Change in color inside mouth/nose",
    ],
  },
  {
    id: "melasma",
    name: "Melasma",
    description:
      "A skin condition that causes brown or gray-brown patches, usually on the face, often triggered by sun or hormones.",
    symptoms: [
      "Dark facial patches",
      "Uneven skin tone",
      "Worsening with sun exposure",
    ],
  },
  {
    id: "skin_allergies",
    name: "Skin Allergies",
    description:
      "Irritations triggered by allergens, chemicals, or food reactions.",
    symptoms: [
      "Itchy red rash",
      "Swelling",
      "Burning or stinging",
      "Peeling or blistering skin",
    ],
  },
  {
    id: "skin_cancer",
    name: "Skin Cancer",
    description:
      "Abnormal growth of skin cells, often caused by sun damage or UV exposure.",
    symptoms: [
      "New unusual growths",
      "Changes in existing moles",
      "Sores that don’t heal",
      "Bleeding or crusting skin spots",
    ],
  },
];

export default function SkinCare() {
    return (
        <div>
            <AppointmentFloat />
            <HeroUniversal
                promoTitle="One of India’s Leading Homeopathic Clinic Networks"
                subtitle="Holistic homeopathic solutions designed to restore men’s health, strength, and vitality."
                images={["/skinbanner.png"]}
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
            <Products products={products}/>
            <SuccessStory />
            <Testimonials testimonials={testimonials} />
        </div>
    )
}
