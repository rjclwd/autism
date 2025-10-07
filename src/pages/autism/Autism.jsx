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
    description:
      "20 Drops from bottle C diluted with one tablespoon of water twice a day or as directed by the physician.",
    price: "499",
    image: "https://m.media-amazon.com/images/I/71pNsXZFC0L._SY879_.jpg",
    badge: "Autism Care, Nervous & Mind Care",
    link: "https://www.amazon.in/BosterLerning-Nervecare-Management-Nootropic-Supplement/dp/B0F5QQBGJ4",
  },
  {
    name: "Cerolin Drops Effective for Brain",
    description:
      "20 Drops from bottle C diluted with one tablespoon of water twice a day or as directed by the physician.",
    price: "1200",
    image: "/cerolin-drops-effective-for-brain.jpg",
    badge: "Autism Care, Nervous & Mind Care",
    link: "https://www.drrajeevswellness.com/product/cerolin-drops-effective-for-brain/",
  },
  {
    name: "Neuroplus",
    description:
      "20 Drops from bottle C diluted with one tablespoon of water twice a day or as directed by the physician.",
    price: "1200",
    image: "/neuroplus.jpg",
    badge: "Autism Care, Nervous & Mind Care",
    link: "https://www.drrajeevswellness.com/product/neuroplus/",
  },
  {
    name: "RL-33 For Baby & Calcium Tonic",
    description:
      "Adults: 1 to 2 teaspoonful thrice daily. Children: 1/2 to 1 teaspoonful thrice or as directed by the Physician.",
    price: "400",
    image: "/rl-33-for-baby-calcium-tonic.jpg",
    badge: "Autism Care, Child Care",
    link: "https://www.drrajeevswellness.com/product/rl-33-for-baby-calcium-tonic/",
  },
];

const diseaseData = [
  {
    id: "adhd",
    name: "ADHD (Attention-Deficit / Hyperactivity Disorder)",
    description:
      "A condition marked by inattention, hyperactivity, and impulsivity affecting daily life.",
    link: "https://www.rajeevclinic.com/disease/mind-533/adult-attention-deficit-hyperactivity-disorder-adhd--20875.html",
  },
  {
    id: "anxiety_disorders",
    name: "Anxiety Disorders",
    description:
      "A group of disorders causing excessive worry, fear, or avoidance behaviors.",
    link: "https://www.rajeevclinic.com/disease/mind-533/social-phobia-586.html",
  },
  {
    id: "depression_mood_disorders",
    name: "Depression or Mood Disorders",
    description:
      "Emotional conditions causing persistent sadness, low energy, or loss of interest.",
    link: "https://www.rajeevclinic.com/disease/mind-533/mood-disorder-20849.html",
  },
  {
    id: "epilepsy",
    name: "Epilepsy / Seizure Disorders",
    description:
      "A neurological condition with recurrent seizures due to abnormal brain activity.",
    link: "https://www.rajeevclinic.com/disease/nervous-system-7/epilepsy-seizures-35.html",
  },
  {
    id: "sleep_disorders",
    name: "Sleep Disorders",
    description:
      "Conditions disrupting sleep quality, duration, or regular cycles like insomnia.",
    link: "https://www.rajeevclinic.com/disease/other-disease-110/sleep-disorders-31875.html",
  },
  {
    id: "sensory_processing_disorder",
    name: "Sensory Processing Disorder (SPD)",
    description:
      "Difficulty managing sensory input, leading to over- or under-sensitivity.",
    link: "https://www.rajeevclinic.com/disease-terms.html",
  },
  {
    id: "ocd",
    name: "Obsessive-Compulsive Disorder (OCD)",
    description:
      "A disorder involving intrusive thoughts and repetitive, anxiety-driven behaviors.",
    link: "https://www.rajeevclinic.com/disease/children-disease-542/ocd-546.html",
  },
  {
    id: "gastrointestinal_disorders",
    name: "Gastrointestinal Disorders",
    description:
      "Digestive issues like IBS, constipation, or reflux often linked with neurodiversity.",
    link: "https://www.rajeevclinic.com/disease/other-disease-110/gastrointestinal-viral-infection-31939.html",
  },
  {
    id: "language_speech_disorders",
    name: "Language and Speech Disorders",
    description:
      "Difficulties in speech, articulation, or understanding language effectively.",
    link: "https://www.rajeevclinic.com/disease/other-disease-110/speech-and-language-disability-31653.html",
  },
  {
    id: "motor_coordination_disorders",
    name: "Motor Coordination Disorders (Dyspraxia)",
    description:
      "Problems planning and coordinating movement, affecting daily physical tasks.",
    link: "https://www.rajeevclinic.com/disease/other-disease-110/locomotor-disability-31654.html",
  },
  {
    id: "learning_disabilities",
    name: "Learning Disabilities",
    description:
      "Specific challenges in reading, writing, or math despite normal intelligence.",
    link: "https://www.rajeevclinic.com/disease/other-disease-110/specific-learning-disabilities-31662.html ",
  },
  {
    id: "intellectual_disability",
    name: "Intellectual Disability",
    description:
      "Significant limitations in intellectual functioning and adaptive behavior.",
    link: "https://www.rajeevclinic.com/disease/other-disease-110/intellectual-disability-31661.html",
  },
  {
    id: "autism_spectrum_disorder",
    name: "Autism Spectrum Disorder (ASD)",
    description:
      "A developmental condition affecting communication, behavior, and social skills.",
    link: "https://www.rajeevclinic.com/disease/other-disease-110/autism-spectrum-disorder-31660.html",
  },
  {
    id: "asperger_syndrome",
    name: "Asperger’s Syndrome",
    description:
      "A form of autism with normal intelligence but social and behavioral challenges.",
    link: "https://www.rajeevclinic.com/disease/nervous-system-7/asperger%E2%80%99s-syndrome-646.html",
  },
  {
    id: "childhood_disintegrative_disorder",
    name: "Childhood Disintegrative Disorder",
    description:
      "A rare condition where children lose language and social abilities after normal growth.",
    link: "https://www.rajeevclinic.com/disease/children-disease-542/autism-74.html",
  },
  {
    id: "pdd_nos",
    name: "PDD-NOS (Pervasive Developmental Disorder)",
    description:
      "A historical term for mild autism traits not meeting full diagnostic criteria.",
    link: "https://www.rajeevclinic.com/disease/children-disease-542/autism-74.html",
  },
];

export default function Autism() {
  return (
    <div>
      <AppointmentFloat />
      <HeroUniversal
        promoTitle="One of India’s Leading Homeopathic Clinic Networks"
        subtitle="Spreading Hope, Care, and Awareness for Every Child on the Autism Spectrum"
        bannerText="Autism Care with Homeopathy"
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
