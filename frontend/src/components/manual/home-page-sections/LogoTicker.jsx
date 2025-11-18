import { memo, useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { COMPANY_LOGOS } from "@/data/logo-ticker-data/logo-ticker-data";

const LogoTicker = ({
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);
  const [duplicatedLogos, setDuplicatedLogos] = useState([]);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    // React-friendly duplication approach - same as VideoSection
    const duplicated = [...COMPANY_LOGOS, ...COMPANY_LOGOS, ...COMPANY_LOGOS];
    setDuplicatedLogos(duplicated);

    if (containerRef.current) {
      getDirection();
      getSpeed();

      // Small delay to ensure DOM is ready
      setTimeout(() => {
        setStart(true);
      }, 100);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "15s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "25s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "35s");
      }
    }
  };

  return (
    <div className="bg-white w-full py-3 md:py-5">
      <div className="max-w-[84rem] mx-auto px-2 md:px-4">
        <div
          ref={containerRef}
          className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
        >
          <ul
            ref={scrollerRef}
            className={cn(
              "flex w-max min-w-full shrink-0 flex-nowrap gap-1 md:gap-6",
              start && "animate-scroll",
              pauseOnHover && "hover:[animation-play-state:paused]"
            )}
          >
            {duplicatedLogos.map((logo, index) => (
              <li
                key={`${logo.name}-${index}`}
                className="flex items-center justify-center px-3 md:px-6 py-2 md:py-4 shrink-0"
                style={{
                  contentVisibility: "auto",
                  containIntrinsicSize: `${logo.height}px ${
                    logo.width || 160
                  }px`,
                }}
              >
                <img
                  className="mx-auto w-fit scale-[0.8] md:scale-100"
                  src={logo.src}
                  alt={logo.alt}
                  height={logo.height}
                  width={logo.width || 160}
                  style={{
                    height: `${logo.height}px`,
                  }}
                  loading="eager"
                  decoding="sync"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Memoize component to prevent unnecessary re-renders
export default memo(LogoTicker);
