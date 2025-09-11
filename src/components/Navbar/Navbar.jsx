import React from "react"

function Navbar() {
  return (
    <nav className="h-20 flex items-center justify-between w-full px-4 md:px-12 bg-white shadow-md">
      {/* Left Logo */}
      <a href="/" className="flex items-center">
        <img
          src="/logo.png"
          alt="Dr. Rajeev Clinic Logo"
          className="h-16 w-auto object-contain"
        />
      </a>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        <img
          src="/final-dr-wellness-final-logo.png"
          alt="Dr. Rajeev Wellness Logo"
          className="h-14 w-auto object-contain"
        />
      </div>
    </nav>
  )
}

export default Navbar
