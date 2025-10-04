import AppointmentFloat from '../../components/AppointmentFloat/AppointmentFloat'
import SuccessStory from './SuccessStory/SuccessStory'
import YoutubeCarousel from '../../components/YoutubeEm/YoutubeEm'
import Products from '../../components/Products/Products'
import Testimonials from '../../components/Testimonials/Testimonials'
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
    "name": "RL-76 Vericose Vein Drops",
    "description": "As directed by the Physician.",
    "price": "180.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/no_img_386_480.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/12263/rl-76-vericose-vein-drops.html"
  },
  {
    "name": "Skinorex Syrup, for blood purifier & Skin Allergy",
    "description": "As directed by the Physician.",
    "price": "245.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/Skinorex%20Syrup%20450ml.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2245/skinorex-syrup,-for-blood-purifier-skin-allergy.html"
  },
  {
    "name": "Skin Tab",
    "description": "As directed by the Physician.",
    "price": "125.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/Skin%20Tab.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2244/skin-tab.html"
  },
  {
    "name": "Mouth Tab",
    "description": "As directed by the Physician.",
    "price": "125.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/Mouth%20Tab%2025gm.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2223/mouth-tab.html"
  },
  {
    "name": "BODY SWELLING Drops",
    "description": "As directed by the Physician.",
    "price": "180.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/Body%20Swelling%20Drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2220/body-swelling-drops.html"
  },
  {
    "name": "PIMPLE TAB",
    "description": "As directed by the Physician.",
    "price": "125.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/Pumple%20Tab.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2199/-pimple-tab.html"
  },
  {
    "name": "Bakson`s Apricot Aloevera with Neem & Cucumber Scrub",
    "description": "As directed by the Physician.",
    "price": "450.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-apricot-aloevera-with-neem-cucumber-scrub.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2189/bakson%60s-apricot-aloevera-with-neem-cucumber-scrub.html"
  },
  {
    "name": "Bakson`s Face Scrub",
    "description": "As directed by the Physician.",
    "price": "450.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-face-scrub%20(1).jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2188/bakson%60s-face-scrub.html"
  },
  {
    "name": "Bakson`s Apple Pack With Aloevera Almond Oil & Green Apple",
    "description": "As directed by the Physician.",
    "price": "450.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-apple-pack-with-aloevera-almond-oil-green-apple%20(1).jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2183/bakson%60s-apple-pack-with-aloevera-almond-oil-green-apple.html"
  },
  {
    "name": "Bakson`s Papaya Pack With Aloevera And Papaya Jojoba Oil",
    "description": "As directed by the Physician.",
    "price": "450.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-papaya-pack-with-aloevera-and-papaya-jojoba-oil%20(1).jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2181/bakson%60s-papaya-pack-with-aloevera-and-papaya-jojoba-oil.html"
  },
  {
    "name": "Wheezal Charmskin Ointment",
    "description": "As directed by the Physician.",
    "price": "75.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/wheezal-charmskin-ointment.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2180/wheezal-charmskin-ointment.html"
  },
  {
    "name": "SBL Cicaderma Ointment",
    "description": "As directed by the Physician.",
    "price": "60.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-cicaderma-ointment.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2174/sbl-cicaderma-ointment.html"
  },
  {
    "name": "SBL Apis Mellifica Ointment",
    "description": "As directed by the Physician.",
    "price": "56.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-apis-mellifica-ointment.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2172/sbl-apis-mellifica-ointment.html"
  },
  {
    "name": "Bakson`s Mud Pack",
    "description": "As directed by the Physician.",
    "price": "450.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-mud-pack%20(1).jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2169/bakson%60s-mud-pack.html"
  },
  {
    "name": "Bakson`s Skin Toner",
    "description": "As directed by the Physician.",
    "price": "135.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-skin-toner.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2167/bakson%60s-skin-toner.html"
  },
  {
    "name": "SBL Urtica Urens Ointment",
    "description": "As directed by the Physician.",
    "price": "55.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-urtica-urens-ointment.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2166/sbl-urtica-urens-ointment.html"
  },
  {
    "name": "SBL Echinacea Ointment",
    "description": "As directed by the Physician.",
    "price": "56.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-echinacea-ointment.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2165/sbl-echinacea-ointment.html"
  },
  {
    "name": "SBL Rhustox Ointment",
    "description": "As directed by the Physician.",
    "price": "56.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-rhustox-ointment.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2163/sbl-rhustox-ointment.html"
  },
  {
    "name": "SBL Cantharis Ointment",
    "description": "As directed by the Physician.",
    "price": "56.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-cantharis-ointment.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2158/sbl-cantharis-ointment.html"
  },
  {
    "name": "SBL Woundwell Calendula Spray",
    "description": "As directed by the Physician.",
    "price": "90.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-woundwell-calendula-spray.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2157/sbl-woundwell-calendula-spray.html"
  },
  {
    "name": "SBL Curoplus Ointment",
    "description": "As directed by the Physician.",
    "price": "90.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-curoplus-ointment.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2156/sbl-curoplus-ointment.html"
  },
  {
    "name": "SBL Graphites Ointment",
    "description": "As directed by the Physician.",
    "price": "56.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-graphites-ointment.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2154/sbl-graphites-ointment.html"
  },
  {
    "name": "Bakson`s Sept Aid Spray",
    "description": "As directed by the Physician.",
    "price": "90.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-sept-aid-spray.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2149/bakson%60s-sept-aid-spray.html"
  },
  {
    "name": "SBL Petroleum Ointment",
    "description": "As directed by the Physician.",
    "price": "56.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-petroleum-ointment.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2148/sbl-petroleum-ointment.html"
  },
  {
    "name": "SBL Acid Chryso Ointment",
    "description": "As directed by the Physician.",
    "price": "56.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-acid-chryso-ointment.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2146/sbl-acid-chryso-ointment.html"
  },
  {
    "name": "SBL Sulphur Ointment",
    "description": "As directed by the Physician.",
    "price": "56.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-sulphur-ointment.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2143/sbl-sulphur-ointment.html"
  },
  {
    "name": "SBL Silk N Stay Aloe Vera and Cucumber Soap",
    "description": "As directed by the Physician.",
    "price": "70.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-silk-n-stay-aloe-vera-and-cucumber-soap.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2142/sbl-silk-n-stay-aloe-vera-and-cucumber-soap.html"
  },
  {
    "name": "SBL Calendula Ointment",
    "description": "As directed by the Physician.",
    "price": "56.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-calendula-ointment.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2141/sbl-calendula-ointment.html"
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
    "name": "SBL Silk N Stay Calendula Soap",
    "description": "As directed by the Physician.",
    "price": "45.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-silk-n-stay-calendula-soap.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2138/sbl-silk-n-stay-calendula-soap.html"
  },
  {
    "name": "SBL Silk N Stay BerberisAnd Calendula Soap",
    "description": "As directed by the Physician.",
    "price": "50.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-silk-n-stay-berberis-and-calendula-soap.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2137/sbl-silk-n-stay-berberisand-calendula-soap.html"
  },
  {
    "name": "SBL Silk N Stay Berberis Soap",
    "description": "As directed by the Physician.",
    "price": "45.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-silk-n-stay-berberis-soap.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2136/sbl-silk-n-stay-berberis-soap.html"
  },
  {
    "name": "Sunny Herbals Sandal Soap with Aloe Vera",
    "description": "As directed by the Physician.",
    "price": "45.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sunny-herbals-sandal-soap-with-aloe-vera.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2135/sunny-herbals-sandal-soap-with-aloe-vera.html"
  },
  {
    "name": "Similia Dermakool Powder",
    "description": "As directed by the Physician.",
    "price": "70.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/similia-dermakool-powder.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2119/similia-dermakool-powder.html"
  },
  {
    "name": "SBL 122 Personal Care Value Pack (Combo Of 4)",
    "description": "As directed by the Physician.",
    "price": "359.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-122-personal-care-value-pack-combo-of-4.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2112/sbl-122-personal-care-value-pack-combo-of-4-.html"
  },
  {
    "name": "SBL 118 First Aid Pack (Combo Of 4)",
    "description": "As directed by the Physician.",
    "price": "400.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-118-first-aid-pack-combo-of-4.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2111/sbl-118-first-aid-pack-combo-of-4-.html"
  },
  {
    "name": "SBL 117 Skin Beauty Care Pack (Combo Of 3)",
    "description": "As directed by the Physician.",
    "price": "236.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-117-skin-beauty-care-pack-combo-of-3.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2110/sbl-117-skin-beauty-care-pack-combo-of-3-.html"
  },
  {
    "name": "SBL 121 Skin & Hair Care Essentials (Combo Of 4)",
    "description": "As directed by the Physician.",
    "price": "524.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-121-skin-hair-care-essentials-combo-of-4.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2109/sbl-121-skin-hair-care-essentials-combo-of-4-.html"
  },
  {
    "name": "SBL 103 Anti-Acne Pack (Combo Of 3)",
    "description": "As directed by the Physician.",
    "price": "255.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-110-cold-and-cough-care-pack-combo-of-21.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2103/sbl-103-anti-acne-pack-combo-of-3-.html"
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
    "name": "SBL Haemoglow Blood Purifier Capsule",
    "description": "As directed by the Physician.",
    "price": "400.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-haemoglow-blood-purifier-capsule.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2090/sbl-haemoglow-blood-purifier-capsule.html"
  },
  {
    "name": "Dr. Reckeweg Pimples Care Combo (R53 + Silicea Terra Dilution 30CH)",
    "description": "As directed by the Physician.",
    "price": "350.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr.-reckeweg-pimples-care-combo-r53-silicea-terra-dilution-30ch.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2083/dr-reckeweg-pimples-care-combo-r53-silicea-terra-dilution-30ch-.html"
  },
  {
    "name": "Dr. Reckeweg Anti-Psoriasis Combo (R65 + Graphites Dilution 30CH)",
    "description": "As directed by the Physician.",
    "price": "370.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr.-reckeweg-anti-psoriasis-combo-r65-graphites-dilution-30ch.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2081/dr-reckeweg-anti-psoriasis-combo-r65-graphites-dilution-30ch-.html"
  },
  {
    "name": "Hapdco Saffodin Capsule",
    "description": "As directed by the Physician.",
    "price": "35.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/hapdco-saffodin-capsule%20(1).jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2071/hapdco-saffodin-capsule.html"
  },
  {
    "name": "Bakson`s Henna Gold Mehandi",
    "description": "As directed by the Physician.",
    "price": "195.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-henna-gold-mehandi.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2048/bakson%60s-henna-gold-mehandi.html"
  },
  {
    "name": "Bakson`s Boro Calendula Talcum Powder",
    "description": "As directed by the Physician.",
    "price": "70.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-boro-calendula-talcum-powder.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2043/bakson%60s-boro-calendula-talcum-powder.html"
  },
  {
    "name": "Wheezal Calendula Baby Skin Oil",
    "description": "As directed by the Physician.",
    "price": "190.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/wheezal-calendula-baby-skin-oil%20(1).jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2034/wheezal-calendula-baby-skin-oil.html"
  },
  {
    "name": "Wheezal Scaboil Oil",
    "description": "As directed by the Physician.",
    "price": "140.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/wheezal-scaboil-oil.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2033/wheezal-scaboil-oil.html"
  },
  {
    "name": "SBL Babchi Oil",
    "description": "As directed by the Physician.",
    "price": "130.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-babchi-oil.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2022/sbl-babchi-oil.html"
  },
  {
    "name": "Bakson`s Bouchi Oil",
    "description": "As directed by the Physician.",
    "price": "135.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-bouchi-oil%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2005/bakson%60s-bouchi-oil.html"
  },
  {
    "name": "Bakson`s Body Oil",
    "description": "As directed by the Physician.",
    "price": "386.40",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-body-oil.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/2001/bakson%60s-body-oil.html"
  },
  {
    "name": "SBL Silk N Stay Moisturising Body Lotion",
    "description": "As directed by the Physician.",
    "price": "150.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-silk-n-stay-moisturising-body-lotion.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1995/sbl-silk-n-stay-moisturising-body-lotion.html"
  },
  {
    "name": "SBL Silk N Stay Face Moisturizing Lotion",
    "description": "As directed by the Physician.",
    "price": "106.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-silk-n-stay-face-moisturizing-lotion.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1994/sbl-silk-n-stay-face-moisturizing-lotion.html"
  },
  {
    "name": "SBL Wipe Clear Acne Lotion",
    "description": "As directed by the Physician.",
    "price": "70.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-wipe-clear-acne-lotion.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1993/sbl-wipe-clear-acne-lotion.html"
  },
  {
    "name": "Hapdco Calendula Plus Lotion",
    "description": "As directed by the Physician.",
    "price": "60.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/hapdco-calendula-plus-lotion.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1992/hapdco-calendula-plus-lotion.html"
  },
  {
    "name": "Bhargava Bio Valley Anti Aging Moisturizer Lotion",
    "description": "As directed by the Physician.",
    "price": "160.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bhargava-bio-valley-anti-aging-moisturizer-lotion.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1991/bhargava-bio-valley-anti-aging-moisturizer-lotion.html"
  },
  {
    "name": "Bhargava Bio Valley Sun Care Lotion",
    "description": "As directed by the Physician.",
    "price": "115.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bhargava-bio-valley-sun-care-lotion.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1990/bhargava-bio-valley-sun-care-lotion.html"
  },
  {
    "name": "Bakson`s Cocoa Butter Lotion",
    "description": "As directed by the Physician.",
    "price": "180.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-cocoa-butter-lotion.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1988/bakson%60s-cocoa-butter-lotion.html"
  },
  {
    "name": "Bakson`s Fruit Lotion",
    "description": "As directed by the Physician.",
    "price": "170.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-fruit-lotion.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1987/bakson%60s-fruit-lotion.html"
  },
  {
    "name": "Bakson`s Moisturizing Lotion With Aloevera & Calendula",
    "description": "As directed by the Physician.",
    "price": "190.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-moisturizing-lotion-with-aloevera-calendula.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1984/bakson%60s-moisturizing-lotion-with-aloevera-calendula.html"
  },
  {
    "name": "Bakson`s Moisturizing Lotion with Aloevera & Rose",
    "description": "As directed by the Physician.",
    "price": "190.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-moisturizing-lotion-with-aloevera-rose.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1983/bakson%60s-moisturizing-lotion-with-aloevera-rose.html"
  },
  {
    "name": "Bakson`s Honey And Almond Body Lotion",
    "description": "As directed by the Physician.",
    "price": "100.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-honey-and-almond-body-lotion.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1982/bakson%60s-honey-and-almond-body-lotion.html"
  },
  {
    "name": "Bakson`s Deep Cleansing Milk With Aloevera",
    "description": "As directed by the Physician.",
    "price": "360.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-deep-cleansing-milk-with-aloevera%20(2).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1981/bakson%60s-deep-cleansing-milk-with-aloevera.html"
  },
  {
    "name": "Bakson`s Anti Aging Lotion",
    "description": "As directed by the Physician.",
    "price": "240.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-anti-aging-lotion.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1980/bakson%60s-anti-aging-lotion.html"
  },
  {
    "name": "SBL Liquid Hand Wash Germ Free",
    "description": "As directed by the Physician.",
    "price": "105.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-liquid-hand-wash-germ-free.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1978/sbl-liquid-hand-wash-germ-free.html"
  },
  {
    "name": "SBL Thuja Roll-On",
    "description": "As directed by the Physician.",
    "price": "35.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-thuja-roll-on.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1977/sbl-thuja-roll-on.html"
  },
  {
    "name": "Hapdco Echinacea Ointment",
    "description": "As directed by the Physician.",
    "price": "50.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/hapdco-echinacea-ointment.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1972/hapdco-echinacea-ointment.html"
  },
  {
    "name": "Hapdco Thuja Ointment",
    "description": "As directed by the Physician.",
    "price": "50.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/hapdco-thuja-ointment.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1969/hapdco-thuja-ointment.html"
  },
  {
    "name": "Hapdco Sulphur Ointment",
    "description": "As directed by the Physician.",
    "price": "50.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/hapdco-sulphur-ointment.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1968/hapdco-sulphur-ointment.html"
  },
  {
    "name": "Hapdco Calendula Ointment",
    "description": "As directed by the Physician.",
    "price": "50.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/hapdco-calendula-ointment.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1967/hapdco-calendula-ointment.html"
  },
  {
    "name": "Hapdco Graphites Ointment",
    "description": "As directed by the Physician.",
    "price": "50.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/hapdco-graphites-ointment.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1966/hapdco-graphites-ointment.html"
  },
  {
    "name": "Hapdco Acid Chryso Ointment",
    "description": "As directed by the Physician.",
    "price": "50.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/hapdco-acid-chryso-ointment.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1965/hapdco-acid-chryso-ointment.html"
  },
  {
    "name": "Hapdco Cantharis Ointment",
    "description": "As directed by the Physician.",
    "price": "60.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/hapdco-cantharis-ointment.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1963/hapdco-cantharis-ointment.html"
  },
  {
    "name": "Hapdco Dermex Ointment",
    "description": "As directed by the Physician.",
    "price": "65.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/hapdco-dermex-ointment.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1960/hapdco-dermex-ointment.html"
  },
  {
    "name": "Bakson`s Urtica Urens Ointment",
    "description": "As directed by the Physician.",
    "price": "60.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-urtica-urens-ointment.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1958/bakson%60s-urtica-urens-ointment.html"
  },
  {
    "name": "Bakson`s Apis Mellifica Ointment",
    "description": "As directed by the Physician.",
    "price": "60.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-apis-mellifica-ointment.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1956/bakson%60s-apis-mellifica-ointment.html"
  },
  {
    "name": "Bakson`s Cantharis Ointment",
    "description": "As directed by the Physician.",
    "price": "60.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-cantharis-ointment.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1955/bakson%60s-cantharis-ointment.html"
  },
  {
    "name": "Bakson`s Graphites Ointment",
    "description": "As directed by the Physician.",
    "price": "60.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-graphites-ointment.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1954/bakson%60s-graphites-ointment.html"
  },
  {
    "name": "Bakson`s Belladonna Ointment",
    "description": "As directed by the Physician.",
    "price": "60.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-belladonna-ointment%20(1).jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1953/bakson%60s-belladonna-ointment.html"
  },
  {
    "name": "Bakson`s Echinacea Ointment",
    "description": "As directed by the Physician.",
    "price": "60.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-echinacea-ointment.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1952/bakson%60s-echinacea-ointment.html"
  },
  {
    "name": "Bakson`s Sulphur Ointment",
    "description": "As directed by the Physician.",
    "price": "60.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-sulphur-ointment.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1946/bakson%60s-sulphur-ointment.html"
  },
  {
    "name": "Bakson`s Calendula Ointment",
    "description": "As directed by the Physician.",
    "price": "60.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-calendula-ointment.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1945/bakson%60s-calendula-ointment.html"
  },
  {
    "name": "Bakson`s Thuja Ointment",
    "description": "As directed by the Physician.",
    "price": "60.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-thuja-ointment.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1943/bakson%60s-thuja-ointment.html"
  },
  {
    "name": "Bakson`s Chrysarobinum Ointment",
    "description": "As directed by the Physician.",
    "price": "60.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-chrysarobinum-ointment.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1941/bakson%60s-chrysarobinum-ointment.html"
  },
  {
    "name": "ADEL Anti-Psoriasis Combo (ADEL 12 + Graphites Dilution 1000 CH + ADEL 78)",
    "description": "As directed by the Physician.",
    "price": "855.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/adel-anti-psoriasis-combo-adel-12-graphites-dilution-1000-ch-adel-78.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1924/adel-anti-psoriasis-combo-adel-12-graphites-dilution-1000-ch-adel-78-.html"
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
    "name": "SBL Cantharis Gel",
    "description": "As directed by the Physician.",
    "price": "56.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-cantharis-gel1.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1902/sbl-cantharis-gel.html"
  },
  {
    "name": "SBL Sulphur Gel",
    "description": "As directed by the Physician.",
    "price": "56.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-sulphur-gel.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1899/sbl-sulphur-gel.html"
  },
  {
    "name": "SBL Graphites Gel",
    "description": "As directed by the Physician.",
    "price": "65.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-graphites-gel.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1898/sbl-graphites-gel.html"
  },
  {
    "name": "SBL Curoplus Gel",
    "description": "As directed by the Physician.",
    "price": "90.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-curoplus-gel.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1896/sbl-curoplus-gel.html"
  },
  {
    "name": "SBL Thuja Gel",
    "description": "As directed by the Physician.",
    "price": "56.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-thuja-gel.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1894/sbl-thuja-gel.html"
  },
  {
    "name": "SBL Calendula Gel",
    "description": "As directed by the Physician.",
    "price": "56.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-calendula-gel.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1891/sbl-calendula-gel.html"
  },
  {
    "name": "SBL Berberis Aquifolium Gel",
    "description": "As directed by the Physician.",
    "price": "56.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-berberis-aquifolium-gel.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1890/sbl-berberis-aquifolium-gel.html"
  },
  {
    "name": "Bakson`s Hand Cleansing Gel",
    "description": "As directed by the Physician.",
    "price": "120.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-hand-cleansing-gel.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1887/bakson%60s-hand-cleansing-gel.html"
  },
  {
    "name": "Bakson`s Shower & Bath Gel",
    "description": "As directed by the Physician.",
    "price": "250.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-shower-bath-gel12.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1886/bakson%60s-shower-bath-gel.html"
  },
  {
    "name": "Bakson`s Aloe Vera Skin Gel",
    "description": "As directed by the Physician.",
    "price": "100.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-aloe-vera-skin-gel.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1885/bakson%60s-aloe-vera-skin-gel.html"
  },
  {
    "name": "SBL Baryta Muriaticum Trituration Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "160.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-baryta-muriaticum-trituration-tablet-3x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1873/sbl-baryta-muriaticum-trituration-tablet-3x.html"
  },
  {
    "name": "SBL Graphites Trituration Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "150.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-graphites-trituration-tablet-3x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1871/sbl-graphites-trituration-tablet-3x.html"
  },
  {
    "name": "SBL Ferrum Picricum Trituration Tablet 6X",
    "description": "As directed by the Physician.",
    "price": "145.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-ferrum-picricum-trituration-tablet-6x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1869/sbl-ferrum-picricum-trituration-tablet-6x.html"
  },
  {
    "name": "SBL Arsenicum Sulph Flavum Trituration Tablet 4X",
    "description": "As directed by the Physician.",
    "price": "145.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-arsenicum-sulph-flavum-trituration-tablet-4x.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1859/sbl-arsenicum-sulph-flavum-trituration-tablet-4x.html"
  },
  {
    "name": "SBL Kalium Bromatum Trituration Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "145.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-kalium-bromatum-trituration-tablet-3x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1857/sbl-kalium-bromatum-trituration-tablet-3x.html"
  },
  {
    "name": "ADEL 40 and ADEL 86 Kit",
    "description": "As directed by the Physician.",
    "price": "550.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/adel-40-and-adel-86-kit.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1854/adel-40-and-adel-86-kit.html"
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
    "name": "SBL Carbo Vegetabilis Trituration Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "150.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-carbo-vegetabilis-trituration-tablet-3x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1846/sbl-carbo-vegetabilis-trituration-tablet-3x.html"
  },
  {
    "name": "SBL Bio-Combination 22 Tablet",
    "description": "As directed by the Physician.",
    "price": "75.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-bio-combination-22-tablet.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1842/sbl-bio-combination-22-tablet.html"
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
    "name": "SBL Borax Trituration Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "150.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-borax-trituration-tablet-3x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1817/sbl-borax-trituration-tablet-3x.html"
  },
  {
    "name": "SBL Gunpowder Trituration Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "150.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-gunpowder-trituration-tablet-3x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1810/sbl-gunpowder-trituration-tablet-3x.html"
  },
  {
    "name": "SBL Bio-Combination 20 Tablet",
    "description": "As directed by the Physician.",
    "price": "90.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-bio-combination-20-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1808/sbl-bio-combination-20-tablet.html"
  },
  {
    "name": "SBL Ferrum Picricum Trituration Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "150.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-ferrum-picricum-trituration-tablet-3x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1805/sbl-ferrum-picricum-trituration-tablet-3x.html"
  },
  {
    "name": "Hapdco Bio-Combination 22 Tablet",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/hapdco-bio-combination-22-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1803/hapdco-bio-combination-22-tablet.html"
  },
  {
    "name": "Hapdco Bio-Combination 20 Tablet",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/hapdco-bio-combination-20-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1789/hapdco-bio-combination-20-tablet.html"
  },
  {
    "name": "Dr. Reckeweg Bio-Combination 22 (BC 22) Tablet",
    "description": "As directed by the Physician.",
    "price": "160.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr.-reckeweg-bio-combination-22-bc-22-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1774/dr-reckeweg-bio-combination-22-bc-22-tablet.html"
  },
  {
    "name": "Dr. Reckeweg Bio-Combination 20 (BC 20) Tablet",
    "description": "As directed by the Physician.",
    "price": "160.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr.-reckeweg-bio-combination-20-bc-20-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1749/dr-reckeweg-bio-combination-20-bc-20-tablet.html"
  },
  {
    "name": "Dr Willmar Schwabe India Bio-Combination 22 (BC 22) Tablet",
    "description": "As directed by the Physician.",
    "price": "700.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-bio-combination-22-bc-22-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1747/dr-willmar-schwabe-india-bio-combination-22-bc-22-tablet.html"
  },
  {
    "name": "Dr Willmar Schwabe India Bio-Combination 20 (BC 20) Tablet",
    "description": "As directed by the Physician.",
    "price": "700.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-bio-combination-20-bc-20-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1724/dr-willmar-schwabe-india-bio-combination-20-bc-20-tablet.html"
  },
  {
    "name": "SBL Arsenicum Sulph Flavum Trituration Tablet 6X",
    "description": "As directed by the Physician.",
    "price": "150.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-arsenicum-sulph-flavum-trituration-tablet-6x.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1714/sbl-arsenicum-sulph-flavum-trituration-tablet-6x.html"
  },
  {
    "name": "SBL Calcarea Carbonicum Trituration Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "150.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-calcarea-carbonicum-trituration-tablet-3x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1713/sbl-calcarea-carbonicum-trituration-tablet-3x.html"
  },
  {
    "name": "SBL Arsenicum Sulph Flavum Trituration Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "150.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-arsenicum-sulph-flavum-trituration-tablet-3x.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1711/sbl-arsenicum-sulph-flavum-trituration-tablet-3x.html"
  },
  {
    "name": "Hapdco Chrysarobinum Trituration Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/blank_otc_uobogo1234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556575859606162636465.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1704/hapdco-chrysarobinum-trituration-tablet-3x.html"
  },
  {
    "name": "ADEL Bio-Combination 22 Tablet",
    "description": "As directed by the Physician.",
    "price": "160.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/adel-bio-combination-22-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1697/adel-bio-combination-22-tablet.html"
  },
  {
    "name": "Dr. Reckeweg Borax Trituration Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "205.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr.-reckeweg-borax-trituration-tablet-3x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1696/dr-reckeweg-borax-trituration-tablet-3x.html"
  },
  {
    "name": "Dr. Reckeweg Arsenic Sulph Flavum Trituration Tablet 4X",
    "description": "As directed by the Physician.",
    "price": "205.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr.-reckeweg-arsenic-sulph-flavum-trituration-tablet-4x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1690/dr-reckeweg-arsenic-sulph-flavum-trituration-tablet-4x.html"
  },
  {
    "name": "Dr. Reckeweg Graphites Trituration Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "235.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr.-reckeweg-graphites-trituration-tablet-3x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1688/dr-reckeweg-graphites-trituration-tablet-3x.html"
  },
  {
    "name": "Dr. Reckeweg Kali Bromatum Trituration Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "205.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr.-reckeweg-kali-bromatum-trituration-tablet-3x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1683/dr-reckeweg-kali-bromatum-trituration-tablet-3x.html"
  },
  {
    "name": "ADEL Bio-Combination 20 Tablet",
    "description": "As directed by the Physician.",
    "price": "160.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/adel-bio-combination-20-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1671/adel-bio-combination-20-tablet.html"
  },
  {
    "name": "Dr. Reckeweg Calcarea Iodatum Trituration Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "205.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr.-reckeweg-calcarea-iodatum-trituration-tablet-3x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1654/dr-reckeweg-calcarea-iodatum-trituration-tablet-3x.html"
  },
  {
    "name": "Dr. Reckeweg Gun powder Trituration Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "205.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr.-reckeweg-gunpowder-trituration-tablet-3x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1652/dr-reckeweg-gun-powder-trituration-tablet-3x.html"
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
    "name": "Bjain Bio-Combination No. 20 Tablet",
    "description": "As directed by the Physician.",
    "price": "599.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-bio-combination-no.-20-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1617/bjain-bio-combination-no-20-tablet.html"
  },
  {
    "name": "SBL Neem Face Wash",
    "description": "As directed by the Physician.",
    "price": "74.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-neem-face-wash.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1610/sbl-neem-face-wash.html"
  },
  {
    "name": "Hapdco Aqui Plus Face Wash",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/hapdco-aqui-plus-face-wash.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1609/hapdco-aqui-plus-face-wash.html"
  },
  {
    "name": "Bjain Omeo Calendula Face Wash With Neem & Aloe Vera Face Wash",
    "description": "As directed by the Physician.",
    "price": "110.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-omeo-calendula-face-wash-with-neem-aloe-vera-face-wash.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1608/bjain-omeo-calendula-face-wash-with-neem-aloe-vera-face-wash.html"
  },
  {
    "name": "Bhargava Bio Valley Face Wash",
    "description": "As directed by the Physician.",
    "price": "290.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bhargava-bio-valley-face-wash.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1607/bhargava-bio-valley-face-wash.html"
  },
  {
    "name": "Bakson`s Sunny Herbal Face Wash Gel with Aloevera, Calendula and Tea Tree Oil",
    "description": "As directed by the Physician.",
    "price": "155.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-sunny-herbal-face-wash-gel-with-aloevera-calendula-and-tea-tree-oil.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1606/bakson%60s-sunny-herbal-face-wash-gel-with-aloevera,-calendula-and-tea-tree-oil.html"
  },
  {
    "name": "Bakson`s Face Wash With Aloevera Calendula Neem And Tulsi",
    "description": "As directed by the Physician.",
    "price": "70.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-face-wash-with-aloevera-calendula-neem-and-tulsi.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1604/bakson%60s-face-wash-with-aloevera-calendula-neem-and-tulsi.html"
  },
  {
    "name": "Dr Willmar Schwabe India Kali Arsenicosum Trituration Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "150.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-kali-arsenicosum-trituration-tablet-3x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1600/dr-willmar-schwabe-india-kali-arsenicosum-trituration-tablet-3x.html"
  },
  {
    "name": "Dr Willmar Schwabe India Calcarea Carbonicum Trituration Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "110.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-calcarea-carbonicum-trituration-tablet-3x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1590/dr-willmar-schwabe-india-calcarea-carbonicum-trituration-tablet-3x.html"
  },
  {
    "name": "Adven Naturals D-Acne Face Wash",
    "description": "As directed by the Physician.",
    "price": "250.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/adven-naturals-d-acne-face-wash.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1589/adven-naturals-d-acne-face-wash.html"
  },
  {
    "name": "Adven Naturals Face Wash With ABC+ Neem And Tulsi",
    "description": "As directed by the Physician.",
    "price": "150.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/adven-naturals-face-wash-with-abc-neem-and-tulsi.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1588/adven-naturals-face-wash-with-abc-neem-and-tulsi.html"
  },
  {
    "name": "Dr Willmar Schwabe India Calcarea Iodatum Trituration Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "125.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-calcarea-iodatum-trituration-tablet-3x.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1582/dr-willmar-schwabe-india-calcarea-iodatum-trituration-tablet-3x.html"
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
    "name": "Dr Willmar Schwabe India Gun Powder Trituration Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "110.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-gun-powder-trituration-tablet-3x.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1562/dr-willmar-schwabe-india-gun-powder-trituration-tablet-3x.html"
  },
  {
    "name": "Dr Willmar Schwabe India Uranium Nitricum Trituration Tablet 4X",
    "description": "As directed by the Physician.",
    "price": "110.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-uranium-nitricum-trituration-tablet-4x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1551/dr-willmar-schwabe-india-uranium-nitricum-trituration-tablet-4x.html"
  },
  {
    "name": "Wheezal Calendula Nectar Multi Purpose Cream",
    "description": "As directed by the Physician.",
    "price": "35.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/wheezal-calendula-nectar-multi-purpose-cream%20(1).jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1545/wheezal-calendula-nectar-multi-purpose-cream.html"
  },
  {
    "name": "Wheezal Leuco-X Cream",
    "description": "As directed by the Physician.",
    "price": "75.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/wheezal-leuco-x-cream.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1544/wheezal-leuco-x-cream.html"
  },
  {
    "name": "Wheezal Calendula Nectar Antiseptic Cream",
    "description": "As directed by the Physician.",
    "price": "75.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/wheezal-calendula-nectar-antiseptic-cream%20(1).jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1543/wheezal-calendula-nectar-antiseptic-cream.html"
  },
  {
    "name": "Wheezal Acne Clear Cream",
    "description": "As directed by the Physician.",
    "price": "75.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/wheezal-acne-clear-cream.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1542/wheezal-acne-clear-cream.html"
  },
  {
    "name": "SBL Silk N Stay Aloe Vera Cream For Normal And Dry Skin",
    "description": "As directed by the Physician.",
    "price": "51.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-silk-n-stay-aloe-vera-cream-for-normal-and-dry-skin%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1538/sbl-silk-n-stay-aloe-vera-cream-for-normal-and-dry-skin.html"
  },
  {
    "name": "SBL Ammi Visnaga Cream",
    "description": "As directed by the Physician.",
    "price": "56.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-ammi-visnaga-cream.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1537/sbl-ammi-visnaga-cream.html"
  },
  {
    "name": "SBL Silk N Stay Aloe Vera Cream for All Skin Types",
    "description": "As directed by the Physician.",
    "price": "175.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-silk-n-stay-aloe-vera-cream-for-all-skin-types%20(2).jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1536/sbl-silk-n-stay-aloe-vera-cream-for-all-skin-types.html"
  },
  {
    "name": "SBL Glowing Beauty Fairness Cream",
    "description": "As directed by the Physician.",
    "price": "88.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-glowing-beauty-fairness-cream%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1534/sbl-glowing-beauty-fairness-cream.html"
  },
  {
    "name": "Medisynth No.17 Beckoment Cream",
    "description": "As directed by the Physician.",
    "price": "75.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/medisynth-no.17-beckoment-cream.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1533/medisynth-no-17-beckoment-cream.html"
  },
  {
    "name": "Medisynth Dermoline Cream",
    "description": "As directed by the Physician.",
    "price": "95.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/medisynth-dermoline-cream.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1532/medisynth-dermoline-cream.html"
  },
  {
    "name": "Medisynth Calendol Special Cream",
    "description": "As directed by the Physician.",
    "price": "95.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/medisynth-calendol-special-cream.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1531/medisynth-calendol-special-cream.html"
  },
  {
    "name": "Medisynth Soriafit Cream",
    "description": "As directed by the Physician.",
    "price": "95.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/medisynth-soriafit-cream.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1530/medisynth-soriafit-cream.html"
  },
  {
    "name": "Medisynth Pilen Cream",
    "description": "As directed by the Physician.",
    "price": "95.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/medisynth-pilen-cream.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1529/medisynth-pilen-cream.html"
  },
  {
    "name": "Medisynth Aqui Folium Cream",
    "description": "As directed by the Physician.",
    "price": "95.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/medisynth-aqui-folium-cream.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1527/medisynth-aqui-folium-cream.html"
  },
  {
    "name": "Medisynth Wartex Cream",
    "description": "As directed by the Physician.",
    "price": "95.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/medisynth-wartex-cream.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1526/medisynth-wartex-cream.html"
  },
  {
    "name": "Hapdco Nokrack Cream",
    "description": "As directed by the Physician.",
    "price": "80.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/hapdco-nokrack-cream.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1524/hapdco-nokrack-cream.html"
  },
  {
    "name": "Hapdco Warto Plus Cream",
    "description": "As directed by the Physician.",
    "price": "70.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/hapdco-warto-plus-cream.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1523/hapdco-warto-plus-cream.html"
  },
  {
    "name": "Hapdco Calendula Plus Cream",
    "description": "As directed by the Physician.",
    "price": "60.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/hapdco-calendula-plus-cream.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1522/hapdco-calendula-plus-cream.html"
  },
  {
    "name": "Hapdco Fairway Cream",
    "description": "As directed by the Physician.",
    "price": "80.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/hapdco-fairway-cream.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1521/hapdco-fairway-cream.html"
  },
  {
    "name": "Hapdco Marks Go Cream",
    "description": "As directed by the Physician.",
    "price": "90.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/hapdco-marks-go-cream.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1520/hapdco-marks-go-cream.html"
  },
  {
    "name": "Hapdco Aqui Plus Cream",
    "description": "As directed by the Physician.",
    "price": "90.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/hapdco-aqui-plus-cream.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1519/hapdco-aqui-plus-cream.html"
  },
  {
    "name": "Dr Willmar Schwabe India Topi Cantharis Cream",
    "description": "As directed by the Physician.",
    "price": "65.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-topi-cantharis-cream.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1518/dr-willmar-schwabe-india-topi-cantharis-cream.html"
  },
  {
    "name": "Dr Willmar Schwabe India Topi Graphites Cream",
    "description": "As directed by the Physician.",
    "price": "72.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-topi-graphites-cream.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1517/dr-willmar-schwabe-india-topi-graphites-cream.html"
  },
  {
    "name": "Dr Willmar Schwabe India Topi Sulphur Cream",
    "description": "As directed by the Physician.",
    "price": "65.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-topi-sulphur-cream.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1516/dr-willmar-schwabe-india-topi-sulphur-cream.html"
  },
  {
    "name": "Dr Willmar Schwabe India Topi Heal Cream",
    "description": "As directed by the Physician.",
    "price": "72.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-topi-heal-cream.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1515/dr-willmar-schwabe-india-topi-heal-cream.html"
  },
  {
    "name": "Dr Willmar Schwabe India Topi Cardiospermum Cream",
    "description": "As directed by the Physician.",
    "price": "65.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-topi-cardiospermum-cream.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1514/dr-willmar-schwabe-india-topi-cardiospermum-cream.html"
  },
  {
    "name": "Dr Willmar Schwabe India Topi Azadirachta Cream",
    "description": "As directed by the Physician.",
    "price": "65.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-topi-azadirachta-cream.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1513/dr-willmar-schwabe-india-topi-azadirachta-cream.html"
  },
  {
    "name": "Dr Willmar Schwabe India Topi Thuja Cream",
    "description": "As directed by the Physician.",
    "price": "65.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-topi-thuja-cream.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1512/dr-willmar-schwabe-india-topi-thuja-cream.html"
  },
  {
    "name": "Dr Willmar Schwabe India Topi Berberis Cream",
    "description": "As directed by the Physician.",
    "price": "65.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-topi-berberis-cream.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1511/dr-willmar-schwabe-india-topi-berberis-cream.html"
  },
  {
    "name": "Bhargava Whitening Bleach Free Cream",
    "description": "As directed by the Physician.",
    "price": "187.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bhargava-whitening-bleach-free-cream.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1510/bhargava-whitening-bleach-free-cream.html"
  },
  {
    "name": "Bhargava Cutica Cream",
    "description": "As directed by the Physician.",
    "price": "70.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bhargava-cutica-cream.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1509/bhargava-cutica-cream.html"
  },
  {
    "name": "Bhargava Whitigo Cream",
    "description": "As directed by the Physician.",
    "price": "71.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bhargava-whitigo-cream.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1508/bhargava-whitigo-cream.html"
  },
  {
    "name": "Bhargava Angel Gloss Complexion Cream",
    "description": "As directed by the Physician.",
    "price": "90.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bhargava-angel-gloss-complexion-cream.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1507/bhargava-angel-gloss-complexion-cream.html"
  },
  {
    "name": "Bakson`s Sun Care Cream",
    "description": "As directed by the Physician.",
    "price": "250.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-sun-care-cream.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1505/bakson%60s-sun-care-cream.html"
  },
  {
    "name": "Bakson`s Saffron Gold Facial Cream",
    "description": "As directed by the Physician.",
    "price": "180.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-saffron-gold-facial-cream.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1501/bakson%60s-saffron-gold-facial-cream.html"
  },
  {
    "name": "Bjain Graphites Trituration Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "849.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-graphites-trituration-tablet-3x.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1500/bjain-graphites-trituration-tablet-3x.html"
  },
  {
    "name": "Bakson`s Cream Bleach",
    "description": "As directed by the Physician.",
    "price": "110.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-cream-bleach.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1498/bakson%60s-cream-bleach.html"
  },
  {
    "name": "Bakson`s B-Shape Cream",
    "description": "As directed by the Physician.",
    "price": "310.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-b-shape-cream.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1496/bakson%60s-b-shape-cream.html"
  },
  {
    "name": "Bakson`s Foot Cream",
    "description": "As directed by the Physician.",
    "price": "190.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-foot-cream.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1495/bakson%60s-foot-cream.html"
  },
  {
    "name": "Bakson`s Hair Removal Cream",
    "description": "As directed by the Physician.",
    "price": "150.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-hair-removal-cream%20(1).jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1493/bakson%60s-hair-removal-cream.html"
  },
  {
    "name": "Bjain Azadirachta Indica Trituration Tablet 1X",
    "description": "As directed by the Physician.",
    "price": "149.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-azadirachta-indica-trituration-tablet-1x.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1492/bjain-azadirachta-indica-trituration-tablet-1x.html"
  },
  {
    "name": "Bakson`s Boro Arnica Cream",
    "description": "As directed by the Physician.",
    "price": "40.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-boro-arnica-cream.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1491/bakson%60s-boro-arnica-cream.html"
  },
  {
    "name": "Bakson`s Anti Wrinkle Cream",
    "description": "As directed by the Physician.",
    "price": "230.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-anti-wrinkle-cream%20(1).jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1490/bakson%60s-anti-wrinkle-cream.html"
  },
  {
    "name": "Bakson`s Baksoint 10 Cream",
    "description": "As directed by the Physician.",
    "price": "60.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-baksoint-10-cream.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1489/bakson%60s-baksoint-10-cream.html"
  },
  {
    "name": "Bakson`s Cocoa Butter Cream",
    "description": "As directed by the Physician.",
    "price": "220.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-cocoa-butter-cream.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1488/bakson%60s-cocoa-butter-cream.html"
  },
  {
    "name": "Bakson`s Aloevera Calendula Cream",
    "description": "As directed by the Physician.",
    "price": "450.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-aloevera-calendula-cream.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1484/bakson%60s-aloevera-calendula-cream.html"
  },
  {
    "name": "Bakson`s Fairness Cream For Women",
    "description": "As directed by the Physician.",
    "price": "140.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-fairness-cream-for-women.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1483/bakson%60s-fairness-cream-for-women.html"
  },
  {
    "name": "Bakson`s S-Cure Cream",
    "description": "As directed by the Physician.",
    "price": "90.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-s-cure-cream.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1482/bakson%60s-s-cure-cream.html"
  },
  {
    "name": "Bakson`s Fairness Cream For Men",
    "description": "As directed by the Physician.",
    "price": "150.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-fairness-cream-for-men.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1481/bakson%60s-fairness-cream-for-men.html"
  },
  {
    "name": "Adven Naturals All Purpose Cream",
    "description": "As directed by the Physician.",
    "price": "140.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/adven-naturals-all-purpose-cream%20(1)1.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1480/adven-naturals-all-purpose-cream.html"
  },
  {
    "name": "Bjain Calcarea Iodata Trituration Tablet 6X",
    "description": "As directed by the Physician.",
    "price": "849.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-calcarea-iodata-trituration-tablet-3x1.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1470/bjain-calcarea-iodata-trituration-tablet-6x.html"
  },
  {
    "name": "Bjain Echinacea Angustifolia Trituration Tablet 1X",
    "description": "As directed by the Physician.",
    "price": "149.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/no_img_386_480.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1464/bjain-echinacea-angustifolia-trituration-tablet-1x.html"
  },
  {
    "name": "SBL Azadirachta Indica Tablet 1X",
    "description": "As directed by the Physician.",
    "price": "141.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-azadirachta-indica-tablet-1x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1463/sbl-azadirachta-indica-tablet-1x.html"
  },
  {
    "name": "Medisynth Wartex Pills",
    "description": "As directed by the Physician.",
    "price": "100.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/medisynth-wartex-pills.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1448/medisynth-wartex-pills.html"
  },
  {
    "name": "Hapdco Aqui Plus Tablet",
    "description": "As directed by the Physician.",
    "price": "100.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/hapdco-aqui-plus-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1441/hapdco-aqui-plus-tablet.html"
  },
  {
    "name": "Bjain Graphites Trituration Tablet 6X",
    "description": "As directed by the Physician.",
    "price": "849.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-graphites-trituration-tablet-6x%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1417/bjain-graphites-trituration-tablet-6x.html"
  },
  {
    "name": "Bjain Sulphur Trituration Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "849.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-sulphur-trituration-tablet-3x%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1414/bjain-sulphur-trituration-tablet-3x.html"
  },
  {
    "name": "Bjain Arsenicum Sulphuratum Flavum Trituration Tablet 6X",
    "description": "As directed by the Physician.",
    "price": "849.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-arsenicum-sulphuratum-flavum-trituration-tablet-6x%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1413/bjain-arsenicum-sulphuratum-flavum-trituration-tablet-6x.html"
  },
  {
    "name": "Bjain Carbo Vegetabilis Trituration Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "849.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-carbo-vegetabilis-trituration-tablet-3x.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1403/bjain-carbo-vegetabilis-trituration-tablet-3x.html"
  },
  {
    "name": "Dr Willmar Schwabe India Azadirachta Indica Tablet 1X",
    "description": "As directed by the Physician.",
    "price": "150.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-azadirachta-indica-tablet-1x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1398/dr-willmar-schwabe-india-azadirachta-indica-tablet-1x.html"
  },
  {
    "name": "Bjain Calcarea Iodata Trituration Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "849.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-calcarea-iodata-trituration-tablet-3x.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1395/bjain-calcarea-iodata-trituration-tablet-3x.html"
  },
  {
    "name": "Bjain Sulphur Trituration Tablet 6X",
    "description": "As directed by the Physician.",
    "price": "849.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-sulphur-trituration-tablet-6x.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1388/bjain-sulphur-trituration-tablet-6x.html"
  },
  {
    "name": "Bjain Gun Powder Trituration Tablet 6X",
    "description": "As directed by the Physician.",
    "price": "849.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-gun-powder-trituration-tablet-3x1.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1385/bjain-gun-powder-trituration-tablet-6x.html"
  },
  {
    "name": "Bjain Arsenicum Sulphuratum Flavum Trituration Tablet 3x",
    "description": "As directed by the Physician.",
    "price": "139.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-arsenicum-sulphuratum-flavum-trituration-tablet-3x.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1381/bjain-arsenicum-sulphuratum-flavum-trituration-tablet-3x.html"
  },
  {
    "name": "Bjain Gun Powder Trituration Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "849.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-gun-powder-trituration-tablet-3x%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1380/bjain-gun-powder-trituration-tablet-3x.html"
  },
  {
    "name": "Dr Willmar Schwabe India Echinacea Angustifolia Tablet 1X",
    "description": "As directed by the Physician.",
    "price": "290.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-echinacea-angustifolia-tablet-1x.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1374/dr-willmar-schwabe-india-echinacea-angustifolia-tablet-1x.html"
  },
  {
    "name": "Dr Willmar Schwabe India Hepar Sulphuris Pentarkan Tablet",
    "description": "As directed by the Physician.",
    "price": "160.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-hepar-sulphuris-pentarkan-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1372/dr-willmar-schwabe-india-hepar-sulphuris-pentarkan-tablet.html"
  },
  {
    "name": "Dr Willmar Schwabe India Graphites Pentarkan Tablet",
    "description": "As directed by the Physician.",
    "price": "160.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-graphites-pentarkan-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1368/dr-willmar-schwabe-india-graphites-pentarkan-tablet.html"
  },
  {
    "name": "ADEL Calcarea Iodatum Trituration Tablet 6X",
    "description": "As directed by the Physician.",
    "price": "210.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/blank_otc_uobogo1234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556575859606162.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1364/adel-calcarea-iodatum-trituration-tablet-6x.html"
  },
  {
    "name": "ADEL Kali Bromatum Trituration Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "210.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/adel-kali-bromatum-trituration-tablet-3x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1359/adel-kali-bromatum-trituration-tablet-3x.html"
  },
  {
    "name": "ADEL Antimonium Crudum Trituration Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "225.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/adel-antimonium-crudum-trituration-tablet-3x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1351/adel-antimonium-crudum-trituration-tablet-3x.html"
  },
  {
    "name": "ADEL Anacardium Orientale Trituration Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "225.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/adel-anacardium-orientale-trituration-tablet-3x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1346/adel-anacardium-orientale-trituration-tablet-3x.html"
  },
  {
    "name": "ADEL Arsenicum Iodatum Trituration Tablet 6X",
    "description": "As directed by the Physician.",
    "price": "225.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/adel-arsenicum-iodatum-trituration-tablet-6x1.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1341/adel-arsenicum-iodatum-trituration-tablet-6x.html"
  },
  {
    "name": "Bakson`s Wart Aid Paediatric Tablet",
    "description": "As directed by the Physician.",
    "price": "125.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-wart-aid-paediatric-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1312/bakson%60s-wart-aid-paediatric-tablet.html"
  },
  {
    "name": "Bakson`s Compound # 3 Hives/Urticaria Tablet",
    "description": "As directed by the Physician.",
    "price": "110.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/images%20(1).jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1308/bakson%60s-compound-3-hives-urticaria-tablet.html"
  },
  {
    "name": "Bakson`s Homoeopathic Formula D Tablet",
    "description": "As directed by the Physician.",
    "price": "170.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-homoeopathic-formula-d-tablet.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1267/bakson%60s-homoeopathic-formula-d-tablet.html"
  },
  {
    "name": "Bakson`s Wart Aid Tablet",
    "description": "As directed by the Physician.",
    "price": "170.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-wart-aid-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1266/bakson%60s-wart-aid-tablet.html"
  },
  {
    "name": "SBL Pimplex Tablet",
    "description": "As directed by the Physician.",
    "price": "140.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-pimplex-tablet.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1252/sbl-pimplex-tablet.html"
  },
  {
    "name": "Wheezal Sarsa Syrup",
    "description": "As directed by the Physician.",
    "price": "180.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/wheezal-sarsa-syrup.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1213/wheezal-sarsa-syrup.html"
  },
  {
    "name": "Bjain Calcarea Sulphurica Biochemic Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "599.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-calcarea-sulphurica-biochemic-tablet-3x%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1135/bjain-calcarea-sulphurica-biochemic-tablet-3x.html"
  },
  {
    "name": "Bjain Calcarea Phosphorica Biochemic Tablet 30X",
    "description": "As directed by the Physician.",
    "price": "599.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-calcarea-phosphorica-biochemic-tablet-30x%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1134/bjain-calcarea-phosphorica-biochemic-tablet-30x.html"
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
    "name": "Bjain Calcarea Sulphurica Biochemic Tablet 12X",
    "description": "As directed by the Physician.",
    "price": "599.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-calcarea-sulphurica-biochemic-tablet-12x%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1123/bjain-calcarea-sulphurica-biochemic-tablet-12x.html"
  },
  {
    "name": "Bjain Calcarea Sulphurica Biochemic Tablet 30X",
    "description": "As directed by the Physician.",
    "price": "599.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-calcarea-sulphurica-biochemic-tablet-30x%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1122/bjain-calcarea-sulphurica-biochemic-tablet-30x.html"
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
    "name": "Bjain Calcarea Sulphurica Biochemic Tablet 6X",
    "description": "As directed by the Physician.",
    "price": "599.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-calcarea-sulphurica-biochemic-tablet-6x%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1119/bjain-calcarea-sulphurica-biochemic-tablet-6x.html"
  },
  {
    "name": "Bjain Calcarea Sulphurica Biochemic Tablet 200X",
    "description": "As directed by the Physician.",
    "price": "599.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-calcarea-sulphurica-biochemic-tablet-200x%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1114/bjain-calcarea-sulphurica-biochemic-tablet-200x.html"
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
    "name": "Bjain Calcarea Fluorica Biochemic Tablet 30X",
    "description": "As directed by the Physician.",
    "price": "599.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-calcarea-fluorica-biochemic-tablet-30x%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1108/bjain-calcarea-fluorica-biochemic-tablet-30x.html"
  },
  {
    "name": "Bjain Kali Phosphoricum Biochemic Tablet 200X",
    "description": "As directed by the Physician.",
    "price": "599.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-kali-phosphoricum-biochemic-tablet-200x%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1106/bjain-kali-phosphoricum-biochemic-tablet-200x.html"
  },
  {
    "name": "Bjain Calcarea Fluorica Biochemic Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "599.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-calcarea-fluorica-biochemic-tablet-3x%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1103/bjain-calcarea-fluorica-biochemic-tablet-3x.html"
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
    "name": "Bjain Natrum Sulphuricum Biochemic Tablet 6X",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-natrum-sulphuricum-biochemic-tablet-6x%20(1)1.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1071/bjain-natrum-sulphuricum-biochemic-tablet-6x.html"
  },
  {
    "name": "Bjain Calcarea Fluorica Biochemic Tablet 12X",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-calcarea-fluorica-biochemic-tablet-12x%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1067/bjain-calcarea-fluorica-biochemic-tablet-12x.html"
  },
  {
    "name": "Bjain Calcarea Fluorica Biochemic Tablet 200X",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bjain-calcarea-fluorica-biochemic-tablet-200x%20(1).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1065/bjain-calcarea-fluorica-biochemic-tablet-200x.html"
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
    "name": "New Life Blodo Life Blood Purifier Syrup",
    "description": "As directed by the Physician.",
    "price": "80.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/new-life-blodo-life-blood-purifier-syrup.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1050/new-life-blodo-life-blood-purifier-syrup.html"
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
    "name": "Hapdco Saffodin Syrup",
    "description": "As directed by the Physician.",
    "price": "100.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/hapdco-saffodin-syrup.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1022/hapdco-saffodin-syrup.html"
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
    "name": "Hapdco SarsaPlus Syrup",
    "description": "As directed by the Physician.",
    "price": "250.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/hapdco-sarsa-plus-syrup.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/1002/hapdco-sarsaplus-syrup.html"
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
    "name": "Dr Willmar Schwabe India Calcarea Fluorica Biochemic Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "80.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-calcarea-fluorica-biochemic-tablet-3x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/998/dr-willmar-schwabe-india-calcarea-fluorica-biochemic-tablet-3x.html"
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
    "name": "Dr Willmar Schwabe India Silicea Biochemic Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "80.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-silicea-biochemic-tablet-3x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/985/dr-willmar-schwabe-india-silicea-biochemic-tablet-3x.html"
  },
  {
    "name": "Dr Willmar Schwabe India Calcarea Fluorica Biochemic Tablet 30X",
    "description": "As directed by the Physician.",
    "price": "80.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-calcarea-fluorica-biochemic-tablet-30x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/982/dr-willmar-schwabe-india-calcarea-fluorica-biochemic-tablet-30x.html"
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
    "name": "Dr Willmar Schwabe India Calcarea Fluorica Biochemic Tablet 200X",
    "description": "As directed by the Physician.",
    "price": "80.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-calcarea-fluorica-biochemic-tablet-200x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/976/dr-willmar-schwabe-india-calcarea-fluorica-biochemic-tablet-200x.html"
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
    "name": "Dr Willmar Schwabe India Calcarea Fluorica Biochemic Tablet 12X",
    "description": "As directed by the Physician.",
    "price": "80.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-calcarea-fluorica-biochemic-tablet-12x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/964/dr-willmar-schwabe-india-calcarea-fluorica-biochemic-tablet-12x.html"
  },
  {
    "name": "Dr Willmar Schwabe India Calcarea Fluorica Biochemic Tablet 6X",
    "description": "As directed by the Physician.",
    "price": "80.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr-willmar-schwabe-india-calcarea-fluorica-biochemic-tablet-6x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/957/dr-willmar-schwabe-india-calcarea-fluorica-biochemic-tablet-6x.html"
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
    "name": "SBL Calcarea Fluorica Biochemic Tablet 30X",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-calcarea-fluorica-biochemic-tablet-30x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/910/sbl-calcarea-fluorica-biochemic-tablet-30x.html"
  },
  {
    "name": "SBL Calcarea Fluorica Biochemic Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-calcarea-fluorica-biochemic-tablet-3x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/909/sbl-calcarea-fluorica-biochemic-tablet-3x.html"
  },
  {
    "name": "SBL Calcarea Fluorica Biochemic Tablet 200X",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-calcarea-fluorica-biochemic-tablet-200x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/907/sbl-calcarea-fluorica-biochemic-tablet-200x.html"
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
    "name": "SBL Calcarea Fluorica Biochemic Tablet 12X",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-calcarea-fluorica-biochemic-tablet-12x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/896/sbl-calcarea-fluorica-biochemic-tablet-12x.html"
  },
  {
    "name": "SBL Calcarea Fluorica Biochemic Tablet 6X",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/sbl-calcarea-fluorica-biochemic-tablet-6x.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/894/sbl-calcarea-fluorica-biochemic-tablet-6x.html"
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
    "name": "Hapdco Natrum Sulphuricum Biochemic Tablet 12X",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/blank_otc_uobogo123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/885/hapdco-natrum-sulphuricum-biochemic-tablet-12x.html"
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
    "name": "Hapdco Natrum Sulphuricum Biochemic Tablet 30X",
    "description": "As directed by the Physician.",
    "price": "85.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/blank_otc_uobogo1234567891011121314151617181920212223.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/840/hapdco-natrum-sulphuricum-biochemic-tablet-30x.html"
  },
  {
    "name": "Bakson`s Sarsa Aid Syrup",
    "description": "As directed by the Physician.",
    "price": "300.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-sarsa-aid-syrup%20(2).png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/817/bakson%60s-sarsa-aid-syrup.html"
  },
  {
    "name": "Dr. Reckeweg R58 Against Hydrops Drop",
    "description": "As directed by the Physician.",
    "price": "235.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr.-reckeweg-r58-against-hydrops-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/789/dr-reckeweg-r58-against-hydrops-drop.html"
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
    "name": "Dr. Reckeweg R82 Anti Fungal Drop",
    "description": "As directed by the Physician.",
    "price": "270.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/dr.-reckeweg-r82-anti-fungal-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/739/dr-reckeweg-r82-anti-fungal-drop.html"
  },
  {
    "name": "Wheezal WL04 Backache Drop",
    "description": "As directed by the Physician.",
    "price": "145.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/wheezal-wl04-backache-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/705/wheezal-wl04-backache-drop.html"
  },
  {
    "name": "New Life NL-5 Oedema Drop",
    "description": "As directed by the Physician.",
    "price": "120.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/new-life-nl-5-oedema-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/687/new-life-nl-5-oedema-drop.html"
  },
  {
    "name": "New Life Eczederm Drop",
    "description": "As directed by the Physician.",
    "price": "90.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/new-life-eczederm-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/677/new-life-eczederm-drop.html"
  },
  {
    "name": "Medisynth Dermoline Oral Drop",
    "description": "As directed by the Physician.",
    "price": "120.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/medisynth-dermoline-oral-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/669/medisynth-dermoline-oral-drop.html"
  },
  {
    "name": "Medisynth Soriafit Oral Drop",
    "description": "As directed by the Physician.",
    "price": "120.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/medisynth-soriafit-oral-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/666/medisynth-soriafit-oral-drop.html"
  },
  {
    "name": "Wheezal WL56 Blood Purifier Drop",
    "description": "As directed by the Physician.",
    "price": "145.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/wheezal-wl56-blood-purifier-drop.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/663/wheezal-wl56-blood-purifier-drop.html"
  },
  {
    "name": "Medisynth Aqui Folium Drop",
    "description": "As directed by the Physician.",
    "price": "120.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/medisynth-aqui-folium-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/662/medisynth-aqui-folium-drop.html"
  },
  {
    "name": "Medisynth Wartex Forte Drop",
    "description": "As directed by the Physician.",
    "price": "120.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/medisynth-wartex-forte-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/652/medisynth-wartex-forte-drop.html"
  },
  {
    "name": "Wheezal WL01 Acne Drop",
    "description": "As directed by the Physician.",
    "price": "140.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/wheezal-wl01-acne-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/640/wheezal-wl01-acne-drop.html"
  },
  {
    "name": "Wheezal WL50 Psoriasis Drop",
    "description": "As directed by the Physician.",
    "price": "145.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/wheezal-wl50-psoriasis-drop.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/637/wheezal-wl50-psoriasis-drop.html"
  },
  {
    "name": "Wheezal WL57 Anti-Fungal Drop",
    "description": "As directed by the Physician.",
    "price": "140.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/wheezal-wl57-anti-fungal-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/634/wheezal-wl57-anti-fungal-drop.html"
  },
  {
    "name": "Wheezal WL49 Warts Drop",
    "description": "As directed by the Physician.",
    "price": "145.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/wheezal-wl49-warts-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/617/wheezal-wl49-warts-drop.html"
  },
  {
    "name": "Wheezal WL33 Skin Drop",
    "description": "As directed by the Physician.",
    "price": "145.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/wheezal-wl33-skin-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/616/wheezal-wl33-skin-drop.html"
  },
  {
    "name": "Hapdco  MTC-19 Eczema Drop",
    "description": "As directed by the Physician.",
    "price": "110.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/hapdco-mtc-19-eczema-drop-1.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/599/hapdco-mtc-19-eczema-drop.html"
  },
  {
    "name": "Hapdco Warto Plus Drop",
    "description": "As directed by the Physician.",
    "price": "100.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/hapdco-warto-plus-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/596/hapdco-warto-plus-drop.html"
  },
  {
    "name": "REPL Dr. Advice No.13 Abscess Drop",
    "description": "As directed by the Physician.",
    "price": "154.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/repl-dr.-advice-no.13-abscess-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/583/repl-dr-advice-no-13-abscess-drop.html"
  },
  {
    "name": "REPL Dr. Advice No.40 Eczema Drop",
    "description": "As directed by the Physician.",
    "price": "154.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/repl-dr.-advice-no.40-eczema-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/555/repl-dr-advice-no-40-eczema-drop.html"
  },
  {
    "name": "REPL Dr. Advice No.11 Acne Drop",
    "description": "As directed by the Physician.",
    "price": "170.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/repl-dr.-advice-no.11-acne-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/547/repl-dr-advice-no-11-acne-drop.html"
  },
  {
    "name": "Adven A-194 Reactivating Reconstituent Drop",
    "description": "As directed by the Physician.",
    "price": "150.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/adven-a-194-reactivating-reconstituent-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/543/adven-a-194-reactivating-reconstituent-drop.html"
  },
  {
    "name": "Adven A-193 Psoriasis Drop",
    "description": "As directed by the Physician.",
    "price": "150.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/adven-a-193-psoriasis-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/532/adven-a-193-psoriasis-drop.html"
  },
  {
    "name": "Adven D-Acne Drop",
    "description": "As directed by the Physician.",
    "price": "125.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/adven-d-acne-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/520/adven-d-acne-drop.html"
  },
  {
    "name": "Adven Glow-Aid Drop",
    "description": "As directed by the Physician.",
    "price": "125.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/adven-glow-aid-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/505/adven-glow-aid-drop.html"
  },
  {
    "name": "REPL Dr. Advice No.79 Psoriasis Drop",
    "description": "As directed by the Physician.",
    "price": "154.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/repl-dr.-advice-no.79-psoriasis-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/460/repl-dr-advice-no-79-psoriasis-drop.html"
  },
  {
    "name": "REPL Dr. Advice No.9 Allergy Drop",
    "description": "As directed by the Physician.",
    "price": "154.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/repl-dr.-advice-no.9-allergy-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/458/repl-dr-advice-no-9-allergy-drop.html"
  },
  {
    "name": "REPL Dr. Advice No.94 Scabies Drop",
    "description": "As directed by the Physician.",
    "price": "170.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/repl-dr.-advice-no.94-scabies-drop.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/449/repl-dr-advice-no-94-scabies-drop.html"
  },
  {
    "name": "REPL Dr. Advice No.54 Herpes Drop",
    "description": "As directed by the Physician.",
    "price": "154.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/REPL%20Dr.%20Advice%20No.54%20Herpes%20Drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/444/repl-dr-advice-no-54-herpes-drop.html"
  },
  {
    "name": "REPL Dr. Advice No.30 Corns Drop",
    "description": "As directed by the Physician.",
    "price": "154.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/repl-dr.-advice-no.30-corns-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/441/repl-dr-advice-no-30-corns-drop.html"
  },
  {
    "name": "REPL Dr. Advice No.88 Ring Worm Drop",
    "description": "As directed by the Physician.",
    "price": "146.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/repl-dr.-advice-no.88-ringg-worm-drop.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/431/repl-dr-advice-no-88-ring-worm-drop.html"
  },
  {
    "name": "Bhargava Wartin Drop",
    "description": "As directed by the Physician.",
    "price": "159.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bhargava-wartin-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/420/bhargava-wartin-drop.html"
  },
  {
    "name": "Bakson`s B64 Dermato Drop",
    "description": "As directed by the Physician.",
    "price": "140.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-b64-dermato-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/415/bakson%60s-b64-dermato-drop.html"
  },
  {
    "name": "Bhargava Diacardiac Gold Drop",
    "description": "As directed by the Physician.",
    "price": "165.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bhargava-diacardiac-gold-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/394/bhargava-diacardiac-gold-drop.html"
  },
  {
    "name": "Bakson`s B61 Blood Purifier Drop",
    "description": "As directed by the Physician.",
    "price": "140.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-b61-blood-purifier-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/375/bakson%60s-b61-blood-purifier-drop.html"
  },
  {
    "name": "Bakson`s B25 Acne Drop",
    "description": "As directed by the Physician.",
    "price": "150.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-b25-acne-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/369/bakson%60s-b25-acne-drop.html"
  },
  {
    "name": "Bakson`s B23 Skin Drop",
    "description": "As directed by the Physician.",
    "price": "150.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/bakson-s-b23-skin-drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/355/bakson%60s-b23-skin-drop.html"
  },
  {
    "name": "ADEL Kali Sulphuricum Biochemic Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "160.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/blank_otc_uobogo12345.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/306/adel-kali-sulphuricum-biochemic-tablet-3x.html"
  },
  {
    "name": "ADEL Kali Muriaticum Biochemic Tablet 30X",
    "description": "As directed by the Physician.",
    "price": "160.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/blank_otc_uobogo1234.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/305/adel-kali-muriaticum-biochemic-tablet-30x.html"
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
    "name": "ADEL Calcarea Sulphuricum Biochemic Tablet 3X",
    "description": "As directed by the Physician.",
    "price": "160.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/adel-calcarea-sulphuricum-biochemic-tablet-3x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/300/adel-calcarea-sulphuricum-biochemic-tablet-3x.html"
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
    "name": "RL-50 Vitamin (A,B,C,D,E,K) Drops",
    "description": "As directed by the Physician.",
    "price": "180.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/RL-50.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/270/rl-50-vitamin-a,b,c,d,e,k-drops.html"
  },
  {
    "name": "RL-75 Reactivating Drops",
    "description": "As directed by the Physician.",
    "price": "170.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/RL-751.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/261/rl-75-reactivating-drops.html"
  },
  {
    "name": "RL-69  Skin Drops",
    "description": "As directed by the Physician.",
    "price": "170.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/_0001_RL-69-Drop.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/256/rl-69-skin-drops.html"
  },
  {
    "name": "RL-48 For Psoriasis Drops",
    "description": "As directed by the Physician.",
    "price": "180.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/RL-481.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/246/rl-48-for-psoriasis-drops.html"
  },
  {
    "name": "RL-38 For Blood Purifier All Types of Skin Disesae Syrup",
    "description": "As directed by the Physician.",
    "price": "360.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/RL-381.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/241/rl-38-for-blood-purifier-all-types-of-skin-disesae-syrup.html"
  },
  {
    "name": "RL-36 Gastritis Acidity All Types Stomach Problems Syrup",
    "description": "As directed by the Physician.",
    "price": "390.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/RL-361.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/240/rl-36-gastritis-acidity-all-types-stomach-problems-syrup.html"
  },
  {
    "name": "RL-30 For Warts & Corn Mole Drops",
    "description": "As directed by the Physician.",
    "price": "180.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/_0042_RL-30.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/236/rl-30-for-warts-corn-mole-drops.html"
  },
  {
    "name": "RL-22 For Eczema & Skin Disease Drops",
    "description": "As directed by the Physician.",
    "price": "180.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/_0050_RL-22.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/226/rl-22-for-eczema-skin-disease-drops.html"
  },
  {
    "name": "RL-20 For Face Black Spots Wrinkles & Pigmentation Drops",
    "description": "As directed by the Physician.",
    "price": "180.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/_0052_RL-20.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/224/rl-20-for-face-black-spots-wrinkles-pigmentation-drops.html"
  },
  {
    "name": "RL-2 Acne Pimple & Skin Dark Drops",
    "description": "As directed by the Physician.",
    "price": "180.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/_0070_RL-2.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/206/rl-2-acne-pimple-skin-dark-drops.html"
  },
  {
    "name": "Adel 86 Verintex Drops",
    "description": "As directed by the Physician.",
    "price": "215.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/Adel%20Pekana%20Adel%2086%20(Verintex%20External)%20(20ml).jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/190/adel-86-verintex-drops.html"
  },
  {
    "name": "ADEL 78 Dercut Ointment",
    "description": "As directed by the Physician.",
    "price": "425.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/Adel%20Pekana%20Adel%2078%20(Dercut)%20(35g).jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/189/adel-78-dercut-ointment.html"
  },
  {
    "name": "ADEL 73 Mucan Drop",
    "description": "As directed by the Physician.",
    "price": "215.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/Adel%20Pekana%20Adel%2073%20(Mucan)%20(20ml).jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/188/adel-73-mucan-drop.html"
  },
  {
    "name": "ADEL 40 Verintex Drops",
    "description": "As directed by the Physician.",
    "price": "250.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/Adel%20Pekana%20Adel%2040%20(Verintex)%20(20ml).jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/187/adel-40-verintex-drops.html"
  },
  {
    "name": "ADEL 33 Apo-Oedem Drop",
    "description": "As directed by the Physician.",
    "price": "250.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/Adel%20Pekana%20Adel%2033%20(Apo-Oedem)%20(20ml).jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/186/adel-33-apo-oedem-drop.html"
  },
  {
    "name": "Adel 20 Proaller Drops",
    "description": "As directed by the Physician.",
    "price": "250.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/Adel%20Pekana%20Adel%2020%20(Proaller)%20(20ml).jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/185/adel-20-proaller-drops.html"
  },
  {
    "name": "ADEL 12 DERCUT DROP",
    "description": "As directed by the Physician.",
    "price": "250.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/Adel%20Pekana%20Adel%2012%20(Dercut)%20(20ml).jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/184/adel-12-dercut-drop.html"
  },
  {
    "name": "ADEL 34 Ailgeno Drop",
    "description": "As directed by the Physician.",
    "price": "215.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/Adel%20Pekana%20Adel%2034%20(Ailgeno)%20(20ml).jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/160/-adel-34-ailgeno-drop-.html"
  },
  {
    "name": "Dr. Reckeweg R63 Drops for Impaired Circulation",
    "description": "As directed by the Physician.",
    "price": "235.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/0000123_dr-reckeweg-r-63-drops-for-impaired-circulation-22-ml_300.jpeg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/130/dr-reckeweg-r63-drops-for-impaired-circulation.html"
  },
  {
    "name": "Dr. Reckeweg R13 Piles Drop 22Ml",
    "description": "As directed by the Physician.",
    "price": "235.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/R13_600x.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/105/dr-reckeweg-r13-piles-drop-22ml.html"
  },
  {
    "name": "Dr. Reckeweg R68 Shingles Skin Rash Drop 22Ml",
    "description": "As directed by the Physician.",
    "price": "220.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/R68.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/104/dr-reckeweg-r68-shingles-skin-rash-drop-22ml-.html"
  },
  {
    "name": "Dr. Reckeweg R23 Eczema Drop 22Ml",
    "description": "As directed by the Physician.",
    "price": "235.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/R23.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/103/dr-reckeweg-r23-eczema-drop-22ml-.html"
  },
  {
    "name": "Dr. Reckeweg R65 Psoriasis Drop 22Ml, Circular Spots, Dry & Itchy Skin & Eczem",
    "description": "As directed by the Physician.",
    "price": "235.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/R65_1024x1024.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/102/dr-reckeweg-r65-psoriasis-drop-22ml,-circular-spots,-dry-itchy-skin-eczem.html"
  },
  {
    "name": "Dr. Reckeweg R53 Acne Vulgaris & Pimples Drop 22Ml",
    "description": "As directed by the Physician.",
    "price": "220.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/R53_1_1024x1024.png",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/101/dr-reckeweg-r53-acne-vulgaris-pimples-drop-22ml.html"
  },
  {
    "name": "Dr. Reckeweg R60 Blood Purifier Drop 22Ml",
    "description": "As directed by the Physician.",
    "price": "235.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/R60_1024x1024.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/97/dr-reckeweg-r60-blood-purifier-drop-22ml-.html"
  },
  {
    "name": "Dr. Reckeweg R21 Reconstituant Drop 22Ml",
    "description": "As directed by the Physician.",
    "price": "235.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/R21_1024x1024.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/96/dr-reckeweg-r21-reconstituant-drop-22ml-.html"
  },
  {
    "name": "Biocombination No. 14",
    "description": "As directed by the Physician.",
    "price": "700.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/biocombination-no-14.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/33/biocombination-no-14.html"
  },
  {
    "name": "B&T Arnica Shampoo",
    "description": "As directed by the Physician.",
    "price": "279.00310.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/arnicashampoo.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/30/b-t-arnica-shampoo.html"
  },
  {
    "name": "B&T Anti-Dandruff Oil",
    "description": "As directed by the Physician.",
    "price": "216.00240.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/boericke-tafel-anti-dandruff-oil.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/29/b-t-anti-dandruff-oil.html"
  },
  {
    "name": "Biocombination No. 22",
    "description": "As directed by the Physician.",
    "price": "700.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/biocombination-no-22.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/28/biocombination-no-22.html"
  },
  {
    "name": "Azadirachta indica 1x",
    "description": "As directed by the Physician.",
    "price": "150.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/no_img_386_480.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/27/azadirachta-indica-1x.html"
  },
  {
    "name": "Silicea Pentarkan",
    "description": "As directed by the Physician.",
    "price": "160.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/silicea%20pentarkan.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/26/silicea-pentarkan.html"
  },
  {
    "name": "Graphites Pentarkan",
    "description": "As directed by the Physician.",
    "price": "160.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/graphites-pentarkan-tablet-.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/25/graphites-pentarkan.html"
  },
  {
    "name": "Topi Azadirachta Cream",
    "description": "As directed by the Physician.",
    "price": "65.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/Topi%20Azadirachta%20Cream.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/24/topi-azadirachta-cream.html"
  },
  {
    "name": "B&T Calendula & Aloe Vera multipurpose cream",
    "description": "As directed by the Physician.",
    "price": "180.00200.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/B&T%20Calendula%20&%20Aloe%20Vera%20multipurpose%20cream.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/23/b-t-calendula-aloe-vera-multipurpose-cream.html"
  },
  {
    "name": "Topi Sulphur Cream",
    "description": "As directed by the Physician.",
    "price": "65.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/no_img_386_480.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/22/topi-sulphur-cream.html"
  },
  {
    "name": "Topi Cantharis Cream",
    "description": "As directed by the Physician.",
    "price": "65.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/topi%20cantharis%20cream.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/21/topi-cantharis-cream.html"
  },
  {
    "name": "Topi Graphites Cream",
    "description": "As directed by the Physician.",
    "price": "65.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/topi-graphites-cream-500x500.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/20/topi-graphites-cream.html"
  },
  {
    "name": "Topi Heal Cream",
    "description": "As directed by the Physician.",
    "price": "72.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/topi%20heal%20cream1.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/19/topi-heal-cream.html"
  },
  {
    "name": "Silicea",
    "description": "As directed by the Physician.",
    "price": "78.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/silicea1.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/18/silicea.html"
  },
  {
    "name": "Calcarea Sulphurica",
    "description": "As directed by the Physician.",
    "price": "78.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/calcarea-sulphurica1.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/16/calcarea-sulphurica.html"
  },
  {
    "name": "Hepar Sulphuris Pentarkan",
    "description": "As directed by the Physician.",
    "price": "160.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/hepar%20sulphuris1.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/15/hepar-sulphuris-pentarkan.html"
  },
  {
    "name": "Topi Cardiospermum",
    "description": "As directed by the Physician.",
    "price": "65.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/topi%20cardiospermum12.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/13/topi-cardiospermum.html"
  },
  {
    "name": "Topi Berberis Cream",
    "description": "As directed by the Physician.",
    "price": "65.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/topi%20Berberis1.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/12/topi-berberis-cream.html"
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
    "name": "B&T Akne - Sor Soap",
    "description": "As directed by the Physician.",
    "price": "81.0090.00",
    "image": "https://control.rajeevclinic.com/Upload/zoom/topi%20Berberis12.jpg",
    "badge": "Urology Care",
    "link": "https://shop.rajeevclinic.com/PI/10/b-t-akne-sor-soap.html"
  }
]

const yt = ["iyfhPVuzreI", "rOp23WT7Dng", "EvPhJMvE7ZQ", "Zj5pC0qRE9I", "pFBx17AkW8s"];

const diseaseData = [
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
    id: "eczema",
    name: "Eczema (Atopic Dermatitis)",
    description:
      "A chronic skin condition that causes inflammation, itching, redness, and dryness.",
    symptoms: [
      "Dry, itchy skin",
      "Red patches",
      "Thickened or cracked skin",
      "Recurring flare-ups",
    ],
  },
  {
    id: "psoriasis",
    name: "Psoriasis",
    description:
      "An autoimmune disease that causes rapid buildup of skin cells, leading to scaling and inflammation.",
    symptoms: [
      "Red patches of skin",
      "Silvery-white scales",
      "Itchy or painful skin",
      "Cracks that may bleed",
    ],
  },
  {
    id: "fungal_infections",
    name: "Fungal Infections",
    description:
      "Skin infections caused by fungi, such as ringworm, athlete’s foot, or yeast infections.",
    symptoms: [
      "Itchy rash",
      "Red circular patches",
      "Scaling skin",
      "Blisters in some cases",
    ],
  },
  {
    id: "urticaria",
    name: "Hives (Urticaria)",
    description:
      "A skin reaction causing itchy welts, often triggered by allergens, stress, or medications.",
    symptoms: [
      "Raised, red bumps",
      "Itching",
      "Swelling of skin",
      "Burning or stinging sensation",
    ],
  },
  {
    id: "rosacea",
    name: "Rosacea",
    description:
      "A chronic skin condition that causes facial redness, swelling, and visible blood vessels.",
    symptoms: [
      "Facial redness",
      "Swollen red bumps",
      "Eye irritation",
      "Visible blood vessels",
    ],
  },
  {
    id: "vitiligo",
    name: "Vitiligo",
    description:
      "A condition where the skin loses pigment cells, leading to white patches on different parts of the body.",
    symptoms: [
      "White patches on skin",
      "Premature greying of hair",
      "Change in color inside mouth/nose",
    ],
  },
  {
    id: "melasma",
    name: "Melasma",
    description:
      "A skin condition that causes brown or gray-brown patches, usually on the face, often triggered by sun or hormones.",
    symptoms: [
      "Dark facial patches",
      "Uneven skin tone",
      "Worsening with sun exposure",
    ],
  },
  {
    id: "skin_allergies",
    name: "Skin Allergies",
    description:
      "Irritations triggered by allergens, chemicals, or food reactions.",
    symptoms: [
      "Itchy red rash",
      "Swelling",
      "Burning or stinging",
      "Peeling or blistering skin",
    ],
  },
  {
    id: "skin_cancer",
    name: "Skin Cancer",
    description:
      "Abnormal growth of skin cells, often caused by sun damage or UV exposure.",
    symptoms: [
      "New unusual growths",
      "Changes in existing moles",
      "Sores that don’t heal",
      "Bleeding or crusting skin spots",
    ],
  },
];

export default function SkinCare() {
    return (
        <div>
            <AppointmentFloat />
            <HeroUniversal
                promoTitle="One of India’s Leading Homeopathic Clinic Networks"
                subtitle="Homeopathic care crafted to heal and rejuvenate your skin from within."
                images={["/skinbanner.png"]}
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
            <Products products={products}/>
            <SuccessStory />
            <Testimonials testimonials={testimonials} />
        </div>
    )
}
