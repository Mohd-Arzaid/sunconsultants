import { useEffect, useState, useRef } from "react";
import YouTubeFacade from "@/components/ui/youtube-facade";
import { videosData } from "../../../data/videosData.js";

const VideoSection = () => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);
  const [duplicatedVideos, setDuplicatedVideos] = useState([]);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
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
  }

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
          className={`flex w-max gap-6 py-4 hover:[animation-play-state:paused] ${
            start ? "animate-scroll" : ""
          }`}
        >
          {duplicatedVideos.map((video, index) => (
            <div
              key={`${video.id}-${index}`}
              className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl bg-white w-[350px] md:w-[400px] lg:w-[450px] max-w-full shrink-0"
            >
              <YouTubeFacade
                videoId={video.embedId}
                aspectRatio="aspect-video"
                thumbnailQuality="hqdefault"
                className="w-full"
                autoplay={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
