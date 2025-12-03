import { Skeleton } from "./skeleton";

const OurServicesHomeSkeleton = () => {
  return (
    <div className="bg-gradient-to-b from-[#F9F7F2] to-white pt-8 pb-8 sm:pt-12 md:pt-16">
      <div className="max-w-[84rem] mx-auto px-4 sm:px-6 md:px-12">
        {/* Heading Skeleton */}
        <div className="text-center mb-4 sm:mb-8">
          <Skeleton className="h-10 sm:h-12 md:h-14 w-64 sm:w-80 md:w-96 mx-auto mb-2 sm:mb-3" />
          <div className="max-w-xl mx-auto space-y-2">
            <Skeleton className="h-5 sm:h-6 md:h-7 w-full" />
            <Skeleton className="h-5 sm:h-6 md:h-7 w-4/5 mx-auto" />
          </div>
        </div>

        {/* Desktop Carousel Skeleton - Hidden on mobile, visible on desktop */}
        <div className="relative hidden md:block">
          {/* Left Arrow Skeleton */}
          <Skeleton className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-30 rounded-full w-[48px] h-[48px]" />

          {/* Right Arrow Skeleton */}
          <Skeleton className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-30 rounded-full w-[48px] h-[48px]" />

          {/* Carousel Container Skeleton */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl h-[500px] bg-gradient-to-br from-[#1A8781]/5 to-[#1A8781]/20 border border-[#1A8781]/30">
            <div className="h-full flex items-center p-12">
              <div className="grid grid-cols-2 gap-12 items-center h-full w-full">
                {/* Left Side Skeleton */}
                <div className="flex flex-col gap-6">
                  <Skeleton className="w-24 h-24 rounded-2xl" />
                  <Skeleton className="h-10 w-full max-w-lg" />
                  <Skeleton className="h-6 w-full max-w-lg" />
                  <Skeleton className="h-6 w-3/4 max-w-md" />
                  <Skeleton className="h-12 w-40 rounded-full mt-2" />
                </div>

                {/* Right Side Skeleton */}
                <div className="relative">
                  <Skeleton className="w-40 h-40 rounded-full absolute -top-10 -left-10 opacity-20" />
                  <Skeleton className="w-60 h-60 rounded-full absolute -bottom-10 -right-10 opacity-20" />
                  <Skeleton className="bg-white/90 rounded-2xl p-8 h-[350px] flex items-center justify-center relative z-10">
                    <Skeleton className="w-48 h-48 rounded-full" />
                  </Skeleton>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicators Skeleton - Hidden on mobile, visible on desktop */}
        <div className="hidden md:flex justify-center mt-8 gap-3">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((idx) => (
            <Skeleton key={idx} className="w-3 h-3 rounded-full" />
          ))}
        </div>

        {/* Service Thumbnails Grid Skeleton */}
        <div className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 min-h-[120px] md:min-h-[140px]">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              key={item}
              className="rounded-xl p-3 md:p-4 border border-gray-200 bg-white"
            >
              <div className="flex flex-col items-center text-center gap-1 md:gap-2">
                <Skeleton className="w-8 h-8 md:w-12 md:h-12 rounded-full mb-0.5 md:mb-1" />
                <Skeleton className="h-4 md:h-5 w-full" />
                <Skeleton className="h-4 md:h-5 w-3/4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServicesHomeSkeleton;
