import Footer from "@/common/Footer";
import { Services } from "./Home";

import BahrainAudit from "../assets/auditImages/Bahrain.png"
import IndonesiaAudit from "../assets/auditImages/Indonesia.png"
import ItalyAudit from "../assets/auditImages/Italy-2.png"
import MalaysiaAudit from "../assets/auditImages/Malaysia.png"
import SloveniaAudit from "../assets/auditImages/Slovenia.png"
import ThailandAudit from "../assets/auditImages/Thailand.png"
import Vietnam2Audit from "../assets/auditImages/Vietnam-2.png"
import Vietnam3Audit from "../assets/auditImages/Vietnam-3.png"
import Vietnam4Audit from "../assets/auditImages/Vietnam-4.png"
import VietnamAudit from "../assets/auditImages/Vietnam.png"

const InternationalAudits = () => {
  return (
    <div className="bg-[#F9F7F2]">
      {/* Audit Hero */}
      <AuditHero />
      <AuditGallery />
      <Services />
      <Footer />
    </div>
  );
};

export default InternationalAudits;

const AuditHero = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
      {/* Heading */}
      <div className="text-center mb-6 md:mb-8">
        <h1 className="font-playfair text-3xl md:text-5xl font-bold text-[#1e1e1e] mb-3 md:mb-4">
          International Audit Excellence
        </h1>

        <p className="text-base md:text-lg font-geist text-gray-600 max-w-2xl md:max-w-3xl mx-auto">
          We provide comprehensive audit and certification services across
          industries worldwide, ensuring the highest standards of quality and
          compliance for our clients.
        </p>
      </div>

      {/* Button */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-10">
        <button className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#1A8781] text-white py-3 px-8 rounded-full shadow-lg hover:bg-[#125E5A] transition-all duration-300 group">
          <span className="font-medium font-geist">Our Services</span>
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30">
            <div className="w-2 h-2 border-t-2 border-r-2 border-white rotate-45"></div>
          </div>
        </button>

        <button className="w-full md:w-auto items-center gap-3 border-2 border-[#1A8781]/30 text-[#1A8781] py-3 px-8 rounded-full hover:border-[#1A8781] hover:bg-[#1A8781]/5 transition-all duration-300">
          <span className="font-medium font-geist">Contact Us</span>
        </button>
      </div>

      <h2 className="text-3xl md:text-4xl text-center mb-4">
        {/* <span className="text-[#0A4394] font-geist font-medium mr-1 ">/</span> */}
        <span className="font-playfair font-bold text-[#1e1e1e]">Audit Glimpse</span>
      </h2>

      <p className="text-base md:text-lg text-center font-geist text-gray-600 max-w-xl md:max-w-xl mx-auto leading-relaxed">
        A glimpse into our international audit and certification processes
        across various industries
      </p>
    </div>
  );
};

const AuditGallery = () => {
  const galleryImages = [
    {
      id: 1,
      image: BahrainAudit,
      title: "Bahrain",
    },
    {
      id: 2,
      image: VietnamAudit,
      title: "Vietnam",
    },
    {
      id: 3,
      image: IndonesiaAudit,
      title: "Indonesia",
    },
    {
      id: 4,
      image: Vietnam2Audit,
      title: "Vietnam",
    },
    {
      id: 5,
      image: ItalyAudit,
      title: "Italy",
    },
    {
      id: 6,
      image: Vietnam3Audit,
      title: "Vietnam",
    },
    {
      id: 7,
      image: MalaysiaAudit,
      title: "Malaysia",
    },
    {
      id: 8,
      image: SloveniaAudit,
      title: "Slovenia",
    },
    {
      id: 9,
      image: Vietnam4Audit,
      title: "Vietnam",
    },
    {
      id: 10,
      image: ThailandAudit,
      title: "Thailand",
    },
  ];

  return (
    <div className="max-w-[88rem] mx-auto px-4 pb-12 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((item) => (
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
            {/* Country Name Overlay - Always Visible */}
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
