import React from "react";
import AppointmentFloat from "../../components/AppointmentFloat/AppointmentFloat";
import Hero from "./Hero/Hero";
import YoutubeCarousel from "../../components/YoutubeEm/YoutubeEm";
import SuccessStory from "./SuccessStory/SuccessStory";
import Book from "./Book/Book";
import Testimonials from "../../components/Testimonials/Testimonials";
import HeroUniversal from "../../components/HeroUniversal/HeroUniversal";
import Products from "../../components/Products/Products";
import DiseaseTypes from "../../components/DiseaseTypes/DiseaseTypes";

const testimonials = [
  {
    name: "Priya Sharma",
    text: "Dr. Rajeev's treatment has been a blessing for my son. We noticed a huge improvement in his communication within 3 months.",
    rating: 5,
  },
  {
    name: "Ankit Verma",
    text: "I was struggling to find proper guidance for autism care. The clinic not only gave us hope but also real results.",
    rating: 4,
  },
  {
    name: "Sneha Kapoor",
    text: "The doctors are extremely professional and caring. My child is more attentive and responds better now. Highly recommended!",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    text: "I had almost given up, but this treatment made a huge difference. My son is calmer and more responsive than before.",
    rating: 5,
  },
  {
    name: "Neha Gupta",
    text: "Very compassionate approach. They listen carefully and provide practical solutions. Truly grateful!",
    rating: 4,
  },
];

const products = [
  {
    name: "Brainboost",
    description: `
• Enhances memory and focus using natural homeopathic ingredients.  
• Supports concentration, mental clarity, and cognitive performance.  
• Helps reduce anxiety and strengthens the nervous system.  
• Beneficial for children with learning or attention challenges.  
• Safe, gentle, and non-addictive — suitable for long-term use.
    `,
    price: "499",
    image: "https://m.media-amazon.com/images/I/71pNsXZFC0L._SY879_.jpg",
    badge: "Autism Care, Nervous & Mind Care",
    link: "https://www.amazon.in/BosterLerning-Nervecare-Management-Nootropic-Supplement/dp/B0F5QQBGJ4",
  },
  {
    name: "Cerolin Drops Effective for Brain",
    description: `
Indications:  
• Cerebral attack, autism, cerebral palsy, ADHD, Alzheimer’s disease.  
• Effective in epilepsy, brain atrophy, brain tumour, and Parkinson’s disease.  
• Supports recovery in dementia and all types of brain disorders.
    `,
    price: "1200",
    image: "/cerolin-drops-effective-for-brain.jpg",
    badge: "Autism Care, Nervous & Mind Care",
    link: "https://www.drrajeevswellness.com/product/cerolin-drops-effective-for-brain/",
  },
  {
    name: "Neuroplus",
    description: `
• Effective for neurological disorders and brain-related conditions.  
• Helps improve nerve weakness and brain performance.  
• Aids in boosting cognitive function and clarity.  
• Dose: 2.5 ml with half a cup of water, three times a day or as directed by the physician.
    `,
    price: "1200",
    image: "/neuroplus.jpg",
    badge: "Autism Care, Nervous & Mind Care",
    link: "https://www.drrajeevswellness.com/product/neuroplus/",
  },
];

const diseaseData = [
  {
    id: "balanitis",
    name: "Balanitis",
    description:
      "Inflammation of the glans penis causing redness, irritation, and discomfort.",
    link: "https://www.rajeevclinic.com/disease-terms.html",
  },
  {
    id: "prostate_enlargement",
    name: "Prostate Enlargement (BPH)",
    description:
      "Non-cancerous enlargement of the prostate leading to urinary difficulties.",
    link: "https://www.rajeevclinic.com/disease/male-disorders-29/benign-prostatic-hyperplasia-bph-168.html",
  },
  {
    id: "gonorrhea",
    name: "Gonorrhea",
    description:
      "Sexually transmitted infection causing urethral discharge, burning, and pelvic pain.",
    link: "https://www.rajeevclinic.com/disease/male-disorders-29/sexually-transmitted-diseases-189.html",
  },
  {
    id: "hydrocele",
    name: "Hydrocele",
    description:
      "Fluid collection around the testicle leading to painless scrotal swelling.",
    link: "https://www.rajeevclinic.com/disease-terms.html",
  },
  {
    id: "hypogonadism",
    name: "Hypogonadism (Low Testosterone)",
    description:
      "Reduced testosterone production causing fatigue, low libido, and muscle loss.",
    link: "https://www.rajeevclinic.com/disease-terms.html",
  },
  {
    id: "obesity_male",
    name: "Obesity (Male)",
    description:
      "Excess body fat associated with metabolic risks and reduced vitality.",
    link: "https://www.rajeevclinic.com/disease/other-disease-110/obesity-330.html",
  },
  {
    id: "male_diabetes",
    name: "Diabetes (Male Metabolic Syndrome)",
    description:
      "Metabolic imbalance with insulin resistance raising cardiometabolic risk.",
    link: "https://www.rajeevclinic.com/disease/endocrine-system-9/diabetes-mellitus-107.html",
  },
  {
    id: "genital_warts",
    name: "Genital Warts",
    description:
      "HPV-related wart growth on genital skin, often painless but contagious.",
    link: "https://www.rajeevclinic.com/disease-terms.html",
  },
  {
    id: "penile_shortening",
    name: "Penile Shrinking/Shortening",
    description:
      "Perceived or actual reduction in penile size due to hormonal or scarring factors.",
    link: "https://www.rajeevclinic.com/disease-terms.html",
  },
  {
    id: "spermatorrhea",
    name: "Ejaculation of Semen with Urine (Spermatorrhea)",
    description:
      "Involuntary seminal discharge commonly linked with weakness or inflammation.",
    link: "https://www.rajeevclinic.com/disease-terms.html",
  },
  {
    id: "depression_male",
    name: "Depression (Male Mental Health)",
    description:
      "Persistent low mood, loss of interest, and reduced motivation affecting life.",
    link: "https://www.rajeevclinic.com/disease/mind-533/mood-disorder-20849.html",
  },
  {
    id: "anxiety_male",
    name: "Anxiety Disorders (Male)",
    description:
      "Excessive worry, fear, or restlessness often affecting work and relationships.",
    link: "https://www.rajeevclinic.com/disease/mind-533/social-phobia-586.html",
  },
  {
    id: "stress_fatigue",
    name: "Stress & Fatigue",
    description:
      "Chronic mental and physical exhaustion with low energy and poor focus.",
    link: "https://www.rajeevclinic.com/disease-terms.html",
  },
  {
    id: "gout",
    name: "Gout",
    description:
      "Uric acid crystal arthritis causing sudden painful joint swelling, often in feet.",
    link: "https://www.rajeevclinic.com/disease/joints-15/gout-240.html",
  },
  {
    id: "androgenetic_alopecia",
    name: "Hair Loss (Androgenetic Alopecia)",
    description:
      "Male-pattern baldness due to genetics and hormonal sensitivity of hair follicles.",
    link: "https://www.rajeevclinic.com/disease/skin-4/alopecia-200.html",
  },
  {
    id: "sexual_weakness_overexertion",
    name: "Sexual Weakness due to Overexertion",
    description:
      "Loss of vigor and poor performance linked to strain, stress, or overuse.",
    link: "https://www.rajeevclinic.com/disease-terms.html",
  },
  {
    id: "nocturnal_emission",
    name: "Nocturnal Emission",
    description:
      "Involuntary ejaculation during sleep commonly seen in adolescents or stress.",
    link: "https://www.rajeevclinic.com/disease-terms.html",
  },
  {
    id: "std_infections",
    name: "Sexually Transmitted Infections (STIs)",
    description:
      "Infections acquired through sexual contact causing discharge, sores, or pain.",
    link: "https://www.rajeevclinic.com/disease/male-disorders-29/sexually-transmitted-diseases-189.html",
  },
  {
    id: "prostatitis",
    name: "Prostatitis",
    description:
      "Inflammation of the prostate causing pelvic pain and urinary symptoms.",
    link: "https://www.rajeevclinic.com/disease/male-disorders-29/prostatitis-169.html",
  },
  {
    id: "prostate_cancer",
    name: "Prostate Cancer",
    description:
      "Malignant growth of the prostate gland requiring timely evaluation and care.",
    link: "https://www.rajeevclinic.com/disease-terms.html",
  },
  {
    id: "erectile_dysfunction",
    name: "Erectile Dysfunction (Impotence)",
    description:
      "Persistent difficulty achieving or maintaining an erection for intercourse.",
    link: "https://www.rajeevclinic.com/disease/male-disorders-29/erectile-dysfunction-impotence-176.html",
  },
  {
    id: "premature_ejaculation",
    name: "Premature Ejaculation",
    description:
      "Ejaculation occurring earlier than desired with minimal stimulation.",
    link: "https://www.rajeevclinic.com/disease/male-disorders-29/premature-ejaculation-181.html",
  },
  {
    id: "low_sperm_count",
    name: "Low Sperm Count (Oligospermia)",
    description:
      "Reduced sperm concentration impairing fertility and conception chances.",
    link: "https://www.rajeevclinic.com/disease/male-disorders-29/oligospermia-175.html",
  },
  {
    id: "male_infertility",
    name: "Infertility (Male)",
    description:
      "Impaired ability to conceive due to sperm quality, count, or function issues.",
    link: "https://www.rajeevclinic.com/disease/male-disorders-29/infertility-male-180.html",
  },
  {
    id: "loss_of_libido",
    name: "Loss of Libido",
    description:
      "Decreased sexual desire linked to stress, hormones, or relationship factors.",
    link: "https://www.rajeevclinic.com/disease-terms.html",
  },
  {
    id: "uti_male",
    name: "Urinary Tract Infection (UTI)",
    description:
      "Infection of the urinary system causing burning, urgency, and frequency.",
    link: "https://www.rajeevclinic.com/disease/urinary-system-8/urinary-tract-infection-uti-422.html",
  },
  {
    id: "orchitis",
    name: "Orchitis",
    description:
      "Inflammation of one or both testicles leading to scrotal pain and swelling.",
    link: "https://www.rajeevclinic.com/disease-terms.html",
  },
  {
    id: "epididymitis",
    name: "Epididymitis",
    description:
      "Inflammation of the epididymis causing testicular pain and swelling.",
    link: "https://www.rajeevclinic.com/disease-terms.html",
  },
  {
    id: "mental_sexual_weakness",
    name: "Sexual and Nervous Weakness",
    description:
      "Generalized fatigue, nervousness, and low performance impacting sexual health.",
    link: "https://www.rajeevclinic.com/disease-terms.html",
  },
];


export default function Autism() {
  return (
    <div>
      <AppointmentFloat />
      <HeroUniversal
        promoTitle="One of India’s Leading Homeopathic Clinic Networks"
        subtitle="Spreading Hope, Care, and Awareness for Every Child on the Autism Spectrum"
        bannerText="Autism Care"
        images={["/autclinic.png", "/authand.png", "/autws.png"]}
        isAutism={true}
        bannerImage="./autismbanner.jpg"
        phone="+919117520003"
        trust={[
          { icon: "shield", label: "20+ Years of Care" },
          { icon: "award", label: "1L+ Consultations" },
          { icon: "star", label: "4.8/5 Patient Rating" },
        ]}
        ctas={[
          {
            label: "Autism Care Query",
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
      {/* <Hero /> */}
      <YoutubeCarousel
        videos={["uJV_SWpW9gY", "zwbWatORxAM", "fS3oH1arS5k", "UInG0w-Rl20"]}
      />
      <Products products={products} />
      <Book />
      <SuccessStory />
      <Testimonials testimonials={testimonials} />
    </div>
  );
}
