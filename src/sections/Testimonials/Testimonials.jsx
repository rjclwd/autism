import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  "/testi1.png",
  "/testi2.png",
  "/testi3.png",
  "/testi4.png",
  "/testi5.png",
  "/testi6.png",
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto-advance every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 bg-gray-50 relative">
      <h2 className="text-center text-3xl md:text-4xl font-heading font-extrabold text-primary mb-10">
        What Our Patients Say
      </h2>

      <div className="relative max-w-4xl mx-auto px-10 py-3 overflow-hidden">
        {/* Track */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {testimonials.map((img, i) => (
            <div key={i} className="min-w-full flex justify-center">
              <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-lg">
                <img
                  src={img}
                  alt={`testimonial-${i}`}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-primary/60 text-white p-3 rounded-full shadow-md hover:opacity-90"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-primary/60 text-white p-3 rounded-full shadow-md hover:opacity-90"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dots + Counter */}
      <div className="flex justify-center mt-6 gap-4 items-center">
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-primary" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
        <span className="text-sm text-gray-600">
          {index + 1} / {testimonials.length}
        </span>
      </div>
    </section>
  );
}
