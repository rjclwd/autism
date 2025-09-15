import React, { useEffect, useRef, useState } from "react"

function SuccessStory() {
  const iframeRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.5 }
    )

    if (iframeRef.current) observer.observe(iframeRef.current)

    return () => {
      if (iframeRef.current) observer.unobserve(iframeRef.current)
    }
  }, [])

  const baseUrl = "https://www.youtube.com/embed/yZAMkqHAJFg"
  const videoUrl = isInView
    ? `${baseUrl}?autoplay=1&mute=1&rel=0&showinfo=0`
    : `${baseUrl}?autoplay=0&rel=0&showinfo=0`

  return (
    <section className="px-6 ">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* YouTube Video */}
        <div
          ref={iframeRef}
          className="relative w-xs aspect-[9/16] rounded-2xl overflow-hidden shadow-lg ring-4 ring-primary/20 mx-auto"
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center space-y-6 text-center md:text-left max-w-lg mx-auto">
          <h2 className="text-4xl uppercase md:text-5xl font-heading font-extrabold text-primary leading-tight drop-shadow-sm">
            Their Own Words
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-secondary">
            Happy Success Story
          </h3>
          <p className="text-text-muted text-lg leading-relaxed">
            A child diagnosed with Autism showed minimal speech and social interaction. 
            With dedicated therapies and homeopathic care, gradual but visible improvements 
            emerged. Today, the family celebrates a joyful, communicative child and a journey 
            filled with <span className="font-semibold text-accent">hope</span>.
          </p>
        </div>
      </div>
    </section>
  )
}

export default SuccessStory
