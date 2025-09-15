import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

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

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 5000)
    return () => clearInterval(interval)
  }, [index])

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-12 relative">
      <h2 className="text-center text-2xl md:text-4xl font-heading font-extrabold uppercase text-primary mb-8">
        What Our Patients Say
      </h2>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-3 overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {testimonials.map((review, i) => (
            <div key={i} className="min-w-full flex justify-center">
              <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8 w-full sm:max-w-xl md:max-w-3xl">
                <div className="flex items-center mb-3">
                  {[...Array(review.rating)].map((_, j) => (
                    <span key={j} className="text-yellow-500 text-lg sm:text-xl">
                      ★
                    </span>
                  ))}
                </div>

                <p className="text-base sm:text-lg md:text-2xl text-gray-700 leading-relaxed italic">
                  “{review.text}”
                </p>

                <p className="mt-4 sm:mt-6 font-semibold text-sm sm:text-base md:text-lg text-gray-900">
                  — {review.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-primary/70 text-white p-2 sm:p-3 rounded-full shadow-md hover:opacity-90"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-primary/70 text-white p-2 sm:p-3 rounded-full shadow-md hover:opacity-90"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Dots + Counter */}
      <div className="flex justify-center mt-4 sm:mt-6 gap-3 items-center">
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${i === index ? "bg-primary" : "bg-gray-300"
                }`}
            ></button>
          ))}
        </div>
        <span className="text-xs sm:text-sm text-gray-600">
          {index + 1} / {testimonials.length}
        </span>
      </div>
    </section>
  )
}
