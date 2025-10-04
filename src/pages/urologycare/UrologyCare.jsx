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
    name: "Calculin Syrup for Renal Calculi",
    description:
      "2 teaspoonfuls thrice daily or as directed by the Physician.",
    price: "400",
    image: "/calculin-syrup-for-renal-calculi.jpg",
    badge: "Urology Care",
    link: "https://www.drrajeevswellness.com/product/calculin-syrup-for-renal-calculi/",
  },
  {
    name: "RL-24 Kidney Stone Drops",
    description:
      "15–20 drops 3 times daily with 1/2 cup of water or as directed by the Physician.",
    price: "180",
    image: "/rl-24-for-kidney-stone-drops.jpg",
    badge: "Urology Care",
    link: "https://www.drrajeevswellness.com/product/rl-24-for-kidney-stone-drops/",
  },
  {
    name: "RL-25 Tract Infection & Burning Urination Drops",
    description:
      "15–20 drops 3 times daily with 1/2 cup of water or as directed by the Physician.",
    price: "180",
    image: "/rl-25-for-tract-infection-burning-urination-drops.jpg",
    badge: "Urology Care",
    link: "https://www.drrajeevswellness.com/product/rl-25-for-tract-infection-burning-urination-drops/",
  },
  {
    name: "RL-49 Urea & Creatinine Drops",
    description:
      "15–20 drops 3 times daily with 1/2 cup of water or as directed by the Physician.",
    price: "180",
    image: "/rl-49-for-urea-creatinine-drops.jpg",
    badge: "Urology Care",
    link: "https://www.drrajeevswellness.com/product/rl-49-for-urea-creatinine-drops/",
  },
  {
    name: "RL-67 Kidney Albuminaria Drops",
    description:
      "As directed by the Physician.",
    price: "180",
    image: "/rl-67-kidney-aibuninaria-drops.webp",
    badge: "Urology Care",
    link: "https://www.drrajeevswellness.com/product/rl-67-kidney-albuminaria-drops/",
  },
  {
    name: "RL-70 Cardiac Efficiency Drops",
    description:
      "10–15 drops diluted in water and taken 3 times a day or as directed by the Physician.",
    price: "180",
    image: "/rl-70-cardiac-efficiency-drops.jpg",
    badge: "Urology Care",
    link: "https://www.drrajeevswellness.com/product/rl-70-cardiac-efficiency-drops/",
  },
  {
    name: "RL-74 Urinary Drops",
    description:
      "10–15 drops diluted in water and taken 3 times a day or as directed by the Physician.",
    price: "180",
    image: "/rl-74-urinary-drops.jpg",
    badge: "Urology Care",
    link: "https://www.drrajeevswellness.com/product/rl-74-urinary-drops/",
  },
]

const yt = ["4t5mXCJdymo", "NeaDb_UNyYY", "cBm6k9uNFrc"]

const diseaseData = [
  {
    id: "uti",
    name: "Urinary Tract Infection (UTI)",
    description:
      "An infection in any part of the urinary system, most often the bladder and urethra.",
    symptoms: [
      "Burning sensation while urinating",
      "Frequent urge to urinate",
      "Cloudy or strong-smelling urine",
      "Pelvic pain",
    ],
  },
  {
    id: "kidney_stones",
    name: "Kidney Stones",
    description:
      "Hard deposits of minerals and salts that form inside the kidneys and cause severe pain when passing.",
    symptoms: [
      "Severe back or side pain",
      "Pain during urination",
      "Blood in urine",
      "Nausea and vomiting",
    ],
  },
  {
    id: "bph",
    name: "Benign Prostatic Hyperplasia (BPH)",
    description:
      "Noncancerous enlargement of the prostate gland that can block urine flow in older men.",
    symptoms: [
      "Frequent urination (especially at night)",
      "Weak urine stream",
      "Difficulty starting urination",
      "Incomplete bladder emptying",
    ],
  },
  {
    id: "prostate_cancer",
    name: "Prostate Cancer",
    description:
      "A cancer that occurs in the prostate gland, common in older men.",
    symptoms: [
      "Difficulty urinating",
      "Weak or interrupted flow",
      "Blood in urine or semen",
      "Pelvic or back pain",
    ],
  },
  {
    id: "bladder_cancer",
    name: "Bladder Cancer",
    description:
      "A type of cancer that begins in the cells of the bladder lining.",
    symptoms: [
      "Blood in urine",
      "Painful urination",
      "Frequent urination",
      "Pelvic pain",
    ],
  },
  {
    id: "erectile_dysfunction",
    name: "Erectile Dysfunction (ED)",
    description:
      "Inability to achieve or maintain an erection sufficient for sexual intercourse.",
    symptoms: [
      "Difficulty getting an erection",
      "Trouble maintaining erection",
      "Reduced sexual desire",
    ],
  },
  {
    id: "incontinence",
    name: "Urinary Incontinence",
    description:
      "Loss of bladder control, leading to involuntary urine leakage.",
    symptoms: [
      "Leakage during coughing/sneezing",
      "Urgent need to urinate",
      "Frequent urination",
      "Nighttime urination",
    ],
  },
  {
    id: "interstitial_cystitis",
    name: "Interstitial Cystitis",
    description:
      "A chronic bladder condition causing bladder pressure, bladder pain, and sometimes pelvic pain.",
    symptoms: [
      "Chronic pelvic pain",
      "Frequent urination",
      "Urgency to urinate",
      "Discomfort during sex",
    ],
  },
  {
    id: "renal_failure",
    name: "Chronic Kidney Disease (CKD)",
    description:
      "A gradual loss of kidney function over time, which may progress to kidney failure.",
    symptoms: [
      "Swelling in legs or ankles",
      "Fatigue",
      "Frequent urination at night",
      "High blood pressure",
      "Nausea",
    ],
  },
  {
    id: "hydrocele",
    name: "Hydrocele",
    description:
      "A fluid-filled sac around a testicle causing swelling in the scrotum, common in infants but also in adults.",
    symptoms: [
      "Scrotal swelling",
      "Heaviness in scrotum",
      "Discomfort during movement",
    ],
  },
];

export default function UrologyCare() {
    return (
        <div>
            <AppointmentFloat />
            <HeroUniversal
                promoTitle="One of India’s Leading Homeopathic Clinic Networks"
                subtitle="Holistic homeopathic solutions designed to restore men’s health, strength, and vitality."
                images={["/sexhelmen.png", "/sexhelmenemo.png", "/sexhelmenfat.png"]}
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
