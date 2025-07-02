import YouTubeFacade from "@/components/ui/youtube-facade";
import { videosData } from "../../../data/videosData.js";

const VideoSection = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:pt-16 md:pb-2 bg-white">
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-3xl md:text-5xl font-bold font-playfair text-center mb-10 text-[#1e1e1e] tracking-tight">
          Video Showcase
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videosData.map((video) => (
          <div
            key={video.id}
            className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl bg-white"
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
  );
};

export default VideoSection;
