import { ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

// Component that automatically scrolls to top on route change
export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Disable browser's automatic scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Don't scroll to top if there's a hash in the URL (anchor link)
    if (hash) {
      return;
    }

    // Force scroll to top immediately
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Wait for lazy loaded components to render
    const scrollToTop = () => {
      // Force scroll to top multiple ways to ensure it works
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Wait longer for lazy loaded components to fully render
    // Use requestAnimationFrame to ensure DOM is ready
    const rafId = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToTop();
      });
    });

    // Fallback timers for lazy loading - multiple attempts
    const timer1 = setTimeout(scrollToTop, 50);
    const timer2 = setTimeout(scrollToTop, 200);
    const timer3 = setTimeout(scrollToTop, 500);
    const timer4 = setTimeout(scrollToTop, 1000);

    // Also wait for page to be fully loaded
    if (document.readyState === "complete") {
      scrollToTop();
    } else {
      window.addEventListener("load", scrollToTop, { once: true });
    }

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      window.removeEventListener("load", scrollToTop);
    };
  }, [pathname, hash]);

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

ScrollToTopButton.propTypes = {
  hide: PropTypes.bool.isRequired,
};

export default ScrollToTopButton;
