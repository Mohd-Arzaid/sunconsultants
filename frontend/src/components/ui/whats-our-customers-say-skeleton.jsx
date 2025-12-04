import { Skeleton } from "./skeleton";

const WhatsOurCustomersSaySkeleton = () => {
  // Show enough cards to match the scrolling effect (19 testimonials, but we'll show a few for skeleton)
  const skeletonCards = Array.from({ length: 19 }, (_, i) => i);

  return (
    <div className="bg-white pt-5 pb-8">
      <div className="max-w-[88rem] px-8 w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          {/* Heading Skeleton */}
          <Skeleton className="h-8 md:h-12 w-64 md:w-80 mx-auto mb-6 rounded-md" />

          {/* Separator Section Skeleton - hidden on mobile, visible on desktop */}
          <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
            <Skeleton className="w-[94.46px] h-[2px] rounded-md" />
            <Skeleton className="h-6 w-64 rounded-md" />
            <Skeleton className="w-[94.46px] h-[2px] rounded-md" />
          </div>
        </div>

        {/* Testimonials Scroll Container Skeleton */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          <div className="flex w-max gap-8 md:gap-6 pt-10 pb-12">
            {skeletonCards.map((index) => (
              <div
                key={index}
                className="min-w-[400px] max-w-[400px] bg-[#B5DDEB] p-8 rounded-[20px] shadow-2xl shadow-blue-500/20 relative shrink-0"
              >
                {/* Quote Icon Skeleton - top right */}
                <div className="absolute top-6 right-6">
                  <Skeleton className="w-9 h-9 rounded-md" />
                </div>

                {/* User Info Skeleton */}
                <div className="flex items-center gap-4 mb-6 pr-12">
                  {/* Avatar Skeleton */}
                  <Skeleton className="w-12 h-12 rounded-full border-2 border-[#1A8781]/30 flex-shrink-0" />

                  {/* Name and Role Skeleton */}
                  <div className="flex flex-col justify-center min-w-0 gap-2">
                    <Skeleton className="h-5 w-32 rounded-md" />
                    <Skeleton className="h-4 w-48 rounded-md" />
                  </div>
                </div>

                {/* Testimonial Content Skeleton */}
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full rounded-md" />
                  <Skeleton className="h-4 w-full rounded-md" />
                  <Skeleton className="h-4 w-3/4 rounded-md" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsOurCustomersSaySkeleton;
