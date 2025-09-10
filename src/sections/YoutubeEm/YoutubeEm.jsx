import React, { useRef, useState, useEffect } from "react"

function YoutubeEm() {
  const iframeRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.5 }
    )

    if (iframeRef.current) {
      observer.observe(iframeRef.current)
    }

    return () => {
      if (iframeRef.current) observer.unobserve(iframeRef.current)
    }
  }, [])

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg aspect-video p-7 md:p-0">
      <iframe
        ref={iframeRef}
        className="w-full h-full"
        src={
          inView
            ? "https://www.youtube.com/embed/uJV_SWpW9gY?autoplay=1&mute=1&rel=0&modestbranding=1"
            : "https://www.youtube.com/embed/uJV_SWpW9gY?rel=0&modestbranding=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  )
}

export default YoutubeEm
