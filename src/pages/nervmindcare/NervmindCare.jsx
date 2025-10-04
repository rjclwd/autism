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
const diseaseData = [
  {
    id: "anxiety_disorder",
    name: "Anxiety Disorders",
    description:
      "A group of mental health conditions characterized by excessive fear, worry, or nervousness that interferes with daily activities.",
    symptoms: [
      "Restlessness",
      "Rapid heartbeat",
      "Excessive worrying",
      "Sleep problems",
      "Difficulty concentrating",
    ],
  },
  {
    id: "depression",
    name: "Depression",
    description:
      "A mood disorder that causes persistent sadness and loss of interest in activities, affecting how you feel and function.",
    symptoms: [
      "Persistent sadness",
      "Loss of interest in activities",
      "Fatigue",
      "Sleep disturbances",
      "Feelings of hopelessness",
    ],
  },
  {
    id: "schizophrenia",
    name: "Schizophrenia",
    description:
      "A serious mental disorder affecting how a person thinks, feels, and behaves, often involving delusions and hallucinations.",
    symptoms: [
      "Hallucinations",
      "Delusions",
      "Disorganized speech",
      "Reduced social engagement",
      "Difficulty concentrating",
    ],
  },
  {
    id: "bipolar_disorder",
    name: "Bipolar Disorder",
    description:
      "A mental health condition causing extreme mood swings including emotional highs (mania) and lows (depression).",
    symptoms: [
      "Manic episodes (increased energy, euphoria)",
      "Depressive episodes (sadness, fatigue)",
      "Impulsive behavior",
      "Sleep disturbances",
    ],
  },
  {
    id: "epilepsy",
    name: "Epilepsy",
    description:
      "A neurological disorder marked by recurrent, unprovoked seizures due to abnormal brain activity.",
    symptoms: [
      "Seizures",
      "Loss of awareness",
      "Confusion",
      "Uncontrolled movements",
    ],
  },
  {
    id: "parkinsons_disease",
    name: "Parkinson’s Disease",
    description:
      "A progressive nervous system disorder that affects movement and coordination.",
    symptoms: [
      "Tremors",
      "Slow movement (bradykinesia)",
      "Muscle stiffness",
      "Impaired balance",
    ],
  },
  {
    id: "alzheimers_disease",
    name: "Alzheimer’s Disease",
    description:
      "A progressive brain disorder leading to memory loss, confusion, and impaired thinking.",
    symptoms: [
      "Memory loss",
      "Difficulty planning or problem-solving",
      "Confusion with time/place",
      "Personality changes",
    ],
  },
  {
    id: "stroke",
    name: "Stroke",
    description:
      "A condition caused by reduced blood flow to the brain, leading to cell death and neurological damage.",
    symptoms: [
      "Sudden numbness or weakness",
      "Trouble speaking",
      "Loss of vision",
      "Dizziness or loss of balance",
      "Severe headache",
    ],
  },
  {
    id: "migraine",
    name: "Migraine",
    description:
      "A type of headache disorder characterized by severe, throbbing pain often accompanied by other symptoms.",
    symptoms: [
      "Severe headache",
      "Sensitivity to light and sound",
      "Nausea or vomiting",
      "Visual disturbances (aura)",
    ],
  },
  {
    id: "multiple_sclerosis",
    name: "Multiple Sclerosis (MS)",
    description:
      "An autoimmune disease where the immune system attacks nerve coverings, disrupting communication between brain and body.",
    symptoms: [
      "Numbness or weakness",
      "Vision problems",
      "Tremors or lack of coordination",
      "Fatigue",
      "Cognitive difficulties",
    ],
  },
];

export default function NervmindCare() {
    return (
        <div>
            <AppointmentFloat />
            <HeroUniversal
                promoTitle="One of India’s Leading Homeopathic Clinic Networks"
                subtitle="Holistic homeopathic solutions designed to cure all your nerve and mind related problem."
                images={["/nervmindcarebanner.png"]}
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
