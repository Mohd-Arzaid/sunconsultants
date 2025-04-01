import React, { useState, useEffect, useRef, useMemo } from 'react'

// Move sections array outside to avoid recreation on each render
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
  const stickyRef = useRef(null)

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
    }
  }

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
      className={`sticky top-0 z-[60] transition-colors duration-300 w-full h-20 ${
        isSticky ? 'bg-white/70 backdrop-blur-lg' : 'bg-[#B9DEEB]'
      }`}
    >
      <div className="flex items-center justify-between px-12 h-full max-w-[88rem] mx-auto overflow-x-auto">
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
