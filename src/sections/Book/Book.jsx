import React from "react"

function Book() {
    return (
        <section className="px-6 py-16 text-center  ">
            <div className="overflow-hidden">
                <img
                    src="/hsd.svg"
                    alt="Decorative divider"
                    className="mx-auto w-full scale-125 md:max-w-5xl h-auto"
                />
            </div>


            <section className=" py-16 ">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                    {/* Left: Author Info + Quote */}
                    <div className="text-center md:text-left space-y-6">
                        {/* Hindi Quote */}
                        <p className="text-md md:text-5xl font-hindi font-extrabold text-gray-800 leading-relaxed">
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
                    <div className="flex flex-col items-center space-y-2 bg-overlay border border-border p-4 rounded-2xl">
                        {/* Book Image */}
                        <div className="bg-surface w-full rounded-2xl overflow-hidden p-4">
                            <img
                                src="/autbook.png" // replace with actual book cover image
                                alt="Book cover"
                                className="w-64 md:w-80 drop-shadow-lg drop-shadow-blue-950 mx-auto"
                            />
                        </div>

                        {/* Availability */}
                        <p className="text-gray-700 text-lg font-extrabold font-heading">
                            Autism Care with Homeopathy {" "}
                            <span className="font-semibold text-primary font-accent">Available Now!</span> {" "}
                            <span className="font-semibold text-red-500 font-accent">Hurry up</span>
                        </p>
                        <p className="text-text-muted text-sm max-w-sm text-left">Autism spectrum disorder (ASD) is a developmental disability caused by differences in the brain. Some people with ASD have a known difference, such as a genetic condition.</p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            <a
                                href="https://www.rajeevclinic.com/buy-autism-book"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-8 py-3 rounded-full bg-primary text-white text-lg font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
                            >
                                🛒 Buy Now
                            </a>
                            {/* <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-8 py-3 rounded-full bg-secondary text-white text-lg font-semibold shadow-md hover:bg-orange-700 hover:shadow-lg transition-all duration-300"
                            >
                                🛍️ Buy on Flipkart
                            </a> */}
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Book
