import { Skeleton } from "./skeleton";

const AboutSkeleton = () => {
  return (
    <div className="overflow-hidden bg-gradient-to-b from-white via-neutral-50 to-[#F9F7F2] relative">
      {/* Breadcrumb Skeleton */}
      <div className="absolute md:top-5 top-3 left-0 w-full z-30">
        <div className="max-w-[80rem] mx-auto px-4">
          <div className="w-fit font-inter">
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-1" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>
        </div>
      </div>

      {/* About Us Hero Section Skeleton */}
      <div className="max-w-[84rem] mx-auto px-4 md:px-12 pt-10 md:pt-12 pb-2 md:pb-3">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <Skeleton className="h-12 md:h-16 w-48 md:w-64 mx-auto mb-6 md:mb-8" />
          <div className="space-y-3 max-w-4xl mx-auto px-4 md:px-0">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6 mx-auto" />
          </div>
        </div>

        {/* Credentials Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="p-8 md:p-10 bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-lg border border-neutral-200"
            >
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-full mt-4" />
                <Skeleton className="h-4 w-4/5" />
              </div>
            </div>
          ))}
        </div>

        {/* Technical Backbone Content */}
        <div className="mb-12 md:mb-16">
          <div className="p-8 md:p-10 bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-lg border border-neutral-200">
            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
            </div>
          </div>
        </div>

        {/* Who We Are & Our Promise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="p-8 md:p-10 bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-lg border border-neutral-200"
            >
              <Skeleton className="h-8 md:h-10 w-48 md:w-56 mb-6" />
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section Skeleton */}
      <div className="max-w-[84rem] mx-auto px-4 md:px-12 pt-0 pb-16 md:pb-24">
        <div className="text-center mb-8 md:mb-10">
          <Skeleton className="h-10 md:h-12 w-64 md:w-80 mx-auto mb-3 md:mb-4" />
          <Skeleton className="h-5 w-96 max-w-xl md:max-w-2xl mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8">
          {[1, 2, 3].map((item) => (
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

      {/* Stats Section Skeleton */}
      <div className="max-w-[84rem] mx-auto px-4 md:px-12 pb-8 md:pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-x-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="text-center">
              <Skeleton className="h-12 md:h-14 w-24 md:w-32 mx-auto mb-1 md:mb-2" />
              <Skeleton className="h-5 w-32 mx-auto" />
            </div>
          ))}
        </div>
      </div>

      {/* Our Vision Section Skeleton */}
      <div className="pt-8 md:pt-12 pb-16 md:pb-20">
        <div className="max-w-[84rem] mx-auto px-4 md:px-12">
          <div className="text-center p-8 md:p-12 bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-lg border border-neutral-200">
            <Skeleton className="h-10 w-48 mx-auto mb-6" />
            <div className="space-y-3 max-w-4xl mx-auto mb-6">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5 mx-auto" />
            </div>
            <Skeleton className="h-12 w-48 mx-auto rounded-lg" />
          </div>
        </div>
      </div>

      {/* Video Showcase Skeleton */}
      <div className="max-w-[84rem] mx-auto px-4 md:px-12">
        <div className="relative rounded-3xl shadow-xl md:shadow-2xl overflow-hidden">
          <Skeleton className="w-full h-[450px] md:h-[600px]" />
        </div>
      </div>

      {/* Our Services Carousel Skeleton */}
      <div className="py-16 md:py-20 bg-gradient-to-b from-[#F9F7F2] to-white">
        <div className="max-w-[84rem] mx-auto px-4 md:px-12">
          <div className="text-center mb-10 md:mb-12">
            <Skeleton className="h-10 md:h-12 w-48 md:w-64 mx-auto mb-3 md:mb-4" />
            <Skeleton className="h-5 w-96 max-w-xl md:max-w-2xl mx-auto" />
          </div>

          {/* Carousel Skeleton */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl h-auto md:h-[500px] bg-gradient-to-br from-[#1A8781]/5 to-[#1A8781]/20 border border-[#1A8781]/30 p-6 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 items-center w-full">
                <div className="flex flex-col gap-4 md:gap-6 order-2 md:order-1">
                  <Skeleton className="w-16 h-16 md:w-24 md:h-24 rounded-2xl mx-auto md:mx-0" />
                  <Skeleton className="h-8 md:h-10 w-full max-w-md" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-4/5" />
                  </div>
                  <Skeleton className="h-12 w-32 rounded-full mt-2 md:mt-4" />
                </div>
                <div className="relative order-1 md:order-2">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 md:p-8 shadow-xl border border-[#1A8781]/20 h-[200px] sm:h-[250px] md:h-[350px] flex items-center justify-center mb-6 md:mb-0">
                    <Skeleton className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Indicators Skeleton */}
            <div className="flex justify-center mt-6 md:mt-8 gap-2 md:gap-3">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <Skeleton
                  key={item}
                  className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full"
                />
              ))}
            </div>
          </div>

          {/* Service Thumbnails Skeleton */}
          <div className="mt-12 md:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="rounded-xl p-3 md:p-4 bg-white border border-gray-200"
              >
                <div className="flex flex-col items-center text-center gap-1 md:gap-2">
                  <Skeleton className="w-8 h-8 md:w-12 md:h-12 rounded-full mb-0.5 md:mb-1" />
                  <Skeleton className="h-4 w-full rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section Skeleton */}
      <div className="pb-6 md:pt-1 md:pb-16 bg-gradient-to-b from-white to-[#F9F7F2]">
        <div className="max-w-[84rem] mx-auto px-4 md:px-12">
          <div className="text-center mb-2 md:mb-6">
            <Skeleton className="h-10 md:h-12 w-80 md:w-96 mx-auto mb-3 md:mb-4" />
            <Skeleton className="h-5 w-96 max-w-xl md:max-w-2xl mx-auto" />
          </div>

          <div className="overflow-hidden">
            <div className="flex gap-8 md:gap-10 py-8">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="w-[320px] md:w-[400px] bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-[#1A8781]/60 flex flex-col shrink-0"
                >
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Skeleton key={star} className="w-5 h-5 rounded" />
                    ))}
                  </div>
                  <div className="space-y-2 mb-6 md:mb-8">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-4/5" />
                  </div>
                  <div className="mt-auto pt-2 border-t border-gray-200">
                    <Skeleton className="h-5 w-32 mb-2" />
                    <Skeleton className="h-4 w-48" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Skeleton */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-[84rem] mx-auto px-4 md:px-12">
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

export default AboutSkeleton;
