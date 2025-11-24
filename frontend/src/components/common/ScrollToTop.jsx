import { ChevronUp } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

// Aggressive ScrollToTop - Prevents ALL auto-scrolling
export const ScrollToTop = () => {
  const { pathname } = useLocation();
  const scrollBlockerRef = useRef(null);

  useEffect(() => {
    // Disable browser's scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Force scroll to top immediately
    const forceTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    forceTop();

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    const originalPosition = document.body.style.position;

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = "0";
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    // Aggressive scroll blocker - blocks ANY scroll attempt
    let isBlocking = true;

    const blockScroll = (e) => {
      if (isBlocking) {
        e.preventDefault();
        e.stopPropagation();
        forceTop();
        return false;
      }
    };

    // Block all scroll events
    window.addEventListener("scroll", blockScroll, {
      passive: false,
      capture: true,
    });
    document.addEventListener("scroll", blockScroll, {
      passive: false,
      capture: true,
    });
    window.addEventListener("wheel", blockScroll, {
      passive: false,
      capture: true,
    });
    window.addEventListener("touchmove", blockScroll, {
      passive: false,
      capture: true,
    });

    // Multiple force top calls to catch lazy-loaded content
    const timers = [];
    [0, 10, 50, 100, 200, 500, 1000, 1500].forEach((delay) => {
      timers.push(setTimeout(forceTop, delay));
    });

    // Unlock scroll after content loads (2 seconds)
    const unlockTimer = setTimeout(() => {
      isBlocking = false;

      // Restore body styles
      document.body.style.overflow = originalOverflow;
      document.body.style.position = originalPosition;
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";

      // Remove all listeners
      window.removeEventListener("scroll", blockScroll, { capture: true });
      document.removeEventListener("scroll", blockScroll, { capture: true });
      window.removeEventListener("wheel", blockScroll, { capture: true });
      window.removeEventListener("touchmove", blockScroll, { capture: true });

      // Final force top
      forceTop();
    }, 2000);

    return () => {
      // Cleanup
      isBlocking = false;
      timers.forEach(clearTimeout);
      clearTimeout(unlockTimer);

      document.body.style.overflow = originalOverflow;
      document.body.style.position = originalPosition;
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";

      window.removeEventListener("scroll", blockScroll, { capture: true });
      document.removeEventListener("scroll", blockScroll, { capture: true });
      window.removeEventListener("wheel", blockScroll, { capture: true });
      window.removeEventListener("touchmove", blockScroll, { capture: true });
    };
  }, [pathname]);

  return null;
};

const ScrollToTopButton = ({ hide }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsVisible(window.scrollY > 300);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (hide || !isVisible) return null;

  return (
    <>
      {/* Mobile Button */}
      <button
        onClick={scrollToTop}
        className="md:hidden fixed bottom-20 right-6 z-[9999] flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#1A8781] to-[#0D6E69] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group border border-white/20 backdrop-blur-sm"
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

      {/* Desktop Button */}
      <button
        onClick={scrollToTop}
        className="hidden md:flex fixed bottom-8 right-8 z-[9999] items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#1A8781] to-[#0D6E69] text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 group border border-white/20 backdrop-blur-sm"
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
    </>
  );
};

ScrollToTopButton.propTypes = {
  hide: PropTypes.bool.isRequired,
};

export default ScrollToTopButton;
