import React, { useEffect } from "react";
import { motion } from "motion/react";
import { useAnimationControls } from "framer-motion";
import { Separator } from "@/components/ui/separator";

// What Our Customers Say Section
export const WhatsOurCustomersSaySection = () => {
  const controls = useAnimationControls(); // Initialize controls

  useEffect(() => {
    controls.start({
      x: ["0%", "-100%"], // Animation for horizontal scroll
      transition: {
        duration: 20, // Adjust duration for desired speed
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      },
    });
  }, [controls]);

  const testimonials = [
    {
      id: 1,
      name: "Ms.Eliyawati",
      role: "PT Quty Karunia, BIS Licensee in Vietnam",
      content:
        "Sun Certifications India provided excellent BIS Certification services. Their unparalleled service and sincerity gained our trust. One of the best BIS consultants in India!",
    },
    {
      id: 2,
      name: "Ms.Belle",
      role: "Thantawan Industries Ltd, BIS Licensee in Thailand",
      content:
        "Sun Certifications India supported us throughout the BIS certification process. Their responsive customer service and punctuality are exceptional. Highly recommend for hassle-free BIS certification.",
    },
    {
      id: 3,
      name: "Ms.Jun Min Sim",
      role: "Leaderart Industries , BIS Licensee in Malaysia",
      content:
        "Sun Certifications India helped us acquire BIS Certification, doubling our engagement in India. Their services are fast, genuine, and up-to-date with latest BIS norms.",
    },
  ];

  // Helper function to generate avatar URL
  const getAvatarUrl = (name) => {
    const [firstName, lastName] = name.split(" ");
    return `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`;
  };

  return (
    <div className="bg-white pt-5  pb-8 ">
      {/* <div className="custom-radial-gradient pt-10 pb-8 "> */}
      <div className="max-w-[88rem] px-8 w-full mx-auto ">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-[30px] md:text-[48px] font-bold font-roboto  text-center text-[#1E1E1E] ">
            Our Testimonials
          </h2>

          <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
            <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
            <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
              What our clients have to say
            </span>
            <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
          </div>
        </div>

        {/* Testimonials Scroll Container */}
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={controls} // Use controls here
            onMouseEnter={() => controls.stop()} // Pause on hover
            onMouseLeave={() => {
              // Restart animation on mouse leave
              controls.start({
                x: ["0%", "-100%"],
                transition: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                },
              });
            }}
            className="flex gap-8 md:gap-6 pt-10 pb-12" // Removed 'group' class
          >
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="min-w-[400px] bg-[#B5DDEB] p-8 rounded-[20px] shadow-2xl shadow-blue-500/20 relative" // Removed 'group-hover:[animation-play-state:paused]'
                  >
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6">
                      <svg
                        className="w-9 h-9 text-[#64bfdd] opacity-70"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>

                    {/* User Info */}
                    <div className="flex items-center gap-4 mb-6 pr-12">
                      <img
                        src={getAvatarUrl(testimonial.name)}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-[#1A8781]/30 flex-shrink-0"
                      />
                      <div className="flex flex-col justify-center min-w-0">
                        <h3 className="font-roboto font-bold text-lg leading-tight text-neutral-800 truncate">
                          {testimonial.name}
                        </h3>
                        <p className="font-roboto text-sm text-neutral-600 leading-snug">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <p className="font-poppins text-[#5a4a4a] leading-relaxed text-base">
                      {testimonial.content}
                    </p>
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

export default WhatsOurCustomersSaySection;
