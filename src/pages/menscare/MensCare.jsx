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
    id: "balanitis",
    name: "Prostate Enlargement",
    description:
      "Inflammation of the foreskin or head of the penis often linked with prostate enlargement symptoms.",
    link: "https://www.rajeevclinic.com/disease/male-disease-531/balanitis-10778.html",
  },
  {
    id: "hydrocele",
    name: "Hydrocele",
    description:
      "Swelling in the scrotum caused by fluid buildup around the testicle.",
    link: "https://www.rajeevclinic.com/disease/male-disease-531/hydrocele-553.html",
  },
  {
    id: "low_testosterone",
    name: "Hypogonadism (Low Testosterone)",
    description:
      "A condition where the testes produce insufficient testosterone affecting mood, energy, and sexual drive.",
    link: "https://www.rajeevclinic.com/disease/other-disease-110/hormonal-imbalance-affect-your-skin-21525.html",
  },
  {
    id: "obesity",
    name: "Obesity",
    description:
      "Excess body fat leading to hormonal imbalance and increased risk of metabolic disorders.",
    link: "https://www.rajeevclinic.com/disease/other-disease-110/hormonal-imbalance-affect-your-skin-21525.html",
  },
  {
    id: "diabetes_male",
    name: "Diabetes (Male Metabolic Syndrome)",
    description:
      "A metabolic disorder affecting sugar regulation and male hormonal health.",
    link: "https://www.rajeevclinic.com/disease/skin-diseases-39/hormonal-imbalance-affect-your-skin-21528.html",
  },
  {
    id: "genital_warts",
    name: "Genital Warts",
    description:
      "Viral infection causing warts in the genital area, often transmitted sexually.",
    link: "https://www.rajeevclinic.com/disease/male-disease-531/genital-warts-621.html",
  },
  {
    id: "penis_shortening",
    name: "Shrinking / Shortening of the Penis",
    description:
      "Condition involving loss of penile length due to hormonal, vascular, or fibrotic changes.",
    link: "https://www.rajeevclinic.com/disease-terms.html",
  },
  {
    id: "masturbation_issues",
    name: "Ejaculation of Semen with Urine",
    description:
      "Retrograde ejaculation where semen enters the bladder instead of exiting through the penis.",
    link: "https://www.rajeevclinic.com/disease/other-disease-110/masturbation-21355.html",
  },
  {
    id: "depression",
    name: "Depression",
    description:
      "A mood disorder leading to persistent sadness, loss of interest, and fatigue.",
    link: "https://www.rajeevclinic.com/disease/mind-533/-depression-534.html",
  },
  {
    id: "anxiety",
    name: "Anxiety Disorders",
    description:
      "Excessive worry or fear affecting daily life and emotional well-being.",
    link: "https://www.rajeevclinic.com/disease/mind-533/social-phobia-586.html",
  },
  {
    id: "stress_fatigue",
    name: "Stress & Fatigue",
    description:
      "Emotional and physical exhaustion resulting from prolonged mental pressure.",
    link: "https://www.rajeevclinic.com/disease/mind-533/post-traumatic-stress-disorder-ptsd--595.html",
  },
  {
    id: "gout",
    name: "Gout",
    description:
      "A painful form of arthritis caused by uric acid crystal buildup in joints.",
    link: "https://www.rajeevclinic.com/disease/extremities-38/uric-acid-gout--79.html",
  },
  {
    id: "hair_loss",
    name: "Hair Loss (Androgenetic Alopecia)",
    description:
      "Genetic and hormonal hair thinning common in men, linked to testosterone metabolism.",
    link: "https://www.rajeevclinic.com/disease/other-disease-110/musculoskeletal-disorders-20988.html",
  },
  {
    id: "sexual_weakness_overexertion",
    name: "Sexual Weakness due to Overexertion",
    description:
      "Decreased sexual stamina resulting from physical or mental overexertion.",
    link: "https://www.rajeevclinic.com/disease-terms.html",
  },
  {
    id: "nocturnal_emission",
    name: "Infectious Sexually Transmitted Diseases",
    description:
      "Diseases spread through sexual contact, potentially affecting nocturnal emission and reproductive health.",
    link: "https://www.rajeevclinic.com/disease/male-disease-531/nocturnal-emission-10792.html",
  },
  {
    id: "bph",
    name: "Benign Prostatic Hyperplasia (BPH)",
    description:
      "Noncancerous enlargement of the prostate gland causing urinary difficulties.",
    link: "https://www.rajeevclinic.com/disease-terms.html",
  },
  {
    id: "prostatitis",
    name: "Prostatitis",
    description:
      "Inflammation or infection of the prostate gland leading to pain and urinary issues.",
    link: "https://www.rajeevclinic.com/disease/male-disease-531/prostatitis-20867.html",
  },
  {
    id: "prostate_cancer",
    name: "Prostate Cancer",
    description:
      "Malignant growth within the prostate gland, often developing slowly.",
    link: "https://www.rajeevclinic.com/disease/cancer-502/prostate-cancer-706.html",
  },
  {
    id: "erectile_dysfunction",
    name: "Erectile Dysfunction (Impotence)",
    description:
      "Inability to achieve or maintain an erection suitable for sexual activity.",
    link: "https://www.rajeevclinic.com/disease/gynaecology-women%60s-health-4/hypoactive-sexual-desire-disorder-10752.html",
  },
  {
    id: "premature_ejaculation",
    name: "Premature Ejaculation",
    description:
      "Early ejaculation during sexual activity leading to distress or dissatisfaction.",
    link: "https://www.rajeevclinic.com/disease/other-disease-110/psychosexual-problems-31542.html",
  },
  {
    id: "low_sperm_count",
    name: "Low Sperm Count (Oligospermia)",
    description: "Reduced number of sperm in semen affecting fertility.",
    link: "https://www.rajeevclinic.com/disease/other-disease-110/trapped-ovarian-syndrome-31543.html",
  },
  {
    id: "male_infertility",
    name: "Infertility (Male)",
    description:
      "Inability to achieve pregnancy due to sperm or hormonal problems.",
    link: "https://www.rajeevclinic.com/disease/other-disease-110/chronic-pelvic-pain-31545.html",
  },
  {
    id: "loss_of_libido",
    name: "Loss of Libido",
    description:
      "Decreased sexual desire caused by stress, hormonal imbalance, or emotional issues.",
    link: "https://www.rajeevclinic.com/disease/other-disease-110/asherman%60s-syndrome-31546.html",
  },
  {
    id: "std",
    name: "Sexually Transmitted Diseases (STD)",
    description:
      "Infections passed through sexual contact, affecting reproductive organs.",
    link: "https://www.rajeevclinic.com/disease/other-disease-110/ovarian-remnant-syndrome-31544.html",
  },
  {
    id: "sexual_nervous_weakness",
    name: "Sexual and Nervous Weakness",
    description:
      "Generalized fatigue, nervousness, and low performance impacting sexual health.",
    link: "https://www.rajeevclinic.com/disease-terms.html",
  },
  {
    id: "uti",
    name: "Urinary Tract Infection (UTI)",
    description:
      "Infection in the urinary system causing pain and frequent urination.",
    link: "https://www.rajeevclinic.com/disease/urinary-trouble-12/urinary-tract-infection-92.html",
  },
  {
    id: "orchitis",
    name: "Orchitis",
    description:
      "Inflammation of one or both testicles, often caused by bacterial or viral infection.",
    link: "https://www.rajeevclinic.com/disease/urinary-trouble-12.html",
  },
  {
    id: "epididymitis",
    name: "Epididymitis",
    description:
      "Inflammation of the epididymis leading to scrotal pain and swelling.",
    link: "https://www.rajeevclinic.com/disease/urinary-trouble-12/urethritis-369.html",
  },
];

export default function MensCare() {
  return (
    <div>
      <AppointmentFloat />
      {/* <Hero /> */}
      <HeroUniversal
        bannerElement={<span className="">Mens</span>}
        promoTitle="One of India’s Leading Homeopathic Clinic Networks"
        subtitle="Holistic homeopathic solutions designed to restore men’s health, strength, and vitality."
        images={["/sexhelmen.png", "/sexhelmenemo.png", "/sexhelmenfat.png"]}
        phone="+919117520003"
        bannerImage="./menscarebanner.jpg"
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
      {/* <SuccessStory /> */}
      <Testimonials testimonials={testimonials} />
    </div>
  );
}
