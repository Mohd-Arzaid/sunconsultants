import React from "react";
import { Skeleton } from "./skeleton";

const FaqPageSkeleton = () => {
  return (
    <div className="bg-white">
      {/* Hero Section Skeleton */}
      <div className="bg-white pt-10">
        <div className="max-w-[88rem] mx-auto px-4 md:px-12">
          {/* Title Skeleton */}
          <Skeleton className="h-12 md:h-16 w-3/4 max-w-2xl mx-auto mb-4" />

          {/* Description Skeleton */}
          <div className="mt-3 max-w-3xl mx-auto space-y-2">
            <Skeleton className="h-5 md:h-6 w-full" />
            <Skeleton className="h-5 md:h-6 w-4/5 mx-auto" />
          </div>
        </div>
      </div>

      {/* FAQs Content Skeleton */}
      <div className="max-w-[88rem] mx-auto px-4 md:px-12 pt-6 md:pt-8 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction Skeleton */}
          <div className="mb-10 md:mb-12">
            <div className="space-y-2">
              <Skeleton className="h-5 md:h-6 w-full" />
              <Skeleton className="h-5 md:h-6 w-full" />
              <Skeleton className="h-5 md:h-6 w-3/4 mx-auto" />
            </div>
          </div>

          {/* Section Title Skeleton */}
          <div className="mb-6 md:mb-8">
            <Skeleton className="h-8 md:h-10 w-64" />
          </div>

          {/* FAQ Items Skeleton */}
          <div className="space-y-4">
            {[...Array(12)].map((_, index) => (
              <div
                key={index}
                className="bg-white border border-neutral-200 rounded-lg p-5 md:p-6"
              >
                <div className="flex items-start">
                  <Skeleton className="w-2 h-2 rounded-full mr-4 mt-3 shrink-0" />
                  <div className="flex-1">
                    <Skeleton className="h-5 md:h-6 w-full max-w-lg" />
                  </div>
                  <Skeleton className="w-5 h-5 shrink-0 mt-1 ml-4" />
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Skeleton */}
          <div className="text-center mt-12 md:mt-16 p-8 md:p-12 bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-lg border border-neutral-200">
            <Skeleton className="h-7 md:h-8 w-64 mx-auto mb-4" />
            <div className="space-y-2 mb-6">
              <Skeleton className="h-5 w-full max-w-2xl mx-auto" />
              <Skeleton className="h-5 w-4/5 max-w-xl mx-auto" />
            </div>
            <Skeleton className="h-11 w-44 mx-auto rounded-lg" />
          </div>
        </div>
      </div>

      {/* Footer Skeleton */}
      <footer>
        <div className="relative">
          <div className="w-full max-w-[768px] px-4 pb-12 pt-8 md:pt-10 md:pb-16 mx-auto">
            {/* Footer Title */}
            <Skeleton className="h-10 md:h-12 w-64 mx-auto mb-4" />

            {/* Footer Description */}
            <div className="space-y-2 mb-6 md:mb-8">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-5/6 mx-auto" />
            </div>

            {/* Divider */}
            <div className="flex items-center my-6 md:my-8">
              <div className="h-px w-full bg-neutral-300"></div>
              <Skeleton className="h-6 w-8 mx-4" />
              <div className="h-px w-full bg-neutral-300"></div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-6">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="w-7 h-7 rounded" />
              ))}
            </div>
          </div>
        </div>

        {/* Footer Main Section */}
        <div className="bg-neutral-100 pt-10 md:pt-16 pb-6">
          <div className="max-w-[88rem] mx-auto px-4 md:px-12">
            <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-0">
              {/* Company Section */}
              <div className="flex flex-col gap-6">
                <Skeleton className="h-12 w-48" />
                <div className="space-y-4">
                  <Skeleton className="h-5 w-48" />
                  <Skeleton className="h-9 w-64" />
                </div>
              </div>

              {/* Links Sections */}
              <div className="grid grid-cols-2 md:flex md:gap-12 gap-6">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex flex-col gap-4">
                    <Skeleton className="h-6 w-32" />
                    <div className="space-y-3">
                      {[...Array(4)].map((_, j) => (
                        <Skeleton key={j} className="h-4 w-28" />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-neutral-300 mt-8 pt-6">
              <div className="flex flex-col md:flex-row items-center gap-4 md:justify-between">
                <div className="flex gap-4">
                  {[...Array(3)].map((_, i) => (
                    <Skeleton key={i} className="w-6 h-6" />
                  ))}
                </div>
                <Skeleton className="h-9 w-32 rounded-full" />
                <Skeleton className="h-5 w-64" />
                <div className="flex items-center gap-4">
                  <Skeleton className="h-5 w-24" />
                  <Skeleton className="h-5 w-24" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FaqPageSkeleton;
