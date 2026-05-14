import {
  AlignLeft,
  ArrowRightIcon,
  Languages,
  Phone,
  User,
  Mail,
  PhoneCall,
  SendHorizontal,
  MessageCircle,
  Shield,
  Clock,
  Award,
  HeartHandshake,
  Lightbulb,
  BarChart,
} from "lucide-react";
import { Button } from "../../ui/button";
import { useState } from "react";
import axios from "axios";
// import { toast } from "sonner";
import { ClockLoader } from "react-spinners";
import { toast } from "@/hooks/use-toast";
import { Link, useLocation } from "react-router-dom";
import { Marquee } from "@/components/magicui/marquee";
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const ServicesRightSideContentEng = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const showComponentsPaths = [
    // CRS REGISTRATION PATH
    "/what-is-crs-bis-or-crs-registration",
    // SCHEME X PATH
    "/indian-bis-certification-under-scheme-x",
    // BISFM PATH - English
    "/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis",
    // BISFM PATH - Indonesian
    "/id/panduan-sertifikasi-bis-untuk-produsen-asing-bis-india",
    // BISFM PATH - Italian
    "/it/guida-alla-certificazione-bis-per-produttori-stranieri-bis-indiano",
    // BISFM PATH - Arabic
    "/ar/dalil-shahadat-bis-lilmusanein-alajnabiyin-bis-alhind",
    "/Blogs",
    "/bis-certificate-for-tin-ingots",
    "/bis-certificate-for-refined-zinc",
    "/bis-license-for-bunk-beds-Indian-bis",
    "/bis-license-for-storage-units-Indian-bis",
    "/bis-certification-in-indonesia",
    "/bis-certification-in-netherlands",
    "/bis-certificering-in-nederland",
    "/bis-certification-in-korea",
    "/bis-certification-in-japan",
    "/nihon-niokeru-bis-ninsho",
    "/bis-certification-in-italy",
    "/certificazione-bis-in-italia",
    "/bis-certification-in-spain",
    "/bis-certification-in-france",
    "/bis-certification-in-germany",
    "/bis-zertifizierung-in-deutschland",
    "/bis-certification-in-usa",
    "/bis-certification-in-vietnam",
    "/bis-certification-in-thailand",
    "/bis-certification-in-uae",
    "/bis-certification-in-qatar",
    "/bis-certification-in-bahrain",
    "/bis-certification-in-dubai",
    "/bis-certification-in-iran",
    "/bis-certification-in-iraq",
    // ISI MARK PATH
    "/a-guide-to-bis-certification-indian-bis",
    // BIS CERTIFICATION PATH
    "/what-is-bis-certificate-indian-bis",
    // MINISTRY UPDATES PATH
    "/ministry-updates/refined-zinc-qco-withdraw-order",
    "/ministry-updates/aluminium-and-aluminium-alloys-qco-withdraw-order",
    "/ministry-updates/copper-qco-withdraw-order",
    "/ministry-updates/tin-ingot-qco-withdraw-order",
    "/ministry-updates/refined-nickel-qco-withdraw-order",
    "/ministry-updates/nickel-qco-withdraw-order",
    "/ministry-updates/petrochemical-and-polymer-products-qco-withdraw-order",
    "/ministry-updates/scheme-x-qco-withdraw-order",
    "/ministry-updates/steel-products-amendment-2025",
    "/ministry-updates/toluene-qco-withdraw-order",
    "/ministry-updates/methyl-acrylate-ethyl-acrylate-qco-withdraw-order",
    "/ministry-updates/vinyl-acetate-monomer-qco-withdraw-order",
    "/ministry-updates/vinyl-chloride-monomer-qco-withdraw-order",
    "/ministry-updates/ethylene-dichloride-qco-withdraw-order",
    "/ministry-updates/p-xylene-qco-withdraw-order",
    "/ministry-updates/bis-in-house-lab-requirement",
    "/ministry-updates/bis-certification-update-asean-manufacturers",
    "/ministry-updates/bis-certification-update-is-9873-toy-safety",
    "/ministry-updates/furniture-qco-2026",
    "/ministry-updates/latest-furniture-qco-2026",
    "/ministry-updates/latest-bis-qco-update-for-import-products",
    "/ministry-updates/msme-exemption-qco-2026",
    "/ministry-updates/bis-crs-migration-is-iec-62368-1-2023",
    "/ministry-updates/aluminium-and-aluminium-alloy-products-bis-certification-latest-qco-2026",
    "/ministry-updates/bis-for-led-luminaires-2026",
    "/ministry-updates/cookware-qco-2026",
    "/ministry-updates/lab-qco-suspension-2026",
    "/ministry-updates/bis-qco-2026-is-302-part-1-2024-electrical-appliances",
    "/ministry-updates/n-butyl-acrylate-qco-update",
    "/ministry-updates/bis-marking-fee-latest-qco-update",
    "/ministry-updates/fmcs-manak-online-bis-certification",

    // BIS CERTIFICATION FAQ PATHS
    // Q1
    "/check-bis-certification",
    // Q2
    "/get-bis-certification",
    // Q3
    "/check-bis-certification-online",
    // Q4
    "/bis-certification-cost",
    // Q5
    "/get-bis-certification-in-india",
    // Q6
    "/apply-bis-certification",
    // Q7
    "/verify-bis-certification",
    // Q8
    "/download-bis-certificate-online",
    // Q9
    "/import-without-bis-certificate",
    // Q10
    "/importer-apply-for-bis-certificate-in-india",
    // Q11
    "/issue-bis-certificate",
    // Q12
    "/get-bis-certificate",
    // Q13
    "/trader-get-bis-certificate",
    // Q14
    "/apply-bis-certificate",
    // Q15
    "/how-to-get-bis-certificate",
    // Q16
    "/how-to-check-bis-certificate-online",
    // Q17
    "/download-bis-certificate-manakonline",
    // Q18
    "/how-to-download-bis-certificate",
    // Q19
    "/bis-certificate-import",
    // Q20
    "/bis-certificate-for-import-in-india",
    // Q21
    "/bis-certificate-who-can-apply",
    // Q22
    "/bis-certificate-for-import-cost",
    // Q23
    "/bis-certificate-vs-iso-certificate",
    // Q24
    "/can-bis-hallmark-be-fake",
    // Q25
    "/bis-isi-difference",
    // Q26
    "/bis-and-iso-difference",
    // Q27
    "/bis-vs-isi",
    // Q28
    "/bis-vs-iso",
    // Q29
    "/can-foreign-companies-get-bis-certification",

    // BIS CERTIFICATION PRODUCTS PATHS
    "/blogs/isi-products/bunk-beds-is-17636",
    "/blogs/isi-products/beds-is-17635",
    "/blogs/isi-products/work-chairs-is-17631",
    "/blogs/isi-products/chairs-and-stools-is-17632",
    "/blogs/isi-products/storage-unit-is-17634",
    "/blogs/isi-products/tables-&-desks-is-17633",
    "/blogs/isi-products/furniture",
    "/blogs/isi-products/furniture-with-electrically-motorized-parts",
    "/blogs/isi-products/skin-beauty-care-appliances",
    "/blogs/isi-products/personal-etransporters",
    "/blogs/isi-products/electrolysers",
    "/blogs/isi-products/vaporizers",
    "/blogs/isi-products/commercial-electric-hoods",
    "/blogs/isi-products/chipboard-screws-is-18508",
    "/blogs/isi-products/humidifiers",
    "/blogs/isi-products/food-grinding-machines",
    "/blogs/isi-products/fabric-streamers",
    "/blogs/isi-products/toilet-appliances",
    "/blogs/isi-products/welded-pipes-&-tubes-is-17876",
    "/blogs/isi-products/seamless-pipes-&-tubes-is-17875",
    "/blogs/isi-products/flashlight-is-2083",
    "/blogs/isi-products/electric-fence-energizers-is-302-2-76",
    "/blogs/isi-products/solar-water-heating-systems-is-16542",
    "/blogs/isi-products/solar-flat-plate-collector-is-12933",
    "/blogs/isi-products/chairs-and-stools-is-17632",
    "/blogs/isi-products/fibre-ropes-polyster-is-17609",
    "/blogs/isi-products/fibre-ropes-polyethylene-8674",
    "/blogs/isi-products/fibre-ropes-polyamide-is-4572",
    "/blogs/isi-products/steel-wire-ropes-is-1804",
    "/blogs/isi-products/mixed-polylefin-fibre-ropes-is-14929:2022",
    "/blogs/isi-products/compsite-synthetic-fibre-ropes-is-14928",
    "/blogs/isi-products/manila-ropes-is-1084",
    "/blogs/isi-products/flat-woven-webbing-slings-is-15041",
    "/blogs/isi-products/foot-warmers-and-heating-mats",
    "/blogs/isi-products/outdoor-barbecues",
    "/blogs/isi-products/fixed-immersion-heaters",
    "/blogs/isi-products/air-cleaning-appliances",
    "/blogs/isi-products/asbestos-cement-cable-conduits-and-troughs-is-8870",
    "/blogs/isi-products/combination-side-cutting-pliers-is-3650",
    "/blogs/isi-products/pipe-wrenches-is-4003",
    "/blogs/isi-products/ring-wrenches-is-2029",
    "/blogs/isi-products/open-jaw-wrenches-is-2028",
    "/blogs/isi-products/adjustable-wrenches-is-6149",
    "/blogs/isi-products/chain-pipe-wrenches-is-4123",
    "/blogs/isi-products/battery-operated-air-purifier-is-302",
    "/blogs/isi-products/foot-warmer-&-heating-mats-is-302",
    "/blogs/isi-products/battery-operated-vaccum-cleaners",
    "/blogs/isi-products/battery-operated-tootbrush-is-302",
    "/blogs/isi-products/battery-operated-massage-appliances",
    "/blogs/isi-products/cross-recessed-countersunk-head-wood-screws",
    "/blogs/isi-products/drywall-screws-is-18507",
    "/blogs/isi-products/raised-countersunk-head-screws-is-7486",
    "/blogs/isi-products/countersunk-flat-head-screws-is-7485",
    "/blogs/isi-products/hand-held-electric-engraving-tools",
    "/blogs/isi-products/battery-operated-shavers-trimmers-clippers-&similar-appliances",
    "/blogs/isi-products/vaccum-packaging-appliances",
    "/blogs/isi-products/commercial-electric-kitchen-machines",
    "/blogs/isi-products/electric-hot-plates",
    "/blogs/isi-products/commercial-electric-rinsing-sinks",
    "/blogs/isi-products/thermal-storage-room-heaters",
    "/blogs/isi-products/whirlpool-baths-and-whirlpool-spas",
    "/blogs/isi-products/oral-hygiene-appliances",
    "/blogs/isi-products/clothes-dryers",
    "/blogs/isi-products/food-waste-disposers",
    "/blogs/isi-products/electric-dishwashing-machines",
    "/blogs/isi-products/dishwashers",
    "/blogs/isi-products/slicing-machines",
    "/blogs/isi-products/pan-head-screws-is-7483",
    "/blogs/isi-products/tapping-screws-pan-head-is-18480-part-1",
    "/blogs/isi-products/tapping-screws-oval-head-is-18480-part-3",
    "/blogs/isi-products/tapping-screws-flat-head-is-18480-part-2",
    "/blogs/isi-products/ferrules-for-water-services-is-2692",
    "/blogs/isi-products/glass-fibre-reinforced-gypsum-panels-is-17400",
    "/blogs/isi-products/water-meter-domestic-type-is-779",
    "/blogs/isi-products/water-meter-bulk-type-is-2373",
    "/blogs/isi-products/transmission-devices-v-belts-is-14261",
    "/blogs/isi-products/mini-domestic-water-heaters-is-17150",
    "/blogs/isi-products/stationary-storage-water-heaters-is-2082",
    "/blogs/isi-products/telescopic-ball-bearing-is-17954",
    "/blogs/isi-products/electric-immersion-water-heaters-368",
  ];

  // Check if current path should show these components
  const shouldShowComponents = showComponentsPaths.includes(currentPath);

  return (
    <div className="flex flex-col gap-6 w-full md:w-[360px]">
      {/* BIS QCO UPDATES - Services Right Side Content*/}
      {shouldShowComponents && <BISQCOUpdatesServicesRightSideContentEng />}
      {/* Client Testimonial - Services Right Side Content*/}
      <ClientTestimonialServicesRightSideContentEng />
      {/* Why Choose Us - Services Right Side Content*/}
      <WhyChooseUsServicesRightSideContentEng />
      {/* Contact Form - Services Right Side Content*/}
      <ContactFormServicesRightSideContentEng />
    </div>
  );
};

export default ServicesRightSideContentEng;

const BISQCOUpdatesServicesRightSideContentEng = () => {
  const blogPosts = [
    {
      image:
        "https://images.unsplash.com/photo-1688578735352-9a6f2ac3b70a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "BIS certification for Work chairs",
      alt: "BIS certification for Work chairs",
      url: "/bis-qco-updates/bis-certificate-for-work-chairs",
    },
    {
      image:
        "https://shop.hofindia.com/cdn/shop/files/hof_Modern_1_a.jpg?v=1743406844&width=1946",
      title: "BIS certification for Chairs and stools",
      alt: "BIS certification for Chairs and stools",
      url: "/bis-qco-updates/bis-certificate-for-chairs-and-stools",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MCIfpfHsgrogddkI6G12hT4i6LwIPATLHg&s",
      title: "BIS Notification for Tables and desks",
      alt: "BIS Notification for Tables and desks",
      url: "/bis-qco-updates/bis-certificate-for-tables-and-desks",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/71rRReJmTiL._AC_UF894,1000_QL80_.jpg",
      title: "BIS Notification for Storage units",
      alt: "BIS Notification for Storage units",
      url: "/bis-qco-updates/bis-certificate-for-storage-units",
    },
    {
      image: "https://alephindia.in/images/isi/furniture-bunk-beds.png",
      title: "BIS Notification for Bunk beds",
      alt: "BIS Notification for Bunk beds",
      url: "/bis-qco-updates/bis-certificate-for-bunk-beds",
    },
    {
      image:
        "https://jharkhandstatenews.com/assets/admin/uploads/topstory_img/199879_1693229978.jpg",
      title: "BIS Notification for Solar DC Cable and Fire Survival Cable",
      alt: "BIS Notification for Solar DC Cable and Fire Survival Cable",
      url: "/bis-qco-updates/bis-certificate-for-solar-dc-cable-and-fire-survival-cable",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420886415/LD/HF/LZ/65909740/bis-certification-for-aluminium-alloy-forging-stock-and-forgings-alloy-24345.jpg",
      title:
        "BIS Notification for Wrought Aluminium and Aluminium Alloys, Forging Stock and Forgings",
      alt: "BIS Notification for Wrought Aluminium and Aluminium Alloys, Forging Stock and Forgings",
      url: "/bis-qco-updates/bis-certificate-for-wrought-aluminium-and-aluminium-alloys-forging-stock-and-forgings",
    },
    {
      image:
        "https://images.unsplash.com/photo-1651197122040-3ea0656161ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "BIS Notification for H Acid",
      alt: "BIS Notification for H Acid",
      url: "/bis-qco-updates/bis-certificate-for-h-acid",
    },
    {
      image:
        "https://images.unsplash.com/photo-1617155093730-a8bf47be792d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "BIS Notification for K Acid",
      alt: "BIS Notification for K Acid",
      url: "/bis-qco-updates/bis-certificate-for-k-acid",
    },
    {
      image:
        "https://media.istockphoto.com/id/940248330/photo/potassium-permanganate-sodium-sulfate-mixture.jpg?s=612x612&w=0&k=20&c=lhxvzbD2cVVOJKQyLIOqSaq9dlJTtDH07kHoBT5q7_4=",
      title: "BIS Notification for Vinyl Sulphone",
      alt: "BIS Notification for Vinyl Sulphone",
      url: "/bis-qco-updates/bis-certificate-for-vinyl-sulphone",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/71qI8OoNdtL._AC_UF1000,1000_QL80_.jpg",
      title: "BIS Notification for Electric Fence Energizers",
      alt: "BIS Notification for Electric Fence Energizers",
      url: "/bis-qco-updates/bis-certificate-for-electric-fence-energizers",
    },
    {
      image:
        "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "BIS Notification for Clothes Washing Machines",
      alt: "BIS Notification for Clothes Washing Machines",
      url: "/bis-qco-updates/bis-certificate-for-clothes-washing-machines",
    },
    {
      image: "https://m.media-amazon.com/images/I/31waXELONZL.jpg",
      title: "BIS Notification for Gypsum Plaster Boards",
      alt: "BIS Notification for Gypsum Plaster Boards",
      url: "/bis-qco-updates/bis-certificate-for-gypsum-plaster-boards",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/61pOnpX8BpL._AC_UF1000,1000_QL80_.jpg",
      title:
        "BIS Notification for Aluminium alloy tubes for irrigation purposes -welded tubes",
      alt: "BIS Notification for Aluminium alloy tubes for irrigation purposes -welded tubes",
      url: "/bis-qco-updates/bis-certificate-for-aluminium-alloy-tubes-for-irrigation-purposes-welded-tubes",
    },
    {
      image: "https://www.sunnysteel.com/img/extruded-finned-tube.jpg",
      title:
        "BIS Notification for Aluminium alloy tube for irrigation purposes – extruded tube",
      alt: "BIS Notification for Aluminium alloy tube for irrigation purposes – extruded tube",
      url: "/bis-qco-updates/bis-certificate-for-aluminium-alloy-tube-for-irrigation-purposes-extruded-tube",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVrUUdi1q8ZFnBqvx3vW5Ac03cUtUwR7N_A&s",
      title:
        "BIS Notification for EC Grade Aluminium Rod produced by Continuous Casting and Rolling",
      alt: "BIS Notification for EC Grade Aluminium Rod produced by Continuous Casting and Rolling",
      url: "/bis-qco-updates/bis-certificate-for-ec-grade-aluminium-rod-produced-by-continuous-casting-and-rolling",
    },
    {
      image:
        "https://media.istockphoto.com/id/1322355858/photo/aluminium-round-long-products-on-black-steel-surface.webp?a=1&b=1&s=612x612&w=0&k=20&c=I3k2F2cQSo5AW1qOQ5uxi2ROi-YJQoH47XzApxCP7qY=",
      title:
        "BIS Notification for Wrought aluminium and aluminium alloy bars, rods and sections",
      alt: "BIS Notification for Wrought aluminium and aluminium alloy bars, rods and sections",
      url: "/bis-qco-updates/bis-certificate-for-wrought-aluminium-and-aluminium-alloy-bars-rods-and-sections",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/3/EC/HR/GU/184505254/regular-gypsum-plasterboard.jpg",
      title: "BIS Notification for Gypsum Plaster Boards",
      alt: "BIS Notification for Gypsum Plaster Boards",
      url: "/bis-qco-updates/bis-certificate-for-gypsum-plaster-boards",
    },
  ];

  return (
    <div className="w-full md:w-[360px] p-6 rounded-lg bg-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      <div className="flex gap-2 items-center">
        <AlignLeft className="text-[#232327]" />
        <div className="text-xl font-geist font-semibold text-[#232327]">
          BIS QCO Updates
        </div>
      </div>
      <div className="relative h-[400px] overflow-hidden mt-5">
        <Marquee vertical pauseOnHover={true} className="[--duration:20s]">
          {blogPosts.map((post, index) => (
            <div key={index} className="mb-5">
              <div className="group flex gap-4 transition-all duration-300 h-20">
                {/* Image Container - Fixed width and height */}
                <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.alt || post.title}
                    title={post.alt || post.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg";
                    }}
                  />
                </div>

                {/* Content Container - Flexible with consistent structure */}
                <div className="flex-1 flex flex-col justify-between h-20 py-1">
                  {/* Title - Takes available space but with consistent line clamping */}
                  <div className="flex-1">
                    <p className="line-clamp-2 font-geist text-sm font-normal text-zinc-900 leading-tight">
                      {post.title}
                    </p>
                  </div>

                  {/* Read More Button - Always at bottom */}
                  <div className="flex-shrink-0">
                    <Link to={post.url}>
                      <Button
                        variant="link"
                        className="text-blue-900 font-geist hover:text-blue-950 p-0 h-auto font-normal text-sm"
                      >
                        Read More
                        <ArrowRightIcon className="ml-1 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Separator - consistent spacing */}
              {index < blogPosts.length - 1 && (
                <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
              )}
            </div>
          ))}
        </Marquee>
      </div>

      {/* View More Button */}
      <div className="mt-5 w-full flex justify-center">
        <Link to="/bis-qco-updates" className="w-full">
          <Button
            variant="outline"
            className="font-geist w-full bg-[#212126] hover:bg-[#212126]/90 text-white border-gray-300 hover:bg-gray-100"
          >
            View All Updates
            <ArrowRightIcon className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

const ClientTestimonialServicesRightSideContentEng = () => {
  const testimonials = [
    {
      name: "Ms.Eliyawati",
      role: "PT Quty Karunia, BIS Licensee in Vietnam",
      content:
        "Sun Certifications India provided excellent BIS Certification services. Their unparalleled service and sincerity gained our trust. One of the best BIS consultants in India!",
    },
    {
      name: "Ms.Belle",
      role: "Thantawan Industries Ltd, BIS Licensee in Thailand",
      content:
        "Sun Certifications India supported us throughout the BIS certification process. Their responsive customer service and punctuality are exceptional. Highly recommend for hassle-free BIS certification.",
    },
    {
      name: "Ms.Jun Min Sim",
      role: "Leaderart Industries, BIS Licensee in Malaysia",
      content:
        "Sun Certifications India helped us acquire BIS Certification, doubling our engagement in India. Their services are fast, genuine, and up-to-date with latest BIS norms.",
    },
    {
      name: "Ms. Fatima",
      role: "Aluminium Bahrain (ALBA), BIS Licensee in Bahrain",
      content:
        "Excellent BIS certification support, highly reliable consultants.",
    },
    {
      name: "Mr. Yousef",
      role: "Bahrain Aluminium Manufacturing Company, BIS Licensee in Bahrain",
      content: "Smooth BIS registration process with expert consultants.",
    },
    {
      name: "Mr. Satoshi",
      role: "Daiki Aluminium Japan, BIS Licensee in Japan",
      content: "Efficient BIS license assistance, great consultants.",
    },
    {
      name: "Ms. Amanda",
      role: "Honeywell, BIS Licensee in USA",
      content: "Professional BIS certificate guidance, very satisfied.",
    },
    {
      name: "Ms. Amanda",
      role: "Trimble Navigation, BIS Licensee in USA",
      content: "Seamless BIS certification and registration support.",
    },
    {
      name: "Ms. Martina",
      role: "Remsa Italia, BIS Licensee in Italy",
      content: "Helpful BIS consultants, simplified license process.",
    },
    {
      name: "Ms. Nikola",
      role: "Aquazzura, BIS Licensee in Italy",
      content:
        "We got our BIS certificate well within the timelines and at affordable prices, great work team Sun!",
    },
    {
      name: "Ms. Ayu",
      role: "PT Quty, BIS Licensee in Indonesia",
      content: "Excellent BIS registration service, highly recommended.",
    },
    {
      name: "Mr. Huy",
      role: "Danu Vina, BIS Licensee in Vietnam",
      content: "Reliable BIS license consultants, fast process.",
    },
    {
      name: "Mr. Minh",
      role: "Hanh My Production Company, BIS Licensee in Vietnam",
      content: "Expert BIS consultants, certification made easy.",
    },
    {
      name: "Ms. Hoa",
      role: "Sedo Vina, BIS Licensee in Vietnam",
      content: "Smooth BIS certificate registration, great support.",
    },
    {
      name: "Ms. Hana",
      role: "Misumi Japan, BIS Licensee in Japan",
      content: "Trusted BIS consultants, quick certification process.",
    },
    {
      name: "Ms. Nok",
      role: "Thantawan Public Industry Company, BIS Licensee in Thailand",
      content: "Professional BIS certification service, very efficient.",
    },
    {
      name: "Mr. Luis",
      role: "Cortizo Aluminios, BIS Licensee in Spain",
      content: "Excellent BIS registration and license guidance.",
    },
    {
      name: "Ms. Aisha",
      role: "Midal Cables, BIS Licensee in Bahrain",
      content: "Expert BIS consultants, smooth certification process.",
    },
    {
      name: "Ms. Aisha",
      role: "Nobilia Kitchens, BIS Licensee in Bahrain",
      content: "Reliable BIS certificate registration support.",
    },
  ];

  return (
    <div className="w-full md:w-[360px] rounded-lg overflow-hidden bg-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      <div className="pt-6 px-6 pb-4">
        <div className="flex gap-2 items-center">
          <Languages className="text-[#232327]" />
          <div className="text-xl font-geist font-semibold text-[#232327]">
            Client Testimonials
          </div>
        </div>
        <div className="mt-8 mb-5 rounded-lg h-[450px] overflow-hidden">
          <Marquee
            vertical
            repeat={2}
            pauseOnHover={true}
            className="[--duration:60s]"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group mb-6">
                <div className="bg-white p-4 rounded-lg border border-gray-300 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="mb-3">
                    <div className="font-geist font-bold text-neutral-800 text-base">
                      {testimonial.name}
                    </div>
                    <p className="text-sm text-neutral-600 font-geist mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                  <p className="italic text-neutral-700 font-geist text-sm leading-relaxed font-medium">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

const WhyChooseUsServicesRightSideContentEng = () => {
  const stats = {
    experience: { value: "10+", label: "Years Exp." },
    clients: { value: "1599+", label: "Our Clients" },
    successRate: { value: "100%", label: "Success Rate" },
    countries: { value: "20+", label: "Countries Served" },
  };

  const reasons = [
    {
      title: "Expert Guidance",
      description:
        "Our team brings 10e4+ years of experience in CDSCO and BIS compliance.",
    },
    {
      title: "Time Efficient",
      description:
        "We reduce approval time by up to 40% with streamlined processes.",
    },
    {
      title: "Proven Success",
      description: "100% success rate with 1500+ successful registrations.",
    },
    {
      title: "Client-Centric",
      description: "Dedicated account manager ensuring personalized service.",
    },
  ];

  const performance = {
    title: "Our Performance",
    metrics: {
      speed: { label: "Speed", value: "95" },
      success: { label: "Success", value: "99" },
      satisfaction: { label: "Satisfaction", value: "98" },
    },
  };

  const reasonIcons = {
    0: <Shield className="h-8 w-8 text-blue-600" />,
    1: <Clock className="h-8 w-8 text-emerald-600" />,
    2: <Award className="h-8 w-8 text-amber-600" />,
    3: <HeartHandshake className="h-8 w-8 text-purple-600" />,
  };

  return (
    <div className="w-full md:w-[360px] p-5 rounded-lg bg-gradient-to-br from-slate-50 to-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      {/* Header with Animation */}
      <div className="flex gap-2 items-center">
        <Lightbulb className="text-[#232327]" />
        <div className="text-xl font-geist font-semibold text-[#232327]">
          Why Choose Us
        </div>
      </div>

      {/* Highlight Stats */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="bg-white p-2 rounded-lg border border-gray-200 text-center hover:border-blue-200">
          <div className="text-2xl font-bold text-blue-600 font-geist">
            {stats.experience.value}
          </div>
          <p className="text-xs text-gray-600 font-geist">
            {stats.experience.label}
          </p>
        </div>
        <div className="bg-white p-2 rounded-lg border border-gray-200 text-center hover:border-emerald-200">
          <div className="text-2xl font-bold text-emerald-600 font-geist">
            {stats.clients.value}
          </div>
          <p className="text-xs text-gray-600 font-geist">
            {stats.clients.label}
          </p>
        </div>
        <div className="bg-white p-2 rounded-lg border border-gray-200 text-center hover:border-amber-200">
          <div className="text-2xl font-bold text-amber-600 font-geist">
            {stats.successRate.value}
          </div>
          <p className="text-xs text-gray-600 font-geist">
            {stats.successRate.label}
          </p>
        </div>
        <div className="bg-white p-2 rounded-lg border border-gray-200 text-center hover:border-purple-200">
          <div className="text-2xl font-bold text-purple-600 font-geist">
            {stats.countries.value}
          </div>
          <p className="text-xs text-gray-600 font-geist">
            {stats.countries.label}
          </p>
        </div>
      </div>

      {/* Reasons List */}
      <div className="mt-4 space-y-3">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="group bg-white rounded-lg p-3 border border-gray-200 hover:border-blue-200"
          >
            <div className="flex gap-3 items-start">
              <div className="p-1.5 bg-gray-50 rounded-lg group-hover:bg-blue-50">
                {reasonIcons[index]}
              </div>
              <div>
                <div className="font-geist font-semibold text-gray-900 text-sm">
                  {reason.title}
                </div>
                <p className="text-xs text-gray-600 font-geist">
                  {reason.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Simple Performance */}
      <div className="mt-4 bg-blue-50 rounded-lg p-3 border border-blue-100">
        <div className="flex items-center gap-1 mb-2">
          <BarChart className="h-4 w-4 text-blue-600" />
          <span className="text-sm font-medium text-gray-900 font-geist">
            {performance.title}
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="text-center">
            <div className="h-1.5 w-full bg-gray-100 rounded-full mb-1">
              <div
                className="h-full bg-blue-600 rounded-full"
                style={{ width: `${performance.metrics.speed.value}%` }}
              ></div>
            </div>
            <span className="text-xs text-gray-600 font-geist">
              {performance.metrics.speed.label}
            </span>
          </div>
          <div className="text-center">
            <div className="h-1.5 w-full bg-gray-100 rounded-full mb-1">
              <div
                className="h-full bg-emerald-600 rounded-full"
                style={{ width: `${performance.metrics.success.value}%` }}
              ></div>
            </div>
            <span className="text-xs text-gray-600 font-geist">
              {performance.metrics.success.label}
            </span>
          </div>
          <div className="text-center">
            <div className="h-1.5 w-full bg-gray-100 rounded-full mb-1">
              <div
                className="h-full bg-amber-600 rounded-full"
                style={{ width: `${performance.metrics.satisfaction.value}%` }}
              ></div>
            </div>
            <span className="text-xs text-gray-600 font-geist">
              {performance.metrics.satisfaction.label}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactFormServicesRightSideContentEng = () => {
  const [loading, setLoading] = useState(false);

  // Function to get page name based on URL
  const getPageName = () => {
    const path = window.location.pathname;
    if (path.includes("/what-is-crs-bis-or-crs-registration"))
      return "CRS Registration";
    if (path.includes("/ja/crs-bis-toha-nani-ka-crs-toroku"))
      return "CRS Registration Japanese";
    if (path.includes("/th/crs-bis-khue-a-rai-rab-phit-thab-crs"))
      return "CRS Registration Thai";
    if (path.includes("/ko/crs-bis-i-mueos-inga-crs-deunglog"))
      return "CRS Registration Korean";
    if (path.includes("/id/apa-itu-crs-bis-atau-registrasi-crs"))
      return "CRS Registration Indonesian";
    if (path.includes("/es/que-es-crs-bis-o-registro-crs"))
      return "CRS Registration Spanish";
    if (path.includes("/fr/quest-ce-que-le-crs-bis-ou-lenregistrement-crs"))
      return "CRS Registration French";
    if (path.includes("/it/cose-il-crs-bis-o-registrazione-crs"))
      return "CRS Registration Italian";
    if (path.includes("/nl/wat-is-crs-bis-of-crs-registratie"))
      return "CRS Registration Dutch";
    if (path.includes("/de/was-ist-crs-bis-oder-crs-registrierung"))
      return "CRS Registration German";
    if (path.includes("/vi/crs-bis-la-gi-hoac-dang-ky-crs"))
      return "CRS Registration Vietnamese";
    if (path.includes("/indian-bis-certification-under-scheme-x"))
      return "Scheme X";
    if (path.includes("/Blogs")) return "Latest Blogs";
    if (path.includes("/bis-certificate-for-tin-ingots"))
      return "Tin Ingot Blog";
    if (path.includes("/bis-certificate-for-refined-zinc"))
      return "Refined Zinc Blog";
    if (path.includes("/bis-license-for-bunk-beds-Indian-bis"))
      return "Bunk Beds Blog";
    if (path.includes("/bis-license-for-storage-units-Indian-bis"))
      return "Storage Units Blog";
    if (path.includes("/bis-certification-in-indonesia"))
      return "Indonesia Blog";
    if (path.includes("/bis-certification-in-netherlands"))
      return "Netherlands Blog";
    if (path.includes("/bis-certificering-in-nederland"))
      return "Netherlands Blog Dutch";
    if (path.includes("/bis-certification-in-korea")) return "Korea Blog";
    if (path.includes("/bis-certification-in-japan")) return "Japan Blog";
    if (path.includes("/nihon-niokeru-bis-ninsho"))
      return "Japan Blog Japanese";
    if (path.includes("/bis-certification-in-italy")) return "Italy Blog";
    if (path.includes("/certificazione-bis-in-italia"))
      return "Italy Blog Italian";
    if (path.includes("/bis-certification-in-spain")) return "Spain Blog";
    if (path.includes("/bis-certification-in-france")) return "France Blog";
    if (path.includes("/bis-certification-in-germany")) return "Germany Blog";
    if (path.includes("/bis-zertifizierung-in-deutschland"))
      return "Germany Blog German";
    if (path.includes("/bis-certification-in-usa")) return "USA Blog";
    if (path.includes("/bis-certification-in-vietnam")) return "Vietnam Blog";
    if (path.includes("/bis-certification-in-thailand")) return "Thailand Blog";
    if (path.includes("/bis-certification-in-uae")) return "UAE Blog";
    if (path.includes("/bis-certification-in-qatar")) return "Qatar Blog";
    if (path.includes("/bis-certification-in-bahrain")) return "Bahrain Blog";
    if (path.includes("/bis-certification-in-dubai")) return "Dubai Blog";
    if (path.includes("/bis-certification-in-iran")) return "Iran Blog";
    if (path.includes("/bis-certification-in-iraq")) return "Iraq Blog";
    // ISI MARK PATH
    if (path.includes("/a-guide-to-bis-certification-indian-bis"))
      return "ISI Mark - English Page";
    // BIS CERTIFICATION PATH
    if (path.includes("/what-is-bis-certificate-indian-bis"))
      return "BIS Certification - English Page";

    // BISFM (FMCS - Foreign Manufacturers) - Multi-language paths
    // BISFM PATH - English
    if (
      path.includes(
        "/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
      )
    )
      return "BIS FMCS Certification - English Page";
    // BISFM PATH - Indonesian
    if (
      path.includes(
        "/id/panduan-sertifikasi-bis-untuk-produsen-asing-bis-india"
      )
    )
      return "BIS FMCS Certification - Indonesian Page";
    // BISFM PATH - Italian
    if (
      path.includes(
        "/it/guida-alla-certificazione-bis-per-produttori-stranieri-bis-indiano"
      )
    )
      return "BIS FMCS Certification - Italian Page";
    // BISFM PATH - Arabic
    if (
      path.includes("/ar/dalil-shahadat-bis-lilmusanein-alajnabiyin-bis-alhind")
    )
      return "BIS FMCS Certification - Arabic Page";

    // MINISTRY UPDATES PATH
    // Refined Zinc QCO Withdrawal Order
    if (path.includes("/ministry-updates/refined-zinc-qco-withdraw-order"))
      return "Refined Zinc QCO Withdrawal Order - Ministry Updates (English)";

    // Aluminium and Aluminium Alloys QCO Withdrawal Order
    if (
      path.includes(
        "/ministry-updates/aluminium-and-aluminium-alloys-qco-withdraw-order"
      )
    )
      return "Aluminium and Aluminium Alloys QCO Withdrawal Order - Ministry Updates (English)";

    // Copper QCO Withdrawal Order
    if (path.includes("/ministry-updates/copper-qco-withdraw-order"))
      return "Copper QCO Withdrawal Order - Ministry Updates (English)";

    // Tin Ingot QCO Withdrawal Order
    if (path.includes("/ministry-updates/tin-ingot-qco-withdraw-order"))
      return "Tin Ingot QCO Withdrawal Order - Ministry Updates (English)";

    // Refined Nickel QCO Withdrawal Order
    if (path.includes("/ministry-updates/refined-nickel-qco-withdraw-order"))
      return "Refined Nickel QCO Withdrawal Order - Ministry Updates (English)";

    // Nickel Powder QCO Withdrawal Order
    if (path.includes("/ministry-updates/nickel-qco-withdraw-order"))
      return "Nickel Powder QCO Withdrawal Order - Ministry Updates (English)";

    // Petrochemical & Polymer Products QCO Withdrawal Order
    if (
      path.includes(
        "/ministry-updates/petrochemical-and-polymer-products-qco-withdraw-order"
      )
    )
      return "Petrochemical & Polymer Products QCO Withdrawal Order - Ministry Updates (English)";

    // Scheme X QCO Withdrawal Order (Machinery & Electrical Equipment Safety)
    if (path.includes("/ministry-updates/scheme-x-qco-withdraw-order"))
      return "Machinery & Electrical Equipment Safety (OTR) Order Withdrawn - Ministry Updates (English)";

    // Steel Products Amendment Order 2025
    if (path.includes("/ministry-updates/steel-products-amendment-2025"))
      return "Steel Products Amendment Order 2025 - Ministry Updates (English)";

    // Toluene QCO Withdrawal Order
    if (path.includes("/ministry-updates/toluene-qco-withdraw-order"))
      return "Toluene QCO Withdrawal Order - Ministry Updates (English)";

    // Methyl Acrylate, Ethyl Acrylate QCO Withdrawal Order
    if (
      path.includes(
        "/ministry-updates/methyl-acrylate-ethyl-acrylate-qco-withdraw-order"
      )
    )
      return "Methyl Acrylate, Ethyl Acrylate QCO Withdrawal Order - Ministry Updates (English)";

    // Vinyl Acetate Monomer QCO Withdrawal Order
    if (
      path.includes(
        "/ministry-updates/vinyl-acetate-monomer-qco-withdraw-order"
      )
    )
      return "Vinyl Acetate Monomer QCO Withdrawal Order - Ministry Updates (English)";

    // Vinyl Chloride Monomer QCO Withdrawal Order
    if (
      path.includes(
        "/ministry-updates/vinyl-chloride-monomer-qco-withdraw-order"
      )
    )
      return "Vinyl Chloride Monomer QCO Withdrawal Order - Ministry Updates (English)";

    // Ethylene Dichloride QCO Withdrawal Order
    if (
      path.includes("/ministry-updates/ethylene-dichloride-qco-withdraw-order")
    )
      return "Ethylene Dichloride QCO Withdrawal Order - Ministry Updates (English)";

    // P-Xylene QCO Withdrawal Order
    if (path.includes("/ministry-updates/p-xylene-qco-withdraw-order"))
      return "P-Xylene QCO Withdrawal Order - Ministry Updates (English)";

    // BIS Removes Mandatory In-House Laboratory Requirement
    if (path.includes("/ministry-updates/bis-in-house-lab-requirement"))
      return "BIS Removes Mandatory In-House Laboratory Requirement - Ministry Updates (English)";

    // BIS Certification Update for ASEAN Manufacturers
    if (path.includes("/ministry-updates/bis-certification-update-asean-manufacturers"))
      return "BIS Certification Update: Restrictions Lifted for ASEAN & Overseas Manufacturers - Ministry Updates (English)";

    // Latest BIS Implementation Guidelines for IS 9873 Toy Safety
    if (path.includes("/ministry-updates/bis-certification-update-is-9873-toy-safety"))
      return "Latest BIS Implementation Guidelines for IS 9873 (Part 1):2025 – Toy Safety Standard - Ministry Updates (English)";

    // Furniture QCO Amendment Order 2026
    if (path.includes("/ministry-updates/furniture-qco-2026"))
      return "Furniture QCO Amendment Order 2026 - Ministry Updates (English)";

    // Furniture QCO Amendment Order latest (Complete Guide)
    if (path.includes("/ministry-updates/latest-furniture-qco-2026"))
      return "Furniture QCO Amendment Order 2026 – Complete Guide - Ministry Updates (English)";

    // DPIIT Notification 2026 – BIS QCO Exemption for Transitional Imports
    if (path.includes("/ministry-updates/latest-bis-qco-update-for-import-products"))
      return "DPIIT Notification 2026: Major Relief on BIS QCO Compliance for Transitional Imports - Ministry Updates (English)";

    // MSME Exemption Under QCO 2026
    if (path.includes("/ministry-updates/msme-exemption-qco-2026"))
      return "MSME Exemption Under QCO 2026 – New Quality Control Order Amendment Explained - Ministry Updates (English)";

    // BIS CRS Migration to IS/IEC 62368-1:2023
    if (
      path.includes(
        "/ministry-updates/bis-crs-migration-is-iec-62368-1-2023"
      )
    )
      return "BIS CRS Migration to IS/IEC 62368-1:2023 – Latest BIS Notification - Ministry Updates (English)";

    // Aluminium and Aluminium Alloy Products (Quality Control) Order, 2026
    if (
      path.includes(
        "/ministry-updates/aluminium-and-aluminium-alloy-products-bis-certification-latest-qco-2026"
      )
    )
      return "BIS Certification for Aluminium and Aluminium Alloy Products | QCO Compliance 2026 - Ministry Updates (English)";
    if (path.includes("/ministry-updates/bis-for-led-luminaires-2026"))
      return "BIS Notification on Revised Standards for LED Luminaires - Ministry Updates (English)";

    if (path.includes("/ministry-updates/cookware-qco-2026"))
      return "Cookware, Utensils and Cans for Foods and Beverages QCO 2026 - Ministry Updates (English)";

    if (path.includes("/ministry-updates/lab-qco-suspension-2026"))
      return "Linear Alkyl Benzene (LAB) QCO 2022 & 2026 Suspension Update - Ministry Updates (English)";

    if (
      path.includes(
        "/ministry-updates/bis-qco-2026-is-302-part-1-2024-electrical-appliances"
      )
    )
      return "BIS QCO 2026 for Electrical Appliances - IS 302 (Part 1): 2024 - Ministry Updates (English)";

    if (path.includes("/ministry-updates/n-butyl-acrylate-qco-update"))
      return "FMCS Digital Transformation: MANAK Online Portal - Ministry Updates (English)";

    if (path.includes("/ministry-updates/bis-marking-fee-latest-qco-update"))
      return "BIS Fee Concessions for MSMEs, Startups & Women Entrepreneurs - Ministry Updates (English)";

    if (path.includes("/ministry-updates/fmcs-manak-online-bis-certification"))
      return "FMCS Digital Transformation: MANAK Online Portal for BIS Certification - Ministry Updates (English)";

    // BIS CERTIFICATION FAQ PATHS
    // Q1
    if (path.includes("/check-bis-certification"))
      return "Check BIS Certification - English Page";
    // Q2
    if (path.includes("/get-bis-certification"))
      return "How to get BIS Certification - English Page";
    // Q3
    if (path.includes("/check-bis-certification-online"))
      return "How to check BIS Certification Online - English Page";
    // Q4
    if (path.includes("/bis-certification-cost"))
      return "How much does BIS Certification Cost - English Page";
    // Q5
    if (path.includes("/get-bis-certification-in-india"))
      return "How to get BIS Certification in India - English Page";

    // Q6
    if (path.includes("/apply-bis-certification"))
      return "How to apply BIS Certification - English Page";

    // Q7
    if (path.includes("/verify-bis-certification"))
      return "How to verify BIS Certification - English Page";

    // Q8
    if (path.includes("/download-bis-certificate-online"))
      return "Can we download BIS Certificate Online - English Page";

    // Q9
    if (path.includes("/import-without-bis-certificate"))
      return "Can I import without BIS Certificate - English Page";

    // Q10
    if (path.includes("/importer-apply-for-bis-certificate-in-india"))
      return "Can importer apply for BIS Certificate in India - English Page";

    // Q11
    if (path.includes("/issue-bis-certificate"))
      return "Who can issue BIS Certificate - English Page";

    // Q12
    if (path.includes("/get-bis-certificate"))
      return "Who can get BIS Certificate - English Page";

    // Q13
    if (path.includes("/trader-get-bis-certificate"))
      return "Can a trader get BIS Certificate - English Page";

    // Q14
    if (path.includes("/apply-bis-certificate"))
      return "Who can apply for BIS Certificate - English Page";

    // Q15
    if (path.includes("/how-to-get-bis-certificate"))
      return "How to get BIS Certificate - English Page";

    // Q16
    if (path.includes("/how-to-check-bis-certificate-online"))
      return "How to check BIS Certificate Online - English Page";

    // Q17
    if (path.includes("/download-bis-certificate-manakonline"))
      return "How to download BIS Certificate from Manakonline - English Page";

    // Q18
    if (path.includes("/how-to-download-bis-certificate"))
      return "How to download BIS Certificate - English Page";

    // Q19
    if (path.includes("/bis-certificate-import"))
      return "How to get BIS Certificate for Import - English Page";

    // Q20
    if (path.includes("/bis-certificate-for-import-in-india"))
      return "How to get BIS Certificate for Import in India - English Page";

    // Q21
    if (path.includes("/bis-certificate-who-can-apply"))
      return "BIS Certificate Who Can Apply - English Page";

    // Q22
    if (path.includes("/bis-certificate-for-import-cost"))
      return "BIS Certificate For Import Cost - English Page";

    // Q23
    if (path.includes("/bis-certificate-vs-iso-certificate"))
      return "BIS Certificate Vs ISO Certificate - English Page";

    // Q24
    if (path.includes("/can-bis-hallmark-be-fake"))
      return "Can BIS Hallmark Be Fake - English Page";

    // Q25
    if (path.includes("/bis-isi-difference"))
      return "BIS And ISI Difference - English Page";

    // Q26
    if (path.includes("/bis-and-iso-difference"))
      return "BIS And ISO Difference - English Page";

    // Q27
    if (path.includes("/bis-vs-isi")) return "BIS Vs ISI - English Page";

    // Q28
    if (path.includes("/bis-vs-iso")) return "BIS Vs ISO - English Page";

    // Q29
    if (path.includes("/can-foreign-companies-get-bis-certification"))
      return "Can Foreign Companies Get BIS Certification - English Page";

    // BIS CERTIFICATION PRODUCTS PATHS
    if (path.includes("/blogs/isi-products/bunk-beds-is-17636"))
      return "BIS Certificate for Bunk Beds - English Page";
    if (path.includes("/blogs/isi-products/beds-is-17635"))
      return "BIS Certificate for Beds - English Page";
    if (path.includes("/blogs/isi-products/work-chairs-is-17631"))
      return "BIS Certificate for Work Chairs - English Page";
    if (path.includes("/blogs/isi-products/chairs-and-stools-is-17632"))
      return "BIS Certificate for Chair & Stools - English Page";
    if (path.includes("/blogs/isi-products/storage-unit-is-17634"))
      return "BIS Certificate for Storage Unit - English Page";
    if (path.includes("/blogs/isi-products/tables-&-desks-is-17633"))
      return "BIS Certificate for Tables & Desks - English Page";
    if (path.includes("/blogs/isi-products/furniture-with-electrically-motorized-parts"))
      return "BIS Certificate for Furniture with Electrically Motorized Parts - English Page";
    if (path.includes("/blogs/isi-products/skin-beauty-care-appliances"))
      return "BIS Certificate for Skin Beauty Care Appliances - English Page";
    if (path.includes("/blogs/isi-products/personal-etransporters"))
      return "BIS Certificate for Personal-eTransporters - English Page";
    if (path.includes("/blogs/isi-products/electrolysers"))
      return "BIS Certificate for Electrolysers - English Page";
    if (path.includes("/blogs/isi-products/vaporizers"))
      return "BIS Certificate for Vaporizers - English Page";
    if (path.includes("/blogs/isi-products/commercial-electric-hoods"))
      return "BIS Certificate for Commercial Electric Hoods - English Page";
    if (path.includes("/blogs/isi-products/chipboard-screws-is-18508"))
      return "BIS Certificate for Chipboard Screws - English Page";
    if (path.includes("/blogs/isi-products/humidifiers"))
      return "BIS Certificate for Humidifiers - English Page";
    if (path.includes("/blogs/isi-products/food-grinding-machines"))
      return "BIS Certificate for Food Grinding Machines - English Page";
    if (path.includes("/blogs/isi-products/fabric-streamers"))
      return "BIS Certificate for Fabric Steamers - English Page";
    if (path.includes("/blogs/isi-products/toilet-appliances"))
      return "BIS Certificate for Toilet Appliances - English Page";
    if (path.includes("/blogs/isi-products/furniture"))
      return "BIS Certificate for Furniture - English Page";
    if (path.includes("/blogs/isi-products/welded-pipes-&-tubes-is-17876"))
      return "BIS Certificate for Welded Pipes & Tubes - English Page";
    if (path.includes("/blogs/isi-products/seamless-pipes-&-tubes-is-17875"))
      return "BIS Certificate for Seamless Pipes & Tubes - English Page";
    if (path.includes("/blogs/isi-products/flashlight-is-2083"))
      return "BIS Certificate for Flashlight - English Page";
    if (
      path.includes("/blogs/isi-products/electric-fence-energizers-is-302-2-76")
    )
      return "BIS Certificate for Electric Fence Energizers - English Page";
    if (
      path.includes("/blogs/isi-products/solar-water-heating-systems-is-16542")
    )
      return "BIS Certificate for Solar Water Heating Systems - English Page";
    if (
      path.includes("/blogs/isi-products/solar-flat-plate-collector-is-12933")
    )
      return "BIS Certificate for Solar Flat Plate Collector - English Page";
    if (path.includes("/blogs/isi-products/chairs-and-stools-is-17632"))
      return "BIS Certificate for General Purpose Chairs and Stools - English Page";
    if (path.includes("/blogs/isi-products/fibre-ropes-polyster-is-17609"))
      return "BIS Certificate for Fibre Ropes of Polyester - English Page";
    if (path.includes("/blogs/isi-products/fibre-ropes-polyethylene-8674"))
      return "BIS Certificate for Fibre Ropes - Polyethylene - English Page";
    if (path.includes("/blogs/isi-products/fibre-ropes-polyamide-is-4572"))
      return "BIS Certificate for Fibre Ropes - Polyamide - English Page";
    if (path.includes("/blogs/isi-products/steel-wire-ropes-is-1804"))
      return "BIS Certificate for Steel Wire Ropes - English Page";
    if (
      path.includes(
        "/blogs/isi-products/mixed-polylefin-fibre-ropes-is-14929:2022"
      )
    )
      return "BIS Certificate for Mixed Polyolefin Fibre Ropes - English Page";
    if (
      path.includes(
        "/blogs/isi-products/compsite-synthetic-fibre-ropes-is-14928"
      )
    )
      return "BIS Certificate for Composite Synthetic Fibre Ropes - English Page";
    if (path.includes("/blogs/isi-products/manila-ropes-is-1084"))
      return "BIS Certificate for Manila Ropes - English Page";
    if (path.includes("/blogs/isi-products/flat-woven-webbing-slings-is-15041"))
      return "BIS Certificate for Flat Woven Webbing Slings - English Page";
    if (path.includes("/blogs/isi-products/foot-warmers-and-heating-mats"))
      return "BIS Certificate for Foot Warmers & Heating Mats - English Page";
    if (path.includes("/blogs/isi-products/outdoor-barbecues"))
      return "BIS Certificate for Outdoor Barbecues - English Page";
    if (path.includes("/blogs/isi-products/electric-immersion-water-heaters-368"))
      return "BIS Certificate for Electric Immersion Water Heaters - English Page";
    if (path.includes("/blogs/isi-products/fixed-immersion-heaters"))
      return "BIS Certificate for Fixed Immersion Heaters - English Page";
    if (
      path.includes(
        "/blogs/isi-products/combination-side-cutting-pliers-is-3650"
      )
    )
      return "BIS Certificate for Combination Side Cutting Pliers - English Page";
    if (path.includes("/blogs/isi-products/pipe-wrenches-is-4003"))
      return "BIS Certificate for Pipe Wrenches - Heavy Duty - English Page";
    if (path.includes("/blogs/isi-products/ring-wrenches-is-2029"))
      return "BIS Certificate for Ring Wrenches - English Page";
    if (path.includes("/blogs/isi-products/open-jaw-wrenches-is-2028"))
      return "BIS Certificate for Open-Jaw Wrenches - English Page";
    if (path.includes("/blogs/isi-products/adjustable-wrenches-is-6149"))
      return "BIS Certificate for Adjustable Wrenches - English Page";
    if (path.includes("/blogs/isi-products/chain-pipe-wrenches-is-4123"))
      return "BIS Certificate for Chain Pipe Wrenches - English Page";
    if (
      path.includes("/blogs/isi-products/battery-operated-air-purifier-is-302")
    )
      return "BIS Certificate for Battery Operated Air Purifier - English Page";
    if (path.includes("/blogs/isi-products/air-cleaning-appliances"))
      return "BIS Certification for Air-Cleaning Appliances - English Page";
    if (
      path.includes(
        "/blogs/isi-products/asbestos-cement-cable-conduits-and-troughs-is-8870"
      )
    )
      return "BIS Certification for Asbestos Cement Cable Conduits and Troughs - English Page";
    if (path.includes("/blogs/isi-products/foot-warmer-&-heating-mats-is-302"))
      return "BIS Certificate for Foot Warmer & Heating Mats - English Page";
    if (path.includes("/blogs/isi-products/battery-operated-vaccum-cleaners"))
      return "BIS Certificate for Vaccum Cleaners - English Page";
    if (path.includes("/blogs/isi-products/battery-operated-tootbrush-is-302"))
      return "BIS Certificate for Battery Operated Toothbrush - English Page";
    if (path.includes("/blogs/isi-products/battery-operated-massage-appliances"))
      return "BIS Certificate for Massage Appliances - English Page";
    if (path.includes("/blogs/isi-products/cross-recessed-countersunk-head-wood-screws"))
      return "BIS Certificate for Cross-recessed Countersunk Head Wood Screws - English Page";
    if (path.includes("/blogs/isi-products/drywall-screws-is-18507"))
      return "BIS Certificate for Drywall Screws - English Page";
    if (path.includes("/blogs/isi-products/raised-countersunk-head-screws-is-7486"))
      return "BIS Certificate for Raised countersunk head screws - English Page";
    if (path.includes("/blogs/isi-products/countersunk-flat-head-screws-is-7485"))
      return "BIS Certificate for Countersunk flat head screws - English Page";
    if (path.includes("/blogs/isi-products/hand-held-electric-engraving-tools"))
      return "BIS Certificate for Hand Held Electric Engraving Tools - English Page";
    if (path.includes("/blogs/isi-products/battery-operated-shavers-trimmers-clippers-&similar-appliances"))
      return "BIS Certificate for Shavers, Trimmers & Clippers - English Page";
    if (path.includes("/blogs/isi-products/vaccum-packaging-appliances"))
      return "BIS Certificate for Vaccum Packaging Appliances - English Page";
    if (path.includes("/blogs/isi-products/commercial-electric-kitchen-machines"))
      return "BIS Certificate for Commercial Electric Kitchen Machines - English Page";
    if (path.includes("/blogs/isi-products/electric-hot-plates"))
      return "BIS Certificate for Electric Hot Plates - English Page";
    if (path.includes("/blogs/isi-products/commercial-electric-rinsing-sinks"))
      return "BIS Certificate for Commercial Electric Rinsing Sinks - English Page";
    if (path.includes("/blogs/isi-products/thermal-storage-room-heaters"))
      return "BIS Certificate for Thermal Storage Room Heaters - English Page";
    if (path.includes("/blogs/isi-products/whirlpool-baths-and-whirlpool-spas"))
      return "BIS Certificate for Whirlpool Baths & Whirlpool Spas - English Page";
    if (path.includes("/blogs/isi-products/oral-hygiene-appliances"))
      return "BIS Certificate for Oral Hygiene Appliances - English Page";
    if (path.includes("/blogs/isi-products/clothes-dryers"))
      return "BIS Certificate for Clothes Dryers - English Page";
    if (path.includes("/blogs/isi-products/food-waste-disposers"))
      return "BIS Certificate for Food Waste Disposers - English Page";
    if (path.includes("/blogs/isi-products/electric-dishwashing-machines"))
      return "BIS Certificate for Electric Dishwashing Machines - English Page";
    if (path.includes("/blogs/isi-products/dishwashers"))
      return "BIS Certificate for Dishwashers - English Page";
    if (path.includes("/blogs/isi-products/slicing-machines"))
      return "BIS Certificate for Slicing Machines - English Page";
    if (path.includes("/blogs/isi-products/pan-head-screws-is-7483"))
      return "BIS Certificate for Pan Head Screws - English Page";
    if (
      path.includes("/blogs/isi-products/tapping-screws-pan-head-is-18480-part-1")
    )
      return "BIS Certificate for Tapping Screws Pan Head - English Page";
    if (
      path.includes("/blogs/isi-products/tapping-screws-oval-head-is-18480-part-3")
    )
      return "BIS Certificate for Tapping Screws Oval Head - English Page";
    if (path.includes("/blogs/isi-products/ferrules-for-water-services-is-2692"))
      return "BIS Certificate for Ferrules for Water Services - English Page";
    if (path.includes("/blogs/isi-products/water-meter-domestic-type-is-779"))
      return "BIS Certificate for Water Meter (Domestic Type) - English Page";
    if (path.includes("/blogs/isi-products/water-meter-bulk-type-is-2373"))
      return "BIS Certificate for Water Meter Bulk Type - English Page";
    if (
      path.includes(
        "/blogs/isi-products/tapping-screws-flat-head-is-18480-part-2"
      )
    )
      return "BIS Certificate for Tapping Screws Flat Head - English Page";
    if (
      path.includes(
        "/blogs/isi-products/glass-fibre-reinforced-gypsum-panels-is-17400"
      )
    )
      return "BIS Certificate for Glass Fibre Reinforced Gypsum Panels - English Page";
    if (path.includes("/blogs/isi-products/transmission-devices-v-belts-is-14261"))
      return "BIS Certificate for Transmission Devices V-Belts - English Page";
    if (path.includes("/blogs/isi-products/mini-domestic-water-heaters-is-17150"))
      return "BIS Certificate for Mini Domestic Water Heaters - English Page";
    if (
      path.includes(
        "/blogs/isi-products/stationary-storage-water-heaters-is-2082"
      )
    )
      return "BIS Certificate for Stationary Storage Type Electric Water Heaters - English Page";
    if (path.includes("/blogs/isi-products/telescopic-ball-bearing-is-17954"))
      return "BIS Certificate for Telescopic Ball Bearing Drawer Slide - English Page";

    return "Website Contact Form";
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
    pageUrl: window.location.href,
    pageName: getPageName(),
  });

  const { fullName, email, phoneNumber, message, pageUrl, pageName } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Full name validation
    const nameRegex = /^[a-zA-Z\s.'-]{2,50}$/;
    if (!nameRegex.test(fullName)) {
      toast({
        variant: "destructive",
        title: "Please Enter a valid Full Name.",
        description: "Name Should only Contain Letters and Spaces.",
      });
      setLoading(false);
      return;
    }

    // Phone number validation
    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({
        variant: "destructive",
        title: "Please Enter a Valid Phone Number",
        description: "Phone Number Should be (8-15 digits)",
      });
      setLoading(false);
      return;
    }

    // Email validation - allow any domain
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "Please Enter a valid Email Address.",
        description: "Check if Your Email Format is Correct",
      });
      setLoading(false);
      return;
    }

    console.log(formData);

    try {
      const response = await axios.post(
        `${BASE_URL}/contact/submit-contact`,
        formData
      );

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast({
        title: "Contact form submit successfully!",
        description:
          "Thank you for Contacting Us. Our Team will Reach out to you Shortly.",
      });

      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        message: "",
        pageUrl: window.location.href,
        pageName: getPageName(),
      });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Failed to submit contact form details!";
      toast({
        variant: "destructive",
        title: errorMessage,
        description:
          "Something Went Wrong. Please Check Your Details and Try Again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full md:w-[360px] md:sticky md:top-[128px] md:self-start  p-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      {/* Header */}
      <div className="flex gap-2 items-center">
        <PhoneCall className="text-[#232327]" />
        <div className="text-xl font-geist font-semibold text-[#232327]">
          Request a Free Callback
        </div>
      </div>

      {/* Intro Text */}
      <p className="mt-3 text-sm text-gray-600 font-geist">
        Leave your details below and our experts will call you back within 24
        hours to discuss your regulatory compliance needs.
      </p>

      {/* Form */}
      <form onSubmit={handleFormSubmit} className="mt-5 space-y-4">
        {/* Name Field */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <User className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            name="fullName"
            value={fullName}
            onChange={handleOnChange}
            disabled={loading}
            required
            placeholder="Your Name*"
            className="w-full py-2.5 pl-10 pr-3 font-geist bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          />
        </div>

        {/* Phone Field */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Phone className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="tel"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleOnChange}
            disabled={loading}
            required
            placeholder="Phone Number*"
            className="w-full py-2.5 pl-10 pr-3 font-geist bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          />
        </div>

        {/* Email Field */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            disabled={loading}
            required
            placeholder="Email Address*"
            className="w-full py-2.5 pl-10 pr-3 font-geist bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          />
        </div>

        {/* Message Field */}
        <div className="relative">
          <div className="absolute top-3 left-3 pointer-events-none">
            <MessageCircle className="h-5 w-5 text-gray-400" />
          </div>
          <textarea
            name="message"
            value={message}
            onChange={handleOnChange}
            disabled={loading}
            required
            placeholder="Required Certification*"
            rows="3"
            className="w-full py-2.5 pl-10 pr-3 font-geist bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          ></textarea>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={loading}
          className="w-full mt-5 font-geist bg-[#212126] hover:bg-[#212126]/90 text-white group relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center">
            {loading ? (
              <div className="flex gap-3 items-center justify-center">
                <ClockLoader size={22} color="#fff" />
                <span>Sending</span>
              </div>
            ) : (
              <>
                Request Callback
                <SendHorizontal className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </span>
          <span className="absolute top-0 left-0 w-0 h-full bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </Button>
      </form>

      {/* Privacy Note */}
      <p className="mt-3 text-xs text-center text-gray-500 font-geist">
        By submitting this form, you agree to our{" "}
        <Link to="/privacy-policy" className="text-blue-600 hover:underline">
          Privacy Policy
        </Link>{" "}
        and consent to being contacted.
      </p>
    </div>
  );
};
