import { useMemo, memo, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { COMPANY_LOGOS } from "@/data/logo-ticker-data/logo-ticker-data";

const ANIMATION_SPEEDS = {
  fast: "15s",
  normal: "25s",
  slow: "35s",
};

const LogoTicker = ({
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
}) => {
  // State to control when animation starts - exactly like original behavior
  const [start, setStart] = useState(false);

  // Start animation after component mounts - replicating original timing
  useEffect(() => {
    setStart(true);
  }, []);

  // Memoize animation styles - iOS compatible version
  const animationStyles = useMemo(() => {
    const animationDirection = direction === "left" ? "normal" : "reverse";
    const animationDuration = ANIMATION_SPEEDS[speed];

    return {
      animation: `logoScroll ${animationDuration} linear infinite ${animationDirection}`,
      // iOS-specific optimizations
      WebkitAnimation: `logoScroll ${animationDuration} linear infinite ${animationDirection}`,
      // GPU acceleration for iOS
      transform: "translate3d(0, 0, 0)",
      WebkitTransform: "translate3d(0, 0, 0)",
      // Prevent flickering on iOS
      WebkitBackfaceVisibility: "hidden",
      backfaceVisibility: "hidden",
    };
  }, [direction, speed]);

  // Create duplicated logos array for infinite scroll effect
  const duplicatedLogos = useMemo(() => {
    return [...COMPANY_LOGOS, ...COMPANY_LOGOS]; // Duplicate the array instead of DOM manipulation
  }, []);

  return (
    <>
      {/* Add CSS directly to head for iOS compatibility */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes logoScroll {
            0% {
              transform: translate3d(0, 0, 0);
            }
            100% {
              transform: translate3d(calc(-50% - 0.5rem), 0, 0);
            }
          }
          
          @-webkit-keyframes logoScroll {
            0% {
              -webkit-transform: translate3d(0, 0, 0);
              transform: translate3d(0, 0, 0);
            }
            100% {
              -webkit-transform: translate3d(calc(-50% - 0.5rem), 0, 0);
              transform: translate3d(calc(-50% - 0.5rem), 0, 0);
            }
          }
          
          /* iOS-specific optimizations */
          .logo-ticker-container {
            -webkit-overflow-scrolling: touch;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }
          
          .logo-ticker-pause:hover {
            animation-play-state: paused !important;
            -webkit-animation-play-state: paused !important;
          }
        `,
        }}
      />

      <div className="bg-white w-full py-3 md:py-5">
        <div className="max-w-[84rem] mx-auto px-2 md:px-4">
          <div
            className="overflow-hidden"
            style={{
              // iOS-compatible mask with fallback
              maskImage:
                "linear-gradient(to right, transparent, white 10%, white 90%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, white 10%, white 90%, transparent)",
              // Fallback for older iOS versions that don't support mask
              background: "transparent",
            }}
          >
            <ul
              className={cn(
                "flex w-max min-w-full shrink-0 flex-nowrap gap-1 md:gap-6 logo-ticker-container",
                // Add pause on hover class conditionally
                pauseOnHover && "logo-ticker-pause"
              )}
              style={start ? animationStyles : {}}
            >
              {duplicatedLogos.map((logo, index) => (
                <li
                  key={`${logo.name}-${index}`} // Stable unique keys - proper React pattern
                  className="flex items-center justify-center px-3 md:px-6 py-2 md:py-4 shrink-0"
                >
                  <img
                    className="mx-auto w-fit scale-[0.8] md:scale-100"
                    src={logo.src}
                    alt={logo.alt}
                    height={logo.height}
                    width="auto"
                    style={{
                      height: `${logo.height}px`,
                      // iOS-specific image optimizations
                      WebkitBackfaceVisibility: "hidden",
                      backfaceVisibility: "hidden",
                      WebkitPerspective: "1000px",
                      perspective: "1000px",
                      // Prevent image flickering on iOS
                      WebkitTransform: "translate3d(0, 0, 0)",
                      transform: "translate3d(0, 0, 0)",
                    }}
                    // Performance optimization: prevent layout shift
                    loading="eager"
                    decoding="sync"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

// Memoize component to prevent unnecessary re-renders
export default memo(LogoTicker);
