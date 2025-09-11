import React, { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const videos = [
  "uJV_SWpW9gY",
  "zwbWatORxAM",
  "fS3oH1arS5k",
  "UInG0w-Rl20",
]

export default function YoutubeCarousel() {
  const [index, setIndex] = useState(0)

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="w-full max-w-5xl mx-auto relative flex items-center justify-center py-10">
      {/* Videos */}
      <div className="relative flex items-center justify-center w-full h-[60vh]">
        {videos.map((id, i) => {
          const isActive = i === index
          const isPrev = i === (index - 1 + videos.length) % videos.length
          const isNext = i === (index + 1) % videos.length

          let classes =
            "absolute top-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out rounded-2xl overflow-hidden shadow-lg"
          let style = {}

          if (isActive) {
            classes += " z-20"
            style = {
              transform: "translateX(0) scale(1)",
              opacity: 1,
              width: "70%",
              height: "100%",
            }
          } else if (isPrev) {
            classes += " z-10"
            style = {
              transform: "translateX(-60%) scale(0.8)",
              opacity: 0.7,
              width: "50%",
              height: "80%",
            }
          } else if (isNext) {
            classes += " z-10"
            style = {
              transform: "translateX(60%) scale(0.8)",
              opacity: 0.7,
              width: "50%",
              height: "80%",
            }
          } else {
            style = { opacity: 0, pointerEvents: "none" }
          }

          return (
            <div key={id} className={classes} style={style}>
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${id}?${
                  isActive
                    ? "autoplay=1&mute=1&rel=0&modestbranding=1"
                    : "autoplay=0&rel=0&modestbranding=1"
                }`}
                title={`YouTube video ${i + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          )
        })}
      </div>

      {/* Controls */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary text-white p-3 rounded-full shadow-md hover:opacity-90 z-30"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary text-white p-3 rounded-full shadow-md hover:opacity-90 z-30"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {videos.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-primary" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  )
}
