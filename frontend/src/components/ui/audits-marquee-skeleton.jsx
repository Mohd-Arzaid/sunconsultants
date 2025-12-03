import { Skeleton } from "./skeleton";

const AuditsMarqueeSkeleton = () => {
  // Show enough cards to match the original component (14 images, but we'll show a few more for better skeleton coverage)
  const skeletonCards = Array.from({ length: 14 }, (_, i) => i);

  return (
    <div className="bg-white pt-8">
      <div className="max-w-[88rem] mx-auto px-4">
        {/* Heading Skeleton - matches exact styling from AuditsMarquee */}
        <Skeleton className="h-9 md:h-14 w-72 md:w-[28rem] mx-auto mb-10 rounded-md" />

        {/* Marquee Container Skeleton - matches exact structure */}
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex items-center pt-4 pb-8 w-max gap-6">
            {skeletonCards.map((index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 bg-white shrink-0"
                style={{ minWidth: "300px", maxWidth: "400px" }}
              >
                {/* Image Area Skeleton - matches aspect-[4/3] */}
                <div className="aspect-[4/3] overflow-hidden">
                  <Skeleton className="w-full h-full rounded-none" />
                </div>

                {/* Title Overlay Skeleton - matches exact gradient and positioning */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                >
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    {/* Title skeleton - light colored to be visible on dark overlay */}
                    <Skeleton className="h-7 md:h-9 w-40 md:w-48 bg-white/40 rounded-md" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditsMarqueeSkeleton;
