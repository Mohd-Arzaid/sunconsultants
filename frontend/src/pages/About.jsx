// React Hooks
import { useState, useEffect, useRef } from "react";

// React Router
import { Link, useNavigate } from "react-router-dom";

// External Libraries
import { Helmet } from "react-helmet-async";

// Lucide Icons
import {
  Bike,
  Globe,
  Play,
  User,
  ChevronLeft,
  ChevronRight,
  SlashIcon,
} from "lucide-react";

// UI Components
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Custom Components
import Footer from "@/common/Footer";
import Services from "@/components/manual/Services";
import AboutContact from "@/components/manual/about/AboutContact";

// Assets/Images
import whychooseus from "../assets/images/whychooseus.jpg";
import BISImage from "../assets/images/BIS.jpg";
import BISCRS from "../assets/images/BISCRS.jpg";
import PlasticWasteManagement from "../assets/images/PlasticWasteManagement.jpg";
import EPRCertificate from "../assets/images/EPRCertificate.jpg";
import LMPC from "../assets/images/LMPC.jpg";
import ISIMark from "../assets/images/ISIMark.jpg";

// =============================================
// UTILITY/HELPER COMPONENTS (Simple UI Components)
// =============================================

// Why Choose Us Section - Simple informational component
const WhyChooseUs = () => {
  return (
    <div className="max-w-[84rem] mx-auto px-4 md:px-12 pt-0 pb-16 md:pb-24">
      {/* Heading */}
      <div className="text-center mb-8 md:mb-10">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-[#1e1e1e] mb-3 md:mb-4">
          Why Choose Us? bro
        </h1>
        <p className="text-base md:text-lg font-geist text-neutral-600 max-w-xl md:max-w-2xl mx-auto px-4 md:px-0">
          We simplify certification by managing compliance, saving you time and
          effort to focus on business growth.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8">
        {/* Feature Card 1 */}
        <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#1A8781]/30 hover:border-[#1A8781]/60 relative overflow-hidden transform md:hover:-translate-y-4">
          <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-[#1A8781]/10 rounded-bl-full -mr-8 md:-mr-10 -mt-8 md:-mt-10 group-hover:bg-[#1A8781]/20 transition-all duration-300"></div>

          <div className="bg-[#1A8781]/10 border border-[#1A8781]/30 group-hover:border-[#1A8781]/60 p-3 md:p-4 rounded-full h-fit w-fit mb-4 md:mb-6 group-hover:bg-[#1A8781]/20 transition-all duration-300">
            <User className="w-6 h-6 md:w-7 md:h-7 text-[#1A8781] group-hover:text-[#131316]" />
          </div>

          <h3 className="font-geist font-semibold text-neutral-800 text-lg md:text-xl mb-2 md:mb-3">
            Comprehensive Certification Solutions
          </h3>

          <p className="text-neutral-600 font-geist text-sm md:text-base">
            With 4,999+ projects executed and 1,299+ happy clients, we bring
            deep industry knowledge to every certification challenge.
          </p>
        </div>

        {/* Feature Card 2 */}
        <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#1A8781]/30 hover:border-[#1A8781]/60 relative overflow-hidden transform md:hover:-translate-y-4">
          <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-[#1A8781]/10 rounded-bl-full -mr-8 md:-mr-10 -mt-8 md:-mt-10 group-hover:bg-[#1A8781]/20 transition-all duration-300"></div>

          <div className="bg-[#1A8781]/10 border border-[#1A8781]/30 group-hover:border-[#1A8781]/60 p-3 md:p-4 rounded-full h-fit w-fit mb-4 md:mb-6 group-hover:bg-[#1A8781]/20 transition-all duration-300">
            <Bike className="w-6 h-6 md:w-7 md:h-7 text-[#1A8781] group-hover:text-[#131316]" />
          </div>

          <h3 className="font-geist font-semibold text-neutral-800 text-lg md:text-xl mb-2 md:mb-3">
            Fast & Efficient Process
          </h3>

          <p className="text-neutral-600 font-geist text-sm md:text-base">
            Our dedicated team ensures a smooth and time-efficient certification
            process so you can focus on your core business.
          </p>
        </div>

        {/* Feature Card 3 */}
        <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#1A8781]/30 hover:border-[#1A8781]/60 relative overflow-hidden transform md:hover:-translate-y-4">
          <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-[#1A8781]/10 rounded-bl-full -mr-8 md:-mr-10 -mt-8 md:-mt-10 group-hover:bg-[#1A8781]/20 transition-all duration-300"></div>

          <div className="bg-[#1A8781]/10 border border-[#1A8781]/30 group-hover:border-[#1A8781]/60 p-3 md:p-4 rounded-full h-fit w-fit mb-4 md:mb-6 group-hover:bg-[#1A8781]/20 transition-all duration-300">
            <Globe className="w-6 h-6 md:w-7 md:h-7 text-[#1A8781] group-hover:text-[#131316]" />
          </div>

          <h3 className="font-geist font-semibold text-neutral-800 text-lg md:text-xl mb-2 md:mb-3">
            Global Reach
          </h3>

          <p className="text-neutral-600 font-geist text-sm md:text-base">
            We assist manufacturers and exporters from 20+ countries, including
            India, China, Malaysia, Thailand and beyond.
          </p>
        </div>
      </div>
    </div>
  );
};

// Stats Section - Simple display component
const Stats = () => {
  return (
    <div className="max-w-[84rem] mx-auto px-4 md:px-12 pb-8 md:pb-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-x-8">
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold font-geist text-[#1A8781] mb-1 md:mb-2">
            1500+
          </div>
          <p className="text-gray-600 font-medium font-geist text-sm md:text-base">
            Our Clients
          </p>
        </div>

        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold font-geist text-[#1A8781] mb-1 md:mb-2">
            4,999+
          </div>
          <p className="text-gray-600 font-medium font-geist text-sm md:text-base">
            Projects Completed
          </p>
        </div>

        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold font-geist text-[#1A8781] mb-1 md:mb-2">
            20+
          </div>
          <p className="text-gray-600 font-medium font-geist text-sm md:text-base">
            Countries Served
          </p>
        </div>

        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold font-geist text-[#1A8781] mb-1 md:mb-2">
            100%
          </div>
          <p className="text-gray-600 font-medium font-geist text-sm md:text-base">
            Success Rate
          </p>
        </div>
      </div>
    </div>
  );
};

// =============================================
// COMPLEX COMPONENTS (Components with State/Logic)
// =============================================

// Video Showcase Component - Contains state for play/pause functionality
const VideoShowcase = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <div className="max-w-[84rem] mx-auto px-4 md:px-12">
      <div className="relative rounded-3xl shadow-xl md:shadow-2xl overflow-hidden group">
        {!isPlaying ? (
          <>
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-10"></div>

            <img
              src={whychooseus}
              alt="Sun Certifications India Team - BIS Certification Experts Working Together - About Us"
              title="Sun Certifications India Team - BIS Certification Experts Working Together - About Us"
              className="w-full h-[450px] md:h-[600px] object-cover group-hover:scale-105 transition-all duration-700"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 p-6 md:p-8">
              <h3 className="text-white text-3xl md:text-4xl font-bold font-playfair mb-5 md:mb-6 text-center max-w-xs md:max-w-2xl">
                Experience Our Certification Excellence
              </h3>

              <button
                onClick={handlePlayVideo}
                className="flex items-center gap-2 md:gap-3 bg-white/90 backdrop-blur-sm py-3 md:py-4 px-4 md:px-6 rounded-full shadow-xl hover:bg-white transition-all duration-300 group/btn"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1A8781] rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4 md:w-5 md:h-5 text-white ml-1" />
                </div>

                <span className="font-medium text-base md:text-lg text-gray-800 group-hover/btn:text-[#1A8781] transition-colors duration-300">
                  Watch Our Story
                </span>
              </button>
            </div>
          </>
        ) : (
          <div className="relative">
            <video
              className="w-full h-[450px] md:h-[600px] object-cover"
              controls
              autoPlay
              preload="metadata"
            >
              <source src="/aboutVideo/about.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Close button */}
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-4 right-4 z-30 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-300"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Our Services Component - Complex component with carousel state and navigation
export const OurServices = () => {
  const navigate = useNavigate();

  // Services data configuration
  const services = [
    {
      id: 1,
      title: "BIS Mark (ISI License) for Foreign Manufacturers",
      description:
        "Comprehensive ISI licensing solution for foreign manufacturers looking to enter the Indian market with quality-certified products.",
      icon: BISImage,
      path: "/services/bis-foreign-manufacturers",
    },
    {
      id: 2,
      title: "Scheme X",
      description:
        "Specialized certification program for specific product categories requiring compliance with advanced quality and safety standards.",
      icon: ISIMark,
      path: "/services/scheme-x",
    },
    {
      id: 3,
      title: "ISI Mark BIS for Indian Manufacturers",
      description:
        "Domestic certification for Indian manufacturers ensuring products meet Bureau of Indian Standards quality and safety requirements.",
      icon: ISIMark,
      path: "/services/bis-indian-manufacturers",
    },
    {
      id: 4,
      title: "BIS CRS Registration",
      description:
        "Compulsory Registration Scheme certification for electronic and IT products ensuring safety and quality compliance.",
      icon: BISCRS,
      path: "/services/bis-crs-registration",
    },
    {
      id: 5,
      title: "CDSCO Registration Certification",
      description:
        "Central Drugs Standard Control Organization approval for medical devices and pharmaceuticals in India.",
      icon: "/services-images/CDSCO.jpg",
      path: "/services/cdsco-registration-certification",
    },
    {
      id: 6,
      title: "Plastic Waste Management",
      description:
        "Comprehensive solutions for plastic waste management compliance, helping businesses meet environmental regulations.",
      icon: PlasticWasteManagement,
      path: "/services/plastic-waste-management",
    },
    {
      id: 7,
      title: "EPR Certificate",
      description:
        "Extended Producer Responsibility certification for sustainable waste management and environmental compliance.",
      icon: EPRCertificate,
      path: "/services/epr-certificate",
    },
    {
      id: 8,
      title: "LMPC Certificate",
      description:
        "Legal Metrology Packaged Commodities certification ensuring accurate measurement and proper labeling of packaged goods.",
      icon: LMPC,
      path: "/services/lmpc-registration",
    },
  ];

  // Helper function to get SEO-friendly alt and title tags for service images
  const getServiceImageAlt = (service) => {
    if (service.title === "CDSCO Registration Certification") {
      return "CDSCO Registration Certificate - Central Drugs Standard Control Organization - Sun Certifications India";
    }
    if (service.title === "BIS CRS Registration") {
      return "BIS CRS Registration Certificate - Compulsory Registration Scheme - Sun Certifications India";
    }
    if (service.title === "Plastic Waste Management") {
      return "Plastic Waste Management Certificate - Environmental Compliance - Sun Certifications India";
    }
    if (service.title === "EPR Certificate") {
      return "EPR Certificate - Extended Producer Responsibility - Sun Certifications India";
    }
    if (service.title === "LMPC Certificate") {
      return "LMPC Certificate - Legal Metrology Packaged Commodities - Sun Certifications India";
    }
    if (
      service.title === "Scheme X" ||
      service.title === "ISI Mark BIS for Indian Manufacturers"
    ) {
      return "ISI Mark Certificate - Indian Standards Institute Certification - Sun Certifications India";
    }
    if (service.title === "BIS Mark (ISI License) for Foreign Manufacturers") {
      return "BIS Mark Certificate - Bureau of Indian Standards for Foreign Manufacturers - Sun Certifications India";
    }
    return `${service.title} - Certification Service - Sun Certifications India`;
  };

  // Carousel state
  const [activeIndex, setActiveIndex] = useState(0);

  // Carousel navigation handlers
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + services.length) % services.length
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="py-16 md:py-20 bg-gradient-to-b from-[#F9F7F2] to-white">
      <div className="max-w-[84rem] mx-auto px-4 md:px-12">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1e1e1e] mb-3 md:mb-4">
            Our Services
          </h2>
          <p className="text-base md:text-lg font-geist text-gray-600 max-w-xl md:max-w-2xl mx-auto px-4 md:px-0">
            We offer end-to-end solutions for all your certification needs to
            enter and thrive in the Indian market.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-5 md:-left-6 -translate-y-1/2 z-20 rounded-full w-[40px] h-[40px] md:w-[48px] md:h-[48px] flex items-center justify-center border-2 border-[#1A8781] bg-white/80 hover:bg-[#1A8781]/10 transition-all duration-300 shadow-lg"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-[#1A8781]" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-5 md:-right-6 -translate-y-1/2 z-20 rounded-full w-[40px] h-[40px] md:w-[48px] md:h-[48px] flex items-center justify-center border-2 border-[#1A8781] bg-[#1A8781] hover:bg-[#125E5A] transition-all duration-300 shadow-lg"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-white" />
          </button>

          {/* Main carousel display */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl h-auto md:h-[500px] bg-gradient-to-br from-[#1A8781]/5 to-[#1A8781]/20 border border-[#1A8781]/30">
            <div
              className="flex transition-transform duration-500 h-full"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  className="min-w-full h-full flex items-center p-6 md:p-12"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 items-center w-full">
                    {/* Left content */}
                    <div className="flex flex-col gap-4 md:gap-6 order-2 md:order-1">
                      <div className="hidden md:flex bg-white/80 backdrop-blur-sm w-16 h-16 md:w-24 md:h-24 rounded-2xl items-center justify-center shadow-lg mx-auto md:mx-0">
                        <img
                          src={service.icon}
                          alt={getServiceImageAlt(service)}
                          title={getServiceImageAlt(service)}
                          className="w-12 h-12 md:w-20 md:h-20 rounded-full object-contain"
                        />
                      </div>
                      <h3 className="font-playfair text-2xl md:text-4xl font-bold text-[#1e1e1e] text-center md:text-left">
                        {service.title}
                      </h3>
                      <p className="text-base md:text-xl font-geist text-gray-700 leading-relaxed text-center md:text-left">
                        {service.description}
                      </p>
                      <button
                        onClick={() => navigate(service.path)}
                        className="flex items-center gap-3 bg-[#1A8781] text-white py-2 px-4 md:py-3 md:px-6 rounded-full shadow-lg hover:bg-[#125E5A] transition-all duration-300 w-fit mt-2 md:mt-4 group mx-auto md:mx-0"
                      >
                        <span className="font-medium text-sm md:text-base">
                          Learn More
                        </span>
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30">
                          <div className="w-2 h-2 border-t-2 border-r-2 border-white rotate-45"></div>
                        </div>
                      </button>
                    </div>

                    {/* Right illustration */}
                    <div className="relative order-1 md:order-2">
                      <div className="hidden md:block absolute -top-10 -left-10 w-40 h-40 bg-[#1A8781]/10 rounded-full"></div>
                      <div className="hidden md:block absolute -bottom-10 -right-10 w-60 h-60 bg-[#1A8781]/15 rounded-full"></div>

                      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 md:p-8 shadow-xl border border-[#1A8781]/20 relative z-10 h-[200px] sm:h-[250px] md:h-[350px] flex items-center justify-center mb-6 md:mb-0">
                        <img
                          src={service.icon}
                          alt={getServiceImageAlt(service)}
                          title={getServiceImageAlt(service)}
                          className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 md:mt-8 gap-2 md:gap-3">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-[#1A8781] w-10"
                    : "bg-[#1A8781]/30 hover:bg-[#1A8781]/50"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Service thumbnails */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
          {services.map((service, index) => (
            <div
              key={service.id || index}
              onClick={() => goToSlide(index)}
              className={`cursor-pointer rounded-xl p-3 md:p-4 transition-all duration-300 border ${
                activeIndex === index
                  ? "bg-[#1A8781]/20 border-[#1A8781]/60 shadow-md"
                  : "bg-white border-gray-200 hover:border-[#1A8781]/40 hover:bg-[#1A8781]/10"
              }`}
            >
              <div className="flex flex-col items-center text-center gap-1 md:gap-2">
                <div className="mb-0.5 md:mb-1">
                  <img
                    src={service.icon}
                    alt={getServiceImageAlt(service)}
                    title={getServiceImageAlt(service)}
                    className="w-8 h-8 md:w-12 md:h-12 rounded-full object-contain mx-auto"
                  />
                </div>
                <h4 className="font-geist font-medium text-xs md:text-base leading-tight">
                  {service.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Testimonials Component - Complex component with animation controls and effects
const Testimonials = () => {
  const containerRef = useRef(null);
  const [start, setStart] = useState(false);
  const [duplicatedTestimonials, setDuplicatedTestimonials] = useState([]);

  // Testimonials data - same as WhatsOurCustomersSaySection
  const testimonials = [
    {
      id: 1,
      name: "Ms.Eliyawati",
      role: "PT Quty Karunia, BIS Licensee in Vietnam",
      content:
        "Sun Certifications India provided excellent BIS Certification services. Their unparalleled service and sincerity gained our trust. One of the best BIS consultants in India!",
      rating: 5,
    },
    {
      id: 2,
      name: "Ms.Belle",
      role: "Thantawan Industries Ltd, BIS Licensee in Thailand",
      content:
        "Sun Certifications India supported us throughout the BIS certification process. Their responsive customer service and punctuality are exceptional. Highly recommend for hassle-free BIS certification.",
      rating: 5,
    },
    {
      id: 3,
      name: "Ms.Jun Min Sim",
      role: "Leaderart Industries, BIS Licensee in Malaysia",
      content:
        "Sun Certifications India helped us acquire BIS Certification, doubling our engagement in India. Their services are fast, genuine, and up-to-date with latest BIS norms.",
      rating: 5,
    },
    {
      id: 4,
      name: "Ms. Fatima",
      role: "Aluminium Bahrain (ALBA), BIS Licensee in Bahrain",
      content:
        "Excellent BIS certification support, highly reliable consultants.",
      rating: 5,
    },
    {
      id: 5,
      name: "Mr. Yousef",
      role: "Bahrain Aluminium Manufacturing Company, BIS Licensee in Bahrain",
      content: "Smooth BIS registration process with expert consultants.",
      rating: 5,
    },
    {
      id: 6,
      name: "Mr. Satoshi",
      role: "Daiki Aluminium Japan, BIS Licensee in Japan",
      content: "Efficient BIS license assistance, great consultants.",
      rating: 5,
    },
    {
      id: 7,
      name: "Ms. Amanda",
      role: "Honeywell, BIS Licensee in USA",
      content: "Professional BIS certificate guidance, very satisfied.",
      rating: 5,
    },
    {
      id: 8,
      name: "Ms. Amanda",
      role: "Trimble Navigation, BIS Licensee in USA",
      content: "Seamless BIS certification and registration support.",
      rating: 5,
    },
    {
      id: 9,
      name: "Ms. Martina",
      role: "Remsa Italia, BIS Licensee in Italy",
      content: "Helpful BIS consultants, simplified license process.",
      rating: 5,
    },
    {
      id: 10,
      name: "Ms. Nikola",
      role: "Aquazzura, BIS Licensee in Italy",
      content:
        "We got our BIS certificate well within the timelines and at affordable prices, great work team Sun!",
      rating: 5,
    },
    {
      id: 11,
      name: "Ms. Ayu",
      role: "PT Quty, BIS Licensee in Indonesia",
      content: "Excellent BIS registration service, highly recommended.",
      rating: 5,
    },
    {
      id: 12,
      name: "Mr. Huy",
      role: "Danu Vina, BIS Licensee in Vietnam",
      content: "Reliable BIS license consultants, fast process.",
      rating: 5,
    },
    {
      id: 13,
      name: "Mr. Minh",
      role: "Hanh My Production Company, BIS Licensee in Vietnam",
      content: "Expert BIS consultants, certification made easy.",
      rating: 5,
    },
    {
      id: 14,
      name: "Ms. Hoa",
      role: "Sedo Vina, BIS Licensee in Vietnam",
      content: "Smooth BIS certificate registration, great support.",
      rating: 5,
    },
    {
      id: 15,
      name: "Ms. Hana",
      role: "Misumi Japan, BIS Licensee in Japan",
      content: "Trusted BIS consultants, quick certification process.",
      rating: 5,
    },
    {
      id: 16,
      name: "Ms. Nok",
      role: "Thantawan Public Industry Company, BIS Licensee in Thailand",
      content: "Professional BIS certification service, very efficient.",
      rating: 5,
    },
    {
      id: 17,
      name: "Mr. Luis",
      role: "Cortizo Aluminios, BIS Licensee in Spain",
      content: "Excellent BIS registration and license guidance.",
      rating: 5,
    },
    {
      id: 18,
      name: "Ms. Aisha",
      role: "Midal Cables, BIS Licensee in Bahrain",
      content: "Expert BIS consultants, smooth certification process.",
      rating: 5,
    },
    {
      id: 19,
      name: "Ms. Aisha",
      role: "Nobilia Kitchens, BIS Licensee in Bahrain",
      content: "Reliable BIS certificate registration support.",
      rating: 5,
    },
  ];

  useEffect(() => {
    addAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function addAnimation() {
    // React-friendly duplication approach - same as WhatsOurCustomersSaySection
    const duplicated = [...testimonials, ...testimonials, ...testimonials];
    setDuplicatedTestimonials(duplicated);

    if (containerRef.current) {
      getDirection();
      getSpeed();

      // Small delay to ensure DOM is ready
      setTimeout(() => {
        setStart(true);
      }, 100);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        "forwards"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      // Calculate speed based on total width of testimonials
      const totalWidth = testimonials.length * 450; // Approximate width per testimonial (400px + 50px gap)
      const pixelsPerSecond = 50; // Consistent speed: 50 pixels per second
      const duration = totalWidth / pixelsPerSecond;

      containerRef.current.style.setProperty(
        "--animation-duration",
        `${duration}s`
      );
    }
  };

  return (
    <div className="pb-6 md:pt-1 md:pb-16 bg-gradient-to-b from-white to-[#F9F7F2]">
      <div className="max-w-[84rem] mx-auto px-4 md:px-12">
        {/* Heading */}
        <div className="text-center mb-2 md:mb-6">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1e1e1e] mb-3 md:mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base md:text-lg font-geist text-gray-600 max-w-xl md:max-w-2xl mx-auto px-4 md:px-0">
            Hear from businesses that have successfully navigated the
            certification process with our expert guidance.
          </p>
        </div>

        {/* Testimonials Scroll Container */}
        <div
          ref={containerRef}
          className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        >
          <div
            className={`flex w-max gap-8 md:gap-10 py-8 hover:[animation-play-state:paused] ${
              start ? "animate-scroll" : ""
            }`}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="w-[320px] md:w-[400px] h-auto bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#1A8781]/60 hover:border-[#1A8781]/80 relative overflow-hidden group flex flex-col shrink-0"
                style={{
                  boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                }}
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1A8781]/10 rounded-bl-full -mr-8 -mt-8 group-hover:bg-[#1A8781]/20 transition-all duration-300"></div>

                {/* Rating */}
                <div className="flex gap-1 mb-4 justify-start">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#1A8781]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 font-geist text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author - Fixed at bottom */}
                <div className="mt-auto pt-2 border-t border-gray-200">
                  <div className="font-geist font-bold text-neutral-800 text-lg">
                    {testimonial.name}
                  </div>
                  <p className="text-neutral-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutUsHero = () => {
  return (
    <div className="max-w-[84rem] mx-auto px-4 md:px-12 pt-10 md:pt-12 pb-2 md:pb-3">
      {/* Heading */}
      <div className="text-center mb-12 md:mb-16">
        <h1 className="font-playfair drop-shadow-lg text-5xl md:text-6xl font-bold text-[#1e1e1e] mb-6 md:mb-8">
          About Us
        </h1>
        <p className="text-lg md:text-xl font-geist text-neutral-600 max-w-4xl mx-auto px-4 md:px-0 leading-relaxed">
          Sun Certifications was founded in 2013 with a view to simplify the
          complex regulatory compliance framework in India. For more than 10
          years, we&apos;ve been empowering local and international businesses
          to satisfy their Indian certification and license obligations with
          ease – resulting in smoother market access and long-term success.
        </p>
      </div>

      {/* Credentials Content - Without Headings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
        {/* ISO Certifications Content */}
        <div className="group relative p-8 md:p-10 bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-lg border border-neutral-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
          {/* Corner gradient */}
          <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-[#1A8781]/10 rounded-bl-full -mr-8 md:-mr-10 -mt-8 md:-mt-10 group-hover:bg-[#1A8781]/20 transition-all duration-300"></div>

          <p className="text-base md:text-lg text-neutral-600 font-geist leading-relaxed mb-4 relative z-10">
            Sun Certification India is{" "}
            <span className="font-semibold text-[#1A8781]">ISO 10002:2018</span>
            ,{" "}
            <span className="font-semibold text-[#1A8781]">
              ISO 20000-1:2018
            </span>{" "}
            and{" "}
            <span className="font-semibold text-[#1A8781]">ISO 27001:2022</span>{" "}
            certified, which ensures that our company provides top notch
            information and services with high expertise in a systematized
            manner.
          </p>

          <p className="text-base md:text-lg text-neutral-600 font-geist leading-relaxed relative z-10">
            We have in-detail SOP&apos;s for each task that is done to ensure
            that the timelines are met and the clients get the best service
            possible. We have well segmented teams with a clear hierarchy which
            helps in clear communication and efficient and effective
            implementation of our SOP&apos;s.
          </p>
        </div>

        {/* International Recognition Content */}
        <div className="group relative p-8 md:p-10 bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-lg border border-neutral-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
          {/* Corner gradient */}
          <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-[#1A8781]/10 rounded-bl-full -mr-8 md:-mr-10 -mt-8 md:-mt-10 group-hover:bg-[#1A8781]/20 transition-all duration-300"></div>

          <p className="text-base md:text-lg text-neutral-600 font-geist leading-relaxed mb-4 relative z-10">
            We are the first Indian company to be recognized by multiple
            bilateral chambers of commerce namely{" "}
            <span className="font-semibold text-[#1A8781]">Indo-French</span>,{" "}
            <span className="font-semibold text-[#1A8781]">Indo-German</span>,{" "}
            <span className="font-semibold text-[#1A8781]">Indo-American</span>,{" "}
            <span className="font-semibold text-[#1A8781]">
              Indo-Vietnamese
            </span>{" "}
            and{" "}
            <span className="font-semibold text-[#1A8781]">
              Indo-Italian Chambers of Commerce
            </span>
            , which serves as the benchmark or the credibility for international
            companies looking to find a reliable Indian partner for their
            certification work.
          </p>

          <p className="text-base md:text-lg text-neutral-600 font-geist leading-relaxed relative z-10">
            We have served more than{" "}
            <span className="font-bold text-[#1A8781]">1,200 clients</span>, for
            a total of more than{" "}
            <span className="font-bold text-[#1A8781]">
              4,900 certifications
            </span>{" "}
            in various fields, which gives an assurance of our service
            capability and we are the world&apos;s leading consulting firm for
            any kind of certifications required for Indian market.
          </p>
        </div>
      </div>

      {/* Technical Backbone Content */}
      <div className="mb-12 md:mb-16">
        <div className="group relative p-8 md:p-10 bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-lg border border-neutral-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
          {/* Corner gradients */}
          <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-[#1A8781]/10 rounded-bl-full -mr-8 md:-mr-10 -mt-8 md:-mt-10 group-hover:bg-[#1A8781]/20 transition-all duration-300"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 md:w-28 md:h-28 bg-[#1A8781]/5 rounded-tr-full -ml-6 md:-ml-8 -mb-6 md:-mb-8 group-hover:bg-[#1A8781]/10 transition-all duration-300"></div>

          <p className="text-base md:text-lg text-neutral-600 font-geist leading-relaxed relative z-10">
            While we operate lean regarding internal administrative payroll, our
            technical backbone is one of the strongest in the industry. We
            operate as a technical hub supported by{" "}
            <span className="font-bold text-[#1A8781]">
              25 distinguished ex-BIS officials
            </span>{" "}
            retained as expert consultants. This ensures our operations meet the
            highest regulatory standards without the administrative overhead of
            a traditional firm.
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
        {/* Who We Are */}
        <div className="p-8 md:p-10 bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-lg border border-neutral-200 hover:shadow-lg transition-all duration-300">
          <div className="mb-6">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1e1e1e]">
              Who We Are
            </h2>
          </div>

          <p className="text-base md:text-lg text-neutral-600 font-geist leading-relaxed">
            At Sun Certifications, we understand that compliance is more than
            just paperwork – it&apos;s about gaining the trust of your clients,
            people, and businesses that you&apos;re dealing with and earning the
            confidence of the governments where you operate. With a staff of
            dedicated and talented professionals, industry veterans, and
            compliance experts, we have become one of the most trusted names in
            the regulatory consulting arena.
          </p>
        </div>

        {/* Our Promise */}
        <div className="p-8 md:p-10 bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-lg border border-neutral-200 hover:shadow-lg transition-all duration-300">
          <div className="mb-6">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1e1e1e]">
              Our Promise
            </h2>
          </div>

          <p className="text-base md:text-lg text-neutral-600 font-geist leading-relaxed">
            Our Promise is straightforward: Prompt project completion, Clear
            Communication, and 100% Customer satisfaction. If you are an Indian
            manufacturer, importer, or an international brand entering the
            Indian market, we have a solution that is tailored as per your
            business requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

// Our Vision Section - Standalone section component
const OurVisionSection = () => {
  return (
    <div className="pt-8 md:pt-12 pb-16 md:pb-20">
      <div className="max-w-[84rem] mx-auto px-4 md:px-12">
        <div className="text-center p-8 md:p-12 bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-lg border border-neutral-200">
          <div className="mb-6">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1e1e1e]">
              Our Vision
            </h2>
          </div>

          <p className="text-base md:text-lg text-neutral-600 font-geist leading-relaxed mb-6 max-w-4xl mx-auto">
            To be the global leader in regulatory compliance consulting, making
            it possible for organizations to confidently extend their business
            into India, maintaining the highest standards of quality, safety,
            and trust.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-neutral-800 text-white font-geist font-medium rounded-lg hover:bg-neutral-700 transition-colors duration-200"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
};

// =============================================
// MAIN COMPONENT (Entry Point)
// =============================================

// About Page Main Component - Orchestrates all sections and handles page structure
const About = () => {
  return (
    <div className="overflow-hidden bg-gradient-to-b from-white via-neutral-50 to-[#F9F7F2] relative">
      {/* SEO and Meta Tags */}
      <Helmet>
        <title>
          About Sun Certifications India - BIS Certification Experts
        </title>
        <meta
          name="description"
          content="Learn about Sun Certifications India, founded in 2013. We are India's leading BIS certification consultants with 4,999+ projects and 1,299+ happy clients worldwide."
        />
        <meta
          name="keywords"
          content="about sun certifications, bis certification company, indian certification experts, bis consultants india"
        />
        <link rel="canonical" href="https://bis-certifications.com/about" />

        {/* JSON-LD Breadcrumb structured data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://bis-certifications.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "About",
                item: "https://bis-certifications.com/about",
              },
            ],
          })}
        </script>
      </Helmet>

      {/* Breadcrumb Navigation */}
      <div className="absolute md:top-5 top-3 left-0 w-full">
        <div className="max-w-[80rem] mx-auto px-4">
          <div className="w-fit font-inter">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>About</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>

      {/* Page Sections */}
      <AboutUsHero />
      <WhyChooseUs />
      <Stats />
      <OurVisionSection />
      <VideoShowcase />
      <Services />
      <Testimonials />
      <AboutContact />
      <Footer />
    </div>
  );
};

export default About;
