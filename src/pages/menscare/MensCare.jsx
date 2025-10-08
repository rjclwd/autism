import AppointmentFloat from "../../components/AppointmentFloat/AppointmentFloat";
import Hero from "./Hero/Hero";
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
    name: "Menscare Capsules",
    description: "",
    price: "770",
    image: "/menscare.png",
    badge: "Best Seller",
    link: "https://www.drrajeevswellness.com/product/menscare-capsules/",
  },
  {
    name: "RL-21",
    description: "",
    price: "180",
    image: "/RL-21.jpg",
    badge: "New",
    link: "https://www.drrajeevswellness.com/product/rl-21-for-prostate-drops/",
  },
  {
    name: "RL-60",
    description: "",
    price: "180",
    image: "/RL-60-Drop.jpg",
    badge: "Best Seller",
    link: "https://www.drrajeevswellness.com/product/rl-60-male-drops/",
  },
  {
    name: "RL-64",
    description: "",
    price: "180",
    image: "/rl-64.webp",
    badge: "Best Seller",
    link: "https://www.drrajeevswellness.com/product/rl-64-hyper-hydrosis-drops/",
  },
  {
    name: "RL-77",
    description: "",
    price: "400",
    image: "/RL-77.jpg",
    badge: "Best Seller",
    link: "https://www.drrajeevswellness.com/product/rl-77-vigour-vitality-tonic-for-men/",
  },
];

const diseaseData = [
  {
    id: "diabetes",
    name: "Diabetes",
    description:
      "A chronic condition that affects how your body processes blood sugar.",
    symptoms: ["Increased thirst", "Frequent urination", "Fatigue"],
  },
  {
    id: "hypertension",
    name: "Hypertension",
    description: "High blood pressure that can lead to heart problems.",
    symptoms: ["Headaches", "Shortness of breath", "Nosebleeds"],
  },
  {
    id: "asthma",
    name: "Asthma",
    description:
      "A condition where airways narrow and swell and produce extra mucus.",
    symptoms: ["Wheezing", "Coughing", "Chest tightness"],
  },
  {
    id: "prostate_issues",
    name: "Prostate Issues",
    description:
      "Conditions affecting the prostate gland, including enlargement or inflammation.",
    symptoms: [
      "Difficulty urinating",
      "Frequent urination at night",
      "Pain in lower back or pelvis",
    ],
  },
  {
    id: "erectile_dysfunction",
    name: "Erectile Dysfunction",
    description:
      "The inability to achieve or maintain an erection suitable for sexual activity.",
    symptoms: [
      "Difficulty maintaining erection",
      "Reduced sexual desire",
      "Stress or anxiety related to performance",
    ],
  },
  {
    id: "low_testosterone",
    name: "Low Testosterone",
    description:
      "A condition where the body doesn’t produce enough testosterone, affecting mood, energy, and sexual health.",
    symptoms: ["Fatigue", "Reduced muscle mass", "Low libido", "Mood changes"],
  },
  {
    id: "male_infertility",
    name: "Male Infertility",
    description:
      "The inability to cause pregnancy due to issues with sperm count, motility, or morphology.",
    symptoms: [
      "Difficulty conceiving",
      "Hormonal imbalances",
      "Erectile or ejaculatory problems",
    ],
  },
  {
    id: "heart_disease",
    name: "Heart Disease",
    description:
      "A range of conditions affecting the heart, including coronary artery disease and heart attacks.",
    symptoms: ["Chest pain", "Shortness of breath", "Fatigue", "Palpitations"],
  },
  {
    id: "obesity",
    name: "Obesity",
    description:
      "Excess body fat that increases risk of heart disease, diabetes, and other health problems.",
    symptoms: ["Weight gain", "Fatigue", "Joint pain", "Sleep apnea"],
  },
  {
    id: "depression",
    name: "Depression",
    description:
      "A mood disorder that affects mental and physical health, often underdiagnosed in men.",
    symptoms: [
      "Persistent sadness",
      "Loss of interest",
      "Fatigue",
      "Irritability",
    ],
  },
  {
    id: "kidney_stones",
    name: "Kidney Stones",
    description:
      "Hard deposits made of minerals that form in the kidneys, more common in men.",
    symptoms: [
      "Severe back or abdominal pain",
      "Blood in urine",
      "Frequent urination",
      "Nausea",
    ],
  },
  {
    id: "liver_disease",
    name: "Liver Disease",
    description:
      "Conditions affecting liver function, including fatty liver, hepatitis, and cirrhosis.",
    symptoms: ["Fatigue", "Jaundice", "Abdominal swelling", "Nausea"],
  },
  {
    id: "sleep_apnea",
    name: "Sleep Apnea",
    description:
      "A disorder in which breathing repeatedly stops and starts during sleep.",
    symptoms: [
      "Loud snoring",
      "Daytime sleepiness",
      "Morning headaches",
      "Irritability",
    ],
  },
  {
    id: "enlarged_heart",
    name: "Enlarged Heart (Cardiomegaly)",
    description:
      "An abnormal enlargement of the heart, often due to high blood pressure or heart disease.",
    symptoms: [
      "Shortness of breath",
      "Irregular heartbeat",
      "Swelling in legs and feet",
    ],
  },
];

export default function MensCare() {
  return (
    <div>
      <AppointmentFloat />
      {/* <Hero /> */}
      <HeroUniversal
        promoTitle="One of India’s Leading Homeopathic Clinic Networks"
        subtitle="Holistic homeopathic solutions designed to restore men’s health, strength, and vitality."
        images={["/sexhelmen.png", "/sexhelmenemo.png", "/sexhelmenfat.png"]}
        phone="+919117520003"
        bannerImage="./menscarebanner.jpg"
        bannerText="Mens Care with Homeopathy"
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

      <DiseaseTypes diseaseData={diseaseData} />
      <YoutubeCarousel
        videos={["BFBoEE1Yvps", "Mjgd4mMzO1o", "yZAMkqHAJFg", "SyIWZMOclmk"]}
      />
      <Products products={products} />
      <SuccessStory />
      <Testimonials testimonials={testimonials} />
    </div>
  );
}
