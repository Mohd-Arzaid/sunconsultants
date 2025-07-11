import YouTubeFacade from "@/components/ui/youtube-facade";
import { videosData } from "../../../data/videosData.js";

const VideoSection = () => {
  // Triple duplicate videos for seamless infinite scroll
  const duplicatedVideos = [...videosData, ...videosData, ...videosData];

  return (
    <div className="max-w-full mx-auto px-4 py-8 md:px-12 md:pt-16 md:pb-2 bg-white overflow-hidden">
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-3xl md:text-5xl font-bold font-playfair text-center mb-10 text-[#1e1e1e] tracking-tight">
          Video Showcase
        </h2>
      </div>

      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        <div
          className="flex w-max gap-6 py-4 hover:[animation-play-state:paused]"
          style={{
            animation: "scroll 60s linear infinite",
          }}
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
