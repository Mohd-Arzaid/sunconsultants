import { Bike, Globe, Play, User } from "lucide-react";
import whychooseus from "../assets/images/whychooseus.jpg";
import React from "react";

const About = () => {
  return (
    <div className="overflow-hidden bg-[#F9F7F2]">
      {/* <AboutHero /> */}
      <WhyChooseUs />
      <Stats />
      <VideoShowcase />
      <OurServices />
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
//             Consultant
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
    <div className=" max-w-[84rem] mx-auto px-12 pt-12 pb-24">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="font-playfair text-5xl font-bold text-[#1e1e1e] mb-4">
          Why Choose Us?{" "}
        </h1>
        <p className="text-lg font-geist text-gray-600 max-w-2xl mx-auto">
          We simplify certification by managing compliance, saving you time and
          effort to focus on business growth.{" "}
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-3 gap-8">
        {/* Feature Card 1 */}
        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#1A8781]/30 hover:border-[#1A8781]/60 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#1A8781]/10 rounded-bl-full -mr-10 -mt-10 group-hover:bg-[#1A8781]/20 transition-all duration-300"></div>

          <div className="bg-[#1A8781]/10 border border-[#1A8781]/30 group-hover:border-[#1A8781]/60  p-4 rounded-full h-fit w-fit mb-6 group-hover:bg-[#1A8781]/20 transition-all duration-300">
            <User className="w-7 h-7 text-[#1A8781] group-hover:text-[#131316]" />
          </div>

          <h3 className="font-geist font-semibold text-[#131316] text-xl mb-3">
            Comprehensive Certification Solutions
          </h3>

          <p className="text-gray-600 font-geist ">
            With 4,999+ projects executed and 1,299+ happy clients, we bring
            deep industry knowledge to every certification challenge.
          </p>

          <div className="mt-6 w-10 h-10 rounded-full border-2 border-[#1A8781]/30 group-hover:border-[#1A8781]/60  flex items-center justify-center group-hover:bg-[#1A8781]/20 transition-all duration-300">
            <div className="w-2 h-2 border-t-2  border-r-2 border-[#1A8781] group-hover:border-[#131316] rotate-45"></div>
          </div>
        </div>

        {/* Feature Card 2 */}
        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#1A8781]/30 hover:border-[#1A8781]/60 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#1A8781]/10 rounded-bl-full -mr-10 -mt-10 group-hover:bg-[#1A8781]/20 transition-all duration-300"></div>

          <div className="bg-[#1A8781]/10 border border-[#1A8781]/30 group-hover:border-[#1A8781]/60  p-4 rounded-full h-fit w-fit mb-6 group-hover:bg-[#1A8781]/20 transition-all duration-300">
            <Bike className="w-7 h-7 text-[#1A8781] group-hover:text-[#131316]" />
          </div>

          <h3 className="font-geist font-semibold text-[#131316] text-xl mb-3">
            {" "}
            Fast & Efficient Process
          </h3>

          <p className="text-gray-600 font-geist ">
            Our dedicated team ensures a smooth and time-efficient certification
            process so you can focus on your core business.
          </p>

          <div className="mt-6 w-10 h-10 rounded-full border-2 border-[#1A8781]/30 group-hover:border-[#1A8781]/60  flex items-center justify-center group-hover:bg-[#1A8781]/20 transition-all duration-300">
            <div className="w-2 h-2 border-t-2  border-r-2 border-[#1A8781] group-hover:border-[#131316] rotate-45"></div>
          </div>
        </div>

        {/* Feature Card 3 */}
        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#1A8781]/30 hover:border-[#1A8781]/60 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#1A8781]/10 rounded-bl-full -mr-10 -mt-10 group-hover:bg-[#1A8781]/20 transition-all duration-300"></div>

          <div className="bg-[#1A8781]/10 border border-[#1A8781]/30 group-hover:border-[#1A8781]/60  p-4 rounded-full h-fit w-fit mb-6 group-hover:bg-[#1A8781]/20 transition-all duration-300">
            <Globe className="w-7 h-7 text-[#1A8781] group-hover:text-[#131316]" />
          </div>

          <h3 className="font-geist font-semibold text-[#131316] text-xl mb-3">
            {" "}
            Global Reach
          </h3>

          <p className="text-gray-600 font-geist ">
            We assist manufacturers and exporters from 20+ countries, including
            India, China, Malaysia, Thailand and beyond.{" "}
          </p>

          <div className="mt-6 w-10 h-10 rounded-full border-2 border-[#1A8781]/30 group-hover:border-[#1A8781]/60  flex items-center justify-center group-hover:bg-[#1A8781]/20 transition-all duration-300">
            <div className="w-2 h-2 border-t-2  border-r-2 border-[#1A8781] group-hover:border-[#131316] rotate-45"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="max-w-[84rem] mx-auto  px-12 pb-20">
      <div className="grid grid-cols-4 gap-8 ">
        <div className="text-center">
          <h4 className="text-5xl font-bold font-geist text-[#1A8781] mb-2">
            4,999+
          </h4>
          <p className="text-gray-600 font-medium font-geist">
            Projects Completed
          </p>
        </div>

        <div className="text-center">
          <h4 className="text-5xl font-bold font-geist text-[#1A8781] mb-2">
            1,299+
          </h4>
          <p className="text-gray-600 font-medium font-geist">Happy Clients</p>
        </div>

        <div className="text-center">
          <h4 className="text-5xl font-bold font-geist text-[#1A8781] mb-2">
            20+
          </h4>
          <p className="text-gray-600 font-medium font-geist">
            Countries Served
          </p>
        </div>

        <div className="text-center">
          <h4 className="text-5xl font-bold font-geist text-[#1A8781] mb-2">
            100%
          </h4>
          <p className="text-gray-600 font-medium font-geist">Success Rate</p>
        </div>
      </div>
    </div>
  );
};

const VideoShowcase = () => {
  return (
    <div className="max-w-[84rem] mx-auto px-12 pb-20">
      <div className="relative rounded-3xl shadow-2xl overflow-hidden group">
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-10"></div>

        <img
          src={whychooseus}
          alt="Team working"
          className="w-full h-[600px] object-cover group-hover:scale-105 transition-all duration-700"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-8">
          <h3 className="text-white text-4xl font-bold font-playfair mb-6 text-center max-w-2xl">
            Experience Our Certification Excellence
          </h3>

          <button className="flex items-center gap-3 bg-white/90 backdrop-blur-sm py-4 px-6 rounded-full shadow-xl hover:bg-white transition-all duration-300 group/btn">
            <div className="w-12 h-12 bg-[#1A8781] rounded-full flex items-center justify-center">
              <Play className="w-5 h-5 text-white ml-1" />
            </div>
            <span className="font-medium text-lg text-gray-800 group-hover/btn:text-[#1A8781] transition-colors duration-300">
              Watch Our Story
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

const OurServices = () => {
  const services = [
    {
      id: 1,
      title: "BIS Certification",
      description:
        "Bureau of Indian Standards certification for products to ensure quality, safety and reliability in the Indian market.",
      icon: "📋",
    },
    {
      id: 2,
      title: "LMPC Certificate",
      description:
        "Legal Metrology Packaged Commodities certification ensuring accurate measurement and proper labeling of packaged goods.",
      icon: "⚖️",
    },
    {
      id: 3,
      title: "CDSCO Registration",
      description:
        "Central Drugs Standard Control Organization approval for medical devices and pharmaceuticals in India.",
      icon: "💊",
    },
    {
      id: 4,
      title: "EPR Authorization",
      description:
        "Extended Producer Responsibility compliance for managing plastic waste and environmental sustainability.",
      icon: "♻️",
    },
    {
      id: 5,
      title: "WPC Certification",
      description:
        "Wireless Planning & Coordination approval for wireless equipment and radio communication devices.",
      icon: "📡",
    },
    {
      id: 6,
      title: "TEC Certification",
      description:
        "Telecommunication Engineering Center certification for telecom equipment in the Indian market.",
      icon: "📱",
    },
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);

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
    <div className="py-24 bg-gradient-to-b from-[#F9F7F2] to-white">
      <div className="max-w-[84rem] mx-auto px-12">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl font-bold text-[#1e1e1e] mb-6">
            Comprehensive Certification Services
          </h2>
          <p className="text-lg font-geist text-gray-600 max-w-3xl mx-auto">
            We offer end-to-end solutions for all your certification needs to
            enter and thrive in the Indian market.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Main carousel display */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl h-[500px] bg-gradient-to-br from-[#1A8781]/5 to-[#1A8781]/20 border border-[#1A8781]/30">
            <div
              className="flex transition-transform duration-500 h-full"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  className="min-w-full h-full flex items-center p-12"
                >
                  <div className="grid grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <div className="flex flex-col gap-6">
                      <div className="bg-white/80 backdrop-blur-sm w-24 h-24 rounded-2xl flex items-center justify-center shadow-lg text-5xl">
                        {service.icon}
                      </div>
                      <h3 className="font-playfair text-4xl font-bold text-[#1e1e1e]">
                        {service.title}
                      </h3>
                      <p className="text-xl font-geist text-gray-700 leading-relaxed">
                        {service.description}
                      </p>
                      <button className="flex items-center gap-3 bg-[#1A8781] text-white py-3 px-6 rounded-full shadow-lg hover:bg-[#125E5A] transition-all duration-300 w-fit mt-4 group">
                        <span className="font-medium">Learn More</span>
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30">
                          <div className="w-2 h-2 border-t-2 border-r-2 border-white rotate-45"></div>
                        </div>
                      </button>
                    </div>

                    {/* Right illustration */}
                    <div className="relative">
                      <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#1A8781]/10 rounded-full"></div>
                      <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-[#1A8781]/15 rounded-full"></div>

                      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-[#1A8781]/20 relative z-10 h-[350px] flex items-center justify-center">
                        <div className="text-9xl flex items-center justify-center">
                          {service.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 gap-3">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-[#1A8781] w-10"
                    : "bg-[#1A8781]/30 hover:bg-[#1A8781]/50"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Service thumbnails */}
        <div className="mt-16 grid grid-cols-6 gap-4">
          {services.map((service, index) => (
            <div
              key={service.id}
              onClick={() => goToSlide(index)}
              className={`cursor-pointer rounded-xl p-4 transition-all duration-300 border ${
                activeIndex === index
                  ? "bg-[#1A8781]/20 border-[#1A8781]/60 shadow-md"
                  : "bg-white border-gray-200 hover:border-[#1A8781]/40 hover:bg-[#1A8781]/10"
              }`}
            >
              <div className="flex flex-col items-center text-center gap-2">
                <div className="text-3xl mb-1">{service.icon}</div>
                <h4 className="font-geist font-medium text-sm">
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
