import React from "react"
import { motion } from "framer-motion"
import { PhoneCall, CalendarDays } from "lucide-react"

const AppointmentFloat = () => {
  return (
    <>
      {/* Call Button */}
      <motion.a
        href="tel:+919117520003"
        className="fixed bottom-24 right-6 bg-green-600 hover:bg-green-700 flex items-center justify-center z-50 text-white w-14 h-14 rounded-full shadow-lg"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 1.2, repeat: Infinity, repeatType: "loop" }}
      >
        <PhoneCall className="w-6 h-6 animate-pulse" />
      </motion.a>

      {/* Book Appointment Button */}
      <motion.a
        href="https://www.rajeevclinic.com/appointment"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-accent hover:bg-secondary flex items-center gap-x-2 z-50 text-white font-semibold px-5 py-3 rounded-full shadow-lg"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
      >
        <CalendarDays className="w-5 h-5" />
        Book Appointment
      </motion.a>
    </>
  )
}

export default AppointmentFloat
