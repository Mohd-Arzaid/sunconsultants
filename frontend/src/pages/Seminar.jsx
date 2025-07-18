import React from 'react'
import Footer from "@/common/Footer";
import { GraduationCap } from "lucide-react";
import Services from '../components/manual/Services';

const Seminar = () => {
  return (
    <div className="bg-[#F9F7F2]">
      {/* Seminar Hero */}
      <SeminarHero />
      <SeminarGallery />
      <Services />
      <Footer />
    </div>
  );
};

export default Seminar;

const SeminarHero = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
      {/* Heading */}
      <div className="text-center mb-6 md:mb-8">
        <h1 className="font-playfair text-3xl md:text-5xl font-bold text-[#1e1e1e] mb-3 md:mb-4">
          Industry-Leading Training Programs
        </h1>

        <p className="text-base md:text-lg font-geist text-gray-600 max-w-2xl md:max-w-3xl mx-auto">
          Elevate your expertise with our comprehensive training sessions and professional development workshops, led by industry experts.
        </p>
      </div>

      {/* Button */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-10">
        <button className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#1A8781] text-white py-3 px-8 rounded-full shadow-lg hover:bg-[#125E5A] transition-all duration-300 group">
          <span className="font-medium font-geist">Upcoming Events</span>
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30">
            <div className="w-2 h-2 border-t-2 border-r-2 border-white rotate-45"></div>
          </div>
        </button>

        <button className="w-full md:w-auto items-center gap-3 border-2 border-[#1A8781]/30 text-[#1A8781] py-3 px-8 rounded-full hover:border-[#1A8781] hover:bg-[#1A8781]/5 transition-all duration-300">
          <span className="font-medium font-geist">Register Now</span>
        </button>
      </div>

      <h2 className="text-3xl md:text-4xl text-center mb-4">
        {/* <span className="text-[#0A4394] font-geist font-medium mr-1 ">/</span> */}
        <span className="font-playfair font-bold text-[#1e1e1e]">Featured Seminars</span>
      </h2>

      <p className="text-base md:text-lg text-center font-geist text-gray-600 max-w-xl md:max-w-xl mx-auto leading-relaxed">
        Explore our upcoming and past professional development seminars and training sessions
      </p>
    </div>
  );
};

const SeminarGallery = () => {
  const galleryImages = [
    {
      id: 1,
      image: "https://sunconsultants.co.in/photo-event/2023/sun-1.png",
      title: "Quality Management Workshop",
      description: "Comprehensive training on implementing and maintaining quality management systems.",
    },
    {
      id: 2,
      image: "https://sunconsultants.co.in/photo-event/2023/sun-2.png",
      title: "ISO Standards Training",
      description: "Expert-led sessions on understanding and implementing ISO standards.",
    },
    {
      id: 3,
      image: "https://sunconsultants.co.in/photo-event/2023/sun-3.png",
      title: "Industry Best Practices",
      description: "Learn about the latest industry standards and best practices.",
    },
    {
      id: 4,
      image: "https://sunconsultants.co.in/photo-event/Narela-association-seminar-footwear/Narela-association-seminar-footwear-3.png",
      title: "Footwear Industry Seminar",
      description: "Specialized training for footwear manufacturers and suppliers.",
    },
    {
      id: 5,
      image: "https://sunconsultants.co.in/photo-event/Medicall-chennai-2023/Medicall-chennai-2023-1.png",
      title: "Healthcare Standards",
      description: "Training on healthcare industry standards and compliance.",
    },
    {
      id: 6,
      image: "https://sunconsultants.co.in/photo-event/Medicall-Kolkata-2022/Kolkata-2022-3.png",
      title: "Medical Device Training",
      description: "Comprehensive training on medical device regulations and standards.",
    },
  ];

  return (
    <div className="max-w-[88rem] mx-auto px-4 pb-12 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 group-hover:brightness-75"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-playfair text-xl font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.title}
                </h3>
                <p className="text-white font-geist text-sm mt-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
