import { Skeleton } from "./skeleton";

const PrivacyPolicySkeleton = () => {
  return (
    <div className="bg-white">
      {/* Hero Section Skeleton */}
      <div className="bg-white pt-10">
        <div className="max-w-[88rem] mx-auto px-4 md:px-12">
          <Skeleton className="h-12 md:h-14 w-64 md:w-80 mx-auto mb-3" />
          <div className="mt-3 max-w-3xl mx-auto space-y-2">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-5/6 mx-auto" />
          </div>
          <div className="mt-6 text-center">
            <Skeleton className="h-8 w-48 mx-auto rounded-full" />
          </div>
        </div>
      </div>

      {/* Privacy Policy Content Skeleton */}
      <div className="max-w-[88rem] mx-auto px-4 md:px-12 pt-10 md:pt-12 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction Skeleton */}
          <div className="mb-10 md:mb-12">
            <div className="space-y-2">
              <Skeleton className="h-5 md:h-6 w-full" />
              <Skeleton className="h-5 md:h-6 w-4/5" />
            </div>
          </div>

          {/* Section 1: Information We Collect Skeleton */}
          <div className="mb-10 md:mb-12">
            <Skeleton className="h-8 md:h-10 w-80 md:w-96 mb-6 md:mb-8" />
            <Skeleton className="h-5 w-48 mb-4" />
            <ul className="space-y-3 ml-4 md:ml-6">
              {[1, 2, 3, 4].map((item) => (
                <li key={item} className="flex items-start">
                  <Skeleton className="w-2 h-2 rounded-full mr-3 mt-3 shrink-0" />
                  <Skeleton className="h-5 flex-1" />
                </li>
              ))}
            </ul>
          </div>

          {/* Section 2: How We Use This Information Skeleton */}
          <div className="mb-10 md:mb-12">
            <Skeleton className="h-8 md:h-10 w-96 md:w-[28rem] mb-6 md:mb-8" />
            <ul className="space-y-3 ml-4 md:ml-6">
              {[1, 2, 3, 4].map((item) => (
                <li key={item} className="flex items-start">
                  <Skeleton className="w-2 h-2 rounded-full mr-3 mt-3 shrink-0" />
                  <Skeleton className="h-5 flex-1" />
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Sharing of Data Skeleton */}
          <div className="mb-10 md:mb-12">
            <Skeleton className="h-8 md:h-10 w-64 md:w-80 mb-6 md:mb-8" />
            <div className="space-y-2 mb-4">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-4/5" />
            </div>
            <ul className="space-y-3 ml-4 md:ml-6">
              {[1, 2].map((item) => (
                <li key={item} className="flex items-start">
                  <Skeleton className="w-2 h-2 rounded-full mr-3 mt-3 shrink-0" />
                  <Skeleton className="h-5 flex-1" />
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Data Security Skeleton */}
          <div className="mb-10 md:mb-12">
            <Skeleton className="h-8 md:h-10 w-64 md:w-80 mb-6 md:mb-8" />
            <div className="space-y-2">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-4/5" />
            </div>
          </div>

          {/* Section 5: Cookies Skeleton */}
          <div className="mb-10 md:mb-12">
            <Skeleton className="h-8 md:h-10 w-48 md:w-64 mb-6 md:mb-8" />
            <div className="space-y-2">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-5/6" />
            </div>
          </div>

          {/* Section 6: Your Rights Skeleton */}
          <div className="mb-10 md:mb-12">
            <Skeleton className="h-8 md:h-10 w-56 md:w-72 mb-6 md:mb-8" />
            <Skeleton className="h-5 w-48 mb-4" />
            <ul className="space-y-3 ml-4 md:ml-6">
              {[1, 2].map((item) => (
                <li key={item} className="flex items-start">
                  <Skeleton className="w-2 h-2 rounded-full mr-3 mt-3 shrink-0" />
                  <Skeleton className="h-5 flex-1" />
                </li>
              ))}
            </ul>
          </div>

          {/* Section 7: Contact Us Skeleton */}
          <div className="mb-10 md:mb-12">
            <Skeleton className="h-8 md:h-10 w-56 md:w-72 mb-6 md:mb-8" />
            <div className="bg-neutral-50 rounded-lg p-6 md:p-8 border border-neutral-200">
              <div className="space-y-4">
                <div className="flex items-start">
                  <Skeleton className="h-5 w-20" />
                  <Skeleton className="h-5 w-64 ml-4" />
                </div>
                <div className="flex items-start">
                  <Skeleton className="h-5 w-20" />
                  <Skeleton className="h-5 w-40 ml-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Skeleton */}
          <div className="text-center mt-12 md:mt-16 p-8 md:p-12 bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-lg border border-neutral-200">
            <Skeleton className="h-7 md:h-8 w-80 md:w-96 mx-auto mb-4" />
            <div className="space-y-2 mb-6">
              <Skeleton className="h-5 w-full max-w-2xl mx-auto" />
              <Skeleton className="h-5 w-4/5 max-w-xl mx-auto" />
            </div>
            <Skeleton className="h-12 w-48 mx-auto rounded-lg" />
          </div>
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

export default PrivacyPolicySkeleton;
