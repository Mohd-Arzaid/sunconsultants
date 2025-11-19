import { useState } from "react";
import { Play } from "lucide-react";

/**
 * Simple YouTube Facade Component
 * - Shows thumbnail initially
 * - Loads video on click
 * - Improves page performance
 */
const YouTubeFacade = ({ videoId, title = "YouTube Video" }) => {
  const [isLoaded, setIsLoaded] = useState(false);

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

  return (
    <div
      className="relative aspect-video overflow-hidden rounded-xl group cursor-pointer"
      onClick={() => setIsLoaded(true)}
    >
      {/* Thumbnail */}
      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />

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