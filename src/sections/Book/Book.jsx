import React from "react"

function Book() {
    return (
        <section className="px-6 py-16 text-center">
            <h2 className="font-heading font-extrabold leading-tight tracking-tight">
                <span className="block text-7xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 drop-shadow-lg">
                    1st
                </span>
                <span className="block mt-2 text-2xl md:text-3xl text-gray-700 font-medium tracking-wide">
                    Homeopathic Book for
                </span>
                <span className="block text-6xl md:text-7xl mt-4 text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-emerald-600 to-teal-500 drop-shadow-lg">
                    Autism
                </span>
                <span className="block mt-2 text-2xl md:text-3xl text-gray-700 font-medium tracking-wide">
                    in India
                </span>
            </h2>

            <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto font-body italic">
                Written & Defined by <br />
                <span className="font-bold text-gray-800">Dr. Rajeev Kumar</span><br />
                <span className="text-sm text-gray-500">B.H.M.S, M.D (B.U)</span>
            </p>

            <p className="mt-6 text-xl md:text-2xl font-accent text-gray-800 leading-relaxed">
                “अगर आपका बच्चा आपसे बात करते वक्त नज़रें चुराता है, और आपकी बातों को अनसुना करता है”
            </p>

            <p className="mt-4 text-gray-600 text-lg">
                📚 Available now on <span className="font-semibold text-purple-700">Amazon</span> / <span className="font-semibold text-purple-700">Flipkart</span>
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 rounded-full bg-yellow-500 text-white text-lg font-semibold shadow-md hover:bg-yellow-600 hover:shadow-lg transition-all duration-300"
                >
                    🛒 Buy on Amazon
                </a>
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 rounded-full bg-blue-600 text-white text-lg font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
                >
                    🛍️ Buy on Flipkart
                </a>
            </div>
        </section>
    )
}

export default Book
