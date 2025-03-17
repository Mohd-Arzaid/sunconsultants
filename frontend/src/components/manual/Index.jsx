import React, { useState, useEffect, useRef } from 'react'

const Index = () => {
  const [isSticky, setIsSticky] = useState(false)
  const stickyRef = useRef(null)

  const handleItemClick = (item) => {
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
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

  return (
    <div 
      ref={stickyRef}
      className={`sticky top-0 z-[60] transition-colors duration-300 w-full h-20 ${
        isSticky ? 'bg-white/70 backdrop-blur-lg' : 'bg-[#B9DEEB]'
      }`}
    >
      <div className="flex items-center justify-between px-12 h-full max-w-[88rem] mx-auto">
        {[
          "Overview",
          "Eligibility",
          "Classification",
          "Documents",
          "Registration",
          "Licensing",
          "Consulting",
          "FAQs",
        ].map((item) => (
          <div
            key={item}
            onClick={() => handleItemClick(item)}
            className={`relative cursor-pointer group ${
              item === "Overview"
                ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-900"
                : ""
            }`}
          >
            <div
              className={`text-base font-semibold font-geist  tracking-wider uppercase transition-colors duration-300 ${
                item === "Overview"
                  ? "text-blue-900"
                  : "text-blue-950 group-hover:text-blue-900"
              }`}
            >
              {item}
            </div>
            {item !== "Overview" && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Index
