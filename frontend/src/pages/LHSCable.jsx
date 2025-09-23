import ServiceContactForm from "@/common/ServiceContactForm";
import CDSCOContentRight from "@/components/manual/ServicesRightSideContent/CDSCOContentRight";
import { useEffect, useRef, useState } from "react";
import { ServiceFaq } from "./ISIMark";
import Services from "@/components/manual/Services";

const LHSCable = () => {
  return (
    <main className="w-full">
      <LHSCableHero />
      <LHSCableIndex />
      <LHSCableContent />
    </main>
  );
};

export default LHSCable;

const LHSCableHero = () => {
  return (
    <main className="relative pt-[30px] md:pt-[104px] pb-[30px] md:pb-[106px] overflow-x-hidden bg-[#F9F7F2]">
      {/* Background gradient */}
      <div className="hidden md:block absolute inset-0 rounded-bl-full z-10 transform translate-x-1/2 custom-radial-gradient-cdsco"></div>

      {/* Decorative elements */}
      <div
        className="absolute top-[20%] z-[10] right-[15%] w-[20px] h-[20px] rounded-full bg-[#1A8781]/30 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-[84rem] gap-[40px] md:gap-[90px] flex flex-col md:flex-row items-center justify-center h-full w-full mx-auto px-4 md:px-0">
        {/* Left Side */}
        <div className="relative flex flex-col gap-6 md:gap-8 w-full md:w-[533px] items-start">
          <div className="inline-flex items-center">
            <div className="h-[3px] w-[40px] bg-[#1A8781] mr-4"></div>
            <span className="text-[#1A8781] font-poppins text-sm font-medium tracking-wider uppercase">
              Certified Expertise
            </span>
          </div>

          <h1 className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              TEC Certification
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
          </h1>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            MTCTE Certification ensures telecom equipment compliance with Indian
            standards.
          </p>

          <div className="flex items-center -mt-2">
            <div
              className="flex items-center cursor-pointer group"
              onClick={() => {
                const servicesSection = document.getElementById("services");
                if (servicesSection) {
                  servicesSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#125E5A]/30 group-hover:border-[#125E5A] transition-all duration-300 mr-3">
                <div className="w-3 h-3 border-t-2 border-r-2 border-[#125E5A] rotate-45 translate-x-[-1px]"></div>
              </div>
              <span className="font-geist text-[#125E5A] text-[18px] font-medium group-hover:translate-x-1 transition-all duration-300">
                View Services
              </span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <ServiceContactForm />
      </div>
    </main>
  );
};

const LHSCableIndex = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("Overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const stickyRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const SECTIONS = [
    "Overview",
    "Standardization",
    "Representation",
    "Document",
    "Process",
    "Costing",
    "Surveillance",
    "Facilitator",
  ];

  const handleItemClick = (item) => {
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(item);
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (stickyRef.current) {
        const rect = stickyRef.current.getBoundingClientRect();
        setIsSticky(rect.top <= 44);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = SECTIONS.map((section) => {
        const element = document.getElementById(section.toLowerCase());
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id: section,
            top: rect.top,
            bottom: rect.bottom,
            element,
          };
        }
        return null;
      }).filter(Boolean);

      // Find the section that's currently most visible in viewport
      // Check which section's top is closest to the top of viewport (with some offset)
      const currentSection = sections.find((section) => {
        return section.top <= 150 && section.bottom > 150;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      } else {
        // If no section is in the sweet spot, find the one closest to top
        const closestSection = sections.reduce((closest, section) => {
          if (!closest) return section;

          const currentDistance = Math.abs(section.top - 150);
          const closestDistance = Math.abs(closest.top - 150);

          return currentDistance < closestDistance ? section : closest;
        }, null);

        if (closestSection) {
          setActiveSection(closestSection.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={stickyRef}
      className={`sticky top-0 md:top-[44px] z-[50] transition-colors duration-300 w-full h-auto md:h-20 ${isSticky ? "bg-white/70 backdrop-blur-lg" : "bg-[#B9DEEB]"
        }`}
    >
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center justify-between px-4 h-20">
        <div className="text-base font-semibold font-geist tracking-wider uppercase text-blue-900">
          {activeSection}
        </div>
        <button
          ref={toggleButtonRef}
          onClick={toggleMobileMenu}
          className="p-2 rounded-md hover:bg-blue-100 transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-900"
            fill="none"
            viewBox="0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50 border-t border-gray-200"
        >
          <div className="flex flex-col py-2">
            {SECTIONS.map((item) => (
              <div
                key={item}
                onClick={() => handleItemClick(item)}
                className={`px-4 py-3 cursor-pointer transition-colors ${item === activeSection
                    ? "bg-blue-50 text-blue-900 font-semibold"
                    : "text-blue-950 hover:bg-blue-50"
                  }`}
              >
                <div className="font-geist tracking-wider uppercase">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between px-12 h-full max-w-[88rem] mx-auto overflow-x-auto">
        {SECTIONS.map((item) => (
          <div
            key={item}
            onClick={() => handleItemClick(item)}
            className="relative cursor-pointer group whitespace-nowrap px-2"
          >
            <div
              className={`text-base font-semibold font-geist tracking-wider uppercase transition-colors duration-300 ${item === activeSection
                  ? "text-blue-900"
                  : "text-blue-950 group-hover:text-blue-900"
                }`}
            >
              {item}
            </div>
            <div
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 transition-transform duration-300 ${item === activeSection
                  ? "scale-x-100"
                  : "scale-x-0 group-hover:scale-x-100"
                }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const LHSCableContent = () => {
  return (
    <>
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side */}
          <LHSCableContentLeft />

          {/* Right Side */}
          <FormCard />
        </div>
      </div>
      <ServiceFaq />
      <div id="services">
        <Services />
      </div>
    </>
  );
};

const LHSCableContentLeft = () => {
  return (
    <div className="flex-1">
      <div className="flex flex-col gap-[20px] md:gap-[40px]">
        Overview


      </div>
    </div>
  );
};


const FormCard = () => {
  return (
    <div className="flex flex-col gap-6 w-full md:w-[360px]">
      <div className="w-full md:w-[360px] md:sticky md:top-[128px] md:self-start  p-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Yaha ek card bana do stunning sa jismePhone number , email , address likha aayega bas   */}
      </div>
    </div>
  )
}