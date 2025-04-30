import { ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {showScrollTop && (
        <div >
        <button
          onClick={scrollToTop}
          className="  md:hidden fixed bottom-8 right-8 z-[9999] flex items-center justify-center w-14 h-14 rounded-full bg-[#1A8781] text-white shadow-lg hover:bg-[#1A8781]/90 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
          aria-label="Scroll to top"
        >
          <ChevronUp size={28} className="group-hover:-translate-y-1 transition-transform duration-300" />
        </button>


        <button
          onClick={scrollToTop}
          className="hidden md:flex fixed bottom-8 right-8 z-[9999]  items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#1A8781] to-[#0D6E69] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group border border-white/20 backdrop-blur-sm"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
          <span className="text-base font-geist font-semibold tracking-widest">TOP</span>
        </button>

        </div>

        
      )}
    </>
  );
};

export default ScrollToTopButton; 