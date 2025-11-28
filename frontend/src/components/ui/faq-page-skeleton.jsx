import React from "react";
import { Skeleton } from "./skeleton";

const FaqPageSkeleton = () => {
  return (
    <div className="relative w-full bg-white">
      {/* Breadcrumb Skeleton */}
      <div className="absolute md:top-5 top-3 left-0 w-full z-30">
        <div className="max-w-[80rem] mx-auto px-4">
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-4 rounded-full" />
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-4 rounded-full" />
            <Skeleton className="h-4 w-48" />
          </div>
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side Content Skeleton */}
          <div className="flex-1 pt-2 px-2 -mt-2 -mx-2 md:sticky md:top-[128px] md:self-start">
            <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
              {/* Title Skeleton */}
              <Skeleton className="h-7 md:h-8 w-3/4 mb-4" />

              {/* Image Skeleton */}
              <Skeleton className="w-full h-48 md:h-64 mb-4 rounded-lg" />

              {/* Paragraph Skeletons */}
              <div className="space-y-4 mb-4">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-5/6" />
              </div>

              <div className="space-y-4 mb-4">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-4/5" />
              </div>

              <div className="space-y-4 mb-4">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-3/4" />
              </div>

              <div className="space-y-4 mb-4">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-2/3" />
              </div>

              <div className="space-y-4 mb-4">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-4/5" />
              </div>

              {/* Service Author Section Skeleton */}
              <div className="relative overflow-hidden bg-gradient-to-br from-[#F9F7F2] via-white to-[#F9F7F2] border border-gray-200 rounded-xl p-6 md:p-8 mt-6">
                <Skeleton className="h-6 w-40 mb-3" />
                <div className="space-y-3">
                  <Skeleton className="h-6 w-48" />
                  <Skeleton className="h-5 w-64" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
                  <Skeleton className="h-16 w-full rounded-lg" />
                  <Skeleton className="h-16 w-full rounded-lg" />
                </div>
                <div className="flex flex-col sm:flex-row gap-2 pt-2">
                  <Skeleton className="h-12 w-full sm:w-1/2 rounded-lg" />
                  <Skeleton className="h-12 w-full sm:w-1/2 rounded-lg" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Content Skeleton */}
          <div className="flex flex-col gap-6 w-full md:w-[360px]">
            {/* BIS QCO Updates Skeleton */}
            <div className="w-full md:w-[360px] p-6 rounded-lg bg-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
              <div className="flex gap-2 items-center mb-5">
                <Skeleton className="h-5 w-5" />
                <Skeleton className="h-6 w-40" />
              </div>
              <div className="relative h-[400px] overflow-hidden">
                <div className="space-y-5">
                  {[...Array(5)].map((_, index) => (
                    <div key={index} className="flex gap-4">
                      <Skeleton className="h-20 w-20 flex-shrink-0 rounded-md" />
                      <div className="flex-1 flex flex-col justify-between h-20 py-1">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-4 w-20 mt-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Skeleton className="h-10 w-full rounded-lg mt-5" />
            </div>

            {/* Client Testimonials Skeleton */}
            <div className="w-full md:w-[360px] rounded-lg overflow-hidden bg-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
              <div className="pt-6 px-6 pb-4">
                <div className="flex gap-2 items-center mb-8">
                  <Skeleton className="h-5 w-5" />
                  <Skeleton className="h-6 w-48" />
                </div>
                <div className="rounded-lg h-[450px] overflow-hidden">
                  <div className="space-y-6">
                    {[...Array(3)].map((_, index) => (
                      <div
                        key={index}
                        className="bg-white p-4 rounded-lg border border-gray-300"
                      >
                        <Skeleton className="h-5 w-32 mb-2" />
                        <Skeleton className="h-4 w-48 mb-3" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-5/6 mt-2" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us Skeleton */}
            <div className="w-full md:w-[360px] p-5 rounded-lg bg-gradient-to-br from-slate-50 to-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
              <div className="flex gap-2 items-center mb-4">
                <Skeleton className="h-5 w-5" />
                <Skeleton className="h-6 w-36" />
              </div>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-white p-2 rounded-lg border border-gray-200"
                  >
                    <Skeleton className="h-7 w-16 mx-auto mb-2" />
                    <Skeleton className="h-3 w-20 mx-auto" />
                  </div>
                ))}
              </div>
              <div className="space-y-3 mb-4">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg p-3 border border-gray-200"
                  >
                    <div className="flex gap-3 items-start">
                      <Skeleton className="h-8 w-8 rounded-lg" />
                      <div className="flex-1">
                        <Skeleton className="h-4 w-32 mb-2" />
                        <Skeleton className="h-3 w-full" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                <Skeleton className="h-4 w-32 mb-2" />
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="text-center">
                      <Skeleton className="h-1.5 w-full rounded-full mb-1" />
                      <Skeleton className="h-3 w-16 mx-auto" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form Skeleton */}
            <div className="w-full md:w-[360px] md:sticky md:top-[128px] md:self-start p-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
              <div className="flex gap-2 items-center mb-3">
                <Skeleton className="h-5 w-5" />
                <Skeleton className="h-6 w-48" />
              </div>
              <Skeleton className="h-4 w-full mb-5" />
              <div className="space-y-4">
                {[...Array(4)].map((_, i) => (
                  <Skeleton key={i} className="h-10 w-full rounded-lg" />
                ))}
              </div>
              <Skeleton className="h-10 w-full rounded-lg mt-5" />
              <div className="space-y-1 mt-3">
                <Skeleton className="h-3 w-full rounded" />
                <Skeleton className="h-3 w-3/4 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section Skeleton */}
      <div className="pt-6 md:pt-8 pb-12 md:pb-16 overflow-x-hidden">
        <div className="max-w-[80rem] w-full mx-auto">
          <div className="flex flex-col items-center justify-center mb-16 md:mb-24">
            <Skeleton className="h-12 md:h-14 w-64 md:w-80 mb-4" />
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Skeleton className="h-[2px] w-[94.46px]" />
              <Skeleton className="h-5 w-64" />
              <Skeleton className="h-[2px] w-[94.46px]" />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 md:gap-x-10 px-4 md:px-0 gap-y-12 md:gap-y-24">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
              >
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                  <Skeleton className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full" />
                </div>
                <Skeleton className="h-4 md:h-5 w-full mt-8 md:mt-28 px-3 md:px-0 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Section Skeleton */}
      <div className="max-w-full mx-auto px-4 py-8 md:px-12 md:pt-16 md:pb-2 bg-white overflow-hidden">
        <Skeleton className="h-10 md:h-14 w-64 mx-auto mb-10" />
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-6 py-4">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg p-4 bg-white w-[350px] md:w-[400px] lg:w-[450px] shrink-0"
              >
                <Skeleton className="w-full aspect-video rounded-lg mb-4" />
                <Skeleton className="h-5 w-full mb-2" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Skeleton */}
      <footer>
        <div className="relative">
          <div className="w-full max-w-[768px] px-4 pb-12 pt-8 md:pt-16 md:pb-16 mx-auto">
            <Skeleton className="h-10 md:h-12 w-64 mx-auto mb-4" />
            <div className="space-y-2 mb-6 md:mb-8">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-5/6 mx-auto" />
            </div>
            <div className="flex items-center my-6 md:my-[30px]">
              <div className="h-px w-full bg-neutral-300 grow"></div>
              <Skeleton className="h-6 w-8 mx-4" />
              <div className="h-px w-full bg-neutral-300 grow"></div>
            </div>
            <div className="flex justify-center gap-6">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="w-7 h-7 rounded" />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#b9deeb] pt-10 md:pt-16 pb-6">
          <div className="max-w-[88rem] mx-auto px-4 md:px-12">
            <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-0 md:h-[360px]">
              <div className="flex flex-col gap-[20px] md:gap-[25px]">
                <Skeleton className="h-12 w-48" />
                <div className="space-y-4">
                  <Skeleton className="h-5 w-48" />
                  <Skeleton className="h-9 w-64" />
                </div>
              </div>
              <div className="grid grid-cols-2 md:flex md:gap-[50px] gap-6">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex flex-col gap-[15px]">
                    <Skeleton className="h-6 w-32" />
                    <div className="space-y-[10px]">
                      {[...Array(4)].map((_, j) => (
                        <Skeleton key={j} className="h-4 w-28" />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-[#7eafd9] mt-8 md:mt-0"></div>
            <div className="flex flex-col md:flex-row items-center mt-6 md:mt-4 mb-4 gap-4 md:gap-0 md:justify-between">
              <div className="flex gap-3">
                {[...Array(3)].map((_, i) => (
                  <Skeleton key={i} className="w-6 h-6" />
                ))}
              </div>
              <Skeleton className="h-9 w-32 rounded-full" />
              <Skeleton className="h-5 w-64" />
              <div className="flex items-center gap-2">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-5 w-24" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FaqPageSkeleton;
