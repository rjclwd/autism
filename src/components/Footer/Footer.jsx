import React from "react"
import {
  Globe,
  Phone,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react"

function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Websites */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Globe size={18} /> Websites
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="http://www.rajeevclinic.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition"
              >
                www.rajeevclinic.com
              </a>
            </li>
            <li>
              <a
                href="http://www.drrajeevswellness.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition"
              >
                www.drrajeevswellness.com
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Phone size={18} /> Contact
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              For Any Query:{" "}
              <a href="tel:9234400006" className="hover:text-accent">
                9234400006
              </a>
            </li>
            <li>
              Online Consultation:{" "}
              <a href="tel:+919117520003" className="hover:text-accent">
                +91 91175 20003
              </a>
            </li>
          </ul>
        </div>

        {/* Instagram */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Instagram size={18} /> Instagram
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://www.instagram.com/drrajeevsclinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition"
              >
                Dr. Rajeev Sir
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/drrajeevswellness/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition"
              >
                Dr. Rajeev&apos;s Wellness
              </a>
            </li>
          </ul>
        </div>

        {/* Facebook & YouTube */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Facebook size={18} /> Facebook
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Clinic Noida", url: "https://www.facebook.com/profile.php?id=61560423996522" },
              { name: "Abhi Homeo Ranchi", url: "https://www.facebook.com/AbhiHomeoRanchi/" },
              { name: "Greater Noida", url: "https://www.facebook.com/drrajeevshomoeopathicclinicgreaternoida/" },
              { name: "Main Clinic", url: "https://www.facebook.com/drrajeevhomeopathy/" },
              { name: "Jagtauli", url: "https://www.facebook.com/DrRajeevshomeopathicclinicjagtauli/" },
              { name: "Patna", url: "https://www.facebook.com/drrajeevclinicpatna/" },
              { name: "Kolkata", url: "https://www.facebook.com/drrajeevclinickolkata/" },
              { name: "Wellness", url: "https://www.facebook.com/drrajeevswellness/" },
            ].map((link, i) => (
              <li key={i}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-3 flex items-center gap-2">
            <Youtube size={18} /> YouTube
          </h3>
          <a
            href="https://www.youtube.com/channel/UC42j8Oi53cP0aNLFmi5KKZg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition text-sm"
          >
            Dr. Rajeev&apos;s Homeopathy Clinic
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} Dr. Rajeev&apos;s Clinics. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
