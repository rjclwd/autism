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
    id: "autism_spectrum_disorder",
    name: "Autism Spectrum Disorder (ASD)",
    description:
      "A developmental disorder that affects communication, behavior, and social interaction. Symptoms and severity vary widely among individuals.",
    symptoms: [
      "Difficulty with social interaction",
      "Delayed speech or language development",
      "Repetitive behaviors",
      "Intense focus on specific interests",
      "Sensitivity to sounds, lights, or textures",
    ],
  },
  {
    id: "asperger_syndrome",
    name: "Asperger’s Syndrome",
    description:
      "A condition on the autism spectrum that affects social interactions and communication but usually does not affect language or intellectual development.",
    symptoms: [
      "Difficulty making eye contact",
      "Trouble understanding social cues",
      "Repetitive routines or behaviors",
      "Focused interests in specific topics",
    ],
  },
  {
    id: "childhood_disintegrative_disorder",
    name: "Childhood Disintegrative Disorder",
    description:
      "A rare condition where children develop normally for at least two years but then lose previously acquired skills such as language, motor, or social abilities.",
    symptoms: [
      "Loss of speech or vocabulary",
      "Decline in social skills",
      "Loss of motor skills",
      "Difficulty with bowel or bladder control",
    ],
  },
  {
    id: "rett_syndrome",
    name: "Rett Syndrome",
    description:
      "A rare genetic neurological disorder that mostly affects girls, leading to severe cognitive and physical impairments.",
    symptoms: [
      "Loss of purposeful hand skills",
      "Slowed growth",
      "Seizures",
      "Difficulty with walking or coordination",
    ],
  },
  {
    id: "pervasive_developmental_disorder",
    name: "Pervasive Developmental Disorder (PDD-NOS)",
    description:
      "A term previously used for children who show some symptoms of autism but do not meet the full criteria for ASD.",
    symptoms: [
      "Delayed speech and language skills",
      "Difficulty with social interactions",
      "Repetitive behaviors",
      "Learning difficulties",
    ],
  },
];


export default function Autism() {
  return (
    <div>
      <AppointmentFloat />
      <HeroUniversal
        promoTitle="One of India’s Leading Homeopathic Clinic Networks"
        subtitle="Spreading Hope, Care, and Awareness for Every Child on the Autism Spectrum"
        images={[
          "autismbanner.png",
          "/autclinic.png",
          "/autws.png",
          "/autbook.png",
          "/authand.png",
          "/wad.png",
        ]}
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
      {/* <Hero /> */}
      <YoutubeCarousel
        videos={["uJV_SWpW9gY", "zwbWatORxAM", "fS3oH1arS5k", "UInG0w-Rl20"]}
      />
      <DiseaseTypes diseaseData={diseaseData} />
      <Products products={products} />
      <Book />
      <SuccessStory />
      <Testimonials testimonials={testimonials} />
    </div>
  );
}
