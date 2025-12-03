import React from "react";

// Certification Images
import CertificationImage from "../../../assets/images/certone.webp";
import CertificationImageTwo from "../../../assets/images/certtwo.webp";

const CertificationAndAchievements = () => {
  // Only 4 certificates as requested
  const galleryImages = [
    {
      id: 1,
      image: CertificationImage,
      title: "Medical Chennai 2023",
    },
    {
      id: 2,
      image: CertificationImageTwo,
      title: "Medical Kolkata 2022",
    },
    {
      id: 3,
      image: CertificationImage,
      title: "Narela Association Seminar Footwear",
    },
    {
      id: 4,
      image: CertificationImageTwo,
      title: "Delhi Footwear Exhibition Audits",
    },
  ];

  return (
    <div className="bg-white pt-8 py-4">
      <div className="max-w-[88rem] mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold drop-shadow-lg font-playfair text-center mb-10 text-[#1e1e1e] tracking-tight">
          Certification And Achievements
        </h2>

        {/* Static grid layout - responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#1A8781]/60 hover:border-[#0A4394] transition-all duration-300 group hover:scale-105 hover:shadow-[0_8px_40px_-8px_rgba(26,135,129,0.25)]"
              style={{
                boxShadow:
                  "0 8px 40px -8px rgba(26,135,129,0.10), 0 1.5px 8px 0 rgba(10,67,148,0.08)",
              }}
            >
              <div className="relative w-full h-[140px] md:h-[160px] overflow-hidden bg-gray-200">
                <img
                  src={item.image}
                  alt={`BIS Certification Achievement - ${item.title} - Sun Certifications India`}
                  title={`BIS Certification Achievement - ${item.title} - Sun Certifications India`}
                  loading="lazy"
                  decoding="async"
                  width={905}
                  height={472}
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationAndAchievements;
