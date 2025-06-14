import { Calendar } from "lucide-react";
import Footer from '@/common/Footer';
import { Services } from './Home';
import Exhibition1 from "../assets/seminarImages/Exhibition-1.jpg"
import Exhibition2 from "../assets/seminarImages/Exhibition-2.jpg"
import Exhibition3 from "../assets/seminarImages/Exhibition-3.jpg"
import Seimar82 from "../assets/seminarImages/Seimar-8-2.png"
import Seminar4 from "../assets/seminarImages/Seminar-4.jpg"
import Seminar5 from "../assets/seminarImages/Seminar-5.jpg"
import Seminar62 from "../assets/seminarImages/Seminar-6-2.jpg"
import Seminar6 from "../assets/seminarImages/Seminar-6.jpg"
import Seminar72 from "../assets/seminarImages/Seminar-7-2.jpg"
import Seminar7 from "../assets/seminarImages/Seminar-7.jpg"
import Seminar8 from "../assets/seminarImages/Seminar-8.png"
import Seminar9 from "../assets/seminarImages/Seminar-9.jpg"
import Seminar102 from "../assets/seminarImages/Seminar-10-2.jpg"
import Seminar103 from "../assets/seminarImages/Seminar-10-3.jpg"
import Seminar10 from "../assets/seminarImages/Seminar-10.jpg"
import Seminar11 from "../assets/seminarImages/Seminar-11.jpg"
import Seminar12 from "../assets/seminarImages/Seminar-12.jpg"


const Exhibition = () => {
  return (
    <div className="bg-[#F9F7F2]">
      <ExhibitionHero />
      <ExhibitionGallery />
      <Services />
      <Footer />
    </div>
  )
}

const ExhibitionHero = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
      {/* Heading */}
      <div className="text-center mb-6 md:mb-8">
        <h1 className="font-playfair text-3xl md:text-5xl font-bold text-[#1e1e1e] mb-3 md:mb-4">
          Global Exhibition Excellence
        </h1>

        <p className="text-base md:text-lg font-geist text-gray-600 max-w-2xl md:max-w-3xl mx-auto">
          Discover our world-class exhibition services, bringing together industry leaders, innovators, and experts to showcase the latest advancements and opportunities.
        </p>
      </div>

      {/* Button */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-10">
        <button className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#1A8781] text-white py-3 px-8 rounded-full shadow-lg hover:bg-[#125E5A] transition-all duration-300 group">
          <span className="font-medium font-geist">Upcoming Events</span>
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30">
            <Calendar className="w-4 h-4" />
          </div>
        </button>

        <button className="w-full md:w-auto items-center gap-3 border-2 border-[#1A8781]/30 text-[#1A8781] py-3 px-8 rounded-full hover:border-[#1A8781] hover:bg-[#1A8781]/5 transition-all duration-300">
          <span className="font-medium font-geist">Contact Us</span>
        </button>
      </div>

      <h2 className="text-3xl md:text-4xl text-center mb-4">
        {/* <span className="text-[#0A4394] font-geist font-medium mr-1">/</span> */}
        <span className="font-playfair font-bold text-[#1e1e1e]">Featured Exhibitions</span>
      </h2>

      <p className="text-base md:text-lg text-center font-geist text-gray-600 max-w-xl md:max-w-xl mx-auto leading-relaxed">
        Explore our curated selection of premium exhibitions and industry events
      </p>
    </div>
  );
};

const ExhibitionGallery = () => {
  const exhibitionImages = [
    {
      id: 1,
      image: Exhibition1,
      // title: "Exhibition 1",
    },
    {
      id: 2,
      image: Seminar4,
      // title: "Seminar 4",
    },
    {
      id: 3,
      image: Exhibition2,
      // title: "Exhibition 2",
    },
    {
      id: 4,
      image: Seminar5,
      // title: "Seminar 5",
    },
    {
      id: 5,
      image: Exhibition3,
      // title: "Exhibition 3",
    },
    {
      id: 6,
      image: Seminar6,
      // title: "Seminar 6",
    },
    {
      id: 7,
      image: Seimar82,
      // title: "Seimar 8-2",
    },
    {
      id: 8,
      image: Seminar7,
      // title: "Seminar 7",
    },
    {
      id: 9,
      image: Seminar8,
      // title: "Seminar 8",
    },
    {
      id: 10,
      image: Seminar9,
      // title: "Seminar 9",
    },
    {
      id: 11,
      image: Seminar10,
      // title: "Seminar 10",
    },
    {
      id: 12,
      image: Seminar11,
      // title: "Seminar 11",
    },
    {
      id: 13,
      image: Seminar12,
      // title: "Seminar 12",
    },
    {
      id: 14,
      image: Seminar62,
      // title: "Seminar 6-2",
    },
    {
      id: 15,
      image: Seminar72,
      // title: "Seminar 7-2",
    },
    {
      id: 16,
      image: Seminar102,
      // title: "Seminar 10-2",
    },
    {
      id: 17,
      image: Seminar103,
      // title: "Seminar 10-3",
    },
  ];

  return (
    <div className="max-w-[88rem] mx-auto px-4 pb-12 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {exhibitionImages.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl bg-white"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform transition-transform duration-700 md:group-hover:scale-110"
              />
            </div>
            {/* Title Overlay - Always Visible */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-playfair text-2xl md:text-3xl font-bold transform transition-all duration-500 group-hover:scale-105">
                  {item.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exhibition
