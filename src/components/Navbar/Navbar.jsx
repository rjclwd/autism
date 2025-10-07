import BlurText from "../../bits/BlurText/BlurText";

function Navbar() {
  return (
    <nav className="h-20 flex items-center justify-between w-full px-1 md:px-12 bg-white shadow-md">
      {/* Left Logo */}
      <a href="/" className="flex items-center">
        <img
          src={import.meta.env.BASE_URL + "/logo.png"}
          alt="Dr. Rajeev Clinic Logo"
          className="h-9 md:h-16 w-auto object-contain"
        />
      </a>

      <div className="flex items-center gap-6">
        <img
          src={import.meta.env.BASE_URL + "/biglogo.png"}
          alt="Dr. Rajeev Wellness Logo"
          className="h-9 md:h-14 w-auto object-contain"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        <img
          src={import.meta.env.BASE_URL + "/final-dr-wellness-final-logo.png"}
          alt="Dr. Rajeev Wellness Logo"
          className="h-9 md:h-14 w-auto object-contain"
        />
      </div>
    </nav>
  );
}

export default Navbar;
