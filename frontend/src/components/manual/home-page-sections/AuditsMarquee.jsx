import { useState, useEffect, useRef } from "react";

const AuditsMarquee = () => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);
  const [duplicatedImages, setDuplicatedImages] = useState([]);

  // Gallery images from InternationalAudits.jsx
  const galleryImages = [
    {
      id: 1,
      image: "/auditImages/Bahrain.webp",
      title: "Bahrain Audit",
      description:
        "Successful Audit and Grant of BIS License on Aluminium Products under IS 617 and 2590 for one of the world's leading manufacturer in Bahrain",
    },
    {
      id: 2,
      image: "/auditImages/Vietnam.webp",
      title: "Vietnam Audit",
      description:
        "Successful Audit and Grant of BIS License on Toys under IS 9873 for one of the world's leading manufacturer in Vietnam",
    },
    {
      id: 3,
      image: "/auditImages/Indonesia.webp",
      title: "Indonesia Audit",
      description:
        "Successful Audit and Grant of BIS License on Toys under IS 9873 for one of the world's leading manufacturer in Indonesia",
    },
    {
      id: 4,
      image: "/auditImages/Vietnam-2.webp",
      title: "Vietnam Audit",
      description:
        "Successful Audit and Grant of BIS License on Toys under IS 9873 for one of the world's leading manufacturer in Vietnam",
    },
    {
      id: 5,
      image: "/auditImages/Italy-2.webp",
      title: "Italy Audit",
      description:
        "Successful Audit and Grant of BIS License on Footwear under IS 6721 for one of the world's leading manufacturer in Italy",
    },
    {
      id: 6,
      image: "/auditImages/Vietnam-3.webp",
      title: "Vietnam Audit",
      description:
        "Successful Audit and Grant of BIS License on Sewing Machines under IS 15449 for one of the world's leading manufacturer in Vietnam",
    },
    {
      id: 7,
      image: "/auditImages/Malaysia.webp",
      title: "Malaysia Audit",
      description:
        "Successful Audit and Grant of BIS License on Toys under IS 9873 for one of the world's leading manufacturer in Malaysia",
    },
    {
      id: 8,
      image: "/auditImages/Slovenia.webp",
      title: "Slovenia Audit",
      description:
        "Successful Audit and Grant of BIS License on Hinges under IS 18297 for one of the world's leading manufacturer in Slovenia",
    },
    {
      id: 9,
      image: "/auditImages/Vietnam-4.webp",
      title: "Vietnam Audit",
      description:
        "Successful Audit and Grant of BIS License on Steel Products under IS 6911 for one of the world's leading manufacturer in Vietnam",
    },
    {
      id: 10,
      image: "/auditImages/Thailand.webp",
      title: "Thailand Audit",
      description:
        "Successful Audit and Grant of BIS License on Toys under IS 9873 for one of the world's leading manufacturer in Thailand",
    },
    {
      id: 11,
      image: "/auditImages/USA.webp",
      title: "USA Audit",
      description:
        "Successful Audit and Grant of BIS License on Steel Products under IS 6911 for one of the world's leading manufacturer in USA",
    },
    {
      id: 12,
      image: "/auditImages/Spain.webp",
      title: "Spain Audit",
      description:
        "Successful Audit and Grant of BIS License on Aluminium Products under IS 1285 and IS 733 for one of the world's leading manufacturer in Spain",
    },
    {
      id: 13,
      image: "/auditImages/Turkey.webp",
      title: "Turkey Audit",
      description:
        "Successful Audit and Grant of BIS License on Footwear under IS 6721 and IS 17043 Part 2 for one of the world's leading manufacturer in Turkey",
    },
    {
      id: 14,
      image: "/auditImages/bis-certification-inspection-malaysia.webp",
      title: "Malaysia Audit",
      description:
        "Successful Audit and Grant of BIS License on Measuring Tape under IS 1269 Part 2 for one of the world's leading manufacturer in Malaysia",
    },
  ];

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    // React-friendly duplication approach - same as VideoSection and LogoTicker
    const duplicated = [...galleryImages, ...galleryImages, ...galleryImages];
    // console.log("Total audit images after duplication:", duplicated.length);
    setDuplicatedImages(duplicated);

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
    <div className="bg-white pt-8">
      <div className="max-w-[88rem] mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold  drop-shadow-lg font-playfair text-center mb-10 text-[#1e1e1e] tracking-tight">
          International Audit Glimpse
        </h2>
        {/* Infinite scroll for audit images */}
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
                className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl bg-white shrink-0"
                style={{ minWidth: "300px", maxWidth: "400px" }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.description || item.title || `Audit ${item.id}`}
                    title={item.description || item.title || `Audit ${item.id}`}
                    className="w-full h-full object-cover transform transition-transform duration-700 md:group-hover:scale-110"
                    width="300"
                    height="300"
                    loading="lazy"
                    decoding="async"
                    style={{ color: "transparent" }}
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
      </div>
    </div>
  );
};

export default AuditsMarquee;
