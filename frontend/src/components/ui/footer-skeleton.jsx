import { Skeleton } from "./skeleton";

const FooterSkeleton = () => {
  return (
    <footer>
      {/* Top Section Skeleton */}
      <div className="relative">
        <div className="w-full max-w-[768px] px-4 pb-12 pt-8 md:pt-16 md:pb-16 mx-auto">
          {/* Main Heading Skeleton */}
          <Skeleton className="h-12 md:h-[48px] w-64 md:w-80 mx-auto mb-4" />

          {/* Email Text Skeleton */}
          <div className="space-y-2 mb-6">
            <Skeleton className="h-5 md:h-6 w-full max-w-md mx-auto" />
            <Skeleton className="h-5 md:h-6 w-3/4 max-w-sm mx-auto" />
          </div>

          {/* Separator Skeleton */}
          <div className="flex items-center my-6 md:my-[30px]">
            <Skeleton className="h-px w-full grow" />
            <Skeleton className="h-5 w-8 mx-4" />
            <Skeleton className="h-px w-full grow" />
          </div>

          {/* Social Icons Skeleton */}
          <div className="flex justify-center w-full">
            <div className="flex gap-6 items-center justify-center">
              <Skeleton className="h-7 w-7 rounded-full" />
              <Skeleton className="h-7 w-7 rounded-full" />
              <Skeleton className="h-7 w-7 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section Skeleton */}
      <div className="bg-[#b9deeb] pt-10 md:pt-16 pb-6">
        <div className="max-w-[88rem] mx-auto px-4 md:px-12">
          {/* Main Footer Content Skeleton */}
          <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-0 md:h-[360px]">
            {/* Company Logo & Newsletter Section Skeleton */}
            <div className="flex flex-col gap-[20px] md:gap-[25px]">
              {/* Logo Skeleton */}
              <div className="flex md:space-x-2.5 items-center">
                <Skeleton className="hidden md:block w-12 h-12 rounded" />
                <div className="flex flex-col gap-2">
                  <Skeleton className="h-5 w-48 md:w-56" />
                  <Skeleton className="h-3 w-32 md:w-40" />
                </div>
              </div>

              {/* Newsletter Section Skeleton */}
              <div className="flex flex-col gap-[15px]">
                <Skeleton className="h-5 md:h-6 w-48 md:w-56" />
                <div className="relative">
                  <Skeleton className="w-full h-9 rounded" />
                </div>
              </div>
            </div>

            {/* Links Grid Skeleton */}
            <div className="grid grid-cols-2 md:flex md:gap-[50px] gap-6">
              {/* Address Column Skeleton */}
              <div className="flex w-full md:w-[240px] flex-col gap-[15px]">
                <Skeleton className="h-5 md:h-6 w-20 md:w-24" />
                <div className="flex flex-col gap-[10px]">
                  <Skeleton className="h-4 md:h-5 w-full" />
                  <Skeleton className="h-4 md:h-5 w-3/4" />
                </div>
              </div>

              {/* Our Services Column Skeleton */}
              <div className="flex flex-col gap-[15px]">
                <Skeleton className="h-5 md:h-6 w-28 md:w-32" />
                <div className="flex flex-col gap-[10px]">
                  <Skeleton className="h-4 md:h-5 w-16" />
                  <Skeleton className="h-4 md:h-5 w-20" />
                  <Skeleton className="h-4 md:h-5 w-24" />
                  <Skeleton className="h-4 md:h-5 w-12" />
                  <Skeleton className="h-4 md:h-5 w-16" />
                  <Skeleton className="h-4 md:h-5 w-10" />
                </div>
              </div>

              {/* Company Column Skeleton */}
              <div className="flex flex-col gap-[15px]">
                <Skeleton className="h-5 md:h-6 w-20 md:w-24" />
                <div className="flex flex-col gap-[10px]">
                  <Skeleton className="h-4 md:h-5 w-16" />
                  <Skeleton className="h-4 md:h-5 w-24" />
                  <Skeleton className="h-4 md:h-5 w-16" />
                  <Skeleton className="h-4 md:h-5 w-20" />
                </div>
              </div>

              {/* News & Notifications Column Skeleton */}
              <div className="flex flex-col gap-[15px]">
                <Skeleton className="h-5 md:h-6 w-36 md:w-40" />
                <div className="flex flex-col gap-[10px]">
                  <Skeleton className="h-4 md:h-5 w-16" />
                  <Skeleton className="h-4 md:h-5 w-28" />
                  <Skeleton className="h-4 md:h-5 w-32" />
                  <Skeleton className="h-4 md:h-5 w-28" />
                  <Skeleton className="h-4 md:h-5 w-20" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar Skeleton */}
          <Skeleton className="h-px w-full mt-8 md:mt-0" />

          {/* Bottom Links & Copyright Skeleton */}
          <div className="flex flex-col md:flex-row items-center mt-6 md:mt-4 mb-4 gap-4 md:gap-0 md:justify-between">
            {/* Social Icons Skeleton */}
            <div className="flex gap-3 items-center justify-center">
              <Skeleton className="h-6 w-6 md:h-8 md:w-8 rounded" />
              <Skeleton className="h-6 w-6 md:h-8 md:w-8 rounded" />
              <Skeleton className="h-6 w-6 md:h-8 md:w-8 rounded" />
            </div>

            {/* Language Selector Skeleton */}
            <Skeleton className="h-9 w-32 md:w-36 rounded-full" />

            {/* Copyright Skeleton */}
            <Skeleton className="h-5 w-64 md:w-80" />

            {/* Legal Links Skeleton (Mobile) */}
            <div className="md:hidden flex items-center gap-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-1.5 w-1.5 rounded-full" />
              <Skeleton className="h-4 w-28" />
            </div>

            {/* Legal Links Skeleton (Desktop) */}
            <div className="hidden md:flex items-center gap-2">
              <Skeleton className="h-2 w-2 rounded-full" />
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-2 w-2 rounded-full" />
              <Skeleton className="h-4 w-32" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSkeleton;
