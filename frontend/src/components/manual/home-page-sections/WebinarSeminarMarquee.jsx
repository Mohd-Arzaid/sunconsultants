import { Marquee } from "@/components/magicui/marquee";

// Seminar & Exhibition Images
import Exhibition1 from "../../../assets/seminarImages/Exhibition-1.jpg";
import Exhibition2 from "../../../assets/seminarImages/Exhibition-2.jpg";
import Exhibition3 from "../../../assets/seminarImages/Exhibition-3.jpg";
import Seimar82 from "../../../assets/seminarImages/Seimar-8-2.png";
import Seminar4 from "../../../assets/seminarImages/Seminar-4.jpg";
import Seminar5 from "../../../assets/seminarImages/Seminar-5.jpg";
import Seminar62 from "../../../assets/seminarImages/Seminar-6-2.jpg";
import Seminar6 from "../../../assets/seminarImages/Seminar-6.jpg";
import Seminar72 from "../../../assets/seminarImages/Seminar-7-2.jpg";
import Seminar7 from "../../../assets/seminarImages/Seminar-7.jpg";
import Seminar8 from "../../../assets/seminarImages/Seminar-8.png";
import Seminar9 from "../../../assets/seminarImages/Seminar-9.jpg";
import Seminar102 from "../../../assets/seminarImages/Seminar-10-2.jpg";
import Seminar103 from "../../../assets/seminarImages/Seminar-10-3.jpg";
import Seminar10 from "../../../assets/seminarImages/Seminar-10.jpg";
import Seminar11 from "../../../assets/seminarImages/Seminar-11.jpg";

const WebinarSeminarMarquee = () => {
  // Gallery images from InternationalAudits.jsx
  const galleryImages = [
    {
      id: 1,
      image: Exhibition1,
      title: "Exhibition 1",
    },
    {
      id: 2,
      image: Exhibition2,
      title: "Exhibition 2",
    },
    {
      id: 3,
      image: Exhibition3,
      title: "Exhibition 3",
    },
    {
      id: 4,
      image: Seminar4,
      title: "Seminar 4",
    },
    {
      id: 5,
      image: Seminar5,
      title: "Seminar 5",
    },
    {
      id: 6,
      image: Seminar6,
      title: "Seminar 6",
    },
    {
      id: 7,
      image: Seminar62,
      title: "Seminar 6-2",
    },
    {
      id: 8,
      image: Seminar7,
      title: "Seminar 7",
    },
    {
      id: 9,
      image: Seminar72,
      title: "Seminar 7-2",
    },
    {
      id: 10,
      image: Seminar8,
      title: "Seminar 8",
    },
    {
      id: 11,
      image: Seimar82,
      title: "Seminar 8-2",
    },
    {
      id: 12,
      image: Seminar9,
      title: "Seminar 9",
    },
    {
      id: 13,
      image: Seminar10,
      title: "Seminar 10",
    },
    {
      id: 14,
      image: Seminar102,
      title: "Seminar 10-2",
    },
    {
      id: 15,
      image: Seminar103,
      title: "Seminar 10-3",
    },
    {
      id: 16,
      image: Seminar11,
      title: "Seminar 11",
    },
    // {
    //   id: 17,
    //   image: Seminar12,
    //   title: "Seminar 12",
    // },
  ];

  return (
    <div className="bg-white pt-8 pb-2">
      <div className="max-w-[88rem] mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold uppercase font-playfair text-center mb-10 text-[#1e1e1e] tracking-tight">
          Seminars/Exhibitions
        </h2>
        {/* Marquee for desktop, scroll for mobile */}
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <Marquee
            className="flex  items-center pt-4 pb-8 [--duration:70s]"
            pauseOnHover={true}
          >
            {galleryImages.map((item) => (
              <div
                key={item.id}
                className="relative min-w-[340px] max-w-[400px] bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#1A8781]/60 hover:border-[#0A4394] transition-all duration-300 group hover:scale-105 hover:shadow-[0_8px_40px_-8px_rgba(26,135,129,0.25)]"
                style={{
                  boxShadow:
                    "0 8px 40px -8px rgba(26,135,129,0.10), 0 1.5px 8px 0 rgba(10,67,148,0.08)",
                }}
              >
                <div className="relative w-full h-[260px] md:h-[320px] overflow-hidden bg-gray-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style={{
                      imageRendering: "auto",
                      opacity: "0",
                      transition: "opacity 0.3s ease-in-out",
                    }}
                    onLoad={(e) => {
                      e.target.style.opacity = "1";
                    }}
                  />
                  {/* Gradient overlay for title */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1A8781]/90 via-[#1A8781]/40 to-transparent flex items-end justify-center">
                    {/* <span className="w-full text-center px-4 pb-3 text-lg md:text-2xl font-bold font-playfair text-white drop-shadow-lg tracking-wide">
                      {item.title}
                    </span> */}
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default WebinarSeminarMarquee;
