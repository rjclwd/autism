import React from 'react'
import AppointmentFloat from '../../components/AppointmentFloat/AppointmentFloat'
import Hero from './Hero/Hero'
import YoutubeCarousel from '../../components/YoutubeEm/YoutubeEm'
import SuccessStory from './SuccessStory/SuccessStory'
import Book from './Book/Book'
import Testimonials from '../../components/Testimonials/Testimonials'
import HeroUniversal from '../../components/HeroUniversal/HeroUniversal'

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
]

export default function Autism() {
  return (
    <div>
      <AppointmentFloat />
      <HeroUniversal
        promoTitle="One of India’s Leading Homeopathic Clinic Networks"
        subtitle="Spreading Hope, Care, and Awareness for Every Child on the Autism Spectrum"
        images={["autismbanner.png", "/autclinic.png", "/autws.png", "/autbook.png", "/authand.png", "/wad.png"]}
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
      <YoutubeCarousel videos={[
        "uJV_SWpW9gY",
        "zwbWatORxAM",
        "fS3oH1arS5k",
        "UInG0w-Rl20",
      ]} />
      <Book />
      <SuccessStory />
      <Testimonials testimonials={testimonials} />
    </div>
  )
}
