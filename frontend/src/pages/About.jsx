import {
  Bike,
  Globe,
  Play,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import whychooseus from "../assets/images/whychooseus.jpg";
import React, { useState, useEffect } from "react";
import Footer from "@/common/Footer";
import { motion, useAnimationControls } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Services from "@/components/manual/Services";

// Import images for services
import BISImage from "../assets/images/BIS.jpg";
import CDSCO from "../assets/images/CDSCO.jpg";
import BISCRS from "../assets/images/BISCRS.jpg";
import PlasticWasteManagement from "../assets/images/PlasticWasteManagement.jpg";
import EPRCertificate from "../assets/images/EPRCertificate.jpg";
import LMPC from "../assets/images/LMPC.jpg";
import ISIMark from "../assets/images/ISIMark.jpg";

const About = () => {
  return (
    <div className="overflow-hidden bg-[#F9F7F2]">
      {/* <AboutHero /> */}
      <WhyChooseUs />
      <Stats />
      <VideoShowcase />
      {/* <OurServices /> */}
      <Services />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
};

export default About;

// const AboutHero = () => {
//   return (
//     <div className="relative h-[654px] overflow-x-hidden ">
//       {/* Decorative elements */}

//       {/* <div className="absolute inset-0 overflow-hidden opacity-20">
//         <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
//         <div className="absolute top-1/2 -right-24 w-80 h-80 bg-indigo-500 rounded-full filter blur-3xl"></div>
//       </div> */}

//       {/* Larger circle with slower animation */}
//       <div
//         className="absolute top-[8%] left-[8%] w-[50px] h-[50px] rounded-full bg-[#1A8781]/20 animate-float-slow"
//         style={{ animationDelay: "0s" }}
//       ></div>

//       {/* Square element with rotation */}
//       <div
//         className="absolute top-[70%] left-[42%] w-[42px] h-[42px] bg-[#1A8781]/15 animate-spin-slow"
//         style={{ animationDuration: "15s" }}
//       ></div>

//       <div className="max-w-[84rem]  flex items-center justify-center h-full w-full mx-auto">
//         {/* Left Side */}
//         <div className="relative flex flex-col gap-8 w-[640px]   items-start">
//           <div className="inline-flex items-center">
//             <div className="h-[3px] w-[40px] bg-[#1A8781] mr-4"></div>
//             <span className="text-[#1A8781] font-poppins text-sm font-medium tracking-wider uppercase">
//               About Us
//             </span>
//           </div>

//           <h1 className="leading-[70px] z-[10] font-playfair font-bold text-[52px] text-[#1E1E1E] -mt-2">
//             <span className="relative">
//               India's Best Certification
//               <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
//             </span>{" "}
//             Certifications
//           </h1>

//           <p className="font-poppins text-[#332156] w-[490px] text-[20px] leading-[40px] ">
//             We are a Consulting Firm for BIS Certification, LMPC certificate,
//             EPR and various other certifications which will help you enter /
//             sell in the Indian market.
//           </p>

//           <div className="flex items-center ">
//             <div className="flex items-center cursor-pointer group">
//               <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#125E5A]/30 group-hover:border-[#125E5A] transition-all duration-300 mr-3">
//                 <div className="w-3 h-3 border-t-2 border-r-2 border-[#125E5A] rotate-45 translate-x-[-1px]"></div>
//               </div>
//               <span className="font-geist text-[#125E5A] text-[18px] font-medium group-hover:translate-x-1 transition-all duration-300">
//                 View Services
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Right Side */}
//         <div className="w-[580px]  h-[435px] flex flex-col">
//           <div className="relative">
//             <div className="bg-indigo-700 bg-opacity-40 backdrop-filter backdrop-blur-sm  rounded-xl border border-indigo-500 border-opacity-30 shadow-2xl h-[435px] flex items-center justify-center">
//               <img
//                 src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGNvbXB1dGVyfGVufDB8fDB8fHww"
//                 alt="Professional business team discussing certification"
//                 className="w-full h-full object-cover rounded-xl opacity-90"
//               />
//             </div>

//             {/* Floating elements */}
//             <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 bg-opacity-20 rounded-lg rotate-12 backdrop-filter backdrop-blur-sm border border-blue-500 border-opacity-30"></div>
//             <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-500 bg-opacity-20 rounded-lg -rotate-12 backdrop-filter backdrop-blur-sm border border-blue-500 border-opacity-30"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const WhyChooseUs = () => {
  return (
    <div className=" max-w-[84rem] mx-auto px-4 md:px-12 pt-10 md:pt-12 pb-16 md:pb-24">
      {/* Heading */}
      <div className="text-center mb-8 md:mb-10">
        <h1 className="font-playfair text-4xl uppercase  md:text-5xl font-bold text-[#1e1e1e] mb-3 md:mb-4">
          Why Choose Us?{" "}
        </h1>
        <p className=" text-base md:text-lg font-geist text-gray-600 max-w-xl md:max-w-2xl mx-auto px-4 md:px-0">
          We simplify certification by managing compliance, saving you time and
          effort to focus on business growth.{" "}
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

          <h3 className="font-geist font-semibold text-[#131316] text-lg md:text-xl mb-2 md:mb-3">
            Comprehensive Certification Solutions
          </h3>

          <p className="text-gray-600 font-geist text-sm md:text-base">
            With 4,999+ projects executed and 1,299+ happy clients, we bring
            deep industry knowledge to every certification challenge.
          </p>

          {/* <div className="mt-4 md:mt-6 w-8 md:w-10 h-8 md:h-10 rounded-full border-2 border-[#1A8781]/30 group-hover:border-[#1A8781]/60 flex items-center justify-center group-hover:bg-[#1A8781]/20 transition-all duration-300">
            <div className="w-2 h-2 border-t-2 border-r-2 border-[#1A8781] group-hover:border-[#131316] rotate-45"></div>
          </div> */}
        </div>

        {/* Feature Card 2 */}
        <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#1A8781]/30 hover:border-[#1A8781]/60 relative overflow-hidden transform md:hover:-translate-y-4">
          <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-[#1A8781]/10 rounded-bl-full -mr-8 md:-mr-10 -mt-8 md:-mt-10 group-hover:bg-[#1A8781]/20 transition-all duration-300"></div>

          <div className="bg-[#1A8781]/10 border border-[#1A8781]/30 group-hover:border-[#1A8781]/60 p-3 md:p-4 rounded-full h-fit w-fit mb-4 md:mb-6 group-hover:bg-[#1A8781]/20 transition-all duration-300">
            <Bike className="w-6 h-6 md:w-7 md:h-7 text-[#1A8781] group-hover:text-[#131316]" />
          </div>

          <h3 className="font-geist font-semibold text-[#131316] text-lg md:text-xl mb-2 md:mb-3">
            {" "}
            Fast & Efficient Process
          </h3>

          <p className="text-gray-600 font-geist text-sm md:text-base">
            Our dedicated team ensures a smooth and time-efficient certification
            process so you can focus on your core business.
          </p>

          {/* <div className="mt-4 md:mt-6 w-8 md:w-10 h-8 md:h-10 rounded-full border-2 border-[#1A8781]/30 group-hover:border-[#1A8781]/60 flex items-center justify-center group-hover:bg-[#1A8781]/20 transition-all duration-300">
            <div className="w-2 h-2 border-t-2 border-r-2 border-[#1A8781] group-hover:border-[#131316] rotate-45"></div>
          </div> */}
        </div>

        {/* Feature Card 3 */}
        <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#1A8781]/30 hover:border-[#1A8781]/60 relative overflow-hidden transform md:hover:-translate-y-4">
          <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-[#1A8781]/10 rounded-bl-full -mr-8 md:-mr-10 -mt-8 md:-mt-10 group-hover:bg-[#1A8781]/20 transition-all duration-300"></div>

          <div className="bg-[#1A8781]/10 border border-[#1A8781]/30 group-hover:border-[#1A8781]/60 p-3 md:p-4 rounded-full h-fit w-fit mb-4 md:mb-6 group-hover:bg-[#1A8781]/20 transition-all duration-300">
            <Globe className="w-6 h-6 md:w-7 md:h-7 text-[#1A8781] group-hover:text-[#131316]" />
          </div>

          <h3 className="font-geist font-semibold text-[#131316] text-lg md:text-xl mb-2 md:mb-3">
            {" "}
            Global Reach
          </h3>

          <p className="text-gray-600 font-geist text-sm md:text-base">
            We assist manufacturers and exporters from 20+ countries, including
            India, China, Malaysia, Thailand and beyond.{" "}
          </p>

          {/* <div className="mt-4 md:mt-6 w-8 md:w-10 h-8 md:h-10 rounded-full border-2 border-[#1A8781]/30 group-hover:border-[#1A8781]/60 flex items-center justify-center group-hover:bg-[#1A8781]/20 transition-all duration-300">
            <div className="w-2 h-2 border-t-2 border-r-2 border-[#1A8781] group-hover:border-[#131316] rotate-45"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="max-w-[84rem] mx-auto  px-4 md:px-12 pb-16 md:pb-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-x-8 ">
        <div className="text-center">
          <h4 className="text-4xl md:text-5xl font-bold font-geist text-[#1A8781] mb-1 md:mb-2">
            1500+
          </h4>
          <p className="text-gray-600 font-medium font-geist text-sm md:text-base">
            Our Clients
          </p>
        </div>

        <div className="text-center">
          <h4 className="text-4xl md:text-5xl font-bold font-geist text-[#1A8781] mb-1 md:mb-2">
            4,999+
          </h4>
          <p className="text-gray-600 font-medium font-geist text-sm md:text-base">
            Projects Completed
          </p>
        </div>

        <div className="text-center">
          <h4 className="text-4xl md:text-5xl font-bold font-geist text-[#1A8781] mb-1 md:mb-2">
            20+
          </h4>
          <p className="text-gray-600 font-medium font-geist text-sm md:text-base">
            Countries Served
          </p>
        </div>

        <div className="text-center">
          <h4 className="text-4xl md:text-5xl font-bold font-geist text-[#1A8781] mb-1 md:mb-2">
            100%
          </h4>
          <p className="text-gray-600 font-medium font-geist text-sm md:text-base">
            Success Rate
          </p>
        </div>
      </div>
    </div>
  );
};

const VideoShowcase = () => {
  return (
    <div className="max-w-[84rem] mx-auto px-4 md:px-12 ">
      <div className="relative rounded-3xl shadow-xl md:shadow-2xl overflow-hidden group">
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-10"></div>

        <img
          src={whychooseus}
          alt="Team working"
          className="w-full h-[450px] md:h-[600px] object-cover group-hover:scale-105 transition-all duration-700"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 p-6 md:p-8">
          <h3 className="text-white text-3xl md:text-4xl font-bold font-playfair mb-5 md:mb-6 text-center max-w-xs md:max-w-2xl">
            Experience Our Certification Excellence
          </h3>

          <button className="flex items-center gap-2 md:gap-3 bg-white/90 backdrop-blur-sm py-3 md:py-4 px-4 md:px-6 rounded-full shadow-xl hover:bg-white transition-all duration-300 group/btn">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1A8781] rounded-full flex items-center justify-center">
              <Play className="w-4 h-4 md:w-5 md:h-5 text-white ml-1" />
            </div>

            <span className="font-medium text-base md:text-lg text-gray-800 group-hover/btn:text-[#1A8781] transition-colors duration-300">
              Watch Our Story
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export const OurServices = () => {
  const navigate = useNavigate();

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
      icon: CDSCO,
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

  const [activeIndex, setActiveIndex] = useState(0);

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
          <p className="text-base md:text-lg font-geist text-gray-600  max-w-xl md:max-w-2xl mx-auto px-4 md:px-0">
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
                          alt={service.title}
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
                          alt={service.title}
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
                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${activeIndex === index
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
              className={`cursor-pointer rounded-xl p-3 md:p-4 transition-all duration-300 border ${activeIndex === index
                ? "bg-[#1A8781]/20 border-[#1A8781]/60 shadow-md"
                : "bg-white border-gray-200 hover:border-[#1A8781]/40 hover:bg-[#1A8781]/10"
                }`}
            >
              <div className="flex flex-col items-center text-center gap-1 md:gap-2">
                <div className="mb-0.5 md:mb-1">
                  <img
                    src={service.icon}
                    alt={service.title}
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

const Testimonials = () => {
  const controls = useAnimationControls(); // Initialize controls

  useEffect(() => {
    controls.start({
      x: ["0%", "-100%"], // Animation for horizontal scroll
      transition: {
        duration: 20, // Adjust duration for desired speed
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      },
    });
  }, [controls]);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "CEO, Tech Solutions Inc.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      content:
        "Sun Certifications India made our BIS certification process seamless. Their expertise and dedication helped us enter the Indian market with confidence.",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Director, Global Exports",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      content:
        "The team's professionalism and attention to detail in handling our LMPC certification was outstanding. Highly recommended!",
      rating: 5,
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Operations Manager, Electronics Corp",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      content:
        "As an international company, we needed reliable certification partners in India. Sun Certifications exceeded our expectations.",
      rating: 5,
    },
    {
      id: 4,
      name: "Anita Patel",
      role: "Quality Manager, Pharma Solutions",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      content:
        "Their expertise in CDSCO registration helped us navigate complex regulatory requirements with ease. Truly professional team!",
      rating: 5,
    },
    {
      id: 5,
      name: "David Wilson",
      role: "Head of Compliance, Global Tech",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      content:
        "Sun Certifications's support in WPC certification was invaluable. They made the entire process smooth and efficient.",
      rating: 5,
    },
    {
      id: 6,
      name: "Sneha Reddy",
      role: "Export Manager, Electronics Ltd",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
      content:
        "The team's knowledge of TEC certification requirements saved us months of work. Excellent service and support!",
      rating: 5,
    },
    {
      id: 7,
      name: "James Anderson",
      role: "Sustainability Director, GreenTech",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      content:
        "Their guidance on EPR authorization was comprehensive and helped us meet all environmental compliance requirements.",
      rating: 5,
    },
    {
      id: 8,
      name: "Meera Kapoor",
      role: "Product Manager, Consumer Goods",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
      content:
        "Sun Certifications's end-to-end certification support has been crucial for our market entry strategy. Highly professional team!",
      rating: 5,
    },
  ];

  return (
    <div className=" pb-6 md:pt-1 md:pb-16 bg-gradient-to-b from-white to-[#F9F7F2]">
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
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={controls}
            onMouseEnter={() => controls.stop()} // Pause on hover
            onMouseLeave={() => {
              // Restart animation on mouse leave
              controls.start({
                x: ["0%", "-100%"],
                transition: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                },
              });
            }}
            className="flex gap-8 md:gap-10 py-8"
          >
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="min-w-[300px] md:min-w-[400px] bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#1A8781]/60 hover:border-[#1A8781]/80 relative overflow-hidden group"
                    style={{
                      boxShadow:
                        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#1A8781]/10 rounded-bl-full -mr-8 -mt-8 group-hover:bg-[#1A8781]/20 transition-all duration-300"></div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
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
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-[#1A8781]/30"
                      />
                      <div>
                        <h4 className="font-geist font-semibold text-[#1e1e1e]">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-500 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
