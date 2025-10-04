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
    name: "Hairlax Drops for Grow & Healthy Hair",
    description: "Adult: 20 drops in a tablespoon of water, 1/2 an hour before eating, 3 to 5 times daily. Children: Half the adult dose or as directed by the Physician.",
    price: "180",
    image: "/hairlax-drops-for-grow-healthy-hair.jpg",
    badge: "Hair & Beauty Care",
    link: "https://www.drrajeevswellness.com/product/hairlax-drops-for-grow-healthy-hair/"
  },
  {
    name: "RL-2 Acne, Pimple & Skin Dark Drops",
    description: "15–20 drops 3 times daily with 1/2 cup of water or as directed by the Physician.",
    price: "180",
    image: "/rl-2-acne-pimple-skin-dark-drops.jpg",
    badge: "Hair & Beauty Care",
    link: "https://www.drrajeevswellness.com/product/rl-2-acne-pimple-skin-dark-drops/"
  },
  {
    name: "RL-20 Face Black Spots, Wrinkles & Pigmentation Drops",
    description: "15–20 drops 3 times daily with 1/2 cup of water or as directed by the Physician.",
    price: "180",
    image: "/rl-20-for-face-black-spots-wrinkles-pigmentation-drops.jpg",
    badge: "Hair & Beauty Care",
    link: "https://www.drrajeevswellness.com/product/rl-20-face-black-spots-wrinkles-pigmentation-drops/"
  },
  {
    name: "RL-4 Premature Hair Loss, Grey & Thinning of Hair",
    description: "15–20 drops 3 times daily with 1/2 cup of water or as directed by the Physician.",
    price: "180",
    image: "/rl-4-premature-hair-loss-grey-thinning-of-hair.jpg",
    badge: "Hair & Beauty Care",
    link: "https://www.drrajeevswellness.com/product/rl-4-premature-hair-loss-grey-thinning-of-hair/"
  }
]


const yt = ["M9RfHVJjiRw", "wIQIUGBD69M", "EvPhJMvE7ZQ", "wFjZfdqI8Xg", "MvVSVqOR-j8", "6xk5yqtxnLg", "P-REURwsk"]

const diseaseData = [
  {
    id: "hair_loss",
    name: "Hair Loss (Alopecia)",
    description:
      "A common condition where hair falls out from the scalp or body, which may be temporary or permanent.",
    symptoms: [
      "Thinning hair",
      "Receding hairline",
      "Patchy bald spots",
      "Excess hair shedding",
    ],
  },
  {
    id: "dandruff",
    name: "Dandruff",
    description:
      "A scalp condition that causes flaking and sometimes mild itching due to excess oil or fungal overgrowth.",
    symptoms: [
      "White or yellow scalp flakes",
      "Itchy scalp",
      "Oily patches on scalp",
      "Scalp irritation",
    ],
  },
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
    id: "hyperpigmentation",
    name: "Hyperpigmentation",
    description:
      "A common condition where patches of skin become darker than surrounding areas due to excess melanin.",
    symptoms: [
      "Dark patches on skin",
      "Uneven skin tone",
      "Sun spots or age spots",
    ],
  },
  {
    id: "psoriasis",
    name: "Psoriasis (Scalp/skin)",
    description:
      "An autoimmune condition that causes rapid skin cell turnover, leading to scaling and inflammation.",
    symptoms: [
      "Red patches of skin",
      "Silvery scales",
      "Itchy or painful lesions",
      "Flaking on scalp",
    ],
  },
  {
    id: "eczema",
    name: "Eczema (Atopic Dermatitis)",
    description:
      "A skin condition causing inflammation, itching, and dryness, often triggered by allergens or irritants.",
    symptoms: [
      "Dry, sensitive skin",
      "Itching",
      "Red or inflamed patches",
      "Thickened or cracked skin",
    ],
  },
  {
    id: "premature_greying",
    name: "Premature Greying",
    description:
      "Loss of natural hair pigment before the age of 30, often influenced by genetics, stress, or deficiencies.",
    symptoms: [
      "Grey or white strands at young age",
      "Dry or brittle hair",
      "Gradual loss of natural hair color",
    ],
  },
  {
    id: "dark_circles",
    name: "Dark Circles",
    description:
      "Discoloration under the eyes caused by genetics, stress, lack of sleep, or skin thinning.",
    symptoms: [
      "Dark or bluish under-eye patches",
      "Tired appearance",
      "Eye puffiness",
    ],
  },
  {
    id: "pigmentation_melasma",
    name: "Melasma",
    description:
      "A skin condition that causes brown or gray-brown patches, often on the face, commonly in women.",
    symptoms: [
      "Dark patches on cheeks, forehead, or upper lip",
      "Worsening with sun exposure",
      "Uneven skin tone",
    ],
  },
  {
    id: "nail_disorders",
    name: "Nail Disorders",
    description:
      "Conditions that affect nail health, including fungal infections, brittle nails, or ridges.",
    symptoms: [
      "Discolored nails",
      "Brittle or splitting nails",
      "Thickened nails",
      "Pain or swelling around nails",
    ],
  },
];

export default function HairbeautyCare() {
    return (
        <div>
            <AppointmentFloat />
            <HeroUniversal
                promoTitle="One of India’s Leading Homeopathic Clinic Networks"
                subtitle="Holistic homeopathic solutions designed to restore men’s health, strength, and vitality."
                images={["/hairbeautycarebanner.png"]}
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
