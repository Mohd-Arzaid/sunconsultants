import { Skeleton } from "./skeleton";

const VideosSkeleton = () => {
  return (
    <div className="relative w-full">
      {/* Breadcrumb Skeleton */}
      <div className="absolute md:top-5 top-3 left-0 w-full z-30">
        <div className="max-w-[80rem] mx-auto px-4">
          <div className="w-full overflow-x-auto scrollbar-hide font-inter">
            <div className="w-fit min-w-full">
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-16 flex-shrink-0" />
                <Skeleton className="h-4 w-1 flex-shrink-0" />
                <Skeleton className="h-4 w-56 flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Videos Hero Section Skeleton */}
      <div className="bg-white pt-10 md:pt-16">
        <div className="max-w-[88rem] mx-auto px-4 md:px-12">
          <Skeleton className="h-12 md:h-14 w-80 md:w-96 mx-auto mb-3" />
          <div className="space-y-2 max-w-3xl mx-auto mt-3">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-4/5 mx-auto" />
          </div>
        </div>
      </div>

      {/* Videos Grid Section Skeleton */}
      <div className="max-w-[88rem] mx-auto px-4 md:px-12 pt-10 md:pt-12 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Video Cards Skeleton - 39 items */}
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
            37, 38, 39,
          ].map((item) => (
            <div
              key={item}
              className="group relative overflow-hidden rounded-xl shadow-lg bg-white"
            >
              {/* Video Thumbnail Skeleton */}
              <div className="aspect-video w-full">
                <Skeleton className="w-full h-full" />
              </div>
              {/* Video Title Skeleton */}
              <div className="p-4">
                <Skeleton className="h-5 w-full mb-2" />
                <Skeleton className="h-5 w-4/5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Videos CTA Section Skeleton */}
      <div className="my-4 border-2 border-neutral-200 bg-neutral-50 rounded-lg mx-auto p-4 md:p-12 text-center max-w-[88rem]">
        <Skeleton className="h-10 md:h-12 w-80 md:w-96 mx-auto mb-6" />
        <div className="space-y-2 max-w-3xl mx-auto mb-8">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-4/5 mx-auto" />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Skeleton className="h-12 w-48 rounded-lg" />
          <Skeleton className="h-12 w-48 rounded-lg" />
        </div>
      </div>

      {/* Footer Skeleton */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-[88rem] mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="space-y-4">
                <Skeleton className="h-6 w-32" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="h-4 w-20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosSkeleton;
