import { useEffect, useState, useRef } from "react";
import { X } from "lucide-react";
import YouTubeFacade from "@/components/ui/youtube-facade";
import { videosData } from "../../../data/videosData.js";

const VideoSection = ({ onVideoPopupChange }) => {
  const containerRef = useRef(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Double duplication is enough for infinite scroll
  const duplicatedVideos = [...videosData, ...videosData];

  // Initialize animation on mount
  useEffect(() => {
    if (containerRef.current) {
      // Set animation properties directly
      containerRef.current.style.setProperty(
        "--animation-direction",
        "forwards"
      );
      containerRef.current.style.setProperty("--animation-duration", "120s");
    }
  }, []);

  // Notify parent component when popup state changes
  useEffect(() => {
    if (onVideoPopupChange) {
      onVideoPopupChange(isPopupOpen);
    }
  }, [isPopupOpen, onVideoPopupChange]);

  // Handle opening video popup
  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setIsPopupOpen(true);
    document.body.style.overflow = "hidden";
  };

  // Handle closing video popup
  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedVideo(null);
    document.body.style.overflow = "unset";
  };

  // Handle escape key to close popup
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && isPopupOpen) {
        handleClosePopup();
      }
    };

    if (isPopupOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      return () => document.removeEventListener("keydown", handleEscapeKey);
    }
  }, [isPopupOpen]);

  return (
    <div className="max-w-full mx-auto px-4 py-8 md:px-12 md:pt-16 md:pb-2 bg-white overflow-hidden">
      <div className="text-3xl md:text-5xl font-bold font-playfair text-center mb-10 text-neutral-800">
        Video Showcase
      </div>

      <div
        ref={containerRef}
        className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
      >
        <div className="flex w-max gap-6 py-4 animate-scroll hover:[animation-play-state:paused]">
          {duplicatedVideos.map((video, index) => {
            // Mark duplicates as hidden from SEO (only first set should be indexed)
            const isDuplicate = index >= videosData.length;

            return (
              <div
                key={`${video.id}-${index}`}
                className="group relative overflow-hidden rounded-xl shadow-lg p-4 transition-all duration-500 bg-white w-[350px] md:w-[400px] lg:w-[450px] shrink-0 cursor-pointer"
                onClick={() => handleVideoClick(video)}
                aria-hidden={isDuplicate ? "true" : undefined}
                data-seo-ignore={isDuplicate ? "true" : undefined}
              >
                <YouTubeFacade
                  videoId={video.embedId}
                  title={video.title}
                  isDuplicate={isDuplicate}
                />
                <div className="pt-4 pb-2">
                  <p className="text-sm md:text-base font-semibold font-geist text-gray-800 line-clamp-2">
                    {video.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Video Popup Modal */}
      {isPopupOpen && selectedVideo && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={handleClosePopup}
        >
          <div className="relative w-full max-w-6xl mx-4 md:mx-8">
            <button
              onClick={handleClosePopup}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 bg-black/50 rounded-full p-2"
              aria-label="Close video"
            >
              <X size={24} />
            </button>

            <div
              className="bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.embedId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                title={`${selectedVideo.title} - BIS Certification Video - Sun Certifications India`}
                className="w-full aspect-video border-0 rounded-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoSection;
