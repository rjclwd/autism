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

const diseaseData = [
  {
    id: "asthma",
    name: "Asthma",
    description:
      "A chronic condition in which airways become inflamed and narrowed, making breathing difficult.",
    symptoms: [
      "Wheezing",
      "Shortness of breath",
      "Chest tightness",
      "Coughing (especially at night or early morning)",
    ],
  },
  {
    id: "copd",
    name: "Chronic Obstructive Pulmonary Disease (COPD)",
    description:
      "A group of progressive lung diseases including emphysema and chronic bronchitis that cause airflow blockage.",
    symptoms: [
      "Chronic cough",
      "Frequent respiratory infections",
      "Shortness of breath",
      "Fatigue",
    ],
  },
  {
    id: "pneumonia",
    name: "Pneumonia",
    description:
      "An infection that inflames the air sacs in one or both lungs, which may fill with fluid.",
    symptoms: [
      "Chest pain when breathing",
      "Cough with phlegm",
      "Fever and chills",
      "Shortness of breath",
    ],
  },
  {
    id: "tuberculosis",
    name: "Tuberculosis (TB)",
    description:
      "A bacterial infection that primarily affects the lungs but can spread to other organs.",
    symptoms: [
      "Persistent cough (lasting more than 3 weeks)",
      "Coughing up blood",
      "Night sweats",
      "Weight loss",
      "Fatigue",
    ],
  },
  {
    id: "bronchitis",
    name: "Bronchitis",
    description:
      "Inflammation of the bronchial tubes that carry air to and from the lungs.",
    symptoms: [
      "Persistent cough with mucus",
      "Chest discomfort",
      "Shortness of breath",
      "Fatigue",
    ],
  },
  {
    id: "pulmonary_fibrosis",
    name: "Pulmonary Fibrosis",
    description:
      "A lung disease that occurs when lung tissue becomes damaged and scarred, making it hard to breathe.",
    symptoms: [
      "Shortness of breath",
      "Dry cough",
      "Fatigue",
      "Unexplained weight loss",
      "Clubbing of fingers/toes",
    ],
  },
  {
    id: "sleep_apnea",
    name: "Sleep Apnea",
    description:
      "A sleep disorder in which breathing repeatedly stops and starts due to airway obstruction or brain signal issues.",
    symptoms: [
      "Loud snoring",
      "Interrupted breathing during sleep",
      "Daytime sleepiness",
      "Morning headaches",
    ],
  },
  {
    id: "allergic_rhinitis",
    name: "Allergic Rhinitis",
    description:
      "An allergic reaction that causes sneezing, congestion, and runny nose when exposed to allergens.",
    symptoms: [
      "Runny or stuffy nose",
      "Sneezing",
      "Itchy eyes, nose, or throat",
      "Watery eyes",
    ],
  },
  {
    id: "lung_cancer",
    name: "Lung Cancer",
    description:
      "A type of cancer that begins in the lungs, often associated with smoking but can occur in non-smokers too.",
    symptoms: [
      "Persistent cough",
      "Coughing up blood",
      "Chest pain",
      "Hoarseness",
      "Unexplained weight loss",
    ],
  },
  {
    id: "covid19",
    name: "COVID-19 (Coronavirus Infection)",
    description:
      "A viral infection that primarily affects the respiratory system and can range from mild symptoms to severe pneumonia.",
    symptoms: [
      "Fever",
      "Cough",
      "Loss of taste or smell",
      "Difficulty breathing",
      "Fatigue",
    ],
  },
];

export default function RespiratoryCare() {
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
