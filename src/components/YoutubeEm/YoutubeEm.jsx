import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  return isDesktop
}

export default function YoutubeCarousel({ videos = [] }) {
  const [index, setIndex] = useState(0)
  const isDesktop = useIsDesktop()

  const prevIndex = (index - 1 + videos.length) % videos.length
  const nextIndex = (index + 1) % videos.length

  const next = () => setIndex((p) => (p + 1) % videos.length)
  const prev = () => setIndex((p) => (p - 1 + videos.length) % videos.length)

  return (
    <div className="w-full max-w-6xl mx-auto relative flex flex-col items-center py-10">
      {/* Video Stage */}
      <div className="relative flex items-center justify-center w-full aspect-video overflow-hidden">
        {videos.map((id, i) => {
          const isActive = i === index
          const isPrev = i === prevIndex
          const isNext = i === nextIndex

          let base =
            "absolute top-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out rounded-xl overflow-hidden shadow-lg"
          let style = {}

          if (isActive) {
            base += " z-20"
            style = {
              transform: "translateX(0) scale(1)",
              opacity: 1,
              filter: "blur(0px)",
              width: "65%",
              height: "100%",
            }
          } else if (isPrev) {
            base += " z-10 cursor-pointer"
            style = {
              transform: `translateX(${isDesktop ? "-65%" : "-50%"}) scale(0.7)`,
              opacity: 0.8,
              width: "45%",
              height: "80%",
            }
          } else if (isNext) {
            base += " z-10 cursor-pointer"
            style = {
              transform: `translateX(${isDesktop ? "65%" : "50%"}) scale(0.7)`,
              opacity: 0.8,
              width: "45%",
              height: "80%",
            }
          } else {
            style = { opacity: 0, pointerEvents: "none" }
          }

          return (
            <div
              key={id}
              className={base}
              style={style}
              onClick={() => {
                if (isPrev) prev()
                if (isNext) next()
              }}
            >
              {isActive ? (
                <iframe
                  className="w-full h-full rounded-xl"
                  src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&rel=0&modestbranding=1`}
                  title={`YouTube video ${i + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <img
                  src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                  alt="video thumbnail"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          )
        })}
      </div>

      {/* Controls + Dots */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={prev}
          className="bg-primary text-white p-3 rounded-full shadow-md hover:opacity-90"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="flex gap-2">
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
        <button
          onClick={next}
          className="bg-primary text-white p-3 rounded-full shadow-md hover:opacity-90"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}
