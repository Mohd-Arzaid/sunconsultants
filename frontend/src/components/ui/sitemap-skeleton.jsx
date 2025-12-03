import { Skeleton } from "./skeleton";

const SitemapSkeleton = () => {
  return (
    <div className="bg-white">
      {/* Hero Section Skeleton */}
      <div className="bg-white pt-10">
        <div className="max-w-[88rem] mx-auto px-4 md:px-12">
          <Skeleton className="h-12 md:h-14 w-48 md:w-64 mx-auto mb-3" />
          <div className="mt-3 max-w-2xl mx-auto space-y-2">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-5/6 mx-auto" />
          </div>

          {/* Search Bar Skeleton */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="relative">
              <Skeleton className="w-full h-12 rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Sitemap Content Skeleton */}
      <div className="max-w-[88rem] mx-auto px-4 md:px-12 pt-10 md:pt-10 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-white rounded-lg shadow-md border border-black/40 flex flex-col h-[500px]"
            >
              {/* Section Header Skeleton */}
              <div className="p-6 pb-4 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-7 md:h-8 w-32 md:w-40" />
                  <Skeleton className="h-6 w-12 rounded-full" />
                </div>
              </div>

              {/* Section Content Skeleton */}
              <div className="flex-1 overflow-hidden">
                <div className="h-full overflow-y-auto p-6 pt-4">
                  <ul className="space-y-3">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((pageItem) => (
                      <li key={pageItem}>
                        <div className="flex items-start group">
                          <Skeleton className="w-2 h-2 rounded-full mr-4 mt-2 shrink-0" />
                          <Skeleton className="h-5 flex-1" />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Skeleton */}
      <footer>
        <div className="relative">
          <div className="w-full max-w-[768px] px-4 pb-12 pt-8 md:pt-10 md:pb-16 mx-auto">
            <Skeleton className="h-10 md:h-12 w-64 md:w-80 mx-auto" />
            <div className="text-center mt-[16px] space-y-2">
              <Skeleton className="h-5 w-full max-w-2xl mx-auto" />
              <Skeleton className="h-5 w-4/5 max-w-xl mx-auto" />
            </div>

            <div className="flex items-center my-6 md:my-[30px]">
              <div className="h-px w-full bg-neutral-300 grow"></div>
              <Skeleton className="h-5 w-8 mx-4" />
              <div className="h-px w-full bg-neutral-300 grow"></div>
            </div>

            <div className="flex justify-center w-full">
              <div className="flex gap-6">
                {[1, 2, 3].map((item) => (
                  <Skeleton key={item} className="w-7 h-7 rounded" />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#b9deeb] pt-10 md:pt-16 pb-6">
          <div className="max-w-[88rem] mx-auto px-4 md:px-12">
            {/* Main Footer Content Skeleton */}
            <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-0 md:h-[360px]">
              {/* Company Logo Section */}
              <div className="flex flex-col gap-[20px] md:gap-[25px]">
                <div className="flex md:space-x-2.5">
                  <Skeleton className="hidden md:block w-12 h-12 rounded" />
                  <div className="space-y-2">
                    <Skeleton className="h-6 w-48" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                </div>
                <div className="flex flex-col gap-[15px]">
                  <Skeleton className="h-5 w-48" />
                  <div className="relative">
                    <Skeleton className="w-full h-9 rounded" />
                  </div>
                </div>
              </div>

              {/* Footer Links Grid */}
              <div className="grid grid-cols-2 md:flex md:gap-[50px] gap-6">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex flex-col gap-[15px]">
                    <Skeleton className="h-6 w-32" />
                    <div className="flex flex-col gap-[10px]">
                      {[1, 2, 3, 4, 5].map((link) => (
                        <Skeleton key={link} className="h-4 w-24" />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Bar Skeleton */}
            <div className="border border-[#7eafd9] mt-8 md:mt-0"></div>
            <div className="flex flex-col md:flex-row items-center mt-6 md:mt-4 mb-4 gap-4 md:gap-0 md:justify-between">
              <div className="flex gap-3">
                {[1, 2, 3].map((item) => (
                  <Skeleton
                    key={item}
                    className="w-6 h-6 md:w-8 md:h-8 rounded"
                  />
                ))}
              </div>
              <Skeleton className="h-9 w-32 rounded-full" />
              <Skeleton className="h-5 w-64" />
              <div className="hidden md:block">
                <Skeleton className="h-2 w-2 rounded-full" />
              </div>
              <Skeleton className="hidden md:block h-5 w-32" />
              <div className="hidden md:block">
                <Skeleton className="h-2 w-2 rounded-full" />
              </div>
              <Skeleton className="hidden md:block h-5 w-40" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SitemapSkeleton;
