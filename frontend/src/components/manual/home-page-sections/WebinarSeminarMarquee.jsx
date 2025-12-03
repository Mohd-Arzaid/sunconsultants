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
      description:
        "Medicall ( Kolkata ) exibition for BIS & CDSCO approval for  Medical Products.",
    },
    {
      id: 2,
      image: "/seminarImages/Exhibition-2.webp",
      title: "Exhibition 2",
      description:
        "Medicall ( Delhi ) exibition for BIS & CDSCO approval for  Medical Products.",
    },
    {
      id: 3,
      image: "/seminarImages/Exhibition-3.webp",
      title: "Exhibition 3",
      description: "Seminar / Training Session on BIS Regulations in Thailand ",
    },
    {
      id: 4,
      image: "/seminarImages/Seminar-4.webp",
      title: "Seminar 4",
      description:
        "Training for BIS Certification on Footwear for members of footwear association New Delhi",
    },
    {
      id: 5,
      image: "/seminarImages/Seminar-5.webp",
      title: "Seminar 5",
      description:
        "Medicall ( Chennai ) exibition for BIS & CDSCO approval for  Medical Products.",
    },
    {
      id: 6,
      image: "/seminarImages/Seminar-6.webp",
      title: "Seminar 6",
      description:
        "Training for BIS Certification to Footwear Import Association in New Delhi , India",
    },
    {
      id: 7,
      image: "/seminarImages/Seminar-6-2.webp",
      title: "Seminar 6-2",
      description: "Training sessions on BIS in Metal Industry",
    },
    {
      id: 8,
      image: "/seminarImages/Seminar-7.webp",
      title: "Seminar 7",
      description: "Participation in Footwear India Expo ( New Delhi )",
    },
    {
      id: 9,
      image: "/seminarImages/Seminar-7-2.webp",
      title: "Seminar 7-2",
      description:
        "Seminar on BIS Certification for Steel and Aluminium QCOs in Kolkata",
    },
    {
      id: 10,
      image: "/seminarImages/Seminar-8.webp",
      title: "Seminar 8",
      description: "Seminar on BIS Certification for Toys in Mumbai , India",
    },
    {
      id: 11,
      image: "/seminarImages/Seimar-8-2.webp",
      title: "Seminar 8-2",
      description:
        "Specialized training for footwear manufacturers and suppliers.",
    },
    {
      id: 12,
      image: "/seminarImages/Seminar-9.webp",
      title: "Seminar 9",
      description:
        "Participation in Footwear Conclave on BIS Certification at Agra",
    },
    {
      id: 13,
      image: "/seminarImages/Seminar-10.webp",
      title: "Seminar 10",
      description:
        "Invited by Malaysian Government to educate Malaysian Exporters about Indian BIS Regulations",
    },
    {
      id: 14,
      image: "/seminarImages/Seminar-10-2.webp",
      title: "Seminar 10-2",
      description:
        "Seminar on Indian BIS Certificate in Vietnam for Furniture Products",
    },
    {
      id: 15,
      image: "/seminarImages/Seminar-10-3.webp",
      title: "Seminar 10-3",
      description: "Certificate of appreciation from Malaysian Government.",
    },
    {
      id: 16,
      image: "/seminarImages/Seminar-11.webp",
      title: "Seminar 11",
      description:
        "Training sessions for members of Retailers Association of India (RAI)",
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
      // Calculate speed based on total width of images
      const totalWidth = galleryImages.length * 350; // Approximate width per image (300px + 50px gap)
      const pixelsPerSecond = 50; // Consistent speed: 50 pixels per second
      const duration = totalWidth / pixelsPerSecond;

      containerRef.current.style.setProperty(
        "--animation-duration",
        `${duration}s`
      );
    }
  };

  return (
    <div className="bg-white pt-8 pb-2">
      <div className="max-w-[88rem] mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold font-playfair drop-shadow-lg text-center mb-10 text-[#1e1e1e] tracking-tight">
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
            {duplicatedImages.map((item, index) => {
              // Mark duplicates as hidden from SEO (only first set should be indexed)
              const isDuplicate = index >= galleryImages.length;

              return (
                <div
                  key={`${item.id}-${index}`}
                  className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl bg-white shrink-0"
                  style={{ minWidth: "300px", maxWidth: "400px" }}
                  aria-hidden={isDuplicate ? "true" : undefined}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={
                        item.description ||
                        item.title ||
                        `Seminar/Exhibition ${item.id}`
                      }
                      title={
                        item.description ||
                        item.title ||
                        `Seminar/Exhibition ${item.id}`
                      }
                      loading={isDuplicate ? "lazy" : "eager"}
                      width="300"
                      height="300"
                      decoding="async"
                      className="w-full h-full object-cover transform transition-transform duration-700 md:group-hover:scale-110"
                      style={{ color: "transparent" }}
                      aria-hidden={isDuplicate ? "true" : undefined}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarSeminarMarquee;
