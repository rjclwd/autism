import React from "react"

function Book() {
    return (
        <section className="px-6 py-16 text-center bg-white ">
            <h2 className="font-heading font-extrabold flex gap-2 items-start justify-center text-center leading-tight">
                {/* "1st" Highlight */}
                <span className="text-7xl md:text-9xl lg:text-[12rem] text-primary drop-shadow-md">
                    1<sup className="text-4xl md:text-5xl lg:text-7xl align-super">st</sup>
                </span>

                {/* Right-side content */}
                <span className="flex flex-col items-start">
                    {/* Subtitle */}
                    <span className="text-xl md:text-3xl lg:text-6xl text-gray-700 font-medium tracking-wide">
                        Homeopathic Book in
                    </span>

                    <span className="flex items-baseline gap-4 mt-2">
                        {/* Location */}
                        <span className="text-lg md:text-2xl lg:text-4xl text-gray-700 font-medium tracking-wide">
                            India for
                        </span>
                        {/* "Autism" Highlight */}
                        <span className="text-4xl md:text-7xl lg:text-9xl text-secondary drop-shadow-md">
                            Autism
                        </span>
                    </span>
                </span>
            </h2>

            <h3 className="text-xl md:text-4xl lg:text-5xl max-w-4xl text-center flex justify-self-center font-bold font-heading">Accepting & Understanding and
                treating the innocent soul's mind</h3>

            <section className="px-6 py-16 bg-white">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                    {/* Left: Author Info + Quote */}
                    <div className="text-center md:text-left space-y-6">
                        {/* Hindi Quote */}
                        <p className="text-xl md:text-5xl font-accent text-gray-800 leading-relaxed">
                            “अगर आपका बच्चा आपसे बात करते वक्त नज़रें चुराता है, और आपकी बातों को अनसुना करता है”
                        </p>
                        {/* Author Info */}
                        <p className="text-gray-600 text-lg font-body italic">
                            Written & Defined by <br />
                            <span className="font-bold text-gray-800">Dr. Rajeev Kumar</span>
                            <br />
                            <span className="text-sm text-gray-500">B.H.M.S, M.D (B.U)</span>
                        </p>
                    </div>

                    {/* Right: Book Image + Availability + CTAs */}
                    <div className="flex flex-col items-center  text-center md:text-left space-y-6">
                        {/* Book Image */}
                        <img
                            src="/autbook.png" // replace with actual book cover image
                            alt="Book cover"
                            className="w-64 md:w-80 rounded-lg shadow-lg"
                        />

                        {/* Availability */}
                        <p className="text-gray-700 text-lg">
                            📚 Available now on{" "}
                            <span className="font-semibold text-primary">Amazon</span> /{" "}
                            <span className="font-semibold text-secondary">Flipkart</span>
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-8 py-3 rounded-full bg-primary text-white text-lg font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
                            >
                                🛒 Buy on Amazon
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-8 py-3 rounded-full bg-secondary text-white text-lg font-semibold shadow-md hover:bg-orange-700 hover:shadow-lg transition-all duration-300"
                            >
                                🛍️ Buy on Flipkart
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Book
