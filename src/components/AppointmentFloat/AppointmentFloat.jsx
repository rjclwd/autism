import { PhoneCall } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const AppointmentFloat = () => {
  return (
    <motion.a
      href="https://www.rajeevclinic.com/appointment"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-primary hover:bg-secondary flex items-center gap-x-2 z-10 text-white font-semibold px-6 py-3 rounded-full shadow-lg"
      animate={{
        scale: [1, 1.1, 1], // gentle zoom in/out
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      <PhoneCall className="animate-bounce" />
      Book Appointment
    </motion.a>
  );
};

export default AppointmentFloat;
