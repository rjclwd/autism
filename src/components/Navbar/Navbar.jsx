import BlurText from "../../bits/BlurText/BlurText";

function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row items-center justify-between w-full bg-white shadow-md px-2 md:px-12 py-2 md:py-0 h-auto md:h-20">
      {/* Top row (left & right logos on mobile) */}
      <div className="w-full flex justify-around items-center md:w-auto md:justify-start">
        {/* Left Logo */}
        <a href="/" className="flex items-center -ml-6">
          <img
            src={import.meta.env.BASE_URL + "/logo.png"}
            alt="Dr. Rajeev Clinic Logo"
            className="h-9 md:h-16 w-auto object-contain"
          />
        </a>

        {/* Right Logo (shows beside left one on mobile, right-aligned on desktop) */}
        <img
          src={import.meta.env.BASE_URL + "/final-dr-wellness-final-logo.png"}
          alt="Dr. Rajeev Wellness Logo"
          className="h-9 md:h-14 w-auto object-contain md:hidden -mr-6"
        />
      </div>

      {/* Center logo (moves to bottom on mobile) */}
      <div className="flex justify-center items-center mt-2 md:mt-0 md:order-none">
        <img
          src={import.meta.env.BASE_URL + "/biglogo.png"}
          alt="Dr. Rajeev Wellness Logo"
          className="h-9 md:h-14 w-auto object-contain"
        />
      </div>

      {/* Right logo (visible only on desktop, since we show it above on mobile) */}
      <div className="hidden md:flex items-center gap-6">
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
