import { useState, useEffect, useRef } from 'react'

const SECTIONS = [
  "Overview",
  "Eligibility",
  "Classification",
  "Documents",
  "Registration",
  "Licensing",
  "Consulting",
  "FAQs",
];

const Index = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [activeSection, setActiveSection] = useState("Overview")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const stickyRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const toggleButtonRef = useRef(null)

  // Helper function to convert section name to element ID
  const getSectionElementId = (section) => section === "FAQs" ? "faqs" : section.toLowerCase();

  const handleItemClick = (item) => {
    const elementId = getSectionElementId(item);
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(item);
      setIsMobileMenuOpen(false); // Close mobile menu after clicking
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
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

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if the element is intersecting and its position relative to viewport
        const rect = entry.boundingClientRect;
        const isAtTop = rect.top <= 1; // Added small buffer
        setIsSticky(!entry.isIntersecting || (isAtTop && entry.intersectionRatio < 1));
      },
      {
        threshold: [0, 1],  // Observe both when fully visible and when starting to intersect
        rootMargin: '-1px 0px 0px 0px'
      }
    );

    if (stickyRef.current) {
      observer.observe(stickyRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            if (entry.target.id === "faqs") {
              setActiveSection("FAQs");
            } else {
              // Convert id like "overview" to "Overview"
              const sectionName = entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1);
              setActiveSection(sectionName);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe each section
    SECTIONS.forEach(section => {
      const elementId = getSectionElementId(section);
      const element = document.getElementById(elementId);
      if (element) {
        sectionObserver.observe(element);
      }
    });

    return () => sectionObserver.disconnect();
  }, []);

  return (
    <div
      ref={stickyRef}
      className={`sticky top-0 z-[60] transition-colors duration-300 w-full h-auto md:h-20 ${
        isSticky ? 'bg-white/70 backdrop-blur-lg' : 'bg-[#B9DEEB]'
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
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
                className={`px-4 py-3 cursor-pointer transition-colors ${
                  item === activeSection 
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
              className={`text-base font-semibold font-geist tracking-wider uppercase transition-colors duration-300 ${
                item === activeSection ? "text-blue-900" : "text-blue-950 group-hover:text-blue-900"
              }`}
            >
              {item}
            </div>
            <div
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 transition-transform duration-300 ${
                item === activeSection ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Index
