import { Skeleton } from "./skeleton";

const VideoSectionSkeleton = () => {
  // Show enough cards to match the scrolling effect (39 videos duplicated = 78, but we'll show enough for skeleton)
  const skeletonCards = Array.from({ length: 39 }, (_, i) => i);

  return (
    <div className="max-w-full mx-auto px-4 py-8 md:px-12 md:pt-16 md:pb-2 bg-white overflow-hidden">
      {/* Heading Skeleton */}
      <Skeleton className="h-9 md:h-14 w-64 md:w-80 mx-auto mb-10 rounded-md" />

      {/* Video Scroll Container Skeleton */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        <div className="flex w-max gap-6 py-4">
          {skeletonCards.map((index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg p-4 transition-all duration-500 bg-white w-[350px] md:w-[400px] lg:w-[450px] shrink-0"
            >
              {/* YouTube Video Thumbnail Area Skeleton - matches aspect-video */}
              <div className="relative aspect-video overflow-hidden rounded-xl mb-4">
                <Skeleton className="w-full h-full rounded-xl" />

                {/* Play Button Skeleton - centered */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Skeleton className="w-16 h-16 rounded-full" />
                </div>
              </div>

              {/* Video Title Skeleton */}
              <div className="pt-4 pb-2">
                <Skeleton className="h-5 md:h-6 w-full rounded-md mb-2" />
                <Skeleton className="h-5 md:h-6 w-3/4 rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoSectionSkeleton;
