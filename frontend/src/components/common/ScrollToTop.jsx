import { ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Component that disables browser's automatic scroll restoration
// NO automatic scrolling - page maintains scroll position naturally
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable browser's automatic scroll restoration
    // This prevents browser from trying to restore scroll position
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Force page to stay at top - prevent any automatic scrolling
    // This ensures page always starts at top when opened
    const preventScroll = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Prevent scroll immediately
    preventScroll();

    // Use requestAnimationFrame for immediate DOM update
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        preventScroll();
      });
    });

    // Prevent scroll after multiple delays to catch any delayed scrolls
    // This handles lazy-loaded components and other delayed scrolls
    const timer1 = setTimeout(preventScroll, 10);
    const timer2 = setTimeout(preventScroll, 50);
    const timer3 = setTimeout(preventScroll, 100);
    const timer4 = setTimeout(preventScroll, 200);
    const timer5 = setTimeout(preventScroll, 500);
    const timer6 = setTimeout(preventScroll, 1000);

    // Also listen for scroll events and prevent any unwanted scrolling
    let isPreventing = true;
    const handleScroll = () => {
      if (
        isPreventing &&
        (window.scrollY > 0 || document.documentElement.scrollTop > 0)
      ) {
        preventScroll();
      }
    };

    // Add scroll listener for first 2 seconds
    window.addEventListener("scroll", handleScroll, { passive: false });

    // Stop preventing after 2 seconds to allow normal user scrolling
    const stopPreventing = setTimeout(() => {
      isPreventing = false;
      window.removeEventListener("scroll", handleScroll);
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
      clearTimeout(stopPreventing);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return null;
};

const ScrollToTopButton = ({ hide }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (hide) return null;

  return (
    <>
      {showScrollTop && (
        <div>
          <button
            onClick={scrollToTop}
            className="md:hidden fixed bottom-20 right-6 z-[9999] flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#1A8781] to-[#0D6E69] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group border border-white/20 backdrop-blur-sm"
            aria-label="Scroll to top"
          >
            <ChevronUp
              size={18}
              className="group-hover:-translate-y-0.5 transition-transform duration-300"
            />
            <span className="text-sm font-geist font-medium tracking-wider">
              TOP
            </span>
          </button>

          <button
            onClick={scrollToTop}
            className="hidden md:flex fixed bottom-8 right-8 z-[9999]  items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#1A8781] to-[#0D6E69] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group border border-white/20 backdrop-blur-sm"
            aria-label="Scroll to top"
          >
            <ChevronUp
              size={20}
              className="group-hover:-translate-y-1 transition-transform duration-300"
            />
            <span className="text-base font-geist font-semibold tracking-widest">
              TOP
            </span>
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollToTopButton;
