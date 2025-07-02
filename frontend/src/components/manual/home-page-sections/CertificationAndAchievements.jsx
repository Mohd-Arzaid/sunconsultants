import React, { useEffect } from "react";
import { motion } from "motion/react";
import { useAnimationControls } from "framer-motion";

// Certification Images
import CertificationImage from "../../../assets/images/certone.jpg";
import CertificationImageTwo from "../../../assets/images/certtwo.jpg";

const CertificationAndAchievements = () => {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      translateX: "-50%",
      transition: {
        duration: 30, // Adjust duration as needed
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      },
    });
  }, [controls]);

  // Gallery images from InternationalAudits.jsx
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
    {
      id: 5,
      image: CertificationImage,
      title: "Karol Bagh Association Footwear Seminar",
    },
    {
      id: 6,
      image: CertificationImageTwo,
      title: "Medical 2023",
    },
  ];

  return (
    <div className="bg-white pt-8 py-4">
      <div className="max-w-[88rem] mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold font-playfair text-center mb-10 text-[#1e1e1e] tracking-tight">
          Certification And Achievements
        </h2>
        {/* Marquee for desktop, scroll for mobile */}
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={controls}
            onMouseEnter={() => controls.stop()}
            onMouseLeave={() => {
              controls.start({
                translateX: "-50%",
                transition: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                },
              });
            }}
            className="flex items-center pb-8 [--duration:30s]"
          >
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                {galleryImages.map((item) => (
                  <div
                    key={item.id}
                    className="relative min-w-[200px] max-w-[220px] bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#1A8781]/60 hover:border-[#0A4394] transition-all duration-300 group hover:scale-105 hover:shadow-[0_8px_40px_-8px_rgba(26,135,129,0.25)] mx-4"
                    style={{
                      boxShadow:
                        "0 8px 40px -8px rgba(26,135,129,0.10), 0 1.5px 8px 0 rgba(10,67,148,0.08)",
                    }}
                  >
                    <div className="relative w-full h-[140px] md:h-[160px] overflow-hidden bg-gray-200">
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
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CertificationAndAchievements;
