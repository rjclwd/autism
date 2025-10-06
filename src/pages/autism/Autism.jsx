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
    image: "/images/asd.jpg",
    description:
      "ASD is a neurodevelopmental condition that affects communication, social interaction, and behavior. It varies widely from person to person, and early, individualized support can significantly improve outcomes.",
    stats: {
      prevalence: "≈1 in 36 children",
      ageOfOnset: "Before 3 years (symptoms may appear earlier)",
      genderRatio: "4:1 (more common in males)",
      coMorbidities: "ADHD, Anxiety, Sleep disturbances",
    },
    symptoms: [
      "Limited eye contact or social reciprocity",
      "Delayed or atypical speech & language",
      "Repetitive behaviors or restricted interests",
      "Sensory sensitivities (sound, touch, lights)",
      "Difficulty with transitions or change in routine",
    ],
    causes: [
      "Neurodevelopmental differences with genetic factors",
      "Environmental influences during early development",
      "Not caused by parenting style or vaccinations",
    ],
    diagnosis: [
      "Developmental screening (18–24 months)",
      "Standardized tools (e.g., M-CHAT, ADOS, ADI-R)",
      "Pediatric & Neuropsych evaluation",
      "Hearing and speech-language assessments",
    ],
    therapies: [
      "Behavior therapy (ABA-based or naturalistic)",
      "Speech & language therapy",
      "Occupational therapy (sensory integration)",
      "Social skills training",
      "Parent-mediated interventions",
    ],
    treatments: [
      "Individualized Education Plan (IEP) / school accommodations",
      "Structured routines & visual supports",
      "Sleep hygiene & sensory diet",
      "Pharmacologic support for co-morbidities when needed",
    ],
    tips: [
      "Use visual schedules and picture exchange for communication",
      "Break tasks into small, predictable steps",
      "Create sensory-friendly spaces at home",
      "Celebrate strengths and interests to build engagement",
    ],
    doDonts: {
      do: [
        "Seek early intervention",
        "Prompt, model, and reinforce communication",
        "Collaborate with school and therapists",
      ],
      dont: [
        "Force overwhelming stimuli",
        "Compare progress with others",
        "Delay evaluation if concerns persist",
      ],
    },
    redFlags: [
      "No babbling or pointing by 12 months",
      "No single words by 16 months",
      "Loss of language or social skills at any age",
    ],
    carePath: [
      { title: "Step 1: Screening", desc: "Pediatric visit for developmental screening & referral." },
      { title: "Step 2: Evaluation", desc: "Formal assessments by specialists (SLP, OT, Psych)." },
      { title: "Step 3: Individualized Plan", desc: "Start therapy plan with measurable goals." },
      { title: "Step 4: Ongoing Support", desc: "Review every 3–6 months, adjust interventions." },
    ],
    faq: [
      { q: "Can children with ASD attend regular school?", a: "Yes—many do with accommodations, IEPs, and supportive therapies." },
      { q: "Is early intervention critical?", a: "Earlier support leads to improved communication, behavior, and learning outcomes." },
    ],
    resources: [
      { label: "CDC Autism Resource", href: "https://www.cdc.gov/ncbddd/autism/index.html" },
      { label: "Autism Speaks", href: "https://www.autismspeaks.org/" },
    ],
    learnMoreUrl: "https://www.rajeevclinic.com/disease-terms.html",
  },

  {
    id: "asperger_syndrome",
    name: "Asperger’s Syndrome",
    image: "/images/aspergers.jpg",
    description:
      "A profile within the autism spectrum with average to above-average intelligence and typical language development but difficulty with social communication and flexibility.",
    stats: {
      prevalence: "Part of ASD prevalence",
      ageOfOnset: "Early childhood (often recognized later)",
      genderRatio: "More common in males",
      coMorbidities: "Anxiety, ADHD, Depression",
    },
    symptoms: [
      "Challenges understanding social cues and nonverbal signals",
      "Focused interests in specific topics",
      "Sensory sensitivities and rigid routines",
      "Difficulty with reciprocal conversations",
    ],
    causes: [
      "Neurodevelopmental differences with genetic components",
      "No evidence of causation by vaccines or parenting",
    ],
    diagnosis: [
      "Clinical evaluation with ASD tools (ADOS-2, ADI-R)",
      "Observation of social communication patterns",
      "Cognitive and language assessments",
    ],
    therapies: [
      "Social communication training",
      "CBT for anxiety and flexibility",
      "Occupational therapy for sensory or motor planning",
      "Executive functioning support",
    ],
    treatments: [
      "School accommodations (visual aids, predictable routines)",
      "Peer mentoring / social groups",
      "Family guidance & psychoeducation",
    ],
    tips: [
      "Use clear, literal language",
      "Offer structured choices rather than open-ended questions",
      "Teach social scripts and role-play common interactions",
    ],
    doDonts: {
      do: ["Encourage strengths-based learning", "Prepare for transitions", "Use interest areas to motivate"],
      dont: ["Punish stimming behavior", "Overload with sensory input", "Expect instant generalization"],
    },
    redFlags: [
      "Increasing social isolation",
      "Persistent anxiety leading to school refusal",
    ],
    carePath: [
      { title: "Step 1", desc: "Identify concerns; seek evaluation for ASD profile." },
      { title: "Step 2", desc: "Build a multidisciplinary support plan (school + therapy)." },
      { title: "Step 3", desc: "Monitor social-emotional well-being; adjust supports." },
    ],
    faq: [
      { q: "Is Asperger’s still a diagnosis?", a: "It’s now conceptualized within ASD, but the profile is still clinically useful." },
    ],
    resources: [
      { label: "NICE Autism Guidelines", href: "https://www.nice.org.uk/guidance/cg170" },
    ],
    learnMoreUrl: "https://www.rajeevclinic.com/disease-terms.html",
  },

  {
    id: "childhood_disintegrative_disorder",
    name: "Childhood Disintegrative Disorder",
    image: "/images/cdd.jpg",
    description:
      "A rare condition where a child develops typically for at least two years, then regresses in multiple areas including language, social function, and motor skills.",
    stats: {
      prevalence: "Very rare",
      ageOfOnset: "2–10 years (typically 3–4 years)",
      genderRatio: "More common in males",
      coMorbidities: "Seizures, developmental delays",
    },
    symptoms: [
      "Loss of acquired language",
      "Regression in social skills and play",
      "Motor coordination difficulties",
      "Loss of bowel/bladder control",
    ],
    causes: [
      "Exact cause unknown; neurobiological factors suspected",
      "Sometimes associated with seizure disorders",
    ],
    diagnosis: [
      "Detailed history of regression across domains",
      "Neurological exam (EEG, neuroimaging when indicated)",
      "Rule out metabolic / genetic disorders",
    ],
    therapies: [
      "Intensive speech & language therapy",
      "Occupational and physical therapy",
      "Behavioral interventions",
    ],
    treatments: [
      "Seizure management if present",
      "Structured learning environments",
      "Family counseling and support services",
    ],
    tips: [
      "Start intervention promptly after regression is identified",
      "Use multi-sensory learning approaches",
    ],
    doDonts: {
      do: ["Track regression patterns closely", "Coordinate with neurology"],
      dont: ["Delay evaluation", "Ignore loss of previously acquired milestones"],
    },
    redFlags: ["Rapid regression across multiple domains"],
    carePath: [
      { title: "Step 1", desc: "Urgent evaluation to confirm regression and rule out medical causes." },
      { title: "Step 2", desc: "Interdisciplinary therapy plan with close monitoring." },
    ],
    faq: [
      { q: "Is recovery possible?", a: "Some skills can improve with therapy, but outcomes vary." },
    ],
    resources: [
      { label: "Autism Research Institute", href: "https://autism.org/" },
    ],
    learnMoreUrl: "https://www.rajeevclinic.com/disease-terms.html",
  },

  {
    id: "rett_syndrome",
    name: "Rett Syndrome",
    image: "/images/rett.jpg",
    description:
      "A rare genetic neurological disorder primarily affecting girls, characterized by regression of hand skills, slowed growth, and movement abnormalities.",
    stats: {
      prevalence: "1 in 10,000–15,000 females",
      ageOfOnset: "6–18 months (after typical early development)",
      genderRatio: "Predominantly female",
      coMorbidities: "Seizures, scoliosis, breathing irregularities",
    },
    symptoms: [
      "Loss of purposeful hand use (stereotypic hand-wringing)",
      "Slowed head growth and development",
      "Gait abnormalities",
      "Seizures and breathing dysregulation",
    ],
    causes: [
      "Mutations in MECP2 gene (most common)",
      "X-linked dominant disorder",
    ],
    diagnosis: [
      "Clinical criteria + genetic testing (MECP2)",
      "EEG, orthopedic evaluation, and growth tracking",
    ],
    therapies: [
      "Physical and occupational therapy",
      "Speech/augmentative communication",
      "Nutritional support and scoliosis management",
    ],
    treatments: [
      "Seizure control medications",
      "Respiratory support for irregular breathing",
      "Orthopedic care for spine/hip issues",
    ],
    tips: [
      "Early augmentative communication (AAC) to enhance interaction",
      "Careful monitoring for feeding difficulties and GI issues",
    ],
    doDonts: {
      do: ["Regular multidisciplinary follow-ups", "Plan for mobility aids"],
      dont: ["Overlook signs of respiratory distress", "Delay orthopedic assessments"],
    },
    redFlags: ["Loss of hand skills + deceleration of head growth"],
    carePath: [
      { title: "Step 1", desc: "Genetic confirmation and baseline evaluations." },
      { title: "Step 2", desc: "Long-term multidisciplinary management." },
    ],
    faq: [
      { q: "Is Rett Syndrome progressive?", a: "There are stages, including regression and later stabilization, but needs lifelong care." },
    ],
    resources: [
      { label: "Rett Syndrome Organization", href: "https://www.rettsyndrome.org/" },
    ],
    learnMoreUrl: "https://www.rajeevclinic.com/disease-terms.html",
  },

  {
    id: "pervasive_developmental_disorder",
    name: "PDD-NOS (Historical)",
    image: "/images/pdd.jpg",
    description:
      "A historical term for children showing some features of autism without meeting full criteria. These profiles are now categorized under the Autism Spectrum.",
    stats: {
      prevalence: "Within ASD prevalence",
      ageOfOnset: "Early childhood",
      genderRatio: "More common in males",
      coMorbidities: "Language delay, learning challenges",
    },
    symptoms: [
      "Social communication challenges",
      "Restricted interests or repetitive behaviors",
      "Language delays",
    ],
    causes: [
      "Neurodevelopmental differences with genetic and environmental factors",
    ],
    diagnosis: [
      "Comprehensive ASD assessment and functional profiling",
      "Speech-language and cognitive testing",
    ],
    therapies: [
      "Speech-language therapy",
      "Behavioral and social communication therapies",
      "School-based supports",
    ],
    treatments: [
      "IEP/learning accommodations",
      "Parent training in communication strategies",
    ],
    tips: [
      "Use visuals and structured routines",
      "Focus on functional communication goals",
    ],
    doDonts: {
      do: ["Early school collaboration", "Ongoing monitoring"],
      dont: ["Dismiss subtle social challenges", "Wait for ‘catch up’ without supports"],
    },
    redFlags: ["Plateau in communication with social withdrawal"],
    carePath: [
      { title: "Step 1", desc: "Assessment → profile supports under ASD framework." },
      { title: "Step 2", desc: "Implement therapy and monitor progress." },
    ],
    faq: [
      { q: "Is PDD-NOS still used?", a: "No, it’s replaced by ASD categorization but still seen in older records." },
    ],
    resources: [
      { label: "CDC ASD Overview", href: "https://www.cdc.gov/ncbddd/autism/facts.html" },
    ],
    learnMoreUrl: "https://www.rajeevclinic.com/disease-terms.html",
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
