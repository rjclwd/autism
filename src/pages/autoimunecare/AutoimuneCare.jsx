import AppointmentFloat from "../../components/AppointmentFloat/AppointmentFloat";
import SuccessStory from "./SuccessStory/SuccessStory";
import YoutubeCarousel from "../../components/YoutubeEm/YoutubeEm";
import Testimonials from "../../components/Testimonials/Testimonials";
import Products from "../../components/Products/Products";
import HeroUniversal from "../../components/HeroUniversal/HeroUniversal";
import DiseaseTypes from "../../components/DiseaseTypes/DiseaseTypes";

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
];

const products = [
  {
    name: "Dexolex Syrup for Iron",
    description:
      "Adult: 2 teaspoonfuls thrice daily. Children: 1 teaspoonful thrice daily before meals or as directed by the Physician.",
    price: "400",
    image: "/dexolex-syrup-for-iron.jpg",
    badge: "Autoimmune Disease",
    link: "https://www.drrajeevswellness.com/product/dexolex-syrup-for-iron/",
  },
  {
    name: "Fever Tonic (For all types of Fever)",
    description:
      "Adult: 2 teaspoonfuls thrice daily. Children: 1/2 or 1 teaspoonful thrice daily or as directed by the Physician.",
    price: "400",
    image: "/fever-tonic-for-all-types-of-fever.jpg",
    badge: "Autoimmune Disease",
    link: "https://www.drrajeevswellness.com/product/fever-tonic-for-all-types-of-fever/",
  },
  {
    name: "Feverex Syrup (Unique Preparation for Fever)",
    description:
      "Adult: 2 teaspoonfuls thrice daily. Children: 1/2 or 1 teaspoonful thrice daily or as directed by the Physician.",
    price: "400",
    image: "/feverex-syrup-a-unique-preparation-for-fever.jpg",
    badge: "Autoimmune Disease",
    link: "https://www.drrajeevswellness.com/product/feverex-syrup-for-fever/",
  },
  {
    name: "Neuralgia Drops",
    description:
      "15–20 drops 3 times daily with 1/2 cup of water or as directed by the Physician.",
    price: "180",
    image: "/neuralgia-drops.jpg",
    badge: "Autoimmune Disease",
    link: "https://www.drrajeevswellness.com/product/neuralgia-drops/",
  },
  {
    name: "RL-10 Cyst/Tumor Drops",
    description:
      "15–20 drops 3 times daily with 1/2 cup of water or as directed by the Physician.",
    price: "180",
    image: "/rl-10-all-types-of-cyst-toumor-drops.jpg",
    badge: "Autoimmune Disease",
    link: "https://www.drrajeevswellness.com/product/rl-10-cyst-tumor-drops/",
  },
  {
    name: "RL-11 Fever Drops",
    description:
      "15–20 drops 3 times daily with 1/2 cup of water or as directed by the Physician.",
    price: "180",
    image: "/rl-11-for-all-types-of-fever-drops.jpg",
    badge: "Autoimmune Disease",
    link: "https://www.drrajeevswellness.com/product/rl-11-fever-drops/",
  },
  {
    name: "RL-12 Cough Drops",
    description:
      "15–20 drops 3 times daily with 1/2 cup of water or as directed by the Physician.",
    price: "180",
    image: "/rl-12-for-all-types-of-cough-drops.jpg",
    badge: "Autoimmune Disease",
    link: "https://www.drrajeevswellness.com/product/rl-12-cough-drops/",
  },
  {
    name: "RL-16 Immunity Booster Drops",
    description:
      "15–20 drops 3 times daily with 1/2 cup of water or as directed by the Physician.",
    price: "180",
    image: "/rl-16-for-immunity-boost.jpg",
    badge: "Autoimmune Disease",
    link: "https://www.drrajeevswellness.com/product/rl-16-immunity-boost-drops/",
  },
  {
    name: "RL-17 Diabetes Drops",
    description:
      "15–20 drops 3 times daily with 1/2 cup of water or as directed by the Physician.",
    price: "180",
    image: "/rl-17-for-diabetes-blood-urinary-sugar-drops.jpg",
    badge: "Autoimmune Disease",
    link: "https://www.drrajeevswellness.com/product/rl-17-diabetes-drops/",
  },
  {
    name: "RL-18 High Blood Pressure Drops",
    description:
      "15–20 drops 3 times daily with 1/2 cup of water or as directed by the Physician.",
    price: "180",
    image: "/rl-18-for-high-blood-pressure-drops.jpg",
    badge: "Autoimmune Disease",
    link: "https://www.drrajeevswellness.com/product/rl-18-blood-pressure-drops/",
  },
  {
    name: "RL-34 Iron & Hemoglobin Booster Tonic",
    description:
      "Adults: 1–2 teaspoonful thrice daily. Children: 1/2 to 1 teaspoonful thrice or as directed by the Physician.",
    price: "400",
    image: "/rl-34-for-iron-haemoglobin-booster-tonic.jpg",
    badge: "Autoimmune Disease",
    link: "https://www.drrajeevswellness.com/product/rl-34-iron-haemoglobin-booster/",
  },
  {
    name: "RL-38 Blood Purifier Syrup",
    description:
      "Adults: 1–2 teaspoonful thrice daily. Children: 1/2 to 1 teaspoonful thrice or as directed by the Physician.",
    price: "400",
    image: "/rl-38-for-blood-purifier-all-types-of-skin-disesae-syrup.jpg",
    badge: "Autoimmune Disease",
    link: "https://www.drrajeevswellness.com/product/rl-38-blood-purifier-syrup/",
  },
  {
    name: "RL-40 Health Tonic (Sugar Free)",
    description:
      "Adults: 1–2 teaspoonful thrice daily. Children: 1/2 to 1 teaspoonful thrice or as directed by the Physician.",
    price: "400",
    image: "/rl-40-health-tonic-for-all-age-sugar-free-syrup.jpg",
    badge: "Autoimmune Disease",
    link: "https://www.drrajeevswellness.com/product/rl-40-health-tonic-sugar-free/",
  },
  {
    name: "RL-50 Vitamin (A, B, C, D, E, K) Drops",
    description:
      "15–20 drops 3 times daily with 1/2 cup of water or as directed by the Physician.",
    price: "180",
    image: "/rl-50-vitamin-abcdek-drops.jpg",
    badge: "Autoimmune Disease",
    link: "https://www.drrajeevswellness.com/product/rl-50-vitamin-drops/",
  },
  {
    name: "RL-53 Energy Drops",
    description:
      "15–20 drops 3 times daily with 1/2 cup of water or as directed by the Physician.",
    price: "180",
    image: "/rl-53-energy-drop.jpg",
    badge: "Autoimmune Disease",
    link: "https://www.drrajeevswellness.com/product/rl-53-energy-drops/",
  },
  {
    name: "RL-54 Hemoglobin Drops",
    description:
      "15–20 drops 3 times daily with 1/2 cup of water or as directed by the Physician.",
    price: "180",
    image: "/rl-54-for-hemoglobin-drops.jpg",
    badge: "Autoimmune Disease",
    link: "https://www.drrajeevswellness.com/product/rl-54-hemoglobin-drops/",
  },
  {
    name: "RL-57 Intercostal Drops",
    description:
      "10–15 drops diluted in water and taken 3 times a day or as directed by the Physician.",
    price: "180",
    image: "/rl-57-itercostal-drops.jpg",
    badge: "Autoimmune Disease",
    link: "https://www.drrajeevswellness.com/product/rl-57-intercostal-drops/",
  },
  {
    name: "RL-59 Tumour Drops",
    description:
      "10–15 drops diluted in water and taken 3 times a day or as directed by the Physician.",
    price: "180",
    image: "/rl-59-tumour-drops.jpg",
    badge: "Autoimmune Disease",
    link: "https://www.drrajeevswellness.com/product/rl-59-tumour-drops/",
  },
  {
    name: "RL-65 Inflamed Mucosa Drops",
    description:
      "10–15 drops diluted in water and taken 3 times a day or as directed by the Physician.",
    price: "180",
    image: "/rl-65-inflamed-mucosa-drops.jpg",
    badge: "Autoimmune Disease",
    link: "https://www.drrajeevswellness.com/product/rl-65-inflamed-mucosa-drops/",
  },
  {
    name: "RL-78 Eosinophilia Drops",
    description:
      "10–15 drops diluted in water and taken 3 times a day or as directed by the Physician.",
    price: "180",
    image: "/rl-78-eosinophilia-drops.jpg",
    badge: "Autoimmune Disease",
    link: "https://www.drrajeevswellness.com/product/rl-78-eosinophilia-drops/",
  },
  {
    name: "Super Seven Health Tonic for Family",
    description:
      "Adult: 2 teaspoonfuls thrice daily. Children: 1/2 or 1 teaspoonful thrice daily or as directed by the Physician.",
    price: "390",
    image: "/super-seven-health-tonic-for-family.jpg",
    badge: "Autoimmune Disease, Child Care",
    link: "https://www.drrajeevswellness.com/product/super-seven-health-tonic-for-family/",
  },
];

const diseaseData = [
  {
    id: "type1_diabetes",
    name: "Type 1 Diabetes",
    description:
      "An autoimmune condition where the immune system attacks insulin-producing cells in the pancreas.",
    symptoms: ["Increased thirst", "Frequent urination", "Fatigue", "Unexplained weight loss"],
  },
  {
    id: "rheumatoid_arthritis",
    name: "Rheumatoid Arthritis",
    description:
      "A chronic autoimmune disorder that affects the joints, causing inflammation and pain.",
    symptoms: ["Joint pain", "Swelling", "Stiffness", "Fatigue"],
  },
  {
    id: "lupus",
    name: "Lupus (SLE)",
    description:
      "A systemic autoimmune disease where the immune system attacks healthy tissue in various parts of the body.",
    symptoms: ["Joint pain", "Skin rashes", "Fatigue", "Fever"],
  },
  {
    id: "multiple_sclerosis",
    name: "Multiple Sclerosis",
    description:
      "An autoimmune condition where the immune system attacks the protective covering of nerves in the central nervous system.",
    symptoms: ["Numbness or tingling", "Muscle weakness", "Balance issues", "Vision problems"],
  },
  {
    id: "hashimotos_thyroiditis",
    name: "Hashimoto's Thyroiditis",
    description:
      "An autoimmune disorder where the immune system attacks the thyroid gland, often leading to hypothyroidism.",
    symptoms: ["Fatigue", "Weight gain", "Cold intolerance", "Hair thinning"],
  },
  {
    id: "graves_disease",
    name: "Graves' Disease",
    description:
      "An autoimmune disorder that causes overactivity of the thyroid gland (hyperthyroidism).",
    symptoms: ["Weight loss", "Rapid heartbeat", "Nervousness", "Bulging eyes"],
  },
  {
    id: "psoriasis",
    name: "Psoriasis",
    description:
      "A chronic autoimmune skin condition that speeds up the life cycle of skin cells, causing scaling and inflammation.",
    symptoms: ["Red patches on skin", "Itching", "Scaling", "Pain or cracking skin"],
  },
  {
    id: "celiac_disease",
    name: "Celiac Disease",
    description:
      "An autoimmune disorder where ingestion of gluten leads to damage in the small intestine.",
    symptoms: ["Diarrhea", "Bloating", "Fatigue", "Weight loss", "Anemia"],
  },
  {
    id: "inflammatory_bowel_disease",
    name: "Inflammatory Bowel Disease (IBD)",
    description:
      "A group of autoimmune disorders including Crohn's disease and ulcerative colitis that cause chronic inflammation of the digestive tract.",
    symptoms: ["Abdominal pain", "Diarrhea", "Weight loss", "Fatigue"],
  },
  {
    id: "myasthenia_gravis",
    name: "Myasthenia Gravis",
    description:
      "An autoimmune disorder that weakens voluntary muscles due to disrupted communication between nerves and muscles.",
    symptoms: ["Muscle weakness", "Drooping eyelids", "Difficulty swallowing", "Fatigue"],
  },
];


export default function AutoimuneCare() {
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
      <YoutubeCarousel
        videos={["BFBoEE1Yvps", "Mjgd4mMzO1o", "yZAMkqHAJFg", "SyIWZMOclmk"]}
      />
      <DiseaseTypes diseaseData={diseaseData} />
      <Products products={products} />
      <SuccessStory />
      <Testimonials testimonials={testimonials} />
    </div>
  );
}
