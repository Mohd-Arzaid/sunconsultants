import { useState, useEffect, useRef } from "react";
import { Play } from "lucide-react";

/**
 * Simple YouTube Facade Component
 * - Shows thumbnail initially
 * - Loads video on click
 * - Improves page performance
 */
const YouTubeFacade = ({
  videoId,
  title = "YouTube Video",
  isDuplicate = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);
  const thumbnailRef = useRef(null);

  // Lazy load thumbnails for duplicates using Intersection Observer
  useEffect(() => {
    if (!isDuplicate || thumbnailLoaded) return;

    const observerOptions = {
      root: null,
      rootMargin: "100px", // Start loading 100px before thumbnail enters viewport
      threshold: 0.01,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setThumbnailLoaded(true);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (thumbnailRef.current) {
      observer.observe(thumbnailRef.current);
    }

    return () => {
      if (thumbnailRef.current) {
        observer.unobserve(thumbnailRef.current);
      }
    };
  }, [isDuplicate, thumbnailLoaded]);

  if (isLoaded) {
    return (
      <div className="relative aspect-video overflow-hidden rounded-xl">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          className="absolute inset-0 w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div
      className="relative aspect-video overflow-hidden rounded-xl group cursor-pointer"
      onClick={() => setIsLoaded(true)}
    >
      {isDuplicate ? (
        // Use div with background-image for duplicates (SEO won't index as image)
        <div
          ref={thumbnailRef}
          className="w-full h-full group-hover:scale-105 transition-transform duration-300"
          style={{
            backgroundImage: thumbnailLoaded ? `url(${thumbnailUrl})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: thumbnailLoaded ? "transparent" : "#f3f4f6",
          }}
          aria-hidden="true"
          data-seo-ignore="true"
        />
      ) : (
        <img
          src={thumbnailUrl}
          alt={`${title} - YouTube Video Thumbnail - Sun Certifications India`}
          title={`${title} - YouTube Video Thumbnail - Sun Certifications India`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      )}

      {/* Dark overlay on hover */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 bg-red-600 hover:bg-red-700 rounded-full shadow-xl transition-all group-hover:scale-110 flex items-center justify-center">
          <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
        </div>
      </div>
    </div>
  );
};

export default YouTubeFacade;
