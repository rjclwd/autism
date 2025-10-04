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
    { name: "Femacare Syrup Utrine Tonic", description: "Two teaspoonful twice daily or as directed by the Physician.", price: "400", image: "/femsyp450.jpg", badge: "Best Seller", link: "https://www.drrajeevswellness.com/product/femacare-syrup-utrine-tonic/" },
    { name: "Ovary Drops, For Ovary Trouble", description: "15-20 Drops 3 times daily with 1/2 cup of water or as directed by the Physician.", price: "180", image: "/overydrop30.jpg", badge: "New", link: "https://www.drrajeevswellness.com/product/ovary-drops-for-ovary-trouble//" },
    { name: "Female Care Capsules", description: "60 Capsules", price: "670", image: "/femcrcap.png", badge: "Best Seller", link: "https://www.drrajeevswellness.com/product/female-care-capsules/" },
    { name: "RL-37 For Leucorrhoea All Types Female Problems Syrup", description: "Two teaspoonful twice daily or as directed by the Physician.", price: "400", image: "/RL-37.jpg", badge: "Best Seller", link: "https://www.drrajeevswellness.com/product/rl-37-for-leucorrhoea-all-types-female-problems-syrup/" },
    { name: "RL-5 Leucorrhoea & All Female Problems", description: "15 - 20 drops 3 times daily with 1/2 cup of water or as directed by the Physician", price: "180", image: "/RL-5.jpg", badge: "Best Seller", link: "https://www.drrajeevswellness.com/product/rl-5-leucorrhoea-all-female-problems/" },
    { name: "RL-61 Female Drops", description: "10 - 15 Drops should e diluted in water and taken 3times a day or as directed by the Physician.", price: "180", image: "/RL-61-Drop.jpg", badge: "Best Seller", link: "https://www.drrajeevswellness.com/product/rl-61-female-drops/" },
]

const yt = ["HFZgu3RniDA", "XBkVt_2m9kE", "9LFl7Tl6l9g", "g2057MVA6vc", "bxkOMphkaw8", "T4kgB41Rkr0", "MvVSVqOR-j8"];

const diseaseData = [
  {
    id: "pcos",
    name: "Polycystic Ovary Syndrome (PCOS)",
    description:
      "A hormonal disorder causing enlarged ovaries with small cysts, affecting fertility and menstrual cycles.",
    symptoms: [
      "Irregular periods",
      "Excess hair growth (hirsutism)",
      "Acne",
      "Weight gain",
      "Difficulty conceiving",
    ],
  },
  {
    id: "endometriosis",
    name: "Endometriosis",
    description:
      "A condition where tissue similar to the lining of the uterus grows outside the uterus, causing pain and fertility problems.",
    symptoms: [
      "Severe menstrual cramps",
      "Pelvic pain",
      "Pain during intercourse",
      "Heavy periods",
      "Infertility",
    ],
  },
  {
    id: "fibroids",
    name: "Uterine Fibroids",
    description:
      "Noncancerous growths in the uterus that often appear during childbearing years.",
    symptoms: [
      "Heavy menstrual bleeding",
      "Pelvic pressure or pain",
      "Frequent urination",
      "Constipation",
      "Backache or leg pain",
    ],
  },
  {
    id: "pms",
    name: "Premenstrual Syndrome (PMS)",
    description:
      "A group of symptoms that occur before menstruation, affecting mood and physical health.",
    symptoms: [
      "Mood swings",
      "Bloating",
      "Breast tenderness",
      "Fatigue",
      "Irritability",
    ],
  },
  {
    id: "menopause",
    name: "Menopause",
    description:
      "A natural biological process marking the end of menstrual cycles, usually after age 45.",
    symptoms: [
      "Hot flashes",
      "Night sweats",
      "Mood changes",
      "Vaginal dryness",
      "Sleep disturbances",
    ],
  },
  {
    id: "cervical_cancer",
    name: "Cervical Cancer",
    description:
      "A type of cancer that occurs in the cells of the cervix, often caused by HPV infection.",
    symptoms: [
      "Abnormal vaginal bleeding",
      "Pelvic pain",
      "Pain during intercourse",
      "Unusual vaginal discharge",
    ],
  },
  {
    id: "breast_cancer",
    name: "Breast Cancer",
    description:
      "A common cancer in women that forms in the cells of the breast.",
    symptoms: [
      "Lump in the breast",
      "Change in breast shape",
      "Nipple discharge",
      "Skin dimpling",
    ],
  },
  {
    id: "pelvic_inflammatory_disease",
    name: "Pelvic Inflammatory Disease (PID)",
    description:
      "An infection of the female reproductive organs, usually caused by sexually transmitted bacteria.",
    symptoms: [
      "Pelvic pain",
      "Pain during urination",
      "Abnormal vaginal discharge",
      "Fever",
      "Pain during intercourse",
    ],
  },
  {
    id: "osteoporosis",
    name: "Osteoporosis",
    description:
      "A condition where bones become weak and brittle, more common in postmenopausal women.",
    symptoms: [
      "Bone fractures",
      "Back pain",
      "Loss of height over time",
      "Stooped posture",
    ],
  },
  {
    id: "urinary_incontinence",
    name: "Urinary Incontinence",
    description:
      "Loss of bladder control, common in women after childbirth or menopause.",
    symptoms: [
      "Leakage of urine when coughing or sneezing",
      "Sudden urge to urinate",
      "Frequent urination",
      "Nighttime urination",
    ],
  },
];


export default function FemaleCare() {
    return (
        <div>
            <AppointmentFloat />
            <HeroUniversal
                promoTitle="One of India’s Leading Homeopathic Clinic Networks"
                subtitle="Gentle, natural therapies that nurture women’s health across every stage of life."
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
