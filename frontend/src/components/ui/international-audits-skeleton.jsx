import { Skeleton } from "./skeleton";

const InternationalAuditsSkeleton = () => {
  return (
    <div className="bg-[#F9F7F2] relative">
      {/* Breadcrumb Skeleton */}
      <div className="absolute md:top-5 top-3 left-0 w-full z-30">
        <div className="max-w-[80rem] mx-auto px-4">
          <div className="w-fit font-inter">
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-1" />
              <Skeleton className="h-4 w-40" />
            </div>
          </div>
        </div>
      </div>

      {/* Audit Hero Section Skeleton */}
      <div className="max-w-[88rem] mx-auto px-4 pt-10 pb-8 md:px-12 md:pt-16 md:pb-12">
        {/* Heading Section */}
        <div className="text-center mb-6 md:mb-8">
          <Skeleton className="h-10 md:h-14 w-72 md:w-96 mx-auto mb-3 md:mb-4" />
          <div className="space-y-2 max-w-2xl md:max-w-3xl mx-auto">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-4/5 mx-auto" />
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-10">
          <Skeleton className="w-full md:w-48 h-12 rounded-full" />
          <Skeleton className="w-full md:w-48 h-12 rounded-full" />
        </div>

        {/* Audit Glimpse Heading */}
        <div className="text-center mb-4">
          <Skeleton className="h-10 md:h-12 w-48 md:w-64 mx-auto mb-4" />
          <div className="space-y-2 max-w-xl mx-auto">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-4/5 mx-auto" />
          </div>
        </div>
      </div>

      {/* Audit Gallery Section Skeleton */}
      <div className="max-w-[88rem] mx-auto px-4 pb-12 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Gallery Images Skeleton - 16 items */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
            (item) => (
              <div key={item} className="group relative mb-4 rounded-2xl">
                <div className="aspect-[4/3] overflow-hidden rounded-xl">
                  <Skeleton className="w-full h-full" />
                </div>
                <div className="flex flex-1 flex-col justify-between py-2">
                  <div className="space-y-2 mt-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-4/5" />
                  </div>
                </div>
              </div>
            )
          )}

          {/* Many More Audits Card Skeleton */}
          <div className="group relative mb-4 rounded-2xl">
            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
              <div className="text-center p-4 w-full">
                <Skeleton className="h-6 md:h-7 w-40 mx-auto mb-2" />
                <Skeleton className="h-4 w-32 mx-auto mb-2" />
                <Skeleton className="h-4 w-48 mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section Skeleton */}
      <div
        id="services-section"
        className="max-w-[88rem] mx-auto px-4 md:px-12"
      >
        <div className="text-center mb-8 md:mb-10">
          <Skeleton className="h-10 md:h-12 w-48 md:w-64 mx-auto mb-3 md:mb-4" />
          <Skeleton className="h-5 w-96 max-w-xl md:max-w-2xl mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-[#1A8781]/30"
            >
              <Skeleton className="w-16 h-16 rounded-full mb-4 md:mb-6" />
              <Skeleton className="h-6 w-48 mb-2 md:mb-3" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section Skeleton */}
      <div className="pt-8 pb-4 md:pt-10 md:pb-6">
        <div className="max-w-[88rem] mx-auto px-4 md:px-12">
          <div className="text-center mb-8 md:mb-10">
            <Skeleton className="h-10 md:h-12 w-48 md:w-64 mx-auto mb-3 md:mb-4" />
            <Skeleton className="h-5 w-96 max-w-xl md:max-w-2xl mx-auto" />
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-[#1A8781]/30 max-w-2xl mx-auto">
            <div className="space-y-4">
              <Skeleton className="h-12 w-full rounded-lg" />
              <Skeleton className="h-12 w-full rounded-lg" />
              <Skeleton className="h-12 w-full rounded-lg" />
              <Skeleton className="h-32 w-full rounded-lg" />
              <Skeleton className="h-12 w-48 mx-auto rounded-lg" />
            </div>
          </div>
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

export default InternationalAuditsSkeleton;
