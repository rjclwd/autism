import AppointmentFloat from '../../components/AppointmentFloat/AppointmentFloat'
import SuccessStory from './SuccessStory/SuccessStory'
import YoutubeCarousel from '../../components/YoutubeEm/YoutubeEm'
import Testimonials from '../../components/Testimonials/Testimonials'
import Products from '../../components/Products/Products'
import HeroUniversal from '../../components/HeroUniversal/HeroUniversal'
import DiseaseTypes from '../../components/DiseaseTypes/DiseaseTypes'

const testimonials = [
    {
        name: "Rohit Malhotra",
        text: "I was facing severe stress and low energy levels. After starting treatment here, my stamina improved and I feel more confident in daily life.",
        rating: 5,
    },
    {
        name: "Vikas Sharma",
        text: "For years I struggled with sleep and lifestyle issues. The personalized care and guidance helped me restore balance to my health.",
        rating: 4,
    },
    {
        name: "Amit Khanna",
        text: "The doctors truly understood my concerns about men’s health. Within weeks, I noticed improvements in both physical and mental well-being.",
        rating: 5,
    },
    {
        name: "Sandeep Verma",
        text: "I had low immunity and frequent fatigue. The treatment not only gave me more energy but also boosted my overall fitness.",
        rating: 5,
    },
    {
        name: "Manish Gupta",
        text: "Very professional and supportive approach. They explained everything clearly and helped me take better care of myself. Highly recommended!",
        rating: 4,
    },
]

const products = [
  {
    "name": "Throat drops  for Gargle",
    "description": "As directed by the Physician.",
    "price": "180.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/Throat%20Drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2250/throat-drops-for-gargle.html"
  },
  {
    "name": "Sinolax Drops, For Sinus & Nasal Polypus",
    "description": "As directed by the Physician.",
    "price": "180.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/Sinolax%20Drops%20.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2241/sinolax-drops,-for-sinus-nasal-polypus.html"
  },
  {
    "name": "Cough Nil Syrup",
    "description": "As directed by the Physician.",
    "price": "245.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/Cough%20Nil%20Syrup%20450ml.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2236/cough-nil-syrup.html"
  },
  {
    "name": "Asthama Tab",
    "description": "As directed by the Physician.",
    "price": "125.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/Asthama%20Tab.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2211/asthama-tab.html"
  },
  {
    "name": "Allertone Drops For Allergy",
    "description": "As directed by the Physician.",
    "price": "180.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/Allertone%20Drop%2030ml.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2210/allertone-drops-for-allergy.html"
  },
  {
    "name": "Fiebrisom, for Throat Infection",
    "description": "As directed by the Physician.",
    "price": "180.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/Fiebrisom.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2208/fiebrisom,-for-throat-infection.html"
  },
  {
    "name": "Allergy Tab",
    "description": "As directed by the Physician.",
    "price": "125.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/allergy%20Tab%2025gm.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2204/allergy-tab.html"
  },
  {
    "name": "Wheezal Nosoline Nasal Drops",
    "description": "As directed by the Physician.",
    "price": "90.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/wheezal-nosoline-nasal-drops.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2176/wheezal-nosoline-nasal-drops.html"
  },
  {
    "name": "New Life Noso-NL Nose Drop",
    "description": "As directed by the Physician.",
    "price": "50.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/new-life-noso-nl-nose-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2173/new-life-noso-nl-nose-drop.html"
  },
  {
    "name": "SBL Thuja Ointment",
    "description": "As directed by the Physician.",
    "price": "56.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-thuja-ointment.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2140/sbl-thuja-ointment.html"
  },
  {
    "name": "SBL 110 Cold and Cough Care Pack (Combo Of 2)",
    "description": "As directed by the Physician.",
    "price": "275.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-110-cold-and-cough-care-pack-combo-of-2.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2102/sbl-110-cold-and-cough-care-pack-combo-of-2-.html"
  },
  {
    "name": "SBL Homoeopathic Home Kit",
    "description": "As directed by the Physician.",
    "price": "756.00765.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-homoeopathic-home-kit.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2091/sbl-homoeopathic-home-kit.html"
  },
  {
    "name": "Hapdco Vascof Capsule",
    "description": "As directed by the Physician.",
    "price": "35.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/no_img_386_480.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2075/hapdco-vascof-capsule.html"
  },
  {
    "name": "ADEL Anti-Allergic Combo (ADEL 23 + KaliumBichromicum Dilution 200 CH)",
    "description": "As directed by the Physician.",
    "price": "415.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/adel-anti-allergic-combo-adel-23-kalium-bichromicum-dilution-200-ch1.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2062/adel-anti-allergic-combo-adel-23-kaliumbichromicum-dilution-200-ch-.html"
  },
  {
    "name": "Hapdco Immusol Capsule",
    "description": "As directed by the Physician.",
    "price": "35.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/hapdco-immusol-capsule%20(2).jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2055/hapdco-immusol-capsule.html"
  },
  {
    "name": "ADEL Anti Allergic Combo (ADEL 20 + Kalium Bichromicum Dilution)",
    "description": "As directed by the Physician.",
    "price": "390.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/adel-anti-allergic-combo-adel-20-kalium-bichromicum-dilution.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1920/adel-anti-allergic-combo-adel-20-kalium-bichromicum-dilution-.html"
  },
  {
    "name": "ADEL Asthma Care Combo (ADEL 10 + Natrum Sulphuricum Dilution)",
    "description": "As directed by the Physician.",
    "price": "370.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/adel-asthma-care-combo-adel-10-natrum-sulphuricum-dilution.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1917/adel-asthma-care-combo-adel-10-natrum-sulphuricum-dilution-.html"
  },
  {
    "name": "ADEL Asthma Care Combo (ADEL 10 + Antimonium Tartaricum Dilution)",
    "description": "As directed by the Physician.",
    "price": "265.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/adel-asthma-care-combo-adel-10-antimonium-tartaricum-dilution.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1913/adel-asthma-care-combo-adel-10-antimonium-tartaricum-dilution-.html"
  },
  {
    "name": "ADEL Anti-Allergic Combo (ADEL 23 + Kalium Bichromicum Dilution 200 CH)",
    "description": "As directed by the Physician.",
    "price": "390.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/adel-anti-allergic-combo-adel-23-kalium-bichromicum-dilution-200-ch.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1905/adel-anti-allergic-combo-adel-23-kalium-bichromicum-dilution-200-ch-.html"
  },
  {
    "name": "ADEL Anti Tonsilitis Combo (ADEL 24 + Baryta Carb Dilution)",
    "description": "As directed by the Physician.",
    "price": "390.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/adel-anti-tonsilitis-combo-adel-24-baryta-carb-dilution.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1895/adel-anti-tonsilitis-combo-adel-24-baryta-carb-dilution-.html"
  },
  {
    "name": "SBL Mercurius Iodatus Flavus Trituration Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "145.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-mercurius-iod-rubrum-trituration-tablet-3x1.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1879/sbl-mercurius-iodatus-flavus-trituration-tablet-3x.html"
  },
  {
    "name": "SBL Aurum Muriaticum Trituration Tablet 6X",
    "description": "As directed by the Physician.",
    "price": "145.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-aurum-muriaticum-trituration-tablet-6x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1877/sbl-aurum-muriaticum-trituration-tablet-6x.html"
  },
  {
    "name": "SBL Naphthalinum Trituration Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "145.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-naphthalinum-trituration-tablet-3x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1864/sbl-naphthalinum-trituration-tablet-3x.html"
  },
  {
    "name": "SBL Kalium Iodatum Trituration Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "150.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-kalium-iodatum-trituration-tablet-3x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1861/sbl-kalium-iodatum-trituration-tablet-3x.html"
  },
  {
    "name": "SBL Aurum Metallicum Trituration Tablet 6X",
    "description": "As directed by the Physician.",
    "price": "145.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-aurum-metallicum-trituration-tablet-6x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1858/sbl-aurum-metallicum-trituration-tablet-6x.html"
  },
  {
    "name": "SBL Arsenic Iodatum Trituration Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "160.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-arsenic-iodatum-trituration-tablet-3x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1848/sbl-arsenic-iodatum-trituration-tablet-3x.html"
  },
  {
    "name": "SBL Bio-Combination 2 Tablet",
    "description": "As directed by the Physician.",
    "price": "90.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-bio-combination-2-tablet.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1826/sbl-bio-combination-2-tablet.html"
  },
  {
    "name": "SBL Arsenic Iodatum Trituration Tablet 6X",
    "description": "As directed by the Physician.",
    "price": "150.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-arsenic-iodatum-trituration-tablet-6x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1823/sbl-arsenic-iodatum-trituration-tablet-6x.html"
  },
  {
    "name": "SBL Bio-Combination 5 Tablet",
    "description": "As directed by the Physician.",
    "price": "90.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-bio-combination-5-tablet.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1820/sbl-bio-combination-5-tablet.html"
  },
  {
    "name": "SBL Bio-Combination 6 Tablet",
    "description": "As directed by the Physician.",
    "price": "90.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-bio-combination-6-tablet.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1806/sbl-bio-combination-6-tablet.html"
  },
  {
    "name": "Hapdco Bio-Combination 2 Tablet",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/hapdco-bio-combination-2-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1792/hapdco-bio-combination-2-tablet.html"
  },
  {
    "name": "Hapdco Bio-Combination 5 Tablet",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/hapdco-bio-combination-5-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1787/hapdco-bio-combination-5-tablet.html"
  },
  {
    "name": "Hapdco Bio-Combination 6 Tablet",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/hapdco-bio-combination-6-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1781/hapdco-bio-combination-6-tablet.html"
  },
  {
    "name": "Dr. Reckeweg Bio-Combination 2 (BC 2) Tablet",
    "description": "As directed by the Physician.",
    "price": "160.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr.-reckeweg-bio-combination-2-bc-2-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1761/dr-reckeweg-bio-combination-2-bc-2-tablet.html"
  },
  {
    "name": "Dr. Reckeweg Bio-Combination 6 (BC 6) Tablet",
    "description": "As directed by the Physician.",
    "price": "160.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr.-reckeweg-bio-combination-6-bc-6-tablet.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1750/dr-reckeweg-bio-combination-6-bc-6-tablet.html"
  },
  {
    "name": "Dr Willmar Schwabe India Bio-Combination 02 (BC 02) Tablet",
    "description": "As directed by the Physician.",
    "price": "700.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-bio-combination-02-bc-02-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1742/dr-willmar-schwabe-india-bio-combination-02-bc-02-tablet.html"
  },
  {
    "name": "Dr Willmar Schwabe India Bio-Combination 05 (BC 05) Tablet",
    "description": "As directed by the Physician.",
    "price": "700.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-bio-combination-05-bc-05-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1735/dr-willmar-schwabe-india-bio-combination-05-bc-05-tablet.html"
  },
  {
    "name": "Dr Willmar Schwabe India Bio-Combination 06 (BC 06) Tablet",
    "description": "As directed by the Physician.",
    "price": "700.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-bio-combination-06-bc-06-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1725/dr-willmar-schwabe-india-bio-combination-06-bc-06-tablet.html"
  },
  {
    "name": "Dr. Reckeweg Kali Iodatum Trituration Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "205.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr.-reckeweg-kali-iodatum-trituration-tablet-3x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1699/dr-reckeweg-kali-iodatum-trituration-tablet-3x.html"
  },
  {
    "name": "ADEL Bio-Combination 2 Tablet",
    "description": "As directed by the Physician.",
    "price": "160.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/adel-bio-combination-2-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1676/adel-bio-combination-2-tablet.html"
  },
  {
    "name": "ADEL Bio-Combination 5 Tablet",
    "description": "As directed by the Physician.",
    "price": "160.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/adel-bio-combination-5-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1675/adel-bio-combination-5-tablet.html"
  },
  {
    "name": "Dr. Reckeweg Baryta Muriaticum Trituration Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "205.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr.-reckeweg-baryta-muriaticum-trituration-tablet-3x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1662/dr-reckeweg-baryta-muriaticum-trituration-tablet-3x.html"
  },
  {
    "name": "ADEL Bio-Combination 6 Tablet",
    "description": "As directed by the Physician.",
    "price": "160.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/adel-bio-combination-6-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1661/adel-bio-combination-6-tablet.html"
  },
  {
    "name": "Dr. Reckeweg Phytolacca Berry Trituration Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "235.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr.-reckeweg-phytolacca-berry-trituration-tablet-3x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1645/dr-reckeweg-phytolacca-berry-trituration-tablet-3x.html"
  },
  {
    "name": "Dr. Reckeweg Titanium Trituration Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "205.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr.-reckeweg-titanium-trituration-tablet-3x.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1643/dr-reckeweg-titanium-trituration-tablet-3x.html"
  },
  {
    "name": "Bjain Bio-Combination No. 2 Tablet",
    "description": "As directed by the Physician.",
    "price": "599.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-bio-combination-no.-2-tablet%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1626/bjain-bio-combination-no-2-tablet.html"
  },
  {
    "name": "Bjain Bio-Combination No. 5 Tablet",
    "description": "As directed by the Physician.",
    "price": "599.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-bio-combination-no.-5-tablet%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1618/bjain-bio-combination-no-5-tablet.html"
  },
  {
    "name": "Bjain Bio-Combination No. 6 Tablet",
    "description": "As directed by the Physician.",
    "price": "599.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-bio-combination-no.-6-tablet.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1611/bjain-bio-combination-no-6-tablet.html"
  },
  {
    "name": "Dr Willmar Schwabe India Calcarea Carbonicum Trituration Tablet 6X",
    "description": "As directed by the Physician.",
    "price": "110.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-calcarea-carbonicum-trituration-tablet-6x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1569/dr-willmar-schwabe-india-calcarea-carbonicum-trituration-tablet-6x.html"
  },
  {
    "name": "Bjain Eucalyptus Globulus Trituration Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "849.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-eucalyptus-globulus-trituration-tablet-3x%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1499/bjain-eucalyptus-globulus-trituration-tablet-3x.html"
  },
  {
    "name": "Bjain Eucalyptus Globulus Trituration Tablet 6X",
    "description": "As directed by the Physician.",
    "price": "849.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-eucalyptus-globulus-trituration-tablet-6x%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1476/bjain-eucalyptus-globulus-trituration-tablet-6x.html"
  },
  {
    "name": "SBL Glycyrrhiza Glabra Tablet 1X",
    "description": "As directed by the Physician.",
    "price": "120.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-glycyrrhiza-glabra-tablet-1x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1460/sbl-glycyrrhiza-glabra-tablet-1x.html"
  },
  {
    "name": "Bjain Glycyrrhiza Glabra Trituration Tablet 1X",
    "description": "As directed by the Physician.",
    "price": "149.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-glycyrrhiza-glabra-trituration-tablet-1x.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1455/bjain-glycyrrhiza-glabra-trituration-tablet-1x.html"
  },
  {
    "name": "Medisynth Kofgan Pill",
    "description": "As directed by the Physician.",
    "price": "100.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/medisynth-kofgan-pill.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1453/medisynth-kofgan-pill.html"
  },
  {
    "name": "Bjain Phytolacca Berry Trituration Tablet 1X",
    "description": "As directed by the Physician.",
    "price": "149.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-phytolacca-berry-trituration-tablet-1x.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1452/bjain-phytolacca-berry-trituration-tablet-1x.html"
  },
  {
    "name": "Medisynth Nasaltone Q Tablet",
    "description": "As directed by the Physician.",
    "price": "105.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/medisynth-nasaltone-q-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1451/medisynth-nasaltone-q-tablet.html"
  },
  {
    "name": "Medisynth Tonsilon Pills",
    "description": "As directed by the Physician.",
    "price": "100.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/medisynth-tonsilon-pills.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1449/medisynth-tonsilon-pills.html"
  },
  {
    "name": "Hapdco Phytolacca Berry Tablet",
    "description": "As directed by the Physician.",
    "price": "145.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/hapdco-phytolacca-berry-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1440/hapdco-phytolacca-berry-tablet.html"
  },
  {
    "name": "Dr Willmar Schwabe India Alpha - Tons Tablet",
    "description": "As directed by the Physician.",
    "price": "110.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-alpha-tons-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1436/dr-willmar-schwabe-india-alpha-tons-tablet.html"
  },
  {
    "name": "Dr Willmar Schwabe India Alpha - SH Tablet",
    "description": "As directed by the Physician.",
    "price": "175.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-alpha-sh-tablet123.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1434/dr-willmar-schwabe-india-alpha-sh-tablet.html"
  },
  {
    "name": "Dr Willmar Schwabe India Alpha - RC Tablet",
    "description": "As directed by the Physician.",
    "price": "175.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-alpha-rc-tablet.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1428/dr-willmar-schwabe-india-alpha-rc-tablet.html"
  },
  {
    "name": "Dr Willmar Schwabe India Alpha - CC Tablet",
    "description": "As directed by the Physician.",
    "price": "175.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/Buy%20Dr%20Willmar%20Schwabe%20India%20Alpha%20-%20CC%20Tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1424/dr-willmar-schwabe-india-alpha-cc-tablet.html"
  },
  {
    "name": "Dr Willmar Schwabe India Senega Pentarkan Tablet",
    "description": "As directed by the Physician.",
    "price": "160.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-senega-pentarkan-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1404/dr-willmar-schwabe-india-senega-pentarkan-tablet.html"
  },
  {
    "name": "Bjain Calcarea Carbonica Trituration Tablet 6X",
    "description": "As directed by the Physician.",
    "price": "849.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-calcarea-carbonica-trituration-tablet-6x%20(2).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1401/bjain-calcarea-carbonica-trituration-tablet-6x.html"
  },
  {
    "name": "Dr Willmar Schwabe India Aconitum Pentarkan Tablet",
    "description": "As directed by the Physician.",
    "price": "160.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-aconitum-pentarkan-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1396/dr-willmar-schwabe-india-aconitum-pentarkan-tablet.html"
  },
  {
    "name": "Dr Willmar Schwabe India Alpha - CF Tablet",
    "description": "As directed by the Physician.",
    "price": "175.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/Dr%20Willmar%20Schwabe%20India%20Alpha%20-%20CF%20Tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1390/dr-willmar-schwabe-india-alpha-cf-tablet.html"
  },
  {
    "name": "Dr Willmar Schwabe India Alpha - NC Tablet",
    "description": "As directed by the Physician.",
    "price": "175.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/Dr%20Willmar%20Schwabe%20India%20Alpha%20-%20NC%20Tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1389/dr-willmar-schwabe-india-alpha-nc-tablet.html"
  },
  {
    "name": "Bjain Calcarea Carbonica Trituration Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "849.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-calcarea-carbonica-trituration-tablet-3x.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1384/bjain-calcarea-carbonica-trituration-tablet-3x.html"
  },
  {
    "name": "Bjain Ginkgo Biloba Trituration Tablet 1X",
    "description": "As directed by the Physician.",
    "price": "849.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-ginkgo-biloba-trituration-tablet-1x.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1382/bjain-ginkgo-biloba-trituration-tablet-1x.html"
  },
  {
    "name": "Dr Willmar Schwabe India Grindelia Pentarkan Tablet",
    "description": "As directed by the Physician.",
    "price": "160.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-grindelia-pentarkan-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1377/dr-willmar-schwabe-india-grindelia-pentarkan-tablet.html"
  },
  {
    "name": "Dr Willmar Schwabe India Tussikind Tablet",
    "description": "As directed by the Physician.",
    "price": "110.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-tussikind-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1371/dr-willmar-schwabe-india-tussikind-tablet.html"
  },
  {
    "name": "Dr Willmar Schwabe India Phytolacca Berry Tablet",
    "description": "As directed by the Physician.",
    "price": "560.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-phytolacca-berry-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1367/dr-willmar-schwabe-india-phytolacca-berry-tablet.html"
  },
  {
    "name": "ADEL Barium Muriaticum Trituration Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "225.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/blank_otc_uobogo12345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758596061.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1366/adel-barium-muriaticum-trituration-tablet-3x.html"
  },
  {
    "name": "ADEL Sanguinarinum Nitricum Trituration Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "210.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/blank_otc_uobogo12345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1362/adel-sanguinarinum-nitricum-trituration-tablet-3x.html"
  },
  {
    "name": "ADEL Kali Bichromicum Trituration Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "225.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/adel-kali-bichromicum-trituration-tablet-3x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1353/adel-kali-bichromicum-trituration-tablet-3x.html"
  },
  {
    "name": "Bjain Omeo Flu Tablet",
    "description": "As directed by the Physician.",
    "price": "749.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-omeo-flu-tablet%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1347/bjain-omeo-flu-tablet.html"
  },
  {
    "name": "Bhargava Phytolacca Berry Tablet",
    "description": "As directed by the Physician.",
    "price": "125.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bhargava-phytolacca-berry-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1330/bhargava-phytolacca-berry-tablet.html"
  },
  {
    "name": "Bakson`s Compound # 30 Sinusitis Tablet",
    "description": "As directed by the Physician.",
    "price": "110.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-compound-30-sinusitis-tablet.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1307/bakson%60s-compound-30-sinusitis-tablet.html"
  },
  {
    "name": "Bakson`s Tonsil Aid Paediatric Tablet",
    "description": "As directed by the Physician.",
    "price": "125.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-tonsil-aid-paediatric-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1305/bakson%60s-tonsil-aid-paediatric-tablet.html"
  },
  {
    "name": "Bakson`s Aller Aid Paediatric Tablet",
    "description": "As directed by the Physician.",
    "price": "110.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-aller-aid-paediatric-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1304/bakson%60s-aller-aid-paediatric-tablet.html"
  },
  {
    "name": "Bakson`s Phytolacca Berry Tablet",
    "description": "As directed by the Physician.",
    "price": "170.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-phytolacca-berry-tablet%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1297/bakson%60s-phytolacca-berry-tablet.html"
  },
  {
    "name": "Bakson`s Kof Aid Paediatric Tablet",
    "description": "As directed by the Physician.",
    "price": "110.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-kof-aid-paediatric-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1290/bakson%60s-kof-aid-paediatric-tablet.html"
  },
  {
    "name": "Bakson`s Flu Aid Tablet",
    "description": "As directed by the Physician.",
    "price": "170.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-flu-aid-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1282/bakson%60s-flu-aid-tablet.html"
  },
  {
    "name": "Bakson`s Astha Aid Tablet",
    "description": "As directed by the Physician.",
    "price": "163.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-astha-aid-tablet%20(1).jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1275/bakson%60s-astha-aid-tablet.html"
  },
  {
    "name": "Bakson`s Kof Aid Tablet",
    "description": "As directed by the Physician.",
    "price": "170.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-kof-aid-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1270/bakson%60s-kof-aid-tablet.html"
  },
  {
    "name": "Bakson`s Sinus Aid Tablet",
    "description": "As directed by the Physician.",
    "price": "170.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-sinus-aid-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1264/bakson%60s-sinus-aid-tablet.html"
  },
  {
    "name": "Bakson`s Tonsil Aid Tablet",
    "description": "As directed by the Physician.",
    "price": "170.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-tonsil-aid-tablet%20(1).jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1261/bakson%60s-tonsil-aid-tablet.html"
  },
  {
    "name": "Bakson`s Throat Aid Tablet",
    "description": "As directed by the Physician.",
    "price": "170.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-throat-aid-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1257/bakson%60s-throat-aid-tablet.html"
  },
  {
    "name": "Bakson`s Aller Aid Tablet",
    "description": "As directed by the Physician.",
    "price": "170.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-aller-aid-tablet%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1256/bakson%60s-aller-aid-tablet.html"
  },
  {
    "name": "SBL Tonsilat Tablet",
    "description": "As directed by the Physician.",
    "price": "140.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-tonsilat-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1250/sbl-tonsilat-tablet.html"
  },
  {
    "name": "SBL AF-Tabs Tablet",
    "description": "As directed by the Physician.",
    "price": "140.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-af-tabs-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1247/sbl-af-tabs-tablet.html"
  },
  {
    "name": "SBL Phytolacca Berry Tablet",
    "description": "As directed by the Physician.",
    "price": "131.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-phytolacca-berry-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1245/sbl-phytolacca-berry-tablet.html"
  },
  {
    "name": "Wheezal Sneezo Tablet",
    "description": "As directed by the Physician.",
    "price": "160.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/wheezal-sneezo-tablet1.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1234/wheezal-sneezo-tablet.html"
  },
  {
    "name": "Wheezal Phytolacca Berry Tablet",
    "description": "As directed by the Physician.",
    "price": "150.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/wheezal-phytolacca-berry-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1233/wheezal-phytolacca-berry-tablet.html"
  },
  {
    "name": "Wheezal Sneezo - Corz Tablet",
    "description": "As directed by the Physician.",
    "price": "160.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/wheezal-sneezo-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1229/wheezal-sneezo-corz-tablet.html"
  },
  {
    "name": "ADEL Phytolacca Berry Tablet",
    "description": "As directed by the Physician.",
    "price": "240.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/adel-phytolacca-berry-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1226/adel-phytolacca-berry-tablet.html"
  },
  {
    "name": "Wheezal Astharex Syrup",
    "description": "As directed by the Physician.",
    "price": "110.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/wheezal-astharex-syrup%20(1).jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1220/wheezal-astharex-syrup.html"
  },
  {
    "name": "Similia Astha - Rid Syrup",
    "description": "As directed by the Physician.",
    "price": "110.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/similia-astha-rid-syrup.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1210/similia-astha-rid-syrup.html"
  },
  {
    "name": "Adven Ad-Liv Tonic",
    "description": "As directed by the Physician.",
    "price": "125.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/adven-ad-liv-tonic%20(1).jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1150/adven-ad-liv-tonic.html"
  },
  {
    "name": "Bjain Kali Sulphuricum Biochemic Tablet 200X",
    "description": "As directed by the Physician.",
    "price": "599.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-kali-sulphuricum-biochemic-tablet-200x%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1133/bjain-kali-sulphuricum-biochemic-tablet-200x.html"
  },
  {
    "name": "Bjain Kali Sulphuricum Biochemic Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "599.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-kali-sulphuricum-biochemic-tablet-3x%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1132/bjain-kali-sulphuricum-biochemic-tablet-3x.html"
  },
  {
    "name": "Bjain Kali Sulphuricum Biochemic Tablet 6X",
    "description": "As directed by the Physician.",
    "price": "599.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-kali-sulphuricum-biochemic-tablet-6x%20(1)1.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1130/bjain-kali-sulphuricum-biochemic-tablet-6x.html"
  },
  {
    "name": "Bjain Silicea Biochemic Tablet 30X",
    "description": "As directed by the Physician.",
    "price": "599.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-silicea-biochemic-tablet-30x%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1128/bjain-silicea-biochemic-tablet-30x.html"
  },
  {
    "name": "Bjain Kali Sulphuricum Biochemic Tablet 12X",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-kali-sulphuricum-biochemic-tablet-12x%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1125/bjain-kali-sulphuricum-biochemic-tablet-12x.html"
  },
  {
    "name": "Bjain Kali Muriaticum Biochemic Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "599.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-kali-muriaticum-biochemic-tablet-3x%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1124/bjain-kali-muriaticum-biochemic-tablet-3x.html"
  },
  {
    "name": "Bjain Natrum Sulphuricum Biochemic Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "599.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-natrum-sulphuricum-biochemic-tablet-3x%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1121/bjain-natrum-sulphuricum-biochemic-tablet-3x.html"
  },
  {
    "name": "Bjain Silicea Biochemic Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "599.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-silicea-biochemic-tablet-3x%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1120/bjain-silicea-biochemic-tablet-3x.html"
  },
  {
    "name": "Bjain Kali Muriaticum Biochemic Tablet 30X",
    "description": "As directed by the Physician.",
    "price": "599.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-kali-muriaticum-biochemic-tablet-30x%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1110/bjain-kali-muriaticum-biochemic-tablet-30x.html"
  },
  {
    "name": "Bjain Silicea Biochemic Tablet 200X",
    "description": "As directed by the Physician.",
    "price": "599.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-silicea-biochemic-tablet-200x%20(1)1.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1101/bjain-silicea-biochemic-tablet-200x.html"
  },
  {
    "name": "Bjain Silicea Biochemic Tablet 12X",
    "description": "As directed by the Physician.",
    "price": "599.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-silicea-biochemic-tablet-12x%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1100/bjain-silicea-biochemic-tablet-12x.html"
  },
  {
    "name": "Bjain Natrum Sulphuricum Biochemic Tablet 12X",
    "description": "As directed by the Physician.",
    "price": "599.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-natrum-sulphuricum-biochemic-tablet-12x%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1099/bjain-natrum-sulphuricum-biochemic-tablet-12x.html"
  },
  {
    "name": "Bjain Natrum Sulphuricum Biochemic Tablet 200X",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-natrum-sulphuricum-biochemic-tablet-200x%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1094/bjain-natrum-sulphuricum-biochemic-tablet-200x.html"
  },
  {
    "name": "Bjain Natrum Sulphuricum Biochemic Tablet 30X",
    "description": "As directed by the Physician.",
    "price": "599.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-natrum-sulphuricum-biochemic-tablet-30x%20(1)1.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1089/bjain-natrum-sulphuricum-biochemic-tablet-30x.html"
  },
  {
    "name": "Bjain Kali Muriaticum Biochemic Tablet 200X",
    "description": "As directed by the Physician.",
    "price": "599.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-kali-muriaticum-biochemic-tablet-200x%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1087/bjain-kali-muriaticum-biochemic-tablet-200x.html"
  },
  {
    "name": "Bjain Kali Sulphuricum Biochemic Tablet 30X",
    "description": "As directed by the Physician.",
    "price": "599.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-kali-sulphuricum-biochemic-tablet-30x%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1084/bjain-kali-sulphuricum-biochemic-tablet-30x.html"
  },
  {
    "name": "SBL Bronchoherb Cough Syrup",
    "description": "As directed by the Physician.",
    "price": "100.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-bronchoherb-cough-syrup%20(1)1.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1082/sbl-bronchoherb-cough-syrup.html"
  },
  {
    "name": "SBL Stobal Cough Syrup",
    "description": "As directed by the Physician.",
    "price": "50.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-stobal-cough-syrup.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1072/sbl-stobal-cough-syrup.html"
  },
  {
    "name": "Bjain Natrum Sulphuricum Biochemic Tablet 6X",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-natrum-sulphuricum-biochemic-tablet-6x%20(1)1.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1071/bjain-natrum-sulphuricum-biochemic-tablet-6x.html"
  },
  {
    "name": "Bjain Silicea Biochemic Tablet 6X",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-silicea-biochemic-tablet-6x%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1062/bjain-silicea-biochemic-tablet-6x.html"
  },
  {
    "name": "Bjain Kali Muriaticum Biochemic Tablet 12X",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-kali-muriaticum-biochemic-tablet-12x.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1061/bjain-kali-muriaticum-biochemic-tablet-12x.html"
  },
  {
    "name": "Bjain Kali Muriaticum Biochemic Tablet 6X",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-kali-muriaticum-biochemic-tablet-6x%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1055/bjain-kali-muriaticum-biochemic-tablet-6x.html"
  },
  {
    "name": "Dr Willmar Schwabe India Calcarea Sulphurica Biochemic Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "80.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-calcarea-sulphurica-biochemic-tablet-3x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1047/dr-willmar-schwabe-india-calcarea-sulphurica-biochemic-tablet-3x.html"
  },
  {
    "name": "Dr Willmar Schwabe India Kali Sulphuricum Biochemic Tablet 30X",
    "description": "As directed by the Physician.",
    "price": "80.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-kali-sulphuricum-biochemic-tablet-30x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1046/dr-willmar-schwabe-india-kali-sulphuricum-biochemic-tablet-30x.html"
  },
  {
    "name": "Dr Willmar Schwabe India Kali Sulphuricum Biochemic Tablet 200X",
    "description": "As directed by the Physician.",
    "price": "80.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-kali-sulphuricum-biochemic-tablet-200x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1043/dr-willmar-schwabe-india-kali-sulphuricum-biochemic-tablet-200x.html"
  },
  {
    "name": "Dr Willmar Schwabe India Natrum Sulphuricum Biochemic Tablet 200X",
    "description": "As directed by the Physician.",
    "price": "80.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-natrum-sulphuricum-biochemic-tablet-200x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1039/dr-willmar-schwabe-india-natrum-sulphuricum-biochemic-tablet-200x.html"
  },
  {
    "name": "Medisynth Kofeez Cough Syrup",
    "description": "As directed by the Physician.",
    "price": "110.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/medisynth-kofeez-cough-syrup.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1037/medisynth-kofeez-cough-syrup.html"
  },
  {
    "name": "Dr Willmar Schwabe India Calcarea Sulphurica Biochemic Tablet 30X",
    "description": "As directed by the Physician.",
    "price": "80.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-calcarea-sulphurica-biochemic-tablet-30x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1036/dr-willmar-schwabe-india-calcarea-sulphurica-biochemic-tablet-30x.html"
  },
  {
    "name": "Dr Willmar Schwabe India Kalium Phosphoricum Biochemic Tablet 30X",
    "description": "As directed by the Physician.",
    "price": "80.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-kalium-phosphoricum-biochemic-tablet-30x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1026/dr-willmar-schwabe-india-kalium-phosphoricum-biochemic-tablet-30x.html"
  },
  {
    "name": "Dr Willmar Schwabe India Natrum Sulphuricum Biochemic Tablet 30X",
    "description": "As directed by the Physician.",
    "price": "80.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-natrum-sulphuricum-biochemic-tablet-30x%20(1).jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1025/dr-willmar-schwabe-india-natrum-sulphuricum-biochemic-tablet-30x.html"
  },
  {
    "name": "Dr Willmar Schwabe India Kali Sulphuricum Biochemic Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "80.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-kali-sulphuricum-biochemic-tablet-3x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1023/dr-willmar-schwabe-india-kali-sulphuricum-biochemic-tablet-3x.html"
  },
  {
    "name": "Dr Willmar Schwabe India Kali Sulphuricum Biochemic Tablet 12X",
    "description": "As directed by the Physician.",
    "price": "80.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-kali-sulphuricum-biochemic-tablet-12x%20(1).jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1019/dr-willmar-schwabe-india-kali-sulphuricum-biochemic-tablet-12x.html"
  },
  {
    "name": "Dr Willmar Schwabe India Calcarea Sulphurica Biochemic Tablet 12X",
    "description": "As directed by the Physician.",
    "price": "80.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-calcarea-sulphurica-biochemic-tablet-12x%20(1).jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1015/dr-willmar-schwabe-india-calcarea-sulphurica-biochemic-tablet-12x.html"
  },
  {
    "name": "Dr Willmar Schwabe India Calcarea Sulphurica Biochemic Tablet 200X",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-calcarea-sulphurica-biochemic-tablet-200x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1011/dr-willmar-schwabe-india-calcarea-sulphurica-biochemic-tablet-200x.html"
  },
  {
    "name": "Hapdco Viola Plus Cough Syrup",
    "description": "As directed by the Physician.",
    "price": "75.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/hapdco-viola-plus-cough-syrup%20(1).jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1006/hapdco-viola-plus-cough-syrup.html"
  },
  {
    "name": "Dr Willmar Schwabe India Silicea Biochemic Tablet 30X",
    "description": "As directed by the Physician.",
    "price": "80.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-silicea-biochemic-tablet-30x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1001/dr-willmar-schwabe-india-silicea-biochemic-tablet-30x.html"
  },
  {
    "name": "Dr Willmar Schwabe India Kali Muriaticum Biochemic Tablet 12X",
    "description": "As directed by the Physician.",
    "price": "80.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-kali-muriaticum-biochemic-tablet-12x%20(1).jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/997/dr-willmar-schwabe-india-kali-muriaticum-biochemic-tablet-12x.html"
  },
  {
    "name": "Dr Willmar Schwabe India Natrum Sulphuricum Biochemic Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "80.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-natrum-sulphuricum-biochemic-tablet-3x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/993/dr-willmar-schwabe-india-natrum-sulphuricum-biochemic-tablet-3x.html"
  },
  {
    "name": "Dr Willmar Schwabe India Tussistin Plus Cough Syrup With Ginger",
    "description": "As directed by the Physician.",
    "price": "83.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-tussistin-plus-cough-syrup-with-ginger.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/992/dr-willmar-schwabe-india-tussistin-plus-cough-syrup-with-ginger.html"
  },
  {
    "name": "Dr Willmar Schwabe India Tussistin Syrup",
    "description": "As directed by the Physician.",
    "price": "83.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-tussistin-syrup.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/991/dr-willmar-schwabe-india-tussistin-syrup.html"
  },
  {
    "name": "Dr Willmar Schwabe India Alpha-Coff Cough Syrup",
    "description": "As directed by the Physician.",
    "price": "99.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-alpha-coff-cough-syrup.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/987/dr-willmar-schwabe-india-alpha-coff-cough-syrup.html"
  },
  {
    "name": "Dr Willmar Schwabe India Silicea Biochemic Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "80.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-silicea-biochemic-tablet-3x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/985/dr-willmar-schwabe-india-silicea-biochemic-tablet-3x.html"
  },
  {
    "name": "Dr Willmar Schwabe India Calcarea Sulphurica Biochemic Tablet 6X",
    "description": "As directed by the Physician.",
    "price": "80.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-calcarea-sulphurica-biochemic-tablet-6x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/977/dr-willmar-schwabe-india-calcarea-sulphurica-biochemic-tablet-6x.html"
  },
  {
    "name": "Dr Willmar Schwabe India Natrum Sulphuricum Biochemic Tablet 12X",
    "description": "As directed by the Physician.",
    "price": "80.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-natrum-sulphuricum-biochemic-tablet-12x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/973/dr-willmar-schwabe-india-natrum-sulphuricum-biochemic-tablet-12x.html"
  },
  {
    "name": "Dr Willmar Schwabe India Silicea Biochemic Tablet 6X",
    "description": "As directed by the Physician.",
    "price": "80.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-silicea-biochemic-tablet-6x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/971/dr-willmar-schwabe-india-silicea-biochemic-tablet-6x.html"
  },
  {
    "name": "Dr Willmar Schwabe India Natrum Sulphuricum Biochemic Tablet 6X",
    "description": "As directed by the Physician.",
    "price": "80.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-natrum-sulphuricum-biochemic-tablet-6x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/967/dr-willmar-schwabe-india-natrum-sulphuricum-biochemic-tablet-6x.html"
  },
  {
    "name": "Dr Willmar Schwabe India Silicea Biochemic Tablet 12X",
    "description": "As directed by the Physician.",
    "price": "80.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-silicea-biochemic-tablet-12x%20(1).jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/966/dr-willmar-schwabe-india-silicea-biochemic-tablet-12x.html"
  },
  {
    "name": "Dr Willmar Schwabe India Kali Muriaticum Biochemic Tablet 6X",
    "description": "As directed by the Physician.",
    "price": "80.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-kali-muriaticum-biochemic-tablet-6x.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/965/dr-willmar-schwabe-india-kali-muriaticum-biochemic-tablet-6x.html"
  },
  {
    "name": "SBL Kali Sulphurica Biochemic Tablet 200X",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-kali-sulphurica-biochemic-tablet-200x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/952/sbl-kali-sulphurica-biochemic-tablet-200x.html"
  },
  {
    "name": "SBL Kali Sulphurica Biochemic Tablet 30X",
    "description": "As directed by the Physician.",
    "price": "80.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-kali-sulphurica-biochemic-tablet-30x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/951/sbl-kali-sulphurica-biochemic-tablet-30x.html"
  },
  {
    "name": "SBL Kali Muriatica Biochemic Tablet 30X",
    "description": "As directed by the Physician.",
    "price": "75.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-kali-muriatica-biochemic-tablet-30x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/950/sbl-kali-muriatica-biochemic-tablet-30x.html"
  },
  {
    "name": "SBL Kali Sulphurica Biochemic Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "80.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-kali-sulphurica-biochemic-tablet-3x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/947/sbl-kali-sulphurica-biochemic-tablet-3x.html"
  },
  {
    "name": "SBL Calcarea Sulphurica Biochemic Tablet 30X",
    "description": "As directed by the Physician.",
    "price": "80.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-calcarea-sulphurica-biochemic-tablet-30x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/946/sbl-calcarea-sulphurica-biochemic-tablet-30x.html"
  },
  {
    "name": "SBL Kali Muriatica Biochemic Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-kali-muriatica-biochemic-tablet-3x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/945/sbl-kali-muriatica-biochemic-tablet-3x.html"
  },
  {
    "name": "SBL Kali Sulphurica Biochemic Tablet 12X",
    "description": "As directed by the Physician.",
    "price": "80.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-kali-sulphurica-biochemic-tablet-12x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/944/sbl-kali-sulphurica-biochemic-tablet-12x.html"
  },
  {
    "name": "SBL Kali Muriatica Biochemic Tablet 200X",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-kali-muriatica-biochemic-tablet-200x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/943/sbl-kali-muriatica-biochemic-tablet-200x.html"
  },
  {
    "name": "SBL Calcarea Sulphurica Biochemic Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-calcarea-sulphurica-biochemic-tablet-3x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/941/sbl-calcarea-sulphurica-biochemic-tablet-3x.html"
  },
  {
    "name": "SBL Calcarea Sulphurica Biochemic Tablet 200X",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-calcarea-sulphurica-biochemic-tablet-200x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/938/sbl-calcarea-sulphurica-biochemic-tablet-200x.html"
  },
  {
    "name": "SBL Calcarea Sulphurica Biochemic Tablet 12X",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-calcarea-sulphurica-biochemic-tablet-12x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/935/sbl-calcarea-sulphurica-biochemic-tablet-12x.html"
  },
  {
    "name": "SBL Silicea Biochemic Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-silicea-biochemic-tablet-3x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/931/sbl-silicea-biochemic-tablet-3x.html"
  },
  {
    "name": "SBL Kali Muriatica Biochemic Tablet 12X",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-kali-muriatica-biochemic-tablet-12x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/930/sbl-kali-muriatica-biochemic-tablet-12x.html"
  },
  {
    "name": "SBL Silicea Biochemic Tablet 30X",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-silicea-biochemic-tablet-30x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/928/sbl-silicea-biochemic-tablet-30x.html"
  },
  {
    "name": "SBL Silicea Biochemic Tablet 200X",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-silicea-biochemic-tablet-200x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/927/sbl-silicea-biochemic-tablet-200x.html"
  },
  {
    "name": "SBL Calcarea Sulphurica Biochemic Tablet 6X",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-calcarea-sulphurica-biochemic-tablet-6x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/917/sbl-calcarea-sulphurica-biochemic-tablet-6x.html"
  },
  {
    "name": "SBL Kali Sulphurica Biochemic Tablet 6X",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-kali-sulphurica-biochemic-tablet-6x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/912/sbl-kali-sulphurica-biochemic-tablet-6x.html"
  },
  {
    "name": "SBL Silicea Biochemic Tablet 12X",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-silicea-biochemic-tablet-12x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/902/sbl-silicea-biochemic-tablet-12x.html"
  },
  {
    "name": "SBL Silicea Biochemic Tablet 6X",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-silicea-biochemic-tablet-6x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/900/sbl-silicea-biochemic-tablet-6x.html"
  },
  {
    "name": "Bjain Omeo Cough Syrup",
    "description": "As directed by the Physician.",
    "price": "279.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-omeo-cough-syrup%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/891/bjain-omeo-cough-syrup.html"
  },
  {
    "name": "Hapdco Natrum Sulphuricum Biochemic Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/blank_otc_uobogo1234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/890/hapdco-natrum-sulphuricum-biochemic-tablet-3x.html"
  },
  {
    "name": "Hapdco Silicea Biochemic Tablet 200X",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/blank_otc_uobogo1234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/887/hapdco-silicea-biochemic-tablet-200x.html"
  },
  {
    "name": "Hapdco Natrum Sulphuricum Biochemic Tablet 12X",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/blank_otc_uobogo123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/885/hapdco-natrum-sulphuricum-biochemic-tablet-12x.html"
  },
  {
    "name": "Bjain Omeo Asthma Syrup",
    "description": "As directed by the Physician.",
    "price": "279.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-omeo-asthma-syrup%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/874/bjain-omeo-asthma-syrup.html"
  },
  {
    "name": "Hapdco Natrum Sulphuricumn Biochemic Tablet 200X",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/blank_otc_uobogo123456789101112131415161718192021222324252627282930313233.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/857/hapdco-natrum-sulphuricumn-biochemic-tablet-200x.html"
  },
  {
    "name": "Bhargava Co-Ex Syrup",
    "description": "As directed by the Physician.",
    "price": "101.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bhargava-co-ex-syrup.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/843/bhargava-co-ex-syrup.html"
  },
  {
    "name": "Hapdco Natrum Sulphuricum Biochemic Tablet 30X",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/blank_otc_uobogo1234567891011121314151617181920212223.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/840/hapdco-natrum-sulphuricum-biochemic-tablet-30x.html"
  },
  {
    "name": "Bakson`s Astha Aid Syrup",
    "description": "As directed by the Physician.",
    "price": "315.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-astha-aid-syrup%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/810/bakson%60s-astha-aid-syrup.html"
  },
  {
    "name": "Bakson`s Kof Aid Cough Syrup",
    "description": "As directed by the Physician.",
    "price": "225.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-kof-aid-cough-syrup%20(2)1.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/806/bakson%60s-kof-aid-cough-syrup.html"
  },
  {
    "name": "Bakson`s Kof Aid Plus Sugar Free Cough Syrup",
    "description": "As directed by the Physician.",
    "price": "100.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-kof-aid-plus-sugar-free-cough-syrup.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/805/bakson%60s-kof-aid-plus-sugar-free-cough-syrup.html"
  },
  {
    "name": "Adven Justin Cough Syrup",
    "description": "As directed by the Physician.",
    "price": "125.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/adven-justin-cough-syrup.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/796/adven-justin-cough-syrup.html"
  },
  {
    "name": "Dr. Reckeweg R8 Jut-U-Sin Cough Syrup",
    "description": "As directed by the Physician.",
    "price": "430.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr.-reckeweg-r8-jut-u-sin-cough-syrup.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/795/dr-reckeweg-r8-jut-u-sin-cough-syrup.html"
  },
  {
    "name": "ADEL 83 Bronchi-Pertu Syrup",
    "description": "As directed by the Physician.",
    "price": "400.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/adel-83-bronchi-pertu-syrup.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/794/adel-83-bronchi-pertu-syrup.html"
  },
  {
    "name": "Dr. Reckeweg R76 Asthma Forte Drop",
    "description": "As directed by the Physician.",
    "price": "235.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr.-reckeweg-r76-asthma-forte-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/771/dr-reckeweg-r76-asthma-forte-drop.html"
  },
  {
    "name": "Dr. Reckeweg R88 Anti Viral Drop",
    "description": "As directed by the Physician.",
    "price": "270.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr.-reckeweg-r88-anti-viral-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/757/dr-reckeweg-r88-anti-viral-drop.html"
  },
  {
    "name": "Dr. Reckeweg R1 Inflammation Drop",
    "description": "As directed by the Physician.",
    "price": "235.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr.-reckeweg-r1-inflammation-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/753/dr-reckeweg-r1-inflammation-drop.html"
  },
  {
    "name": "Dr. Reckeweg R49 Sinus Drop",
    "description": "As directed by the Physician.",
    "price": "235.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr.-reckeweg-r49-sinus-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/747/dr-reckeweg-r49-sinus-drop.html"
  },
  {
    "name": "Dr. Reckeweg R84 Inhalent Allergy Drop",
    "description": "As directed by the Physician.",
    "price": "270.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr.-reckeweg-r84-inhalent-allergy-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/744/dr-reckeweg-r84-inhalent-allergy-drop.html"
  },
  {
    "name": "Wheezal WL46 Eosinophilia Drop",
    "description": "As directed by the Physician.",
    "price": "145.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/wheezal-wl46-eosinophilia-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/734/wheezal-wl46-eosinophilia-drop.html"
  },
  {
    "name": "Wheezal WL15 Healthy Throat Drop",
    "description": "As directed by the Physician.",
    "price": "145.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/wheezal-wl15-healthy-throat-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/707/wheezal-wl15-healthy-throat-drop.html"
  },
  {
    "name": "Wheezal WL13 Glandula Drop",
    "description": "As directed by the Physician.",
    "price": "140.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/wheezal-wl13-glandula-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/699/wheezal-wl13-glandula-drop.html"
  },
  {
    "name": "New Life Aller-N Drop",
    "description": "As directed by the Physician.",
    "price": "90.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/new-life-aller-n-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/678/new-life-aller-n-drop.html"
  },
  {
    "name": "New Life Sinocin Drop",
    "description": "As directed by the Physician.",
    "price": "100.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/new-life-sinocin-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/676/new-life-sinocin-drop.html"
  },
  {
    "name": "Medisynth Kofgan Forte Drop",
    "description": "As directed by the Physician.",
    "price": "120.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/medisynth-kofgan-forte-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/665/medisynth-kofgan-forte-drop.html"
  },
  {
    "name": "Wheezal WL18 Influenza Drop",
    "description": "As directed by the Physician.",
    "price": "145.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/wheezal-wl18-influenza-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/664/wheezal-wl18-influenza-drop.html"
  },
  {
    "name": "Wheezal WL07 Cold And Cough Drop",
    "description": "As directed by the Physician.",
    "price": "145.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/wheezal-wl07-cold-and-cough-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/661/wheezal-wl07-cold-and-cough-drop.html"
  },
  {
    "name": "Medisynth Nasaltone Oral Drop",
    "description": "As directed by the Physician.",
    "price": "120.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/medisynth-nasaltone-oral-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/656/medisynth-nasaltone-oral-drop.html"
  },
  {
    "name": "Wheezal WL08 Cough Drop",
    "description": "As directed by the Physician.",
    "price": "145.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/wheezal-wl08-cough-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/644/wheezal-wl08-cough-drop.html"
  },
  {
    "name": "Wheezal WL02 Asthma Drop",
    "description": "As directed by the Physician.",
    "price": "145.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/wheezal-wl02-asthma-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/643/wheezal-wl02-asthma-drop.html"
  },
  {
    "name": "Wheezal WL37 Sinusitis Drop",
    "description": "As directed by the Physician.",
    "price": "145.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/wheezal-wl37-sinusitis-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/618/wheezal-wl37-sinusitis-drop.html"
  },
  {
    "name": "Wheezal WL39 Tonsillitis Swollen Drop",
    "description": "As directed by the Physician.",
    "price": "145.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/wheezal-wl39-tonsillitis-swollen-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/610/wheezal-wl39-tonsillitis-swollen-drop.html"
  },
  {
    "name": "Hapdco  MTC-34 Cold & Flu Drop",
    "description": "As directed by the Physician.",
    "price": "100.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/hapdco-mtc-34-cold-flu-drop-1.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/603/hapdco-mtc-34-cold-flu-drop.html"
  },
  {
    "name": "REPL Dr. Advice No.26 Cough Moist Drop",
    "description": "As directed by the Physician.",
    "price": "154.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/repl-dr.-advice-no.26-cough-moist-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/595/repl-dr-advice-no-26-cough-moist-drop.html"
  },
  {
    "name": "Hapdco  MTC-5 Asthma Drop",
    "description": "As directed by the Physician.",
    "price": "100.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/hapdco-mtc-5-asthma-drop-1.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/594/hapdco-mtc-5-asthma-drop.html"
  },
  {
    "name": "Hapdco  Viola Drop",
    "description": "As directed by the Physician.",
    "price": "275.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/hapdco-viola-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/589/hapdco-viola-drop.html"
  },
  {
    "name": "REPL Dr. Advice No.17 Asthmorin Drop",
    "description": "As directed by the Physician.",
    "price": "160.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/repl-dr.-advice-no.17-asthmorin-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/588/repl-dr-advice-no-17-asthmorin-drop.html"
  },
  {
    "name": "Bjain Omeo Haem Purifier Drop",
    "description": "As directed by the Physician.",
    "price": "139.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-omeo-haem-purifier-drop.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/573/bjain-omeo-haem-purifier-drop.html"
  },
  {
    "name": "Bjain Omeo Sinus Relief Drop",
    "description": "As directed by the Physician.",
    "price": "139.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-omeo-sinus-relief-drop.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/567/bjain-omeo-sinus-relief-drop.html"
  },
  {
    "name": "Adven Ad-Liv Drop",
    "description": "As directed by the Physician.",
    "price": "125.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/adven-ad-liv-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/527/adven-ad-liv-drop.html"
  },
  {
    "name": "REPL Dr. Advice No.21 Bronchitis Drop",
    "description": "As directed by the Physician.",
    "price": "170.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/repl-dr.-advice-no.21-bronchitis-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/506/repl-dr-advice-no-21-bronchitis-drop.html"
  },
  {
    "name": "Adven Sinus-Gold Drop",
    "description": "As directed by the Physician.",
    "price": "125.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/adven-sinus-gold-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/502/adven-sinus-gold-drop.html"
  },
  {
    "name": "Bakson`s B40 Pleurisy Drop",
    "description": "As directed by the Physician.",
    "price": "150.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-b40-pleurisy-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/456/bakson%60s-b40-pleurisy-drop.html"
  },
  {
    "name": "REPL Dr. Advice No.73 Nasal Polyp Drop",
    "description": "As directed by the Physician.",
    "price": "154.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/repl-dr.-advice-no.73-nasal-polyp-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/436/repl-dr-advice-no-73-nasal-polyp-drop.html"
  },
  {
    "name": "Bakson`s B39 Cardio Pulmonary Drop",
    "description": "As directed by the Physician.",
    "price": "135.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-b39-cardio-pulmonary-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/425/bakson%60s-b39-cardio-pulmonary-drop.html"
  },
  {
    "name": "Bakson`s B38 Reactivating Drop",
    "description": "As directed by the Physician.",
    "price": "150.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-b38-reactivating-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/417/bakson%60s-b38-reactivating-drop.html"
  },
  {
    "name": "Bakson`s B43 Hyper Hydrosis Drop",
    "description": "As directed by the Physician.",
    "price": "150.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-b43-hyper-hydrosis-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/411/bakson%60s-b43-hyper-hydrosis-drop.html"
  },
  {
    "name": "Bakson`s B54 Pulmonic Drop",
    "description": "As directed by the Physician.",
    "price": "150.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-b54-pulmonic-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/400/bakson%60s-b54-pulmonic-drop.html"
  },
  {
    "name": "Bhargava Sinin Drop",
    "description": "As directed by the Physician.",
    "price": "159.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bhargava-sinin-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/395/bhargava-sinin-drop.html"
  },
  {
    "name": "Bakson`s B49 Astha Drop",
    "description": "As directed by the Physician.",
    "price": "150.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-b49-astha-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/371/bakson%60s-b49-astha-drop.html"
  },
  {
    "name": "Bakson`s Astha Aid Drop",
    "description": "As directed by the Physician.",
    "price": "150.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-astha-aid-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/360/bakson%60s-astha-aid-drop.html"
  },
  {
    "name": "Bakson`s B33 Cough Drop",
    "description": "As directed by the Physician.",
    "price": "150.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-b33-cough-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/348/bakson%60s-b33-cough-drop.html"
  },
  {
    "name": "Bakson`s B1 Influenza & Fever Drop",
    "description": "As directed by the Physician.",
    "price": "150.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-b1-influenza-fever-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/344/bakson%60s-b1-influenza-fever-drop.html"
  },
  {
    "name": "Bakson`s B22 Sinus Drop",
    "description": "As directed by the Physician.",
    "price": "150.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-b22-sinus-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/340/bakson%60s-b22-sinus-drop.html"
  },
  {
    "name": "SBL Drops No. 8 ( For Allergic Rhinitis)",
    "description": "As directed by the Physician.",
    "price": "140.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-drops-no.-8-for-allergic-rhinitis.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/337/sbl-drops-no-8-for-allergic-rhinitis-.html"
  },
  {
    "name": "SBL Drops No. 9 ( For Cough)",
    "description": "As directed by the Physician.",
    "price": "140.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-drops-no.-9-for-cough.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/331/sbl-drops-no-9-for-cough-.html"
  },
  {
    "name": "SBL Drops No. 7 (For Sinusitis)",
    "description": "As directed by the Physician.",
    "price": "140.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-drops-no.-7-for-sinusitis.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/322/sbl-drops-no-7-for-sinusitis-.html"
  },
  {
    "name": "ADEL Kali Muriaticum Biochemic Tablet 200X",
    "description": "As directed by the Physician.",
    "price": "160.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/blank_otc_uobogo123.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/304/adel-kali-muriaticum-biochemic-tablet-200x.html"
  },
  {
    "name": "ADEL Kali Muriaticum Biochemic Tablet 12X",
    "description": "As directed by the Physician.",
    "price": "160.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/blank_otc_uobogo12.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/303/adel-kali-muriaticum-biochemic-tablet-12x.html"
  },
  {
    "name": "ADEL Kali Muriaticum Biochemic Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "160.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/adel-kali-muriaticum-biochemic-tablet-3x1.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/299/adel-kali-muriaticum-biochemic-tablet-3x.html"
  },
  {
    "name": "ADEL Silicea Biochemic Tablet 6X",
    "description": "As directed by the Physician.",
    "price": "160.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/blank_otc_uobogo.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/292/adel-silicea-biochemic-tablet-6x.html"
  },
  {
    "name": "ADEL Kali Muriaticum Biochemic Tablet 6X",
    "description": "As directed by the Physician.",
    "price": "160.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/adel-kali-muriaticum-biochemic-tablet-3x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/290/adel-kali-muriaticum-biochemic-tablet-6x.html"
  },
  {
    "name": "RL-39 For Asthma (Acute & Chronic) Syrup",
    "description": "As directed by the Physician.",
    "price": "360.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/_RL-39.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/279/rl-39-for-asthma-acute-chronic-syrup.html"
  },
  {
    "name": "RL-78 Eosinophilia Drops",
    "description": "As directed by the Physician.",
    "price": "170.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/RL-781.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/262/rl-78-eosinophilia-drops.html"
  },
  {
    "name": "RL-32 For all Type Of Cough Syrup",
    "description": "As directed by the Physician.",
    "price": "390.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/_0040_RL-32.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/237/rl-32-for-all-type-of-cough-syrup.html"
  },
  {
    "name": "RL-28 For Tonsil & Throat Infection Drops",
    "description": "As directed by the Physician.",
    "price": "170.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/_0044_RL-28.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/234/rl-28-for-tonsil-throat-infection-drops.html"
  },
  {
    "name": "RL-19 For Asthma Acute & Chronic Drops",
    "description": "As directed by the Physician.",
    "price": "180.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/_0053_RL-19.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/223/rl-19-for-asthma-acute-chronic-drops.html"
  },
  {
    "name": "RL-14 For Sinusitis & Nasal Polypus Drops",
    "description": "As directed by the Physician.",
    "price": "180.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/_0058_RL-14.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/219/rl-14-for-sinusitis-nasal-polypus-drops.html"
  },
  {
    "name": "RL-12 For All types of Cough Drops",
    "description": "As directed by the Physician.",
    "price": "180.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/_0060_RL-12.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/217/rl-12-for-all-types-of-cough-drops.html"
  },
  {
    "name": "RL-1 Allergy, Nasal, Congestion Drops",
    "description": "As directed by the Physician.",
    "price": "180.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/_0071_RL-1.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/204/rl-1-allergy,-nasal,-congestion-drops.html"
  },
  {
    "name": "RL-55 Inflammation drop",
    "description": "As directed by the Physician.",
    "price": "180.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/_0015_RL-55-Drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/202/rl-55-inflammation-drop.html"
  },
  {
    "name": "Adel 23 Ricura Drops",
    "description": "As directed by the Physician.",
    "price": "250.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/Adel%20Pekana%20Adel%2023%20(Ricura)%20(20ml).jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/174/adel-23-ricura-drops.html"
  },
  {
    "name": "Adel 10 DEASTH drops",
    "description": "As directed by the Physician.",
    "price": "215.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/Adel%20Pekana%20Adel%2010%20(Deasth)%20(20ml).jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/173/adel-10-deasth-drops.html"
  },
  {
    "name": "ADEL 7 Apo-Tuss Drop",
    "description": "As directed by the Physician.",
    "price": "250.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/Adel%20Pekana%20Adel%207%20(Apo-Tuss)%20(20ml).jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/172/adel-7-apo-tuss-drop.html"
  },
  {
    "name": "Rinikind",
    "description": "As directed by the Physician.",
    "price": "110.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/rinikind.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/136/rinikind.html"
  },
  {
    "name": "Dr. Reckeweg R48 Pulmonary Diseases Drop 22Ml",
    "description": "As directed by the Physician.",
    "price": "235.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/R48.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/111/dr-reckeweg-r48-pulmonary-diseases-drop-22ml-.html"
  },
  {
    "name": "Dr. Reckeweg R45 Illnesses Of The Larynx Drop 22Ml",
    "description": "As directed by the Physician.",
    "price": "235.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/R45.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/110/dr-reckeweg-r45-illnesses-of-the-larynx-drop-22ml-.html"
  },
  {
    "name": "Dr. Reckeweg R43 Drop 22Ml Asthma & Bronchitis",
    "description": "As directed by the Physician.",
    "price": "235.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/R43_1024x1024.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/109/-dr-reckeweg-r43-drop-22ml-asthma-bronchitis.html"
  },
  {
    "name": "Dr. Reckeweg R9 Cough Drop 22Ml",
    "description": "As directed by the Physician.",
    "price": "235.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/R9.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/108/dr-reckeweg-r9-cough-drop-22ml.html"
  },
  {
    "name": "Dr. Reckeweg R8 Cought Syrup 150Ml",
    "description": "As directed by the Physician.",
    "price": "430.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/R8_9d8470ef-10a5-4116-940b-75aff7ba6d6d.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/107/dr-reckeweg-r8-cought-syrup-150ml.html"
  },
  {
    "name": "Dr. Reckeweg R6 Influenza Drop 22Ml",
    "description": "As directed by the Physician.",
    "price": "235.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/R6.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/106/dr-reckeweg-r6-influenza-drop-22ml-.html"
  },
  {
    "name": "Natrum muriaticum",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/natrum-muriaticum.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/86/-natrum-muriaticum.html"
  },
  {
    "name": "Echinacea angustifolia 1X",
    "description": "As directed by the Physician.",
    "price": "522.00580.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/Echinacea%20angustifolia%201X.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/56/echinacea-angustifolia-1x.html"
  },
  {
    "name": "Biocombination No. 10",
    "description": "As directed by the Physician.",
    "price": "700.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-bio-combination-10-bc-10-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/50/biocombination-no-10.html"
  },
  {
    "name": "Alpha-Tons",
    "description": "As directed by the Physician.",
    "price": "110.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/alpha-tons-500x500.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/47/alpha-tons.html"
  },
  {
    "name": "Nisikind",
    "description": "As directed by the Physician.",
    "price": "99.00110.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/nisikind.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/42/nisikind.html"
  },
  {
    "name": "Biocombination No. 06",
    "description": "As directed by the Physician.",
    "price": "700.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bio%20combination%20no%206.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/40/biocombination-no-06.html"
  },
  {
    "name": "Alpha-WD",
    "description": "As directed by the Physician.",
    "price": "105.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/alpha%20WD1.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/11/alpha-wd.html"
  },
  {
    "name": "Biocombination No. 05",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/biocombination-no-51.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/7/biocombination-no-05.html"
  },
  {
    "name": "Luffakind",
    "description": "As directed by the Physician.",
    "price": "110.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/luffakind.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/6/luffakind.html"
  },
  {
    "name": "Biocombination No. 02",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/biocombination-no-2.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1/biocombination-no-02.html"
  }
]

const yt = ["ptcolnjOltk", "A_7C6_ackQY", "8QL79s2WcCU", "OJhnWQl1eyQ"]

const diseaseData = [
  {
    id: "asthma",
    name: "Asthma",
    description:
      "A chronic condition in which airways become inflamed and narrowed, making breathing difficult.",
    symptoms: [
      "Wheezing",
      "Shortness of breath",
      "Chest tightness",
      "Coughing (especially at night or early morning)",
    ],
  },
  {
    id: "copd",
    name: "Chronic Obstructive Pulmonary Disease (COPD)",
    description:
      "A group of progressive lung diseases including emphysema and chronic bronchitis that cause airflow blockage.",
    symptoms: [
      "Chronic cough",
      "Frequent respiratory infections",
      "Shortness of breath",
      "Fatigue",
    ],
  },
  {
    id: "pneumonia",
    name: "Pneumonia",
    description:
      "An infection that inflames the air sacs in one or both lungs, which may fill with fluid.",
    symptoms: [
      "Chest pain when breathing",
      "Cough with phlegm",
      "Fever and chills",
      "Shortness of breath",
    ],
  },
  {
    id: "tuberculosis",
    name: "Tuberculosis (TB)",
    description:
      "A bacterial infection that primarily affects the lungs but can spread to other organs.",
    symptoms: [
      "Persistent cough (lasting more than 3 weeks)",
      "Coughing up blood",
      "Night sweats",
      "Weight loss",
      "Fatigue",
    ],
  },
  {
    id: "bronchitis",
    name: "Bronchitis",
    description:
      "Inflammation of the bronchial tubes that carry air to and from the lungs.",
    symptoms: [
      "Persistent cough with mucus",
      "Chest discomfort",
      "Shortness of breath",
      "Fatigue",
    ],
  },
  {
    id: "pulmonary_fibrosis",
    name: "Pulmonary Fibrosis",
    description:
      "A lung disease that occurs when lung tissue becomes damaged and scarred, making it hard to breathe.",
    symptoms: [
      "Shortness of breath",
      "Dry cough",
      "Fatigue",
      "Unexplained weight loss",
      "Clubbing of fingers/toes",
    ],
  },
  {
    id: "sleep_apnea",
    name: "Sleep Apnea",
    description:
      "A sleep disorder in which breathing repeatedly stops and starts due to airway obstruction or brain signal issues.",
    symptoms: [
      "Loud snoring",
      "Interrupted breathing during sleep",
      "Daytime sleepiness",
      "Morning headaches",
    ],
  },
  {
    id: "allergic_rhinitis",
    name: "Allergic Rhinitis",
    description:
      "An allergic reaction that causes sneezing, congestion, and runny nose when exposed to allergens.",
    symptoms: [
      "Runny or stuffy nose",
      "Sneezing",
      "Itchy eyes, nose, or throat",
      "Watery eyes",
    ],
  },
  {
    id: "lung_cancer",
    name: "Lung Cancer",
    description:
      "A type of cancer that begins in the lungs, often associated with smoking but can occur in non-smokers too.",
    symptoms: [
      "Persistent cough",
      "Coughing up blood",
      "Chest pain",
      "Hoarseness",
      "Unexplained weight loss",
    ],
  },
  {
    id: "covid19",
    name: "COVID-19 (Coronavirus Infection)",
    description:
      "A viral infection that primarily affects the respiratory system and can range from mild symptoms to severe pneumonia.",
    symptoms: [
      "Fever",
      "Cough",
      "Loss of taste or smell",
      "Difficulty breathing",
      "Fatigue",
    ],
  },
];

export default function RespiratoryCare() {
    return (
        <div>
            <AppointmentFloat />
            <HeroUniversal
                promoTitle="One of India’s Leading Homeopathic Clinic Networks"
                subtitle="Holistic care for breathing, lung health, and long-term respiratory wellness."
                images={["/sexhelmen.png", "/sexhelmenemo.png", "/sexhelmenfat.png"]}
                phone="+919117520003"
                trust={[
                    { icon: "shield", label: "20+ Years of Care" },
                    { icon: "award", label: "1L+ Consultations" },
                    { icon: "star", label: "4.8/5 Patient Rating" },
                ]}
                ctas={[
                    {
                        label: "Menscare Query",
                        href: "https://docs.google.com/forms/d/e/1FAIpQLScV_DZUlRX5eNqp1przBJrRELrIoY0ZlyBUNTE3MUYVyZKkfg/viewform",
                        icon: "help",
                        variant: "neutral",
                    },
                    {
                        label: "YouTube",
                        href: "https://www.youtube.com/channel/UC42j8Oi53cP0aNLFmi5KKZg",
                        icon: "youtube",
                        target: "_blank",
                        variant: "danger",
                    },
                    {
                        label: "Appointment Booking",
                        href: "https://www.rajeevclinic.com/appointment",
                        icon: "calendar",
                        variant: "primary",
                    },
                ]}
                options={{
                    aspect: "aspect-[16/9]",
                    interval: 4500,
                    showArrows: true,
                    showDots: true,
                    rounded: "rounded-2xl",
                    showAccents: true,
                }}
            />
            <YoutubeCarousel videos={yt} />
            <DiseaseTypes diseaseData={diseaseData} />
            <Products products={products} />
            <SuccessStory />
            <Testimonials testimonials={testimonials} />
        </div>
    )
}
