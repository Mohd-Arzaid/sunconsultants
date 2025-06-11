import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { useState, useEffect } from "react";

const SocialFloatingButtons = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Add a small delay before showing the buttons for a nice entrance effect
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`hidden md:flex fixed bottom-4 left-4 md:bottom-6 md:left-6  flex-col gap-3 md:gap-4 z-[80] transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
    >
      <a
        href="https://wa.me/yourphonenumber" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-green-400/50 relative overflow-hidden"
        aria-label="WhatsApp"
      >
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity rounded-full"></div>
        <FaWhatsapp className="text-white text-xl md:text-2xl group-hover:scale-125 transition-transform duration-300" />
        <span className="hidden md:block absolute left-16 bg-black/80 text-white px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm whitespace-nowrap shadow-lg translate-x-2 group-hover:translate-x-0">
          Chat on WhatsApp
        </span>
      </a>

      <a
        href="tel:yourphonenumber" // Replace with your phone number
        className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-blue-400/50 relative overflow-hidden"
        aria-label="Call Us"
      >
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity rounded-full"></div>
        <FaPhone className="text-white text-lg md:text-xl group-hover:scale-125 transition-transform duration-300" />
        <span className="hidden md:block absolute left-16 bg-black/80 text-white px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm whitespace-nowrap shadow-lg translate-x-2 group-hover:translate-x-0">
          Call Us
        </span>
      </a>

      {/* Pulsing effect behind the icons */}
      <div className="absolute -z-10 bottom-6 left-6 w-10 h-10 md:w-12 md:h-12 bg-green-500/20 rounded-full animate-ping-slow"></div>
    </div>
  );
};

export default SocialFloatingButtons; 