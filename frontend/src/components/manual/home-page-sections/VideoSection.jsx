import { useEffect, useState, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import { X } from "lucide-react";
import YouTubeFacade from "@/components/ui/youtube-facade";
import { videosData } from "../../../data/videosData.js";

const VideoSection = ({ onVideoPopupChange }) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);
  const [duplicatedVideos, setDuplicatedVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Define animation function first
  const addAnimation = useCallback(() => {
    // React-friendly duplication approach
    const duplicated = [...videosData, ...videosData, ...videosData];
    console.log("Total videos after duplication:", duplicated.length);
    setDuplicatedVideos(duplicated);

    if (containerRef.current) {
      getDirection();
      getSpeed();

      // Small delay to ensure DOM is ready
      setTimeout(() => {
        setStart(true);
        console.log("Animation started!");
      }, 100);
    }
  }, []);

  // Initialize animation on mount
  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  // Notify parent component when popup state changes
  useEffect(() => {
    if (onVideoPopupChange) {
      onVideoPopupChange(isPopupOpen);
    }
  }, [isPopupOpen, onVideoPopupChange]);

  // Handle opening video popup
  const handleVideoClick = (video, event) => {
    event.preventDefault();
    event.stopPropagation();
    setSelectedVideo(video);
    setIsPopupOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  // Handle closing video popup
  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedVideo(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  // Handle escape key to close popup
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isPopupOpen) {
        handleClosePopup();
      }
    };

    if (isPopupOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      return () => {
        document.removeEventListener('keydown', handleEscapeKey);
      };
    }
  }, [isPopupOpen]);

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        "forwards"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty("--animation-duration", "60s");
    }
  };

  return (
    <div className="max-w-full mx-auto px-4 py-8 md:px-12 md:pt-16 md:pb-2 bg-white overflow-hidden">
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-3xl md:text-5xl font-bold font-playfair text-center mb-10 text-[#1e1e1e] tracking-tight">
          Video Showcase
        </h2>
      </div>

      <div
        ref={containerRef}
        className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
      >
        <div
          ref={scrollerRef}
          className={`flex w-max gap-6 py-4 hover:[animation-play-state:paused] ${start ? "animate-scroll" : ""
            }`}
        >
          {duplicatedVideos.map((video, index) => (
            <div
              key={`${video.id}-${index}`}
              className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl bg-white w-[350px] md:w-[400px] lg:w-[450px] max-w-full shrink-0 cursor-pointer"
              onClick={(e) => handleVideoClick(video, e)}
            >
              <YouTubeFacade
                videoId={video.embedId}
                title={video.title}
                description={video.description}
                category={video.category}
                duration={video.duration}
                uploadDate={video.uploadDate}
                aspectRatio="aspect-video"
                thumbnailQuality="hqdefault"
                className="w-full"
                autoplay={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Video Popup Modal */}
      {isPopupOpen && selectedVideo && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={handleClosePopup}
        >
          <div className="relative w-full max-w-6xl mx-4 md:mx-8">
            {/* Close Button */}
            <button
              onClick={handleClosePopup}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2 backdrop-blur-sm"
              aria-label="Close video"
            >
              <X size={24} />
            </button>

            {/* Video Container */}
            <div
              className="relative bg-black rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.embedId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                  title={selectedVideo.title}
                  className="w-full h-full border-0 rounded-2xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl -z-10 scale-110"></div>
          </div>
        </div>
      )}
    </div>
  );
};

VideoSection.propTypes = {
  onVideoPopupChange: PropTypes.func,
};

export default VideoSection;
