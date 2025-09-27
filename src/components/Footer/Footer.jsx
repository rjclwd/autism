import React from "react";
import { Globe, Phone, Instagram, Facebook, Youtube, CreditCard, QrCode } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-8">
          {/* Websites */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Globe size={18} />
              Websites
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="http://www.rajeevclinic.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  www.rajeevclinic.com
                </a>
              </li>
              <li>
                <a
                  href="http://www.drrajeevswellness.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  www.drrajeevswellness.com
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Phone size={18} />
              Contact
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                For Any Query:{" "}
                <a href="tel:9234400006" className="hover:text-accent transition-colors">
                  9234400006
                </a>
              </li>
              <li>
                Online Consultation:{" "}
                <a href="tel:+919117520003" className="hover:text-accent transition-colors">
                  +91 91175 20003
                </a>
              </li>
            </ul>
          </div>

          {/* Instagram */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Instagram size={18} />
              Instagram
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.instagram.com/drrajeevsclinic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  Dr. Rajeev Sir
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/drrajeevswellness/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  Dr. Rajeev's Wellness
                </a>
              </li>
            </ul>
          </div>

          {/* Payment Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <CreditCard size={18} />
              Online Payment
            </h3>
            <div className="bg-secondary/30 p-4 rounded-md text-sm space-y-3">
              <div className=" bg-opacity-10 p-3 rounded-lg">
                <p className="font-semibold text-xs text-accent mb-2">UPI ID</p>
                <p className="break-all">MSABHIHOMEOHALL.EASYPAY@ICICI</p>
              </div>
              <div className="space-y-1">
                <p>
                  <span className="text-surface">Bank:</span> ICICI Bank
                </p>
                <p>
                  <span className="text-surface">A/C:</span> 17505501873
                </p>
                <p>
                  <span className="text-surface">IFSC:</span> ICIC0000175
                </p>
                <p>
                  <span className="text-surface">SWIFT:</span> ICICINBBCTS
                </p>
              </div>
            </div>
          </div>

          {/* Facebook & YouTube */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Facebook size={18} />
              Social Media
            </h3>
            <div className="text-sm space-y-3">
              <div>
                <p className="font-medium mb-2">Facebook Pages:</p>
                <ul className="space-y-1">
                  <li>
                    <a
                      href="https://www.facebook.com/profile.php?id=61560423996522"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-secondary transition-colors text-xs"
                    >
                      Clinic Noida
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/AbhiHomeoRanchi/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-secondary transition-colors text-xs"
                    >
                      Abhi Homeo Ranchi
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/drrajeevshomoeopathicclinicgreaternoida/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-secondary transition-colors text-xs"
                    >
                      Greater Noida
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/drrajeevhomeopathy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-secondary transition-colors text-xs"
                    >
                      Main Clinic
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/drrajeevswellness/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-secondary transition-colors text-xs"
                    >
                      Wellness
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Youtube size={16} />
                  YouTube
                </h4>
                <a
                  href="https://www.youtube.com/channel/UC42j8Oi53cP0aNLFmi5KKZg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors text-xs"
                >
                  Dr. Rajeev's Homeopathy Clinic
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="mt-10 pt-8 border-t border-white border-opacity-20">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 flex items-center justify-center gap-2">
              <QrCode size={18} />
              Scan to Pay
            </h3>
            <div className="bg-white p-1 rounded-sm inline-block">
              <div className="w-48 h-48 bg-gray-100 flex items-center justify-center text-gray-600 text-sm">
                {/* <div className="text-center">
                  <QrCode size={48} className="mx-auto mb-2 text-gray-400" />
                  <p>Scan with any UPI app</p>
                  <p className="text-xs mt-1">to pay appointment fees</p>
                </div> */}
                <img src={import.meta.env.BASE_URL + "/payment.jpeg"} alt="" />
              </div>
            </div>
            <p className="text-sm mt-4 text-accent">
              Merchant: ABHI HOMEO HALL
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white border-opacity-20 mt-10 pt-6 text-center text-sm text-accent">
          <p>© {new Date().getFullYear()} Dr. Rajeev's Clinics. All rights reserved.</p>
          <p className="mt-2 text-xs">Complete Care for your Family | Homeopathic Treatment Centers</p>
          <p className="text-xs">Delhi NCR - Noida - Kolkata - Ranchi - Patna - Jagtauli</p>
        </div>
      </div>
    </footer>
  );
}