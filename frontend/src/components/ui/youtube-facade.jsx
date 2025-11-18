import React, { useState, useCallback, useEffect } from "react";
import { Play, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Optimized YouTube Facade Component
 * - Loads thumbnail instead of full iframe initially
 * - Only loads actual video when user clicks play
 * - Significantly improves page load performance
 * - Reduces initial JavaScript payload
 * - Maintains good UX with loading states
 * - Includes preconnect optimization for faster video loading
 * - Supports intersection observer for better performance
 * - Includes Video Schema markup for better GSC indexing
 */
const YouTubeFacade = ({
  videoId,
  title = "YouTube Video",
  description = "Watch this informative video about BIS certification and compliance requirements",
  className = "",
  thumbnailQuality = "hqdefault", // maxresdefault, hqdefault, mqdefault, sddefault
  aspectRatio = "aspect-video", // aspect-video (16:9), aspect-[4/3], aspect-[9/16]
  showTitle = false,
  autoplay = false,
  enableIntersectionObserver = true,
  preconnect = true,
  duration = "PT0H0M0S", // ISO 8601 format - will be updated dynamically
  uploadDate = "2024-01-01T00:00:00+00:00", // ISO 8601 format
  category = "BIS Certification",
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isInView, setIsInView] = useState(!enableIntersectionObserver);
  const facadeRef = React.useRef(null);

  // Fallback thumbnail qualities in order of preference
  const thumbnailQualities = [
    "maxresdefault",
    "hqdefault",
    "mqdefault",
    "sddefault",
  ];
  const currentQualityIndex = thumbnailQualities.indexOf(thumbnailQuality);

  const getThumbnailUrl = useCallback(
    (quality) => {
      return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
    },
    [videoId]
  );

  // Generate Video Schema for GSC
  const generateVideoSchema = useCallback(() => {
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    const thumbnailUrl = getThumbnailUrl("maxresdefault");

    return {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: title,
      description: description,
      thumbnailUrl: [thumbnailUrl],
      uploadDate: uploadDate,
      duration: duration,
      contentUrl: videoUrl,
      embedUrl: embedUrl,
      publisher: {
        "@type": "Organization",
        name: "Sun Certifications India",
        url: "https://bis-certifications.com",
        logo: {
          "@type": "ImageObject",
          url: "https://bis-certifications.com/company-logo/company-logo.webp",
        },
      },
      author: {
        "@type": "Organization",
        name: "Sun Certifications India",
      },
      category: category,
      keywords: [
        "BIS Certification",
        "CDSCO Registration",
        "EPR Compliance",
        "Indian Standards",
        "Quality Certification",
        "Regulatory Compliance",
      ],
      inLanguage: "en",
      isFamilyFriendly: true,
    };
  }, [
    videoId,
    title,
    description,
    uploadDate,
    duration,
    category,
    getThumbnailUrl,
  ]);

  // Add schema to head when component mounts
  useEffect(() => {
    if (!isLoaded) {
      const schema = generateVideoSchema();
      const scriptId = `video-schema-${videoId}`;

      // Remove existing schema if present
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }

      // Add new schema
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);

      // Cleanup on unmount
      return () => {
        const scriptToRemove = document.getElementById(scriptId);
        if (scriptToRemove) {
          document.head.removeChild(scriptToRemove);
        }
      };
    }
  }, [isLoaded, generateVideoSchema, videoId]);

  // Preconnect to YouTube domains for faster loading
  useEffect(() => {
    if (preconnect && !isLoaded) {
      const preconnectLinks = [
        "https://www.youtube.com",
        "https://www.google.com",
        "https://googleads.g.doubleclick.net",
        "https://static.doubleclick.net",
      ];

      preconnectLinks.forEach((href) => {
        const link = document.createElement("link");
        link.rel = "preconnect";
        link.href = href;
        link.crossOrigin = "anonymous";

        // Check if preconnect link already exists
        if (!document.querySelector(`link[rel="preconnect"][href="${href}"]`)) {
          document.head.appendChild(link);
        }
      });

      // Cleanup on component unmount
      return () => {
        preconnectLinks.forEach((href) => {
          const link = document.querySelector(
            `link[rel="preconnect"][href="${href}"]`
          );
          if (link && link.dataset.youtubeComponent === "true") {
            document.head.removeChild(link);
          }
        });
      };
    }
  }, [preconnect, isLoaded]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!enableIntersectionObserver || isInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "50px 0px", // Start loading 50px before coming into view
        threshold: 0.1,
      }
    );

    if (facadeRef.current) {
      observer.observe(facadeRef.current);
    }

    return () => observer.disconnect();
  }, [enableIntersectionObserver, isInView]);

  const handlePlayClick = useCallback(() => {
    setIsLoading(true);

    // Prefetch the YouTube iframe before loading
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = embedUrl;
    document.body.appendChild(iframe);

    // Small delay to show loading state and allow prefetch
    setTimeout(() => {
      setIsLoaded(true);
      setIsLoading(false);
      document.body.removeChild(iframe);
    }, 300);
  }, []);

  const handleImageError = useCallback(() => {
    // Try next quality if current one fails
    const nextQuality = thumbnailQualities[currentQualityIndex + 1];
    if (nextQuality && !imageError) {
      setImageError(true);

      // Preload next quality image
      const img = new Image();
      img.src = getThumbnailUrl(nextQuality);
      img.loading = "lazy";
    }
  }, [currentQualityIndex, imageError, getThumbnailUrl, thumbnailQualities]);

  const embedUrl = `https://www.youtube.com/embed/${videoId}?${new URLSearchParams(
    {
      autoplay: autoplay ? "1" : "0",
      rel: "0",
      modestbranding: "1",
      playsinline: "1",
      enablejsapi: "1",
      origin: window.location.origin,
    }
  ).toString()}`;

  if (isLoaded) {
    return (
      <div
        className={cn(
          aspectRatio,
          "relative overflow-hidden rounded-xl",
          className
        )}
        {...props}
      >
        <iframe
          src={embedUrl}
          title={title}
          className="absolute inset-0 w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          importance="high"
        />
      </div>
    );
  }

  const currentThumbnailUrl = getThumbnailUrl(
    imageError && thumbnailQualities[currentQualityIndex + 1]
      ? thumbnailQualities[currentQualityIndex + 1]
      : thumbnailQuality
  );

  return (
    <div
      ref={facadeRef}
      className={cn(
        aspectRatio,
        "relative overflow-hidden rounded-xl group cursor-pointer",
        className
      )}
      {...props}
    >
      {/* Skeleton loader while waiting for intersection */}
      {!isInView && (
        <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
            <Play className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      )}

      {/* Thumbnail Image */}
      {isInView && (
        <>
          <img
            src={currentThumbnailUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            decoding="async"
            onError={handleImageError}
            fetchpriority="low"
          />

          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Play Button */}
          <button
            onClick={handlePlayClick}
            disabled={isLoading}
            className="absolute inset-0 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-red-500/50 focus:ring-offset-2 rounded-xl"
            aria-label={`Play video: ${title}`}
          >
            <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-red-600 hover:bg-red-700 rounded-full shadow-2xl transition-all duration-300 group-hover:scale-110">
              {isLoading ? (
                <Loader2 className="w-8 h-8 md:w-10 md:h-10 text-white animate-spin" />
              ) : (
                <Play
                  className="w-8 h-8 md:w-10 md:h-10 text-white ml-1"
                  fill="currentColor"
                />
              )}
            </div>
          </button>

          {/* YouTube branding */}
          <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3">
            <div className="bg-black/80 text-white text-xs px-2 py-1 rounded font-semibold">
              YouTube
            </div>
          </div>

          {/* Title overlay (optional) */}
          {showTitle && title && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-white font-semibold text-sm md:text-base line-clamp-2">
                {title}
              </h3>
            </div>
          )}

          {/* Loading overlay */}
          {isLoading && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-white text-center">
                <Loader2 className="w-8 h-8 mx-auto mb-2 animate-spin" />
                <p className="text-sm">Loading video...</p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default YouTubeFacade;
