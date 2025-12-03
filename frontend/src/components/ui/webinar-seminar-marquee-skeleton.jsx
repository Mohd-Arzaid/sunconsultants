import { Skeleton } from "./skeleton";

const WebinarSeminarMarqueeSkeleton = () => {
  // Show enough cards to match the original component (16 images)
  const skeletonCards = Array.from({ length: 16 }, (_, i) => i);

  return (
    <div className="bg-white pt-8 pb-2">
      <div className="max-w-[88rem] mx-auto px-4">
        {/* Heading Skeleton - matches exact styling from WebinarSeminarMarquee */}
        <Skeleton className="h-9 md:h-14 w-72 md:w-[32rem] mx-auto mb-10 rounded-md" />

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
                {/* Note: WebinarSeminarMarquee doesn't have title overlay, just images */}
                <div className="aspect-[4/3] overflow-hidden">
                  <Skeleton className="w-full h-full rounded-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarSeminarMarqueeSkeleton;
