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

const ServicesRightSideContentGerman = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const showComponentsPaths = [
    "/de/bis-isi-mark-zertifizierung",

    "/bis-schema-x-zertifizierung-fuer-waermebehandlungsausruestung",

    "/bis-zertifizierung-in-deutschland",
    "/de/was-ist-crs-bis-oder-crs-registrierung",
    // ISI Mark German Page Url
    "/de/bis-isi-mark-zertifizierung",
    // BIS CERTIFICATION PATH
    "/de/was-ist-das-bis-zertifikat-indisches-bis",
    // BISFM German Page Url
    "/de/leitfaden-zur-bis-zertifizierung-fuer-auslaendische-hersteller-indisches-bis",
    // Schema X Certification for Pumps and Liquid Elevators
    "/bis-schema-x-zertifizierung-fuer-pumpen-und-fluessigkeitsaufzuege",
    // BIS Certificate for Bunk Beds German Page Url
    "/blogs/isi-products/etagenbetten-is-17636",
    // BIS Certificate for Beds German Page Url
    "/blogs/isi-products/betten-is-17635",
    // Work Chairs German Page Url
    "/blogs/isi-products/arbeitsstuhle-is-17631",
    // Chair And Stools German Page Url
    "/blogs/isi-products/stuhle-und-hocker-is-17632",
    // Flashlight German Page Url
    "/blogs/isi-products/taschenlampe-is-2083",
    // Furniture German Page Url
    "/blogs/isi-products/mobel",
    // BIS Certificate for Seamless Pipes and Tubes German Page Url
    "/blogs/isi-products/nahtlose-rohre-und-rohre-is-17875",
    // BIS Certificate for Welded Pipes and Tubes German Page Url
    "/blogs/isi-products/geschweißte-rohre-und-rohre-is-17876",
    // Storage Unit German Page Url
    "/blogs/isi-products/lagereinheiten-is-17634",
    // BIS Certificate for Tables & Desks German Page Url
    "/blogs/isi-products/tische-und-schreibtische-is-17633",
    // BIS Certificate for Battery Operated Air Purifier German Page Url
    "/blogs/isi-products/batteriebetriebener-luftreiniger-is-302",
    // BIS Certificate for Battery Operated Toothbrush German Page Url
    "/blogs/isi-products/batteriebetriebene-zahnbuerste-is-302",
    // BIS Certificate for Chain Pipe Wrenches German Page Url
    "/blogs/isi-products/kettenrohrschluessel-is-4123",
    // BIS Certificate for Electric Fence Energizers German Page Url
    "/blogs/isi-products/elektrische-zaun-energisatoren-is-302-2-76",
    // BIS Certificate for Combination Side Cutting Pliers German Page Url
    "/blogs/isi-products/kombinationszangen-seitenschneide-is-3650",
    // BIS Certificate for Composite Synthetic Fibre Ropes German Page Url
    "/blogs/isi-products/verbund-synthetikfaserseile-is-14928",
  ];

  // Check if current path should show these components
  const shouldShowComponents = showComponentsPaths.includes(currentPath);

  return (
    <div className="flex flex-col gap-6 w-full md:w-[360px]">
      {/* BIS QCO UPDATES - Services Right Side Content*/}
      {shouldShowComponents && <BISQCOUpdatesServicesRightSideContentGerman />}
      {/* Client Testimonial - Services Right Side Content*/}
      <ClientTestimonialServicesRightSideContentGerman />
      {/* Why Choose Us - Services Right Side Content*/}
      <WhyChooseUsServicesRightSideContentGerman />
      {/* Contact Form - Services Right Side Content*/}
      <ContactFormServicesRightSideContentGerman />
    </div>
  );
};

export default ServicesRightSideContentGerman;

const BISQCOUpdatesServicesRightSideContentGerman = () => {
  const blogPosts = [
    {
      image:
        "https://images.unsplash.com/photo-1688578735352-9a6f2ac3b70a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "BIS-Zertifizierung für Arbeitsstühle",
      url: "/bis-qco-updates/bis-certificate-for-work-chairs",
    },
    {
      image:
        "https://images.unsplash.com/photo-1651197122040-3ea0656161ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "BIS-Zertifizierung für Stühle und Hocker",
      url: "/bis-qco-updates/bis-certificate-for-chairs-and-stools",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MCIfpfHsgrogddkI6G12hT4i6LwIPATLHg&s",
      title: "BIS-Benachrichtigung für Tische und Schreibtische",
      url: "/bis-qco-updates/bis-certificate-for-tables-and-desks",
    },
    {
      image: "https://alephindia.in/images/isi/furniture-storage-units.png",
      title: "BIS-Benachrichtigung für Lagereinheiten",
      url: "/bis-qco-updates/bis-certificate-for-storage-units",
    },
    {
      image: "https://alephindia.in/images/isi/furniture-bunk-beds.png",
      title: "BIS-Benachrichtigung für Etagenbetten",
      url: "/bis-qco-updates/bis-certificate-for-bunk-beds",
    },
    {
      image:
        "https://jharkhandstatenews.com/assets/admin/uploads/topstory_img/199879_1693229978.jpg",
      title: "BIS-Benachrichtigung für Solar-DC-Kabel und Brandschutz-Kabel",
      url: "/bis-qco-updates/bis-certificate-for-solar-dc-cable-and-fire-survival-cable",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420886415/LD/HF/LZ/65909740/bis-certification-for-aluminium-alloy-forging-stock-and-forgings-alloy-24345.jpg",
      title:
        "BIS-Benachrichtigung für gewalztes Aluminium und Aluminiumlegierungen, Schmiedevorrat und Schmiedestücke",
      url: "/bis-qco-updates/bis-certificate-for-wrought-aluminium-and-aluminium-alloys-forging-stock-and-forgings",
    },
    {
      image:
        "https://images.unsplash.com/photo-1651197122040-3ea0656161ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "BIS-Benachrichtigung für H-Säure",
      url: "/bis-qco-updates/bis-certificate-for-h-acid",
    },
    {
      image:
        "https://images.unsplash.com/photo-1617155093730-a8bf47be792d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "BIS-Benachrichtigung für K-Säure",
      url: "/bis-qco-updates/bis-certificate-for-k-acid",
    },
    {
      image:
        "https://media.istockphoto.com/id/940248330/photo/potassium-permanganate-sodium-sulfate-mixture.jpg?s=612x612&w=0&k=20&c=lhxvzbD2cVVOJKQyLIOqSaq9dlJTtDH07kHoBT5q7_4=",
      title: "BIS-Benachrichtigung für Vinylsulfon",
      url: "/bis-qco-updates/bis-certificate-for-vinyl-sulphone",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/71qI8OoNdtL._AC_UF1000,1000_QL80_.jpg",
      title: "BIS-Benachrichtigung für Elektrozaun-Energizer",
      url: "/bis-qco-updates/bis-certificate-for-electric-fence-energizers",
    },
    {
      image:
        "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "BIS-Benachrichtigung für Waschmaschinen",
      url: "/bis-qco-updates/bis-certificate-for-clothes-washing-machines",
    },
    {
      image: "https://m.media-amazon.com/images/I/31waXELONZL.jpg",
      title: "BIS-Benachrichtigung für Gipsplatten",
      url: "/bis-qco-updates/bis-certificate-for-gypsum-plaster-boards",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/61pOnpX8BpL._AC_UF1000,1000_QL80_.jpg",
      title:
        "BIS-Benachrichtigung für Aluminiumlegierungsrohre für Bewässerungszwecke - geschweißte Rohre",
      url: "/bis-qco-updates/bis-certificate-for-aluminium-alloy-tubes-for-irrigation-purposes-welded-tubes",
    },
    {
      image: "https://www.sunnysteel.com/img/extruded-finned-tube.jpg",
      title:
        "BIS-Benachrichtigung für Aluminiumlegierungsrohre für Bewässerungszwecke – stranggepresste Rohre",
      url: "/bis-qco-updates/bis-certificate-for-aluminium-alloy-tube-for-irrigation-purposes-extruded-tube",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVrUUdi1q8ZFnBqvx3vW5Ac03cUtUwR7N_A&s",
      title:
        "BIS-Benachrichtigung für EC-Qualität Aluminiumstangen hergestellt durch Strangguss und Walzen",
      url: "/bis-qco-updates/bis-certificate-for-ec-grade-aluminium-rod-produced-by-continuous-casting-and-rolling",
    },
    {
      image:
        "https://media.istockphoto.com/id/1322355858/photo/aluminium-round-long-products-on-black-steel-surface.webp?a=1&b=1&s=612x612&w=0&k=20&c=I3k2F2cQSo5AW1qOQ5uxi2ROi-YJQoH47XzApxCP7qY=",
      title:
        "BIS-Benachrichtigung für gewalzte Aluminium- und Aluminiumlegierungsstangen, Stäbe und Profile",
      url: "/bis-qco-updates/bis-certificate-for-wrought-aluminium-and-aluminium-alloy-bars-rods-and-sections",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/3/EC/HR/GU/184505254/regular-gypsum-plasterboard.jpg",
      title: "BIS-Benachrichtigung für Gipsplatten",
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
                    alt={post.title}
                    title={post.title}
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
                        Weiterlesen
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
            Alle Updates anzeigen
            <ArrowRightIcon className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

const ClientTestimonialServicesRightSideContentGerman = () => {
  const testimonials = [
    {
      name: "Frau Eliyawati",
      role: "PT Quty Karunia, BIS-Lizenznehmer in Vietnam",
      content:
        "Sun Certifications India lieferte ausgezeichnete BIS-Zertifizierungsdienstleistungen. Ihr unvergleichlicher Service und ihre Aufrichtigkeit gewannen unser Vertrauen. Einer der besten BIS-Berater in Indien!",
    },
    {
      name: "Frau Belle",
      role: "Thantawan Industries Ltd, BIS-Lizenznehmer in Thailand",
      content:
        "Sun Certifications India unterstützte uns während des gesamten BIS-Zertifizierungsprozesses. Ihr reaktionsschneller Kundenservice und ihre Pünktlichkeit sind außergewöhnlich. Sehr empfehlenswert für eine problemlose BIS-Zertifizierung.",
    },
    {
      name: "Frau Jun Min Sim",
      role: "Leaderart Industries, BIS-Lizenznehmer in Malaysia",
      content:
        "Sun Certifications India half uns, die BIS-Zertifizierung zu erhalten und verdoppelte unser Engagement in Indien. Ihre Dienstleistungen sind schnell, authentisch und auf dem neuesten Stand mit den neuesten BIS-Normen.",
    },
    {
      name: "Frau Fatima",
      role: "Aluminium Bahrain (ALBA), BIS-Lizenznehmer in Bahrain",
      content:
        "Ausgezeichnete BIS-Zertifizierungsunterstützung, sehr zuverlässige Berater.",
    },
    {
      name: "Herr Yousef",
      role: "Bahrain Aluminium Manufacturing Company, BIS-Lizenznehmer in Bahrain",
      content: "Reibungsloser BIS-Registrierungsprozess mit Expertenberatern.",
    },
    {
      name: "Herr Satoshi",
      role: "Daiki Aluminium Japan, BIS-Lizenznehmer in Japan",
      content: "Effiziente BIS-Lizenzunterstützung, großartige Berater.",
    },
    {
      name: "Frau Amanda",
      role: "Honeywell, BIS-Lizenznehmer in den USA",
      content: "Professionelle BIS-Zertifikatsberatung, sehr zufrieden.",
    },
    {
      name: "Frau Amanda",
      role: "Trimble Navigation, BIS-Lizenznehmer in den USA",
      content: "Nahtlose BIS-Zertifizierung und Registrierungsunterstützung.",
    },
    {
      name: "Frau Martina",
      role: "Remsa Italia, BIS-Lizenznehmer in Italien",
      content: "Hilfreiche BIS-Berater, vereinfachter Lizenzierungsprozess.",
    },
    {
      name: "Frau Nikola",
      role: "Aquazzura, BIS-Lizenznehmer in Italien",
      content:
        "Wir erhielten unser BIS-Zertifikat innerhalb der Fristen und zu erschwinglichen Preisen, großartige Arbeit Team Sun!",
    },
    {
      name: "Frau Ayu",
      role: "PT Quty, BIS-Lizenznehmer in Indonesien",
      content:
        "Ausgezeichneter BIS-Registrierungsservice, sehr empfehlenswert.",
    },
    {
      name: "Herr Huy",
      role: "Danu Vina, BIS-Lizenznehmer in Vietnam",
      content: "Zuverlässige BIS-Lizenzberater, schneller Prozess.",
    },
    {
      name: "Herr Minh",
      role: "Hanh My Production Company, BIS-Lizenznehmer in Vietnam",
      content: "Experten-BIS-Berater, Zertifizierung vereinfacht.",
    },
    {
      name: "Frau Hoa",
      role: "Sedo Vina, BIS-Lizenznehmer in Vietnam",
      content:
        "Reibungslose BIS-Zertifikatsregistrierung, großartige Unterstützung.",
    },
    {
      name: "Frau Hana",
      role: "Misumi Japan, BIS-Lizenznehmer in Japan",
      content:
        "Vertrauenswürdige BIS-Berater, schneller Zertifizierungsprozess.",
    },
    {
      name: "Frau Nok",
      role: "Thantawan Public Industry Company, BIS-Lizenznehmer in Thailand",
      content: "Professioneller BIS-Zertifizierungsservice, sehr effizient.",
    },
    {
      name: "Herr Luis",
      role: "Cortizo Aluminios, BIS-Lizenznehmer in Spanien",
      content: "Ausgezeichnete BIS-Registrierung und Lizenzberatung.",
    },
    {
      name: "Frau Aisha",
      role: "Midal Cables, BIS-Lizenznehmer in Bahrain",
      content: "Experten-BIS-Berater, reibungsloser Zertifizierungsprozess.",
    },
    {
      name: "Frau Aisha",
      role: "Nobilia Kitchens, BIS-Lizenznehmer in Bahrain",
      content: "Zuverlässige BIS-Zertifikatsregistrierungsunterstützung.",
    },
  ];

  return (
    <div className="w-full md:w-[360px] rounded-lg overflow-hidden bg-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      <div className="pt-6 px-6 pb-4">
        <div className="flex gap-2 items-center">
          <Languages className="text-[#232327]" />
          <div className="text-xl font-geist font-semibold text-[#232327]">
            Kundenbewertungen
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

const WhyChooseUsServicesRightSideContentGerman = () => {
  const stats = {
    experience: { value: "12+", label: "Jahre Erfahrung" },
    clients: { value: "1500+", label: "Unsere Kunden" },
    successRate: { value: "100%", label: "Erfolgsquote" },
    countries: { value: "20+", label: "Bediente Länder" },
  };

  const reasons = [
    {
      title: "Expertenberatung",
      description:
        "Unser Team bringt mehr als 12 Jahre Erfahrung in CDSCO und BIS-Compliance mit.",
    },
    {
      title: "Zeiteffizienz",
      description:
        "Wir reduzieren die Genehmigungszeit um bis zu 40% mit optimierten Prozessen.",
    },
    {
      title: "Bewährter Erfolg",
      description:
        "100% Erfolgsquote mit mehr als 1500 erfolgreichen Registrierungen.",
    },
    {
      title: "Kundenorientiert",
      description: "Dedizierter Account Manager für personalisierten Service.",
    },
  ];

  const performance = {
    title: "Unsere Leistung",
    metrics: {
      speed: { label: "Geschwindigkeit", value: "95" },
      success: { label: "Erfolg", value: "99" },
      satisfaction: { label: "Zufriedenheit", value: "98" },
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
          Warum uns wählen
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

const ContactFormServicesRightSideContentGerman = () => {
  const [loading, setLoading] = useState(false);

  // Function to get page name based on URL
  const getPageName = () => {
    const path = window.location.pathname;
    if (path.includes("/what-is-crs-bis-or-crs-registration"))
      return "CRS Registration (German)";

    if (
      path.includes(
        "/bis-schema-x-zertifizierung-fuer-waermebehandlungsausruestung"
      )
    )
      return "Schema X Certification for Heat Treatment Equipment (German)";

    if (path.includes("/bis-zertifizierung-in-deutschland"))
      return "Germany Blog German";
    if (path.includes("/de/was-ist-crs-bis-oder-crs-registrierung"))
      return "CRS Registration (German)";
    if (path.includes("/de/bis-isi-mark-zertifizierung"))
      return "ISI Mark - German Page";
    if (path.includes("/de/was-ist-das-bis-zertifikat-indisches-bis"))
      return "BIS Certification (German)";

    if (
      path.includes(
        "/bis-schema-x-zertifizierung-fuer-pumpen-und-fluessigkeitsaufzuege"
      )
    )
      return "Schema X Certification for Pumps and Liquid Elevators (German)";
    if (
      path.includes(
        "/de/leitfaden-zur-bis-zertifizierung-fuer-auslaendische-hersteller-indisches-bis"
      )
    )
      return "BIS Mark (ISI License) for Foreign Manufacturers - German Page";
    if (path.includes("/blogs/isi-products/etagenbetten-is-17636"))
      return "BIS Certificate for Bunk Beds (German)";
    if (path.includes("/blogs/isi-products/betten-is-17635"))
      return "BIS Certificate for Beds (German)";
    if (path.includes("/blogs/isi-products/arbeitsstuhle-is-17631"))
      return "BIS Certificate for Work Chairs (German)";
    if (path.includes("/blogs/isi-products/stuhle-und-hocker-is-17632"))
      return "BIS Certificate for Chair And Stools (German)";
    if (path.includes("/blogs/isi-products/taschenlampe-is-2083"))
      return "BIS Certificate for Flashlight (German)";
    if (path.includes("/blogs/isi-products/mobel"))
      return "BIS Certificate for Furniture (German)";
    if (path.includes("/blogs/isi-products/nahtlose-rohre-und-rohre-is-17875"))
      return "BIS Certificate for Seamless Pipes and Tubes (German)";
    if (path.includes("/blogs/isi-products/geschweißte-rohre-und-rohre-is-17876"))
      return "BIS Certificate for Welded Pipes and Tubes (German)";
    if (path.includes("/blogs/isi-products/lagereinheiten-is-17634"))
      return "BIS Certificate for Storage Unit (German)";
    // BIS Certificate for Tables & Desks German
    if (path.includes("/blogs/isi-products/tische-und-schreibtische-is-17633"))
      return "BIS Certificate for Tables & Desks (German)";
    // BIS Certificate for Battery Operated Air Purifier German
    if (path.includes("/blogs/isi-products/batteriebetriebener-luftreiniger-is-302"))
      return "BIS Certificate for Battery Operated Air Purifier (German)";
    // BIS Certificate for Battery Operated Toothbrush German
    if (path.includes("/blogs/isi-products/batteriebetriebene-zahnbuerste-is-302"))
      return "BIS Certificate for Battery Operated Toothbrush (German)";
    // BIS Certificate for Chain Pipe Wrenches German
    if (path.includes("/blogs/isi-products/kettenrohrschluessel-is-4123"))
      return "BIS Certificate for Chain Pipe Wrenches (German)";
    // BIS Certificate for Electric Fence Energizers German
    if (path.includes("/blogs/isi-products/elektrische-zaun-energisatoren-is-302-2-76"))
      return "BIS Certificate for Electric Fence Energizers (German)";
    // BIS Certificate for Combination Side Cutting Pliers German
    if (path.includes("/blogs/isi-products/kombinationszangen-seitenschneide-is-3650"))
      return "BIS Certificate for Combination Side Cutting Pliers (German)";
    // BIS Certificate for Composite Synthetic Fibre Ropes German
    if (path.includes("/blogs/isi-products/verbund-synthetikfaserseile-is-14928"))
      return "BIS Certificate for Composite Synthetic Fibre Ropes (German)";
    return "";
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
    pageUrl: window.location.href,
    pageName: getPageName(),
  });

  const { fullName, email, phoneNumber, message } = formData;

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
        title: "Bitte geben Sie einen gültigen vollständigen Namen ein.",
        description:
          "Der Name sollte nur Buchstaben und Leerzeichen enthalten.",
      });
      setLoading(false);
      return;
    }

    // Phone number validation
    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({
        variant: "destructive",
        title: "Bitte geben Sie eine gültige Telefonnummer ein",
        description: "Die Telefonnummer sollte (8-15 Ziffern) enthalten",
      });
      setLoading(false);
      return;
    }

    // Email validation - allow any domain
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        description: "Überprüfen Sie, ob Ihr E-Mail-Format korrekt ist",
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
        title: "Kontaktformular erfolgreich übermittelt!",
        description:
          "Vielen Dank für Ihre Kontaktaufnahme. Unser Team wird sich in Kürze bei Ihnen melden.",
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
        "Fehler beim Übermitteln der Kontaktformulardaten!";
      toast({
        variant: "destructive",
        title: errorMessage,
        description:
          "Etwas ist schief gelaufen. Bitte überprüfen Sie Ihre Angaben und versuchen Sie es erneut.",
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
          Kostenlosen Rückruf anfordern
        </div>
      </div>

      {/* Intro Text */}
      <p className="mt-3 text-sm text-gray-600 font-geist">
        Hinterlassen Sie Ihre Daten unten und unsere Experten rufen Sie
        innerhalb von 24 Stunden zurück, um Ihre regulatorischen
        Compliance-Bedürfnisse zu besprechen.
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
            placeholder="Ihr Name*"
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
            placeholder="Telefonnummer*"
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
            placeholder="E-Mail-Adresse*"
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
            placeholder="Erforderliche Zertifizierung*"
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
                <span>Senden</span>
              </div>
            ) : (
              <>
                Rückruf anfordern
                <SendHorizontal className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </span>
          <span className="absolute top-0 left-0 w-0 h-full bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </Button>
      </form>

      {/* Privacy Note */}
      <p className="mt-3 text-xs text-center text-gray-500 font-geist">
        Durch das Übermitteln dieses Formulars stimmen Sie unserer{" "}
        <Link to="/privacy-policy" className="text-blue-600 hover:underline">
          Datenschutzrichtlinie
        </Link>{" "}
        zu und erklären sich damit einverstanden, kontaktiert zu werden.
      </p>
    </div>
  );
};
