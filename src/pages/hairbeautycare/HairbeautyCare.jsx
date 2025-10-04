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

const products =[
  {
    "name": "Hairlax Drops, For Grow & Healthy Hair",
    "description": "As directed by the Physician.",
    "price": "180.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/Hairlax%20Drop%2030ml.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2213/hairlax-drops,-for-grow-healthy-hair.html"
  },
  {
    "name": "Hair Plus, For Healthy Hair Drops",
    "description": "As directed by the Physician.",
    "price": "550.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/Hair%20Drops.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2209/hair-plus,-for-healthy-hair-drops.html"
  },
  {
    "name": "Hapdco Sunway Almond Hair Cleanser",
    "description": "As directed by the Physician.",
    "price": "150.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/hapdco-sunway-almond-hair-cleanser%20(1).jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2192/hapdco-sunway-almond-hair-cleanser.html"
  },
  {
    "name": "Hapdco Sunway Herbal hair Cleanser",
    "description": "As directed by the Physician.",
    "price": "165.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/hapdco-sunway-herbal-hair-cleanser%20(1).jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2191/hapdco-sunway-herbal-hair-cleanser.html"
  },
  {
    "name": "BjainOmeo Silk & Shine Conditioner",
    "description": "As directed by the Physician.",
    "price": "105.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-omeo-silk-shine-conditioner.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2187/bjainomeo-silk-shine-conditioner.html"
  },
  {
    "name": "SBL Arnica Montana Herbal Shampoo With Conditioner",
    "description": "As directed by the Physician.",
    "price": "152.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-arnica-montana-herbal-shampoo-with-conditioner.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2186/sbl-arnica-montana-herbal-shampoo-with-conditioner.html"
  },
  {
    "name": "Bakson`s Hair Serum",
    "description": "As directed by the Physician.",
    "price": "320.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/no_img_386_480.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2177/bakson%60s-hair-serum.html"
  },
  {
    "name": "SBL Anti-Dandruff Shampoo",
    "description": "As directed by the Physician.",
    "price": "100.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-anti-dandruff-shampoo.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2134/sbl-anti-dandruff-shampoo.html"
  },
  {
    "name": "SBL Arnica Montana Herbal Shampoo With Tjc",
    "description": "As directed by the Physician.",
    "price": "143.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-arnica-montana-herbal-shampoo-with-tjc.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2131/sbl-arnica-montana-herbal-shampoo-with-tjc.html"
  },
  {
    "name": "Bjain Omeo Silk & Shine Shampoo With Conditioning Effect Shampoo",
    "description": "As directed by the Physician.",
    "price": "160.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-omeo-silk-shine-shampoo-with-conditioning-effect-shampoo.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2130/bjain-omeo-silk-shine-shampoo-with-conditioning-effect-shampoo.html"
  },
  {
    "name": "Bjain Omeo Arnica Shampoo",
    "description": "As directed by the Physician.",
    "price": "160.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-omeo-arnica-shampoo.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2129/bjain-omeo-arnica-shampoo.html"
  },
  {
    "name": "Bakson`s Arnica Gold Shampoo",
    "description": "As directed by the Physician.",
    "price": "175.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-arnica-gold-shampoo.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2128/bakson%60s-arnica-gold-shampoo.html"
  },
  {
    "name": "Bakson`s Almond Shampoo",
    "description": "As directed by the Physician.",
    "price": "190.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-almond-shampoo%20(1).jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2127/bakson%60s-almond-shampoo.html"
  },
  {
    "name": "Bakson`s Shikakai Shampoo",
    "description": "As directed by the Physician.",
    "price": "140.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-shikakai-shampoo.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2126/bakson%60s-shikakai-shampoo.html"
  },
  {
    "name": "Bakson`s Arnica Shampoo",
    "description": "As directed by the Physician.",
    "price": "330.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-arnica-shampoo%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2124/bakson%60s-arnica-shampoo.html"
  },
  {
    "name": "Bakson`s Anti Lice Shampoo",
    "description": "As directed by the Physician.",
    "price": "150.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-anti-lice-shampoo.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2123/bakson%60s-anti-lice-shampoo.html"
  },
  {
    "name": "Adven Naturals Anti Dandruff Shampoo",
    "description": "As directed by the Physician.",
    "price": "220.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/htj.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2122/adven-naturals-anti-dandruff-shampoo.html"
  },
  {
    "name": "Adven Naturals Pro-Vitamin Shampoo",
    "description": "As directed by the Physician.",
    "price": "220.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/adven-naturals-pro-vitamin-shampoo.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2121/adven-naturals-pro-vitamin-shampoo.html"
  },
  {
    "name": "Adven Naturals Keratin Protein Shampoo",
    "description": "As directed by the Physician.",
    "price": "220.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/adven-naturals-keratin-protein-shampoo.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2120/adven-naturals-keratin-protein-shampoo.html"
  },
  {
    "name": "SBL 116 Hair Care Pack (Combo Of 3)",
    "description": "As directed by the Physician.",
    "price": "450.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-116-hair-care-pack-combo-of-3.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2108/sbl-116-hair-care-pack-combo-of-3-.html"
  },
  {
    "name": "Dr. Reckeweg Hair Care Combo (R89 + Lycopodium Dilution 30CH)",
    "description": "As directed by the Physician.",
    "price": "385.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr.-reckeweg-hair-care-combo-r89-lycopodium-dilution-30ch.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2078/dr-reckeweg-hair-care-combo-r89-lycopodium-dilution-30ch-.html"
  },
  {
    "name": "Bakson`s Henna Powder",
    "description": "As directed by the Physician.",
    "price": "130.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-henna-powder.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2047/bakson%60s-henna-powder.html"
  },
  {
    "name": "Bakson`s Hair Color 12 Sachets Burgundy",
    "description": "As directed by the Physician.",
    "price": "280.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-hair-color-12-sachets-burgundy.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2046/bakson%60s-hair-color-12-sachets-burgundy.html"
  },
  {
    "name": "Bakson`s Hair Color 12 Sachets Light Brown",
    "description": "As directed by the Physician.",
    "price": "480.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-hair-color-12-sachets-light-brown.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2045/bakson%60s-hair-color-12-sachets-light-brown.html"
  },
  {
    "name": "Bakson`s Hair Color 12 Sachets Dark Brown",
    "description": "As directed by the Physician.",
    "price": "280.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-hair-color-12-sachets-dark-brown.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2041/bakson%60s-hair-color-12-sachets-dark-brown.html"
  },
  {
    "name": "Wheezal Jaborandi Hair Treatment",
    "description": "As directed by the Physician.",
    "price": "120.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/wheezal-jaborandi-hair-treatment.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2032/wheezal-jaborandi-hair-treatment.html"
  },
  {
    "name": "SBL Amla Fort Hair Oil",
    "description": "As directed by the Physician.",
    "price": "45.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-amla-fort-hair-oil.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2031/sbl-amla-fort-hair-oil.html"
  },
  {
    "name": "SBL Almond Hair Tonic Fortified With Thuja Oil",
    "description": "As directed by the Physician.",
    "price": "60.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-almond-hair-tonic-fortified-with-thuja-oil.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2030/sbl-almond-hair-tonic-fortified-with-thuja-oil.html"
  },
  {
    "name": "SBL Arnica Montana Fortified Hair Oil",
    "description": "As directed by the Physician.",
    "price": "175.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-arnica-montana-fortified-hair-oil.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2028/sbl-arnica-montana-fortified-hair-oil.html"
  },
  {
    "name": "SBL Cocconica Hair Oil",
    "description": "As directed by the Physician.",
    "price": "156.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-cocconica-hair-oil.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2027/sbl-cocconica-hair-oil.html"
  },
  {
    "name": "SBL Jaborandi Plus Hair Oil",
    "description": "As directed by the Physician.",
    "price": "140.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-jaborandi-plus-hair-oil%20(1).jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2024/sbl-jaborandi-plus-hair-oil.html"
  },
  {
    "name": "SBL Jaborandi Hair Oil",
    "description": "As directed by the Physician.",
    "price": "193.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-jaborandi-hair-oil.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2021/sbl-jaborandi-hair-oil.html"
  },
  {
    "name": "SBL Arnica Montana Hair Oil With Tjc",
    "description": "As directed by the Physician.",
    "price": "135.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-arnica-montana-hair-oil-with-tjc.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2020/sbl-arnica-montana-hair-oil-with-tjc.html"
  },
  {
    "name": "Medisynth Arnikesh Oil",
    "description": "As directed by the Physician.",
    "price": "120.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/medisynth-arnikesh-oil.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2017/medisynth-arnikesh-oil.html"
  },
  {
    "name": "Hapdco Arnikool Herbal Oil",
    "description": "As directed by the Physician.",
    "price": "90.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/hapdco-arnikool-herbal-oil.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2014/hapdco-arnikool-herbal-oil.html"
  },
  {
    "name": "Hapdco Arnica Hair Tonic",
    "description": "As directed by the Physician.",
    "price": "155.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/hapdco-arnica-hair-tonic%20(1).jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2012/hapdco-arnica-hair-tonic.html"
  },
  {
    "name": "Hapdco Jaborandi Hair Tonic",
    "description": "As directed by the Physician.",
    "price": "110.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/hapdco-jaborandi-hair-tonic.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2011/hapdco-jaborandi-hair-tonic.html"
  },
  {
    "name": "Bjain Omeo Arnica Hair Oil",
    "description": "As directed by the Physician.",
    "price": "110.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-omeo-arnica-hair-oil.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2009/bjain-omeo-arnica-hair-oil.html"
  },
  {
    "name": "Bakson`s Jaborandi Aid Hair Care",
    "description": "As directed by the Physician.",
    "price": "250.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-jaborandi-aid-hair-care.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2003/bakson%60s-jaborandi-aid-hair-care.html"
  },
  {
    "name": "Bakson`s Arnica Montana Hair Oil",
    "description": "As directed by the Physician.",
    "price": "198.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-arnica-montana-hair-oil.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2002/bakson%60s-arnica-montana-hair-oil.html"
  },
  {
    "name": "Bakson`s Arnica Hair Oil With Jaborandi",
    "description": "As directed by the Physician.",
    "price": "235.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-arnica-hair-oil-with-jaborandi.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1997/bakson%60s-arnica-hair-oil-with-jaborandi.html"
  },
  {
    "name": "Wheezal Arnica Hair N Scalp Treatment",
    "description": "As directed by the Physician.",
    "price": "160.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/wheezal-arnica-hair-n-scalp-treatment.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1979/wheezal-arnica-hair-n-scalp-treatment.html"
  },
  {
    "name": "Similia Alma Hair Tonic",
    "description": "As directed by the Physician.",
    "price": "250.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/similia-alma-hair-tonic.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1935/similia-alma-hair-tonic.html"
  },
  {
    "name": "Similia Arnica Hair Oil",
    "description": "As directed by the Physician.",
    "price": "340.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/similia-arnica-hair-oil%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1923/similia-arnica-hair-oil.html"
  },
  {
    "name": "ADEL Hair Care Combo (ADEL 9 + Lycopodium Clavatum Dilution 200 CH)",
    "description": "As directed by the Physician.",
    "price": "390.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/adel-hair-care-combo-adel-9-lycopodium-clavatum-dilution-200-ch.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1906/adel-hair-care-combo-adel-9-lycopodium-clavatum-dilution-200-ch-.html"
  },
  {
    "name": "Bakson`s Hair Aid Gel",
    "description": "As directed by the Physician.",
    "price": "100.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-hair-aid-gel.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1884/bakson%60s-hair-aid-gel.html"
  },
  {
    "name": "Dr Willmar Schwabe India Silicea Pentarkan Tablet",
    "description": "As directed by the Physician.",
    "price": "160.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-silicea-pentarkan-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1399/dr-willmar-schwabe-india-silicea-pentarkan-tablet.html"
  },
  {
    "name": "Bhargava Bals Tablet",
    "description": "As directed by the Physician.",
    "price": "148.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bhargava-bals-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1320/bhargava-bals-tablet.html"
  },
  {
    "name": "Bakson`s AC#9 Tablet",
    "description": "As directed by the Physician.",
    "price": "170.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-ac-9-tablet%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1296/bakson%60s-ac-9-tablet.html"
  },
  {
    "name": "Bakson`s Nail & Hair Aid Tablet",
    "description": "As directed by the Physician.",
    "price": "256.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-nail-hair-aid-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1276/bakson%60s-nail-hair-aid-tablet.html"
  },
  {
    "name": "Bakson`s AC#4 Tablet",
    "description": "As directed by the Physician.",
    "price": "170.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-ac-4-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1260/bakson%60s-ac-4-tablet.html"
  },
  {
    "name": "SBL Scalptone Tablet",
    "description": "As directed by the Physician.",
    "price": "140.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-scalptone-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1240/sbl-scalptone-tablet.html"
  },
  {
    "name": "Adven Folli Plus Tablet",
    "description": "As directed by the Physician.",
    "price": "125.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/adven-folli-plus-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1227/adven-folli-plus-tablet.html"
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
    "name": "Bjain Kali Muriaticum Biochemic Tablet 30X",
    "description": "As directed by the Physician.",
    "price": "599.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-kali-muriaticum-biochemic-tablet-30x%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1110/bjain-kali-muriaticum-biochemic-tablet-30x.html"
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
    "name": "Dr Willmar Schwabe India Kali Muriaticum Biochemic Tablet 12X",
    "description": "As directed by the Physician.",
    "price": "80.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-kali-muriaticum-biochemic-tablet-12x%20(1).jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/997/dr-willmar-schwabe-india-kali-muriaticum-biochemic-tablet-12x.html"
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
    "name": "SBL Kali Muriatica Biochemic Tablet 12X",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-kali-muriatica-biochemic-tablet-12x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/930/sbl-kali-muriatica-biochemic-tablet-12x.html"
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
    "name": "SBL Kali Muriatica Biochemic Tablet 6X",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-kali-muriatica-biochemic-tablet-6x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/905/sbl-kali-muriatica-biochemic-tablet-6x.html"
  },
  {
    "name": "Dr. Reckeweg R89 Hair Care Drop",
    "description": "As directed by the Physician.",
    "price": "270.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr.-reckeweg-r89-hair-care-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/737/dr-reckeweg-r89-hair-care-drop.html"
  },
  {
    "name": "REPL Dr. Advice No.10 Alopecia Drop",
    "description": "As directed by the Physician.",
    "price": "170.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/2664-1-1000gikutgli.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/440/repl-dr-advice-no-10-alopecia-drop.html"
  },
  {
    "name": "Bakson`s Hair Aid Drop",
    "description": "As directed by the Physician.",
    "price": "190.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-hair-aid-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/358/bakson%60s-hair-aid-drop.html"
  },
  {
    "name": "SBL Drops No. 1 (For Hair Care)",
    "description": "As directed by the Physician.",
    "price": "140.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-drops-no.-1-for-hair-care.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/317/sbl-drops-no-1-for-hair-care-.html"
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
    "name": "ADEL Kali Muriaticum Biochemic Tablet 6X",
    "description": "As directed by the Physician.",
    "price": "160.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/adel-kali-muriaticum-biochemic-tablet-3x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/290/adel-kali-muriaticum-biochemic-tablet-6x.html"
  },
  {
    "name": "RL-4 Premature Hair Loss Grey & Thinning Of Hair",
    "description": "As directed by the Physician.",
    "price": "180.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/_0068_RL-4.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/208/rl-4-premature-hair-loss-grey-thinning-of-hair.html"
  },
  {
    "name": "ADEL 9 Cri-Regen Drop",
    "description": "As directed by the Physician.",
    "price": "250.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/Adel%20Pekana%20Adel%209%20(Cri-Regen)%20(20ml).jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/183/adel-9-cri-regen-drop.html"
  }
]


const yt = ["M9RfHVJjiRw", "wIQIUGBD69M", "EvPhJMvE7ZQ", "wFjZfdqI8Xg", "MvVSVqOR-j8", "6xk5yqtxnLg", "P-REURwsk"]

const diseaseData = [
  {
    id: "hair_loss",
    name: "Hair Loss (Alopecia)",
    description:
      "A common condition where hair falls out from the scalp or body, which may be temporary or permanent.",
    symptoms: [
      "Thinning hair",
      "Receding hairline",
      "Patchy bald spots",
      "Excess hair shedding",
    ],
  },
  {
    id: "dandruff",
    name: "Dandruff",
    description:
      "A scalp condition that causes flaking and sometimes mild itching due to excess oil or fungal overgrowth.",
    symptoms: [
      "White or yellow scalp flakes",
      "Itchy scalp",
      "Oily patches on scalp",
      "Scalp irritation",
    ],
  },
  {
    id: "acne",
    name: "Acne",
    description:
      "A skin condition where hair follicles become clogged with oil and dead skin cells, leading to pimples, blackheads, and cysts.",
    symptoms: [
      "Pimples",
      "Blackheads/whiteheads",
      "Cystic lesions",
      "Scarring or dark spots",
    ],
  },
  {
    id: "hyperpigmentation",
    name: "Hyperpigmentation",
    description:
      "A common condition where patches of skin become darker than surrounding areas due to excess melanin.",
    symptoms: [
      "Dark patches on skin",
      "Uneven skin tone",
      "Sun spots or age spots",
    ],
  },
  {
    id: "psoriasis",
    name: "Psoriasis (Scalp/skin)",
    description:
      "An autoimmune condition that causes rapid skin cell turnover, leading to scaling and inflammation.",
    symptoms: [
      "Red patches of skin",
      "Silvery scales",
      "Itchy or painful lesions",
      "Flaking on scalp",
    ],
  },
  {
    id: "eczema",
    name: "Eczema (Atopic Dermatitis)",
    description:
      "A skin condition causing inflammation, itching, and dryness, often triggered by allergens or irritants.",
    symptoms: [
      "Dry, sensitive skin",
      "Itching",
      "Red or inflamed patches",
      "Thickened or cracked skin",
    ],
  },
  {
    id: "premature_greying",
    name: "Premature Greying",
    description:
      "Loss of natural hair pigment before the age of 30, often influenced by genetics, stress, or deficiencies.",
    symptoms: [
      "Grey or white strands at young age",
      "Dry or brittle hair",
      "Gradual loss of natural hair color",
    ],
  },
  {
    id: "dark_circles",
    name: "Dark Circles",
    description:
      "Discoloration under the eyes caused by genetics, stress, lack of sleep, or skin thinning.",
    symptoms: [
      "Dark or bluish under-eye patches",
      "Tired appearance",
      "Eye puffiness",
    ],
  },
  {
    id: "pigmentation_melasma",
    name: "Melasma",
    description:
      "A skin condition that causes brown or gray-brown patches, often on the face, commonly in women.",
    symptoms: [
      "Dark patches on cheeks, forehead, or upper lip",
      "Worsening with sun exposure",
      "Uneven skin tone",
    ],
  },
  {
    id: "nail_disorders",
    name: "Nail Disorders",
    description:
      "Conditions that affect nail health, including fungal infections, brittle nails, or ridges.",
    symptoms: [
      "Discolored nails",
      "Brittle or splitting nails",
      "Thickened nails",
      "Pain or swelling around nails",
    ],
  },
];

export default function HairbeautyCare() {
    return (
        <div>
            <AppointmentFloat />
            <HeroUniversal
                promoTitle="One of India’s Leading Homeopathic Clinic Networks"
                subtitle="Nourishing solutions that strengthen hair, enhance beauty, and restore confidence."
                images={["/hairbeautycarebanner.png"]}
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
