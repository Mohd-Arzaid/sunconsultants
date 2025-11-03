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
    },
    {
      id: 2,
      image: "/auditImages/Vietnam.webp",
      title: "Vietnam Audit",
    },
    {
      id: 3,
      image: "/auditImages/Indonesia.webp",
      title: "Indonesia Audit",
    },
    {
      id: 4,
      image: "/auditImages/Vietnam-2.webp",
      title: "Vietnam Audit",
    },
    {
      id: 5,
      image: "/auditImages/Italy-2.webp",
      title: "Italy Audit",
    },
    {
      id: 6,
      image: "/auditImages/Vietnam-3.webp",
      title: "Vietnam Audit",
    },
    {
      id: 7,
      image: "/auditImages/Malaysia.webp",
      title: "Malaysia Audit",
    },
    {
      id: 8,
      image: "/auditImages/Slovenia.webp",
      title: "Slovenia Audit",
    },
    {
      id: 9,
      image: "/auditImages/Vietnam-4.webp",
      title: "Vietnam Audit",
    },
    {
      id: 10,
      image: "/auditImages/Thailand.webp",
      title: "Thailand Audit",
    },
    {
      id: 11,
      image: "/auditImages/USA.webp",
      title: "USA Audit",
    },
    {
      id: 12,
      image: "/auditImages/Spain.webp",
      title: "Spain Audit",
    },
    {
      id: 13,
      image: "/auditImages/Turkey.webp",
      title: "Turkey Audit",
    },
    {
      id: 14,
      image: "/auditImages/bis-certification-inspection-malaysia.webp",
      title: " Malaysia Audit",
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
        console.log("Audit animation started!");
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
                    alt={`BIS License inspection at ${item.title} manufacturing facility with Sun Certifications India's representatives.`}
                    title={`BIS Certification Inspection Visit in ${item.title} – Sun Certifications India`}
                    className="w-full h-full object-cover transform transition-transform duration-700 md:group-hover:scale-110"
                    width={400}
                    height={300}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
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
