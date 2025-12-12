import { Skeleton } from "./skeleton";

const BISCertificationProductsSkeleton = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Breadcrumb Skeleton */}
      <div className="absolute md:top-5 top-3 left-0 w-full z-30">
        <div className="max-w-[80rem] mx-auto px-4">
          <div className="w-fit font-inter">
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-1" />
              <Skeleton className="h-4 w-48 md:w-64" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="bg-[#f9f7f2]">
        <div className="max-w-[88rem] mx-auto px-4 py-12 md:px-12 md:py-12">
          {/* Page Header Section Skeleton */}
          <div className="text-center mb-6 md:mb-10">
            <Skeleton className="h-8 md:h-14 w-64 md:w-96 mx-auto mb-3 md:mb-4 rounded-md" />
            <Skeleton className="h-5 md:h-6 w-full max-w-2xl mx-auto rounded-md" />
          </div>

          {/* Search Bar Skeleton */}
          <div className="mb-12 md:mb-20 max-w-2xl mx-auto">
            <div className="relative">
              <Skeleton className="w-full h-12 md:h-14 rounded-full" />
            </div>
          </div>

          {/* Product Cards Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl overflow-hidden shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)] h-full flex flex-col"
              >
                {/* Color-coded header bar skeleton */}
                <Skeleton className="h-3 md:h-4 w-full" />

                <div className="p-5 md:p-8 flex flex-col flex-grow">
                  {/* Product title skeleton */}
                  <div className="mb-4 min-h-[4rem] space-y-2">
                    <Skeleton className="h-6 md:h-7 w-full rounded-md" />
                    <Skeleton className="h-6 md:h-7 w-4/5 rounded-md" />
                  </div>

                  {/* Product description skeleton */}
                  <div className="mb-6 flex-grow space-y-2">
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-3/4 rounded" />
                  </div>

                  {/* Read more button skeleton */}
                  <div className="flex justify-end pt-4 border-t-2 border-gray-300 mt-auto">
                    <Skeleton className="h-10 w-28 rounded-md" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Skeleton */}
        <div className="pt-8 pb-12 md:pt-12 md:pb-16 px-4 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-4">
            {/* Pagination controls skeleton */}
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-10 w-10 rounded-full" />
            </div>

            {/* Page information skeleton */}
            <Skeleton className="h-5 w-32 rounded-md" />
          </div>
        </div>
      </div>

      {/* About Contact Section Skeleton */}
      <div className="bg-white py-12 md:py-16">
        <div className="max-w-[88rem] mx-auto px-4 md:px-12">
          <div className="text-center mb-8 md:mb-12">
            <Skeleton className="h-8 md:h-10 w-64 md:w-80 mx-auto mb-4 rounded-md" />
            <Skeleton className="h-5 w-full max-w-2xl mx-auto rounded-md" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info Skeleton */}
            <div className="space-y-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <Skeleton className="h-12 w-12 rounded-lg flex-shrink-0" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-5 w-32 rounded-md" />
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-3/4 rounded" />
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form Skeleton */}
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <Skeleton key={item} className="h-12 w-full rounded-lg" />
              ))}
              <Skeleton className="h-12 w-full rounded-lg mt-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Skeleton */}
      <div className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-[88rem] mx-auto px-4 md:px-12">
          <div className="text-center mb-8">
            <Skeleton className="h-8 md:h-10 w-64 md:w-80 mx-auto mb-4 rounded-md" />
            <Skeleton className="h-5 w-full max-w-xl mx-auto rounded-md" />
          </div>

          <div className="flex justify-center gap-6 mb-8">
            {[1, 2, 3, 4].map((item) => (
              <Skeleton key={item} className="h-8 w-8 rounded-full" />
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="space-y-3">
                <Skeleton className="h-5 w-24 rounded-md" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full rounded" />
                  <Skeleton className="h-4 w-3/4 rounded" />
                  <Skeleton className="h-4 w-5/6 rounded" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-gray-300 text-center">
            <Skeleton className="h-4 w-64 mx-auto rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BISCertificationProductsSkeleton;
