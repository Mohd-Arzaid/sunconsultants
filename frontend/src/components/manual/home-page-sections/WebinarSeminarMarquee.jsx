import { useState, useEffect, useRef } from "react";

const WebinarSeminarMarquee = () => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);
  const [duplicatedImages, setDuplicatedImages] = useState([]);

  // Gallery images from InternationalAudits.jsx
  const galleryImages = [
    {
      id: 1,
      image: "/seminarImages/Exhibition-1.webp",
      title: "Exhibition 1",
    },
    {
      id: 2,
      image: "/seminarImages/Exhibition-2.webp",
      title: "Exhibition 2",
    },
    {
      id: 3,
      image: "/seminarImages/Exhibition-3.webp",
      title: "Exhibition 3",
    },
    {
      id: 4,
      image: "/seminarImages/Seminar-4.webp",
      title: "Seminar 4",
    },
    {
      id: 5,
      image: "/seminarImages/Seminar-5.webp",
      title: "Seminar 5",
    },
    {
      id: 6,
      image: "/seminarImages/Seminar-6.webp",
      title: "Seminar 6",
    },
    {
      id: 7,
      image: "/seminarImages/Seminar-6-2.webp",
      title: "Seminar 6-2",
    },
    {
      id: 8,
      image: "/seminarImages/Seminar-7.webp",
      title: "Seminar 7",
    },
    {
      id: 9,
      image: "/seminarImages/Seminar-7-2.webp",
      title: "Seminar 7-2",
    },
    {
      id: 10,
      image: "/seminarImages/Seminar-8.webp",
      title: "Seminar 8",
    },
    {
      id: 11,
      image: "/seminarImages/Seimar-8-2.webp",
      title: "Seminar 8-2",
    },
    {
      id: 12,
      image: "/seminarImages/Seminar-9.webp",
      title: "Seminar 9",
    },
    {
      id: 13,
      image: "/seminarImages/Seminar-10.webp",
      title: "Seminar 10",
    },
    {
      id: 14,
      image: "/seminarImages/Seminar-10-2.webp",
      title: "Seminar 10-2",
    },
    {
      id: 15,
      image: "/seminarImages/Seminar-10-3.webp",
      title: "Seminar 10-3",
    },
    {
      id: 16,
      image: "/seminarImages/Seminar-11.webp",
      title: "Seminar 11",
    },
    // {
    //   id: 17,
    //   image: Seminar12,
    //   title: "Seminar 12",
    // },
  ];

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    // React-friendly duplication approach - same as other components
    const duplicated = [...galleryImages, ...galleryImages, ...galleryImages];
    // console.log("Total seminar images after duplication:", duplicated.length);
    setDuplicatedImages(duplicated);

    if (containerRef.current) {
      getDirection();
      getSpeed();

      // Small delay to ensure DOM is ready
      setTimeout(() => {
        setStart(true);
        // console.log("Seminar animation started!");
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
      containerRef.current.style.setProperty("--animation-duration", "70s"); // Same as original duration
    }
  };

  return (
    <div className="bg-white pt-8 pb-2">
      <div className="max-w-[88rem] mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold uppercase font-playfair text-center mb-10 text-[#1e1e1e] tracking-tight">
          Seminars/Exhibitions
        </h2>
        {/* Infinite scroll for seminar images */}
        <div
          ref={containerRef}
          className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        >
          <div
            ref={scrollerRef}
            className={`flex items-center pt-4 pb-8 w-max gap-6 ${
              start ? "animate-scroll" : ""
            } hover:[animation-play-state:paused]`}
          >
            {duplicatedImages.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="relative min-w-[340px] max-w-[400px] bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#1A8781]/60 hover:border-[#0A4394] transition-all duration-300 group hover:scale-105 hover:shadow-[0_8px_40px_-8px_rgba(26,135,129,0.25)] shrink-0"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarSeminarMarquee;
