import React from "react";
import { Skeleton } from "./skeleton";

const OurServicesSkeleton = () => {
  return (
    <div className="bg-gradient-to-b from-[#F9F7F2] to-white pt-8 pb-8 sm:pt-12 md:pt-16">
      <div className="max-w-[84rem] mx-auto px-4 sm:px-6 md:px-12">
        {/* Heading Skeleton */}
        <div className="text-center mb-4 sm:mb-8">
          <Skeleton className="h-10 sm:h-12 md:h-14 w-64 mx-auto mb-3" />
          <Skeleton className="h-5 sm:h-6 md:h-7 w-96 max-w-xl mx-auto" />
        </div>

        {/* Desktop Carousel Skeleton - Hidden on mobile */}
        <div className="relative hidden md:block">
          {/* Arrow buttons skeleton */}
          <Skeleton className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-30 rounded-full w-[48px] h-[48px]" />
          <Skeleton className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-30 rounded-full w-[48px] h-[48px]" />

          {/* Main carousel container */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl h-[500px] bg-gradient-to-br from-[#1A8781]/5 to-[#1A8781]/20 border border-[#1A8781]/30">
            <div className="flex items-center h-full p-12">
              <div className="grid grid-cols-2 gap-12 items-center h-full w-full">
                {/* Left Side Skeleton */}
                <div className="flex flex-col gap-6">
                  <Skeleton className="w-24 h-24 rounded-2xl" />
                  <Skeleton className="h-12 w-full max-w-lg" />
                  <Skeleton className="h-6 w-full max-w-lg" />
                  <Skeleton className="h-6 w-3/4 max-w-lg" />
                  <Skeleton className="h-12 w-40 rounded-full mt-2" />
                </div>

                {/* Right Side Skeleton */}
                <div className="relative">
                  <div className="hidden md:block absolute -top-10 -left-10 w-40 h-40 bg-[#1A8781]/10 rounded-full"></div>
                  <div className="hidden md:block absolute -bottom-10 -right-10 w-60 h-60 bg-[#1A8781]/15 rounded-full"></div>
                  <Skeleton className="bg-white/90 rounded-2xl p-8 shadow-xl border border-[#1A8781]/20 relative z-10 h-[350px] w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicators Skeleton - Hidden on mobile */}
        <div className="hidden md:flex justify-center mt-8 gap-3">
          {Array.from({ length: 8 }).map((_, idx) => (
            <Skeleton
              key={idx}
              className={`h-3 rounded-full ${idx === 0 ? "w-10" : "w-3"}`}
            />
          ))}
        </div>

        {/* Service thumbnails skeleton */}
        <div className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 min-h-[120px] md:min-h-[140px]">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="rounded-xl p-3 md:p-4 border bg-white border-gray-200"
            >
              <div className="flex flex-col items-center text-center gap-1 md:gap-2">
                <Skeleton className="w-8 h-8 md:w-12 md:h-12 rounded-full mb-1" />
                <Skeleton className="h-4 md:h-5 w-full" />
                <Skeleton className="h-3 md:h-4 w-3/4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServicesSkeleton;
